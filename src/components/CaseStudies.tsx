"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './CaseStudies.module.css';

const INDUSTRY_DATA = {
  "Food Retail": { eyebrow: "SPAR ALREADY WINS", title: "How SPAR increases seasonal engagement", desc: "SPAR revived its loyalty program with gamified campaigns boosting engagement.", metrics: [{ value: "86,000", label: "Unique Leads" }, { value: "111 Sec", label: "Engagement Time" }, { value: "+25%", label: "CTR" }] },
  "Retail": { eyebrow: "OBI SWITZERLAND ALREADY WINS", title: "How OBI Switzerland amplifies engagement", desc: "OBI Switzerland increased digital engagement with gamified promotions.", metrics: [{ value: "21%", label: "Redemption" }, { value: "78%", label: "New Customers" }, { value: "90%", label: "Game Completion" }] },
  "E-Commerce": { eyebrow: "LINDT & SPRÜNGLI ALREADY WINS", title: "How Lindt & Sprüngli boosts newsletters", desc: "Lindt & Sprüngli increased digital engagement and signups with gamified sweepstakes.", metrics: [{ value: "+18%", label: "Sales Conv." }, { value: "14,000+", label: "Leads" }, { value: "22%", label: "Opt-In" }] },
  "Quick Service Restaurants": { eyebrow: "KFC ALREADY WINS", title: "How KFC generates digital engagement", desc: "KFC increased engagement and qualified leads with gamified offers.", metrics: [{ value: "46%", label: "Lead Conv." }, { value: "106 Sec", label: "Engagement" }, { value: "95%", label: "Completion" }] },
  "FMCG/CPG": { eyebrow: "HEINEKEN SWITZERLAND ALREADY WINS", title: "How HEINEKEN Switzerland boosts brand love", desc: "HEINEKEN Switzerland increased brand meaningfulness with gamified content.", metrics: [{ value: "+10%", label: "Brand Meaning" }, { value: "30 Mio", label: "Tokens" }, { value: "95 Sec", label: "Engage Time" }] }
};

const OUTCOME_DATA = {
  "Engagement": { eyebrow: "TCHIBO SCHWEIZ ENGAGES", title: "How Tchibo Schweiz increases engagement", desc: "Tchibo Schweiz successfully increased engagement and signups with gamified content.", metrics: [{ value: "35,000", label: "Unique Leads" }, { value: "25,200", label: "Opt-in Signups" }, { value: "72%", label: "Opt-in Rate" }] },
  "Conversion": { eyebrow: "AEG ELECTROLUX ALREADY CONVERTS", title: "How AEG boosts sales conversion", desc: "AEG significantly increased sales conversion and revenue with gamified promotions.", metrics: [{ value: "+44%", label: "Conversion" }, { value: "+11%", label: "Basket Size" }, { value: "+21%", label: "Transactions" }] },
  "Retention": { eyebrow: "BIPA ALREADY RETAINS", title: "How BIPA amplifies loyalty", desc: "BIPA increased loyalty engagement and purchases with gamified programs.", metrics: [{ value: "2.4 Mio", label: "Started Games" }, { value: "3.7", label: "Return Rate" }, { value: "61%", label: "Redemption" }] }
};

const CASE_STUDIES = [
  { id: "industry", sectionTitle: "Success Stories by Industry", pills: Object.keys(INDUSTRY_DATA), data: INDUSTRY_DATA, bgColor: "#f3f4f6", accentColor: "#004b50", textColor: "#111827" },
  { id: "outcome", sectionTitle: "Success Stories by Outcome", pills: Object.keys(OUTCOME_DATA), data: OUTCOME_DATA, bgColor: "#d9f99d", accentColor: "#004b50", textColor: "#111827" }
];

const VisualMockup = () => (
  <div className={styles.mockupContainer}>
    <div className={styles.mockupStore}>
      <div className={styles.placeholderImage} />
    </div>
    <div className={styles.mockupContentCard}>
      <div className={styles.cardInner}>
        <div className={styles.cardWheel} />
        <div className={styles.cardLines}>
          <div className={styles.line} />
          <div className={styles.lineShort} />
        </div>
      </div>
    </div>
    <div className={styles.mockupLogo}>
      <div className={styles.logoCircle} />
    </div>
  </div>
);

const Card = ({ i, study, progress, range, targetScale, targetBrightness }: any) => {
  const [activeTab, setActiveTab] = useState(study.pills[0]);
  const currentData = study.data[activeTab];

  const scale = useTransform(progress, range, [1, targetScale]);
  const brightness = useTransform(progress, range, [1, targetBrightness]);
  const filter = useTransform(brightness, (b) => `brightness(${b})`);

  return (
    <div className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{
          scale,
          filter,
          top: "12vh", // Stays in fixed position when sticky
          zIndex: i + 1,
          backgroundColor: study.bgColor,
          color: study.textColor
        }}
      >
        <div className={styles.cardHeader}>
          <h2 className={styles.cardSectionTitle}>{study.sectionTitle}</h2>
          <div className={styles.pillGroup}>
            {study.pills.map((pill: string) => (
              <button
                key={pill}
                className={`${styles.pill} ${pill === activeTab ? styles.pillActive : ''}`}
                style={pill === activeTab ? { backgroundColor: study.accentColor } : {}}
                onClick={() => setActiveTab(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.cardBody}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={styles.bodyContent}
            >
              <div className={styles.content}>
                <div className={styles.eyebrowBox}>
                  <span className={styles.eyebrowText}>{currentData.eyebrow}</span>
                </div>
                <h3 className={styles.caseTitle}>{currentData.title}</h3>
                <p className={styles.caseDesc}>{currentData.desc}</p>

                <div className={styles.metricsGrid}>
                  {currentData.metrics.map((metric: any, idx: number) => (
                    <div key={idx} className={styles.metricItem}>
                      <div className={styles.metricValue} style={{ color: study.accentColor }}>{metric.value}</div>
                      <div className={styles.metricLabel}>{metric.label}</div>
                      {idx < currentData.metrics.length - 1 && <div className={styles.metricDivider} />}
                    </div>
                  ))}
                </div>

                <a href="#" className={styles.readMore}>
                  Read case study <span className={styles.arrowIcon}>→</span>
                </a>
              </div>

              <div className={styles.visualColumn}>
                <VisualMockup />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}

export default function CaseStudies() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className={styles.section} id="case-studies">
      <div className={styles.container}>
        <div className={styles.mainHeader}>
          <h2 className={styles.mainTitle}>Impactful Success Stories</h2>
          <p className={styles.mainSubtitle}>
            See how leading brands achieve tangible growth and engagement
            using our advanced gamification tools.
          </p>
        </div>

        <div className={styles.stack}>
          {CASE_STUDIES.map((study, idx) => {
            const rangeStart = idx * (1 / CASE_STUDIES.length);
            const targetScale = idx === 0 ? 0.92 : 1;
            const targetBrightness = idx === 0 ? 0.7 : 1;

            return (
              <Card
                key={study.id}
                i={idx}
                study={study}
                progress={scrollYProgress}
                range={[rangeStart, 1]}
                targetScale={targetScale}
                targetBrightness={targetBrightness}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
}
