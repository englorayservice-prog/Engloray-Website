import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './SoftwareTech.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

import logoDesignImg from '../../../assets/services/logo_design.png';
import colorPaletteImg from '../../../assets/services/color_palette.png';
import typographyImg from '../../../assets/services/typography.png';
import visualStyleImg from '../../../assets/services/visual_style.png';
import environmentImg from '../../../assets/services/environmental_branding.png';
import portraitImg from '../../../assets/agency/branding_concept_abstract.png';
import landscapeImg from '../../../assets/agency/landscape.png';
import iphone14Img from '../../../assets/Iphone14.png';

// Removed missing premium_avatar local imports
const SoftwareTechSolution = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [{
        id: 1, num: '01', title: 'Custom Software Solution', icon: '✦', short: 'Custom Software Solution services', stats: { val1: '133+', lab1: 'Deploys', val2: '4 Weeks', lab2: 'Sprints', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Custom software solutions provide businesses with tailor made digital tools designed to address specific operational challenges and unique organizational goals that generic off the shelf applications cannot satisfy Custom Software Solution focused solutions provided by Engloray expert team.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWqhuHaVbO9Gu_L2rvugC5b6XVnx80SWhjKw&s"
    },
    {
        id: 2, num: '02', title: 'Business Automation System', icon: '◈', short: 'Business Automation System services', stats: { val1: '125+', lab1: 'Completed', val2: '2 Weeks', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
        description: 'Business Automation System focused solutions provided by Engloray expert team.Custom software solutions provide businesses with tailor made digital tools designed to address specific operational challenges and unique organizational goals that generic off the shelf applications cannot satisfy.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F8p_tFR9G13itdxbu6WKrdNJxwDWQyE32g&s"
    },
    {
        id: 3, num: '03', title: 'CRM & ERP Solution', icon: '✦', short: 'CRM & ERP Solution services', stats: { val1: '138+', lab1: 'Completed', val2: '4 Months', lab2: 'Avg Speed', val3: '4.5★', lab3: 'Satisfaction' },
        description: 'CRM & ERP Solution focused solutions provided by Engloray expert team.Custom software solutions provide businesses with tailor made digital tools designed to address specific operational challenges and unique organizational goals that generic off the shelf applications cannot satisfy.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7F8p_tFR9G13itdxbu6WKrdNJxwDWQyE32g&s"
    },
    {
        id: 4, num: '04', title: 'SaaS Product Development', icon: '◈', short: 'SaaS Product Development services', stats: { val1: '84+', lab1: 'Deploys', val2: '5 Weeks', lab2: 'Sprints', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'SaaS Product Development focused solutions provided by Engloray expert team.Custom software solutions provide businesses with tailor made digital tools designed to address specific operational challenges and unique organizational goals that generic off the shelf applications cannot satisfy.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMONbSQAsJtg9XLg80TiehlBWbwA0wweqVaA&s"
    },
    {
        id: 5, num: '05', title: 'Startup Tech Launch Kit', icon: '✦', short: 'Startup Tech Launch Kit services', stats: { val1: '63+', lab1: 'Completed', val2: '6 Weeks', lab2: 'Avg Speed', val3: '4.5★', lab3: 'Satisfaction' },
        description: 'Startup Tech Launch Kit focused solutions provided by Engloray expert team.Custom software solutions provide businesses with tailor made digital tools designed to address specific operational challenges and unique organizational goals that generic off the shelf applications cannot satisfy.', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMONbSQAsJtg9XLg80TiehlBWbwA0wweqVaA&s"
    }];

    const pageData = {
        id: 3,
        title: "SOFTWARE & TECH SOLUTION",
        description: "Comprehensive technology solutions to drive your business forward in the digital age.",
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
            name: "Bruce Hardy",
            role: "CEO, TechVentures",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bruce&backgroundColor=b6e3f4&mouth=smile",
            text: "Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well. Their team's dedication to our brand's success was truly exceptional.",
            stars: 5
        },
        {
            id: 2,
            name: "Mark Smith",
            role: "Marketing Director",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=c0aede&mouth=smile",
            text: "Promotional designs were eye-catching and effective. We saw a clear increase in walk-in customers and overall brand engagement within just a few weeks of implementation.",
            stars: 5
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Brand Manager",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf&mouth=smile",
            text: "The web and mobile development services they provided were top-notch. Our and brand identity has never felt more unified and powerful. Truly a game-changer for us.",
            stars: 5
        },
        {
            id: 4,
            name: "Vera Duncan",
            role: "Creative Head",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vera&backgroundColor=d1d4f9&mouth=smile",
            text: "Building our digital presence from scratch felt like an impossible task, but this team made it look easy. Their expertise in branding and identity design is second to none.",
            stars: 5
        },
        {
            id: 5,
            name: "David Chen",
            role: "Product Lead",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede&mouth=smile",
            text: "Innovative, creative, and highly professional. They took our vision and expanded it into a brand that truly resonates with our global audience. Highly recommended!",
            stars: 5
        },
        {
            id: 6,
            name: "Emma Wilson",
            role: "Design Director",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ffdfbf&mouth=smile",
            text: "Every touchpoint they designed feels unmistakable. We've received numerous compliments on our new visual style and identity. They are truly masters of their craft.",
            stars: 5
        },
        {
            id: 7,
            name: "James Miller",
            role: "Startup Founder",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=b6e3f4&mouth=smile",
            text: "The attention to detail in their branding process is remarkable. They don't just design; they strategize for growth. Our ROI has been fantastic.",
            stars: 5
        },
        {
            id: 8,
            name: "Linda Thompson",
            role: "COO, Retail Group",
            photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda&backgroundColor=d1d4f9&mouth=smile",
            text: "From logo design to environmental branding, they handled everything with grace and excellence. Our physical and digital presence are now perfectly aligned.",
            stars: 5
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
        <div className="soft-page-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="soft-page-hero-section-new">
                <div className="soft-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="soft-page-hero-left-new">
                        <h4 className="soft-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="soft-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="soft-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="soft-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="soft-page-hero-buttons-new">
                            <button className="soft-page-btn-get-started-new">GET STARTED</button>
                            <button className="soft-page-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="soft-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="soft-page-hero-stats-new">
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">15<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Partners</span>
                            </div>
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">300<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Clients</span>
                            </div>
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">4.9<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="soft-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">40<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Awards</span>
                            </div>
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">500<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Projects</span>
                            </div>
                            <div className="soft-page-stat-item-new">
                                <div className="soft-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="soft-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="soft-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="soft-page-stat-number-new">5<span className="soft-page-stat-dash">+</span></span>
                                </div>
                                <span className="soft-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="soft-page-hero-right-new">
                        <div className="soft-page-right-top-new">
                            {/* <p className="soft-page-case-subtitle-new">Case Examples</p> */}
                            <div className="soft-page-title-play-row">
                                <h2 className="soft-page-case-title-new">About Our<br />company</h2>
                                <div className="soft-page-play-circle-new">
                                    <span className="soft-page-play-text-new">Play</span>
                                    <div className="soft-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="soft-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="soft-page-avatars-row-new">
                                <div className="soft-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="soft-page-avatar-group-new">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team1&backgroundColor=b6e3f4&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team2&backgroundColor=c0aede&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team3&backgroundColor=ffdfbf&mouth=smile" alt="avatar" />
                                </div>
                                <div className="soft-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="soft-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="soft-page-performance-card-new">
                            <div className="soft-page-perf-header-new">
                                <div className="soft-page-perf-item-new">
                                    <span className="soft-page-perf-label-new">PERFORMANCE</span>
                                    <span className="soft-page-perf-value-new">92%</span>
                                </div>
                                <div className="soft-page-perf-item-new text-right">
                                    <span className="soft-page-perf-label-new">RESULTS</span>
                                    <span className="soft-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="soft-page-perf-chart-new">
                                <div className="soft-page-chart-col-new"><div className="soft-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="soft-page-chart-col-new"><div className="soft-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="soft-page-chart-col-new"><div className="soft-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="soft-page-hero-notch-new">
                        <div className="soft-page-bottom-bar-content-new">
                            Our <span className="soft-page-bottom-icon-new">
                                <span className="soft-page-b-icon-blue"></span>
                                <span className="soft-page-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="soft-page-about-section-new">
                <div className="soft-page-about-top-notch-content">
                    <span className="soft-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="soft-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="soft-page-about-left-new">
                        <div className="soft-page-about-left-header">
                            <h2 className="soft-page-about-left-title">Why Choose Our<br />Branding & Design?</h2>
                            <p className="soft-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="soft-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="soft-page-service-item-left-about">
                                        <span className="soft-page-service-num-new">{service.num}</span>
                                        <div className="soft-page-service-text-group">
                                            <span className="soft-page-service-name-about">{service.title}</span>
                                            <span className="soft-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="soft-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="soft-page-about-center-new">
                        <div className="soft-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="soft-page-dynamic-img-fade"
                            />
                            <div className="soft-page-about-badge-new">
                                <span className="soft-page-badge-num">50+</span>
                                <span className="soft-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="soft-page-about-right-new">
                        <div className="soft-page-about-detail-panel" key={selectedService}>
                            <div className="soft-page-detail-icon-wrap">
                                <span className="soft-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="soft-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="soft-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="soft-page-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="soft-page-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val1 || '100+'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab1 || 'Projects'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2 || '3 Weeks'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2 || 'Timeline'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3 || '4.9★'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3 || 'Rating'}</span>
                                </div>

                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2 || '3 Weeks'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2 || 'Timeline'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3 || '4.9★'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3 || 'Rating'}</span>
                                </div>
                                <div className="soft-page-detail-stat">
                                    <span className="soft-page-detail-stat-val">{pageData.duration}</span>
                                    <span className="soft-page-detail-stat-label">Timeline</span>
                                </div>
                                <div className="soft-page-detail-stat">
                                    <span className="soft-page-detail-stat-val">4.9★</span>
                                    <span className="soft-page-detail-stat-label">Rating</span>
                                </div>
                            </div>
                            <button className="soft-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="soft-page-elevate-section">
                <div className="soft-page-el-container">
                    <div className="soft-page-el-left">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogpW6UOa7fNain6K3dgzDFkeDPy3s_h7CyQ&s" alt="Team large" className="soft-page-el-img-large" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3iTpoqHv06coKh-h1zSpyKojxsU4evgnY8Q&s" className="soft-page-el-img-small-top" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVl3LVwtIjbh43mGtxTIbZ0OxDIycfS495Q&s" alt="Team bottom" className="soft-page-el-img-small-bottom" />

                

                        <div className="soft-page-el-badge-volunteer">
                            <span className="soft-page-el-vol-title">Be Our Volunteer</span>
                            <div className="soft-page-el-vol-avatars">
                                <img src="https://i.pravatar.cc/100?img=6" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=7" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=8" alt="user" />
                                <div className="soft-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="soft-page-el-right">
                        <div className="soft-page-el-preheading">About Us</div>
                        <h2 className="soft-page-el-title">Elevate your brand to<br />new heights</h2>
                        <p className="soft-page-el-desc">
                            At the core of every successful business is a compelling brand identity. We craft strategic, visually stunning branding solutions that resonate with your target audience. From comprehensive market research to pixel-perfect logo design, our team ensures every touchpoint reflects your vision.
                        </p>

                        <div className="soft-page-el-stats">
                            <div className="soft-page-el-stat-box">
                                <div className="soft-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" stroke-dasharray="4 2" />
                                        <path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="soft-page-el-stat-content">
                                    <span className="soft-page-el-stat-num">250+</span>
                                    <span className="soft-page-el-stat-label">Services we provide</span>
                                </div>
                            </div>

                            <div className="soft-page-el-stat-box">
                                <div className="soft-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" stroke-dasharray="4 2" />
                                        <path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="soft-page-el-stat-content">
                                    <span className="soft-page-el-stat-num">5+ Years</span>
                                    <span className="soft-page-el-stat-label">of experience</span>
                                </div>
                            </div>
                        </div>

                        <p className="soft-page-el-desc">
                            Explore a dynamic approach to design where creativity meets strategy, helping you build lasting relationships with your customers and driving measurable growth.
                        </p>

                        <button className="soft-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="soft-page-productivity-section">
                <div className="soft-page-prod-container">
                    <div className="soft-page-prod-left">
                        <h2 className="soft-page-prod-title">Elevate your business with a powerful brand</h2>
                        <p className="soft-page-prod-desc">
                            From strategic positioning to visual storytelling, we build a cohesive brand identity that truly resonates with your audience and drives growth.
                        </p>
                        <div className="soft-page-prod-buttons">
                            <button className="soft-page-btn-prod-primary">Get started</button>
                            <button className="soft-page-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="soft-page-prod-avatars-box">
                            <div className="soft-page-prod-avatars">
                                  <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team1&backgroundColor=b6e3f4&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team2&backgroundColor=c0aede&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team3&backgroundColor=ffdfbf&mouth=smile" alt="avatar" />
                            </div>
                            <p className="soft-page-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="soft-page-prod-right">
                        <div className="soft-page-prod-timeline">
                            <div className="soft-page-timeline-item">
                                <div className="soft-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="soft-page-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Identify your unique brand voice, mission, and precise market positioning to stand out.</p>
                                </div>
                            </div>
                            <div className="soft-page-timeline-item">
                                <div className="soft-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="soft-page-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Crafting visual foundations, including logos, icons, and typography that represent your soul.</p>
                                </div>
                            </div>
                            <div className="soft-page-timeline-item">
                                <div className="soft-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="soft-page-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Developing a compelling narrative and tone of voice that connects emotionally with users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="soft-page-courses-section">
                <div className="soft-page-container">

                    <div className="soft-page-section-header">
                        <h2 className="soft-page-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="soft-page-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="soft-page-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="soft-page-course-card" key={course.id}>

                                <div className="soft-page-course-header">
                                    <div className="soft-page-course-logo">{course.logo}</div>
                                    <h3 className="soft-page-course-title">{course.name}</h3>
                                    <p className="soft-page-course-desc">{course.description}</p>
                                </div>

                                <div className="soft-page-course-features">
                                    <ul className="soft-page-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="soft-page-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="soft-page-course-details">

                                    <div className="soft-page-detail-item">
                                        <div className="soft-page-detail-label">Course Code</div>
                                        <div className="soft-page-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="soft-page-detail-item">
                                        <div className="soft-page-detail-label">Duration</div>
                                        <div className="soft-page-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="soft-page-detail-item">
                                        <div className="soft-page-detail-label">Projects</div>
                                        <div className="soft-page-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="soft-page-mission-section">
                <div className="soft-page-mission-container">
                    <div className="soft-page-mission-header">
                        {/* <p className="soft-page-mission-label">Our Services</p> */}
                        <h2 className="soft-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="soft-page-mission-highlight">Business</span> Better Through Technology
                        </h2>
                    </div>

                    <div className="soft-page-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="soft-page-service-card bi-card-variant-1">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Logo<br />Design</h3>
                                    <p className="soft-page-service-card-subtitle">Visual foundation</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Crafting unique visual identities and memorable marks that represent your brand's essence and core values.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l5 5"></path><path d="M11 11l1 1"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="soft-page-service-card bi-card-variant-2">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Brand<br />Strategy</h3>
                                    <p className="soft-page-service-card-subtitle">Strategic growth</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Defining your unique purpose, positioning, and personality to resonate deeply with your target audience.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="soft-page-service-card bi-card-variant-7">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Brand<br />Audit</h3>
                                    <p className="soft-page-service-card-subtitle">System Review</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Performing comprehensive evaluations of your brand impact and consistency to drive strategic improvements.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="soft-page-service-card bi-card-variant-3">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Visual<br />Identity</h3>
                                    <p className="soft-page-service-card-subtitle">Cohesive system</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Developing a cohesive visual system with custom palettes, typography, and professional brand guidelines.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="soft-page-service-card bi-card-variant-4">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="soft-page-service-card-subtitle">Emotional connect</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Creating a compelling brand narrative that builds emotional connections and long-term customer loyalty.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="soft-page-service-card bi-card-variant-5">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Typography<br />& Voice</h3>
                                    <p className="soft-page-service-card-subtitle">Unique message</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Selecting perfect fonts and defining a consistent tone of voice to communicate your brand's unique message.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="soft-page-service-card bi-card-variant-6">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Market<br />Research</h3>
                                    <p className="soft-page-service-card-subtitle">Trend analysis</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Analyzing deep market trends and competitors to ensure your brand stands out and dominates the space.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="soft-page-agency-section">
                <div className="soft-page-agency-container">
                    <div className="soft-page-agency-header">
                        {/* <p className="soft-page-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="soft-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="soft-page-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="soft-page-agency-grid">
                        <div className="soft-page-agency-left">
                            <div className="soft-page-agency-image-card">
                                <div className="soft-page-dot-pattern-circle"></div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpxhRHiu6mYX02c5cGI90JkcGNyhQi2b2p4Q&s" alt="Our Expert" className="soft-page-portrait-img" />
                                <div className="soft-page-exp-badge">
                                    <span className="soft-page-exp-number">5+</span>
                                    <span className="soft-page-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="soft-page-agency-right">
                            <div className="soft-page-agency-info-row">
                                <div className="soft-page-info-col">
                                    <p className="soft-page-info-subtitle">WHO WE ARE</p>
                                    <p className="soft-page-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>
                           
                                </div>
                                <div className="soft-page-info-features">
                                    <p className="soft-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="soft-page-features-list">
                                        <li><span className="soft-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="soft-page-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="soft-page-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="soft-page-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="soft-page-agency-bottom-img-wrap">
                                <div className="soft-page-dot-pattern-square"></div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsTuKAOqSwr82UfGoSX2TP6PVHrzOYHjKsg&s" alt="Our Workplace" className="soft-page-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="soft-page-testimonial-section">
                <div className="soft-page-testimonial-container">
                    <p className="soft-page-testimonial-label">Testimonial</p>
                    <h2 className="soft-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="soft-page-testimonial-scroll-wrapper">
                        <div className="soft-page-testimonial-scroll-mask-left"></div>
                        <div className="soft-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="soft-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="soft-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="soft-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="soft-page-testimonial-name">{feedback.name}</h4>
                                    <p className="soft-page-testimonial-role">{feedback.role}</p>
                                    <p className="soft-page-testimonial-text">{feedback.text}</p>
                                    <div className="soft-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="soft-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="soft-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="soft-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default SoftwareTechSolution;
