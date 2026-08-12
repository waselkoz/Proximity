import { getDictionary } from '@/dictionaries/getDictionary';
import type { Locale } from '@/dictionaries/i18n-config';
import VideoClient from './VideoClient';

export default async function VideoPage(props: { params: Promise<{ lang: string }> }) {
  const params = await props.params;
  const dict = await getDictionary(params.lang as Locale);

  return <VideoClient dict={dict.video} lang={params.lang} />;
}
