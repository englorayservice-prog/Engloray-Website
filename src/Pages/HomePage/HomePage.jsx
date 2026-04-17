import React, { useEffect, useState, useMemo } from 'react';
import { motion, useAnimation } from 'motion/react';
import TopNavBar from '../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../Components/TwoLineNavbar/TwoLineNavbar';
import Tagline from '../../Components/Tagline/Tagline';
import OtherSectionCarousel from '../../Components/OtherSectionCarousel/OtherSectionCarousel';
import VisionMission from '../../Components/VisionMission/VisionMission';
import Ourcore from '../../Ourcore';
import DoubleMarquees from '../../Components/DoubleMarquees/DoubleMarquees';
import BusinessBoost from '../../Components/BusinessBoost/BusinessBoost';
import About from '../../Components/About/About';
import CoreServices from '../../Components/CoreSevices/CoreServices';
import Testimonials from '../../Components/Testimonials/Testimonials';
import MarqueeBrands from '../../Components/MarqueeBrands/MarqueeBrands';
import Footer from '../../Components/Footer/Footer';
import BackToTopArrow from '../../Components/BackToTop/BackToTop';
import './HomePage.css';

// Global flag to ensure the cinematic intro only plays ONCE per full page load (refreshes reset this)
let hasIntroPlayedGlobal = false;

const HomePage = () => {
    const controls = useAnimation();
    const [introActive, setIntroActive] = useState(!hasIntroPlayedGlobal);

    // Generate a fixed random starfield to serve as the background pattern
    const starPattern = useMemo(() => {
        // Scattered starfield with specific vibrant colors, big dots, and varying opacity
        const colors = ['#ffffff', '#ffffff', '#82b1ff', '#4dd0e1', '#ffffff', '#29b6f6'];
        return Array.from({ length: 90 }).map((_, i) => ({
            cx: `${Math.random() * 100}%`,
            cy: `${Math.random() * 100}%`,
            r: Math.random() > 0.85 ? (Math.random() * 0.25 + 0.15 + 'vw') : (Math.random() * 0.1 + 0.05 + 'vw'),
            opacity: Math.random() * 0.7 + 0.2,
            fill: colors[Math.floor(Math.random() * colors.length)]
        }));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        let touchStartY = 0;

        const handleTouchStart = (e) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleFirstInteraction = (e) => {
            if (!introActive) return;

            // STRICTLY VALIDATE ONLY DELIBERATE DOWNWARD SCROLLING MECHANISMS
            if (e.type === 'wheel') {
                if (e.deltaY <= 15) return; // Ignore slight trackpad bumps
            } else if (e.type === 'keydown') {
                const scrollKeys = ['ArrowDown', 'PageDown', ' ', 'Spacebar', 'End'];
                if (!scrollKeys.includes(e.key)) return; // Ignore typing or random key presses
            } else if (e.type === 'touchmove') {
                const touchCurrentY = e.touches[0].clientY;
                if (touchStartY - touchCurrentY <= 25) return; // Require a firm upward swipe (meaning they are scrolling down)
            } else {
                return; // Guard against random interactions
            }

            // Remove listener so it only triggers ONCE
            window.removeEventListener('wheel', handleFirstInteraction);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);

            // Execute the cinematic zoom
            controls.start({
                scale: 60,
                opacity: 0,
                transition: { duration: 1.8, ease: "easeInOut" }
            }).then(() => {
                // Completely kill the intro sequence and restore the page
                setIntroActive(false);
                hasIntroPlayedGlobal = true;
            });
        };

        if (introActive) {
            window.addEventListener('wheel', handleFirstInteraction, { passive: false });
            window.addEventListener('touchstart', handleTouchStart, { passive: false });
            window.addEventListener('touchmove', handleFirstInteraction, { passive: false });
            window.addEventListener('keydown', handleFirstInteraction, { passive: false });
        }

        return () => {
            window.removeEventListener('wheel', handleFirstInteraction);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchmove', handleFirstInteraction);
            window.removeEventListener('keydown', handleFirstInteraction);
        };
    }, [introActive, controls]);

    // Forcefully lock the entire layout dynamically.
    // By setting it to position fixed, it is strictly impossible for the Tagline to slip during the animation.
    const containerStyle = introActive ? {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden' // Cuts off the rest of the page temporarily so no external scrollbars act up
    } : {
        position: 'relative'
    };

    return (
        <div className="homepage-master" style={containerStyle}>

            {/* THIS OVERLAY IS ONLY RENDERED ON PAGE LOAD, DIES AFTER FIRST SCROLL */}
            {introActive && (
                <motion.div
                    className="homepage-intro-overlay"
                    initial={{ scale: 1, opacity: 1 }}
                    animate={controls}
                    style={{ pointerEvents: 'none', zIndex: 2000 }}
                >
                    <svg width="100%" height="100%" className="mask-svg">
                        <defs>
                            {/* Deep space dimension starfield pattern & Sun Glow */}
                            <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#fff9c4" stopOpacity="0.95" />
                                <stop offset="10%" stopColor="#ffeb3b" stopOpacity="0.6" />
                                <stop offset="40%" stopColor="#f57f17" stopOpacity="0.15" />
                                <stop offset="100%" stopColor="#030816" stopOpacity="0" />
                            </radialGradient>

                            <pattern id="spaceStars" width="100%" height="100%">
                                <rect width="100%" height="100%" fill="#030816" />

                                {/* Small center yellow particle with soft shadow glow */}
                                <circle cx="50%" cy="55%" r="4vw" fill="url(#sunGlow)" opacity="0.6" />
                                <circle cx="50%" cy="55%" r="0.4vw" fill="#fff9c4" opacity="0.8" />
                                <circle cx="50%" cy="55%" r="0.15vw" fill="#ffffff" />

                                {starPattern.map((star, i) => (
                                    <circle key={i} cx={star.cx} cy={star.cy} r={star.r} fill={star.fill} opacity={star.opacity} />
                                ))}
                            </pattern>
                            <mask id="textMask">
                                <rect width="100%" height="100%" fill="white" />
                                <text x="50%" y="48%" textAnchor="middle" fill="black" stroke="black" strokeWidth="0.4vw" style={{ fontFamily: "'Bungee', cursive", fontWeight: 900 }}>
                                    <tspan x="50%" dy="0" fontSize="12vw" letterSpacing="2px">WE ARE</tspan>
                                    <tspan x="50%" dy="15vw" fontSize="17vw" letterSpacing="-2px">ENGLORAY</tspan>
                                </text>
                            </mask>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#spaceStars)" mask="url(#textMask)" />

                        {/* SLEEK VISIBLE BORDERS TRACING THE CUTOUTS */}
                        <text x="50%" y="48%" textAnchor="middle" fill="none" stroke="rgba(255, 255, 255, 0.35)" strokeWidth="0.2vw" style={{ fontFamily: "'Bungee', cursive", fontWeight: 900 }}>
                            <tspan x="50%" dy="0" fontSize="12vw" letterSpacing="2px">WE ARE</tspan>
                            <tspan x="50%" dy="15vw" fontSize="17vw" letterSpacing="-2px">ENGLORAY</tspan>
                        </text>
                    </svg>
                </motion.div>
            )}

            {/* NORMAL, 100% UNTOUCHED PAGE SECTIONS */}
            <TopNavBar />
            <TwoLineNavbar />
            <Tagline />
            <OtherSectionCarousel />
            <VisionMission />
            <Ourcore />
            <DoubleMarquees />
            <BusinessBoost />
            <About />
            <CoreServices />
            <Testimonials />
            <MarqueeBrands />
            <Footer/>
            <BackToTopArrow />
        </div>
    );
};

export default HomePage;
