"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SHOWCASE_SLIDES = [
  { id: 1, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/e08d1464721f860475b94fffafc0dfe8/downloads/default.mp4", alt: "Retail AR Experience" },
  { id: 2, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/4406225dab25d749653d7119db723f9d/downloads/default.mp4", alt: "Product Visualization AR" },
  { id: 3, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/7d1faf3b16f3fb0eb394c0dbc821f067/downloads/default.mp4", alt: "Interactive Food AR" },
  { id: 4, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/11aeffaff9c4032117545bb96bf28664/downloads/default.mp4", alt: "Architecture & Design AR" },
  { id: 5, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/d735f448da7c1848c5689a72c50d2ebe/downloads/default.mp4", alt: "Marketing Campaign AR" },
];

export default function Showcase() {
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <>
      <style>{`
        .showcase-grid-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(129, 187, 38, 0.1) 0%, transparent 70%);
        }

        .showcase-swiper {
          padding: 40px 0 0 !important;
          overflow: visible !important;
        }

        .showcase-swiper .swiper-slide {
          width: 260px !important;
          height: 520px !important;
          border-radius: 32px;
          overflow: hidden;
          background: #000;
          border: 6px solid #ffffff;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          user-select: none;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .showcase-swiper .swiper-slide video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        /* Kill the internal pagination entirely */
        .showcase-swiper .swiper-pagination {
          display: none !important;
        }

        /* External pagination */
        #showcase-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
          margin-top: 28px;
        }

        #showcase-pagination .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.25);
          opacity: 1;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-block;
        }

        #showcase-pagination .swiper-pagination-bullet-active {
          background: var(--primary);
          width: 24px;
        }

        @media (max-width: 768px) {
          .showcase-swiper .swiper-slide {
            width: 200px !important;
            height: 400px !important;
            border-radius: 24px;
            border-width: 4px;
          }
        }

        @media (max-width: 480px) {
          .showcase-swiper .swiper-slide {
            width: 170px !important;
            height: 340px !important;
            border-radius: 20px;
            border-width: 3px;
          }
        }
      `}</style>

      <section className="relative py-16 bg-[#050505] overflow-hidden">

        {/* Grid overlay */}
        <div className="
          showcase-grid-overlay
          absolute inset-0 pointer-events-none
          [background-image:linear-gradient(rgba(129,187,38,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(129,187,38,0.08)_1px,transparent_1px)]
          [background-size:60px_60px]
          [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
          [-webkit-mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]
        " />

        {/* Title */}
        <div className="relative z-[2] text-center mb-8 px-8">
          <motion.h2
            className="text-[2.6rem] max-[768px]:text-[2rem] max-[480px]:text-[1.7rem] font-semibold text-white tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experience it in <span className="gradient-text">Real World</span>
          </motion.h2>
        </div>

        {/* Swiper wrapper */}
        <div className="relative max-w-[1200px] mx-auto px-[100px] max-[768px]:px-6">

          {/* Prev — desktop only */}
          <button
            id="showcase-prev"
            className={`
              absolute left-4 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 rounded-full bg-[#007b7f] text-white
              flex items-center justify-center
              shadow-[0_8px_15px_rgba(0,123,127,0.2)]
              transition-all duration-300
              hover:bg-[#005f63] hover:scale-110
              max-[768px]:hidden
              ${isBegin ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
            `}
          >
            <svg width="18" height="16" viewBox="0 0 23 16" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.22885 9.03788L9.7234 14.5304L8.25376 16L0.255838 8L8.25376 1.28916e-06L9.7234 1.46757L4.22885 6.96212L23 6.96212L23 9.03788L4.22885 9.03788Z" />
            </svg>
          </button>

          {/* Next — desktop only */}
          <button
            id="showcase-next"
            className={`
              absolute right-4 top-1/2 -translate-y-1/2 z-10
              w-11 h-11 rounded-full bg-[#007b7f] text-white
              flex items-center justify-center
              shadow-[0_8px_15px_rgba(0,123,127,0.2)]
              transition-all duration-300
              hover:bg-[#005f63] hover:scale-110
              max-[768px]:hidden
              ${isEnd ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
            `}
          >
            <svg width="18" height="16" viewBox="0 0 23 16" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7711 6.96212L13.2766 1.46964L14.7462 2.5783e-06L22.7442 8L14.7462 16L13.2766 14.5324L18.7711 9.03789L-1.58023e-06 9.03788L-1.21729e-06 6.96212L18.7711 6.96212Z" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay, Pagination]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            loop={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 30,
              depth: 180,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={{
              prevEl: '#showcase-prev',
              nextEl: '#showcase-next',
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              el: '#showcase-pagination', // 👈 point to external element
            }}
            onSlideChange={(swiper) => {
              setIsBegin(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="showcase-swiper"
          >
            {SHOWCASE_SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <video src={slide.video} autoPlay muted loop playsInline />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External pagination — lives OUTSIDE overflow:visible swiper */}
          <div id="showcase-pagination" />
        </div>

      </section>
    </>
  );
}
