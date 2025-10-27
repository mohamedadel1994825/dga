/**
 * Theme System TypeScript Types
 * Comprehensive typing for the theming system
 */

import type { ColorToken } from './tokens/colors';
import type {
  FontWeight,
  FontSize,
  LineHeight,
  LetterSpacing,
  FontFamily,
} from './tokens/typography';
import type { Spacing, SpacingScale } from './tokens/spacing';
import type { BorderRadius, BorderRadiusScale } from './tokens/borderRadius';
import type { Shadow, ShadowScale } from './tokens/shadows';

export type ThemeMode = 'light' | 'dark';

export interface ThemeTokens {
  colors: any; // Using any to avoid complex type conflicts between light and dark themes
  typography: {
    fontWeights: Record<FontWeight, number>;
    fontSizes: Record<FontSize, string>;
    lineHeights: Record<LineHeight, string>;
    letterSpacings: Record<LetterSpacing, string>;
    fontFamilies: Record<FontFamily, string[]>;
  };
  spacing: {
    values: Record<Spacing, string>;
    scale: Record<SpacingScale, string>;
  };
  borderRadius: {
    values: Record<BorderRadius, string>;
    scale: Record<BorderRadiusScale, string>;
  };
  shadows: {
    values: Record<Shadow, string>;
    scale: Record<ShadowScale, string>;
  };
}

export interface ThemeStore {
  mode: ThemeMode;
  theme: ThemeTokens;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isDark: boolean;
  isLight: boolean;
}

export interface ThemeContextValue {
  mode: ThemeMode;
  theme: ThemeTokens;
  toggleTheme: () => void;
  setTheme: (mode: ThemeMode) => void;
  isDark: boolean;
  isLight: boolean;
}

// Utility types for component props
export type ThemeColorPath =
  | `primary.${keyof ColorToken['primary']}`
  | `secondary.${keyof ColorToken['secondary']}`
  | `neutral.${keyof ColorToken['neutral']}`
  | `success.${keyof ColorToken['success']}`
  | `warning.${keyof ColorToken['warning']}`
  | `error.${keyof ColorToken['error']}`
  | `background.${keyof ColorToken['background']}`
  | `text.${keyof ColorToken['text']}`
  | `border.${keyof ColorToken['border']}`;

export type ThemeSpacingValue = Spacing | SpacingScale;
export type ThemeBorderRadiusValue = BorderRadius | BorderRadiusScale;
export type ThemeShadowValue = Shadow | ShadowScale;
