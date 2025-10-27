/**
 * Theme Provider Component
 * Provides theme context to the entire application
 */

'use client';

import React, { createContext, useContext, useEffect } from 'react';
import { useThemeStore } from './store';
import type { ThemeContextValue } from './types';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: 'light' | 'dark';
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultMode = 'light',
}) => {
  const { mode, theme, toggleTheme, setTheme, isDark, isLight } =
    useThemeStore();

  // Initialize theme on mount if not persisted
  useEffect(() => {
    // Only set default if no theme is persisted and defaultMode is provided
    if (defaultMode && !localStorage.getItem('dga-theme')) {
      setTheme(defaultMode);
    }
  }, [defaultMode, setTheme]);

  // Apply theme to document - much simpler now!
  useEffect(() => {
    const root = document.documentElement;

    // Just set the theme attribute - CSS handles the rest!
    root.setAttribute('data-theme', mode);
  }, [mode]);

  const contextValue: ThemeContextValue = {
    mode,
    theme,
    toggleTheme,
    setTheme,
    isDark,
    isLight,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

// Re-export store hooks for convenience
export {
  useThemeStore,
  useThemeMode,
  useTheme,
  useToggleTheme,
  useSetTheme,
  useIsDark,
  useIsLight,
} from './store';
