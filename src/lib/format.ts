import type { Locale } from "../content";

/**
 * Dates live in the content files as ISO "YYYY-MM" strings. Everything that
 * turns them into something a person reads goes through this module, so the
 * two language editions cannot format the same period differently.
 *
 * `Intl` is deliberately avoided: its Chinese output ("2021年7月") is more
 * verbose than a resume wants, and its behaviour varies between runtimes.
 */

/** "2021-07" stays as-is in Chinese; English gets "07/2021". */
function formatMonth(value: string, locale: Locale): string {
  if (locale === "zh-CN") {
    return value;
  }
  const [year, month] = value.split("-");
  return `${month}/${year}`;
}

/** Renders a period the way each locale writes date ranges. */
export function formatPeriod(
  period: { start: string; end: string | null },
  locale: Locale,
): string {
  const start = formatMonth(period.start, locale);
  let end: string;
  if (period.end) {
    end = formatMonth(period.end, locale);
  } else {
    end = locale === "zh-CN" ? "至今" : "present";
  }
  return locale === "zh-CN" ? `${start} ~ ${end}` : `${start} - ${end}`;
}

/** A machine-readable form for `<time dateTime="...">`. */
export function periodDateTime(period: {
  start: string;
  end: string | null;
}): string {
  return period.end ? `${period.start}/${period.end}` : period.start;
}
