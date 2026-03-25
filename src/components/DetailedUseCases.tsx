"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import styles from "./DetailedUseCases.module.css";
import { motion, AnimatePresence } from "framer-motion";

const useCases = [
  {
    id: "e-commerce",
    label: "E-Commerce",
    thumbnail: "/e-commerce.png",
    accentFrom: "#9CB2B3", accentTo: "#D1DADB",
    subtitleColor: "#C1EBED", btnFrom: "#91BDBF", btnTo: "#C1EBED",
    subtitle: "Sell more. Return less.",
    features: ["Let shoppers place your product in their own space before they checkout.", "Works on Shopify, WooCommerce, IKEA, and any custom store.", "Brands using AR see up to 94% higher conversion and 40% fewer returns."],
    href: "/use-cases/e-commerce",
    image: "https://cdn.meshy.ai/ti_w:1200,q:75/landing-assets/home/meshy-use-case-hero-film-production.webp",
    video: null,
  },
  {
    id: "marketing-campaigns",
    label: "Marketing Campaigns",
    thumbnail: "/marketing.png",
    accentFrom: "#00A0FE", accentTo: "#9ADAF3",
    subtitleColor: "#8FD9FF", btnFrom: "#6DD8FF", btnTo: "#97F6FF",
    subtitle: "Make your ads impossible to scroll pass.",
    features: ["Turn static visuals into interactive AR experiences with QR codes.", "Launch products straight from flyers, billboards, or social stories.", "AR experiences drive 3x longer engagement than standard content."],
    href: "/use-cases/marketing-campaigns",
    image: "https://cdn.meshy.ai/ti_w:1200,q:75/landing-assets/home/meshy-use-case-hero-product-design.webp",
    video: null,
  },
  {
    id: "education",
    label: "Education",
    thumbnail: "/education.png",
    accentFrom: "#8D7E3B", accentTo: "#DCC89C",
    subtitleColor: "#D2B894", btnFrom: "#D2B894", btnTo: "#E8DFB5",
    subtitle: "Affordable and Accessible 3D Models for educators and students",
    features: ["Turn lessons into interactive experiences.", "With AR, students and trainees can explore 3D models of anatomy, buildings, or product designs.", "Perfect for schools, corporate training, and e-learning platforms."],
    href: "/use-cases/education",
    image: "https://cdn.meshy.ai/ti_w:1200,q:75/landing-assets/home/meshy-use-case-hero-education.webp",
    video: null,
  },
  {
    id: "gaming",
    label: "Gaming and Interactive Media",
    thumbnail: "/gaming.png",
    accentFrom: "#138DA0", accentTo: "#7AE2CF",
    subtitleColor: "#69FFE5", btnFrom: "#69FFE5", btnTo: "#9EFFEE",
    subtitle: "Put your characters and assets into the real world.",
    features: ["Convert game assets into QR-based AR experiences with interactive 3D characters and items.", "Turn unboxing into immersive, buzz-worthy AR experiences.", "Increase engagement through AR collectibles and trading cards."],
    href: "/use-cases/game-development",
    image: null,
    video: "https://cdn.meshy.ai/landing-assets/home/meshy-use-case-hero-game-development.webm",
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#69FFE5" stroke="none" style={{ flexShrink: 0 }}>
      <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
    </svg>
  );
}

function CaretRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M9 6c0 -.852 .986 -1.297 1.623 -.783l.084 .076l6 6a1 1 0 0 1 .083 1.32l-.083 .094l-6 6l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002l-.059 -.002l-.058 -.005l-.06 -.009l-.052 -.01l-.108 -.032l-.067 -.027l-.132 -.07l-.09 -.065l-.081 -.073l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057l-.002 -12.059z" />
    </svg>
  );
}

export default function DetailedUseCases() {
  // visibleIndex = what's currently shown (fully opaque)
  // nextIndex    = what's fading in
  // exitingIndex = what's fading out
  const [visibleIndex, setVisibleIndex] = useState(3);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "transitioning">("idle");

  const tabsRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerTransition = useCallback((index: number) => {
    if (index === visibleIndex) return;

    // Clear any pending timer
    if (timerRef.current) clearTimeout(timerRef.current);

    setPendingIndex(index);
    setPhase("transitioning");

    // After the CSS transition duration (450ms), commit
    timerRef.current = setTimeout(() => {
      setVisibleIndex(index);
      setPendingIndex(null);
      setPhase("idle");
    }, 400);
  }, [visibleIndex]);

  // Video management
  useEffect(() => {
    const activeIdx = phase === "transitioning" && pendingIndex !== null ? pendingIndex : visibleIndex;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === activeIdx) v.play().catch(() => { });
      else { v.pause(); v.currentTime = 0; }
    });
  }, [visibleIndex, pendingIndex, phase]);

  // Scroll pill into view
  useEffect(() => {
    if (!tabsRef.current) return;
    const idx = pendingIndex ?? visibleIndex;
    const tab = tabsRef.current.children[idx] as HTMLElement;
    tab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [visibleIndex, pendingIndex]);

  const activeDisplayIndex = pendingIndex ?? visibleIndex;
  const displayCase = useCases[activeDisplayIndex];
  const exitingCase = phase === "transitioning" ? useCases[visibleIndex] : null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who Uses <span className="gradient-text">ConvertInAr</span>
        </motion.h2>

        {/* Tab Thumbnails */}
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsScroll} ref={tabsRef}>
            {useCases.map((uc, i) => (
              <button
                key={uc.id}
                onMouseEnter={() => triggerTransition(i)}
                onClick={() => triggerTransition(i)}
                className={`${styles.useCaseThumb} ${i === activeDisplayIndex ? styles.thumbActive : ""}`}
              >
                <div
                  className={styles.thumbBackground}
                  style={{ background: `linear-gradient(to bottom, ${uc.accentFrom}, ${uc.accentTo})` }}
                />
                <img
                  src={uc.thumbnail}
                  alt={uc.label}
                  className={styles.thumbImage}
                />
                <div className={styles.thumbLabel}>{uc.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Panel wrapper — holds both exiting and entering panels stacked */}
        <div className={styles.panelWrapper}>

          {/* Exiting panel */}
          {exitingCase && (
            <div className={`${styles.detailPanel} ${styles.exiting}`}>
              <PanelContent uc={exitingCase} videoRef={(el) => { videoRefs.current[visibleIndex] = el; }} />
            </div>
          )}

          {/* Visible / entering panel */}
          <div className={`${styles.detailPanel} ${styles.visible}`}>
            <PanelContent uc={displayCase} videoRef={(el) => { videoRefs.current[activeDisplayIndex] = el; }} />
          </div>

        </div>
      </div>
    </section>
  );
}

function PanelContent({
  uc,
  videoRef,
}: {
  uc: typeof useCases[number];
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  return (
    <>
      {/* Left */}
      <div className={styles.detailText}>
        <motion.h2
          className={styles.detailTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {uc.label}
        </motion.h2>
        <p className={styles.detailSubtitle} style={{ color: uc.subtitleColor }}>
          {uc.subtitle}
        </p>
        <ul className={styles.featureList}>
          {uc.features.map((f) => (
            <li key={f} className={styles.featureItem}>
              <CheckIcon />
              <span className={styles.featureLabel}>{f}</span>
            </li>
          ))}
        </ul>
        <a
          href={uc.href}
          className={styles.exploreBtn}
          style={{ background: `linear-gradient(to bottom, ${uc.btnFrom}, ${uc.btnTo})` }}
        >
          <span className={styles.btnIcon}><CaretRight /></span>
          Explore More
        </a>
      </div>

      {/* Right */}
      <div className={styles.detailMedia}>
        {uc.video ? (
          <video
            ref={videoRef}
            src={uc.video}
            muted loop playsInline autoPlay
            className={styles.mediaVideo}
          />
        ) : (
          <img
            src={uc.image!}
            alt={`use case - ${uc.label}`}
            className={styles.mediaImg}
          />
        )}
        <div
          className={styles.mediaGlow}
          style={{
            background: `radial-gradient(ellipse at 50% 100%, ${uc.accentFrom}44 0%, transparent 70%)`,
          }}
        />
      </div>
    </>
  );
}