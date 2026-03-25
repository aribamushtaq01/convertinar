"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './CaseStudies.module.css';

// ─── Card 1: Success Stories by Industry ────────────────────────────────────
// All copy is AR/3D/QR-first — upload an image, get a 3D model, scan to experience
const INDUSTRY_DATA = {
  "Home & Furniture": {
    eyebrow: "IKEA ALREADY WINS",
    title: "How IKEA turned product photos into AR rooms customers walk into",
    desc: "IKEA uploads a single product image — ConvertinAr generates a photorealistic 3D model in minutes. Shoppers scan a QR code on any product page and place true-to-scale furniture inside their own room before checkout. See it. Size it. Own it.",
    metrics: [
      { value: "+94%", label: "Conversion Lift" },
      { value: "−40%", label: "Return Rate" },
      { value: "3 Min 42s", label: "AR Session Time" }
    ]
  },
  "E-Commerce": {
    eyebrow: "SHOPIFY BRANDS ALREADY WIN",
    title: "How e-commerce brands let shoppers place products in their space before buying",
    desc: "Upload a product image. ConvertinAr converts it into a 3D AR model — no 3D studio needed. A single QR code or embed snippet puts that model on every product page. Shoppers scan, see the product life-size in their room, and buy with confidence.",
    metrics: [
      { value: "+94%", label: "Conversion Rate" },
      { value: "−40%", label: "Fewer Returns" },
      { value: "2.8×", label: "Add-to-Cart Rate" }
    ]
  },
  "Food Retail": {
    eyebrow: "SPAR ALREADY WINS",
    title: "How SPAR brought seasonal promotions to life with scannable AR",
    desc: "SPAR printed QR codes on packaging and in-store signage. Customers scan and instantly launch interactive 3D AR experiences — animated seasonal characters, gamified loyalty stamps, and prize reveals — all generated from product imagery using ConvertinAr.",
    metrics: [
      { value: "86,000", label: "Unique AR Scans" },
      { value: "111 Sec", label: "AR Engagement Time" },
      { value: "+25%", label: "CTR on QR Codes" }
    ]
  },
  "Retail": {
    eyebrow: "OBI SWITZERLAND ALREADY WINS",
    title: "How OBI Switzerland turned print catalogues into 3D AR showrooms",
    desc: "OBI added QR codes to their printed catalogue. Customers scan any product photo and a 3D model of the item appears in their home — drill, shelf, or power tool — letting them visualise size, finish, and fit before visiting the store.",
    metrics: [
      { value: "21%", label: "In-Store Redemption" },
      { value: "78%", label: "New Customers via QR" },
      { value: "90%", label: "AR Session Completion" }
    ]
  },
  "Quick Service Restaurants": {
    eyebrow: "KFC ALREADY WINS",
    title: "How KFC made menu items scan-to-see with AR on every tray liner",
    desc: "KFC printed QR codes on tray liners and packaging. Customers scan and see 3D AR versions of menu items appear on the table — rotating, steaming, life-size — driving upsells, combo upgrades, and digital loyalty sign-ups at the point of hunger.",
    metrics: [
      { value: "46%", label: "QR-to-Lead Conv." },
      { value: "106 Sec", label: "AR Engagement" },
      { value: "95%", label: "Experience Completion" }
    ]
  },
  "FMCG/CPG": {
    eyebrow: "HEINEKEN SWITZERLAND ALREADY WINS",
    title: "How HEINEKEN turned bottle labels into scannable 3D brand worlds",
    desc: "HEINEKEN embedded a QR code on every bottle label. Consumers scan and enter a 3D AR experience — animated brand stories, virtual bars, limited edition collectible models — all triggered from a single image converted into immersive AR by ConvertinAr.",
    metrics: [
      { value: "+10%", label: "Brand Meaningfulness" },
      { value: "30 Mio", label: "AR Tokens Activated" },
      { value: "95 Sec", label: "Avg. AR Session" }
    ]
  }
};

// ─── Card 2: Success Stories by Use Case ────────────────────────────────────
const USECASE_DATA = {
  "Marketing Campaigns": {
    eyebrow: "GLOBAL BRANDS ALREADY ACTIVATE",
    title: "Make your ads impossible to scroll past — scan any surface, launch AR",
    desc: "Turn a product image into a 3D AR model. Embed it behind a QR code on posters, packaging, billboards, and print ads. Customers scan and your product appears life-size in their world — straight from a flyer, a bus shelter, or an Instagram story. AR ads drive 3× longer engagement than static content.",
    metrics: [
      { value: "3×", label: "Longer Engagement" },
      { value: "+67%", label: "QR Scan Rate" },
      { value: "89%", label: "AR Completion Rate" }
    ]
  },
  "Engagement": {
    eyebrow: "TCHIBO SCHWEIZ ENGAGES",
    title: "How Tchibo Schweiz turned product packaging into scannable AR experiences",
    desc: "Tchibo Schweiz added ConvertinAr QR codes to coffee packaging and in-store displays. Customers scan and unlock 3D AR product stories, seasonal animations, and opt-in loyalty moments — all driven from product images converted to interactive 3D models.",
    metrics: [
      { value: "35,000", label: "Unique AR Scans" },
      { value: "25,200", label: "QR Opt-in Signups" },
      { value: "72%", label: "AR Opt-in Rate" }
    ]
  },
  "Conversion": {
    eyebrow: "AEG ELECTROLUX ALREADY CONVERTS",
    title: "How AEG let shoppers place appliances in their kitchen before buying",
    desc: "AEG uploaded product imagery to ConvertinAr — every appliance became a photorealistic 3D AR model. QR codes on shelf tags and e-commerce pages let customers scan and see the washing machine, oven, or fridge life-size in their own home before clicking buy.",
    metrics: [
      { value: "+44%", label: "AR-Driven Conversion" },
      { value: "+11%", label: "Basket Size" },
      { value: "+21%", label: "Transactions" }
    ]
  },
  "Retention": {
    eyebrow: "BIPA ALREADY RETAINS",
    title: "How BIPA built a loyalty programme customers scan back into every week",
    desc: "BIPA placed ConvertinAr QR codes on receipts and loyalty cards. Customers scan to unlock 3D AR gamified experiences — spin wheels, product reveals, and collectible 3D brand characters — turning routine purchases into reasons to return.",
    metrics: [
      { value: "2.4 Mio", label: "AR Sessions Started" },
      { value: "3.7×", label: "Return Visit Rate" },
      { value: "61%", label: "Reward Redemption" }
    ]
  },
  "Education & Training": {
    eyebrow: "LEADING INSTITUTIONS ALREADY TEACH",
    title: "Scan a textbook page — watch a 3D model appear and come to life",
    desc: "Upload diagrams, product images, or training materials. ConvertinAr generates interactive 3D AR models students and trainees scan with any device — rotating anatomy models, exploded machine parts, architectural walkthroughs. No app download. No hardware. Just scan and learn.",
    metrics: [
      { value: "+78%", label: "Knowledge Retention" },
      { value: "4 Min 10s", label: "AR Session Depth" },
      { value: "92%", label: "Course Completion" }
    ]
  },
  "Gaming & Interactive Media": {
    eyebrow: "TOP STUDIOS ALREADY ACTIVATE",
    title: "Scan a card, a box, or a poster — watch game characters step into the real world",
    desc: "Upload game assets and character art. ConvertinAr converts them into 3D AR models triggered by QR codes on trading cards, packaging, and collectibles. Fans scan and watch characters appear at real scale in their physical space — no app, no glasses, just a phone camera.",
    metrics: [
      { value: "5.2×", label: "Social Shares" },
      { value: "148 Sec", label: "Avg. AR Play Time" },
      { value: "+110%", label: "Brand Recall" }
    ]
  }
};

// ─── Two cards ───────────────────────────────────────────────────────────────
const CASE_STUDIES = [
  {
    id: "industry",
    sectionTitle: "Success Stories by Industry",
    pills: Object.keys(INDUSTRY_DATA),
    data: INDUSTRY_DATA,
    bgColor: "#f3f4f6",
    accentColor: "#004b50",
    textColor: "#111827"
  },
  {
    id: "usecase",
    sectionTitle: "Success Stories by Use Case",
    pills: Object.keys(USECASE_DATA),
    data: USECASE_DATA,
    bgColor: "#d9f99d",
    accentColor: "#004b50",
    textColor: "#111827"
  }
];

// ─── Mockup visual ───────────────────────────────────────────────────────────
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

// ─── Card ────────────────────────────────────────────────────────────────────
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
          top: "12vh",
          zIndex: i + 1,
          backgroundColor: study.bgColor,
          color: study.textColor
        }}
      >
        <div className={styles.cardHeader}>
          <motion.h2
            className={styles.cardSectionTitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {study.sectionTitle}
          </motion.h2>
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
                <motion.h3
                  className={styles.caseTitle}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {currentData.title}
                </motion.h3>
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
};

// ─── Section ─────────────────────────────────────────────────────────────────
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
          <motion.h2
            className={styles.mainTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Impactful <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <p className={styles.mainSubtitle}>
            Upload an image. Get a 3D model. Drop a QR code. Watch customers
            experience your product in their world — before they ever buy.
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
