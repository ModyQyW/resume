import { useCallback, useEffect, useState } from "react";
import { detectLocale, isLocale, type Locale, resumes } from "../content";

const STORAGE_KEY = "resume-locale";

function readStoredLocale(): Locale {
  if (typeof localStorage === "undefined") {
    return detectLocale();
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLocale(stored) ? stored : detectLocale();
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.append(tag);
  }
  tag.content = content;
}

/**
 * Holds the active language. The chosen edition drives the rendered copy, the
 * document's `lang` attribute, title and author, and the description and share
 * preview, so search engines and social cards follow the switch too.
 */
export function useLocale() {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  useEffect(() => {
    const resume = resumes[locale];
    document.documentElement.lang = resume.htmlLang;
    document.title = resume.documentTitle;
    setMeta("name", "description", resume.description);
    setMeta("name", "author", resume.person.name);
    setMeta("property", "og:title", resume.documentTitle);
    setMeta("property", "og:description", resume.description);
    setMeta("property", "og:locale", resume.htmlLang.replace("-", "_"));
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable; the in-memory choice still applies.
    }
  }, []);

  return { locale, resume: resumes[locale], setLocale };
}
