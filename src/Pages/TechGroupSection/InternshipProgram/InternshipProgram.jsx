import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faPalette,
    faDesktop,
    faUserCheck,
    faCode,
    faArrowRight,
    faCheckCircle,
    faPaperclip,
    faChevronLeft,
    faChevronRight,
    faChartLine,
    faBriefcase,
    faChalkboardTeacher
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './InternshipProgram.css';

// Add icons to the library
library.add(faPalette, faDesktop, faUserCheck, faCode, faArrowRight, faCheckCircle, faPaperclip, faChevronLeft, faChevronRight, faChartLine, faBriefcase, faChalkboardTeacher);

const InternshipProgram = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        position: '',
        preference: '',
        resume: null
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);
    const cardsRef = useRef([]);
    const headerRef = useRef(null);

    // Skills for each role (ordered by role index 0-6)
    const roleSkills = [
        ['Photoshop', 'Illustrator', 'Figma', 'Branding', 'Typography', 'Web Design'],
        ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js'],
        ['Figma', 'Adobe XD', 'Wireframing', 'User Research', 'Usability Testing', 'Design Systems'],
        ['Java', 'Spring Boot', 'Python', 'REST APIs', 'MySQL', 'Docker'],
        ['Communication', 'Lead Generation', 'CRM', 'Negotiation', 'Market Research', 'Pitching'],
        ['Strategy', 'Partnerships', 'Market Analysis', 'Sales Planning', 'Client Relations', 'Growth Hacking'],
        ['Public Speaking', 'Curriculum Design', 'Coaching', 'Evaluation', 'Leadership', 'Feedback']
    ];

    // Icon colors for each role
    const roleColors = {
        graphicDesigner: '#FFD166',
        websiteDeveloper: '#4ECDC4',
        uiUxDesigner: '#FFD166',
        softwareDeveloper: '#06D6A0',
        salesExecutive: '#FF4D4D',
        businessDevelopment: '#118AB2',
        trainingMentor: '#06D6A0',
        default: '#118AB2'
    };

    const roles = [
        {
            id: 1,
            title: "Graphic Designer",
            icon: faPalette,
            iconColor: roleColors.graphicDesigner,
            description: "Create stunning visual designs and branding materials that communicate brand identity effectively, engage audiences, enhance marketing campaigns, and deliver creative solutions.",
            route: "/GraphicDesignerInternPage"
        },
        {
            id: 2,
            title: "Website Developer",
            icon: faDesktop,
            iconColor: roleColors.websiteDeveloper,
            description: "Build responsive and interactive web applications using modern technologies, ensuring fast performance, user-friendly interfaces, secure functionality, and seamless experiences across devices.",
            route: "/websiteDeveloperInternPage"
        },
        {
            id: 3,
            title: "UI/UX Designer",
            icon: faUserCheck,
            iconColor: roleColors.uiUxDesigner,
            description: "Design intuitive user interfaces and user experiences that enhance usability, improve accessibility, engage users effectively, and create seamless digital interactions across platforms.",
            route: "/uiuxDesignerInternPage"
        },
        {
            id: 4,
            title: "Software Developer",
            icon: faCode,
            iconColor: roleColors.softwareDeveloper,
            description: "Develop robust software solutions and scalable applications using modern technologies, ensuring high performance, clean architecture, secure functionality, maintainability, and seamless integration.",
            route: "/SoftwareDeveloperInternPage"
        },
        {
            id: 5,
            title: "Sales Executive",
            icon: faChartLine,
            iconColor: roleColors.salesExecutive,
            description: "Drive revenue growth by developing sales strategies, identifying business opportunities, and managing client relationships effectively.",
            route: "/SalesExecutiveInternPage"
        },
        {
            id: 6,
            title: "Business Development Management",
            icon: faBriefcase,
            iconColor: roleColors.businessDevelopment,
            description: "Focus on strategic growth, partnerships, and expanding market presence to achieve long-term organizational objectives.",
            route: "/BusinessDevelopmentInternPage"
        },
        {
            id: 7,
            title: "Training Mentor",
            icon: faChalkboardTeacher,
            iconColor: roleColors.trainingMentor,
            description: "Lead comprehensive training sessions, mentor team members, and develop robust curriculums to empower professional development.",
            route: "/TrainingMentorInternPage"
        }
    ];

    // GSAP animation for smooth width transitioning
    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            if (!card) return;
            if (index === activeRoleIndex) {
                gsap.to(card, { flex: 4.5, duration: 0.6, ease: "power3.inOut" });
            } else {
                gsap.to(card, { flex: 1, duration: 0.6, ease: "power3.inOut" });
            }
        });
    }, [activeRoleIndex]);

    // Scroll animation for text content - works every time you scroll
    useEffect(() => {
        const animatedElements = [
            '.tgi-benefits-main-badge',
            '.tgi-internship-title',
            '.tgi-internship-step',
            '.tgi-internship-subtitle',
            '.tgi-view-programs-btn'
        ];

        const elements = document.querySelectorAll(animatedElements.join(','));

        // Initially hide all elements
        elements.forEach(el => {
            el.classList.remove('tgi-animated');
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add animated class when element comes into view
                    entry.target.classList.add('tgi-animated');
                } else {
                    // Remove animated class when element leaves viewport
                    entry.target.classList.remove('tgi-animated');
                }
            });
        }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    // Card content animation when active role changes
    useEffect(() => {
        const activeCard = document.querySelector('.tgi-role-card.active');
        if (activeCard) {
            const title = activeCard.querySelector('.tgi-role-title');
            const desc = activeCard.querySelector('.tgi-role-description');
            const skills = activeCard.querySelector('.tgi-skills-widget');
            const btn = activeCard.querySelector('.tgi-view-details-btn');

            // Reset animations by removing and re-adding classes
            if (title) {
                title.style.animation = 'none';
                void title.offsetHeight;
                title.style.animation = '';
            }
            if (desc) {
                desc.style.animation = 'none';
                void desc.offsetHeight;
                desc.style.animation = '';
            }
            if (skills) {
                skills.style.animation = 'none';
                void skills.offsetHeight;
                skills.style.animation = '';
            }
            if (btn) {
                btn.style.animation = 'none';
                void btn.offsetHeight;
                btn.style.animation = '';
            }
        }
    }, [activeRoleIndex]);

    const handleNextRole = () => {
        setActiveRoleIndex((prev) => (prev + 1) % roles.length);
    };

    const handlePrevRole = () => {
        setActiveRoleIndex((prev) => (prev - 1 + roles.length) % roles.length);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData();
            data.append("Name", formData.name);
            data.append("Email", formData.email);
            data.append("Role", formData.position);
            data.append("Mode", formData.preference);
            data.append("Resume", formData.resume);

            const response = await fetch(
                "https://localhost:8081/api/ButtonInternForm/submit",
                {
                    method: "POST",
                    body: data
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                alert(errorText);
                return;
            }

            setIsSubmitted(true);

            setTimeout(() => {
                setIsSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    position: '',
                    preference: '',
                    resume: null
                });
                setShowForm(false);
            }, 3000);

        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        }
    };

    const handleRoleClick = (role) => {
        if (role.route) {
            navigate(role.route);
        }
    };

    const handleArrowClick = () => {
        setShowForm(true);
    };

    const handleViewPrograms = () => {
        navigate('/allProgramsPage');
    };

    return (
        <section className="tgi-internship-program" id="internship">
            {/* Floating Arrow with FontAwesome Icon */}
            <div className="tgi-floating-arrow" onClick={handleArrowClick}>
                <div className="tgi-arrow-symbol">
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        style={{
                            color: '#fe0000fe',
                            fontSize: '1.5rem'
                        }}
                    />
                </div>
                <div className="tgi-arrow-glow"></div>
            </div>

            <div className="tgi-internship-container" id='internship'>
                {/* Header - Centered with scroll animations */}
                <div className="tgi-internship-header" ref={headerRef}>
                    <span className="tgi-benefits-main-badge">Career Opportunity</span>
                    <h2 className="tgi-internship-title">Free Internship Program</h2>
                    <div className="tgi-internship-step">
                        Create your first step with Engloray
                    </div>
                    <p className="tgi-internship-subtitle">
                        Join our intensive program designed to transform beginners into industry-ready professionals
                    </p>
                </div>

                {/* Available Roles - Accordion Cards */}
                <div className="tgi-roles-section">
                    <div className="tgi-roles-header">
                        <h3 className="tgi-section-title">Available Roles</h3>
                        <div className="tgi-roles-nav">
                            <button className="tgi-nav-btn" onClick={handlePrevRole}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <button className="tgi-nav-btn" onClick={handleNextRole}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                    <div className="tgi-roles-grid">
                        {roles.map((role, index) => (
                            <div
                                key={role.id}
                                ref={el => cardsRef.current[index] = el}
                                data-index={index}
                                className={`tgi-role-card ${index === activeRoleIndex ? 'active' : 'collapsed'}`}
                                style={{ animationDelay: `${index * 0.2}s` }}
                                onClick={() => {
                                    if (activeRoleIndex !== index) {
                                        setActiveRoleIndex(index);
                                    } else {
                                        handleRoleClick(role);
                                    }
                                }}
                            >
                                <div className="tgi-role-icon">
                                    <FontAwesomeIcon
                                        icon={role.icon}
                                        style={{
                                            color: 'white',
                                            fontSize: '2.5rem'
                                        }}
                                    />
                                </div>
                                <div className="tgi-role-glow"></div>
                                <h4 className="tgi-role-title">{role.title}</h4>
                                <p className="tgi-role-description">{role.description}</p>
                                <div className="tgi-click-indicator">
                                    View Details
                                    <FontAwesomeIcon
                                        icon={faArrowRight}
                                        style={{
                                            color: role.iconColor,
                                            fontSize: '0.9rem',
                                            marginLeft: '5px'
                                        }}
                                    />
                                </div>
                                <div className="tgi-role-hover-effect"></div>
                                {/* Tools & Skills Widget — shown on active card for all roles */}
                                {index === activeRoleIndex && (
                                    <div className="tgi-skills-widget">
                                        <p className="tgi-skills-widget-title">Tools & Skills</p>
                                        <div className="tgi-skills-grid">
                                            {roleSkills[index].map(skill => (
                                                <span key={skill} className="tgi-skill-pill">{skill}</span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {/* View Internship Details Pill Button — shown on active card */}
                                {index === activeRoleIndex && (
                                    <button
                                        className="tgi-view-details-btn tgi-view-details-btn--light"
                                        onClick={(e) => { e.stopPropagation(); handleRoleClick(role); }}
                                    >
                                        <span className="tgi-view-details-label">View Internship Details</span>
                                        <span className="tgi-view-details-arrow">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </span>
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Application Form Modal */}
                {showForm && (
                    <div className="tgi-form-modal-overlay">
                        <div className="tgi-form-modal">
                            <div className="tgi-modal-header">
                                <h3 className="tgi-modal-title">Join Our Internship Program</h3>
                                <button
                                    className="tgi-close-modal"
                                    onClick={() => setShowForm(false)}
                                >
                                    ×
                                </button>
                            </div>

                            <div className="tgi-modal-content">
                                {isSubmitted ? (
                                    <div className="tgi-success-message">
                                        <div className="tgi-success-icon">
                                            <FontAwesomeIcon
                                                icon={faCheckCircle}
                                                style={{
                                                    color: '#06D6A0',
                                                    fontSize: '3rem'
                                                }}
                                            />
                                        </div>
                                        <h4>Application Submitted!</h4>
                                        <p>We'll review your application and get back to you soon.</p>
                                    </div>
                                ) : (
                                    <form className="tgi-enrollment-form" onSubmit={handleSubmit}>
                                        <div className="tgi-form-group">
                                            <label htmlFor="tgi-name">Full Name *</label>
                                            <input
                                                type="text"
                                                id="tgi-name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="tgi-form-group">
                                            <label htmlFor="tgi-email">Email Address *</label>
                                            <input
                                                type="email"
                                                id="tgi-email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div className="tgi-form-group">
                                            <label htmlFor="tgi-position">Preferred Role *</label>
                                            <select
                                                id="tgi-position"
                                                name="position"
                                                value={formData.position}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="">Select your preferred role</option>
                                                {roles.map(role => (
                                                    <option key={role.id} value={role.title}>
                                                        {role.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className="tgi-form-group">
                                            <label>Internship Preference *</label>
                                            <div className="tgi-radio-group">
                                                <label className="tgi-radio-option">
                                                    <input
                                                        type="radio"
                                                        name="preference"
                                                        value="online"
                                                        checked={formData.preference === 'online'}
                                                        onChange={handleInputChange}
                                                        required
                                                    />
                                                    <span className="tgi-radio-custom"></span>
                                                    Online
                                                </label>
                                                <label className="tgi-radio-option">
                                                    <input
                                                        type="radio"
                                                        name="preference"
                                                        value="offline"
                                                        checked={formData.preference === 'offline'}
                                                        onChange={handleInputChange}
                                                    />
                                                    <span className="tgi-radio-custom"></span>
                                                    Offline
                                                </label>
                                            </div>
                                        </div>

                                        <div className="tgi-form-group">
                                            <label htmlFor="tgi-resume">Upload Resume / Portfolio *</label>
                                            <div className="tgi-file-upload">
                                                <input
                                                    type="file"
                                                    id="tgi-resume"
                                                    name="resume"
                                                    onChange={handleFileChange}
                                                    accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                                                    required
                                                />
                                                <label htmlFor="tgi-resume" className="tgi-file-label">
                                                    <span className="tgi-file-icon">
                                                        <FontAwesomeIcon
                                                            icon={faPaperclip}
                                                            style={{
                                                                color: '#666',
                                                                fontSize: '1rem'
                                                            }}
                                                        />
                                                    </span>
                                                    {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, Images)'}
                                                </label>
                                            </div>
                                        </div>

                                        <button type="submit" className="tgi-submit-btn">
                                            <span>Submit Application</span>
                                            <div className="tgi-btn-glow"></div>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InternshipProgram;