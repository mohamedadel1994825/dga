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
export {
  lightColors,
  darkColors,
  getColor,
  colorScales,
  type ColorToken,
  type ColorPath,
  type ColorScale,
  type SemanticColor,
} from './tokens/colors';

// Color utilities
// Note: generate-css-variables is a CLI script, not exported for runtime use
export {
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacings,
  fontFamilies,
  fontStyles,
  textDecoration,
  textTransform,
} from './tokens/typography';
export { spacing, spacingScale, componentSpacing } from './tokens/spacing';
export { borderRadius, borderRadiusScale } from './tokens/borderRadius';
export { shadows, shadowScale } from './tokens/shadows';
export {
  durations,
  easings,
  animations,
  animationPresets,
} from './tokens/animations';
export { zIndex, componentZIndex } from './tokens/zIndex';
