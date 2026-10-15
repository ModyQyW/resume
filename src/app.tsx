import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Highlights } from "./components/highlights";
import { Section } from "./components/section";
import { Education } from "./components/sections/education";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import { useLocale } from "./lib/use-locale";
import { useTheme } from "./lib/use-theme";

export function App() {
  const { locale, setLocale, resume } = useLocale();
  const { preference, setPreference } = useTheme();

  return (
    <>
      <Header
        labels={resume.controls}
        locale={locale}
        name={resume.person.name}
        onLocaleChange={setLocale}
        onThemeChange={setPreference}
        sourceUrl={resume.footer.sourceUrl}
        themePreference={preference}
      />

      <main className="mx-auto max-w-3xl px-5 py-3 sm:px-8 sm:py-4 print:py-2">
        <Hero
          contacts={resume.person.contacts}
          locale={locale}
          name={resume.person.name}
          portrait={resume.person.portrait}
          title={resume.person.title}
        />

        <div className="mt-4">
          <Highlights
            roles={resume.roles}
            titles={resume.sectionTitles}
            tools={resume.tools}
            values={resume.values}
          />
        </div>

        <Section title={resume.sectionTitles.work}>
          <Experience
            dictionary={resume.dictionary}
            jobs={resume.jobs}
            locale={locale}
          />
        </Section>

        <Section title={resume.sectionTitles.projects}>
          <Projects locale={locale} projects={resume.projects} />
        </Section>

        <Section title={resume.sectionTitles.education}>
          <Education
            certificates={resume.certificates}
            certificateTitle={resume.sectionTitles.certificate}
            dictionary={resume.dictionary}
            education={resume.education}
            locale={locale}
          />
        </Section>

        <footer className="print-hidden mt-8 border-(--rule) border-t pt-3">
          <p className="font-mono text-(--muted-ink) text-2xs">
            {resume.footer.builtWith}
          </p>
        </footer>
      </main>
    </>
  );
}
