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
            
            // 1. Laser shoots across slowly and smoothly
            await Promise.all([
              animate("#dev-laser-path", { pathLength: 1, opacity: 1 }, { duration: 0.6, ease: [0.16, 1, 0.3, 1] }),
              animate("#dev-laser-glow", { pathLength: 1, opacity: 1 }, { duration: 0.6, ease: [0.16, 1, 0.3, 1] })
            ]);
            
            // 2. The laser detonates into a cinematic textured energy burst
            await Promise.all([
              animate(".dev-flash-top", { opacity: 1 }, { duration: 0.3, ease: "easeOut" }),
              animate(".dev-flash-bottom", { opacity: 1 }, { duration: 0.3, ease: "easeOut" }),
              animate("#dev-laser-path", { strokeWidth: ["3px", "50px", "0px"], opacity: [1, 1, 0] }, { duration: 0.4 }),
              animate("#dev-laser-glow", { strokeWidth: ["12px", "100px", "0px"], opacity: [0.6, 1, 0] }, { duration: 0.4 })
            ]);
            
            // Route swap happens completely hidden behind the solid energy burst
            router.push("/development");
            await new Promise(r => setTimeout(r, 500)); // Give React enough time to safely render
            
            // 3. The slice slides apart with a very majestic, slow glide
            await Promise.all([
              // Top half slides diagonally Up-Left
              animate(".dev-flash-top", { y: "-60%", x: "-15%", opacity: 0 }, { duration: 1.5, ease: [0.22, 1, 0.36, 1] }),
              // Bottom half slides diagonally Down-Right
              animate(".dev-flash-bottom", { y: "60%", x: "15%", opacity: 0 }, { duration: 1.5, ease: [0.22, 1, 0.36, 1] })
            ]);

          } else if (transitionType === "design") {
            router.prefetch("/design");

            animate(".design-cell", { scale: 0, opacity: 0 }, { duration: 0 });

            await animate(".design-cell", 
              { scale: 1.05, opacity: 1 }, 
              { duration: 0.3, ease: "backOut", delay: stagger(0.015, { from: "first" }) }
            );

            router.push("/design");
            await new Promise(r => setTimeout(r, 500));

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
            await new Promise(r => setTimeout(r, 500));

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
            await new Promise(r => setTimeout(r, 500));

            await animate("#layer-dark", { opacity: [1, 0] }, { duration: 0.5 });
          }
        } catch (e: unknown) {
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
      {/* Dev Transition Layers (Cinematic Energy Slice) */}
      {transitionType === "dev" && (
        <div className="absolute inset-0 z-[9999] overflow-hidden pointer-events-none drop-shadow-[0_0_15px_rgba(220,20,60,0.2)]">
          
          {/* Top Half of the Cinematic Flash */}
          <motion.div 
            className="dev-flash-top absolute inset-0 bg-gradient-to-br from-[#4A0815] to-[#050505]"
            style={{ 
              clipPath: "polygon(0 0, 100% 0, 100% 30%, 0 70%)",
              opacity: 0,
              willChange: "transform, opacity"
            }}
          >
             {/* Technical grid overlay */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
             {/* Inner cinematic dark gradient */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-transparent to-transparent" />
          </motion.div>
          
          {/* Bottom Half of the Cinematic Flash */}
          <motion.div 
            className="dev-flash-bottom absolute inset-0 bg-gradient-to-br from-[#050505] to-[#4A0815]"
            style={{ 
              clipPath: "polygon(0 70%, 100% 30%, 100% 100%, 0 100%)",
              opacity: 0,
              willChange: "transform, opacity"
            }}
          >
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
             <div className="absolute inset-0 bg-gradient-to-bl from-black/80 via-transparent to-transparent" />
          </motion.div>
          
          {/* Glowing Laser - High Performance SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-50 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
             {/* Cheaper Glow effect (no drop-shadows) */}
             <motion.line 
                id="dev-laser-glow"
                x1="0" y1="70" x2="100" y2="30" 
                stroke="#DC143C" 
                strokeWidth="12" 
                style={{ pathLength: 0, opacity: 0, filter: "blur(6px)" }}
                vectorEffect="non-scaling-stroke"
             />
             {/* Core Laser */}
             <motion.line 
                id="dev-laser-path"
                x1="0" y1="70" x2="100" y2="30" 
                stroke="#fff" 
                strokeWidth="3" 
                style={{ pathLength: 0, opacity: 0 }}
                vectorEffect="non-scaling-stroke"
             />
          </svg>
        </div>
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
      
      {/* Home Transition Layer */}
      <motion.div id="layer-dark" className="absolute inset-0 bg-[#050505] z-[9999] pointer-events-none" style={{ opacity: 0 }} />
    </div>
  );
}
