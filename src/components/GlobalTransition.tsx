"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { useRouter } from "next/navigation";

export default function GlobalTransition() {
  const [isActive, setIsActive] = useState(false);
  const [transitionType, setTransitionType] = useState<"dev" | "design" | "video" | "home" | null>(null);
  const [scope, animate] = useAnimate();
  const router = useRouter();

  useEffect(() => {
    const handleDevTrigger = () => {
      setTransitionType("dev");
      setIsActive(true);
    };
    
    const handleDesignTrigger = () => {
      setTransitionType("design");
      setIsActive(true);
    };

    const handleVideoTrigger = () => {
      setTransitionType("video");
      setIsActive(true);
    };

    const handleHomeTrigger = () => {
      setTransitionType("home");
      setIsActive(true);
    };

    window.addEventListener("trigger-dev-transition", handleDevTrigger);
    window.addEventListener("trigger-design-transition", handleDesignTrigger);
    window.addEventListener("trigger-video-transition", handleVideoTrigger);
    window.addEventListener("trigger-home-transition", handleHomeTrigger);
    
    return () => {
      window.removeEventListener("trigger-dev-transition", handleDevTrigger);
      window.removeEventListener("trigger-design-transition", handleDesignTrigger);
      window.removeEventListener("trigger-video-transition", handleVideoTrigger);
      window.removeEventListener("trigger-home-transition", handleHomeTrigger);
    };
  }, []);

  useEffect(() => {
    if (isActive && transitionType) {
      const runAnimation = async () => {
        try {
          if (transitionType === "dev") {
            router.prefetch("/development");
            
            // 1. Grid fades in and scales up slightly
            await animate("#blueprint-grid", 
              { opacity: 1, scale: 1 }, 
              { duration: 0.5, ease: "easeOut" }
            );
            
            // 2. Lines draw themselves in (staggered) & Cursors trace
            animate(".blueprint-line-h", { scaleX: 1, opacity: 1 }, { duration: 0.6, delay: stagger(0.1) });
            animate(".blueprint-cursor-h", { left: ["0%", "100%"], opacity: [0, 1, 1, 0] }, { duration: 0.6, delay: stagger(0.1) });
            
            animate(".blueprint-line-v", { scaleY: 1, opacity: 1 }, { duration: 0.6, delay: stagger(0.1) });
            await animate(".blueprint-cursor-v", { top: ["0%", "100%"], opacity: [0, 1, 1, 0] }, { duration: 0.6, delay: stagger(0.1) });
            
            // 3. Nodes pulse and Data appears
            animate(".blueprint-node", { scale: [0, 1.2, 1], opacity: 1 }, { duration: 0.4, delay: stagger(0.05) });
            animate(".blueprint-data", { opacity: [0, 1, 0.5], x: 0 }, { duration: 0.4, delay: stagger(0.05) });
            
            // 3.5 Sidebar slides in
            animate("#ide-sidebar", { x: "0%", opacity: 1 }, { type: "spring", bounce: 0, duration: 0.4 });
            await animate(".ide-log", { opacity: 1, x: 0 }, { duration: 0.2, delay: stagger(0.1) });

            // Navigate in background
            router.push("/development");
            await new Promise(r => setTimeout(r, 200));

            // 4. Grid flashes and expands out to reveal page
            animate("#ide-sidebar", { opacity: 0, x: "20%" }, { duration: 0.2 });
            await animate("#blueprint-container", { scale: 1.1, opacity: 0, filter: "brightness(2)" }, { duration: 0.4, ease: "easeIn" });

          } else if (transitionType === "design") {
            router.prefetch("/design");

            animate(".design-cell", { scale: 0, opacity: 0 }, { duration: 0 });

            await animate(".design-cell", 
              { scale: 1.05, opacity: 1 }, 
              { duration: 0.3, ease: "backOut", delay: stagger(0.015, { from: "first" }) }
            );

            router.push("/design");
            await new Promise(r => setTimeout(r, 200));

            await animate(".design-cell", 
              { scale: 0, opacity: 0 }, 
              { duration: 0.3, ease: "backIn", delay: stagger(0.015, { from: "last", ease: "linear" }) }
            );
          } else if (transitionType === "video") {
            router.prefetch("/video");

            // 1. Playhead scrubs IN (Left -> Right) leaving a black rendered layer
            await Promise.all([
              animate("#video-playhead", { left: "0%", opacity: 1 }, { duration: 0 }),
              animate("#video-wipe", { width: "0%", left: "0%", opacity: 1 }, { duration: 0 }),
            ]);

            animate("#video-playhead", { left: "100%" }, { duration: 0.6, ease: "easeInOut" });
            await animate("#video-wipe", { width: "100%" }, { duration: 0.6, ease: "easeInOut" });

            // 2. Navigate while screen is fully black
            router.push("/video");
            await new Promise(r => setTimeout(r, 200));

            // 3. Playhead scrubs OUT (Right -> Left) revealing the new page underneath
            // Animating width back to 0% pulls the right edge to the left, following the playhead!
            animate("#video-playhead", { left: "0%" }, { duration: 0.6, ease: "easeInOut" });
            await animate("#video-wipe", { width: "0%" }, { duration: 0.6, ease: "easeInOut" });

            // Hard reset
            animate("#video-wipe", { opacity: 0 }, { duration: 0 });
            animate("#video-playhead", { opacity: 0 }, { duration: 0 });
          } else if (transitionType === "home") {
            router.prefetch("/");

            // Simple fade to black for going home
            await animate("#layer-dark", { opacity: [0, 1] }, { duration: 0.5 });
            
            router.push("/");
            await new Promise(r => setTimeout(r, 200));

            await animate("#layer-dark", { opacity: [1, 0] }, { duration: 0.5 });
          }
        } catch (e: any) {
          console.error("Transition Animation Error:", e);
          // If it fails, force navigation anyway so it doesn't break the site
          if (transitionType) {
            if (transitionType === "home") {
              router.push("/");
            } else {
              router.push(`/${transitionType === "dev" ? "development" : transitionType}`);
            }
          }
        } finally {
          setIsActive(false);
          setTransitionType(null);
        }
      };

      runAnimation();
    }
  }, [isActive, transitionType, animate, router]);

  if (!isActive) return null;

  return (
    <div ref={scope} className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center overflow-hidden">
      {/* Dev Transition Layers */}
      {transitionType === "dev" && (
        <motion.div
          id="blueprint-container"
          className="absolute inset-0 z-[9999] flex items-center justify-center bg-[#050505] overflow-hidden"
        >
          {/* Blueprint Background Grid */}
          <motion.div 
            id="blueprint-grid"
            className="absolute inset-0 opacity-0 scale-95"
            style={{ 
              backgroundImage: `linear-gradient(rgba(220, 20, 60, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 20, 60, 0.1) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Glowing structural elements */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh]">
            {/* Horizontal Lines */}
            {[20, 40, 60, 80].map((top, i) => (
              <div key={`h-container-${i}`} className="absolute left-0 right-0 h-[1px]" style={{ top: `${top}%` }}>
                <motion.div 
                  className="blueprint-line-h absolute inset-0 bg-gradient-to-r from-transparent via-[#DC143C] to-transparent shadow-[0_0_10px_#DC143C] origin-left"
                  style={{ scaleX: 0, opacity: 0 }}
                />
                <motion.div 
                  className="blueprint-cursor-h absolute top-1/2 -translate-y-1/2 w-4 h-1 bg-white shadow-[0_0_10px_#fff,0_0_20px_#DC143C]"
                  style={{ left: "0%", opacity: 0 }}
                />
              </div>
            ))}
            
            {/* Vertical Lines */}
            {[20, 40, 60, 80].map((left, i) => (
              <div key={`v-container-${i}`} className="absolute top-0 bottom-0 w-[1px]" style={{ left: `${left}%` }}>
                <motion.div 
                  className="blueprint-line-v absolute inset-0 bg-gradient-to-b from-transparent via-[#DC143C] to-transparent shadow-[0_0_10px_#DC143C] origin-top"
                  style={{ scaleY: 0, opacity: 0 }}
                />
                <motion.div 
                  className="blueprint-cursor-v absolute left-1/2 -translate-x-1/2 w-1 h-4 bg-white shadow-[0_0_10px_#fff,0_0_20px_#DC143C]"
                  style={{ top: "0%", opacity: 0 }}
                />
              </div>
            ))}

            {/* Nodes at intersections */}
            {[20, 40, 60, 80].map((top) => (
              [20, 40, 60, 80].map((left) => {
                const hexCode = `0x${Math.floor(Math.random() * 4095).toString(16).toUpperCase().padStart(3, '0')}`;
                return (
                  <div key={`node-container-${top}-${left}`} className="absolute" style={{ top: `${top}%`, left: `${left}%` }}>
                    <motion.div 
                      className="blueprint-node absolute w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#fff,0_0_20px_#DC143C] -translate-x-1/2 -translate-y-1/2"
                      style={{ scale: 0, opacity: 0 }}
                    />
                    <motion.div
                      className="blueprint-data absolute top-2 left-2 font-mono text-[8px] text-[#DC143C] tracking-widest whitespace-nowrap"
                      style={{ opacity: 0, x: -5 }}
                    >
                      {hexCode} <span className="text-green-500">[OK]</span>
                    </motion.div>
                  </div>
                );
              })
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-10 left-10 font-mono text-[#DC143C] text-sm uppercase tracking-widest"
          >
            [ BUILDING ARCHITECTURE ]
          </motion.div>

          {/* IDE Debugger Sidebar Overlay */}
          <motion.div
            id="ide-sidebar"
            className="absolute top-0 right-0 bottom-0 w-64 bg-black/60 backdrop-blur-xl border-l border-white/10 p-6 font-mono text-xs flex flex-col gap-2 z-50"
            style={{ x: "100%", opacity: 0 }}
          >
            <div className="text-white/50 mb-4 pb-2 border-b border-white/10">DEBUG CONSOLE</div>
            <motion.div className="ide-log text-[#DC143C]" style={{ opacity: 0, x: 10 }}>{'>'} compiling core...</motion.div>
            <motion.div className="ide-log text-white/70" style={{ opacity: 0, x: 10 }}>{'>'} resolving layouts...</motion.div>
            <motion.div className="ide-log text-white/70" style={{ opacity: 0, x: 10 }}>{'>'} building chunks...</motion.div>
            <motion.div className="ide-log text-green-500 mt-2" style={{ opacity: 0, x: 10 }}>{'>'} 200 OK</motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Design Transition Layers (Pixel Grid Stagger) */}
      {transitionType === "design" && (
        <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0">
          {Array.from({ length: 100 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="design-cell bg-[#DC143C] origin-center w-full h-full shadow-[0_0_10px_rgba(220,20,60,0.5)]" 
              style={{ scale: 0, opacity: 0 }} 
            />
          ))}
        </div>
      )}

      {/* Video Transition Layers (Timeline Playhead & Hard Cut) - Rendered unconditionally to prevent querySelector misses */}
      <motion.div id="video-wipe" className="absolute top-0 bottom-0 left-0 bg-[#050505] z-40" style={{ width: "0%", opacity: 0 }} />
      <motion.div id="video-playhead" className="absolute top-0 bottom-0 w-[2px] bg-[#DC143C] shadow-[0_0_20px_#DC143C] z-50 -translate-x-1/2" style={{ left: "0%", opacity: 0 }} />
    </div>
  );
}
