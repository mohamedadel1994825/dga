'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { I18nProvider } from '@lingui/react';
import { i18n, dynamicActivate, type SupportedLocale } from '../i18n/config';

type SupportedLang = SupportedLocale;

type LanguageContextValue = {
  lang: SupportedLang;
  toggle: () => void;
  set: (lang: SupportedLang) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

export default function LanguageProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale?: string;
}) {
  const [lang, setLang] = useState<SupportedLang>('ar');
  const [isReady, setIsReady] = useState(false);
  const [isSwitching, setIsSwitching] = useState(false);

  const set = useCallback(
    async (newLang: SupportedLang) => {
      if (isSwitching || newLang === lang) return;

      setIsSwitching(true);

      try {
        // Activate the new language in Lingui
        await dynamicActivate(newLang);

        // Update state
        setLang(newLang);

        // Update HTML attributes for RTL/LTR
        document.documentElement.setAttribute('lang', newLang);
        document.documentElement.setAttribute(
          'dir',
          newLang === 'ar' ? 'rtl' : 'ltr'
        );

        // Update web components (DGA-* and NDS-* components)
        const allElements = document.querySelectorAll('*');
        allElements.forEach(el => {
          const tagName = el.tagName;
          if (tagName.startsWith('DGA-') || tagName.startsWith('NDS-')) {
            el.setAttribute('language', newLang);
            if (tagName === 'DGA-SEARCH-BOX') {
              el.setAttribute(
                'speech-lang',
                newLang === 'ar' ? 'ar-SA' : 'en-US'
              );
            }
          }
        });

        // Persist to localStorage
        localStorage.setItem('site-lang', newLang);

        // Update cookie to match the new language
        document.cookie = `locale=${newLang}; Path=/; Max-Age=31536000; SameSite=Lax`;

        // Update URL to reflect language change
        if (typeof window !== 'undefined' && window.location) {
          const currentPath = window.location.pathname || '/';
          const pathWithoutLocale = currentPath.replace(
            /^\/[a-z]{2}(\/|$)/,
            '/'
          );
          const newPath = `/${newLang}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

          // Use pushState for smooth navigation without reload
          window.history.pushState(null, '', newPath);
        }
      } catch (error) {
        console.error('Language switch error:', error);
      } finally {
        setTimeout(() => setIsSwitching(false), 100);
      }
    },
    [isSwitching, lang]
  );

  const toggle = useCallback(() => {
    set(lang === 'ar' ? 'en' : 'ar');
  }, [lang, set]);

  useEffect(() => {
    // Initialize on mount - prioritize URL locale over localStorage
    const urlLocale = initialLocale as SupportedLang | null;
    const savedLang = localStorage.getItem('site-lang') as SupportedLang | null;

    // Priority: URL locale > localStorage > default (ar)
    const initialLang =
      urlLocale && ['ar', 'en'].includes(urlLocale)
        ? urlLocale
        : savedLang && ['ar', 'en'].includes(savedLang)
          ? savedLang
          : 'ar';

    dynamicActivate(initialLang).then(() => {
      setLang(initialLang);
      document.documentElement.setAttribute('lang', initialLang);
      document.documentElement.setAttribute(
        'dir',
        initialLang === 'ar' ? 'rtl' : 'ltr'
      );

      // Set language attribute on all web components
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        const tagName = el.tagName;
        if (tagName.startsWith('DGA-') || tagName.startsWith('NDS-')) {
          el.setAttribute('language', initialLang);
          if (tagName === 'DGA-SEARCH-BOX') {
            el.setAttribute(
              'speech-lang',
              initialLang === 'ar' ? 'ar-SA' : 'en-US'
            );
          }
        }
      });

      // Update localStorage to match URL locale
      if (urlLocale && urlLocale !== savedLang) {
        localStorage.setItem('site-lang', initialLang);
      }

      setIsReady(true);
    });
  }, [initialLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, toggle, set }),
    [lang, toggle, set]
  );

  if (!isReady) {
    return null;
  }

  return (
    <I18nProvider i18n={i18n}>
      <LanguageContext.Provider value={value}>
        {children}
      </LanguageContext.Provider>
    </I18nProvider>
  );
}

export type { SupportedLang };
