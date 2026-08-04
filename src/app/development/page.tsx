"use client";

import { motion } from "framer-motion";
import CodeRain from "@/components/ui/CodeRain";
import TerminalWindow from "@/components/ui/TerminalWindow";
import TechSphere from "@/components/ui/TechSphere";
import ServicesIDE from "@/components/ui/ServicesIDE";

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#030303] text-white pt-32 pb-32 relative font-sans">
      
      {/* Background Environment */}
      <CodeRain className="opacity-30" durationMultiplier={1.5} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-50 z-0 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[800px] bg-[#DC143C]/5 rounded-full blur-[150px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center mb-10"
          >
            <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 flex items-center gap-3 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC143C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DC143C]"></span>
              </span>
              <span className="text-white/90 font-mono text-xs tracking-widest uppercase font-medium">Proximity Engineering</span>
            </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
            Beautiful interfaces.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#DC143C]">Unbreakable backends.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto leading-relaxed mb-16">
            We don't do cookie-cutter templates. We write high-performance, scalable code that turns complex business problems into seamless digital experiences.
          </p>

          <TerminalWindow />
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24"></div>

        {/* Tech Stack Dependencies */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center text-center"
          >
            <p className="text-[#DC143C] font-mono text-sm mb-6 uppercase tracking-widest">Dependencies</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">We operate with the latest technologies</h2>
            
            <TechSphere />
          </motion.div>
        </div>

        {/* Services Architecture (IDE Interface) */}
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 font-mono text-center md:text-left"
          >
            <span className="text-[#DC143C]">{'<'}</span>
            Architecture
            <span className="text-[#DC143C]">{' />'}</span>
          </motion.h2>
          <p className="text-white/40 font-mono text-sm mb-12 text-center md:text-left">
            // Select a module in the explorer to inspect architectural payloads
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ServicesIDE />
          </motion.div>
        </div>
      </div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center mt-32 mb-10">
        <div 
          onClick={(e) => {
            e.preventDefault();
            window.dispatchEvent(new CustomEvent('trigger-home-transition'));
          }}
          className="cursor-pointer group flex items-center text-sm font-bold text-white uppercase tracking-widest bg-[#DC143C]/10 px-8 py-4 rounded-full border border-[#DC143C]/30 hover:border-[#DC143C] hover:bg-[#DC143C]/20 hover:shadow-[0_0_20px_rgba(220,20,60,0.4)] backdrop-blur-md transition-all duration-300"
        >
          <svg className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
          Back to Home
        </div>
      </div>
    </div>
  );
}
