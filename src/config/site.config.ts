export const siteConfig = {
  name: {
    ar: 'جامعة الإمام محمد بن سعود الإسلامية',
    en: 'Imam Muhammad bin Saud Islamic University',
  },
  shortName: {
    ar: 'جامعة الإمام',
    en: 'Imam University',
  },
  description: {
    ar: 'الموقع الرسمي لجامعة الإمام محمد بن سعود الإسلامية - تعليم متميز وبحث علمي رائد',
    en: 'Official website of Imam Muhammad bin Saud Islamic University - Excellence in education and pioneering scientific research',
  },
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://imamu.edu.sa',
  ogImage: '/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/imamu_sa',
    facebook: 'https://facebook.com/imamu.sa',
    instagram: 'https://instagram.com/imamu_sa',
    youtube: 'https://youtube.com/imamu',
    linkedin: 'https://linkedin.com/company/imamu',
  },
  contact: {
    email: 'info@imamu.edu.sa',
    phone: '+966-11-2580000',
    address: {
      ar: 'الرياض، المملكة العربية السعودية',
      en: 'Riyadh, Saudi Arabia',
    },
  },
  social: {
    twitter: '@imamu_sa',
    facebook: 'imamu.sa',
    instagram: 'imamu_sa',
  },
} as const;

export const locales = ['ar', 'en'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'ar';

export const localeNames = {
  ar: 'العربية',
  en: 'English',
} as const;

export const rtlLocales: Locale[] = ['ar'];
export const ltrLocales: Locale[] = ['en'];

export function isRTL(locale: Locale): boolean {
  return rtlLocales.includes(locale);
}

export function getDirection(locale: Locale): 'rtl' | 'ltr' {
  return isRTL(locale) ? 'rtl' : 'ltr';
}
