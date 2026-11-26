import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/epic-road/';
const TITLE = 'Epic Seven Epic Road & Record of the Journey (to 10 Dec)';
const H1 = 'Epic Road and Record of the Journey';
const DESCRIPTION =
  'Official Epic Road and Record of the Journey windows through 10 Dec 2026, 02:59 UTC: Faint Guiding Stone path rewards and the copied 42-day check-in table, including the 7-day special rewards. Independent guide — verify on STOVE.';

const CHECK_INS: readonly (readonly [string, string, string, string])[] = [
  ['1', 'Faint Guiding Stone', '', '25'],
  ['2', 'Faint Guiding Stone', '', '25'],
  ['3', 'Faint Guiding Stone', '', '25'],
  ['4', 'Epic Charm Selection Chest', '', '2'],
  ['5', 'Faint Guiding Stone', '', '25'],
  ['6', 'Faint Guiding Stone', '', '25'],
  ['7', 'Faint Guiding Stone', '', '50'],
  ['7+', '', 'Chronicle Bookmark', '100'],
  ['8', 'Faint Guiding Stone', '', '25'],
  ['9', 'Faint Guiding Stone', '', '25'],
  ['10', 'Faint Guiding Stone', '', '25'],
  ['11', 'MolaGora', '', '4'],
  ['12', 'Faint Guiding Stone', '', '25'],
  ['13', 'Faint Guiding Stone', '', '25'],
  ['14', 'Faint Guiding Stone', '', '50'],
  ['14+', '', 'Lv. 85 Mana Stone Selection Chest', '1'],
  ['15', 'Faint Guiding Stone', '', '25'],
  ['16', 'Faint Guiding Stone', '', '25'],
  ['17', 'Faint Guiding Stone', '', '25'],
  ['18', 'Epic Charm Selection Chest', '', '2'],
  ['19', 'Faint Guiding Stone', '', '25'],
  ['20', 'Faint Guiding Stone', '', '25'],
  ['21', 'Faint Guiding Stone', '', '50'],
  ['21+', '', 'Lv. 88 Mana Stone Selection Chest', '1'],
  ['22', 'Faint Guiding Stone', '', '25'],
  ['23', 'Faint Guiding Stone', '', '25'],
  ['24', 'Faint Guiding Stone', '', '25'],
  ['25', 'MolaGora', '', '4'],
  ['26', 'Faint Guiding Stone', '', '25'],
  ['27', 'Faint Guiding Stone', '', '25'],
  ['28', 'Faint Guiding Stone', '', '50'],
  ['28+', '', '5★ Artifact Summon Ticket', '1'],
  ['29', 'Faint Guiding Stone', '', '25'],
  ['30', 'Faint Guiding Stone', '', '25'],
  ['31', 'Faint Guiding Stone', '', '25'],
  ['32', 'Chronicle Bookmark', '', '25'],
  ['33', 'Faint Guiding Stone', '', '25'],
  ['34', 'Faint Guiding Stone', '', '25'],
  ['35', 'Faint Guiding Stone', '', '50'],
  ['35+', '', '5★ Hero Summon Ticket', '1'],
  ['36', 'Faint Guiding Stone', '', '25'],
  ['37', 'Faint Guiding Stone', '', '25'],
  ['38', 'Faint Guiding Stone', '', '25'],
  ['39', 'Chronicle Bookmark', '', '25'],
  ['40', 'Faint Guiding Stone', '', '50'],
  ['41', 'Chronicle Bookmark', '', '25'],
  ['42', 'Chronicle Bookmark', '', '25'],
  ['42+', '', 'Special 5★ Covenant Hero Selector', '1'],
];

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/images/diagram-epic-road.webp',
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
        Official STOVE event notices opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>One window, two events: </strong>
        Epic Road and Record of the Journey both run from 29 Oct 2026 after
        maintenance through 10 Dec 2026, 02:59 UTC. Enter either event from
        Lobby &gt; Event &gt; Special Event. This unofficial page restates the
        opened notices; it does not copy board-slot rewards from promotional art.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#epic-road">Epic Road</a>
        <a href="#record-of-the-journey">Record of the Journey</a>
        <a href="#related">Related</a>
        <a href="#sources">Sources</a>
      </nav>

      <SiteFig
        src="/images/diagram-epic-road.webp"
        width={1100}
        height={360}
        alt="Self-drawn independent diagram: Epic Road and Record of the Journey share one window through 10 Dec 2026, 02:59 UTC; enter from Lobby, Event, Special Event; Epic Road spends Faint Guiding Stones on connected slots from left to right; Record of the Journey is a 42-day cumulative check-in with a special reward every 7 days. Not official Smilegate art."
        credit="Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
      />

      <section id="epic-road" aria-labelledby="epic-road-title">
        <h2 id="epic-road-title">Epic Road</h2>
        <p>
          Players receive rewards using Faint Guiding Stones obtained through
          Epic Road event missions or from the Record of the Journey Attendance
          Book. Event rewards are obtained by tapping the slots connected from
          left to right.
        </p>
        <p>
          Official notice: players can obtain all rewards by completing missions
          during the 42-day play period and completing all cumulative check-ins
          in the Record of the Journey Attendance Book.
        </p>
        <ul>
          <li>
            A grace period begins 7 days before the event ends. This page does
            not invent a clock time for that start. Missions are disabled during
            the grace period.
          </li>
          <li>
            During the grace period, only reward collection and Faint Guiding
            Stone purchases remain available.
          </li>
          <li>
            Players can use Skystone to purchase enough Faint Guiding Stones to
            cover the total cost of all unclaimed rewards. The official notice
            does not publish a unit price, so this page does not invent one.
          </li>
        </ul>
        <p className="muted">
          The official Epic Road body does not include a text table of board-slot
          rewards. This page does not reconstruct that grid from promotional
          images.
        </p>
      </section>

      <section id="record-of-the-journey" aria-labelledby="journey-title">
        <h2 id="journey-title">Record of the Journey</h2>
        <p>
          Players can receive rewards based on their cumulative attendance by
          logging in to Epic Seven for 42 days during the event period.
          Additional special rewards are provided as clear rewards every 7 days.
        </p>
        <p>
          The table below is copied from the official Record of the Journey
          notice. Quantity applies to the reward listed on that row.
        </p>
        <div className="limited-window-table">
          <table className="data">
            <thead>
              <tr>
                <th>Check-in day</th>
                <th>Standard reward</th>
                <th>Special reward</th>
                <th className="num">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {CHECK_INS.map(([day, standard, special, qty]) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{standard || '—'}</td>
                  <td>{special || '—'}</td>
                  <td className="num">{qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul>
          <li>
            A grace period begins 7 days before the event ends, during which
            only catch-up check-ins are available. This page does not invent a
            clock time for that start.
          </li>
          <li>
            You can use Skystone to catch up on missed check-in days. The
            official notice does not publish a price, so this page does not
            invent one.
          </li>
        </ul>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related on this site</h2>
        <ul>
          <li>
            <a href="/quests/">Quests</a> — current event routes, including this
            window.
          </li>
          <li>
            <a href="/updates/">Updates</a> — living log with a card for this
            pair of events.
          </li>
          <li>
            <a href="/foundry/">Foundry</a> — current limited-growth claims on
            the new server.
          </li>
          <li>
            <a href="/steam-beginner/">Steam beginner path</a> — confirm
            transfer first, then current limited check-ins.
          </li>
        </ul>
      </section>

      <section id="sources" className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Official sources opened for this page</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.stoveEpicRoad}>
              STOVE 14606370 — Epic Road Special Event
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveRecordOfTheJourney}>
              STOVE 14606349 — 42-Day Journey! ‘Record of the Journey’ Check-In
              Event
            </ExternalLink>
          </li>
        </ul>
        <p className="muted">
          Independent guide — not affiliated with Smilegate, STOVE, or Steam.
          Confirm live timers and button state in the client and on the official
          notices.
        </p>
      </section>
    </PageShell>
  );
}
