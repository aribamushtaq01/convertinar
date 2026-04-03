"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

const SHOWCASE_SLIDES = [
  { id: 1, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/4406225dab25d749653d7119db723f9d/downloads/default.mp4", alt: "Retail AR Experience" },
  { id: 2, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/4406225dab25d749653d7119db723f9d/downloads/default.mp4", alt: "Product Visualization AR" },
  { id: 3, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/7d1faf3b16f3fb0eb394c0dbc821f067/downloads/default.mp4", alt: "Interactive Food AR" },
  { id: 4, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/11aeffaff9c4032117545bb96bf28664/downloads/default.mp4", alt: "Architecture & Design AR" },
  { id: 5, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/d735f448da7c1848c5689a72c50d2ebe/downloads/default.mp4", alt: "Marketing Campaign AR" },
];

export default function Showcase() {
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = React.useRef<SwiperType | null>(null);

  const BRAND_GREEN = "#81bb26";
  const BRAND_GREEN_HOVER = "#6ea420";

  return (
    <>
      <style>{`
        .showcase-glow-overlay::after {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(129, 187, 38, 0.15) 0%, transparent 70%);
          pointer-events: none;
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
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
          user-select: none;
          transition: transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        /* Update slide shadows to use brand green when active */
        .showcase-swiper .swiper-slide-active {
          box-shadow: 0 10px 50px rgba(129, 187, 38, 0.3);
          border-color: #fff;
        }

        .showcase-swiper .swiper-slide video {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
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

        {/* Glow overlay (Grid removed) */}
        <div className="showcase-glow-overlay absolute inset-0 z-[1]" />

        {/* Title */}
        <div className="relative z-[2] text-center mb-12 px-8">
          <motion.h2
            className="text-[2.6rem] max-[768px]:text-[2rem] max-[480px]:text-[1.7rem] font-semibold text-white tracking-[-0.02em]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Experience it in <span style={{ color: BRAND_GREEN }}>Real World</span>
          </motion.h2>
        </div>

        {/* Swiper wrapper */}
        <div className="relative z-[2] max-w-[1200px] mx-auto px-[100px] max-[768px]:px-6">

          {/* Prev Button */}
          <button
            id="showcase-prev"
            onClick={() => swiperRef.current?.slidePrev()}
            className={`
              absolute left-4 top-[calc(50%-20px)] -translate-y-1/2 z-10
              w-11 h-11 rounded-full text-white
              flex items-center justify-center
              shadow-[0_8px_15px_rgba(0,0,0,0.3)]
              transition-all duration-300
              hover:scale-110
              max-[768px]:hidden
              ${isBegin ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
            `}
            style={{ backgroundColor: BRAND_GREEN }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = BRAND_GREEN_HOVER}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = BRAND_GREEN}
          >
            <svg width="18" height="16" viewBox="0 0 23 16" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M4.22885 9.03788L9.7234 14.5304L8.25376 16L0.255838 8L8.25376 1.28916e-06L9.7234 1.46757L4.22885 6.96212L23 6.96212L23 9.03788L4.22885 9.03788Z" />
            </svg>
          </button>

          {/* Next Button */}
          <button
            id="showcase-next"
            onClick={() => swiperRef.current?.slideNext()}
            className={`
              absolute right-4 top-[calc(50%-20px)] -translate-y-1/2 z-10
              w-11 h-11 rounded-full text-white
              flex items-center justify-center
              shadow-[0_8px_15px_rgba(0,0,0,0.3)]
              transition-all duration-300
              hover:scale-110
              max-[768px]:hidden
              ${isEnd ? 'opacity-30 cursor-not-allowed pointer-events-none' : 'cursor-pointer'}
            `}
            style={{ backgroundColor: BRAND_GREEN }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = BRAND_GREEN_HOVER}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = BRAND_GREEN}
          >
            <svg width="18" height="16" viewBox="0 0 23 16" fill="currentColor">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7711 6.96212L13.2766 1.46964L14.7462 2.5783e-06L22.7442 8L14.7462 16L13.2766 14.5324L18.7711 9.03789L-1.58023e-06 9.03788L-1.21729e-06 6.96212L18.7711 6.96212Z" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, EffectCoverflow, Autoplay]}
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
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            onSlideChange={(swiper) => {
              setIsBegin(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
              setActiveIndex(swiper.realIndex);
            }}
            className="showcase-swiper"
          >
            {SHOWCASE_SLIDES.map((slide) => (
              <SwiperSlide key={slide.id}>
                <video src={slide.video} autoPlay muted loop playsInline />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Pagination Dots */}
        <div className="relative z-[2] flex justify-center items-center gap-2 mt-10">
          {SHOWCASE_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className="transition-all duration-300 rounded-full cursor-pointer"
              style={{
                width: activeIndex === i ? '24px' : '8px',
                height: '8px',
                background: activeIndex === i ? BRAND_GREEN : 'rgba(255,255,255,0.2)',
              }}
            />
          ))}
        </div>

      </section>
    </>
  );
}