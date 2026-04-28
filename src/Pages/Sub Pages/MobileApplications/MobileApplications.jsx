import React, { useState, useEffect, useRef } from 'react';
import mobileImageOne from '../../../assets/case study images/uiux/pavizham.jpg';
import mobileImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import mobileImageThree from '../../../assets/case study images/uiux/gym life.png';
import './MobileApplications.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
import { FaMobileAlt, FaAppStoreIos, FaAndroid, FaCode, FaRocket, FaCheckCircle, FaUserCheck } from "react-icons/fa";
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

const MobileApplications = () => {
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
            text: "Our mobile app's engagement has increased by 150% since the redesign. The user experience is world-class.",
            author: "Johnathan Smith",
            role: "Product Owner",
            initial: "J"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Engloray delivered a robust application that handles thousands of concurrent users with zero latency.",
            author: "Aisha Khan",
            role: "CTO, RetailPlus",
            initial: "A"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "The cross-platform development saved us 40% in development costs while maintaining native-level performance.",
            author: "Liam O'Connor",
            role: "Startup Founder",
            initial: "L"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "Highly professional team with deep expertise in both iOS and Android ecosystems. They truly care about the details.",
            author: "Sofia Garcia",
            role: "Mobile Strategy Lead",
            initial: "S"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "The new app is a game-changer for our business. Our users love the intuitive navigation and sleek interface.",
            author: "Ethan Wright",
            role: "Operations Director",
            initial: "E"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "Flawless execution from wireframing to deployment. Engloray is the best partner for mobile innovation.",
            author: "Mia Wong",
            role: "Marketing Head",
            initial: "M"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "The push notification strategy Engloray implemented tripled our daily active users. Their insights into user behavior are invaluable.",
            author: "Growth Labs",
            role: "Growth Lead",
            initial: "G"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "A truly seamless experience. The app is fast, looks amazing, and our customers love the new biometric login feature.",
            author: "App Hub",
            role: "Tech Lead",
            initial: "A"
        },
        {
            id: 9,
            rating: "★★★★★",
            text: "Their expertise in both iOS and Android ensures that our product feels native on every device. A rare find in development agencies.",
            author: "Native First",
            role: "Founder",
            initial: "N"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "E-Commerce App",
            description: "High-performance shopping application with seamless checkout, personalized recommendations, and AR integration.",
            category: "Retail / Mobile",
            image: mobileImageOne,
            stats: {
                duration: "14 Weeks",
                satisfaction: "100%"
            }
        },
        {
            id: 2,
            title: "Health Track",
            description: "Wellness and fitness tracking app with real-time vitals monitoring and AI-driven coaching for a global user base.",
            category: "Healthcare",
            image: mobileImageTwo,
            stats: {
                duration: "12 Weeks",
                satisfaction: "98%"
            }
        },
        {
            id: 3,
            title: "Fintech Wallet",
            description: "Secure, encrypted financial management platform with multi-currency support and real-time transaction alerts.",
            category: "Fintech",
            image: mobileImageThree,
            stats: {
                duration: "16 Weeks",
                satisfaction: "99%"
            }
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "Product Strategy",
            description: "We define the roadmap for your mobile application, focusing on user needs, feature prioritization, and market-fit to ensure your app actually delivers value.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Native & Hybrid Dev",
            description: "Building powerful apps using Swift, Kotlin, or React Native. We choose the right technology to balance performance, cost, and speed-to-market.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Quality Assurance",
            description: "Rigorous testing across hundreds of device configurations to ensure a bug-free experience. We prioritize security, stability, and pixel-perfection.",
            image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "App Store Success",
            description: "Managing the entire lifecycle from beta testing to Store submission. We optimize for ASO and ensure your launch is successful and impactful.",
            image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Conceptualization",
            text: "Brainstorming and defining the core value proposition of your mobile app."
        },
        {
            title: "Step 2",
            heading: "UI/UX Architecture",
            text: "Designing intuitive user journeys and high-fidelity interfaces."
        },
        {
            title: "Step 3",
            heading: "Agile Development",
            text: "Iterative coding and feature implementation with regular feedback cycles."
        },
        {
            title: "Step 4",
            heading: "Testing & QA",
            text: "Comprehensive testing to ensure performance, security, and usability."
        },
        {
            title: "Step 5",
            heading: "Deployment & Support",
            text: "Launching on App Stores and providing ongoing maintenance and updates."
        },
        {
            title: "Step 6",
            heading: "Scale & Evolution",
            text: "Regular updates and infrastructure scaling to support your growing user base."
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
        "iPhone & iPad",
        "Android Dev",
        "React Native",
        "Mobile UI/UX",
        "Flutter Apps"
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
                    <title>Engloray - Mobile Applications</title>
                    <meta name="description" content="Build world-class mobile applications for iOS and Android with our expert development team." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Mobile Applications" />
                    <meta property="og:description" content="Innovative Mobile Solutions for Every Screen" />
                </Helmet>

                <div className="ma-page" id='mobileApplicationsPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="ma-hero">
                        <img src={heroBg} className="ma-hero-bg-image" alt="background texture" />

                        <div className="ma-gradient-shape ma-emerald-shape"></div>
                        <div className="ma-gradient-shape ma-teal-shape"></div>

                        <div className="ma-floating-card ma-left ma-rotate-left">
                            <img src={avatarLeft} alt="App strategist" />
                            <div className="ma-card-content">
                                <h4>App Performance</h4>
                                <p>Optimized Core Web Vitals</p>
                                <div className="ma-card-progress">
                                    <div className="ma-progress-fill" style={{ width: '92%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="ma-floating-card ma-right ma-rotate-right">
                            <img src={avatarRight} alt="App designer" />
                            <div className="ma-card-content">
                                <h4>User Engagement</h4>
                                <p>Retention & Happiness</p>
                                <div className="ma-card-progress">
                                    <div className="ma-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="ma-hero-container">
                            <div className="ma-hero-badge">
                                Mobile Application Development
                            </div>

                            <h1 className="ma-hero-title">
                                Crafting Exceptional<br /> <span className="ma-title-highlight">Mobile</span> <span className="ma-title-highlight">Experiences</span>
                            </h1>

                            <p className="ma-hero-desc">
                                We transform ideas into intuitive, high-performance mobile applications that users love.
                                From native iOS and Android to cross-platform React Native solutions, we build
                                apps that scale with your business and define your digital presence.
                            </p>

                            <div className="ma-privacy-badge">
                                Scalable Apps Built for the Modern User
                            </div>
                        </div>

                        <div className="ma-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`ma-service-badge 
                                    ${item === "iPhone & iPad" ? "ma-badge-strategy" : ""} 
                                    ${item === "Flutter Apps" ? "ma-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="ma-about-section">
                        <div className="ma-container">
                            <div className="ma-about-header">
                                <h2 className="ma-about-title">About Our Development Approach</h2>
                                <p className="ma-about-description">
                                    We believe a great app is more than just code. It's the intersection of
                                    cutting-edge technology and human-centered design. Our development process
                                    is built on transparency, performance, and a relentless focus on the end-user.
                                </p>
                            </div>

                            <div className="ma-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`ma-about-card ${card.id === 2 || card.id === 4 ? 'ma-card-image-bottom' : ''}`}
                                    >
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="ma-card-image-wrapper">
                                                    <div className="ma-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="ma-card-content-wrapper">
                                                    <div className="ma-card-content">
                                                        <strong className="ma-card-title">{card.title}</strong>
                                                        <p className="ma-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="ma-card-content-wrapper">
                                                    <div className="ma-card-content">
                                                        <strong className="ma-card-title">{card.title}</strong>
                                                        <p className="ma-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="ma-card-image-wrapper">
                                                    <div className="ma-card-image">
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

                    <section className="ma-branddna-section">
                        <div className="ma-branddna-container">
                            <div className="ma-branddna-left">
                                <h2>Application DNA</h2>
                                <h3 className="ma-branddna-subtitle">
                                    The Core Principles of<br /> Successful App Development
                                </h3>
                                <p>
                                    Every great app shares a common DNA: speed, reliability, and intuition.
                                    Our development framework ensures that every app we build is rooted in
                                    technical excellence and user-first functionality.
                                </p>
                                <ul className="ma-dna-list">
                                    <li><strong>Native & Cross-Platform:</strong> Expertise in iOS, Android, Flutter, and React Native for global reach.</li>
                                    <li><strong>Offline-First Design:</strong> Robust synchronization ensuring apps work perfectly even without connectivity.</li>
                                    <li><strong>Biometric Security:</strong> Advanced fingerprint and face recognition integration for data protection.</li>
                                    <li><strong>Interactive Micro-Animations:</strong> Enhancing UX with smooth, high-performance visual feedback.</li>
                                </ul>
                            </div>

                            <div className="ma-branddna-right">
                                <svg className="ma-link-svg" viewBox="0 0 500 460">
                                    <g className="ma-link-bases">
                                        <path className="ma-base-path" d="M265,240 L265,20" />
                                        <path className="ma-base-path" d="M265,240 L0,240" />
                                        <path className="ma-base-path" d="M265,240 L500,240" />
                                        <path className="ma-base-path" d="M265,240 L265,450" />
                                        <path className="ma-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    <g className="ma-animated-flows">
                                        <g className="ma-phase-group ma-phase-1">
                                            <path pathLength="100" className="ma-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="ma-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M0,240 L265,450" />
                                        </g>
                                        <g className="ma-phase-group ma-phase-2">
                                            <path pathLength="100" className="ma-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,20 L500,240" />
                                        </g>
                                        <g className="ma-phase-group ma-phase-3">
                                            <path pathLength="100" className="ma-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,240 L265,450" />
                                        </g>
                                        <g className="ma-phase-group ma-phase-4">
                                            <path pathLength="100" className="ma-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="ma-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M500,240 L265,450" />
                                        </g>
                                        <g className="ma-phase-group ma-phase-5">
                                            <path pathLength="100" className="ma-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="ma-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                <div className="ma-dna-circle ma-circle-purpose">
                                    <FaCode className="ma-icon" />
                                    <h3>Performance</h3>
                                    <p className="ma-circle-desc">Native-level speed and responsiveness across devices.</p>
                                </div>

                                <div className="ma-circle-voice ma-dna-circle">
                                    <FaMobileAlt className="ma-icon" />
                                    <h3>Responsive</h3>
                                    <p className="ma-circle-desc">Seamless display across all screen sizes and ratios.</p>
                                </div>

                                <div className="ma-circle-values ma-dna-circle">
                                    <FaUserCheck className="ma-icon" />
                                    <h3>Intuitive</h3>
                                    <p className="ma-circle-desc">User journeys that feel natural and effortless.</p>
                                </div>

                                <div className="ma-circle-personality ma-dna-circle">
                                    <FaRocket className="ma-icon" />
                                    <h3>Scalable</h3>
                                    <p className="ma-circle-desc">Architecture built to grow with millions of users.</p>
                                </div>

                                <div className="ma-circle-visual ma-dna-circle">
                                    <FaCheckCircle className="ma-icon" />
                                    <h3>Robust</h3>
                                    <p className="ma-circle-desc">Secure, stable, and extensively tested for reliability.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ma-howworks">
                        <div className="ma-howworks-container">
                            <div className="ma-left-side">
                                <div className="ma-badge">
                                    <span className="ma-dot"></span>
                                    App Development Lifecycle
                                </div>
                                <p className="ma-intro-text">
                                    We bring your mobile vision to life through an agile, transparent, and quality-driven development process.
                                </p>
                                <h2 className="ma-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="ma-arrow">→</div>
                            </div>

                            <div className="ma-right-side">
                                <h2 className="ma-section-title">Our Development Engine</h2>
                                <div className="ma-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="ma-step-card">
                                            <span className="ma-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ma-circular-stats">
                        <div className="ma-branding-stats-layout">
                            <div className="ma-stats-content">
                                <h2>Our Mobile Success in Numbers</h2>
                                <p>
                                    Our work speaks for itself through the ratings, downloads, and
                                    satisfaction of the users who interact with our apps every day.
                                </p>
                                <ul className="ma-impact-list">
                                    <li>4.8+ Average Rating across the Apple App Store and Google Play.</li>
                                    <li>85% User Retention Rate after the first 30 days of launch.</li>
                                    <li>Rapid Feature Iteration cycles ensuring your app stays ahead of trends.</li>
                                    <li>Successfully managed 1M+ active daily users on high-traffic platforms.</li>
                                </ul>
                            </div>

                            <div className="ma-stats-wrapper-cards">
                                <div className="ma-stat-card">
                                    <h2>100+</h2>
                                    <p>Apps Developed</p>
                                </div>
                                <div className="ma-stat-card">
                                    <h2>1M+</h2>
                                    <p>Active Users</p>
                                </div>
                                <div className="ma-stat-card">
                                    <h2>4.8★</h2>
                                    <p>Apple App Store</p>
                                </div>
                                <div className="ma-stat-card">
                                    <h2>4.9★</h2>
                                    <p>Google Play Store</p>
                                </div>
                            </div>
                        </div>

                        <div className="ma-bottom-stats">
                            <div className="ma-stat">
                                <h3>5+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>
                            <div className="ma-stat">
                                <h3>25+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>
                            <div className="ma-stat">
                                <h3>60+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="ma-stat">
                                <h3>500+</h3>
                                <p>Successful Features Shipped</p>
                            </div>
                        </div>
                    </section>

                    <section className="ma-projects-section">
                        <img src={projectsBg} className="ma-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="ma-projects-bg-right" alt="background right" />

                        <div className="ma-projects-logos ma-left-logos">
                            <div className="ma-project-logo-card l1"><img src={logo1} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card l2"><img src={logo2} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card l3"><img src={logo3} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card l4"><img src={logo4} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card l5"><img src={logo9} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card l6"><img src={logo10} className="ma-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="ma-projects-logos ma-right-logos">
                            <div className="ma-project-logo-card r1"><img src={logo5} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card r2"><img src={logo6} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card r3"><img src={logo7} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card r4"><img src={logo8} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card r5"><img src={logo11} className="ma-project-logo" alt="brand logo" /></div>
                            <div className="ma-project-logo-card r6"><img src={logo12} className="ma-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="ma-projects-content">
                            <h1>Built for <br />Leading Brands</h1>
                            <p>We collaborate with modern companies to define the mobile frontier.</p>
                            <div className="ma-projects-stats">
                                <div><h2>30+</h2><span>Fortune 500 Partners</span></div>
                                <div><h2>200+</h2><span>App Store Launches</span></div>
                                <div><h2>50+</h2><span>Design Awards</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="ma-feedback-section">
                        <div className="ma-container">
                            <div className="ma-feedback-header">
                                <h2 className="ma-feedback-title">Success <span>Stories</span></h2>
                                <p className="ma-feedback-description">Hear how our mobile solutions have helped businesses connect with users.</p>
                            </div>

                            <div className="ma-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`ma-feedback-card ${position}`}>
                                            <div className="ma-feedback-rating">{feedback.rating}</div>
                                            <div className="ma-feedback-quote-icon">❝</div>
                                            <p className="ma-feedback-text">{feedback.text}</p>
                                            <div className="ma-feedback-author">
                                                <div className="ma-author-avatar"><div className="ma-avatar-initial">{feedback.initial}</div></div>
                                                <div>
                                                    <div className="ma-author-name">{feedback.author}</div>
                                                    <div className="ma-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="ma-feedback-controls">
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

export default MobileApplications;