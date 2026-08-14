"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate, MotionValue } from 'framer-motion';
import { Code2, Palette, Film, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeRain from '@/components/ui/CodeRain';
import SpotlightCard from '@/components/ui/SpotlightCard';
import CinematicParticles from '@/components/ui/CinematicParticles';


// Local CodeRain removed, using global CodeRain from @/components/ui/CodeRain

function GraphicDesignUI({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 font-mono text-xs">
      
      {/* Figma/Illustrator Bounding Box */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-48 h-48 border border-blue-500/50 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: [0, 90, 90, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500" />
        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500" />
      </motion.div>

      {/* Color Hex codes floating */}
      <motion.div 
        className="absolute top-8 left-8 text-white/50 tracking-widest flex items-center gap-2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-3 h-3 rounded-full bg-[#DC143C]" />
        #DC143C
      </motion.div>

      <motion.div 
        className="absolute bottom-12 left-10 text-white/50 tracking-widest flex items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div className="w-3 h-3 rounded-full bg-[#030303] border border-white/20" />
        #030303
      </motion.div>

      {/* Layers Panel Snippet */}
      <motion.div 
        className="absolute top-10 right-6 text-white/60 bg-white/5 p-2 rounded border border-white/10 backdrop-blur-md flex flex-col gap-1"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="text-xs text-white/40 mb-1 uppercase font-bold tracking-widest">Layers</div>
        <div className="flex items-center gap-2 bg-white/10 px-2 py-1 rounded">
          <span className="w-2 h-2 bg-blue-400 rounded-sm" /> Group 1
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <span className="w-2 h-2 bg-purple-400 rounded-full" /> Ellipse 2
        </div>
        <div className="flex items-center gap-2 px-2 py-1">
          <span className="w-2 h-2 bg-green-400 rounded-sm" /> Vector
        </div>
      </motion.div>

      {/* Measurement guides / Crosshairs */}
      <motion.div 
        className="absolute bottom-8 right-12 text-blue-400/60 text-xs tracking-widest font-bold"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        W: 1920px <br/> H: 1080px
      </motion.div>
      <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-blue-500/20 border-l border-dashed border-blue-500/30" />
      <div className="absolute left-0 right-0 top-1/3 h-[1px] bg-blue-500/20 border-t border-dashed border-blue-500/30" />
    </div>
  );
}

const KEYFRAMES = [
  { top: "20%", left: "5%" },
  { top: "50%", left: "8%" },
  { top: "80%", left: "10%" },
  { top: "30%", right: "5%" },
  { top: "70%", right: "8%" },
];

function VideoEditingUI({ isMobile }: { isMobile?: boolean }) {
  if (isMobile) return null;
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 font-mono text-xs">
      
      {/* Floating Parameters */}
      <motion.div 
        className="absolute top-6 left-8 text-[#DC143C]/90 font-semibold tracking-widest bg-[#DC143C]/10 px-2 py-1 rounded border border-[#DC143C]/20"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        [1920x1080] 60.00fps
      </motion.div>

      <motion.div 
        className="absolute top-6 right-8 text-white/50 tracking-widest"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        TC: 00:14:23:05
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 left-6 text-white/70 bg-white/5 px-2 py-1 rounded border border-white/10"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Opacity: 85%
      </motion.div>

      <motion.div 
        className="absolute top-1/2 right-6 text-white/70 bg-white/5 px-2 py-1 rounded border border-white/10"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Scale: 120%
      </motion.div>

      <motion.div 
        className="absolute bottom-16 right-8 text-[#DC143C] flex items-center gap-2"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="w-2 h-2 rounded-full bg-[#DC143C] animate-pulse" />
        fx Lumetri Color
      </motion.div>

      {/* Falling Keyframe Diamonds */}
      {KEYFRAMES.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 border border-[#DC143C]/60 rotate-45"
          style={{ ...pos }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 300, opacity: [0, 1, 0] }}
          transition={{
            duration: 5 + (i % 3),
            repeat: Infinity,
            delay: i * 0.7,
            ease: "linear",
          }}
        />
      ))}

      {/* Timeline Playhead */}
      <motion.div 
        className="absolute bottom-4 w-[2px] h-10 bg-[#DC143C] shadow-[0_0_15px_#DC143C] z-10"
        animate={{ left: ["10%", "90%", "10%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

const steps = [
  { 
    id: 1, 
    title: "Need a website,an app or an online store?",
    description: "a langing page, an e-commerce website, or a custom web application,to make an online presence", 
    image: "/Parfum.png"
  },
  { 
    id: 2, 
    title: "or just video editing?", 
    description: "to make most of your content with high quality editing to reach the right audience",
    image: "/photo-1574717025058-2f8737d2e2b7.avif"
  },
  { 
    id: 3, 
    title: "perhaps you need a logo or a poster?", 
    description: "to be seen and remembered for what you do or the message you offer ",
    image: "/ITNCp.jpg"
  },
];

function TimelineNode({ 
  step, 
  index, 
  totalSteps, 
  smoothProgress 
}: { 
  step: { id?: string | number; title: string; description: string; image?: string }; 
  index: number; 
  totalSteps: number; 
  smoothProgress: MotionValue<number>; 
}) {
  // Map index from 0..1 to 0.1..0.9 to prevent steps from spilling out of the top/bottom of the container
  const normalizedIndex = totalSteps > 1 ? index / (totalSteps - 1) : 0.5;
  const progressPoint = 0.1 + normalizedIndex * 0.8;
  
  // Activate properties exactly around the progressPoint
  const opacity = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [0.3, 1]);
  const scale = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [0.8, 1.2]);
  const borderColor = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], ["rgba(255,255,255,0.1)", "rgba(220,20,60,1)"]);
  const glow = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], ["0px 0px 0px rgba(220,20,60,0)", "0px 0px 20px rgba(220,20,60,0.8)"]);

  const isEven = index % 2 === 0;

  // Cool animation for the image
  const imgOpacity = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [0, 1]);
  const imgX = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [!isEven ? 50 : -50, 0]);
  const imgRotate = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [!isEven ? 4 : -4, 0]);
  const imgScale = useTransform(smoothProgress, [progressPoint - 0.05, progressPoint + 0.05], [0.8, 1]);

  return (
    <div 
      className="absolute w-full grid grid-cols-1 md:grid-cols-2 items-center z-10"
      style={{ top: `${progressPoint * 100}%`, transform: 'translateY(-50%)' }}
    >
      
      {/* Text Content */}
      <motion.div 
        style={{ opacity }}
        className={cn(
          "w-full pl-16 md:pl-0 relative z-20 md:row-start-1",
          !isEven 
            ? "md:col-start-1 md:pr-16 md:text-right" 
            : "md:col-start-2 md:pl-16 md:text-left"
        )}
      >

          <h4 className="text-xl md:text-2xl font-semibold text-white mb-2 leading-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
            {step.title}
          </h4>
        <p className="text-white/60 font-light text-sm md:text-base leading-relaxed">{step.description}</p>
      </motion.div>

      {/* Image Content */}
      {step.image && (
        <motion.div
          style={{ 
            opacity: imgOpacity, 
            x: imgX, 
            rotate: imgRotate,
            scale: imgScale 
          }}
          className={cn(
            "w-[calc(100%-4rem)] ml-16 md:w-full md:ml-0 max-h-[200px] md:max-h-[300px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(220,20,60,0.15)] border border-white/10 relative z-10 md:row-start-1 mt-6 md:mt-0",
            !isEven ? "md:col-start-2 md:ml-16" : "md:col-start-1 md:mr-16"
          )}
        >
          <Image 
            src={step.image} 
            alt={step.title || "Timeline Image"} 
            width={800}
            height={600}
            sizes="(max-width: 768px) 90vw, 50vw"
            className="w-full h-auto object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" 
          />
        </motion.div>
      )}

      {/* Bubble / Node Indicator */}
      <div className="absolute left-[24px] md:left-1/2 -translate-x-1/2 flex items-center justify-center top-1/2 -translate-y-1/2 z-30">
        <motion.div
          style={{ scale, borderColor, boxShadow: glow }}
          className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#050505] border-2 transition-colors duration-300"
        />
      </div>
    </div>
  );
}

function ScrollTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative w-full max-w-5xl mx-auto mt-4 mb-32 h-[800px] md:h-[1200px]">
      
      {/* Background Track Line */}
      <div className="absolute left-[24px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 rounded-full" />
      
      {/* Animated Glowing Active Line */}
      <motion.div 
        className="absolute left-[24px] md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#DC143C] to-[#ff4500] -translate-x-1/2 origin-top rounded-full shadow-[0_0_15px_rgba(220,20,60,0.8)] z-0"
        style={{ height: lineHeight }}
      />

      {/* Nodes (Bubbles) */}
      {steps.map((step, index) => (
        <TimelineNode 
          key={step.id} 
          step={step} 
          index={index} 
          totalSteps={steps.length} 
          smoothProgress={smoothProgress} 
        />
      ))}
    </div>
  );
}


export default function ExpertiseSection({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;

  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100 });

  // Cinematic Parallax Transforms
  const coreScale = useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.2, 1.5]);
  const coreOpacity = useTransform(smoothProgress, [0, 0.5, 1], [0.3, 1, 0]);
  const coreRotate = useTransform(smoothProgress, [0, 1], [0, 180]);

  const bgTextY = useTransform(smoothProgress, [0, 1], [100, -300]);

  // Cinematic Deep Dive Transition
  const { scrollYProgress: transitionProgress } = useScroll({
    target: containerRef,
    offset: ["start 100%", "start 0%"]
  });

  const sectionScale = useTransform(transitionProgress, [0, 1], [0.9, 1]);
  const sectionY = useTransform(transitionProgress, [0, 1], [100, 0]);
  const overlayOpacity = useTransform(transitionProgress, [0, 0.8], [1, 0]);
  const sectionBorderRadius = useTransform(transitionProgress, [0, 1], ["4rem", "0rem"]);



  return (
    <motion.section 
      id="services"
      ref={containerRef} 
      style={{ 
        scale: sectionScale, 
        y: sectionY,
        borderTopLeftRadius: sectionBorderRadius,
        borderTopRightRadius: sectionBorderRadius,
      }}
      className="relative w-full bg-[#000000] py-32 md:py-48 flex flex-col items-center overflow-hidden z-20 shadow-[0_-30px_80px_rgba(0,0,0,0.1)] scroll-mt-16 mobile-no-transform"
    >
      {/* Fog Reveal Overlay */}
      {!isMobile && (
        <motion.div 
          className="absolute inset-0 bg-white z-50 pointer-events-none"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Innovative Mobile Backgrounds Behind Cards */}
      <div className="md:hidden absolute inset-0 z-0 pointer-events-none">
        {/* Top Image (aa.jpg) */}
        <div className="absolute top-0 left-0 w-full h-[55%] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center transform-gpu"
            style={{ backgroundImage: "url('/aa.jpg')", willChange: "transform, opacity" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/30 via-[#000000]/70 to-[#000000]" />
        </div>

        {/* Bottom Image (aaa.jpeg) */}
        <div className="absolute bottom-0 left-0 w-full h-[55%] overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-cover bg-center transform-gpu"
            style={{ backgroundImage: "url('/aaa.jpeg')", willChange: "transform, opacity" }}
            animate={{ scale: [1.15, 1, 1.15], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/30 via-[#000000]/70 to-[#000000]" />
        </div>
      </div>
      
      {/* CINEMATIC BARS */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-black via-black/80 to-transparent z-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black via-black/80 to-transparent z-40 pointer-events-none" />

      {/* THE CORE (Singularity Background) */}
      {!isMobile && (
        <motion.div 
          style={{ scale: coreScale, opacity: coreOpacity, rotate: coreRotate, willChange: "transform, opacity" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] md:w-[1200px] md:h-[1200px] pointer-events-none z-0 mix-blend-screen items-center justify-center transform-gpu"
        >
          <div className="absolute w-[20%] h-[20%] bg-black rounded-full shadow-[0_0_120px_100px_rgba(220,20,60,0.9)] z-10 transform-gpu" />
          <div className="absolute w-full h-full rounded-full border-[2px] border-[#DC143C]/20 border-t-[#DC143C]/80 shadow-[inset_0_0_100px_rgba(220,20,60,0.3)] blur-[4px] transform-gpu" style={{ willChange: "filter" }} />
          <div className="absolute w-[70%] h-[70%] rounded-full border-[1px] border-white/10 border-l-white/40 shadow-[0_0_80px_rgba(255,255,255,0.1)] blur-[2px] -rotate-45 transform-gpu" style={{ willChange: "filter" }} />
          <div className="absolute w-[40%] h-[40%] rounded-full border-[3px] border-[#DC143C]/30 border-b-[#DC143C] shadow-[0_0_50px_rgba(220,20,60,0.6)] blur-[1px] rotate-90 transform-gpu" style={{ willChange: "filter" }} />
        </motion.div>
      )}

      {/* MASSIVE BACKGROUND TEXT */}
      <motion.div 
        style={{ y: isMobile ? 0 : bgTextY }}
        className="absolute top-[30%] left-0 w-full flex justify-center pointer-events-none z-0 opacity-10"
      >
        <h1 className="text-[20vw] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-black tracking-tighter leading-none select-none">
          {t("ORIGIN", "ORIGINE")}
        </h1>
      </motion.div>
      
      {/* Noise and Film Grain */}
      <div className="hidden md:block absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.06] mix-blend-overlay z-50 pointer-events-none" />
      
      {/* Floating Particles */}
      <CinematicParticles scrollYProgress={smoothProgress} />

      {/* Header with MorphText */}
      <div className="relative z-30 text-center px-6 mb-20 md:mb-32 flex flex-col items-center w-full max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-normal md:leading-normal text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/30 mb-6 drop-shadow-[0_0_40px_rgba(255,255,255,0.2)]">
          {t("Where Everything Begins.", "Où tout commence.")}
        </h2>
      </div>

      {/* Scroll-Linked Timeline */}
      <ScrollTimeline />

      {/* Transition Text */}
      <div id="about" className="relative z-30 text-center px-6 mb-32 flex flex-col items-center w-full max-w-4xl mx-auto scroll-mt-24">
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-white/80 leading-tight tracking-tight"
        >
          {lang === "fr" ? (
            <>Chez <span className="font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Proximity</span>, nous concevons <br/>
            <span className="text-[#DC143C] font-semibold italic text-5xl md:text-7xl lg:text-8xl mt-4 block">l'extraordinaire.</span></>
          ) : (
            <>Here at <span className="font-bold text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">Proximity</span>, we engineer <br/>
            <span className="text-[#DC143C] font-semibold italic text-5xl md:text-7xl lg:text-8xl mt-4 block">the extraordinary.</span></>
          )}
        </motion.p>
      </div>

      {/* Timeline Style Cards Section */}
      <div className="relative w-full flex flex-col gap-8 md:gap-10 z-30 pb-48 pt-12 overflow-hidden">
        
        {/* The Platform (Vertical Line) */}
        <div className="absolute left-[15px] md:left-[12vw] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#DC143C] to-transparent shadow-[0_0_15px_rgba(220,20,60,0.8)] z-0" />

        {/* Card 1: Development - Massive on Top */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="relative z-10 w-[94%] md:w-[70%] pl-[15px] md:pl-[12vw]"
        >
          <div className="relative w-full h-full group/wrapper">
            <div className="hidden md:block absolute -inset-32 bg-[#DC143C]/10 blur-[150px] rounded-full z-0 pointer-events-none transform-gpu" style={{ willChange: "filter" }} />
            <SpotlightCard delay={0.1} className="relative z-10 min-h-[350px] md:min-h-[400px]">
              <CodeRain className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60" durationMultiplier={1.5} />

              <div className="relative z-10 flex flex-col mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_40px_rgba(220,20,60,0.3)] transition-all duration-500 mb-4">
                  <Code2 className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight">{t("Development", "Développement")}</h3>
              </div>
              
              <p className="relative z-10 text-white/60 leading-relaxed font-light text-base md:text-xl mb-6 max-w-2xl">
                {lang === "fr" ? (
                  <>Nous concevons des applications web <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">ultra-rapides</span>, évolutives et hautement accessibles. Des tableaux de bord sur mesure aux boutiques à fort taux de conversion, nous développons avec une attention méticuleuse.</>
                ) : (
                  <>We architect <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">blazing-fast</span>, scalable, and highly accessible web applications. From custom dashboards to high-converting stores, we build with meticulous attention to modern frameworks.</>
                )}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8 relative z-10">
                {(lang === "fr" ? ["Apps Web", "E-Commerce", "Landing Pages", "APIs Sur Mesure"] : ["Web Apps", "E-Commerce", "Landing Pages", "Custom APIs"]).map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-[10px] md:text-xs font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div 
                onClick={() => window.dispatchEvent(new CustomEvent('trigger-dev-transition'))}
                className="cursor-pointer relative z-10 mt-auto flex items-center justify-center md:justify-start text-xs md:text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit px-6 md:px-8 py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_30px_rgba(220,20,60,0.6)] backdrop-blur-md"
              >
                {t("Discover More", "En Savoir Plus")}
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </SpotlightCard>
          </div>
        </motion.div>

        {/* Card 2: Graphic Design */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }} 
          className="relative z-20 w-[96%] md:w-[80%] pl-[15px] md:pl-[12vw]"
        >
          <div className="relative w-full h-full group/wrapper">
            <div className="hidden md:block absolute -inset-32 bg-white/5 blur-[150px] rounded-full z-0 pointer-events-none transform-gpu" style={{ willChange: "filter" }} />
            <SpotlightCard delay={0.3} className="relative z-10 min-h-[350px] md:min-h-[400px]">
              <GraphicDesignUI isMobile={isMobile} />

              <div className="relative z-10 flex flex-col mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_40px_rgba(220,20,60,0.3)] transition-all duration-500 mb-4">
                  <Palette className="w-6 h-6 md:w-8 h-8 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
                </div>
                <h3 className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight">{t("Design", "Design")}</h3>
              </div>
              
              <p className="relative z-10 text-white/60 leading-relaxed font-light text-base md:text-xl mb-6 flex-grow">
                {lang === "fr" ? (
                  <>Création <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">d'identités visuelles distinctives</span> et d'esthétiques époustouflantes qui résonnent avec votre public cible.</>
                ) : (
                  <>Crafting <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">distinctive visual identities</span> and breathtaking aesthetics that resonate with your core audience.</>
                )}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 md:mb-8 relative z-10">
                {(lang === "fr" ? ["UI/UX", "Branding", "Réseaux Sociaux", "Logos"] : ["UI/UX", "Branding", "Social Media", "Logos"]).map((tag, i) => (
                  <span key={i} className="px-3 py-1.5 text-[10px] md:text-xs font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                    {tag}
                  </span>
                ))}
              </div>

              <div 
                onClick={() => window.dispatchEvent(new CustomEvent('trigger-design-transition'))}
                className="cursor-pointer relative z-10 mt-auto flex items-center justify-center md:justify-start text-xs md:text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit px-6 md:px-8 py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_30px_rgba(220,20,60,0.6)] backdrop-blur-md"
              >
                {t("Discover More", "En Savoir Plus")}
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </SpotlightCard>
          </div>
        </motion.div>

        {/* Card 3: Video Editing */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true, margin: "-50px" }} 
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="relative z-30 w-[98%] md:w-[90%] pl-[15px] md:pl-[12vw]"
        >
          <div className="relative w-full h-full group/wrapper">
            <div className="hidden md:block absolute -inset-32 bg-[#DC143C]/15 blur-[150px] rounded-full z-0 pointer-events-none transform-gpu" style={{ willChange: "filter" }} />
            <SpotlightCard delay={0.5} className="relative z-10 min-h-[400px] md:min-h-[450px]">
              <VideoEditingUI isMobile={isMobile} />

              <div className="relative z-10 flex flex-col max-w-4xl flex-grow items-center text-center">
                <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_50px_rgba(220,20,60,0.3)] transition-all duration-500 mb-4 md:mb-6 mt-2 md:mt-4">
                  <Film className="w-7 h-7 md:w-10 md:h-10 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
                </div>
                <h3 className="text-3xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight mb-4">{t("Video Editing", "Montage Vidéo")}</h3>
                <p className="text-white/60 leading-relaxed font-light text-base md:text-2xl mb-6 md:mb-8 max-w-3xl">
                  {lang === "fr" ? (
                    <>Racontez une histoire <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">cinématographique</span> avec des coupes dynamiques, des transitions fluides et un étalonnage professionnel pour engager vos spectateurs émotionnellement.</>
                  ) : (
                    <>Delivering <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">cinematic storytelling</span> with dynamic cuts, seamless transitions, and professional color grading to engage viewers emotionally.</>
                  )}
                </p>
                
                <div className="flex flex-wrap justify-center gap-2 mb-6 md:mb-8">
                  {(lang === "fr" ? ["Promos", "Reels / TikToks", "Étalonnage", "VFX"] : ["Promos", "Reels / TikToks", "Color Grading", "VFX"]).map((tag, i) => (
                    <span key={i} className="px-4 py-1.5 text-[10px] md:text-xs font-semibold text-white/70 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div 
                onClick={() => window.dispatchEvent(new CustomEvent('trigger-video-transition'))}
                className="cursor-pointer relative z-10 mt-auto flex items-center justify-center text-xs md:text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit mx-auto px-8 md:px-10 py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_40px_rgba(220,20,60,0.6)] backdrop-blur-md"
              >
                {t("Discover More", "En Savoir Plus")}
                <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </SpotlightCard>
          </div>
        </motion.div>





      </div>
    </motion.section>
  );
}
