import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/transfer-vs-foundry/';
const TITLE = 'Epic Seven Steam Transfer vs Foundry Server';
const H1 = 'Transferring your login is not moving to Foundry';
const DESCRIPTION =
  'Converting your Epic Seven login to Steam is not the same as moving to the Foundry server. Official FAQ question 4: Steam can still enter new and existing worlds. Foundry is a separate server you opt into.';

const FAQS = [
  [
    'Does transferring my login move me onto Foundry?',
    'No. A login conversion only changes how you sign in (email or SNS to Steam Simple Login) and keeps your legacy-server progress. Foundry is a separate new server you opt into on purpose. The conversion itself does not move an old Heir onto Foundry.',
  ],
  [
    'After a Steam conversion, can I only play in the new world?',
    'No. Official Steam FAQ question 4 says that when you access Epic Seven through Steam, you can play in both the new world and existing worlds — not only the new world.',
  ],
  [
    'Where are Foundry schedules and gifts documented?',
    'Dated Foundry schedule and gift notes already published on this site stay on the Foundry guide and the quests page. This page does not republish those calendars.',
  ],
  [
    'Is the Steam version a different game from mobile or STOVE PC?',
    'Official Steam FAQ question 5 covers cross-play, the same gameplay experience, and prices. That comparison is on the Steam vs mobile page.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/transfer-vs-foundry.png',
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
      <FaqJsonLd faqs={FAQS} />

      <h1>{H1}</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Official Steam FAQ questions 4–5 opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Login conversion is not a server move: </strong>
        Converting your login only changes how you sign in and keeps
        legacy-server progress. Foundry is a separate new server you opt into;
        the conversion itself does not move an old Heir onto Foundry. Official
        FAQ question 4: after a Steam conversion you can still enter the new
        world and existing worlds, not only the new world.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#not-foundry">Login transfer is not Foundry</a>
        <a href="#worlds">New and existing worlds</a>
        <a href="#schedules">Schedules and gifts</a>
        <a href="#related">Related</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        This is an independent comparison of two different decisions, not a
        second Foundry calendar and not a second transfer-steps page. The
        transfer overview stays on the{' '}
        <a href="/steam-transfer/">Steam transfer page</a>. A beginner entry
        that starts with identity and transfer is on the{' '}
        <a href="/steam-beginner/">Steam beginner path</a>.
      </p>

      <section id="not-foundry" aria-labelledby="not-foundry-title">
        <h2 id="not-foundry-title">Transferring your login is not moving to Foundry</h2>
        <SiteFig
          src="/images/diagram-transfer-vs-foundry.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: converting a login only changes how you sign in and keeps legacy-server progress; Foundry is a separate new server you opt into, and transfer does not move an old Heir there; official FAQ question 4 says Steam can still enter the new world and existing worlds, not only the new world. Not official Smilegate art."
          credit="Unofficial transfer vs Foundry diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          A Steam login conversion only changes how you sign in — from an email
          or Simple Login (SNS) account to a Simple Login (Steam) account — and
          keeps your legacy-server progress. Foundry is a separately chosen new
          server. The conversion itself does not move an old Heir onto Foundry.
        </p>
        <p>
          If you want Foundry celebration schedules, gifts, or a first-week
          route, use the dated notes already on the{' '}
          <a href="/foundry/">Foundry guide</a>. This page does not treat a
          login conversion as an automatic Foundry move.
        </p>
      </section>

      <section id="worlds" aria-labelledby="worlds-title">
        <h2 id="worlds-title">Official FAQ question 4: new and existing worlds</h2>
        <p>
          Official Steam FAQ question 4 asks whether Steam is only available
          for playing in the new world. The official answer is that when you
          access Epic Seven through Steam, you can play in both the new world
          and existing worlds — not only the new world.
        </p>
        <p>
          Official question 5, on the same FAQ, covers cross-play, the same
          gameplay experience, and prices across Steam, STOVE PC, and mobile.
          That comparison is on the{' '}
          <a href="/steam-vs-mobile/">Steam vs mobile page</a>.
        </p>
      </section>

      <section id="schedules" aria-labelledby="schedules-title">
        <h2 id="schedules-title">Schedules and gifts stay on the Foundry guide</h2>
        <p>
          This page does not republish Foundry calendar dates, login gifts, or
          Guild War times. Those dated notes, when this site has already
          published them, stay on the <a href="/foundry/">Foundry guide</a> and
          the <a href="/quests/">quests page</a>, which also keeps Foundry
          missions on a separate track from legacy-server tasks.
        </p>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related pages</h2>
        <ul>
          <li>
            <a href="/steam-transfer/">Steam transfer overview</a> — the kept
            Transfer vs Foundry short section and FAQ short answer.
          </li>
          <li>
            <a href="/foundry/">Foundry server guide</a> — schedules, gifts,
            and the kept “Transfer vs start on Foundry” section.
          </li>
          <li>
            <a href="/faq/">Epic Seven Steam FAQ</a> and the{' '}
            <a href="/quests/">quests page</a>.
          </li>
          <li>
            <a href="/steam-beginner/">Steam beginner path</a> — confirm
            identity and transfer before treating a Steam save as a main
            account.
          </li>
          <li>
            <a href="/already-registered/">Already registered or greyed button</a>
            {' '}and the <a href="/wrong-bind/">wrong-bind recovery page</a> —
            stuck-transfer problems, not a Foundry choice.
          </li>
        </ul>
      </section>

      <section id="faq" className="faq" aria-labelledby="faq-title">
        <h2 id="faq-title">FAQ</h2>
        {FAQS.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
          </details>
        ))}
      </section>

      <section id="sources" className="sources" aria-labelledby="sources-title">
        <h2 id="sources-title">Sources we actually reached</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>
              Official STOVE FAQ: FAQs Regarding Steam, questions 4–5
            </ExternalLink>
            , opened 26 November 2026: question 4 says Steam can enter the new
            world and existing worlds, not only the new world; question 5
            covers cross-play, the same gameplay experience, and prices.
          </li>
        </ul>
        <p className="muted">
          This page does not cite STOVE notice 14571828, whose full body was
          not recovered for this pass. The official account conversion guide
          (view/14609690) is not used as a Foundry source here: its official
          body, as opened for this pass, does not mention Foundry. User
          comments are not treated as official wording.
        </p>
      </section>
    </PageShell>
  );
}
