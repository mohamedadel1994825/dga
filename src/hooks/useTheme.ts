/**
 * Theme Hook
 * Convenient hook for accessing theme values in components
 */

import { useThemeContext } from '@/theme';

export const useTheme = () => {
  const { mode, theme, toggleTheme, setTheme, isDark, isLight } =
    useThemeContext();

  // Helper functions for common theme operations
  const getColor = (path: string) => {
    const keys = path.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let value: any = theme.colors;

    for (const key of keys) {
      value = value?.[key];
      if (value === undefined) break;
    }

    return value || path; // fallback to the path if not found
  };

  const getSpacing = (key: string) => {
    return (
      theme.spacing.values[key as keyof typeof theme.spacing.values] || key
    );
  };

  const getBorderRadius = (key: string) => {
    return (
      theme.borderRadius.values[
        key as keyof typeof theme.borderRadius.values
      ] || key
    );
  };

  const getShadow = (key: string) => {
    return (
      theme.shadows.values[key as keyof typeof theme.shadows.values] || key
    );
  };

  return {
    mode,
    theme,
    toggleTheme,
    setTheme,
    isDark,
    isLight,
    // Helper functions
    getColor,
    getSpacing,
    getBorderRadius,
    getShadow,
  };
};
