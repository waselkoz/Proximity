"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, Cloud, Database, Cpu } from "lucide-react";

export default function ArchitectureFlow({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;
  return (
    <div className="w-full relative py-20 rounded-[3rem] border border-white/5 bg-[#030303] overflow-hidden mb-32 z-10 shadow-2xl">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,20,60,0.05)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 mb-16">
        <p className="text-[#DC143C] font-mono text-sm mb-6 uppercase tracking-widest">{t("Case Study", "Étude de Cas")}</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">{t("High-Performance Architecture", "Architecture Haute Performance")}</h2>
        <p className="text-white/50 max-w-2xl mx-auto">
          {t("We engineer systems that scale effortlessly. From global edge caching to robust database indexing, every request is optimized for speed and reliability.", "Nous concevons des systèmes qui évoluent sans effort. De la mise en cache globale à l'indexation robuste des bases de données, chaque requête est optimisée pour la vitesse et la fiabilité.")}
        </p>
      </div>

      <div className="relative w-full max-w-5xl mx-auto px-6 h-[400px] flex items-center justify-between flex-col md:flex-row gap-10 md:gap-0">
        
        {/* Animated Data Line (Desktop) */}
        <div className="hidden md:block absolute top-1/2 left-24 right-24 h-[2px] bg-white/10 -translate-y-1/2">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-[#DC143C] shadow-[0_0_15px_#DC143C]"
            initial={{ width: "0%", left: "0%" }}
            animate={{ width: ["0%", "30%", "0%"], left: ["0%", "70%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Client */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 flex flex-col items-center gap-4 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] w-48"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <MonitorSmartphone className="w-8 h-8 text-white/80" />
          </div>
          <span className="font-bold tracking-wide">{t("Client", "Client")}</span>
          <span className="text-xs text-[#DC143C] font-mono">React / Next.js</span>
        </motion.div>

        {/* Edge / CDN */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative z-10 flex flex-col items-center gap-4 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(220,20,60,0.1)] w-48"
        >
          <div className="w-16 h-16 rounded-full bg-[#DC143C]/10 flex items-center justify-center border border-[#DC143C]/30">
            <Cloud className="w-8 h-8 text-[#DC143C]" />
          </div>
          <span className="font-bold tracking-wide">{t("Global Edge", "Global Edge")}</span>
          <span className="text-xs text-white/50 font-mono">{t("CDN & Caching", "CDN & Cache")}</span>
        </motion.div>

        {/* Server */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative z-10 flex flex-col items-center gap-4 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] w-48"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <Cpu className="w-8 h-8 text-white/80" />
          </div>
          <span className="font-bold tracking-wide">{t("API Layer", "Couche API")}</span>
          <span className="text-xs text-white/50 font-mono">{t("Serverless / Node", "Serverless / Node")}</span>
        </motion.div>

        {/* Database */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative z-10 flex flex-col items-center gap-4 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(255,255,255,0.05)] w-48"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
            <Database className="w-8 h-8 text-white/80" />
          </div>
          <span className="font-bold tracking-wide">{t("Database", "Base de Données")}</span>
          <span className="text-xs text-white/50 font-mono">Postgres / Redis</span>
        </motion.div>

      </div>
    </div>
  );
}
