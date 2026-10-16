import { Link } from "@heroui/react";
import type {
  Education as EducationModel,
  Locale,
  Resume,
} from "../../content";
import { formatPeriod, periodDateTime } from "../../lib/format";

interface EducationProps {
  certificates: string[];
  certificateTitle: string;
  dictionary: Resume["dictionary"];
  education: EducationModel;
  locale: Locale;
}

/**
 * Education and the certificate list share one section: both are credentials,
 * and splitting them into two headings would give them more weight than a
 * resume needs.
 */
export function Education({
  education,
  dictionary,
  locale,
  certificates,
  certificateTitle,
}: EducationProps) {
  const school = dictionary[education.schoolKey] ?? education.schoolKey;

  return (
    <div className="print-avoid-break flex flex-col gap-3">
      <div className="print-avoid-break">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Link
            className="font-semibold text-(--heading) text-base no-underline hover:underline"
            href={education.schoolUrl}
            rel="noreferrer noopener"
            target="_blank"
          >
            {school}
          </Link>
          <time
            className="font-mono text-(--muted-ink) text-2xs"
            dateTime={periodDateTime(education.period)}
          >
            {formatPeriod(education.period, locale)}
          </time>
        </div>
        <p className="prose-measure mt-0.5 text-sm leading-6">
          {education.degree}
        </p>
      </div>

      <div>
        <h3 className="mb-1.5 font-mono text-(--muted-ink) text-2xs">
          {certificateTitle}
        </h3>
        <ul className="list-disc space-y-0.5 pl-4 text-sm leading-6 marker:text-(--rule-strong)">
          {certificates.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
