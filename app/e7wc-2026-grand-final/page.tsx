import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/e7wc-2026-grand-final/';
const TITLE = 'E7WC 2026 Grand Final Time & Cheer Comment Event';
const H1 = 'E7WC 2026 Grand Final and cheer comment event';
const DESCRIPTION =
  'E7WC 2026 Grand Final starts 28 Nov 2026, 03:00 UTC. The cheer comment event is open 26–28 Nov 2026, 09:00 UTC: comment format, 2 Leif for all participants on 4 Dec, and official viewing notes. Independent guide — verify on STOVE.';

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/images/diagram-e7wc-grand-final.webp',
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
        Official STOVE notices opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>The cheer comment event is open now. </strong>
        Leave a formatted comment with a live-stream screenshot from 26 Nov
        through 28 Nov 2026, 09:00 UTC. The Grand Final broadcast day starts
        at 28 Nov 2026, 03:00 UTC and also includes the Winners Bracket Finals
        and Losers Bracket Finals. After 28 Nov 2026, 09:00 UTC this cheer
        section should be switched to past tense; the 4 Dec reward-delivery
        reminder stays until official word says otherwise.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#schedule">Schedule</a>
        <a href="#cheer">Cheer comment event</a>
        <a href="#watch">Watching</a>
        <a href="#offline">Offline finals</a>
        <a href="#related">Related</a>
        <a href="#sources">Sources</a>
      </nav>

      <SiteFig
        src="/images/diagram-e7wc-grand-final.webp"
        width={1100}
        height={360}
        alt="Self-drawn independent diagram: the E7WC 2026 cheer comment event is open through 28 Nov 2026, 09:00 UTC; Grand Final day starts 28 Nov 2026, 03:00 UTC with Winners and Losers Bracket Finals plus the Grand Final; all valid participants receive 2 Leif on 4 Dec 2026, stored for 7 days. Not official Smilegate art."
        credit="Independent diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
      />

      <section id="schedule" aria-labelledby="schedule-title">
        <h2 id="schedule-title">Schedule</h2>
        <ul>
          <li>
            Cheer comment event: 26 Nov 2026 through 28 Nov 2026, 09:00 UTC
            (open now).
          </li>
          <li>
            Grand Final day: 28 Nov 2026, 03:00 UTC — Winners Bracket Finals,
            Losers Bracket Finals, and the Grand Final.
          </li>
        </ul>
        <p>
          Earlier official stages already finished and are background only:
          in-game Preliminaries ran 12 Sep 2026, 03:00 UTC through 27 Sep 2026,
          02:59 UTC; tournament registration was 28–30 Sep 2026, 14:59 UTC;
          Group Stage days were scheduled from 10 Oct 2026, 03:00 UTC, and the
          Knockout Stage continued through 14 Nov 2026, 03:00 UTC.
        </p>
        <p className="muted">
          Official 11/19 update: Bunny Girl Maid Cecilia and the artifact Covert
          Service are set as a Global Banned Hero and Artifact in the E7WC 2026
          Grand Final.
        </p>
      </section>

      <section id="cheer" aria-labelledby="cheer-title">
        <h2 id="cheer-title">Cheer comment event</h2>
        <p>
          Leave a comment on the official cheer event post, following the format
          below, with a cheering message for the players and a screenshot proof
          of watching the live stream.
        </p>
        <p>
          <strong>Format: </strong>
          <code>Nickname / Server / Review &amp; Cheering Message with Live Stream Screenshot</code>
        </p>
        <ul>
          <li>
            To prevent unauthorized use of other Heirs' screenshots, include the
            Server and Nickname in the screenshot.
          </li>
          <li>
            Comments that do not follow the format, or include special characters
            not specified in the format, may be excluded.
          </li>
        </ul>
        <h3>Reward</h3>
        <p>
          All participants: 2 Leif. Rewards will be sent to the in-game mailbox
          on 2026/12/4 (Fri). Storage period: 7 days.
        </p>
        <h3>Please note</h3>
        <ul>
          <li>
            Write down your correct nickname and server info in order to claim
            rewards.
          </li>
          <li>
            Event participation is based on the in-game nickname you provided.
            Rewards may not be given out correctly if you change your nickname.
          </li>
          <li>
            Participants can only win one event prize per account, and duplicate
            entries are exempt from receiving rewards. You cannot participate in
            the same event on other STOVE communities with different languages.
          </li>
          <li>Screenshots from both mobile and PC are accepted.</li>
          <li>
            If the provided account information is invalid, participation may be
            canceled.
          </li>
          <li>
            Using other players' images or any dishonest means cancels the entry.
          </li>
        </ul>
      </section>

      <section id="watch" aria-labelledby="watch-title">
        <h2 id="watch-title">Watching the broadcast</h2>
        <p>
          Official notice: watch the E7WC 2026 broadcasts on Twitch (CHZZK for
          Korea) to earn rewards. Viewing reward coupons will also be announced
          during the broadcasts. This page does not invent a channel URL or the
          contents or quantity of those coupons.
        </p>
        <p className="muted">
          The official schedule post has a “Visit the E7WC 2026 Official
          Website” prompt but does not publish a copyable URL in the body this
          page opened. This page does not invent that link.
        </p>
      </section>

      <section id="offline" aria-labelledby="offline-title">
        <h2 id="offline-title">Offline finals</h2>
        <p>
          Official player-facing notice: the Finals will be held offline at the
          Super Plex theater of Lotte Cinema, Lotte World Tower in Jamsil,
          Seoul, South Korea. Players must be able to travel to South Korea
          during the Finals schedule. The organizers cover airfare, lodging,
          food, and more for players traveling to the Grand Final.
        </p>
        <p>
          Further details will be shared in a separate notice. This page does
          not invent audience tickets, entry rules, or seating information.
        </p>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related on this site</h2>
        <ul>
          <li>
            <a href="/updates/">Updates</a> — living log with a card for this
            open cheer window.
          </li>
          <li>
            <a href="/quests/">Quests</a> — current event routes, including this
            comment event.
          </li>
          <li>
            <a href="/banners/">Banners</a> — Bunny Girl Maid Cecilia &amp;
            Covert Service pickup, with the Grand Final Global Banned note.
          </li>
        </ul>
      </section>

      <section id="sources" className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Official sources opened for this page</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.stoveE7wcCheer}>
              STOVE 14650455 — E7WC 2026 Grand Final Cheer Comment Event
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveE7wcSchedule}>
              STOVE 14499965 — About E7WC 2026! Schedule and Registration
              Details
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveVersion87Update}>
              STOVE 14638143 — Version 8.7 2nd Update (Global Banned note)
            </ExternalLink>
          </li>
        </ul>
        <p className="muted">
          Independent guide — not affiliated with Smilegate, STOVE, or Steam.
          This page does not predict a champion, quote odds, or list store
          bundles.
        </p>
      </section>
    </PageShell>
  );
}
