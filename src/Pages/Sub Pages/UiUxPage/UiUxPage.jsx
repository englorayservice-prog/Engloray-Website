import React, { useState, useEffect, useRef } from 'react';

import uiImageOne from '../../../assets/case study images/uiux/pavizham.jpg';
import uiImageTwo from '../../../assets/case study images/uiux/viaan.jpg';
import uiImageThree from '../../../assets/case study images/uiux/gym life.png';
import './UiUxPage.css';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const UiUxPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
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
            text: "Very clean and professional UI/UX. The user flow is smooth and makes our services easy to understand.",
            author: "Pavizham",
            role: "Pavizham Jewellery"
        },
        {
            id: 2,
            text: "Navigation is smooth and the design feels modern. UI/UX improvements helped our website look more professional",
            author: "Viaan",
            role: "viaan enterprises"
        },
        {
            id: 3,
            text: "After the UI/UX redesign, users easily understand our programs and membership details. Engagement has clearly improved",
            author: "Gym Life",
            role: "Fitness and wellness"
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
                engagement: "+145%"
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
                conversions: "+210%"
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
                satisfaction: "95%"
            }
        }
    ];

    // Related UI/UX images
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "User Research & Testing",
            description: "Comprehensive user testing sessions and research to inform design decisions"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Wireframing & Prototyping",
            description: "Interactive prototypes and wireframes for user testing and stakeholder feedback"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Design Systems",
            description: "Comprehensive design systems ensuring consistency across all platforms"
        }
    ];

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
                }, index * 300);
                timeouts.push(timeout);
            });

            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
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
        <div className="uiuxp-page" id='uiuxPage'>
            <TopNavBar />
            <TwoLineNavbar />
            {/* Hero Section - BLUE BACKGROUND */}
            <section className="uiuxp-hero-section">
                <div className="uiuxp-hero-bg" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)' }}></div>
                <div className="uiuxp-container">
                    <div className="uiuxp-hero-content">
                        <span className="uiuxp-hero-badge">UI/UX Design Services</span>
                        <h1 className="uiuxp-hero-title">Crafting Exceptional Digital Experiences</h1>
                        <h2 className="uiuxp-hero-subtitle">User-Centered Design for Maximum Engagement</h2>
                        <p className="uiuxp-hero-description">
                            We create intuitive, beautiful, and functional interfaces that connect users
                            with your product. Our human-centered design approach ensures every interaction
                            is meaningful and every journey is seamless.
                        </p>
                        <div className="uiuxp-services-stack">
                            <span className="uiuxp-service-item">User Research</span>
                            <span className="uiuxp-service-item">Wireframing</span>
                            <span className="uiuxp-service-item">Prototyping</span>
                            <span className="uiuxp-service-item">Visual Design</span>
                            <span className="uiuxp-service-item">Usability Testing</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className={`uiuxp-about-section ${isExpanded ? 'uiuxp-image-scroll' : ''}`}>
                <div className="uiuxp-container">
                    <div className="uiuxp-about-content">
                        <div className="uiuxp-about-text">
                            <h2 className="uiuxp-about-title">About Our UI/UX Design Process</h2>
                            <p className="uiuxp-about-description">
                                We follow a comprehensive design process that puts users at the center
                                of every decision. From research to final implementation, we ensure
                                your digital product is both beautiful and functional.
                            </p>
                            <ul className="uiuxp-about-points">
                                <li className="uiuxp-about-point">User Research & Persona Development</li>
                                <li className="uiuxp-about-point">Wireframing & Interactive Prototyping</li>
                                <li className="uiuxp-about-point">Visual Design & Design Systems</li>
                                <li className="uiuxp-about-point">Usability Testing & User Feedback</li>
                                <li className="uiuxp-about-point">Responsive Design & Implementation</li>
                            </ul>

                            <button
                                className={`uiuxp-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="uiuxp-arrow">↓</span>
                            </button>

                            <div className={`uiuxp-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="uiuxp-expanded-paragraphs">
                                    <p>
                                        <strong>User Research & Discovery:</strong> We start by understanding
                                        your users through interviews, surveys, and market analysis. This
                                        foundation helps us create detailed user personas and journey maps
                                        that guide our design decisions.
                                    </p>
                                    <p>
                                        <strong>Wireframing & Prototyping:</strong> We create low-fidelity
                                        wireframes to establish information architecture, then develop
                                        high-fidelity interactive prototypes for user testing and stakeholder
                                        feedback before final design implementation.
                                    </p>
                                    <p>
                                        <strong>Visual Design & Brand Integration:</strong> Our designers
                                        create visually stunning interfaces that align with your brand
                                        identity while ensuring optimal usability and accessibility
                                        standards across all platforms and devices.
                                    </p>
                                    <p>
                                        <strong>Design Systems & Component Libraries:</strong> We build
                                        comprehensive design systems that ensure consistency, scalability,
                                        and efficiency in design implementation across your entire product
                                        ecosystem.
                                    </p>
                                    <p>
                                        <strong>Usability Testing & Iteration:</strong> We conduct
                                        rigorous usability testing with real users to validate design
                                        decisions and continuously improve the user experience based
                                        on data-driven insights and feedback.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="uiuxp-about-images-column">
                            {/* Main Image */}
                            <div className="uiuxp-about-image-main">
                                <img
                                    src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="UI/UX Design Process"
                                />
                                <div className="uiuxp-image-overlay">
                                    <h3>Human-Centered Design Approach</h3>
                                    <p>Our team of 25+ UI/UX specialists delivering exceptional digital experiences</p>
                                </div>
                            </div>

                            {/* Extra Images Section */}
                            <div className={`uiuxp-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div
                                        key={image.id}
                                        className={`uiuxp-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="uiuxp-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="uiuxp-fill-image-overlay">
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
            <section className="uiuxp-projects-section">
                <div className="uiuxp-container">
                    <div className="uiuxp-section-header">
                        <h2 className="uiuxp-section-title">UI/UX Design Projects</h2>
                        <p className="uiuxp-section-subtitle">
                            Explore our successful design implementations across various industries
                        </p>
                    </div>

                    <div className="uiuxp-projects-grid">
                        {projects.map((project) => (
                            <div key={project.id} className="uiuxp-project-card">
                                <div className="uiuxp-project-image">
                                    <img src={project.image} alt={project.title} />
                                    <span className="uiuxp-project-category">{project.category}</span>
                                </div>
                                <div className="uiuxp-project-content">
                                    <h3 className="uiuxp-project-title">{project.title}</h3>
                                    <p className="uiuxp-project-description">{project.description}</p>
                                    <div className="uiuxp-project-stats">
                                        <div className="uiuxp-project-stat">
                                            <span className="uiuxp-stat-number">{project.stats.duration}</span>
                                            <span className="uiuxp-stat-label">Project Duration</span>
                                        </div>
                                        <div className="uiuxp-project-stat">
                                            <span className="uiuxp-stat-number">{project.stats.engagement || project.stats.conversions || project.stats.satisfaction || project.stats.efficiency}</span>
                                            <span className="uiuxp-stat-label">
                                                {project.stats.engagement ? 'Engagement Increase' :
                                                    project.stats.conversions ? 'Conversion Increase' :
                                                        project.stats.satisfaction ? 'User Satisfaction' :
                                                            'Efficiency Gain'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feedback Section - BLUE/PINK THEME */}
            <section className="uiuxp-feedback-section">
                <div className="uiuxp-container uiuxp-feedback-container-wide">
                    <div className="uiuxp-section-header">
                        <h2 className="uiuxp-section-title">Client Success Stories</h2>
                        <p className="uiuxp-section-subtitle">
                            Hear what our clients have to say about our UI/UX design services
                        </p>
                    </div>

                    <div className="uiuxp-feedback-wrapper-wide">
                        {/* Left Button */}
                        <button
                            className="uiuxp-feedback-nav-btn uiuxp-feedback-prev"
                            onClick={handlePrevSlide}
                            aria-label="Previous feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        {/* Feedback Slider */}
                        <div className="uiuxp-feedback-slider-wide">
                            <div className="uiuxp-feedback-track" ref={feedbackTrackRef}>
                                {feedbacks.map((feedback) => (
                                    <div key={feedback.id} className="uiuxp-feedback-slide">
                                        <div className="uiuxp-feedback-card-wide">
                                            <div className="uiuxp-feedback-content">
                                                <div className="uiuxp-feedback-quote">"</div>
                                                <p className="uiuxp-feedback-text-wide">{feedback.text}</p>

                                                {/* AUTHOR INFO */}
                                                <div className="uiuxp-feedback-author-simple">
                                                    <div className="uiuxp-author-info-simple">
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
                            className="uiuxp-feedback-nav-btn uiuxp-feedback-next"
                            onClick={handleNextSlide}
                            aria-label="Next feedback"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="uiuxp-slider-dots">
                        {feedbacks.map((_, index) => (
                            <button
                                key={index}
                                className={`uiuxp-slider-dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => handleDotClick(index)}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <MainPageSubFooter />
            <BackToTop />
        </div>
    );
};

export default UiUxPage;
