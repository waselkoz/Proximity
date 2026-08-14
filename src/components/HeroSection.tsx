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
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
            <MorphText 
              words={
                lang === "fr" 
                  ? ["PROXIMITÉ", "INNOVATION", "EXCELLENCE"] 
                  : ["PROXIMITY", "INNOVATION", "EXCELLENCE"]
              } 
              subtext={t("Driving the future of digital experiences", "Conduire l'avenir des expériences numériques")}
              fontSize="clamp(2.5rem, 8vw, 6rem)"
            />
            
            {/* CTA Button */}
            <a 
              href="#services" 
              className="mt-12 group relative flex items-center justify-center overflow-hidden p-[1px]"
            >
              <div className="relative bg-[#050505] border border-white/20 group-hover:border-[#DC143C] px-10 py-4 flex items-center gap-4 transition-all duration-300">
                <div className="absolute inset-0 bg-[#DC143C]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="text-lg md:text-xl font-bold text-white tracking-widest uppercase relative z-10">{t("View Services", "Voir Nos Services")}</span>
                <svg className="w-5 h-5 text-[#DC143C] relative z-10 group-hover:translate-y-1 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
              </div>
            </a>
          </div>
          
        </div>
      </LightLines>
    </section>
  );
}