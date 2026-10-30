import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { AS_OF, OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Epic Seven updates — heroes & events',
  description:
    'Living updates log for Epic Seven Steam / Foundry window: current launch notes and placeholders for new heroes and events. Independent guide.',
};

export default function UpdatesPage() {
  return (
    <>
      <h1>Updates — heroes &amp; events</h1>
      <IndepNotice compact />
      <p>
        Long-running log for the Steam / Foundry era. Newest entries first.
        We summarize public STOVE / Steam posts — not a patch notes mirror.
      </p>

      <article className="card">
        <h2>2026-10-29 — Steam launch &amp; Foundry open</h2>
        <p className="as-of">As-of window: {AS_OF} launch maintenance.</p>
        <ul>
          <li>
            Epic Seven live on{' '}
            <ExternalLink href={OFFICIAL.steamStore}>Steam</ExternalLink> after
            demo ended.
          </li>
          <li>
            New server <strong>Foundry</strong> with starter buffs and
            celebration events (see <Link href="/foundry/">Foundry page</Link>
            ).
          </li>
          <li>
            Account conversion required to carry old progress —{' '}
            <Link href="/steam-transfer/">transfer guide</Link>.
          </li>
          <li>
            Featured Foundry rewards include limited Luna join path and New Moon
            Luna welcome skin (Foundry login gift) — verify in-game.
          </li>
        </ul>
        <p className="sources">
          Sources:{' '}
          <ExternalLink href={OFFICIAL.stoveLaunch}>Launch notice</ExternalLink>
          {' · '}
          <ExternalLink href={OFFICIAL.stoveFoundry}>Foundry notice</ExternalLink>
        </p>
      </article>

      <article className="card">
        <h2>Upcoming to watch</h2>
        <ul>
          <li>
            Foundry Guild War — target watch window ~<strong>2026-11-21</strong>{' '}
            (confirm official date).
          </li>
          <li>
            Foundry World Arena — posted <strong>2026-12-10</strong> after
            maintenance (UTC).
          </li>
          <li>Japanese VO return (called out as delayed at Steam launch).</li>
        </ul>
      </article>

      <article className="card">
        <h2>Template — next hero / collab drop</h2>
        <p className="muted">
          Placeholder structure for editors: when STOVE posts a new limited
          hero or collab, add a card with date, banner window, pickup tips (no
          gray codes), and outbound announcement link.
        </p>
        <ul>
          <li>Title / date — TBD</li>
          <li>Banner / pity notes — TBD (cite official)</li>
          <li>Foundry vs legacy differences — TBD</li>
          <li>Source link — TBD</li>
        </ul>
        <p>
          <em>Continuously updated</em> — check back after weekly maintenance.
        </p>
      </article>

      <p>
        Related: <Link href="/foundry/">Foundry</Link>,{' '}
        <Link href="/steam-notes/">Steam notes</Link>,{' '}
        <Link href="/faq/">FAQ</Link>.
      </p>
    </>
  );
}
