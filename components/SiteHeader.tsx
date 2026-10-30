import Link from 'next/link';
import { BRAND } from '@/lib/site';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/download/', label: 'Download' },
  { href: '/steam-transfer/', label: 'Transfer' },
  { href: '/foundry/', label: 'Foundry' },
  { href: '/secret-rabbit-hole/', label: 'Rabbit Hole' },
  { href: '/banners/', label: 'Banners' },
  { href: '/updates/', label: 'Updates' },
  { href: '/maintenance/', label: 'Maintenance' },
  { href: '/steam-notes/', label: 'Steam notes' },
  { href: '/faq/', label: 'FAQ' },
  { href: '/demo-delete-warning/', label: 'Demo warning' },
  { href: '/about/', label: 'About' },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link href="/" className="brand">
          {BRAND}
        </Link>
        <nav aria-label="Primary">
          <ul>
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
