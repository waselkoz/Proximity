"use client";

import React from 'react';
import Image from 'next/image';
import MorphText from '@/components/ui/morph-text';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const LightLines = dynamic(() => import('@/components/ui/light-lines').then(m => m.LightLines), { ssr: false });

export default function HeroSection({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-white">
      {/* Cinematic Mobile Background (Hardware Accelerated) */}
      <div className="md:hidden absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-cover bg-center transform-gpu"
          style={{ backgroundImage: "url('/aa.jpg')", willChange: "transform, opacity" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.8, 0, 0.8],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 bg-cover bg-center transform-gpu"
          style={{ backgroundImage: "url('/aaa.jpeg')", willChange: "transform, opacity" }}
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Elegant gradient overlay to protect text legibility without heavy CSS blur */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/95" />
      </div>

      <LightLines
        gradientFrom="#ffffff"
        gradientTo="#ffffff"
        lineColor="#000000"
        lightColor="#DC143C"
        className="z-0"
      >
        <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-2 z-10 fade-in py-20 px-4 h-full">
          
          {/* Logo */}
          <div className="relative w-80 h-40 md:w-[28rem] md:h-56 -mb-8 md:-mb-12">
            <Image
              src="/logo.jpg"
              alt="Proximity Logo"
              fill
              sizes="(max-width: 768px) 320px, 448px"
              className="object-contain hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
              priority
            />
          </div>

          {/* Morphing Text Hero */}
          <div className="w-full max-w-4xl mx-auto">
            <MorphText 
              words={
                lang === "fr" 
                  ? ["PROXIMITÉ", "INNOVATION", "EXCELLENCE"] 
                  : ["PROXIMITY", "INNOVATION", "EXCELLENCE"]
              } 
              subtext={t("Driving the future of digital experiences", "Conduire l'avenir des expériences numériques")}
              fontSize="clamp(2.5rem, 8vw, 6rem)"
            />
          </div>
          
        </div>
      </LightLines>
    </section>
  );
}