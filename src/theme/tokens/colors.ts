/**
 * DGA Design System Color Tokens
 * Best Practice: Structured color system with Figma token support
 *
 * To update colors from Figma:
 * 1. Extract color tokens from Figma (using Figma Dev Mode or API)
 * 2. Replace the color values below while maintaining the structure
 * 3. Ensure light and dark variants are properly defined
 *
 * Color Structure:
 * - Scale colors (primary, secondary, neutral, semantic): 0-950 scale
 * - Semantic colors (background, text, border): Named semantic tokens
 * - Interactive states: Hover, active, disabled states
 */

/**
 * Color Scale - Numeric scale from 0-950
 * Lightest (0/50) to Darkest (950)
 */
export type ColorScale =
  | 0
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

/**
 * Semantic Color Categories
 */
export type SemanticColor = 'success' | 'warning' | 'error' | 'info';

/**
 * All Color Categories
 */
export type ColorCategory =
  | 'primary'
  | 'secondary'
  | 'neutral'
  | SemanticColor
  | 'info';

/**
 * Base Color Scale Structure
 */
export type BaseColorScale = Record<ColorScale, string>;

/**
 * Interactive State Colors
 */
export interface InteractiveStates {
  hover: Record<'primary' | 'secondary' | SemanticColor, string>;
  active: Record<'primary' | 'secondary' | SemanticColor, string>;
  disabled: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}

/**
 * Base Color Scales (Single Source of Truth)
 * Best Practice: Define colors once, reference them everywhere
 */
const basePrimaryScale = {
  0: '#ffffff',
  50: '#eef2ff',
  100: '#e0e7ff',
  200: '#c7d2fe',
  300: '#a5b4fc',
  400: '#818cf8',
  500: '#6366f1',
  600: '#4f46e5',
  700: '#1e40af', // Main primary - DGA Official
  800: '#1e3a8a',
  900: '#1a2f6f', // Fixed: Distinct darker shade between 800 and 950
  950: '#172554',
} as BaseColorScale;

const baseSecondaryScale = {
  0: '#ffffff',
  50: '#ecfdf5',
  100: '#d1fae5',
  200: '#a7f3d0',
  300: '#6ee7b7',
  400: '#34d399',
  500: '#10b981',
  600: '#059669', // Main secondary - DGA Official
  700: '#047857',
  800: '#065f46',
  900: '#064e3b',
  950: '#022c22',
} as BaseColorScale;

const baseNeutralScale = {
  0: '#ffffff',
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#e5e5e5',
  300: '#d4d4d4',
  400: '#a3a3a3',
  500: '#737373',
  600: '#525252',
  700: '#404040',
  800: '#262626',
  900: '#171717',
  950: '#0a0a0a',
} as BaseColorScale;

const baseWarningScale = {
  0: '#ffffff',
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b', // Main warning - DGA Official
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  950: '#451a03',
} as BaseColorScale;

const baseErrorScale = {
  0: '#ffffff',
  50: '#fef2f2',
  100: '#fee2e2',
  200: '#fecaca',
  300: '#fca5a5',
  400: '#f87171',
  500: '#ef4444', // Main error - DGA Official
  600: '#dc2626', // Accent - DGA Official
  700: '#b91c1c',
  800: '#991b1b',
  900: '#7f1d1d',
  950: '#450a0a',
} as BaseColorScale;

/**
 * Light Theme Color Tokens
 * Best Practice: Reference base scales to avoid duplication
 * Update base scales above when syncing with Figma tokens
 */
export const lightColors = {
  // Primary Brand Colors
  primary: basePrimaryScale,

  // Secondary Brand Colors
  secondary: baseSecondaryScale,

  // Neutral/Gray Colors
  neutral: baseNeutralScale,

  // Semantic Colors - Success
  // Best Practice: Success uses secondary scale (green)
  success: baseSecondaryScale,

  // Semantic Colors - Warning
  warning: baseWarningScale,

  // Semantic Colors - Error
  error: baseErrorScale,

  // Semantic Colors - Info
  // Best Practice: Info shares some values with primary but has distinct lighter shades
  info: {
    0: '#ffffff',
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Main info - DGA Official
    600: '#2563eb',
    700: '#1d4ed8',
    800: basePrimaryScale[700], // References primary.700 - #1e40af
    900: basePrimaryScale[800], // References primary.800 - #1e3a8a
    950: basePrimaryScale[950], // References primary.950 - #172554
  } as BaseColorScale,

  // Background Colors - Semantic naming
  // Best Practice: Reference neutral scale for consistency
  background: {
    primary: baseNeutralScale[0], // #ffffff
    secondary: '#f8fafc',
    tertiary: '#f1f5f9',
    inverse: baseNeutralScale[950], // #0a0a0a → referenced as #0f172a in CSS (need to align)
    overlay: 'rgba(0, 0, 0, 0.5)',
    disabled: '#f1f5f9',
  },

  // Text Colors - Semantic naming
  // Best Practice: Reference neutral scale
  text: {
    primary: '#0f172a', // Dark neutral, slightly off from neutral.950
    secondary: '#475569',
    tertiary: '#64748b',
    inverse: baseNeutralScale[0], // #ffffff
    disabled: '#94a3b8',
    link: basePrimaryScale[700], // References primary.700 - #1e40af
    'link-hover': basePrimaryScale[800], // References primary.800 - #1e3a8a
  },

  // Border Colors
  // Best Practice: Reference scale colors for semantic meanings
  border: {
    primary: '#e2e8f0',
    secondary: '#cbd5e1',
    focus: basePrimaryScale[700], // References primary.700 - #1e40af
    error: baseErrorScale[500], // References error.500 - #ef4444
    success: baseSecondaryScale[500], // References secondary/success.500 - #10b981
    warning: baseWarningScale[500], // References warning.500 - #f59e0b
    disabled: '#cbd5e1',
  },

  // Interactive State Colors
  // Best Practice: Reference scale colors instead of duplicating values
  interactive: {
    hover: {
      primary: basePrimaryScale[800], // References primary.800 - #1e3a8a
      secondary: baseSecondaryScale[700], // References secondary.700 - #047857
      success: baseSecondaryScale[600], // References success.600 - #059669
      warning: baseWarningScale[600], // References warning.600 - #d97706
      error: baseErrorScale[600], // References error.600 - #dc2626
      info: '#2563eb', // Distinct info hover color
    },
    active: {
      primary: basePrimaryScale[950], // References primary.950 - #172554
      secondary: baseSecondaryScale[800], // References secondary.800 - #065f46
      success: baseSecondaryScale[700], // References success.700 - #047857
      warning: baseWarningScale[700], // References warning.700 - #b45309
      error: baseErrorScale[700], // References error.700 - #b91c1c
      info: '#1d4ed8', // Distinct info active color
    },
    disabled: {
      primary: '#94a3b8',
      secondary: '#cbd5e1',
      background: '#f1f5f9',
      text: '#94a3b8',
    },
  } as InteractiveStates,
} as const;

/**
 * Dark Theme Color Tokens
 * Best Practice: Define explicit dark mode values rather than inverting
 * This ensures better contrast and accessibility
 */
/**
 * Dark Theme Base Scales
 * Best Practice: Define dark mode scales separately, reference base scales where shared
 */
const baseNeutralScaleDark = {
  0: '#0a0a0a',
  50: '#171717',
  100: '#262626',
  200: '#404040',
  300: '#525252',
  400: '#737373',
  500: '#a3a3a3',
  600: '#d4d4d4',
  700: '#e5e5e5',
  800: '#f5f5f5',
  900: '#fafafa',
  950: '#ffffff',
} as BaseColorScale;

export const darkColors = {
  // Primary Brand Colors (same as light - brand consistency)
  primary: basePrimaryScale,

  // Secondary Brand Colors (same as light - brand consistency)
  secondary: baseSecondaryScale,

  // Neutral Colors (inverted for dark mode - better contrast)
  neutral: baseNeutralScaleDark,

  // Semantic Colors (same across themes for consistency)
  success: baseSecondaryScale,
  warning: baseWarningScale,
  error: baseErrorScale,
  info: lightColors.info, // References light info which already references primary

  // Background Colors (inverted for dark mode)
  // Best Practice: Reference neutral dark scale
  background: {
    primary: '#0f172a', // Slightly lighter than neutral.950 for better contrast
    secondary: '#1e293b',
    tertiary: '#334155',
    inverse: baseNeutralScaleDark[950], // References dark neutral.950 - #ffffff
    overlay: 'rgba(0, 0, 0, 0.75)',
    disabled: '#1e293b',
  },

  // Text Colors (inverted for dark mode)
  // Best Practice: Reference neutral dark scale
  text: {
    primary: baseNeutralScaleDark[950], // References dark neutral.950 - #ffffff
    secondary: '#cbd5e1',
    tertiary: '#94a3b8',
    inverse: '#0f172a',
    disabled: '#475569',
    link: '#60a5fa', // Lighter for better visibility in dark mode (info.400)
    'link-hover': '#93c5fd', // Lighter for dark mode (info.300)
  },

  // Border Colors (adjusted for dark mode)
  // Best Practice: Reference scale colors where appropriate
  border: {
    primary: '#334155',
    secondary: '#475569',
    focus: '#60a5fa', // Lighter for dark mode (info.400)
    error: baseErrorScale[400], // References error.400 - #f87171
    success: baseSecondaryScale[400], // References success.400 - #34d399
    warning: baseWarningScale[400], // References warning.400 - #fbbf24
    disabled: '#475569',
  },

  // Interactive State Colors (adjusted for dark mode)
  // Best Practice: Reference scale colors, use lighter shades for dark mode
  interactive: {
    hover: {
      primary: basePrimaryScale[600], // References primary.600 - #4f46e5
      secondary: baseSecondaryScale[400], // References secondary.400 - #34d399
      success: baseSecondaryScale[400], // References success.400 - #34d399
      warning: baseWarningScale[400], // References warning.400 - #fbbf24
      error: baseErrorScale[400], // References error.400 - #f87171
      info: '#60a5fa', // info.400
    },
    active: {
      primary: basePrimaryScale[500], // References primary.500 - #6366f1
      secondary: baseSecondaryScale[300], // References secondary.300 - #6ee7b7
      success: baseSecondaryScale[300], // References success.300 - #6ee7b7
      warning: baseWarningScale[300], // References warning.300 - #fcd34d
      error: baseErrorScale[300], // References error.300 - #fca5a5
      info: '#93c5fd', // info.300
    },
    disabled: {
      primary: '#475569',
      secondary: '#334155',
      background: '#1e293b',
      text: '#475569',
    },
  } as InteractiveStates,
} as const;

/**
 * Color Token Type
 * Used for type-safe color access
 */
export type ColorToken = typeof lightColors;

/**
 * Color Path Type
 * Helper type for type-safe color path access
 */
export type ColorPath =
  | `primary.${ColorScale}`
  | `secondary.${ColorScale}`
  | `neutral.${ColorScale}`
  | `success.${ColorScale}`
  | `warning.${ColorScale}`
  | `error.${ColorScale}`
  | `info.${ColorScale}`
  | `background.${keyof typeof lightColors.background}`
  | `text.${keyof typeof lightColors.text}`
  | `border.${keyof typeof lightColors.border}`
  | `interactive.hover.${'primary' | 'secondary' | SemanticColor | 'info'}`
  | `interactive.active.${'primary' | 'secondary' | SemanticColor | 'info'}`
  | `interactive.disabled.${'primary' | 'secondary' | 'background' | 'text'}`;

/**
 * Get color value from token path
 * Best Practice: Type-safe color accessor
 *
 * @example
 * getColor('primary.700', lightColors) // '#1e40af'
 * getColor('text.primary', lightColors) // '#0f172a'
 */
export function getColor(
  path: ColorPath,
  colors: ColorToken = lightColors
): string {
  const keys = path.split('.') as string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = colors;

  for (const key of keys) {
    value = value?.[key];
    if (value === undefined) {
      console.warn(`Color path "${path}" not found`);
      return '#000000'; // Fallback to black
    }
  }

  return typeof value === 'string' ? value : '#000000';
}

/**
 * Export color scales for easy access
 */
export const colorScales = {
  primary: (Object.keys(lightColors.primary) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  secondary: (Object.keys(lightColors.secondary) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  neutral: (Object.keys(lightColors.neutral) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  success: (Object.keys(lightColors.success) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  warning: (Object.keys(lightColors.warning) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  error: (Object.keys(lightColors.error) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
  info: (Object.keys(lightColors.info) as string[]).map(
    k => parseInt(k) as ColorScale
  ),
} as const;
