'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  size: number;
}

export default function CursorParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  const getEffectiveBgColor = (el: HTMLElement | null): string => {
    if (!el) return 'transparent';
    const bg = window.getComputedStyle(el).backgroundColor;
    if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
    return getEffectiveBgColor(el.parentElement);
  };

  const addParticle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    // Random direction for dispersion
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 40 + 20;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const size = Math.random() * 6 + 4;

    const newParticle: Particle = { id, x, y, tx, ty, size };
    setParticles((prev) => [...prev.slice(-15), newParticle]); // Limit particles for performance
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (element) {
        const bg = getEffectiveBgColor(element);
        const isWhite = bg === 'rgb(255, 255, 255)' || bg === 'white' || bg === '#ffffff';
        const isOffWhite = bg === 'rgb(251, 251, 251)' || bg === '#fbfbfb' || bg === 'rgb(249, 249, 249)';

        if (isWhite || isOffWhite) {
          addParticle(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [addParticle]);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999 }}>
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              x: p.x - p.size / 2,
              y: p.y - p.size / 2,
              scale: 0,
              opacity: 0.8
            }}
            animate={{
              x: p.x + p.tx,
              y: p.y + p.ty,
              scale: 1,
              opacity: 0
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              position: 'fixed',
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
              filter: 'blur(1px)'
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
