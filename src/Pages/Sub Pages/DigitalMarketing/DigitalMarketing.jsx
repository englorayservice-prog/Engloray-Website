import React, { useState, useEffect, useRef } from 'react';
import marketingImageOne from '../../../assets/case study images/uiux/pavizham.jpg'; // Reusing as generic marketing visuals
import marketingImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import marketingImageThree from '../../../assets/case study images/uiux/gym life.png';
import './DigitalMarketing.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
import { FaChartLine, FaBullhorn, FaSearchDollar, FaMobileAlt, FaEnvelopeOpenText, FaUserCircle, FaGem, FaChartBar, FaGlobe, FaRocket } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";

// Import project section background
import projectsBg from '../../../assets/heroimage.jpeg';

// Import brand logos for projects section (Reusing standard logos)
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
import avatarLeft from '../../../assets/cartoon_female_2.png';
import avatarRight from '../../../assets/cartoon_male_2.png';

const DigitalMarketing = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);

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
            text: "Engloray's digital marketing strategy tripled our online leads in just three months. Their data-driven approach is truly impressive.",
            author: "Malar Herbs",
            role: "Marketing Director",
            initial: "M"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "The social media campaigns delivered exactly what we needed: higher engagement and lower acquisition costs.",
            author: "ECEC Skill School",
            role: "Founder",
            initial: "E"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "Our ROI on ad spend has never been better. They don't just spend money; they optimize for results every single day.",
            author: "ISHA Bites",
            role: "CEO",
            initial: "I"
        },
        {
            id: 4,
            rating: "★★★★★",
            text: "Their SEO strategy put us on the first page of Google for all our target keywords. Pure expertise in action.",
            author: "TechFlow Solutions",
            role: "COO",
            initial: "T"
        },
        {
            id: 5,
            rating: "★★★★★",
            text: "The reporting is transparent and extremely detailed. We always know exactly where our marketing budget is going.",
            author: "Nova Retail",
            role: "Retail Head",
            initial: "N"
        },
        {
            id: 6,
            rating: "★★★★★",
            text: "Incredible growth in our email database and conversion rates. Engloray understands the digital landscape perfectly.",
            author: "Apex Consulting",
            role: "Managing Partner",
            initial: "A"
        },
        {
            id: 7,
            rating: "★★★★★",
            text: "The conversion rate optimization work they did on our landing pages was a game changer. We're seeing more sales with the same traffic.",
            author: "Global Retail",
            role: "E-commerce Manager",
            initial: "G"
        },
        {
            id: 8,
            rating: "★★★★★",
            text: "A truly professional team that understands both the technical and creative sides of marketing. Our brand presence has never been stronger.",
            author: "Starlight Media",
            role: "Brand Manager",
            initial: "S"
        },
        {
            id: 9,
            rating: "★★★★★",
            text: "Engloray is more than an agency; they are a growth partner. Their proactive ideas have opened up new markets for us.",
            author: "Horizon Sales",
            role: "Director of Sales",
            initial: "H"
        }
    ];

    // About section cards data
    const aboutCards = [
        {
            id: 1,
            title: "Market Insight & SEO",
            description: "We analyze market trends and search behaviors to position your brand at the top of search results. Our SEO strategies are built on technical excellence, content authority, and link-building that drives organic growth and long-term search visibility.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Performance Marketing",
            description: "Accelerate your growth with data-driven paid advertising. We manage high-converting campaigns across Google Ads, Social Ads, and Display Networks, focusing on optimizing Cost Per Acquisition (CPA) and maximizing Return on Ad Spend (ROAS).",
            image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Social Media Strategy",
            description: "We build community and drive engagement through strategic social media management. From content creation to community management and influencer partnerships, we ensure your brand stays relevant and top-of-mind across all platforms.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Analytics & Scaling",
            description: "We turn data into actionable business intelligence. Our detailed tracking and analysis identify winning patterns and growth opportunities, allowing us to scale your successful campaigns and continuously improve overall marketing performance.",
            image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    // How It Works steps data
    const howItWorksSteps = [
        {
            title: "Step 1",
            heading: "Digital Audit",
            text: "Analyze your current digital footprint, competitors, and market opportunities."
        },
        {
            title: "Step 2",
            heading: "Growth Strategy",
            text: "Develop a customized roadmap with clear KPIs and target audience profiling."
        },
        {
            title: "Step 3",
            heading: "Campaign Setup",
            text: "Launch high-performance tracking and initial campaign structures."
        },
        {
            title: "Step 4",
            heading: "Execution & Management",
            text: "Active management of SEO, Ads, and Social to drive immediate results."
        },
        {
            title: "Step 5",
            heading: "Optimization",
            text: "Continuous A/B testing and data analysis to refine performance daily."
        },
        {
            title: "Step 6",
            heading: "Scale and Report",
            text: "Scaling winning tactics while providing transparent, detailed ROI reporting."
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
            }, 3000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    const badges = [
        "SEO Optimization",
        "Performance Ads",
        "Social Media",
        "Email Marketing",
        "Content Strategy"
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
                    <title>Engloray - Digital Marketing & Growth</title>
                    <meta name="description" content="Accelerate your business growth with data-driven digital marketing strategies and performance ads." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray | Digital Marketing & Growth" />
                    <meta property="og:description" content="Driving Measurable Growth Through Strategic Digital Marketing" />
                </Helmet>

                <div className="dm-page" id='marketingPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    {/* Hero Section */}
                    <section className="dm-hero">
                        <img src={heroBg} className="dm-hero-bg-image" alt="background texture" />
                        <div className="dm-gradient-shape dm-blue-shape"></div>
                        <div className="dm-gradient-shape dm-sand-shape"></div>

                        <div className="dm-floating-card dm-left dm-rotate-left">
                            <img src={avatarLeft} alt="Analyst" />
                            <div className="dm-card-content">
                                <h4>Data Analysis</h4>
                                <p>Insights & KPIs</p>
                                <div className="dm-card-progress">
                                    <div className="dm-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="dm-floating-card dm-right dm-rotate-right">
                            <img src={avatarRight} alt="Ad Manager" />
                            <div className="dm-card-content">
                                <h4>Growth Scale</h4>
                                <p>ROI & Conversions</p>
                                <div className="dm-card-progress">
                                    <div className="dm-progress-fill"></div>
                                </div>
                            </div>
                        </div>

                        <div className="dm-hero-container">
                            <div className="dm-hero-badge">Digital Marketing & Growth</div>
                            <h1 className="dm-hero-title">
                                Accelerating Growth with<br /> <span className="dm-title-highlight">Data</span> <span className="dm-title-highlight">Marketing</span>
                            </h1>
                            <p className="dm-hero-desc">
                                We help businesses scale through performance-driven digital strategies,
                                maximizing your reach and converting traffic into measurable revenue
                                with cutting-edge marketing technology and creative execution.
                            </p>
                            <div className="dm-privacy-badge">Your ROI is our top priority.</div>
                        </div>

                        <div className="dm-badge-glass">
                            {badges.map((item, index) => (
                                <span key={index} className={`dm-service-badge ${item === "SEO Optimization" ? "dm-badge-strategy" : ""} ${item === "Content Strategy" ? "dm-badge-guidelines" : ""}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    {/* About Section */}
                    <section className="dm-about-section">
                        <div className="dm-container">
                            <div className="dm-about-header">
                                <h2 className="dm-about-title">Why Marketing Matters</h2>
                                <p className="dm-about-description">
                                    In today's digital landscape, visibility is everything. We combine
                                    psychology with technology to build marketing ecosystems that
                                    don't just get attention—they build lasting business value.
                                </p>
                            </div>

                            <div className="dm-cards-grid">
                                {aboutCards.map((card) => (
                                    <div key={card.id} className={`dm-about-card ${card.id === 2 || card.id === 4 ? 'dm-card-image-bottom' : ''}`}>
                                        {card.id !== 2 && card.id !== 4 && (
                                            <>
                                                <div className="dm-card-image-wrapper">
                                                    <div className="dm-card-image">
                                                        <img src={card.image} alt={card.title} />
                                                    </div>
                                                </div>
                                                <div className="dm-card-content-wrapper">
                                                    <div className="dm-card-content">
                                                        <strong className="dm-card-title">{card.title}</strong>
                                                        <p className="dm-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        {(card.id === 2 || card.id === 4) && (
                                            <>
                                                <div className="dm-card-content-wrapper">
                                                    <div className="dm-card-content">
                                                        <strong className="dm-card-title">{card.title}</strong>
                                                        <p className="dm-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="dm-card-image-wrapper">
                                                    <div className="dm-card-image">
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

                    {/* Marketing DNA Section */}
                    <section className="dm-dna-section">
                        <div className="dm-dna-container">
                            <div className="dm-dna-left">
                                <h2>Marketing DNA</h2>
                                <h3 className="dm-dna-subtitle">Building Growth Blocks</h3>
                                <p>
                                    Our strategies are rooted in data, fueled by creativity, and
                                    measured by results. We've decoded the DNA of high-growth
                                    marketing to provide your business with the ultimate scale-up framework.
                                </p>
                                <ul className="dm-dna-list">
                                    <li><strong>Conversion Rate Optimization:</strong> Precision engineering of user journeys to maximize sales.</li>
                                    <li><strong>Predictive Targeting:</strong> Using AI to reach high-intent audiences before the competition.</li>
                                    <li><strong>Multi-Channel Attribution:</strong> Clear insights into which platforms are driving your ROI.</li>
                                    <li><strong>Real-Time Analytics:</strong> 24/7 performance tracking and agile budget optimization.</li>
                                </ul>
                            </div>

                            <div className="dm-dna-right">
                                <svg className="dm-link-svg" viewBox="0 0 500 460">
                                    <g className="dm-link-bases">
                                        <path className="dm-base-path" d="M265,240 L265,20" />
                                        <path className="dm-base-path" d="M265,240 L0,240" />
                                        <path className="dm-base-path" d="M265,240 L500,240" />
                                        <path className="dm-base-path" d="M265,240 L265,450" />
                                        <path className="dm-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>
                                    <g className="dm-animated-flows">
                                        <g className="dm-phase-group dm-phase-1"><path pathLength="100" className="dm-flow-path" d="M0,240 L265,20" /><path pathLength="100" className="dm-flow-path" d="M0,240 L265,240" /><path pathLength="100" className="dm-flow-path" d="M0,240 L265,450" /></g>
                                        <g className="dm-phase-group dm-phase-2"><path pathLength="100" className="dm-flow-path" d="M265,20 L0,240" /><path pathLength="100" className="dm-flow-path" d="M265,20 L265,240" /><path pathLength="100" className="dm-flow-path" d="M265,20 L500,240" /></g>
                                        <g className="dm-phase-group dm-phase-3"><path pathLength="100" className="dm-flow-path" d="M265,240 L0,240" /><path pathLength="100" className="dm-flow-path" d="M265,240 L265,20" /><path pathLength="100" className="dm-flow-path" d="M265,240 L500,240" /><path pathLength="100" className="dm-flow-path" d="M265,240 L265,450" /></g>
                                        <g className="dm-phase-group dm-phase-4"><path pathLength="100" className="dm-flow-path" d="M500,240 L265,20" /><path pathLength="100" className="dm-flow-path" d="M500,240 L265,240" /><path pathLength="100" className="dm-flow-path" d="M500,240 L265,450" /></g>
                                        <g className="dm-phase-group dm-phase-5"><path pathLength="100" className="dm-flow-path" d="M265,450 L0,240" /><path pathLength="100" className="dm-flow-path" d="M265,450 L265,240" /><path pathLength="100" className="dm-flow-path" d="M265,450 L500,240" /></g>
                                    </g>
                                </svg>

                                <div className="dm-dna-circle dm-circle-purpose"><FaRocket className="dm-icon" /><h3>Performance</h3><p className="dm-circle-desc">Driving leads and high-intent traffic.</p></div>
                                <div className="dm-dna-circle dm-circle-voice"><FaGlobe className="dm-icon" /><h3>Visibility</h3><p className="dm-circle-desc">Dominating search and social landscapes.</p></div>
                                <div className="dm-dna-circle dm-circle-values"><FaChartBar className="dm-icon" /><h3>Analytics</h3><p className="dm-circle-desc">Data-backed decision making always.</p></div>
                                <div className="dm-dna-circle dm-circle-personality"><FaBullhorn className="dm-icon" /><h3>Creative</h3><p className="dm-circle-desc">Storytelling that converts interest.</p></div>
                                <div className="dm-dna-circle dm-circle-visual"><FaChartLine className="dm-icon" /><h3>Growth</h3><p className="dm-circle-desc">Scaling operations sustainably.</p></div>
                            </div>
                        </div>
                    </section>

                    {/* How It Works Section */}
                    <section className="dm-howworks">
                        <div className="dm-howworks-container">
                            <div className="dm-left-side">
                                <div className="dm-badge"><span className="dm-dot"></span>Growth Methodology</div>
                                <p className="dm-intro-text">We create measurable impact through a systematic 6-step marketing framework built for transparency and scale.</p>
                                <h2 className="dm-main-title">Our Growth <br /> Process</h2>
                                <div className="dm-arrow">→</div>
                            </div>

                            <div className="dm-right-side">
                                <h2 className="dm-section-title">Scale Step by Step</h2>
                                <div className="dm-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="dm-step-card">
                                            <span className="dm-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Stats Section */}
                    <section className="dm-circular-stats">
                        <div className="dm-stats-layout">
                            <div className="dm-stats-content">
                                <h2>Marketing Impact in Numbers</h2>
                                <p>We don't just promise growth; we deliver it. Our metrics reflect millions in managed ad spend and countless successful scaling operations for our partners.</p>
                                <ul className="dm-impact-list">
                                    <li>3.5x Average ROI Growth for our long-term scaling partners.</li>
                                    <li>Reduced Cost Per Acquisition (CPA) by 40% through targeted optimization.</li>
                                    <li>1M+ Verified leads generated across diverse B2B and B2C industries.</li>
                                    <li>Dominance in search results with 300+ keywords in top 3 positions.</li>
                                </ul>
                            </div>

                            <div className="dm-stats-wrapper-cards">
                                <div className="dm-stat-card"><h2>250%</h2><p>Avg ROI Increase</p></div>
                                <div className="dm-stat-card"><h2>1M+</h2><p>Leads Generated</p></div>
                                <div className="dm-stat-card"><h2>98%</h2><p>Client Retention</p></div>
                                <div className="dm-stat-card"><h2>500+</h2><p>Campaigns Scaled</p></div>
                            </div>
                        </div>

                        <div className="dm-bottom-stats">
                            <div className="dm-stat"><h3>6+</h3><p>YEARS IN GROWTH</p></div>
                            <div className="dm-stat"><h3>25+</h3><p>AD PLATFORMS</p></div>
                            <div className="dm-stat"><h3>60+</h3><p>GLOBAL CLIENTS</p></div>
                            <div className="dm-stat"><h3>300+</h3><p>SEO DOMINATED</p></div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="dm-projects-section">
                        <img src={projectsBg} className="dm-projects-bg-left" alt="" />
                        <img src={projectsBg} className="dm-projects-bg-right" alt="" />

                        <div className="dm-projects-logos dm-left-logos">
                            <div className="dm-project-logo-card l1"><img src={logo1} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card l2"><img src={logo2} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card l3"><img src={logo3} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card l4"><img src={logo4} className="dm-project-logo" alt="" /></div>
                        </div>

                        <div className="dm-projects-logos dm-right-logos">
                            <div className="dm-project-logo-card r1"><img src={logo5} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card r2"><img src={logo6} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card r3"><img src={logo7} className="dm-project-logo" alt="" /></div>
                            <div className="dm-project-logo-card r4"><img src={logo8} className="dm-project-logo" alt="" /></div>
                        </div>

                        <div className="dm-projects-content">
                            <h1>Scaling Leading Brands</h1>
                            <p>We've helped these organizations dominate their digital space and achieve sustainable, recurring revenue through expert marketing.</p>
                            <div className="dm-projects-stats">
                                <div><h2>$2M+</h2><span>Ad Managed</span></div>
                                <div><h2>50M+</h2><span>Total Reach</span></div>
                                <div><h2>15+</h2><span>Markets Opened</span></div>
                            </div>
                        </div>
                    </section>

                    {/* Feedback Section */}
                    <section className="dm-feedback-section">
                        <div className="dm-container">
                            <div className="dm-feedback-header">
                                <h2 className="dm-feedback-title">Partner <span>Success Stories</span></h2>
                                <p className="dm-feedback-description">Straight from our clients: How Engloray's digital marketing transformed their business trajectory.</p>
                            </div>

                            <div className="dm-feedback-carousel">
                                {feedbacks.map((feedback, index) => {
                                    const position = getPosition(index);
                                    return (
                                        <div key={feedback.id} className={`dm-feedback-card ${position}`}>
                                            <div className="dm-feedback-rating">{feedback.rating}</div>
                                            <div className="dm-feedback-quote-icon">❝</div>
                                            <p className="dm-feedback-text">{feedback.text}</p>
                                            <div className="dm-feedback-author">
                                                <div className="dm-author-avatar"><div className="dm-avatar-initial">{feedback.initial}</div></div>
                                                <div>
                                                    <div className="dm-author-name">{feedback.author}</div>
                                                    <div className="dm-author-role">{feedback.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="dm-feedback-controls">
                                <button onClick={handlePrevSlide}>‹</button>
                                <button onClick={handleNextSlide}>›</button>
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

export default DigitalMarketing;
