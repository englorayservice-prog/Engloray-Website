import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Only render the portal once we're safely on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isMounted) return null;

  return createPortal(
    <button
      className={`back-to-top-arrow ${isVisible ? 'back-to-top-visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: '80px',
        left: '30px',
        top: 'auto',
        right: 'auto',
        zIndex: 2147483647
      }}
    >
      <div className="back-to-top-icon">
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div className="back-to-top-glow"></div>
    </button>,
    document.body
  );
};

export default BackToTop;