import HeroSection from '@/components/HeroSection';
import ClientSections from '@/components/ClientSections';

export default async function Home(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const lang = params.lang;
  
  return (
    <>
      <HeroSection lang={lang} />
      <ClientSections lang={lang} />
    </>
  );
}
