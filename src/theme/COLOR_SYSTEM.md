# Color System Documentation

## Overview

This document explains how to use the color system in the application, including how to integrate Figma design tokens.

## Architecture

The color system follows best practices for design tokens:

- **Single Source of Truth**: Colors are defined in `src/theme/tokens/colors.ts`
- **CSS Variables**: Automatically generated for use in CSS/styling
- **Type Safety**: Full TypeScript support with type-safe color paths
- **Light & Dark Mode**: Separate color definitions for each theme
- **Reusable Utilities**: Helper functions for common color operations

## Color Structure

### Scale Colors

Scale colors use a numeric scale from 0-950:

- `0, 50, 100`: Lightest shades
- `500`: Base/main color
- `700-900`: Darker shades
- `950`: Darkest shade

Available scale colors:

- `primary` - Primary brand color
- `secondary` - Secondary brand color
- `neutral` - Neutral/gray colors
- `success`, `warning`, `error`, `info` - Semantic colors

### Semantic Colors

Named semantic tokens for common use cases:

- `background.*` - Background colors (primary, secondary, tertiary, inverse, overlay, disabled)
- `text.*` - Text colors (primary, secondary, tertiary, inverse, disabled, link, link-hover)
- `border.*` - Border colors (primary, secondary, focus, error, success, warning, disabled)

### Interactive States

Pre-defined states for interactive elements:

- `interactive.hover.*` - Hover states for primary, secondary, and semantic colors
- `interactive.active.*` - Active/pressed states
- `interactive.disabled.*` - Disabled states

## Using Colors in Components

### Using CSS Variables (Recommended)

```css
/* In your CSS/styling */
.my-component {
  background-color: var(--color-background-primary);
  color: var(--color-text-primary);
  border-color: var(--color-border-primary);
}
```

### Using Tailwind Classes

```tsx
<div className="bg-background-primary text-text-primary border-border-primary">
  Content
</div>

<div className="bg-primary-700 text-white">
  Primary colored element
</div>
```

### Using TypeScript/React

**Recommended: Type-safe color object (autocomplete support)**

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { colors } = useTheme();

  // ✅ Type-safe, autocomplete support!
  const primaryColor = colors.primary[700]; // '#1e40af'
  const textColor = colors.text.primary; // '#0f172a'
  const bgColor = colors.background.primary; // '#ffffff'

  // Dynamic scale (also type-safe)
  const hoverColor = colors.primary.get(800); // '#1e3a8a'

  return (
    <div style={{ backgroundColor: bgColor, color: textColor }}>Content</div>
  );
}
```

**Alternative: String-based access (backward compatible)**

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { getColor } = useTheme();

  // Still works, but no autocomplete
  const primaryColor = getColor('primary.700');
  const textColor = getColor('text.primary');

  return (
    <div style={{ backgroundColor: primaryColor, color: textColor }}>
      Content
    </div>
  );
}
```

### Direct Import

```tsx
import { lightColors, darkColors, getColor } from '@/theme';
import { useThemeStore } from '@/theme';

function MyComponent() {
  const { mode } = useThemeStore();
  const colors = mode === 'dark' ? darkColors : lightColors;

  const primaryColor = getColor('primary.700', colors);

  return <div style={{ color: primaryColor }}>Content</div>;
}
```

## Integrating Figma Tokens

### Method 1: Manual Update

1. **Extract tokens from Figma**
   - Open your Figma file
   - Go to Dev Mode
   - Navigate to the color tokens section
   - Copy the color values

2. **Update `src/theme/tokens/colors.ts`**

   ```ts
   export const lightColors = {
     primary: {
       0: '#ffffff', // Replace with Figma token value
       50: '#eef2ff', // Replace with Figma token value
       // ... continue for all scales
     },
     // ... update other color categories
   };
   ```

3. **Regenerate CSS variables**
   - Run `pnpm theme:generate-css` to automatically generate `theme-variables.css` from `colors.ts`
   - No manual editing needed! 🎉

### Method 2: Manual Figma Token Integration

1. **Extract tokens from Figma**
   - Export color tokens from Figma as JSON or copy values manually
   - Convert the format to match the structure in `colors.ts`

2. **Update color values**
   - Replace the color values in `src/theme/tokens/colors.ts` directly
   - Ensure the structure matches (scale colors, semantic colors, etc.)

## Best Practices

### 1. Use Semantic Colors When Possible

```tsx
// ✅ Good - Uses semantic naming
<div className="bg-background-primary text-text-primary">

// ❌ Avoid - Uses raw scale values
<div className="bg-neutral-0 text-neutral-950">
```

### 2. Use Type-Safe Color Accessors

```tsx
// ✅ Best - Type-safe with autocomplete
const { colors } = useTheme();
const color = colors.primary[700]; // Autocomplete shows: 0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
const text = colors.text.primary; // Autocomplete shows: primary, secondary, tertiary, inverse, disabled, link, link-hover

// ✅ Good - Dynamic but still type-safe
const dynamicColor = colors.primary.get(700); // TypeScript ensures valid ColorScale

// ⚠️ Acceptable - String-based (no autocomplete)
const color2 = getColor('primary.700');
```

### 3. Consider Accessibility

When choosing colors, ensure sufficient contrast ratios:

- WCAG requires 4.5:1 for normal text
- WCAG requires 3:1 for large text
- Test color combinations using browser DevTools or online contrast checkers

### 4. Use CSS Variables for Dynamic Theming

```tsx
// ✅ Good - Automatically adapts to theme
<div style={{ backgroundColor: 'var(--color-background-primary)' }}>

// ❌ Avoid - Hard-coded colors don't adapt
<div style={{ backgroundColor: '#ffffff' }}>
```

## Color Utilities

Color utilities have been removed as they were unused. The main color access is through:

- `getColor()` function from `useTheme()` hook
- CSS variables in `theme-variables.css`
- Direct imports from `@/theme/tokens/colors` if needed

## Troubleshooting

### Colors not updating in dark mode?

- Ensure you've updated both `lightColors` and `darkColors` in `colors.ts`
- Verify CSS variables are updated in `theme-variables.css`
- Check that `data-theme` attribute is set on `:root`

### Type errors with color paths?

- Use `ColorPath` type for type-safe paths
- Check that the path exists in the color token structure
- See `src/theme/tokens/colors.ts` for valid color paths

### CSS variables not working?

- Ensure `theme-variables.css` is imported in your app
- Verify variable names match the pattern `--color-{category}-{scale}`
- Check browser DevTools to see if variables are defined

## Migration from Old System

If you're migrating from the old color system:

1. Replace hard-coded hex colors with CSS variables
2. Update component styles to use semantic color names
3. Use `useTheme()` hook instead of direct color imports
4. Update Tailwind classes to use new color tokens

## Further Reading

- [Design Tokens Best Practices](https://design-tokens.github.io/community-group/format/)
- [WCAG Color Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
