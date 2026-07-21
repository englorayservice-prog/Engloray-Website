import React, { lazy, useEffect, useState } from 'react';
import TopNavBar from '../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../Components/TwoLineNavbar/TwoLineNavbar';
import Tagline from '../../Components/Tagline/Tagline';
import BackToTopArrow from '../../Components/BackToTop/BackToTop';
import EntryIntroAnimation from '../../Components/EntryIntroAnimation/EntryIntroAnimation';
import LazySection from '../../Components/LazySection/LazySection';
import SEOHead from '../../seo/SEOHead';
import SchemaMarkup from '../../seo/SchemaMarkup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

// Below-the-fold sections are code-split so their JS is only fetched once
// LazySection detects the user is about to scroll into range — not on
// initial page load. Order matches the page's visual order.
const OtherSectionCarousel = lazy(() => import('../../Components/OtherSectionCarousel/OtherSectionCarousel'));
const VisionMission = lazy(() => import('../../Components/VisionMission/VisionMission'));
const Ourcore = lazy(() => import('../../Ourcore'));
const DoubleMarquees = lazy(() => import('../../Components/DoubleMarquees/DoubleMarquees'));
const BusinessBoost = lazy(() => import('../../Components/BusinessBoost/BusinessBoost'));
const About = lazy(() => import('../../Components/About/About'));
const CoreServices = lazy(() => import('../../Components/CoreSevices/CoreServices'));
const Testimonials = lazy(() => import('../../Components/Testimonials/Testimonials'));
const MarqueeBrands = lazy(() => import('../../Components/MarqueeBrands/MarqueeBrands'));
const Footer = lazy(() => import('../../Components/Footer/Footer'));

// Global flag to ensure the cinematic intro only plays ONCE per full page load (refreshes reset this)
let hasIntroPlayedGlobal = false;

const HomePage = () => {
    const [introActive, setIntroActive] = useState(!hasIntroPlayedGlobal);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [introActive]);

    const handleIntroComplete = () => {
        setIntroActive(false);
        hasIntroPlayedGlobal = true;
        // Trigger a manual resize event to let global components (like CustomScrollbar)
        // know that the page height has changed after unmounted intro
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
            ScrollTrigger.refresh();
        }, 150);
    };

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
        position: 'relative',
        overflow: 'visible',
        height: 'auto'
    };

    return (
        <div className="homepage-master" style={containerStyle}>
            <SEOHead pageKey="/" />
            <SchemaMarkup pageKey="/" />
            {/* THIS OVERLAY IS ONLY RENDERED ON PAGE LOAD, DIES AFTER FIRST SCROLL COMPLETES */}
            {introActive && (
                <EntryIntroAnimation onComplete={handleIntroComplete} />
            )}

            {/* NORMAL, 100% UNTOUCHED PAGE SECTIONS */}
            {!introActive && (
                <div style={{ width: '100%' }}>
                    {/* Chrome + hero: always eager. Lazy-loading anything
                        above the fold just adds a visible flash on load. */}
                    <TopNavBar />
                    <TwoLineNavbar />
                    <Tagline />

                    {/* Everything below the fold: code-split + lazy-mounted.
                        minHeight values approximate each section's real
                        rendered height — tune these to match to keep the
                        scrollbar from jumping as sections swap in. */}
                    <LazySection minHeight={640}>
                        <OtherSectionCarousel />
                    </LazySection>

                    <LazySection minHeight={520}>
                        <VisionMission />
                    </LazySection>

                    <LazySection minHeight={600}>
                        <Ourcore />
                    </LazySection>

                    <LazySection minHeight={320}>
                        <DoubleMarquees />
                    </LazySection>

                    <LazySection minHeight={560}>
                        <BusinessBoost />
                    </LazySection>

                    <LazySection minHeight={600}>
                        <About />
                    </LazySection>

                    <LazySection minHeight={680}>
                        <CoreServices />
                    </LazySection>

                    <LazySection minHeight={480}>
                        <Testimonials />
                    </LazySection>

                    <LazySection minHeight={240}>
                        <MarqueeBrands />
                    </LazySection>

                    <LazySection minHeight={520}>
                        <Footer />
                    </LazySection>

                    <BackToTopArrow />
                </div>
            )}
        </div>
    );
};

export default HomePage;