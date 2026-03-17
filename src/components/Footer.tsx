import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand Info */}
          <div className={styles.brandColumn}>
            <div className={styles.logo}>
              <Image src="/logo.png" alt="ConvertInAr" width={32} height={32} />
              <span>Convertin<span className="gradient-text">Ar</span></span>
            </div>
            <p className={styles.desc}>
              The #1 platform for creating high-converting augmented reality experiences via QR codes. 
              No app required.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className={styles.socialIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className={styles.columnTitle}>Product</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products/webar" className={styles.link}>WebAR</Link></li>
              <li><Link href="/products/ar-codes" className={styles.link}>AR Codes</Link></li>
              <li><Link href="/products/analytics" className={styles.link}>Analytics</Link></li>
              <li><Link href="/pricing" className={styles.link}>Pricing</Link></li>
            </ul>
          </div>

          {/* Use Cases Links */}
          <div>
            <h4 className={styles.columnTitle}>Use Cases</h4>
            <ul className={styles.linkList}>
              <li><Link href="/use-cases/e-commerce" className={styles.link}>E-commerce</Link></li>
              <li><Link href="/use-cases/real-estate" className={styles.link}>Real Estate</Link></li>
              <li><Link href="/use-cases/education" className={styles.link}>Education</Link></li>
              <li><Link href="/use-cases/marketing" className={styles.link}>Marketing</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={styles.columnTitle}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about" className={styles.link}>About Us</Link></li>
              <li><Link href="/careers" className={styles.link}>Careers</Link></li>
              <li><Link href="/blog" className={styles.link}>Blog</Link></li>
              <li><Link href="/contact" className={styles.link}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottom}>
          <p>© {currentYear} ConvertInAr Inc. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.link}>Privacy Policy</Link>
            <Link href="/terms" className={styles.link}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
