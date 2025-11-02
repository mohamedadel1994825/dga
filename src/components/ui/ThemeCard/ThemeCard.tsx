/**
 * Theme Card Component
 * Demo component showcasing theme colors and spacing
 */

'use client';

import React from 'react';
import { useThemeContext } from '@/theme';

interface ThemeCardProps {
  title?: string;
  children?: React.ReactNode;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const ThemeCard: React.FC<ThemeCardProps> = ({
  title = 'Theme Card',
  children,
  variant = 'default',
  size = 'md',
  className = '',
}) => {
  const { mode } = useThemeContext();

  const variantClasses = {
    default: 'bg-background-primary border-border-primary text-text-primary',
    primary:
      'bg-primary-50 border-primary-200 text-primary-900 dark:bg-primary-950 dark:border-primary-800 dark:text-primary-100',
    secondary:
      'bg-secondary-50 border-secondary-200 text-secondary-900 dark:bg-secondary-950 dark:border-secondary-800 dark:text-secondary-100',
    success:
      'bg-success-50 border-success-200 text-success-900 dark:bg-success-950 dark:border-success-800 dark:text-success-100',
    warning:
      'bg-warning-50 border-warning-200 text-warning-900 dark:bg-warning-950 dark:border-warning-800 dark:text-warning-100',
    error:
      'bg-error-50 border-error-200 text-error-900 dark:bg-error-950 dark:border-error-800 dark:text-error-100',
  };

  const sizeClasses = {
    sm: 'p-3 text-sm',
    md: 'p-4 text-base',
    lg: 'p-6 text-lg',
  };

  return (
    <div
      className={`
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
        rounded-lg border-2 shadow-md
        transition-all duration-200 ease-in-out
        hover:shadow-lg hover:scale-[1.02]
      `}
    >
      <div className='flex items-center justify-between mb-3'>
        <h3 className='font-semibold text-lg'>{title}</h3>
        <span className='text-xs px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300'>
          {mode} mode
        </span>
      </div>

      {children && <div className='space-y-2'>{children}</div>}

      <div className='mt-4 pt-3 border-t border-current border-opacity-20'>
        <p className='text-sm opacity-75'>
          This card demonstrates theme colors, spacing, and typography.
        </p>
      </div>
    </div>
  );
};

export default ThemeCard;
