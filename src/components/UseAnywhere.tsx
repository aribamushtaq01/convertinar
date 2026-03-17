"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './UseAnywhere.module.css';

export default function UseAnywhere() {
  const items = [
    { title: 'Website', img: '/anywhere/website.png' },
    { title: 'Packaging', img: '/anywhere/packaging.png' },
    { title: 'Print', img: '/anywhere/print.png' },
    { title: 'Social', img: '/anywhere/social.png' },
    { title: 'Email', img: '/anywhere/email.png' },
    { title: 'Billboard', img: '/anywhere/billboard.png' },
    { title: 'In-Store', img: '/anywhere/billboard.png' }, // Reusing billboard for scale
    { title: 'Cards', img: '/anywhere/print.png' },    // Reusing print for context
    { title: 'Presentations', img: '/anywhere/website.png' } // Reusing website for screen
  ];

  // Double the items for seamless infinite loop
  const marqueeItems = [...items, ...items];

  return (
    <section className={styles.section}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.title}>One <span className="gradient-text">QR Code</span>. Use Anywhere.</h2>
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
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <button className={styles.primaryCta}>Start Creating Now</button>
      </motion.div>
    </section>
  );
}
