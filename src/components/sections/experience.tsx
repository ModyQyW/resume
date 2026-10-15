import { Link } from "@heroui/react";
import type { Job, Locale, Resume } from "../../content";
import { formatPeriod, periodDateTime } from "../../lib/format";
import { TechStack } from "../tech-stack";

interface ExperienceProps {
  dictionary: Resume["dictionary"];
  jobs: Job[];
  locale: Locale;
}

interface JobEntryProps {
  /** The first role is the current one, so its spine node is filled. */
  current: boolean;
  dictionary: Resume["dictionary"];
  job: Job;
  locale: Locale;
}

function JobEntry({ job, locale, dictionary, current }: JobEntryProps) {
  const company = dictionary[job.companyKey] ?? job.companyKey;

  return (
    <li className="print-avoid-break relative grid gap-x-6 gap-y-1 sm:grid-cols-[7.5rem_1fr]">
      {/* The date column doubles as the timeline rail: the dot sits on the
          rail, and the rule below it is drawn as a pseudo-element so the two
          columns stay independent. */}
      <div className="relative flex items-baseline gap-2 sm:block">
        <span
          aria-hidden="true"
          className={[
            "print-hidden absolute top-[0.45rem] left-[-0.9rem] size-1.5 rounded-full",
            current ? "bg-(--accent)" : "bg-(--rule-strong)",
          ].join(" ")}
        />
        <time
          className="whitespace-nowrap font-mono text-(--muted-ink) text-2xs"
          dateTime={periodDateTime(job.period)}
        >
          {formatPeriod(job.period, locale)}
        </time>
        <p className="font-mono text-(--muted-ink) text-2xs sm:mt-1">
          {job.location}
        </p>
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <img
            alt=""
            className="size-5 shrink-0 object-contain"
            height={20}
            src={job.logo}
            width={20}
          />
          <Link
            className="font-semibold text-(--heading) text-base no-underline hover:underline"
            href={job.companyUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            {company}
          </Link>
        </div>

        <p className="mt-0.5 font-medium text-xs">{job.role}</p>

        <div className="mt-1 flex flex-col gap-0.5">
          {job.groups.map((group) => (
            <div key={group.title}>
              <h4 className="font-semibold text-(--heading) text-xs">
                {group.title}
              </h4>
              <p className="prose-measure mt-0.5 text-xs leading-tight">
                {group.items.map((item, idx) => (
                  <span key={item.label + item.text}>
                    {idx > 0 ? "；" : ""}
                    {item.label ? (
                      <strong className="font-medium text-(--heading)">
                        {item.label}
                      </strong>
                    ) : null}
                    {item.label ? "：" : ""}
                    {item.text}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-1.5">
          <TechStack icons={job.stack} locale={locale} />
        </div>
      </div>
    </li>
  );
}

/**
 * Work history, newest first, hung on a single vertical rule so the reader can
 * see where one role ends and the next begins without section dividers.
 */
export function Experience({ jobs, locale, dictionary }: ExperienceProps) {
  return (
    <ol className="relative flex flex-col gap-3 border-(--rule) border-l pl-4 sm:pl-5">
      {jobs.map((job, index) => (
        <JobEntry
          current={index === 0}
          dictionary={dictionary}
          job={job}
          key={`${job.companyKey}-${job.period.start}`}
          locale={locale}
        />
      ))}
    </ol>
  );
}
