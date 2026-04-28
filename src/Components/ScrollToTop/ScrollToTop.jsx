import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // We use a small timeout to ensure the DOM has updated and to override any smooth scroll CSS
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Force instant scroll to override CSS scroll-behavior: smooth
      });
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
