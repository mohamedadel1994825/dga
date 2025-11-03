import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist, Geist_Mono, IBM_Plex_Sans_Arabic } from 'next/font/google';
import '../globals.css';
import 'platformscode-new-react/dist/style.css';
import '../../src/theme/theme-variables.css';
import LanguageProvider from '../../src/providers/LanguageProvider';
import QueryProvider from '@/providers/QueryProvider';
import { ThemeProvider } from '@/theme';

const Geist_Sans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const Geist_Mono_Font = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const IBM_Arabic = IBM_Plex_Sans_Arabic({
  variable: '--font-arabic',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
});

// Supported locales
const locales = ['ar', 'en'] as const;
type Locale = (typeof locales)[number];

export function generateStaticParams() {
  return locales.map(locale => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isRTL = locale === 'ar';

  return {
    title: {
      template: `%s | ${isRTL ? 'جامعة الإمام محمد بن سعود الإسلامية' : 'Imam University'}`,
      default: isRTL
        ? 'جامعة الإمام محمد بن سعود الإسلامية'
        : 'Imam University',
    },
    description: isRTL
      ? 'الموقع الرسمي لجامعة الإمام محمد بن سعود الإسلامية'
      : 'Official website of Imam Muhammad bin Saud Islamic University',
    openGraph: {
      locale: isRTL ? 'ar_SA' : 'en_US',
      alternateLocale: isRTL ? 'en_US' : 'ar_SA',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const isRTL = locale === 'ar';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body
        className={`${Geist_Sans.variable} ${Geist_Mono_Font.variable} ${IBM_Arabic.variable} antialiased`}
        suppressHydrationWarning
      >
        <QueryProvider>
          <ThemeProvider>
            <LanguageProvider initialLocale={locale}>
              {children}
            </LanguageProvider>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
