"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type NavItem = { label: string; href: string };

const PRODUCTS: NavItem[] = [
  { label: 'Image to 3D', href: '/products/imageto3d' },
  { label: 'Text to 3D', href: '/products/textto3d' },
  { label: 'AR Scanner', href: '/products/arscanner' },
  { label: 'File Convertor', href: '/products/fileconvertor' },
  { label: 'AR Product Visualization', href: '/products/arproductvisualization' },
];

const USE_CASES: NavItem[] = [
  { label: 'Ecommerce', href: '/use-cases/ecommerce' },
  { label: 'Education', href: '/use-cases/education' },
  { label: 'Marketing', href: '/use-cases/marketing' },
  { label: 'Gaming', href: '/use-cases/gaming' },
];

function DesktopDropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="relative group">
      <button className="
        flex items-center gap-1.5 text-[0.85rem] font-medium
        text-[var(--text-muted)] hover:text-[var(--primary)]
        bg-transparent border-none p-0 cursor-pointer
        transition-colors duration-200
      ">
        {label}
        <svg
          className="transition-transform duration-200 group-hover:translate-y-0.5"
          width="12" height="12" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="
        absolute top-full left-1/2 -translate-x-1/2 translate-y-3 z-10
        bg-white/85 backdrop-blur-[16px]
        border border-black/[0.08] rounded-xl p-3 min-w-[190px]
        shadow-[0_10px_40px_rgba(0,0,0,0.08)]
        flex flex-col gap-1
        opacity-0 invisible
        transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)]
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
      ">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="
              text-[var(--text-muted)] text-[0.8rem] font-medium
              px-3 py-2 rounded-md no-underline
              hover:bg-[rgba(129,187,38,0.06)] hover:text-[var(--primary)]
              transition-all duration-200
            "
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileSection({ title, items, onClose }: { title: string; items: NavItem[]; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          text-[0.7rem] font-semibold uppercase tracking-[0.6px]
          text-[var(--text-muted)] hover:text-[var(--primary)]
          py-1 mb-1 bg-transparent border-none cursor-pointer
          transition-colors duration-200
        "
      >
        {title}
        <svg
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`
        flex flex-col gap-0.5 overflow-hidden
        transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        {items.map((item, i) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="
              text-[var(--foreground)] text-[1.05rem] font-medium
              px-4 py-3 rounded-xl no-underline
              hover:bg-[rgba(129,187,38,0.07)] hover:text-[var(--primary)]
              transition-all duration-200
            "
            style={{ transitionDelay: open ? `${i * 25}ms` : '0ms' }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={open ? 'Close menu' : 'Open menu'}
      className="flex lg:hidden flex-col justify-center gap-[5px] w-7 h-7 bg-transparent border-none cursor-pointer z-[1001]"
    >
      <span className={`w-full h-[2.5px] bg-[var(--foreground)] rounded-sm transition-all duration-300 origin-center ${open ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
      <span className={`w-full h-[2.5px] bg-[var(--foreground)] rounded-sm transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
      <span className={`w-full h-[2.5px] bg-[var(--foreground)] rounded-sm transition-all duration-300 origin-center ${open ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
    </button>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur > 80 && cur > lastScrollY.current) { setIsHidden(true); setIsMobileMenuOpen(false); }
      else setIsHidden(false);
      setIsScrolled(cur > 10);
      lastScrollY.current = cur;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 h-[70px] z-[1000]
        flex items-center justify-center
        border-b border-transparent will-change-transform
        transition-[transform,opacity,background,border-color,box-shadow]
        duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isScrolled ? 'bg-white/95 backdrop-blur-[20px] saturate-[180%] border-black/[0.06] shadow-[0_5px_20px_rgba(0,0,0,0.05)]' : 'bg-transparent'}
        ${isHidden && !isMobileMenuOpen ? '-translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100 pointer-events-auto'}
      `}>
        <div className="w-full max-w-[1200px] mx-auto px-8 md:px-5 flex items-center justify-between">

          {/* Logo */}
          <div className="flex-1">
            <Link href="/" onClick={closeMobileMenu} className="flex items-center gap-2 no-underline group">
              <Image src="/logo.png" alt="ConvertInAr Logo" width={48} height={48} priority
                className="w-auto h-12 lg:h-[42px] object-contain transition-transform duration-300 group-hover:scale-105" />
              <span className="flex items-center text-[1.35rem] lg:text-[1.25rem] font-semibold tracking-[-0.5px] text-[var(--foreground)]">
                Convertin<span className="bg-gradient-to-r from-[#81bb26] to-[#a8d84e] bg-clip-text text-transparent">Ar</span>
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
            <DesktopDropdown label="Products" items={PRODUCTS} />
            <DesktopDropdown label="Use Cases" items={USE_CASES} />
            <Link href="/pricing" className="text-[var(--text-muted)] text-[0.85rem] font-medium no-underline hover:text-[var(--primary)] transition-colors duration-200">
              Pricing
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
            <Link href="/login" className="text-[var(--text-muted)] text-[0.85rem] font-medium no-underline hover:text-[var(--primary)] transition-colors duration-200">
              Login
            </Link>
            <Link href="/create" className="
              bg-[var(--primary)] text-white px-[1.6rem] py-[0.7rem] rounded-full
              text-[0.85rem] font-medium no-underline
              shadow-[0_4px_12px_rgba(129,187,38,0.2)]
              transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
              hover:-translate-y-0.5 hover:bg-[var(--primary-hover)]
              hover:shadow-[0_8px_20px_rgba(129,187,38,0.4)]
            ">
              Create Ar
            </Link>
          </div>

          <Hamburger open={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={closeMobileMenu}
        className={`fixed inset-0 z-[998] lg:hidden bg-black/25 backdrop-blur-[2px] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      />

      {/* Mobile Drawer */}
      <div className={`
        fixed top-[70px] left-0 right-0 z-[999] lg:hidden
        bg-white/[0.98] backdrop-blur-[20px]
        border-t border-black/[0.06]
        overflow-y-auto max-h-[calc(100vh-70px)]
        transition-all duration-[400ms] ease-[cubic-bezier(0.32,0.72,0,1)]
        ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
      `}>
        <div className="px-6 sm:px-5 py-8 sm:py-7 flex flex-col gap-7">

          <MobileSection title="Products" items={PRODUCTS} onClose={closeMobileMenu} />
          <MobileSection title="Use Cases" items={USE_CASES} onClose={closeMobileMenu} />

          {/* ── Pricing — styled as a section label + single link to match the accordion items ── */}
          <div>
            <Link
              href="/pricing"
              onClick={closeMobileMenu}
              className="
      w-full flex items-center justify-between
      text-[0.7rem] font-semibold uppercase tracking-[0.6px]
      text-[var(--text-muted)] hover:text-[var(--primary)]
      py-1 no-underline
      transition-colors duration-200
    "
            >
              Pricing
            </Link>
          </div>

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-2 pt-6 border-t border-black/[0.07]">
            <Link href="/login" onClick={closeMobileMenu} className="
              text-center py-[0.9rem] rounded-full no-underline
              text-[var(--text-muted)] font-medium border border-black/10
              hover:border-[var(--primary)] hover:text-[var(--primary)]
              transition-all duration-200
            ">
              Login
            </Link>
            <Link href="/create" onClick={closeMobileMenu} className="
              text-center py-[0.9rem] rounded-full no-underline
              bg-[var(--primary)] text-white font-medium
              shadow-[0_4px_20px_rgba(129,187,38,0.3)]
              hover:shadow-[0_8px_30px_rgba(129,187,38,0.5)]
              hover:-translate-y-0.5 transition-all duration-300
            ">
              Create Ar
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
