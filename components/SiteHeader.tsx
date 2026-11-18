import Link from 'next/link';
import {
  BRAND,
  LOCALES,
  LOCALE_LABELS,
  type Locale,
  localizedPath,
} from '@/lib/site';
import { NAV_ITEMS, NAV_LABELS } from '@/lib/i18n/ui';

const MENU_LABEL: Record<Locale, string> = {
  en: 'Menu',
  ko: '메뉴',
  ja: 'メニュー',
  'zh-tw': '選單',
  th: 'เมนู',
  es: 'Menú',
  pt: 'Menu',
  de: 'Menü',
  fr: 'Menu',
  pl: 'Menu',
};

export function SiteHeader({
  locale = 'en',
  path = '/',
  languages = LOCALES,
  languagePaths,
}: {
  locale?: Locale;
  path?: string;
  languages?: readonly Locale[];
  languagePaths?: Partial<Record<Locale, string>>;
}) {
  const labels = NAV_LABELS[locale];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={localizedPath(locale, '/')} className="brand">
          {BRAND}
        </Link>
        <details className="primary-nav">
          <summary>{MENU_LABEL[locale]}</summary>
        </details>
        <nav aria-label="Primary" className="primary-nav-list">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <Link href={localizedPath(locale, item.path)}>
                  {labels[item.key]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Language" className="lang-switch">
          <ul>
            {languages.map((loc) => (
              <li key={loc}>
                <Link
                  href={localizedPath(loc, languagePaths?.[loc] ?? path)}
                  hrefLang={loc === 'zh-tw' ? 'zh-Hant' : loc}
                  aria-current={loc === locale ? 'page' : undefined}
                >
                  {LOCALE_LABELS[loc]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
