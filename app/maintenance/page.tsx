import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Maintenance & version notes',
  description:
    'Epic Seven Steam / Foundry maintenance log stub: track weekly patches, VO fixes, schedule slips. Independent guide citing STOVE.',
};

export default function MaintenancePage() {
  return (
    <>
      <h1>Maintenance &amp; version notes</h1>
      <IndepNotice compact />
      <p>
        Track weekly patches that affect Steam clients, Foundry unlocks, and
        known launch caveats (e.g. Japanese VO delay).
      </p>

      <article className="card">
        <h2>2026-10-29 — Steam launch maintenance</h2>
        <ul>
          <li>Demo service ended; full Steam client live after maintenance.</li>
          <li>Foundry server opened with celebration events.</li>
          <li>
            Japanese voice-over not available at Steam launch; later resume
            planned (launch notice).
          </li>
        </ul>
        <p className="sources">
          <ExternalLink href={OFFICIAL.stoveLaunch}>Launch notice</ExternalLink>
        </p>
      </article>

      <article className="card">
        <h2>Watch list</h2>
        <ul>
          <li>
            Foundry Guild War open — <strong>2026-11-21 03:00 UTC</strong>{' '}
            (STOVE Foundry open notice).
          </li>
          <li>
            Foundry World Arena — <strong>2026-12-10</strong> after maintenance.
          </li>
          <li>Japanese VO restore date — TBD official.</li>
        </ul>
      </article>

      <article className="card">
        <h2>Template — next weekly patch</h2>
        <ul>
          <li>Maintenance start / end — TBD</li>
          <li>Client version / Steam build — TBD</li>
          <li>Balance / shop / bugfix bullets — TBD</li>
          <li>Source URL — TBD</li>
        </ul>
      </article>

      <p>
        Cross-links: <Link href="/foundry/">Foundry</Link>,{' '}
        <Link href="/faq/">FAQ</Link>, <Link href="/updates/">Updates</Link>.
      </p>
    </>
  );
}
