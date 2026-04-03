import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 md:pt-24 pb-8 md:pb-12 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">

        {/* Main Grid: Stack on mobile, row on large desktop */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-16 md:mb-20">

          {/* Brand Info */}
          <div className="flex flex-col gap-6 lg:w-[40%]">
            <div className="flex items-center gap-3 text-[1.35rem] font-extrabold">
              <Image src="/logo.png" alt="ConvertInAr" width={32} height={32} className="w-8 h-8" />
              <span>
                Convertin<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6ea420] to-[#81bb26]">Ar</span>
              </span>
            </div>
            <p className="text-white/50 text-[0.85rem] leading-[1.6] max-w-[300px]">
              The #1 platform for creating high-converting augmented reality experiences via QR codes.
              No app required.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#81bb26] hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_20px_rgba(129,187,38,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#81bb26] hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_20px_rgba(129,187,38,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#81bb26] hover:-translate-y-1 hover:scale-110 hover:shadow-[0_10px_20px_rgba(129,187,38,0.3)]">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid: 2 cols on mobile, 3 cols on tablet+ */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:w-[60%]">

            {/* Product Links */}
            <div>
              <h4 className="text-[0.9rem] font-bold mb-5 text-white">Product</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/products/webar" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">WebAR</Link></li>
                <li><Link href="/products/ar-codes" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">AR Codes</Link></li>
                <li><Link href="/products/analytics" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Analytics</Link></li>
                <li><Link href="/pricing" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Pricing</Link></li>
              </ul>
            </div>

            {/* Use Cases Links */}
            <div>
              <h4 className="text-[0.9rem] font-bold mb-5 text-white">Use Cases</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/use-cases/e-commerce" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">E-commerce</Link></li>
                <li><Link href="/use-cases/real-estate" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Real Estate</Link></li>
                <li><Link href="/use-cases/education" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Education</Link></li>
                <li><Link href="/use-cases/marketing" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Marketing</Link></li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[0.9rem] font-bold mb-5 text-white">Company</h4>
              <ul className="flex flex-col md:flex-col sm:flex-row gap-4 sm:gap-8 md:gap-4">
                <li><Link href="/about" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">About Us</Link></li>
                <li><Link href="/careers" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Careers</Link></li>
                <li><Link href="/blog" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Blog</Link></li>
                <li><Link href="/contact" className="text-white/50 text-[0.85rem] transition-all duration-300 inline-block hover:text-[#81bb26] hover:translate-x-1">Contact</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-white/40 text-[0.8rem]">
          <p>© {currentYear} ConvertInAr Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-[#81bb26]">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-[#81bb26]">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
