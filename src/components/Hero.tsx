"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <>
      <style>{`
        @keyframes floatQR {
          0%, 100% { transform: translateY(0) rotate(-4deg); }
          50%       { transform: translateY(-18px) rotate(-1deg); }
        }
        @keyframes floatPhone {
          0%, 100% { 
            transform: rotate(6deg) translateY(0); 
            filter: drop-shadow(8px 15px 15px rgba(0,0,0,0.7)) drop-shadow(25px 45px 50px rgba(0,0,0,0.4));
          }
          50% { 
            transform: rotate(3deg) translateY(-25px); 
            filter: drop-shadow(12px 25px 20px rgba(0,0,0,0.8)) drop-shadow(45px 75px 85px rgba(0,0,0,0.5));
          }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1) translateX(10px); opacity: 0.6; }
          50% { transform: scale(0.85) translateX(20px); opacity: 0.3; }
        }
        @keyframes scan {
          0%   { top: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .float-qr   { animation: floatQR 5.5s ease-in-out infinite; }
        .float-phone { animation: floatPhone 6.5s ease-in-out infinite; }
        .shadow-pulse { animation: shadowPulse 6.5s ease-in-out infinite; }
        .scan-line  { animation: scan 2.8s ease-in-out infinite; }
      `}</style>

      <section className="relative flex items-center pt-[100px] lg:pt-[calc(var(--nav-height,70px)+4rem)] pb-20 min-h-screen overflow-hidden">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Text Content */}
          <div className="flex flex-col gap-6 md:gap-8 items-center lg:items-start text-center lg:text-left">
            <motion.h1
              className="text-[2.6rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create and experience{' '}
              <span className="bg-[var(--primary)] bg-clip-text text-transparent">Ar</span>
            </motion.h1>

            <p className="text-[1.1rem] text-[var(--text-muted)] leading-relaxed max-w-[500px]">
              One platform to create and share immersive 3D/AR experiences. No app required.
            </p>

            <Link
              href="/create"
              className="inline-block w-full sm:w-fit no-underline px-10 py-4 rounded-full text-[1rem] font-bold bg-[var(--primary)] text-white shadow-primary-glow transition-all hover:-translate-y-0.5 active:scale-95"
            >
              Create Ar
            </Link>

            <div className="flex flex-col gap-3">
              {['Create under 3 minutes', 'No developer needed', 'No complicated setup'].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-[var(--text-muted)] font-medium text-sm md:text-base">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 bg-[var(--primary)] text-white flex items-center justify-center text-[0.75rem]">✓</div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visuals */}
          <div className="relative flex justify-center items-center w-full min-h-[420px] md:min-h-[520px]">
            <div className="relative w-full max-w-[320px] md:max-w-[420px]">
              <div className="relative w-full h-[450px] md:h-[620px]">

                {/* QR Code */}
                <div className="float-qr absolute z-20 top-[5%] -left-6 md:left-[-10%] scale-[0.8] md:scale-100">
                  <div className="relative bg-white rounded-[14px] p-[12px] shadow-2xl border border-black/5 w-[140px] h-[140px] md:w-[170px] md:h-[170px]">
                    <Image src="/ar-qr-code-demo-nike.webp" alt="QR" width={180} height={180} className="w-full h-full object-contain" />
                    <div className="scan-line absolute left-0 right-0 h-[3px] bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]" />
                  </div>
                </div>

                {/* Shadow */}
                <div className="shadow-pulse absolute bottom-[15%] right-0 w-[200px] md:w-[240px] h-[40px] bg-black rounded-[100%] opacity-40 blur-[35px] z-0" />

                {/* Phone */}
                <div className="float-phone absolute bg-[#080808] rounded-[32px] md:rounded-[42px] p-[8px] md:p-[10px] z-10 top-[5%] right-4 md:right-0 w-[200px] h-[400px] md:w-[260px] md:h-[520px]">
                  <div className="relative w-full h-full bg-black rounded-[26px] md:rounded-[32px] overflow-hidden">
                    <video className="w-full h-full object-cover" src="/AR-Code-demo.mp4" autoPlay loop muted playsInline />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}