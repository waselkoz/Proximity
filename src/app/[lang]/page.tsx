import dynamic from 'next/dynamic';

const HeroSection = dynamic(() => import('@/components/HeroSection'), { ssr: true });
const ExpertiseSection = dynamic(() => import('@/components/ExpertiseSection'), { ssr: true });
const CtaSection = dynamic(() => import('@/components/CtaSection'), { ssr: true });

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
