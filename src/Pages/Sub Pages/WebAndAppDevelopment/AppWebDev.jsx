import React, { useState, useEffect, useRef } from 'react';
import webImageOne from '../../../assets/case study images/websites/Divya makeovers.jpg';
import webImageTwo from '../../../assets/case study images/websites/green park school.png';
import webImageThree from '../../../assets/case study images/websites/say.jpg';
import './AppWebDev.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import { Helmet } from 'react-helmet';
import { FaCode, FaShieldAlt, FaLayerGroup, FaExpandArrowsAlt, FaBolt, FaRocket, FaDatabase, FaMobileAlt, FaCloud, FaLaptopCode, FaCubes } from "react-icons/fa";
import heroBg from "../../../assets/lineimage.jpeg";
import projectsBg from '../../../assets/heroimage.jpeg';

// Import logos for projects section
import logo1 from '../../../assets/icons/logoipsum-247.png';
import logo2 from '../../../assets/icons/logoipsum-248.png';
import logo3 from '../../../assets/icons/logoipsum-249.png';
import logo4 from '../../../assets/icons/logoipsum-292.png';
import logo5 from '../../../assets/icons/logoipsum-293.png';
import logo6 from '../../../assets/icons/logoipsum-294.png';
import logo7 from '../../../assets/icons/logoipsum-295.png';
import logo8 from '../../../assets/icons/logoipsum-296.png';
import avatarLeft from '../../../assets/rev_avatar_5.jfif';
import avatarRight from '../../../assets/rev_avatar_4.jfif';

const AppWebDev = () => {
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
            text: "Our website looks elegant and professional. ENGLORAY understood our brand clearly and helped us get more customer inquiries.",
            author: "Divya Makeovers",
            role: "Makeover Studio",
            initial: "D"
        },
        {
            id: 2,
            rating: "★★★★★",
            text: "The website is clear, informative, and easy for parents to use. Very helpful for communication and admissions.",
            author: "Green Park School",
            role: "School Application",
            initial: "G"
        },
        {
            id: 3,
            rating: "★★★★★",
            text: "The website is beautiful and perfectly matches our bridal brand. Clients connect with our work easily now.",
            author: "Say Bridals",
            role: "Bridal Studio",
            initial: "S"
        }
    ];

    const aboutCards = [
        {
            id: 1,
            title: "Research & Discovery",
            description: "We begin every development project by understanding your unique challenges and goals. We analyze your requirements and user needs to build a solid technical foundation.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Technical Architecture",
            description: "Designing scalable, secure, and robust system architectures that grow with your business. We plan every layer from database design to high-performance APIs.",
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Agile Development",
            description: "Our iterative coding process ensures rapid progress and high code quality. We use the latest frameworks to build fast, responsive, and intuitive digital experiences.",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Testing & Deployment",
            description: "Rigorous quality assurance and automated testing ensure a bug-free launch. We handle complex cloud deployments to keep your application running at peak performance.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const howItWorksSteps = [
        { title: "Step 1", heading: "Requirement Gathering", text: "In-depth analysis of your business vision and user needs." },
        { title: "Step 2", heading: "System Architecture", text: "Planning the stack, database, and infrastructure scalability." },
        { title: "Step 3", heading: "UI/UX & Prototyping", text: "Designing intuitive interfaces that engage and convert users." },
        { title: "Step 4", heading: "Agile Development", text: "Fast-paced coding with regular updates and quality checks." },
        { title: "Step 5", heading: "Deployment & QA", text: "Rigorous testing and launch across production environments." },
        { title: "Step 6", heading: "Scaling & Maintenance", text: "Continuous monitoring and feature updates for long-term success." }
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
        "Web App Development",
        "Mobile App Development",
        "Cloud Solutions",
        "UI/UX Design Systems",
        "Custom Software"
    ];

    return (
        <>
            <div className="awd-page-wrapper">
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <clipPath id="cardCurve" clipPathUnits="objectBoundingBox">
                            <path d="M 0.15,0 L 0.85,0 A 0.15,0.15 0,0,1 1,0.15 L 1,0.75 A 0.08,0.06 0,0,1 0.92,0.81 L 0.9,0.81 A 0.06,0.06 0,0,0 0.84,0.87 L 0.84,0.92 A 0.08,0.08 0,0,1 0.76,1 L 0.15,1 A 0.15,0.15 0,0,1 0,0.85 L 0,0.15 A 0.15,0.15 0,0,1 0.15,0 Z" />
                        </clipPath>
                    </defs>
                </svg>

                <Helmet>
                    <title>Engloray - App & Web Development</title>
                    <meta name="description" content="Expert Web and App Development services providing scalable and robust digital solutions." />
                </Helmet>

                <div className="awd-page" id='appWebPage'>
                    <TopNavBar />
                    <TwoLineNavbar />

                    <section className="awd-hero">
                        <img src={heroBg} className="awd-hero-bg-image" alt="background texture" />
                        <div className="awd-gradient-shape awd-blue-shape"></div>
                        <div className="awd-gradient-shape awd-sand-shape"></div>

                        <div className="awd-floating-card awd-left awd-rotate-left">
                            <img src={avatarLeft} alt="App Architect" />
                            <div className="awd-card-content">
                                <h4>Scalable Code</h4>
                                <p>System Architecture</p>
                                <div className="awd-card-progress"><div className="awd-progress-fill"></div></div>
                            </div>
                        </div>

                        <div className="awd-floating-card awd-right awd-rotate-right">
                            <img src={avatarRight} alt="Lead Developer" />
                            <div className="awd-card-content">
                                <h4>Live Ops</h4>
                                <p>Cloud Deployment</p>
                                <div className="awd-card-progress"><div className="awd-progress-fill"></div></div>
                            </div>
                        </div>

                        <div className="awd-hero-container">
                            <div className="awd-hero-badge">Web & App Development</div>
                            <h1 className="awd-hero-title">
                                Crafting Exceptional<br /> <span className="awd-title-highlight">Digital</span> <span className="awd-title-highlight">Solutions</span>
                            </h1>
                            <p className="awd-hero-desc">
                                We build scalable, high-performance web and mobile applications using cutting-edge technologies. Our team transforms complex business challenges into robust digital products.
                            </p>
                            <div className="awd-privacy-badge">Built for scalability and high performance since 2018.</div>
                        </div>

                        <div className="awd-badge-glass">
                            {badges.map((item, index) => (
                                <span key={index} className={`awd-service-badge ${index === 0 ? "awd-badge-strategy" : index === 4 ? "awd-badge-guidelines" : ""}`}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </section>

                    <section className="awd-about-section">
                        <div className="awd-container">
                            <div className="awd-about-header">
                                <h2 className="awd-about-title">About Our Engineering</h2>
                                <p className="awd-about-description">
                                    At ENGLORAY, we believe that great development is more than just writing code — it's about building scalable systems. Our engineering philosophy combines technical rigor with innovative problem-solving to deliver applications that scale.
                                </p>
                            </div>

                            <div className="awd-cards-grid">
                                {aboutCards.map((card) => (
                                    <div key={card.id} className={`awd-about-card ${card.id === 2 || card.id === 4 ? 'awd-card-image-bottom' : ''}`}>
                                        {card.id !== 2 && card.id !== 4 ? (
                                            <>
                                                <div className="awd-card-image-wrapper">
                                                    <div className="awd-card-image"><img src={card.image} alt={card.title} /></div>
                                                </div>
                                                <div className="awd-card-content-wrapper">
                                                    <div className="awd-card-content">
                                                        <strong className="awd-card-title">{card.title}</strong>
                                                        <p className="awd-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="awd-card-content-wrapper">
                                                    <div className="awd-card-content">
                                                        <strong className="awd-card-title">{card.title}</strong>
                                                        <p className="awd-card-description">{card.description}</p>
                                                    </div>
                                                </div>
                                                <div className="awd-card-image-wrapper">
                                                    <div className="awd-card-image"><img src={card.image} alt={card.title} /></div>
                                                </div>
                                            </>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="awd-branddna-section">
                        <div className="awd-branddna-container">
                            <div className="awd-branddna-left">
                                <h2>Tech DNA</h2>
                                <h3 className="awd-branddna-subtitle">The Foundation of<br />Agile Modern Systems</h3>
                                <p>
                                    Our Technical DNA framework ensures every line of code serves a strategic purpose. We prioritize scalability, security, and performance to ensure your digital ecosystem remains resilient and efficient as your business scales.
                                </p>
                            </div>

                            <div className="awd-branddna-right">
                                <svg className="awd-link-svg" viewBox="0 0 500 460">
                                    <g className="awd-link-bases">
                                        <path className="awd-base-path" d="M265,240 L265,20" />
                                        <path className="awd-base-path" d="M265,240 L0,240" />
                                        <path className="awd-base-path" d="M265,240 L500,240" />
                                        <path className="awd-base-path" d="M265,240 L265,450" />
                                        <path className="awd-base-path" d="M265,20 L500,240 L265,450 L0,240 Z" />
                                    </g>
                                    <g className="awd-animated-flows">
                                        <g className="awd-phase-group awd-phase-1"><path pathLength="100" className="awd-flow-path" d="M0,240 L265,20" /><path pathLength="100" className="awd-flow-path" d="M0,240 L265,240" /><path pathLength="100" className="awd-flow-path" d="M0,240 L265,450" /></g>
                                        <g className="awd-phase-group awd-phase-2"><path pathLength="100" className="awd-flow-path" d="M265,20 L0,240" /><path pathLength="100" className="awd-flow-path" d="M265,20 L265,240" /><path pathLength="100" className="awd-flow-path" d="M265,20 L500,240" /></g>
                                        <g className="awd-phase-group awd-phase-3"><path pathLength="100" className="awd-flow-path" d="M265,240 L0,240" /><path pathLength="100" className="awd-flow-path" d="M265,240 L265,20" /><path pathLength="100" className="awd-flow-path" d="M265,240 L500,240" /><path pathLength="100" className="awd-flow-path" d="M265,240 L265,450" /></g>
                                        <g className="awd-phase-group awd-phase-4"><path pathLength="100" className="awd-flow-path" d="M500,240 L265,20" /><path pathLength="100" className="awd-flow-path" d="M500,240 L265,240" /><path pathLength="100" className="awd-flow-path" d="M500,240 L265,450" /></g>
                                        <g className="awd-phase-group awd-phase-5"><path pathLength="100" className="awd-flow-path" d="M265,450 L0,240" /><path pathLength="100" className="awd-flow-path" d="M265,450 L265,240" /><path pathLength="100" className="awd-flow-path" d="M265,450 L500,240" /></g>
                                    </g>
                                </svg>
                                
                                <div className="awd-dna-circle awd-circle-purpose"><FaLayerGroup className="awd-icon" /><h3>Architecture</h3><p className="awd-circle-desc">Robust foundations for long-term growth.</p></div>
                                <div className="awd-dna-circle awd-circle-voice"><FaCode className="awd-icon" /><h3>Code Quality</h3><p className="awd-circle-desc">Clean, maintainable, and audited codebases.</p></div>
                                <div className="awd-dna-circle awd-circle-values"><FaShieldAlt className="awd-icon" /><h3>Security</h3><p className="awd-circle-desc">Enterprise-grade protection by default.</p></div>
                                <div className="awd-dna-circle awd-circle-personality"><FaExpandArrowsAlt className="awd-icon" /><h3>Scalability</h3><p className="awd-circle-desc">Seamlessly handle increasing traffic loads.</p></div>
                                <div className="awd-dna-circle awd-circle-visual"><FaBolt className="awd-icon" /><h3>Performance</h3><p className="awd-circle-desc">Optimized for maximum speed and efficiency.</p></div>
                            </div>
                        </div>
                    </section>

                    <section className="awd-howworks">
                        <div className="awd-howworks-container">
                            <div className="awd-left-side">
                                <div className="awd-badge"><span className="awd-dot"></span>DevOps Lifecycle</div>
                                <p className="awd-intro-text">We build high-performance digital products through strategic planning, agile development, and rigorous QA.</p>
                                <h2 className="awd-main-title">How It Works <br /> Stage by Stage</h2>
                                <div className="awd-arrow">→</div>
                            </div>

                            <div className="awd-right-side">
                                <h2 className="awd-section-title">Development Workflow</h2>
                                <div className="awd-steps-grid">
                                    {howItWorksSteps.map((step, index) => (
                                        <div key={index} className="awd-step-card">
                                            <span className="awd-card-dot"></span>
                                            <h4>{step.title}</h4>
                                            <h3>{step.heading}</h3>
                                            <p>{step.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="awd-circular-stats">
                        <div className="awd-branding-stats-layout">
                            <div className="awd-stats-content">
                                <h2>Our Engineering Impact</h2>
                                <p>We measure success through the stability and performance of the systems we build. These metrics reflect the trust and scalability we bring to our clients.</p>
                            </div>

                            <div className="awd-stats-wrapper-cards">
                                <div className="awd-stat-card"><h2>200+</h2><p>Apps Built</p></div>
                                <div className="awd-stat-card"><h2>500+</h2><p>Systems Managed</p></div>
                                <div className="awd-stat-card"><h2>99.9%</h2><p>System Uptime</p></div>
                                <div className="awd-stat-card"><h2>4.9/5</h2><p>Client Satisfaction</p></div>
                            </div>
                        </div>

                        <div className="awd-bottom-stats">
                            <div className="awd-stat"><h3>5+</h3><p>YEARS EXPERIENCE</p></div>
                            <div className="awd-stat"><h3>50+</h3><p>CLOUDS DEPLOYED</p></div>
                            <div className="awd-stat"><h3>1M+</h3><p>ACTIVE USERS</p></div>
                            <div className="awd-stat"><h3>250+</h3><p>Code Audits Completed</p></div>
                        </div>
                    </section>

                    <section className="awd-projects-section">
                        <img src={projectsBg} className="awd-projects-bg-left" alt="bg" />
                        <img src={projectsBg} className="awd-projects-bg-right" alt="bg" />

                        <div className="awd-projects-logos awd-left-logos">
                            <div className="awd-project-logo-card l1"><img src={logo1} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card l2"><img src={logo2} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card l3"><img src={logo3} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card l4"><img src={logo4} className="awd-project-logo" alt="logo" /></div>
                        </div>

                        <div className="awd-projects-logos awd-right-logos">
                            <div className="awd-project-logo-card r1"><img src={logo5} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card r2"><img src={logo6} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card r3"><img src={logo7} className="awd-project-logo" alt="logo" /></div>
                            <div className="awd-project-logo-card r4"><img src={logo8} className="awd-project-logo" alt="logo" /></div>
                        </div>

                        <div className="awd-projects-content">
                            <h1>Trusted by innovators</h1>
                            <p>We work with tech-driven companies to create meaningful digital experiences. Our partners trust us to deliver impactful engineering and scalable software solutions.</p>
                            <div className="awd-projects-stats">
                                <div><h2>20+</h2><span>Cloud Promoters</span></div>
                                <div><h2>100+</h2><span>Systems Audited</span></div>
                                <div><h2>150+</h2><span>Apps Optimized</span></div>
                            </div>
                        </div>
                    </section>

                    <section className="awd-feedback-section">
                        <div className="awd-container">
                            <div className="awd-feedback-header">
                                <h2 className="awd-feedback-title">Testimonials <span>from Clients</span></h2>
                                <p className="awd-feedback-description">Here is what businesses say about our development and engineering excellence.</p>
                            </div>

                            <div className="awd-feedback-carousel">
                                {feedbacks.map((f, i) => {
                                    const pos = getPosition(i);
                                    return (
                                        <div key={f.id} className={`awd-feedback-card ${pos}`}>
                                            <div className="awd-feedback-rating">{f.rating}</div>
                                            <div className="awd-feedback-quote-icon">❝</div>
                                            <p className="awd-feedback-text">{f.text}</p>
                                            <div className="awd-feedback-author">
                                                <div className="awd-author-avatar"><div className="awd-avatar-initial">{f.initial}</div></div>
                                                <div>
                                                    <div className="awd-author-name">{f.author}</div>
                                                    <div className="awd-author-role">{f.role}</div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="awd-feedback-controls">
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

export default AppWebDev;
