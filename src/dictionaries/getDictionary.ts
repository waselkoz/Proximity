import type { Locale } from './i18n-config';

// Dummy dictionary for now so the build passes
const dictionaries = {
  en: () => Promise.resolve({ video: {}, design: {}, portfolio: {} }),
  fr: () => Promise.resolve({ video: {}, design: {}, portfolio: {} }),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.en();
};
