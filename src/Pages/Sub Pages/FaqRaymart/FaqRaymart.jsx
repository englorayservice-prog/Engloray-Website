import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../../Pages/TechLearningSection/NavigationBar/NavigationBar';
import Logo from '../../../../src/assets/18.png'; // Using the logo from assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faArrowRight, faComments, faChevronLeft, faChevronRight, faHeart } from '@fortawesome/free-solid-svg-icons';
import './FaqRaymart.css';
import '../HeroSection/HeroSection.css';
import emilycarter from '../../../assets/images/emilybg.jpg.jpeg';
import michaelchen from '../../../assets/images/michaelchen.jpg.jpeg';
import sarahjenkins from '../../../assets/images/sarahjenkins.jpeg';
import brandImg1 from '../../../assets/images/branding1.png';
import brandImg2 from '../../../assets/images/branding2.png';
import brandImg3 from '../../../assets/images/branding3.png';
import brandImg4 from '../../../assets/images/branding4.png';
import brandImg5 from '../../../assets/images/branding5.png';

const FaqRaymart = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    const testimonialsData = [
        {
            name: "Emily Carter",
            title: "Operations Director, TechFlow Inc.",
            badge: "AI Chatbot Integration",
            quote: `"Engloray's intelligent chatbot solutions have drastically improved our student engagement, providing our learners with instant and reliable technical guidance 24/7."`,
            avatar: emilycarter,
            scale: 1.25,
            bgImage: emilycarter,
            // cardTitle: "AI Chatbot Solutions",
            // cardDesc: "Intelligent automation\nInstant 24/7 guidance\nDeployed in days"
        },
        {
            name: "Michael Chen",
            title: "CTO, Global Learn",
            badge: "Enterprise Support",
            quote: `"The deployment of the conversational AI agent streamlined our entire support pipeline. Response times plummeted, and user satisfaction is at an all-time high."`,
            avatar: michaelchen,
            bgImage: michaelchen,
            // cardTitle: "Enterprise Support",
            // cardDesc: "Streamlined pipelines\nFaster response times\nScalable infrastructure"
        },
        {
            name: "Sarah Jenkins",
            title: "Head of Marketing, EduPro",
            badge: "Digital Transformation",
            quote: `"Working with Engloray transformed our digital presence. The custom ERP and seamless AI integration helped us scale our services globally with absolute ease."`,
            avatar: sarahjenkins,
            bgImage: sarahjenkins,
            // cardTitle: "Digital Transformation",
            // cardDesc: "Custom ERP systems\nGlobal scale solutions\nSeamless AI integration"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setIsFading(true); // Trigger fade out
            setTimeout(() => {
                setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
                setIsFading(false); // Trigger fade in with new content
            }, 500); // match transition duration in CSS
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const faqs = [
        {
            question: "Why is Engloray Learning important for my career?",
            answer: "Engloray Learning allows students and professionals to engage with practical, project-based courses. It provides measurable results in skill enhancement, allows for targeted career growth, and enables learners to adapt to changing industry demands with confidence."
        },
        {
            question: "How can Engloray help improve my technical skills?",
            answer: "We offer hands-on project based learning, expert mentorship, and industry-standard curriculum designed to build your portfolio and practical knowledge."
        },
        {
            question: "How long does it take to complete the programs?",
            answer: "Our programs are flexible. Most intensive courses range from 3 to 6 months depending on the track and your dedication."
        },
        {
            question: "Do you provide placement or internship opportunities?",
            answer: "Yes, we connect our top performers with our tech group and partner networks for potential internship and job opportunities."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>FAQ & Feedback | Engloray</title>
            </Helmet>

            <NavigationBar />

            <div className="faq-raymart-container">

                {/* ═══════════ HERO SECTION (Case Study Layout) ═══════════ */}
                <div className="cs-wrapper">

                    {/* LEFT SIDE */}
                    <div className="cs-left">

                        {/* MAIN HERO */}
                        <div className="cs-hero">
                            <img src="https://res.cloudinary.com/mtm-agency/image/fetch/f_auto,q_auto/https://themtmagency.com/upload/media/_1920x1080_crop_center-center_61_line/24-11_29379_Brand_building_for_professional_services_blog_image-11.png" alt="Hero" />
                        </div>

                        {/* THUMBNAILS */}
                        <div className="cs-thumbs">
                            {[brandImg1, brandImg2, brandImg3, brandImg4, brandImg5].map((img, i) => (
                                <img key={i} src={img} alt={`branding-${i}`} />
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-right">

                        {/* TOP SMALL IMAGE */}
                        <div className="cs-side-image">
                            <img src="https://freedesignfile.com/upload/2012/11/business_people_05.jpg" alt="Side" />
                        </div>

                        {/* CONTENT */}
                        <div className="cs-side-content">
                            <h2>Brand Transformation</h2>
                            <p>
                                A complete redesign focused on elevating brand perception,
                                improving user experience, and scaling digital presence.
                            </p>

                            {/* INFO ROWS */}
                            <div className="cs-info">
                                <div>
                                    <span>Client</span>
                                    <p>Fintech Startup</p>
                                </div>
                                <div>
                                    <span>Timeline</span>
                                    <p>10 Weeks</p>
                                </div>
                                <div>
                                    <span>Year</span>
                                    <p>2025</p>
                                </div>
                            </div>

                            {/* PILL BARS */}
                            <div className="cs-bars">
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Brand Strategy</span>
                                        <div className="track"><div className="fill w90"></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>UI/UX Design</span>
                                        <div className="track"><div className="fill w80"></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Development</span>
                                        <div className="track"><div className="fill w70"></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Marketing</span>
                                        <div className="track"><div className="fill w60"></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM BADGES */}
                            <div className="cs-bottom-badges">
                                <span>Branding</span>
                                <span>UI/UX</span>
                                <span>Strategy</span>
                                <span>Development</span>
                                <span>Marketing</span>
                            </div>

                        </div>

                    </div>

                </div>

                {/* EXTRA SECTION */}
                <div className="cs-bottom-section">

                    {/* LEFT SIDE (3 BOXES) */}
                    <div className="cs-bottom-left">

                        <div className="cs-box">
                            <div className="cs-box-row">
                                <div className="cs-box-title">
                                    <h4>Brand Identity Package</h4>
                                    <p className="box-description">A complete system for cohesive brand visual identity</p>
                                </div>
                                <div className="cs-box-right">
                                    <span className="green-tag">+34%</span>
                                    <span className="price">Offer</span>
                                    <button>Contact soon</button>
                                </div>
                            </div>
                        </div>

                        <div className="cs-box">
                            <div className="cs-box-row">
                                <h4>Brand Identity Deluxe</h4>
                                <div className="cs-box-right">
                                    <span className="green-tag">+64%</span>
                                    <span className="price">Offer</span>
                                    <button>Contact soon</button>
                                </div>
                            </div>
                            <div className="cs-list-container">
                                <ul className="cs-feature-list">
                                    <li>Logo &amp; Visual Identity</li>
                                    <li>Full Design System &amp; Guidelines</li>
                                    <li>Brand Collateral Design</li>
                                    <li>Market Positioning Strategy</li>
                                </ul>
                            </div>
                        </div>

                        <div className="cs-box">
                            <div className="cs-box-row">
                                <h4>Project Modules</h4>
                            </div>
                            <div className="cs-pricing-container">
                                <div className="cs-pricing-list">
                                    <div className="pricing-item"><span>UX Audit</span><span className="price-value">$20%off</span></div>
                                    <div className="pricing-item"><span>UI Design</span><span className="price-value">$20%off</span></div>
                                    <div className="pricing-item"><span>Development</span><span className="price-value">$20%off</span></div>
                                    <div className="pricing-item"><span>Testing &amp; QA</span><span className="price-value">$20%off</span></div>
                                    <div className="pricing-item"><span>Deployment</span><span className="price-value">$20%off</span></div>
                                </div>
                            </div>
                            <div className="cs-total">
                                <span className="green-tag">+54%</span>
                                <span className="price">Offer</span>
                                <button>Contact soon</button>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE (2 DARK BOXES) */}
                    <div className="cs-bottom-right">

                        <div className="cs-dark-box">
                            <h4>Features</h4>
                            <div className="cs-dark-list-container">
                                <ul className="cs-feature-dark-list">
                                    <li>✔ Brand Strategy</li>
                                    <li>✔ UI/UX Design</li>
                                    <li>✔ Design System</li>
                                    <li>✔ Performance Optimization</li>
                                    <li>✔ SEO Ready</li>
                                    <li>✔ Analytics Integration</li>
                                    <li>✔ 24/7 Support</li>
                                </ul>
                            </div>
                        </div>

                        <div className="cs-dark-box">
                            <h4>Comparison</h4>
                            <div className="cs-table-container">
                                <table className="cs-comparison-table">
                                    <thead>
                                        <tr>
                                            <th>Feature</th><th>Basic</th><th>Pro</th><th>Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr><td>Strategy</td><td>✔</td><td>✔</td><td>✔</td></tr>
                                        <tr><td>Design</td><td>✔</td><td>✔</td><td>✔</td></tr>
                                        <tr><td>Development</td><td>✖</td><td>✔</td><td>✔</td></tr>
                                        <tr><td>Support</td><td>✖</td><td>✔</td><td>✔</td></tr>
                                        <tr><td>Custom Solutions</td><td>✖</td><td>✖</td><td>✔</td></tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>

                {/* FINAL CONTENT SECTION */}
                <div className="cs-final-section">

                    {/* LEFT SIDE */}
                    <div className="cs-final-left">
                        <div className="cs-final-image">
                            <img src="https://digitalmarketing.f12technologies.com/public/storage/uploads/page/1754902650_brand-development-services.png" alt="Final Case Study" />
                        </div>
                        <p className="cs-final-desc">
                            This case study explores how a structured branding system can elevate
                            user perception and create a consistent digital experience across platforms.
                        </p>
                        <div className="cs-final-text">
                            <div>
                                <h4>Research &amp; Discovery</h4>
                                <p>We conducted an in-depth analysis of user behavior, business goals, and competitive landscapes to uncover meaningful insights. Through stakeholder interviews, user journey mapping, and market research, we identified key opportunities and challenges. This phase established a strong strategic foundation, ensuring that every design decision moving forward was rooted in real data and aligned with both user needs and business objectives.</p>
                            </div>
                            <div>
                                <h4>Strategy &amp; Direction</h4>
                                <p>Based on the insights gathered, we defined a clear brand strategy and creative direction. This included crafting a cohesive visual language, tone of voice, and messaging framework that reflects the brand's core values. We focused on creating consistency across all touchpoints, ensuring that the brand communicates effectively and builds a strong, recognizable identity in the market.</p>
                            </div>
                            <div>
                                <h4>Design Execution</h4>
                                <p>We translated strategy into execution by developing high-fidelity interfaces, scalable components, and a comprehensive design system. Every element was carefully crafted to maintain visual consistency and usability across platforms. The design system enables future scalability, allowing the product to evolve efficiently while preserving a unified user experience.</p>
                            </div>
                            <div>
                                <h4>Results &amp; Impact</h4>
                                <p>The final outcome delivered measurable improvements across key performance metrics. The refined brand identity enhanced user engagement, strengthened brand recognition, and improved conversion rates. By aligning design with strategy, the project not only elevated the user experience but also contributed to tangible business growth and long-term value.</p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-final-right">

                        <div className="cs-final-box">
                            <h4>Achievements</h4>
                            <div className="cs-img-grid">
                                <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="Achievement 1" />
                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Achievement 2" />
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Achievement 3" />
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Achievement 4" />
                            </div>
                            <div className="number-container"><span className="count">+120</span></div>
                        </div>

                        <div className="cs-final-box">
                            <h4>Visual Assets</h4>
                            <div className="cs-img-grid">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Asset 1" />
                                <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" alt="Asset 2" />
                                <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="Asset 3" />
                                <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Asset 4" />
                            </div>
                            <div className="number-container"><span className="count">+160</span></div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>Brand Transformation Summary</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    <li>Refined brand positioning aligned with business vision</li>
                                    <li>Developed a cohesive and scalable visual identity system</li>
                                    <li>Established consistent brand experience across all touchpoints</li>
                                    <li>Defined tone of voice and communication guidelines</li>
                                    <li>Strengthened brand recognition and audience trust</li>
                                </ul>
                            </div>
                            <div className="badges">
                                <span>Brand Identity</span>
                                <span>Visual System</span>
                                <span>Brand Strategy</span>
                                <span>Storytelling</span>
                            </div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>Key Outcomes</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    <li>Improved usability metrics</li>
                                    <li>Stronger brand recall</li>
                                    <li>Measurable growth in engagement</li>
                                    <li>Increased conversion rates</li>
                                    <li>Enhanced user satisfaction</li>
                                </ul>
                            </div>
                            <div className="badges">
                                <span>Growth</span>
                                <span>Performance</span>
                                <span>Design</span>
                                <span>Impact</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Our Services Section */}
                <section className="fr-services-section">
                    <h2 className="fr-srv-main-title">more related services</h2>

                    <div className="fr-srv-banner">

                        <div className="fr-srv-grid">
                            {[
                                { title: "Web Development", tag1: "B2B", tag2: "PRO", price: "Custom", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600&h=400" },
                                { title: "UI/UX Design", tag1: "B2B", tag2: "PRO", price: "Custom", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600&h=400" },

                                { title: "AI Integration", tag1: "B2B", tag2: "PRO", price: "Custom", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=600&h=400" }
                            ].map((srv, idx) => (
                                <div className="fr-srv-card" key={idx}>
                                    <div className="fr-srv-img-box">
                                        <img src={srv.img} alt={srv.title} />
                                    </div>
                                    <div className="fr-srv-content">
                                        <h4 className="fr-srv-title">{srv.title}</h4>
                                        <div className="fr-srv-footer">
                                            <div className="fr-srv-tags">
                                                <span>{srv.tag1}</span>
                                                <span>{srv.tag2}</span>
                                            </div>
                                            <div className="fr-srv-price">{srv.price}</div>
                                            <button className="fr-srv-heart-btn">
                                                <FontAwesomeIcon icon={faHeart} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>



                </section>

                {/* Testimonials Section */}
                <section className="fr-testimonials-section">
                    <div className="fr-testimonials-header">
                        <div className="fr-test-header-left">
                            <h2 className="fr-test-heading">What top-tier<br />companies say<br />about our product</h2>
                        </div>
                        <div className="fr-test-header-right">
                            <p className="fr-test-desc">
                                Join the growing number of businesses and companies that have experienced the transformative impact of our chatbot services.
                            </p>
                        </div>
                    </div>

                    <div className="fr-testimonials-grid">
                        {/* Grey Card: outer wrapper for positioning notch divs */}
                        <div className="fr-test-card fr-grey-card-wrapper">

                            {/* Inner clipping container: overflow:hidden + border-radius clips image to outer rounded shape */}
                            <div className={`fr-card-grey`}>
                                <div
                                    className={`fr-grey-full-img fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}
                                    style={{ backgroundImage: `url(${testimonialsData[currentTestimonialIndex].bgImage})` }}
                                ></div>
                                <div className="fr-grey-full-overlay"></div>

                                {/* Text content overlaid on image */}
                                <div className={`fr-grey-text-overlay fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}>
                                    {testimonialsData[currentTestimonialIndex].cardTitle && (
                                        <h3 className="fr-grey-card-title">{testimonialsData[currentTestimonialIndex].cardTitle}</h3>
                                    )}
                                    {testimonialsData[currentTestimonialIndex].cardDesc && (
                                        <p className="fr-grey-card-desc">
                                            {testimonialsData[currentTestimonialIndex].cardDesc.split('\n').map((line, i) => (
                                                <span key={i}>{line}<br /></span>
                                            ))}
                                        </p>
                                    )}
                                    <div className="fr-grey-card-author">
                                        <span className="fr-grey-author-name">{testimonialsData[currentTestimonialIndex].name}</span>
                                        <span className="fr-grey-author-title">{testimonialsData[currentTestimonialIndex].title}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notch cutout divs: OUTSIDE fr-card-grey so overflow:hidden doesn't clip their border-radius */}
                            <div className="fr-grey-notch fr-grey-notch-tl"></div>
                            <div className="fr-grey-notch fr-grey-notch-br"></div>

                        </div>

                        {/* Green Card */}
                        <div className="fr-test-card fr-card-green">
                            <div className="fr-shape-bg">
                                <div className="fr-shape-rect fr-green-rect-a"></div>
                                <div className="fr-shape-rect fr-green-rect-b"></div>
                                <div className="fr-shape-fillet fr-green-fillet-tr"></div>
                                <div className="fr-shape-fillet fr-green-fillet-bl"></div>
                            </div>
                            <div className="fr-card-content">
                                <div className={`fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}>
                                    <div className="fr-test-badge-wrapper">
                                        <span className="fr-test-badge">
                                            <FontAwesomeIcon icon={faComments} className="fr-badge-icon" /> {testimonialsData[currentTestimonialIndex].badge}
                                        </span>
                                    </div>
                                    <div className="fr-test-content">
                                        <p className="fr-test-quote">
                                            {testimonialsData[currentTestimonialIndex].quote}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </section>

                {/* FAQ Section */}
                <section className="fr-faq-section">
                    <div className="fr-faq-left">
                        <h2 className="fr-heading">Engloray Learning FAQs</h2>
                        <p className="fr-desc">
                            As a leading educational platform and agency, we are dedicated to providing
                            comprehensive educational resources and answering frequently asked questions to help our students.
                        </p>
                        <div className="fr-buttons">
                            <button className="fr-btn-outline">More Questions</button>
                            <button className="fr-btn-link">Contact Us</button>
                        </div>
                    </div>

                    <div className="fr-faq-right">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`fr-accordion-item ${openIndex === index ? 'active' : ''}`}
                            >
                                <div className="fr-accordion-header" onClick={() => toggleAccordion(index)}>
                                    <h3>{faq.question}</h3>
                                    <span className="fr-icon">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                <div
                                    className="fr-accordion-body"
                                    style={{ maxHeight: openIndex === index ? '200px' : '0px' }}
                                >
                                    <div className="fr-accordion-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ready to work with us (Banner + Footer) */}
                <section className="fr-ready-section">

                    <div className="fr-banner-card">
                        <h2 className="fr-banner-title">Ready to work with us ?</h2>
                        <button className="fr-banner-btn">Get Started &nbsp; &gt;</button>
                    </div>

                    <div className="fr-footer-area">
                        <div className="fr-footer-col fr-col-brand">
                            <div className="fr-footer-logo">
                                <img src={Logo} alt="Engloray" style={{ filter: 'brightness(0)' }} />
                            </div>
                            <p className="fr-footer-desc">
                                Empowering careers and businesses through expert technical training and innovative digital solutions.
                            </p>
                            <div className="fr-socials">
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faInstagram} /></div>
                            </div>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Services</h4>
                            <a href="/brandingPage">Branding & Design</a>
                            <a href="/developmentPage">Web Development</a>
                            <a href="/marketingPage">Digital Marketing</a>
                            <a href="/UiUxPage">UI/UX Design</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Education</h4>
                            <a href="/allProgramsPage">All Programs</a>
                            <a href="/workshopsPage">Workshops</a>
                            <a href="/corporateTraining">Corporate Training</a>
                            <a href="/allCoursesPage">E-learning</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Company</h4>
                            <a href="/ourStoryPage">About Us</a>
                            <a href="/worksCaseStudiesPage">Works</a>
                            <a href="/CareersPage">Careers</a>
                            <a href="#footer">Contact</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Licence</h4>
                            <a href="/privacyPolicyPage">Privacy Policy</a>
                            <a href="/termsAndServicesPage">Terms of Service</a>
                            <a href="/cookiesPolicyPage">Cookie Policy</a>
                        </div>

                        <div className="fr-footer-col fr-col-contact">
                            <h4>Contact Info</h4>
                            <p><FontAwesomeIcon icon={faEnvelope} className="fr-contact-icon-fixed" /> engloray@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} className="fr-contact-icon-fixed" /> +91 6381759909</p>
                            <p><FontAwesomeIcon icon={faPhone} className="fr-contact-icon-fixed" /> +91 6369945920</p>
                            <p><FontAwesomeIcon icon={faLocationDot} className="fr-contact-icon-fixed" /> Madurai, TamilNadu, INDIA</p>
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default FaqRaymart;
