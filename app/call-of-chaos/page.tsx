import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/call-of-chaos/';
const TITLE = 'Epic Seven Call of Chaos Season 2 — Windows and Rules';
const H1 = 'Call of Chaos Season 2';
const DESCRIPTION =
  'Call of Chaos Season 2 windows and rules: 19 Nov after maintenance to 10 Dec 2026, 02:59 UTC, grace period to 17 Dec 02:59 UTC, Season Heroes, ranking rewards, and named Fate nerfs. Independent guide — verify on STOVE.';

const SEASON_HEROES = [
  'Laia',
  'Luna',
  'Yuna',
  'Kise',
  'Alencia',
  'New Kid Adin',
  'Death Dealer Ray',
  'Fallen Cecilia',
  'Charlotte',
  'Zio',
  'Twisted Eidolon Kayron',
  'Sylvan Sage Vivian',
  'Kayron',
  'Diene',
  'Straze',
  'Krau',
  'Designer Lilibet',
  'Abyssal Yufine',
  'Tempest Surin',
  'Ras',
  'Aki',
  'Hwayoung',
  'Landy',
  "Archdemon's Shadow",
  'Unbound Knight Arowell',
  'Martial Artist Ken',
  'Remnant Violet',
  'Silver Blade Aramintha',
  'Mediator Kawerik',
  'Immortal Wukong',
  'Conqueror Lilias',
] as const;

const NEW_HEROES = [
  'Laia',
  'Luna',
  'Alencia',
  'Yuna',
  'New Kid Adin',
  'Death Dealer Ray',
  'Kise',
] as const;

const RANK_REWARDS: readonly (readonly [string, string, string])[] = [
  ['Rank 1', 'Ruler of Chaos Badge', '5 Cosmoniums'],
  ['Rank 2 – Rank 10', 'Judge of Fate Badge', '5 Cosmoniums'],
  ['Rank 11 – Rank 100', 'Guide of Purification Badge', '5 Cosmoniums'],
  ['Rank 101 – Rank 300', '—', "70 Challenger's Merit Chests"],
  ['Rank 301 – Rank 500', '—', "60 Challenger's Merit Chests"],
  ['Rank 501 – Rank 750', '—', "50 Challenger's Merit Chests"],
  ['Rank 751 – Rank 1000', '—', "40 Challenger's Merit Chests"],
];

const FATE_NERFS = [
  "Landy: You're Under Arrest",
  "Archdemon's Shadow: Dark and Black",
  'Straze: Incomplete Fastus',
  'Tempest Surin: Assassination Mode',
  'Vow of Silence',
  'Sentinel Destruction Expert',
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/images/diagram-call-of-chaos.webp',
  alternateLocales: ['en'],
});

export default function Page() {
  return (
    <PageShell locale="en" path={PATH} languages={['en']}>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: TITLE,
          url: absoluteUrl(PATH),
          description: DESCRIPTION,
          inLanguage: 'en',
          isPartOf: {
            '@type': 'WebSite',
            name: BRAND,
            url: `${SITE_ORIGIN}/`,
          },
        }}
      />

      <h1>{H1}</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Official STOVE Version 8.7 2nd Update notice opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Winter 2026 is in season. </strong>
        The Call of Chaos Season 2 runs from 19 Nov 2026 after maintenance
        through 10 Dec 2026, 02:59 UTC, with a grace period from 10 Dec 2026,
        03:00 UTC through 17 Dec 2026, 02:59 UTC. Enter from the Arena screen.
        Account Rank 20 or higher is required. This unofficial page restates
        windows and rules from the opened notice; it is not a best-Fate or
        best-team guide.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#entry">Entry and windows</a>
        <a href="#season-heroes">Season Heroes</a>
        <a href="#ranking">Ranking rewards</a>
        <a href="#fate-nerfs">Named Fate nerfs</a>
        <a href="#shop">Chests and shop</a>
        <a href="#related">Related</a>
        <a href="#sources">Sources</a>
      </nav>

      <SiteFig
        src="/images/diagram-call-of-chaos.webp"
        width={1100}
        height={360}
        alt="Self-drawn independent diagram: Call of Chaos Season 2 is entered from the Arena screen bottom-left banner at account Rank 20 or higher; the Winter 2026 season runs 19 Nov after maintenance to 10 Dec 2026, 02:59 UTC; Draft Arena is unavailable during the season; the grace period is 10 Dec 03:00 to 17 Dec 02:59 UTC, when new Challenges cannot be started. Not official Smilegate art."
        credit="Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
      />

      <section id="entry" aria-labelledby="entry-title">
        <h2 id="entry-title">Entry, windows, and grace period</h2>
        <ul>
          <li>
            Enter by tapping the [The Call of Chaos] banner at the bottom left
            of the Arena entry screen.
          </li>
          <li>Reach Account Rank 20 or higher.</li>
          <li>
            Winter 2026 Season: 19 Nov 2026 (Thu) after the maintenance through
            10 Dec 2026 (Thu), 02:59 UTC.
          </li>
          <li>
            Grace period: 10 Dec 2026 (Thu), 03:00 UTC through 17 Dec 2026
            (Thu), 02:59 UTC.
          </li>
        </ul>
        <ul>
          <li>
            The Call of Chaos is integrated across all servers and starts and
            ends based on Korean Standard Time (KST), regardless of each
            server's local reset time.
          </li>
          <li>
            Draft Arena is unavailable while The Call of Chaos season is active
            and is replaced again after the grace period ends.
          </li>
          <li>
            During the grace period, you can enter The Call of Chaos, but you
            cannot proceed with a new Challenge. Features other than Season
            Ranking, Season Records, and the Supply Shop remain available.
          </li>
          <li>
            If the season ends while a Challenge is in progress, that Challenge
            is automatically completed at that point, and Challenge Calculation
            proceeds when you log in during the grace period.
          </li>
          <li>
            The outcome of a battle in progress when the season ends is not
            reflected in the Challenge's win/loss record.
          </li>
        </ul>
      </section>

      <section id="season-heroes" aria-labelledby="heroes-title">
        <h2 id="heroes-title">Season Heroes</h2>
        <p>
          Official wording: “The following Heroes will be included in the Season
          Heroes lineup.” Seven new Heroes are added, and Researcher Carrot is
          removed.
        </p>
        <p>
          <strong>Added in Season 2: </strong>
          {NEW_HEROES.join(', ')}.
        </p>
        <p>
          <strong>Removed: </strong>
          Researcher Carrot.
        </p>
        <ul className="limited-hero-list">
          {SEASON_HEROES.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>

      <section id="ranking" aria-labelledby="ranking-title">
        <h2 id="ranking-title">Season Ranking rewards</h2>
        <p>
          Official notice: Season Ranking rewards are expanded from the top 100
          to the top 1,000 players. Rank rewards can be obtained by entering the
          Call of Chaos during the grace period after the season ends. Acquired
          Badges can be used in Edit Profile Card &gt; Badge.
        </p>
        <div className="limited-window-table">
          <table className="data">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Ranking rewards</th>
                <th>Currency rewards</th>
              </tr>
            </thead>
            <tbody>
              {RANK_REWARDS.map(([rank, badge, currency]) => (
                <tr key={rank}>
                  <td>{rank}</td>
                  <td>{badge}</td>
                  <td>{currency}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="fate-nerfs" aria-labelledby="nerfs-title">
        <h2 id="nerfs-title">Named Fate nerfs</h2>
        <p>
          The official notice names the following Fates under “Nerfs.” This page
          lists those names only. It does not describe effects or copy
          before/after hero balance changes.
        </p>
        <ul>
          {FATE_NERFS.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>

      <section id="shop" aria-labelledby="shop-title">
        <h2 id="shop-title">Challenger's Merit Chest and Supply Shop</h2>
        <p>
          The official notice includes Challenger's Merit Chest and Supply Shop
          probability tables, but the opened text is incomplete (missing
          quantities and repeated rows). This page therefore leaves those rates
          blank and points to the official notice instead of reconstructing a
          table.
        </p>
        <p>
          Official wording: the prices of most Exchange items will be
          significantly reduced compared to Season 1, with some exceptions. The
          notice does not publish unit prices in the body used here, so this
          page does not invent shop prices.
        </p>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related on this site</h2>
        <ul>
          <li>
            <a href="/updates/">Updates</a> — living log with a card for this
            season window.
          </li>
          <li>
            <a href="/quests/">Quests</a> — current event routes.
          </li>
          <li>
            <a href="/foundry/">Foundry</a> — the Draft Arena / Call of Chaos
            calendar row and current limited-growth claims.
          </li>
        </ul>
      </section>

      <section id="sources" className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Official source opened for this page</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.stoveVersion87Update}>
              STOVE 14638143 — 11/19 (Thu) Version 8.7 2nd Update Content
            </ExternalLink>
          </li>
        </ul>
        <p className="muted">
          Independent guide — not affiliated with Smilegate, STOVE, or Steam.
          Confirm live timers in the client and on the official notice.
        </p>
      </section>
    </PageShell>
  );
}
