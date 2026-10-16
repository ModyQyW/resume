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
 * Picks the edition that matches the visitor's browser: only Simplified Chinese
 * asks for the Chinese edition, everything else reads English. Traditional
 * Chinese counts as "everything else", so a zh-TW visitor gets English rather
 * than Simplified copy.
 */
export function detectLocale(): Locale {
  if (typeof navigator === "undefined") {
    return "en-US";
  }
  const languages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  return isSimplifiedChinese(languages[0]) ? "zh-CN" : "en-US";
}

/**
 * "zh", "zh-CN" and "zh-Hans" are Simplified; "zh-TW", "zh-HK", "zh-MO" and
 * "zh-Hant" are not, so they fall through to English.
 */
const TRADITIONAL_CHINESE = /(hant|-tw|-hk|-mo)/;

function isSimplifiedChinese(language: string | undefined): boolean {
  const tag = language?.toLowerCase() ?? "";
  return tag.startsWith("zh") && !TRADITIONAL_CHINESE.test(tag);
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
