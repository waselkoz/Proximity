"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CodeRain from "@/components/ui/CodeRain";
import Link from "next/link";
import Image from "next/image";
import dynamic from 'next/dynamic';
import type { CardStackItem } from "@/components/ui/card-stack";
const CardStack = dynamic(() => import("@/components/ui/card-stack").then(m => m.CardStack), { ssr: false });
import { projects } from "@/data/projects";

// -------------------------------------------------------------
// Stunning 3D Polygonal Image Background
// -------------------------------------------------------------
function ImagePortfolioBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-[#000000]">
      {/* Background Image (Static and crisp) */}
      <Image 
        src="/20215.jpg"
        alt="Portfolio Background"
        fill
        priority
        className="object-cover opacity-[0.65]"
      />
      
      {/* Deep Cinematic Edge Vignette to blend it perfectly into the page */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#030303_100%)]" />
      
      {/* Top and Bottom fades to match the rest of the dark site layout seamlessly */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030303] to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[#030303] to-transparent" />
    </div>
  );
}

// -------------------------------------------------------------

export default function PortfolioClient({ dict, lang }: { dict?: any, lang?: string }) {
  const d = dict || {};
  const [activeProject, setActiveProject] = useState<CardStackItem>(projects[0]);

  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-32 relative font-sans overflow-hidden">
      
      {/* 
        This Stunning Image Background sits securely above the main container's background 
        but strictly behind the interactive content 
      */}
      <ImagePortfolioBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center justify-center mb-8"
          >
            <div className="px-6 py-2.5 rounded-full border border-[#DC143C]/30 bg-[#DC143C]/5 flex items-center gap-3 backdrop-blur-md shadow-[0_0_20px_rgba(220,20,60,0.1)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC143C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#DC143C] shadow-[0_0_8px_#DC143C]"></span>
              </span>
              <span className="text-[#DC143C] font-mono text-xs tracking-[0.2em] uppercase font-bold">{d.featured || "Featured Projects"}</span>
            </div>
          </motion.div>
          
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed">
            {d.desc} <span className="text-white font-medium">{d.descBold}</span>{d.descEnd}
          </p>
        </motion.div>

        {/* Dynamic Project Title (Moved to the top of the cards) */}
        <div className="h-[80px] md:h-[100px] flex items-end justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={activeProject.id}
              initial={{ opacity: 0, y: 15, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.1] text-white text-center max-w-4xl drop-shadow-[0_0_20px_rgba(220,20,60,0.3)]"
            >
              <span className="text-[#DC143C] italic">{activeProject.title}.</span>
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* The New Card Stack Gallery */}
        <div className="w-full max-w-6xl mx-auto pb-12 mb-32 flex justify-center">
          <CardStack
            items={projects}
            initialIndex={0}
            cardWidth={800}
            cardHeight={500}
            overlap={0.6}
            spreadDeg={30}
            autoAdvance
            intervalMs={4500}
            pauseOnHover
            showDots
            onChangeIndex={(index, item) => setActiveProject(item)}
          />
        </div>
      
        {/* Footer Navigation */}
        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center mb-10">
          <div 
            onClick={() => window.history.back()}
            className="cursor-pointer group flex items-center text-sm font-bold text-white uppercase tracking-widest bg-[#DC143C]/10 px-8 py-4 rounded-full border border-[#DC143C]/30 hover:border-[#DC143C] hover:bg-[#DC143C]/20 hover:shadow-[0_0_20px_rgba(220,20,60,0.4)] backdrop-blur-md transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Go Back
          </div>
        </div>
        
      </div>
    </div>
  );
}
