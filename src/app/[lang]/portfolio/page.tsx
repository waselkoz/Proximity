import { getDictionary } from '@/dictionaries/getDictionary';
import type { Locale } from '@/dictionaries/i18n-config';
import PortfolioClient from './PortfolioClient';

export default async function PortfolioPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);

  return <PortfolioClient dict={dict.portfolio} lang={params.lang} />;
}
