import { useEffect, useRef, useState } from 'react';
import redArrow from '../../assets/redArrow.png';
import redHandPointer from '../../assets/redHandPointer.svg';
import './CustomCursor.css';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    // Don't run on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        cursorRef.current.style.opacity = '1';
      }
    };

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);
    const down = () => setIsClicked(true);
    const up = () => setIsClicked(false);

    // Inject a last-in-head style element to strongly enforce native cursor hiding site-wide on desktop
    const STYLE_ID = 'custom-cursor-override';
    let styleEl = document.getElementById(STYLE_ID);
    if (!styleEl) {
      styleEl = document.createElement('style');
      styleEl.id = STYLE_ID;
      styleEl.innerHTML = `
        /* Strongly enforce native cursor hiding site-wide on desktop */
        *, *::before, *::after, *:hover, *:active, *:focus,
        html, body, html body, html body *, html body *::before, html body *::after,
        html body *:hover, html body *:active, html body *:focus,
        a, button, select, input, textarea, label, [role="button"], [type="button"], [type="submit"], [type="reset"],
        .cursor-pointer, .cursor-default, .cursor-grab, .cursor-grabbing, .cursor-move, .cursor-not-allowed, .cursor-auto, .cursor-text, .cursor-wait, .cursor-help, .cursor-all-scroll,
        [style*="cursor"] {
          cursor: none !important;
        }
      `;
      document.head.appendChild(styleEl);
    }

    const interactiveSelector = `
      a, button, [role="button"], [role="link"], [role="tab"], [role="menuitem"],
      input, textarea, select, label, summary, [onclick],
      .cursor-pointer, .btn, .button-base, .nav-link,
      .goal-card, .course-card, .card-video-precise, .outcome-card, .au-card, .placement-card,
      header a, nav a, footer a, header button, nav button, footer button
    `;

    const bind = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
        el.addEventListener('mouseenter', enter);
        el.addEventListener('mouseleave', leave);
      });
    };

    const hideOnLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
    };

    const showOnEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mousedown', down);
    window.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', hideOnLeave);
    document.addEventListener('mouseenter', showOnEnter);
    bind();

    const obs = new MutationObserver(bind);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mousedown', down);
      window.removeEventListener('mouseup', up);
      document.removeEventListener('mouseleave', hideOnLeave);
      document.removeEventListener('mouseenter', showOnEnter);
      obs.disconnect();
      try {
        const el = document.getElementById(STYLE_ID);
        if (el && el.parentNode) el.parentNode.removeChild(el);
      } catch (e) {
        // ignore
      }
    };
  }, []);

  const useHand = isHovered || isClicked;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${useHand ? 'hover' : ''} ${isClicked ? 'clicked' : ''}`}
      aria-hidden="true"
    >
      <img
        src={useHand ? redHandPointer : redArrow}
        alt=""
        className="custom-cursor-img"
        draggable="false"
      />
    </div>
  );
};

export default CustomCursor;
