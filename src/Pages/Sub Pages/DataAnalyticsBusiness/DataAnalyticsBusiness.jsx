import React, { useState, useEffect, useRef } from 'react';
import './DataAnalyticsBusiness.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import NewFooter from '../NewFooter/NewFooter';
import { Helmet } from 'react-helmet';
import { FaDatabase, FaChartLine, FaShieldAlt, FaCheckCircle, FaSearch, FaProjectDiagram, FaCogs, FaLightbulb } from "react-icons/fa";
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

const DataAnalyticsBusiness = () => {
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
            text: "The analytics dashboards Engloray built gave us a clear view of our entire pipeline. Decision-making has never been faster or more confident. Truly transformative for our operations.",
            author: "Alex Thompson",
            role: "CEO, TechVentures",
            initial: "A"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Our marketing ROI visibility went from zero to real-time. The attribution models they built finally showed us exactly which channels were driving revenue. Outstanding work.",
            author: "Ryan Miller",
            role: "Marketing Director",
            initial: "R"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "Sales forecasting used to be guesswork. Now our reps have live performance scorecards and our managers have accurate weekly forecasts. The team at Engloray delivered beyond expectations.",
            author: "Jessica Lee",
            role: "Head of Sales",
            initial: "J"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "Customer segmentation used to take our team weeks. With the automated pipeline Engloray set up, we now refresh segments daily. The business impact has been incredible.",
            author: "Sophie Wagner",
            role: "Data Strategy Lead",
            initial: "S"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "The product analytics infrastructure they built for us is rock-solid. We can trace every user interaction and tie it back to revenue outcomes. Highly recommended for any data-driven team.",
            author: "Michael Zhang",
            role: "Product Lead",
            initial: "M"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "We now have a single source of truth across every department. The custom reporting suite Engloray built saved us 20+ hours per week in manual reporting. Exceptional quality.",
            author: "Olivia Brown",
            role: "Operations Director",
            initial: "O"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "As an early-stage startup, having clear metrics was critical. Engloray helped us instrument everything from day one and build investor-ready dashboards. Worth every penny.",
            author: "Christopher Scott",
            role: "Startup Founder",
            initial: "C"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "The inventory and demand forecasting models Engloray delivered cut our overstock costs by 30%. Their team genuinely understood our business before writing a single line of code.",
            author: "Isabella Garcia",
            role: "COO, Retail Group",
            initial: "I"
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "Data Strategy & Discovery",
            description: "We audit existing data sources, define key performance indicators, and map the analytics landscape unique to your business goals.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Pipeline Engineering",
            description: "Designing and building scalable ETL/ELT pipelines and secure data warehouses that consolidate raw data into a clean source of truth.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "BI & Dashboard Visualization",
            description: "Creating interactive, real-time dashboards (Power BI, Tableau, D3.js) that turn complex metrics into intuitive visual stories.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Predictive & Advanced Analytics",
            description: "Applying statistical modeling and machine learning to forecast trends, score churn risks, and model customer lifetime value.",
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Discover & Audit",
            text: "Auditing current data structures and identifying key business metrics."
        },
        {
            title: "Step 2",
            heading: "Architecture Planning",
            text: "Choosing the right technology stack, database schemas, and warehouse models."
        },
        {
            title: "Step 3",
            heading: "Data Integration",
            text: "Building secure API connections and staging raw data flows."
        },
        {
            title: "Step 4",
            heading: "ETL Ingestion Build",
            text: "Writing transformation models to clean, aggregate, and normalize data."
        },
        {
            title: "Step 5",
            heading: "Visual Design",
            text: "Crafting intuitive visual reports with interactive filtering and alerts."
        },
        {
            title: "Step 6",
            heading: "Training & Handoff",
            text: "Deploying dashboards and training teams to extract self-service insights."
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
        "Data Warehousing",
        "Power BI & Tableau",
        "ETL Pipelines",
        "Predictive Analytics",
        "SQL & Data Science"
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
                    <title>Engloray - Data Analytics Business</title>
                    <meta name="description" content="Unlock actionable insights and build scalable pipelines with our enterprise Data Analytics Business services." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Data Analytics Business" />
                    <meta property="og:description" content="Actionable Insights and Enterprise Reporting for Every Screen" />
                </Helmet>

                <div className="dab-page" id='dataAnalyticsBusinessPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="dab-hero">
                        <img src={heroBg} className="dab-hero-bg-image" alt="background texture" />

                        <div className="dab-gradient-shape dab-pink-shape"></div>
                        <div className="dab-gradient-shape dab-purple-shape"></div>

                        <div className="dab-floating-card dab-left dab-rotate-left">
                            <img src={avatarLeft} alt="Data pipelines specialist" />
                            <div className="dab-card-content">
                                <h4>Data Pipelines</h4>
                                <p>ETL & Cloud Warehouse</p>
                                <div className="dab-card-progress">
                                    <div className="dab-progress-fill" style={{ width: '94%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="dab-floating-card dab-right dab-rotate-right">
                            <img src={avatarRight} alt="BI Analytics designer" />
                            <div className="dab-card-content">
                                <h4>BI Visuals</h4>
                                <p>Interactive Dashboards</p>
                                <div className="dab-card-progress">
                                    <div className="dab-progress-fill" style={{ width: '97%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="dab-hero-container">
                            <div className="dab-hero-badge">
                                Data Analytics Business
                            </div>

                            <h1 className="dab-hero-title">
                                Crafting Exceptional<br /> <span className="dab-title-highlight">Data</span> <span className="dab-title-highlight">Insights</span>
                            </h1>

                            <p className="dab-hero-desc">
                                We design and build scalable data pipelines, secure warehouses, and interactive dashboards that turn raw metrics into actionable business growth.
                            </p>

                            <div className="dab-privacy-badge">
                                Robust BI reporting and Data Governance since 2018.
                            </div>
                        </div>

                        <div className="dab-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`dab-service-badge 
                                    ${item === "Data Warehousing" ? "dab-badge-strategy" : ""} 
                                    ${item === "SQL & Data Science" ? "dab-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="dab-about-section">
                        <div className="dab-container">
                            <div className="dab-about-header">
                                <h2 className="dab-about-title">About Our Data Approach</h2>
                                <p className="dab-about-description">
                                    We believe that data is only valuable if it leads to decisions. Our analytics process
                                    is built on robust engineering, automated pipelines, and interactive visual storytelling.
                                </p>
                            </div>

                            <div className="dab-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`dab-about-card ${card.id === 2 || card.id === 4 ? 'dab-card-image-bottom' : ''}`}
                                    >
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="dab-card-image-wrapper">
                                                    <div className="dab-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="dab-card-content-wrapper">
                                                    <div className="dab-card-content">
                                                        <strong className="dab-card-title">{card.title}</strong>
                                                        <p className="dab-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}

                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="dab-card-content-wrapper">
                                                    <div className="dab-card-content">
                                                        <strong className="dab-card-title">{card.title}</strong>
                                                        <p className="dab-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="dab-card-image-wrapper">
                                                    <div className="dab-card-image">
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

                    <section className="dab-branddna-section">
                        <div className="dab-branddna-container">
                            <div className="dab-branddna-left">
                                <h2>Data DNA</h2>
                                <h3 className="dab-branddna-subtitle">
                                    The Core Principles of<br /> Scalable Data Frameworks
                                </h3>
                                <p>
                                    Our Data DNA framework ensures every metrics pipeline serves a strategic purpose. We prioritize speed, accuracy, and security.
                                </p>
                                <ul className="dab-dna-list">
                                    <li><strong>Automated Pipelines:</strong> Continuous ingestion and integration from all your APIs and databases.</li>
                                    <li><strong>Data Normalization:</strong> Automated cleaning and formatting to eliminate reporting discrepancy.</li>
                                    <li><strong>Security & Access:</strong> Encryption at rest and transit with precise role-based row-level security.</li>
                                    <li><strong>Speed Optimization:</strong> Pre-aggregated schemas and queries designed for sub-second dashboard rendering.</li>
                                </ul>
                            </div>

                            <div className="dab-branddna-right">
                                <svg className="dab-link-svg" viewBox="0 0 500 460">
                                    <g className="dab-link-bases">
                                        <path className="dab-base-path" d="M265,240 L265,20" />
                                        <path className="dab-base-path" d="M265,240 L0,240" />
                                        <path className="dab-base-path" d="M265,240 L500,240" />
                                        <path className="dab-base-path" d="M265,240 L265,450" />
                                        <path className="dab-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    <g className="dab-animated-flows">
                                        <g className="dab-phase-group dab-phase-1">
                                            <path pathLength="100" className="dab-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="dab-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M0,240 L265,450" />
                                        </g>
                                        <g className="dab-phase-group dab-phase-2">
                                            <path pathLength="100" className="dab-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,20 L500,240" />
                                        </g>
                                        <g className="dab-phase-group dab-phase-3">
                                            <path pathLength="100" className="dab-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,240 L265,450" />
                                        </g>
                                        <g className="dab-phase-group dab-phase-4">
                                            <path pathLength="100" className="dab-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="dab-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M500,240 L265,450" />
                                        </g>
                                        <g className="dab-phase-group dab-phase-5">
                                            <path pathLength="100" className="dab-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="dab-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                <div className="dab-dna-circle dab-circle-purpose">
                                    <FaSearch className="dab-icon" />
                                    <h3>Audit</h3>
                                    <p className="dab-circle-desc">Define indicators and audit structure.</p>
                                </div>

                                <div className="dab-circle-voice dab-dna-circle">
                                    <FaProjectDiagram className="dab-icon" />
                                    <h3>Pipelines</h3>
                                    <p className="dab-circle-desc">Automated ingestion schemas.</p>
                                </div>

                                <div className="dab-circle-values dab-dna-circle">
                                    <FaShieldAlt className="dab-icon" />
                                    <h3>Security</h3>
                                    <p className="dab-circle-desc">Secure encryption and access roles.</p>
                                </div>

                                <div className="dab-circle-personality dab-dna-circle">
                                    <FaCogs className="dab-icon" />
                                    <h3>Accuracy</h3>
                                    <p className="dab-circle-desc">Deduplicated records and data tests.</p>
                                </div>

                                <div className="dab-circle-visual dab-dna-circle">
                                    <FaChartLine className="dab-icon" />
                                    <h3>Reporting</h3>
                                    <p className="dab-circle-desc">High-speed dashboards and visual tools.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="dab-howworks">
                        <div className="dab-howworks-container">
                            <div className="dab-left-side">
                                <h2 className="dab-howworks-title">Our Analytics Engine</h2>
                                <div className="dab-badge">
                                    <span className="dab-dot"></span>
                                    BI & Analytics Lifecycle
                                </div>
                                <p className="dab-intro-text">
                                    We bring your data intelligence to life through an iterative, secure, and robust deployment workflow.
                                </p>
                                <h2 className="dab-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="dab-arrow">→</div>
                            </div>

                            <div className="dab-right-side">
                                <div className="dab-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="dab-step-card">
                                            <span className="dab-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="dab-circular-stats">
                        <div className="dab-branding-stats-layout">
                            <div className="dab-stats-content">
                                <h2>Our Data Impact in Numbers</h2>
                                <p>
                                    We measure success through pipeline stability, dashboard accuracy, and user adoption rates.
                                </p>
                                <ul className="dab-impact-list">
                                    <li>99.9% Pipeline Uptime across all client data warehouses.</li>
                                    <li>60% Average Reduction in report generation and compilation times.</li>
                                    <li>Zero reporting discrepancies across all live business intelligence tools.</li>
                                    <li>100% Adoption Rate for self-service reporting platforms.</li>
                                </ul>
                            </div>

                            <div className="dab-stats-wrapper-cards">
                                <div className="dab-stat-card">
                                    <h2>500+</h2>
                                    <p>Databases Consolidated</p>
                                </div>
                                <div className="dab-stat-card">
                                    <h2>99.9%</h2>
                                    <p>Data Integrity</p>
                                </div>
                                <div className="dab-stat-card">
                                    <h2>4.9★</h2>
                                    <p>User Satisfaction</p>
                                </div>
                                <div className="dab-stat-card">
                                    <h2>3x</h2>
                                    <p>Faster Insights</p>
                                </div>
                            </div>
                        </div>

                        <div className="dab-bottom-stats">
                            <div className="dab-stat">
                                <h3>5+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>
                            <div className="dab-stat">
                                <h3>50+</h3>
                                <p>DATASETS INTEGRATED</p>
                            </div>
                            <div className="dab-stat">
                                <h3>1M+</h3>
                                <p>ROWS PROCESSED DAILY</p>
                            </div>
                            <div className="dab-stat">
                                <h3>250+</h3>
                                <p>Audited Data Warehouses</p>
                            </div>
                        </div>
                    </section>

                    <section className="dab-projects-section">
                        <img src={projectsBg} className="dab-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="dab-projects-bg-right" alt="background right" />

                        <div className="dab-projects-logos dab-left-logos">
                            <div className="dab-project-logo-card l1"><img src={logo1} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card l2"><img src={logo2} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card l3"><img src={logo3} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card l4"><img src={logo4} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card l5"><img src={logo9} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card l6"><img src={logo10} className="dab-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="dab-projects-logos dab-right-logos">
                            <div className="dab-project-logo-card r1"><img src={logo5} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card r2"><img src={logo6} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card r3"><img src={logo7} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card r4"><img src={logo8} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card r5"><img src={logo11} className="dab-project-logo" alt="brand logo" /></div>
                            <div className="dab-project-logo-card r6"><img src={logo12} className="dab-project-logo" alt="brand logo" /></div>
                        </div>

                        <div className="dab-projects-content">
                            <h1>Insights for <br />Leading Brands</h1>
                            <p>
                                We collaborate with modern companies to define their metrics. By combining data engineering and business intelligence standards, we create outstanding reports.
                            </p>
                            <div className="dab-projects-stats">
                                <div><h2>30+</h2><span>Fortune 500 Partners</span></div>
                                <div><h2>200+</h2><span>Warehouses Deployed</span></div>
                                <div><h2>50+</h2><span>Custom KPI Metrics</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="dab-feedback-section">
                        <div className="dab-container">
                            <div className="dab-feedback-header">
                                <h2 className="dab-feedback-title">Success <span>Stories</span></h2>
                                <p className="dab-feedback-description">Hear how our Data Analytics Business solutions have helped companies uncover opportunities.</p>
                            </div>

                            <div className="dab-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`dab-feedback-card ${position}`}>
                                            <div className="dab-feedback-rating">{feedback.rating}</div>
                                            <div className="dab-feedback-quote-icon">❝</div>
                                            <p className="dab-feedback-text">{feedback.text}</p>
                                            <div className="dab-feedback-author">
                                                <div className="dab-author-avatar"><div className="dab-avatar-initial">{feedback.initial}</div></div>
                                                <div>
                                                    <div className="dab-author-name">{feedback.author}</div>
                                                    <div className="dab-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="dab-feedback-controls">
                                <button onClick={handlePrevSlide} aria-label="Previous feedback">‹</button>
                                <button onClick={handleNextSlide} aria-label="Next feedback">›</button>
                            </div>
                        </div>
                    </section>
                    <NewFooter />
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default DataAnalyticsBusiness;
