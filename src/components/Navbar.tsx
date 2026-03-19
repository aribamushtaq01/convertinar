"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
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
            <span className={styles.brandName}>Convertin<span className="gradient-text">Ar</span></span>
          </Link>
        </div>

        {/* Navigation Menu (Center) */}
        <div className={styles.navMenu}>
          <div className={styles.navItem}>
            <button className={styles.dropdownBtn}>
              Products
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/products/webar" className={styles.dropdownItem}>WebAR</Link>
              <Link href="/products/ar-codes" className={styles.dropdownItem}>AR Codes</Link>
              <Link href="/products/analytics" className={styles.dropdownItem}>Analytics</Link>
            </div>
          </div>
          <div className={styles.navItem}>
            <button className={styles.dropdownBtn}>
              Use Cases
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/use-cases/retail" className={styles.dropdownItem}>Retail</Link>
              <Link href="/use-cases/education" className={styles.dropdownItem}>Education</Link>
              <Link href="/use-cases/marketing" className={styles.dropdownItem}>Marketing</Link>
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
