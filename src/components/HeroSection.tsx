'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeroPortrait } from './HeroPortrait';

const rotatingWords = ['work.', 'scale.', 'think.', 'matter.'];

export function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] max-h-[100dvh] flex items-center pl-6 sm:pl-10 lg:pl-12 xl:pl-16 pr-0 overflow-hidden">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 lg:gap-4 w-full h-full my-auto">
        
        {/* Left Column: Bold, simple, clean headline + subtitle + buttons (Col 7) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center text-left space-y-6 sm:space-y-7 z-10 py-4 min-w-0">
          
          {/* Monumental Headline: Syne ExtraBold 800 - Animated Two Lines (No Horizontal Clipping) */}
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,5vw,5.5rem)] tracking-[-0.035em] text-ink leading-[0.93] select-none">
            <motion.span 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              I build things
            </motion.span>
            <span className="block flex items-baseline flex-wrap">
              <span>that&nbsp;</span>
              <span className="relative inline-flex overflow-y-hidden overflow-x-visible h-[1.2em] align-baseline pr-4">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingWords[wordIndex]}
                    initial={{ y: '110%', opacity: 0, filter: 'blur(6px)' }}
                    animate={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
                    exit={{ y: '-110%', opacity: 0, filter: 'blur(6px)' }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[#2563EB] dark:text-[#3B82F6] inline-block font-extrabold"
                  >
                    {rotatingWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
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
