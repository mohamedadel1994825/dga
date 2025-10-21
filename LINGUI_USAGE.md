# Lingui i18n Setup

This project uses [Lingui](https://lingui.dev) for internationalization (i18n).

## Setup Complete ✅

The following has been configured:

1. **ESLint Plugin** - Helps find common Lingui usage errors
2. **Babel Plugin** - Transforms Lingui macros at build time
3. **Configuration** - `lingui.config.js` with English (source) and Arabic locales
4. **Message Catalogs** - Located in `src/locales/{locale}/messages.po`
5. **I18n Provider** - Integrated with existing `LanguageProvider`

## Usage Examples

### Using the `Trans` macro for JSX

```tsx
import { Trans } from "@lingui/macro";

function MyComponent() {
  return (
    <div>
      <h1><Trans>Welcome to our website</Trans></h1>
      <p><Trans>This text will be automatically translated</Trans></p>
    </div>
  );
}
```

### Using the `t` macro for strings

```tsx
import { t } from "@lingui/macro";
import { useLingui } from "@lingui/react";

function MyComponent() {
  const { _ } = useLingui();
  
  const placeholder = t`Enter your name`;
  
  return <input placeholder={_(placeholder)} />;
}
```

### Using variables in translations

```tsx
import { Trans } from "@lingui/macro";

function Greeting({ name }: { name: string }) {
  return <Trans>Hello, {name}!</Trans>;
}
```

### Using plurals

```tsx
import { Plural } from "@lingui/macro";

function ItemCount({ count }: { count: number }) {
  return (
    <Plural
      value={count}
      one="# item"
      other="# items"
    />
  );
}
```

## Workflow

1. **Add translations** to your code using Lingui macros (`Trans`, `t`, `Plural`, etc.)
2. **Extract messages** from your code:
   ```bash
   pnpm extract
   ```
3. **Translate** the messages in `src/locales/ar/messages.po`
4. **Compile catalogs** to generate JavaScript:
   ```bash
   pnpm compile
   ```

## Available Commands

- `pnpm extract` - Extract translatable messages from source code
- `pnpm compile` - Compile message catalogs for production
- `pnpm lint` - Run ESLint with Lingui rules

## Resources

- [Lingui Documentation](https://lingui.dev)
- [Lingui React Tutorial](https://lingui.dev/tutorials/react)
- [Lingui ESLint Plugin](https://lingui.dev/ref/eslint-plugin)
- [Message Extraction Guide](https://lingui.dev/guides/message-extraction)

## Notes

- The `LanguageProvider` has been updated to integrate with Lingui's `I18nProvider`
- Message catalogs are automatically loaded when switching languages
- Your existing dictionary-based translations can be gradually migrated to Lingui

