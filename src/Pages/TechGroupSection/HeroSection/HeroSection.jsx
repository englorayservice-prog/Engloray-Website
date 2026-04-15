import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HeroSection.css';
import ClientMarquee from '../../../Components/CustomScrollbar/ClientMarquee/ClientMarquee.jsx';
import searchData from './SearchData.json';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
    const heroRef = useRef(null);
    const contentRef = useRef(null);
    const backgroundRef = useRef(null);
    const visualRef = useRef(null);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    // WhatsApp contact URL - update with your phone number and message
    const whatsappNumber = '916381759909'; // Replace with your actual phone number
    const whatsappMessage = 'Hello! I would like to start a project with you.';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    const popularServices = searchData.filter(item => 
        ["Website Development", "CRM", "AI Chatbot Solution", "Mobile App Development", "UI/UX Design", "Business Analytics"].includes(item.title)
    );

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchActive(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Scroll Timeline for Content Fade and Parallax
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1, // Smooth scrub
                }
            });

            // Fade out content
            tl.to(contentRef.current, {
                opacity: 0,
                y: -50,
                ease: "none"
            }, 0);

            // Subtle Parallax for background (red arc)
            tl.to(backgroundRef.current, {
                y: 100,
                scale: 1.05,
                ease: "none"
            }, 0);

            // Slightly stronger parallax for visual shapes
            tl.to(visualRef.current, {
                y: 150,
                opacity: 0.5,
                ease: "none"
            }, 0);

        }, heroRef);

        return () => ctx.revert();
    }, []);

    const updateSearch = (query) => {
        setSearchQuery(query);
        setIsSearchActive(true);

        if (query.trim() === '') {
            setFilteredResults([]);
        } else {
            const lowerCaseQuery = query.toLowerCase();
            const results = searchData.filter(item =>
                item.title.toLowerCase().includes(lowerCaseQuery) ||
                (item.category && item.category.toLowerCase().includes(lowerCaseQuery))
            ).slice(0, 15); // Limit to 15 results for UI performance
            setFilteredResults(results);
        }
    };

    const handleSearchChange = (e) => {
        updateSearch(e.target.value);
    };

    const handleExecuteSearch = (e) => {
        if (e) e.preventDefault();
        
        // Find best match
        const match = searchData.find(item => item.title.toLowerCase() === searchQuery.toLowerCase());
        if (match) {
            navigate(match.link, { state: { id: match.title } });
            setIsSearchActive(false);
        } else if (filteredResults.length > 0) {
            const firstResult = filteredResults[0];
            navigate(firstResult.link, { state: { id: firstResult.title } });
            setIsSearchActive(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleExecuteSearch();
        }
    };

    const handleOptionSelect = (item) => {
        // If they click the same thing twice or it's a specific selection, navigate
        if (searchQuery === item.title) {
            navigate(item.link, { state: { id: item.title } });
            setIsSearchActive(false);
        } else {
            updateSearch(item.title);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1] // Custom cubic bezier
            }
        }
    };

    return (
        <section className="hero-section" id='heroSection' ref={heroRef}>
            <div className="hero-background-overlay" />
            <div className="hero-background" ref={backgroundRef} />
            <div className="hero-container" >

                <div className="hero-content-wrapper">
                    <motion.div
                        className="hero-content"
                        ref={contentRef}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Feature badge - Vetra style */}
                        <motion.div variants={itemVariants}>
                            <Link to="/ourTeamPage" className="hero-feature-badge" style={{ textDecoration: 'none' }}>
                                <span className="hero-feature-badge__label">New feature</span>
                                <span className="hero-feature-badge__text">Check out the team dashboard</span>
                                <span className="hero-feature-badge__arrow">→</span>
                            </Link>
                        </motion.div>

                        <motion.h1 className="hero-title" variants={itemVariants}>
                            Powered by Intelligence.
                        </motion.h1>
                        <motion.h1 className="hero-title" variants={itemVariants}>
                            Driven by Design.
                        </motion.h1>

                        <motion.div className="hero-search-container" ref={searchRef} variants={itemVariants}>
                            <div className={`hero-search-glow ${isSearchActive ? 'active' : ''}`}></div>
                            <div className={`hero-search-box ${isSearchActive ? 'active' : ''}`}>
                                <input
                                    type="text"
                                    placeholder="What service or product are you looking for?"
                                    className="hero-search-input"
                                    onFocus={() => setIsSearchActive(true)}
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    onKeyDown={handleKeyDown}
                                />
                                <button className="hero-search-button" aria-label="Search" onClick={handleExecuteSearch}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </button>
                            </div>

                            {/* Dropdown for popular services / search results */}
                            <div className={`hero-search-dropdown ${isSearchActive ? 'show' : ''}`}>
                                <div className="hero-dropdown-header">
                                    {searchQuery.trim() === '' ? 'Popular Services' : 'Search Results'}
                                </div>
                                <ul className="hero-dropdown-list">
                                    {searchQuery.trim() === '' ? (
                                        popularServices.map((service, index) => (
                                            <li key={index} className="hero-dropdown-item" onClick={() => handleOptionSelect(service)}>
                                                <div className="hero-dropdown-item-content">
                                                    <span className="hero-dropdown-icon">✦</span>
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span>{service.title}</span>
                                                        <span style={{ fontSize: '0.65rem', opacity: 0.6, letterSpacing: '0.5px' }}>
                                                            {service.category ? service.category.toUpperCase() : service.type.toUpperCase()}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="hero-dropdown-action">Go</div>
                                            </li>
                                        ))
                                    ) : (
                                        filteredResults.length > 0 ? (
                                            filteredResults.map((item, index) => (
                                                <li key={index} className="hero-dropdown-item" onClick={() => handleOptionSelect(item)}>
                                                    <div className="hero-dropdown-item-content">
                                                        <span className="hero-dropdown-icon">✦</span>
                                                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                            <span>{item.title}</span>
                                                            <span style={{ fontSize: '0.65rem', opacity: 0.6, letterSpacing: '0.5px' }}>
                                                                {item.category ? item.category.toUpperCase() : item.type.toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="hero-dropdown-action">Go</div>
                                                </li>
                                            ))
                                        ) : (
                                            <li className="hero-dropdown-item" style={{ gridColumn: '1 / -1', justifyContent: 'center', opacity: 0.5, border: 'none', background: 'transparent' }}>
                                                No matches found for "{searchQuery}"
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div className="hero-buttons" variants={itemVariants}>
                            {/* Updated to WhatsApp link */}
                            <motion.a
                                href={whatsappUrl}
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Your Project
                            </motion.a>

                            {/* Keep the internship link as internal navigation */}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link to="#internship" className="btn btn-secondary">
                                    Join Academic Program
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="client-container">
                        <ClientMarquee />
                    </div>
                </div>

                {/* Background shapes */}
                <div className="hero-visual" ref={visualRef}>
                    <div className="hero-shape hero-shape-1"></div>
                    <div className="hero-shape hero-shape-2"></div>
                    <div className="hero-shape hero-shape-3"></div>
                </div>
            </div>
        </section >
    );
};

export default HeroSection;