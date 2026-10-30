import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { LocaleBody } from '@/components/LocaleBody';
import type { Locale } from '@/lib/site';

export function PageShell({
  locale,
  path,
  children,
}: {
  locale: Locale;
  path: string;
  children: React.ReactNode;
}) {
  return (
    <LocaleBody locale={locale}>
      <SiteHeader locale={locale} path={path} />
      <main>{children}</main>
      <SiteFooter locale={locale} />
    </LocaleBody>
  );
}
