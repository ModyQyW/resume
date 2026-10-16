import { Link } from "@heroui/react";
import type { Locale, SideProject } from "../../content";
import { formatPeriod, periodDateTime } from "../../lib/format";

interface ProjectsProps {
  locale: Locale;
  projects: SideProject[];
}

/**
 * Open-source work. Each entry leads with its name in monospace, because the
 * audience for this section is developers who read package names as links.
 */
export function Projects({ projects, locale }: ProjectsProps) {
  return (
    <ul className="flex flex-col gap-1">
      {projects.map((project) => (
        <li className="print-avoid-break" key={project.name}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <Link
              className="font-mono font-semibold text-(--heading) text-sm no-underline hover:underline"
              href={project.url}
              rel="noreferrer noopener"
              target="_blank"
            >
              {project.name}
            </Link>
            <time
              className="font-mono text-(--muted-ink) text-2xs"
              dateTime={periodDateTime(project.period)}
            >
              {formatPeriod(project.period, locale)}
            </time>
          </div>
          <p className="prose-measure mt-0.5 text-xs leading-[1.5] print:text-[13px]">
            {project.before}
            {project.relatedUrl && project.relatedName ? (
              <Link
                className="text-(--accent)"
                href={project.relatedUrl}
                rel="noreferrer noopener"
                target="_blank"
              >
                {project.relatedName}
              </Link>
            ) : null}
            {project.after}
          </p>
        </li>
      ))}
    </ul>
  );
}
