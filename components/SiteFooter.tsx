import Link from 'next/link';
import { BRAND, OFFICIAL, type Locale, localizedPath } from '@/lib/site';
import { FOOTER } from '@/lib/i18n/ui';

export function SiteFooter({ locale = 'en' }: { locale?: Locale }) {
  const t = FOOTER[locale];
  return (
    <footer className="site-footer">
      <p>
        <strong>{BRAND}</strong> {t.blurb}
      </p>
      <p className="footer-links">
        <Link href={localizedPath(locale, '/privacy/')}>{t.privacy}</Link>
        {' · '}
        <Link href={localizedPath(locale, '/about/')}>{t.about}</Link>
        {' · '}
        <Link href={localizedPath(locale, '/contact/')}>{t.contact}</Link>
        {locale === 'en' ? (
          <>
            {' · '}
            <Link href="/gear-score-calculator/">Gear score calculator</Link>
            {' · '}
            <Link href="/hero-builds/">Hero builds</Link>
            {' · '}
            <Link href="/team-builder/">Team builder</Link>
          </>
        ) : null}
        {' · '}
        <a href={OFFICIAL.steamStore} rel="noopener noreferrer" target="_blank">
          {t.steam}
        </a>
        {' · '}
        <a
          href={OFFICIAL.stoveSteamFaq}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t.faq}
        </a>
      </p>
      <p className="footer-meta">{t.meta}</p>
    </footer>
  );
}
