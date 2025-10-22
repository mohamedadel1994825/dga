export function formatNumberLocalized(
  value: number,
  locale = 'ar',
  options?: Intl.NumberFormatOptions
): string {
  return new Intl.NumberFormat(locale, options).format(value);
}

// Converts Western digits to Arabic-Indic when locale is RTL
export function toRtlNumber(input: string | number, locale = 'ar'): string {
  const str = String(input);
  if (locale !== 'ar') return str;
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  return str.replace(/[0-9]/g, d => arabicDigits[Number(d)]);
}
