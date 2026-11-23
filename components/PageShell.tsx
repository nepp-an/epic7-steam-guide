import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LocaleBody } from '@/components/LocaleBody';
import { LOCALES, type Locale } from '@/lib/site';

export function PageShell({
  locale,
  path,
  children,
  languages = LOCALES,
  languagePaths,
}: {
  locale: Locale;
  path: string;
  children: React.ReactNode;
  languages?: readonly Locale[];
  languagePaths?: Partial<Record<Locale, string>>;
}) {
  return (
    <LocaleBody locale={locale}>
      <SiteHeader
        locale={locale}
        path={path}
        languages={languages}
        languagePaths={languagePaths}
      />
      <main>{children}</main>
      {/* Adsterra native/container unit — script and its target div stay together.
          Emitted as raw SSR HTML so the async script is not hoisted into <head>
          away from #container-437f59c0ec9fc5e5d0a0cc5bdb038d3e. */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<script async="async" data-cfasync="false" src="https://bauval.org/21/437f59c0ec9fc5e5d0a0cc5bdb038d3e"></script><div id="container-437f59c0ec9fc5e5d0a0cc5bdb038d3e"></div>`,
        }}
      />
      <SiteFooter locale={locale} />
    </LocaleBody>
  );
}
