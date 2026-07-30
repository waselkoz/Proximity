"use client";

import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import { useRouter } from "next/navigation";

export default function GlobalTransition() {
  const [isActive, setIsActive] = useState(false);
  const [scope, animate] = useAnimate();
  const router = useRouter();

  useEffect(() => {
    const handleTrigger = () => setIsActive(true);
    window.addEventListener("trigger-dev-transition", handleTrigger);
    return () => window.removeEventListener("trigger-dev-transition", handleTrigger);
  }, []);

  useEffect(() => {
    if (isActive) {
      const runAnimation = async () => {
        router.prefetch("/development");

        const fullScreen = "circle(3000px at 50% 50%)";
        const zeroScreen = "circle(0px at 50% 50%)";
        const ballSize = "circle(50px at 50% 50%)";

        // 1. The 3 layers sweep in to completely cover the old page
        await Promise.all([
          animate("#layer-dark", { clipPath: [zeroScreen, fullScreen] }, { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0 }),
          animate("#layer-black", { clipPath: [zeroScreen, fullScreen] }, { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.15 }),
          animate("#layer-crimson", { clipPath: [zeroScreen, fullScreen] }, { duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.3 })
        ]);

        // Hide underneath layers so they don't get in the way
        animate("#layer-dark", { opacity: 0 }, { duration: 0 });
        animate("#layer-black", { opacity: 0 }, { duration: 0 });

        // 2. NAVIGATE NOW while the screen is fully crimson!
        router.push("/development");

        // Give Next.js time to unmount the old page and mount the new page underneath
        await new Promise(r => setTimeout(r, 200));

        // 3. Shrink away completely, revealing the NEW page smoothly
        await animate("#layer-crimson", 
          { clipPath: zeroScreen }, 
          { type: "spring", bounce: 0.1, duration: 1 }
        );
        
        setIsActive(false);
      };

      runAnimation();
    }
  }, [isActive, animate, router]);

  if (!isActive) return null;

  return (
    <div ref={scope} className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
      <motion.div
        id="layer-dark"
        className="transition-layer absolute inset-0 bg-[#0F0F0F]"
        style={{ clipPath: "circle(0px at 50% 50%)" }}
      />
      <motion.div
        id="layer-black"
        className="transition-layer absolute inset-0 bg-[#000000]"
        style={{ clipPath: "circle(0px at 50% 50%)" }}
      />
      <motion.div
        id="layer-crimson"
        className="transition-layer absolute inset-0 bg-[#DC143C]"
        style={{ clipPath: "circle(0px at 50% 50%)" }}
      />
    </div>
  );
}
