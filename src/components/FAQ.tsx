"use client";

import React from 'react';
import { motion } from 'framer-motion';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "Can I upload an existing 3D model?",
      a: "Yes. Upload a GLB or USDZ file directly and we'll convert it into an embeddable AR experience immediately"
    },
    {
      q: "How accurate is the AI 3D model from a photo?",
      a: "For most product types, the AI generates a clean, proportionally accurate model. For maximum precision, use our iPhone LiDAR scanner. You can also upload an existing 3D model."
    },
    {
      q: "Which file formats do you support?",
      a: "We currently support direct uploads for GLB, USDZ, FBX, and OBJ files. For 2D images, we support JPG and PNG."
    },
    {
      q: "Do I need special hardware to view AR?",
      a: "No! Any modern smartphone with a camera and a web browser can experience our AR. For creators, our mobile app uses LiDAR on compatible devices for even better precision."
    },
    {
      q: "Can I use my own branding?",
      a: "Yes! Our Professional and Enterprise plans allow you to remove Convertinar branding and customize the QR code and AR environment to match your brand style."
    },
    {
      q: "Is there a limit to how many people can scan my QR?",
      a: "Standard plans have high scan limits, while our Professional and Enterprise plans offer unlimited views for your campaigns."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.gridOverlay}></div>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className={styles.questionButton}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className={styles.question}>{faq.q}</h3>
                <span className={styles.icon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>

              <motion.div
                className={styles.answerWrapper}
                initial={false}
                animate={{
                  height: activeIndex === index ? 'auto' : 0,
                  opacity: activeIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              >
                <p className={styles.answer}>{faq.a}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
