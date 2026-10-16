/**
 * Renders both language editions of the resume through the browser's print
 * pipeline: it starts a dev server, prints each edition to PDF, counts the
 * sheets, and — with `--write` — saves the result into `public/`.
 *
 *   node scripts/print-pages.mjs           # fail if an edition is over 2 sheets
 *   node scripts/print-pages.mjs --write   # regenerate public/resume-<locale>.pdf
 *
 * Both modes start their own dev server, so nothing needs to be listening first.
 * Each mode has its own port (check 5199, write 5198) and `PRINT_PORT` overrides
 * it, so a check and a regeneration can still run at the same time.
 *
 * Every edition is rendered and counted before anything is written, so an
 * edition that grew past two sheets stops the run without leaving one fresh PDF
 * and one stale one behind.
 *
 * The sheet count can only come from the real pipeline. Page breaks, orphans and
 * widows change it in ways that measuring elements cannot predict, and the
 * committed PDFs are exactly what visitors download. The PDFs are committed on
 * purpose: a deploy is then a static asset, with no headless browser in the
 * build image.
 */
import { spawn } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { setTimeout as delay } from "node:timers/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "@playwright/test";

/** A4 at 96dpi. A narrower viewport reflows the copy and misreports the count. */
const SHEET_WIDTH_PX = 794;
const SHEET_HEIGHT_PX = 1123;

/** Both editions, in the order they are reported. */
const LOCALES = ["zh-CN", "en-US"];

const CHECK_PORT = 5199;
const WRITE_PORT = 5198;

const MAX_SHEETS = 2;
const LOCALE_STORAGE_KEY = "resume-locale";
const STARTUP_TIMEOUT_MS = 60_000;

const write = process.argv.includes("--write");
/** Separate ports so `check:print` and `build:pdf` can run side by side. */
const PORT = Number(
  process.env.PRINT_PORT ?? (write ? WRITE_PORT : CHECK_PORT),
);
const OUTPUT_DIR = fileURLToPath(new URL("../public/", import.meta.url));

/**
 * Starts Vite on the given port and resolves once it answers on HTTP. Exits with
 * the dev server's own output when it cannot: `--strictPort` means a busy port
 * kills Vite, and that line is the only useful clue.
 */
async function startDevServer(port) {
  const server = spawn(
    "pnpm",
    ["dev", "--port", String(port), "--strictPort", "--host", "127.0.0.1"],
    { stdio: ["ignore", "pipe", "pipe"] },
  );

  let output = "";
  const collect = (chunk) => {
    output = `${output}${chunk}`.slice(-1000);
  };
  server.stdout.on("data", collect);
  server.stderr.on("data", collect);

  const deadline = Date.now() + STARTUP_TIMEOUT_MS;

  function giveUp(reason) {
    server.kill();
    throw new Error(`${reason}\n${output.trim()}`);
  }

  async function waitForServer() {
    if (server.exitCode !== null || server.signalCode !== null) {
      giveUp(`Vite exited before it served port ${port}`);
    }
    if (Date.now() > deadline) {
      giveUp(`Vite did not serve port ${port} within 60s`);
    }
    try {
      // Asking for a Vite-only path, not just `/`: another process already
      // listening on this port would answer the root request and be mistaken
      // for the dev server we just started.
      const response = await fetch(`http://127.0.0.1:${port}/@vite/client`);
      if (response.ok) {
        return server;
      }
    } catch {
      // Not listening yet.
    }
    await delay(300);
    return await waitForServer();
  }

  return await waitForServer();
}

/** Opens one edition in its own context, under print media. */
async function openPrintedPage(browser, port, locale) {
  // A fresh context per edition: they share a browser but keep separate storage,
  // so the language set below cannot leak between them.
  const context = await browser.newContext({
    viewport: { height: SHEET_HEIGHT_PX, width: SHEET_WIDTH_PX },
  });
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: "networkidle" });
  await page.evaluate(
    ([key, value]) => localStorage.setItem(key, value),
    [LOCALE_STORAGE_KEY, locale],
  );
  await page.reload({ waitUntil: "networkidle" });
  // The app writes the locale code to <html lang>. A mismatch means the storage
  // key above no longer reaches the app, and whatever gets measured next is the
  // wrong language under the right file name.
  const activeLocale = await page.evaluate(() => document.documentElement.lang);
  if (activeLocale !== locale) {
    throw new Error(`page reports ${activeLocale} after asking for ${locale}`);
  }
  await page.emulateMedia({ media: "print" });
  await page.waitForFunction(() => document.fonts.status === "loaded");
  return { context, page };
}

/**
 * Renders the page to PDF. No explicit height or width: passing them pins the
 * page box and scales the content into it, so the sheet count would stay 2 no
 * matter how long the resume grows. The browser's own pagination is the signal.
 */
async function renderPdf(page) {
  return await page.pdf({ format: "A4", printBackground: true });
}

function countSheets(pdf) {
  const sheets = [...pdf.toString("latin1").matchAll(/\/Type\s*\/Page[^s]/g)]
    .length;
  // Zero means the pattern stopped matching the PDF, not that the file has no
  // pages. Reported as a count, it would let the two-sheet limit pass on every
  // render without anyone noticing.
  if (sheets === 0) {
    throw new Error(
      "no /Type /Page objects found in the rendered PDF; the page counter no longer matches",
    );
  }
  return sheets;
}

/** Renders one edition and returns its PDF and sheet count. */
async function renderLocale(browser, locale) {
  const { context, page } = await openPrintedPage(browser, PORT, locale);
  try {
    const pdf = await renderPdf(page);
    return { locale, pdf, sheets: countSheets(pdf) };
  } finally {
    await context.close();
  }
}

async function main() {
  const server = await startDevServer(PORT);
  const browser = await chromium.launch();

  try {
    const results = await Promise.all(
      LOCALES.map(async (locale) => await renderLocale(browser, locale)),
    );
    const over = results.filter(({ sheets }) => sheets > MAX_SHEETS);

    // A failure is reported in both modes; the all-clear only in check mode,
    // where it is the entire output.
    if (!write || over.length > 0) {
      for (const { locale, sheets } of results) {
        const verdict = sheets > MAX_SHEETS ? "FAIL" : "ok";
        process.stdout.write(
          `${verdict.padEnd(5)} ${locale}: ${sheets} sheets\n`,
        );
      }
    }

    if (over.length > 0) {
      const failures = over.map(
        ({ locale, sheets }) =>
          `${locale} renders to ${sheets} sheets (limit ${MAX_SHEETS})`,
      );
      process.stderr.write(
        `\n${failures.join("\n")}\n${write ? "Nothing was written. " : ""}Shorten the copy or tighten the print spacing.\n`,
      );
      process.exitCode = 1;
      return;
    }

    if (!write) {
      return;
    }

    await mkdir(OUTPUT_DIR, { recursive: true });
    const written = await Promise.all(
      results.map(async ({ locale, pdf, sheets }) => {
        const file = `${OUTPUT_DIR}resume-${locale}.pdf`;
        await writeFile(file, pdf);
        return `wrote ${file} (${locale}, ${sheets} sheets)`;
      }),
    );
    for (const line of written) {
      process.stdout.write(`${line}\n`);
    }
  } finally {
    await browser.close();
    server.kill();
  }
}

await main();
