/**
 * DGA Design System Border Radius Tokens
 * Consistent border radius scale
 */

export const borderRadius = {
  none: '0',
  sm: '0.125rem', // 2px
  md: '0.25rem', // 4px
  lg: '0.5rem', // 8px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
} as const;

// Semantic border radius scale
export const borderRadiusScale = {
  sm: borderRadius.sm, // 2px
  md: borderRadius.md, // 4px
  lg: borderRadius.lg, // 8px
  '2xl': borderRadius['2xl'], // 16px
  '3xl': borderRadius['3xl'], // 24px
  full: borderRadius.full, // 9999px
} as const;

export type BorderRadius = keyof typeof borderRadius;
export type BorderRadiusScale = keyof typeof borderRadiusScale;
