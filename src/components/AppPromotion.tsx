"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AppPromotion() {
  return (
    <section className="py-24 md:py-32 bg-[#fbfbfb] overflow-hidden">
      <motion.div
        className="max-w-[1200px] mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center gap-10 md:gap-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Sidebar — goes below content on mobile (order-2) */}
        <motion.div
          className="order-2 md:order-1 flex flex-col items-center gap-6 md:gap-8 px-6 py-10 md:px-10 md:py-14 bg-white rounded-[28px] md:rounded-[40px] border border-black/[0.03] shadow-[0_10px_40px_rgba(0,0,0,0.02),0_30px_70px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] hover:border-[rgba(129,187,38,0.2)] relative overflow-hidden"
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            rotateX: 2,
            transition: { duration: 0.4 }
          }}
        >
          {/* Logo — already has green rounded square baked in, no wrapper bg needed */}
          <div className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] relative z-[1] transition-transform duration-500 hover:scale-105 drop-shadow-[0_15px_35px_rgba(129,187,38,0.3)]">
            <Image
              src="/logo.png"
              alt="ConvertInAr Logo"
              width={130}
              height={130}
              className="w-full h-full object-contain"
            />
          </div>

          {/* App promo text */}
          <div className="text-center">
            <p className="font-semibold text-[#111827] text-[1rem] md:text-[1.1rem] mb-1">
              Capture Reality with LiDAR
            </p>
            <span className="block text-[0.75rem] md:text-[0.8rem] text-[#666] font-medium tracking-[0.02em]">
              Available on iOS App Store
            </span>
          </div>
        </motion.div>

        {/* Center content */}
        <div className="order-1 md:order-2 text-center flex flex-col items-center">
          <motion.h2
            className="text-[2.2rem] md:text-[3rem] font-semibold text-[#111827] leading-[1.1] mb-4 md:mb-6 tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Bring Ideas to <span className="gradient-text">Life.</span>
          </motion.h2>

          <motion.p
            className="text-[0.95rem] md:text-[1.1rem] text-[var(--text-muted)] max-w-[500px] mb-8 md:mb-12 leading-[1.6] opacity-80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Turn everything into an interactive AR experience, share QR anywhere.
            Capture the world in 3D with our mobile app.
          </motion.p>

          <motion.div
            className="flex gap-3 md:gap-6 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Primary CTA */}
            <button className="bg-[var(--primary)] text-white px-8 md:px-11 py-3.5 md:py-5 rounded-full text-[0.9rem] md:text-[1rem] font-medium shadow-[0_10px_25px_rgba(129,187,38,0.2)] transition-all duration-300 cubic-bezier-[0.4,0,0.2,1] hover:-translate-y-1.5 hover:bg-[var(--primary-hover)] hover:shadow-[0_20px_40px_rgba(129,187,38,0.4)] cursor-pointer">
              Create Now
            </button>

            {/* Desktop-only: Upload Image */}
            <button className="hidden md:flex bg-white text-[#111827] px-11 py-5 rounded-full text-[1rem] font-medium border border-black/10 items-center gap-3 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#fdfdfd] hover:border-black/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Upload Image
            </button>

            {/* Mobile-only: Download App */}
            <button className="flex md:hidden bg-white text-[#111827] px-8 py-3.5 rounded-full text-[0.9rem] font-medium border border-black/10 items-center gap-2.5 transition-all duration-300 hover:-translate-y-1.5 hover:bg-[#fdfdfd] hover:border-black/20 hover:shadow-[0_15px_35px_rgba(0,0,0,0.08)] cursor-pointer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4" />
                <polyline points="15 13 20 18 15 23" />
                <path d="m20 18-5-5" />
                <path d="M12 11h.01" />
                <path d="M16 11h.01" />
                <path d="M8 11h.01" />
              </svg>
              Download App
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}