# DGA Theme System

A comprehensive theming system for Next.js applications using Zustand for state management and TailwindCSS for styling.

## Features

- ✅ **DGA Design System Colors** - Light and dark mode with semantic color tokens
- ✅ **Typography Scale** - Font weights, sizes, line heights, and letter spacing
- ✅ **Spacing System** - Consistent spacing scale for margins, padding, and gaps
- ✅ **Border Radius** - Consistent border radius scale
- ✅ **Shadows** - Elevation and depth shadows
- ✅ **Zustand Store** - Theme state management with localStorage persistence
- ✅ **TailwindCSS Integration** - Extended Tailwind config with theme tokens
- ✅ **TypeScript Support** - Full type safety and IntelliSense
- ✅ **Context Provider** - React context for theme access
- ✅ **Theme Toggle** - Eye icon button for switching themes
- ✅ **CSS Custom Properties** - Dynamic theming with CSS variables

## Quick Start

### 1. Import and Use Theme Provider

```tsx
import { ThemeProvider } from '@/theme';

export default function Layout({ children }) {
  return <ThemeProvider defaultMode='light'>{children}</ThemeProvider>;
}
```

### 2. Use Theme in Components

```tsx
import { useTheme } from '@/theme';

export function MyComponent() {
  const { mode, toggleTheme, isDark, theme } = useTheme();

  return (
    <div className='bg-background-primary text-text-primary'>
      <button onClick={toggleTheme}>
        Switch to {isDark ? 'light' : 'dark'} mode
      </button>
    </div>
  );
}
```

### 3. Use Tailwind Classes

```tsx
export function Card() {
  return (
    <div className='bg-background-primary border-border-primary text-text-primary p-4 rounded-lg shadow-md'>
      <h3 className='text-primary-600 font-semibold'>Card Title</h3>
      <p className='text-text-secondary'>Card content</p>
    </div>
  );
}
```

## Theme Structure

```
src/theme/
├── tokens/
│   ├── colors.ts          # Color tokens (light/dark)
│   ├── typography.ts      # Font weights, sizes, etc.
│   ├── spacing.ts         # Spacing scale
│   ├── borderRadius.ts    # Border radius scale
│   └── shadows.ts         # Shadow definitions
├── types.ts               # TypeScript types
├── theme.ts               # Theme configuration
├── store.ts               # Zustand store
├── ThemeProvider.tsx      # React context provider
└── index.ts               # Main exports
```

## Available Tokens

### Colors

- **Primary**: 50-950 scale + semantic colors
- **Secondary**: 50-950 scale
- **Neutral**: 0-950 scale (inverted for dark mode)
- **Semantic**: Success, Warning, Error
- **Background**: Primary, Secondary, Tertiary, Inverse
- **Text**: Primary, Secondary, Tertiary, Inverse, Disabled
- **Border**: Primary, Secondary, Focus, Error

### Typography

- **Font Weights**: light (300), regular (400), medium (500), semibold (600), bold (700)
- **Font Sizes**: xs (12px) to 7xl (72px)
- **Line Heights**: none (1) to loose (2)
- **Letter Spacing**: tighter (-0.05em) to widest (0.1em)

### Spacing

- **Values**: px, 0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96
- **Scale**: xs (4px), sm (8px), md (16px), lg (24px), xl (32px), 2xl (48px), 3xl (64px), 4xl (96px), 5xl (128px)

### Border Radius

- **Values**: none, sm (2px), md (6px), lg (8px), xl (12px), 2xl (16px), 3xl (24px), full
- **Scale**: sm, md, lg, xl, 2xl, full

### Shadows

- **Values**: none, sm, base, md, lg, xl, 2xl, inner
- **Scale**: sm, md, lg, xl, 2xl

## Hooks

### useTheme()

Main hook for accessing theme functionality:

```tsx
const {
  mode, // 'light' | 'dark'
  theme, // Full theme object
  toggleTheme, // () => void
  setTheme, // (mode: ThemeMode) => void
  isDark, // boolean
  isLight, // boolean
  getColor, // (path: string) => string
  getSpacing, // (key: string) => string
  getBorderRadius, // (key: string) => string
  getShadow, // (key: string) => string
} = useTheme();
```

### Individual Selectors

For better performance, use individual selectors:

```tsx
import { useThemeMode, useToggleTheme, useIsDark } from '@/theme';

const mode = useThemeMode();
const toggleTheme = useToggleTheme();
const isDark = useIsDark();
```

## TailwindCSS Classes

The theme system extends Tailwind with custom classes:

```tsx
// Background colors
bg - background - primary;
bg - background - secondary;
bg - primary - 500;
bg - success - 100;

// Text colors
text - text - primary;
text - text - secondary;
text - primary - 600;

// Border colors
border - border - primary;
border - primary - 200;

// Spacing
p - 4; // padding: 1rem
p - lg; // padding: 1.5rem
m - sm; // margin: 0.5rem

// Border radius
rounded - lg;
rounded - xl;

// Shadows
shadow - md;
shadow - lg;
```

## CSS Custom Properties

The theme system automatically sets CSS custom properties:

```css
:root {
  --color-primary-500: #0ea5e9;
  --color-background-primary: #ffffff;
  --color-text-primary: #0f172a;
  --spacing-4: 1rem;
  --radius-lg: 0.5rem;
  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

## Persistence

Theme preference is automatically saved to localStorage and restored on page load.

## Browser Support

- Modern browsers with CSS custom properties support
- localStorage support for persistence
- TailwindCSS 3.0+

## Contributing

When adding new tokens:

1. Add to the appropriate token file in `tokens/`
2. Update the `ThemeTokens` interface in `types.ts`
3. Add to Tailwind config if needed
4. Update this README

## License

MIT
