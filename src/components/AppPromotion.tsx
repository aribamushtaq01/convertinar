"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './AppPromotion.module.css';

export default function AppPromotion() {
  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Side / Sidebar */}
        <motion.div
          className={styles.sidebar}
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            rotateX: 2,
            transition: { duration: 0.4 }
          }}
        >
          <div className={styles.logoWrapper}>
            <Image
              src="/logo.png"
              alt="ConvertInAr Logo"
              width={80}
              height={80}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.appPromotion}>
            <p>Capture Reality with LiDAR</p>
            <span>Available on iOS App Store</span>
          </div>
        </motion.div>

        {/* Center Content */}
        <div className={styles.content}>
          <motion.h2
            className={styles.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Bring Ideas to <span className="gradient-text">Life.</span>
          </motion.h2>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Turn everything into an interactive AR experience, share QR anywhere.
            Capture the world in 3D with our mobile app.
          </motion.p>

          <motion.div
            className={styles.ctaGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <button className={styles.primaryCta}>Create Now</button>

            {/* Desktop-only button */}
            <button className={`${styles.secondaryCta} ${styles.desktopOnly}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
              Upload Model
            </button>

            {/* Mobile-only button */}
            <button className={`${styles.secondaryCta} ${styles.mobileOnly}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4"></path>
                <polyline points="15 13 20 18 15 23"></polyline>
                <path d="m20 18-5-5"></path>
                <path d="M12 11h.01"></path>
                <path d="M16 11h.01"></path>
                <path d="M8 11h.01"></path>
              </svg>
              Download App
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
