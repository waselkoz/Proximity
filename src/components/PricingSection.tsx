"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ArrowLeft, ArrowRight, Sparkles, Monitor, Smartphone, Database, LayoutTemplate, FileText, ShoppingCart, CreditCard, Cpu, BarChart3, Globe, Search, ShieldCheck, MessageSquare, Network, Users, Bell, LineChart, TrendingUp, Target, Workflow, Building2, PenTool, Code, Lightbulb, Zap } from "lucide-react";
import { RedCurvesBackground } from "@/components/ui/RedCurvesBackground";

// Data moved inside component
const OptionButton = ({ active, onClick, icon: Icon, label, delay = 0, info }: any) => {
  const [showInfo, setShowInfo] = React.useState(false);

  const toggleInfo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowInfo(!showInfo);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <motion.button 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        whileHover={{ scale: active ? 1.02 : 1.01 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick} 
        className={`w-full group relative flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-[20px] border transition-all duration-300 text-left overflow-hidden ${
          active 
            ? 'bg-gradient-to-br from-[#DC143C]/20 to-[#DC143C]/5 border-[#DC143C]/60 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] z-10 ring-1 ring-[#DC143C]/20' 
            : 'bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.02)]'
        }`}
      >
        <div className={`p-2 md:p-2.5 rounded-xl transition-colors duration-300 ${active ? 'bg-[#DC143C]' : 'bg-white/5 group-hover:bg-white/10'}`}>
          {Icon && <Icon className={`w-4 h-4 md:w-5 md:h-5 ${active ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`} />}
        </div>
        <span className={`text-xs md:text-sm font-semibold tracking-wide flex-1 transition-colors duration-300 ${active ? 'text-white' : 'text-white/60 group-hover:text-white/90'}`}>{label}</span>
        
        {info && (
          <div 
            onClick={toggleInfo}
            className="p-1.5 md:p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer mr-1 z-20 flex items-center justify-center"
          >
            <Lightbulb className={`w-4 h-4 ${showInfo ? 'text-[#DC143C]' : 'text-white/40 hover:text-white'}`} />
          </div>
        )}

        {active && (
          <motion.div initial={{ scale: 0, rotate: -45 }} animate={{ scale: 1, rotate: 0 }} className={info ? "" : "mr-2"}>
            <CheckCircle2 className="w-5 h-5 text-[#DC143C]" />
          </motion.div>
        )}
      </motion.button>
      
      <AnimatePresence>
        {info && showInfo && (
          <motion.div 
            initial={{ opacity: 0, height: 0, marginTop: -8 }}
            animate={{ opacity: 1, height: "auto", marginTop: 0 }}
            exit={{ opacity: 0, height: 0, marginTop: -8 }}
            className="px-4 py-3 bg-white/[0.02] rounded-xl border border-white/5 text-xs text-white/60 leading-relaxed overflow-hidden shadow-inner"
          >
            {info}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function PricingSection({ lang = "en" }: { lang?: string }) {
  const t = (en: string, fr: string) => lang === "fr" ? fr : en;

// Data
const services = [
  { name: t("Websites", "Sites Web"), description: t("Custom, high-performance websites tailored to your unique brand identity.", "Sites Web sur mesure, performants et adaptés à votre identité de marque."), icon: Monitor, features: [t("Bespoke UX/UI interfaces designed in Figma", "Interfaces UX/UI sur mesure conçues sur Figma"), t("Engaging micro-animations and smooth transitions", "Micro-animations engageantes et transitions fluides"), t("Advanced on-page SEO & performance optimization", "SEO avancé on-page et optimisation des performances")] },
  { name: t("Applications", "Applications"), description: t("Scalable web and mobile applications engineered for flawless user experiences.", "Applications web et mobiles évolutives pour des expériences utilisateur parfaites."), icon: Smartphone, features: [t("Modern React / Next.js component architecture", "Architecture moderne de composants React / Next.js"), t("Robust and highly scalable backend integration", "Intégration backend robuste et hautement évolutive"), t("Lightning-fast, native-feeling mobile experience", "Expérience mobile ultra-rapide et native")] },
  { name: t("ERP Software", "Logiciel ERP"), description: t("Robust enterprise resource planning software to manage your operations seamlessly.", "Logiciel ERP robuste pour gérer vos opérations de manière fluide."), icon: Database, features: [t("End-to-end business process automation", "Automatisation complète des processus d'affaires"), t("Real-time data visualization and analytics", "Visualisation des données et analyses en temps réel"), t("Bank-grade security and role-based access", "Sécurité de niveau bancaire et accès basé sur les rôles")] },
  { name: t("Landing Pages", "Pages de Destination"), description: t("High-converting, engaging landing pages built to aggressively boost your campaigns.", "Pages de destination engageantes et à fort taux de conversion pour booster vos campagnes."), icon: LayoutTemplate, features: [t("Data-driven design for maximum conversion rates", "Conception axée sur les données pour un taux de conversion maximal"), t("Rapid delivery tailored for urgent marketing pushes", "Livraison rapide adaptée aux poussées marketing urgentes"), t("A/B testing ready architecture for scaling", "Architecture prête pour les tests A/B pour évoluer")] },
  { name: t("WordPress", "WordPress"), description: t("Easy-to-manage, deeply customizable WordPress solutions for content platforms.", "Solutions WordPress faciles à gérer et hautement personnalisables."), icon: FileText, features: [t("Intuitive and easy-to-use content management", "Gestion de contenu intuitive et facile à utiliser"), t("Custom theme development from scratch", "Développement de thème personnalisé à partir de zéro"), t("Optimized for speed and core web vitals", "Optimisé pour la vitesse et les signaux vitaux du web")] },
  { name: t("E-Commerce", "E-Commerce"), description: t("Secure, conversion-optimized online stores designed to maximize your digital growth.", "Boutiques en ligne sécurisées et optimisées pour la conversion afin de maximiser votre croissance numérique."), icon: ShoppingCart, features: [t("Frictionless and highly optimized checkout flows", "Flux de paiement sans friction et hautement optimisés"), t("Seamless inventory and CRM synchronization", "Synchronisation fluide des stocks et CRM"), t("Secure payment gateway integrations", "Intégrations de passerelles de paiement sécurisées")] }
];

const projectTypes = [
  { id: "Corporate Website", icon: Monitor, label: t("Premium Corporate Website", "Site Web d'Entreprise Premium") },
  { id: "E-Commerce", icon: ShoppingCart, label: t("High-Converting E-Commerce", "E-Commerce à Forte Conversion") },
  { id: "Mobile App", icon: Smartphone, label: t("Native Mobile App (iOS/Android)", "Application Mobile Native (iOS/Android)") },
  { id: "Web App", icon: LayoutTemplate, label: t("Scalable SaaS Web Application", "Application Web SaaS Évolutive") },
  { id: "ERP/CRM", icon: Database, label: t("Bespoke ERP / CRM Software", "Logiciel ERP / CRM Sur Mesure") },
  { id: "Landing Page", icon: FileText, label: t("Data-Driven Landing Page", "Page de Destination Orientée Données") },
];

const desiredFeatures = [
  { id: "Payments", icon: CreditCard, label: t("Payments & E-Commerce", "Paiements & E-Commerce"), info: t("Secure payment gateway integration (Stripe, PayPal, etc.) and full e-commerce workflows.", "Intégration de passerelles de paiement sécurisées et flux e-commerce complets.") },
  { id: "AI", icon: Cpu, label: t("AI & Machine Learning", "IA & Machine Learning"), info: t("Custom AI models, OpenAI integration, predictive analytics, or smart automation.", "Modèles d'IA sur mesure, intégration OpenAI, analyses prédictives.") },
  { id: "Dashboard", icon: BarChart3, label: t("Admin Dashboard", "Tableau de Bord Admin"), info: t("Custom analytics, user management, and operational interface for your team.", "Analyses sur mesure, gestion des utilisateurs et interface opérationnelle.") },
  { id: "Multi-language", icon: Globe, label: t("Multi-Language Support", "Support Multilingue"), info: t("Full internationalization (i18n) for engaging global audiences seamlessly.", "Internationalisation complète (i18n) pour engager une audience mondiale.") },
  { id: "SEO", icon: Search, label: t("Advanced SEO", "SEO Avancé"), info: t("Technical SEO, schema markup, dynamic metadata, and performance optimization.", "SEO technique, métadonnées dynamiques et optimisation des performances.") },
  { id: "Auth", icon: ShieldCheck, label: t("Secure Authentication", "Authentification Sécurisée"), info: t("OAuth, Two-Factor Auth (2FA), and enterprise-grade security protocols.", "OAuth, Auth à deux facteurs (2FA) et sécurité d'entreprise.") },
  { id: "Chat", icon: MessageSquare, label: t("Real-time Chat", "Chat en Temps Réel"), info: t("Live customer support chat, WebSockets, or user-to-user messaging.", "Chat de support client en direct, WebSockets, ou messagerie utilisateur.") },
  { id: "API", icon: Network, label: t("Third-Party API", "API Tierce"), info: t("Connecting your platform with external services, CRMs, or legacy systems.", "Connexion de votre plateforme à des services externes ou systèmes legacy.") },
];

const primaryGoals = [
  { id: "Sales", icon: TrendingUp, label: t("Drive Sales & Revenue", "Augmenter les Ventes & Revenus") },
  { id: "Leads", icon: Target, label: t("Generate Leads", "Générer des Prospects") },
  { id: "Awareness", icon: Globe, label: t("Brand Awareness", "Notoriété de la Marque") },
  { id: "Efficiency", icon: Workflow, label: t("Process Efficiency", "Efficacité des Processus") }
];

const targetAudiences = [
  { id: "B2B", icon: Building2, label: t("B2B (Business to Business)", "B2B (Interentreprises)") },
  { id: "B2C", icon: Users, label: t("B2C (Direct to Consumer)", "B2C (Vente Directe)") },
  { id: "Internal", icon: ShieldCheck, label: t("Internal Staff", "Personnel Interne") },
  { id: "Government", icon: Database, label: t("Government/Public", "Gouvernement/Public") }
];

const budgets = [t("Micro (Under 100k DZD)", "Micro (Moins de 100k DZD)"), t("Growing (100k - 250k DZD)", "Croissance (100k - 250k DZD)"), t("Scale-Up (250k - 500k DZD)", "Scale-Up (250k - 500k DZD)"), t("Corporate (500k - 1M DZD)", "Corporate (500k - 1M DZD)"), t("Enterprise (1M+ DZD)", "Entreprise (1M+ DZD)"), t("To be discussed", "À discuter")];
const timelines = [t("Urgent (ASAP)", "Urgent (Dès que possible)"), t("Fast Track (1-2 Months)", "Rapide (1-2 Mois)"), t("Standard (2-4 Months)", "Standard (2-4 Mois)"), t("Long-Term (4-6+ Months)", "Long-Terme (4-6+ Mois)"), t("Flexible", "Flexible")];
  const [selectedType, setSelectedType] = React.useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = React.useState<string[]>([]);
  const [selectedGoal, setSelectedGoal] = React.useState<string | null>(null);
  const [selectedAudience, setSelectedAudience] = React.useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = React.useState<string | null>(null);
  const [selectedTimeline, setSelectedTimeline] = React.useState<string | null>(null);
  
  const [description, setDescription] = React.useState("");
  const [userEmail, setUserEmail] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);
  
  const [currentStep, setCurrentStep] = React.useState(1);
  const totalSteps = 6;

  const toggleFeature = (id: string) => setSelectedFeatures(prev => prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]);

  const handleDiscuss = async () => {
    if (!userEmail) {
      alert("Please provide your email address so we can get back to you.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await fetch("https://formsubmit.co/ajax/proximityiw2@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Project Inquiry from Proximity Estimator",
            Email: userEmail,
            ProjectType: selectedType || "Not specified",
            Description: description || "No description provided",
            Features: selectedFeatures.length > 0 ? selectedFeatures.join(', ') : "None selected",
            Goal: selectedGoal || "Not specified",
            Audience: selectedAudience || "Not specified",
            Budget: selectedBudget || "Not specified",
            Timeline: selectedTimeline || "Not specified"
        })
      });
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepIcon = () => {
    if (currentStep === 1) return <Monitor className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-md" />;
    if (currentStep === 2) return <Cpu className="w-10 h-10 md:w-16 md:h-16 text-[#DC143C] drop-shadow-md" />;
    if (currentStep === 3) return <Target className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-md" />;
    if (currentStep === 4) return <Users className="w-10 h-10 md:w-16 md:h-16 text-[#DC143C] drop-shadow-md" />;
    if (currentStep === 5) return <CreditCard className="w-10 h-10 md:w-16 md:h-16 text-white drop-shadow-md" />;
    return <Zap className="w-10 h-10 md:w-16 md:h-16 text-[#DC143C] drop-shadow-md" />;
  };

  return (
    <section className="relative w-full py-16 md:py-32 bg-[#020000] overflow-hidden text-white font-sans selection:bg-[#DC143C]/30" id="pricing">
      <RedCurvesBackground />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Expertise Grid */}
        <div className="flex flex-col mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#DC143C]/30 bg-[#DC143C]/10 backdrop-blur-md w-max">
            <Sparkles className="w-4 h-4 text-[#DC143C]" />
            <span className="text-[#DC143C] text-xs font-bold tracking-widest uppercase">{t("Our Capabilities", "Nos Compétences")}</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-5xl md:text-6xl lg:text-[4.5rem] font-black tracking-tighter leading-[1.05] max-w-3xl">
            {t("Engineering digital ", "Ingénierie de ")} <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#DC143C] to-[#8a0011]">{t("excellence.", "l'excellence numérique.")}</span>
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group relative bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/5 hover:border-[#DC143C]/40 hover:bg-[#0c0c0c]/90 rounded-[32px] p-8 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-2xl">
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-2 translate-x-2 group-hover:translate-y-0 group-hover:translate-x-0">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 backdrop-blur-md"><ArrowUpRight className="w-4 h-4 text-white" /></div>
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-white/10 to-transparent rounded-2xl flex items-center justify-center mb-6 border border-white/5 group-hover:border-[#DC143C]/30 group-hover:bg-[#DC143C]/10 transition-all duration-500">
                  <Icon className="w-6 h-6 text-white group-hover:text-[#DC143C] transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">{service.description}</p>
                <div className="space-y-3">
                  {service.features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-xs text-white/40 group-hover:text-white/70 transition-colors">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#DC143C]/30 group-hover:bg-[#DC143C] transition-colors" />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ULTRA-PREMIUM CONFIGURATOR */}
        <div className="mt-20 md:mt-40">
          <div className="mb-8 md:mb-12 flex flex-col items-center text-center px-4">
            <h3 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tighter">{t("Build Your Solution", "Construisez Votre Solution")}</h3>
            <p className="text-white/40 text-sm md:text-lg font-light">{t("Select your parameters to begin the architecture process.", "Sélectionnez vos paramètres pour commencer le processus d'architecture.")}</p>
          </div>

          <div className="w-full bg-[#050505]/80 backdrop-blur-[40px] rounded-3xl md:rounded-[40px] border border-white/5 shadow-2xl overflow-hidden flex flex-col lg:flex-row relative ring-1 ring-white/5">
            
            {/* LEFT: Premium Visualizer */}
            <div className="w-full lg:w-2/5 bg-black/60 border-b lg:border-b-0 lg:border-r border-white/5 p-8 md:p-12 flex flex-col items-center justify-center relative min-h-[300px] md:min-h-[400px]">
              {/* Sleek Dot Grid Background */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%) pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#DC143C]/5 via-transparent to-transparent opacity-50" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 w-40 h-40 md:w-56 md:h-56 flex items-center justify-center"
                >
                  {/* High-tech Rings */}
                  <div className="absolute inset-[-10%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
                  <div className="absolute inset-0 bg-[#DC143C]/5 blur-[30px] rounded-full animate-pulse" />
                  
                  {/* Core Orb */}
                  <div className="relative bg-black/80 w-24 h-24 md:w-36 md:h-36 rounded-full border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-2xl ring-1 ring-white/5">
                    {getStepIcon()}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 md:mt-16 w-full max-w-[220px] relative z-10">
                <div className="flex justify-between text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 mb-3 md:mb-4">
                  <span>{t("Phase ", "Phase ")}{currentStep}</span>
                  <span>{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden p-[1px]">
                  <motion.div className="h-full bg-gradient-to-r from-[#DC143C]/80 to-[#DC143C] rounded-full" initial={{ width: 0 }} animate={{ width: `${(currentStep / totalSteps) * 100}%` }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} />
                </div>
              </div>
            </div>

            {/* RIGHT: Interactive Form */}
            <div className="w-full lg:w-3/5 p-6 md:p-10 lg:p-16 flex flex-col justify-between relative h-[620px] sm:h-[550px] md:h-[600px] bg-gradient-to-br from-white/[0.01] to-transparent">
              <div className="flex-1 overflow-y-auto min-h-0 pr-2 custom-scrollbar">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`form-${currentStep}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full pb-4"
                  >
                  {currentStep === 1 && (
                    <div>
                      <h4 className="text-xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">{t("What are we building?", "Qu'allons-nous construire ?")}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {projectTypes.map((t, i) => (
                          <OptionButton key={t.id} icon={t.icon} label={t.label} active={selectedType === t.id} onClick={() => setSelectedType(t.id)} delay={i * 0.05} />
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div>
                      <h4 className="text-xl md:text-3xl font-black mb-2 tracking-tighter">{t("Desired Features", "Fonctionnalités Souhaitées")}</h4>
                      <p className="text-white/40 mb-6 md:mb-8 text-xs md:text-sm font-light">{t("Select all functionalities that apply to your project.", "Sélectionnez toutes les fonctionnalités qui s'appliquent à votre projet.")}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {desiredFeatures.map((f, i) => (
                          <OptionButton key={f.id} icon={f.icon} label={f.label} info={f.info} active={selectedFeatures.includes(f.id)} onClick={() => toggleFeature(f.id)} delay={i * 0.05} />
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div>
                      <h4 className="text-xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">{t("What is the primary goal?", "Quel est l'objectif principal ?")}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {primaryGoals.map((g, i) => (
                          <OptionButton key={g.id} icon={g.icon} label={g.label} active={selectedGoal === g.id} onClick={() => setSelectedGoal(g.id)} delay={i * 0.05} />
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 4 && (
                    <div>
                      <h4 className="text-xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">{t("Who is the target audience?", "Quel est le public cible ?")}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                        {targetAudiences.map((a, i) => (
                          <OptionButton key={a.id} icon={a.icon} label={a.label} active={selectedAudience === a.id} onClick={() => setSelectedAudience(a.id)} delay={i * 0.05} />
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 5 && (
                    <div>
                      <h4 className="text-xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">{t("Expected Budget (DZD)", "Budget Prévu (DZD)")}</h4>
                      <div className="flex flex-col gap-3 md:gap-4">
                        {budgets.map((b, i) => (
                          <OptionButton key={b} label={b} active={selectedBudget === b} onClick={() => setSelectedBudget(b)} delay={i * 0.05} />
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 6 && (
                    <div className="flex flex-col h-full pb-4">
                      <h4 className="text-xl md:text-3xl font-black mb-6 md:mb-8 tracking-tighter">{t("When do you need it?", "Pour quand en avez-vous besoin ?")}</h4>
                      <div className="flex flex-col gap-3 md:gap-4 mb-8">
                        {timelines.map((t, i) => (
                          <OptionButton key={t} label={t} active={selectedTimeline === t} onClick={() => setSelectedTimeline(t)} delay={i * 0.05} />
                        ))}
                      </div>
                      
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="w-full mt-auto mb-6">
                        <label className="text-sm text-[#DC143C] font-bold tracking-wide uppercase mb-3 block">{t("Project Description", "Description du Projet")}</label>
                        <textarea 
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          placeholder={t("Tell us a bit more about what you want to build...", "Dites-nous un peu plus sur ce que vous voulez construire...")}
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DC143C]/50 focus:ring-1 focus:ring-[#DC143C]/50 transition-all min-h-[100px] resize-y custom-scrollbar"
                        />
                      </motion.div>
                      
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="w-full">
                        <label className="text-sm text-[#DC143C] font-bold tracking-wide uppercase mb-3 block">{t("Your Email Address *", "Votre Adresse E-mail *")}</label>
                        <input 
                          type="email"
                          value={userEmail}
                          onChange={(e) => setUserEmail(e.target.value)}
                          placeholder="hello@example.com"
                          className="w-full bg-white/5 border border-white/10 hover:border-white/20 rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#DC143C]/50 focus:ring-1 focus:ring-[#DC143C]/50 transition-all"
                          required
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center pt-4 md:pt-6 border-t border-white/10 relative z-20 shrink-0">
                {submitSuccess ? (
                  <div className="w-full text-center py-2 flex items-center justify-center gap-3 text-[#DC143C] font-bold">
                    <CheckCircle2 className="w-5 h-5" /> Requirements Submitted Successfully!
                  </div>
                ) : (
                  <>
                    <button onClick={() => setCurrentStep(p => Math.max(1, p - 1))} className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold transition-colors ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    {currentStep < totalSteps ? (
                      <button onClick={() => setCurrentStep(p => Math.min(totalSteps, p + 1))} className="flex items-center gap-2 bg-white text-black px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:scale-105 active:scale-95 transition-transform shadow-md">
                        {t("Next Step ", "Étape Suivante ")} <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button onClick={handleDiscuss} disabled={isSubmitting} className="flex items-center gap-2 bg-[#DC143C] text-white px-6 md:px-8 py-3 md:py-3.5 rounded-full text-xs md:text-sm font-bold hover:bg-white hover:text-[#DC143C] disabled:opacity-50 disabled:hover:bg-[#DC143C] disabled:hover:text-white active:scale-95 transition-all duration-300 border border-[#DC143C]">
                        {isSubmitting ? t("Sending...", "Envoi...") : t("Submit Requirements", "Soumettre les Exigences")} {isSubmitting ? null : <ArrowUpRight className="w-4 h-4" />}
                      </button>
                    )}
                  </>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
