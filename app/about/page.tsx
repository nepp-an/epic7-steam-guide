import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink } from '@/components/ExternalLink';
import { IndepNotice } from '@/components/IndepNotice';
import { CONTACT_ABOUT, DOMAIN_CANDIDATES, OFFICIAL, TARGET_DOMAIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About this independent guide',
  description:
    'About Epic Seven Steam Guide — unofficial player info site for Steam entry, transfer, and Foundry. Not Smilegate / STOVE / Steam.',
};

export default function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <IndepNotice />
      <p>
        <strong>Epic Seven Steam Guide</strong> is a lightweight, English-first
        information site for players looking up Steam install entry, STOVE↔Steam
        transfer, Foundry schedules, and launch FAQ. It is built to stay
        updatable (Foundry calendar, hero/event log), not as a one-shot landing
        page.
      </p>
      <h2>What we are not</h2>
      <ul>
        <li>Not Smilegate, STOVE, Valve, or Steam support.</li>
        <li>Not a store for gray codes, account trading, or cracks.</li>
        <li>Not a full wiki replacement — we cite official posts.</li>
      </ul>
      <h2>Domain status</h2>
      <p>
        Apex: <strong>{TARGET_DOMAIN}</strong> (Cloudflare Registrar → Vercel,
        DNS-only / gray-cloud). Other candidates considered earlier:{' '}
        {DOMAIN_CANDIDATES.filter((d) => d !== TARGET_DOMAIN).join(', ')}.
      </p>
      <h2>Contact</h2>
      <p>
        Placeholder:{' '}
        <a href={`mailto:${CONTACT_ABOUT}`}>{CONTACT_ABOUT}</a> (TBD until
        domain + mailbox exist).
      </p>
      <h2>Official destinations</h2>
      <ul>
        <li>
          <ExternalLink href={OFFICIAL.steamStore}>Steam store</ExternalLink>
        </li>
        <li>
          <ExternalLink href={OFFICIAL.stoveHome}>STOVE Epic Seven</ExternalLink>
        </li>
        <li>
          <Link href="/privacy/">Privacy</Link>
        </li>
      </ul>
    </>
  );
}
