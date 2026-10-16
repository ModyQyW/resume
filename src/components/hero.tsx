import { buttonVariants, Link, Tooltip } from "@heroui/react";
import type { ContactLink } from "../content";
import { getIcon } from "../lib/icons";

/**
 * One way to reach him, as a real link: middle-click, copy link address and the
 * platform's mail and phone handlers all work, which a button calling
 * `window.open` never allowed. The ghost button skin comes from the button
 * styles, and the tooltip carries the full value.
 *
 * Known limit: `Tooltip.Trigger` renders its own `div[role="button"]` around the
 * child, so one contact is two tab stops and the link sits inside a button. The
 * `render` escape hatch cannot drop the wrapper — it is typed for the element
 * the trigger would render itself (`ComponentProps<"div">`, `Ref<HTMLDivElement>`),
 * and its docs rule out substituting an `<a>`. Doing it properly means driving
 * React Aria's `TooltipTrigger` directly.
 */
function ContactEntry({ contact }: { contact: ContactLink }) {
  const Icon = getIcon(contact.icon);

  return (
    <li>
      <Tooltip delay={150}>
        <Tooltip.Trigger>
          <Link
            className={buttonVariants({
              class: "gap-2 px-2 text-(--muted-ink)",
              size: "sm",
              variant: "ghost",
            })}
            href={contact.href}
          >
            {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
            <span className="font-mono text-xs">{contact.label}</span>
          </Link>
        </Tooltip.Trigger>
        <Tooltip.Content>{contact.value}</Tooltip.Content>
      </Tooltip>
    </li>
  );
}

interface HeroProps {
  contacts: ContactLink[];
  intro: string;
  name: string;
  portrait: string;
  title: string;
}

/**
 * The opening. Name and title are set large and tight because that pairing is
 * the single most important thing on a resume; everything below it is
 * supporting detail. The portrait is small and circular so it reads as
 * identification, not as a profile photo on a marketing page.
 */
export function Hero({ name, title, intro, portrait, contacts }: HeroProps) {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="font-semibold text-(--heading) text-lg leading-[1.15] tracking-tight sm:text-xl">
            {name}
          </h1>
          <p className="mt-1 font-mono text-(--accent) text-[0.6875rem]">
            {title}
          </p>
          <p className="mt-1.5 text-(--ink) text-xs leading-normal print:text-[13px]">
            {intro}
          </p>
        </div>

        <img
          alt={name}
          className="size-16 shrink-0 rounded-full object-cover ring-(--rule-strong) ring-1 sm:size-[88px]"
          height={88}
          src={portrait}
          width={88}
        />
      </div>

      {/* Contact details: icons with tooltips on screen; the same icons
          tiled on paper. The named labels ("写邮件") exist for the screen
          readers of the icon buttons, so print drops them — icon plus value
          stays on one line without the label. */}
      <ul className="print-hidden flex flex-wrap items-center gap-x-1 gap-y-2">
        {contacts.map((contact) => (
          <ContactEntry contact={contact} key={contact.href} />
        ))}
      </ul>

      <ul className="hidden flex-wrap items-center gap-x-4 gap-y-0.5 text-xs leading-[1.45] print:flex">
        {contacts.map((contact) => {
          const Icon = getIcon(contact.icon);
          return (
            <li className="flex items-center gap-1.5" key={contact.href}>
              {Icon ? (
                <Icon
                  aria-hidden="true"
                  className="size-3.5 shrink-0 text-(--muted-ink)"
                />
              ) : null}
              <span className="font-mono">{contact.value}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
