import React, { useState, useEffect, useRef } from 'react';
import uiImageOne from '../../../assets/case study images/uiux/pavizham.jpg';
import uiImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import uiImageThree from '../../../assets/case study images/uiux/gym life.png';
import './UiUxPage.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
import { FaCode, FaRocket, FaCheckCircle, FaUserCheck, FaSearch, FaProjectDiagram, FaCogs, FaPaintBrush } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";
import projectsBg from '../../../assets/heroimage.jpeg';
import logo1 from '../../../assets/icons/logoipsum-396.png';
import logo2 from '../../../assets/icons/logoipsum-397.png';
import logo3 from '../../../assets/icons/logoipsum-399.png';
import logo4 from '../../../assets/icons/logoipsum-401.png';
import logo5 from '../../../assets/icons/logoipsum-403.png';
import logo6 from '../../../assets/icons/logoipsum-405.png';
import logo7 from '../../../assets/icons/logoipsum-407.png';
import logo8 from '../../../assets/icons/logoipsum-409.png';
import logo9 from '../../../assets/icons/logoipsum-411.png';
import logo10 from '../../../assets/icons/logoipsum-413.png';
import logo11 from '../../../assets/icons/logoipsum-415.png';
import logo12 from '../../../assets/icons/logoipsum-417.png';
import avatarLeft from '../../../assets/cartoon_female_1.png';
import avatarRight from '../../../assets/cartoon_male_1.png';

const UiUxPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

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
            text: "The design system Engloray built transformed our product development. Our team now ships features 3x faster with complete visual consistency.",
            author: "Sarah Johnson",
            role: "Product Director, DesignHub",
            initial: "S"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Our mobile app redesign increased user retention by 45%. The team understood our users deeply and delivered an interface that feels fresh and intuitive.",
            author: "Michael Chen",
            role: "Founder, AppVenture",
            initial: "M"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "The UX research they conducted uncovered insights we completely missed. Their recommendations transformed our product roadmap.",
            author: "Emma Williams",
            role: "Head of Product",
            initial: "E"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "From wireframes to final UI, every pixel was thoughtfully considered. The team delivered a design system that our team actually loves to use.",
            author: "David Kumar",
            role: "Creative Director",
            initial: "D"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "The user testing and iterative design process uncovered usability issues before we launched. Our post-launch satisfaction scores are the highest ever.",
            author: "Lisa Thompson",
            role: "CEO, StartupScale",
            initial: "L"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "The mobile app designs they created are stunning. Our users consistently praise the intuitive navigation and beautiful visuals.",
            author: "James Wilson",
            role: "Product Manager",
            initial: "J"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "Working with Engloray elevated our entire product's design maturity. Their strategic guidance and hands-on execution helped us create a cohesive experience.",
            author: "Natalie Garcia",
            role: "Design Lead",
            initial: "N"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "The user research and persona development gave us clarity on who we are building for. Every design decision now has user data behind it.",
            author: "Robert Taylor",
            role: "CPO, FinTech Plus",
            initial: "R"
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "User Research",
            description: "We conduct interviews, surveys, and analysis to map user personas and journeys, ensuring every design decision is backed by real user behavior data.",
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Wireframes & Prototypes",
            description: "Creating low-fidelity wireframes and interactive prototypes to define the information architecture and validate user flows early in the process.",
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "UI & Visual Design",
            description: "Crafting visually stunning, pixel-perfect user interfaces that align with your brand identity while maintaining high accessibility standards.",
            image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Design Systems",
            description: "Developing comprehensive design systems and component libraries to guarantee visual consistency and speed up engineering implementation.",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Discover & Research",
            text: "Researching your users, mapping user journeys, and outlining user personas to back choices."
        },
        {
            title: "Step 2",
            heading: "Information Architecture",
            text: "Designing intuitive navigation maps and structuring sitemaps for smooth user flows."
        },
        {
            title: "Step 3",
            heading: "Wireframing",
            text: "Drawing low-fidelity layouts and iterating based on early feedback loops."
        },
        {
            title: "Step 4",
            heading: "Prototyping",
            text: "Building interactive, clickable mockups that simulate user interactions."
        },
        {
            title: "Step 5",
            heading: "Visual Design",
            text: "Styling the screens with pixel-perfect graphics and integrating brand guidelines."
        },
        {
            title: "Step 6",
            heading: "Testing & Handoff",
            text: "Conducting usability testing and handing off developer-ready design tokens."
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

    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    const badges = [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Visual Design",
        "Usability Testing"
    ];

    return (
        <>
            <div>
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <clipPath id="cardCurve" clipPathUnits="objectBoundingBox">
                            <path d="M 0.15,0 L 0.85,0 A 0.15,0.15 0,0,1 1,0.15 L 1,0.75 A 0.08,0.06 0,0,1 0.92,0.81 L 0.9,0.81 A 0.06,0.06 0,0,0 0.84,0.87 L 0.84,0.92 A 0.08,0.08 0,0,1 0.76,1 L 0.15,1 A 0.15,0.15 0,0,1 0,0.85 L 0,0.15 A 0.15,0.15 0,0,1 0.15,0 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <Helmet>
                    <title>Engloray - UI/UX Design Services</title>
                    <meta name="description" content="Create exceptional digital experiences that users love and remember with our expert UI/UX design team." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | UI/UX Design Services" />
                    <meta property="og:description" content="User-Centered Digital Experiences for Every Screen" />
                </Helmet>

                <div className="uiuxp-page" id='uiuxPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="uiuxp-hero">
                        <img src={heroBg} className="uiuxp-hero-bg-image" alt="background texture" />

                        <div className="uiuxp-gradient-shape uiuxp-pink-shape"></div>
                        <div className="uiuxp-gradient-shape uiuxp-purple-shape"></div>

                        <div className="uiuxp-floating-card uiuxp-left uiuxp-rotate-left">
                            <img src={avatarLeft} alt="User research specialist" />
                            <div className="uiuxp-card-content">
                                <h4>User Research</h4>
                                <p>Persona & Journey Maps</p>
                                <div className="uiuxp-card-progress">
                                    <div className="uiuxp-progress-fill" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="uiuxp-floating-card uiuxp-right uiuxp-rotate-right">
                            <img src={avatarRight} alt="Visual interface designer" />
                            <div className="uiuxp-card-content">
                                <h4>Visual Design</h4>
                                <p>Pixel-Perfect & Cohesive</p>
                                <div className="uiuxp-card-progress">
                                    <div className="uiuxp-progress-fill" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="uiuxp-hero-container">
                            <div className="uiuxp-hero-badge">
                                UI/UX Design Services
                            </div>

                            <h1 className="uiuxp-hero-title">
                                Crafting Exceptional<br /> <span className="uiuxp-title-highlight">Digital</span> <span className="uiuxp-title-highlight">Experiences</span>
                            </h1>

                            <p className="uiuxp-hero-desc">
                                We create intuitive, beautiful, and functional interfaces that connect users
                                with your product. Our human-centered design approach ensures every interaction
                                is meaningful and every journey is seamless.
                            </p>

                            <div className="uiuxp-privacy-badge">
                                User-Centered Design for Maximum Engagement
                            </div>
                        </div>

                        <div className="uiuxp-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`uiuxp-service-badge 
                                    ${item === "User Research" ? "uiuxp-badge-strategy" : ""} 
                                    ${item === "Usability Testing" ? "uiuxp-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="uiuxp-about-section">
                        <div className="uiuxp-container">
                            <div className="uiuxp-about-header">
                                <h2 className="uiuxp-about-title">About Our Design Approach</h2>
                                <p className="uiuxp-about-description">
                                    We believe a great product is more than just visuals. It's the intersection of
                                    empathy-driven user research and clean visual layouts. Our design process
                                    is built on validation, usability testing, and a relentless focus on the end-user.
                                </p>
                            </div>

                            <div className="uiuxp-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`uiuxp-about-card ${card.id === 2 || card.id === 4 ? 'uiuxp-card-image-bottom' : ''}`}
                                    >
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="uiuxp-card-image-wrapper">
                                                    <div className="uiuxp-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="uiuxp-card-content-wrapper">
                                                    <div className="uiuxp-card-content">
                                                        <strong className="uiuxp-card-title">{card.title}</strong>
                                                        <p className="uiuxp-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="uiuxp-card-content-wrapper">
                                                    <div className="uiuxp-card-content">
                                                        <strong className="uiuxp-card-title">{card.title}</strong>
                                                        <p className="uiuxp-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="uiuxp-card-image-wrapper">
                                                    <div className="uiuxp-card-image">
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

                    <section className="uiuxp-branddna-section">
                        <div className="uiuxp-branddna-container">
                            <div className="uiuxp-branddna-left">
                                <h2>Design DNA</h2>
                                <h3 className="uiuxp-branddna-subtitle">
                                    The Core Principles of<br /> Outstanding UI/UX Design
                                </h3>
                                <p>
                                    Outstanding digital products are built on a solid foundation of user research,
                                    visual clarity, and intuitive interaction design.
                                </p>
                                <ul className="uiuxp-dna-list">
                                    <li><strong>User-Centered Strategy:</strong> Aligning business goals with user needs through extensive discovery.</li>
                                    <li><strong>Visual Consistency:</strong> Scalable design systems that maintain brand cohesion across platforms.</li>
                                    <li><strong>Accessibility (WCAG):</strong> Interfaces built for everyone, complying with standard AA/AAA parameters.</li>
                                    <li><strong>Micro-Interactions:</strong> Subtle animations that guide the user and enrich the overall experience.</li>
                                </ul>
                            </div>

                            <div className="uiuxp-branddna-right">
                                <svg className="uiuxp-link-svg" viewBox="0 0 500 460">
                                    <g className="uiuxp-link-bases">
                                        <path className="uiuxp-base-path" d="M265,240 L265,20" />
                                        <path className="uiuxp-base-path" d="M265,240 L0,240" />
                                        <path className="uiuxp-base-path" d="M265,240 L500,240" />
                                        <path className="uiuxp-base-path" d="M265,240 L265,450" />
                                        <path className="uiuxp-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    <g className="uiuxp-animated-flows">
                                        <g className="uiuxp-phase-group uiuxp-phase-1">
                                            <path pathLength="100" className="uiuxp-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M0,240 L265,450" />
                                        </g>
                                        <g className="uiuxp-phase-group uiuxp-phase-2">
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,20 L500,240" />
                                        </g>
                                        <g className="uiuxp-phase-group uiuxp-phase-3">
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,240 L265,450" />
                                        </g>
                                        <g className="uiuxp-phase-group uiuxp-phase-4">
                                            <path pathLength="100" className="uiuxp-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M500,240 L265,450" />
                                        </g>
                                        <g className="uiuxp-phase-group uiuxp-phase-5">
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="uiuxp-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                <div className="uiuxp-dna-circle uiuxp-circle-purpose">
                                    <FaSearch className="uiuxp-icon" />
                                    <h3>Research</h3>
                                    <p className="uiuxp-circle-desc">User personas and mapping to back choices.</p>
                                </div>

                                <div className="uiuxp-circle-voice uiuxp-dna-circle">
                                    <FaProjectDiagram className="uiuxp-icon" />
                                    <h3>Wireframing</h3>
                                    <p className="uiuxp-circle-desc">Sitemaps and user flows for navigation.</p>
                                </div>

                                <div className="uiuxp-circle-values uiuxp-dna-circle">
                                    <FaUserCheck className="uiuxp-icon" />
                                    <h3>Empathetic</h3>
                                    <p className="uiuxp-circle-desc">Pain-point centered user journeys.</p>
                                </div>

                                <div className="uiuxp-circle-personality uiuxp-dna-circle">
                                    <FaCogs className="uiuxp-icon" />
                                    <h3>Prototyping</h3>
                                    <p className="uiuxp-circle-desc">Interactive clickable flows and behaviors.</p>
                                </div>

                                <div className="uiuxp-circle-visual uiuxp-dna-circle">
                                    <FaPaintBrush className="uiuxp-icon" />
                                    <h3>Visual UI</h3>
                                    <p className="uiuxp-circle-desc">Pixel-perfect grids and design systems.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="uiuxp-howworks">
                        <div className="uiuxp-howworks-container">
                            <div className="uiuxp-left-side">
                                <h2 className="uiuxp-howworks-title">Our Design Engine</h2>
                                <div className="uiuxp-badge">
                                    <span className="uiuxp-dot"></span>
                                    UI/UX Design Lifecycle
                                </div>
                                <p className="uiuxp-intro-text">
                                    We bring your digital product vision to life through an iterative, user-first, and highly collaborative design process.
                                </p>
                                <h2 className="uiuxp-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="uiuxp-arrow">→</div>
                            </div>

                            <div className="uiuxp-right-side">
                                <div className="uiuxp-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="uiuxp-step-card">
                                            <span className="uiuxp-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="uiuxp-circular-stats">
                        <div className="uiuxp-branding-stats-layout">
                            <div className="uiuxp-stats-content">
                                <h2>Our Design Impact in Numbers</h2>
                                <p>
                                    We measure success through user satisfaction, conversion increases, and product engagement ratings.
                                </p>
                                <ul className="uiuxp-impact-list">
                                    <li>96% User Satisfaction Score based on post-redesign testing.</li>
                                    <li>+145% Average Increase in user engagement across redesigned apps.</li>
                                    <li>89% User Retention Rate after implementing intuitive navigation.</li>
                                    <li>Zero Design Debt with developer-ready Figma design systems.</li>
                                </ul>
                            </div>

                            <div className="uiuxp-stats-wrapper-cards">
                                <div className="uiuxp-stat-card">
                                    <h2>350+</h2>
                                    <p>Projects Designed</p>
                                </div>
                                <div className="uiuxp-stat-card">
                                    <h2>96%</h2>
                                    <p>User Satisfaction</p>
                                </div>
                                <div className="uiuxp-stat-card">
                                    <h2>4.9★</h2>
                                    <p>Avg Rating</p>
                                </div>
                                <div className="uiuxp-stat-card">
                                    <h2>3.5x</h2>
                                    <p>Faster Development</p>
                                </div>
                            </div>
                        </div>

                        <div className="uiuxp-bottom-stats">
                            <div className="uiuxp-stat">
                                <h3>6+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>
                            <div className="uiuxp-stat">
                                <h3>25+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>
                            <div className="uiuxp-stat">
                                <h3>60+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="uiuxp-stat">
                                <h3>1M+</h3>
                                <p>ACTIVE USERS ON OUR DESIGNS</p>
                            </div>
                        </div>
                    </section>

                    <section className="uiuxp-projects-section">
                        <img src={projectsBg} className="uiuxp-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="uiuxp-projects-bg-right" alt="background right" />

                        <div className="uiuxp-projects-logos uiuxp-left-logos">
                            <div className="uiuxp-project-logo-card l1"><img src={logo1} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card l2"><img src={logo2} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card l3"><img src={logo3} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card l4"><img src={logo4} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card l5"><img src={logo9} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card l6"><img src={logo10} className="uiuxp-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="uiuxp-projects-logos uiuxp-right-logos">
                            <div className="uiuxp-project-logo-card r1"><img src={logo5} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card r2"><img src={logo6} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card r3"><img src={logo7} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card r4"><img src={logo8} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card r5"><img src={logo11} className="uiuxp-project-logo" alt="brand logo" /></div>
                            <div className="uiuxp-project-logo-card r6"><img src={logo12} className="uiuxp-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="uiuxp-projects-content">
                            <h1>Designed for <br />Leading Brands</h1>
                            <p>
                                We collaborate with modern companies to define their visual identity. By combining user empathy and design system standards, we create outstanding interfaces.
                            </p>
                            <div className="uiuxp-projects-stats">
                                <div><h2>30+</h2><span>Fortune 500 Partners</span></div>
                                <div><h2>200+</h2><span>UI/UX Overhauls</span></div>
                                <div><h2>50+</h2><span>Design Awards</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="uiuxp-feedback-section">
                        <div className="uiuxp-container">
                            <div className="uiuxp-feedback-header">
                                <h2 className="uiuxp-feedback-title">Success <span>Stories</span></h2>
                                <p className="uiuxp-feedback-description">Hear how our UI/UX design solutions have helped businesses connect with users.</p>
                            </div>

                            <div className="uiuxp-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`uiuxp-feedback-card ${position}`}>
                                            <div className="uiuxp-feedback-rating">{feedback.rating}</div>
                                            <div className="uiuxp-feedback-quote-icon">❝</div>
                                            <p className="uiuxp-feedback-text">{feedback.text}</p>
                                            <div className="uiuxp-feedback-author">
                                                <div className="uiuxp-author-avatar"><div className="uiuxp-avatar-initial">{feedback.initial}</div></div>
                                                <div>
                                                    <div className="uiuxp-author-name">{feedback.author}</div>
                                                    <div className="uiuxp-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="uiuxp-feedback-controls">
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

export default UiUxPage;
