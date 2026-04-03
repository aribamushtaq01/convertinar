"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative flex items-center pt-[calc(70px+4rem)] pb-20 min-h-screen overflow-hidden bg-transparent">
      {/* Background Primary Glow - Using exact #81bb26 with low opacity */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none z-0 blur-[120px]"
        style={{ backgroundColor: 'rgba(129, 187, 38, 0.08)' }}
      />

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT — Content */}
        <div className="flex flex-col gap-8">
          <motion.h1
            className="text-[3rem] sm:text-[3.5rem] font-bold leading-[1.15] tracking-tight text-foreground"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Create and experience{' '}
            <span className="text-primary">Ar</span>
          </motion.h1>

          <p className="text-[1.15rem] text-muted leading-relaxed max-w-[480px]">
            One platform to create and share immersive 3D/AR experiences. No app required.
          </p>

          {/* Main CTA - Using shadow-primary-glow from your config */}
          <Link
            href="/create"
            className="inline-block w-fit no-underline px-10 py-4 rounded-full text-[1.05rem] font-semibold bg-primary text-white shadow-primary-glow transition-all duration-300 hover:-translate-y-1 hover:bg-primary-hover hover:shadow-primary-hover"
          >
            Create Ar
          </Link>

          {/* Feature List */}
          <div className="flex flex-col gap-4 mt-2">
            {['Create under 3 minutes', 'No developer needed', 'No complicated setup'].map((feat) => (
              <div key={feat} className="flex items-center gap-3 text-muted font-medium">
                <div className="w-5 h-5 rounded-full flex-shrink-0 bg-primary text-white flex items-center justify-center text-[0.75rem] shadow-sm">
                  ✓
                </div>
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visuals */}
        <div className="relative flex justify-center items-center min-h-[520px] order-first lg:order-last">
          <div className="relative w-full max-w-[420px]">
            <div className="relative w-full h-[580px] lg:h-[620px]">

              {/* Floating QR Code */}
              <div className="absolute z-30 top-[5%] -left-[10%] animate-[floatQR_5.5s_ease-in-out_infinite]">
                <div className="relative bg-white rounded-2xl p-4 shadow-2xl border border-black/5 w-[160px] h-[160px] lg:w-[170px] lg:h-[170px]">
                  <Image
                    src="/ar-qr-code-demo-nike.webp"
                    alt="QR Code"
                    width={180}
                    height={180}
                    className="w-full h-full object-contain"
                  />
                  {/* Scanning Animation Line */}
                  <div className="absolute left-0 right-0 h-[2px] bg-primary shadow-[0_0_15px_#81bb26] animate-[scan_2.8s_ease-in-out_infinite]" />
                </div>
              </div>

              {/* Floor Shadow (Directional) */}
              <div
                className="absolute bottom-[18%] right-[-5%] w-[240px] h-[50px] bg-black/20 rounded-[100%] z-0 blur-[40px] mix-blend-multiply animate-[shadowPulse_6.5s_ease-in-out_infinite]"
              />

              {/* Phone Mockup */}
              <div
                className="absolute bg-[#0b0b0b] rounded-[42px] p-2.5 z-20 top-[10%] right-0 w-[230px] h-[480px] lg:w-[260px] lg:h-[520px] shadow-2xl animate-[floatPhone_6.5s_ease-in-out_infinite]"
              >
                <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden">
                  <video
                    className="w-full h-full object-cover"
                    src="/AR-Code-demo.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                {/* iPhone Style Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[75px] h-[18px] bg-[#0b0b0b] rounded-b-xl z-30" />
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}