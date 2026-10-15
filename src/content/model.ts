/**
 * The resume content model. Every piece of copy in the page comes from a value
 * shaped like this, so the Chinese and English editions cannot drift apart
 * structurally — a missing translation fails the typecheck instead of silently
 * rendering the wrong language.
 *
 * Dates are stored as ISO `YYYY-MM` so they can be formatted per locale and so
 * `present` stays a flag rather than a magic string that differs between the
 * two language files.
 */

export interface Period {
  /** ISO year-month, or null for a role that is still ongoing. */
  end: string | null;
  /** ISO year-month, e.g. "2021-07". */
  start: string;
}

export interface Highlight {
  /** The bold lead-in. Empty when the bullet is a plain sentence. */
  label: string;
  /** The sentence that follows the lead-in. */
  text: string;
}

export interface HighlightGroup {
  items: Highlight[];
  title: string;
}

export interface Job {
  /** i18n key for the company name, resolved from the locale dictionary. */
  companyKey: string;
  companyUrl: string;
  groups: HighlightGroup[];
  location: string;
  logo: string;
  period: Period;
  role: string;
  /** Icon names understood by `@iconify/react`, e.g. "logos:react". */
  stack: string[];
}

export interface SideProject {
  after: string;
  /** The paragraph, split at the related link so the link stays clickable. */
  before: string;
  name: string;
  period: Period;
  relatedName?: string;
  /** A second link mentioned inside the blurb, if any. */
  relatedUrl?: string;
  url: string;
}

export interface Education {
  degree: string;
  period: Period;
  schoolKey: string;
  schoolUrl: string;
}

export interface ContactLink {
  href: string;
  icon: string;
  label: string;
  value: string;
}

export interface Trait {
  description: string;
  icon: string;
  label: string;
}

/** A headline tool: an icon and a name, with nothing more to explain. */
export interface Tool {
  icon: string;
  label: string;
}

export interface Resume {
  certificates: string[];
  /** Accessible names for the toolbar controls. Each control labels itself. */
  controls: {
    language: string;
    theme: string;
    source: string;
    print: string;
  };
  /** Used for the meta description and the social-share preview. */
  description: string;
  /** Localised company, school and label strings, keyed by the data above. */
  dictionary: Record<string, string>;
  documentTitle: string;
  education: Education;
  footer: {
    builtWith: string;
    sourceUrl: string;
  };
  htmlLang: string;
  jobs: Job[];
  /** Bumped when the content structure changes, so stale saved data is obvious. */
  localeCode: string;
  person: {
    name: string;
    title: string;
    portrait: string;
    contacts: ContactLink[];
  };
  projects: SideProject[];
  roles: Trait[];
  sectionTitles: {
    work: string;
    projects: string;
    certificate: string;
    education: string;
    roles: string;
    values: string;
    tools: string;
  };
  /** Named so the summary strip can state what the numbers are counting. */
  /** The stack the resume leads with, stated up front. */
  tools: Tool[];
  values: Trait[];
}
