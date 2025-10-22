import { useState, useEffect, useCallback } from 'react';
import type { AccessibilitySettings } from '@/types';

const defaultSettings: AccessibilitySettings = {
  fontSize: 16,
  contrast: 'normal',
  spacing: 1.5,
  motion: 'normal',
  screenReader: false,
};

export function useAccessibility() {
  const [settings, setSettings] =
    useState<AccessibilitySettings>(defaultSettings);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedSettings = localStorage.getItem('accessibility-settings');
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings);
        setSettings({ ...defaultSettings, ...parsed });
      } catch (error) {
        console.error('Failed to parse accessibility settings:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save settings to localStorage whenever they change
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  }, [settings, isLoaded]);

  // Apply settings to document
  useEffect(() => {
    if (!isLoaded || typeof window === 'undefined') return;

    const root = document.documentElement;

    // Apply font size
    root.style.setProperty('--font-size-base', `${settings.fontSize}px`);

    // Apply contrast
    if (settings.contrast === 'high') {
      root.classList.add('high-contrast');
    } else {
      root.classList.remove('high-contrast');
    }

    // Apply spacing
    root.style.setProperty('--spacing-multiplier', settings.spacing.toString());

    // Apply motion preferences
    if (settings.motion === 'reduced') {
      root.classList.add('reduce-motion');
    } else {
      root.classList.remove('reduce-motion');
    }

    // Apply screen reader preferences
    if (settings.screenReader) {
      root.classList.add('screen-reader-friendly');
    } else {
      root.classList.remove('screen-reader-friendly');
    }
  }, [settings, isLoaded]);

  const updateSettings = useCallback(
    (newSettings: Partial<AccessibilitySettings>) => {
      setSettings(prev => ({ ...prev, ...newSettings }));
    },
    []
  );

  const resetSettings = useCallback(() => {
    setSettings(defaultSettings);
  }, []);

  const increaseFontSize = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.min(prev.fontSize + 2, 24),
    }));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      fontSize: Math.max(prev.fontSize - 2, 14),
    }));
  }, []);

  const toggleContrast = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      contrast: prev.contrast === 'normal' ? 'high' : 'normal',
    }));
  }, []);

  const toggleMotion = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      motion: prev.motion === 'normal' ? 'reduced' : 'normal',
    }));
  }, []);

  const toggleScreenReader = useCallback(() => {
    setSettings(prev => ({
      ...prev,
      screenReader: !prev.screenReader,
    }));
  }, []);

  return {
    settings,
    isLoaded,
    updateSettings,
    resetSettings,
    increaseFontSize,
    decreaseFontSize,
    toggleContrast,
    toggleMotion,
    toggleScreenReader,
  };
}
