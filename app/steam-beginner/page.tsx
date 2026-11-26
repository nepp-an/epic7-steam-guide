import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/steam-beginner/';
const TITLE = 'Epic Seven Steam Beginner Path — Confirm Transfer First';
const DESCRIPTION =
  'Start Epic Seven on Steam by confirming your identity and transfer before you treat a save as your main account. Official FAQ: progress and unclaimed rewards carry over; the same account still works on STOVE PC and mobile.';

const FAQS = [
  [
    'Should I start playing on Steam before I transfer an existing account?',
    'Confirm the STOVE identity you want to keep, and complete the official transfer if you already have an email or Simple Login (SNS) account, before you treat a Steam save as your main account. The official Steam FAQ says a transfer can be done at any time, but a Steam save started first is not automatically that older account.',
  ],
  [
    'What carries over after an official transfer?',
    'The official FAQ says all game progress and game data are retained, including unclaimed rewards, event items, and any ongoing Epic Pass progress.',
  ],
  [
    'Can I still play on my phone after I transfer to Steam?',
    'Yes. The official FAQ says that even after transferring, you can still log in to the STOVE PC client and the mobile version with the same account. Steam can also enter both the new world and existing worlds.',
  ],
  [
    'Does this page give a first-week farming schedule?',
    'No. It does not invent a day-by-day plan, a yield table, or a currency target. For dated Foundry and quest notes already published on this site, use the first-week section on the Foundry guide and the quests page.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/steam-beginner.png',
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

      <h1>Epic Seven Steam beginner path</h1>
      <IndepNotice locale="en" compact />
      <p className="last-verified">
        Official Steam FAQ and Steam store listing opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Start here: </strong>
        Confirm the account you want to keep, and finish the official transfer
        if you already have a STOVE email or Simple Login (SNS) account, before
        you treat a Steam save as your main character. Official FAQ: progress
        and unclaimed rewards carry over, the same account still works on STOVE
        PC and mobile, and Steam can enter new and existing worlds.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#confirm-first">Confirm first</a>
        <a href="#what-carries">What carries over</a>
        <a href="#after-transfer">After transfer</a>
        <a href="#install">Install and anti-cheat</a>
        <a href="#next">Where to go next</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        This is an independent Steam beginner entry, not a Smilegate official
        new-player handbook. It only restates the official transfer FAQ we
        opened, plus the Steam store’s published install and UNCHEATER notes.
        It does not invent a day-N schedule or a currency yield table.
      </p>

      <section id="confirm-first" aria-labelledby="confirm-title">
        <h2 id="confirm-title">Confirm identity and transfer first</h2>
        <SiteFig
          src="/images/diagram-steam-beginner.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: confirm identity and transfer before treating a Steam save as a main account; progress and unclaimed rewards can carry over; the same account still works on STOVE PC and mobile; Steam can enter new and existing worlds. Not official Smilegate art."
          credit="Unofficial Steam beginner-path diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          If you already have an Epic Seven account created with an email
          address or a Simple Login (SNS) account, the official FAQ says you
          can transfer that account to a Simple Login (Steam) account. Account
          transfers can be completed at any time, without a separate
          application period. Follow the official account-linking instructions
          rather than starting a second save and hoping it merges later.
        </p>
        <p>
          If you already started on Steam with a new account before
          transferring, that Steam save is not automatically your older
          account. The official FAQ has a conversion path for that situation;
          the step-by-step transfer notes on this site are on the{' '}
          <a href="/steam-transfer/">Steam transfer page</a>.
        </p>
      </section>

      <section id="what-carries" aria-labelledby="carry-title">
        <h2 id="carry-title">What carries over</h2>
        <p>
          When you transfer your account, the official FAQ says all game
          progress and game data will be retained, including unclaimed rewards,
          event items, and any ongoing Epic Pass progress.
        </p>
      </section>

      <section id="after-transfer" aria-labelledby="after-title">
        <h2 id="after-title">The same account after transfer</h2>
        <p>
          Even after transferring, you can still log in to the STOVE PC client
          and the mobile version using the same account. When you access Epic
          Seven through Steam, you can play in both the new world and existing
          worlds. The official FAQ also notes that some features and content
          may operate differently in the new world or follow a separate
          schedule. The comparison of those platform facts is on the{' '}
          <a href="/steam-vs-mobile/">Steam vs mobile page</a>.
        </p>
      </section>

      <section id="install" aria-labelledby="install-title">
        <h2 id="install-title">Install and anti-cheat</h2>
        <p>
          Download only from the official Steam store listing for app 5019180.
          That store page is the source used here for system requirements and
          for the kernel-level anti-cheat labelled UNCHEATER. Expect an
          elevated prompt on a first launch; a locked-down work or school PC
          may block the client. This page does not infer a mobile anti-cheat
          from the Steam listing. Details already published on this site are
          on the <a href="/download/">download page</a> and the{' '}
          <a href="/steam-notes/">Steam notes page</a>.
        </p>
        <ul>
          <li>Minimum OS listed: Windows 10 64-bit or higher.</li>
          <li>Minimum CPU / RAM / GPU listed: Intel i5 or higher, 8 GB RAM, GTX 1060 or higher.</li>
          <li>Recommended RAM / GPU listed: 16 GB RAM, GTX 1660 or higher.</li>
          <li>Storage listed: 10 GB available space. DirectX 11.</li>
        </ul>
      </section>

      <section id="next" aria-labelledby="next-title">
        <h2 id="next-title">Where to go next</h2>
        <p>
          This page does not invent a first-week timetable. Use the dated
          notes already on this site:
        </p>
        <ul>
          <li>
            <a href="/foundry/#first-week">Foundry first-week priorities</a> —
            the on-site first-week route, not a new schedule invented here.
          </li>
          <li>
            <a href="/quests/">Foundry daily and weekly quests</a> — what this
            site already documents about resets and Foundry-only missions.
          </li>
          <li>
            <a href="/heroes/">Beginner hero picks</a> and the{' '}
            <a href="/hero-builds/">hero builds library</a> — sourced starter
            and hunt notes, with blank fields left blank.
          </li>
          <li>
            <a href="/steam-tier-list/">Steam and transfer build priorities</a>{' '}
            — what this site already says to build first after a transfer.
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
              Official STOVE FAQ: FAQs Regarding Steam
            </ExternalLink>
            , opened 26 November 2026: transfer timing, carried progress and
            unclaimed rewards, same-account login on STOVE PC and mobile, and
            Steam access to new and existing worlds.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.steamStore}>
              Official Steam store listing, app 5019180
            </ExternalLink>
            , opened 26 November 2026: published system requirements and
            kernel-level anti-cheat UNCHEATER. This pass did not find a Steam
            Deck compatibility block on that store page, so this beginner page
            does not claim one.
          </li>
        </ul>
        <p className="muted">
          This page does not cite STOVE notice 14571828, whose full body was
          not recovered for this pass, and it does not invent a day-N yield
          table.
        </p>
      </section>
    </PageShell>
  );
}
