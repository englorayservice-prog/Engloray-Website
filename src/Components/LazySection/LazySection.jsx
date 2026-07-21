import React, { Suspense, useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './LazySection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * SectionSkeleton
 * Lightweight placeholder shown while a section's chunk is loading or
 * before it has scrolled into range. Reserves the section's real height
 * so nothing jumps around once the real content mounts.
 */
const SectionSkeleton = ({ minHeight }) => (
    <div
        className="ls-skeleton"
        style={{ minHeight }}
        aria-hidden="true"
    >
        <div className="ls-skeleton-shimmer" />
    </div>
);

/**
 * LazySection
 *
 * Wrap any below-the-fold page section with this component to get, for free:
 *  - Code-splitting: the section's JS chunk is only requested once it's
 *    about to enter the viewport (via React.lazy + Suspense).
 *  - Lazy mounting: the section doesn't mount/run its effects until it's
 *    within `rootMargin` of the viewport — keeps initial page weight and
 *    main-thread work low on slow networks/devices.
 *  - No layout shift: a skeleton reserves `minHeight` until real content
 *    is ready to paint.
 *  - A single, consistent reveal-on-scroll animation across every section.
 *
 * Usage:
 *   const Testimonials = lazy(() => import('.../Testimonials'));
 *   <LazySection minHeight={480}><Testimonials /></LazySection>
 *
 * Props:
 *  - children: the lazy-imported section component instance
 *  - minHeight: reserved height in px while unloaded (prevents layout shift —
 *    set this close to the section's real rendered height)
 *  - rootMargin: how far ahead of the viewport to start loading (default
 *    preloads ~400px early so there's no visible pop-in on fast scrolling)
 *  - once: keep the section mounted permanently after its first reveal
 *    (default true — avoids re-mount cost / re-triggered animations if the
 *    user scrolls back up)
 */
const LazySection = ({
    children,
    minHeight = 400,
    rootMargin = '400px 0px',
    once = true,
    className = '',
}) => {
    const containerRef = useRef(null);
    const [shouldRender, setShouldRender] = useState(false);
    const isInView = useInView(containerRef, { margin: rootMargin, once });

    useEffect(() => {
        if (isInView && !shouldRender) {
            setShouldRender(true);
        }
    }, [isInView, shouldRender]);

    // Once a section mounts, the page height changes — let GSAP's
    // ScrollTrigger and any global scroll listeners (e.g. custom scrollbar)
    // know, same as the existing intro-animation completion handler does.
    useEffect(() => {
        if (!shouldRender) return;
        const id = requestAnimationFrame(() => {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
        });
        return () => cancelAnimationFrame(id);
    }, [shouldRender]);

    return (
        <div
            ref={containerRef}
            className={`ls-section ${className}`}
            style={!shouldRender ? { minHeight } : undefined}
        >
            {shouldRender ? (
                <Suspense fallback={<SectionSkeleton minHeight={minHeight} />}>
                    <motion.div
                        initial={{ opacity: 0, y: 22, filter: 'blur(4px)' }}
                        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {children}
                    </motion.div>
                </Suspense>
            ) : (
                <SectionSkeleton minHeight={minHeight} />
            )}
        </div>
    );
};

export default LazySection;