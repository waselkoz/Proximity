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

const row1 = technologies.slice(0, 10);
const row2 = technologies.slice(10);

export default function TechSphere() {
  const containerVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const itemVariants: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", bounce: 0.4 } 
    }
  };

  const hexPath = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)";

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-2 md:gap-4 my-4 relative z-10">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center items-center gap-2 md:gap-4 w-full"
      >
        {row1.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="relative flex items-center justify-center w-16 h-[74px] md:w-20 md:h-[92px] group cursor-pointer transition-transform"
              style={{ clipPath: hexPath, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div 
                className="absolute inset-[1px] md:inset-[1.5px] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#1A1A1A]"
                style={{ clipPath: hexPath }}
              >
                <Icon 
                  className="w-7 h-7 md:w-9 md:h-9 opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                  style={{ color: tech.color }} 
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center items-center gap-2 md:gap-4 w-full"
      >
        {row2.map((tech, i) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.15, y: -5 }}
              className="relative flex items-center justify-center w-16 h-[74px] md:w-20 md:h-[92px] group cursor-pointer transition-transform"
              style={{ clipPath: hexPath, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div 
                className="absolute inset-[1px] md:inset-[1.5px] bg-[#0A0A0A] flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-[#1A1A1A]"
                style={{ clipPath: hexPath }}
              >
                <Icon 
                  className="w-7 h-7 md:w-9 md:h-9 opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
                  style={{ color: tech.color }} 
                />
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  );
}
