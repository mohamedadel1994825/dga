import React, { useId } from 'react';
import { clsx } from 'clsx';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  fullWidth?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'filled' | 'outlined';
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  required = false,
  fullWidth = false,
  size = 'md',
  variant = 'default',
  startIcon,
  endIcon,
  className,
  'aria-label': ariaLabel,
  'aria-describedby': _ariaDescribedBy,
  id,
  ...props
}) => {
  const generatedId = useId();
  const inputId = id || generatedId;
  const errorId = error ? `${inputId}-error` : undefined;
  const helperId = helperText ? `${inputId}-helper` : undefined;

  const baseClasses =
    'block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:opacity-50 disabled:bg-gray-50 disabled:cursor-not-allowed';

  const variantClasses = {
    default: 'bg-white',
    filled: 'bg-gray-50 border-gray-200',
    outlined: 'bg-transparent border-2',
  };

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const inputClasses = clsx(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    error && 'border-red-500 focus:ring-red-500 focus:border-red-500',
    startIcon && 'pl-10',
    endIcon && 'pr-10',
    fullWidth && 'w-full',
    className
  );

  return (
    <div className={clsx('space-y-1', fullWidth && 'w-full')}>
      {label && (
        <label
          htmlFor={inputId}
          className='block text-sm font-medium text-gray-700'
        >
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}

      <div className='relative'>
        {startIcon && (
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <div className='h-5 w-5 text-gray-400'>{startIcon}</div>
          </div>
        )}

        <input
          id={inputId}
          className={inputClasses}
          aria-label={ariaLabel}
          aria-describedby={clsx(helperId, errorId)}
          aria-invalid={!!error}
          aria-required={required}
          {...props}
        />

        {endIcon && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <div className='h-5 w-5 text-gray-400'>{endIcon}</div>
          </div>
        )}
      </div>

      {error && (
        <p
          id={errorId}
          className='text-sm text-red-600'
          role='alert'
          aria-live='polite'
        >
          {error}
        </p>
      )}

      {helperText && !error && (
        <p id={helperId} className='text-sm text-gray-500'>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
