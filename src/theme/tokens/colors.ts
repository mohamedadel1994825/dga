/**
 * DGA Design System Color Tokens
 * Based on https://design.dga.gov.sa/thoughts/designToken
 */

export const lightColors = {
  // Primary Colors - DGA Official Blue (#1E40AF)
  primary: {
    50: '#eef2ff',
    100: '#e0e7ff',
    200: '#c7d2fe',
    300: '#a5b4fc',
    400: '#818cf8',
    500: '#6366f1',
    600: '#4f46e5',
    700: '#1e40af', // Main primary - DGA Official
    800: '#1e3a8a',
    900: '#1e3a8a',
    950: '#172554',
  },

  // Secondary Colors - DGA Official Green (#059669)
  secondary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669', // Main secondary - DGA Official
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
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

  // Semantic Colors - DGA Official (#10B981)
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Main success - DGA Official
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
    950: '#022c22',
  },

  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Main warning - DGA Official
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
    500: '#ef4444', // Main error - DGA Official
    600: '#dc2626', // Accent - DGA Official
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
    950: '#450a0a',
  },

  // Info Colors - DGA Official (#3B82F6)
  info: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main info - DGA Official
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
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
    focus: '#1e40af', // DGA Primary
    error: '#ef4444',
  },

  // Interactive State Colors
  interactive: {
    hover: {
      primary: '#1e3a8a', // Darker shade of DGA primary
      secondary: '#047857', // Darker shade of DGA secondary
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
    active: {
      primary: '#1e3a8a', // Darker shade of DGA primary
      secondary: '#065f46', // Darker shade of DGA secondary
      success: '#047857',
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
  info: lightColors.info,

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
    focus: '#1e40af', // DGA Primary
    error: '#ef4444',
  },

  // Interactive State Colors (adjusted for dark mode)
  interactive: {
    hover: {
      primary: '#4f46e5', // Lighter shade for dark mode
      secondary: '#34d399', // Lighter shade for dark mode
      success: '#34d399',
      warning: '#fbbf24',
      error: '#f87171',
    },
    active: {
      primary: '#6366f1', // Even lighter for dark mode
      secondary: '#6ee7b7', // Even lighter for dark mode
      success: '#6ee7b7',
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
export type SemanticColor = 'success' | 'warning' | 'error' | 'info';
