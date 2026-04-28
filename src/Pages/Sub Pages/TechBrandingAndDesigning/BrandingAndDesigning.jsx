import React, { useState, useEffect, useRef } from 'react';
import brandingIamgeOne from '../../../assets/case study images/branding/malar.jpg';
import brandingIamgeTwo from '../../../assets/case study images/branding/ecec.png';
import brandingIamgeThree from '../../../assets/case study images/branding/Nestoria.jpg';
import brandingIamgeFour from '../../../assets/case study images/branding/isha bites.png';
import './BrandingAndDesigning.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
// import profile from '../../../assets/heroimage.jpeg';
import { FaLightbulb, FaPalette, FaComments, FaLayerGroup, FaCompass, FaUserCircle, FaGem } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";

// Import project section background
import projectsBg from '../../../assets/heroimage.jpeg';

// Import brand logos for projects section
import logo1 from '../../../assets/icons/logoipsum-247.png';
import logo2 from '../../../assets/icons/logoipsum-248.png';
import logo3 from '../../../assets/icons/logoipsum-249.png';
import logo4 from '../../../assets/icons/logoipsum-292.png';
import logo5 from '../../../assets/icons/logoipsum-293.png';
import logo6 from '../../../assets/icons/logoipsum-294.png';
import logo7 from '../../../assets/icons/logoipsum-295.png';
import logo8 from '../../../assets/icons/logoipsum-296.png';
import logo9 from '../../../assets/icons/logoipsum-298.png';
import logo10 from '../../../assets/icons/logoipsum-299.png';
import logo11 from '../../../assets/icons/logoipsum-327.png';
import logo12 from '../../../assets/icons/logoipsum-338.png';
import avatarLeft from '../../../assets/cartoon_female_3.png';
import avatarRight from '../../../assets/cartoon_male_3.png';



const BrandingDesigning = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const feedbackTrackRef = useRef(null);

    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);

        if (window.location.hash) {
            const id = window.location.hash.replace('#', '');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView();
                }
            }, 0);
        }
    }, []);

    const feedbacks = [
        {
            id: 1,
            rating: "★★★★★",
            text: "ENGLORAY delivered herbal packaging that feels trustworthy and premium. Customers now clearly understand our product quality.",
            author: "Malar Herbs",
            role: "Herbal Products",
            initial: "M"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well.",
            author: "ECEC Skill School",
            role: "Skill School",
            initial: "E"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "The promotional creatives were attractive and perfectly suited our food brand. Customer engagement improved noticeably.",
            author: "ISHA Bites",
            role: "Food And Beverage",
            initial: "I"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "Their strategic approach to our visual identity completely transformed how our customers perceive our brand. Incredible attention to detail.",
            author: "TechFlow Solutions",
            role: "Software Company",
            initial: "T"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "Engloray's branding guidelines provided us with the perfect foundation. It's so much easier for our team to stay consistent now.",
            author: "Nova Retail",
            role: "Retail Chain",
            initial: "N"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "The new logo and color palette perfectly capture our company's mission. We've seen a noticeable increase in brand recognition.",
            author: "Apex Consulting",
            role: "Business Services",
            initial: "A"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "The brand storytelling Engloray crafted for us is truly unique. It has given us a distinct voice in a crowded market.",
            author: "Creative Edge",
            role: "Creative Director",
            initial: "C"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "Their design system is a masterpiece of efficiency. Our internal teams can now produce consistent assets in half the time.",
            author: "Nexus Ops",
            role: "Operations Lead",
            initial: "N"
        },
        {
            id: 9,
            rating: "★★★★★",
            text: "Exceeded all expectations. The visual identity is not just beautiful; it's strategically aligned with our long-term goals.",
            author: "Founders Hub",
            role: "Founder",
            initial: "F"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Malar herbal products",
            description: "Complete brand identity redesign for a tech startup, including logo, color palette, typography, and brand guidelines.",
            category: "Herbal product",
            image: brandingIamgeOne,
            stats: {
                duration: "5 Weeks",
                satisfaction: "98%"
            }
        },
        {
            id: 2,
            title: "Nestoria",
            description: "End-to-end branding for a luxury brand, from initial concept to store implementation and digital presence.",
            category: "Branding",
            image: brandingIamgeThree,
            stats: {
                duration: "6 Weeks",
                satisfaction: "100%"
            }
        },
        {
            id: 3,
            title: "ISHA Bites",
            description: "Identity development for a beverage provider, establishing trust and professionalism in the food sector.",
            category: "food and beverage",
            image: brandingIamgeFour,
            stats: {
                duration: "5 Weeks",
                satisfaction: "97%"
            }
        }
    ];

    // About section cards data
    const aboutCards = [
        {
            id: 1,
            title: "Research & Discovery",
            description: "We dive deep into your market, competitors, and audience to understand the landscape and identify opportunities for differentiation and growth. Our comprehensive analysis includes market trends, consumer behavior, and competitive positioning to build a solid foundation for your brand strategy.",
            image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Strategic Foundation",
            description: "Building a solid brand foundation with clear positioning, messaging, and values that guide all design decisions and communications. We develop a unique brand voice and personality that resonates with your target audience while maintaining consistency across all touchpoints.",
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Creative Development",
            description: "Translating strategy into compelling visual identities through logo design, color systems, typography, and visual language. Our creative process involves multiple iterations, feedback loops, and refinement to ensure the final design perfectly captures your brand essence.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Implementation & Guidelines",
            description: "Creating comprehensive brand guidelines and implementation systems to ensure consistency across all touchpoints and platforms. We provide detailed documentation and support to help your team maintain brand integrity as your business grows and evolves.",
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // How It Works steps data
    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Discover Your Brand Vision",
            text: "Understand your business goals, audience, and brand purpose."
        },
        {
            title: "Step 2",
            heading: "Define Brand Strategy",
            text: "Build a clear positioning, messaging, and brand direction."
        },
        {
            title: "Step 3",
            heading: "Design Visual Identity",
            text: "Create logos, colors, and typography that represent your brand."
        },
        {
            title: "Step 4",
            heading: "Build Brand Assets",
            text: "Develop marketing visuals, social media designs, and brand guidelines."
        },
        {
            title: "Step 5",
            heading: "Launch & Grow Your Brand",
            text: "Apply your brand consistently across platforms to build recognition."
        },
        {
            title: "Step 6",
            heading: "Audit & Scale Evolution",
            text: "Continuously monitor impact and evolve your brand to stay ahead."
        }
    ];

    const getPosition = (index) => {
        const len = feedbacks.length;
        const prev = (currentSlide - 1 + len) % len;
        const next = (currentSlide + 1) % len;

        if (index === currentSlide) return "center";
        if (index === prev) return "left";
        if (index === next) return "right";
        return "hidden";
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    // Auto slide functionality
    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
            }, 3000); // Swipes continuously after a short delay
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    const badges = [
        "Brand Strategy",
        "Visual Identity",
        "Brand Voice",
        "UI Design System",
        "Brand Guidelines"
    ];

    return (
        <>
            <div>
                {/* SVG Definitions for Clip Path */}
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <clipPath id="cardCurve" clipPathUnits="objectBoundingBox">
                            <path d="M 0.15,0 L 0.85,0 A 0.15,0.15 0,0,1 1,0.15 L 1,0.75 A 0.08,0.06 0,0,1 0.92,0.81 L 0.9,0.81 A 0.06,0.06 0,0,0 0.84,0.87 L 0.84,0.92 A 0.08,0.08 0,0,1 0.76,1 L 0.15,1 A 0.15,0.15 0,0,1 0,0.85 L 0,0.15 A 0.15,0.15 0,0,1 0.15,0 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <Helmet>
                    <title>Engloray - Branding & Designing</title>
                    <meta name="description" content="Design tech brands for the digital, scalable systems with story telling ui" />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Branding & Designing" />
                    <meta property="og:description" content="Crafting Unforgettable Brand Experiences Through Strategic Design" />
                </Helmet>

                <div className="bd-page" id='brandingPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    {/* Hero Section - Updated to match the provided HeroSection component */}
                    <section className="bd-hero">
                        {/* Background image */}
                        <img src={heroBg} className="bd-hero-bg-image" alt="background texture" />

                        {/* Gradient background shapes */}
                        <div className="bd-gradient-shape bd-blue-shape"></div>
                        <div className="bd-gradient-shape bd-sand-shape"></div>

                        {/* Floating cards */}
                        <div className="bd-floating-card bd-left bd-rotate-left">
                            <img
                                src={avatarLeft}
                                alt="Brand strategist"
                            />
                            <div className="bd-card-content">
                                <h4>Brand Discovery</h4>
                                <p>Research & Insights</p>
                                <div className="bd-card-progress">
                                    <div className="bd-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="bd-floating-card bd-right bd-rotate-right">
                            <img
                                src={avatarRight}
                                alt="Creative director"
                            />
                            <div className="bd-card-content">
                                <h4>Identity Design</h4>
                                <p>Logo & Visual System</p>
                                <div className="bd-card-progress">
                                    <div className="bd-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="bd-hero-container">
                            <div className="bd-hero-badge">
                                Branding & Identity
                            </div>

                            <h1 className="bd-hero-title">
                                Crafting Unforgettable<br /> <span className="bd-title-highlight">Brand</span> <span className="bd-title-highlight">Experiences</span>
                            </h1>

                            <p className="bd-hero-desc">
                                We transform businesses into memorable brands through strategic design
                                thinking, compelling visual identities, and cohesive brand ecosystems
                                that resonate with your audience and drive meaningful connections.
                            </p>

                            <div className="bd-privacy-badge">
                                Our customer privacy is on top of our mind.
                            </div>
                        </div>

                        {/* Bottom glass badges */}
                        <div className="bd-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`bd-service-badge 
                                    ${item === "Brand Strategy" ? "bd-badge-strategy" : ""} 
                                    ${item === "Brand Guidelines" ? "bd-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* About Section - Cards with images on top for 1&3, images at bottom for 2&4 */}
                    <section className="bd-about-section">
                        <div className="bd-container">
                            {/* Title and Description at the top */}
                            <div className="bd-about-header">
                                <h2 className="bd-about-title">About Our Approach</h2>
                                <p className="bd-about-description">
                                    At ENGLORAY, we believe that great branding is more than just a logo -
                                    it's the complete story of your business. Our design philosophy combines
                                    strategic thinking with creative excellence to build brands that stand
                                    the test of time.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="bd-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`bd-about-card ${card.id === 2 || card.id === 4 ? 'bd-card-image-bottom' : ''}`}
                                    >
                                        {/* For cards 1 and 3: Image at top, content at bottom */}
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="bd-card-image-wrapper">
                                                    <div className="bd-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="bd-card-content-wrapper">
                                                    <div className="bd-card-content">
                                                        <strong className="bd-card-title">{card.title}</strong>
                                                        <p className="bd-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* For cards 2 and 4: Content at top, image at bottom */}
                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="bd-card-content-wrapper">
                                                    <div className="bd-card-content">
                                                        <strong className="bd-card-title">{card.title}</strong>
                                                        <p className="bd-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="bd-card-image-wrapper">
                                                    <div className="bd-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Brand DNA Section - Added after About Section */}
                    <section className="bd-branddna-section">
                        <div className="bd-branddna-container">
                            {/* LEFT CONTENT */}
                            <div className="bd-branddna-left">
                                <h2>Brand DNA</h2>
                                <h3 className="bd-branddna-subtitle">
                                    The Foundation of Every Strong Brand
                                </h3>
                                <p>
                                    Great brands are not built by design alone—they are shaped by
                                    purpose, personality, and clear communication. Our Brand DNA
                                    framework defines the strategic elements that guide how your
                                    brand thinks, speaks, and visually connects with your audience.
                                </p>
                                <ul className="bd-dna-list">
                                    <li><strong>Visual Storytelling:</strong> Crafting narratives that resonate deeply with your target audience.</li>
                                    <li><strong>Emotional Resonance:</strong> Building connections that turn customers into brand advocates.</li>
                                    <li><strong>Strategic Consistency:</strong> Ensuring a unified brand voice across every digital touchpoint.</li>
                                    <li><strong>Future-Proof Design:</strong> Scalable visual identities that evolve with your business growth.</li>
                                </ul>
                            </div>

                            {/* RIGHT GRAPHIC */}
                            <div className="bd-branddna-right">
                                {/* SVG Link Animation (Expanding Lines from Center) */}
                                <svg className="bd-link-svg" viewBox="0 0 500 460">
                                    {/* Faint base lines connecting everything (no black, soft blue) */}
                                    <g className="bd-link-bases">
                                        <path className="bd-base-path" d="M265,240 L265,20" />
                                        <path className="bd-base-path" d="M265,240 L0,240" />
                                        <path className="bd-base-path" d="M265,240 L500,240" />
                                        <path className="bd-base-path" d="M265,240 L265,450" />
                                        {/* Connect outer nodes together */}
                                        <path className="bd-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    {/* Animated flowing lines from center/nodes, sequenced */}
                                    <g className="bd-animated-flows">
                                        {/* PHASE 1: Voice (0,240) -> Purpose (265,20), Personality (265,240), Visual Style (265,450) */}
                                        <g className="bd-phase-group bd-phase-1">
                                            <path pathLength="100" className="bd-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="bd-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M0,240 L265,450" />
                                        </g>

                                        {/* PHASE 2: Purpose (265,20) -> Voice (0,240), Personality (265,240), Values (500,240) */}
                                        <g className="bd-phase-group bd-phase-2">
                                            <path pathLength="100" className="bd-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,20 L500,240" />
                                        </g>

                                        {/* PHASE 3: Personality (265,240) -> Voice (0,240), Purpose (265,20), Values (500,240), Visual Style (265,450) */}
                                        <g className="bd-phase-group bd-phase-3">
                                            <path pathLength="100" className="bd-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,240 L265,450" />
                                        </g>

                                        {/* PHASE 4: Values (500,240) -> Purpose (265,20), Personality (265,240), Visual Style (265,450) */}
                                        <g className="bd-phase-group bd-phase-4">
                                            <path pathLength="100" className="bd-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="bd-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M500,240 L265,450" />
                                        </g>

                                        {/* PHASE 5: Visual Style (265,450) -> Voice (0,240), Personality (265,240), Values (500,240) */}
                                        <g className="bd-phase-group bd-phase-5">
                                            <path pathLength="100" className="bd-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="bd-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                {/* circles */}
                                <div className="bd-dna-circle bd-circle-purpose">
                                    <FaCompass className="bd-icon" />

                                    <h3>Purpose</h3>
                                    <p className="bd-circle-desc">
                                        Defines why the brand exists and the impact it creates.
                                    </p>
                                </div>

                                <div className="bd-dna-circle bd-circle-voice">
                                    <FaComments className="bd-icon" />
                                    <h3>Voice</h3>
                                    <p className="bd-circle-desc">
                                        The tone and language used in brand communication.
                                    </p>
                                </div>

                                <div className="bd-dna-circle bd-circle-values">
                                    <FaUserCircle className="bd-icon" />
                                    <h3>Values</h3>
                                    <p className="bd-circle-desc">
                                        Principles that guide brand decisions and culture.
                                    </p>
                                </div>

                                <div className="bd-dna-circle bd-circle-personality">
                                    <FaGem className="bd-icon" />
                                    <h3>Personality</h3>
                                    <p className="bd-circle-desc">
                                        The emotional character that shapes brand perception.
                                    </p>
                                </div>

                                <div className="bd-dna-circle bd-circle-visual">
                                    <FaPalette className="bd-icon" />
                                    <h3>Visual Style</h3>
                                    <p className="bd-circle-desc">
                                        Design system including colors, typography and imagery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="bd-howworks">
                        <div className="bd-howworks-container">
                            {/* LEFT SIDE */}
                            <div className="bd-left-side">
                                <div className="bd-badge">
                                    <span className="bd-dot"></span>
                                    Brand Strategy Process
                                </div>
                                <p className="bd-intro-text">
                                    We create strong brand identities through strategy, design, and storytelling that connect with your audience and make your business memorable.
                                </p>
                                <h2 className="bd-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="bd-arrow">→</div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="bd-right-side">
                                <h2 className="bd-section-title">What Is Branding</h2>
                                <div className="bd-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="bd-step-card">
                                            <span className="bd-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Circular Stats Section - Added after How It Works */}
                    <section className="bd-circular-stats">
                        <div className="bd-branding-stats-layout">
                            {/* LEFT CONTENT */}
                            <div className="bd-stats-content">
                                <h2>Our Branding Impact in Numbers</h2>
                                <p>
                                    We measure our success through the brands we build and the
                                    results we deliver. These statistics highlight the growth,
                                    creativity, and trust we have developed with businesses
                                    across different industries.
                                </p>
                                <ul className="bd-impact-list">
                                    <li>100% Brand Recognition Uplift for our primary partners.</li>
                                    <li>45% Average Increase in Customer Loyalty and engagement.</li>
                                    <li>Reduced Time-to-Market for new brand assets by 30%.</li>
                                    <li>Global reach with brand identities recognized across 15+ countries.</li>
                                </ul>
                            </div>

                            {/* CARD STATS */}
                            <div className="bd-stats-wrapper-cards">
                                <div className="bd-stat-card">
                                    <h2>120+</h2>
                                    <p>Brands Built</p>
                                </div>

                                <div className="bd-stat-card">
                                    <h2>300+</h2>
                                    <p>Projects Delivered</p>
                                </div>

                                <div className="bd-stat-card">
                                    <h2>95%</h2>
                                    <p>Client Satisfaction</p>
                                </div>

                                <div className="bd-stat-card">
                                    <h2>50+</h2>
                                    <p>Industry Awards</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM STATS */}
                        <div className="bd-bottom-stats">
                            <div className="bd-stat">
                                <h3>5+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>

                            <div className="bd-stat">
                                <h3>40+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>

                            <div className="bd-stat">
                                <h3>50+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="bd-stat">
                                <h3>200+</h3>
                                <p>Brand Campaigns Created</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section - UPDATED to match HeroSection design */}
                    <section className="bd-projects-section">
                        {/* MIRRORED BACKGROUND */}
                        <img src={projectsBg} className="bd-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="bd-projects-bg-right" alt="background right" />

                        <div className="bd-projects-logos bd-left-logos">
                            <div className="bd-project-logo-card l1"><img src={logo1} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card l2"><img src={logo2} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card l3"><img src={logo3} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card l4"><img src={logo4} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card l5"><img src={logo9} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card l6"><img src={logo10} className="bd-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="bd-projects-logos bd-right-logos">
                            <div className="bd-project-logo-card r1"><img src={logo5} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card r2"><img src={logo6} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card r3"><img src={logo7} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card r4"><img src={logo8} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card r5"><img src={logo11} className="bd-project-logo" alt="brand logo" /></div>
                            <div className="bd-project-logo-card r6"><img src={logo12} className="bd-project-logo" alt="brand logo" /></div>
                        </div>

                        {/* CENTER CONTENT */}
                        <div className="bd-projects-content">
                            <h1>
                                Trusted by <br />
                                Great Brands
                            </h1>

                            <p>
                                We collaborate with forward-thinking brands to
                                create meaningful digital experiences. Our clients
                                trust us to deliver impactful design and scalable
                                solutions.
                            </p>

                            <div className="bd-projects-stats">
                                <div>
                                    <h2>20+</h2>
                                    <span>Promoters</span>
                                </div>
                                <div>
                                    <h2>100+</h2>
                                    <span>contributions</span>
                                </div>
                                <div>
                                    <h2>150+</h2>
                                    <span>organizations</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Feedback Section - Updated to match carousel style */}
                    <section className="bd-feedback-section">
                        <div className="bd-container">
                            <div className="bd-feedback-header">
                                <h2 className="bd-feedback-title">
                                    Testimonials that <span>Speak to Our Results</span>
                                </h2>
                                <p className="bd-feedback-description">
                                    Here are some of the testimonials from our clients who have benefited from our branding and design services.
                                </p>
                            </div>

                            <div className="bd-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);

                                    return (
                                        <div
                                            key={feedback.id}
                                            className={`bd-feedback-card ${position}`}
                                        >
                                            <div className="bd-feedback-rating">{feedback.rating}</div>
                                            <div className="bd-feedback-quote-icon">❝</div>
                                            <p className="bd-feedback-text">{feedback.text}</p>

                                            <div className="bd-feedback-author">
                                                <div className="bd-author-avatar">
                                                    <div className="bd-avatar-initial">{feedback.initial}</div>
                                                </div>
                                                <div>
                                                    <div className="bd-author-name">{feedback.author}</div>
                                                    <div className="bd-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="bd-feedback-controls">
                                <button onClick={handlePrevSlide} aria-label="Previous feedback">‹</button>
                                <button onClick={handleNextSlide} aria-label="Next feedback">›</button>
                            </div>
                        </div>
                    </section>
                    <WhiteFooter />
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default BrandingDesigning;