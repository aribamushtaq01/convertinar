"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow, Autoplay, Pagination } from 'swiper/modules';
import styles from './Showcase.module.css';

// Import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const SHOWCASE_SLIDES = [
  { id: 1, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/e08d1464721f860475b94fffafc0dfe8/downloads/default.mp4", alt: "Spar AR Experience" },
  { id: 2, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/4406225dab25d749653d7119db723f9d/downloads/default.mp4", alt: "Nespresso AR Experience" },
  { id: 3, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/7d1faf3b16f3fb0eb394c0dbc821f067/downloads/default.mp4", alt: "McDonalds AR Experience" },
  { id: 4, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/11aeffaff9c4032117545bb96bf28664/downloads/default.mp4", alt: "Obi AR Experience" },
  { id: 5, video: "https://customer-p5gbjpucwq617o8d.cloudflarestream.com/d735f448da7c1848c5689a72c50d2ebe/downloads/default.mp4", alt: "KFC AR Experience" }
];

export default function Showcase() {
  const [isBegin, setIsBegin] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  return (
    <section className={styles.showcaseSection}>
      <div className={styles.gridOverlay} />
      <div className={styles.titleSection}>
        <h2 className={styles.title}>
          Experience it in <span className="gradient-text">Real World</span>
        </h2>
      </div>

      <div className={styles.swiperCustomWrapper}>
        <div 
          className={`${styles.buttonCustom} ${styles.buttonPrev} ${isBegin ? styles.buttonDisabled : ''}`} 
          id="showcase-prev"
        >
          <svg width="23" height="16" viewBox="0 0 23 16" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.22885 9.03788L9.7234 14.5304L8.25376 16L0.255838 8L8.25376 1.28916e-06L9.7234 1.46757L4.22885 6.96212L23 6.96212L23 9.03788L4.22885 9.03788Z"></path>
          </svg>
        </div>
        
        <div 
          className={`${styles.buttonCustom} ${styles.buttonNext} ${isEnd ? styles.buttonDisabled : ''}`} 
          id="showcase-next"
        >
          <svg width="23" height="16" viewBox="0 0 23 16" fill="currentColor">
            <path fillRule="evenodd" clipRule="evenodd" d="M18.7711 6.96212L13.2766 1.46964L14.7462 2.5783e-06L22.7442 8L14.7462 16L13.2766 14.5324L18.7711 9.03789L-1.58023e-06 9.03788L-1.21729e-06 6.96212L18.7711 6.96212Z"></path>
          </svg>
        </div>

        <Swiper
          modules={[Navigation, EffectCoverflow, Autoplay, Pagination]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 30, /* Overlap them like the reference */
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
          }}
          onSlideChange={(swiper) => {
            setIsBegin(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          className={styles.swiperContainer}
        >
          {SHOWCASE_SLIDES.map((slide) => (
            <SwiperSlide key={slide.id} className={styles.swiperSlide} style={{ width: '260px' }}>
              <video 
                src={slide.video} 
                className={styles.videoPlayer} 
                autoPlay 
                muted 
                loop 
                playsInline
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
