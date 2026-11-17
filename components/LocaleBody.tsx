'use client';

import { useEffect } from 'react';
import type { Locale } from '@/lib/site';
import { htmlLang, localeDir } from '@/lib/site';

export function LocaleBody({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const lang = htmlLang(locale);
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <div lang={lang} dir={localeDir(locale)} data-locale={locale}>
      {children}
    </div>
  );
}
