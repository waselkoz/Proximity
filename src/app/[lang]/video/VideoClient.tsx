"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Film } from 'lucide-react';

export default function VideoClient({ dict, lang }: { dict?: any, lang?: string }) {
  const d = dict || {};
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 z-0 pointer-events-none" />

      {/* Cinematic Red Lens Flare/Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#DC143C]/20 rounded-[100%] blur-[80px] pointer-events-none" />

      {/* Letterbox Overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-[#000000] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#000000] z-20 pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,20,60,0.15)] relative">
          <Film className="w-10 h-10 text-white" />
          {/* Rec dot */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#DC143C] rounded-full animate-pulse shadow-[0_0_10px_#DC143C]" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          {d.title1} <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80">{d.title2}</span>
        </h1>
        
        <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
          Delivering <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">cinematic storytelling</span> with dynamic cuts, seamless transitions, and professional color grading.
        </p>
        
        <div 
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('trigger-home-transition'));
          }}
          className="cursor-pointer group flex items-center text-sm font-bold text-white uppercase tracking-widest bg-[#DC143C]/10 px-8 py-4 rounded-full border border-[#DC143C]/30 hover:border-[#DC143C] hover:bg-[#DC143C]/20 hover:shadow-[0_0_20px_rgba(220,20,60,0.4)] backdrop-blur-md transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          {d.back}
        </div>
      </div>
    </div>
  );
}
