import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Steam demo — do not delete in-game account after transfer',
  description:
    'Warning: Epic Seven Steam demo in-game account deletion after Steam login transfer can wipe original-server progress. Cite official STOVE precaution notice.',
};

export default function DemoDeleteWarningPage() {
  return (
    <>
      <h1>Steam demo: account deletion risk</h1>
      <IndepNotice compact />

      <div className="card warn">
        <p>
          <strong>Official precaution (paraphrased):</strong> If you transferred
          your existing Epic Seven login to Steam Login, then used{' '}
          <em>in-game account deletion</em> in the Steam demo,{' '}
          <strong>
            all account data — including progress on the original server — can
            be deleted
          </strong>
          .
        </p>
        <p>
          Primary source:{' '}
          <ExternalLink href={OFFICIAL.stoveDemoDelete}>
            Precautions Regarding In-Game Account Deletion When Using the Epic
            Seven Demo
          </ExternalLink>{' '}
          (STOVE).
        </p>
      </div>

      <h2>What to do</h2>
      <ul>
        <li>
          If you already transferred to Steam login: <strong>do not</strong>{' '}
          use in-game account deletion on the demo (or similar flows).
        </li>
        <li>
          If you only wanted to remove a disposable demo character without
          touching the transferred login, stop and read the STOVE post / contact
          Epic Seven Customer Service first.
        </li>
        <li>
          If progress is already gone, contact official Customer Service — not
          third-party “recovery” sellers.
        </li>
      </ul>

      <h2>How this differs from withdrawing a Steam-linked STOVE account</h2>
      <p>
        The Steam FAQ describes withdrawing a <em>newly created</em>{' '}
        Steam-linked STOVE account so you can later convert your real account.
        That is not the same as in-game deletion after a successful transfer.
        When unsure, follow{' '}
        <ExternalLink href={OFFICIAL.stoveSteamFaq}>Steam FAQ</ExternalLink>{' '}
        and our <Link href="/steam-transfer/">transfer guide</Link>.
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/steam-transfer/">Transfer guide</Link>
        </li>
        <li>
          <Link href="/faq/">FAQ &amp; troubleshooting</Link>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveLaunch}>
            Steam launch notice
          </ExternalLink>
        </li>
      </ul>
    </>
  );
}
