"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Code2, Palette, Film, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import CodeRain from '@/components/ui/CodeRain';

// --- Ultra Premium 3D Tilt Card with Spotlight ---
function SpotlightCard({ 
  children, 
  delay,
  className,
}: { 
  children: React.ReactNode, 
  delay: number,
  className?: string,
}) {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  // For 3D Tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-250, 250], [10, -10]);
  const rotateY = useTransform(smoothX, [-250, 250], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    let rect = e.currentTarget.getBoundingClientRect();
    
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ perspective: 2000 }}
      className={cn("w-full h-full cursor-pointer group", className)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative w-full h-full rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] transition-all duration-300 ease-out group/card group-hover/grid:opacity-50 hover:!opacity-100"
        )}
      >
        {/* Dark frosted glass background */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-3xl" style={{ transform: "translateZ(0)" }} />
        
        {/* Outer Crimson Glow Spotlight */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 mix-blend-screen"
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
          className="pointer-events-none absolute inset-0 rounded-[2.5rem] opacity-0 transition duration-300 group-hover:opacity-100"
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
          className="relative w-full h-full p-8 md:p-10 flex flex-col pointer-events-none"
          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        >
          <div className="pointer-events-auto h-full flex flex-col">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Local CodeRain removed, using global CodeRain from @/components/ui/CodeRain

function GraphicDesignUI() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/60 font-mono text-xs">
      
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

function VideoEditingUI() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/60 font-mono text-xs">
      
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
  step: any; 
  index: number; 
  totalSteps: number; 
  smoothProgress: any; 
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
        <div className="text-[#DC143C] font-bold text-xs tracking-widest mb-1 drop-shadow-[0_0_5px_rgba(220,20,60,0.5)]">
            STEP {step.id}
          </div>
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
            "hidden md:block w-full max-h-[300px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(220,20,60,0.15)] border border-white/10 relative z-10 md:row-start-1",
            !isEven ? "col-start-2 ml-16" : "col-start-1 mr-16"
          )}
        >
          <img src={step.image} alt={step.title || "Timeline Image"} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out" />
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

export default function ExpertiseSection() {
  return (
    <section className="relative w-full bg-[#030303] py-32 md:py-48 flex flex-col items-center overflow-hidden">
      
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 z-0 pointer-events-none" />
      
      {/* Gentle Red Glow Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] h-[40vh] bg-[#DC143C]/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header with MorphText */}
      <div className="relative z-20 text-center px-6 mb-20 md:mb-32 flex flex-col items-center w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-black/40 text-white/80 text-xs font-light tracking-[0.2em] uppercase mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(255,255,255,0.05)]"
        >
          <Sparkles className="w-4 h-4 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]" />
          <span>Our Expertise</span>
        </motion.div>

        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 mb-4 md:mb-6 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          Everything starts with
        </h2>
      </div>

      {/* Scroll-Linked Timeline */}
      <ScrollTimeline />

      {/* Transition Text between Timeline and Cards */}
      <div className="relative z-20 text-center px-6 mb-20 md:mb-28 flex flex-col items-center w-full max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-light text-white/80 leading-tight tracking-tight"
        >
          Here at <span className="font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">Proximity</span>, we offer <span className="text-[#DC143C] font-medium italic">all of these services</span>.
        </motion.p>
      </div>

      {/* Modern Bento/Grid Cards Section */}
      <div className="relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 px-6 z-20 group/grid">
        
        {/* Card 1: Development */}
        <SpotlightCard delay={0.1} className="md:col-span-8 min-h-[360px]">
          <CodeRain className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-black/60" durationMultiplier={1.5} />

          <div className="relative z-10 flex flex-col mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] transition-all duration-500 mb-6">
              <Code2 className="w-8 h-8 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
            </div>
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight">Development</h3>
          </div>
          
          <p className="relative z-10 text-white/60 leading-relaxed font-light text-lg mb-6 max-w-lg">
            We architect <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">blazing-fast</span>, scalable, and highly accessible web applications. From custom dashboards to high-converting stores, we build with meticulous attention to modern frameworks.
          </p>

          <div className="flex flex-wrap gap-2 mb-10 relative z-10">
            {["Web Apps", "E-Commerce", "Landing Pages", "Custom APIs"].map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                {tag}
              </span>
            ))}
          </div>
          
          <div 
            onClick={() => window.dispatchEvent(new CustomEvent('trigger-dev-transition'))}
            className="cursor-pointer relative z-10 mt-auto flex items-center justify-center md:justify-start text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit px-8 py-4 md:py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] backdrop-blur-md"
          >
            Discover More
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </SpotlightCard>

        {/* Card 2: Graphic Design */}
        <SpotlightCard delay={0.2} className="md:col-span-4 min-h-[360px]">
          <GraphicDesignUI />

          <div className="relative z-10 flex flex-col mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] transition-all duration-500 mb-6">
              <Palette className="w-8 h-8 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
            </div>
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight">Design</h3>
          </div>
          
          <p className="relative z-10 text-white/60 leading-relaxed font-light text-lg mb-6 flex-grow">
            Crafting <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">distinctive visual identities</span> and breathtaking aesthetics that resonate with your core audience.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-10 relative z-10">
            {["UI/UX", "Branding", "Social Media", "Logos"].map((tag, i) => (
              <span key={i} className="px-3 py-1 text-xs font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                {tag}
              </span>
            ))}
          </div>

          <div 
            onClick={() => window.dispatchEvent(new CustomEvent('trigger-design-transition'))}
            className="cursor-pointer relative z-10 mt-auto flex items-center justify-center md:justify-start text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit px-8 py-4 md:py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] backdrop-blur-md"
          >
            Discover More
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </SpotlightCard>

        {/* Card 3: Video Editing */}
        <SpotlightCard delay={0.3} className="md:col-span-12 min-h-[300px]">
          <VideoEditingUI />

          <div className="relative z-10 flex flex-col max-w-2xl flex-grow">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center border border-white/10 group-hover:border-[#DC143C]/50 group-hover:shadow-[0_0_30px_rgba(220,20,60,0.3)] transition-all duration-500 mb-6">
              <Film className="w-8 h-8 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
            </div>
            <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-[#DC143C]/80 tracking-tight mb-4">Video Editing</h3>
            <p className="text-white/60 leading-relaxed font-light text-lg mb-6">
              Delivering <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">cinematic storytelling</span> with dynamic cuts, seamless transitions, and professional color grading to engage viewers emotionally.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {["Promos", "Reels / TikToks", "Color Grading", "VFX"].map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs font-semibold text-white/60 bg-white/5 border border-white/10 rounded-full group-hover:border-[#DC143C]/40 group-hover:text-[#DC143C] group-hover:bg-[#DC143C]/10 transition-all duration-500 cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            onClick={() => window.dispatchEvent(new CustomEvent('trigger-video-transition'))}
            className="cursor-pointer relative z-10 mt-auto flex items-center justify-center md:justify-start text-sm font-bold text-white group-hover:text-white transition-colors duration-300 uppercase tracking-widest bg-[#DC143C]/10 w-full md:w-fit px-8 py-4 md:py-3 rounded-full border border-[#DC143C]/30 group-hover:border-[#DC143C] group-hover:bg-[#DC143C] group-hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] backdrop-blur-md"
          >
            Discover More
            <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </div>
        </SpotlightCard>

      </div>
    </section>
  );
}
