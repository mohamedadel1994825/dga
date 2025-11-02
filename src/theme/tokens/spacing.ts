/**
 * DGA Design System Spacing Tokens
 * Consistent spacing scale for margins, padding, and gaps
 */

export const spacing = {
  0: '0',
  1: '0.25rem', // 4px
  2: '0.5rem', // 8px
  3: '0.75rem', // 12px
  4: '1rem', // 16px
  5: '1.25rem', // 20px
  6: '1.5rem', // 24px
  8: '2rem', // 32px
  10: '2.5rem', // 40px
  12: '3rem', // 48px
  15: '0.375rem', // 6px
  16: '4rem', // 64px
  20: '5rem', // 80px
  24: '6rem', // 96px
  32: '8rem', // 128px
  40: '10rem', // 160px
  48: '12rem', // 192px
  56: '14rem', // 224px
  64: '16rem', // 256px
  80: '20rem', // 320px
  96: '24rem', // 384px
  120: '30rem', // 480px
  140: '35rem', // 560px
  160: '40rem', // 640px
  180: '45rem', // 720px
  192: '48rem', // 768px
  256: '64rem', // 1024px
  320: '80rem', // 1280px
  360: '90rem', // 1440px
  400: '100rem', // 1600px
  480: '120rem', // 1920px
} as const;

// Semantic spacing scale
export const spacingScale = {
  xs: spacing[1], // 4px
  sm: spacing[2], // 8px
  md: spacing[4], // 16px
  lg: spacing[6], // 24px
  xl: spacing[8], // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
  '4xl': spacing[24], // 96px
  '5xl': spacing[32], // 128px
  '6xl': spacing[48], // 192px
  '7xl': spacing[64], // 256px
  '8xl': spacing[80], // 320px
  '9xl': spacing[96], // 384px
} as const;

// Component-specific spacing
export const componentSpacing = {
  // Button padding
  button: {
    sm: `${spacing[2]} ${spacing[4]}`, // 8px 16px
    md: `${spacing[3]} ${spacing[6]}`, // 12px 24px
    lg: `${spacing[4]} ${spacing[8]}`, // 16px 32px
  },
  // Card padding
  card: {
    sm: spacing[4], // 16px
    md: spacing[6], // 24px
    lg: spacing[8], // 32px
  },
  // Form spacing
  form: {
    field: spacing[3], // Space between form fields
    label: spacing[2], // Space between label and input
    group: spacing[6], // Space between form groups
  },
  // Layout spacing
  layout: {
    section: spacing[16], // Space between sections
    container: spacing[8], // Container padding
    grid: spacing[6], // Grid gap
  },
} as const;

export type Spacing = keyof typeof spacing;
export type SpacingScale = keyof typeof spacingScale;
export type ComponentSpacing = keyof typeof componentSpacing;
