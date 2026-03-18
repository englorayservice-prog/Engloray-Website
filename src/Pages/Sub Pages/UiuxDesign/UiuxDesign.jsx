import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './UiuxDesign.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

const UiuxDesign = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const testimonialTrackRef = useRef(null);

    // Page data
    const pageData = {
        id: 3,
        title: "UI/UX DESIGNS",
        shortDescription: "User-centered Designs that provide seamless experiences",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Visual Design", "User Experience (UX)", "Interaction Design", "Content Structure"],
        duration: "3-6 weeks",
        projects: "80+ completed",
        logo: "📱"
    };

    // Updated testimonials matching reference image format
    const testimonials = [
        {
            id: 1,
            text: "Very clean and professional UI/UX. The user flow is smooth and makes our services easy to understand.",
            clientName: "PAVIZHAM",
            company: "Pavizham jewellers (2025)"
        },
        {
            id: 2,
            text: "Navigation is smooth and the design feels modern. UI/UX improvements helped our website look more professional.",
            clientName: "ViaaN",
            company: "VIAAN Enterprises"
        },
        {
            id: 3,
            text: "After the UI/UX redesign, users easily understand our programs and membership details. Engagement has clearly improved.",
            clientName: "GYM LIFE",
            company: "Fitness & Wellness Group (2024)"
        },
        {
            id: 4,
            text: "The packaging feels authentic and natural. Our team captured the brand story perfectly through design.",
            clientName: "TAMIL NATURALS",
            company: "Tamil Naturals Food Products"
        }
    ];

    // Related UI/UX images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Wireframing & Prototyping",
            description: "Creating interactive prototypes and wireframes for user testing and validation"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "User Research & Testing",
            description: "Conducting user interviews, usability tests, and gathering actionable insights"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Design System Creation",
            description: "Building comprehensive design systems for consistent user interfaces"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "UI/UX Fundamentals",
            esc: "FWD101",
            duration: "12 Weeks",
            description: "User research wireframing user flows information architecture usability principles",
            logo: "💻",
            features: ["Figma", "Adobe XD", "Micro", "Whimsical", "Balsamiq", "Deployment"]
        },
        {
            id: 2,
            name: "Visual & Interaction Design",
            esc: "MAD201",
            duration: "10 Weeks",
            description: "Creating polished interfaces interaction patterns motion design component systems",
            logo: "📱",
            features: ["Figma Prototype", "Adobe Illustrator", "Adobe Photoshop", "Protopie", "Principle", "LottieFiles"]
        },
        {
            id: 3,
            name: "Web Development & Responsive Design",
            esc: "BAD301",
            duration: "8 Weeks",
            description: "HTML structure CSS styling responsive layouts animations UX-friendly components",
            logo: "⚙️",
            features: ["VS Code", "HTML & CSS", "Javascript", "Bootstrap & Tailwind", "React js", "Git & GitHub"]
        }
    ];

    // Handle slide change
    useEffect(() => {
        if (testimonialTrackRef.current) {
            testimonialTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    // Auto slide functionality
    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, testimonials.length]);

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
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="ui-page">
            <TopNavBar/>
            <Navbar/>
            
            {/* Hero Section */}
            <section className="ui-hero-section">
                <div className="ui-hero-bg"></div>
                <div className="ui-hero-overlay"></div>
                <div className="ui-container">
                    <div className="ui-hero-content">
                        <div className="ui-hero-content-inner">
                            <span className="ui-hero-badge">UI/UX DESIGNS</span>
                            <h1 className="ui-hero-title">{pageData.title}</h1>
                            <h2 className="ui-hero-subtitle">{pageData.shortDescription}</h2>
                            <p className="ui-hero-description">
                               Website and UI/UX design focuses on creating visually appealing user-friendly interfaces that enhance
                               navigation, improve user experience, boost engagement and deliver seamless functionality 
                               across devices for modern digital interactions.
                            </p>
                            <div className="ui-tech-stack">
                                {pageData.features.map((feature, index) => (
                                    <span key={index} className="ui-tech-item">{feature}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section - Updated with image expansion */}
            <section className={`ui-about-section ${isExpanded ? 'ui-image-scroll' : ''}`}>
                <div className="ui-container">
                    <div className="ui-about-content">
                        <div className="ui-about-text">
                            <h2 className="ui-about-title">Why Choose Our Website & UI/UX Design Services?</h2>
                            <p className="ui-about-description">
                               We design modern, user-friendly websites with clean UI/UX that enhance brand identity, improve customer experience,
                               ensure seamless navigation, and drive better engagement, helping your business stand out and grow online.
                            </p>
                            <p className="ui-about-description">
                                With over {pageData.projects} projects completed and an average development 
                                timeline of {pageData.duration}, we have the expertise to handle projects 
                                of any scale and complexity.
                            </p>
                            
                            <button 
                                className={`ui-read-more-btn ${isExpanded ? 'expanded' : ''}`}
                                onClick={handleReadMore}
                            >
                                {isExpanded ? 'Read Less' : 'Read More'}
                                <span className="ui-arrow">{isExpanded ? '▲' : '▼'}</span>
                            </button>
                            
                            <div className={`ui-expanded-content ${isExpanded ? 'expanded' : ''}`}>
                                <div className="ui-expanded-paragraphs">
                                    <p>
                                        <strong>User Experience (UX) Design:</strong> Crafting intuitive user flows,
                                         logical structure and seamless interactions to ensure visitors easily understand,
                                         navigate and complete tasks while maintaining an enjoyable, efficient and frustration-free
                                         experience across all devices.
                                    </p>
                                    <p>
                                        <strong>User Interface (UI) Design:</strong> Designing visually appealing
                                         layouts with balanced colors, typography, spacing and components that enhance brand identity,
                                         improve clarity and create a polished, consistent interface users find engaging and
                                         easy to interact with.
                                    </p>
                                    <p>
                                        <strong>Responsive Web Design:</strong> Building websites that automatically adapt
                                         to different screen sizes ensuring layouts, text and visuals display perfectly on mobile,
                                         tablet and desktop devices for a smooth professional browsing experience.
                                    </p>
                                    <p>
                                        <strong>Interaction & Visual Design:</strong> Creating meaningful interactions
                                        through animations, hover effects, transitions and micro-interactions while refining interactions,
                                        imagery and visual elements to enhance attention, user satisfaction and overall interface engagement.
                                    </p>
                                    <p>
                                        <strong>Information Architecture:</strong> Organizing and structuring content in a logical,
                                        intuitive manner. Creating clear navigation systems, content hierarchies, and labeling systems
                                        that help users find information quickly and efficiently.
                                    </p>
                                    <p>
                                        <strong>Usability Testing & User Research:</strong> Conducting thorough user research through
                                        interviews, surveys, and usability testing sessions. Gathering insights to validate design decisions,
                                        identify pain points, and continuously improve the user experience based on real user feedback.
                                    </p>

                                </div>
                            </div>
                        </div>
                        
                        <div className="ui-about-images-column">
                            {/* Main Image */}
                            <div className="ui-about-image-main">
                                <img 
                                    src="https://mastercaweb.u-strasbg.fr/wp-content/uploads/2022/08/5726865-edited-scaled.jpg" 
                                    alt="UI/UX Design Team" 
                                />
                                <div className="ui-image-overlay">
                                    <h3>Expert UI/UX Team</h3>
                                    <p>Our team of 50+ designers, researchers, and developers delivering excellence since 2018</p>
                                </div>
                            </div>
                            
                            {/* Extra Images Section - SAME SIZE AS MAIN IMAGE */}
                            <div className={`ui-extra-images-fill ${isExpanded ? 'show' : ''}`}>
                                {extraImages.map((image) => (
                                    <div 
                                        key={image.id} 
                                        className={`ui-extra-image-fill ${visibleImages.includes(image.id) ? 'visible' : ''}`}
                                    >
                                        <div className="ui-fill-image-wrapper">
                                            <img src={image.url} alt={image.title} />
                                            <div className="ui-fill-image-overlay">
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
            <section className="ui-courses-section">
                <div className="ui-container">
                    <div className="ui-section-header">
                        <h2 className="ui-section-title">Internship & Training Programs</h2>
                        <p className="ui-section-subtitle">
                            Comprehensive courses designed to train the next generation of UI/UX designers and developers
                        </p>
                    </div>
                    
                    <div className="ui-courses-grid">
                        {internshipCourses.map((course) => (
                            <div className="ui-course-card" key={course.id}>
                                <div className="ui-course-header">
                                    <div className="ui-course-logo">{course.logo}</div>
                                    <h3 className="ui-course-title">{course.name}</h3>
                                    <p className="ui-course-desc">{course.description}</p>
                                </div>
                                
                                <div className="ui-course-features">
                                    <ul className="ui-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="ui-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                
                                <div className="ui-course-details">
                                    <div className="ui-detail-item">
                                        <div className="ui-detail-label">Course Code</div>
                                        <div className="ui-detail-value">{course.esc}</div>
                                    </div>
                                    <div className="ui-detail-item">
                                        <div className="ui-detail-label">Duration</div>
                                        <div className="ui-detail-value">{course.duration}</div>
                                    </div>
                                    <div className="ui-detail-item">
                                        <div className="ui-detail-label">Projects</div>
                                        <div className="ui-detail-value">5+</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section - Updated to match reference image */}
            <section className="ui-feedback-section">
                <div className="ui-container">
                    <div className="ui-testimonial-header">
                        <h2 className="ui-testimonial-title">CLIENT SUCCESS STORIES</h2>
                        <p className="ui-testimonial-subtitle">
                            Hear what our clients have to say about our UI/UX design services
                        </p>
                    </div>
                    
                    <div className="ui-testimonial-slider">
                        <div className="ui-slider-arrows">
                            <button className="ui-slider-arrow" onClick={handlePrevSlide} aria-label="Previous testimonial">
                                ◀
                            </button>
                            <button className="ui-slider-arrow" onClick={handleNextSlide} aria-label="Next testimonial">
                                ▶
                            </button>
                        </div>
                        
                        <div className="ui-testimonial-track" ref={testimonialTrackRef}>
                            {testimonials.map((testimonial) => (
                                <div className="ui-testimonial-slide" key={testimonial.id}>
                                    <div className="ui-testimonial-card">
                                        <div className="ui-testimonial-content">
                                            <p className="ui-testimonial-text">{testimonial.text}</p>
                                            
                                            <div className="ui-client-info-box">
                                                <h3 className="ui-client-name">{testimonial.clientName}</h3>
                                                <p className="ui-client-company">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="ui-slider-nav">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`ui-slider-dot ${currentSlide === index ? 'active' : ''}`}
                                    onClick={() => handleDotClick(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
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

export default UiuxDesign;