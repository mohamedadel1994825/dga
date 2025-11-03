/**
 * DGA Design System Layout Tokens
 * Containers, widths and max-widths derived from the shared spacing scale
 */

import { spacing } from './spacing';

export const containers = {
  maxWidthDesktop: spacing[320], // 1280px
  paddingDesktop: spacing[8], // 32px
  paddingMobile: spacing[4], // 16px
} as const;

export const widths = {
  xxs: spacing[80], // 320px
  xs: spacing[96], // 384px
  sm: spacing[120], // 480px
  md: spacing[140], // 560px
  lg: spacing[160], // 640px
  xl: spacing[192], // 768px
  '2xl': spacing[256], // 1024px
  '3xl': spacing[320], // 1280px
  '4xl': spacing[360], // 1440px
  '5xl': spacing[400], // 1600px
  '6xl': spacing[480], // 1920px
} as const;

export const maxWidths = {
  paragraph: spacing[180], // 720px
} as const;

export type Containers = keyof typeof containers;
export type WidthKey = keyof typeof widths;
export type MaxWidthKey = keyof typeof maxWidths;
