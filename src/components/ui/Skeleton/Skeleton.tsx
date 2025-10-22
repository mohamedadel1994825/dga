import React from 'react';
import { clsx } from 'clsx';
import type { BaseComponentProps } from '@/types';

export interface SkeletonProps extends BaseComponentProps {
  variant?: 'text' | 'rectangular' | 'circular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
  className,
  ...props
}) => {
  const baseClasses = 'bg-gray-200 rounded';

  const variantClasses = {
    text: 'h-4',
    rectangular: 'rounded-md',
    circular: 'rounded-full',
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-wave',
    none: '',
  };

  const classes = clsx(
    baseClasses,
    variantClasses[variant],
    animationClasses[animation],
    className
  );

  const style = {
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height:
      height ||
      (variant === 'text' ? '1rem' : variant === 'circular' ? '40px' : '200px'),
  };

  return <div className={classes} style={style} {...props} />;
};

export default Skeleton;
