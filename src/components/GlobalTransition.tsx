"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate, stagger } from "framer-motion";
import { useRouter } from "next/navigation";
import CodeRain from "@/components/ui/CodeRain";

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
            
            // 1. Terminal window scales in (like opening a sleek app)
            await animate("#dev-terminal-window", 
              { scale: 1, opacity: 1, y: 0 }, 
              { type: "spring", bounce: 0.4, duration: 0.8 }
            );
            
            // 2. Rapidly reveal log lines with a slight slide-in
            animate(".dev-log", { opacity: 1, x: 0 }, { duration: 0.1, delay: stagger(0.1) });
            
            // Progressively fill the loading bar
            await animate("#terminal-progress", { width: ["0%", "100%"] }, { duration: 0.6, ease: "easeOut", delay: 0.3 });
            
            // Navigate in background
            router.push("/development");
            await new Promise(r => setTimeout(r, 200));

            // 3. System Glitch / Overload Shake
            await animate("#dev-terminal-window", { 
              x: [0, -15, 15, -10, 10, -5, 5, 0],
              y: [0, 10, -10, 5, -5, 2, -2, 0],
              filter: ["hue-rotate(0deg) contrast(1)", "hue-rotate(90deg) contrast(2)", "hue-rotate(-90deg) contrast(2)", "hue-rotate(0deg) contrast(1)"]
            }, { duration: 0.25 });

            // 4. CRT Power Off effect
            animate("#dev-terminal-window", { opacity: 0 }, { duration: 0.05 });
            await animate("#crt-flash", { scaleY: 0.005, opacity: 1 }, { duration: 0.1 });
            await animate("#crt-flash", { scaleX: 0, opacity: 0 }, { duration: 0.15 });
            
            await animate("#dev-terminal", { opacity: 0 }, { duration: 0.3 });

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
          id="dev-terminal"
          className="absolute inset-0 z-[9999] flex items-center justify-center bg-[#020202] overflow-hidden"
        >
          {/* Matrix Code Rain Backdrop */}
          <CodeRain className="opacity-20" durationMultiplier={0.5} />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000_100%)] z-10 pointer-events-none" />

          <motion.div 
            id="dev-terminal-window"
            className="w-11/12 h-[80vh] md:w-3/4 md:h-3/4 bg-[#030303] border border-white/10 rounded-xl flex flex-col font-mono overflow-hidden relative shadow-[0_0_80px_rgba(220,20,60,0.3)] z-20"
            style={{ scale: 0.8, opacity: 0, y: 50 }}
          >
            {/* CRT Scanlines */}
            <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_51%)] bg-[length:100%_4px] z-10" />
            <div className="absolute inset-0 pointer-events-none opacity-20 shadow-[inset_0_0_100px_rgba(0,0,0,1)] z-10" />

            {/* Terminal Header */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2 bg-[#0A0A0A] relative z-20">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_5px_#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_5px_#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_5px_#27C93F]" />
              <span className="ml-4 text-white/30 text-[10px] md:text-xs font-bold tracking-widest uppercase">root@proximity-engine ~ /build</span>
            </div>
            
            {/* Terminal Content */}
            <div className="p-6 md:p-10 flex flex-col gap-3 relative z-20 font-medium text-sm md:text-base">
              <motion.div className="dev-log text-white/50" style={{ opacity: 0, x: -10 }}>
                <span className="text-[#DC143C]">{'❯'}</span> SYSTEM BOOT SEQUENCE INITIATED...
              </motion.div>
              <motion.div className="dev-log text-blue-400" style={{ opacity: 0, x: -10 }}>
                [INFO] Allocating memory blocks 0x000F4... OK
              </motion.div>
              <motion.div className="dev-log text-yellow-400" style={{ opacity: 0, x: -10 }}>
                [WARN] Deprecated API usage detected in core.ts (ignoring for build)
              </motion.div>
              <motion.div className="dev-log text-white/80" style={{ opacity: 0, x: -10 }}>
                <span className="text-[#DC143C]">{'❯'}</span> COMPILING ARCHITECTURE 
                <div className="inline-block ml-4 w-32 h-3 bg-white/10 relative overflow-hidden align-middle">
                  <motion.div id="terminal-progress" className="absolute top-0 left-0 h-full bg-[#DC143C]" style={{ width: "0%" }} />
                </div>
                <span className="inline-block ml-2 text-[#DC143C]/60 text-xs">OK</span>
              </motion.div>
              <motion.div className="dev-log text-green-400 font-bold" style={{ opacity: 0, x: -10 }}>
                [SUCCESS] Build completed in 0.42s.
              </motion.div>
              <motion.div className="dev-log text-white" style={{ opacity: 0, x: -10 }}>
                <span className="text-[#DC143C]">{'❯'}</span> Executing deployment protocols<motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ repeat: Infinity, duration: 0.6 }}
                  className="inline-block w-3 h-5 bg-[#DC143C] align-middle ml-2 shadow-[0_0_8px_#DC143C]"
                />
              </motion.div>
            </div>
          </motion.div>
          
          {/* CRT Power-off flash layer */}
          <motion.div 
            id="crt-flash"
            className="absolute inset-0 bg-white z-[60]"
            style={{ scaleY: 0, opacity: 0 }}
          />
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
