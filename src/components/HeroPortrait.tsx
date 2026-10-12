'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';

export function HeroPortrait() {
  const [mousePos, setMousePos] = useState({ x: 160, y: 160 });
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
  const revealMask = `radial-gradient(circle 320px at ${mousePos.x}px ${mousePos.y}px, black 45%, rgba(0,0,0,0.5) 75%, transparent 100%)`;

  return (
    <div className="relative w-full h-full flex items-end justify-center select-none">
      {/* 1. Behind: Soft Ambient Electric Blue Spotlight Halo centered directly behind portrait */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] xs:w-[420px] sm:w-[500px] lg:w-[580px] xl:w-[660px] h-[340px] xs:h-[420px] sm:h-[500px] lg:h-[580px] xl:h-[660px] rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-400/20 to-transparent border border-blue-400/25 dark:from-[#0B1A3D]/95 dark:via-[#081229]/80 dark:to-transparent dark:border-blue-500/20 blur-[2px] pointer-events-none transition-colors duration-400"
      />

      {/* Ambient soft blue glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[520px] lg:w-[640px] h-[380px] sm:h-[520px] lg:h-[640px] bg-blue-500/15 dark:bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"
      />

      {/* 2. Center: Prominent High-Definition Portrait - Fully Visible & Centered */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsHovered(true)}
        className="relative z-10 h-[72vh] xs:h-[78vh] sm:h-[82vh] lg:h-[86vh] xl:h-[90vh] max-h-[640px] xs:max-h-[720px] sm:max-h-[820px] lg:max-h-[880px] xl:max-h-[960px] aspect-[2/3] cursor-pointer overflow-hidden touch-pan-y"
        style={{
          maskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 92%, transparent 100%)',
        }}
      >
        {/* BASE: Black & White Transparent Portrait (Default state) */}
        <div className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none">
          <Image
            src="/nagesh-portrait-bw.png"
            alt="Nagesha R - High-Definition Monochrome Cutout"
            width={1024}
            height={1536}
            priority
            quality={95}
            className="w-full h-full object-contain object-bottom select-none drop-shadow-2xl"
          />
        </div>

        {/* TOP LAYER: Color Image ONLY revealed as cursor/touch moves over the image */}
        <div 
          className="absolute inset-0 w-full h-full flex items-end justify-center pointer-events-none transition-opacity duration-300 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            maskImage: revealMask,
            WebkitMaskImage: revealMask,
          }}
        >
          <Image
            src="/file_00000000a91482438dbb6902ecd6351b.png"
            alt="Nagesha R - High-Definition Color Cutout"
            width={1024}
            height={1536}
            priority
            quality={95}
            className="w-full h-full object-contain object-bottom select-none drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 3. Cursive Script Signature: Nagesha R */}
      <div className="absolute bottom-2 right-2 sm:right-6 lg:right-4 xl:right-8 z-20 pointer-events-none -rotate-6">
        <span className="font-signature text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink/90 dark:text-white/95 font-medium tracking-wide drop-shadow-md">
          Nagesha R
        </span>
      </div>
    </div>
  );
}
