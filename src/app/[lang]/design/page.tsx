import { getDictionary } from '@/dictionaries/getDictionary';
import type { Locale } from '@/dictionaries/i18n-config';
import DesignClient from './DesignClient';

export default async function DesignPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);

  return <DesignClient dict={dict.design} lang={params.lang} />;
}
