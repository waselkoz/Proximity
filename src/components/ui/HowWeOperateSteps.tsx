"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Target, Palette, Code2, Rocket } from 'lucide-react';

type StepData = {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ElementType;
  tagline: string;
};

// steps array moved inside

function ScrollStep({ 
  step, 
  isActive, 
  setActiveStep 
}: { 
  step: StepData, 
  isActive: boolean,
  setActiveStep: (step: StepData) => void 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(step);
    }
  }, [isInView, setActiveStep, step]);

  return (
    <div 
      ref={ref} 
      className="flex flex-col justify-center min-h-[calc(100vh-6rem)] py-16 px-4 md:px-16 transition-all duration-700 relative"
    >
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.15, scale: isActive ? 1 : 0.95 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
          <span className="font-mono text-[10px] md:text-sm tracking-widest text-[#DC143C] uppercase font-bold bg-[#DC143C]/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-[#DC143C]/20 whitespace-nowrap">
            {step.tagline}
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#DC143C]/30 to-transparent max-w-[50px] md:max-w-[100px]" />
        </div>
        
        <h3 className="text-xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 tracking-tight leading-[1.1]">
          {step.title}
        </h3>
        
        <p className="text-sm md:text-2xl text-white/70 font-light leading-relaxed max-w-xl">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function HowWeOperateSteps({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;

const steps: StepData[] = [
  {
    id: "analysis",
    num: "01",
    tagline: t("Phase One", "Phase Une"),
    title: t("Analysis & Strategy", "Analyse & Stratégie"),
    description: t("We reverse-engineer your competitors and analyze market gaps to forge a strategy that makes your brand impossible to ignore.", "Nous analysons vos concurrents et les lacunes du marché pour forger une stratégie qui rend votre marque incontournable."),
    icon: Target,
  },
  {
    id: "design",
    num: "02",
    tagline: t("Phase Two", "Phase Deux"),
    title: t("Visual Design", "Design Visuel"),
    description: t("We craft breathtaking, immersive interfaces designed specifically to captivate and convert your target audience.", "Nous créons des interfaces époustouflantes et immersives conçues spécifiquement pour captiver et convertir votre public cible."),
    icon: Palette,
  },
  {
    id: "engineering",
    num: "03",
    tagline: t("Phase Three", "Phase Trois"),
    title: t("Bulletproof Engineering", "Ingénierie Infaillible"),
    description: t("We architect high-performance, scalable codebases. Zero lag, zero errors—just seamless execution.", "Nous concevons des bases de code évolutives et hautement performantes. Zéro latence, zéro erreur — juste une exécution fluide."),
    icon: Code2,
  },
  {
    id: "delivery",
    num: "04",
    tagline: t("Phase Four", "Phase Quatre"),
    title: t("Testing & Delivery", "Tests & Livraison"),
    description: t("We deploy rigorously tested, production-ready applications in record time, turning your vision into reality.", "Nous déployons des applications rigoureusement testées et prêtes pour la production en un temps record, transformant votre vision en réalité."),
    icon: Rocket,
  }
];
  const [activeStep, setActiveStep] = useState<StepData>(steps[0]);

  return (
    <div className="w-full relative z-20 flex flex-row max-w-7xl mx-auto rounded-3xl border border-white/5 bg-[#030303] shadow-2xl my-24">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 rounded-3xl bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none overflow-hidden" />

      {/* Ambient Proximity Logo Particles Scattered Throughout */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0 mix-blend-screen">
        {/* 1. Very Top Left */}
        <img src="/logo.jpg" alt="" className="absolute top-[2%] -left-10 md:-left-20 w-64 h-64 md:w-96 md:h-96 object-contain opacity-15 -rotate-12" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />
        
        {/* 2. Top Right */}
        <img src="/logo.jpg" alt="" className="absolute top-[12%] -right-20 md:-right-32 w-80 h-80 md:w-[32rem] md:h-[32rem] object-contain opacity-[0.08] rotate-45" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />
        
        {/* 3. Upper Middle Left */}
        <img src="/logo.jpg" alt="" className="absolute top-[25%] left-[5%] md:left-[10%] w-48 h-48 md:w-72 md:h-72 object-contain opacity-[0.12] -rotate-45" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />

        {/* 4. Upper Middle Right (Center-ish) */}
        <img src="/logo.jpg" alt="" className="absolute top-[38%] right-[10%] md:right-[20%] w-56 h-56 md:w-80 md:h-80 object-contain opacity-10 rotate-[30deg]" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />

        {/* 5. True Middle Left */}
        <img src="/logo.jpg" alt="" className="absolute top-[52%] -left-16 md:-left-24 w-72 h-72 md:w-[28rem] md:h-[28rem] object-contain opacity-[0.15] rotate-12" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />

        {/* 6. Lower Middle Right */}
        <img src="/logo.jpg" alt="" className="absolute top-[68%] -right-10 md:-right-20 w-64 h-64 md:w-[26rem] md:h-[26rem] object-contain opacity-[0.09] -rotate-12" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />

        {/* 7. Bottom Left */}
        <img src="/logo.jpg" alt="" className="absolute top-[82%] left-[8%] md:left-[15%] w-56 h-56 md:w-[22rem] md:h-[22rem] object-contain opacity-[0.11] rotate-[60deg]" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />

        {/* 8. Very Bottom Right */}
        <img src="/logo.jpg" alt="" className="absolute top-[95%] -right-16 md:-right-24 w-80 h-80 md:w-[32rem] md:h-[32rem] object-contain opacity-15 rotate-[-25deg]" style={{ filter: "brightness(1.3) invert(1) hue-rotate(180deg)" }} />
      </div>

      {/* Static Left Half Background & Border (Stays full height) */}
      <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#050505] border-r border-white/10 rounded-l-3xl pointer-events-none" />

      {/* LEFT: Sticky Premium Visual Column (Transparent, just holds content) */}
      <div className="flex w-1/2 h-[calc(100vh-6rem)] sticky top-24 flex-col items-center justify-center relative">
        
        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeStep.id}
            initial={{ opacity: 0, y: 50, filter: "blur(20px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -50, filter: "blur(20px)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none p-4 md:p-12"
          >
            {/* Premium Glassmorphism Card */}
            <div className="relative w-full max-w-[140px] md:max-w-[320px] lg:max-w-sm aspect-square rounded-3xl md:rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
              
              {/* Inner animated gradient ring */}
              <div className="absolute inset-0 rounded-[3rem] border border-[#DC143C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -inset-1/2 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(220,20,60,0.3)_360deg)] animate-[spin_4s_linear_infinite] opacity-50" />
              <div className="absolute inset-1 rounded-[2.9rem] bg-[#0A0A0A]" />

              <div className="relative z-10 flex flex-col items-center text-center px-2">
                <activeStep.icon className="w-8 h-8 md:w-16 md:h-16 text-[#DC143C] mb-2 md:mb-6" strokeWidth={1.5} />
                
                <h2 className="text-[50px] md:text-[120px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 select-none">
                  {activeStep.num}
                </h2>
                
                <div className="text-white/30 font-mono text-[9px] md:text-sm tracking-[0.1em] md:tracking-[0.3em] uppercase mt-2 md:mt-4 leading-tight">
                  {activeStep.tagline}
                </div>
              </div>
            </div>
            
            {/* Outline text behind for massive depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[80px] md:text-[200px] lg:text-[280px] font-black leading-none tracking-tighter text-transparent select-none opacity-[0.03]"
                 style={{ WebkitTextStroke: "2px rgba(255,255,255,1)" }}>
              {activeStep.num}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT: Scrolling Content Column */}
      <div className="w-1/2 relative pb-[20vh] bg-[#0A0A0A]/50 backdrop-blur-sm rounded-r-3xl">
        
        {/* Animated Progress Timeline Line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5">
          <motion.div 
            className="w-full bg-[#DC143C] shadow-[0_0_15px_#DC143C]"
            initial={{ height: "0%" }}
            animate={{ 
              height: activeStep.id === "analysis" ? "25%" : 
                      activeStep.id === "design" ? "50%" : 
                      activeStep.id === "engineering" ? "75%" : "100%" 
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </div>
        
        {steps.map((step) => (
          <ScrollStep 
            key={step.id} 
            step={step} 
            isActive={activeStep.id === step.id}
            setActiveStep={setActiveStep} 
          />
        ))}
      </div>
      
    </div>
  );
}
