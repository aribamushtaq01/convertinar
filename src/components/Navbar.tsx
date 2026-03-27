"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80 && currentScrollY > lastScrollY.current) {
        setIsHidden(true);
        // Close mobile menu when scrolling down
        setIsMobileMenuOpen(false);
      } else {
        setIsHidden(false);
      }

      setIsScrolled(currentScrollY > 10);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

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
        {/* Logo */}
        <div className={styles.logoContainer}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="ConvertInAr Logo"
              width={48}
              height={48}
              className={styles.navbarLogo}
              priority
            />
            <span className={styles.brandName}>
              Convertin<span className="gradient-text">Ar</span>
            </span>
          </Link>
        </div>

        {/* Desktop Navigation Menu */}
        <div className={styles.navMenu}>
          {/* ... your existing nav items remain the same ... */}
          <div className={styles.navItem}>
            <button className={styles.dropdownBtn}>
              Products
              <svg className={styles.chevron} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className={styles.dropdownMenu}>
              <Link href="/products/imageto3d" className={styles.dropdownItem} onClick={closeMobileMenu}>Image to 3D</Link>
              <Link href="/products/textto3d" className={styles.dropdownItem} onClick={closeMobileMenu}>Text to 3D</Link>
              <Link href="/products/arscanner" className={styles.dropdownItem} onClick={closeMobileMenu}>AR Scanner</Link>
              <Link href="/products/fileconvertor" className={styles.dropdownItem} onClick={closeMobileMenu}>File Convertor</Link>
              <Link href="/products/arproductvisualization" className={styles.dropdownItem} onClick={closeMobileMenu}>AR product visualization</Link>
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
              <Link href="/use-cases/ecommerce" className={styles.dropdownItem} onClick={closeMobileMenu}>Ecommerce</Link>
              <Link href="/use-cases/education" className={styles.dropdownItem} onClick={closeMobileMenu}>Education</Link>
              <Link href="/use-cases/marketing" className={styles.dropdownItem} onClick={closeMobileMenu}>Marketing</Link>
              <Link href="/use-cases/gaming" className={styles.dropdownItem} onClick={closeMobileMenu}>Gaming</Link>
            </div>
          </div>

          <div className={styles.navItem}>
            <Link href="/pricing" className={styles.navLink} onClick={closeMobileMenu}>
              Pricing
            </Link>
          </div>
        </div>

        {/* Desktop CTAs */}
        <div className={styles.ctaContainer}>
          <Link href="/login" className={styles.loginBtn} onClick={closeMobileMenu}>
            Login
          </Link>
          <Link href="/create" className={styles.primaryBtn} onClick={closeMobileMenu}>
            Create Ar
          </Link>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {/* Products */}
          <div className={styles.mobileNavSection}>
            <h4 className={styles.mobileSectionTitle}>Products</h4>
            <Link href="/products/imageto3d" className={styles.mobileLink} onClick={closeMobileMenu}>Image to 3D</Link>
            <Link href="/products/textto3d" className={styles.mobileLink} onClick={closeMobileMenu}>Text to 3D</Link>
            <Link href="/products/arscanner" className={styles.mobileLink} onClick={closeMobileMenu}>AR Scanner</Link>
            <Link href="/products/fileconvertor" className={styles.mobileLink} onClick={closeMobileMenu}>File Convertor</Link>
            <Link href="/products/arproductvisualization" className={styles.mobileLink} onClick={closeMobileMenu}>AR Product Visualization</Link>
          </div>

          {/* Use Cases */}
          <div className={styles.mobileNavSection}>
            <h4 className={styles.mobileSectionTitle}>Use Cases</h4>
            <Link href="/use-cases/ecommerce" className={styles.mobileLink} onClick={closeMobileMenu}>Ecommerce</Link>
            <Link href="/use-cases/education" className={styles.mobileLink} onClick={closeMobileMenu}>Education</Link>
            <Link href="/use-cases/marketing" className={styles.mobileLink} onClick={closeMobileMenu}>Marketing</Link>
            <Link href="/use-cases/gaming" className={styles.mobileLink} onClick={closeMobileMenu}>Gaming</Link>
          </div>

          <Link href="/pricing" className={styles.mobileLink} onClick={closeMobileMenu}>
            Pricing
          </Link>

          <div className={styles.mobileCta}>
            <Link href="/login" className={styles.mobileLoginBtn} onClick={closeMobileMenu}>
              Login
            </Link>
            <Link href="/create" className={styles.mobilePrimaryBtn} onClick={closeMobileMenu}>
              Create Ar
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
