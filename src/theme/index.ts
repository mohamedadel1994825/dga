/**
 * Theme System Main Export
 * Central export point for all theme-related functionality
 */

// Theme configuration
export {
  lightTheme,
  darkTheme,
  themes,
  getTheme,
  isDarkMode,
  isLightMode,
} from './theme';

// Theme provider and context
export { ThemeProvider, useThemeContext } from './ThemeProvider';

// Store and hooks
export {
  useThemeStore,
  useThemeMode,
  useTheme,
  useToggleTheme,
  useSetTheme,
  useIsDark,
  useIsLight,
} from './store';

// Types
export type {
  ThemeMode,
  ThemeTokens,
  ThemeStore,
  ThemeContextValue,
  ThemeColorPath,
  ThemeSpacingValue,
  ThemeBorderRadiusValue,
  ThemeShadowValue,
} from './types';

// Token exports for direct access
export { lightColors, darkColors } from './tokens/colors';
export {
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontFamilies,
} from './tokens/typography';
export { spacing, spacingScale } from './tokens/spacing';
export { borderRadius, borderRadiusScale } from './tokens/borderRadius';
export { shadows, shadowScale } from './tokens/shadows';
