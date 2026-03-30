"use client";

import React from 'react';
import { motion } from 'framer-motion';

const USE_CASES = [
  {
    title: 'E-Commerce',
    image: '/e-commerce.png',
    accentFrom: '#9CB2B3', accentTo: '#D1DADB',
    detail: 'Boost sales with 3D product previews and virtual try-ons that build customer confidence.'
  },
  {
    title: 'Marketing Campaigns',
    image: '/marketing.png',
    accentFrom: '#00A0FE', accentTo: '#9ADAF3',
    detail: 'Accelerate your design workflow with instant 3D models from any 2D image.'
  },
  {
    title: 'Education',
    image: '/education.png',
    accentFrom: '#8D7E3B', accentTo: '#DCC89C',
    detail: 'Transform learning with interactive 3D models of complex concepts and historical artifacts.'
  },
  {
    title: 'Game Development',
    image: '/gaming.png',
    accentFrom: '#138DA0', accentTo: '#7AE2CF',
    detail: 'Create buzz-worthy assets that live beyond the screen in immersive AR environments.'
  }
];

export default function UseCases() {
  return (
    <>
      <style>{`
        @media (max-width: 968px) {
          .usecases-grid {
            justify-content: flex-start !important;
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            gap: 20px !important;
          }
          .usecase-card {
            width: 140px !important;
            height: 190px !important;
          }
          .usecase-card .card-bg {
            height: 65px !important;
            border-radius: 22px !important;
          }
          .usecase-card:hover {
            transform: translateY(-18px) !important;
          }
          .usecase-card:hover .card-bg {
            height: 100% !important;
          }
          .usecase-card .card-image {
            transform: scale(0.62) !important;
          }
          .usecase-card:hover .card-image {
            transform: scale(0.80) translateY(-12px) !important;
          }
          .usecase-card .card-title {
            font-size: 0.82rem !important;
          }
          .usecase-card .card-description {
            font-size: 0.68rem !important;
            padding: 6px 5px !important;
          }
        }

        @media (max-width: 480px) {
          .usecases-grid {
            gap: 16px !important;
            padding-left: 1.2rem !important;
            padding-right: 1.2rem !important;
          }
          .usecase-card {
            width: 125px !important;
            height: 170px !important;
          }
          .usecase-card .card-bg {
            height: 58px !important;
            border-radius: 18px !important;
          }
          .usecase-card:hover {
            transform: translateY(-14px) !important;
          }
          .usecase-card .card-image {
            transform: scale(0.58) !important;
          }
          .usecase-card:hover .card-image {
            transform: scale(0.75) translateY(-10px) !important;
          }
          .usecase-card .card-title {
            font-size: 0.76rem !important;
          }
        }
      `}</style>

      <section className="bg-[#0a0a0a] flex flex-col items-center justify-center overflow-visible py-8">
        <div className="w-full max-w-[1100px] mx-auto px-8 max-[968px]:px-0">

          {/* Section Heading */}
          <motion.h2
            className="text-[1.2rem] font-medium text-white/40 text-center uppercase tracking-[0.2em] px-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Explore Opportunities
          </motion.h2>

          {/* Cards Grid */}
          <div className="
            usecases-grid
            flex gap-[50px] overflow-x-auto
            pb-20 pt-6 px-2
            [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden
            w-full justify-center
            [scroll-snap-type:x_mandatory]
          ">
            {USE_CASES.map((useCase, index) => (
              <motion.div
                key={index}
                className="
                  usecase-card group
                  relative flex-shrink-0
                  w-[220px] h-[280px]
                  flex flex-col-reverse items-center text-center
                  cursor-pointer overflow-visible
                  transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]
                  hover:-translate-y-[25px]
                  p-0 border-0 bg-transparent
                  [scroll-snap-align:center]
                "
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {/* Card Background */}
                <div
                  className="
                    card-bg
                    absolute bottom-0 left-0 w-full h-[100px] rounded-[40px] -z-10
                    opacity-30
                    transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]
                    group-hover:h-full group-hover:opacity-100
                  "
                  style={{
                    background: `linear-gradient(to bottom, ${useCase.accentFrom}, ${useCase.accentTo})`
                  }}
                />

                {/* Card Image */}
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="
                    card-image
                    absolute bottom-10 left-0 w-full h-full object-contain
                    pointer-events-none
                    scale-[0.65] origin-bottom
                    transition-all duration-[400ms] [transition-timing-function:cubic-bezier(0.23,1,0.32,1)]
                    group-hover:scale-[0.85] group-hover:-translate-y-[15px]
                  "
                />

                {/* Card Content */}
                <div className="relative z-10 px-3 mb-6 w-full transition-transform duration-300">
                  <h3 className="
                    card-title
                    text-[1.1rem] font-bold text-white m-0
                    [text-shadow:0_4px_12px_rgba(0,0,0,0.6)]
                    whitespace-nowrap
                  ">
                    {useCase.title}
                  </h3>

                  {/* Description tooltip */}
                  <p className="
                    card-description
                    absolute top-full left-0 w-full
                    px-[6px] py-2
                    text-[0.72rem] leading-[1.35] text-white
                    opacity-0 translate-y-[10px]
                    transition-all duration-300
                    pointer-events-none
                    bg-[rgba(10,10,10,0.9)] backdrop-blur-[12px]
                    rounded-xl border border-white/10
                    mt-[6px]
                    shadow-[0_10px_20px_rgba(0,0,0,0.3)]
                    group-hover:opacity-100 group-hover:translate-y-0
                    z-20
                  ">
                    {useCase.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="-mt-6 flex justify-center w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button className="
              bg-[var(--primary)] text-white
              py-[0.8rem] px-[2.2rem]
              rounded-full text-[0.85rem] font-medium
              shadow-[0_10px_25px_rgba(129,187,38,0.2)]
              tracking-[0.05em]
              transition-all duration-300 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)]
              cursor-pointer
              hover:-translate-y-1 hover:bg-[var(--primary-hover)] hover:shadow-[0_15px_35px_rgba(129,187,38,0.4)]
            ">
              Try It free
            </button>
          </motion.div>

        </div>
      </section>
    </>
  );
}