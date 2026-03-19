"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './UseAnywhere.module.css';

const items = [
  { title: 'Website', img: '/anywhere/website.png' },
  { title: 'Print', img: '/anywhere/print.png' },
  { title: 'Social', img: '/anywhere/social.png' },
  { title: 'Email', img: '/anywhere/email.png' },
  { title: 'Billboard', img: '/anywhere/billboard.png' },
];

export default function UseAnywhere() {
  // Triple the items for extra smooth looping on wide screens
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.title}>
          One <span style={{ color: '#81BB26' }}>QR Code</span>. Use Anywhere.
        </h2>
      </motion.div>

      <motion.div
        className={styles.marqueeWrapper}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        <div className={styles.marqueeContent}>
          {marqueeItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageBox}>
                <img src={item.img} alt={item.title} />
              </div>
              <p className={styles.cardTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className={styles.ctaWrapper}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <button className={styles.primaryCta}>
          Start Creating Now
        </button>
      </motion.div>
    </section>
  );
}
