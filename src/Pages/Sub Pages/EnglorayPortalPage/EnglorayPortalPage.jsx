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

    // Add class to body for page-specific styling
    document.body.classList.add('portal-page-active');

    return () => {
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
