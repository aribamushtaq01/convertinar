"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function HowToUse() {
  const [isUploading, setIsUploading] = React.useState(false);
  const [showSignup, setShowSignup] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(1);
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setShowSignup(true);
    }, 2000);
  };

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = () => setIsDragging(false);
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };
  const onFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => handleFile(e.target.files?.[0]);

  const stages = [
    {
      number: 1,
      title: "Upload Assets",
      desc: "Drag and drop your image or model here to see our AI in action.",
      content: (
        <div
          className={`w-full h-full flex flex-col items-center justify-center gap-6 cursor-pointer p-8 transition-colors duration-300 ${isDragging ? 'bg-[rgba(129,187,38,0.05)]' : ''}`}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={onFileInputChange}
            accept="image/*,.glb,.usdz,.obj"
          />

          {showSignup ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-white text-xl font-bold">✓</div>
              <p className="font-semibold text-[#111827] text-lg">Model Ready!</p>
              <button className="bg-[var(--primary)] text-white px-6 py-2.5 rounded-full font-medium text-sm hover:opacity-90 transition-opacity">
                Create Free Account
              </button>
              <button
                className="text-sm text-gray-400 hover:text-gray-600 transition-colors mt-1"
                onClick={(e) => { e.stopPropagation(); setShowSignup(false); }}
              >
                Upload another
              </button>
            </div>
          ) : (
            <>
              <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center transition-all duration-300 ${isDragging ? 'bg-[rgba(129,187,38,0.1)] text-[var(--primary)]' : 'bg-[#f3f4f6] text-[#9ca3af] hover:bg-[rgba(129,187,38,0.1)] hover:text-[var(--primary)]'}`}>
                {isUploading ? (
                  <div className="w-[30px] h-[30px] border-[3px] border-[#f3f3f3] border-t-[var(--primary)] rounded-full animate-spin" />
                ) : (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="17 8 12 3 7 8" />
                    <line x1="12" y1="3" x2="12" y2="15" />
                  </svg>
                )}
              </div>
              <div className="flex flex-col items-center gap-1">
                <p className="font-semibold text-[#111827] text-base">
                  {isUploading ? 'AI is Processing...' : isDragging ? 'Drop it here' : 'Click or Drag & Drop'}
                </p>
                {!isUploading && !isDragging && (
                  <p className="text-[0.8rem] text-[#9ca3af]">Support for JPG, PNG, GLB</p>
                )}
              </div>
            </>
          )}
        </div>
      )
    },
    {
      number: 2,
      title: "Get QR Ready",
      desc: "Your unique AR QR code is generated instantly. Customize it to match your branding.",
      content: (
        <div className="w-full h-full flex items-center justify-center relative">
          {/* Scan line animation */}
          <div className="absolute left-0 right-0 h-[3px] bg-[var(--primary)] opacity-50 animate-[scan_3s_infinite_linear]" />
          <div className="bg-white p-6 rounded-[20px] border border-[#f0f0f0]">
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <rect x="7" y="7" width="3" height="3" />
              <rect x="14" y="7" width="3" height="3" />
              <rect x="7" y="14" width="3" height="3" />
              <path d="M14 14h3v3h-3z" />
            </svg>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Scan & Experience",
      desc: "Point your camera at the QR code to experience 3D/AR directly in your browser.",
      content: (
        <div className="w-full h-full bg-[#fafafa] flex items-center justify-center relative">
          <div className="w-[90px] h-[90px] bg-[var(--primary)] rounded-[20px] animate-[rotate3D_5s_infinite_linear]" />
          <div className="absolute bottom-4 right-4 bg-[var(--primary)] text-white text-[0.65rem] font-bold tracking-widest px-3 py-1 rounded-full">
            AR ACTIVE
          </div>
        </div>
      )
    }
  ];

  return (
    <>
      {/* Keyframe injections */}
      <style>{`
        @keyframes scan {
          0%   { top: 10%; opacity: 0; }
          50%  { opacity: 1; }
          100% { top: 90%; opacity: 0; }
        }
        @keyframes rotate3D {
          from { transform: perspective(800px) rotateY(0deg)   rotateX(10deg); }
          to   { transform: perspective(800px) rotateY(360deg) rotateX(10deg); }
        }
      `}</style>

      <section className="py-16 bg-white h-[90vh] min-h-[700px] flex items-center max-[968px]:h-auto max-[968px]:min-h-0 max-[968px]:py-12">
        <div className="max-w-[1400px] w-full mx-auto px-12 relative h-full flex flex-col max-[968px]:px-6">

          {/* Sticky Pagination — hidden on mobile */}
          <div className="
            absolute right-20 top-1/2 -translate-y-1/2
            h-auto pointer-events-none z-[100]
            max-[1280px]:right-8
            max-[968px]:hidden
          ">
            <div className="flex flex-col gap-6 items-center pointer-events-auto">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => {
                    document.getElementById(`step-${num}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`
                    w-[42px] h-[42px] rounded-full flex items-center justify-center
                    font-[var(--font-rubik)] font-bold text-[1.1rem]
                    cursor-pointer transition-all duration-300
                    ${activeStep === num
                      ? 'bg-[var(--primary)] text-white'
                      : 'text-[#ccc] hover:text-[#888] bg-transparent'
                    }
                  `}
                >
                  {num < 10 ? `0${num}` : num}
                </button>
              ))}
            </div>
          </div>

          {/* Section Header */}
          <div className="text-center">
            <motion.h2
              className="font-[var(--font-rubik)] text-[2.6rem] font-semibold text-[#111827] mb-2 tracking-[-0.03em]"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              How It Works
            </motion.h2>
            <motion.h3
              className="font-[var(--font-inter)] text-[1.2rem] text-[var(--primary)] font-medium mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Build your AR in <span className="gradient-text">3</span> easy steps
            </motion.h3>
          </div>

          {/* Scroll Area */}
          <div className="flex-1 overflow-y-auto [scroll-snap-type:y_mandatory] pl-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-col max-[968px]:gap-24">
              {stages.map((stage, index) => (
                <motion.div
                  key={index}
                  id={`step-${stage.number}`}
                  className={`
                    flex items-center gap-16 h-full min-h-[500px]
                    [scroll-snap-align:center]
                    transition-opacity duration-[400ms]
                    max-[968px]:flex-col max-[968px]:gap-12 max-[968px]:min-h-0
                    ${activeStep === stage.number ? 'opacity-100' : 'opacity-30'}
                  `}
                  onViewportEnter={() => setActiveStep(stage.number)}
                  viewport={{ once: false, margin: "-45% 0px -45% 0px" }}
                >
                  {/* Visual Card */}
                  <div className="flex-[1.2]">
                    <div className="
                      bg-[#fdfdfd] rounded-[32px] h-[420px]
                      shadow-[0_30px_70px_rgba(0,0,0,0.05)]
                      border border-[rgba(0,0,0,0.04)]
                      overflow-hidden flex flex-col
                      transition-all duration-500 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]
                      hover:-translate-y-2 hover:scale-[1.02] hover:border-[var(--primary)] hover:shadow-[0_30px_60px_rgba(129,187,38,0.1)]
                      max-[968px]:h-[300px]
                    ">
                      {/* Mac-style dots */}
                      <div className="px-5 py-3 bg-[#f8f8f8] border-b border-[rgba(0,0,0,0.04)] flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#e5e7eb]" />
                        <div className="w-2 h-2 rounded-full bg-[#e5e7eb]" />
                        <div className="w-2 h-2 rounded-full bg-[#e5e7eb]" />
                      </div>
                      <div className="flex-1 flex bg-white relative">
                        {stage.content}
                      </div>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1 flex flex-col justify-center pr-20 max-[968px]:pr-0 max-[968px]:items-center max-[968px]:text-center">
                    {/* Mobile step number */}
                    <div className="hidden max-[968px]:flex w-10 h-10 rounded-full bg-[var(--primary)] text-white items-center justify-center font-bold text-sm mb-3">
                      {stage.number}
                    </div>

                    <motion.h2
                      className="font-[var(--font-rubik)] text-[2.5rem] font-bold mb-4 text-[var(--primary)] max-[968px]:text-[2rem]"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stage.title}
                    </motion.h2>
                    <p className="font-[var(--font-inter)] text-[#4b5563] text-[1.1rem] leading-[1.7] max-w-[480px] mb-8 max-[968px]:text-base max-[968px]:max-w-none">
                      {stage.desc}
                    </p>
                    <motion.button
                      className="
                        inline-flex items-center gap-2
                        font-[var(--font-inter)] font-medium text-[1rem]
                        text-[var(--primary)] bg-white
                        border-2 border-[var(--primary)]
                        px-6 py-3 rounded-full cursor-pointer w-fit
                        transition-all duration-300
                        hover:bg-[var(--primary)] hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(129,187,38,0.2)]
                        max-[968px]:mx-auto
                      "
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      Try for free
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
