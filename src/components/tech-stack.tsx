import { Tooltip } from "@heroui/react";
import type { Locale } from "../content";
import { getIcon, getIconName } from "../lib/icons";

interface TechStackProps {
  /** Icon keys such as "logos:react". */
  icons: string[];
  locale: Locale;
}

/**
 * The technology used on a role. On screen each entry is an icon with a
 * tooltip; on paper tooltips do not exist, so the same list is also rendered
 * as plain text that only print reveals.
 */
export function TechStack({ icons, locale }: TechStackProps) {
  if (icons.length === 0) {
    return null;
  }

  // Chinese lists join with an ideographic comma and need no space after it.
  const separator = locale === "zh-CN" ? "、" : ", ";

  return (
    <>
      <ul className="print-hidden flex flex-wrap items-center gap-x-2.5 gap-y-2">
        {icons.map((iconKey) => {
          const Icon = getIcon(iconKey);
          if (!Icon) {
            return null;
          }
          const name = getIconName(iconKey);
          return (
            <li key={iconKey}>
              <Tooltip delay={150}>
                <Tooltip.Trigger aria-label={name}>
                  <Icon aria-hidden="true" className="size-4" />
                </Tooltip.Trigger>
                <Tooltip.Content>{name}</Tooltip.Content>
              </Tooltip>
            </li>
          );
        })}
      </ul>

      <p className="hidden text-(--muted-ink) text-sm leading-relaxed print:block">
        {icons.map(getIconName).join(separator)}
      </p>
    </>
  );
}
