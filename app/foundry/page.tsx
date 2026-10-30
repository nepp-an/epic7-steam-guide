import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { AS_OF, OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Foundry server schedule & rewards',
  description:
    'Independent overview of Epic Seven Foundry: Draft Arena, Guild War (~11/21), World Arena (12/10), starter buffs and celebration rewards. Verify on STOVE.',
};

export default function FoundryPage() {
  return (
    <>
      <h1>Foundry — schedule &amp; rewards</h1>
      <IndepNotice compact />
      <p className="as-of">
        Snapshot based on STOVE celebration notices around the {AS_OF} Steam /
        Foundry launch window. Times are UTC unless noted. Always re-check{' '}
        <ExternalLink href={OFFICIAL.stoveFoundry}>
          the official Foundry post
        </ExternalLink>{' '}
        and in-game event UI — this page is a living summary, not a contract.
      </p>

      <h2>Content unlock calendar</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Approx. open</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundry server + Steam launch</td>
            <td>2026-10-29 after maintenance</td>
            <td>
              <ExternalLink href={OFFICIAL.stoveLaunch}>Launch notice</ExternalLink>
            </td>
          </tr>
          <tr>
            <td>Draft Arena</td>
            <td>2026-10-29 after maintenance</td>
            <td>Foundry-only matchmaking</td>
          </tr>
          <tr>
            <td>Guild War</td>
            <td>~2026-11-21</td>
            <td>
              Planning estimate for this guide — earlier STOVE text also said
              “detailed schedule in November” / other mirrors cited mid-November.
              <strong> Confirm on STOVE</strong> before relying on the date.
            </td>
          </tr>
          <tr>
            <td>World Arena</td>
            <td>2026-12-10 after maintenance (UTC)</td>
            <td>Cited from STOVE Foundry schedule table</td>
          </tr>
        </tbody>
      </table>

      <h2>Starter Support Full Buff (Foundry)</h2>
      <p>
        Window (as posted): 2026-10-29 after maintenance → 2026-12-31 02:59 UTC.
        Location: Event → Welcome! Foundry Server → Starter Support.
      </p>
      <ul>
        <li>Growth: +50% catalyst points; 2× Spirit Altar rune drop; +30% hero EXP / gold / account rank EXP; 2× Arena conquest points</li>
        <li>Hunt: +50% hunt craft material drop; +10% Otherworld Breach &amp; Hunt otherworldly equipment drop</li>
        <li>Stacks with new / returning player buffs (per notice)</li>
      </ul>

      <h2>Celebration event highlights</h2>
      <div className="card">
        <h3>Rank 70 — Luna Joins</h3>
        <p>
          Through ~2026-12-31 02:59 UTC: limited 5★ Luna, Glacial Purity skin,
          Experienced Penguins ×15 (per STOVE table).
        </p>
        <h3>Summon Support</h3>
        <p>
          Daily +20 free Covenant summons during the window (up to 1,260 total
          claimed in the notice copy) + one-time Belche SD sticker.
        </p>
        <h3>Login gifts</h3>
        <p>
          Welcome gift includes New Moon Luna epic skin (Majestic Bunny Girl) +
          SD sticker (once). Separate mailbox growth pack window was listed
          through ~2026-11-26 14:59 UTC (penguins, runes, catalysts, etc.). Claim
          before mailbox expiry.
        </p>
        <h3>Get Ready! World Arena</h3>
        <p>
          Point grind via Arena play toward charms / equipment selection chests /
          skin tickets — see official reward ladder on STOVE.
        </p>
        <h3>Emergency Mission event dungeons</h3>
        <p>
          Alternating catalyst / charm weeks from 10/29 through ~11/26 (four
          one-week slots). Unlock after clearing 6th World Ep 1-6.
        </p>
      </div>

      <h2>Sustain note</h2>
      <p>
        This column will track schedule slips, Guild War confirmations, and
        Foundry-only patches. Cross-link:{' '}
        <Link href="/updates/">Updates</Link>,{' '}
        <Link href="/faq/">FAQ</Link>.
      </p>

      <h2>Sources</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>
            STOVE — STEAM launch &amp; Foundry celebration
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamNewsFoundry}>
            Steam news — Foundry celebration
          </ExternalLink>
        </li>
      </ul>
    </>
  );
}
