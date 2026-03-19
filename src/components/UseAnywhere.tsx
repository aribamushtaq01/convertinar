"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './UseAnywhere.module.css';

const items = [
  { title: 'Website', img: '/anywhere/website.png' },
  { title: 'Packaging', img: '/anywhere/packaging.png' },
  { title: 'Print', img: '/anywhere/print.png' },
  { title: 'Social', img: '/anywhere/social.png' },
  { title: 'Email', img: '/anywhere/email.png' },
  { title: 'Billboard', img: '/anywhere/billboard.png' },
  { title: 'In-Store', img: '/anywhere/instore.png' },
  { title: 'Cards', img: '/anywhere/cards.png' },
];

export default function UseAnywhere() {
  const marqueeItems = [...items, ...items, ...items];

  return (
    <section className={styles.section}>
      {/* Invisible SVG Stencil */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="antigravity-shape" clipPathUnits="objectBoundingBox">
            {/* This path creates the rounded rectangle (0.2 radius) 
               and subtracts the "bite" from the top right 
            */}
            <path d="M 0,0.2 
                     C 0,0.09 0.09,0 0.2,0 
                     H 0.6 
                     C 0.6,0.15 0.75,0.3 0.9,0.3 
                     H 1 
                     V 0.8 
                     C 1,0.91 0.91,1 0.8,1 
                     H 0.2 
                     C 0.09,1 0,0.91 0,0.8 
                     Z" />
          </clipPath>
        </defs>
      </svg>

      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.title}>
          One <span style={{ color: '#81BB26' }}>QR Code</span>. Use Anywhere.
        </h2>
      </motion.div>

      <div className={styles.marqueeWrapper}>
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
      </div>

      <div className={styles.ctaWrapper}>
        <button className={styles.primaryCta}>Start Creating Now</button>
      </div>
    </section>
  );
}
