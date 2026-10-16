import {
  Button,
  buttonVariants,
  Dropdown,
  Label,
  Link,
  Tooltip,
} from "@heroui/react";
import { type ReactNode, useCallback } from "react";
import { type Locale, locales, type Resume } from "../content";
import {
  IconHeroiconsArrowDownTray,
  IconHeroiconsArrowTopRightOnSquare,
  IconHeroiconsComputerDesktop,
  IconHeroiconsLanguage,
  IconHeroiconsMoon,
  IconHeroiconsPrinter,
  IconHeroiconsSun,
} from "../lib/icons";
import type { ThemePreference } from "../lib/use-theme";

interface HeaderProps {
  labels: Resume["controls"];
  locale: Locale;
  name: string;
  onLocaleChange: (next: Locale) => void;
  onThemeChange: (next: ThemePreference) => void;
  sourceUrl: string;
  themePreference: ThemePreference;
  title: string;
}

/**
 * One action in the toolbar with its label in a tooltip. The icons carry no
 * text, so the label is the only thing telling a visitor what a button does.
 *
 * The control itself is the tooltip trigger, not a wrapper around it: HeroUI's
 * `Tooltip` hands React Aria's trigger props to the next focusable child, so
 * the label also reaches screen readers as a description and the toolbar keeps
 * one tab stop per action. `Tooltip.Trigger` would put a focusable `div` in
 * front of every button instead.
 */
function ToolbarAction({
  children,
  label,
}: {
  children: ReactNode;
  label: string;
}) {
  return (
    <Tooltip delay={150}>
      {children}
      <Tooltip.Content>{label}</Tooltip.Content>
    </Tooltip>
  );
}

/**
 * The two preferences a visitor might change (language, theme), plus the PDF
 * action and a link to the source. Kept to a thin bar so it never competes
 * with the resume, and removed entirely on paper.
 */
export function Header({
  locale,
  onLocaleChange,
  themePreference,
  onThemeChange,
  labels,
  sourceUrl,
  name,
  title,
}: HeaderProps) {
  // Every option is labelled in both languages so the menus stay readable
  // whichever edition is currently displayed.
  const themeOptions: {
    value: ThemePreference;
    icon: typeof IconHeroiconsSun;
    label: string;
  }[] = [
    {
      icon: IconHeroiconsComputerDesktop,
      label: locale === "zh-CN" ? "跟随系统" : "Follow system",
      value: "system",
    },
    {
      icon: IconHeroiconsSun,
      label: locale === "zh-CN" ? "浅色" : "Light",
      value: "light",
    },
    {
      icon: IconHeroiconsMoon,
      label: locale === "zh-CN" ? "深色" : "Dark",
      value: "dark",
    },
  ];

  const activeTheme =
    themeOptions.find((option) => option.value === themePreference) ??
    themeOptions[0];

  const handleLocaleChange = useCallback(
    (keys: Iterable<unknown>) => {
      const [next] = [...keys];
      if (next === "zh-CN" || next === "en-US") {
        onLocaleChange(next);
      }
    },
    [onLocaleChange],
  );

  const handleThemeChange = useCallback(
    (keys: Iterable<unknown>) => {
      const [next] = [...keys];
      if (next === "system" || next === "light" || next === "dark") {
        onThemeChange(next);
      }
    },
    [onThemeChange],
  );

  const handleOpenSource = useCallback(() => {
    window.open(sourceUrl, "_blank", "noopener");
  }, [sourceUrl]);

  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  // Dev prints from the live page, so a copy tweak is visible in the PDF
  // immediately. Production links to the PDF `pnpm build:pdf` generated from
  // this same page, because a visitor's browser cannot render one on demand.
  const pdfHref = `${import.meta.env.BASE_URL}resume-${locale}.pdf`;
  // The saved file is named the way a reader would: whose resume it is and the
  // role they are applying for, both taken from the edition being read.
  const pdfFileName = `${name} - ${title}.pdf`;

  return (
    <header className="print-hidden sticky top-0 z-40 border-(--rule) border-b bg-(--page)/85 backdrop-blur-sm">
      <div className="mx-auto flex h-12 max-w-3xl items-center justify-between gap-4 px-5 sm:px-8">
        <span className="truncate font-mono text-(--muted-ink) text-2xs">
          {name}
        </span>

        <div className="flex items-center gap-0.5">
          <Dropdown>
            <ToolbarAction label={labels.language}>
              <Button
                aria-label={labels.language}
                className="text-(--muted-ink)"
                isIconOnly
                size="sm"
                variant="ghost"
              >
                <IconHeroiconsLanguage aria-hidden="true" className="size-4" />
              </Button>
            </ToolbarAction>
            <Dropdown.Popover placement="bottom end">
              <Dropdown.Menu
                onSelectionChange={handleLocaleChange}
                selectedKeys={new Set([locale])}
                selectionMode="single"
              >
                {locales.map((item) => (
                  <Dropdown.Item id={item.value} key={item.value}>
                    <Label>{item.label}</Label>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          <Dropdown>
            <ToolbarAction label={labels.theme}>
              <Button
                aria-label={labels.theme}
                className="text-(--muted-ink)"
                isIconOnly
                size="sm"
                variant="ghost"
              >
                <activeTheme.icon aria-hidden="true" className="size-4" />
              </Button>
            </ToolbarAction>
            <Dropdown.Popover placement="bottom end">
              <Dropdown.Menu
                onSelectionChange={handleThemeChange}
                selectedKeys={new Set([themePreference])}
                selectionMode="single"
              >
                {themeOptions.map((option) => (
                  <Dropdown.Item id={option.value} key={option.value}>
                    <option.icon aria-hidden="true" className="size-4" />
                    <Label>{option.label}</Label>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown.Popover>
          </Dropdown>

          <ToolbarAction label={labels.source}>
            <Button
              aria-label={labels.source}
              className="text-(--muted-ink)"
              isIconOnly
              onPress={handleOpenSource}
              size="sm"
              variant="ghost"
            >
              <IconHeroiconsArrowTopRightOnSquare
                aria-hidden="true"
                className="size-4"
              />
            </Button>
          </ToolbarAction>

          {/* A dev server prints the live page, so a copy tweak shows up in the PDF
              at once; a built bundle links to the file `pnpm build:pdf` wrote.
              `MODE` rather than `DEV`: `DEV` follows `NODE_ENV`, so a dev server
              started under `NODE_ENV=production` would silently link to a stale
              PDF instead of printing. */}
          {import.meta.env.MODE === "production" ? (
            <ToolbarAction label={labels.download}>
              <Link
                aria-label={labels.download}
                className={buttonVariants({
                  isIconOnly: true,
                  size: "sm",
                  variant: "ghost",
                })}
                download={pdfFileName}
                href={pdfHref}
              >
                <IconHeroiconsArrowDownTray
                  aria-hidden="true"
                  className="size-4"
                />
              </Link>
            </ToolbarAction>
          ) : (
            <ToolbarAction label={labels.print}>
              <Button
                aria-label={labels.print}
                className="text-(--muted-ink)"
                isIconOnly
                onPress={handlePrint}
                size="sm"
                variant="ghost"
              >
                <IconHeroiconsPrinter aria-hidden="true" className="size-4" />
              </Button>
            </ToolbarAction>
          )}
        </div>
      </div>
    </header>
  );
}
