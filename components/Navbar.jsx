import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';
import MobileNav from './MobileNav';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-4 px-6">
      <Logo />
      <div className="hidden sm:flex items-center space-x-4">
        <NavLinks />
        <ThemeSwitcher />
      </div>
      <div className="sm:hidden">
        <MobileNav />
      </div>
    </header>
  );
}