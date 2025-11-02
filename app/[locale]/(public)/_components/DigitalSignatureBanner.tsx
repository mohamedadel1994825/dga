'use client';

import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/providers/LanguageProvider';

export default function DigitalSignatureBanner() {
  const sigRef = useRef<HTMLElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const [ready, setReady] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    // Register the web component on the client only
    // Import just the needed component to avoid heavy bundles
    import('@platformscode/core/dist/components/dga-digital-signature.js')
      .then(() => {
        setMounted(true);
        // Give the web component time to fully initialize
        setTimeout(() => {
          setReady(true);
        }, 100);
      })
      .catch(() => {
        // Fail silently if component cannot load
        setMounted(true);
      });
  }, []);

  // Set language attribute when component is ready or language changes
  // This prevents the web component from trying to call .replace() on undefined
  useEffect(() => {
    if (sigRef.current && lang) {
      sigRef.current.setAttribute('language', lang);
    }
  }, [lang, mounted, ready]);

  if (!mounted || !ready) {
    return <div style={{ minHeight: '40px' }} />; // Placeholder to prevent layout shift
  }

  return (
    <div suppressHydrationWarning>
      {/* @ts-expect-error - web component */}
      <dga-digital-signature
        ref={(el: HTMLElement) => {
          sigRef.current = el;
          // Set language attribute immediately when ref is set
          if (el && lang) {
            el.setAttribute('language', lang);
          }
        }}
        language={lang || 'ar'}
      />
    </div>
  );
}
