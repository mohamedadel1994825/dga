/**
 * DGA Design System Theme Configuration
 * Central theme file that merges all tokens
 */

import { lightColors, darkColors } from './tokens/colors';
import type { ColorToken } from './tokens/colors';
import {
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontFamilies,
} from './tokens/typography';
import { spacing, spacingScale } from './tokens/spacing';
import { borderRadius, borderRadiusScale } from './tokens/borderRadius';
import { shadows, shadowScale } from './tokens/shadows';
import type { ThemeTokens, ThemeMode } from './types';

export const lightTheme: ThemeTokens = {
  colors: lightColors as unknown as ColorToken,
  typography: {
    fontWeights,
    fontSizes,
    lineHeights,
    letterSpacings,
    fontFamilies,
  },
  spacing: {
    values: spacing,
    scale: spacingScale,
  },
  borderRadius: {
    values: borderRadius,
    scale: borderRadiusScale,
  },
  shadows: {
    values: shadows,
    scale: shadowScale,
  },
};

export const darkTheme: ThemeTokens = {
  colors: darkColors as unknown as ColorToken,
  typography: {
    fontWeights,
    fontSizes,
    lineHeights,
    letterSpacings,
    fontFamilies,
  },
  spacing: {
    values: spacing,
    scale: spacingScale,
  },
  borderRadius: {
    values: borderRadius,
    scale: borderRadiusScale,
  },
  shadows: {
    values: shadows,
    scale: shadowScale,
  },
};

export const themes: Record<ThemeMode, ThemeTokens> = {
  light: lightTheme,
  dark: darkTheme,
};

// Theme utilities
export const getTheme = (mode: ThemeMode): ThemeTokens => themes[mode];

export const isDarkMode = (mode: ThemeMode): boolean => mode === 'dark';

export const isLightMode = (mode: ThemeMode): boolean => mode === 'light';
