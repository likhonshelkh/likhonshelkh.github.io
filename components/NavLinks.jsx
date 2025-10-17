import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export default function NavLinks() {
  return (
    <nav className="space-x-4">
      {links.map((link) => (
<Link key={link.href} href={link.href} legacyBehavior>
<a className="nav-link">{link.label}</a>
        </Link>
      ))}
    </nav>
  );
}