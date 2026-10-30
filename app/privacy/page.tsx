import type { Metadata } from 'next';
import { IndepNotice } from '@/components/IndepNotice';
import { CONTACT_PRIVACY, TARGET_DOMAIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'Privacy disclosure for the independent Epic Seven Steam Guide site. Not affiliated with Smilegate / STOVE / Steam.',
};

export default function PrivacyPage() {
  return (
    <>
      <h1>Privacy</h1>
      <IndepNotice compact />
      <p>
        This independent information site (intended host:{' '}
        <strong>{TARGET_DOMAIN}</strong>) does not sell accounts, codes, or
        personal data. Domain <strong>epicsevensteam.com</strong> is registered; mailboxes below
        are still placeholders until MX/mailbox is provisioned.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          No account system on this static site. We do not ask for STOVE or Steam
          passwords.
        </li>
        <li>
          Hosting (e.g. Vercel) may process standard server logs (IP, user
          agent) under the host&apos;s policy.
        </li>
        <li>
          If analytics or ads are added later, this page will be updated before
          enablement. Currently: no ads.
        </li>
      </ul>
      <h2>Outbound links</h2>
      <p>
        Links to store.steampowered.com and page.onstove.com send you to third
        parties with their own privacy policies.
      </p>
      <h2>Contact</h2>
      <p>
        Placeholder:{' '}
        <a href={`mailto:${CONTACT_PRIVACY}`}>{CONTACT_PRIVACY}</a> — mailbox
        not provisioned until the domain is purchased and DNS mail (optional) is
        set. Do not send passwords or payment info.
      </p>
    </>
  );
}
