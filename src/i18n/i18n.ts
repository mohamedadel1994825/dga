import { i18n } from '@lingui/core';
import { en, ar } from 'make-plural/plurals';

export type SupportedLocale = 'en' | 'ar';

i18n.loadLocaleData({
  en: { plurals: en },
  ar: { plurals: ar },
});

/**
 * Dynamically loads the message catalog for the given locale.
 */
export async function dynamicActivate(locale: SupportedLocale) {
  const { messages } = await import(`../locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}

export { i18n };
