/**
 * Theme Test Component
 * Simple component to test and debug theme functionality
 */

'use client';

import React from 'react';
import { useTheme } from '@/theme';

export const ThemeTest: React.FC = () => {
  const { mode, toggleTheme, isDark, theme } = useTheme();

  return (
    <div
      className='fixed top-4 right-4 z-50 p-4 rounded-lg border-2 shadow-lg max-w-xs'
      style={{
        backgroundColor: theme.colors.background.primary,
        color: theme.colors.text.primary,
        borderColor: theme.colors.border.primary,
      }}
    >
      <h3 className='font-bold mb-2 text-lg'>Theme Debug</h3>
      <div className='space-y-1 text-sm'>
        <p>
          <strong>Mode:</strong> {mode}
        </p>
        <p>
          <strong>Is Dark:</strong> {isDark ? 'Yes' : 'No'}
        </p>
        <p>
          <strong>Background:</strong> {theme.colors.background.primary}
        </p>
        <p>
          <strong>Text:</strong> {theme.colors.text.primary}
        </p>
      </div>

      <button
        onClick={toggleTheme}
        className='mt-3 w-full px-3 py-2 rounded text-white font-medium transition-colors'
        style={{
          backgroundColor: theme.colors.primary[500],
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundColor = theme.colors.primary[600];
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundColor = theme.colors.primary[500];
        }}
      >
        Toggle to {isDark ? 'Light' : 'Dark'}
      </button>

      <div className='mt-2 text-xs text-gray-500'>
        Check browser console for debug logs
      </div>
    </div>
  );
};

export default ThemeTest;
