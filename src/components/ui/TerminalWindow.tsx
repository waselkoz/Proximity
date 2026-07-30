"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeLines = [
  "import { createDigitalExperience } from '@proximity/core';",
  "",
  "const buildReality = async () => {",
  "  const app = await createDigitalExperience({",
  "    performance: 'blazing-fast',",
  "    design: 'breathtaking',",
  "    scale: 'infinite'",
  "  });",
  "",
  "  return app.render();",
  "};",
  "",
  "buildReality();"
];

export default function TerminalWindow() {
  const [displayedCode, setDisplayedCode] = useState("");
  const [phase, setPhase] = useState<"typing" | "compiling" | "compiled">("typing");
  const [cursorBlink, setCursorBlink] = useState(true);

  // Typewriter effect
  useEffect(() => {
    if (phase !== "typing") return;
    
    const fullText = codeLines.join('\n');
    let currentIndex = 0;
    
    const intervalId = setInterval(() => {
      setDisplayedCode(fullText.substring(0, currentIndex));
      currentIndex++;
      
      if (currentIndex > fullText.length) {
        clearInterval(intervalId);
        setTimeout(() => setPhase("compiling"), 800);
      }
    }, 30);
    
    return () => clearInterval(intervalId);
  }, [phase]);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setCursorBlink(b => !b), 500);
    return () => clearInterval(interval);
  }, []);

  // The user requested it stays on "compiling reality" indefinitely.
  // We do not transition to "compiled" anymore.

  // Pseudo syntax highlighting helper
  const highlightCode = (line: string) => {
    return line
      .replace(/import/g, '<span class="text-blue-400">import</span>')
      .replace(/from/g, '<span class="text-blue-400">from</span>')
      .replace(/const/g, '<span class="text-blue-400">const</span>')
      .replace(/async/g, '<span class="text-blue-400">async</span>')
      .replace(/await/g, '<span class="text-blue-400">await</span>')
      .replace(/return/g, '<span class="text-blue-400">return</span>')
      .replace(/createDigitalExperience/g, '<span class="text-yellow-300">createDigitalExperience</span>')
      .replace(/buildReality/g, '<span class="text-blue-300">buildReality</span>')
      .replace(/'@proximity\/core'/g, '<span class="text-green-400">\'@proximity/core\'</span>')
      .replace(/'blazing-fast'/g, '<span class="text-green-400">\'blazing-fast\'</span>')
      .replace(/'breathtaking'/g, '<span class="text-green-400">\'breathtaking\'</span>')
      .replace(/'infinite'/g, '<span class="text-green-400">\'infinite\'</span>')
      .replace(/performance:/g, '<span class="text-[#DC143C]">performance:</span>')
      .replace(/design:/g, '<span class="text-[#DC143C]">design:</span>')
      .replace(/scale:/g, '<span class="text-[#DC143C]">scale:</span>');
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/10 bg-[#0A0A0A]/80 backdrop-blur-2xl shadow-[0_0_50px_rgba(220,20,60,0.15)] relative z-20">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-3 bg-[#111]/80 border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-xs font-mono text-white/40 tracking-wider">proximity_engine.ts</div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 md:p-8 relative min-h-[350px] md:min-h-[420px] flex flex-col text-left">
        <AnimatePresence mode="wait">
          {phase !== "compiled" ? (
            <motion.div 
              key="code"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              transition={{ duration: 0.5 }}
              className="font-mono text-sm md:text-base text-white/80 whitespace-pre"
            >
              {displayedCode.split('\n').map((line, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: highlightCode(line) || ' ' }} />
              ))}
              <span className={`inline-block w-2.5 h-4 md:h-5 ml-1 align-middle bg-[#DC143C] ${cursorBlink ? 'opacity-100' : 'opacity-0'}`}></span>
              
              {phase === "compiling" && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 text-[#DC143C] font-bold flex items-center gap-3 font-sans"
                >
                  <div className="w-4 h-4 border-2 border-[#DC143C] border-t-transparent rounded-full animate-spin"></div>
                  Compiling reality...
                </motion.div>
              )}
            </motion.div>
          ) : (
            <motion.div 
              key="ui"
              initial={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-[#0F0F0F] to-[#050505] rounded-b-2xl border-t border-white/5"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.1),transparent_70%)] pointer-events-none" />
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full max-w-sm border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl shadow-2xl relative z-10"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DC143C] to-red-900 mb-6 flex items-center justify-center shadow-[0_0_20px_rgba(220,20,60,0.4)]">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">Digital Reality</h3>
                <p className="text-white/50 text-sm mb-8 leading-relaxed">Experience successfully compiled and ready for infinite scale.</p>
                
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: "100%" }} 
                    transition={{ duration: 1.5, delay: 0.8, ease: "circOut" }}
                    className="h-full bg-gradient-to-r from-[#DC143C] to-red-400"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
