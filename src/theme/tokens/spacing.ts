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

export type Spacing = keyof typeof spacing;
