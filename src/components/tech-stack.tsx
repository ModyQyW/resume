import { Tooltip } from "@heroui/react";
import { getIcon, getIconName } from "../lib/icons";

interface TechStackProps {
  /** Icon keys such as "logos:react". */
  icons: string[];
}

/**
 * The technology used on a role. Each entry is an icon whose name lives in a
 * tooltip; the printed edition keeps the icons and drops the names, so the page
 * and the PDF stay the same document.
 *
 * Icons are set one step down on paper. At their screen size a long stack (23
 * entries for the first role) wraps onto a second line that no longer fits the
 * sheet, which strands the whole row at the top of the next page, detached from
 * the role it belongs to.
 */
export function TechStack({ icons }: TechStackProps) {
  if (icons.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap items-center gap-x-2.5 gap-y-2 print:gap-x-1.5 print:gap-y-1">
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
                <Icon aria-hidden="true" className="size-4 print:size-3" />
              </Tooltip.Trigger>
              <Tooltip.Content>{name}</Tooltip.Content>
            </Tooltip>
          </li>
        );
      })}
    </ul>
  );
}
