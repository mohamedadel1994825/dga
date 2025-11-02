/**
 * CSS Variable Generator
 * Generates theme-variables.css from colors.ts
 *
 * Usage:
 * Run: npx tsx src/theme/utils/generate-css-variables.ts
 * Or import and call generateCSSVariables()
 */

import { lightColors, darkColors } from '../tokens/colors';
import { writeFileSync } from 'fs';
import { join } from 'path';

/**
 * Convert color object path to CSS variable name
 * Example: 'primary.700' -> '--color-primary-700'
 * Example: 'text.primary' -> '--color-text-primary'
 */
function toCSSVarName(path: string): string {
  return `--color-${path.replace(/\./g, '-')}`;
}

/**
 * Flatten color object to key-value pairs
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function flattenColors(colors: any, prefix = ''): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    const newPrefix = prefix ? `${prefix}.${key}` : key;

    if (typeof value === 'string') {
      result[newPrefix] = value;
    } else if (typeof value === 'object' && value !== null) {
      // Recursively flatten nested objects
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.assign(result, flattenColors(value as any, newPrefix));
    }
  }

  return result;
}

/**
 * Generate CSS variables for a theme
 */
function generateThemeVariables(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any,
  themeName: 'light' | 'dark'
): string {
  const flatColors = flattenColors(colors);
  const lines: string[] = [];

  lines.push(
    `/* ${themeName === 'light' ? 'Light' : 'Dark'} Theme Variables */`
  );
  lines.push(`:root[data-theme='${themeName}'] {`);

  // Group by category for better organization
  const grouped: Record<string, Record<string, string>> = {};

  for (const [path, value] of Object.entries(flatColors)) {
    const category = path.split('.')[0];
    if (!grouped[category]) {
      grouped[category] = {};
    }
    grouped[category][path] = value;
  }

  // Background colors
  if (grouped.background) {
    lines.push('  /* Background Colors */');
    for (const [path, value] of Object.entries(grouped.background)) {
      lines.push(`  ${toCSSVarName(path)}: ${value};`);
    }
    lines.push('');
  }

  // Text colors
  if (grouped.text) {
    lines.push('  /* Text Colors */');
    for (const [path, value] of Object.entries(grouped.text)) {
      lines.push(`  ${toCSSVarName(path)}: ${value};`);
    }
    lines.push('');
  }

  // Border colors
  if (grouped.border) {
    lines.push('  /* Border Colors */');
    for (const [path, value] of Object.entries(grouped.border)) {
      lines.push(`  ${toCSSVarName(path)}: ${value};`);
    }
    lines.push('');
  }

  // Scale colors (primary, secondary, neutral, semantic)
  const scaleColors = [
    'primary',
    'secondary',
    'neutral',
    'success',
    'warning',
    'error',
    'info',
  ];
  for (const scaleColor of scaleColors) {
    if (grouped[scaleColor]) {
      const label =
        scaleColor === 'primary'
          ? 'Primary Colors - DGA Official Blue (#1E40AF)'
          : scaleColor === 'secondary'
            ? 'Secondary Colors - DGA Official Green (#059669)'
            : scaleColor === 'success'
              ? 'Success Colors - DGA Official (#10B981)'
              : scaleColor === 'warning'
                ? 'Warning Colors - DGA Official'
                : scaleColor === 'error'
                  ? 'Error Colors - DGA Official'
                  : scaleColor === 'info'
                    ? 'Info Colors - DGA Official (#3B82F6)'
                    : `${scaleColor.charAt(0).toUpperCase() + scaleColor.slice(1)} Colors`;

      // Add comment for dark theme if same as light
      if (themeName === 'dark') {
        if (
          scaleColor === 'primary' ||
          scaleColor === 'secondary' ||
          scaleColor === 'success' ||
          scaleColor === 'warning' ||
          scaleColor === 'error' ||
          scaleColor === 'info'
        ) {
          lines.push(`  /* ${label} (same as light) */`);
        } else {
          lines.push(`  /* ${label} (inverted for dark mode) */`);
        }
      } else {
        lines.push(`  /* ${label} */`);
      }

      // Sort by scale (0, 50, 100, ..., 950)
      const sortedEntries = Object.entries(grouped[scaleColor]).sort(
        ([a], [b]) => {
          const scaleA = parseInt(a.split('.')[1] || '0');
          const scaleB = parseInt(b.split('.')[1] || '0');
          return scaleA - scaleB;
        }
      );

      for (const [path, value] of sortedEntries) {
        lines.push(`  ${toCSSVarName(path)}: ${value};`);
      }
      lines.push('');
    }
  }

  // Interactive colors
  if (grouped.interactive) {
    if (themeName === 'dark') {
      lines.push('  /* Interactive State Colors (adjusted for dark mode) */');
    } else {
      lines.push('  /* Interactive State Colors */');
      lines.push(
        '  /* Note: These are typically used via JavaScript/TypeScript */'
      );
    }
    lines.push('');

    // Group interactive by type (hover, active, disabled)
    const interactiveGrouped: Record<string, Record<string, string>> = {};
    for (const [path, value] of Object.entries(grouped.interactive)) {
      const parts = path.split('.');
      const type = parts[1]; // hover, active, or disabled
      if (!interactiveGrouped[type]) {
        interactiveGrouped[type] = {};
      }
      interactiveGrouped[type][path] = value;
    }

    // Hover
    if (interactiveGrouped.hover) {
      for (const [path, value] of Object.entries(interactiveGrouped.hover)) {
        lines.push(`  ${toCSSVarName(path)}: ${value};`);
      }
      lines.push('');
    }

    // Active
    if (interactiveGrouped.active) {
      for (const [path, value] of Object.entries(interactiveGrouped.active)) {
        lines.push(`  ${toCSSVarName(path)}: ${value};`);
      }
      lines.push('');
    }

    // Disabled
    if (interactiveGrouped.disabled) {
      for (const [path, value] of Object.entries(interactiveGrouped.disabled)) {
        lines.push(`  ${toCSSVarName(path)}: ${value};`);
      }
      lines.push('');
    }
  }

  lines.push('}');

  return lines.join('\n');
}

/**
 * Generate complete CSS variables file
 * Includes CSS-only sections (transitions, accessibility) that aren't in colors.ts
 */
export function generateCompleteCSSVariables(): string {
  const header = `/**
 * Theme CSS Variables
 * AUTO-GENERATED from src/theme/tokens/colors.ts
 * DO NOT EDIT MANUALLY - Run generate-css-variables.ts to regenerate
 * 
 * To update colors:
 * 1. Update colors in src/theme/tokens/colors.ts
 * 2. Run: npx tsx src/theme/utils/generate-css-variables.ts
 * 3. This file will be automatically regenerated
 */

/* Global Theme Transitions */
:root {
  /* Smooth transitions for all theme changes */
  transition:
    background-color 0.3s ease-in-out,
    color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
}

/* Accessibility: Respect user's motion preferences */
@media (prefers-reduced-motion: reduce) {
  :root {
    transition: none;
  }

  * {
    transition: none !important;
    animation: none !important;
  }
}

/* Accessibility: High contrast mode support
 * NOTE: These are CSS-only accessibility overrides (not in colors.ts)
 * They ensure maximum contrast for users who need it
 */
@media (prefers-contrast: high) {
  :root[data-theme='light'] {
    --color-background-primary: #ffffff;
    --color-text-primary: #000000;
    --color-border-primary: #000000;
  }

  :root[data-theme='dark'] {
    --color-background-primary: #000000;
    --color-text-primary: #ffffff;
    --color-border-primary: #ffffff;
  }
}

`;

  const lightTheme = generateThemeVariables(lightColors, 'light');
  const darkTheme = generateThemeVariables(darkColors, 'dark');

  return (
    header + '\n' + lightTheme + '\n\n/* Dark Theme Variables */\n' + darkTheme
  );
}

/**
 * Main function - generates and writes CSS file
 */
function main() {
  const cssContent = generateCompleteCSSVariables();
  const outputPath = join(process.cwd(), 'src/theme/theme-variables.css');

  writeFileSync(outputPath, cssContent, 'utf-8');
  console.log('✅ Successfully generated theme-variables.css from colors.ts');
  console.log(`📝 File written to: ${outputPath}`);
  console.log('');
  console.log(
    '⚠️  Note: High contrast mode colors are CSS-only (not in colors.ts)'
  );
  console.log('   They are preserved in the generated file for accessibility.');
}

// Run if called directly
if (require.main === module) {
  main();
}
