"use client";

import { useEffect } from "react";
import { RotateCcw } from "lucide-react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#030303] text-white flex flex-col items-center justify-center relative font-sans">
      <div className="relative z-20 text-center max-w-2xl px-6">
        <div className="w-20 h-20 bg-[#DC143C]/10 border border-[#DC143C]/30 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(220,20,60,0.2)]">
          <span className="text-[#DC143C] text-4xl font-bold">!</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-white mb-6">
          Something went wrong
        </h1>
        <p className="text-white/60 mb-10 text-lg">
          We apologize for the inconvenience. An unexpected error has occurred.
        </p>
        
        <button 
          onClick={() => reset()}
          className="inline-flex items-center justify-center px-8 py-4 bg-[#DC143C] text-white hover:bg-[#be1032] transition-colors duration-300 rounded-full font-medium tracking-wide shadow-[0_0_20px_rgba(220,20,60,0.3)] hover:shadow-[0_0_30px_rgba(220,20,60,0.5)]"
        >
          <RotateCcw className="mr-3 w-5 h-5" />
          Try Again
        </button>
      </div>
    </div>
  );
}
