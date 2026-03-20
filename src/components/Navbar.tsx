"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-dark/95 backdrop-blur-lg border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Wordmark */}
          <a href="#" className="flex items-center gap-3 group">
            <Image
              src="/logo-icon.jpg"
              alt="JOBPAKT"
              width={48}
              height={48}
              className="rounded-xl"
              priority
            />
            <Image
              src="/wordmark.jpg"
              alt="JOBPAKT"
              width={140}
              height={36}
              className="rounded hidden sm:block"
              priority
            />
            <span className="sm:hidden text-2xl font-black tracking-tight text-white">
              JOBPAKT
            </span>
          </a>

          {/* CTA */}
          <a
            href="#waitlist"
            className="bg-brand-orange hover:bg-brand-orange-light text-white font-bold px-6 py-3 rounded-xl transition-all duration-200 text-sm sm:text-base shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/30 hover:scale-[1.02] active:scale-[0.98]"
          >
            Join the Founding 25
          </a>
        </div>
      </div>
    </nav>
  );
}
