import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Facebook,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    Check
} from 'lucide-react';
import './NewFooter.css';

const XIcon = ({ size = 18 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        width={size}
        height={size}
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const NewFooter = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();
    
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const validateEmail = (emailVal) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(emailVal);
    };

    const handleEmailChange = (e) => {
        const val = e.target.value;
        setEmail(val);
        if (!isValid) {
            setIsValid(true);
        }
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail || !validateEmail(trimmedEmail)) {
            setIsValid(false);
            return;
        }

        setIsValid(true);
        setIsLoading(true);

        try {
            const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    service_id: "service_af9xhe7",
                    template_id: "template_uu7k2jb",
                    user_id: "h67fs5ervDVPLSKJj",
                    template_params: {
                        email: trimmedEmail,
                        to_email: trimmedEmail,
                        user_email: trimmedEmail,
                        subscriber_email: trimmedEmail,
                        reply_to: "engloray@gmail.com"
                    }
                })
            });

            if (response.ok) {
                setShowSuccess(true);
                setEmail('');
            } else {
                console.error("Subscription failed:", await response.text());
                alert("Subscription failed. Please try again later.");
            }
        } catch (error) {
            console.error("Subscription error:", error);
            alert("An error occurred. Please check your connection and try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleLinkClick = (path) => {
        navigate(path);
        window.scrollTo(0, 0);
    };

    const handleWhatsAppClick = (num) => {
        const url = `https://wa.me/${num}?text=Hello! I'm interested in your services.`;
        window.open(url, '_blank');
    };

    const socialLinks = [
        { icon: <Facebook size={18} />, url: 'https://www.facebook.com/profile.php?id=61583616114977', label: 'Facebook' },
        { icon: <XIcon size={18} />, url: 'https://x.com/engloraytech', label: 'X (Twitter)' },
        { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/engloray-group-7534b6391/', label: 'LinkedIn' },
        { icon: <Instagram size={18} />, url: 'https://www.instagram.com/engloray/', label: 'Instagram' }
    ];

    const footerColumns = [
        {
            title: "SERVICES",
            links: [
                { name: "Branding & Design", path: "/brandingPage" },
                { name: "Web Development", path: "/websiteDevelopmentPage" },
                { name: "Digital Marketing", path: "/marketingPage" },
                { name: "UI/UX Design", path: "/UiUxPage" }
            ]
        },
        {
            title: "EDUCATION",
            links: [
                { name: "All Programs", path: "/allProgramsPage" },
                { name: "Workshops", path: "/workshopsPage" },
                { name: "Corporate Training", path: "/corporateTraining" },
                { name: "E-learning", path: "/allCoursesPage" }
            ]
        },
        {
            title: "COMPANY",
            links: [
                { name: "About Us", path: "/ourStoryPage" },
                { name: "Works", path: "/worksCaseStudiesPage" },
                { name: "Careers", path: "/CareersPage" },
                { name: "Contact", path: "/contactPage" }
            ]
        }
    ];

    const otherLinksSections = [
        {
            category: "DESIGN",
            links: [
                { name: "Branding & Identity", path: "/brandingIdentityPage" },
                { name: "UI/UX Design", path: "/uiuxDesignPage" },
                { name: "Graphic Design Course", path: "/graphicsDesignCoursePage" }
            ]
        },
        {
            category: "DEVELOPMENT",
            links: [
                { name: "Software Development", path: "/softwareDevelopmentPage" },
                { name: "ERP Solutions", path: "/erpSolutionsPage" },
                { name: "Mobile Applications", path: "/mobileApplicationsPage" }
            ]
        },
        {
            category: "LEARNING",
            links: [
                { name: "Mentorship", path: "/mentorshipLearningPage" },
                { name: "Project Based", path: "/projectBasedLearningPage" }
            ]
        },
        {
            category: "INTERNSHIPS",
            links: [
                { name: "Graphic Designer", path: "/GraphicDesignerInternPage" },
                { name: "Web Developer", path: "/websiteDeveloperInternPage" },
                { name: "UI/UX Designer", path: "/uiuxDesignerInternPage" }
            ]
        },
        {
            category: "WORKS",
            links: [
                { name: "Case Studies", path: "/worksCaseStudiesPage" },
                { name: "Client Projects", path: "/worksClientProjectsPage" },
                { name: "Tech Group", path: "/allProjectsPage" }
            ]
        },
        {
            category: "COURSES",
            links: [
                { name: "Graphic Design", path: "/graphicsDesignCoursePage" },
                { name: "UI/UX course", path: "/uiuxDesignCoursePage" },
                { name: "Java FullStack", path: "/javaFullStackCourseCoursePage" }
            ]
        }
    ];

    return (
        <footer className="nf-footer-new">
            <div className="nf-container-new">

                {/* Left Card */}
                <div className="nf-card-left">
                    <div className="nf-left-top">
                        <div className="nf-logo-area" onClick={() => handleLinkClick('/')}>
                            {/* <img src={logo} alt="ENGLORAY" className="nf-logo" /> */}
                            <span className="nf-brand-name">EGR Family</span>
                        </div>

                        <p className="nf-brand-description">
                            Transforming businesses and empowering individuals,<br />
                            <span style={{ color: '#8b8b8b' }}>through innovative digital solutions.</span>
                        </p>

                        <div className="nf-socials-row">
                            <span className="nf-stay-touch">Stay in touch!</span>
                            <div className="nf-socials">
                                {socialLinks.map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="nf-social-link"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="nf-left-middle">
                        <div className="nf-glass-card">
                            <p className="nf-vision-tagline">
                                Pioneering digital excellence through synergistic technology solutions and professional incubation.
                            </p>
                            <div className="nf-pillar-item">
                                <h4 className="nf-pillar-title">Digital Engineering</h4>
                                <p className="nf-pillar-desc">Architecting robust, scalable, and secure software ecosystems that power enterprise growth.</p>
                            </div>
                            <div className="nf-pillar-item">
                                <h4 className="nf-pillar-title">Talent Incubation</h4>
                                <p className="nf-pillar-desc">Cultivating next-generation technology leaders through high-impact professional programs.</p>
                            </div>
                            <div className="nf-pillar-item">
                                <h4 className="nf-pillar-title">Creative Strategy</h4>
                                <p className="nf-pillar-desc">Designing immersive brand experiences and intuitive user interfaces that captivate audiences.</p>
                            </div>
                        </div>
                    </div>

                    <div className="nf-left-bottom-new">
                        <p className="nf-left-motto">Pioneering Innovation. Cultivating Excellence.</p>
                    </div>
                </div>

                {/* Right Card */}
                <div className="nf-card-right">

                    {/* Top Section: Links Grid */}
                    <div className="nf-links-wrapper">
                        <div className="nf-links-grid-main">
                            {footerColumns.map((col, idx) => (
                                <div key={`col-${idx}`} className="nf-nav-col">
                                    <h4 className="nf-col-title">{col.title}</h4>
                                    <ul className="nf-link-list">
                                        {col.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <button onClick={() => handleLinkClick(link.path)} className="nf-link">
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            {/* Contact Column mapped into the same grid style */}
                            <div className="nf-nav-col">
                                <h4 className="nf-col-title" style={{ whiteSpace: 'nowrap', display: 'inline-block', background: '#111827', color: '#ffffff', padding: '6px 16px', borderRadius: '8px', fontSize: '1.1rem', letterSpacing: '1.5px' }}>CONTACT INFO</h4>
                                <ul className="nf-link-list">
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Mail size={16} style={{ color: '#111827', flexShrink: 0 }} />
                                        <button className="nf-link" style={{ cursor: 'default' }}>engloray@gmail.com</button>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Phone size={16} style={{ color: '#111827', flexShrink: 0 }} />
                                        <button onClick={() => handleWhatsAppClick('6381759909')} className="nf-link">+91 6381759909</button>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <Phone size={16} style={{ color: '#111827', flexShrink: 0 }} />
                                        <button onClick={() => handleWhatsAppClick('6369945920')} className="nf-link">+91 6369945920</button>
                                    </li>
                                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                                        <MapPin size={16} style={{ color: '#111827', flexShrink: 0, marginTop: '3px' }} />
                                        <span className="nf-link" style={{ cursor: 'default', fontWeight: '600', lineHeight: '1.4' }}>
                                            Madurai, Tamil Nadu
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="nf-divider-subtle"></div>

                        <div className="nf-links-grid-other">
                            {otherLinksSections.map((section, idx) => (
                                <div key={idx} className="nf-nav-col">
                                    <h5 className="nf-col-title-sub">{section.category}</h5>
                                    <ul className="nf-link-list">
                                        {section.links.map((link, lIdx) => (
                                            <li key={lIdx}>
                                                <button onClick={() => handleLinkClick(link.path)} className="nf-link">
                                                    {link.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section: Copyright & Newsletter */}
                    <div className="nf-right-bottom">
                        <div className="nf-legal">
                            <p className="nf-copyright">© {currentYear} ENGLORAY. All rights reserved.</p>
                            <div className="nf-legal-links">
                                <button className="nf-legal-highlight" onClick={() => handleLinkClick('/privacyPolicyPage')}>Privacy</button>
                                <span>·</span>
                                <button className="nf-legal-highlight" onClick={() => handleLinkClick('/termsAndServicesPage')}>Terms</button>
                                <span>·</span>
                                <button className="nf-legal-highlight" onClick={() => handleLinkClick('/cookiesPolicyPage')}>Cookies</button>
                            </div>
                        </div>

                        <div className="nf-newsletter">
                            <div className="nf-nl-text">
                                <span style={{ color: '#8b8b8b' }}>Tech moves fast.</span><br />
                                <span style={{ fontWeight: 600, color: '#000' }}>Stay ahead with Engloray.</span>
                            </div>
                            <div className="nf-nl-row">
                                <form onSubmit={handleSubscribe} className={`nf-nl-form ${!isValid ? 'is-invalid' : ''}`}>
                                    <input 
                                        type="email" 
                                        placeholder="Enter email address" 
                                        className={`nf-nl-input ${!isValid ? 'is-invalid' : ''}`}
                                        value={email}
                                        onChange={handleEmailChange}
                                        disabled={isLoading}
                                    />
                                </form>
                                <button 
                                    type="button"
                                    className="nf-nl-btn"
                                    disabled={isLoading}
                                    onClick={handleSubscribe}
                                >
                                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                            {!isValid && (
                                <p className="nf-nl-error">
                                    Please enter a valid email address.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>

            {showSuccess && (
                <div className="nf-success-overlay" onClick={() => setShowSuccess(false)}>
                    <div className="nf-success-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="nf-success-icon-box">
                            <Check size={40} strokeWidth={3} />
                        </div>
                        <h3 className="nf-success-title">Success!</h3>
                        <p className="nf-success-desc">
                            Thanks for subscribing! A confirmation email has been successfully sent to your address.
                        </p>
                        <button className="nf-success-btn" onClick={() => setShowSuccess(false)}>
                            Done
                        </button>
                    </div>
                </div>
            )}
        </footer>
    );
};

export default NewFooter;
