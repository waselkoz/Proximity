"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Home, User, Briefcase, Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

// Helper component for navigation links
const NavLink = ({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) => (
  <Link 
    href={href} 
    className="group flex items-center gap-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors whitespace-nowrap"
  >
    <Icon className="w-4 h-4 opacity-70 group-hover:opacity-100" />
    <span>{label}</span>
  </Link>
)

export function NotchNavbar({ className, ...props }: React.HTMLAttributes<HTMLElement> & { logo?: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Navigation items configuration
  const items = {
    left: [
      { label: "Home", href: "/", icon: Home },
      { label: "Services", href: "#services", icon: Briefcase }
    ],
    right: [
      { label: "About", href: "#about", icon: User },
      { label: "Contact", href: "#contact", icon: Mail }
    ]
  }

  return (
    <>
      <header className={cn("fixed top-0 inset-x-0 z-50 h-16 flex px-0", className)} {...props}>
        
        {/* Left Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-black z-20 relative min-w-0">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
          </svg>
        </div>

        {/* Responsive Notch Container - 3 Slices */}
        <div className="flex h-16 relative z-10 shrink-0 -ml-px">
          
          {/* Left Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-black" style={{ clipPath: "path('M0 0 H50 V64 C25 64 25 40 0 40 Z')" }} />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 39.5 C25 39.5 25 63.5 50 63.5" fill="none" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
              <path d="M0 36.5 C25 36.5 25 60.5 50 60.5" fill="none" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
            </svg>
          </div>

          {/* Center Slice (Flexible Content Area) */}
          <div className="flex-1 h-full relative min-w-0 -ml-px">
             {/* Background & Lines Layer */}
             <div className="absolute inset-0 bg-black">
                 <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
                   <line x1="0" y1="63.5" x2="100%" y2="63.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
                   <line x1="0" y1="60.5" x2="100%" y2="60.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
                 </svg>
             </div>

             {/* Content Layer */}
             <div className="relative w-full h-full flex items-end justify-between pb-2 px-4 md:px-8">
               
               {/* Desktop Left Nav */}
               <nav className="hidden md:flex gap-8 mb-1 shrink-0">
                {items.left.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
              </nav>

              {/* Mobile Menu Button (Left) */}
              <button 
                className="md:hidden mb-1 p-1 text-white/60 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

              {/* Logo (Center) */}
              <div className="flex justify-center shrink-0 mx-2 md:mx-6 mb-1 translate-y-1">
                {props.logo || (
                  <Link href="/" className="flex items-center justify-center relative group p-2">
                    {/* Intentionally left empty as per user request */}
                  </Link>
                )}
              </div>

              {/* Desktop Right Nav */}
              <nav className="hidden md:flex gap-6 items-center shrink-0">
                {items.right.map(item => (
                  <NavLink key={item.label} {...item} />
                ))}
                
                <div className="flex gap-4 pl-4 border-l border-white/20 shrink-0 items-center">
                  <Link href="#contact" className="px-4 py-1.5 text-sm font-medium text-white bg-primary rounded-2xl hover:bg-primary-light transition-colors shadow-sm whitespace-nowrap">
                    Let's Talk
                  </Link>
                </div>
              </nav>

             </div>
          </div>

          {/* Right Slice (Corner) */}
          <div className="w-[50px] h-full relative shrink-0 -ml-px">
            {/* Glass Background */}
            <div className="absolute inset-0 bg-black" style={{ clipPath: "path('M0 0 H50 V40 C25 40 25 64 0 64 Z')" }} />
            {/* Outlines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 50 64">
              <path d="M0 63.5 C25 63.5 25 39.5 50 39.5" fill="none" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
              <path d="M0 60.5 C25 60.5 25 36.5 50 36.5" fill="none" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
            </svg>
          </div>

        </div>

        {/* Right Side Bar - Flexible width */}
        <div className="flex-1 h-10 bg-black z-20 relative min-w-0 -ml-px">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <line x1="0" y1="39.5" x2="100%" y2="39.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
            <line x1="0" y1="36.5" x2="100%" y2="36.5" stroke="currentColor" strokeOpacity={0.15} strokeWidth={0.5} className="text-white" />
          </svg>
        </div>

      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 bg-black border-b border-white/20 p-4 md:hidden shadow-lg"
          >
             <nav className="flex flex-col gap-2">
               {/* Combine all items */}
               {[...items.left, ...items.right].map(item => (
                 <Link 
                   key={item.label} 
                   href={item.href}
                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors"
                   onClick={() => setIsMobileMenuOpen(false)}
                 >
                   <item.icon className="w-5 h-5 text-white opacity-70" />
                   <span className="font-medium text-white">{item.label}</span>
                 </Link>
               ))}
               <div className="h-px bg-white/20 my-2" />
               <div className="flex flex-col gap-2">
                 <Link 
                    href="#contact" 
                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-primary text-white font-medium mt-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                 >
                   Let's Talk
                 </Link>
               </div>
             </nav>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
