import React, { useState, useEffect, useRef } from 'react';
import './DataAnalytics.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
import { FaCode, FaRocket, FaCheckCircle, FaUserCheck, FaDatabase, FaChartBar, FaProjectDiagram, FaCogs } from "react-icons/fa";
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

const DataAnalytics = () => {
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
            text: "The analytics dashboards Engloray built gave us a clear view of our entire pipeline. Decision-making has never been faster or more confident.",
            author: "Alex Thompson",
            role: "CEO, TechVentures",
            initial: "A"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "Our marketing ROI visibility went from zero to real-time. The attribution models they built finally showed us exactly which channels were driving revenue.",
            author: "Ryan Miller",
            role: "Marketing Director",
            initial: "R"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "Sales forecasting used to be guesswork. Now our reps have live performance scorecards and our managers have accurate weekly forecasts.",
            author: "Jessica Lee",
            role: "Head of Sales",
            initial: "J"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "Customer segmentation used to take our team weeks. With the automated pipeline Engloray set up, we now refresh segments daily.",
            author: "Sophie Wagner",
            role: "Data Strategy Lead",
            initial: "S"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "The product analytics infrastructure they built for us is rock-solid. We can trace every user interaction and tie it back to revenue outcomes.",
            author: "Michael Zhang",
            role: "Product Lead",
            initial: "M"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "We now have a single source of truth across every department. The custom reporting suite Engloray built saved us 20+ hours per week in manual reporting.",
            author: "Olivia Brown",
            role: "Operations Director",
            initial: "O"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "As an early-stage startup, having clear metrics was critical. Engloray helped us instrument everything from day one and build investor-ready dashboards.",
            author: "Christopher Scott",
            role: "Startup Founder",
            initial: "C"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "The inventory and demand forecasting models Engloray delivered cut our overstock costs by 30%. Their team genuinely understood our business.",
            author: "Isabella Garcia",
            role: "COO, Retail Group",
            initial: "I"
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "Data Engineering & ETL",
            description: "Consolidate raw datasets into a single, clean source of truth with automated ETL/ELT pipelines and scalable cloud data warehouses.",
            image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Interactive BI Dashboards",
            description: "Translate complex metrics into intuitive visual stories with responsive Power BI, Tableau, or custom D3.js dashboard architectures.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Advanced Predictive Analytics",
            description: "Identify future patterns, forecast demand, score churn risks, and model scenarios using machine learning time-series models.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Customer Insights",
            description: "Segment your user base based on behavioral cohorts, track conversion funnels, and calculate customer lifetime value metrics.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Data Audit",
            text: "Identifying data sources, auditing existing metrics, and mapping target schemas."
        },
        {
            title: "Step 2",
            heading: "Pipeline Engineering",
            text: "Orchestrating robust data pipelines and setting up secure storage layers."
        },
        {
            title: "Step 3",
            heading: "Data Warehousing",
            text: "Loading and indexing datasets in cloud platforms like Snowflake or BigQuery."
        },
        {
            title: "Step 4",
            heading: "Visual Modeling",
            text: "Designing interactive dashboard wireframes and configuring UI data layouts."
        },
        {
            title: "Step 5",
            heading: "Insights Deployment",
            text: "Launching real-time analytics instances and configuring alert distributions."
        },
        {
            title: "Step 6",
            heading: "Scale & Optimize",
            text: "Continuous validation, query optimization, and tuning pipeline performance."
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
        "ETL Pipelines",
        "BI Dashboards",
        "Predictive Analytics",
        "Data Consulting"
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
                    <title>Engloray - Data Analytics Services</title>
                    <meta name="description" content="Leverage data insights to make informed business decisions and drive growth with our expert data analytics team." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Data Analytics Services" />
                    <meta property="og:description" content="Insight-Driven Analytics Solutions for Smarter Decisions" />
                </Helmet>

                <div className="da-page" id='dataAnalyticsPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="da-hero">
                        <img src={heroBg} className="da-hero-bg-image" alt="background texture" />

                        <div className="da-gradient-shape da-cyan-shape"></div>
                        <div className="da-gradient-shape da-blue-shape"></div>

                        <div className="da-floating-card da-left da-rotate-left">
                            <img src={avatarLeft} alt="Data accuracy analyst" />
                            <div className="da-card-content">
                                <h4>Data Accuracy</h4>
                                <p>Clean & Validated Data</p>
                                <div className="da-card-progress">
                                    <div className="da-progress-fill" style={{ width: '98%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="da-floating-card da-right da-rotate-right">
                            <img src={avatarRight} alt="BI dashboard designer" />
                            <div className="da-card-content">
                                <h4>Insight Delivery</h4>
                                <p>Real-Time Visualizations</p>
                                <div className="da-card-progress">
                                    <div className="da-progress-fill" style={{ width: '95%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="da-hero-container">
                            <div className="da-hero-badge">
                                Data Analytics Services
                            </div>

                            <h1 className="da-hero-title">
                                Transforming Data<br /> Into <span className="da-title-highlight">Actionable</span> <span className="da-title-highlight">Insights</span>
                            </h1>

                            <p className="da-hero-desc">
                                We help you unlock the value in your databases. From real-time data streaming
                                and robust pipeline engineering to interactive dashboards and predictive analytics,
                                we turn complex data into strategic business assets.
                            </p>

                            <div className="da-privacy-badge">
                                Scale Decisions with Confidence
                            </div>
                        </div>

                        <div className="da-badge-glass">
                            {badges.map((item, index) => (
                                <span
                                    key={index}
                                    className={`da-service-badge 
                                    ${item === "Data Warehousing" ? "da-badge-strategy" : ""} 
                                    ${item === "Data Consulting" ? "da-badge-guidelines" : ""}`}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="da-about-section">
                        <div className="da-container">
                            <div className="da-about-header">
                                <h2 className="da-about-title">About Our Analytics Approach</h2>
                                <p className="da-about-description">
                                    We believe a great dashboard is more than just charts. It's the intersection of
                                    empathy-driven KPI discovery and high-performance database engineering. Our process
                                    is built on query speed, validation, and a relentless focus on data clarity.
                                </p>
                            </div>

                            <div className="da-cards-grid">
                                {aboutCards.map((card) => (
                                    <div
                                        key={card.id}
                                        className={`da-about-card ${card.id === 2 || card.id === 4 ? 'da-card-image-bottom' : ''}`}
                                    >
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

                    <section className="da-branddna-section">
                        <div className="da-branddna-container">
                            <div className="da-branddna-left">
                                <h2>Analytics DNA</h2>
                                <h3 className="da-branddna-subtitle">
                                    The Core Principles of<br /> Smarter Analytics
                                </h3>
                                <p>
                                    A successful analytics engine requires technical precision, visual clarity, and data strategy alignment.
                                </p>
                                <ul className="da-dna-list">
                                    <li><strong>ETL Pipelines:</strong> Clean, automated data collection from multiple API sources.</li>
                                    <li><strong>BI Dashboards:</strong> Real-time metrics presented clearly for business leadership.</li>
                                    <li><strong>Scenarios & Modeling:</strong> Advanced forecasting using time-series algorithms.</li>
                                    <li><strong>Data Optimization:</strong> Secure, scalable, and WCAG compliant dashboards.</li>
                                </ul>
                            </div>

                            <div className="da-branddna-right">
                                <svg className="da-link-svg" viewBox="0 0 500 460">
                                    <g className="da-link-bases">
                                        <path className="da-base-path" d="M265,240 L265,20" />
                                        <path className="da-base-path" d="M265,240 L0,240" />
                                        <path className="da-base-path" d="M265,240 L500,240" />
                                        <path className="da-base-path" d="M265,240 L265,450" />
                                        <path className="da-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>

                                    <g className="da-animated-flows">
                                        <g className="da-phase-group da-phase-1">
                                            <path pathLength="100" className="da-flow-path" d="M0,240 L265,20" />
                                            <path pathLength="100" className="da-flow-path" d="M0,240 L265,240" />
                                            <path pathLength="100" className="da-flow-path" d="M0,240 L265,450" />
                                        </g>
                                        <g className="da-phase-group da-phase-2">
                                            <path pathLength="100" className="da-flow-path" d="M265,20 L0,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,20 L265,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,20 L500,240" />
                                        </g>
                                        <g className="da-phase-group da-phase-3">
                                            <path pathLength="100" className="da-flow-path" d="M265,240 L0,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,240 L265,20" />
                                            <path pathLength="100" className="da-flow-path" d="M265,240 L500,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,240 L265,450" />
                                        </g>
                                        <g className="da-phase-group da-phase-4">
                                            <path pathLength="100" className="da-flow-path" d="M500,240 L265,20" />
                                            <path pathLength="100" className="da-flow-path" d="M500,240 L265,240" />
                                            <path pathLength="100" className="da-flow-path" d="M500,240 L265,450" />
                                        </g>
                                        <g className="da-phase-group da-phase-5">
                                            <path pathLength="100" className="da-flow-path" d="M265,450 L0,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,450 L265,240" />
                                            <path pathLength="100" className="da-flow-path" d="M265,450 L500,240" />
                                        </g>
                                    </g>
                                </svg>

                                <div className="da-dna-circle da-circle-purpose">
                                    <FaDatabase className="da-icon" />
                                    <h3>Pipelines</h3>
                                    <p className="da-circle-desc">Automated ETL pipelines loading cloud databases.</p>
                                </div>

                                <div className="da-circle-voice da-dna-circle">
                                    <FaProjectDiagram className="da-icon" />
                                    <h3>Warehousing</h3>
                                    <p className="da-circle-desc">Secure cloud data warehouses mapping fields.</p>
                                </div>

                                <div className="da-circle-values da-dna-circle">
                                    <FaChartBar className="da-icon" />
                                    <h3>Reporting</h3>
                                    <p className="da-circle-desc">Visual summaries mapping real business KPIs.</p>
                                </div>

                                <div className="da-circle-personality da-dna-circle">
                                    <FaCogs className="da-icon" />
                                    <h3>Predictive</h3>
                                    <p className="da-circle-desc">Algorithms mapping demand forecasts and trends.</p>
                                </div>

                                <div className="da-circle-visual da-dna-circle">
                                    <FaCheckCircle className="da-icon" />
                                    <h3>Optimized</h3>
                                    <p className="da-circle-desc">Tuned indexes ensuring speed and reliability.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="da-howworks">
                        <div className="da-howworks-container">
                            <div className="da-left-side">
                                <h2 className="da-howworks-title">Our Analytics Engine</h2>
                                <div className="da-badge">
                                    <span className="da-dot"></span>
                                    Data Analytics Lifecycle
                                </div>
                                <p className="da-intro-text">
                                    We deliver reliable insights through an agile, step-by-step pipeline discovery and data validation lifecycle.
                                </p>
                                <h2 className="da-main-title">
                                    How It Works <br /> Step by Step
                                </h2>
                                <div className="da-arrow">→</div>
                            </div>

                            <div className="da-right-side">
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

                    <section className="da-circular-stats">
                        <div className="da-branding-stats-layout">
                            <div className="da-stats-content">
                                <h2>Our Analytics Success in Numbers</h2>
                                <p>
                                    Our solutions help organizations eliminate blindspots, save hours of manual reporting, and validate actions.
                                </p>
                                <ul className="da-impact-list">
                                    <li>96% Data Validation Accuracy on multi-source pipelines.</li>
                                    <li>20+ Hours saved weekly per department on manual reports.</li>
                                    <li>-30% Overstock and waste through custom demand models.</li>
                                    <li>100+ Enterprise dashboards successfully deployed.</li>
                                </ul>
                            </div>

                            <div className="da-stats-wrapper-cards">
                                <div className="da-stat-card">
                                    <h2>100+</h2>
                                    <p>Dashboards Built</p>
                                </div>
                                <div className="da-stat-card">
                                    <h2>96%</h2>
                                    <p>Data Accuracy</p>
                                </div>
                                <div className="da-stat-card">
                                    <h2>4.9★</h2>
                                    <p>Avg Rating</p>
                                </div>
                                <div className="da-stat-card">
                                    <h2>20h+</h2>
                                    <p>Saved Weekly</p>
                                </div>
                            </div>
                        </div>

                        <div className="da-bottom-stats">
                            <div className="da-stat">
                                <h3>5+</h3>
                                <p>YEARS EXPERIENCE</p>
                            </div>
                            <div className="da-stat">
                                <h3>25+</h3>
                                <p>INDUSTRIES SERVED</p>
                            </div>
                            <div className="da-stat">
                                <h3>60+</h3>
                                <p>GLOBAL CLIENTS</p>
                            </div>
                            <div className="da-stat">
                                <h3>1M+</h3>
                                <p>ACTIVE DAILY QUERIES RUN</p>
                            </div>
                        </div>
                    </section>

                    <section className="da-projects-section">
                        <img src={projectsBg} className="da-projects-bg-left" alt="background left mirror" />
                        <img src={projectsBg} className="da-projects-bg-right" alt="background right" />

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

                        <div className="da-projects-content">
                            <h1>Designed for <br />Leading Brands</h1>
                            <p>
                                We collaborate with modern companies to define their metrics layer. By combining data engineering excellence and dashboard UX, we create robust analytics systems.
                            </p>
                            <div className="da-projects-stats">
                                <div><h2>30+</h2><span>Fortune 500 Partners</span></div>
                                <div><h2>200+</h2><span>BI Implementations</span></div>
                                <div><h2>50+</h2><span>Case Studies Done</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="da-feedback-section">
                        <div className="da-container">
                            <div className="da-feedback-header">
                                <h2 className="da-feedback-title">Success <span>Stories</span></h2>
                                <p className="da-feedback-description">Hear how our data analytics solutions have helped businesses make smart decisions.</p>
                            </div>

                            <div className="da-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`da-feedback-card ${position}`}>
                                            <div className="da-feedback-rating">{feedback.rating}</div>
                                            <div className="da-feedback-quote-icon">❝</div>
                                            <p className="da-feedback-text">{feedback.text}</p>
                                            <div className="da-feedback-author">
                                                <div className="da-author-avatar"><div className="da-avatar-initial">{feedback.initial}</div></div>
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
                    <WhiteFooter />
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default DataAnalytics;