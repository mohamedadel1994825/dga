import { setupI18n } from '@lingui/core';
import { messages as arMessages } from './locales/ar/messages';
import { messages as enMessages } from './locales/en/messages';

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

export const i18n = setupI18n({
  locale: defaultLocale,
  locales: [...locales],
  messages: {
    ar: arMessages,
    en: enMessages,
  },
});

export async function dynamicActivate(locale: Locale) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export function getLocaleFromPathname(pathname: string): Locale | null {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    return firstSegment as Locale;
  }

  return null;
}

export function getLocalizedPathname(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // If pathname already has a locale, replace it
  if (locales.includes(firstSegment as Locale)) {
    segments[0] = locale;
    return `/${segments.join('/')}`;
  }

  // If pathname doesn't have a locale, add it
  return `/${locale}${pathname}`;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (locales.includes(firstSegment as Locale)) {
    return `/${segments.slice(1).join('/')}`;
  }

  return pathname;
}

export function getAlternateLocales(
  currentLocale: Locale
): Array<{ locale: Locale; href: string }> {
  return locales
    .filter(locale => locale !== currentLocale)
    .map(locale => ({
      locale,
      href: `/${locale}`,
    }));
}

export function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null
): Locale {
  if (!acceptLanguage) return defaultLocale;

  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim())
    .map(lang => lang.split('-')[0]);

  for (const lang of languages) {
    if (locales.includes(lang as Locale)) {
      return lang as Locale;
    }
  }

  return defaultLocale;
}

export function getLocaleFromCookie(cookie: string | null): Locale | null {
  if (!cookie) return null;

  const cookies = cookie.split(';').reduce(
    (acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      acc[key] = value;
      return acc;
    },
    {} as Record<string, string>
  );

  const locale = cookies.locale;
  return locales.includes(locale as Locale) ? (locale as Locale) : null;
}

export function setLocaleCookie(locale: Locale): string {
  return `locale=${locale}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function getLocaleFromStorage(): Locale | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem('locale');
  return locales.includes(stored as Locale) ? (stored as Locale) : null;
}

export function setLocaleInStorage(locale: Locale): void {
  if (typeof window === 'undefined') return;

  localStorage.setItem('locale', locale);
}

export function getBrowserLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale;

  const browserLocale = navigator.language.split('-')[0];
  return locales.includes(browserLocale as Locale)
    ? (browserLocale as Locale)
    : defaultLocale;
}

export function getPreferredLocale(
  pathname?: string,
  acceptLanguage?: string | null,
  cookie?: string | null,
  storage?: boolean
): Locale {
  // 1. Check pathname first
  if (pathname) {
    const pathnameLocale = getLocaleFromPathname(pathname);
    if (pathnameLocale) return pathnameLocale;
  }

  // 2. Check storage
  if (storage) {
    const storageLocale = getLocaleFromStorage();
    if (storageLocale) return storageLocale;
  }

  // 3. Check cookie
  const cookieLocale = getLocaleFromCookie(cookie || null);
  if (cookieLocale) return cookieLocale;

  // 4. Check Accept-Language header
  if (acceptLanguage) {
    return getLocaleFromAcceptLanguage(acceptLanguage);
  }

  // 5. Check browser locale
  const browserLocale = getBrowserLocale();
  if (browserLocale) return browserLocale;

  // 6. Fallback to default
  return defaultLocale;
}
