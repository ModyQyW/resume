import { Button, Tooltip } from "@heroui/react";
import { useCallback } from "react";
import type { ContactLink, Locale } from "../content";
import { getIcon } from "../lib/icons";

/** Stable component so onPress doesn't recreate an arrow function on each render. */
function ContactButton({ contact }: { contact: ContactLink }) {
  const Icon = getIcon(contact.icon);
  const handlePress = useCallback(() => {
    window.open(contact.href, "_self");
  }, [contact.href]);

  return (
    <li>
      <Tooltip delay={150}>
        <Tooltip.Trigger>
          <Button
            className="gap-2 px-2 text-(--muted-ink)"
            onPress={handlePress}
            size="sm"
            variant="ghost"
          >
            {Icon ? <Icon aria-hidden="true" className="size-4" /> : null}
            <span className="font-mono text-xs">{contact.label}</span>
          </Button>
        </Tooltip.Trigger>
        <Tooltip.Content>{contact.value}</Tooltip.Content>
      </Tooltip>
    </li>
  );
}

interface HeroProps {
  contacts: ContactLink[];
  locale: Locale;
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
export function Hero({ name, title, portrait, contacts, locale }: HeroProps) {
  // Chinese writes the separator full-width, English needs a plain colon.
  const separator = locale === "zh-CN" ? "：" : ": ";

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
        </div>

        <img
          alt={name}
          className="size-16 shrink-0 rounded-full object-cover ring-(--rule-strong) ring-1 sm:size-[88px]"
          height={88}
          src={portrait}
          width={88}
        />
      </div>

      {/* Contact details: icons with tooltips on screen, full values on paper. */}
      <ul className="print-hidden flex flex-wrap items-center gap-x-1 gap-y-2">
        {contacts.map((contact) => (
          <ContactButton contact={contact} key={contact.href} />
        ))}
      </ul>

      <ul className="hidden text-sm leading-6 print:block">
        {contacts.map((contact) => (
          <li key={contact.href}>
            {contact.label}
            {separator}
            {contact.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
