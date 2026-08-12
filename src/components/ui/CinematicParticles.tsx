"use client";

import React, { useState, useEffect } from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

export default function CinematicParticles({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const [mounted, setMounted] = useState(false);
  const [dustParticles, setDustParticles] = useState<any[]>([]);

  useEffect(() => {
    setDustParticles(
      Array.from({ length: 30 }).map(() => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 5,
      }))
    );
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Huge Out of Focus Orbs */}
      <motion.div style={{ y: y1 }} className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-[#DC143C]/20 rounded-full blur-[120px]" />
      <motion.div style={{ y: y2 }} className="absolute top-[60%] right-[5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      <motion.div style={{ y: y3 }} className="absolute bottom-[10%] left-[20%] w-[300px] h-[300px] bg-[#DC143C]/10 rounded-full blur-[100px]" />
      
      {/* Tiny Dust Particles */}
      {mounted && dustParticles.map((p, i) => (
        <motion.div 
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px] shadow-[0_0_10px_white]"
          style={{ top: p.top, left: p.left }}
        />
      ))}
    </div>
  );
}
