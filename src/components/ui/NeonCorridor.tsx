"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const NeonCorridor = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // More lines for deeper perspective
  const linesCount = 20;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020000] z-0 flex items-center justify-center [perspective:600px]">
      
      {/* Deep dark center to hide the vanishing point perfectly */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(220,20,60,0.15)_0%,rgba(0,0,0,0)_60%)] z-10 rounded-full mix-blend-screen blur-xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#020000] z-10 rounded-full blur-[60px]" />
      
      {/* Left Wall */}
      <div 
        className="absolute top-1/2 left-[-5%] -translate-y-1/2 w-[60%] h-[70%] flex justify-between items-center"
        style={{ 
          transformOrigin: 'left center', 
          transform: 'rotateY(85deg) translateZ(-100px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {Array.from({ length: linesCount }).map((_, i) => (
          <ReflectiveNeonLine key={`left-${i}`} delay={i * 0.12} />
        ))}
      </div>

      {/* Right Wall */}
      <div 
        className="absolute top-1/2 right-[-5%] -translate-y-1/2 w-[60%] h-[70%] flex justify-between items-center"
        style={{ 
          transformOrigin: 'right center', 
          transform: 'rotateY(-85deg) translateZ(-100px)',
          transformStyle: 'preserve-3d'
        }}
      >
        {Array.from({ length: linesCount }).map((_, i) => (
          <ReflectiveNeonLine key={`right-${i}`} delay={i * 0.12} />
        ))}
      </div>

      {/* Floor texture layer (subtle horizontal glossy lines) */}
      <div className="absolute bottom-0 inset-x-0 h-[50%] bg-[linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:100%_4px] opacity-30 z-0" />

      {/* Extreme Vignette for cinematic contrast */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.8)_80%,rgba(0,0,0,1)_100%)] z-20 pointer-events-none" />
      
      {/* Pitch black fades for ceiling and floor limits */}
      <div className="absolute top-0 inset-x-0 h-[25%] bg-gradient-to-b from-[#010000] via-[#010000]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-[35%] bg-gradient-to-t from-[#010000] via-[#010000]/90 to-transparent z-20 pointer-events-none" />
    </div>
  );
};

const ReflectiveNeonLine = ({ delay }: { delay: number }) => {
  return (
    <div className="relative h-full w-[4px] flex flex-col items-center">
      
      {/* --- MAIN TUBE (Upper half representing the actual wall light) --- */}
      <div className="relative w-full h-[100%] flex flex-col items-center">
        {/* Core pure white tube */}
        <motion.div 
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay }}
          className="w-[2px] h-full bg-white rounded-full shadow-[0_0_20px_5px_rgba(220,20,60,1)] z-10"
        />
        {/* Tight bright red inner glow */}
        <div className="absolute inset-0 bg-[#DC143C] blur-[8px] opacity-100 mix-blend-screen rounded-full" />
        {/* Massive ambient red outer glow */}
        <div className="absolute inset-0 bg-[#DC143C] blur-[40px] opacity-70 mix-blend-screen rounded-full" />
      </div>

      {/* --- TRUE 3D REFLECTION (Lower half, projecting down into the 'floor') --- */}
      <div 
        className="absolute top-[100%] w-full h-[60%] flex flex-col items-center opacity-[0.35] blur-[3px]" 
        style={{ transform: 'scaleY(-1)', transformOrigin: 'top' }}
      >
        <motion.div 
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: "easeInOut", delay }}
          className="w-[2px] h-full rounded-full z-10 bg-gradient-to-b from-white via-white/50 to-transparent shadow-[0_0_15px_2px_rgba(220,20,60,0.8)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#DC143C] to-transparent blur-[10px] opacity-90 mix-blend-screen rounded-full" />
      </div>
      
    </div>
  );
};
