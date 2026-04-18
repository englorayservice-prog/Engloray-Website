import React, { useState, useEffect, useRef } from 'react';
import aiImageOne from '../../../assets/case study images/uiux/pavizham.jpg';
import aiImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import aiImageThree from '../../../assets/case study images/uiux/gym life.png';
import './MobileApplications.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';
import { FaBrain, FaRobot, FaMicrochip, FaNetworkWired, FaDatabase, FaCogs, FaProjectDiagram } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";
import projectsBg from '../../../assets/heroimage.jpeg';
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
import avatarLeft from '../../../assets/rev_avatar_5.jfif';
import avatarRight from '../../../assets/rev_avatar_4.jfif';

const AiProductPage = () => {
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
            text: "The AI implementation solved our inventory forecasting issues completely. We've seen a 25% reduction in waste.",
            author: "Dr. Alan Grant",
            role: "Supply Chain Director",
            initial: "A"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Engloray's custom NLP models have automated 70% of our customer support queries with high accuracy.",
            author: "Linda Hamilton",
            role: "Customer Success VP",
            initial: "L"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "Predictive analytics provided us with insights we didn't even know we had. Our revenue has grown by 15% YOY.",
            author: "Marcus Aurelius",
            role: "Data Strategy Lead",
            initial: "M"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "The integration process was seamless. Their AI solutions are built for scalability and performance.",
            author: "Sarah Connor",
            role: "Technical Architect",
            initial: "S"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "Innovative, reliable, and forward-thinking. Engloray is pushing the boundaries of what's possible with AI.",
            author: "Elon Tusk",
            role: "Neural Tech Lead",
            initial: "E"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "Exceptional quality and support. The machine learning models are highly optimized for our specific needs.",
            author: "Grace Hopper",
            role: "Chief Innovation Officer",
            initial: "G"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Predictive Analytics",
            description: "Advanced machine learning models that predict market trends and consumer behavior with 94% accuracy.",
            category: "Data Science",
            image: aiImageOne,
            stats: {
                duration: "16 Weeks",
                satisfaction: "100%"
            }
        },
        {
            id: 2,
            title: "Computer Vision",
            description: "Real-time object detection and recognition system for industrial automation and quality control.",
            category: "Industrial AI",
            image: aiImageTwo,
            stats: {
                duration: "10 Weeks",
                satisfaction: "97%"
            }
        },
        {
            id: 3,
            title: "NLP Engine",
            description: "Multi-lingual Natural Language Processing engine for automated sentiment analysis and content generation.",
            category: "NLP",
            image: aiImageThree,
            stats: {
                duration: "12 Weeks",
                satisfaction: "99%"
            }
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "AI Consultation",
            description: "We help you identify where AI can bring the most value to your organization, assessing feasibility and defining potential ROI.",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Model Development",
            description: "Building custom machine learning models tailored to your specific data and business challenges, from linear regression to deep learning.",
            image: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "System Integration",
            description: "Integrating AI capabilities into your existing software ecosystem, ensuring high availability, security, and seamless data flow.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Continuous MLOps",
            description: "Monitoring model performance in production, managing data drift, and ensuring your AI systems remain accurate and reliable over time.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Data Assessment",
            text: "Evaluating your existing data assets and identifying AI opportunities."
        },
        {
            title: "Step 2",
            heading: "Model Prototyping",
            text: "Creating initial proof-of-concept models to validate hypotheses."
        },
        {
            title: "Step 3",
            heading: "Training & Tuning",
            text: "Training robust models on your data and optimizing for accuracy."
        },
        {
            title: "Step 4",
            heading: "Deployment",
            text: "Launching AI models into production environments at scale."
        },
        {
            title: "Step 5",
            heading: "Monitoring",
            text: "Continuous tracking and retraining to ensure long-term performance."
        },
        {
            title: "Step 6",
            heading: "Optimization & Expansion",
            text: "Refining models based on live data and scaling to new use cases."
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
        "Machine Learning",
        "Deep Learning",
        "NLP & LLMs",
        "Computer Vision",
        "Predictive Modeling"
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
                    <title>Engloray - AI Products</title>
                    <meta name="description" content="Harness the power of AI to transform your business with our custom intelligence solutions." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | AI Products" />
                    <meta property="og:description" content="Intelligent Solutions for a Smarter Future" />
                </Helmet>

                <div className="ai-page" id='aiProductPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="ai-hero">
                        <img src={heroBg} className="ai-hero-bg-image" alt="background texture" />

                        <div className="ai-gradient-shape ai-purple-shape"></div>
                        <div className="ai-gradient-shape ai-indigo-shape"></div>

                        <div className="ai-floating-card ai-left ai-rotate-left">
                            <img src={avatarLeft} alt="AI Researcher" />
                            <div className="ai-card-content">
                                <h4>Model Accuracy</h4>
                                <p>98.5% Performance</p>
                                <div className="ai-card-progress">
                                    <div className="ai-progress-fill" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="ai-floating-card ai-right ai-rotate-right">
                            <img src={avatarRight} alt="ML Engineer" />
                            <div className="ai-card-content">
                                <h4>Neural Training</h4>
                                <p>Optimizing Weights</p>
                                <div className="ai-card-progress">
                                    <div className="ai-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="ai-hero-container">
                            <div className="ai-hero-badge">
                                Artificial Intelligence
                            </div>

                            <h1 className="ai-hero-title">
                                Building Intelligent<br /> <span className="ai-title-highlight">Digital Futures</span>
                            </h1>

                            <p className="ai-hero-desc">
                                We develop custom AI products that solve complex business problems, automate
                                repetitive tasks, and provide actionable insights through advanced 
                                machine learning and data science methodologies.
                            </p>

                            <div className="ai-privacy-badge">
                                Ethical & Secure AI for Enterprise Scale
                            </div>
                        </div>

                        <div className="ai-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`ai-service-badge 
                                    ${item === "Machine Learning" ? "ai-badge-strategy" : ""} 
                                    ${item === "Predictive Modeling" ? "ai-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="ai-about-section">
                        <div className="ai-container">
                            <div className="ai-about-header">
                                <h2 className="ai-about-title">Why Enterprise Leaders Choose Us</h2>
                                <p className="ai-about-description">
                                    Our AI solutions are built for the real world. We focus on practical implementation,
                                    ensuring that our models don't just stay in a lab but deliver measurable
                                    efficiency and growth for your business.
                                </p>
                            </div>

                            <div className="ai-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`ai-about-card ${card.id === 2 || card.id === 4 ? 'ai-card-image-bottom' : ''}`}
                                    >
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

                    <section className="ai-branddna-section">
                        <div className="ai-branddna-container">
                            <div className="ai-branddna-left">
                                <h2>Intelligence DNA</h2>
                                <h3 className="ai-branddna-subtitle">
                                    The Core Pillars of Advanced Intelligence
                                </h3>
                                <p>
                                    True AI excellence is more than just algorithms. It's the synthesis of 
                                    quality data, rigorous architecture, and human-centric design.
                                    Our Intelligence DNA defines how we build systems that learn, adapt, and empower.
                                </p>
                            </div>

                            <div className="ai-branddna-right">
                                <svg className="ai-link-svg" viewBox="0 0 500 460">
                                    <g className="ai-link-bases">
                                        <path className="ai-base-path" d="M265,240 L265,20" />
                                        <path className="ai-base-path" d="M265,240 L0,240" />
                                        <path className="ai-base-path" d="M265,240 L500,240" />
                                        <path className="ai-base-path" d="M265,240 L265,450" />
                                        <path className="ai-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    <g className="ai-animated-flows">
                                        <g className="ai-phase-group ai-phase-1">
                                            <path pathLength="100" className="ai-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="ai-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M0,240 L265,450" />
                                        </g>
                                        <g className="ai-phase-group ai-phase-2">
                                            <path pathLength="100" className="ai-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,20 L500,240" />
                                        </g>
                                        <g className="ai-phase-group ai-phase-3">
                                            <path pathLength="100" className="ai-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,240 L265,450" />
                                        </g>
                                        <g className="ai-phase-group ai-phase-4">
                                            <path pathLength="100" className="ai-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="ai-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M500,240 L265,450" />
                                        </g>
                                        <g className="ai-phase-group ai-phase-5">
                                            <path pathLength="100" className="ai-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="ai-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                <div className="ai-dna-circle ai-circle-purpose">
                                    <FaBrain className="ai-icon" />
                                    <h3>Neural</h3>
                                    <p className="ai-circle-desc">Sophisticated architectures for complex reasoning.</p>
                                </div>

                                <div className="ai-dna-circle ai-circle-voice">
                                    <FaMicrochip className="ai-icon" />
                                    <h3>Computational</h3>
                                    <p className="ai-circle-desc">Highly optimized for speed and efficiency.</p>
                                </div>

                                <div className="ai-dna-circle ai-circle-values">
                                    <FaDatabase className="ai-icon" />
                                    <h3>Data Core</h3>
                                    <p className="ai-circle-desc">The lifeblood of our intelligent systems.</p>
                                </div>

                                <div className="ai-dna-circle ai-circle-personality">
                                    <FaProjectDiagram className="ai-icon" />
                                    <h3>Adaptive</h3>
                                    <p className="ai-circle-desc">Learning and evolving with every interaction.</p>
                                </div>

                                <div className="ai-dna-circle ai-circle-visual">
                                    <FaRobot className="ai-icon" />
                                    <h3>Autonomous</h3>
                                    <p className="ai-circle-desc">Reliable automation for mission-critical tasks.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="ai-howworks">
                        <div className="ai-howworks-container">
                            <div className="ai-left-side">
                                <div className="ai-badge">
                                    <span className="ai-dot"></span>
                                    AI Implementation Process
                                </div>
                                <p className="ai-intro-text">
                                    We bridge the gap between AI research and business reality through a structured
                                    process that focuses on data integrity, model performance, and seamless integration.
                                </p>
                                <h2 className="ai-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="ai-arrow">→</div>
                            </div>

                            <div className="ai-right-side">
                                <h2 className="ai-section-title">Our AI Methodology</h2>
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

                    <section className="ai-circular-stats">
                        <div className="ai-branding-stats-layout">
                            <div className="ai-stats-content">
                                <h2>Our AI Impact in Numbers</h2>
                                <p>
                                    We deliver tangible results through advanced intelligence. Our work
                                    helps companies scale faster, reduce costs, and innovate better.
                                </p>
                            </div>

                            <div className="ai-stats-wrapper-cards">
                                <div className="ai-stat-card">
                                    <h2>50+</h2>
                                    <p>AI Products Built</p>
                                </div>
                                <div className="ai-stat-card">
                                    <h2>10B+</h2>
                                    <p>Data Points Processed</p>
                                </div>
                                <div className="ai-stat-card">
                                    <h2>40%</h2>
                                    <p>Cost Reduction</p>
                                </div>
                                <div className="ai-stat-card">
                                    <h2>99%</h2>
                                    <p>Model Reliability</p>
                                </div>
                            </div>
                        </div>

                        <div className="ai-bottom-stats">
                            <div className="ai-stat">
                                <h3>5+</h3>
                                <p>YEARS IN AI</p>
                            </div>
                            <div className="ai-stat">
                                <h3>30+</h3>
                                <p>ML MODELS DEPLOYED</p>
                            </div>
                            <div className="ai-stat">
                                <h3>100+</h3>
                                <p>SUCCESSFUL INTEGRATIONS</p>
                            </div>
                            <div className="ai-stat">
                                <h3>200+</h3>
                                <p>Happy Enterprise Clients</p>
                            </div>
                        </div>
                    </section>

                    <section className="ai-projects-section">
                        <img src={projectsBg} className="ai-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="ai-projects-bg-right" alt="background right" />

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

                        <div className="ai-projects-content">
                            <h1>Powering <br />Great Innovations</h1>
                            <p>We partner with industry leaders to build the engines of the future.</p>
                            <div className="ai-projects-stats">
                                <div><h2>40+</h2><span>AI Patents Involved</span></div>
                                <div><h2>1000+</h2><span>ML Experiments</span></div>
                                <div><h2>50+</h2><span>Industrial Implementations</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="ai-feedback-section">
                        <div className="ai-container">
                            <div className="ai-feedback-header">
                                <h2 className="ai-feedback-title">Partner <span>Success Stories</span></h2>
                                <p className="ai-feedback-description">Hear how our AI solutions have transformed businesses across sectors.</p>
                            </div>

                            <div className="ai-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`ai-feedback-card ${position}`}>
                                            <div className="ai-feedback-rating">{feedback.rating}</div>
                                            <div className="ai-feedback-quote-icon">❝</div>
                                            <p className="ai-feedback-text">{feedback.text}</p>
                                            <div className="ai-feedback-author">
                                                <div className="ai-author-avatar"><div className="ai-avatar-initial">{feedback.initial}</div></div>
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

export default AiProductPage;