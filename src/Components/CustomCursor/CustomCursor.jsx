import { useEffect, useRef, useState } from 'react';
import redArrowCursor from '../../assets/redArrowCursor.svg';
import redHandPointer from '../../assets/redHandPointer.svg';
import './CustomCursor.css';

const INTERACTIVE_SELECTOR = `
  a, button, select, input, textarea, label, summary, video, audio, iframe, canvas,
  [onclick], [onpointerdown], [onmousedown],
  [role="button"], [role="link"], [role="tab"], [role="menuitem"], [role="option"], [role="switch"], [role="checkbox"],
  [type="button"], [type="submit"], [type="reset"], [type="checkbox"], [type="radio"],
  .cursor-pointer, .btn, .button-base, .nav-link, .clickable, .card,
  .goal-card, .course-card, .card-video-precise, .outcome-card, .au-card, .placement-card,
  header a, nav a, footer a, header button, nav button, footer button,
  .rm-cat-btn, .rm-pop-card-btn, .rm-cta-subscribe-btn, .rm-cta-trial-btn,
  .rm-footer-subscribe-btn, .rm-showcase-view-all, .rm-showcase-view-more-btn,
  .tlnbn-nav-link, .tlnbn-subscribe-btn, .tlnbn-btn, [style*="cursor: pointer"], [style*="cursor:pointer"]
`;

const isElementInteractive = (target) => {
  if (!target || !(target instanceof Element)) return false;
  if (target.closest(INTERACTIVE_SELECTOR)) return true;
  try {
    const computed = window.getComputedStyle(target).cursor;
    if (computed === 'pointer' || computed === 'grab' || computed === 'grabbing') {
      return true;
    }
  } catch (err) {
    // Ignore evaluation errors
  }
  return false;
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (clientX, clientY) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
      setIsVisible(true);
    };

    const handlePointerMove = (e) => {
      updatePosition(e.clientX, e.clientY);
      const interactive = isElementInteractive(e.target);
      setIsPointer(interactive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => {
      setIsVisible(false);
    };
    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Ensure native cursor is visible by overriding any global CSS that hides it
  useEffect(() => {
    try {
      const docEl = document.documentElement;
      const prevHtmlCursor = docEl.style.getPropertyValue('cursor');
      const prevBodyCursor = document.body.style.getPropertyValue('cursor');
      docEl.style.setProperty('cursor', 'auto', 'important');
      document.body.style.setProperty('cursor', 'auto', 'important');
      return () => {
        if (prevHtmlCursor) docEl.style.setProperty('cursor', prevHtmlCursor);
        else docEl.style.removeProperty('cursor');
        if (prevBodyCursor) document.body.style.setProperty('cursor', prevBodyCursor);
        else document.body.style.removeProperty('cursor');
      };
    } catch (err) {
      // ignore
    }
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isPointer ? 'pointer-mode' : 'default-mode'} ${isClicked ? 'clicked' : ''}`}
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Normal Usage Cursor: Red Arrow Pointer */}
      <img
        src={redArrowCursor}
        alt=""
        className="cursor-img cursor-arrow-img"
        draggable="false"
      />

      {/* Pointing & Clickable Cursor: Red Hand Pointer */}
      <img
        src={redHandPointer}
        alt=""
        className="cursor-img cursor-hand-img"
        draggable="false"
      />
    </div>
  );
};

export default CustomCursor;
