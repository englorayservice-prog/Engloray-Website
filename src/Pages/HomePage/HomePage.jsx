import React, { useEffect, useState } from 'react';
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
import EntryIntroAnimation from '../../Components/EntryIntroAnimation/EntryIntroAnimation';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePage.css';

gsap.registerPlugin(ScrollTrigger);

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

            {/* THIS OVERLAY IS ONLY RENDERED ON PAGE LOAD, DIES AFTER FIRST SCROLL COMPLETES */}
            {introActive && (
                <EntryIntroAnimation onComplete={handleIntroComplete} />
            )}

            {/* NORMAL, 100% UNTOUCHED PAGE SECTIONS */}
            <AnimatePresence>
                {!introActive && (
                    <motion.div
                        key="main-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, ease: "power2.out" }}
                        style={{ width: '100%' }}
                    >
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
                        <Footer />
                        <BackToTopArrow />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default HomePage;