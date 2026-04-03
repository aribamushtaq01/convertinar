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
          50%       { transform: translateY(-12px) rotate(-1deg); }
        }
        @keyframes floatPhone {
          0%, 100% { 
            transform: rotate(6deg) translateY(0); 
            filter: drop-shadow(8px 15px 15px rgba(0,0,0,0.7)) drop-shadow(25px 45px 50px rgba(0,0,0,0.4));
          }
          50% { 
            transform: rotate(3deg) translateY(-15px); 
            filter: drop-shadow(12px 25px 20px rgba(0,0,0,0.8)) drop-shadow(45px 75px 85px rgba(0,0,0,0.5));
          }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1) translateX(10px); opacity: 0.5; }
          50% { transform: scale(0.85) translateX(15px); opacity: 0.25; }
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

      <section className="relative flex items-center pt-[100px] lg:pt-[calc(var(--nav-height,70px)+2rem)] pb-12 min-h-screen overflow-hidden">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* VISUALS — Now forced to the top on mobile using order-1 */}
          <div className="relative flex justify-center items-center w-full order-1 lg:order-2">
            {/* The container is smaller on mobile (max-w-[280px]) vs desktop (max-w-[420px]) */}
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] md:max-w-[420px]">
              <div className="relative w-full h-[380px] sm:h-[450px] md:h-[620px]">

                {/* Floating QR Code */}
                <div className="float-qr absolute z-20 top-[10%] -left-6 md:left-[-10%] scale-[0.65] sm:scale-[0.8] md:scale-100">
                  <div className="relative bg-white rounded-[12px] p-[10px] shadow-2xl border border-black/5 w-[130px] h-[130px] md:w-[170px] md:h-[170px]">
                    <Image src="/ar-qr-code-demo-nike.webp" alt="QR" width={180} height={180} className="w-full h-full object-contain" />
                    <div className="scan-line absolute left-0 right-0 h-[2px] md:h-[3px] bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]" />
                  </div>
                </div>

                {/* Phone Mockup */}
                <div className="float-phone absolute bg-[#080808] rounded-[28px] md:rounded-[42px] p-[6px] md:p-[10px] z-10 top-[5%] right-0 w-[180px] h-[360px] sm:w-[200px] sm:h-[400px] md:w-[260px] md:h-[520px]">
                  <div className="relative w-full h-full bg-black rounded-[22px] md:rounded-[32px] overflow-hidden">
                    <video className="w-full h-full object-cover" src="/AR-Code-demo.mp4" autoPlay loop muted playsInline />
                  </div>
                </div>

                {/* Shadow */}
                <div className="shadow-pulse absolute bottom-[10%] right-0 w-[160px] md:w-[240px] h-[30px] md:h-[40px] bg-black rounded-[100%] opacity-40 blur-[30px] md:blur-[35px] z-0" />
              </div>
            </div>
          </div>

          {/* TEXT CONTENT — Now forced to the bottom on mobile using order-2 */}
          <div className="flex flex-col gap-6 items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <motion.h1
              className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] font-bold leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create and experience{' '}
              <span className="bg-[var(--primary)] bg-clip-text text-transparent">Ar</span>
            </motion.h1>

            <p className="text-[1rem] md:text-[1.15rem] text-[var(--text-muted)] leading-relaxed max-w-[450px]">
              One platform to create and share immersive 3D/AR experiences. No app required.
            </p>

            <Link
              href="/create"
              className="inline-block w-full sm:w-fit no-underline px-10 py-4 rounded-full text-[1rem] font-bold bg-[var(--primary)] text-white shadow-primary-glow transition-all hover:brightness-110 active:scale-95"
            >
              Create Ar
            </Link>

            <div className="flex flex-col gap-3 mt-2">
              {['Create under 3 minutes', 'No developer needed', 'No complicated setup'].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-[var(--text-muted)] font-medium text-sm">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 bg-[var(--primary)] text-white flex items-center justify-center text-[0.7rem]">✓</div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}