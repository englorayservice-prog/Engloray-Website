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

const AppWebDev = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    // State to track loaded images
    const [loadedImages, setLoadedImages] = useState({
        webImageOne: false,
        webImageTwo: false,
        webImageThree: false
    });

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
            text: "Our website looks elegant and professional. ENGLORAY understood our brand clearly and helped us get more customer inquiries",
            author: "Divya Makeovers",
            role: "Makeover Studio"
        },
        {
            id: 2,
            text: "The website is clear, informative, and easy for parents to use. Very helpful for communication and admissions.",
            author: "Green Park School",
            role: "School Application"
        },
        {
            id: 3,
            text: "The website is beautiful and perfectly matches our bridal brand. Clients connect with our work easily now.",
            author: "Say Bridals",
            role: "Bridal Studio and makeups"
        }
    ];

    const projects = [
        {
            id: 1,
            title: "Divya Makeovers",
            description: "Full-stack e-commerce solution with advanced inventory management, payment integration, and real-time analytics dashboard.",
            category: "Web App",
            image: webImageOne,
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            stats: {
                timeline: "1.5 Months",
                performance: "99.9%"
            }
        },
        {
            id: 2,
            title: "Green Park School",
            description: "Cross-platform School application with AI-powered workout recommendations and social features.",
            category: "Mobile App",
            image: webImageTwo,
            tech: ["React Native", "Firebase", "AI/ML", "Redux"],
            stats: {
                timeline: "2 Months",
                performance: "4.9 Rating"
            }
        },
        {
            id: 3,
            title: "Say Bridal Studio",
            description: "Enterprise-Web application for appointment and tracking systems.",
            category: "Enterprise Web",
            image: webImageThree,
            tech: ["Vue.js", "Python", "PostgreSQL", "AWS"],
            stats: {
                timeline: "1.5 Months",
                performance: "100k Users"
            }
        }
    ];

    // Web development related images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "UI/UX Design",
            description: "Creating intuitive user interfaces and seamless user experiences"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Testing & Quality",
            description: "Rigorous testing ensuring flawless application performance"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Cloud Deployment",
            description: "Scalable cloud infrastructure and deployment solutions"
        }
    ];

    // Handle image load events
    const handleImageLoad = (imageName) => {
        setLoadedImages(prev => ({
            ...prev,
            [imageName]: true
        }));
    };

    const handleImageError = (imageName) => {
        console.error(`Error loading image: ${imageName}`);
        setLoadedImages(prev => ({
            ...prev,
            [imageName]: false
        }));
    };

    // Handle slide change
    useEffect(() => {
        if (feedbackTrackRef.current) {
            feedbackTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

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

    // Handle image animation when expanded
    useEffect(() => {
        if (isExpanded) {
            // Show images one by one with delay
            const timeouts = [];
            extraImages.forEach((img, index) => {
                const timeout = setTimeout(() => {
                    setVisibleImages(prev => [...prev, img.id]);
                }, index * 300); // 300ms delay between each image
                timeouts.push(timeout);
            });

            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
            // Clear all images when collapsed
            setVisibleImages([]);
        }
    }, [isExpanded]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
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

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <div>
                <Helmet>
                    <title>Engloray</title>
                    <meta name="description" content="Master the MERN stack (MongoDB, Express, React, Node.js) through real projects ." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    {/* <link rel="canonical" href="https://yourapp.com" /> */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Your App | Config" />
                    <meta property="og:description" content="Lorem Ipsum" />
                    {/* <meta property="og:url" content="https://yourapp.com" /> */}
                </Helmet>

                <div className="awd-page" id='appWebPage'>
                    <TopNavBar />
                    <TwoLineNavbar />
                    {/* Hero Section */}
                    <section className="awd-hero-section">
                        <div className="awd-hero-bg"></div>
                        <div className="awd-hero-overlay"></div>
                        <div className="awd-container">
                            <div className="awd-hero-content">
                                <span className="awd-hero-badge">Web Development</span>
                                <h1 className="awd-hero-title">Crafting Digital Solutions That Drive Business Growth</h1>
                                <h2 className="awd-hero-subtitle">Full-Stack Development Services for Modern Businesses</h2>
                                <p className="awd-hero-description">
                                    We build scalable, high-performance web and mobile applications using cutting-edge technologies.
                                    Our development team transforms ideas into robust digital products that deliver exceptional user
                                    experiences and measurable business results.
                                </p>
                                <div className="awd-tech-stack">
                                    <span className="awd-tech-item">React & React Native</span>
                                    <span className="awd-tech-item">Node.js & Python</span>
                                    <span className="awd-tech-item">Cloud Architecture</span>
                                    <span className="awd-tech-item">UI/UX Design</span>
                                    <span className="awd-tech-item">DevOps & CI/CD</span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section */}
                    <section className={`awd-about-section ${isExpanded ? 'awd-image-scroll' : ''}`}>
                        <div className="awd-container">
                            <div className="awd-about-content">
                                <div className="awd-about-text">
                                    <h2 className="awd-about-title">Why Choose ENGLORAY for Development?</h2>
                                    <p className="awd-about-description">
                                        We specialize in creating custom web and mobile applications that solve complex business challenges.
                                        Our agile development approach ensures timely delivery while maintaining the highest quality standards.
                                    </p>
                                    <ul className="awd-about-points">
                                        <li className="awd-about-point">Full-cycle development from concept to deployment</li>
                                        <li className="awd-about-point">Scalable solutions that grow with your business</li>
                                        <li className="awd-about-point">Focus on performance, security, and user experience</li>
                                        <li className="awd-about-point">Cross-platform development for wider reach</li>
                                        <li className="awd-about-point">Ongoing support and maintenance services</li>
                                    </ul>

                                    <button
                                        className={`awd-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                        onClick={handleReadMore}
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                        <span className="awd-arrow">↓</span>
                                    </button>

                                    <div className={`awd-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                        <div className="awd-expanded-paragraphs">
                                            <p>
                                                <strong>Technical Architecture:</strong> Our development process begins with a comprehensive
                                                technical assessment and architecture planning. We design scalable systems that can handle
                                                growth while maintaining optimal performance and security standards.
                                            </p>
                                            <p>
                                                <strong>Agile Development:</strong> We utilize modern development methodologies including
                                                Agile and Scrum to ensure flexibility and adaptability. Regular sprints and continuous
                                                integration ensure transparent progress and timely delivery.
                                            </p>
                                            <p>
                                                <strong>Quality Assurance:</strong> Every application undergoes rigorous testing including
                                                unit testing, integration testing, and user acceptance testing. We implement automated
                                                testing pipelines to ensure code quality and reliability.
                                            </p>
                                            <p>
                                                <strong>Deployment & DevOps:</strong> We provide complete DevOps solutions with CI/CD pipelines,
                                                cloud deployment, and ongoing monitoring. Our team ensures smooth deployment and 24/7
                                                monitoring for optimal application performance.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="awd-about-images-column">
                                    {/* Main Image */}
                                    <div className="awd-about-image-main">
                                        <img
                                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                            alt="App Development Team"
                                        />
                                        <div className="awd-image-overlay">
                                            <h3>Expert Development Team</h3>
                                            <p>Our team of 50+ developers, designers, and engineers delivering excellence since 2018</p>
                                        </div>
                                    </div>

                                    {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                                    <div className={`awd-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                        {extraImages.map((image) => (
                                            <div
                                                key={image.id}
                                                className={`awd-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                            >
                                                <div className="awd-fill-image-wrapper">
                                                    <img src={image.url} alt={image.title} />
                                                    <div className="awd-fill-image-overlay">
                                                        <h4>{image.title}</h4>
                                                        <p>{image.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Projects Section */}
                    <section className="awd-projects-section">
                        <div className="awd-container">
                            <div className="awd-section-header">
                                <h2 className="awd-section-title">Featured Projects</h2>
                                <p className="awd-section-subtitle">
                                    Real-world solutions delivering exceptional results for our clients
                                </p>
                            </div>

                            <div className="awd-projects-grid">
                                {projects.map((project, index) => (
                                    <div className="awd-project-card" key={project.id}>
                                        <div className="awd-project-image">
                                            {/* First image debugging */}
                                            {project.id === 1 ? (
                                                <>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        onLoad={() => handleImageLoad('webImageOne')}
                                                        onError={() => handleImageError('webImageOne')}
                                                        style={{
                                                            border: !loadedImages.webImageOne ? '2px solid red' : 'none',
                                                            backgroundColor: !loadedImages.webImageOne ? '#f0f0f0' : 'transparent'
                                                        }}
                                                    />
                                                    {!loadedImages.webImageOne && (
                                                        <div className="awd-image-fallback" style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            left: 0,
                                                            right: 0,
                                                            bottom: 0,
                                                            backgroundColor: '#f0f0f0',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#666',
                                                            fontFamily: 'Arial',
                                                            fontSize: '14px'
                                                        }}>
                                                            <div>
                                                                <p>Loading image...</p>
                                                                <p>Path: {typeof project.image === 'string' ? project.image : 'Imported module'}</p>
                                                                <p>Check if file exists at: assets/case study images/websites/divya Makeovers.jpg</p>
                                                            </div>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    onLoad={() => handleImageLoad(`webImage${index + 1}`)}
                                                    onError={() => handleImageError(`webImage${index + 1}`)}
                                                />
                                            )}
                                            <span className="awd-project-category">{project.category}</span>
                                        </div>
                                        <div className="awd-project-content">
                                            <h3 className="awd-project-title">{project.title}</h3>
                                            <p className="awd-project-description">{project.description}</p>

                                            <div className="awd-project-tech">
                                                {project.tech.map((tech, index) => (
                                                    <span className="awd-tech-tag" key={index}>{tech}</span>
                                                ))}
                                            </div>

                                            <div className="awd-project-stats">
                                                <div className="awd-project-stat">
                                                    <span className="awd-stat-number">{project.stats.timeline}</span>
                                                    <span className="awd-stat-label">Development Time</span>
                                                </div>
                                                <div className="awd-project-stat">
                                                    <span className="awd-stat-number">{project.stats.performance}</span>
                                                    <span className="awd-stat-label">Performance</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Feedback Section - WIDER LIKE BRANDING - AVATAR REMOVED */}
                    <section className="awd-feedback-section">
                        <div className="awd-container awd-feedback-container-wide">
                            <div className="awd-section-header">
                                <h2 className="awd-section-title">Client Success Stories</h2>
                                <p className="awd-section-subtitle">
                                    Hear what our clients have to say about working with ENGLORAY
                                </p>
                            </div>

                            <div className="awd-feedback-wrapper-wide">
                                {/* Left Button */}
                                <button
                                    className="awd-feedback-nav-btn awd-feedback-prev"
                                    onClick={handlePrevSlide}
                                    aria-label="Previous feedback"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>

                                {/* Feedback Slider - WIDER */}
                                <div className="awd-feedback-slider-wide">
                                    <div className="awd-feedback-track" ref={feedbackTrackRef}>
                                        {feedbacks.map((feedback) => (
                                            <div key={feedback.id} className="awd-feedback-slide">
                                                <div className="awd-feedback-card-wide">
                                                    <div className="awd-feedback-content">
                                                        <div className="awd-feedback-quote">"</div>
                                                        <p className="awd-feedback-text-wide">{feedback.text}</p>

                                                        {/* AUTHOR INFO WITHOUT AVATAR */}
                                                        <div className="awd-feedback-author-simple">
                                                            <div className="awd-author-info-simple">
                                                                <h4>{feedback.author}</h4>
                                                                <p>{feedback.role}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Button */}
                                <button
                                    className="awd-feedback-nav-btn awd-feedback-next"
                                    onClick={handleNextSlide}
                                    aria-label="Next feedback"
                                >
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>

                            {/* Dots */}
                            <div className="awd-slider-dots">
                                {feedbacks.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`awd-slider-dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
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
