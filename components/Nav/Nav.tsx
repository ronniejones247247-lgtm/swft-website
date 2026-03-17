'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Nav.module.css';

const links = [
  { label: 'Home',       href: '/' },
  { label: 'Services',   href: '/services' },
  { label: 'Markets',    href: '/markets' },
  { label: 'Cushions',   href: '/#cushions' },
  { label: 'Visualizer', href: '/#visualizer' },
  { label: 'About',      href: '/about' },
  { label: 'Contact',    href: '/#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.brand}>
        <Image src="/logo.jpg" alt="SWFT Logo" width={48} height={48} className={styles.logo} />
        <span className={styles.brandName}>
          <span className={styles.brandMain}>SWFT</span>
          <span className={styles.brandSub}>SouthWestern Foam Technologies</span>
        </span>
      </Link>

      <button
        className={styles.burger}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span className={menuOpen ? styles.burgerLineOpen1 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen2 : styles.burgerLine} />
        <span className={menuOpen ? styles.burgerLineOpen3 : styles.burgerLine} />
      </button>

      <ul className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}>
        {links.map(l => (
          <li key={l.href}>
            <Link href={l.href} className={styles.link} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/#contact" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>
            Get a Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
