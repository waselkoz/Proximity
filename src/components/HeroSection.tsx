import React from 'react';
import Image from 'next/image';
import MorphText from '@/components/ui/morph-text';
import { LightLines } from '@/components/ui/light-lines';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-white">
      <LightLines
        gradientFrom="#ffffff"
        gradientTo="#ffffff"
        lineColor="#000000"
        lightColor="#DC143C"
        className="z-0"
      >
        <div className="container mx-auto flex flex-col items-center justify-center text-center space-y-2 z-10 fade-in py-20 px-4 h-full">
          
          {/* Logo */}
          <div className="relative w-80 h-40 md:w-[28rem] md:h-56 -mb-8 md:-mb-12">
            <Image
              src="/logo.jpg"
              alt="Proximity Logo"
              fill
              className="object-contain hover:scale-105 transition-transform duration-700 ease-out mix-blend-multiply"
              priority
            />
          </div>

          {/* Morphing Text Hero */}
          <div className="w-full max-w-4xl mx-auto">
            <MorphText 
              words={["PROXIMITY", "INNOVATION", "EXCELLENCE"]} 
              subtext="Driving the future of digital experiences"
              fontSize="clamp(2.5rem, 8vw, 6rem)"
            />
          </div>
          
        </div>
      </LightLines>
    </section>
  );
}