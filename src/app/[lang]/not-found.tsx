import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030303_100%)] z-10 pointer-events-none" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff 2px)', backgroundSize: '100% 4px' }} />
      
      <div className="relative z-20 text-center max-w-2xl px-6">
        <h1 className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20 mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-[#DC143C]">Page Not Found</h2>
        <p className="text-white/60 mb-10 text-lg">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white/5 border border-white/10 hover:border-[#DC143C]/50 hover:bg-[#DC143C]/10 transition-all duration-300 rounded-full font-medium tracking-wide"
        >
          <MoveLeft className="mr-3 w-5 h-5" />
          Return to Home
        </Link>
      </div>
    </div>
  );
}
