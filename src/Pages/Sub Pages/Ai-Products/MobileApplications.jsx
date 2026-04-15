import React, { useState, useEffect, useRef } from 'react';
import aiImageOne from '../../../assets/case study images/Application/aara.png';
import aiImageTwo from '../../../assets/case study images/Application/orthopetic clinic.png';
import aiImageThree from '../../../assets/case study images/Application/pavizham.jpg';
import './MobileApplications.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';
import { FaBrain, FaRobot, FaChartLine, FaLanguage, FaEye, FaMicrochip, FaCloud, FaShieldAlt } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";

// Import project section background
import projectsBg from '../../../assets/heroimage.jpeg';

// Import brand logos for projects section
import logo1 from '../../../assets/icons/logoipsum-419.png';
import logo2 from '../../../assets/icons/logoipsum-424.png';
import logo3 from '../../../assets/icons/logoipsum-387.png';
import logo4 from '../../../assets/icons/logoipsum-394.png';
import logo5 from '../../../assets/icons/logoipsum-374.png';
import logo6 from '../../../assets/icons/logoipsum-383.png';
import logo7 from '../../../assets/icons/logoipsum-293.png';
import logo8 from '../../../assets/icons/logoipsum-340.png';
import logo9 from '../../../assets/icons/logoipsum-361.png';
import logo10 from '../../../assets/icons/logoipsum-371.png';
import logo11 from '../../../assets/icons/logoipsum-392.png';
import logo12 from '../../../assets/icons/logoipsum-249.png';

const AiProducts = () => {
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
            text: "Engloray’s AI-powered branding helped us build a strong digital identity. Their intelligent branding insights helped us connect with the right audience.",
            author: "Arjun Mehta ",
            role: "Startup Founder",
            initial: "A"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Their AI-powered branding approach helped us design a modern brand identity that reflects innovation and professionalism.",
            author: "Daniel Thomas ",
            role: "Product Manager",
            initial: "D"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "What impressed me most was how Engloray combined AI insights with creative branding ideas to create a strong brand presence.",
            author: "Rohan Gupta ",
            role: " Entrepreneur",
            initial: "R"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "AI Customer Support Assistant",
            description: "Intelligent chatbot with natural language understanding, sentiment analysis, and automated ticket resolution. Handles complex queries with 95% accuracy.",
            category: "Conversational AI",
            image: aiImageOne,
            stats: {
                duration: "3 Months",
                // satisfaction: "95%"
            }
        },
        {
            id: 2,
            title: "Predictive Analytics Platform",
            description: "Machine learning models for sales forecasting, customer churn prediction, and inventory optimization with real-time dashboard and automated alerts.",
            category: "Predictive AI",
            image: aiImageTwo,
            stats: {
                duration: "4 Months",
                // satisfaction: "98%"
            }
        },
        {
            id: 3,
            title: "Computer Vision System",
            description: "Real-time object detection and quality inspection system for manufacturing with automated defect identification and production line optimization.",
            category: "Computer Vision",
            image: aiImageThree,
            stats: {
                duration: "5 Months",
                // satisfaction: "97%"
            }
        }
    ];

    // About section cards data
    const aboutCards = [
        {
            id: 1,
            title: "Custom AI Solutions",
            description: "We develop tailored AI models for your specific business needs, from natural language processing to computer vision and predictive analytics. Our solutions are designed to integrate seamlessly with your existing infrastructure.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Machine Learning Engineering",
            description: "Our ML engineers build robust, scalable models using state-of-the-art algorithms and frameworks. We handle everything from data preprocessing to model deployment and monitoring in production environments.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "AI Integration & Deployment",
            description: "We seamlessly integrate AI capabilities into your existing applications and workflows. Our team ensures smooth deployment with comprehensive testing, monitoring, and ongoing optimization for peak performance.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "LLM & Generative AI",
            description: "Leverage cutting-edge large language models and generative AI for content creation, code generation, document analysis, and intelligent automation. We help you harness the power of foundation models safely and effectively.",
            image: "https://epe.brightspotcdn.com/04/2a/cf21e17141ec9bb914524cedea75/052024-story-embed-cosn-ai-langreo-gt.gif"
        }
    ];

    // How It Works steps data
    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Problem Discovery",
            text: "Identify business challenges where AI can create measurable value."
        },
        {
            title: "Step 2",
            heading: "Data Assessment",
            text: "Evaluate data availability, quality, and requirements for model training."
        },
        {
            title: "Step 3",
            heading: "Model Development",
            text: "Build and train custom AI models using state-of-the-art algorithms."
        },
        {
            title: "Step 4",
            heading: "Integration & Testing",
            text: "Seamlessly integrate AI into your systems with rigorous testing."
        },
        {
            title: "Step 5",
            heading: "Deployment & Monitoring",
            text: "Deploy to production and continuously monitor model performance."
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
        "Machine Learning",
        "Computer Vision",
        "NLP",
        "Generative AI",
        "Predictive Analytics"
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
                    <title>Engloray - AI Products</title>
                    <meta name="description" content="Transform your business with cutting-edge AI solutions - from machine learning and computer vision to natural language processing and generative AI." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | AI Products" />
                    <meta property="og:description" content="Intelligent Solutions for Tomorrow's Challenges" />
                </Helmet>

                <div className="ai-page" id='aiProductsPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    {/* Hero Section */}
                    <section className="ai-hero">
                        {/* Background image */}
                        <img src={heroBg} className="ai-hero-bg-image" alt="background texture" />

                        {/* Gradient background shapes */}
                        <div className="ai-gradient-shape ai-purple-shape"></div>
                        <div className="ai-gradient-shape ai-indigo-shape"></div>

                        {/* Floating cards */}
                        <div className="ai-floating-card ai-left ai-rotate-left">
                            <img
                                src="https://i.pravatar.cc/100?img=8"
                                alt="AI Engineer"
                            />
                            <div className="ai-card-content">
                                <h4>Machine Learning</h4>
                                <p>Custom Models</p>
                                <div className="ai-card-progress">
                                    <div className="ai-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="ai-floating-card ai-right ai-rotate-right">
                            <img
                                src="https://i.pravatar.cc/100?img=16"
                                alt="Data Scientist"
                            />
                            <div className="ai-card-content">
                                <h4>Deep Learning</h4>
                                <p>Neural Networks</p>
                                <div className="ai-card-progress">
                                    <div className="ai-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="ai-hero-container">
                            <div className="ai-hero-badge">
                                AI PRODUCTS
                            </div>

                            <h1 className="ai-hero-title">
                                Intelligent Solutions<br /> <span className="ai-title-highlight">for Tomorrow's</span> <span className="ai-title-highlight">Challenges</span>
                            </h1>

                            <p className="ai-hero-desc">
                                We develop cutting-edge artificial intelligence solutions that transform businesses.
                                From machine learning and computer vision to natural language processing and generative AI,
                                our products deliver measurable results and competitive advantage.
                            </p>

                            <div className="ai-privacy-badge">
                                Enterprise-grade AI with responsible practices
                            </div>
                        </div>

                        {/* Bottom glass badges */}
                        <div className="ai-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`ai-service-badge 
                                    ${item === "Machine Learning" ? "ai-badge-ml" : ""} 
                                    ${item === "Generative AI" ? "ai-badge-genai" : ""}
                                    ${item === "Predictive Analytics" ? "ai-badge-ana" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* About Section - Cards with images on top for 1&3, images at bottom for 2&4 */}
                    <section className="ai-about-section">
                        <div className="ai-container">
                            {/* Title and Description at the top */}
                            <div className="ai-about-header">
                                <h2 className="ai-about-title">Why Choose ENGLORAY for AI?</h2>
                                <p className="ai-about-description">
                                    We combine deep technical expertise with business acumen to build AI solutions
                                    that solve real-world problems. Our approach ensures your investment in AI delivers
                                    measurable ROI and sustainable competitive advantage.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="ai-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`ai-about-card ${card.id === 2 || card.id === 4 ? 'ai-card-image-bottom' : ''}`}
                                    >
                                        {/* For cards 1 and 3: Image at top, content at bottom */}
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="ai-card-image-wrapper">
                                                    <div className="ai-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="ai-card-content-wrapper">
                                                    <div className="ai-card-content">
                                                        <strong className="ai-card-title">{card.title}</strong>
                                                        <p className="ai-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* For cards 2 and 4: Content at top, image at bottom */}
                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="ai-card-content-wrapper">
                                                    <div className="ai-card-content">
                                                        <strong className="ai-card-title">{card.title}</strong>
                                                        <p className="ai-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="ai-card-image-wrapper">
                                                    <div className="ai-card-image">
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

                    {/* AI DNA Section */}
                    <section className="ai-dna-section">
                        <div className="ai-dna-container">
                            {/* LEFT CONTENT */}
                            <div className="ai-dna-left">
                                <h2>AI DNA</h2>
                                <h3 className="ai-dna-subtitle">
                                    The Core Elements of<br /> Intelligent Systems
                                </h3>
                                <p>
                                    Exceptional AI solutions are built on a foundation of key principles.
                                    Our AI DNA framework defines the essential elements that guide how we
                                    develop intelligent systems that learn, adapt, and create value for your business.
                                </p>
                            </div>

                            {/* RIGHT GRAPHIC */}
                            <div className="ai-dna-right">
                                {/* circles */}
                                <div className="ai-dna-circle ai-circle-intelligence">
                                    <FaBrain className="ai-icon" />
                                    <h3>Intelligence</h3>
                                    <p className="ai-circle-desc">
                                        Adaptive learning systems
                                    </p>
                                </div>

                                <div className="ai-dna-circle ai-circle-automation">
                                    <FaRobot className="ai-icon" />
                                    <h3>Automation</h3>
                                    <p className="ai-circle-desc">
                                        Autonomous decision-making
                                    </p>
                                </div>

                                <div className="ai-dna-circle ai-circle-insights">
                                    <FaChartLine className="ai-icon" />
                                    <h3>Insights</h3>
                                    <p className="ai-circle-desc">
                                        Actionable intelligence
                                    </p>
                                </div>

                                <div className="ai-dna-circle ai-circle-language">
                                    <FaLanguage className="ai-icon" />
                                    <h3>Language</h3>
                                    <p className="ai-circle-desc">
                                        Natural language understanding
                                    </p>
                                </div>

                                <div className="ai-dna-circle ai-circle-vision">
                                    <FaEye className="ai-icon" />
                                    <h3>Vision</h3>
                                    <p className="ai-circle-desc">
                                        Computer vision capabilities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="ai-howworks">
                        <div className="ai-howworks-container">
                            {/* LEFT SIDE */}
                            <div className="ai-left-side">
                                <div className="ai-badge">
                                    <span className="ai-dot"></span>
                                    AI Development Process
                                </div>
                                <p className="ai-intro-text">
                                    We build intelligent systems through a systematic approach of discovery, development, and deployment that ensures your AI investment delivers real business value.
                                </p>
                                <h2 className="ai-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="ai-arrow">→</div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="ai-right-side">
                                <h2 className="ai-section-title">What Is AI Development</h2>
                                <div className="ai-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="ai-step-card">
                                            <span className="ai-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Circular Stats Section */}
                    <section className="ai-circular-stats">
                        <div className="ai-stats-layout">
                            {/* LEFT CONTENT */}
                            <div className="ai-stats-content">
                                <h2>Our AI Impact in Numbers</h2>
                                <p>
                                    We measure our success through the intelligent solutions we deliver and the results we achieve.
                                    These statistics highlight the accuracy, scale, and trust we have developed with clients across
                                    different industries.
                                </p>
                            </div>

                            {/* CIRCLE STATS */}
                            <div className="ai-stats-wrapper">
                                {/* <svg className="ai-connector" viewBox="0 0 400 300">
                                    <path
                                        d="M200 40 C120 80 120 200 200 230"
                                        stroke="rgba(99,102,241,0.15)"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                    <path
                                        d="M200 40 C280 80 280 200 200 230"
                                        stroke="rgba(139,92,246,0.15)"
                                        strokeWidth="2"
                                        fill="none"
                                    />
                                </svg> */}

                                <div className="ai-circle ai-circle-top">
                                    <h2>50+</h2>
                                    <p>AI Models Deployed</p>
                                </div>

                                <div className="ai-circle ai-circle-left">
                                    <h2>100+</h2>
                                    <p>Data Sources</p>
                                </div>

                                <div className="ai-circle ai-circle-right">
                                    <h2>99%</h2>
                                    <p>Model Accuracy</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM STATS */}
                        <div className="ai-bottom-stats">
                            <div className="ai-stat">
                                <h3>8+</h3>
                                <p>YEARS AI RESEARCH</p>
                            </div>

                            <div className="ai-stat">
                                <h3>30+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>

                            <div className="ai-stat">
                                <h3>45+</h3>
                                <p>AI ENGINEERS</p>
                            </div>
                            <div className="ai-stat">
                                <h3>200+</h3>
                                <p>SUCCESSFUL PROJECTS</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section - UPDATED to match branding page design */}
                    <section className="ai-projects-section">
                        {/* FULL BACKGROUND */}
                        <img src={projectsBg} className="ai-projects-bg-full" alt="" />

                        <div className="ai-projects-logos ai-left-logos">
                            <div className="ai-project-logo-card l1"><img src={logo1} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card l2"><img src={logo2} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card l3"><img src={logo3} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card l4"><img src={logo4} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card l5"><img src={logo9} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card l6"><img src={logo10} className="ai-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="ai-projects-logos ai-right-logos">
                            <div className="ai-project-logo-card r1"><img src={logo5} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card r2"><img src={logo6} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card r3"><img src={logo7} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card r4"><img src={logo8} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card r5"><img src={logo11} className="ai-project-logo" alt="brand logo" /></div>
                            <div className="ai-project-logo-card r6"><img src={logo12} className="ai-project-logo" alt="brand logo" /></div>
                        </div>

                        {/* CENTER CONTENT */}
                        <div className="ai-projects-content">
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

                            <div className="ai-projects-stats">
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

                    {/* Feedback Section - Carousel Style */}
                    <section className="ai-feedback-section">
                        <div className="ai-container">
                            <div className="ai-feedback-header">
                                <h2 className="ai-feedback-title">
                                    Client Success <span>Stories</span>
                                </h2>
                                <p className="ai-feedback-description">
                                    Discover how our AI solutions are transforming businesses across industries.
                                </p>
                            </div>

                            <div className="ai-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);

                                    return (
                                        <div
                                            key={feedback.id}
                                            className={`ai-feedback-card ${position}`}
                                        >
                                            <div className="ai-feedback-rating">{feedback.rating}</div>
                                            <div className="ai-feedback-quote-icon">❝</div>
                                            <p className="ai-feedback-text">{feedback.text}</p>

                                            <div className="ai-feedback-author">
                                                <div className="ai-author-avatar">
                                                    <div className="ai-avatar-initial">{feedback.initial}</div>
                                                </div>
                                                <div>
                                                    <div className="ai-author-name">{feedback.author}</div>
                                                    <div className="ai-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="ai-feedback-controls">
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

export default AiProducts;
