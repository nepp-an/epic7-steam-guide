import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'STOVE ↔ Steam account transfer guide',
  description:
    'Step-by-step independent guide to converting an Epic Seven STOVE email/SNS account for Steam, including demo-account conflict recovery. Cite official STOVE FAQ.',
};

export default function SteamTransferPage() {
  return (
    <>
      <h1>STOVE ↔ Steam account transfer</h1>
      <IndepNotice compact />
      <p>
        Goal: keep your existing Epic Seven progress when playing on Steam by
        converting your login to Simple Login (Steam) on STOVE{' '}
        <em>before</em> you rely on a fresh Steam session. This page paraphrases
        public STOVE FAQ points — always follow the live UI on{' '}
        <ExternalLink href={OFFICIAL.stoveSteamFaq}>
          FAQs Regarding Steam
        </ExternalLink>
        .
      </p>

      <div className="diagram" aria-label="Recommended transfer path">
        <div className="node">Mobile / STOVE PC account</div>
        <span className="arrow" aria-hidden="true">
          →
        </span>
        <div className="node">Convert login on STOVE</div>
        <span className="arrow" aria-hidden="true">
          →
        </span>
        <div className="node">Steam client login</div>
      </div>

      <h2>Recommended path (keep progress)</h2>
      <ol className="steps">
        <li>
          <strong>Do not rush into Steam first</strong> if you care about the
          old account. Launching Steam without conversion often creates a new
          Steam-linked STOVE account.
        </li>
        <li>
          <strong>Open official STOVE account tools</strong> on PC and start
          the conversion from email or Simple Login (SNS) → Simple Login
          (Steam). Transfers are described as available anytime without a
          special application window.
        </li>
        <li>
          <strong>Complete Steam authorization</strong> when prompted, then
          confirm the linked login on STOVE.
        </li>
        <li>
          <strong>Install / play via Steam</strong> from the{' '}
          <ExternalLink href={OFFICIAL.steamStore}>official store</ExternalLink>
          . Per FAQ, you can still use STOVE PC and mobile with the same
          account after transfer.
        </li>
        <li>
          <strong>What carries over:</strong> progress, heroes, items, purchase
          history, unclaimed rewards, event items, Epic Pass progress — as
          stated in the official FAQ. Re-check that page if policies change.
        </li>
      </ol>

      <h2>If Steam already created a new account</h2>
      <div className="card warn">
        <p>
          Official recovery outline (paraphrased): withdraw the new
          Steam-linked STOVE account first, then convert your original account.
        </p>
        <ol>
          <li>On STOVE login, choose the Steam account type.</li>
          <li>Authorize the Steam account you used for Epic Seven.</li>
          <li>Finish STOVE registration / verification if asked.</li>
          <li>Withdraw / delete that Steam-linked STOVE account per STOVE UI.</li>
          <li>Then convert your original email/SNS account to Steam login.</li>
        </ol>
        <p className="muted">
          Withdrawal may involve a waiting period (players report delays —
          confirm in STOVE UI / CS). Do not invent third-party “unlock” tools.
        </p>
      </div>

      <h2>Cross-play notes</h2>
      <ul>
        <li>
          Steam, STOVE PC, and mobile share the same gameplay experience with
          cross-play, per FAQ.
        </li>
        <li>
          Steam can access both new and existing worlds; some Foundry features
          use Foundry-only matchmaking.
        </li>
        <li>
          Related: <Link href="/demo-delete-warning/">demo delete warning</Link>
          , <Link href="/steam-notes/">Steam-specific notes</Link>,{' '}
          <Link href="/faq/">FAQ hub</Link>.
        </li>
      </ul>

      <h2>Official sources</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>
            STOVE — FAQs Regarding Steam
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>
            STOVE — Official Steam launch notice
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam store</ExternalLink>
        </li>
      </ul>
    </>
  );
}
