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

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

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
        ${isScrolled || isMobileMenuOpen ? 'bg-white border-b border-black/[0.05]' : 'bg-transparent'}
        ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      `}>
        <div className="w-full max-w-[1200px] mx-auto px-6 flex items-center justify-between relative z-[1002]">

          <div className="shrink-0">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group shrink-0 w-fit">
              <Image src="/logo.png" alt="Logo" width={32} height={32} priority />
              <span className="text-[1.1rem] font-bold tracking-tight text-foreground">
                Convertin<span className="text-primary">Ar</span>
              </span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 justify-center items-center gap-10">
            <DesktopDropdown label="Products" items={PRODUCTS} />
            <DesktopDropdown label="Use Cases" items={USE_CASES} />
            <Link href="/pricing" className="text-muted text-[0.85rem] font-medium hover:text-primary transition-colors">Pricing</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-6">
              <Link href="/login" className="text-muted text-[0.85rem] font-medium hover:text-primary transition-colors">Login</Link>
              <Link href="/create" className="bg-primary text-white px-7 py-2.5 rounded-full text-[0.85rem] font-bold shadow-primary-glow transition-all">Create AR</Link>
            </div>

            <button
              className="lg:hidden p-2 text-foreground relative flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-4 relative flex flex-col justify-between">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'absolute top-1/2 rotate-45 w-full' : 'w-full'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-full'}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'absolute top-1/2 -rotate-45 w-full' : 'w-full'}`} />
              </div>
            </button>
          </div>
        </div>

        {/* TOP-DOWN MOBILE MENU */}
        <div className={`
          absolute top-0 left-0 right-0 bg-white border-b border-gray-100 shadow-xl lg:hidden
          transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] overflow-hidden z-[1001]
          ${isMobileMenuOpen ? 'translate-y-0 opacity-100 max-h-[100vh] pt-[85px] pb-10' : '-translate-y-full opacity-0 max-h-0'}
        `}>
          <div className="px-8 flex flex-col gap-8">
            <div>
              <p className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-400 mb-4">Products</p>
              <div className="grid grid-cols-1 gap-4">
                {PRODUCTS.slice(0, 4).map(item => (
                  <Link key={item.href} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-[1.1rem] font-semibold text-foreground">{item.label}</Link>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 pt-4 border-t border-gray-50">
              <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[1.1rem] font-semibold">Pricing</Link>
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-[1.1rem] font-semibold">Login</Link>
              <Link href="/create" onClick={() => setIsMobileMenuOpen(false)} className="bg-primary text-white py-4 rounded-2xl text-center font-bold text-lg shadow-primary-glow">Create AR Free</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[999] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}