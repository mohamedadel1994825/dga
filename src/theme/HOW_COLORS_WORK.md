# How the Color System Works

## Why Both Files Are Needed

You have **two files** because **CSS cannot read TypeScript files**. They serve different purposes but work together:

```
┌─────────────────────────────────────────────────────────────┐
│                    colors.ts (TypeScript)                    │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  const lightColors = {                              │    │
│  │    primary: { 700: '#1e40af' }                      │    │
│  │  }                                                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  Used by:                                                    │
│  • TypeScript/React code                                    │
│  • useTheme() hook                                          │
│  • Type checking                                            │
│  • JavaScript logic                                         │
└─────────────────────────────────────────────────────────────┘
                        │
                        │ CSS can't read this!
                        │
                        ▼
┌─────────────────────────────────────────────────────────────┐
│              theme-variables.css (CSS)                       │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  :root[data-theme='light'] {                        │    │
│  │    --color-primary-700: #1e40af;                   │    │
│  │  }                                                  │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                              │
│  Used by:                                                    │
│  • Tailwind classes (bg-primary-700)                        │
│  • CSS stylesheets                                          │
│  • Inline styles via CSS variables                          │
│  • Browser (for dynamic theme switching)                     │
└─────────────────────────────────────────────────────────────┘
```

## The Flow

### 1. **For TypeScript/React Code** → Uses `colors.ts`

**Recommended: Type-safe color access (with autocomplete)**

```tsx
import { useTheme } from '@/hooks/useTheme';

function MyComponent() {
  const { colors } = useTheme();

  // ✅ Type-safe, autocomplete support!
  const primaryColor = colors.primary[700]; // Returns '#1e40af'
  const textColor = colors.text.primary; // Returns '#0f172a'
  const bgColor = colors.background.primary; // Returns '#ffffff'

  // Or use dynamic scale
  const dynamicColor = colors.primary.get(700); // Also type-safe!

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

  // ✅ Still works, but no autocomplete
  const color = getColor('primary.700'); // Returns '#1e40af'

  return <div style={{ color }}>Content</div>;
}
```

### 2. **For CSS/Tailwind** → Uses `theme-variables.css`

```tsx
// ✅ Uses CSS variables from theme-variables.css
<div className='bg-primary-700 text-white'>Content</div>
```

How Tailwind uses it:

```typescript
// tailwind.config.ts
primary: {
  700: 'var(--color-primary-700)'  // ← References CSS variable
}
```

### 3. **For Dynamic Theme Switching**

The magic happens because CSS variables change based on `data-theme` attribute:

```css
/* theme-variables.css */
:root[data-theme='light'] {
  --color-primary-700: #1e40af; /* Light theme color */
}

:root[data-theme='dark'] {
  --color-primary-700: #1e40af; /* Same color, but could be different */
}
```

When you toggle theme:

```tsx
// JavaScript sets: document.documentElement.setAttribute('data-theme', 'dark')
// CSS automatically switches all variables! ✨
```

## Single Source of Truth

**`colors.ts` is the master file** - all color values should be defined here first.

**`theme-variables.css` is AUTO-GENERATED** from `colors.ts` - no manual syncing needed!

## Update Process

When updating colors from Figma:

1. ✅ Update `src/theme/tokens/colors.ts` (TypeScript values)
2. ✅ Run `pnpm theme:generate-css` to regenerate `theme-variables.css`
3. ✅ Tailwind automatically picks up CSS variables

**Note:** The high contrast mode accessibility colors (CSS-only, not in colors.ts) are preserved in the generated file.

## CSS Generation

**We DO generate CSS from TypeScript!**

The `generate-css-variables.ts` script automatically creates `theme-variables.css` from `colors.ts`.

**Why keep both files?**

- `colors.ts` = Single source of truth for TypeScript/JavaScript
- `theme-variables.css` = Auto-generated for CSS/Tailwind
- **No duplication!** CSS file is generated, not manually maintained

## Summary

| File                  | Purpose                 | Used By                                  |
| --------------------- | ----------------------- | ---------------------------------------- |
| `colors.ts`           | TypeScript color tokens | React components, hooks, TypeScript code |
| `theme-variables.css` | CSS custom properties   | Tailwind, CSS, browser for theming       |

**Both are needed because CSS and TypeScript are separate systems!**
