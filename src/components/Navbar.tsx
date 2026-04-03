"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PRODUCTS = [
  { label: 'Image to 3D', href: '/products/imageto3d' },
  { label: 'Text to 3D', href: '/products/textto3d' },
  { label: 'AR Scanner', href: '/products/arscanner' },
  { label: 'File Convertor', href: '/products/fileconvertor' },
  { label: 'AR Product Visualization', href: '/products/arproductvisualization' },
];

const USE_CASES = [
  { label: 'Ecommerce', href: '/use-cases/ecommerce' },
  { label: 'Education', href: '/use-cases/education' },
  { label: 'Marketing', href: '/use-cases/marketing' },
  { label: 'Gaming', href: '/use-cases/gaming' },
];

function DesktopDropdown({ label, items }: { label: string; items: any[] }) {
  return (
    <div className="relative group">
      <button className="flex items-center gap-1.5 text-[0.85rem] font-medium text-muted hover:text-primary transition-colors duration-200 bg-transparent border-none cursor-pointer">
        {label}
        <svg className="transition-transform duration-200 group-hover:translate-y-0.5" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 translate-y-3 z-50 bg-white border border-black/5 rounded-xl p-3 min-w-[200px] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block text-muted text-[0.8rem] font-medium px-3 py-2 rounded-md hover:bg-primary hover:text-white no-underline transition-all duration-200">
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const cur = window.scrollY;
      // If we are scrolling down, hide the navbar. If up, show it.
      if (cur > 80 && cur > lastScrollY.current) {
        setIsHidden(true);
        setIsMobileMenuOpen(false);
      } else {
        setIsHidden(false);
      }
      setIsScrolled(cur > 10);
      lastScrollY.current = cur;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`
        fixed top-0 left-0 right-0 h-[70px] z-[1001]
        flex items-center transition-all duration-[400ms] ease-in-out
        ${isScrolled || isMobileMenuOpen ? 'bg-white border-b border-black/5 shadow-sm' : 'bg-transparent'}
        ${isHidden && !isMobileMenuOpen ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}
      `}>
        <div className="w-full max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between">

          {/* Left: Logo */}
          <div className="flex shrink-0">
            <Link href="/" className="flex items-center gap-2 group no-underline">
              <Image src="/logo.png" alt="Logo" width={42} height={42} className="transition-transform duration-300 group-hover:scale-105" />
              <span className="text-[1.25rem] font-bold tracking-tight text-foreground">
                Convertin<span className="text-primary">Ar</span>
              </span>
            </Link>
          </div>

          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <DesktopDropdown label="Products" items={PRODUCTS} />
            <DesktopDropdown label="Use Cases" items={USE_CASES} />
            <Link href="/pricing" className="text-muted text-[0.85rem] font-medium no-underline hover:text-primary transition-colors">
              Pricing
            </Link>
          </div>

          {/* Right: Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-6">
            <Link href="/login" className="text-muted text-[0.85rem] font-medium no-underline hover:text-primary">
              Login
            </Link>
            <Link href="/create" className="
              bg-primary text-white px-7 py-2.5 rounded-full
              text-[0.85rem] font-semibold no-underline
              shadow-primary-glow transition-all duration-300 
              hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-primary-hover
            ">
              Create Ar
            </Link>
          </div>

          {/* Hamburger for Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 w-6 cursor-pointer bg-transparent border-none p-0 z-[1002]"
          >
            <span className={`w-full h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`w-full h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-full h-[2px] bg-foreground transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* --- Mobile Menu Overlay --- */}
      <div className={`
        fixed inset-0 bg-white z-[1000] pt-[90px] px-6 transition-all duration-500 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}
      `}>
        <div className="flex flex-col gap-6 overflow-y-auto max-h-[calc(100vh-100px)]">

          <div className="flex flex-col gap-3">
            <p className="text-[0.75rem] uppercase tracking-widest text-muted-foreground font-bold opacity-50">Products</p>
            {PRODUCTS.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground no-underline">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="h-[1px] bg-black/5 w-full" />

          <div className="flex flex-col gap-3">
            <p className="text-[0.75rem] uppercase tracking-widest text-muted-foreground font-bold opacity-50">Use Cases</p>
            {USE_CASES.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground no-underline">
                {item.label}
              </Link>
            ))}
          </div>

          <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-medium text-foreground no-underline">
            Pricing
          </Link>

          <div className="flex flex-col gap-4 mt-4 pb-10">
            <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-3 rounded-xl border border-black/10 font-medium no-underline">
              Login
            </Link>
            <Link href="/create" onClick={() => setIsMobileMenuOpen(false)} className="text-center py-3 rounded-xl bg-primary text-white font-bold no-underline shadow-lg">
              Create Ar
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}