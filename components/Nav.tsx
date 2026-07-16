'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/work/', label: 'Work' },
  { href: '/contact/', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link className="logo" href="/">
          <span className="logo-mark">BW</span>
          <span>Brian Wilson</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <a className="btn" href="/assets/Brian_Wilson_Resume.pdf" target="_blank" rel="noopener">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
