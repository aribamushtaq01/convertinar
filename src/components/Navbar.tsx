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

// --- Sub-components (DesktopDropdown & MobileSection remain mostly same) ---

function DesktopDropdown({ label, items }: { label: string; items: NavItem[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 text-[0.85rem] font-medium text-muted hover:text-primary bg-transparent border-none p-0 cursor-pointer transition-colors duration-200">
        {label}
        <svg className="transition-transform duration-200 group-hover:translate-y-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 z-10 bg-white/95 backdrop-blur-[16px] border border-black/[0.08] rounded-xl p-3 min-w-[210px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col gap-1 opacity-0 invisible transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="text-muted text-[0.8rem] font-medium px-3 py-2 rounded-md no-underline hover:bg-primary/10 hover:text-primary transition-all duration-200">
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
    <div className="w-full">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between text-[0.7rem] font-bold uppercase tracking-[1px] text-muted hover:text-primary py-2 bg-transparent border-none cursor-pointer transition-colors duration-200">
        {title}
        <svg className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-[400px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} onClick={onClose} className="text-foreground text-[1.05rem] font-semibold px-4 py-3 rounded-xl no-underline hover:bg-primary/5 hover:text-primary transition-all duration-200">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

// --- Main Navbar Component ---

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      if (cur > 100 && cur > lastScrollY.current) {
        // Only hide if mobile menu is NOT open
        if (!isMobileMenuOpen) setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(cur > 20);
      lastScrollY.current = cur;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 h-[75px] z-[1000]
        flex items-center justify-center
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
        ${isScrolled || isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-black/[0.05]' : 'bg-transparent'}
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      `}>
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between relative">

          {/* Logo */}
          <div className="flex-1 z-[1001]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group shrink-0 w-fit">
              <Image src="/logo.png" alt="ConvertInAr" width={38} height={38} priority className="transition-transform duration-300 group-hover:scale-110" />
              <span className="text-[1.1rem] md:text-[1.25rem] font-bold tracking-tight text-foreground">
                Convertin<span className="text-primary">Ar</span>
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex flex-[2] justify-center items-center gap-10">
            <DesktopDropdown label="Products" items={PRODUCTS} />
            <DesktopDropdown label="Use Cases" items={USE_CASES} />
            <Link href="/pricing" className="text-muted text-[0.85rem] font-medium hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
            <Link href="/login" className="text-muted text-[0.85rem] font-medium hover:text-primary transition-colors">
              Login
            </Link>
            <Link href="/create" className="bg-primary text-white px-7 py-2.5 rounded-full text-[0.85rem] font-bold shadow-primary-glow hover:bg-primary-hover transition-all duration-300">
              Create AR
            </Link>
          </div>

          {/* Fixed Hamburger Trigger */}
          <button
            className="lg:hidden p-2 text-foreground z-[1001] relative flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-4 relative flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'absolute top-1/2 -translate-y-1/2 rotate-45 w-full' : 'w-full'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 scale-0' : 'w-full'}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 origin-center ${isMobileMenuOpen ? 'absolute top-1/2 -translate-y-1/2 -rotate-45 w-full' : 'w-full'}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div className={`
        fixed inset-0 z-[998] lg:hidden bg-black/40 backdrop-blur-[2px] transition-opacity duration-300
        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Drawer */}
      <div className={`
        fixed top-0 right-0 bottom-0 w-[85%] max-w-[340px] z-[999] lg:hidden 
        bg-white shadow-2xl flex flex-col
        transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto px-8 pt-24 pb-10 flex flex-col gap-8">
          <MobileSection title="Products" items={PRODUCTS} onClose={() => setIsMobileMenuOpen(false)} />
          <MobileSection title="Use Cases" items={USE_CASES} onClose={() => setIsMobileMenuOpen(false)} />

          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[0.7rem] font-bold uppercase tracking-[1px] text-muted py-2 border-b border-gray-100">
            Pricing
          </Link>

          <div className="flex flex-col gap-4 mt-auto">
            <Link href="/create" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white py-4 rounded-2xl text-center font-bold text-lg shadow-primary-glow">
              Create AR Free
            </Link>
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-2 text-muted font-medium hover:text-primary transition-colors">
              Existing user? Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}