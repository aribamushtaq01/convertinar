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
          0%, 100% { transform: rotate(6deg) translateY(0); }
          50%       { transform: rotate(3deg) translateY(-12px); }
        }
        @keyframes scan {
          0%   { top: 0%;   opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .float-qr   { animation: floatQR   5.5s ease-in-out infinite; }
        .float-phone { animation: floatPhone 6.5s ease-in-out infinite; }
        .scan-line  { animation: scan      2.8s ease-in-out infinite; }
      `}</style>

      <section
        className="
          relative overflow-hidden flex items-center
          pt-[calc(var(--nav-height,70px)+4rem)] pb-20 min-h-screen
          max-[640px]:pt-[calc(var(--nav-height,70px)+2rem)]
          max-[640px]:pb-16
          max-[640px]:min-h-0
        "
      >
        {/* ── Grid ── */}
        <div
          className="
            relative z-10
            w-full max-w-[1200px] mx-auto px-8
            grid grid-cols-2 gap-16 items-center
            max-[992px]:grid-cols-1 max-[992px]:gap-12 max-[992px]:px-6
            max-[640px]:gap-10 max-[640px]:px-5
          "
        >

          {/* ══════════════════════════════
              LEFT — Content
          ══════════════════════════════ */}
          <div className="flex flex-col gap-8">

            {/* Heading */}
            <motion.h1
              className="
                text-[3.5rem] font-bold leading-[1.15] tracking-[-0.03em]
                max-[992px]:text-[2.8rem]
                max-[640px]:text-[2.2rem] max-[640px]:leading-[1.2]
                max-[380px]:text-[1.9rem]
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Create and experience{' '}
              <span className="gradient-text">Ar</span>
            </motion.h1>

            {/* Subheading */}
            <p
              className="
                text-[1.15rem] text-[var(--text-muted)] leading-[1.65] max-w-[95%]
                max-[640px]:text-[1rem]
              "
            >
              One platform to create and share immersive 3D/AR experiences. No app required.
            </p>

            {/* CTAs */}
            <div
              className="
                flex flex-wrap gap-4 mt-2
                max-[640px]:flex-col max-[640px]:gap-3
              "
            >
              <Link
                href="/create"
                className="
                  inline-block no-underline
                  px-[2.6rem] py-[1.1rem] rounded-full
                  text-[1.02rem] font-medium tracking-[0.02em]
                  bg-[var(--primary)] text-white
                  shadow-[0_10px_25px_rgba(129,187,38,0.25)]
                  transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                  hover:-translate-y-1 hover:bg-[var(--primary-hover)]
                  hover:shadow-[0_15px_35px_rgba(129,187,38,0.4)]
                  max-[640px]:w-full max-[640px]:text-center
                  max-[640px]:px-6 max-[640px]:py-4
                "
              >
                Create Ar
              </Link>

            </div>

            {/* Features */}
            <div className="flex flex-col gap-[1.4rem] mt-2 max-[640px]:gap-4">
              {[
                'Create under 3 minutes',
                'No developer needed',
                'No complicated setup',
              ].map((feat) => (
                <div
                  key={feat}
                  className="
                    flex items-center gap-3
                    text-[var(--text-muted)] font-medium
                    text-[0.95rem] max-[640px]:text-[0.9rem]
                  "
                >
                  <div
                    className="
                      w-5 h-5 rounded-full flex-shrink-0
                      bg-[var(--primary)] text-white
                      flex items-center justify-center text-[0.85rem]
                    "
                  >
                    ✓
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              RIGHT — Visuals
              Moves above content on mobile
          ══════════════════════════════ */}
          <div
            className="
              relative flex justify-center items-center min-h-[520px]
              max-[992px]:order-first max-[992px]:min-h-[480px]
              max-[640px]:min-h-[360px]
              max-[380px]:min-h-[320px]
            "
          >
            <div className="relative w-full max-w-[420px]">

              {/* AR Mockup Container */}
              <div
                className="
                  relative w-full h-[620px]
                  max-[992px]:h-[520px]
                  max-[640px]:h-[360px]
                  max-[380px]:h-[320px]
                "
              >

                {/* ── Floating QR Code ── */}
                <div
                  className="
                    float-qr
                    absolute z-10 flex flex-col items-center gap-[0.6rem]
                    top-[8%] left-[-15%]
                    max-[992px]:top-[5%] max-[992px]:left-[5%]
                    max-[640px]:top-0   max-[640px]:left-0
                  "
                >
                  <div
                    className="
                      relative bg-white rounded-[14px] p-[14px]
                      shadow-[0_12px_35px_rgba(0,0,0,0.12)]
                      border border-[var(--border,rgba(0,0,0,0.1))]
                      w-[190px] h-[190px]
                      max-[640px]:w-[130px] max-[640px]:h-[130px] max-[640px]:p-[10px] max-[640px]:rounded-[10px]
                      max-[380px]:w-[110px] max-[380px]:h-[110px]
                    "
                  >
                    <Image
                      src="/ar-qr-code-demo-nike.webp"
                      alt="AR QR Code Demo"
                      width={180}
                      height={180}
                      className="w-full h-full object-contain rounded-[6px]"
                      priority
                    />
                    {/* Scanner line */}
                    <div
                      className="
                        scan-line
                        absolute left-0 right-0 h-[3px]
                        bg-[var(--primary)]
                        shadow-[0_0_12px_var(--primary)]
                      "
                    />
                  </div>
                  <div
                    className="
                      bg-white px-[14px] py-[5px] rounded-full
                      text-[0.78rem] font-semibold text-[var(--foreground)]
                      shadow-[0_4px_14px_rgba(0,0,0,0.06)]
                    "
                  >
                    Scan to Demo
                  </div>
                </div>

                {/* ── Phone Mockup ── */}
                <div
                  className="
                    float-phone
                    absolute bg-[#111] rounded-[42px] p-[10px]
                    shadow-[0_25px_70px_rgba(0,0,0,0.18)]
                    top-[18%] right-0 w-[260px] h-[520px]
                    max-[992px]:right-[10%] max-[992px]:w-[240px] max-[992px]:h-[480px]
                    max-[640px]:right-[5%]  max-[640px]:w-[175px] max-[640px]:h-[350px] max-[640px]:top-[10%] max-[640px]:rounded-[34px]
                    max-[380px]:right-[2%] max-[380px]:w-[155px] max-[380px]:h-[310px]
                  "
                >
                  {/* Screen */}
                  <div className="relative w-full h-full bg-black rounded-[32px] overflow-hidden max-[640px]:rounded-[26px]">
                    <video
                      className="w-full h-full object-cover"
                      src="/AR-Code-demo.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                  {/* Notch */}
                  <div
                    className="
                      absolute top-3 left-1/2 -translate-x-1/2 z-20
                      w-[110px] h-[22px] bg-[#111]
                      rounded-b-[14px]
                    "
                  />
                </div>

              </div>
            </div>

            {/* Green glow */}
            <div
              className="
                absolute rounded-full pointer-events-none z-[1]
                top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                w-[420px] h-[420px] bg-[var(--primary)] opacity-[0.12]
                blur-[110px]
                max-[640px]:w-[280px] max-[640px]:h-[280px]
              "
            />
          </div>

        </div>
      </section>
    </>
  );
}
