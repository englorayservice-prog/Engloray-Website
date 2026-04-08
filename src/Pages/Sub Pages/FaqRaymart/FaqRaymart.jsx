import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../../Pages/TechLearningSection/NavigationBar/NavigationBar';
import brandingData from './raymart_branding_data.json';
import Logo from '../../../../src/assets/18.png'; // Using the logo from assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faArrowRight, faComments, faChevronLeft, faChevronRight, faHeart, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import './FaqRaymart.css';
import emilycarter from '../../../assets/images/emilybg.jpg.jpeg';
import michaelchen from '../../../assets/images/michaelchen.jpg.jpeg';
import sarahjenkins from '../../../assets/images/sarahjenkins.jpg.jpeg';

const FaqRaymart = () => {
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Get ID from navigation state, default to the first one
    const activeId = location.state?.id || "global-identity-suite";
    const pageData = brandingData.find(item => item.id === activeId) || brandingData[0];

    // Avatar mapping for local imports
    const avatarMap = {
        "Emily Carter": emilycarter,
        "Michael Chen": michaelchen,
        "Sarah Jenkins": sarahjenkins
    };

    // Use testimonials from JSON data
    const testimonialsData = pageData.testimonials || [];

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;

        // Exact measure of one card and its gap based on actual DOM elements
        const cards = scrollRef.current.children;
        if (cards.length === 0) return;
        const cardWithGap = cards[0].offsetWidth + 15;
        const singleSetWidth = (scrollWidth + 15) / 3;

        let targetScroll = direction === 'left' ? scrollLeft - cardWithGap : scrollLeft + cardWithGap;

        // "Teleport" immediately if we reach the end of the middle set in either direction
        if (direction === 'right' && targetScroll >= (singleSetWidth * 2)) {
            scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
            targetScroll = scrollRef.current.scrollLeft + cardWithGap;
        } else if (direction === 'left' && targetScroll <= (singleSetWidth - cardWithGap)) {
            scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
            targetScroll = scrollRef.current.scrollLeft - cardWithGap;
        }

        scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    };

    useEffect(() => {
        // Initial position: start at the middle set
        if (scrollRef.current) {
            const { scrollWidth } = scrollRef.current;
            const singleSetWidth = (scrollWidth + 15) / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, []);

    useEffect(() => {
        if (testimonialsData.length === 0) return;
        const timer = setInterval(() => {
            setIsFading(true); // Trigger fade out
            setTimeout(() => {
                setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
                setIsFading(false); // Trigger fade in with new content
            }, 500); // match transition duration in CSS
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonialsData]);

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

            {/* <NavigationBar /> */}

            <div className="faq-raymart-container">

                {/* ═══════════ HERO SECTION (Case Study Layout) ═══════════ */}
                <div className="cs-wrapper">

                    {/* LEFT SIDE */}
                    <div className="cs-left">

                        {/* MAIN HERO */}
                        <div className="cs-hero">
                            <img src={pageData.mainImage} alt={pageData.title} />
                        </div>

                        {/* THUMBNAILS */}
                        <div className="cs-thumbs">
                            {pageData.thumbnails.map((img, i) => (
                                <img key={i} src={img} alt={`branding-${i}`} />
                            ))}
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-right">

                        {/* TOP SMALL IMAGE */}
                        <div className="cs-side-image">
                            <img src={pageData.sidebarImage} alt="Side" />
                        </div>

                        {/* CONTENT */}
                        <div className="cs-side-content">
                            <h2>{pageData.title}</h2>
                            <p>
                                {pageData.description}
                            </p>

                            {/* INFO ROWS */}
                            <div className="cs-info">
                                <div>
                                    <span>Client</span>
                                    <p>{pageData.client}</p>
                                </div>
                                <div>
                                    <span>Timeline</span>
                                    <p>{pageData.timeline}</p>
                                </div>
                                <div>
                                    <span>Year</span>
                                    <p>{pageData.year}</p>
                                </div>
                            </div>

                            {/* PILL BARS */}
                            <div className="cs-bars">
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Brand Strategy</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.strategy}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>UI/UX Design</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.design}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Development</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.development}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Marketing</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.marketing}%` }}></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM BADGES */}
                            <div className="cs-bottom-badges">
                                {pageData.bottomBadges && pageData.bottomBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

                {/* EXTRA SECTION */}
                <div className="cs-bottom-section">

                    {/* LEFT SIDE (3 BOXES) */}
                    <div className="cs-bottom-left">

                        {pageData.offerContents && pageData.offerContents[0] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <div className="cs-box-title">
                                        <h4>{pageData.offerContents[0].title}</h4>
                                        <p className="box-description">{pageData.offerContents[0].description}</p>
                                    </div>
                                    <div className="cs-box-right">
                                        <span className="green-tag">{pageData.offerContents[0].tag}</span>
                                        <span className="price">{pageData.offerContents[0].price}</span>
                                        <button>Contact soon</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {pageData.offerContents && pageData.offerContents[1] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <h4>{pageData.offerContents[1].title}</h4>
                                    <div className="cs-box-right">
                                        <span className="green-tag">{pageData.offerContents[1].tag}</span>
                                        <span className="price">{pageData.offerContents[1].price}</span>
                                        <button>Contact soon</button>
                                    </div>
                                </div>
                                <div className="cs-list-container">
                                    <ul className="cs-feature-list">
                                        {pageData.offerContents[1].features.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {pageData.offerContents && pageData.offerContents[2] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <h4>{pageData.offerContents[2].title}</h4>
                                </div>
                                <div className="cs-pricing-container">
                                    <div className="cs-pricing-list">
                                        {pageData.offerContents[2].modules.map((mod, i) => (
                                            <div className="pricing-item" key={i}><span>{mod.name}</span><span className="price-value">{mod.value}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="cs-total">
                                    <span className="green-tag">{pageData.offerContents[2].tag}</span>
                                    <span className="price">{pageData.offerContents[2].price}</span>
                                    <button>Contact soon</button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* RIGHT SIDE (2 DARK BOXES) */}
                    <div className="cs-bottom-right">

                        <div className="cs-dark-box">
                            <h4>Features</h4>
                            <div className="cs-dark-list-container">
                                <ul className="cs-feature-dark-list">
                                    {pageData.features && pageData.features.map((feature, i) => (
                                        <li key={i}>✔ {feature}</li>
                                    ))}
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
                                        {pageData.comparison && pageData.comparison.map((row, i) => (
                                            <tr key={i}>
                                                <td>{row.feature}</td>
                                                <td>{row.basic ? '✔' : '✖'}</td>
                                                <td>{row.pro ? '✔' : '✖'}</td>
                                                <td>{row.enterprise ? '✔' : '✖'}</td>
                                            </tr>
                                        ))}
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
                            <img src={pageData.finalImage} alt="Final Case Study" />
                        </div>
                        <p className="cs-final-desc">
                            {pageData.finalDescription}
                        </p>
                        <div className="cs-final-text">
                            {pageData.finalTexts && pageData.finalTexts.map((text, i) => (
                                <div key={i}>
                                    <h4>{text.title}</h4>
                                    <p>{text.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-final-right">

                        <div className="cs-final-box">
                            <h4>Achievements</h4>
                            <div className="cs-img-grid">
                                <img src={pageData.thumbnails[0]} alt="Achievement 1" />
                                <img src={pageData.thumbnails[1]} alt="Achievement 2" />
                                <img src={pageData.thumbnails[2]} alt="Achievement 3" />
                                <div className="number-container"><span className="count">+{pageData.achievementsCount}</span></div>
                            </div>
                        </div>

                        <div className="cs-final-box">
                            <h4>Visual Assets</h4>
                            <div className="cs-img-grid">
                                <img src={pageData.thumbnails[3]} alt="Asset 1" />
                                <img src={pageData.thumbnails[2]} alt="Asset 2" />
                                <img src={pageData.thumbnails[1]} alt="Asset 3" />
                                <div className="number-container"><span className="count">+{pageData.visualAssetsCount}</span></div>
                            </div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>{pageData.title} Summary</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    {pageData.summary && pageData.summary.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="badges">
                                {pageData.finalSummaryBadges && pageData.finalSummaryBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>Key Outcomes</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    {pageData.outcomes && pageData.outcomes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="badges">
                                {pageData.keyOutcomesBadges && pageData.keyOutcomesBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Our Services Section */}
                <section className="fr-services-section">
                    <h2 className="fr-srv-main-title">more related services</h2>

                    <div className="fr-srv-banner">
                        <button className="fr-srv-arrow left" onClick={() => scroll('left')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className="fr-srv-grid" ref={scrollRef} style={{ overflowX: 'hidden' }}>
                            {[
                                ...[
                                    { title: "Premium Logo Forge", tag1: "Branding", tag2: "Identity", offer: "15% off", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Visual Narrative", tag1: "Branding", tag2: "Strategy", offer: "20% off", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Brand Voice & Style", tag1: "Copy", tag2: "Voice", offer: "25% off", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Identity Suite", tag1: "Design", tag2: "Full", offer: "30% off", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Motion Branding", tag1: "Video", tag2: "Modern", offer: "35% off", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Typography System", tag1: "Type", tag2: "System", offer: "20% off", img: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Color Psychology", tag1: "Theory", tag2: "Brand", offer: "15% off", img: "https://images.unsplash.com/photo-1502691876148-a8437c02905a?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Corporate Asset Kit", tag1: "Assets", tag2: "Kit", offer: "25% off", img: "https://images.unsplash.com/photo-1454165205732-d031f131f372?auto=format&fit=crop&q=80&w=600&h=400" }
                                ],
                                ...[
                                    { title: "Premium Logo Forge", tag1: "Branding", tag2: "Identity", offer: "15% off", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Visual Narrative", tag1: "Branding", tag2: "Strategy", offer: "20% off", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Brand Voice & Style", tag1: "Copy", tag2: "Voice", offer: "25% off", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Identity Suite", tag1: "Design", tag2: "Full", offer: "30% off", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Motion Branding", tag1: "Video", tag2: "Modern", offer: "35% off", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Typography System", tag1: "Type", tag2: "System", offer: "20% off", img: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Color Psychology", tag1: "Theory", tag2: "Brand", offer: "15% off", img: "https://images.unsplash.com/photo-1502691876148-a8437c02905a?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Corporate Asset Kit", tag1: "Assets", tag2: "Kit", offer: "25% off", img: "https://images.unsplash.com/photo-1454165205732-d031f131f372?auto=format&fit=crop&q=80&w=600&h=400" }
                                ],
                                ...[
                                    { title: "Premium Logo Forge", tag1: "Branding", tag2: "Identity", offer: "15% off", img: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Visual Narrative", tag1: "Branding", tag2: "Strategy", offer: "20% off", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Brand Voice & Style", tag1: "Copy", tag2: "Voice", offer: "25% off", img: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Identity Suite", tag1: "Design", tag2: "Full", offer: "30% off", img: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Motion Branding", tag1: "Video", tag2: "Modern", offer: "35% off", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Typography System", tag1: "Type", tag2: "System", offer: "20% off", img: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Color Psychology", tag1: "Theory", tag2: "Brand", offer: "15% off", img: "https://images.unsplash.com/photo-1502691876148-a8437c02905a?auto=format&fit=crop&q=80&w=600&h=400" },
                                    { title: "Corporate Asset Kit", tag1: "Assets", tag2: "Kit", offer: "25% off", img: "https://images.unsplash.com/photo-1454165205732-d031f131f372?auto=format&fit=crop&q=80&w=600&h=400" }
                                ]
                            ].map((srv, idx) => (
                                <div className="fr-srv-card" key={idx}>
                                    <div className="fr-srv-img-box">
                                        <img src={srv.img} alt={srv.title} />
                                    </div>
                                    <div className="fr-srv-content">
                                        <h4 className="fr-srv-title">{srv.title}</h4>
                                        <div className="fr-srv-footer">
                                            <button className="fr-srv-footer-icon">
                                                <FontAwesomeIcon icon={faBorderAll} />
                                            </button>
                                            <div className="fr-srv-price">{srv.offer}</div>
                                            <span className="fr-srv-brand-tag">ENGLORAY</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="fr-srv-arrow right" onClick={() => scroll('right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                    {/* <div className="fr-srv-bottom-bar">
                        <span className="fr-srv-similar">Similar Titles</span>
                        <span className="fr-srv-see-more">See more</span>
                    </div> */}

                    <div className="fr-srv-dots">
                        <div className="fr-srv-dot active"></div>
                        <div className="fr-srv-dot"></div>
                        <div className="fr-srv-dot"></div>
                        <div className="fr-srv-dot"></div>
                    </div>

                </section>

                {/* Testimonials Section */}
                <section className="fr-testimonials-section">
                    <div className="fr-testimonials-header">
                        <div className="fr-test-header-left">
                            <h2 className="fr-test-heading">What top-tier<br />companies say<br />about Branding & Identity</h2>
                        </div>
                        <div className="fr-test-header-right">
                            <p className="fr-test-desc">
                                Join the growing number of businesses and companies that have experienced the transformative impact of our digital services.
                                Our commitment to technical excellence and strategic innovation has empowered
                                countless global education leaders to stay ahead in an ever-evolving market.
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
                                    style={{ backgroundImage: `url(${avatarMap[testimonialsData[currentTestimonialIndex]?.name] || pageData.mainImage})` }}
                                ></div>
                                <div className="fr-grey-full-overlay"></div>

                                {/* Text content overlaid on image - Showing name and position here as requested */}
                                <div className={`fr-grey-text-overlay fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}>
                                    <div className="fr-grey-card-author">
                                        <span className="fr-grey-author-name">{testimonialsData[currentTestimonialIndex]?.name}</span>
                                        <span className="fr-grey-author-title">{testimonialsData[currentTestimonialIndex]?.position}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notch cutout divs: OUTSIDE fr-card-grey so overflow:hidden doesn't clip their border-radius */}
                            <div className="fr-grey-notch fr-grey-notch-tl"></div>
                            <div className="fr-grey-notch fr-grey-notch-br"></div>

                        </div>

                        {/* Green Card - Showing content here */}
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
                                            <FontAwesomeIcon icon={faComments} className="fr-badge-icon" /> Client Testimonial
                                        </span>
                                    </div>
                                    <div className="fr-test-content">
                                        <p className="fr-test-quote">
                                            {testimonialsData[currentTestimonialIndex]?.content}
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
                        <h2 className="fr-heading">Branding & Identity FAQs</h2>
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
