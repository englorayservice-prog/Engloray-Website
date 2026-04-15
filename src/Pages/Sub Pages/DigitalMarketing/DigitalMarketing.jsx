import React, { useState, useEffect, useRef } from 'react';
import uiImageOne from '../../../assets/case study images/uiux/pavizham.jpg';
import uiImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import uiImageThree from '../../../assets/case study images/uiux/gym life.png';
import './DigitalMarketing.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';
import { FaMobile, FaDesktop, FaUsers, FaPaintBrush, FaChartLine, FaUserCircle, FaGem } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";

// Import project section background
import projectsBg from '../../../assets/heroimage.jpeg';

// Import brand logos for projects section
import logo1 from '../../../assets/icons/logoipsum-339.png';
import logo2 from '../../../assets/icons/logoipsum-340.png';
import logo3 from '../../../assets/icons/logoipsum-353.png';
import logo4 from '../../../assets/icons/logoipsum-355.png';
import logo5 from '../../../assets/icons/logoipsum-359.png';
import logo6 from '../../../assets/icons/logoipsum-361.png';
import logo7 from '../../../assets/icons/logoipsum-363.png';
import logo8 from '../../../assets/icons/logoipsum-365.png';
import logo9 from '../../../assets/icons/logoipsum-368.png';
import logo10 from '../../../assets/icons/logoipsum-370.png';
import logo11 from '../../../assets/icons/logoipsum-371.png';
import logo12 from '../../../assets/icons/logoipsum-374.png';

const UiUxPage = () => {
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
            text: "Very clean and professional UI/UX. The user flow is smooth and makes our services easy to understand.",
            author: "Pavizham",
            role: "Pavizham Jewellery",
            initial: "P"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Navigation is smooth and the design feels modern. UI/UX improvements helped our website look more professional",
            author: "Viaan",
            role: "viaan enterprises",
            initial: "V"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "After the UI/UX redesign, users easily understand our programs and membership details. Engagement has clearly improved",
            author: "Gym Life",
            role: "Fitness and wellness",
            initial: "G"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Pavizham",
            description: "Complete UI/UX overhaul of jewellery application with focus on accessibility, security, and user experience.",
            category: "Mobile App Design",
            image: uiImageOne,
            stats: {
                duration: "2 months",
                // engagement: "+145%"
            }
        },
        {
            id: 2,
            title: "viaan Enterprises",
            description: "Modern redesign of fashion e-commerce platform with enhanced user journey and conversion optimization.",
            category: "Web Design",
            image: uiImageTwo,
            stats: {
                duration: "1 month",
                // conversions: "+210%"
            }
        },
        {
            id: 3,
            title: "Gym Life",
            description: "Intuitive gym portal design with appointment scheduling, records access, and futuristic features.",
            category: "fitness UI/UX",
            image: uiImageThree,
            stats: {
                duration: "1 month",
                // satisfaction: "95%"
            }
        }
    ];

    // About section cards data
    const aboutCards = [
        {
            id: 1,
            title: "Understanding the User",
            description: "We explore user behavior, needs, and expectations to uncover meaningful insights,This helps us design solutions that are intuitive, relevant, and truly user-focused.",
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Shaping the Experience",
            description: "We map out flows, structure information, and build interactive prototypes.This ensures the product feels natural, easy to use, and aligned with user goals.",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Crafting the Interface",
            description: "We design visually refined interfaces that balance aesthetics with usability.Every detail is aligned with your brand to create a cohesive digital experience",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Building for Scale",
            description: "We create flexible design systems that support growth and consistency.This enables faster iteration and ensures a unified experience across platforms.",
            image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // How It Works steps data
    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Understanding Users",
            text: "We explore user needs, behaviors, and challenges to uncover insights that guide every design decision."
        },
        {
            title: "Step 2",
            heading: "Structuring the Experience",
            text: "We organize content and define clear user flows to create intuitive and meaningful navigation."
        },
        {
            title: "Step 3",
            heading: "Designing the Framework",
            text: "We create wireframes that outline structure and functionality before moving into visual design."
        },
        {
            title: "Step 4",
            heading: "Crafting the Interface",
            text: "We design visually engaging interfaces that align with your brand and enhance usability."
        },
        {
            title: "Step 5",
            heading: "Testing & Refinement",
            text: "We validate designs through testing, refining interactions to ensure a smooth user experience."
        }
    ];

    // UI/UX DNA data
    const uiuxDna = [
        {
            id: 1,
            title: "Effortless Experience",
            description: "Simple, intuitive, and easy to navigate",
            icon: <FaUsers />,
            color: "#3b82f6"
        },
        {
            id: 2,
            title: "Inclusive Design",
            description: "Accessible for every user, without barriers",
            icon: <FaUserCircle />,
            color: "#ec4899"
        },
        {
            id: 3,
            title: "Smart Interactions",
            description: "Responsive, meaningful, and user-focused",
            icon: <FaPaintBrush />,
            color: "#3b82f6"
        },
        {
            id: 4,
            title: "Visual Excellence",
            description: "Clean, engaging, and brand-aligned design",
            icon: <FaGem />,
            color: "#ec4899"
        },
        {
            id: 5,
            title: "Adaptive Systems",
            description: "Seamless across devices and environments",
            icon: <FaMobile />,
            color: "#3b82f6"
        }
    ];

    const getPosition = (index) => {
        const diff = index - currentSlide;

        if (diff === 0) return "center";
        if (diff === -1 || diff === 2) return "left";
        if (diff === 1 || diff === -2) return "right";
        return "";
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
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    const badges = [
        "User Research",
        "Wireframins",
        "Interactive Prototypes",
        "Visual System",
        "Usability Testing"
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
                    <title>Engloray - UI/UX Design</title>
                    <meta name="description" content="Crafting exceptional digital experiences through user-centered design" />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | UI/UX Design" />
                    <meta property="og:description" content="Crafting Exceptional Digital Experiences Through User-Centered Design" />
                </Helmet>

                <div className="uiuxp-page" id='uiuxPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    {/* Hero Section - Updated to match Branding page structure with UI/UX content */}
                    <section className="uiuxp-hero">
                        {/* Background image */}
                        <img src={heroBg} className="uiuxp-hero-bg-image" alt="background texture" />

                        {/* Gradient background shapes - Blue/Pink theme */}
                        <div className="uiuxp-gradient-shape uiuxp-blue-shape"></div>
                        <div className="uiuxp-gradient-shape uiuxp-pink-shape"></div>

                        {/* Floating cards */}
                        <div className="uiuxp-floating-card uiuxp-left uiuxp-rotate-left">
                            <img
                                src="https://i.pravatar.cc/100?img=8"
                                alt="UX researcher"
                            />
                            <div className="uiuxp-card-content">
                                <h4>User Insights</h4>
                                <p>Behavior & Analytics</p>
                                <div className="uiuxp-card-progress">
                                    <div className="uiuxp-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="uiuxp-floating-card uiuxp-right uiuxp-rotate-right">
                            <img
                                src="https://i.pravatar.cc/100?img=16"
                                alt="UI designer"
                            />
                            <div className="uiuxp-card-content">
                                <h4>Product Interface</h4>
                                <p>UI & Interaction</p>
                                <div className="uiuxp-card-progress">
                                    <div className="uiuxp-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="uiuxp-hero-container">
                            <div className="uiuxp-hero-badge">
                                Product Design & UX Strategy
                            </div>

                            <h1 className="uiuxp-hero-title">
                                Designing Meaningful<br /> <span className="uiuxp-title-highlight">Digital</span> <span className="uiuxp-title-highlight">Experiences</span>
                            </h1>

                            <p className="uiuxp-hero-desc">
                                We design intuitive, scalable, and visually refined digital products that align with user needs and business goals.
                                Our human-centered approach ensures every interaction feels seamless, purposeful, and impactful.
                            </p>

                            <div className="uiuxp-privacy-badge">
                                Design Systems Built for Engagement
                            </div>
                        </div>

                        {/* Bottom glass badges */}
                        <div className="uiuxp-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`uiuxp-service-badge 
                                    ${item === "User Research" ? "uiuxp-badge-research" : ""} 
                                    ${item === "Usability Testing" ? "uiuxp-badge-testing" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* About Section - Cards with images on top for 1&3, images at bottom for 2&4 */}
                    <section className="uiuxp-about-section">
                        <div className="uiuxp-container">
                            {/* Title and Description at the top */}
                            <div className="uiuxp-about-header">
                                <h2 className="uiuxp-about-title">About Our Design Approach</h2>
                                <p className="uiuxp-about-description">
                                    We craft thoughtful digital experiences through a structured, user-first design approach.
                                    From discovery to delivery, every step is driven by insight, creativity, and measurable impact.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="uiuxp-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`uiuxp-about-card ${card.id === 2 || card.id === 4 ? 'uiuxp-card-image-bottom' : ''}`}
                                    >
                                        {/* For cards 1 and 3: Image at top, content at bottom */}
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

                                        {/* For cards 2 and 4: Content at top, image at bottom */}
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

                    {/* UI/UX DNA Section - Added after About Section */}
                    <section className="uiuxp-dna-section">
                        <div className="uiuxp-dna-container">
                            {/* LEFT CONTENT */}
                            <div className="uiuxp-dna-left">
                                <h2> Design DNA</h2>
                                <h3 className="uiuxp-dna-subtitle">
                                    The Principles Behind<br /> Great Product Design
                                </h3>
                                <p>
                                    Exceptional digital products are built on clarity, consistency, and user-centered thinking.
                                    These core principles guide how we design experiences that feel intuitive, engaging, and reliable across every interaction.
                                </p>
                            </div>

                            {/* RIGHT GRAPHIC */}
                            <div className="uiuxp-dna-right">
                                {/* circles */}
                                <div className="uiuxp-dna-circle uiuxp-circle-usability" style={{ background: 'linear-gradient(135deg, #3b82f6, #5a9cff)' }}>
                                    <FaUsers className="uiuxp-icon" />
                                    <h3>Effortless Experience</h3>
                                    <p className="uiuxp-circle-desc">
                                        Simple, intuitive, and easy to navigate
                                    </p>
                                </div>

                                <div className="uiuxp-dna-circle uiuxp-circle-accessibility" style={{ background: 'linear-gradient(135deg, #3b82f6, #5a9cff)' }}>
                                    <FaUserCircle className="uiuxp-icon" />
                                    <h3>Inclusive Design</h3>
                                    <p className="uiuxp-circle-desc">
                                        Accessible for every user, without barriers
                                    </p>
                                </div>

                                <div className="uiuxp-dna-circle uiuxp-circle-visual" style={{ background: 'linear-gradient(135deg, #3b82f6, #5a9cff)' }}>
                                    <FaPaintBrush className="uiuxp-icon" />
                                    <h3>Smart Interactions</h3>
                                    <p className="uiuxp-circle-desc">
                                        Responsive, meaningful, and user-focused
                                    </p>
                                </div>

                                <div className="uiuxp-dna-circle uiuxp-circle-interaction" style={{ background: 'linear-gradient(135deg, #ec4899, #ff6b9d)' }}>
                                    <FaGem className="uiuxp-icon" />
                                    <h3>Visual Excellence</h3>
                                    <p className="uiuxp-circle-desc">
                                        Clean, engaging, and brand-aligned design
                                    </p>
                                </div>

                                <div className="uiuxp-dna-circle uiuxp-circle-responsive" style={{ background: 'linear-gradient(135deg, #3b82f6, #5a9cff)' }}>
                                    <FaMobile className="uiuxp-icon" />
                                    <h3>Adaptive Systems</h3>
                                    <p className="uiuxp-circle-desc">
                                        Seamless across devices and environments
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="uiuxp-howworks">
                        <div className="uiuxp-howworks-container">
                            {/* LEFT SIDE */}
                            <div className="uiuxp-left-side">
                                <div className="uiuxp-badge">
                                    <span className="uiuxp-dot"></span>
                                    Design Process
                                </div>
                                <p className="uiuxp-intro-text">
                                    We craft seamless digital experiences through research, structure, and thoughtful design.
                                    Every step is focused on solving real user problems while aligning with business goals.
                                </p>
                                <h2 className="uiuxp-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="uiuxp-arrow">→</div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="uiuxp-right-side">
                                <h2 className="uiuxp-section-title">What Is Design Process</h2>
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

                    {/* Circular Stats Section - Added after How It Works */}
                    <section className="uiuxp-circular-stats">
                        <div className="uiuxp-stats-layout">
                            {/* LEFT CONTENT */}
                            <div className="uiuxp-stats-content">
                                <h2>Our Design Impact in Numbers</h2>
                                <p>
                                    We measure success through the value we create for users and businesses.
                                    Our work delivers meaningful experiences that drive engagement, trust, and long-term growth and trust we have developed with users across
                                    different industries.
                                </p>
                            </div>

                            {/* CIRCLE STATS */}
                            <div className="uiuxp-stats-wrapper">
                                <div className="uiuxp-circle uiuxp-circle-top" style={{ background: '#3b82f6' }}>
                                    <h2>50+</h2>
                                    <p>Digital Products Designed</p>
                                </div>

                                <div className="uiuxp-circle uiuxp-circle-left" style={{ background: '#ec4899' }}>
                                    <h2>100+</h2>
                                    <p>Successful Launches</p>
                                </div>

                                <div className="uiuxp-circle uiuxp-circle-right" style={{ background: '#3b82f6' }}>
                                    <h2>95%</h2>
                                    <p>Client Satisfaction Rate</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM STATS */}
                        <div className="uiuxp-bottom-stats">
                            <div className="uiuxp-stat">
                                <h3>8+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>

                            <div className="uiuxp-stat">
                                <h3>30+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>

                            <div className="uiuxp-stat">
                                <h3>45+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="uiuxp-stat">
                                <h3>200+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section - UPDATED to match branding page design */}
                    <section className="uiuxp-projects-section">
                        {/* FULL BACKGROUND */}
                        <img src={projectsBg} className="uiuxp-projects-bg-full" alt="" />

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

                        {/* CENTER CONTENT */}
                        <div className="uiuxp-projects-content">
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

                            <div className="uiuxp-projects-stats">
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
                    <section className="uiuxp-feedback-section">
                        <div className="uiuxp-container">
                            <div className="uiuxp-feedback-header">
                                <h2 className="uiuxp-feedback-title">
                                    Client Success <span>Stories</span>
                                </h2>
                                <p className="uiuxp-feedback-description">
                                    Hear what our clients have to say about our UI/UX design services and how we've helped transform their digital presence.
                                </p>
                            </div>

                            <div className="uiuxp-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);

                                    return (
                                        <div
                                            key={feedback.id}
                                            className={`uiuxp-feedback-card ${position}`}
                                        >
                                            <div className="uiuxp-feedback-rating">{feedback.rating}</div>
                                            <div className="uiuxp-feedback-quote-icon">❝</div>
                                            <p className="uiuxp-feedback-text">{feedback.text}</p>

                                            <div className="uiuxp-feedback-author">
                                                <div className="uiuxp-author-avatar" style={{ background: 'linear-gradient(135deg, #3b82f6, #ec4899)' }}>
                                                    <div className="uiuxp-avatar-initial">{feedback.initial}</div>
                                                </div>
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
                    <MainPageSubFooter />
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default UiUxPage;
