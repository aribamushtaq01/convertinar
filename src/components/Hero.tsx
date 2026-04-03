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
        
        /* Directional Shadow: Pushed to the bottom-right (+x, +y) */
        @keyframes floatPhone {
          0%, 100% { 
            transform: rotate(6deg) translateY(0); 
            filter: 
              drop-shadow(8px 15px 15px rgba(0,0,0,0.3)) 
              drop-shadow(25px 45px 50px rgba(0,0,0,0.2));
          }
          50% { 
            transform: rotate(3deg) translateY(-25px); 
            filter: 
              drop-shadow(12px 25px 20px rgba(0,0,0,0.35)) 
              drop-shadow(45px 75px 85px rgba(0,0,0,0.25));
          }
        }

        /* The 'floor' shadow also moves right to match light direction */
        @keyframes shadowPulse {
          0%, 100% { transform: scale(1) translateX(10px); opacity: 0.35; }
          50% { transform: scale(0.85) translateX(25px); opacity: 0.15; }
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

      <section className="relative flex items-center pt-[calc(var(--nav-height,70px)+4rem)] pb-20 min-h-screen">
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 grid grid-cols-2 gap-16 items-center max-[992px]:grid-cols-1">

          {/* LEFT — Content */}
          <div className="flex flex-col gap-8">
            <motion.h1
              className="text-[3.5rem] font-bold leading-[1.15] tracking-[-0.03em] max-[640px]:text-[2.2rem]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Create and experience{' '}
              <span className="bg-[var(--primary)] bg-clip-text text-transparent">Ar</span>
            </motion.h1>

            <p className="text-[1.15rem] text-[var(--text-muted)] leading-[1.65]">
              One platform to create and share immersive 3D/AR experiences. No app required.
            </p>

            <Link
              href="/create"
              className="inline-block w-fit no-underline px-[2.6rem] py-[1.1rem] rounded-full text-[1.02rem] font-medium bg-[var(--primary)] text-white shadow-primary-glow transition-all duration-300 
            hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary-hover"
            >
              Create Ar
            </Link>

            <div className="flex flex-col gap-[1.4rem]">
              {['Create under 3 minutes', 'No developer needed', 'No complicated setup'].map((feat) => (
                <div key={feat} className="flex items-center gap-3 text-[var(--text-muted)] font-medium">
                  <div className="w-5 h-5 rounded-full flex-shrink-0 bg-[var(--primary)] text-white flex items-center justify-center text-[0.85rem]">✓</div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Visuals */}
          <div className="relative flex justify-center items-center min-h-[520px] max-[992px]:order-first">
            <div className="relative w-full max-w-[420px]">
              <div className="relative w-full h-[620px] max-[992px]:h-[520px]">

                {/* Floating QR Code */}
                <div className="float-qr absolute z-20 flex flex-col items-center gap-[0.6rem] top-[5%] left-[-10%]">
                  <div className="relative bg-white rounded-[14px] p-[14px] shadow-[10px_20px_30px_rgba(0,0,0,0.15)] border border-black/5 w-[170px] h-[170px]">
                    <Image src="/ar-qr-code-demo-nike.webp" alt="QR" width={180} height={180} className="w-full h-full object-contain" />
                    <div className="scan-line absolute left-0 right-0 h-[3px] bg-[var(--primary)] shadow-[0_0_15px_var(--primary)]" />
                  </div>
                </div>

                {/* THE REALISTIC DIRECTIONAL SHADOW (Floor) */}
                <div
                  className="shadow-pulse absolute bottom-[18%] right-[-5%] w-[240px] h-[50px] bg-black rounded-[100%] z-0"
                  style={{ filter: 'blur(45px)', mixBlendMode: 'multiply' }}
                />

                {/* Phone Mockup */}
                <div
                  className="
                    float-phone
                    absolute bg-[#080808] rounded-[42px] p-[10px] z-10
                    top-[10%] right-0 w-[260px] h-[520px]
                    max-[640px]:w-[190px] max-[640px]:h-[380px]
                  "
                >
                  <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden">
                    <video className="w-full h-full object-cover" src="/AR-Code-demo.mp4" autoPlay loop muted playsInline />
                  </div>
                  {/* Speaker/Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[80px] h-[18px] bg-[#080808] rounded-b-[10px] z-20" />
                </div>

              </div>
            </div>

            {/* Background Primary Glow */}
            <div className="absolute rounded-full pointer-events-none z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[var(--primary)] opacity-[0.08] blur-[120px]" />
          </div>

        </div>
      </section>
    </>
  );
}