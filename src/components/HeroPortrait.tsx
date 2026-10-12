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
  const revealMask = `radial-gradient(circle 340px at ${mousePos.x}px ${mousePos.y}px, black 45%, rgba(0,0,0,0.5) 75%, transparent 100%)`;

  return (
    <div className="relative w-full h-full flex items-end justify-end select-none pr-0 mr-0">
      {/* 1. Behind: Soft Ambient Electric Blue Spotlight Halo anchored to right */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 right-[-5%] sm:right-[0%] -translate-y-1/2 w-[400px] xs:w-[480px] sm:w-[580px] lg:w-[720px] xl:w-[840px] h-[400px] xs:h-[480px] sm:h-[580px] lg:h-[720px] xl:h-[840px] rounded-full bg-gradient-to-tr from-blue-600/30 via-sky-400/20 to-transparent border border-blue-400/25 dark:from-[#0B1A3D]/95 dark:via-[#081229]/80 dark:to-transparent dark:border-blue-500/20 blur-[2px] pointer-events-none transition-colors duration-400"
      />

      {/* Ambient soft blue glow */}
      <div 
        aria-hidden="true"
        className="absolute top-1/2 right-[-5%] sm:right-[0%] -translate-y-1/2 w-[440px] sm:w-[620px] lg:w-[760px] h-[440px] sm:h-[620px] lg:h-[760px] bg-blue-500/15 dark:bg-blue-500/20 blur-[130px] rounded-full pointer-events-none"
      />

      {/* 2. Center: Prominent High-Definition Portrait - Flush to right edge */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsHovered(true)}
        className="relative z-10 h-[68vh] xs:h-[75vh] sm:h-[82vh] lg:h-[88vh] xl:h-[93vh] max-h-[620px] xs:max-h-[700px] sm:max-h-[800px] lg:max-h-[920px] xl:max-h-[1020px] aspect-[2/3] cursor-pointer overflow-hidden touch-pan-y translate-x-[7%] sm:translate-x-[9%] lg:translate-x-[11%] xl:translate-x-[13%]"
        style={{
          maskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 94%, transparent 100%)',
        }}
      >
        {/* BASE: Black & White Transparent Portrait (Default state) */}
        <div className="absolute inset-0 w-full h-full flex items-end justify-end pointer-events-none">
          <Image
            src="/nagesh-portrait-bw.png"
            alt="Nagesha R - High-Definition Monochrome Cutout"
            width={1024}
            height={1536}
            priority
            quality={95}
            className="w-full h-full object-contain object-right-bottom select-none drop-shadow-2xl"
          />
        </div>

        {/* TOP LAYER: Color Image ONLY revealed as cursor/touch moves over the image */}
        <div 
          className="absolute inset-0 w-full h-full flex items-end justify-end pointer-events-none transition-opacity duration-300 ease-out"
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
            className="w-full h-full object-contain object-right-bottom select-none drop-shadow-2xl"
          />
        </div>
      </div>

      {/* 3. Cursive Script Signature: Nagesha R */}
      <div className="absolute bottom-2 right-4 sm:right-8 lg:right-10 xl:right-14 z-20 pointer-events-none -rotate-6">
        <span className="font-signature text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ink/90 dark:text-white/95 font-medium tracking-wide drop-shadow-md">
          Nagesha R
        </span>
      </div>
    </div>
  );
}
