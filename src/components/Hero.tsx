import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Left Column: Content */}
        <div className={styles.contentColumn}>
          <h1 className={styles.heading}>
            Create and experience <span className="gradient-text">Ar</span>
          </h1>
          <p className={styles.subheading}>
            One platform to create and share immersive 3D/AR experiences. No app required.
          </p>

          <div className={styles.ctaGroup}>
            <Link href="/create" className={styles.primaryCta}>
              Create Ar
            </Link>
            <Link href="/demo" className={styles.secondaryCta}>
              Explore Solutions
            </Link>
          </div>

          <div className={styles.trustedBy}>
            <p className={styles.trustedLabel}></p>
            <div className={styles.trustedLogos}>
              <div className={styles.logoCircle}>A</div>
              <div className={styles.logoCircle}>B</div>
              <div className={styles.logoCircle}>C</div>
              <div className={styles.logoCircle}>D</div>
            </div>
          </div>

          <div className={styles.featuresList}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>No 3D designer</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>No developer</span>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✓</div>
              <span>No complicated setup</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className={styles.visualColumn}>
          <div className={styles.visualWrapper}>
            {/* abstract representation of QR code to AR experience without explicit box boundry */}

            <div className={styles.arMockupContainer}>
              {/* QR Code element floating */}
              <div className={styles.qrElement}>
                <div className={styles.qrCodeWrapper}>
                  <Image
                    src="/ar-qr-code-demo-nike.webp"
                    alt="AR QR Code Demo"
                    width={180}
                    height={180}
                    className={styles.qrImage}
                  />
                  <div className={styles.qrScannerLine}></div>
                </div>
                <div className={styles.qrLabel}>Scan to Demo</div>
              </div>

              {/* Mobile Phone Mockup */}
              <div className={styles.phoneMockup}>
                <div className={styles.phoneScreen}>
                  <video
                    className={styles.arVideo}
                    src="/AR-Code-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className={styles.phoneNotch}></div>
              </div>

            </div>
          </div>
          {/* Decorative glows */}
          <div className={styles.glowPrimary}></div>
        </div>
      </div>
    </section>
  );
}