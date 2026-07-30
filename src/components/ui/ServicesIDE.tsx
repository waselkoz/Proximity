"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FileJson, FileCode2, Smartphone, 
  Monitor, Database, FileText, Blocks, 
  ChevronRight, Terminal, CheckCircle2
} from "lucide-react";

type TabType = "overview" | "specs" | "deliverables";

type ServiceData = {
  id: string;
  fileName: string;
  icon: React.ElementType;
  title: string;
  overview: string;
  specs: string;
  deliverables: string[];
};

const services: ServiceData[] = [
  {
    id: "fullstack",
    fileName: "full_stack_apps.tsx",
    icon: FileCode2,
    title: "Full Stack Applications",
    overview: "We architect end-to-end digital platforms capable of handling massive scale and complex business logic. From highly responsive React frontends to robust, distributed PostgreSQL databases, we build scalable architectures designed to run your entire enterprise.",
    specs: `{\n  "architecture": "Microservices & Serverless",\n  "frontend": ["React", "Next.js", "TailwindCSS"],\n  "backend": ["Node.js", "Python", "Go"],\n  "database": ["PostgreSQL", "MongoDB", "Redis"],\n  "infrastructure": "AWS / Vercel"\n}`,
    deliverables: [
      "Custom UI/UX System Design",
      "Secure REST & GraphQL APIs",
      "Scalable Database Architecture",
      "End-to-End Encryption & Security",
      "Automated CI/CD Pipelines"
    ]
  },
  {
    id: "ecommerce",
    fileName: "ecommerce_stores.ts",
    icon: FileJson,
    title: "E-Commerce Platforms",
    overview: "High-converting, lightning-fast online storefronts engineered to maximize your revenue. We integrate advanced inventory management, global payment gateways, and highly optimized checkout flows that reduce cart abandonment and drive sales.",
    specs: `{\n  "platforms": ["Custom Headless", "Shopify Plus"],\n  "payments": ["Stripe", "PayPal", "Crypto"],\n  "performance": {\n    "load_time": "< 1.2s",\n    "core_web_vitals": "100/100"\n  },\n  "features": ["Abandoned Cart Recovery", "Dynamic Pricing"]\n}`,
    deliverables: [
      "Headless Commerce Architecture",
      "Custom Payment Gateway Integration",
      "Inventory & Order Management Dashboards",
      "SEO & Conversion Rate Optimization",
      "Automated Email Marketing Hooks"
    ]
  },
  {
    id: "mobile",
    fileName: "mobile_apps.swift",
    icon: Smartphone,
    title: "Mobile Applications",
    overview: "Native and cross-platform mobile experiences that feel seamless and incredibly responsive. Whether it's iOS or Android, we develop applications that leverage device hardware to deliver breathtaking animations and offline capabilities.",
    specs: `{\n  "frameworks": ["React Native", "Flutter", "Swift"],\n  "platforms": ["iOS", "Android", "Tablets"],\n  "capabilities": [\n    "Offline-first Syncing",\n    "Push Notifications",\n    "Biometric Auth",\n    "Hardware Acceleration"\n  ]\n}`,
    deliverables: [
      "Cross-Platform Native Apps",
      "App Store & Google Play Deployment",
      "Real-time Push Notifications",
      "Offline Data Synchronization",
      "Complex State Management"
    ]
  },
  {
    id: "erp",
    fileName: "erp_systems.go",
    icon: Database,
    title: "ERP & Employee Management",
    overview: "Custom enterprise resource planning (ERP) software built to automate your specific internal workflows. Say goodbye to messy spreadsheets. We build bespoke dashboards for HR, inventory, payroll, and analytics that run your entire company.",
    specs: `{\n  "module": "Enterprise Core",\n  "auth": "OAuth 2.0 / SAML SSO",\n  "security_tier": "Enterprise Grade",\n  "data_sync": "Real-time WebSocket",\n  "integrations": ["Salesforce", "SAP", "Workday"]\n}`,
    deliverables: [
      "Custom Internal Dashboards",
      "Role-Based Access Control (RBAC)",
      "Automated Payroll & HR Modules",
      "Live Analytics & Reporting",
      "Legacy System Migration"
    ]
  },
  {
    id: "desktop",
    fileName: "desktop_apps.rs",
    icon: Monitor,
    title: "Desktop Applications",
    overview: "High-performance, OS-native desktop software for Windows, macOS, and Linux. Built with modern tooling like Rust and Electron, our desktop apps tap into native file systems and raw hardware processing for intense computational workloads.",
    specs: `{\n  "technologies": ["Tauri", "Electron", "Rust", "C++"],\n  "os_support": ["Windows", "macOS", "Linux"],\n  "features": [\n    "Native File System Access",\n    "GPU Acceleration",\n    "Offline Processing",\n    "Auto-Updating"\n  ]\n}`,
    deliverables: [
      "Cross-Platform Installers",
      "Native OS Integrations",
      "High-Performance Rust Backends",
      "Secure Local Data Storage",
      "Automated OTA Updates"
    ]
  },
  {
    id: "landing",
    fileName: "landing_pages.html",
    icon: FileText,
    title: "High-Impact Landing Pages",
    overview: "Stunning, immersive landing pages designed for one specific purpose: Conversion. We utilize breathtaking 3D animations, scroll-jacking, and WebGL to create memorable first impressions that capture leads and tell your brand's story.",
    specs: `{\n  "rendering": "Static Site Generation (SSG)",\n  "animations": ["Framer Motion", "GSAP", "Three.js"],\n  "seo": "Technical SEO Optimized",\n  "accessibility": "WCAG 2.1 AA Compliant"\n}`,
    deliverables: [
      "Premium 3D & WebGL Animations",
      "A/B Testing Infrastructure",
      "Lead Capture Integrations",
      "Sub-second Load Times",
      "Advanced SEO Optimization"
    ]
  },
  {
    id: "wordpress",
    fileName: "wordpress_cms.php",
    icon: Blocks,
    title: "WordPress CMS Solutions",
    overview: "Custom WordPress themes and plugins engineered for speed and security. We strip out the bloat of traditional builders and deliver clean, headless or custom-coded WordPress sites that marketing teams can update instantly.",
    specs: `{\n  "architecture": ["Headless WP", "Custom Themes"],\n  "stack": ["PHP 8+", "Next.js Frontend", "GraphQL"],\n  "security": ["Advanced Firewall", "DDoS Protection"],\n  "performance": "CDN Distributed"\n}`,
    deliverables: [
      "Custom Theme Development",
      "Headless WordPress Integration",
      "Plugin Development & Customization",
      "Security Audits & Hardening",
      "Migration & Content Sync"
    ]
  }
];

export default function ServicesIDE() {
  const [activeFileId, setActiveFileId] = useState<string>("fullstack");
  const [activeTab, setActiveTab] = useState<TabType>("overview");

  const activeService = services.find(s => s.id === activeFileId) || services[0];

  return (
    <div className="w-full max-w-7xl mx-auto rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl flex flex-col md:flex-row min-h-[600px] font-sans">
      
      {/* --- SIDEBAR --- */}
      <div className="w-full md:w-72 bg-[#0A0A0A] border-r border-white/5 flex flex-col shrink-0">
        <div className="px-4 py-3 border-b border-white/5 flex items-center gap-2">
          <span className="text-xs font-bold text-white/50 tracking-widest uppercase">Explorer</span>
        </div>
        
        <div className="p-2 flex flex-col gap-1 overflow-y-auto">
          {/* Folder Header */}
          <div className="flex items-center gap-2 px-2 py-1.5 text-white/70">
            <ChevronRight className="w-4 h-4" />
            <span className="text-sm font-semibold">src/services</span>
          </div>
          
          {/* File List */}
          <div className="flex flex-col pl-4 relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/5"></div>
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveFileId(service.id);
                  setActiveTab("overview");
                }}
                className={`flex items-center gap-3 px-3 py-2 text-sm text-left relative transition-colors \${
                  activeFileId === service.id 
                    ? "bg-[#DC143C]/10 text-white" 
                    : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                {activeFileId === service.id && (
                  <motion.div layoutId="activeFileIndicator" className="absolute left-0 top-0 bottom-0 w-0.5 bg-[#DC143C]" />
                )}
                <service.icon className={`w-4 h-4 \${activeFileId === service.id ? "text-[#DC143C]" : "text-white/40"}`} />
                <span className="truncate font-mono">{service.fileName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* --- MAIN EDITOR --- */}
      <div className="flex-1 flex flex-col bg-[#030303] overflow-hidden">
        
        {/* Editor Tabs */}
        <div className="flex bg-[#0A0A0A] border-b border-white/5 overflow-x-auto hide-scrollbar">
          {(["overview", "specs", "deliverables"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 text-sm font-mono relative capitalize transition-colors \${
                activeTab === tab ? "text-white" : "text-white/40 hover:text-white/70"
              }`}
            >
              {activeTab === tab && (
                <motion.div layoutId="activeTabIndicator" className="absolute bottom-0 left-0 right-0 h-px bg-[#DC143C]" />
              )}
              {tab}
            </button>
          ))}
        </div>

        {/* Editor Content Area */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFileId + activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl"
            >
              <div className="mb-8 pb-8 border-b border-white/5">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white flex items-center gap-4">
                  {activeService.title}
                </h1>
                <p className="text-white/40 font-mono text-sm flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#DC143C]" />
                  /src/services/{activeService.fileName}
                </p>
              </div>

              {/* OVERVIEW TAB */}
              {activeTab === "overview" && (
                <div className="space-y-12">
                  
                  {/* Hero Statement */}
                  <div className="border-l-4 border-white pl-6 py-2">
                    <p className="text-xl md:text-3xl leading-snug text-white font-medium tracking-tight">
                      {activeService.overview.split('.')[0]}.
                    </p>
                  </div>

                  {/* Secondary Description */}
                  <p className="text-lg leading-relaxed text-white/60 font-light max-w-3xl">
                    {activeService.overview.split('.').slice(1).join('.').trim()}
                  </p>

                  {/* Structured Value Props */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-white/10">
                    
                    {/* Column 1 */}
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        Our Approach
                      </h4>
                      <p className="text-white/50 leading-relaxed text-sm">
                        We discard cookie-cutter templates. Every line of code is meticulously engineered to ensure unparalleled performance, security, and scalability tailored specifically to your business objectives.
                      </p>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <h4 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#DC143C]"></span>
                        The Proximity Edge
                      </h4>
                      <p className="text-white/50 leading-relaxed text-sm">
                        Sub-second load times, military-grade security architectures, and a completely seamless user experience that guarantees higher conversion rates and maximum engagement.
                      </p>
                    </div>

                  </div>
                </div>
              )}

              {/* SPECS TAB */}
              {activeTab === "specs" && (
                <div className="relative">
                  <div className="absolute top-0 right-0 p-4 font-mono text-xs text-white/20">JSON Payload</div>
                  <pre className="p-6 md:p-8 rounded-xl bg-[#0A0A0A] border border-white/5 font-mono text-sm leading-loose text-[#DC143C] overflow-x-auto shadow-inner">
                    {activeService.specs}
                  </pre>
                </div>
              )}

              {/* DELIVERABLES TAB */}
              {activeTab === "deliverables" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeService.deliverables.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-start gap-3 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#DC143C] shrink-0 mt-0.5" />
                      <span className="text-white/80">{item}</span>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        
        {/* Editor Footer */}
        <div className="bg-[#050505] border-t border-white/5 px-4 py-2 flex items-center justify-between text-xs font-mono text-white/30">
          <div className="flex gap-4">
            <span className="hover:text-white transition-colors cursor-default">UTF-8</span>
            <span className="hover:text-white transition-colors cursor-default">TypeScript React</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>Status: Operational</span>
          </div>
        </div>
      </div>

    </div>
  );
}
