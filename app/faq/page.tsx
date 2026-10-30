import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'FAQ & troubleshooting — Epic Seven Steam',
  description:
    'Expanded FAQ for Epic Seven on Steam: launch issues, transfer, Foundry, demo risks, anti-cheat. Independent guide with official outbound links.',
};

const faqs = [
  {
    q: 'Steam opens a brand-new Heir — where is my old account?',
    a: (
      <>
        Steam likely created a new Steam-linked STOVE login. Withdraw that new
        account on STOVE, then convert your original email/SNS login. Steps:{' '}
        <Link href="/steam-transfer/">transfer guide</Link> ·{' '}
        <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE FAQ</ExternalLink>.
      </>
    ),
  },
  {
    q: 'Can I play Foundry on Steam and continue on mobile?',
    a: (
      <>
        Cross-play is supported across Steam, STOVE PC, and mobile with the same
        account after proper linking (per FAQ). Foundry characters live on the
        Foundry server — you are not “moving” a legacy character onto Foundry by
        transferring login alone.
      </>
    ),
  },
  {
    q: 'Is Guild War live on Foundry yet?',
    a: (
      <>
        Draft Arena opened with launch. Guild War is expected later in November;
        this site watches ~<strong>2026-11-21</strong> as a planning marker —
        confirm on STOVE. World Arena is posted for{' '}
        <strong>2026-12-10</strong>. See <Link href="/foundry/">Foundry</Link>.
      </>
    ),
  },
  {
    q: 'Game will not start / anti-cheat error',
    a: (
      <>
        Steam lists kernel-level UNCHEATER. Update OS and GPU drivers, ensure
        Secure Boot / antivirus exceptions are understood on your machine, and
        retry. If blocked on managed PCs, you may need STOVE PC or mobile
        instead. Escalate only through official CS.
      </>
    ),
  },
  {
    q: 'Are Steam prices different from mobile?',
    a: (
      <>
        STOVE FAQ states no price differences between platforms. Still compare
        the live store / shop UI in your region before buying.
      </>
    ),
  },
  {
    q: 'Demo ended — do I need to reinstall?',
    a: (
      <>
        Install / update the full Steam release from the{' '}
        <ExternalLink href={OFFICIAL.steamStore}>store page</ExternalLink>.
        Account state depends on whether you converted login — read{' '}
        <Link href="/demo-delete-warning/">demo warning</Link>.
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <>
      <h1>FAQ &amp; troubleshooting</h1>
      <IndepNotice compact />
      <p>
        Complements the homepage FAQ with launch-week pain points. For account
        actions, trust STOVE screens over any third-party script.
      </p>

      <section className="faq">
        {faqs.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>

      <h2>Short troubleshooting checklist</h2>
      <ol>
        <li>Confirm you are on the official Steam app 5019180 build.</li>
        <li>Confirm which STOVE login Steam is using (Steam vs email/SNS).</li>
        <li>Check STOVE maintenance / Foundry event banners in-game.</li>
        <li>
          Never use in-game account deletion after a Steam login transfer.
        </li>
        <li>
          Still stuck → Epic Seven Customer Service via STOVE (not Discord
          DMs selling “fixes”).
        </li>
      </ol>

      <h2>Official links</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveFoundry}>Foundry notice</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveDemoDelete}>
            Demo deletion precaution
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam store</ExternalLink>
        </li>
      </ul>
    </>
  );
}
