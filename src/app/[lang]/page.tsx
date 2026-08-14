import dynamic from 'next/dynamic';

const ExpertiseSkeleton = () => (
  <div className="w-full min-h-[100dvh] bg-[#000000] flex flex-col items-center justify-center p-8 md:p-16">
    <div className="w-full max-w-6xl space-y-16 animate-pulse flex flex-col items-center">
      <div className="w-2/3 md:w-1/2 h-16 bg-white/10 rounded-2xl" />
      <div className="w-full h-[350px] md:h-[500px] bg-white/5 rounded-[3rem]" />
      <div className="w-full h-[350px] md:h-[500px] bg-white/5 rounded-[3rem]" />
    </div>
  </div>
);

const CtaSkeleton = () => (
  <div className="w-full min-h-[80vh] bg-[#0c0402] animate-pulse flex items-center justify-center p-4">
    <div className="w-full max-w-4xl h-[400px] bg-white/5 rounded-3xl" />
  </div>
);

const HeroSection = dynamic(() => import('@/components/HeroSection'), { 
  ssr: true // Critical above-the-fold content must be SSR'd
});

// Lazily load heavy framer-motion sections on the client to free up the main thread
const ExpertiseSection = dynamic(() => import('@/components/ExpertiseSection'), { 
  ssr: false, 
  loading: () => <ExpertiseSkeleton /> 
});

const CtaSection = dynamic(() => import('@/components/CtaSection'), { 
  ssr: false,
  loading: () => <CtaSkeleton />
});

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  
  return (
    <>
      <HeroSection lang={lang} />
      <ExpertiseSection lang={lang} />
      <CtaSection lang={lang} />
    </>
  );
}
