"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from './CaseStudies.module.css';

// ─── Card 1: Success Stories by Industry ────────────────────────────────────
const INDUSTRY_DATA = {
  "Home & Furniture": {
    eyebrow: "IKEA ALREADY WINS",
    title: "How IKEA Turned Product Photos into True-to-Scale AR Furniture Experiences",
    desc: "IKEA uploads a single product photo to ConvertinAr which instantly generates a photorealistic 3D model. Customers scan the QR code on the product page or catalogue to place the furniture life-size in their own room using augmented reality. This seamless image to 3D to AR experience builds shopper confidence before purchase and drives higher conversions with fewer returns.",
    metrics: [
      { value: "+94%", label: "Conversion Lift" },
      { value: "−40%", label: "Return Rate" },
      { value: "3 Min 42s", label: "AR Session Time" }
    ]
  },
  "E-Commerce": {
    eyebrow: "SHOPIFY BRANDS ALREADY WIN",
    title: "How E-Commerce Brands Let Shoppers Visualize Products in Their Space with QR AR",
    desc: "Upload any product image or existing 3D model to ConvertinAr and receive a ready-to-use photorealistic 3D AR model in minutes. A single QR code or embed on the product page lets shoppers scan and place items life-size in their real environment via augmented reality. This image to AR visualization reduces cart abandonment and boosts sales.",
    metrics: [
      { value: "+94%", label: "Conversion Rate" },
      { value: "−40%", label: "Fewer Returns" },
      { value: "2.8×", label: "Add-to-Cart Rate" }
    ]
  },
  "Food Retail": {
    eyebrow: "SPAR ALREADY WINS",
    title: "How SPAR Brought Seasonal Promotions to Life with Scannable QR AR Experiences",
    desc: "SPAR uploads product packaging images to ConvertinAr to generate interactive 3D AR models. QR codes printed on packaging and in-store signage let customers scan and instantly launch animated seasonal characters, gamified loyalty rewards, and prize reveals in augmented reality. This picture to 3D to AR activation creates memorable in-store moments.",
    metrics: [
      { value: "86,000", label: "Unique AR Scans" },
      { value: "111 Sec", label: "AR Engagement Time" },
      { value: "+25%", label: "CTR on QR Codes" }
    ]
  },
  "Retail": {
    eyebrow: "OBI SWITZERLAND ALREADY WINS",
    title: "How OBI Switzerland Turned Print Catalogues into 3D AR Showrooms",
    desc: "OBI adds QR codes to printed catalogues linked to ConvertinAr generated 3D models from product photos. Customers scan any item image to see drills, shelves, or power tools appear life-size in their home or workspace via augmented reality. This model to AR experience drives more in-store visits and new customer growth.",
    metrics: [
      { value: "21%", label: "In-Store Redemption" },
      { value: "78%", label: "New Customers via QR" },
      { value: "90%", label: "AR Session Completion" }
    ]
  },
  "Quick Service Restaurants": {
    eyebrow: "KFC ALREADY WINS",
    title: "How KFC Made Menu Items Come Alive with Scan-to-See AR on Tray Liners",
    desc: "KFC prints QR codes on tray liners and packaging that trigger ConvertinAr 3D AR models created from menu photos. Customers scan and watch menu items appear steaming, rotating, and life-size on their table in augmented reality. This instant image to AR experience drives upsells, combo upgrades, and loyalty sign-ups.",
    metrics: [
      { value: "46%", label: "QR-to-Lead Conv." },
      { value: "106 Sec", label: "AR Engagement" },
      { value: "95%", label: "Experience Completion" }
    ]
  }
};

// ─── Card 2: Success Stories by Use Case ────────────────────────────────────
const USECASE_DATA = {
  "Marketing Campaigns": {
    eyebrow: "GLOBAL BRANDS ALREADY ACTIVATE",
    title: "Make Your Ads Impossible to Scroll Past with Scan-to-Launch AR",
    desc: "Turn product photos or 3D models into photorealistic AR experiences with ConvertinAr. Embed QR codes on posters, packaging, billboards, or digital ads. Customers scan any surface to see your product appear life-size in their world via augmented reality. This QR powered AR marketing delivers 3 times longer engagement than static ads.",
    metrics: [
      { value: "3×", label: "Longer Engagement" },
      { value: "+67%", label: "QR Scan Rate" },
      { value: "89%", label: "AR Completion Rate" }
    ]
  },
  "Engagement": {
    eyebrow: "TCHIBO SCHWEIZ ENGAGES",
    title: "How Tchibo Schweiz Turned Product Packaging into Scannable AR Experiences",
    desc: "Tchibo adds ConvertinAr QR codes to coffee packaging and displays. Customers scan to unlock interactive 3D AR product stories, seasonal animations, and loyalty moments generated from uploaded product images. This picture to AR activation creates emotional connections and higher engagement.",
    metrics: [
      { value: "35,000", label: "Unique AR Scans" },
      { value: "25,200", label: "QR Opt-in Signups" },
      { value: "72%", label: "AR Opt-in Rate" }
    ]
  },
  "Conversion": {
    eyebrow: "AEG ELECTROLUX ALREADY CONVERTS",
    title: "How AEG Lets Shoppers Place Appliances in Their Kitchen Before Buying",
    desc: "AEG uploads product images to ConvertinAr to create photorealistic 3D AR models. QR codes on shelf tags and e-commerce pages let customers scan and visualize washing machines, ovens, or fridges life-size in their own home via augmented reality. This image to AR visualization increases purchases and basket size.",
    metrics: [
      { value: "+44%", label: "AR-Driven Conversion" },
      { value: "+11%", label: "Basket Size" },
      { value: "+21%", label: "Transactions" }
    ]
  },
  "Retention": {
    eyebrow: "BIPA ALREADY RETAINS",
    title: "How BIPA Built a Loyalty Programme Customers Scan Back Into Every Week",
    desc: "BIPA places ConvertinAr QR codes on receipts and loyalty cards. Customers scan to unlock gamified 3D AR experiences with spin wheels, product reveals, and collectible brand characters. This model to AR journey turns everyday purchases into reasons to return again and again.",
    metrics: [
      { value: "2.4 Mio", label: "AR Sessions Started" },
      { value: "3.7×", label: "Return Visit Rate" },
      { value: "61%", label: "Reward Redemption" }
    ]
  },
  "Education & Training": {
    eyebrow: "LEADING INSTITUTIONS ALREADY TEACH",
    title: "Scan a Textbook Page and Watch 3D Models Come to Life in AR",
    desc: "Upload diagrams, product images, or training materials to ConvertinAr to generate interactive 3D AR models. Students and trainees scan QR codes in books or handouts to explore rotating anatomy, exploded machine parts, or architectural walkthroughs in augmented reality. No app or hardware needed, just scan and learn.",
    metrics: [
      { value: "+78%", label: "Knowledge Retention" },
      { value: "4 Min 10s", label: "AR Session Depth" },
      { value: "92%", label: "Course Completion" }
    ]
  },
  "Gaming & Interactive Media": {
    eyebrow: "TOP STUDIOS ALREADY ACTIVATE",
    title: "Scan a Card, Box, or Poster and Watch Game Characters Step into Reality",
    desc: "Upload game assets or character art to ConvertinAr to create 3D AR models. QR codes on trading cards, packaging, and posters let fans scan and see characters appear at real scale in their physical space via augmented reality. This instant image to AR activation drives social shares and stronger brand recall.",
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

// ─── Card Component (unchanged) ─────────────────────────────────────────────
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
            Upload an image. Get a 3D model. Drop a QR code. Watch customers experience your product in their world before they ever buy.
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
