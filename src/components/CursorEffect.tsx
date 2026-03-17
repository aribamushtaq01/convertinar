'use client';

import React, { useEffect, useRef } from 'react';
import styles from './CursorEffect.module.css';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
}

export default function CursorEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const createParticle = (x: number, y: number) => {
      // Create a burst of particles for a lush, large area effect
      for (let i = 0; i < 4; i++) {
        particles.current.push({
          x: x + (Math.random() - 0.5) * 60, // Wider initial dispersion area
          y: y + (Math.random() - 0.5) * 60,
          size: Math.random() * 5 + 1.5,
          speedX: (Math.random() - 0.5) * 4,
          speedY: (Math.random() - 0.5) * 4,
          color: '129, 187, 38',
          opacity: 0.8
        });
      }
    };

    const getEffectiveBgColor = (el: HTMLElement | null): string => {
      if (!el) return 'transparent';
      const bg = window.getComputedStyle(el).backgroundColor;
      if (bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg;
      return getEffectiveBgColor(el.parentElement);
    };

    const mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      const element = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement;
      if (element) {
        const bg = getEffectiveBgColor(element);
        const isWhite = bg === 'rgb(255, 255, 255)' || bg === 'white' || bg === '#ffffff' || bg === 'rgb(251, 251, 251)' || bg === '#fbfbfb';
        
        if (isWhite) {
          createParticle(e.clientX, e.clientY);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.current.length; i++) {
        const p = particles.current[i];
        
        // Sophisticated follow physics with friction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 250) {
          // Stronger attraction force
          p.speedX += dx * 0.0015;
          p.speedY += dy * 0.0015;
        }

        // Apply friction to prevent infinite acceleration
        p.speedX *= 0.99;
        p.speedY *= 0.99;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        // Add a slight blur effect to the particles
        ctx.shadowBlur = 4;
        ctx.shadowColor = `rgba(${p.color}, ${p.opacity * 0.5})`;
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fill();

        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity -= 0.008; // Slower fade for longer life
        p.size *= 0.985;

        if (p.opacity <= 0 || p.size <= 0.2) {
          particles.current.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} />;
}
