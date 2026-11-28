import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/already-registered/';
const TITLE = 'Epic Seven Steam Transfer: Already Registered or Greyed Button';
const H1 = 'Already registered or a greyed-out Transfer button';
const DESCRIPTION =
  'If STOVE says “This information has already been registered. Please start over,” a temporary Steam account may already exist. A greyed-out Transfer button applies only after a transfer in the last 3 months.';

const FAQS = [
  [
    'STOVE says “This information has already been registered. Please start over.” What does that mean?',
    'The official account conversion guide uses that wording when a temporary Steam account already exists, and it says you cannot transfer directly onto that account. The same post also describes Convert steps and says you must first register that temporary Steam account on STOVE, then withdraw it, and follow the steps in “If You Want to Link to Your Current Steam Platform Account.” Official FAQ question 3 describes a Convert sequence and does not require withdrawal. This unofficial page restates both official wordings and links the original posts and STOVE Customer Service; it does not decide which sentence applies to your account.',
  ],
  [
    'Why is the Transfer button greyed out?',
    'The official account conversion guide says this applies if you already transferred an account within the last 3 months: you must wait 3 months from the date of that last transfer. After the wait, continue from STOVE > [My Info]. If you cannot log in during the wait, contact STOVE Customer Service. That 3-month condition is not a default wait for a first-time bind. Button state and dates are account-specific and should be read in the STOVE interface. This page does not invent a clock time or a compensation.',
  ],
  [
    'Should I use a third-party tool to unlock the button?',
    'No. Do not use a third-party unlock tool. Read the current button state and dates in the STOVE interface, or contact official STOVE Customer Service if you cannot log in during a wait.',
  ],
  [
    'Is this the same problem as Steam opening a new empty account?',
    'Not always. If the message or greyed-out button is what you see, stay on this page. If Steam opened a new empty Heir and your STOVE progress is missing, use the wrong-bind page. The overview remains on the Steam transfer page.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/already-registered.png',
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
        Official Steam FAQ and official account conversion guide opened{' '}
        <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Official account conversion guide: </strong>
        The wording{' '}
        <em>“This information has already been registered. Please start over.”</em>{' '}
        is used when a temporary Steam account already exists, and you cannot
        transfer directly onto that account. The same post also describes Convert
        steps and says you must first register that temporary Steam account on
        STOVE, then withdraw it, and follow the steps in “If You Want to Link to
        Your Current Steam Platform Account.” Official FAQ question 3 describes
        a Convert sequence and does not require withdrawal. This unofficial page
        restates both official wordings; it does not decide which sentence
        applies to your account.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#already-registered">Already registered</a>
        <a href="#two-wordings">Two official wordings</a>
        <a href="#convert">Official Q3 Convert sequence</a>
        <a href="#greyed-button">Greyed-out Transfer button</a>
        <a href="#related">Related</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        These two stuck-transfer messages are not a Smilegate support article.
        Read the button state and dates in the STOVE interface, and do not use
        a third-party unlock tool.
      </p>

      <section id="already-registered" aria-labelledby="registered-title">
        <h2 id="registered-title">The “already registered” message</h2>
        <SiteFig
          src="/images/diagram-already-registered.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: official wording “This information has already been registered. Please start over” means a temporary Steam account already exists and cannot be transferred onto directly; official FAQ question 3 is Convert only, while the account guide also says register then withdraw; a greyed-out Transfer button applies only after a transfer in the last 3 months, not as a first-bind default wait. Not official Smilegate art."
          credit="Unofficial already-registered diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          The official account conversion guide quotes the message{' '}
          <em>
            “This information has already been registered. Please start over.”
          </em>{' '}
          In that situation, a temporary Steam account already exists, and the
          post says you cannot transfer directly onto that account.
        </p>
        <p>
          The same official post says you must first register that temporary
          Steam account on STOVE, then withdraw it, and “Follow the steps in
          ‘If You Want to Link to Your Current Steam Platform Account’.” Read
          that wording on the official post before you act. This unofficial page
          does not invent a substitute procedure.
        </p>
      </section>

      <section id="two-wordings" aria-labelledby="wordings-title">
        <h2 id="wordings-title">Two official wordings, left side by side</h2>
        <p>
          The official account conversion guide’s temporary Steam account
          section includes Convert steps, and it also includes the sentence
          that you must first withdraw the temporary Steam account / register
          that account, then withdraw it. Official Steam FAQ question 3
          describes only the Convert sequence below and does not require
          withdrawal.
        </p>
        <p>
          Both official posts are linked in the sources. If the live STOVE
          wording is unclear, contact{' '}
          <ExternalLink href={OFFICIAL.stoveCustomerService}>
            STOVE Customer Service
          </ExternalLink>
          . This unofficial page does not decide which official sentence
          applies to your account, and it does not promise that Customer
          Service can unlock a transfer immediately.
        </p>
      </section>

      <section id="convert" aria-labelledby="convert-title">
        <h2 id="convert-title">Official FAQ question 3 Convert sequence</h2>
        <p>
          Official Steam FAQ question 3 describes this Convert sequence. The
          question 3 answer does not require withdrawal:
        </p>
        <ol className="steps">
          <li>On the STOVE login page, choose Steam login and register STOVE if needed.</li>
          <li>Log in to the STOVE website with that Steam account.</li>
          <li>Open [My Profile Icon &gt; Account Information] and select Convert.</li>
          <li>Choose a login method other than Steam to convert the temporary account.</li>
          <li>Then convert the original email/SNS account to a Steam login.</li>
        </ol>
        <p>
          The full transfer overview, including this sequence, stays on the{' '}
          <a href="/steam-transfer/">Steam transfer page</a>. If Steam opened a
          new empty Heir and your progress is missing, see the{' '}
          <a href="/wrong-bind/">wrong-bind recovery page</a>.
        </p>
      </section>

      <section id="greyed-button" aria-labelledby="greyed-title">
        <h2 id="greyed-title">A greyed-out Transfer button</h2>
        <p>
          The official account conversion guide gives a separate rule for a
          greyed-out or unavailable Transfer control: it applies if you already
          transferred an account within the last 3 months. In that case, you
          must wait 3 months from the date of the last transfer. After the
          wait, continue from STOVE &gt; [My Info]. If you cannot log in during
          the wait, contact{' '}
          <ExternalLink href={OFFICIAL.stoveCustomerService}>
            STOVE Customer Service
          </ExternalLink>
          .
        </p>
        <p>
          That 3-month condition is not a default wait for every first-time
          bind. Button state and dates are account-specific. Read them in the
          STOVE interface. This page does not invent a clock time when a wait
          ends, and it does not invent compensation.
        </p>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related pages</h2>
        <ul>
          <li>
            <a href="/steam-transfer/">Steam transfer overview</a> — the kept
            summary table and FAQ short answer for this same message.
          </li>
          <li>
            <a href="/wrong-bind/">Wrong-bind recovery</a> — if Steam opened a
            new empty account and your STOVE progress is missing.
          </li>
          <li>
            <a href="/steam-notes/">Steam notes, symptom 2</a> — “Already
            registered” or account transfer unavailable.
          </li>
          <li>
            <a href="/faq/">Epic Seven Steam FAQ</a> and the{' '}
            <a href="/download/">download checklist</a> — convert before you
            treat a Steam save as a main account.
          </li>
          <li>
            <a href="/demo-delete-warning/">Demo delete warning</a> — do not
            use in-game deletion to “clear” a temporary account.
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
            <ExternalLink href={OFFICIAL.stoveAccountTransferGuide}>
              Official STOVE account conversion guide (view/14609690)
            </ExternalLink>
            , opened 26 November 2026: the “already registered” wording, the
            temporary Steam account section (Convert steps and the register /
            then withdraw wording, plus “If You Want to Link to Your Current
            Steam Platform Account”), and the 3-month repeat-transfer rule for a
            greyed-out Transfer button.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveSteamFaq}>
              Official STOVE FAQ: FAQs Regarding Steam, question 3
            </ExternalLink>
            , opened 26 November 2026: the Convert sequence. That answer does
            not require withdrawal.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveCustomerService}>
              Official STOVE Customer Service
            </ExternalLink>
            , for login or wait-period cases the official posts tell you to
            take to support.
          </li>
        </ul>
        <p className="muted">
          This page does not cite STOVE notices 14581667 or 14571828, whose
          full bodies were not recovered for this pass, and it does not treat
          user comments as official wording.
        </p>
      </section>
    </PageShell>
  );
}
