import React from "react";

// Helper component for all custom SVG icons to maintain consistent sizing and scaling
const BaseSvg = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {children}
  </svg>
);

// 1. Web / Browsers
export const IconWeb = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    {/* Background window */}
    <rect x="25" y="20" width="60" height="45" rx="4" stroke="currentColor" strokeWidth="4" strokeOpacity="0.4" />
    <path d="M25 32H85" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" />
    {/* Foreground neon window */}
    <rect x="15" y="40" width="60" height="45" rx="4" stroke="#DC143C" strokeWidth="4" fill="#DC143C" fillOpacity="0.1" />
    <path d="M15 52H75" stroke="#DC143C" strokeWidth="2" />
    <circle cx="23" cy="46" r="2" fill="#DC143C" />
    <circle cx="31" cy="46" r="2" fill="#DC143C" />
    <path d="M35 65L55 65" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
  </BaseSvg>
);

// 2. Mobile / Smartphone
export const IconMobile = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <rect x="30" y="10" width="40" height="80" rx="8" stroke="currentColor" strokeWidth="4" />
    <path d="M45 18H55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <rect x="35" y="25" width="30" height="50" rx="2" stroke="#DC143C" strokeWidth="2" fill="#DC143C" fillOpacity="0.1" />
    <circle cx="50" cy="82" r="3" fill="currentColor" />
    {/* Floating data node */}
    <circle cx="75" cy="40" r="4" fill="#DC143C" />
    <path d="M65 40L71 40" stroke="#DC143C" strokeWidth="2" />
  </BaseSvg>
);

// 3. Database / Servers
export const IconDatabase = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <ellipse cx="50" cy="25" rx="25" ry="10" stroke="currentColor" strokeWidth="4" />
    <path d="M25 25V50C25 55.5 36.2 60 50 60C63.8 60 75 55.5 75 50V25" stroke="currentColor" strokeWidth="4" />
    <path d="M25 50V75C25 80.5 36.2 85 50 85C63.8 85 75 80.5 75 75V50" stroke="#DC143C" strokeWidth="4" fill="#DC143C" fillOpacity="0.1" />
    {/* Server blinking lights */}
    <circle cx="40" cy="42" r="2" fill="currentColor" />
    <circle cx="50" cy="42" r="2" fill="currentColor" />
    <circle cx="60" cy="42" r="2" fill="#DC143C" />
    <circle cx="40" cy="67" r="2" fill="#DC143C" />
    <circle cx="50" cy="67" r="2" fill="#DC143C" />
  </BaseSvg>
);

// 4. Shopping Cart / E-Commerce
export const IconCart = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M15 25H25L32 60H75L82 35H30" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="38" cy="75" r="5" stroke="#DC143C" strokeWidth="4" />
    <circle cx="68" cy="75" r="5" stroke="#DC143C" strokeWidth="4" />
    {/* Action lines */}
    <path d="M45 45H65" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    <path d="M50 55H60" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
  </BaseSvg>
);

// 5. AI / Machine Learning
export const IconAI = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    {/* Central Core */}
    <circle cx="50" cy="50" r="12" stroke="#DC143C" strokeWidth="4" fill="#DC143C" fillOpacity="0.2" />
    <circle cx="50" cy="50" r="4" fill="#DC143C" />
    {/* Neural Links */}
    <path d="M50 38V20 M50 62V80 M38 50H20 M62 50H80 M41.5 41.5L25 25 M58.5 58.5L75 75 M58.5 41.5L75 25 M41.5 58.5L25 75" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
    {/* Outer Nodes */}
    <circle cx="50" cy="20" r="6" stroke="currentColor" strokeWidth="3" />
    <circle cx="50" cy="80" r="6" stroke="currentColor" strokeWidth="3" />
    <circle cx="20" cy="50" r="6" stroke="currentColor" strokeWidth="3" />
    <circle cx="80" cy="50" r="6" stroke="currentColor" strokeWidth="3" />
    <circle cx="25" cy="25" r="4" fill="currentColor" />
    <circle cx="75" cy="75" r="4" fill="currentColor" />
  </BaseSvg>
);

// 6. Security / Auth
export const IconSecurity = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M50 15L20 25V45C20 65 50 85 50 85C50 85 80 65 80 45V25L50 15Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <circle cx="50" cy="45" r="10" stroke="#DC143C" strokeWidth="4" />
    <path d="M50 45V55" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    {/* Cyber circuit traces */}
    <path d="M20 45H35" stroke="currentColor" strokeWidth="2" />
    <path d="M80 45H65" stroke="currentColor" strokeWidth="2" />
  </BaseSvg>
);

// 7. Analytics / Dashboard
export const IconAnalytics = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M15 80H85" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <rect x="25" y="55" width="10" height="25" rx="2" stroke="currentColor" strokeWidth="3" />
    <rect x="45" y="35" width="10" height="45" rx="2" stroke="currentColor" strokeWidth="3" />
    <rect x="65" y="15" width="10" height="65" rx="2" stroke="#DC143C" strokeWidth="3" fill="#DC143C" fillOpacity="0.2" />
    {/* Floating trend line */}
    <path d="M15 65L30 45L50 50L70 15L85 5" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </BaseSvg>
);

// 8. Globe / Web App
export const IconGlobe = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="4" />
    <ellipse cx="50" cy="50" rx="15" ry="35" stroke="currentColor" strokeWidth="2" />
    <path d="M15 50H85" stroke="#DC143C" strokeWidth="4" />
    <path d="M25 30H75 M25 70H75" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
  </BaseSvg>
);

// 9. Users / Roles
export const IconUsers = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <circle cx="35" cy="40" r="12" stroke="currentColor" strokeWidth="4" />
    <path d="M15 75C15 65 25 55 35 55C40 55 45 57 50 60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    
    <circle cx="65" cy="50" r="10" stroke="#DC143C" strokeWidth="4" />
    <path d="M50 85C50 75 58 68 65 68C75 68 85 75 85 85" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    
    <circle cx="50" cy="20" r="4" fill="currentColor" />
    <path d="M50 24V30" stroke="currentColor" strokeWidth="2" />
  </BaseSvg>
);

// 10. Code / Custom Software
export const IconCode = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M35 25L15 50L35 75" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M65 25L85 50L65 75" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M55 20L45 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    {/* Glowing particles */}
    <circle cx="25" cy="50" r="3" fill="#DC143C" />
    <circle cx="75" cy="50" r="3" fill="currentColor" />
  </BaseSvg>
);

// 11. Design / Pen
export const IconDesign = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M75 15L85 25L45 65L30 70L35 55L75 15Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <path d="M65 25L75 35" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    <path d="M30 70L15 85" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    {/* Bezier nodes */}
    <circle cx="15" cy="85" r="4" fill="currentColor" />
    <circle cx="85" cy="25" r="4" fill="currentColor" />
    <path d="M20 50 C 20 20, 50 20, 50 20" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" fill="transparent" />
  </BaseSvg>
);

// 12. Speed / MVP Builder
export const IconSpeed = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M55 15L25 55H50L45 85L75 45H50L55 15Z" stroke="#DC143C" strokeWidth="4" fill="#DC143C" fillOpacity="0.1" strokeLinejoin="round" />
    {/* Motion lines */}
    <path d="M15 45H35 M20 30H40 M15 60H30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </BaseSvg>
);

// 13. Target / Leads
export const IconTarget = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="4" strokeDasharray="10 10" />
    <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="4" />
    <circle cx="50" cy="50" r="5" fill="#DC143C" />
    {/* Crosshairs */}
    <path d="M50 5V30 M50 95V70 M5 50H30 M95 50H70" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
  </BaseSvg>
);

// 14. Money / Payments
export const IconMoney = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <rect x="20" y="30" width="60" height="40" rx="6" stroke="currentColor" strokeWidth="4" />
    <path d="M20 45H80" stroke="currentColor" strokeWidth="4" />
    <circle cx="35" cy="58" r="4" fill="#DC143C" />
    <path d="M50 58H70" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" />
    {/* Floating crypto/coin */}
    <circle cx="80" cy="25" r="12" stroke="#DC143C" strokeWidth="3" fill="#000" />
    <path d="M78 18V32 M82 18V32 M75 25H85" stroke="#DC143C" strokeWidth="2" />
  </BaseSvg>
);

// 15. Chat / Notifications
export const IconChat = ({ className }: { className?: string }) => (
  <BaseSvg className={className}>
    <path d="M20 30C20 20 30 15 50 15C70 15 80 20 80 30C80 40 70 45 50 45C45 45 35 48 25 55C25 55 25 45 20 40C15 35 20 30 20 30Z" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
    <path d="M80 50C85 52 85 58 85 58C80 62 80 70 80 70C90 65 95 60 90 55C85 50 75 50 75 50" stroke="#DC143C" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="40" cy="30" r="3" fill="currentColor" />
    <circle cx="50" cy="30" r="3" fill="#DC143C" />
    <circle cx="60" cy="30" r="3" fill="currentColor" />
  </BaseSvg>
);
