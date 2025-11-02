/**
 * DGA Design System Typography Tokens
 * Font weights and typography scale
 */

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
} as const;

export const fontSizes = {
  '2xs': '0.5rem', // 8px
  'size-10': '0.625rem', // 10px
  xs: '0.75rem', // 12px
  sm: '0.875rem', // 14px
  base: '1rem', // 16px
  lg: '1.125rem', // 18px
  xl: '1.25rem', // 20px
  '2xl': '1.5rem', // 24px
  '3xl': '1.875rem', // 30px
  'size-32': '2rem', // 32px
  '4xl': '2.25rem', // 36px
  'size-40': '2.5rem', // 40px
  '5xl': '3rem', // 48px
  '6xl': '3.5rem', // 56px
  'size-60': '3.75rem', // 60px
  '7xl': '4.5rem', // 72px
} as const;

export const lineHeights = {
  'line-10': '0.63', // 10px
  'line-12': '0.75', // 12px
  'line-14': '0.88', // 14px
  'line-16': '1.00', // 16px
  'line-18': '1.13', // 18px
  'line-20': '1.25', // 20px
  'line-22': '1.38', // 22px
  'line-24': '1.50', // 24px
  'line-26': '1.63', // 26px
  'line-28': '1.75', // 28px
  'line-30': '1.88', // 30px
  'line-32': '2.00', // 32px
  'line-38': '2.38', // 38px
  'line-40': '2.50', // 40px
  'line-44': '2.75', // 44px
  'line-48': '3.00', // 48px
  'line-56': '3.50', // 56px
  'line-60': '3.75', // 60px
  'line-64': '4.00', // 64px
  'line-72': '4.50', // 72px
  'line-90': '5.63', // 90px
} as const;

export const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
} as const;

export const fontFamilies = {
  display: ['IBM Plex Sans Arabic', 'system-ui', 'sans-serif'] as string[],
  text: ['IBM Plex Sans Arabic', 'system-ui', 'sans-serif'] as string[],
} as const;

// Font styles
export const fontStyles = {
  normal: 'normal',
  italic: 'italic',
} as const;

// Text decoration
export const textDecoration = {
  none: 'none',
  underline: 'underline',
  lineThrough: 'line-through',
} as const;

// Text transform
export const textTransform = {
  none: 'none',
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize',
} as const;

export type FontWeight = keyof typeof fontWeights;
export type FontSize = keyof typeof fontSizes;
export type LineHeight = keyof typeof lineHeights;
export type LetterSpacing = keyof typeof letterSpacings;
export type FontFamily = keyof typeof fontFamilies;
export type FontStyle = keyof typeof fontStyles;
export type TextDecoration = keyof typeof textDecoration;
export type TextTransform = keyof typeof textTransform;
