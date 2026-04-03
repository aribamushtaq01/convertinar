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

  return (
    <section className="py-5 md:py-8 bg-[#fbfbfb] overflow-hidden border-t border-black/[0.03]">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Title */}
        <motion.div
          className="text-center mb-5 md:mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Mobile: matches HowToUse mobile h2 ~text-[2.2rem], Desktop: original text-[2.6rem] */}
          <h2 className="text-[2.2rem] md:text-[2.6rem] font-semibold text-[#111827] tracking-[-0.03em] leading-tight md:leading-none">
            One <span className="text-[#81BB26]">QR Code</span>.<br className="hidden sm:block" />
            Use Anywhere.
          </h2>
        </motion.div>

        {/* Marquee */}
        <motion.div
          className="relative mb-5 md:mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/*
            Mask via inline style since Tailwind doesn't have mask-image utilities by default.
            Only the mask stays as inline style — all other styles are Tailwind.
          */}
          <div
            className="overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            }}
          >
            <div
              className="flex gap-5 md:gap-12 whitespace-nowrap py-1 md:py-3 animate-[marquee_24s_linear_infinite] md:animate-[marquee_36s_linear_infinite] hover:[animation-play-state:paused]"
              onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = 'paused')}
              onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = 'running')}
            >
              {marqueeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[112px] md:w-[140px] flex flex-col items-center group cursor-pointer"
                >
                  {/* rounded-[36px_10px_36px_36px] is not a standard Tailwind class, kept via inline style */}
                  <div
                    className="w-full aspect-square overflow-hidden transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-1.5 bg-transparent"
                    style={{ borderRadius: '36px 10px 36px 36px' }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Mobile: ~text-[0.8rem] matches HowToUse mobile desc size */}
                  <p className="mt-2.5 text-[0.8rem] font-semibold tracking-[0.1em] uppercase text-[#6b7280] group-hover:text-[#111827] transition-colors">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <button className="px-8 py-2.5 bg-[#111827] text-white font-semibold text-base rounded-full shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] hover:bg-black hover:-translate-y-1 active:scale-[0.985] transition-all duration-300">
            Start Creating Now
          </button>
        </motion.div>
      </div>

      {/* Keyframe for marquee — must stay in a style tag since Tailwind @keyframes need config */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}