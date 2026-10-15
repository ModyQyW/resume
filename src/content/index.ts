import { enUS } from "./en-us";
import type { Resume } from "./model";
import { zhCN } from "./zh-cn";

export type Locale = "zh-CN" | "en-US";

export const resumes: Record<Locale, Resume> = {
  "en-US": enUS,
  "zh-CN": zhCN,
};

export const locales: { value: Locale; label: string }[] = [
  { label: "简体中文", value: "zh-CN" },
  { label: "English", value: "en-US" },
];

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "zh-CN" || value === "en-US";
}

/**
 * Picks the edition that matches the visitor's browser, defaulting to Chinese
 * because that is the primary market for this resume.
 */
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "zh-CN";
  }
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  return languages.some((language) => language?.toLowerCase().startsWith("en"))
    ? "en-US"
    : "zh-CN";
}

export type {
  ContactLink,
  Education,
  Highlight,
  HighlightGroup,
  Job,
  Period,
  Resume,
  SideProject,
  Tool,
  Trait,
} from "./model";
