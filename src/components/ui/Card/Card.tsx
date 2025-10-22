import React from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  clickable?: boolean;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  variant = 'default',
  padding = 'md',
  hover = false,
  clickable = false,
  children,
  className,
  ...props
}) => {
  const baseClasses = 'rounded-lg border';

  const variantClasses = {
    default: 'bg-white border-gray-200',
    elevated: 'bg-white border-gray-200 shadow-md',
    outlined: 'bg-transparent border-gray-300',
    filled: 'bg-gray-50 border-gray-200',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    paddingClasses[padding],
    hover && 'hover:shadow-md transition-shadow duration-200',
    clickable &&
      'cursor-pointer hover:bg-gray-50 transition-colors duration-200',
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
