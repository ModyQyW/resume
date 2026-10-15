import { useCallback, useEffect, useState } from "react";

/**
 * Three-way theme preference: follow the system, or pin light / dark. The
 * storage key and the resolved attribute must stay in sync with the inline
 * script in index.html, which applies the theme before first paint.
 */
export type ThemePreference = "system" | "light" | "dark";

const STORAGE_KEY = "theme";
const prefersDark = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

function readStoredPreference(): ThemePreference {
  if (typeof localStorage === "undefined") {
    return "system";
  }
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

function applyTheme(preference: ThemePreference): void {
  const dark =
    preference === "dark" || (preference === "system" && prefersDark());
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  // HeroUI reads the theme from the root element's data attribute.
  root.dataset.theme = dark ? "dark" : "light";
}

/**
 * Returns the current preference plus a setter. While the preference is
 * "system" it also tracks OS changes, so a visitor who never touches the
 * toggle still flips with their machine.
 */
export function useTheme() {
  const [preference, setPreferenceState] =
    useState<ThemePreference>(readStoredPreference);

  useEffect(() => {
    applyTheme(preference);
  }, [preference]);

  useEffect(() => {
    if (preference !== "system") {
      return;
    }
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => applyTheme("system");
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, [preference]);

  const setPreference = useCallback((next: ThemePreference) => {
    setPreferenceState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private-mode storage failures shouldn't stop the toggle from working.
    }
  }, []);

  return { preference, setPreference };
}
