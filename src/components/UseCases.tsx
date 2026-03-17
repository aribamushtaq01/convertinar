"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './UseCases.module.css';

const USE_CASES = [
  {
    title: 'E-commerce',
    image: '/usecase-ecommerce.webp',
    detail: 'Boost sales with 3D product previews and virtual try-ons that build customer confidence.'
  },
  {
    title: 'Gaming',
    image: '/usecase-gaming.webp',
    detail: 'Create buzz-worthy unboxing moments, AR trading cards, and limited-edition activations that live beyond the screen.'
  },
  {
    title: 'Education',
    image: '/usecase-education.webp',
    detail: 'Transform learning with interactive 3D models of complex concepts and historical artifacts.'
  },
  {
    title: 'Marketing',
    image: '/usecase-marketing.webp',
    detail: 'Create viral campaigns with AR-powered social filters and interactive outdoor ads.'
  }
];

export default function UseCases() {
  return (
    <section className={styles.useCasesSection}>
      <div className={styles.container}>
        <motion.h2
          className={styles.sectionHeading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Explore Opportunities
        </motion.h2>

        <div className={styles.grid}>
          {USE_CASES.map((useCase, index) => (
            <motion.div
              key={index}
              className={styles.cardWrapper}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.cardFront}>
                <div className={styles.imageContainer}>
                  <div className={styles.placeholderImg}>AR</div>
                </div>
                <h3 className={styles.cardTitle}>{useCase.title}</h3>
              </div>
              <div className={styles.cardBack}>
                <p className={styles.cardDetail}>{useCase.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <button className={styles.primaryCta}>Try It free</button>
        </motion.div>
      </div>
    </section>
  );
}