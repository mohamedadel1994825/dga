import { useCallback } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';
import { useLingui } from '@lingui/react';

export function useTranslation() {
  const { lang } = useLanguage();
  const { i18n } = useLingui();

  const translate = useCallback(
    (key: string, values?: Record<string, any>) => {
      return i18n._(key, values);
    },
    [i18n]
  );

  const formatDate = useCallback(
    (date: Date | string | number, options?: Intl.DateTimeFormatOptions) => {
      const dateObj =
        typeof date === 'string' || typeof date === 'number'
          ? new Date(date)
          : date;
      const locale = lang === 'ar' ? 'ar-SA' : 'en-US';

      return new Intl.DateTimeFormat(locale, options).format(dateObj);
    },
    [lang]
  );

  const formatNumber = useCallback(
    (number: number, options?: Intl.NumberFormatOptions) => {
      const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
      return new Intl.NumberFormat(locale, options).format(number);
    },
    [lang]
  );

  const formatCurrency = useCallback(
    (
      amount: number,
      currency: string = 'SAR',
      options?: Intl.NumberFormatOptions
    ) => {
      const locale = lang === 'ar' ? 'ar-SA' : 'en-US';
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
        ...options,
      }).format(amount);
    },
    [lang]
  );

  const formatRelativeTime = useCallback(
    (
      date: Date | string | number,
      options?: Intl.RelativeTimeFormatOptions
    ) => {
      const dateObj =
        typeof date === 'string' || typeof date === 'number'
          ? new Date(date)
          : date;
      const now = new Date();
      const diffInSeconds = Math.floor(
        (dateObj.getTime() - now.getTime()) / 1000
      );
      const locale = lang === 'ar' ? 'ar-SA' : 'en-US';

      const rtf = new Intl.RelativeTimeFormat(locale, options);

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
    },
    [lang]
  );

  return {
    t: translate,
    lang,
    isRTL: lang === 'ar',
    formatDate,
    formatNumber,
    formatCurrency,
    formatRelativeTime,
  };
}
