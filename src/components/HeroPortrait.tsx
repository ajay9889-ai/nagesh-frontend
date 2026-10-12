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
  const revealMask = `radial-gradient(circle 220px at ${mousePos.x}px ${mousePos.y}px, black 35%, rgba(0,0,0,0.5) 65%, transparent 100%)`;

  return (
    <div className="relative w-full max-w-md mx-auto flex items-center justify-center select-none py-1">
      {/* 1. Behind: Soft Ambient Electric Blue Spotlight Halo */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] xs:w-[300px] sm:w-[360px] lg:w-[420px] h-[260px] xs:h-[300px] sm:h-[360px] lg:h-[420px] rounded-full bg-gradient-to-tr from-blue-600/25 via-sky-400/15 to-transparent border border-blue-400/25 dark:from-[#0B1A3D]/90 dark:via-[#081229]/70 dark:to-transparent dark:border-blue-500/20 blur-[2px] pointer-events-none transition-colors duration-400"
      />

      {/* Ambient soft blue glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-blue-500/10 dark:bg-blue-500/15 blur-[90px] rounded-full pointer-events-none"
      />

      {/* 2. Center: Interactive Transparent Portrait */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsHovered(true)}
        className="relative z-10 w-[240px] xs:w-[270px] sm:w-[310px] lg:w-[340px] xl:w-[380px] aspect-[2/3] cursor-pointer overflow-hidden touch-pan-y"
        style={{
          maskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 88%, transparent 100%)',
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

      {/* 5. Cursive Script Signature: Nagesha R */}
      <div className="absolute bottom-2 right-2 sm:right-6 z-20 pointer-events-none -rotate-6">
        <span className="font-signature text-3xl xs:text-4xl sm:text-5xl lg:text-6xl text-ink/90 dark:text-white/95 font-medium tracking-wide drop-shadow-md">
          Nagesha R
        </span>
      </div>
    </div>
  );
}
