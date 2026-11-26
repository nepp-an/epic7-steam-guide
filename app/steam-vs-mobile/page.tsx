import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/steam-vs-mobile/';
const TITLE = 'Epic Seven Steam vs Mobile — Official Cross-Play FAQ';
const DESCRIPTION =
  'Official Epic Seven FAQ: Steam, STOVE PC, and mobile support cross-play with the same gameplay and no platform price difference. Steam requirements match STOVE PC. Some new-world content may follow a separate schedule.';

const FAQS = [
  [
    'Is Epic Seven on Steam the same game as on mobile?',
    'The official FAQ says you can enjoy the same gameplay experience across Steam, STOVE PC, and mobile, with cross-play supported across all platforms. It also says there are no differences in prices between platforms.',
  ],
  [
    'Are Steam system requirements different from STOVE PC?',
    'The official FAQ says the system requirements for the Steam version are the same as those for the STOVE PC client. The numeric minimums and recommended specs quoted on this site come from the Steam store listing, not from a separate STOVE PC table.',
  ],
  [
    'Can Steam only play in the new world?',
    'No. The official FAQ says that when you access Epic Seven through Steam, you can play in both the new world and existing worlds. The same content will generally be available, but certain features and content may operate differently in the new world or follow a separate schedule. The official example is World Arena matchmaking, available only in the new world.',
  ],
  [
    'Is Steam officially better than mobile, or verified on Steam Deck?',
    'This page does not say Steam is stronger, and it does not publish a performance comparison. The Steam store listing opened for this pass did not show a Steam Deck compatibility block, so official Deck support is left blank. UNCHEATER is quoted only as the anti-cheat listed for the Steam client, not as a claim about mobile anti-cheat.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/steam-vs-mobile.png',
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

      <h1>Epic Seven Steam vs mobile</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Official Steam FAQ questions 4–5 and the Steam store listing opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Official FAQ, questions 4–5: </strong>
        Steam, STOVE PC, and mobile support cross-play and the same gameplay
        experience, with no price difference between platforms. Steam system
        requirements match the STOVE PC client. Steam can enter new and
        existing worlds, but some content may differ or follow a separate
        schedule — the official example is new-world World Arena matchmaking.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#same-game">Same game, cross-play, prices</a>
        <a href="#worlds">Worlds and separate schedules</a>
        <a href="#requirements">Requirements and UNCHEATER</a>
        <a href="#left-blank">Left blank on purpose</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        This comparison only restates the official FAQ we opened, plus the
        Steam store listing for install expectations. For the transfer steps
        themselves, use the <a href="/steam-transfer/">Steam transfer page</a>.
        A beginner entry that starts with identity and transfer is on the{' '}
        <a href="/steam-beginner/">Steam beginner path</a>. Client tips already
        published on this site stay on the{' '}
        <a href="/steam-notes/">Steam notes</a>,{' '}
        <a href="/download/">download</a>, <a href="/foundry/">Foundry</a>, and{' '}
        <a href="/faq/">FAQ</a> pages.
      </p>

      <section id="same-game" aria-labelledby="same-title">
        <h2 id="same-title">Same gameplay, cross-play, and prices</h2>
        <SiteFig
          src="/images/diagram-steam-vs-mobile.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: official FAQ says cross-play, the same gameplay, and no platform price difference; Steam requirements match STOVE PC; some content may follow a separate schedule, such as new-world Arena matchmaking; Steam Deck, achievements, and performance comparisons are left blank. Not official Smilegate art."
          credit="Unofficial Steam vs mobile FAQ diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          Official question 5 asks whether the Steam, STOVE PC, and mobile
          versions are the same. The official answer is that you can enjoy the
          same gameplay experience across those platforms, with cross-play
          supported across all of them, and that there are no differences in
          prices between platforms.
        </p>
      </section>

      <section id="worlds" aria-labelledby="worlds-title">
        <h2 id="worlds-title">New world, existing worlds, and separate schedules</h2>
        <p>
          Official question 4 asks whether Steam is only available for playing
          in the new world. The official answer is that Steam can play in both
          the new world and existing worlds. The same content will generally be
          available in both, but certain features and content may operate
          differently in the new world or follow a separate schedule. The
          official example given is World Arena matchmaking, available only in
          the new world. The notice says further details regarding the new
          world will be provided in a future notice; this page does not invent
          those details.
        </p>
      </section>

      <section id="requirements" aria-labelledby="req-title">
        <h2 id="req-title">Steam requirements and UNCHEATER</h2>
        <p>
          The official FAQ says the system requirements for the Steam version
          are the same as those for the STOVE PC client. The numbers this site
          quotes are the ones published on the Steam store listing for app
          5019180: Windows 10 64-bit or higher; minimum Intel i5, 8 GB RAM, and
          GTX 1060 or higher; recommended Intel i7, 16 GB RAM, and GTX 1660 or
          higher; DirectX 11; 10 GB of storage.
        </p>
        <p>
          The same Steam listing names kernel-level anti-cheat UNCHEATER. That
          is an install expectation for the Steam client only. This page does
          not infer a mobile anti-cheat, a mobile bypass, or a claim that one
          platform’s anti-cheat is weaker or stronger. If you need the
          transfer or install checklists, use the{' '}
          <a href="/download/">download page</a> and the{' '}
          <a href="/steam-notes/">Steam notes page</a>.
        </p>
      </section>

      <section id="left-blank" aria-labelledby="blank-title">
        <h2 id="blank-title">Left blank on purpose</h2>
        <ul>
          <li>
            Official Steam Deck compatibility — the store page opened for this
            pass did not show a Deck block, so this page does not claim a
            Deck rating.
          </li>
          <li>A Steam achievement list.</li>
          <li>A frame-rate, loading, or other performance comparison between Steam and mobile.</li>
          <li>Any claim that “Steam is always stronger.”</li>
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
            , opened 26 November 2026: new and existing worlds, the World
            Arena matchmaking example, cross-play, identical gameplay and
            prices, and Steam requirements matching the STOVE PC client.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.steamStore}>
              Official Steam store listing, app 5019180
            </ExternalLink>
            , opened 26 November 2026: published PC requirements and UNCHEATER
            as a Steam-client install expectation. No Steam Deck compatibility
            block was visible on that page in this pass.
          </li>
        </ul>
      </section>
    </PageShell>
  );
}
