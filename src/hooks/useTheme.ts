/**
 * Theme Hook
 * Convenient hook for accessing theme values in components
 * Best Practice: Type-safe direct access to theme tokens
 */

import { useThemeContext } from '@/theme';

export const useTheme = () => {
  const { mode, theme, toggleTheme, setTheme, isDark, isLight } =
    useThemeContext();

  /**
   * Type-safe theme token accessors
   * Provides direct access to theme tokens with full type safety
   *
   * @example
   * // Colors
   * colors.primary[700] // '#1e40af'
   * colors.text.primary // '#0f172a'
   * colors.background.primary // '#ffffff'
   *
   * // Spacing
   * spacing.values.md // '1rem'
   * spacing.scale.xs // '0.25rem'
   *
   * // Border Radius
   * borderRadius.values.lg // '0.5rem'
   * borderRadius.scale.md // '0.375rem'
   *
   * // Shadows
   * shadows.values.md // '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
   * shadows.scale.lg // '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
   *
   * // Typography
   * typography.fontSizes.lg // '1.125rem'
   * typography.fontWeights.bold // 700
   */
  const colors = theme.colors;
  const spacing = theme.spacing;
  const borderRadius = theme.borderRadius;
  const shadows = theme.shadows;
  const typography = theme.typography;

  return {
    // Theme state
    mode,
    toggleTheme,
    setTheme,
    isDark,
    isLight,
    // Direct token accessors (type-safe)
    colors,
    spacing,
    borderRadius,
    shadows,
    typography,
  };
};
