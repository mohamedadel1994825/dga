/**
 * DGA Design System Color Tokens
 * Based on https://design.dga.gov.sa/thoughts/designToken
 */

export const lightColors = {
  // Primary Colors
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    200: '#bae6fd',
    300: '#7dd3fc',
    400: '#38bdf8',
    500: '#0ea5e9', // Main primary
    600: '#0284c7',
    700: '#0369a1',
    800: '#075985',
    900: '#0c4a6e',
    950: '#082f49',
  },

  // Secondary Colors
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b', // Main secondary
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },

  // Neutral Colors
  neutral: {
    0: '#ffffff',
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },

  // Semantic Colors
  success: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e', // Main success
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
    950: '#052e16',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Main warning
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
    950: '#451a03',
  },

  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Main error
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Background Colors
  background: {
    primary: '#ffffff',
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    inverse: '#0f172a',
  },

  // Text Colors
  text: {
    primary: '#0f172a',
    secondary: '#475569',
    tertiary: '#64748b',
    inverse: '#ffffff',
    disabled: '#94a3b8',
  },

  // Border Colors
  border: {
    primary: '#e2e8f0',
    secondary: '#cbd5e1',
    focus: '#0ea5e9',
    error: '#ef4444',
  },

  // Interactive State Colors
  interactive: {
    hover: {
      primary: '#0284c7',
      secondary: '#475569',
      success: '#16a34a',
      warning: '#d97706',
      error: '#dc2626',
    },
    active: {
      primary: '#0369a1',
      secondary: '#334155',
      success: '#15803d',
      warning: '#b45309',
      error: '#b91c1c',
    },
    disabled: {
      primary: '#94a3b8',
      secondary: '#cbd5e1',
      background: '#f1f5f9',
      text: '#94a3b8',
    },
  },
} as const;

export const darkColors = {
  // Primary Colors (same as light for consistency)
  primary: lightColors.primary,

  // Secondary Colors (same as light for consistency)
  secondary: lightColors.secondary,

  // Neutral Colors (inverted for dark mode)
  neutral: {
    0: '#0a0a0a',
    50: '#171717',
    100: '#262626',
    200: '#404040',
    300: '#525252',
    400: '#737373',
    500: '#a3a3a3',
    600: '#d4d4d4',
    700: '#e5e5e5',
    800: '#f5f5f5',
    900: '#fafafa',
    950: '#ffffff',
  },

  // Semantic Colors (same as light for consistency)
  success: lightColors.success,
  warning: lightColors.warning,
  error: lightColors.error,

  // Background Colors (inverted for dark mode)
  background: {
    primary: '#0f172a',
    secondary: '#1e293b',
    tertiary: '#334155',
    inverse: '#ffffff',
  },

  // Text Colors (inverted for dark mode)
  text: {
    primary: '#ffffff',
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
    inverse: '#0f172a',
    disabled: '#475569',
  },

  // Border Colors (adjusted for dark mode)
  border: {
    primary: '#334155',
    secondary: '#475569',
    focus: '#0ea5e9',
    error: '#ef4444',
  },

  // Interactive State Colors (adjusted for dark mode)
  interactive: {
    hover: {
      primary: '#38bdf8',
      secondary: '#94a3b8',
      success: '#4ade80',
      warning: '#fbbf24',
      error: '#f87171',
    },
    active: {
      primary: '#7dd3fc',
      secondary: '#cbd5e1',
      success: '#86efac',
      warning: '#fcd34d',
      error: '#fca5a5',
    },
    disabled: {
      primary: '#475569',
      secondary: '#334155',
      background: '#1e293b',
      text: '#475569',
    },
  },
} as const;

export type ColorToken = typeof lightColors;
export type ColorScale = keyof typeof lightColors.primary;
export type SemanticColor = 'success' | 'warning' | 'error';
