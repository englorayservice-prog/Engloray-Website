
content = """import React, { useState, useEffect, useRef } from 'react';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './SoftwareAppDev.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
import { Helmet } from 'react-helmet';

const SoftwareAppDev = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const feedbackTrackRef = useRef(null);

    // Page data
    const pageData = {
        id: 3,
        title: "SOFTWARE & APP DEVELOPMENT",
        shortDescription: "Custom software solutions and mobile applications",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Web Applications", "Mobile Apps", "Custom Software", "API Integration"],
        duration: "4-12 weeks",
        projects: "120+ completed",
        logo: "📱"
    };

    const feedbacks = [
        {
            id: 1,
            text: "“The website is clear, informative, and easy for parents to use. Very helpful for communication and admissions.”",
            author: "Green Park School (2025)",
        },
        {
            id: 2,
            text: "“The website looks trustworthy and professional. Patients can easily understand our services now.”",
            author: "Aara Lab (2025)",
        },
        {
            id: 3,
            text: "“Simple and effective website. ENGLORAY helped us get online inquiries quickly.”",
            author: "Mitt Travels (2025)",
        }
    ];

    // Related software development images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Agile Development Process",
            description: "Our team follows agile methodologies for iterative development and continuous delivery"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Code Review & Quality Assurance",
            description: "Rigorous testing and code review processes ensure high-quality, bug-free software"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Deployment & DevOps",
            description: "Seamless deployment pipelines and cloud infrastructure management"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "Full-Stack Web Development",
            esc: "FWD101",
            duration: "12 Weeks",
            description: "Master modern web development with React, Node.js, and databases",
            logo: "💻",
            features: ["React & Redux", "Node.js & Express", "MongoDB", "REST APIs", "Authentication", "Deployment"]
        },
        {
            id: 2,
            name: "Mobile App Development",
            esc: "MAD201",
            duration: "10 Weeks",
            description: "Build cross-platform mobile applications with React Native",
            logo: "📱",
            features: ["React Native", "Expo", "Firebase", "State Management", "Native Features", "App Store Deployment"]
        },
        {
            id: 3,
            name: "Backend & API Development",
            esc: "BAD301",
            duration: "8 Weeks",
            description: "Learn server-side programming and API design",
            logo: "⚙️",
            features: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Microservices", "Cloud Deployment"]
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
                <div className="sad-page">
                    <Helmet>
                        <title>Engloray</title>
                        <meta name="description" content="Develop production-level software using modern frameworks, and industry best practices." />
                        <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                        {/* <link rel="canonical" href="https://yourapp.com" /> */}
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Your App | Config" />
                        <meta property="og:description" content="Lorem Ipsum" />
                        {/* <meta property="og:url" content="https://yourapp.com" /> */}
                    </Helmet>


                    <TopNavBar />
                    <Navbar />

                    {/* Hero Section */}
                    <section className="sad-hero-section">
                        <div className="sad-hero-bg"></div>
                        <div className="sad-hero-overlay"></div>
                        <div className="sad-container">
                            <div className="sad-hero-content">
                                <div className="sad-hero-content-inner">
                                    <span className="sad-hero-badge">Software & App Development</span>
                                    <h1 className="sad-hero-title">{pageData.title}</h1>
                                    <h2 className="sad-hero-subtitle">{pageData.shortDescription}</h2>
                                    <p className="sad-hero-description">
                                        We specialize in creating custom software solutions and mobile applications
                                        that solve complex business challenges. Our development team transforms
                                        ideas into robust digital products that deliver exceptional user experiences
                                        and measurable business results.
                                    </p>
                                    <div className="sad-tech-stack">
                                        {pageData.features.map((feature, index) => (
                                            <span key={index} className="sad-tech-item">{feature}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* About Section - Updated with image expansion */}
                    <section className={`sad-about-section ${isExpanded ? 'sad-image-scroll' : ''}`}>
                        <div className="sad-container">
                            <div className="sad-about-content">
                                <div className="sad-about-text">
                                    <h2 className="sad-about-title">Why Choose Our Development Services?</h2>
                                    <p className="sad-about-description">
                                        We provide end-to-end software and app development services, from initial
                                        concept to deployment and maintenance. Our agile approach ensures timely
                                        delivery while maintaining the highest quality standards.
                                    </p>
                                    <p className="sad-about-description">
                                        With over {pageData.projects} projects completed and an average development
                                        timeline of {pageData.duration}, we have the expertise to handle projects
                                        of any scale and complexity.
                                    </p>

                                    <button
                                        className={`sad-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                        onClick={handleReadMore}
                                    >
                                        {isExpanded ? 'Read Less' : 'Read More'}
                                        <span className="sad-arrow">{isExpanded ? '▲' : '▼'}</span>
                                    </button>

                                    <div className={`sad-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                        <div className="sad-expanded-paragraphs">
                                            <p>
                                                <strong>Custom Software Development:</strong> We build bespoke software
                                                solutions tailored to your specific business needs. Whether you need
                                                a CRM system, inventory management software, or a complex enterprise
                                                application, we have the expertise to deliver.
                                            </p>
                                            <p>
                                                <strong>Mobile App Development:</strong> From iOS to Android to
                                                cross-platform solutions, we create mobile applications that provide
                                                seamless user experiences. Our apps are optimized for performance,
                                                security, and scalability.
                                            </p>
                                            <p>
                                                <strong>Web Application Development:</strong> We develop responsive
                                                and dynamic web applications using modern frameworks and technologies.
                                                Our web apps are built with user experience and business functionality
                                                as top priorities.
                                            </p>
                                            <p>
                                                <strong>API Integration:</strong> We specialize in integrating third-party
                                                APIs and developing custom APIs to connect your software with other
                                                systems and services, creating a cohesive digital ecosystem.
                                            </p>
                                            <p>
                                                <strong>Agile Development Methodology:</strong> We follow Agile practices
                                                with sprints, daily stand-ups, and regular client feedback sessions. This
                                                ensures transparency, flexibility, and the ability to adapt to changing
                                                requirements throughout the development process.
                                            </p>
                                            <p>
                                                <strong>Quality Assurance & Testing:</strong> Our comprehensive testing
                                                strategy includes unit testing, integration testing, and user acceptance
                                                testing. We ensure bug-free, reliable software that performs well under
                                                various conditions and loads.
                                            </p>
                                            <p>
                                                <strong>DevOps & Continuous Deployment:</strong> We implement CI/CD
                                                pipelines for automated testing and deployment. Our DevOps practices
                                                ensure smooth releases, quick rollbacks, and minimal downtime during
                                                updates.
                                            </p>

                                        </div>
                                    </div>
                                </div>

                                <div className="sad-about-images-column">
                                    {/* Main Image */}
                                    <div className="sad-about-image-main">
                                        <img
                                            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                                            alt="Software Development Team"
                                        />
                                        <div className="sad-image-overlay">
                                            <h3>Expert Development Team</h3>
                                            <p>Our team of 50+ developers, designers, and engineers delivering excellence since 2018</p>
                                        </div>
                                    </div>

                                    {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                                    <div className={`sad-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                        {extraImages.map((image) => (
                                            <div
                                                key={image.id}
                                                className={`sad-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                            >
                                                <div className="sad-fill-image-wrapper">
                                                    <img src={image.url} alt={image.title} />
                                                    <div className="sad-fill-image-overlay">
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

                    {/* Internship Courses Section */}
                    <section className="sad-courses-section">
                        <div className="sad-container">
                            <div className="sad-section-header">
                                <h2 className="sad-section-title">Internship & Training Programs</h2>
                                <p className="sad-section-subtitle">
                                    Comprehensive courses designed to train the next generation of software developers
                                </p>
                            </div>

                            <div className="sad-courses-grid">
                                {internshipCourses.map((course) => (
                                    <div className="sad-course-card" key={course.id}>
                                        <div className="sad-course-header">
                                            <div className="sad-course-logo">{course.logo}</div>
                                            <h3 className="sad-course-title">{course.name}</h3>
                                            <p className="sad-course-desc">{course.description}</p>
                                        </div>

                                        <div className="sad-course-features">
                                            <ul className="sad-features-list">
                                                {course.features.map((feature, index) => (
                                                    <li key={index} className="sad-feature-item">{feature}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="sad-course-details">
                                            <div className="sad-detail-item">
                                                <div className="sad-detail-label">Course Code</div>
                                                <div className="sad-detail-value">{course.esc}</div>
                                            </div>
                                            <div className="sad-detail-item">
                                                <div className="sad-detail-label">Duration</div>
                                                <div className="sad-detail-value">{course.duration}</div>
                                            </div>
                                            <div className="sad-detail-item">
                                                <div className="sad-detail-label">Projects</div>
                                                <div className="sad-detail-value">5+</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Feedback Section */}
                    <section className="sad-feedback-section">
                        <div className="sad-container">
                            <div className="sad-section-header">
                                <h2 className="sad-section-title1">Client Success Stories</h2>
                                <p className="sad-section-subtitle1">
                                    Hear what our clients have to say about our software development services
                                </p>
                            </div>

                            <div className="sad-feedback-slider">
                                <div className="sad-slider-arrows">
                                    <button className="sad-slider-arrow" onClick={handlePrevSlide} aria-label="Previous testimonial">
                                        ◀
                                    </button>
                                    <button className="sad-slider-arrow" onClick={handleNextSlide} aria-label="Next testimonial">
                                        ▶
                                    </button>
                                </div>

                                <div className="sad-feedback-track" ref={feedbackTrackRef}>
                                    {feedbacks.map((feedback) => (
                                        <div className="sad-feedback-slide" key={feedback.id}>
                                            <div className="sad-feedback-card">
                                                <div className="sad-feedback-quote">"</div>
                                                <p className="sad-feedback-text">{feedback.text}</p>

                                                <div className="sad-feedback-author">
                                                    <div className="sad-author-info">
                                                        <h4>{feedback.author}</h4>
                                                        <p>{feedback.role}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="sad-slider-nav">
                                    {feedbacks.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`sad-slider-dot ${currentSlide === index ? 'active' : ''}`}
                                            onClick={() => handleDotClick(index)}
                                            aria-label={`Go to testimonial ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <TSPFFooter />
                    <BackToTop />
                </div>
            </div>
        </>
    );
};

export default SoftwareAppDev;"""

with open(r"d:\\Project-Engloray\\Engloray-Website-main\\src\\Pages\\Sub Pages\\SoftwareAppDev\\SoftwareAppDev.jsx", "w", encoding="utf-8") as f:
    f.write(content.strip())
