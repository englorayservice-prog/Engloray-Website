import React, { useState, useEffect, useRef } from 'react';
import analyticsImageOne from '../../../assets/case study images/products/amico.png';
import analyticsImageTwo from '../../../assets/case study images/products/brandex.png';
import analyticsImageThree from '../../../assets/case study images/products/tamil natrals.png';
import './MobileApplications.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
import { Helmet } from 'react-helmet';
import { FaChartLine, FaChartBar, FaChartPie, FaDatabase, FaBrain, FaRobot, FaUsers, FaEye } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";

// Import project section background
import projectsBg from '../../../assets/heroimage.jpeg';

// Import brand logos for projects section
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

const DataAnalytics = () => {
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
            text: "Engloray transformed our raw data into actionable insights that improved our business strategy.",
            author: "Michael Fernandes ",
            role: "Tech Consultant",
            initial: "M"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "The analytics solutions from Engloray helped us understand customer trends and market behavior more effectively.",
            author: "Aditya Singh ",
            role: "Data Manager",
            initial: "A"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "Engloray helped us visualize our data in a clear and meaningful way that improved our planning process.",
            author: "Pooja Agarwal ",
            role: "Business Consultant",
            initial: "P"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Amico Foods Analytics",
            description: "Custom analytics dashboard with real-time sales tracking, customer segmentation, and inventory forecasting using machine learning.",
            category: "Business Intelligence",
            image: analyticsImageOne,
            tech: ["Power BI", "Python", "SQL", "ML"],
            stats: {
                duration: "2 Months",
                impact: "+40% Sales"
            }
        },
        {
            id: 2,
            title: "Tamil Naturals Insights",
            description: "Predictive analytics model for demand forecasting and supply chain optimization with automated reporting.",
            category: "Predictive Analytics",
            image: analyticsImageTwo,
            tech: ["R", "TensorFlow", "AWS", "Tableau"],
            stats: {
                duration: "1.5 Months",
                impact: "-35% Waste"
            }
        },
        {
            id: 3,
            title: "Brandex Performance Suite",
            description: "Comprehensive data warehouse and visualization platform with real-time KPIs and executive dashboards.",
            category: "Data Warehousing",
            image: analyticsImageThree,
            tech: ["Snowflake", "dbt", "Looker", "Airflow"],
            stats: {
                duration: "3 Months",
                impact: "+50% Efficiency"
            }
        }
    ];

    // About section cards data
    const aboutCards = [
        {
            id: 1,
            title: "Data Strategy & Architecture",
            description: "We design scalable data architectures that consolidate information from multiple sources, ensuring data quality, governance, and accessibility for advanced analytics.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Business Intelligence",
            description: "Custom dashboards and visualization tools that transform complex data into actionable insights, enabling data-driven decision-making at every level of your organization.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Predictive Analytics",
            description: "Machine learning models that forecast trends, customer behavior, and business outcomes, helping you stay ahead of market changes and optimize operations.",
            image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Data Engineering",
            description: "Robust ETL pipelines, data warehousing solutions, and real-time processing systems that ensure your analytics infrastructure is scalable, reliable, and performant.",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // How It Works steps data
    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Data Assessment",
            text: "Evaluate current data infrastructure and identify key business questions."
        },
        {
            title: "Step 2",
            heading: "Data Integration",
            text: "Connect and consolidate data from multiple sources into a unified platform."
        },
        {
            title: "Step 3",
            heading: "Analysis & Modeling",
            text: "Apply statistical models and machine learning to uncover insights."
        },
        {
            title: "Step 4",
            heading: "Visualization",
            text: "Create intuitive dashboards and reports for stakeholders."
        },
        {
            title: "Step 5",
            heading: "Deployment & Training",
            text: "Implement solutions and train teams to leverage data insights."
        }
    ];

    // Analytics DNA data
    const analyticsDna = [
        {
            id: 1,
            title: "Accuracy",
            description: "Precision in data collection and analysis",
            icon: <FaChartLine />,
        },
        {
            id: 2,
            title: "Insights",
            description: "Actionable intelligence from complex data",
            icon: <FaEye />,
        },
        {
            id: 3,
            title: "Scalability",
            description: "Grows with your data volume and complexity",
            icon: <FaDatabase />,
        },
        {
            id: 4,
            title: "Automation",
            description: "Intelligent processes that learn and adapt",
            icon: <FaRobot />,
        },
        {
            id: 5,
            title: "Visualization",
            description: "Clear, intuitive data presentation",
            icon: <FaChartPie />,
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
        "Data Strategy",
        "Business Intelligence",
        "Predictive Analytics",
        "Data Engineering",
        "ML Models"
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
                    <title>Engloray - Data Analytics</title>
                    <meta name="description" content="Transform your data into actionable insights with advanced analytics, business intelligence, and machine learning solutions." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Data Analytics" />
                    <meta property="og:description" content="Transform Data into Actionable Insights" />
                </Helmet>

                <div className="da-page" id='dataAnalyticsPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    {/* Hero Section - Updated to match Branding page structure */}
                    <section className="da-hero">
                        {/* Background image */}
                        <img src={heroBg} className="da-hero-bg-image" alt="background texture" />

                        {/* Gradient background shapes */}
                        <div className="da-gradient-shape da-emerald-shape"></div>
                        <div className="da-gradient-shape da-green-shape"></div>

                        {/* Floating cards */}
                        <div className="da-floating-card da-left da-rotate-left">
                            <img
                                src="https://i.pravatar.cc/100?img=8"
                                alt="Data analyst"
                            />
                            <div className="da-card-content">
                                <h4>Data Analysis</h4>
                                <p>Insights & Patterns</p>
                                <div className="da-card-progress">
                                    <div className="da-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="da-floating-card da-right da-rotate-right">
                            <img
                                src="https://i.pravatar.cc/100?img=16"
                                alt="ML engineer"
                            />
                            <div className="da-card-content">
                                <h4>ML Models</h4>
                                <p>Predictions & Forecasting</p>
                                <div className="da-card-progress">
                                    <div className="da-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        {/* Main content */}
                        <div className="da-hero-container">
                            <div className="da-hero-badge">
                                Data Analytics
                            </div>

                            <h1 className="da-hero-title">
                                Transform Data into<br /> <span className="da-title-highlight">Actionable</span> <span className="da-title-highlight">Insights</span>
                            </h1>

                            <p className="da-hero-desc">
                                We help businesses unlock the power of their data through advanced analytics,
                                machine learning, and business intelligence solutions. Transform raw data into
                                strategic assets that drive growth, efficiency, and competitive advantage.
                            </p>

                            <div className="da-privacy-badge">
                                Enterprise-grade data security & governance
                            </div>
                        </div>

                        {/* Bottom glass badges */}
                        <div className="da-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`da-service-badge 
                                    ${item === "Data Strategy" ? "da-badge-strategy" : ""} 
                                    ${item === "ML Models" ? "da-badge-ml" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* About Section - Cards with alternating image positions */}
                    <section className="da-about-section">
                        <div className="da-container">
                            {/* Title and Description at the top */}
                            <div className="da-about-header">
                                <h2 className="da-about-title">Why Choose ENGLORAY for Analytics?</h2>
                                <p className="da-about-description">
                                    We specialize in transforming complex data into clear, actionable insights.
                                    Our analytics solutions combine technical expertise with business acumen to
                                    deliver measurable results and competitive advantage.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="da-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`da-about-card ${card.id === 2 || card.id === 4 ? 'da-card-image-bottom' : ''}`}
                                    >
                                        {/* For cards 1 and 3: Image at top, content at bottom */}
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="da-card-image-wrapper">
                                                    <div className="da-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="da-card-content-wrapper">
                                                    <div className="da-card-content">
                                                        <strong className="da-card-title">{card.title}</strong>
                                                        <p className="da-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {/* For cards 2 and 4: Content at top, image at bottom */}
                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="da-card-content-wrapper">
                                                    <div className="da-card-content">
                                                        <strong className="da-card-title">{card.title}</strong>
                                                        <p className="da-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="da-card-image-wrapper">
                                                    <div className="da-card-image">
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

                    {/* Analytics DNA Section */}
                    <section className="da-dna-section">
                        <div className="da-dna-container">
                            {/* LEFT CONTENT */}
                            <div className="da-dna-left">
                                <h2>Analytics DNA</h2>
                                <h3 className="da-dna-subtitle">
                                    The Core Elements of<br /> Data-Driven Success
                                </h3>
                                <p>
                                    Exceptional analytics solutions are built on a foundation of key principles.
                                    Our Analytics DNA framework defines the essential elements that guide how we
                                    transform data into insights that drive business decisions and create value.
                                </p>
                            </div>

                            {/* RIGHT GRAPHIC */}
                            <div className="da-dna-right">
                                {/* circles */}
                                <div className="da-dna-circle da-circle-accuracy" style={{ background: 'linear-gradient(135deg, #48bb78, #2f855a)' }}>
                                    <FaChartLine className="da-icon" />
                                    <h3>Accuracy</h3>
                                    <p className="da-circle-desc">
                                        Precision in every analysis
                                    </p>
                                </div>

                                <div className="da-dna-circle da-circle-insights" style={{ background: 'linear-gradient(135deg, #38a169, #276749)' }}>
                                    <FaEye className="da-icon" />
                                    <h3>Insights</h3>
                                    <p className="da-circle-desc">
                                        Actionable intelligence
                                    </p>
                                </div>

                                <div className="da-dna-circle da-circle-scalability" style={{ background: 'linear-gradient(135deg, #48bb78, #2f855a)' }}>
                                    <FaDatabase className="da-icon" />
                                    <h3>Scalability</h3>
                                    <p className="da-circle-desc">
                                        Grows with your data
                                    </p>
                                </div>

                                <div className="da-dna-circle da-circle-automation" style={{ background: 'linear-gradient(135deg, #38a169, #276749)' }}>
                                    <FaRobot className="da-icon" />
                                    <h3>Automation</h3>
                                    <p className="da-circle-desc">
                                        Intelligent processes
                                    </p>
                                </div>

                                <div className="da-dna-circle da-circle-visualization" style={{ background: 'linear-gradient(135deg, #48bb78, #2f855a)' }}>
                                    <FaChartPie className="da-icon" />
                                    <h3>Visualization</h3>
                                    <p className="da-circle-desc">
                                        Clear data presentation
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="da-howworks">
                        <div className="da-howworks-container">
                            {/* LEFT SIDE */}
                            <div className="da-left-side">
                                <div className="da-badge">
                                    <span className="da-dot"></span>
                                    Analytics Process
                                </div>
                                <p className="da-intro-text">
                                    We transform raw data into strategic insights through a systematic approach of collection, analysis, modeling, and visualization.
                                </p>
                                <h2 className="da-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="da-arrow">→</div>
                            </div>

                            {/* RIGHT SIDE */}
                            <div className="da-right-side">
                                <h2 className="da-section-title">What We Analyze</h2>
                                <div className="da-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="da-step-card">
                                            <span className="da-card-dot"></span>
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
                    <section className="da-circular-stats">
                        <div className="da-stats-layout">
                            {/* LEFT CONTENT */}
                            <div className="da-stats-content">
                                <h2>Our Analytics Impact in Numbers</h2>
                                <p>
                                    We measure our success through the insights we deliver and the results we achieve.
                                    These statistics highlight the value, accuracy, and trust we have developed with
                                    clients across different industries.
                                </p>
                            </div>

                            {/* CIRCLE STATS */}
                            <div className="da-stats-wrapper">
                                <div className="da-circle da-circle-top" style={{ background: '#48bb78', color: '#ffffff' }}>
                                    <h2>50+</h2>
                                    <p>Analytics Projects</p>
                                </div>

                                <div className="da-circle da-circle-left" style={{ background: '#38a169' }}>
                                    <h2>100+</h2>
                                    <p>Data Sources</p>
                                </div>

                                <div className="da-circle da-circle-right" style={{ background: '#48bb78', color: '#ffffff' }}>
                                    <h2>99.5%</h2>
                                    <p>Accuracy Rate</p>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM STATS */}
                        <div className="da-bottom-stats">
                            <div className="da-stat">
                                <h3>8+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>

                            <div className="da-stat">
                                <h3>30+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>

                            <div className="da-stat">
                                <h3>45+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="da-stat">
                                <h3>200+</h3>
                                <p>Models Deployed</p>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section - UPDATED to match branding page design */}
                    <section className="da-projects-section">
                        {/* FULL BACKGROUND */}
                        <img src={projectsBg} className="da-projects-bg-full" alt="" />

                        <div className="da-projects-logos da-left-logos">
                            <div className="da-project-logo-card l1"><img src={logo1} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card l2"><img src={logo2} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card l3"><img src={logo3} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card l4"><img src={logo4} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card l5"><img src={logo9} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card l6"><img src={logo10} className="da-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="da-projects-logos da-right-logos">
                            <div className="da-project-logo-card r1"><img src={logo5} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card r2"><img src={logo6} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card r3"><img src={logo7} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card r4"><img src={logo8} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card r5"><img src={logo11} className="da-project-logo" alt="brand logo" /></div>
                            <div className="da-project-logo-card r6"><img src={logo12} className="da-project-logo" alt="brand logo" /></div>
                        </div>

                        {/* CENTER CONTENT */}
                        <div className="da-projects-content">
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

                            <div className="da-projects-stats">
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
                    <section className="da-feedback-section">
                        <div className="da-container">
                            <div className="da-feedback-header">
                                <h2 className="da-feedback-title">
                                    Client Success <span>Stories</span>
                                </h2>
                                <p className="da-feedback-description">
                                    Hear what our clients have to say about our analytics solutions and how we've helped transform their data into strategic assets.
                                </p>
                            </div>

                            <div className="da-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);

                                    return (
                                        <div
                                            key={feedback.id}
                                            className={`da-feedback-card ${position}`}
                                        >
                                            <div className="da-feedback-rating">{feedback.rating}</div>
                                            <div className="da-feedback-quote-icon">❝</div>
                                            <p className="da-feedback-text">{feedback.text}</p>

                                            <div className="da-feedback-author">
                                                <div className="da-author-avatar" style={{ background: 'linear-gradient(135deg, #48bb78, #38a169)' }}>
                                                    <div className="da-avatar-initial">{feedback.initial}</div>
                                                </div>
                                                <div>
                                                    <div className="da-author-name">{feedback.author}</div>
                                                    <div className="da-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="da-feedback-controls">
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

export default DataAnalytics;
