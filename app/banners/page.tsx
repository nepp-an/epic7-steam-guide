import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { AS_OF, OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Banners & new heroes — Epic Seven Steam window',
  description:
    'Living banner / new-hero log for Epic Seven Steam & Foundry players. Independent summaries with STOVE citations. Continuously updated.',
};

export default function BannersPage() {
  return (
    <>
      <h1>Banners &amp; new heroes</h1>
      <IndepNotice compact />
      <p>
        Continuously updated column. We do not sell bookmarks or gray codes —
        pull odds and pity live only in the official client.
      </p>

      <article className="card">
        <h2>Launch window ({AS_OF}+)</h2>
        <ul>
          <li>
            <strong>Foundry Rank 70 — Luna Joins:</strong> limited 5★ Luna +
            Glacial Purity skin path on Foundry through ~12/31 02:59 UTC (
            <Link href="/foundry/">Foundry rewards</Link>).
          </li>
          <li>
            <strong>Daily free Covenant summons</strong> on Foundry Summon
            Support (up to 1,260 over the posted window).
          </li>
          <li>
            Side-story themed cosmetics / lobby pack tied to{' '}
            <Link href="/secret-rabbit-hole/">Secret Rabbit♥Hole</Link>.
          </li>
        </ul>
        <p className="sources">
          Cite:{' '}
          <ExternalLink href={OFFICIAL.stoveFoundry}>Foundry notice</ExternalLink>
        </p>
      </article>

      <article className="card">
        <h2>Editor template — next limited / collab</h2>
        <ul>
          <li>Hero / artifact name — TBD</li>
          <li>Banner open / close (UTC) — TBD</li>
          <li>Foundry vs legacy differences — TBD</li>
          <li>Official announcement URL — TBD</li>
        </ul>
        <p className="muted">
          Drop a new card above this template after each STOVE maintenance post.
        </p>
      </article>

      <p>
        Also see <Link href="/updates/">updates</Link> and{' '}
        <Link href="/maintenance/">maintenance</Link>.
      </p>
    </>
  );
}
