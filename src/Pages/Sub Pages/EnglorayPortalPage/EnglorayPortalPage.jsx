import React, { useEffect } from 'react';
import App from './App';
import './portal-tailwind.css';
import { fontStyles } from './portal-fonts';

export default function EnglorayPortalPage() {
  useEffect(() => {
    // Add class to body for page-specific styling
    document.body.classList.add('portal-page-active');

    // Inject fonts dynamically to bypass Webpack bundling/resolving errors for assets
    const styleEl = document.createElement('style');
    styleEl.id = 'portal-injected-fonts';
    styleEl.innerHTML = fontStyles;
    document.head.appendChild(styleEl);

    return () => {
      document.body.classList.remove('portal-page-active');
      const el = document.getElementById('portal-injected-fonts');
      if (el) el.remove();
    };
  }, []);

  return <App />;
}
