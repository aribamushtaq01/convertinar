"use client";

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

// ─── Card 1: Success Stories by Industry ────────────────────────────────────
const INDUSTRY_DATA: Record<string, {
  eyebrow: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
}> = {
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
    eyebrow: "BURGER KING ALREADY WINS",
    title: "How Burger King Made Menu Items Come Alive with Scan-to-See AR on Tray Liners",
    desc: "Burger King prints QR codes on tray liners and packaging that trigger ConvertinAr 3D AR models created from menu photos. Customers scan and watch menu items appear steaming, rotating, and life-size on their table in augmented reality. This instant image to AR experience drives upsells, combo upgrades, and loyalty sign-ups.",
    metrics: [
      { value: "46%", label: "QR-to-Lead Conv." },
      { value: "106 Sec", label: "AR Engagement" },
      { value: "95%", label: "Experience Completion" }
    ]
  }
};

// ─── Card 2: Success Stories by Use Case ────────────────────────────────────
const USECASE_DATA: Record<string, {
  eyebrow: string;
  title: string;
  desc: string;
  metrics: { value: string; label: string }[];
}> = {
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

// ─── Two cards config ────────────────────────────────────────────────────────
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
  <div className="relative w-full h-full">
    {/* Store bg card */}
    <div className="absolute right-0 bottom-0 w-4/5 h-[70%] bg-white/40 backdrop-blur-[10px] rounded-[24px] border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.05)] overflow-hidden z-[1]">
      {/* Checkerboard placeholder */}
      <div
        className="w-full h-full"
        style={{
          background: 'linear-gradient(45deg, rgba(0,0,0,0.02) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.02) 75%, transparent 75%, transparent)',
          backgroundSize: '20px 20px'
        }}
      />
    </div>

    {/* Content card */}
    <div className="absolute left-0 bottom-[30px] w-[200px] lg:w-[240px] h-[260px] lg:h-[300px] bg-white rounded-[20px] shadow-[0_25px_50px_rgba(0,0,0,0.1)] border border-black/5 z-[3] overflow-hidden p-5 lg:p-6">
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-square rounded-full bg-[var(--primary)] opacity-10 border-2 border-dashed border-[var(--primary)]" />
        <div className="flex flex-col gap-2">
          <div className="h-2 w-full bg-black/5 rounded" />
          <div className="h-2 w-3/5 bg-black/5 rounded" />
        </div>
      </div>
    </div>

    {/* Logo chip */}
    <div className="absolute right-[15%] top-[10%] w-[100px] lg:w-[120px] h-[50px] lg:h-[60px] bg-white rounded-[12px] shadow-[0_10px_25px_rgba(0,0,0,0.05)] flex items-center justify-center z-[4]">
      <div className="w-9 h-9 rounded-full bg-slate-100" />
    </div>
  </div>
);

// ─── Card Component ──────────────────────────────────────────────────────────
const Card = ({
  i,
  study,
  progress,
  range,
  targetScale,
  targetBrightness
}: {
  i: number;
  study: typeof CASE_STUDIES[0];
  progress: any;
  range: [number, number];
  targetScale: number;
  targetBrightness: number;
}) => {
  const [activeTab, setActiveTab] = useState(study.pills[0]);
  const currentData = study.data[activeTab];

  const scale = useTransform(progress, range, [1, targetScale]);
  const brightness = useTransform(progress, range, [1, targetBrightness]);
  const filter = useTransform(brightness, (b: number) => `brightness(${b})`);

  return (
    /* cardContainer: sticky travel height */
    <div className="h-[90vh] flex items-start justify-center sticky top-0 px-4 md:px-8">
      <motion.div
        className="w-full max-w-[1100px] min-h-[520px] rounded-[28px] md:rounded-[40px] p-6 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.05)] flex flex-col gap-6 md:gap-10 border border-black/5 overflow-hidden"
        style={{
          scale,
          filter,
          top: "12vh",
          zIndex: i + 1,
          backgroundColor: study.bgColor,
          color: study.textColor,
          transformOrigin: 'top',
          position: 'sticky',
        }}
      >
        {/* Card Header */}
        <div className="flex flex-col gap-3 md:gap-6">
          <motion.h2
            className="text-[1.3rem] md:text-[1.75rem] font-medium text-[#111827] tracking-[-0.01em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {study.sectionTitle}
          </motion.h2>

          {/* Pills — horizontal scroll on mobile */}
          <div className="flex gap-2 md:gap-3 flex-wrap overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {study.pills.map((pill) => (
              <button
                key={pill}
                onClick={() => setActiveTab(pill)}
                className={`flex-shrink-0 px-3 md:px-5 py-1.5 md:py-2 rounded-full border text-[0.7rem] md:text-[0.8rem] font-medium cursor-pointer transition-all duration-300 whitespace-nowrap
                  ${pill === activeTab
                    ? 'text-white border-[#004b50]'
                    : 'text-[#6b7280] bg-white/50 border-black/8 hover:border-black/20'
                  }`}
                style={pill === activeTab ? { backgroundColor: study.accentColor } : {}}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Card Body */}
        <div className="flex-1 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center w-full"
            >
              {/* Text content */}
              <div className="flex flex-col gap-4 md:gap-5">
                {/* Eyebrow */}
                <div className="inline-flex bg-white px-2.5 py-1 rounded-[6px] border border-black/5 w-fit">
                  <span className="text-[0.65rem] md:text-[0.7rem] font-bold tracking-[0.05em] text-[#111827] uppercase">
                    {currentData.eyebrow}
                  </span>
                </div>

                {/* Title */}
                <motion.h3
                  className="text-[1.2rem] md:text-[1.6rem] font-medium leading-[1.25]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  {currentData.title}
                </motion.h3>

                {/* Desc */}
                <p className="text-[0.82rem] md:text-[0.9rem] leading-[1.6] text-justify text-[#4b5563] opacity-85">
                  {currentData.desc}
                </p>

                {/* Metrics */}
                <div className="flex gap-4 md:gap-8 mt-1 md:mt-2 flex-wrap">
                  {currentData.metrics.map((metric, idx) => (
                    <div key={idx} className="relative flex flex-col gap-[3px] md:gap-1">
                      <div
                        className="text-[1.4rem] md:text-[1.75rem] font-semibold"
                        style={{ color: study.accentColor }}
                      >
                        {metric.value}
                      </div>
                      <div className="text-[0.68rem] md:text-[0.75rem] font-medium text-[#6b7280] whitespace-nowrap">
                        {metric.label}
                      </div>
                      {idx < currentData.metrics.length - 1 && (
                        <div className="absolute right-[-0.5rem] md:right-[-1rem] top-0 bottom-0 w-px bg-black/10 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>

                {/* Read more */}
                <a
                  href="#"
                  className="mt-2 md:mt-4 inline-flex items-center gap-2 font-semibold text-[#111827] no-underline text-[0.8rem] md:text-[0.85rem] group"
                >
                  Read case study{' '}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </a>
              </div>

              {/* Visual — hidden on small mobile, shown md+ */}
              <div className="hidden md:flex relative h-[320px] lg:h-[400px] items-center justify-center">
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
    <section
      ref={container}
      id="case-studies"
      className="relative bg-white py-24 md:py-28"
    >
      <div className="max-w-[1200px] mx-auto">

        {/* Main header */}
        <div className="text-center mb-16 md:mb-24 px-6 md:px-8">
          <motion.h2
            className="text-[2.2rem] md:text-[2.6rem] font-semibold text-[#111827] mb-4 md:mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Impactful <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <p className="text-[0.95rem] md:text-[1.1rem] text-[#6b7280] max-w-[700px] mx-auto leading-[1.6]">
            Upload an image. Get a 3D model. Drop a QR code. Watch customers experience your product in their world before they ever buy.
          </p>
        </div>

        {/* Stacking cards */}
        <div className="relative flex flex-col">
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
