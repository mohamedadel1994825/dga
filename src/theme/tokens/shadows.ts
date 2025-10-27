/**
 * DGA Design System Shadow Tokens
 * Elevation and depth shadows
 */

export const shadows = {
  none: 'none',
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  '3xl': '0 35px 60px -12px rgb(0 0 0 / 0.3)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  // Colored shadows
  primary: '0 4px 14px 0 rgb(14 165 233 / 0.15)',
  success: '0 4px 14px 0 rgb(34 197 94 / 0.15)',
  warning: '0 4px 14px 0 rgb(245 158 11 / 0.15)',
  error: '0 4px 14px 0 rgb(239 68 68 / 0.15)',
  // Glow effects
  glow: '0 0 20px rgb(14 165 233 / 0.3)',
  glowSuccess: '0 0 20px rgb(34 197 94 / 0.3)',
  glowWarning: '0 0 20px rgb(245 158 11 / 0.3)',
  glowError: '0 0 20px rgb(239 68 68 / 0.3)',
} as const;

// Semantic shadow scale
export const shadowScale = {
  sm: shadows.sm,
  md: shadows.md,
  lg: shadows.lg,
  xl: shadows.xl,
  '2xl': shadows['2xl'],
} as const;

export type Shadow = keyof typeof shadows;
export type ShadowScale = keyof typeof shadowScale;
