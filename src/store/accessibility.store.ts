import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { AccessibilitySettings } from '@/types';

interface AccessibilityState {
  settings: AccessibilitySettings;
  isLoaded: boolean;
  updateSettings: (settings: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
  toggleContrast: () => void;
  toggleMotion: () => void;
  toggleScreenReader: () => void;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  contrast: 'normal',
  spacing: 1.5,
  motion: 'normal',
  screenReader: false,
};

export const useAccessibilityStore = create<AccessibilityState>()(
  persist(
    (set, get) => ({
      settings: defaultSettings,
      isLoaded: false,

      updateSettings: newSettings => {
        set(state => ({
          settings: { ...state.settings, ...newSettings },
        }));
      },

      resetSettings: () => {
        set({ settings: defaultSettings });
      },

      increaseFontSize: () => {
        set(state => ({
          settings: {
            ...state.settings,
            fontSize: Math.min(state.settings.fontSize + 2, 24),
          },
        }));
      },

      decreaseFontSize: () => {
        set(state => ({
          settings: {
            ...state.settings,
            fontSize: Math.max(state.settings.fontSize - 2, 14),
          },
        }));
      },

      toggleContrast: () => {
        set(state => ({
          settings: {
            ...state.settings,
            contrast: state.settings.contrast === 'normal' ? 'high' : 'normal',
          },
        }));
      },

      toggleMotion: () => {
        set(state => ({
          settings: {
            ...state.settings,
            motion: state.settings.motion === 'normal' ? 'reduced' : 'normal',
          },
        }));
      },

      toggleScreenReader: () => {
        set(state => ({
          settings: {
            ...state.settings,
            screenReader: !state.settings.screenReader,
          },
        }));
      },
    }),
    {
      name: 'accessibility-store',
      partialize: state => ({ settings: state.settings }),
    }
  )
);
