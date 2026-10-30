import Link from 'next/link';
import {
  BRAND,
  LOCALES,
  LOCALE_LABELS,
  type Locale,
  localizedPath,
} from '@/lib/site';
import { NAV_ITEMS, NAV_LABELS } from '@/lib/i18n/ui';

export function SiteHeader({
  locale = 'en',
  path = '/',
}: {
  locale?: Locale;
  path?: string;
}) {
  const labels = NAV_LABELS[locale];
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href={localizedPath(locale, '/')} className="brand">
          {BRAND}
        </Link>
        <nav aria-label="Primary">
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
            {LOCALES.map((loc) => (
              <li key={loc}>
                <Link
                  href={localizedPath(loc, path)}
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
