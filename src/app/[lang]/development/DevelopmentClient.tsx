"use client";

import { motion } from "framer-motion";
import dynamic from 'next/dynamic';

const CodeRain = dynamic(() => import("@/components/ui/CodeRain"), { ssr: false });
const TechSphere = dynamic(() => import("@/components/ui/TechSphere"), { ssr: false });
const HowWeOperateSteps = dynamic(() => import("@/components/ui/HowWeOperateSteps"), { ssr: false });
const FeedbackLoop = dynamic(() => import("@/components/ui/FeedbackLoop"), { ssr: false });
const LightLines = dynamic(() => import("@/components/ui/light-lines").then(m => m.LightLines), { ssr: false });
const PricingSection = dynamic(() => import("@/components/PricingSection"), { ssr: true });
const TechMarquee = dynamic(() => import("@/components/TechMarquee"), { ssr: false });
import Link from "next/link";

// -------------------------------------------------------------
// Sleek Diagonal Glow Background (Replicating j.jpg in CSS)
// -------------------------------------------------------------
function DiagonalGlowBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050002]">
      
      {/* 
        Sharp Diagonal Metallic Beams 
        Using a single crisp CSS gradient to achieve the exact metallic slashes from the photo
      */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 0%,
              transparent 15%,
              rgba(220, 20, 60, 0.05) 15%,
              rgba(255, 77, 109, 0.8) 18%,
              rgba(220, 20, 60, 0.1) 18.5%,
              transparent 22%,
              
              transparent 35%,
              rgba(220, 20, 60, 0.05) 35%,
              rgba(255, 77, 109, 1) 40%,
              rgba(220, 20, 60, 0.2) 40.5%,
              transparent 48%,

              transparent 70%,
              rgba(220, 20, 60, 0.05) 70%,
              rgba(255, 77, 109, 0.8) 75%,
              rgba(220, 20, 60, 0.1) 75.5%,
              transparent 80%
            )
          `
        }}
      />

      {/* Red ambient glow to blend the sharp lines and create the 3D depth */}
      <div 
        className="absolute inset-0 opacity-50 mix-blend-screen"
        style={{
          background: `
            linear-gradient(
              135deg,
              transparent 10%,
              rgba(220, 20, 60, 0.3) 18%,
              transparent 23%,
              transparent 30%,
              rgba(220, 20, 60, 0.5) 40%,
              transparent 46%,
              transparent 65%,
              rgba(220, 20, 60, 0.2) 75%,
              transparent 82%
            )
          `
        }}
      />

      {/* Subtle Carbon Fiber / Scanline Texture overlay */}
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 4px)' }} 
      />

      {/* Deep Central Vignette so text remains perfectly readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(3,3,3,0.7)_100%)]" />
    </div>
  );
}

export default function DevelopmentPage() {
  return (
    <div className="min-h-screen text-white pt-32 pb-0 relative font-sans">
      
      {/* Replicated Diagonal Glowing Background */}
      <DiagonalGlowBackground />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Hero Section */}
        <motion.div 
          id="process"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="text-center mb-20 scroll-mt-24"
        >
        
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black tracking-tighter mb-10 leading-[1] text-white">
            How we <span className="text-[#DC143C] italic pr-2">operate.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 font-light max-w-3xl mx-auto leading-relaxed mb-20">
            We don't do cookie-cutter templates. We write <span className="text-white font-medium">high-performance, scalable code</span> that turns complex business problems into seamless digital experiences.
          </p>
          
          <div className="-mx-6 mb-20">
            <TechMarquee />
          </div>

          <HowWeOperateSteps />
        </motion.div>

        <FeedbackLoop />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-24"></div>

        {/* Tech Stack Dependencies */}
        <div id="tech" className="mb-32 relative py-20 rounded-[3rem] border border-white/5 bg-[#030303] overflow-hidden scroll-mt-24">
          {/* Animated Background Lines inside the section */}
          <LightLines 
            className="opacity-40"
            gradientFrom="#030303" 
            gradientTo="#DC143C" 
            lineColor="#ffffff" 
            lightColor="#DC143C" 
            linesOpacity={0.1}
            lightsOpacity={1}
            speedMultiplier={0.7}
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303] pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-6"
          >
            <p className="text-[#DC143C] font-mono text-sm mb-6 uppercase tracking-widest">Dependencies</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">We operate with the latest technologies</h2>
            
            <TechSphere />
          </motion.div>
        </div>


        {/* Portfolio CTA right after Tech stuff */}
        <div className="relative z-10 w-full flex flex-col items-center mt-10 mb-32 py-32 px-6">
          {/* Top/Bottom Cinematic Borders */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC143C]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#DC143C]/80 to-transparent" />
          
          {/* Subtle central glow */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.08)_0%,transparent_60%)] pointer-events-none" />
          
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-12 tracking-tighter uppercase">
              Ready to see the <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DC143C] to-[#ff4d6d] italic pr-2">
                results?
              </span>
            </h2>
          
            <Link href="/portfolio">
              <div className="group relative flex items-center justify-center overflow-hidden p-[1px]">
                {/* Widescreen tech button */}
                <div className="relative bg-[#050505] border border-white/20 group-hover:border-[#DC143C] px-12 py-5 flex items-center gap-4 transition-all duration-300">
                  <div className="absolute inset-0 bg-[#DC143C]/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                  <span className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase relative z-10">Access Portfolio</span>
                  <svg className="w-6 h-6 text-[#DC143C] relative z-10 group-hover:translate-x-2 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Neural Estimator / Pricing */}
      <div id="pricing" className="scroll-mt-24">
        <PricingSection />
      </div>

      {/* Solid black area for the back to home link, connecting seamlessly to Pricing */}
      <div className="w-full bg-[#030303] pt-10 pb-20">
        <div className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
          <div 
            onClick={(e) => {
              e.preventDefault();
              window.dispatchEvent(new CustomEvent('trigger-home-transition'));
            }}
            className="cursor-pointer group flex items-center text-sm font-bold text-white/50 uppercase tracking-widest hover:text-white transition-all duration-300"
          >
            <svg className="w-4 h-4 mr-3 group-hover:-translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
            Back to Home
          </div>
        </div>
      </div>
    </div>
  );
}
