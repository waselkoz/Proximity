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

  // For 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-250, 250], [10, -10]);
  const rotateY = useTransform(smoothX, [-250, 250], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    
    // Spotlight
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);

    // 3D Tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(e.clientX - rect.left - centerX);
    y.set(e.clientY - rect.top - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.4, delay: delay * 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 2000 }}
      className={cn("w-full h-full cursor-pointer group drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]", className)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)"
        }}
        className="relative w-full h-full transition-all duration-300 ease-out group/card group-hover/grid:opacity-50 hover:!opacity-100 p-[1px] bg-white/10"
      >
        <div 
          className="relative w-full h-full bg-[#0A0A0A] overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 30px) 0, 100% 100%, 0 100%)" }}
        >
        {/* Dark frosted glass background */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" style={{ transform: "translateZ(0)" }} />
        
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
        
        {/* Main Card Body (Popped out in 3D!) */}
        <div 
          className="relative w-full h-full p-5 md:p-8 pr-12 md:pr-20 flex flex-col pointer-events-none"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
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
