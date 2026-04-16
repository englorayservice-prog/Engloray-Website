import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Mail,
    Phone,
    MapPin,
    ChevronRight,
    Monitor,
    GraduationCap,
    Building2,
    PhoneCall
} from 'lucide-react';
import './WhiteFooter.css';
import logo from '../../assets/Logo.png';

const WhiteFooter = () => {
    const navigate = useNavigate();
    const currentYear = new Date().getFullYear();

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
        { icon: <Twitter size={18} />, url: 'https://x.com/engloraytech', label: 'Twitter' },
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
                { name: "All Programs", path: "/allProgramsPage" },
                { name: "Mentorship Learning", path: "/mentorshipLearningPage" },
                { name: "Project Based Learning", path: "/projectBasedLearningPage" }
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
                { name: "Tech Group Projects", path: "/allProjectsPage" }
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
        <footer className="wf-footer">
            <div className="wf-container">
                {/* Top Section */}
                <div className="wf-top-grid">
                    {/* Brand Column */}
                    <div className="wf-brand-col">
                        <div className="wf-logo-area" onClick={() => handleLinkClick('/')}>
                            <span className="wf-brand-name">ENGLORAY</span>
                        </div>
                        <p className="wf-brand-description">
                            Transforming businesses and empowering individuals through innovative digital solutions and education.
                        </p>
                        <div className="wf-socials">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="wf-social-link"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {footerColumns.map((col, idx) => (
                        <div key={idx} className="wf-nav-col">
                            <h4 className="wf-col-title">{col.title}</h4>
                            <ul className="wf-link-list">
                                {col.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <button onClick={() => handleLinkClick(link.path)} className="wf-link">
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact Column */}
                    <div className="wf-nav-col wf-contact-col">
                        <h4 className="wf-col-title">CONTACT INFO</h4>
                        <div className="wf-contact-info">
                            <div className="wf-contact-item">
                                <div className="wf-icon-box"><Mail size={16} /></div>
                                <span className="wf-contact-text">engloray@gmail.com</span>
                            </div>
                            <div className="wf-contact-item clickable" onClick={() => handleWhatsAppClick('6381759909')}>
                                <div className="wf-icon-box"><Phone size={16} /></div>
                                <div className="wf-phone-wrapper">
                                    <span className="wf-contact-text">+91 6381759909</span>
                                </div>
                            </div>
                            <div className="wf-contact-item clickable" onClick={() => handleWhatsAppClick('6369945920')}>
                                <div className="wf-icon-box" style={{ opacity: 0 }}><Phone size={16} /></div>
                                <div className="wf-phone-wrapper">
                                    <span className="wf-contact-text">+91 6369945920</span>
                                </div>
                            </div>
                            <div className="wf-contact-item">
                                <div className="wf-icon-box"><MapPin size={16} /></div>
                                <span className="wf-contact-text">Madurai, TamilNadu, INDIA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="wf-divider" />

                {/* Other Links Section */}
                <div className="wf-other-links">
                    <h3 className="wf-other-title">OTHER LINKS</h3>
                    <div className="wf-other-grid">
                        {otherLinksSections.map((section, idx) => (
                            <div key={idx} className="wf-other-col">
                                <h5 className="wf-other-cat">{section.category}</h5>
                                <ul className="wf-other-list">
                                    {section.links.map((link, lIdx) => (
                                        <li key={lIdx}>
                                            <button onClick={() => handleLinkClick(link.path)} className="wf-other-link">
                                                {link.name}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="wf-bottom-bar">
                    <p className="wf-copyright">© {currentYear} ENGLORAY. All rights reserved.</p>
                    <div className="wf-legal-links">
                        <button onClick={() => handleLinkClick('/privacyPolicyPage')}>Privacy Policy</button>
                        <button onClick={() => handleLinkClick('/termsAndServicesPage')}>Terms of Service</button>
                        <button onClick={() => handleLinkClick('/cookiesPolicyPage')}>Cookie Policy</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default WhiteFooter;
