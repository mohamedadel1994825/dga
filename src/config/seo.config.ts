import type { Metadata } from 'next';
import type { Locale } from './site.config';
import { siteConfig } from './site.config';

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  openGraph: {
    title: string;
    description: string;
    type: 'website' | 'article';
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
    }>;
  };
  twitter: {
    card: 'summary_large_image';
    title: string;
    description: string;
    images: string[];
  };
  robots: {
    index: boolean;
    follow: boolean;
    googleBot: {
      index: boolean;
      follow: boolean;
      'max-video-preview': number;
      'max-image-preview': string;
      'max-snippet': number;
    };
  };
  alternates: {
    canonical: string;
    languages: Record<Locale, string>;
  };
}

export function generateSEOMetadata(
  locale: Locale,
  path: string = '',
  customConfig?: Partial<SEOConfig>
): Metadata {
  const isRTL = locale === 'ar';
  const baseUrl = siteConfig.url;
  const fullUrl = `${baseUrl}/${locale}${path}`;

  const defaultConfig: SEOConfig = {
    title: isRTL
      ? `${siteConfig.name.ar} - ${siteConfig.description.ar}`
      : `${siteConfig.name.en} - ${siteConfig.description.en}`,
    description: siteConfig.description[locale],
    keywords: isRTL
      ? [
          'جامعة الإمام',
          'جامعة الإمام محمد بن سعود',
          'التعليم العالي',
          'الجامعات السعودية',
        ]
      : [
          'Imam University',
          'Imam Muhammad bin Saud',
          'Higher Education',
          'Saudi Universities',
        ],
    openGraph: {
      title: siteConfig.name[locale],
      description: siteConfig.description[locale],
      type: 'website',
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: siteConfig.name[locale],
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.name[locale],
      description: siteConfig.description[locale],
      images: [`${baseUrl}/og-image.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: fullUrl,
      languages: {
        ar: `${baseUrl}/ar${path}`,
        en: `${baseUrl}/en${path}`,
      },
    },
  };

  const finalConfig = { ...defaultConfig, ...customConfig };

  return {
    title: {
      template: `%s | ${siteConfig.name[locale]}`,
      default: siteConfig.name[locale],
    },
    description: finalConfig.description,
    keywords: finalConfig.keywords,
    openGraph: {
      ...finalConfig.openGraph,
      locale: isRTL ? 'ar_SA' : 'en_US',
      alternateLocale: isRTL ? 'en_US' : 'ar_SA',
      url: fullUrl,
      siteName: siteConfig.name[locale],
    },
    twitter: finalConfig.twitter,
    robots: finalConfig.robots,
    alternates: finalConfig.alternates,
    metadataBase: new URL(baseUrl),
  };
}

export const defaultSEOKeywords = {
  ar: [
    'جامعة الإمام محمد بن سعود الإسلامية',
    'جامعة الإمام',
    'التعليم العالي',
    'الجامعات السعودية',
    'الدراسات الإسلامية',
    'البحث العلمي',
    'الرياض',
    'السعودية',
  ],
  en: [
    'Imam Muhammad bin Saud Islamic University',
    'Imam University',
    'Higher Education',
    'Saudi Universities',
    'Islamic Studies',
    'Scientific Research',
    'Riyadh',
    'Saudi Arabia',
  ],
} as const;
