"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const useCases = [
  {
    id: "e-commerce",
    label: "E-Commerce",
    tabLabel: "E-Commerce",
    thumbScale: 1,
    thumbnail: "/e-commerce.png",
    accentFrom: "#6ea420", accentTo: "#81bb26",
    subtitleColor: "#81bb26", btnFrom: "#6ea420", btnTo: "#81bb26",
    subtitle: "Sell more. Return less.",
    features: [
      "Let shoppers place your product in their own space before they checkout.",
      "Works on Shopify, WooCommerce, IKEA, and any custom store.",
      "Brands using AR see up to 94% higher conversion and 40% fewer returns.",
    ],
    href: "/use-cases/e-commerce",
    image: null,
    video: null,
  },
  {
    id: "marketing-campaigns",
    label: "Marketing Campaigns",
    tabLabel: "Marketing",
    thumbScale: 1,
    thumbnail: "/marketing.png",
    accentFrom: "#6ea420", accentTo: "#81bb26",
    subtitleColor: "#81bb26", btnFrom: "#6ea420", btnTo: "#81bb26",
    subtitle: "Make your ads impossible to scroll pass.",
    features: [
      "Turn static visuals into interactive AR experiences with QR codes.",
      "Launch products straight from flyers, billboards, or social stories.",
      "AR experiences drive 3x longer engagement than standard content.",
    ],
    href: "/use-cases/marketing-campaigns",
    image: null,
    video: null,
  },
  {
    id: "education",
    label: "Education",
    tabLabel: "Education",
    thumbScale: 1,
    thumbnail: "/education.png",
    accentFrom: "#6ea420", accentTo: "#81bb26",
    subtitleColor: "#81bb26", btnFrom: "#6ea420", btnTo: "#81bb26",
    subtitle: "Affordable and Accessible 3D Models for educators and students",
    features: [
      "Turn lessons into interactive experiences.",
      "With AR, students and trainees can explore 3D models of anatomy, buildings, or product designs.",
      "Perfect for schools, corporate training, and e-learning platforms.",
    ],
    href: "/use-cases/education",
    image: null,
    video: null,
  },
  {
    id: "gaming",
    label: "Gaming and Interactive Media",
    tabLabel: "Gaming & Media",
    thumbScale: 0.82,
    thumbnail: "/gaming.png",
    accentFrom: "#6ea420", accentTo: "#81bb26",
    subtitleColor: "#81bb26", btnFrom: "#6ea420", btnTo: "#81bb26",
    subtitle: "Put your characters and assets into the real world.",
    features: [
      "Convert game assets into QR-based AR experiences with interactive 3D characters and items.",
      "Turn unboxing into immersive, buzz-worthy AR experiences.",
      "Increase engagement through AR collectibles and trading cards.",
    ],
    href: "/use-cases/game-development",
    image: null,
    video: null,
  },
];

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#81bb26" stroke="none" style={{ flexShrink: 0 }}>
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

function PanelContent({
  uc,
  videoRef,
}: {
  uc: typeof useCases[number];
  videoRef: (el: HTMLVideoElement | null) => void;
}) {
  return (
    <>
      {/* Left: text */}
      <div className="flex flex-col">
        <motion.h2
          className="text-[2rem] md:text-[clamp(2.5rem,4.5vw,5rem)] font-extrabold leading-[1.05] text-white mb-3 md:mb-[14px] tracking-[-0.03em]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {uc.label}
        </motion.h2>

        <p
          className="text-[0.85rem] md:text-[clamp(0.85rem,1.1vw,1rem)] font-medium leading-[1.6] mb-4 md:mb-6"
          style={{ color: uc.subtitleColor }}
        >
          {uc.subtitle}
        </p>

        <ul className="list-none p-0 m-0 mb-6 md:mb-8 flex flex-col gap-3 md:gap-4">
          {uc.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <CheckIcon />
              <span className="text-[0.82rem] md:text-[clamp(0.875rem,1.1vw,1rem)] font-normal text-white leading-[1.5]">
                {f}
              </span>
            </li>
          ))}
        </ul>

        <a
          href={uc.href}
          className="inline-flex flex-row-reverse items-center gap-2.5 px-6 md:px-[30px] py-2.5 md:py-3 rounded-full text-[0.9rem] md:text-[1rem] font-bold text-black w-fit no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(43,249,7,0.3)]"
          style={{ background: `linear-gradient(to bottom, ${uc.btnFrom}, ${uc.btnTo})` }}
        >
          <span className="flex items-center w-5 h-5"><CaretRight /></span>
          Explore More
        </a>
      </div>

      {/* Right: media */}
      <div className="relative aspect-video rounded-[16px] md:rounded-[20px] overflow-hidden bg-[#111] shadow-[0_24px_80px_rgba(0,0,0,0.6)] order-first md:order-none">
        {uc.video ? (
          <video
            ref={videoRef}
            src={uc.video}
            muted loop playsInline autoPlay
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <img
            src={uc.image!}
            alt={`use case - ${uc.label}`}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{ background: `radial-gradient(ellipse at 50% 100%, ${uc.accentFrom}44 0%, transparent 70%)` }}
        />
      </div>
    </>
  );
}

export default function DetailedUseCases() {
  const [visibleIndex, setVisibleIndex] = useState(3);
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "transitioning">("idle");

  const tabsRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const triggerTransition = useCallback((index: number) => {
    if (index === visibleIndex) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    setPendingIndex(index);
    setPhase("transitioning");
    timerRef.current = setTimeout(() => {
      setVisibleIndex(index);
      setPendingIndex(null);
      setPhase("idle");
    }, 400);
  }, [visibleIndex]);

  useEffect(() => {
    const activeIdx = phase === "transitioning" && pendingIndex !== null ? pendingIndex : visibleIndex;
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === activeIdx) v.play().catch(() => { });
      else { v.pause(); v.currentTime = 0; }
    });
  }, [visibleIndex, pendingIndex, phase]);

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
    <section className="w-full bg-[#0a0a0a] py-5 md:py-5">
      <div className="max-w-[1400px] mx-auto px-4 md:px-10">

        {/* Title */}
        <motion.h2
          className="text-[2.2rem] md:text-[2.6rem] font-semibold text-center text-white mb-6 md:mb-12 tracking-[-0.03em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Who Uses <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ea420] to-[#81bb26]">ConvertInAr</span>
        </motion.h2>

        {/* ── MOBILE: horizontal snap-scroll cards ── */}
        <div className="md:hidden mb-8 -mx-4">
          <div
            className="flex gap-4 overflow-x-auto px-6 pb-4 [scroll-snap-type:x_mandatory] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {useCases.map((uc, i) => {
              const isActive = i === activeDisplayIndex;
              return (
                <button
                  key={uc.id}
                  onClick={() => triggerTransition(i)}
                  className="relative flex-shrink-0 w-[48vw] h-[160px] rounded-[20px] bg-transparent border-none p-0 cursor-pointer touch-manipulation overflow-visible transition-all duration-400 [scroll-snap-align:center]"
                  style={{
                    opacity: isActive ? 1 : 0.5,
                    transform: isActive ? 'scale(1)' : 'scale(0.9)',
                  }}
                >
                  {/* Thumbnail image (No background block) */}
                  <img
                    src={uc.thumbnail}
                    alt={uc.label}
                    className="absolute inset-x-0 bottom-8 w-full object-contain pointer-events-none transition-all duration-400"
                    style={{
                      height: 'calc(100% - 2rem)',
                      transform: `scale(${uc.thumbScale * (isActive ? 1.05 : 0.9)})`,
                      transformOrigin: 'center bottom',
                      filter: isActive ? `drop-shadow(0 12px 24px ${uc.accentFrom}66)` : 'none'
                    }}
                  />
                  {/* Label Pill */}
                  <div className="absolute bottom-0 inset-x-0 flex items-center justify-center">
                    <span
                      className={`text-[0.75rem] font-bold text-center leading-none whitespace-nowrap px-4 py-2 rounded-full backdrop-blur-md transition-all duration-300 ${isActive
                          ? 'bg-white/10 text-white border border-white/20 shadow-lg'
                          : 'bg-black/40 text-white/70 border border-transparent'
                        }`}
                    >
                      {uc.tabLabel}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
          {/* Scroll dots */}
          <div className="flex justify-center gap-1.5 mt-2">
            {useCases.map((_, i) => (
              <button
                key={i}
                onClick={() => triggerTransition(i)}
                className={`rounded-full transition-all duration-300 ${i === activeDisplayIndex ? 'w-5 h-1.5 bg-[#81bb26]' : 'w-1.5 h-1.5 bg-white/25'}`}
              />
            ))}
          </div>
        </div>

        {/* ── DESKTOP: clear row thumbnails ── */}
        <div className="hidden md:flex justify-center mb-12 w-full">
          <div
            ref={tabsRef}
            className="flex md:w-auto md:gap-8 lg:gap-12 overflow-x-auto md:overflow-visible pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {useCases.map((uc, i) => {
              const isActive = i === activeDisplayIndex;
              return (
                <button
                  key={uc.id}
                  onMouseEnter={() => triggerTransition(i)}
                  onClick={() => triggerTransition(i)}
                  className="relative flex flex-col-reverse items-center justify-start text-center cursor-pointer overflow-visible flex-shrink-0 w-[160px] lg:w-[180px] h-[200px] lg:h-[220px] border-none bg-transparent p-0 transition-all duration-300"
                  style={{ opacity: isActive ? 1 : 0.5 }}
                >
                  {/* Removed background colored div */}

                  <img
                    src={uc.thumbnail}
                    alt={uc.label}
                    className="absolute inset-x-0 top-0 w-full pointer-events-none transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] object-contain"
                    style={{
                      height: 'calc(100% - 2.5rem)',
                      transform: isActive ? `scale(${uc.thumbScale * 1.05}) translateY(-8px)` : `scale(${uc.thumbScale * 0.85})`,
                      transformOrigin: 'center bottom',
                      filter: isActive ? `drop-shadow(0 20px 30px ${uc.accentFrom}55)` : 'none'
                    }}
                  />

                  {/* Text Container */}
                  <div className="relative z-10 w-full flex flex-col items-center justify-end h-10 mb-2">
                    <span
                      className={`text-[0.9rem] lg:text-[1rem] font-bold text-center leading-none whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70'}`}
                    >
                      {uc.tabLabel}
                    </span>
                    {/* Active Indicator Underline */}
                    <div
                      className={`h-1 rounded-full mt-2 transition-all duration-300 ${isActive ? 'w-8' : 'w-0'}`}
                      style={{ backgroundColor: uc.accentFrom }}
                    />
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Panel */}
        <div className="relative min-h-[420px] md:min-h-[380px]">

          {/* Exiting panel */}
          {exitingCase && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-0 md:px-6 items-center absolute inset-0 opacity-0 pointer-events-none -translate-y-4 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              <PanelContent uc={exitingCase} videoRef={(el) => { videoRefs.current[visibleIndex] = el; }} />
            </div>
          )}

          {/* Visible panel */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 px-0 md:px-6 items-center relative opacity-100 translate-y-0 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          >
            <PanelContent uc={displayCase} videoRef={(el) => { videoRefs.current[activeDisplayIndex] = el; }} />
          </div>

        </div>
      </div>
    </section>
  );
}