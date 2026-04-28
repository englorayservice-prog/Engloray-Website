import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Helmet } from 'react-helmet';
import {
    faRocket,
    faUserTie,
    faCertificate,
    faChartLine,
    faCheckCircle,
    faPaperclip,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faPalette,
    faDesktop,
    faCode,
    faGraduationCap,
    faBuilding,
    faBookOpen,
    faUserGraduate,
    faProjectDiagram,
    faLightbulb,
    faHandsHelping,
    faGem,
    faLaptopCode,
    faUsers,
    faAward,
    faRocket as faRocketIcon,
    faBrain,
    faHandshake,
    faClock,
    faHeadset,
    faMobile,
    faSearch,
    faCogs,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
    faWhatsapp,
    faFacebookF,
    faTwitter,
    faInstagram,
    faLinkedinIn,
    faDev
} from '@fortawesome/free-brands-svg-icons';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BenifitsFooter.css';
import benefitsBlueEarth from '../../../assets/globe_v3.png';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Add only the icons that are actually used in the component
library.add(
    faRocket, faUserTie, faCertificate, faChartLine,
    faCheckCircle, faPaperclip, faEnvelope, faPhone, faMapMarkerAlt,
    faPalette, faDesktop, faCode, faGraduationCap, faBuilding,
    faBookOpen, faUserGraduate, faProjectDiagram, faLightbulb, faHandsHelping, faGem,
    faLaptopCode, faUsers, faAward, faRocketIcon, faBrain, faHandshake, faClock, faHeadset,
    faMobile, faSearch, faCogs, faArrowRight,
    faWhatsapp, faFacebookF, faTwitter, faInstagram, faLinkedinIn
);

const BenefitsFooter = ({ onOpenInternshipForm }) => {
    const [isSwitched, setIsSwitched] = useState(false);
    const [showInternshipForm, setShowInternshipForm] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        preference: '',
        resume: null
    });
    const sectionRef = React.useRef(null);
    const [isAnimatingToggle, setIsAnimatingToggle] = useState(false);

    const toggleBenefits = () => {
        if (isAnimatingToggle) return;
        setIsAnimatingToggle(true);

        const cards = gsap.utils.toArray('.benefits-main-item');
        
        // 1. Fade OUT the current content
        gsap.to(cards, {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.in",
            onComplete: () => {
                // 2. Swap the state
                setIsSwitched(prev => !prev);
                
                // 3. Fade IN the new content after React renders it
                setTimeout(() => {
                    const newCards = gsap.utils.toArray('.benefits-main-item');
                    gsap.fromTo(newCards,
                        { opacity: 0, y: 20 },
                        { 
                            opacity: 1, 
                            y: 0, 
                            duration: 0.4, 
                            stagger: 0.05, 
                            ease: "power2.out",
                            onComplete: () => setIsAnimatingToggle(false)
                        }
                    );
                }, 50);
            }
        });
    };

    React.useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // ── Header/Title Animation ──
            const titleElements = '.top-right-badge, .custom-main-title, .switch-circle-container';
            gsap.set(titleElements, { opacity: 0, y: 50 });

            gsap.to(titleElements, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".benefits-main-header",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            });

            // ── Benefit Cards Reveal ──
            const benefitItems = gsap.utils.toArray('.benefits-main-item');
            benefitItems.forEach((item) => {
                const innerContent = item.querySelectorAll('.benefits-main-icon, .benefits-main-item-title, .benefits-main-item-description');

                gsap.set(item, { opacity: 0, y: 60 });
                gsap.set(innerContent, { opacity: 0, y: 30 });

                gsap.to(item, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });

                gsap.to(innerContent, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "back.out(1.2)",
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // ── CTA Section Animation ──
            const ctaElements = '.benefits-fresh-hero-title, .benefits-fresh-hero-description, .benefits-fresh-hero-actions';
            gsap.set(ctaElements, { opacity: 0, y: 40 });

            gsap.to(ctaElements, {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".benefits-fresh-hero-content",
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    // Social media URLs
    const socialLinks = {
        facebook: 'https://www.facebook.com/englorayspacemedia/',
        twitter: 'https://x.com/engloray38720',
        instagram: 'https://www.instagram.com/engloray.techgroup/',
        linkedin: 'https://www.linkedin.com/in/engloray-tech-group-916b1b2b8/'
    };

    // Icon colors for benefits
    const benefitColors = {
        rocket: '#FF6B6B',
        userTie: '#4ECDC4',
        certificate: '#FFD166',
        chartLine: '#06D6A0',
        lightbulb: '#FFB347',
        handsHelping: '#6C5B7B',
        laptop: '#3498db',
        users: '#e74c3c',
        award: '#f39c12',
        brain: '#9b59b6',
        handshake: '#1abc9c',
        clock: '#e67e22',
        headset: '#3498db',
        mobile: '#2c3e50',
        search: '#27ae60',
        cogs: '#7f8c8d'
    };

    const benefits = [
        {
            icon: faLaptopCode,
            iconColor: benefitColors.laptop,
            title: "Work on live client projects",
            description: "Gain real-world experience by working on actual client projects"
        },
        {
            icon: faUsers,
            iconColor: benefitColors.users,
            title: "Mentorship from professionals",
            description: "Learn from industry experts with years of experience"
        },
        {
            icon: faAward,
            iconColor: benefitColors.award,
            title: "Experience certificate",
            description: "Get certified recognition for your skills and contributions"
        },
        {
            icon: faBrain,
            iconColor: benefitColors.brain,
            title: "Skill growth through Engloray Tech Group",
            description: "Continuous learning and development opportunities"
        },
        {
            icon: faHandshake,
            iconColor: benefitColors.handshake,
            title: "Collaborative team environment",
            description: "Work alongside talented peers and build your network"
        },
        {
            icon: faHeadset,
            iconColor: benefitColors.headset,
            title: "24/7 Support",
            description: "Get assistance anytime you need help with your projects"
        }
    ];

    const benefitsAlternative = [
        {
            icon: faDev,
            iconColor: benefitColors.rocket,
            title: "Agile Development",
            description: "Fast-paced, transparent development cycles ensuring rapid delivery."
        },
        {
            icon: faCogs,
            iconColor: benefitColors.cogs,
            title: "Scalable Architecture",
            description: "Future-proof infrastructure designed to grow with your business needs."
        },
        {
            icon: faBuilding,
            iconColor: benefitColors.building,
            title: "Global Industry Expertise",
            description: "Specialized insights from a diverse team of international experts."
        },
        {
            icon: faCheckCircle,
            iconColor: benefitColors.chartLine,
            title: "Enterprise Standards",
            description: "Adherence to top-tier security and quality protocols for your projects."
        },
        {
            icon: faClock,
            iconColor: benefitColors.clock,
            title: "24/7 Systems Monitoring",
            description: "Proactive maintenance ensuring maximum uptime and stability."
        },
        {
            icon: faProjectDiagram,
            iconColor: benefitColors.projectDiagram,
            title: "Strategic Consulting",
            description: "Data-driven roadmaps designed to achieve long-term corporate growth."
        }
    ];

    const roles = [
        "Web Development",
        "Mobile Development",
        "UI/UX Design",
        "Digital Marketing"
    ];

    const openWhatsApp = () => {
        const phoneNumber = '6381759909';
        const message = 'Hello! I would like to start a project with ENGLORAY.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleSocialClick = (e, platform) => {
        e.preventDefault();
        window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
    };

    const handleInternshipApply = () => {
        setShowInternshipForm(true);
        setSubmitSuccess(false);
        setFormData({
            name: '',
            email: '',
            role: '',
            preference: '',
            resume: null
        });
    };

    const handleCloseForm = () => {
        setShowInternshipForm(false);
        setIsSubmitting(false);
        setSubmitSuccess(false);
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
        setIsSubmitting(true);

        try {
            const formDataToSend = new FormData();
            formDataToSend.append("name", formData.name);
            formDataToSend.append("email", formData.email);
            formDataToSend.append("role", formData.role);
            formDataToSend.append("mode", formData.preference);
            formDataToSend.append("resume", formData.resume);

            const response = await fetch(
                "https://localhost:8081/api/ButtonInternForm/submit",
                {
                    method: "POST",
                    body: formDataToSend
                }
            );

            if (!response.ok) {
                const err = await response.text();
                throw new Error(err);
            }

            setSubmitSuccess(true);
        } catch (error) {
            alert(error.message || "Submission failed");
        } finally {
            setIsSubmitting(false);
        }
    };


    return (
        <>
            <div>
                <Helmet>
                    <title>Engloray Tech</title>
                    <meta name="description" content="Communicates core learning benefits and outcomes for every enrolled student." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="BenifitsFooter" />
                    <meta property="og:description" content="Communicates core learning benefits and outcomes for every enrolled student." />
                </Helmet>

                <section className="benefits-cta-section" id="benefits" ref={sectionRef}>
                    <div className="benefits-cta-container">
                        {/* Benefits Section */}
                        <div className="benefits-main-section new-benefits-design">
                            {/* Top Right Corner Badge */}
                            <div className="top-right-badge">
                                <FontAwesomeIcon icon={faGem} className="badge-icon" />
                                <span className="badge-text">Let's build something</span>
                            </div>

                            <div className="benefits-main-header left-aligned-header">
                                {/* Title with image on the center-right */}
                                <div className="title-with-image-container">
                                    <div className="custom-title-container">
                                        <div className="title-with-circle">
                                            <h2 className="custom-main-title">
                                                When people <br />
                                                <span className="do-with-circle">
                                                    <span className="red-text">do</span>
                                                    <div
                                                        className={`switch-circle-container ${isSwitched ? 'switch-active' : ''}`}
                                                        onClick={toggleBenefits}
                                                        role="button"
                                                        aria-label="Toggle benefits view"
                                                    >
                                                        <span className="switch-outer"></span>
                                                        <span className="switch-inner"></span>
                                                        <span className="switch-dot"></span>
                                                    </div>
                                                    <span className="rest-text"> work with us.</span>
                                                </span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="benefits-main-grid grid-3x3">
                                {(isSwitched ? benefitsAlternative : benefits).map((benefit, index) => (
                                    <div
                                        key={benefit.title}
                                        className="benefits-main-item white-card"
                                    >
                                        <div className="benefits-main-icon-wrapper">
                                            <div className="benefits-main-icon">
                                                <FontAwesomeIcon
                                                    icon={benefit.icon}
                                                    style={{
                                                        color: benefit.iconColor,
                                                        fontSize: '2rem'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="benefits-main-content">
                                            <h3 className="benefits-main-item-title">{benefit.title}</h3>
                                            <p className="benefits-main-item-description">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Call to Action Section - UPDATED to match second file design */}
                        <div className="benefits-fresh-hero-section" id='benefits-cta-main-section'>
                            <div
                                className="benefits-fresh-hero-container"
                                style={{
                                    backgroundImage: `url(${benefitsBlueEarth})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center 10%',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            >
                                {/* Dark overlay so text is readable */}
                                <div className="benefits-hero-overlay" aria-hidden="true"></div>

                                <div className="benefits-fresh-hero-content">
                                    <div className="benefits-fresh-hero-text-group">
                                        <h2 className="benefits-fresh-hero-title">
                                            Ready to Start Your Journey?
                                        </h2>

                                        <p className="benefits-fresh-hero-description">
                                            Transform your career with hands-on experience and professional guidance,<br />
                                            while building real-world skills through practical, project-based learning
                                        </p>
                                    </div>

                                    <div className="benefits-fresh-hero-actions">
                                        <button
                                            className="benefits-fresh-btn-primary"
                                            onClick={openWhatsApp}
                                        >
                                            <span>Start Your Project</span>
                                            <span className="benefits-btn-icon-wrapper">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </button>

                                        <button
                                            className="benefits-fresh-btn-secondary"
                                            onClick={handleInternshipApply}
                                        >
                                            <span>Apply for Internship</span>
                                            <span className="benefits-btn-icon-wrapper">
                                                <FontAwesomeIcon icon={faArrowRight} />
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Internship Application Modal */}
                        {showInternshipForm && (
                            <div className="benefits-internship-modal-overlay">
                                <div className="benefits-internship-modal">
                                    <div className="benefits-modal-header">
                                        <h3 className="benefits-modal-title">Join Our Internship Program</h3>
                                        <button
                                            className="benefits-modal-close"
                                            onClick={handleCloseForm}
                                            disabled={isSubmitting}
                                        >
                                            ×
                                        </button>
                                    </div>

                                    <div className="benefits-modal-content">
                                        {!submitSuccess ? (
                                            <form className="benefits-internship-form" onSubmit={handleSubmit}>
                                                <div className="benefits-form-group">
                                                    <label htmlFor="name" className="benefits-form-label">
                                                        Full Name *
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="benefits-form-input"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        disabled={isSubmitting}
                                                        placeholder="Enter your full name"
                                                    />
                                                </div>

                                                <div className="benefits-form-group">
                                                    <label htmlFor="email" className="benefits-form-label">
                                                        Email Address *
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="benefits-form-input"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        disabled={isSubmitting}
                                                        placeholder="Enter your email"
                                                    />
                                                </div>

                                                <div className="benefits-form-group">
                                                    <label htmlFor="role" className="benefits-form-label">
                                                        Preferred Role *
                                                    </label>
                                                    <select
                                                        id="role"
                                                        name="role"
                                                        className="benefits-form-select"
                                                        value={formData.role}
                                                        onChange={handleInputChange}
                                                        required
                                                        disabled={isSubmitting}
                                                    >
                                                        <option value="">Select your preferred role</option>
                                                        {roles.map(role => (
                                                            <option key={role} value={role}>
                                                                {role}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="benefits-form-group">
                                                    <label className="benefits-form-label">
                                                        Internship Preference *
                                                    </label>
                                                    <div className="benefits-radio-group">
                                                        <label className="benefits-radio-label">
                                                            <input
                                                                type="radio"
                                                                name="preference"
                                                                value="online"
                                                                checked={formData.preference === 'online'}
                                                                onChange={handleInputChange}
                                                                required
                                                                disabled={isSubmitting}
                                                                className="benefits-radio-input"
                                                            />
                                                            <span className="benefits-radio-custom"></span>
                                                            Online
                                                        </label>
                                                        <label className="benefits-radio-label">
                                                            <input
                                                                type="radio"
                                                                name="preference"
                                                                value="offline"
                                                                checked={formData.preference === 'offline'}
                                                                onChange={handleInputChange}
                                                                required
                                                                disabled={isSubmitting}
                                                                className="benefits-radio-input"
                                                            />
                                                            <span className="benefits-radio-custom"></span>
                                                            Offline
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="benefits-form-group">
                                                    <label htmlFor="resume" className="benefits-form-label">
                                                        Upload Resume *
                                                    </label>
                                                    <div className="benefits-file-upload">
                                                        <input
                                                            type="file"
                                                            id="resume"
                                                            name="resume"
                                                            className="benefits-file-input"
                                                            onChange={handleFileChange}
                                                            accept=".pdf,.doc,.docx"
                                                            required
                                                            disabled={isSubmitting}
                                                        />
                                                        <label htmlFor="resume" className="benefits-file-label">
                                                            <span className="benefits-file-icon">
                                                                <FontAwesomeIcon
                                                                    icon={faPaperclip}
                                                                    style={{
                                                                        color: '#666',
                                                                        fontSize: '1rem'
                                                                    }}
                                                                />
                                                            </span>
                                                            <span className="benefits-file-text">
                                                                {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC)'}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="benefits-form-actions">
                                                    <button
                                                        type="button"
                                                        className="benefits-form-cancel"
                                                        onClick={handleCloseForm}
                                                        disabled={isSubmitting}
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        type="submit"
                                                        className="benefits-form-submit"
                                                        disabled={isSubmitting}
                                                    >
                                                        {isSubmitting ? (
                                                            <>
                                                                <div className="benefits-submit-spinner"></div>
                                                                Submitting...
                                                            </>
                                                        ) : (
                                                            'Submit Application'
                                                        )}
                                                    </button>
                                                </div>
                                            </form>
                                        ) : (
                                            <div className="benefits-success-message">
                                                <div className="benefits-success-icon">
                                                    <FontAwesomeIcon
                                                        icon={faCheckCircle}
                                                        style={{
                                                            color: '#06D6A0',
                                                            fontSize: '3rem'
                                                        }}
                                                    />
                                                </div>
                                                <h4 className="benefits-success-title">Application Received!</h4>
                                                <p className="benefits-success-text">
                                                    Thank you for your interest in our internship program.
                                                    We've received your application and will review it shortly.
                                                </p>
                                                <p className="benefits-success-note">
                                                    You'll hear back from us within 3-5 business days.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}



                        {/* Floating Elements */}
                        <div className="benefits-cta-floating-element benefits-cta-el-1">
                            <FontAwesomeIcon icon={faDesktop} style={{ color: 'rgba(255, 255, 255, 0.08)', fontSize: '1.2rem' }} />
                        </div>
                        <div className="benefits-cta-floating-element benefits-cta-el-2">
                            <FontAwesomeIcon icon={faCode} style={{ color: 'rgba(255, 255, 255, 0.08)', fontSize: '1.2rem' }} />
                        </div>
                        <div className="benefits-cta-floating-element benefits-cta-el-3">
                            <FontAwesomeIcon icon={faRocket} style={{ color: 'rgba(255, 255, 255, 0.08)', fontSize: '1.2rem' }} />
                        </div>
                        <div className="benefits-cta-floating-element benefits-cta-el-4">
                            <FontAwesomeIcon icon={faPalette} style={{ color: 'rgba(255, 255, 255, 0.08)', fontSize: '1.2rem' }} />
                        </div>
                    </div>
                </section >
                <WhiteFooter />

            </div >
        </>
    );
};

export default BenefitsFooter;