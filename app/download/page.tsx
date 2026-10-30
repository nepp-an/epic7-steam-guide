import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Download Epic Seven on Steam (official store)',
  description:
    'Official Steam store entry for Epic Seven plus STOVE transfer checklist before you install. Independent guide — not Smilegate.',
};

export default function DownloadPage() {
  return (
    <>
      <h1>Download Epic Seven on Steam</h1>
      <IndepNotice compact />
      <p>
        Use only the official Steam store page. This site does not host
        installers, cracks, or gray codes.
      </p>
      <p>
        <ExternalLink href={OFFICIAL.steamStore} className="btn btn-outline">
          Open official Steam store — Epic Seven (app 5019180)
        </ExternalLink>
      </p>

      <h2>Before you click Play</h2>
      <ol className="steps">
        <li>
          Decide whether you need your <strong>existing</strong> progress. If
          yes, convert STOVE email/SNS → Steam login first (
          <Link href="/steam-transfer/">transfer guide</Link>).
        </li>
        <li>
          If the Steam demo already spawned a throwaway account, resolve that
          conflict before converting — see transfer +{' '}
          <Link href="/demo-delete-warning/">demo warning</Link>.
        </li>
        <li>
          Expect kernel-level anti-cheat (UNCHEATER) prompts — details on{' '}
          <Link href="/steam-notes/">Steam notes</Link>.
        </li>
        <li>
          New-server players: read <Link href="/foundry/">Foundry calendar</Link>{' '}
          and <Link href="/secret-rabbit-hole/">Secret Rabbit♥Hole</Link>.
        </li>
      </ol>

      <h2>Official launch references</h2>
      <ul className="sources">
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam store</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>
            STOVE Steam launch notice
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>
        </li>
      </ul>

      <h2>Related hub pages</h2>
      <ul>
        <li>
          <Link href="/faq/">FAQ &amp; troubleshooting</Link>
        </li>
        <li>
          <Link href="/steam-notes/">Steam-specific notes</Link>
        </li>
        <li>
          <Link href="/updates/">Updates log</Link>
        </li>
      </ul>
    </>
  );
}
