import Link from 'next/link';
import { BRAND, OFFICIAL } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>
        <strong>{BRAND}</strong> — independent player information. Not
        affiliated with Smilegate, STOVE, Valve, or Steam.
      </p>
      <p className="footer-links">
        <Link href="/privacy/">Privacy</Link>
        {' · '}
        <Link href="/about/">About</Link>
        {' · '}
        <a href={OFFICIAL.steamStore} rel="noopener noreferrer" target="_blank">
          Official Steam store
        </a>
        {' · '}
        <a href={OFFICIAL.stoveSteamFaq} rel="noopener noreferrer" target="_blank">
          STOVE Steam FAQ
        </a>
      </p>
      <p className="footer-meta">
        Epic Seven™ and related marks belong to their respective owners. Content
        here is short original summary with outbound citations — verify on
        official sources before acting.
      </p>
    </footer>
  );
}
