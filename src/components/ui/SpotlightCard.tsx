"use client";

import React from 'react';
import { motion, useSpring, useTransform, useMotionValue, useMotionTemplate } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SpotlightCard({ 
  children, 
  delay,
  className,
}: { 
  children: React.ReactNode, 
  delay: number,
  className?: string,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
  }

  return (
    <motion.div
      style={{ perspective: 2000 }}
      className={cn("w-full h-full cursor-pointer group drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]", className)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)"
        }}
        className="relative w-full h-full transition-all duration-300 ease-out group/card group-hover/grid:opacity-50 hover:!opacity-100 p-[1px] bg-white/10"
      >
        <div 
          className="relative w-full h-full bg-black/40 md:bg-[#0A0A0A] overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)" }}
        >
        {/* Dark frosted glass background */}
        <div className="absolute inset-0 bg-transparent md:bg-white/[0.02] md:backdrop-blur-3xl" style={{ transform: "translateZ(0)" }} />
        
        {/* Outer Crimson Glow Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 mix-blend-screen"
          style={{
            transform: "translateZ(0)",
            background: useMotionTemplate`
              radial-gradient(
                600px circle at ${mouseX}px ${mouseY}px,
                rgba(220, 20, 60, 0.15),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Inner White Spotlight for crisp edges */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-150 group-hover:opacity-100"
          style={{
            transform: "translateZ(0)",
            background: useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.05),
                transparent 80%
              )
            `,
          }}
        />
        
        {/* Main Card Body */}
        <div 
          className="relative w-full h-full p-5 md:p-8 pr-12 md:pr-20 flex flex-col pointer-events-none"
        >
          <div className="pointer-events-auto h-full flex flex-col max-w-7xl mx-auto w-full">
            {children}
          </div>
        </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
