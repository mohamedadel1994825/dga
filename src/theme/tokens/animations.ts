/**
 * DGA Design System Animation Tokens
 * Consistent animations and transitions
 */

// Animation durations
export const durations = {
  instant: '0ms',
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '750ms',
  slowest: '1000ms',
} as const;

// Animation timing functions
export const easings = {
  linear: 'linear',
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
  // Custom easing curves
  bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
} as const;

// Common animations
export const animations = {
  // Fade animations
  fadeIn: {
    from: { opacity: '0' },
    to: { opacity: '1' },
  },
  fadeOut: {
    from: { opacity: '1' },
    to: { opacity: '0' },
  },
  // Slide animations
  slideInUp: {
    from: { transform: 'translateY(100%)', opacity: '0' },
    to: { transform: 'translateY(0)', opacity: '1' },
  },
  slideInDown: {
    from: { transform: 'translateY(-100%)', opacity: '0' },
    to: { transform: 'translateY(0)', opacity: '1' },
  },
  slideInLeft: {
    from: { transform: 'translateX(-100%)', opacity: '0' },
    to: { transform: 'translateX(0)', opacity: '1' },
  },
  slideInRight: {
    from: { transform: 'translateX(100%)', opacity: '0' },
    to: { transform: 'translateX(0)', opacity: '1' },
  },
  // Scale animations
  scaleIn: {
    from: { transform: 'scale(0)', opacity: '0' },
    to: { transform: 'scale(1)', opacity: '1' },
  },
  scaleOut: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0)', opacity: '0' },
  },
  // Bounce animations
  bounce: {
    from: { transform: 'translateY(0)' },
    '50%': { transform: 'translateY(-10px)' },
    to: { transform: 'translateY(0)' },
  },
  // Pulse animations
  pulse: {
    from: { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.05)' },
    to: { transform: 'scale(1)' },
  },
  // Shake animations
  shake: {
    from: { transform: 'translateX(0)' },
    '10%': { transform: 'translateX(-10px)' },
    '20%': { transform: 'translateX(10px)' },
    '30%': { transform: 'translateX(-10px)' },
    '40%': { transform: 'translateX(10px)' },
    '50%': { transform: 'translateX(-10px)' },
    '60%': { transform: 'translateX(10px)' },
    '70%': { transform: 'translateX(-10px)' },
    '80%': { transform: 'translateX(10px)' },
    '90%': { transform: 'translateX(-10px)' },
    to: { transform: 'translateX(0)' },
  },
} as const;

// Predefined animation combinations
export const animationPresets = {
  // Button animations
  buttonHover: {
    duration: durations.fast,
    easing: easings.smooth,
    properties: ['transform', 'box-shadow'],
  },
  buttonPress: {
    duration: durations.instant,
    easing: easings.linear,
    properties: ['transform'],
  },
  // Modal animations
  modalEnter: {
    duration: durations.normal,
    easing: easings.smooth,
    properties: ['opacity', 'transform'],
  },
  modalExit: {
    duration: durations.fast,
    easing: easings.sharp,
    properties: ['opacity', 'transform'],
  },
  // Toast animations
  toastEnter: {
    duration: durations.normal,
    easing: easings.spring,
    properties: ['opacity', 'transform'],
  },
  toastExit: {
    duration: durations.fast,
    easing: easings.sharp,
    properties: ['opacity', 'transform'],
  },
  // Page transitions
  pageEnter: {
    duration: durations.slow,
    easing: easings.smooth,
    properties: ['opacity', 'transform'],
  },
  pageExit: {
    duration: durations.normal,
    easing: easings.sharp,
    properties: ['opacity', 'transform'],
  },
} as const;

export type Duration = keyof typeof durations;
export type Easing = keyof typeof easings;
export type Animation = keyof typeof animations;
export type AnimationPreset = keyof typeof animationPresets;
