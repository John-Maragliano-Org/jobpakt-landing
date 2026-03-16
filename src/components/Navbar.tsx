"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-gunmetal/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image
              src="/logo-icon.jpg"
              alt="JOBPAKT"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-bold tracking-tight text-white">
              JOBPAKT
            </span>
          </div>
          <a
            href="#waitlist"
            className="bg-brand-orange hover:bg-brand-orange-light text-white font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 text-sm"
          >
            Join the Founding 25
          </a>
        </div>
      </div>
    </nav>
  );
}
