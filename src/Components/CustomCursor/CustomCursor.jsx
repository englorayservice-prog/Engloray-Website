import { useEffect, useRef } from 'react';
import cursorImage from '../../assets/redArrow.png';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      if (cursorRef.current) {
        // We use translate3d for the smoothest performance
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const enter = () => cursorRef.current?.classList.add('hover');
    const leave = () => cursorRef.current?.classList.remove('hover');

    const bind = () => {
      // Find all interactive elements to trigger hover state
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, .goal-card, .course-card, .card-video-precise').forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };

    window.addEventListener('mousemove', move);
    bind();

    // Use MutationObserver to handle dynamically added elements
    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      obs.disconnect();
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <img src={cursorImage} alt="" className="custom-cursor-img" draggable="false" />
    </div>
  );
};

export default CustomCursor;
