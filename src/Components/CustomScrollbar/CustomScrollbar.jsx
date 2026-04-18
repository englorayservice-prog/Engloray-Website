import React, { useEffect, useState, useRef, useCallback } from 'react';
import './CustomScrollbar.css';

const CustomScrollbar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const trackRef = useRef(null);
    const thumbRef = useRef(null);
    const isDragging = useRef(false);
    const startY = useRef(0);
    const startScrollTop = useRef(0);
    const hideTimeout = useRef(null);

    const updateScroll = useCallback(() => {
        if (!trackRef.current || !thumbRef.current) return;

        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;

        // If content is not scrollable, hide scrollbar
        if (scrollHeight <= clientHeight) {
            setIsVisible(false);
            return;
        }

        const maxScrollTop = scrollHeight - clientHeight;
        const percentage = scrollTop / maxScrollTop;

        // Use requestAnimationFrame for smooth UI update
        requestAnimationFrame(() => {
            setScrollPercentage(Math.min(Math.max(percentage, 0), 1));

            // Show scrollbar on scroll
            setIsVisible(true);
            clearTimeout(hideTimeout.current);
            hideTimeout.current = setTimeout(() => {
                if (!isDragging.current) {
                    setIsVisible(false);
                }
            }, 2000); // Hide after 2 seconds of inactivity
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
        window.addEventListener('resize', updateScroll);

        // Robust detection: Watch for any layout changes (like intro unmounting)
        const resizeObserver = new ResizeObserver(() => {
            updateScroll();
        });

        if (document.body) {
            resizeObserver.observe(document.body);
            // Also watch documentElement for safety on some browsers
            resizeObserver.observe(document.documentElement);
        }

        // Initial check
        updateScroll();

        return () => {
            window.removeEventListener('scroll', updateScroll);
            window.removeEventListener('resize', updateScroll);
            resizeObserver.disconnect();
            clearTimeout(hideTimeout.current);
        };
    }, [updateScroll]);

    const handleTrackClick = (e) => {
        if (e.target === thumbRef.current) return;

        const track = trackRef.current;
        const rect = track.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        const trackHeight = rect.height;

        const percentage = clickY / trackHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const maxScrollTop = scrollHeight - clientHeight;

        window.scrollTo({
            top: percentage * maxScrollTop,
            behavior: 'smooth'
        });
    };

    const handleMouseDown = (e) => {
        e.preventDefault();
        isDragging.current = true;
        startY.current = e.clientY;
        startScrollTop.current = window.scrollY;
        setIsVisible(true); // Keep visible while dragging

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = 'none'; // Prevent text selection
    };

    const handleMouseMove = useCallback((e) => {
        if (!isDragging.current) return;

        const deltaY = e.clientY - startY.current;
        const trackHeight = trackRef.current.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const maxScrollTop = scrollHeight - clientHeight;

        // Calculate how much the mouse moved relative to track height
        // Thumb moves proportionally to scroll content
        // trackHeight is roughly user view of total scroll
        // But delta needs to be mapped to scroll content range

        // Simplest approach: Map deltaY pixels on track to delta scroll pixels
        // Ratio = maxScrollTop / trackHeight
        const ratio = maxScrollTop / trackHeight;
        const newScrollTop = startScrollTop.current + deltaY * ratio;

        window.scrollTo({
            top: newScrollTop,
            behavior: 'auto' // Instant update for direct control
        });
    }, []);

    const handleMouseUp = useCallback(() => {
        isDragging.current = false;
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.body.style.userSelect = '';

        // Start hide timer again
        hideTimeout.current = setTimeout(() => {
            setIsVisible(false);
        }, 1000);
    }, [handleMouseMove]);

    // Thumb position calculation
    // We want the thumb to stay within the track
    // Height of thumb is fixed in CSS for this design style (capsule)
    // or dynamic. Let's make it fixed for a premium "mouse" look or small capsule.
    // Visual position: percentage * (trackHeight - thumbHeight)

    const thumbStyle = {
        top: `${scrollPercentage * 96}%`, // 96% allows some buffer at bottom so it doesn't overflow if fixed height
        // Alternatively calculate precise pixel transform if needed, but % is easier for resize
        transform: `translate3d(0, 0, 0)`,
        opacity: isVisible ? 1 : 0
    };

    return (
        <div
            className={`custom-scrollbar-track ${isVisible ? 'visible' : ''}`}
            ref={trackRef}
            onClick={handleTrackClick}
        >
            <div
                className="custom-scrollbar-thumb"
                ref={thumbRef}
                style={thumbStyle}
                onMouseDown={handleMouseDown}
            >
                <div className="thumb-glow"></div>
            </div>
        </div>
    );
};

export default CustomScrollbar;
