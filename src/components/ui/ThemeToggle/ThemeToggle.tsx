/**
 * Theme Toggle Component
 * Eye icon button that toggles between light and dark mode
 */

'use client';

import React from 'react';
import { useThemeContext } from '@/theme';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
    />
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
    />
  </svg>
);

const EyeSlashIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    className={className}
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'
    />
  </svg>
);

export const ThemeToggle: React.FC<ThemeToggleProps> = ({
  className = '',
  size = 'md',
  showLabel = false,
}) => {
  const { mode, toggleTheme, isDark } = useThemeContext();

  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
  };

  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        ${sizeClasses[size]}
        ${className}
        inline-flex items-center justify-center
        rounded-lg border border-border-primary
        bg-background-primary text-text-primary
        hover:bg-background-secondary hover:border-border-secondary
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
        transition-all duration-200 ease-in-out
        group
      `}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <EyeSlashIcon
          className={`${iconSizeClasses[size]} group-hover:scale-110 transition-transform`}
        />
      ) : (
        <EyeIcon
          className={`${iconSizeClasses[size]} group-hover:scale-110 transition-transform`}
        />
      )}

      {showLabel && (
        <span className='ml-2 font-medium text-sm'>
          {isDark ? 'Light' : 'Dark'}
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
