"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80 && currentScrollY > lastScrollY.current) {
        // Scrolling DOWN past threshold → hide
        setIsHidden(true);
      } else {
        // Scrolling UP or near top → show
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
      style={{
        transform: isHidden ? 'translateY(-110%)' : 'translateY(0)',
        opacity: isHidden ? 0 : 1,
        pointerEvents: isHidden ? 'none' : 'all',
      }}
    >
      <div className={styles.container}>
        {/* Logo Section */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.png"
              alt="ConvertInAr Logo"
              width={48}
              height={48}
              className={styles.navbarLogo}
            />
            <span className={styles.brandName}>
              Convertin<span className="gradient-text">Ar</span>
            </span>
          </Link>
        </div>

        {/* Navigation Menu (Center) */}
        <div className={styles.navMenu}>
          <div className={styles.navItem}>
            <button className={styles.dropdownBtn}>
              Products
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/products/imageto3d" className={styles.dropdownItem}>Image to 3D</Link>
              <Link href="/products/textto3d" className={styles.dropdownItem}>Text to 3D</Link>
              <Link href="/products/arscanner" className={styles.dropdownItem}>AR Scanner</Link>
              <Link href="/products/fileconvertor" className={styles.dropdownItem}>File Convertor</Link>
              <Link href="/products/arproductvisualization" className={styles.dropdownItem}>AR product visualization</Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <button className={styles.dropdownBtn}>
              Use Cases
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/use-cases/ecommerce" className={styles.dropdownItem}>Ecommerce</Link>
              <Link href="/use-cases/education" className={styles.dropdownItem}>Education</Link>
              <Link href="/use-cases/marketing" className={styles.dropdownItem}>Marketing</Link>
              <Link href="/use-cases/gaming" className={styles.dropdownItem}>Gaming</Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <Link href="/pricing" className={styles.navLink}>
              Pricing
            </Link>
          </div>
        </div>

        {/* CTAs (Right) */}
        <div className={styles.ctaContainer}>
          <Link href="/login" className={styles.loginBtn}>
            Login
          </Link>
          <Link href="/create" className={styles.primaryBtn}>
            Create Ar
          </Link>
        </div>
      </div>
    </nav>
  );
}
