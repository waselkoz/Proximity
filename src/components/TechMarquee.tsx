"use client";

import { motion } from "framer-motion";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiVercel, 
  SiStripe,
  SiPostgresql,
  SiPrisma
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const techIcons = [
  { Icon: SiNextdotjs, name: "Next.js" },
  { Icon: SiReact, name: "React" },
  { Icon: SiTypescript, name: "TypeScript" },
  { Icon: SiTailwindcss, name: "Tailwind CSS" },
  { Icon: SiVercel, name: "Vercel" },
  { Icon: FaAws, name: "AWS" },
  { Icon: SiStripe, name: "Stripe" },
  { Icon: SiPostgresql, name: "PostgreSQL" },
  { Icon: SiPrisma, name: "Prisma" },
];

export default function TechMarquee() {
  // Duplicate array for seamless looping
  const duplicatedIcons = [...techIcons, ...techIcons, ...techIcons];

  return (
    <div className="w-full overflow-hidden bg-[#030303]/50 backdrop-blur-sm border-y border-white/5 py-10 relative z-20">
      {/* Edge Gradients for smooth fade in/out */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none" />
      
      <motion.div
        className="flex items-center gap-16 md:gap-24 w-max transform-gpu"
        animate={{ x: [0, -1000] }} // We'll adjust distance to ensure it loops smoothly
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          // Use CSS calc to ensure smooth loop (width of one set of icons + gap)
          translateX: "0%",
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{ x: "-33.33%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex items-center gap-16 md:gap-24 transform-gpu"
          style={{ willChange: "transform" }}
        >
          {duplicatedIcons.map((tech, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-white/30 hover:text-white transition-colors duration-300 grayscale hover:grayscale-0"
            >
              <tech.Icon className="w-8 h-8 md:w-10 md:h-10" />
              <span className="font-bold tracking-wider uppercase text-sm hidden md:block">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
