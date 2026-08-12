"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { User, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  sender: 'client' | 'proximity';
  text: string;
  delay: number; // milliseconds after previous message
};

// Moved inside component to access lang

export default function FeedbackLoop({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px -20% 0px", once: true });
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const chatSequence: Message[] = [
    { id: "msg1", sender: "client", text: t("Looks great so far. Can we try a darker theme?", "Ça a l'air super pour l'instant. Pouvons-nous essayer un thème plus sombre ?"), delay: 800 },
    { id: "msg2", sender: "proximity", text: t("Done i will send you how it look like", "Fait, je vais vous envoyer à quoi ça ressemble"), delay: 1200 },
    { id: "msg3", sender: "client", text: t("Wow, that was fast. The hero section is good, but can we make it pop more?", "Wow, c'était rapide. La section hero est bien, mais pouvons-nous la faire ressortir davantage ?"), delay: 1500 },
    { id: "msg4", sender: "proximity", text: t("does this suit your liking?", "est-ce que cela vous convient ?"), delay: 1000 },
    { id: "msg5", sender: "client", text: t("This is absolutely perfect. Let's launch it.", "C'est absolument parfait. Lançons-le."), delay: 1800 },
    { id: "msg6", sender: "proximity", text: t("i will send you the link when its ready", "je vous enverrai le lien quand ce sera prêt"), delay: 800 },
  ];

  useEffect(() => {
    if (!isInView) return;

    let currentMsg = 0;
    
    const playSequence = async () => {
      while (currentMsg < chatSequence.length) {
        setIsTyping(true);
        // Wait for the specific delay of the next message to simulate typing
        await new Promise(resolve => setTimeout(resolve, chatSequence[currentMsg].delay));
        
        setIsTyping(false);
        setVisibleMessages(prev => prev + 1);
        currentMsg++;

        // Brief pause after sending before next person starts typing
        if (currentMsg < chatSequence.length) {
           await new Promise(resolve => setTimeout(resolve, 300));
        }
      }
    };

    playSequence();
  }, [isInView]);

  return (
    <section className="w-full py-32 relative flex flex-col items-center justify-center z-20 overflow-hidden">
      
      <div className="max-w-4xl w-full mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-5/12 text-center md:text-left"
        >
         
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white leading-tight">
            {t("We deliver it exactly how ", "Nous le livrons exactement comme ")} <span className="text-[#DC143C] italic font-black">{t("YOU", "VOUS")}</span> {t(" like.", " le souhaitez.")}
          </h2>
          <p className="text-lg text-white/50 font-light leading-relaxed">
            {t("We don't limit revisions. We collaborate with you in real-time, rapidly implementing feedback until the final product aligns perfectly with your vision. No friction, just results. We also provide a fully structured video/manual on how to use the website or application.", "Nous ne limitons pas les révisions. Nous collaborons avec vous en temps réel, mettant rapidement en œuvre les retours jusqu'à ce que le produit final s'aligne parfaitement avec votre vision. Aucune friction, que des résultats. Nous fournissons également une vidéo/manuel entièrement structuré sur l'utilisation du site web ou de l'application.")}
          </p>
        </motion.div>

        {/* Right Chat Interface */}
        <div 
          ref={containerRef}
          className="w-full md:w-7/12 relative bg-[#050505]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl h-[480px] flex flex-col"
        >
          {/* Mac window dots */}
          <div className="flex gap-2 mb-6 pb-4 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>

          {/* Chat Messages Area */}
          <div className="flex-1 overflow-y-auto pr-2 space-y-6 flex flex-col justify-end">
            <AnimatePresence>
              {chatSequence.slice(0, visibleMessages).map((msg, index) => {
                const isClient = msg.sender === 'client';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, type: "spring", bounce: 0.4 }}
                    className={cn(
                      "flex items-end gap-3 max-w-[85%]",
                      isClient ? "self-start" : "self-end flex-row-reverse"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border overflow-hidden",
                      isClient ? "bg-white/5 border-white/10 text-white/50" : "bg-black border-white/10"
                    )}>
                      {isClient ? <User className="w-4 h-4" /> : <img src="/logo.jpg" alt="Proximity" className="w-full h-full object-contain scale-110" />}
                    </div>
                    <div className={cn(
                      "px-5 py-3 rounded-2xl text-sm md:text-base font-medium leading-relaxed",
                      isClient 
                        ? "bg-white/5 border border-white/10 text-white rounded-bl-sm" 
                        : "bg-gradient-to-br from-[#DC143C] to-[#990e2a] text-white rounded-br-sm shadow-[0_5px_15px_rgba(220,20,60,0.2)]"
                    )}>
                      {msg.text}
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className={cn(
                    "flex items-end gap-3 w-fit mt-4",
                    chatSequence[visibleMessages]?.sender === 'client' ? "self-start" : "self-end flex-row-reverse"
                  )}
                >
                  <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center shrink-0 border opacity-50 overflow-hidden",
                      chatSequence[visibleMessages]?.sender === 'client' ? "bg-white/5 border-white/10 text-white/50" : "bg-black border-white/10"
                  )}>
                    {chatSequence[visibleMessages]?.sender === 'client' ? <User className="w-4 h-4" /> : <img src="/logo.jpg" alt="Proximity" className="w-full h-full object-contain scale-110" />}
                  </div>
                  <div className="px-5 py-4 rounded-2xl bg-white/5 border border-white/10 flex gap-1.5 items-center">
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-white/40" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
