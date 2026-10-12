'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroPortrait } from './HeroPortrait';

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[620px] flex items-center px-6 sm:px-10 lg:px-14 xl:px-16 max-w-[1440px] mx-auto pt-16 pb-4 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-8 w-full h-full my-auto">
        
        {/* Left Column: Bold, simple, clean headline + subtitle + buttons (Col 5) */}
        <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center text-left space-y-6 sm:space-y-8 z-10 py-4">
          
          {/* Monumental Headline: Syne ExtraBold 800 - "I build things that work." */}
          <h1 className="font-display font-extrabold text-[clamp(3rem,5.8vw,5.75rem)] tracking-[-0.04em] text-ink leading-[0.91] select-none">
            I build<br />
            things<br />
            that<br />
            <span className="text-[#2563EB] dark:text-[#3B82F6]">work.</span>
          </h1>

          {/* Clean, single-line subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-muted font-medium tracking-tight">
            Nagesha R <span className="text-muted/40 mx-2">•</span> Full-Stack Developer &amp; AI Systems Engineer
          </p>

          {/* Clean, sleek actions */}
          <div className="flex items-center gap-4 pt-1">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-accent hover:bg-blue-700 text-white font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl shadow-blue-900/25 active:translate-y-0"
            >
              <span>Let&apos;s talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-line hover:border-ink/40 bg-bg/60 backdrop-blur-sm text-ink font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>View work</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </Link>
          </div>

        </div>

        {/* Right Column: Prominent, Expanded Portrait Image (Col 7) */}
        <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center lg:justify-end relative h-full">
          <HeroPortrait />
        </div>

      </div>

    </section>
  );
}
