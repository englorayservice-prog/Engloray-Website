import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './BrandingAndIdentity.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

const BrandingAndIdentity = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    const pageData = {
        id: 3,
        title: "BRANDING & IDENTITY DESIGN",
        shortDescription: "Create Memorable Brand that Resonate with Your Audience",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Logo Creation", "Iconography", "Social Media Branding", "Visual Style"],
        duration: "2-4 weeks",
        projects: "50+ completed logo",
        logo: "📱"
    };

    const feedbacks = [
        {
            id: 1,
            text: "“Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well.” ",
            author: " ECEC SKILL SCHOOL (2025) ",
        },
        {
            id: 2,
            text: " “Promotional designs were eye-catching and effective. We saw a clear increase in walk-in customers.”  ",
            author: "Aquatic Land (2025)  ",
        },
        {
            id: 3,
            text: "“The promotional creatives were attractive and perfectly suited our food brand. Customer engagement improved noticeably.”  ",
            author: " Isha Bites (2025)  ",
        }
    ];

    // Related branding & identity images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Brand Strategy Workshop",
            description: "Collaborative brainstorming sessions to define brand vision and positioning"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Design Process",
            description: "Sketching and digital design creation for comprehensive brand identity"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Creative Studio",
            description: "Our design team working on innovative branding projects"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "Brand Identity Design",
            esc: "BID101",
            duration: "8 Weeks",
            description: "Create a powerful and memorable brand identity that communicates your values and connects with your audience.",
            logo: "💻",
            features: ["Logo Design & Visual Language", "Typography Systems", "Color Psychology & Brand Palette", "Brand Voice & Personality", "Iconography & Pattern Systems", "Complete Brand Guidelines"]
        },
        {
            id: 2,
            name: "Brand Strategy & Positioning",
            esc: "MAD201",
            duration: "12 Weeks",
            description: "Craft a compelling brand strategy that defines your value, differentiates you, and builds long-term trust.",
            logo: "📱",
            features: ["Brand Vision & Mission", "Audience Personas", "Value Proposition Design", "Competitive & Market Analysis", "Brand Messaging Framework", "Positioning Map & Tone Guidelines"]
        },
        {
            id: 3,
            name: "Packaging & Visual Communication Design",
            esc: "BAD301",
            duration: "10 Weeks",
            description: "Learn to design packaging and brand visuals that attract customers and elevate brand perception.",
            logo: "⚙️",
            features: ["Packaging Design Principles", "Mockups & 3D Visualizations", "Label & Product Design", "Retail Branding", "Visual Storytelling Assets", "Material Knowledge"]
        }
    ];

    useEffect(() => {
        if (feedbackTrackRef.current) {
            feedbackTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

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
        <div className="bi-page">
            <TopNavBar/>
            <Navbar/>
            {/* Hero Section */}
            <section className="bi-hero-section">
                <div className="bi-hero-bg"></div>
                <div className="bi-hero-overlay"></div>

                <div className="bi-container">
                    <div className="bi-hero-content">
                        <div className="bi-hero-content-inner">
                            <span className="bi-hero-badge">Branding & Identity Design</span>

                            <h1 className="bi-hero-title">{pageData.title}</h1>
                            <h2 className="bi-hero-subtitle">{pageData.shortDescription}</h2>

                            <p className="bi-hero-description">
                                Branding & Identity Design helps businesses create a distinctive visual presence,
                                build strong recognition, communicate values effectively and establish a cohesive,
                                memorable brand experience across all touchpoints.
                            </p>

                            <div className="bi-tech-stack">
                                {pageData.features.map((feature, index) => (
                                    <span key={index} className="bi-tech-item">{feature}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Updated with image expansion */}
            <section className={`bi-about-section ${isExpanded ? 'bi-image-scroll' : ''}`}>
                <div className="bi-container">
                    <div className="bi-about-content">

                        <div className="bi-about-text">
                            <h2 className="bi-about-title">Why Choose Our Branding & Design Service?</h2>

                            <p className="bi-about-description">
                                Branding and design establish a unified identity, communicate core values,
                                strengthen customer trust, and create impactful visual experiences that
                                elevate brand presence and drive long-term audience connection.
                            </p>

                            <p className="bi-about-description">
                                With over {pageData.projects} projects completed and an average timeline of
                                {pageData.duration}, we have the expertise to handle projects of any scale.
                            </p>

                            <button
                                className={`bi-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="bi-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>

                            <div className={`bi-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="bi-expanded-paragraphs">

                                    <p>
                                        <strong>Logo Design:</strong> A logo captures a brand's personality and values,
                                        creates instant recognition, and serves as the foundation for your identity.
                                    </p>

                                    <p>
                                        <strong>Color Palette:</strong> Defines emotional tone and visual consistency.
                                        Carefully chosen colours influence perception and enhance memorability.
                                    </p>

                                    <p>
                                        <strong>Typography:</strong> Shapes how a brand communicates visually.
                                        Fonts reflect personality, improve readability, and unify marketing materials.
                                    </p>

                                    <p>
                                        <strong>Visual Style & Imagery:</strong> Includes imagery, icons, shapes, and layout.
                                        Creates recognizable aesthetics and enhances storytelling.
                                    </p>
                                    
                                    <p>
                                        <strong>Environmental & Spatial Branding:</strong> Translates the brand identity into physical,
                                        three-dimensional spaces. It shapes customer experience, reinforces brand values.
                                    </p>

                                    <p>
                                        <strong>Motion & Interaction Design:</strong> Defines how visual elements move and respond to user input. It adds dynamism.
                                    </p>

                                    <p>
                                        <strong>Brand Archetype:</strong> Serves as the foundational personality model for a brand
                                        It creates a deep, universal human connection.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="bi-about-images-column">
                            {/* Main Image */}
                            <div className="bi-about-image-main">
                                <img
                                    src="https://mdrtresourcezone.blob.core.windows.net/web-site/image/473dbdd5614946d4846894ca3d449493/PH__Written_Interview_Using_LinkedIn_to_build_your_professional_brand_and_connect_with_prospects_Aug.jpg"
                                    alt="Branding Team"
                                />

                                <div className="bi-image-overlay">
                                    <h3>Expert Design Team</h3>
                                    <p>Our team of 50+ designers & strategists delivering excellence since 2018</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`bi-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`bi-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="bi-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="bi-fill-image-overlay">
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

            {/* Courses */}
            <section className="bi-courses-section">
                <div className="bi-container">

                    <div className="bi-section-header">
                        <h2 className="bi-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="bi-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="bi-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="bi-course-card" key={course.id}>

                                <div className="bi-course-header">
                                    <div className="bi-course-logo">{course.logo}</div>
                                    <h3 className="bi-course-title">{course.name}</h3>
                                    <p className="bi-course-desc">{course.description}</p>
                                </div>

                                <div className="bi-course-features">
                                    <ul className="bi-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="bi-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bi-course-details">

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Course Code</div>
                                        <div className="bi-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Duration</div>
                                        <div className="bi-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Projects</div>
                                        <div className="bi-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>

            {/* Feedback */}
            <section className="bi-feedback-section">
                <div className="bi-container">

                    <div className="bi-section-header">
                        <h2 className="bi-section-title2">Client Success Stories</h2>
                        <p className="bi-section-subtitle2">
                            Hear what our clients have to say about our branding services.
                        </p>
                    </div>

                    <div className="bi-feedback-slider">

                        <div className="bi-slider-arrows">
                            <button className="bi-slider-arrow" onClick={handlePrevSlide}>◀</button>
                            <button className="bi-slider-arrow" onClick={handleNextSlide}>▶</button>
                        </div>

                        <div className="bi-feedback-track" ref={feedbackTrackRef}>

                            {feedbacks.map((feedback) => (
                                <div className="bi-feedback-slide" key={feedback.id}>

                                    <div className="bi-feedback-card">
                                        <div className="bi-feedback-quote">"</div>

                                        <p className="bi-feedback-text">{feedback.text}</p>

                                        <div className="bi-feedback-author">
                                            <div className="bi-author-info">
                                                <h4>{feedback.author}</h4>
                                                <p>{feedback.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>

                        <div className="bi-slider-nav">

                            {feedbacks.map((_, index) => (
                                <button
                                    key={index}
                                    className={`bi-slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                />
                            ))}

                        </div>

                    </div>

                </div>
            </section>
            <TSPFFooter/>
            <BackToTop/>
        </div>
    );
};

export default BrandingAndIdentity;