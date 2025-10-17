import React from 'react';
import Link from 'next/link';

export default function Logo() {
  return (
<Link href="/" legacyBehavior>
      <a className="text-2xl font-bold">My Awesome Blog</a>
    </Link>
  );
}