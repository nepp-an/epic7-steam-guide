import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { AS_OF, OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Foundry server — calendar through Dec 31, rewards, Guild War',
  description:
    'Epic Seven Foundry schedule: Draft Arena, Guild War 2026-11-21, World Arena 2026-12-10, buffs & events through 12/31. Independent guide citing STOVE.',
};

export default function FoundryPage() {
  return (
    <>
      <h1>Foundry — schedule &amp; rewards</h1>
      <IndepNotice compact />
      <p>
        Foundry is the new server opened with the Steam launch. Matchmaking for
        Draft Arena, Guild War, and World Arena is limited to Foundry players
        during the initial period (per STOVE). This page is a living calendar —
        always re-check official notices before planning.
      </p>
      <p className="as-of">
        Snapshot around {AS_OF} launch window. Times UTC unless noted.
      </p>

      <h2>Content unlock calendar</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Feature</th>
            <th>Open (UTC)</th>
            <th>Source note</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Foundry + Steam launch</td>
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
            <td>
              <strong>Guild War</strong>
            </td>
            <td>
              <strong>2026-11-21 03:00</strong>
            </td>
            <td>STOVE Foundry open notice (added 10/29)</td>
          </tr>
          <tr>
            <td>
              <strong>World Arena</strong>
            </td>
            <td>
              <strong>2026-12-10</strong> after maintenance
            </td>
            <td>STOVE schedule table</td>
          </tr>
        </tbody>
      </table>

      <h2>Calendar through 2026-12-31</h2>
      <table className="data">
        <thead>
          <tr>
            <th>Event / buff</th>
            <th>Start</th>
            <th>End</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Starter Support Full Buff</td>
            <td>10/29 after maint</td>
            <td>12/31 02:59</td>
          </tr>
          <tr>
            <td>Rank 70 Luna Joins</td>
            <td>10/29 after maint</td>
            <td>12/31 02:59</td>
          </tr>
          <tr>
            <td>Summon Support (daily free Covenant)</td>
            <td>10/29 after maint</td>
            <td>12/31 02:59</td>
          </tr>
          <tr>
            <td>Get Ready! World Arena points</td>
            <td>10/29 after maint</td>
            <td>12/31 02:59</td>
          </tr>
          <tr>
            <td>Foundry Welcome login gift (skin)</td>
            <td>10/29 after maint</td>
            <td>12/31 02:59 (once)</td>
          </tr>
          <tr>
            <td>Foundry mailbox growth pack</td>
            <td>10/29 after maint</td>
            <td>11/26 14:59</td>
          </tr>
          <tr>
            <td>Steam 100k wishlist mail (Foundry login)</td>
            <td>10/29 after maint</td>
            <td>~11/19 03:00</td>
          </tr>
          <tr>
            <td>Emergency Mission: Catalyst week 1</td>
            <td>10/29 after maint</td>
            <td>11/5 02:59</td>
          </tr>
          <tr>
            <td>Emergency Mission: Charm week 1</td>
            <td>11/5 03:00</td>
            <td>11/12 02:59</td>
          </tr>
          <tr>
            <td>Emergency Mission: Catalyst week 2</td>
            <td>11/12 03:00</td>
            <td>11/19 02:59</td>
          </tr>
          <tr>
            <td>Emergency Mission: Charm week 2</td>
            <td>11/19 after maint</td>
            <td>11/26 02:59</td>
          </tr>
          <tr>
            <td>
              <Link href="/secret-rabbit-hole/">Secret Rabbit♥Hole</Link> + Case
              Files
            </td>
            <td>10/29 after maint</td>
            <td>~6 weeks (side story)</td>
          </tr>
          <tr>
            <td>Daily Investigation / Lucky Board</td>
            <td>10/29 after maint</td>
            <td>11/19 02:59</td>
          </tr>
          <tr>
            <td>Bunny Girl Party Hall lobby pack sale</td>
            <td>10/29 after maint</td>
            <td>12/10 02:59</td>
          </tr>
          <tr>
            <td>Guild War</td>
            <td>11/21 03:00</td>
            <td>ongoing season</td>
          </tr>
          <tr>
            <td>World Arena</td>
            <td>12/10 after maint</td>
            <td>ongoing season</td>
          </tr>
        </tbody>
      </table>

      <h2>Starter Support buffs</h2>
      <ul>
        <li>
          Growth: +50% catalyst points; 2× Spirit Altar rune drop; +30% hero EXP /
          gold / account rank EXP; 2× Arena conquest points
        </li>
        <li>
          Hunt: +50% hunt craft material drop; +10% Otherworld Breach &amp; Hunt
          otherworldly equipment drop
        </li>
        <li>Stacks with new / returning player buffs (per notice)</li>
      </ul>

      <h2>Reward highlights</h2>
      <div className="card">
        <h3>Luna Joins (Rank 70)</h3>
        <p>Limited 5★ Luna, Glacial Purity skin, Experienced Penguins ×15.</p>
        <h3>Summon Support</h3>
        <p>
          +20 free Covenant summons daily (notice copy: up to 1,260 over the
          window) + Belche SD sticker once.
        </p>
        <h3>Login gifts</h3>
        <p>
          Welcome: New Moon Luna epic skin (Majestic Bunny Girl) + SD sticker
          (once). Separate mailbox pack (penguins, runes, catalysts…) through
          ~11/26 — claim before 7-day mail expiry.
        </p>
        <h3>World Arena prep ladder</h3>
        <p>
          Arena points → charms, Demon cursed accessories, Lv.85 selection
          chests, Skin Tickets — full ladder on STOVE.
        </p>
      </div>

      <h2>Side story</h2>
      <p>
        Deep dive: <Link href="/secret-rabbit-hole/">Secret Rabbit♥Hole</Link>{' '}
        (Case Files, Lucky Board, lobby pack).
      </p>

      <h2>Sources</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>
            STOVE — Foundry celebration (buffs / events)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveHome}>
            STOVE — Foundry open notice (GW 11/21, WA 12/10)
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamNewsFoundry}>
            Steam news — Foundry celebration
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSecretRabbitCase}>
            STOVE — Alencia Case Files
          </ExternalLink>
        </li>
      </ul>
    </>
  );
}
