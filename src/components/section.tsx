import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  title: string;
}

/**
 * Every resume section shares one skeleton: a heading, a hairline rule that
 * runs to the edge, then the content. The rule is the only structural device
 * used in this document, which is why it carries the section boundary instead
 * of numbered markers or cards.
 */
export function Section({ title, children }: SectionProps) {
  return (
    <section className="mt-2 first:mt-0">
      <div className="mb-2 flex items-baseline gap-4">
        <h2 className="font-semibold text-(--heading) text-lg tracking-tight">
          {title}
        </h2>
        <span
          aria-hidden="true"
          className="h-px flex-1 translate-y-[-0.15em] bg-(--rule)"
        />
      </div>
      {children}
    </section>
  );
}
