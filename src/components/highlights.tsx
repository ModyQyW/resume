import { Chip, Tooltip } from "@heroui/react";
import type { Resume, Tool, Trait } from "../content";
import { getIcon } from "../lib/icons";

interface TraitGroupProps {
  title: string;
  traits: Trait[];
}

/**
 * One labelled list of traits. On screen each trait is a chip whose explanatory
 * sentence lives in a tooltip, because the labels alone are what a reader
 * scans. On paper tooltips do not exist, so the sentence prints beneath the
 * label instead of being lost.
 */
function TraitGroup({ title, traits }: TraitGroupProps) {
  return (
    <div className="min-w-0">
      <h3 className="mb-2 font-mono text-(--muted-ink) text-2xs">{title}</h3>

      <ul className="print-hidden flex flex-wrap gap-1.5">
        {traits.map((trait) => {
          const Icon = getIcon(trait.icon);
          return (
            <li key={trait.label}>
              <Tooltip delay={150}>
                <Tooltip.Trigger>
                  <Chip color="default" size="sm" variant="soft">
                    {Icon ? (
                      <Icon aria-hidden="true" className="size-3" />
                    ) : null}
                    <Chip.Label>{trait.label}</Chip.Label>
                  </Chip>
                </Tooltip.Trigger>
                <Tooltip.Content>{trait.description}</Tooltip.Content>
              </Tooltip>
            </li>
          );
        })}
      </ul>

      <p className="hidden text-xs leading-[1.375rem] print:block">
        {traits.map((t) => t.label).join("、")}
      </p>
    </div>
  );
}

/**
 * The headline stack. Tools carry no explanation, so they need none of the
 * tooltip machinery the other two groups have.
 */
function ToolGroup({ title, tools }: { title: string; tools: Tool[] }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-2 font-mono text-(--muted-ink) text-2xs">{title}</h3>
      <ul className="flex flex-wrap gap-1.5">
        {tools.map((tool) => {
          const Icon = getIcon(tool.icon);
          return (
            <li key={tool.label}>
              <Chip color="default" size="sm" variant="soft">
                {Icon ? <Icon aria-hidden="true" className="size-3" /> : null}
                <Chip.Label>{tool.label}</Chip.Label>
              </Chip>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

interface HighlightsProps {
  roles: Trait[];
  titles: Pick<Resume["sectionTitles"], "tools" | "roles" | "values">;
  tools: Tool[];
  values: Trait[];
}

/**
 * What the resume leads with: the stack, the roles held, and the values behind
 * them. Three short lists of similar shape, so they share one row instead of
 * each claiming a heading of its own.
 */
export function Highlights({ titles, tools, roles, values }: HighlightsProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <ToolGroup title={titles.tools} tools={tools} />
      <TraitGroup title={titles.roles} traits={roles} />
      <TraitGroup title={titles.values} traits={values} />
    </div>
  );
}
