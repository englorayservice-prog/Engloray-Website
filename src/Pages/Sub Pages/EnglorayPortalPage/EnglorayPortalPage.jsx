import React, { useEffect } from 'react';
import App from './App';
import { fontStyles } from './portal-fonts';

export default function EnglorayPortalPage() {
  useEffect(() => {
    // Dynamically load the Tailwind CSS for this page to prevent it from leaking to other routes
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `${process.env.PUBLIC_URL || ''}/portal-tailwind.css?v=${Date.now()}`;
    link.id = 'portal-tailwind-style';
    document.head.appendChild(link);

    // Inject fonts dynamically to bypass Webpack bundling/resolving errors for assets
    const styleEl = document.createElement('style');
    styleEl.id = 'portal-injected-fonts';
    styleEl.innerHTML = fontStyles;
    document.head.appendChild(styleEl);

    // Force browser scroll restoration to manual so page reload always starts at top (Home)
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Scroll to top immediately when entering or reloading the Admission Portal page
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Timeout fallback to ensure instant scroll override on slow renders
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 50);

    return () => {
      clearTimeout(timer);
      // Remove stylesheet and fonts when leaving the page to restore parent styling
      const elLink = document.getElementById('portal-tailwind-style');
      if (elLink) elLink.remove();

      const elFonts = document.getElementById('portal-injected-fonts');
      if (elFonts) elFonts.remove();

      document.body.classList.remove('portal-page-active');
    };
  }, []);

  return <App />;
}
