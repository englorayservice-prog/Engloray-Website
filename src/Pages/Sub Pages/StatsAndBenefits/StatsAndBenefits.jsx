import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGem, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import statsBgImage from '../../../assets/image21.jfif';
import budgetImage from '../../../assets/images/red_bar_chart.png';
import './StatsAndBenefits.css';

gsap.registerPlugin(ScrollTrigger);

const StatsAndBenefits = () => {
    const wrapperRef = useRef(null);

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        const ctx = gsap.context(() => {

            // ── Hide title and bg image initially ──
            gsap.set('.sab-pin-title', { opacity: 0, y: 30 });
            gsap.set('.sab-pin-bg',    { opacity: 0 });

            // ── Build the scroll-pinned timeline ──
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.techGroup-stats-wrapper',
                    trigger: wrapper,
                    start: 'top top',
                    end: '+=2800',          // freeze for 2800px of scroll
                    pin: true,
                    scrub: 1.5,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            // 1. Title + world map fade in
            tl.to('.sab-pin-title', { opacity: 1, y: 0, duration: 0.3 }, 0)
              .to('.sab-pin-bg',    { opacity: 0.35, duration: 0.4 },    0);

            // 2. Cards fly FROM centre TO final positions, one by one.
            //    Each "from" offset is the vector from the card's natural CSS
            //    position toward the visual centre of the map container.
            //    (Container ≈ 1200px wide × 850px tall; centre ≈ 600, 425)
            tl
              // Top-centre card (24/7 Support) – starts just above centre
              .from('.techGroup-stat-card-four',
                    { x: 0,    y: 340,  opacity: 0, scale: 0.35, duration: 1 }, 0.25)
              // Top-left card (250+ Projects) – from centre-right area
              .from('.techGroup-stat-card-one',
                    { x: 320,  y: 310,  opacity: 0, scale: 0.35, duration: 1 }, 0.50)
              // Top-right card (98% Satisfaction) – from centre-left area
              .from('.techGroup-stat-card-two',
                    { x: -320, y: 310,  opacity: 0, scale: 0.35, duration: 1 }, 0.75)
              // Mid-left card (5+ Regions) – from centre
              .from('.techGroup-stat-card-seven',
                    { x: 320,  y: 50,   opacity: 0, scale: 0.35, duration: 1 }, 1.00)
              // Centre card (95% Retention) – tiny drift from middle
              .from('.techGroup-stat-card-nine',
                    { x: -80,  y: 30,   opacity: 0, scale: 0.35, duration: 1 }, 1.25)
              // Bottom-left card (25+ Partners) – from centre, moves down-left
              .from('.techGroup-stat-card-three',
                    { x: 320,  y: -230, opacity: 0, scale: 0.35, duration: 1 }, 1.50)
              // Bottom-right card (10+ Years) – from centre, moves down-right
              .from('.techGroup-stat-card-six',
                    { x: -360, y: -220, opacity: 0, scale: 0.35, duration: 1 }, 1.75);

            // ── Benefits Section Animation ──
            const benefitCards = gsap.utils.toArray('.techGroup-slide-card');
            
            benefitCards.forEach((card) => {
                // Get all text/content elements inside this specific card
                const contentElements = card.querySelectorAll('.techGroup-badge, [class*="-header"], [class*="-footer"], [class*="-description"], .techGroup-card-two-tags span, .techGroup-inner-badge, .techGroup-card-three-grid-box, .techGroup-inner-badge-four, .techGroup-card-four-box');
                
                // Set initial state for card and its contents
                gsap.set(card, { opacity: 0, y: 50 });
                gsap.set(contentElements, { opacity: 0, y: 30 });

                gsap.to(card, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                });

                gsap.to(contentElements, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.05,
                    ease: "power2.out",
                    delay: 0.2, // Start after card begins moving
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 20%",
                        toggleActions: "play reverse play reverse",
                    }
                });
            });

            // Animate section title separately
            gsap.set('.techGroup-benefits-main-title', { opacity: 0, y: 40 });
            gsap.to('.techGroup-benefits-main-title', {
                opacity: 1,
                y: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: '.techGroup-benefits-main-title',
                    start: "top 95%",
                    toggleActions: "play reverse play reverse",
                }
            });

        }, wrapper);

        return () => ctx.revert();
    }, []);

    return (
        <section className="techGroup-testimonials-section" style={{ padding: '0', marginBottom: '0' }}>
            <div className="techGroup-testimonialSection-container" style={{ padding: '0' }} ref={wrapperRef}>

                {/* ── PINNED STATS SECTION ── */}
                <div className="techGroup-stats-wrapper">
            <div className="techGroup-testimonialSection-container" style={{ padding: '0' }}>

                {/* ── PINNED STATS SECTION ── */}
                <div className="techGroup-stats-wrapper" ref={wrapperRef}>
                    <h2 className="techGroup-stats-main-title sab-pin-title">
                        Empowering Growth: Our Global Impact
                    </h2>
                    <div className="techGroup-stats-container">
                        {/* World-map background */}
                        <div
                            className="techGroup-stats-bg-image sab-pin-bg"
                            style={{
                                backgroundImage: `url(${statsBgImage})`,
                                backgroundSize: '100% 100%',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />

                        {/* Scattered stat cards */}
                        <div className="techGroup-stats-grid">

                            {/* 1 – Red: 250+ Projects */}
                            <div className="techGroup-stat-card techGroup-stat-card-one">
                                <div className="techGroup-stat-number">250+</div>
                                <div className="techGroup-stat-label">PROJECTS DELIVERED</div>
                            </div>

                            {/* 2 – Black: 24/7 Support (top-centre) */}
                            <div className="techGroup-stat-card techGroup-stat-card-four">
                                <div className="techGroup-stat-number">24/7</div>
                                <div className="techGroup-stat-label">SUPPORT AVAILABLE</div>
                            </div>

                            {/* 3 – Blue: 98% Satisfaction */}
                            <div className="techGroup-stat-card techGroup-stat-card-two">
                                <div className="techGroup-stat-number">98%</div>
                                <div className="techGroup-stat-label">CLIENT SATISFACTION</div>
                            </div>

                            {/* 4 – Teal: 5+ Regions */}
                            <div className="techGroup-stat-card techGroup-stat-card-seven">
                                <div className="techGroup-stat-number">5+</div>
                                <div className="techGroup-stat-label">GLOBAL REGIONS</div>
                            </div>

                            {/* 5 – Grey: 95% Retention */}
                            <div className="techGroup-stat-card techGroup-stat-card-nine">
                                <div className="techGroup-stat-number">95%</div>
                                <div className="techGroup-stat-label">RETENTION RATE</div>
                            </div>

                            {/* 6 – White: 25+ Partners */}
                            <div className="techGroup-stat-card techGroup-stat-card-three">
                                <div className="techGroup-stat-number">25+</div>
                                <div className="techGroup-stat-label">GLOBAL PARTNERS</div>
                            </div>

                            {/* 7 – Orange: 10+ Years */}
                            <div className="techGroup-stat-card techGroup-stat-card-six">
                                <div className="techGroup-stat-number">10+</div>
                                <div className="techGroup-stat-label">YEARS EXPERIENCE</div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* ── BENEFITS SECTION (unpinned, scrolls normally after pin releases) ── */}
                <div className="techGroup-benefits-section">
                    <h2 className="techGroup-benefits-main-title">Strategic Growth &amp; Core Benefits</h2>
                    <div className="techGroup-benefits-slide-grid">

                        {/* Card 0 – Digital Transformation */}
                        <div className="techGroup-slide-card techGroup-card-top"
                            style={{
                                backgroundImage: 'url(https://i.pinimg.com/1200x/29/73/bb/2973bbee86b0da672ac1ccbc57f12f9d.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: '100px'
                            }}>
                            <div className="techGroup-card-top-overlay" />
                            <div className="techGroup-badge techGroup-badge-top">INNOVATION</div>
                            <div className="techGroup-card-top-header">Digital <br /> Transformation</div>
                            <div className="techGroup-card-top-footer">
                                We empower businesses to adapt and thrive in the modern age using cutting-edge technology, scalable frameworks, and data-driven intelligence. Our holistic approach ensures seamless integration of AI-driven solutions and cloud architecture to future-proof your infrastructure.
                            </div>
                        </div>

                        {/* Card 1 – Branding Plan */}
                        <div className="techGroup-slide-card techGroup-card-one"
                            style={{
                                backgroundImage: 'url(https://i.pinimg.com/1200x/0e/b0/b9/0eb0b9062b54d063c330b66e1b9890e2.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            <div className="techGroup-card-one-overlay" />
                            <div className="techGroup-badge techGroup-badge-one">BENEFITS</div>
                            <div className="techGroup-card-one-header">Branding <br /> Plan</div>
                            <FontAwesomeIcon icon={faGem} className="techGroup-card-inner-icon-one" />
                            <div className="techGroup-card-one-footer">
                                Engloray builds strong corporate identity through strategic design, consistent messaging, digital presence, and creative storytelling to establish trust and recognition. We craft immersive brand experiences that resonate with target audiences, leveraging market psychology and visual excellence.
                            </div>
                        </div>

                        {/* Card 2 – Strategic Roadmap */}
                        <div className="techGroup-slide-card techGroup-card-two"
                            style={{
                                backgroundImage: 'url(https://i.pinimg.com/1200x/9b/a7/a6/9ba7a6f8ff3d337564ee1fe7d97c74b1.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            <div className="techGroup-card-two-overlay" />
                            <div className="techGroup-badge techGroup-badge-two">BENEFITS</div>
                            <div className="techGroup-card-two-header">Strategic Roadmap</div>
                            <div className="techGroup-card-two-description">
                                Engloray agenda outlines strategic planning, branding initiatives, digital development goals, innovation priorities, and collaborative steps guiding sustainable corporate growth.
                            </div>
                            <div className="techGroup-card-two-tags">
                                <span style={{ background: "#f23030", color: "white" }}>Learning</span>
                                <span style={{ background: "white", color: "#f23030" }}>App Development</span>
                                <span style={{ background: "#f23030", color: "white" }}>Web Development</span>
                                <span style={{ background: "white", color: "#f23030" }}>UI/UX</span>
                                <span style={{ background: "white", color: "#f23030" }}>Brand Strategy</span>
                                <span style={{ background: "#f23030", color: "white" }}>Market Research</span>
                                <span style={{ background: "white", color: "#f23030" }}>Visual Identity</span>
                                <span style={{ background: "#f23030", color: "white" }}>Product Branding</span>
                            </div>
                        </div>

                        {/* Card 3 – Quality Assurance */}
                        <div className="techGroup-slide-card techGroup-card-three">
                            <div className="techGroup-badge techGroup-badge-three">BENEFITS</div>
                            <div className="techGroup-card-three-header">Quality &<br />Assurance</div>
                            <FontAwesomeIcon icon={faShieldAlt} className="techGroup-card-inner-icon-three" />
                            <div className="techGroup-card-three-grid-container">
                                <div className="techGroup-card-three-grid">
                                    <div className="techGroup-card-three-grid-item">
                                        <div className="techGroup-card-three-box-with-badge">
                                            <span className="techGroup-inner-badge">Testing</span>
                                            <div className="techGroup-card-three-grid-box">Verifies functionality and detects defects early.</div>
                                        </div>
                                    </div>
                                    <div className="techGroup-card-three-grid-item">
                                        <div className="techGroup-card-three-box-with-badge">
                                            <span className="techGroup-inner-badge">Standards</span>
                                            <div className="techGroup-card-three-grid-box">Guides processes for consistent reliability.</div>
                                        </div>
                                    </div>
                                    <div className="techGroup-card-three-grid-item">
                                        <div className="techGroup-card-three-box-with-badge">
                                            <span className="techGroup-inner-badge">Monitoring</span>
                                            <div className="techGroup-card-three-grid-box">Tracks performance to maintain stability.</div>
                                        </div>
                                    </div>
                                    <div className="techGroup-card-three-grid-item">
                                        <div className="techGroup-card-three-box-with-badge">
                                            <span className="techGroup-inner-badge">Improvement</span>
                                            <div className="techGroup-card-three-grid-box">Analyzes feedback for iterative refinement.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 4 – Time Savings */}
                        <div className="techGroup-slide-card techGroup-card-four">
                            <div className="techGroup-badge techGroup-badge-four">BENEFITS</div>
                            <div className="techGroup-card-four-header">Time Savings</div>
                            <div className="techGroup-card-four-image">
                                <img src={budgetImage} alt="Budget" className="techGroup-budget-image" />
                            </div>
                            <div className="techGroup-card-four-layout">
                                <div className="techGroup-card-four-boxes">
                                    <div className="techGroup-card-four-box-item">
                                        <div className="techGroup-card-four-box-with-badge">
                                            <span className="techGroup-inner-badge-four">Marketing</span>
                                            <div className="techGroup-card-four-box">Connects products with audiences via strategy and branding.</div>
                                        </div>
                                    </div>
                                    <div className="techGroup-card-four-box-item">
                                        <div className="techGroup-card-four-box-with-badge">
                                            <span className="techGroup-inner-badge-four">Resources</span>
                                            <div className="techGroup-card-four-box">Optimizes the use of technology, capital, and skilled talent.</div>
                                        </div>
                                    </div>
                                    <div className="techGroup-card-four-box-item">
                                        <div className="techGroup-card-four-box-with-badge">
                                            <span className="techGroup-inner-badge-four">ROI</span>
                                            <div className="techGroup-card-four-box">Research innovations to create direct competitive value.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Card 5 – Global Community */}
                        <div className="techGroup-slide-card techGroup-card-bottom"
                            style={{
                                backgroundImage: 'url(https://i.pinimg.com/1200x/c1/81/25/c18125cfb8813bc0fa54ca9a10368ae8.jpg)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            <div className="techGroup-card-bottom-overlay" />
                            <div className="techGroup-badge techGroup-badge-bottom">FUTURE</div>
                            <div className="techGroup-card-bottom-header">Global <br /> Community</div>
                            <div className="techGroup-card-bottom-footer">
                                Join our worldwide network of innovators, creators, and leaders. Step into the future and build sustainable technology ecosystems with Engloray. Connect with industry pioneers and collaborate on boundary-pushing initiatives that drive social impact and progress.
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsAndBenefits;
