import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LocaleBody } from '@/components/LocaleBody';
import { LOCALES, type Locale } from '@/lib/site';

export function PageShell({
  locale,
  path,
  children,
  languages = LOCALES,
}: {
  locale: Locale;
  path: string;
  children: React.ReactNode;
  languages?: readonly Locale[];
}) {
  return (
    <LocaleBody locale={locale}>
      <SiteHeader locale={locale} path={path} languages={languages} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </LocaleBody>
  );
}
