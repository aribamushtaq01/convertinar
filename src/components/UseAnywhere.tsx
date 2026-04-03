"use client";

import React from 'react';
import { motion } from 'framer-motion';

const items = [
  { title: 'Website', img: '/anywhere/website.png' },
  { title: 'Print', img: '/anywhere/print.png' },
  { title: 'Social', img: '/anywhere/social.png' },
  { title: 'Email', img: '/anywhere/email.png' },
  { title: 'Billboard', img: '/anywhere/billboard.png' },
];

export default function UseAnywhere() {
  const marqueeItems = [...items, ...items, ...items];

  const BRAND_GREEN = "#81bb26";
  const BRAND_GREEN_HOVER = "#6ea420";

  return (
    <section className="py-3 md:py-8 bg-[#fbfbfb] overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        {/* Title */}
        <motion.div
          className="text-center mb-3 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[1.6rem] md:text-[2.6rem] font-semibold text-[#111827] tracking-[-0.03em] leading-tight md:leading-none">
            One <span style={{ color: BRAND_GREEN }}>QR Code</span>.{' '}
            <span className="inline md:hidden">Use Anywhere.</span>
            <br className="hidden md:block" />
            <span className="hidden md:inline">Use Anywhere.</span>
          </h2>
        </motion.div>

        {/* Marquee */}
        <motion.div
          className="relative mb-3 md:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div
              className="flex gap-3 md:gap-12 whitespace-nowrap py-1 md:py-3 animate-[marquee_20s_linear_infinite] md:animate-[marquee_36s_linear_infinite]"
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[78px] md:w-[140px] flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className="w-full aspect-square overflow-hidden transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-1.5 bg-transparent border-2 border-transparent"
                    style={{
                      borderRadius: '22px 6px 22px 22px',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = BRAND_GREEN}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'transparent'}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p
                    className="mt-1.5 md:mt-2.5 text-[0.6rem] md:text-[0.8rem] font-semibold tracking-[0.08em] uppercase text-[#6b7280] transition-colors"
                    style={{ color: undefined }} // Handled by group-hover logic in CSS usually, but adding inline for safety
                    onMouseOver={(e) => e.currentTarget.style.color = BRAND_GREEN}
                    onMouseOut={(e) => e.currentTarget.style.color = '#6b7280'}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA with Hero-Style Hover Glow */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button
            className="px-6 md:px-8 py-2.5 md:py-3 text-white font-semibold text-sm md:text-base rounded-full transition-all duration-500 relative group overflow-hidden"
            style={{
              backgroundColor: BRAND_GREEN,
              // Initial subtle shadow
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
            }}
            onMouseOver={(e) => {
              // Intense outer glow matching the Hero "shadow-primary-glow" feel
              e.currentTarget.style.boxShadow = `0 0 35px 5px rgba(129, 187, 38, 0.45), 0 10px 20px -5px rgba(0, 0, 0, 0.3)`;
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.filter = 'brightness(1.08)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.filter = 'brightness(1)';
            }}
          >
            {/* The Label */}
            <span className="relative z-10">Start Creating Now</span>

            {/* Internal Shimmer/Glow Layer (like a light sweep) */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
              style={{
                background: 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 70%)'
              }}
            />
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}