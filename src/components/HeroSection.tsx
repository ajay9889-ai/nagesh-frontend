'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { HeroPortrait } from './HeroPortrait';

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] max-h-[100dvh] flex items-center pl-6 sm:pl-10 lg:pl-12 xl:pl-16 pr-0 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 w-full h-full my-auto">
        
        {/* Left Column: Bold, simple, clean headline + subtitle + buttons (Col 7) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7 z-10 py-4 max-w-2xl">
          
          {/* Monumental Headline: Syne ExtraBold 800 - BIG Exactly Two Lines */}
          <h1 className="font-display font-extrabold text-[clamp(3.25rem,6.4vw,6.75rem)] tracking-[-0.04em] text-ink leading-[0.91] select-none">
            <span className="block whitespace-nowrap">I build things</span>
            <span className="block whitespace-nowrap">that <span className="text-[#2563EB] dark:text-[#3B82F6]">work.</span></span>
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

        {/* Right Column: Prominent Portrait Immersed to Right Edge (Col 5) */}
        <div className="lg:col-span-5 xl:col-span-5 flex items-end justify-end relative h-full pr-0 mr-0">
          <HeroPortrait />
        </div>

      </div>

    </section>
  );
}
