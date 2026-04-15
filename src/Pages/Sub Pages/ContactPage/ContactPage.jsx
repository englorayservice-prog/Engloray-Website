import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import contactBg from "../../../assets/images/contact-bg.png";
import Logo from '../../../assets/18.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSquareFacebook,
    faSquareXTwitter,
    faSquareInstagram,
    faSquareLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faPaperPlane,
    faCircleCheck,
} from '@fortawesome/free-solid-svg-icons';
import RayMartNavbar from '../../../Components/RayMartNavbar/RayMartNavbar';
import LearningFooter from '../../TechLearningSection/LearningFooter/LearningFooter';
//import heroBg from '../../../assets/contact_hero_bg.png';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1500);
    };

    const socialLinks = {
        facebook: 'https://www.facebook.com/profile.php?id=61583697831413',
        twitter: 'https://x.com/engloraylearn',
        instagram: 'https://www.instagram.com/engloray.learning/',
        linkedin: 'https://www.linkedin.com/in/engloray-learning-603620391/',
    };

    const handleSocialClick = (e, url) => {
        e.preventDefault();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <RayMartNavbar />
            <Helmet>
                <title>Contact Us | Engloray Learning</title>
                <meta
                    name="description"
                    content="Get in touch with Engloray Learning. We are always ready to help you and answer your questions about courses, programs, and more."
                />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact Us | Engloray Learning" />
                <meta
                    property="og:description"
                    content="Get in touch with Engloray Learning. We are always ready to help and answer your questions."
                />
            </Helmet>

            <div className="sc-page">

                {/* ════════════════════════════════
            HERO
        ════════════════════════════════ */}
                <section className="sc-hero" style={{ backgroundImage: `url(${contactBg})` }}>
                    {/* dark overlay */}
                    <div className="sc-hero-overlay" />

                    {/* Bottom-left text */}
                    <div className="sc-hero-content">
                        <h1 className="sc-hero-title">Contacts</h1>
                    </div>





                    {/* Bottom rounded tab matching body background */}
                    <div className="sc-hero-tab">
                        <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</a> <span className="sc-tab-dot"></span>
                    </div>

                </section>

                {/* ════════════════════════════════
            CONTACT BODY
        ════════════════════════════════ */}
                <section className="sc-body">
                    <div className="sc-body-inner">

                        {/* ── LEFT ── */}
                        <div className="sc-info">
                            <span className="sc-info-eyebrow">/ Get In touch /</span>

                            <h2 className="sc-info-heading">
                                We are always ready to help you and answer your questions
                            </h2>

                            <p className="sc-info-desc">
                                People have the ability to perform block and block and also need educational
                                support. Our team is here to help.
                            </p>

                            {/* 2×2 square info cards */}
                            <div className="sc-info-grid">

                                {/* Card 1 – Call Center */}
                                <div className="sc-info-card">
                                    <h4 className="sc-info-card-title">Call Center</h4>
                                    <p className="sc-info-card-line">
                                        <a href="tel:+916381759909">+91 6381759909</a>
                                    </p>
                                    <p className="sc-info-card-line">
                                        <a href="tel:+916369945920">+91 6369945920</a>
                                    </p>
                                </div>

                                {/* Card 2 – Our Location */}
                                <div className="sc-info-card">
                                    <h4 className="sc-info-card-title">Our Location</h4>
                                    <p className="sc-info-card-line">Main Head – 1500</p>
                                    <p className="sc-info-card-line">Madurai, TamilNadu</p>
                                </div>

                                {/* Card 3 – Email */}
                                <div className="sc-info-card">
                                    <h4 className="sc-info-card-title">Email</h4>
                                    <p className="sc-info-card-line">
                                        <a href="mailto:engloraylearn@gmail.com">engloraylearn@gmail.com</a>
                                    </p>
                                </div>

                                {/* Card 4 – Social Network */}
                                <div className="sc-info-card sc-info-card--social">
                                    <h4 className="sc-info-card-title">Social network</h4>
                                    <div className="sc-card-socials">
                                        <a
                                            href={socialLinks.facebook}
                                            className="sc-card-social-btn"
                                            onClick={(e) => handleSocialClick(e, socialLinks.facebook)}
                                            aria-label="Facebook"
                                        >
                                            <FontAwesomeIcon icon={faSquareFacebook} />
                                        </a>
                                        <a
                                            href={socialLinks.twitter}
                                            className="sc-card-social-btn"
                                            onClick={(e) => handleSocialClick(e, socialLinks.twitter)}
                                            aria-label="Twitter / X"
                                        >
                                            <FontAwesomeIcon icon={faSquareXTwitter} />
                                        </a>
                                        <a
                                            href={socialLinks.linkedin}
                                            className="sc-card-social-btn"
                                            onClick={(e) => handleSocialClick(e, socialLinks.linkedin)}
                                            aria-label="LinkedIn"
                                        >
                                            <FontAwesomeIcon icon={faSquareLinkedin} />
                                        </a>
                                        <a
                                            href={socialLinks.instagram}
                                            className="sc-card-social-btn"
                                            onClick={(e) => handleSocialClick(e, socialLinks.instagram)}
                                            aria-label="Instagram"
                                        >
                                            <FontAwesomeIcon icon={faSquareInstagram} />
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* ── RIGHT – Highlighted Form ── */}
                        <div className="sc-form-card">
                            <div className="sc-form-header">
                                <h3 className="sc-form-title">Get In Touch</h3>
                                <p className="sc-form-subtitle">
                                    Define your goals and start to know where to we add value to your business.
                                </p>
                            </div>

                            {!submitted ? (
                                <form className="sc-form" onSubmit={handleSubmit} id="contact-form">

                                    <div className="sc-form-group">
                                        <label htmlFor="fullName" className="sc-label">Full Name</label>
                                        <input
                                            id="fullName"
                                            name="fullName"
                                            type="text"
                                            placeholder="Your full name"
                                            className="sc-input"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="sc-form-group">
                                        <label htmlFor="email" className="sc-label">Email</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            className="sc-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="sc-form-group">
                                        <label htmlFor="subject" className="sc-label">Subject</label>
                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="How can we help?"
                                            className="sc-input"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="sc-form-group">
                                        <label htmlFor="message" className="sc-label">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            placeholder="Write your message…"
                                            className="sc-input sc-textarea"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="sc-submit-btn" disabled={loading}>
                                        {loading ? (
                                            <span>Sending…</span>
                                        ) : (
                                            <>
                                                <FontAwesomeIcon icon={faPaperPlane} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            ) : (
                                <div className="sc-success">
                                    <FontAwesomeIcon icon={faCircleCheck} className="sc-success-icon" />
                                    <h4 className="sc-success-title">Message Sent!</h4>
                                    <p className="sc-success-text">
                                        Thank you for reaching out. We'll get back to you within 24 hours.
                                    </p>
                                    <button
                                        className="sc-success-btn"
                                        onClick={() => {
                                            setSubmitted(false);
                                            setFormData({ fullName: '', email: '', subject: '', message: '' });
                                        }}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </section>

                {/* ════════════════════════════════
            SUPPORT BANNER
        ════════════════════════════════ */}
                <section className="sc-support">
                    <div className="sc-support-inner">

                        <h2 className="sc-support-heading">
                            We are always<br />happy to assist you
                        </h2>
                    </div>
                </section>

                {/* ════════════════════════════════
            CUSTOM DARK FOOTER
        ════════════════════════════════ */}
                <div className="sc-dark-footer-wrapper">
                    <div className="sc-dark-footer">
                        <div className="sc-df-top">
                            <div className="sc-df-left">
                                <div className="sc-df-logo-icon">
                                    <img src={Logo} alt="Engloray Logo" style={{ maxWidth: '180px', height: 'auto' }} />
                                </div>
                                <h2 className="sc-df-title">
                                    <span className="line">
                                        <span className="sc-df-text-blue">Transform your </span>
                                        <span className="sc-df-text-red">career!</span>
                                    </span>

                                    <span className="line">
                                        <span className="sc-df-text-blue">Join </span>
                                        <span className="sc-df-text-red">Engloray Learning</span>
                                    </span>
                                </h2>
                            </div>

                            <div className="sc-df-right">
                                <div className="sc-df-col">
                                    <h4>SERVICES</h4>
                                    <a href="/brandingPage">Branding & Design</a>
                                    <a href="/developmentPage">Web Development</a>
                                    <a href="/marketingPage">Digital Marketing</a>
                                    <a href="/UiUxPage">UI/UX Design</a>
                                </div>
                                <div className="sc-df-col">
                                    <h4>COMPANY</h4>
                                    <a href="/">About Us</a>
                                    <a href="/allProjectsPage">Works</a>
                                    <a href="/CareersPage">Careers</a>
                                    <a href="/studentContactPage" className="sc-df-active-link">Contact</a>
                                </div>
                                <div className="sc-df-col">
                                    <h4>PRODUCTS</h4>
                                    <a href="/CrmPage">CRM</a>
                                    <a href="/ErpPage">ERP</a>
                                    <a href="/AiChatbotPage">AiChatbot</a>
                                    <a href="/JobSeekerPage">Job Seeker</a>
                                    <a href="/LearningAndCareerPage">Learning & Career</a>

                                </div>
                            </div>


                            {/* The arch cutout causing the "feet" */}
                            <div className="sc-df-cutout"></div>
                        </div>

                        <div className="sc-df-bottom-text">
                            <span>Release 2024. All rights reserved.</span>
                            <span>Terms and Conditions | Privacy policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
