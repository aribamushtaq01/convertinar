"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './UseCases.module.css';

const USE_CASES = [
  {
    title: 'E-Commerce',
    image: '/e-commerce.png',
    accentFrom: '#9CB2B3', accentTo: '#D1DADB',
    detail: 'Boost sales with 3D product previews and virtual try-ons that build customer confidence.'
  },
  {
    title: 'Marketing Campaigns',
    image: '/marketing.png',
    accentFrom: '#00A0FE', accentTo: '#9ADAF3',
    detail: 'Accelerate your design workflow with instant 3D models from any 2D image.'
  },
  {
    title: 'Education',
    image: '/education.png',
    accentFrom: '#8D7E3B', accentTo: '#DCC89C',
    detail: 'Transform learning with interactive 3D models of complex concepts and historical artifacts.'
  },
  {
    title: 'Game Development',
    image: '/gaming.png',
    accentFrom: '#138DA0', accentTo: '#7AE2CF',
    detail: 'Create buzz-worthy assets that live beyond the screen in immersive AR environments.'
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
              className={styles.useCaseCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div 
                className={styles.cardBg} 
                style={{ background: `linear-gradient(to bottom, ${useCase.accentFrom}, ${useCase.accentTo})` }}
              />
              <img 
                src={useCase.image} 
                alt={useCase.title} 
                className={styles.cardImage} 
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{useCase.title}</h3>
                <p className={styles.cardDescription}>{useCase.detail}</p>
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