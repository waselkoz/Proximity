"use client";

import { motion } from "framer-motion";

import { 
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, 
  SiPython, SiPostgresql, SiMongodb, 
  SiGraphql, SiDocker, SiWordpress,
  SiFlutter, SiExpo, SiMysql, SiTailwindcss,
  SiFigma, SiVercel
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";

// 19 core technologies for the complete sphere
const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "WordPress", icon: SiWordpress, color: "#21759B" },
  // Newly added mobile & modern frontend
  { name: "React Native", icon: SiReact, color: "#61DAFB" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
  // Bonus to complete the 19 slots
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#000000" },
];

// Coordinates for a 19-hexagon perfect sphere (radius 2)
// W=100px, H=115px.
// X offset = 105, Y offset = 90
const hexGrid = [
  // Center row (5)
  { x: 0, y: 0 }, { x: 105, y: 0 }, { x: -105, y: 0 }, { x: 210, y: 0 }, { x: -210, y: 0 },
  // Row +1 (4)
  { x: 52.5, y: 90 }, { x: -52.5, y: 90 }, { x: 157.5, y: 90 }, { x: -157.5, y: 90 },
  // Row -1 (4)
  { x: 52.5, y: -90 }, { x: -52.5, y: -90 }, { x: 157.5, y: -90 }, { x: -157.5, y: -90 },
  // Row +2 (3)
  { x: 0, y: 180 }, { x: 105, y: 180 }, { x: -105, y: 180 },
  // Row -2 (3)
  { x: 0, y: -180 }, { x: 105, y: -180 }, { x: -105, y: -180 }
];

export default function TechSphere() {
  const hexPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  // Container animation to handle staggering efficiently (only 1 IntersectionObserver)
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: "spring", bounce: 0.4, duration: 0.6 } 
    }
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center my-10 overflow-visible">
      {/* Central Glowing Core */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#DC143C] rounded-full blur-[120px] pointer-events-none z-0" 
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative w-[100px] h-[115px] z-10"
      >
        {hexGrid.map((pos, i) => {
          const tech = i < technologies.length ? technologies[i] : null;
          const isFilled = !!tech;
          
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              className="absolute top-0 left-0 w-[100px] h-[115px] group cursor-pointer will-change-transform"
              style={{
                x: pos.x,
                y: pos.y,
                clipPath: hexPath,
                backgroundColor: isFilled ? 'rgba(20, 20, 20, 0.8)' : 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <div 
                className="absolute inset-[1px] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#1A1A1A]"
                style={{ clipPath: hexPath }}
              >
                {tech && (
                  <>
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="flex flex-col items-center justify-center gap-2"
                    >
                      {(() => {
                        const Icon = tech.icon;
                        return (
                          <Icon 
                            className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]" 
                            style={{ color: tech.color }}
                          />
                        );
                      })()}
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
