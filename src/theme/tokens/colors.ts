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
  25: '#f7fdf9',
  50: '#f3fcf6',
  100: '#dff6e7',
  200: '#b8eacb',
  300: '#88d8ad',
  400: '#54c08a',
  500: '#25935f',
  600: '#1b8354',
  700: '#166a45',
  800: '#14573a',
  900: '#104631',
  950: '#092a1e',
} as BaseColorScale;

const baseSecondaryScale = {
  0: '#ffffff',
  25: '#fffef7',
  50: '#fffef2',
  100: '#fffce6',
  200: '#fcf3bd',
  300: '#fae996',
  400: '#f7d54d',
  500: '#f5bd02',
  600: '#dba102',
  700: '#b87b02',
  800: '#945c01',
  900: '#6e3c00',
  950: '#472400',
} as BaseColorScale;

const baseNeutralScale = {
  0: '#ffffff',
  25: '#fcfcfd',
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d2d6db',
  400: '#9da4ae',
  500: '#6c737f',
  600: '#4d5761',
  700: '#384250',
  800: '#1f2a37',
  900: '#111927',
  950: '#0d121c',
} as BaseColorScale;

const baseWarningScale = {
  0: '#ffffff',
  25: '#fffcf5',
  50: '#fffaeb',
  100: '#fef0c7',
  200: '#fedf89',
  300: '#fec84b',
  400: '#fdb022',
  500: '#f79009',
  600: '#dc6803',
  700: '#b54708',
  800: '#93370d',
  900: '#7a2e0e',
  950: '#4e1d09',
} as BaseColorScale;

const baseErrorScale = {
  0: '#ffffff',
  25: '#fffbfa',
  50: '#fef3f2',
  100: '#fee4e2',
  200: '#fecdca',
  300: '#fda29b',
  400: '#f97066',
  500: '#f04438',
  600: '#d92d20',
  700: '#b42318',
  800: '#912018',
  900: '#7a271a',
  950: '#55160c',
} as BaseColorScale;

const baseSuccessScale = {
  0: '#ffffff',
  25: '#f6fef9',
  50: '#ecfdf3',
  100: '#dcfae6',
  200: '#abefc6',
  300: '#75e0a7',
  400: '#47cd89',
  500: '#17b26a',
  600: '#079455',
  700: '#067647',
  800: '#085d3a',
  900: '#074d31',
  950: '#053321',
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
  // Success has its own green scale (separate from secondary gold)
  success: baseSuccessScale,

  // Semantic Colors - Warning
  warning: baseWarningScale,

  // Semantic Colors - Error
  error: baseErrorScale,

  // Semantic Colors - Info
  // Best Practice: Info shares some values with primary but has distinct lighter shades
  info: {
    0: '#ffffff',
    25: '#f5faff',
    50: '#eff8ff',
    100: '#d1e9ff',
    200: '#b2ddff',
    300: '#84caff',
    400: '#53b1fd',
    500: '#2e90fa',
    600: '#1570ef',
    700: '#175cd3',
    800: '#1849a9',
    900: '#194185',
    950: '#102a56',
  } as BaseColorScale,

  // Background Colors - Semantic naming
  // Best Practice: Reference neutral scale for consistency
  background: {
    primary: '#ffffff', // #ffffff
    secondary: '#f9fafb',
    tertiary: '#ffffff',
    inverse: baseNeutralScale[950], // #0a0a0a → referenced as #0f172a in CSS (need to align)
    overlay: 'rgba(0, 0, 0, 0.5)',
    disabled: '#f1f5f9',
  },

  // Text Colors - Semantic naming
  // Best Practice: Reference neutral scale
  text: {
    primary: '#161616', // Dark neutral, slightly off from neutral.950
    secondary: '#384250',
    tertiary: '#6c737f',
    inverse: baseNeutralScale[0], // #ffffff
    disabled: '#94a3b8',
    link: basePrimaryScale[700], // References primary.700 - #166a45
    'link-hover': basePrimaryScale[800], // References primary.800 - #14573a
  },

  // Border Colors
  // Best Practice: Reference scale colors for semantic meanings
  border: {
    primary: '#d2d6db',
    secondary: '#e5e7eb',
    focus: basePrimaryScale[700], // References primary.700 - #166a45
    error: baseErrorScale[500], // References error.500 - #ef4444
    success: baseSuccessScale[500], // References success.500 - #17b26a
    warning: baseWarningScale[500], // References warning.500 - #f59e0b
    disabled: '#cbd5e1',
  },

  // Interactive State Colors
  // Best Practice: Reference scale colors instead of duplicating values
  interactive: {
    hover: {
      primary: basePrimaryScale[800], // References primary.800 - #14573a
      secondary: baseSecondaryScale[700], // References secondary.700 - #b87b02
      success: baseSuccessScale[600], // References success.600 - #079455
      warning: baseWarningScale[600], // References warning.600 - #d97706
      error: baseErrorScale[600], // References error.600 - #dc2626
      info: '#2563eb', // Distinct info hover color
    },
    active: {
      primary: basePrimaryScale[950], // References primary.950 - #092a1e
      secondary: baseSecondaryScale[800], // References secondary.800 - #945c01
      success: baseSuccessScale[700], // References success.700 - #067647
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
  0: '#0d121c',
  25: '#fcfcfd',
  50: '#f9fafb',
  100: '#f3f4f6',
  200: '#e5e7eb',
  300: '#d2d6db',
  400: '#9da4ae',
  500: '#6c737f',
  600: '#4d5761',
  700: '#384250',
  800: '#1f2a37',
  900: '#111927',
  950: '#0d121c',
} as BaseColorScale;

export const darkColors = {
  // Primary Brand Colors (same as light - brand consistency)
  primary: basePrimaryScale,

  // Secondary Brand Colors (same as light - brand consistency)
  secondary: baseSecondaryScale,

  // Neutral Colors (inverted for dark mode - better contrast)
  neutral: baseNeutralScaleDark,

  // Semantic Colors (same across themes for consistency)
  success: baseSuccessScale,
  warning: baseWarningScale,
  error: baseErrorScale,
  info: lightColors.info, // References light info which already references primary

  // Background Colors (inverted for dark mode)
  // Best Practice: Reference neutral dark scale
  background: {
    primary: '#0d121c', // Slightly lighter than neutral.950 for better contrast
    secondary: '#111927',
    tertiary: '#1f2a37',
    inverse: baseNeutralScaleDark[0], // References dark neutral.0 - #0d121c (darkest in dark mode)
    overlay: 'rgba(0, 0, 0, 0.75)',
    disabled: '#1e293b',
  },

  // Text Colors (inverted for dark mode)
  // Best Practice: Reference neutral dark scale
  text: {
    primary: '#ffffff', // References dark neutral.950 - #ffffff
    secondary: '#f3f4f6',
    tertiary: '#e5e7eb',
    inverse: '#0f172a',
    disabled: '#475569',
    link: '#60a5fa', // Lighter for better visibility in dark mode (info.400)
    'link-hover': '#93c5fd', // Lighter for dark mode (info.300)
  },

  // Border Colors (adjusted for dark mode)
  // Best Practice: Reference scale colors where appropriate
  border: {
    primary: '#6c737f',
    secondary: '#384250',
    focus: '#60a5fa', // Lighter for dark mode (info.400)
    error: baseErrorScale[400], // References error.400 - #f87171
    success: baseSuccessScale[400], // References success.400 - #47cd89
    warning: baseWarningScale[400], // References warning.400 - #fbbf24
    disabled: '#475569',
  },

  // Interactive State Colors (adjusted for dark mode)
  // Best Practice: Reference scale colors, use lighter shades for dark mode
  interactive: {
    hover: {
      primary: basePrimaryScale[600], // References primary.600 - #1b8354
      secondary: baseSecondaryScale[400], // References secondary.400 - #f7d54d
      success: baseSuccessScale[400], // References success.400 - #47cd89
      warning: baseWarningScale[400], // References warning.400 - #fbbf24
      error: baseErrorScale[400], // References error.400 - #f87171
      info: '#60a5fa', // info.400
    },
    active: {
      primary: basePrimaryScale[500], // References primary.500 - #25935f
      secondary: baseSecondaryScale[300], // References secondary.300 - #fae996
      success: baseSuccessScale[300], // References success.300 - #75e0a7
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
