import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { AS_OF, BRAND, OFFICIAL, TARGET_DOMAIN } from '@/lib/site';

export const metadata: Metadata = {
  title: `Epic Seven on Steam — Transfer, Foundry & FAQ | ${BRAND}`,
  description:
    'Independent Epic Seven Steam guide: official store link, STOVE↔Steam transfer steps, Foundry schedule & rewards, FAQ and troubleshooting. Not Smilegate / STOVE.',
};

const faqs = [
  {
    q: 'How do I play Epic Seven on Steam?',
    a: (
      <>
        Install from the{' '}
        <ExternalLink href={OFFICIAL.steamStore}>official Steam store</ExternalLink>
        . Steam requires a linked STOVE account. To keep existing progress, convert
        your email/SNS login to Steam on STOVE <em>before</em> signing in — see{' '}
        <Link href="/steam-transfer/">transfer guide</Link> and the{' '}
        <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>.
      </>
    ),
  },
  {
    q: 'Does STOVE↔Steam transfer keep heroes, purchases, and Epic Pass?',
    a: (
      <>
        Per the official FAQ, transferring keeps game progress and data, including
        unclaimed rewards, event items, and ongoing Epic Pass progress. Always
        confirm on{' '}
        <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>.
      </>
    ),
  },
  {
    q: 'What is the Foundry server?',
    a: (
      <>
        Foundry is the new server that opened with the Steam launch window (as of{' '}
        {AS_OF}). It has starter buffs and celebration events. Matchmaking for Draft
        Arena / Guild War / World Arena on Foundry is among Foundry players only.
        Details on the <Link href="/foundry/">Foundry page</Link> and{' '}
        <ExternalLink href={OFFICIAL.stoveFoundry}>STOVE Foundry notice</ExternalLink>.
      </>
    ),
  },
  {
    q: 'I played the Steam demo — can in-game account deletion wipe my old progress?',
    a: (
      <>
        Yes — official warning: if you already transferred to Steam login and then
        use in-game account deletion on the demo client, original-server progress
        can be deleted. Read{' '}
        <Link href="/demo-delete-warning/">demo delete warning</Link> and{' '}
        <ExternalLink href={OFFICIAL.stoveDemoDelete}>STOVE notice</ExternalLink>.
      </>
    ),
  },
];

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I play Epic Seven on Steam?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Install from the official Steam store (app/5019180). Convert your STOVE email/SNS login to Steam on the official STOVE site before signing in if you want to keep existing progress. See STOVE Steam FAQ.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does STOVE to Steam account transfer keep heroes, purchases, and Epic Pass?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'According to the official STOVE Steam FAQ, transferring retains game progress and data including unclaimed rewards, event items, and ongoing Epic Pass progress. Verify on STOVE.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Epic Seven Foundry server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Foundry is the new server opened with the Steam launch window around 2026-10-29, with starter support buffs and celebration events. Check the official STOVE Foundry notice for schedules and rewards.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Steam demo in-game account deletion delete my original Epic Seven progress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Official STOVE warning: after transferring login to Steam, in-game account deletion on the demo can delete existing original-server progress. Avoid in-game deletion; contact Epic Seven customer service if affected.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="hero">
        <h1>Epic Seven on Steam — player guide</h1>
        <p>
          Steam store entry, STOVE↔Steam account transfer, Foundry calendar
          through 12/31, Secret Rabbit♥Hole, banners, and troubleshooting.
          Independent guide on <strong>{TARGET_DOMAIN}</strong>.
        </p>
        <div className="cta-row">
          <ExternalLink href={OFFICIAL.steamStore} className="btn btn-primary">
            Official Steam store →
          </ExternalLink>
          <Link href="/download/" className="btn btn-secondary">
            Download checklist
          </Link>
          <Link href="/steam-transfer/" className="btn btn-secondary">
            Transfer steps
          </Link>
          <Link href="/foundry/" className="btn btn-secondary">
            Foundry calendar
          </Link>
        </div>
      </section>

      <IndepNotice />

      <section id="transfer">
        <h2>STOVE ↔ Steam account transfer</h2>
        <p className="muted">
          Unofficial step diagram summarizing the official process. Follow STOVE
          screens exactly — we are not Smilegate support.
        </p>

        <div className="diagram" aria-label="Transfer flow diagram">
          <div className="node">Existing email / SNS login</div>
          <span className="arrow" aria-hidden="true">
            →
          </span>
          <div className="node">STOVE convert to Steam login</div>
          <span className="arrow" aria-hidden="true">
            →
          </span>
          <div className="node">Launch Epic Seven on Steam</div>
        </div>

        <ol className="steps">
          <li>
            <strong>Decide:</strong> Keep old progress? Convert on STOVE first.
            Fresh start on Foundry? You can create a new Steam-linked account —
            know that demo leftover accounts can block a later transfer.
          </li>
          <li>
            <strong>Convert on STOVE:</strong> Use the official account conversion
            flow (email/SNS → Simple Login Steam). See{' '}
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>{' '}
            and our <Link href="/steam-transfer/">deep transfer guide</Link>.
          </li>
          <li>
            <strong>If Steam already made a new account:</strong> Withdraw that
            Steam-linked STOVE account first, then convert the original. Details
            on the transfer page.
          </li>
          <li>
            <strong>Then play on Steam:</strong>{' '}
            <ExternalLink href={OFFICIAL.steamStore}>store page</ExternalLink>.
            Same account can still work on STOVE PC / mobile after transfer (per
            FAQ).
          </li>
        </ol>
      </section>

      <section id="foundry">
        <h2>Foundry — new server snapshot</h2>
        <p className="as-of">
          Dates below are summarized from STOVE notices around the {AS_OF}{' '}
          launch window. Schedules can shift — verify on official posts before
          planning.
        </p>
        <div className="card">
          <table className="data">
            <thead>
              <tr>
                <th>Content</th>
                <th>Opening (approx.)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Steam launch + Foundry open</td>
                <td>2026-10-29 after maintenance</td>
              </tr>
              <tr>
                <td>Draft Arena (Foundry)</td>
                <td>2026-10-29 after maintenance</td>
              </tr>
              <tr>
                <td>Guild War (Foundry)</td>
                <td>
                  <strong>2026-11-21 03:00 UTC</strong> (STOVE Foundry open
                  notice)
                </td>
              </tr>
              <tr>
                <td>World Arena (Foundry)</td>
                <td>2026-12-10 after maintenance (UTC)</td>
              </tr>
              <tr>
                <td>Starter buffs / many Foundry events</td>
                <td>Through ~2026-12-31 02:59 UTC</td>
              </tr>
            </tbody>
          </table>
          <p>
            Highlights: growth acceleration buffs, daily free Covenant summons
            (up to 1,260 over the window), Rank 70 Luna join event, login gifts.
            Full breakdown → <Link href="/foundry/">Foundry page</Link>. Source:{' '}
            <ExternalLink href={OFFICIAL.stoveFoundry}>
              STOVE Foundry celebration notice
            </ExternalLink>
            .
          </p>
        </div>
      </section>

      <section id="faq" className="faq">
        <h2>FAQ</h2>
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
        <p>
          More Q&amp;A → <Link href="/faq/">FAQ &amp; troubleshooting</Link>.
        </p>
      </section>

      <section id="troubleshoot">
        <h2>Quick troubleshooting</h2>
        <ul className="troubleshoot">
          <li>
            <strong>Wrong / empty account on Steam:</strong> You may have auto-
            created a new Steam-linked STOVE account. See transfer recovery steps.
          </li>
          <li>
            <strong>Anti-cheat / launch fail:</strong> Steam lists kernel-level
            UNCHEATER. Update GPU drivers, run Steam as usual, check Smilegate
            notices; contact official CS if stuck.
          </li>
          <li>
            <strong>Demo leftover risk:</strong> Do not use in-game account
            deletion after Steam login transfer —{' '}
            <Link href="/demo-delete-warning/">warning page</Link>.
          </li>
          <li>
            <strong>Events missing:</strong> Some Foundry content is
            Foundry-only or time-gated — check{' '}
            <Link href="/updates/">updates</Link>.
          </li>
        </ul>
      </section>

      <section>
        <h2>Site map — Steam, Foundry, ongoing coverage</h2>
        <div className="card">
          <h3>Steam</h3>
          <ul>
            <li>
              <Link href="/download/">Official download / store entry</Link>
            </li>
            <li>
              <Link href="/steam-transfer/">STOVE↔Steam transfer steps</Link>
            </li>
            <li>
              <Link href="/demo-delete-warning/">Demo / delete-account warning</Link>
            </li>
            <li>
              <Link href="/steam-notes/">Steam-specific client notes</Link>
            </li>
            <li>
              <Link href="/faq/">FAQ &amp; troubleshooting</Link>
            </li>
          </ul>
          <h3>Foundry</h3>
          <ul>
            <li>
              <Link href="/foundry/">
                Calendar through 12/31 — GW 11/21, WA 12/10
              </Link>
            </li>
            <li>
              <Link href="/secret-rabbit-hole/">Secret Rabbit♥Hole side story</Link>
            </li>
          </ul>
          <h3>Ongoing updates</h3>
          <ul>
            <li>
              <Link href="/banners/">Banners &amp; new heroes</Link>
            </li>
            <li>
              <Link href="/updates/">Updates log</Link>
            </li>
            <li>
              <Link href="/maintenance/">Maintenance &amp; version notes</Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="sources">
        <h2>Official sources</h2>
        <ul>
          <li>
            <ExternalLink href={OFFICIAL.steamStore}>
              Steam — Epic Seven (app 5019180)
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveLaunch}>
              STOVE — Official Steam launch notice
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>
              STOVE — FAQs Regarding Steam
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveFoundry}>
              STOVE — Foundry opening celebration
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveDemoDelete}>
              STOVE — Demo in-game deletion precaution
            </ExternalLink>
          </li>
        </ul>
      </section>
    </>
  );
}
