import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { OFFICIAL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Epic Seven Steam-specific notes',
  description:
    'Steam-only practical notes for Epic Seven: STOVE link requirement, anti-cheat, languages, system requirements, cross-play. Independent guide.',
};

export default function SteamNotesPage() {
  return (
    <>
      <h1>Steam-specific notes</h1>
      <IndepNotice compact />
      <p>
        Practical differences players hit on the Steam build versus mobile /
        STOVE PC. Facts below are drawn from the public Steam store page and
        STOVE Steam FAQ — re-verify if Valve or Smilegate change listings.
      </p>

      <h2>Account &amp; platform</h2>
      <ul>
        <li>
          Steam requires a third-party <strong>STOVE</strong> account (supports
          linking to Steam).
        </li>
        <li>
          Convert existing email/SNS → Steam login to keep progress (
          <Link href="/steam-transfer/">guide</Link>).
        </li>
        <li>Cross-play across Steam, STOVE PC, and mobile (per FAQ).</li>
        <li>
          Steam can play new and existing worlds; Foundry has separate
          matchmaking for listed PvP modes.
        </li>
      </ul>

      <h2>Client &amp; security</h2>
      <ul>
        <li>
          Steam store lists <strong>kernel-level anti-cheat UNCHEATER</strong>.
          Expect elevated driver prompts; corporate / locked-down PCs may block
          launch.
        </li>
        <li>Third-party EULA agreement required (Epic Seven EULA on Steam).</li>
        <li>Free-to-play with in-app purchases; Family Sharing flagged on store.</li>
      </ul>

      <h2>Languages (Steam listing)</h2>
      <p>
        Interface languages include English, Korean, Japanese, Chinese
        (trad/simp), German, French, Spanish, Portuguese, Thai (per launch
        notice). Voice at launch called out as Korean / English; Japanese VO
        delayed at launch with later resume planned.
      </p>

      <h2>System requirements (Steam minimum)</h2>
      <table className="data">
        <tbody>
          <tr>
            <th>OS</th>
            <td>Windows 10 64-bit+</td>
          </tr>
          <tr>
            <th>CPU</th>
            <td>Intel i5 or higher (min)</td>
          </tr>
          <tr>
            <th>RAM</th>
            <td>8 GB (min) / 16 GB (rec)</td>
          </tr>
          <tr>
            <th>GPU</th>
            <td>GTX 1060+ (min) / GTX 1660+ (rec)</td>
          </tr>
          <tr>
            <th>Storage</th>
            <td>~10 GB</td>
          </tr>
        </tbody>
      </table>

      <h2>Get the game</h2>
      <p>
        <ExternalLink href={OFFICIAL.steamStore} className="btn btn-outline">
          Official Steam store — Epic Seven
        </ExternalLink>
      </p>

      <h2>Related</h2>
      <ul>
        <li>
          <Link href="/demo-delete-warning/">Demo deletion warning</Link>
        </li>
        <li>
          <Link href="/faq/">FAQ &amp; troubleshooting</Link>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveSteamFaq}>STOVE Steam FAQ</ExternalLink>
        </li>
      </ul>
    </>
  );
}
