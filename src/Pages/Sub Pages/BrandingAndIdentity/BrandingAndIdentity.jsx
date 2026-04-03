import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './BrandingAndIdentity.css';
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
const BrandingAndIdentity = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1,
            num: '01',
            title: 'Logo Design',
            icon: '✦',
            short: 'Visual foundation of your brand',
            description: 'A logo captures a brand\'s personality and values, creates instant recognition, and serves as the foundation for your identity. It communicates your story at a glance and leaves a lasting impression on your audience. Our expert design team ensures every curve, color, and typographical choice strictly aligns with your core business strategy. We deliver versatile, highly scalable logos that look completely stunning on everything from mobile screens to massive billboards, ensuring your brand stands out in a crowded marketplace.',
            image: logoDesignImg
        },
        {
            id: 2,
            num: '02',
            title: 'Color Palette',
            icon: '◈',
            short: 'Emotion through colour',
            description: 'Defines the emotional tone and visual consistency of your entire brand ecosystem. Carefully chosen colours influence perception and enhance memorability across all touchpoints. The right palette builds brand recognition and evokes the exact feelings your audience should associate with you. We develop comprehensive color systems, including primary, secondary, and accent colors, backed by robust color psychology to maximize user engagement. Your new palette will ensure accessibility standards are met while maintaining a vibrant, modern aesthetic.',
            image: colorPaletteImg
        },
        {
            id: 3,
            num: '03',
            title: 'Typography',
            icon: 'Aa',
            short: 'Voice through type',
            description: 'Shapes how a brand communicates visually, acting as the silent voice of your messaging. Fonts reflect personality, improve readability, and unify marketing materials across digital and print media. Typography creates clear hierarchy and guides your audience through your message effortlessly. Our typographers select and strategically pair typefaces that deeply represent your brand\'s unique character—whether it\'s bold and modern, or elegant and timeless. We provide complete type scales and web-safe font stacks for seamless integration.',
            image: typographyImg
        },
        {
            id: 4,
            num: '04',
            title: 'Visual Style & Imagery',
            icon: '⬡',
            short: 'Storytelling through visuals',
            description: 'Includes carefully curated imagery, custom icons, precise geometric shapes, and dynamic layout structures. It creates recognizable aesthetics and enhances your brand\'s storytelling capabilities instantly. A consistent visual style ensures every touchpoint feels unmistakably like your brand. We establish comprehensive visual guidelines that dictate photography direction, custom illustration styles, and graphic treatments. This cohesive approach significantly guarantees that your marketing materials always feel unified, professional, and visually striking regardless of the medium.',
            image: visualStyleImg
        },
        {
            id: 5,
            num: '05',
            title: 'Environmental Branding',
            icon: '◻',
            short: 'Brand in physical space',
            description: 'Translates the brand identity into physical, three-dimensional spaces seamlessly. It shapes customer experience, reinforces brand values, and creates immersive environments that deepen audience connection. Whether it is a corporate headquarters, a retail storefront, or a massive exhibition booth, we design spatial experiences that breathe life into your brand. We consider critical signage, wayfinding, interior graphics, and high-quality material finishes to ensure your physical presence is just as impactful as your digital one.',
            image: environmentImg
        },
        {
            id: 6,
            num: '06',
            title: 'Motion & Interaction',
            icon: '↻',
            short: 'Bringing your brand to life',
            description: 'Defines how specific visual elements move, seamlessly transition, and respond to user input across multiple platforms. It adds unmatched dynamism, vivid personality, and active engagement to digital experiences — making your brand feel incredibly alive and highly responsive. We design subtle micro-interactions, sleek loading animations, and seamless page transitions that consistently delight active users. By establishing a signature motion language, we ensure that every hover effect and element reveal feels fluid, purposeful, and perfectly aligned with your brand.',
            image: logoDesignImg
        },
        {
            id: 7,
            num: '07',
            title: 'Brand Archetype',
            icon: '◎',
            short: 'Personality model of your brand',
            description: 'Serves as the foundational personality model and comprehensive psychological framework for a brand. It creates a deep, universal human connection by tapping into highly recognizable character patterns that audiences instinctively understand and explicitly trust. We help you systematically identify and cultivate your core archetype—be it the Creator, the Hero, or the Sage—to rapidly drive all future communication. This newfound clarity deeply empowers your team to maintain a consistent tone of voice, shaping compelling narratives that truly resonate.',
            image: visualStyleImg
        },
    ];

    const pageData = {
        id: 3,
        title: "BRANDING & IDENTITY DESIGN",
        description: "We craft unique visual identities, strategic messaging, and memorable experiences that elevate your business and leave a lasting impression.",
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
        <div className="bi-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="bi-hero-section-new">
                <div className="bi-hero-container-new">

                    {/* Left Panel */}
                    <div className="bi-hero-left-new">
                        <h4 className="bi-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="bi-hero-title-new">{pageData.title}</h1>
                        <h1 className="bi-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="bi-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="bi-hero-buttons-new">
                            <button className="bi-btn-get-started-new">GET STARTED</button>
                            <button className="bi-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="bi-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="bi-hero-stats-new">
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">15<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Partners</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">300<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Clients</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">4.9<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="bi-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">40<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Awards</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">500<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Projects</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">5<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="bi-hero-right-new">
                        <div className="bi-right-top-new">
                            {/* <p className="bi-case-subtitle-new">Case Examples</p> */}
                            <div className="bi-title-play-row">
                                <h2 className="bi-case-title-new">About Our<br />company</h2>
                                <div className="bi-play-circle-new">
                                    <span className="bi-play-text-new">Play</span>
                                    <div className="bi-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="bi-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="bi-avatars-row-new">
                                <div className="bi-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="bi-avatar-group-new">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team1&backgroundColor=b6e3f4&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team2&backgroundColor=c0aede&mouth=smile" alt="avatar" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Team3&backgroundColor=ffdfbf&mouth=smile" alt="avatar" />
                                </div>
                                <div className="bi-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="bi-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="bi-performance-card-new">
                            <div className="bi-perf-header-new">
                                <div className="bi-perf-item-new">
                                    <span className="bi-perf-label-new">PERFORMANCE</span>
                                    <span className="bi-perf-value-new">92%</span>
                                </div>
                                <div className="bi-perf-item-new text-right">
                                    <span className="bi-perf-label-new">RESULTS</span>
                                    <span className="bi-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="bi-perf-chart-new">
                                <div className="bi-chart-col-new"><div className="bi-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="bi-chart-col-new"><div className="bi-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="bi-chart-col-new"><div className="bi-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bi-hero-notch-new">
                        <div className="bi-bottom-bar-content-new">
                            Our <span className="bi-bottom-icon-new">
                                <span className="bi-b-icon-blue"></span>
                                <span className="bi-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="bi-about-section-new">
                <div className="bi-about-top-notch-content">
                    <span className="bi-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="bi-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="bi-about-left-new">
                        <div className="bi-about-left-header">
                            <h2 className="bi-about-left-title">Why Choose Our<br />Branding & Design?</h2>
                            <p className="bi-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="bi-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="bi-service-item-left-about">
                                        <span className="bi-service-num-new">{service.num}</span>
                                        <div className="bi-service-text-group">
                                            <span className="bi-service-name-about">{service.title}</span>
                                            <span className="bi-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="bi-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="bi-about-center-new">
                        <div className="bi-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="bi-dynamic-img-fade"
                            />
                            <div className="bi-about-badge-new">
                                <span className="bi-badge-num">50+</span>
                                <span className="bi-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="bi-about-right-new">
                        <div className="bi-about-detail-panel" key={selectedService}>
                            <div className="bi-detail-icon-wrap">
                                <span className="bi-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="bi-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="bi-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="bi-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="bi-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{pageData.projects}</span>
                                    <span className="bi-detail-stat-label">Projects</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{pageData.duration}</span>
                                    <span className="bi-detail-stat-label">Timeline</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">4.9★</span>
                                    <span className="bi-detail-stat-label">Rating</span>
                                </div>
                            </div>
                            <button className="bi-detail-cta">Get Started →</button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="bi-elevate-section">
                <div className="bi-el-container">
                    <div className="bi-el-left">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team large" className="bi-el-img-large" />
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team top" className="bi-el-img-small-top" />
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team bottom" className="bi-el-img-small-bottom" />

                        <div className="bi-el-badge-rocket">
                            <svg viewBox="0 0 24 24"><path d="M12 2C8.5 2 7 5.5 7 9c0 2.2 1.3 4.2 3.2 5.2L10 22l2.5-1.5L15 22l-.2-7.8C16.7 13.2 18 11.2 18 9c0-3.5-1.5-7-6-7zm-1 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" /></svg>
                        </div>

                        <div className="bi-el-badge-volunteer">
                            <span className="bi-el-vol-title">Be Our Volunteer</span>
                            <div className="bi-el-vol-avatars">
                                <img src="https://i.pravatar.cc/100?img=6" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=7" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=8" alt="user" />
                                <div className="bi-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="bi-el-right">
                        <div className="bi-el-preheading">About Us</div>
                        <h2 className="bi-el-title">Elevate your brand to<br />new heights</h2>
                        <p className="bi-el-desc">
                            At the core of every successful business is a compelling brand identity. We craft strategic, visually stunning branding solutions that resonate with your target audience. From comprehensive market research to pixel-perfect logo design, our team ensures every touchpoint reflects your vision.
                        </p>

                        <div className="bi-el-stats">
                            <div className="bi-el-stat-box">
                                <div className="bi-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" stroke-dasharray="4 2" />
                                        <path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="bi-el-stat-content">
                                    <span className="bi-el-stat-num">250+</span>
                                    <span className="bi-el-stat-label">Services we provide</span>
                                </div>
                            </div>

                            <div className="bi-el-stat-box">
                                <div className="bi-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" stroke-dasharray="4 2" />
                                        <path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="bi-el-stat-content">
                                    <span className="bi-el-stat-num">5+ Years</span>
                                    <span className="bi-el-stat-label">of experience</span>
                                </div>
                            </div>
                        </div>

                        <p className="bi-el-desc">
                            Explore a dynamic approach to design where creativity meets strategy, helping you build lasting relationships with your customers and driving measurable growth.
                        </p>

                        <button className="bi-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="bi-productivity-section">
                <div className="bi-prod-container">
                    <div className="bi-prod-left">
                        <h2 className="bi-prod-title">Elevate your business with a powerful brand</h2>
                        <p className="bi-prod-desc">
                            From strategic positioning to visual storytelling, we build a cohesive brand identity that truly resonates with your audience and drives growth.
                        </p>
                        <div className="bi-prod-buttons">
                            <button className="bi-btn-prod-primary">Get started</button>
                            <button className="bi-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="bi-prod-avatars-box">
                            <div className="bi-prod-avatars">
                                <img src="https://i.pravatar.cc/100?img=1" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=2" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=3" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=4" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=5" alt="user" />
                            </div>
                            <p className="bi-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="bi-prod-right">
                        <div className="bi-prod-timeline">
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Identify your unique brand voice, mission, and precise market positioning to stand out.</p>
                                </div>
                            </div>
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Crafting visual foundations, including logos, icons, and typography that represent your soul.</p>
                                </div>
                            </div>
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Developing a compelling narrative and tone of voice that connects emotionally with users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="bi-courses-section">
                <div className="bi-container">

                    <div className="bi-section-header">
                        <h2 className="bi-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="bi-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="bi-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="bi-course-card" key={course.id}>

                                <div className="bi-course-header">
                                    <div className="bi-course-logo">{course.logo}</div>
                                    <h3 className="bi-course-title">{course.name}</h3>
                                    <p className="bi-course-desc">{course.description}</p>
                                </div>

                                <div className="bi-course-features">
                                    <ul className="bi-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="bi-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bi-course-details">

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Course Code</div>
                                        <div className="bi-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Duration</div>
                                        <div className="bi-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Projects</div>
                                        <div className="bi-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="bi-mission-section">
                <div className="bi-mission-container">
                    <div className="bi-mission-header">
                        {/* <p className="bi-mission-label">Our Services</p> */}
                        <h2 className="bi-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="bi-mission-highlight">Business</span> Better Through Technology
                        </h2>
                    </div>

                    <div className="bi-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="bi-service-card bi-card-variant-1">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Logo<br />Design</h3>
                                    <p className="bi-service-card-subtitle">Visual foundation</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Crafting unique visual identities and memorable marks that represent your brand's essence and core values.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l5 5"></path><path d="M11 11l1 1"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="bi-service-card bi-card-variant-2">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Brand<br />Strategy</h3>
                                    <p className="bi-service-card-subtitle">Strategic growth</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Defining your unique purpose, positioning, and personality to resonate deeply with your target audience.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="bi-service-card bi-card-variant-7">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Brand<br />Audit</h3>
                                    <p className="bi-service-card-subtitle">System Review</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Performing comprehensive evaluations of your brand impact and consistency to drive strategic improvements.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="bi-service-card bi-card-variant-3">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Visual<br />Identity</h3>
                                    <p className="bi-service-card-subtitle">Cohesive system</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Developing a cohesive visual system with custom palettes, typography, and professional brand guidelines.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="bi-service-card bi-card-variant-4">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="bi-service-card-subtitle">Emotional connect</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Creating a compelling brand narrative that builds emotional connections and long-term customer loyalty.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="bi-service-card bi-card-variant-5">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Typography<br />& Voice</h3>
                                    <p className="bi-service-card-subtitle">Unique message</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Selecting perfect fonts and defining a consistent tone of voice to communicate your brand's unique message.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="bi-service-card bi-card-variant-6">
                            <div className="bi-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-service-card-title">Market<br />Research</h3>
                                    <p className="bi-service-card-subtitle">Trend analysis</p>
                                </div>
                                <div className="bi-card-badge">
                                    <div className="bi-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="bi-service-card-desc">Analyzing deep market trends and competitors to ensure your brand stands out and dominates the space.</p>
                            <div className="bi-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="bi-agency-section">
                <div className="bi-agency-container">
                    <div className="bi-agency-header">
                        {/* <p className="bi-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="bi-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="bi-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="bi-agency-grid">
                        <div className="bi-agency-left">
                            <div className="bi-agency-image-card">
                                <div className="bi-dot-pattern-circle"></div>
                                <img src={portraitImg} alt="Our Expert" className="bi-portrait-img" />
                                <div className="bi-exp-badge">
                                    <span className="bi-exp-number">5+</span>
                                    <span className="bi-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="bi-agency-right">
                            <div className="bi-agency-info-row">
                                <div className="bi-info-col">
                                    <p className="bi-info-subtitle">WHO WE ARE</p>
                                    <p className="bi-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>
                                    <button className="bi-agency-more-btn">MORE INFORMATION</button>
                                </div>
                                <div className="bi-info-features">
                                    <p className="bi-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="bi-features-list">
                                        <li><span className="bi-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="bi-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="bi-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="bi-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bi-agency-bottom-img-wrap">
                                <div className="bi-dot-pattern-square"></div>
                                <img src={landscapeImg} alt="Our Workplace" className="bi-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bi-testimonial-section">
                <div className="bi-testimonial-container">
                    <p className="bi-testimonial-label">Testimonial</p>
                    <h2 className="bi-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="bi-testimonial-scroll-wrapper">
                        <div className="bi-testimonial-scroll-mask-left"></div>
                        <div className="bi-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="bi-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="bi-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="bi-testimonial-avatar" />
                                    </div>
                                    <h4 className="bi-testimonial-name">{feedback.name}</h4>
                                    <p className="bi-testimonial-role">{feedback.role}</p>
                                    <p className="bi-testimonial-text">{feedback.text}</p>
                                    <div className="bi-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="bi-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="bi-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bi-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default BrandingAndIdentity;