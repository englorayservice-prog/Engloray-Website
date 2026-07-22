import React, { useEffect, useLayoutEffect } from 'react';
import App from './App';
import { fontStyles } from './portal-fonts';
import SEOHead from '../../../seo/SEOHead';
import SchemaMarkup from '../../../seo/SchemaMarkup';

// Set manual scroll restoration globally so reloads always start at top (Hero section)
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

const scrollToHeroTop = () => {
  if (typeof window === 'undefined') return;

  const originalBehavior = document.documentElement.style.scrollBehavior;
  document.documentElement.style.scrollBehavior = 'auto';

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;

  const heroEl = document.getElementById('home');
  if (heroEl) {
    heroEl.scrollIntoView({ block: 'start', behavior: 'instant' });
  }

  document.documentElement.style.scrollBehavior = originalBehavior;
};

export default function EnglorayPortalPage() {
  useLayoutEffect(() => {
    scrollToHeroTop();
  }, []);

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    scrollToHeroTop();

    // Dynamically load the Tailwind CSS for this page to prevent it from leaking to other routes
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL || ''}/portal-tailwind.css?v=${Date.now()}`;
    link.id = 'portal-tailwind-style';
    link.onload = () => {
      scrollToHeroTop();
    };
    document.head.appendChild(link);

    // Inject fonts dynamically to bypass Webpack bundling/resolving errors for assets
    const styleEl = document.createElement('style');
    styleEl.id = 'portal-injected-fonts';
    styleEl.innerHTML = fontStyles;
    document.head.appendChild(styleEl);

    const rAf = requestAnimationFrame(() => {
      scrollToHeroTop();
    });

    const timers = [
      setTimeout(scrollToHeroTop, 50),
      setTimeout(scrollToHeroTop, 150),
      setTimeout(scrollToHeroTop, 300),
      setTimeout(scrollToHeroTop, 600),
    ];

    return () => {
      cancelAnimationFrame(rAf);
      timers.forEach(clearTimeout);

      // Remove stylesheet and fonts when leaving the page to restore parent styling
      const elLink = document.getElementById('portal-tailwind-style');
      if (elLink) elLink.remove();

      const elFonts = document.getElementById('portal-injected-fonts');
      if (elFonts) elFonts.remove();

      document.body.classList.remove('portal-page-active');
    };
  }, []);

  return (
    <>
      <SEOHead pageKey="/admissionPortal" />
      <SchemaMarkup pageKey="/admissionPortal" />
      <App />
    </>
  );
}

