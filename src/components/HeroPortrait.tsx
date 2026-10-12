'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export function HeroPortrait() {
  const [mousePos, setMousePos] = useState({ x: 160, y: 140 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsHovered(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!containerRef.current || e.touches.length === 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    setMousePos({
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top,
    });
    setIsHovered(true);
  }, []);

  // Soft feathered reveal mask that illuminates full color wherever the cursor/finger moves
  const revealMask = `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 35%, rgba(0,0,0,0.5) 65%, transparent 100%)`;

  return (
    <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[460px] lg:max-w-[560px] xl:max-w-[640px] mx-auto flex items-center justify-center select-none my-2 sm:my-0">
      {/* 1. Behind: Theme-Aware Soft Solar Amber / Orange Glow Backdrop */}
      <div 
        aria-hidden="true"
        className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 w-[240px] h-[240px] xs:w-[280px] xs:h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-tr from-amber-500/25 via-orange-400/20 to-amber-200/10 dark:from-orange-600/20 dark:via-amber-500/15 dark:to-transparent blur-[80px] pointer-events-none transition-colors duration-400"
      />

      {/* 2. Interactive Portrait Layer (Nagesha R Studio Portrait with Cursor Color Reveal) */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsHovered(true)}
        className="relative z-10 w-[260px] xs:w-[300px] sm:w-[360px] lg:w-[420px] xl:w-[460px] aspect-[2/3] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-black/10 dark:border-white/10 shadow-2xl shadow-orange-950/20 cursor-pointer touch-pan-y group"
        style={{
          maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
        }}
      >
        {/* BASE: Black & White Studio Portrait (Default state) */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <Image
            src="/nagesh-studio-bw.jpg"
            alt="Nagesha R - AI & Full-Stack Software Engineer"
            width={682}
            height={1024}
            priority
            quality={95}
            className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        {/* TOP LAYER: Color Image ONLY revealed as cursor/touch moves over the image */}
        <div 
          className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: revealMask,
            WebkitMaskImage: revealMask,
          }}
        >
          <Image
            src="/nagesh-studio-color.jpg"
            alt="Nagesha R - AI & Full-Stack Software Engineer"
            width={682}
            height={1024}
            priority
            quality={95}
            className="w-full h-full object-cover object-top select-none transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* 3. Floating Right Badge: Curved Arrow & Bullet Points (Hidden on small screens) */}
      <div className="absolute top-12 sm:top-18 -right-2 sm:-right-6 lg:-right-8 xl:-right-10 z-20 hidden sm:flex items-start gap-2.5 pointer-events-none">
        {/* Curved Hand-Drawn Style Arrow */}
        <svg 
          className="w-8 h-8 sm:w-9 sm:h-9 text-muted/60 mt-1 shrink-0 -rotate-6" 
          viewBox="0 0 40 40" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5"
        >
          <path d="M 6 26 C 14 12, 24 10, 34 16" strokeLinecap="round" />
          <path d="M 28 13 L 34 16 L 31 22" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <ul className="space-y-2 text-xs sm:text-sm font-mono text-ink/90 bg-bg/85 dark:bg-[#121218]/85 backdrop-blur-md p-2.5 sm:p-3 rounded-xl border border-line shadow-md">
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>AI Systems & LLMs</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>Full-Stack Engineer</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>LangGraph & RAG</span>
          </li>
        </ul>
      </div>

      {/* 4. Cursive Script Signature: Nagesha R */}
      <div className="absolute bottom-6 xs:bottom-8 sm:bottom-12 right-1 xs:right-2 sm:right-4 z-20 pointer-events-none -rotate-6">
        <span className="font-signature text-3xl xs:text-4xl sm:text-6xl lg:text-7xl text-ink dark:text-white/95 font-medium tracking-wide drop-shadow-md">
          Nagesha R
        </span>
      </div>
    </div>
  );
}
