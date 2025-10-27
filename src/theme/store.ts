/**
 * Zustand Theme Store
 * Manages theme state with localStorage persistence
 */

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { themes, getTheme, isDarkMode, isLightMode } from './theme';
import type { ThemeStore, ThemeMode } from './types';

const THEME_STORAGE_KEY = 'dga-theme';

// Get system theme preference
const getSystemTheme = (): ThemeMode => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'light';
};

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      mode: getSystemTheme(),
      theme: themes[getSystemTheme()],
      isDark: getSystemTheme() === 'dark',
      isLight: getSystemTheme() === 'light',

      toggleTheme: () => {
        const currentMode = get().mode;
        const newMode: ThemeMode = currentMode === 'light' ? 'dark' : 'light';

        set({
          mode: newMode,
          theme: getTheme(newMode),
          isDark: isDarkMode(newMode),
          isLight: isLightMode(newMode),
        });
      },

      setTheme: (mode: ThemeMode) => {
        set({
          mode,
          theme: getTheme(mode),
          isDark: isDarkMode(mode),
          isLight: isLightMode(mode),
        });
      },
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      // Only persist the mode, not the entire theme object
      partialize: state => ({ mode: state.mode }),
      // Rehydrate theme when loading from storage
      onRehydrateStorage: () => state => {
        if (state) {
          const mode = state.mode || getSystemTheme();
          state.theme = getTheme(mode);
          state.isDark = isDarkMode(mode);
          state.isLight = isLightMode(mode);
        }
      },
    }
  )
);

// Selectors for better performance
export const useThemeMode = () => useThemeStore(state => state.mode);
export const useTheme = () => useThemeStore(state => state.theme);
export const useToggleTheme = () => useThemeStore(state => state.toggleTheme);
export const useSetTheme = () => useThemeStore(state => state.setTheme);
export const useIsDark = () => useThemeStore(state => state.isDark);
export const useIsLight = () => useThemeStore(state => state.isLight);
