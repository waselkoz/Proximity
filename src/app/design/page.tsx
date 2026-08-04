"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Palette } from 'lucide-react';

export default function DesignPage() {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col items-center justify-center p-8 relative overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 z-0 pointer-events-none" />

      {/* Crimson Accent Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#DC143C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#DC143C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(220,20,60,0.15)]">
          <Palette className="w-10 h-10 text-white" />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Graphic <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80">Design</span>
        </h1>
        
        <p className="text-xl text-white/60 font-light leading-relaxed mb-12">
          Crafting <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">distinctive visual identities</span> and breathtaking aesthetics that resonate with your core audience.
        </p>
        
        <div 
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('trigger-home-transition'));
          }}
          className="cursor-pointer group flex items-center text-sm font-bold text-white uppercase tracking-widest bg-[#DC143C]/10 px-8 py-4 rounded-full border border-[#DC143C]/30 hover:border-[#DC143C] hover:bg-[#DC143C]/20 hover:shadow-[0_0_20px_rgba(220,20,60,0.4)] backdrop-blur-md transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </div>
      </div>
    </div>
  );
}
