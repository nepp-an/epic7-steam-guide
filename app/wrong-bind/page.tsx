import type { Metadata } from 'next';
import { ExternalLink } from '@/components/ExternalLink';
import { FaqJsonLd, JsonLd } from '@/components/JsonLd';
import { IndepNotice } from '@/components/IndepNotice';
import { PageShell } from '@/components/PageShell';
import { SiteFig } from '@/components/SiteFig';
import { BRAND, OFFICIAL, SITE_ORIGIN, absoluteUrl, pageMetadata } from '@/lib/site';

const PATH = '/wrong-bind/';
const TITLE = 'Epic Seven Steam Wrong Bind: Empty Account, Progress Missing';
const H1 = 'Steam opened a new account — recover your STOVE progress';
const DESCRIPTION =
  'If Steam opened a new empty account, official FAQ question 3 describes a Convert path back to your original email or SNS login. This unofficial page restates that sequence and the official temporary-account notes.';

const FAQS = [
  [
    'Steam opened a new empty account. Can I still get back to my STOVE progress?',
    'Official Steam FAQ question 3 says that if a new account was already created on Steam, you can still return to your original email or SNS login. The official Convert sequence is the skeleton on this page. Confirm the live wording on the official FAQ and in the STOVE interface before you act.',
  ],
  [
    'Does official FAQ question 3 require me to withdraw the temporary account?',
    'The official question 3 Convert answer does not require withdrawal. Separately, the official account conversion guide’s temporary Steam account section includes Convert steps and also says you must first withdraw the temporary Steam account / register that account, then withdraw it. This unofficial page restates both official wordings and links the original posts and STOVE Customer Service; it does not decide which sentence applies to your account.',
  ],
  [
    'What is a temporary Steam account, according to the official account guide?',
    'The official account conversion guide says that entering the game for the first time can create a temporary Steam account because of Steam platform characteristics. If you want to keep that account, follow the steps in that post to attach it to STOVE. If it is not attached, you may be unable to access it, and Customer Service may also be unable to assist with a temporary account.',
  ],
  [
    'Should I use in-game account deletion to clear the empty Steam save?',
    'No. Do not use in-game account deletion to clear an empty Steam save. That is a safety boundary already published on this site’s transfer overview and demo-delete warning. This page does not add a new official deletion notice.',
  ],
] as const;

export const metadata: Metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  locale: 'en',
  absoluteTitle: true,
  ogImage: '/og/wrong-bind.png',
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
        Official Steam FAQ question 3 and the official account conversion guide
        opened <time dateTime="2026-11-26">2026-11-26</time> (Asia/Shanghai).
      </p>
      <p className="quick-answer">
        <strong>Official FAQ, question 3: </strong>
        If a new account was already created on Steam, you can still return to
        your original email or SNS login. The official Convert sequence is the
        skeleton below. Question 3 does not require withdrawal. The official
        account conversion guide also describes a temporary Steam account created
        on first launch, and that post’s temporary-account section includes both
        Convert steps and a register-then-withdraw wording. This unofficial page
        restates both official wordings; it does not decide which sentence
        applies to your account.
      </p>
      <nav className="anchor-nav" aria-label="On this page">
        <a href="#convert">Official Q3 Convert sequence</a>
        <a href="#temporary">Temporary Steam account</a>
        <a href="#two-wordings">Two official wordings</a>
        <a href="#do-not-delete">Do not delete the empty save</a>
        <a href="#related">Related</a>
        <a href="#faq">FAQ</a>
        <a href="#sources">Sources</a>
      </nav>
      <p>
        If the message you see is “already registered” or the Transfer button
        is greyed out, use the{' '}
        <a href="/already-registered/">already-registered page</a> instead.
        This is not Smilegate support.
      </p>

      <section id="convert" aria-labelledby="convert-title">
        <h2 id="convert-title">Official FAQ question 3 Convert sequence</h2>
        <SiteFig
          src="/images/diagram-wrong-bind.webp"
          width={1100}
          height={360}
          alt="Self-drawn independent diagram: official FAQ question 3 says you can still return to your original email or SNS login; the official Convert sequence registers via Steam if needed, converts the temporary account to a non-Steam login, then converts the original email or SNS login to Steam; the account guide notes that a first launch can create a temporary Steam account that may be inaccessible if it is not attached to STOVE. Not official Smilegate art."
          credit="Unofficial wrong-bind diagram · epicsevensteam.com · not Smilegate/STOVE/Steam"
        />
        <p>
          Official Steam FAQ question 3 is the operation skeleton on this page.
          If a new account was already created on Steam, that answer says you
          can still return to your original email or SNS login. The official
          sequence is:
        </p>
        <ol className="steps">
          <li>On the STOVE login page, choose Steam login and register STOVE if needed.</li>
          <li>Log in to the STOVE website with that Steam account.</li>
          <li>Open [My Profile Icon &gt; Account Information] and select Convert.</li>
          <li>Choose a login method other than Steam to convert the temporary account.</li>
          <li>Then convert the original email/SNS account to a Steam login.</li>
        </ol>
        <p>
          The official question 3 Convert answer does not require withdrawal.
          The full overview and decision tree stay on the{' '}
          <a href="/steam-transfer/">Steam transfer page</a>.
        </p>
      </section>

      <section id="temporary" aria-labelledby="temporary-title">
        <h2 id="temporary-title">Temporary Steam account (official account guide)</h2>
        <p>
          The official account conversion guide says that entering the game for
          the first time can create a temporary Steam account because of Steam
          platform characteristics. If you want to keep that account, follow
          the steps in that post to attach it to STOVE. If it is not attached,
          you may be unable to access it, and Customer Service may also be
          unable to assist with a temporary account.
        </p>
        <p>
          If the official wording on your account is unclear, contact{' '}
          <ExternalLink href={OFFICIAL.stoveCustomerService}>
            STOVE Customer Service
          </ExternalLink>
          . This unofficial page cannot recover an account.
        </p>
      </section>

      <section id="two-wordings" aria-labelledby="wordings-title">
        <h2 id="wordings-title">Two official wordings, left side by side</h2>
        <p>
          Official Steam FAQ question 3 describes only the Convert sequence
          above and does not require withdrawal. The official account
          conversion guide’s temporary Steam account section includes Convert
          steps, and it also includes the sentence that you must first withdraw
          the temporary Steam account / register that account, then withdraw
          it.
        </p>
        <p>
          Both official posts are linked in the sources. This unofficial page
          does not decide which official sentence applies to your account.
        </p>
      </section>

      <section id="do-not-delete" aria-labelledby="delete-title">
        <h2 id="delete-title">Do not use in-game deletion to clear the empty save</h2>
        <p>
          Do not use in-game account deletion to clear an empty Steam save.
          That is a safety boundary already published on this site’s{' '}
          <a href="/steam-transfer/">transfer overview</a> and{' '}
          <a href="/demo-delete-warning/">demo delete warning</a>. This page
          does not add a new official deletion notice.
        </p>
      </section>

      <section id="related" aria-labelledby="related-title">
        <h2 id="related-title">Related pages</h2>
        <ul>
          <li>
            <a href="/steam-transfer/">Steam transfer overview</a> — Convert
            summary, wrong-bind decision tree, and the kept sentence that the
            official Q3 Convert answer does not require withdrawal.
          </li>
          <li>
            <a href="/already-registered/">Already registered or greyed button</a>{' '}
            — if the message or disabled Transfer control is what you see.
          </li>
          <li>
            <a href="/steam-notes/">Steam notes, symptom 1</a> — wrong roster
            or a brand-new Heir.
          </li>
          <li>
            <a href="/faq/">Epic Seven Steam FAQ</a> and the{' '}
            <a href="/download/">download checklist</a>.
          </li>
          <li>
            <a href="/demo-delete-warning/">Demo delete warning</a> — do not
            use in-game deletion to clear a temporary account.
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
              Official STOVE FAQ: FAQs Regarding Steam, question 3
            </ExternalLink>
            , opened 26 November 2026: if a new Steam account already exists,
            you can still return to the original email or SNS login, using the
            Convert sequence. That answer does not require withdrawal. Question
            1 of the same FAQ already cites the general account-linking notice
            below; that notice is not a Steam Convert procedure.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveAccountTransferGuide}>
              Official STOVE account conversion guide (view/14609690)
            </ExternalLink>
            , opened 26 November 2026: a first launch can create a temporary
            Steam account; if you want to keep it, attach it to STOVE using
            that post’s steps; if it is not attached, access and Customer
            Service help may not be possible. The same temporary-account
            section includes Convert steps and a register-then-withdraw
            wording.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveAccountBindFaq}>
              Official STOVE account-linking FAQ (view/9979189)
            </ExternalLink>
            , opened 26 November 2026: a general account-binding / guest /
            SNS-to-email notice already cited from official Steam FAQ question
            1. It is linked here only as that outbound source. It is not the
            Steam Convert sequence and is not used as the steps on this page.
          </li>
          <li>
            <ExternalLink href={OFFICIAL.stoveCustomerService}>
              Official STOVE Customer Service
            </ExternalLink>
            .
          </li>
        </ul>
        <p className="muted">
          This page does not cite STOVE notice 14581667, whose full body was
          not recovered for this pass.
        </p>
      </section>
    </PageShell>
  );
}
