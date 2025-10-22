export function focusTrap(container: HTMLElement) {
  const focusable = container.querySelectorAll<HTMLElement>(
    'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
  );
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  function handle(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last?.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first?.focus();
    }
  }

  container.addEventListener('keydown', handle);
  return () => container.removeEventListener('keydown', handle);
}

export const srOnly = 'sr-only absolute -m-px h-px w-px overflow-hidden p-0';
