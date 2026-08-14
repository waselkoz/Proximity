"use client";

import React from "react";
import { motion } from "framer-motion";

const CODE_FRAGMENTS = [
  "const", "=>", "{...}", "</div>", "return", "await", 
  "import", "fetch()", "next()", "React", "function()",
  "export", "default", "interface", "type", "useEffect()",
  "useState()", "className", "props"
];

export default function CodeRain({ className = "", durationMultiplier = 1 }: { className?: string, durationMultiplier?: number }) {
  const [isMobile, setIsMobile] = React.useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  
  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isMobile) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none z-0 ${className}`}>
      {CODE_FRAGMENTS.map((text, i) => (
        <motion.div
          key={i}
          className="absolute font-mono font-black whitespace-nowrap"
          style={{ textShadow: "0 0 8px rgba(220,20,60,0.4)" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 2000, opacity: [0, 1, 1, 0] }}
          transition={{
            duration: (3 + (i % 5)) * durationMultiplier,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "linear",
          }}
          style={{ 
            left: `${(i * 13) % 90 + 5}%`,
            fontSize: `${10 + (i % 12)}px`,
            color: i % 3 === 0 ? 'rgba(220,20,60,0.8)' : (i % 2 === 0 ? 'rgba(255,255,255,0.2)' : 'rgba(220,20,60,0.4)'),
            textShadow: "0 0 8px rgba(220,20,60,0.4)"
          }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
