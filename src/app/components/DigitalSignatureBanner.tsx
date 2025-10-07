"use client";

import { useEffect, useRef } from "react";

type DigitalSignatureBannerProps = {
  className?: string;
};

export default function DigitalSignatureBanner({ className }: DigitalSignatureBannerProps) {
  const sigRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Register the web component on the client only
    // Import just the needed component to avoid heavy bundles
    import("@platformscode/core/dist/components/dga-digital-signature.js");
    import("@platformscode/core/dist/components/dga-icon.js");
  }, []);

  // useEffect(() => {
  //   // Sync component language with <html lang>
  //   const html = document.documentElement;
  //   const setLang = () => {
  //     const lang = html.getAttribute("lang") || "ar";
  //     if (sigRef.current) sigRef.current.setAttribute("language", lang);
  //   };
  //   setLang();
  //   const observer = new MutationObserver(setLang);
  //   observer.observe(html, { attributes: true, attributeFilter: ["lang"] });
  //   return () => observer.disconnect();
  // }, []);

  return (
    <div className={className}>
      {/* @ts-expect-error - web component */}
      <dga-digital-signature ref={(el: any) => (sigRef.current = el)} />
    </div>
  );
}


