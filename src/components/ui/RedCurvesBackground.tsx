"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const RedCurvesBackground = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 12 layers for incredibly smooth and dense stacking
  const layersCount = 12;

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#020000] z-0 pointer-events-none">
      
      {Array.from({ length: layersCount }).map((_, i) => {
        const size = 30 + (i * 22); // vw
        
        const topOffset = -10 - (i * 2.5); // vw
        const leftOffset = -10 - (i * 4); // vw

        // Exponential light falloff. Back layers receive exponentially less light.
        const lightIntensity = Math.pow(0.85, i); 
        
        // The gradient center shifts slightly for each layer to simulate true 3D curvature relative to a fixed light source
        const lightX = 20 + (i * 1.5);
        const lightY = 20 + (i * 1.5);

        return (
          <motion.div
            key={i}
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 2, 
              delay: i * 0.15, 
              ease: [0.16, 1, 0.3, 1] 
            }}
            className="absolute rounded-full"
            style={{
              width: `${size}vw`,
              height: `${size}vw`,
              top: `${topOffset}vw`,
              left: `${leftOffset}vw`,
              zIndex: 40 - i, 
              
              // Upgraded Lighting & Shadows
              boxShadow: `
                -5px 10px 30px rgba(0, 0, 0, ${0.8 + (i * 0.05)}), 
                -2px 3px 5px rgba(0, 0, 0, 1), 
                inset 1px 2px 3px rgba(255, 120, 120, ${0.8 * lightIntensity}),
                inset 3px 6px 15px rgba(255, 50, 80, ${0.4 * lightIntensity})
              `,
              
              // Photorealistic curved gradient with hot core and deep shadows
              background: `radial-gradient(
                circle at ${lightX}% ${lightY}%, 
                rgba(255, 80, 80, ${lightIntensity}) 0%, 
                rgba(220, 10, 40, ${lightIntensity * 0.9}) 20%, 
                rgba(90, 0, 15, ${lightIntensity * 0.7}) 50%, 
                rgba(10, 0, 0, 1) 85%, 
                #000000 100%
              )`,
            }}
          />
        );
      })}

      {/* Deep Vignette to focus the eye entirely on the center-left light source */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,transparent_30%,rgba(0,0,0,0.8)_80%,rgba(0,0,0,1)_100%)] z-40 pointer-events-none" />
    </div>
  );
};
