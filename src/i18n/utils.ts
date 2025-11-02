import { i18n } from '@lingui/core';
import type { Locale } from './config';

// Translation utilities
export function useTranslation() {
  return {
    t: (key: string, values?: Record<string, unknown>) => {
      return i18n._(key, values);
    },
    locale: i18n.locale,
    isRTL: i18n.locale === 'ar',
  };
}

// Format utilities
export function formatDate(
  date: Date | string | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    ...defaultOptions,
    ...options,
  }).format(dateObj);
}

export function formatTime(
  date: Date | string | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    ...defaultOptions,
    ...options,
  }).format(dateObj);
}

export function formatDateTime(
  date: Date | string | number,
  locale: Locale,
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;

  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return new Intl.DateTimeFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    ...defaultOptions,
    ...options,
  }).format(dateObj);
}

export function formatNumber(
  number: number,
  locale: Locale,
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(
    locale === 'ar' ? 'ar-SA' : 'en-US',
    options
  ).format(number);
}

export function formatCurrency(
  amount: number,
  locale: Locale,
  currency: string = 'SAR',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale === 'ar' ? 'ar-SA' : 'en-US', {
    style: 'currency',
    currency,
    ...options,
  }).format(amount);
}

export function formatRelativeTime(
  date: Date | string | number,
  locale: Locale,
  options?: Intl.RelativeTimeFormatOptions
): string {
  const dateObj =
    typeof date === 'string' || typeof date === 'number'
      ? new Date(date)
      : date;
  const now = new Date();
  const diffInSeconds = Math.floor((dateObj.getTime() - now.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat(
    locale === 'ar' ? 'ar-SA' : 'en-US',
    options
  );

  if (Math.abs(diffInSeconds) < 60) {
    return rtf.format(diffInSeconds, 'second');
  } else if (Math.abs(diffInSeconds) < 3600) {
    return rtf.format(Math.floor(diffInSeconds / 60), 'minute');
  } else if (Math.abs(diffInSeconds) < 86400) {
    return rtf.format(Math.floor(diffInSeconds / 3600), 'hour');
  } else if (Math.abs(diffInSeconds) < 2592000) {
    return rtf.format(Math.floor(diffInSeconds / 86400), 'day');
  } else if (Math.abs(diffInSeconds) < 31536000) {
    return rtf.format(Math.floor(diffInSeconds / 2592000), 'month');
  } else {
    return rtf.format(Math.floor(diffInSeconds / 31536000), 'year');
  }
}

// Text utilities
export function truncateText(
  text: string,
  maxLength: number,
  locale: Locale
): string {
  if (text.length <= maxLength) return text;

  const ellipsis = locale === 'ar' ? '...' : '...';
  return text.slice(0, maxLength) + ellipsis;
}

export function capitalizeFirst(text: string, locale: Locale): string {
  if (!text) return text;

  if (locale === 'ar') {
    // For Arabic, we don't capitalize as it doesn't have case
    return text;
  }

  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

export function getInitials(name: string, locale: Locale): string {
  if (!name) return '';

  const words = name.trim().split(/\s+/);

  if (locale === 'ar') {
    // For Arabic, take the first character of each word
    return words.map(word => word.charAt(0)).join('');
  }

  // For English, take first character of first and last word
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  }

  return (words[0].charAt(0) + words[words.length - 1].charAt(0)).toUpperCase();
}

// Validation utilities
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string, locale: Locale): boolean {
  if (locale === 'ar') {
    // Saudi phone number validation
    const saudiPhoneRegex = /^(\+966|0)?[5-9][0-9]{8}$/;
    return saudiPhoneRegex.test(phone);
  }

  // International phone number validation (basic)
  const internationalPhoneRegex = /^\+?[1-9]\d{1,14}$/;
  return internationalPhoneRegex.test(phone);
}

export function validateNationalId(
  nationalId: string,
  locale: Locale
): boolean {
  if (locale === 'ar') {
    // Saudi national ID validation
    const saudiIdRegex = /^[1-2][0-9]{9}$/;
    return saudiIdRegex.test(nationalId);
  }

  // Basic validation for other locales
  return /^[0-9]{8,12}$/.test(nationalId);
}

// URL utilities
export function getLocalizedUrl(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  // If pathname already has a locale, replace it
  if (['ar', 'en'].includes(firstSegment)) {
    segments[0] = locale;
    return `/${segments.join('/')}`;
  }

  // If pathname doesn't have a locale, add it
  return `/${locale}${pathname}`;
}

export function getPathnameWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];

  if (['ar', 'en'].includes(firstSegment)) {
    return `/${segments.slice(1).join('/')}`;
  }

  return pathname;
}

// Accessibility utilities
export function getAriaLabel(text: string, locale: Locale): string {
  // Add appropriate ARIA labels based on locale
  if (locale === 'ar') {
    return `باللغة العربية: ${text}`;
  }

  return `In English: ${text}`;
}

export function getScreenReaderText(text: string, locale: Locale): string {
  if (locale === 'ar') {
    return `للقراءة فقط: ${text}`;
  }

  return `Screen reader only: ${text}`;
}

// Pluralization utilities
export function getPluralForm(count: number, locale: Locale): string {
  if (locale === 'ar') {
    if (count === 0) return 'zero';
    if (count === 1) return 'one';
    if (count === 2) return 'two';
    if (count >= 3 && count <= 10) return 'few';
    if (count >= 11 && count <= 99) return 'many';
    return 'other';
  }

  // English pluralization
  if (count === 1) return 'one';
  return 'other';
}

// Direction utilities
export function getTextDirection(
  text: string,
  locale: Locale
): 'ltr' | 'rtl' | 'auto' {
  if (locale === 'ar') return 'rtl';
  if (locale === 'en') return 'ltr';

  // Auto-detect direction based on text content
  const arabicRegex = /[\u0600-\u06FF]/;
  const englishRegex = /[a-zA-Z]/;

  if (arabicRegex.test(text)) return 'rtl';
  if (englishRegex.test(text)) return 'ltr';

  return 'auto';
}

export function getReadingDirection(locale: Locale): 'ltr' | 'rtl' {
  return locale === 'ar' ? 'rtl' : 'ltr';
}
