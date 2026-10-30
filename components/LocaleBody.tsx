import type { Locale } from '@/lib/site';
import { htmlLang, localeDir } from '@/lib/site';

export function LocaleBody({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <div lang={htmlLang(locale)} dir={localeDir(locale)} data-locale={locale}>
      {children}
    </div>
  );
}
