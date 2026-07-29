import Link from 'next/link';

export default function CtaSection() {
  return (
    <section id="contact" className="relative py-32 flex items-center justify-center overflow-hidden border-t border-border">
      {/* Uiverse.io Background Pattern (adapted to our palette) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          '--s': '100px',
          '--c1': '#be3231', // primary
          '--c2': '#d64544', // primary-light
          '--c3': '#862423', // primary-dark
          background: `
            repeating-conic-gradient(from 30deg, #0000 0 120deg, var(--c3) 0 180deg) 
            calc(0.5 * var(--s)) calc(0.5 * var(--s) * 0.577),
            repeating-conic-gradient(from 30deg, var(--c1) 0 60deg, var(--c2) 0 120deg, var(--c3) 0 180deg)
          `,
          backgroundSize: 'var(--s) calc(var(--s) * 0.577)'
        } as React.CSSProperties}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto px-10 py-16 text-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white drop-shadow-md">
          Ready to start your next project?
        </h2>
        <p className="text-lg text-white/90 mb-10 drop-shadow-sm">
          Let's collaborate to build something extraordinary. Our team is ready to turn your vision into reality.
        </p>
        <Link 
          href="#contact" 
          className="inline-block px-10 py-4 bg-white text-primary font-bold tracking-wide rounded-full shadow-lg transition-all duration-300 hover:bg-gray-100 hover:-translate-y-1 hover:shadow-2xl"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
