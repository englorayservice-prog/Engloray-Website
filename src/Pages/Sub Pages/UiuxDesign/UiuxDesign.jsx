import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './UiuxDesign.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
// import NewFooter1 from '../../Sub Pages/subFooterOne/NewFooter1';


import iphone14Img from '../../../assets/Iphone14.png';

import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import maleAvatar from '../../../assets/male_avatar.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import femaleAvatar from '../../../assets/female_avatar.png';

// import businessDataImg from '../../../assets/images/Business Data Analytics Solution.png';
// import dashboardImg from '../../../assets/images/Data Dashboard & Visualization.jpg';
// import customerInsightsImg from '../../../assets/images/Customer Insights & Segmentation.jpg';
// import marketingAnalyticsImg from '../../../assets/images/Marketing Analytics Solution.jpg';

const UIDesignServices = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1, num: '01', title: 'UI/UX Strategy', icon: '✦', short: 'Data-driven design decisions',
            features: [
                'User persona development workshops',
                'Competitive analysis & audit',
                'User journey mapping sessions',
                'Usability testing protocols',
                'Information architecture planning',
                'Design system governance'
            ],
            stats: { val1: '89+', lab1: 'Research Studies', val2: '4 Weeks', lab2: 'Avg Discovery', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Our UI/UX Strategy & Research services help organizations make informed design decisions based on real user data. We conduct comprehensive user research, create detailed personas, map user journeys, and develop evidence-based design strategies that reduce risk and ensure your product resonates with target audiences.',
            image: "https://i.pinimg.com/1200x/d5/a4/6f/d5a46f09fe801afa4888c8252a255abf.jpg"
        },
        {
            id: 2, num: '02', title: 'User Interface Design', icon: '◈', short: 'Beautiful, intuitive interfaces',
            features: [
                'High-fidelity pixel-perfect mockups',
                'Responsive web & mobile design',
                'Design systems & component libraries',
                'Dark mode & accessibility support',
                'Interactive prototyping & animations',
                'Developer-ready design handoff'
            ],
            stats: { val1: '234+', lab1: 'Interfaces', val2: '3 Weeks', lab2: 'Avg Delivery', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'User Interface Design services deliver visually stunning, highly functional interfaces that users love to interact with. Our designers craft pixel-perfect screens, design systems, and interactive prototypes that balance aesthetics with usability, ensuring your digital product stands out in crowded markets.',
            image: "https://i.pinimg.com/736x/76/07/7a/76077a1007ed42081bc1c0e4e549b2ad.jpg"
        },
        {
            id: 3, num: '03', title: 'User Experience Design', icon: '✦', short: 'Seamless, enjoyable user flows',
            features: [
                'Wireframing & low-fidelity prototypes',
                'User flow optimization',
                'Interaction design patterns',
                'Micro-interaction animations',
                'Navigation architecture planning',
                'Conversion rate optimization'
            ],
            stats: { val1: '176+', lab1: 'Projects', val2: '5 Weeks', lab2: 'Avg Timeline', val3: '4.8★', lab3: 'Satisfaction' },
            description: 'User Experience Design focuses on creating meaningful, seamless interactions between users and your digital product. We map user flows, design intuitive navigation systems, and optimize every touchpoint to reduce friction, increase engagement, and drive desired user behaviors.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4, num: '04', title: 'Mobile App Design', icon: '◈', short: 'Native & cross-platform experiences',
            features: [
                'iOS & Android native guidelines',
                'Responsive mobile-first layouts',
                'Gesture & touch optimization',
                'App store screenshot design',
                'Onboarding flow design',
                'Mobile component libraries'
            ],
            stats: { val1: '98+', lab1: 'Apps Designed', val2: '6 Weeks', lab2: 'Avg Speed', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Mobile App Design services create engaging, thumb-friendly experiences for iOS and Android platforms. We follow platform-specific design guidelines while maintaining brand consistency, delivering designs that feel native, perform smoothly, and keep users coming back.',
            image: "https://i.pinimg.com/736x/5a/f3/76/5af376c6db4e01d502d71527ccda2baf.jpg"
        },
        {
            id: 5, num: '05', title: 'Design Systems', icon: '✦', short: 'Scalable, consistent design language',
            features: [
                'Component-based architecture',
                'Design tokens & variables',
                'Style guide documentation',
                'Accessibility (WCAG) compliance',
                'Cross-platform consistency',
                'Developer handoff tools'
            ],
            stats: { val1: '67+', lab1: 'Systems Built', val2: '8 Weeks', lab2: 'Avg Build', val3: '4.7★', lab3: 'Satisfaction' },
            description: 'Design Systems help teams scale their UI across products while maintaining consistency and efficiency. We build comprehensive design systems including component libraries, design tokens, usage guidelines, and developer documentation that accelerate product development and ensure brand cohesion.',
            image: "https://i.pinimg.com/736x/5e/88/ed/5e88ed774a4fa21fac299e2be60b8f91.jpg"
        }
    ];

    const pageData = {
        title: 'UI/UX DESIGN',
        description: 'Create exceptional digital experiences that users love and remember.',
        fullDescription: 'We deliver user-centered design solutions that combine aesthetics with functionality — from research and strategy to pixel-perfect interfaces.',
    };

    const feedbacks = [
        {
            id: 1, name: 'Sarah Johnson', role: 'Product Director, DesignHub',
            photo: cartoonFemale1,
            text: 'The design system Engloray built transformed our product development. Our team now ships features 3x faster with complete visual consistency. Outstanding strategic and executional excellence.',
            stars: 5
        },
        {
            id: 2, name: 'Michael Chen', role: 'Founder, AppVenture',
            photo: cartoonMale2,
            text: 'Our mobile app redesign increased user retention by 45%. The team understood our users deeply and delivered an interface that feels both fresh and intuitive. Highly recommended for any digital product.',
            stars: 5
        },
        {
            id: 3, name: 'Emma Williams', role: 'Head of Product',
            photo: cartoonFemale2,
            text: 'The UX research they conducted uncovered insights we completely missed. Their recommendations transformed our product roadmap and saved us months of building the wrong features. Invaluable partnership.',
            stars: 5
        },
        {
            id: 4, name: 'David Kumar', role: 'Creative Director',
            photo: cartoonMale1,
            text: 'From wireframes to final UI, every pixel was thoughtfully considered. The team delivered a design system that our internal team can actually use and maintain. Best design investment we have made.',
            stars: 5
        },
        {
            id: 5, name: 'Lisa Thompson', role: 'CEO, StartupScale',
            photo: cartoonFemale3,
            text: 'The user testing and iterative design process uncovered usability issues before we launched. Our post-launch user satisfaction scores are the highest ever. Exceptional user-centered approach.',
            stars: 5
        },
        {
            id: 6, name: 'James Wilson', role: 'Product Manager',
            photo: cartoonMale3,
            text: 'The mobile app designs they created are stunning. Our users consistently praise the intuitive navigation and beautiful visuals. The team truly understands modern design principles.',
            stars: 5
        },
        {
            id: 7, name: 'Natalie Garcia', role: 'Design Lead',
            photo: femaleAvatar,
            text: 'Working with Engloray elevated our entire product\'s design maturity. Their strategic guidance and hands-on execution helped us create a cohesive experience across all our platforms.',
            stars: 5
        },
        {
            id: 8, name: 'Robert Taylor', role: 'CPO, FinTech Plus',
            photo: maleAvatar,
            text: 'The user research and persona development gave us clarity on who we are building for. Every design decision now has user data behind it. Transformative for our organization.',
            stars: 5
        }
    ];

    const extraImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Design Workshop',
            description: 'Collaborative sessions mapping user journeys and defining design strategies'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Wireframing Process',
            description: 'Rapid prototyping and iterative design refinement'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'UI Design Studio',
            description: 'Creating pixel-perfect interfaces and design systems'
        }
    ];

    const internshipCourses = [
        {
            id: 1, name: 'UI Design Fundamentals', esc: 'UID101', duration: '8 Weeks',
            description: 'Master core UI design principles, from color theory and typography to layout and component design.',
            logo: '🎨',
            features: ['Design Principles', 'Color Theory & Typography', 'Figma Mastery', 'Responsive Design', 'Component Libraries', 'Design Handoff']
        },
        {
            id: 2, name: 'UX Research & Strategy', esc: 'UXR201', duration: '12 Weeks',
            description: 'Learn user research methodologies, persona development, journey mapping, and usability testing.',
            logo: '🔍',
            features: ['User Interviews', 'Persona Development', 'Journey Mapping', 'Usability Testing', 'Research Synthesis', 'Strategy Development']
        },
        {
            id: 3, name: 'Interaction Design', esc: 'IXD301', duration: '10 Weeks',
            description: 'Advanced interaction design, micro-animations, prototyping, and motion design principles.',
            logo: '✨',
            features: ['Micro-interactions', 'Prototyping', 'Motion Design', 'Gesture Design', 'Accessibility', 'User Testing']
        }
    ];

    // WhatsApp navigation function
    const handleWhatsAppNavigation = () => {
        window.open('https://wa.me/916381759909', '_blank');
    };

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

    useEffect(() => {
        if (isExpanded) {
            const timeouts = [];
            extraImages.forEach((img, index) => {
                const timeout = setTimeout(() => {
                    setVisibleImages(prev => [...prev, img.id]);
                }, index * 300);
                timeouts.push(timeout);
            });
            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
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
        <div className="ui-page-page">
            <TopNavBar />
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="ui-page-hero-section-new">
                <div className="ui-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="ui-page-hero-left-new">
                        <h4 className="ui-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="ui-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="ui-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray UI/UX Design iPhone Mockup"
                                className="ui-page-hero-iphone14-img"
                                style={{ maxWidth: '55%', height: '20%' }}
                            />
                        </h1>

                        <div className="ui-page-hero-buttons-new">
                            <button onClick={handleWhatsAppNavigation} className="ui-page-btn-get-started-new">GET STARTED</button>
                            <button onClick={handleWhatsAppNavigation} className="ui-page-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="ui-page-hero-desc-new">{pageData.fullDescription}</p>

                        <div className="ui-page-hero-stats-new">
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">25<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Design Partners</span>
                            </div>
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">350<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Happy Clients</span>
                            </div>
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">4.9<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Client Rating</span>
                            </div>
                        </div>

                        <div className="ui-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">45<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Design Awards</span>
                            </div>
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">600<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Design Projects</span>
                            </div>
                            <div className="ui-page-stat-item-new">
                                <div className="ui-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-page-stat-number-new">6<span className="ui-page-stat-dash">+</span></span>
                                </div>
                                <span className="ui-page-stat-label-new">Years Experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="ui-page-hero-right-new">
                        <div className="ui-page-right-top-new">
                            <div className="ui-page-title-play-row">
                                <h2 className="ui-page-case-title-new">About Our<br />Design Studio</h2>
                                <div className="ui-page-play-circle-new">
                                    <span className="ui-page-play-text-new">Play</span>
                                    <div className="ui-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="ui-page-about-company-desc-new">
                                We are a specialized UI/UX design agency creating digital experiences that users love. Our team of designers, researchers, and strategists focuses on human-centered design, delivering interfaces that are both beautiful and functional — helping businesses build products that truly resonate with their audiences.
                            </p>

                            <div className="ui-page-avatars-row-new">
                                <div className="ui-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="ui-page-avatar-group-new">
                                    <img src="https://t3.ftcdn.net/jpg/07/28/48/98/360_F_728489827_qtQHjlMEeD53QhTdUEtdOvNPQw21pYjh.jpg" alt="avatar" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ53aAyRQ8l1h3GkPHeexbL9wyuTlrf1laQ&s" alt="avatar" />
                                    <img src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" alt="avatar" />
                                </div>
                                <div className="ui-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="ui-page-performance-card-new">
                            <div className="ui-page-perf-header-new">
                                <div className="ui-page-perf-item-new">
                                    <span className="ui-page-perf-label-new">USER SATISFACTION</span>
                                    <span className="ui-page-perf-value-new">96%</span>
                                </div>
                                <div className="ui-page-perf-item-new text-right">
                                    <span className="ui-page-perf-label-new">RETENTION RATE</span>
                                    <span className="ui-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="ui-page-perf-chart-new">
                                <div className="ui-page-chart-col-new"><div className="ui-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="ui-page-chart-col-new"><div className="ui-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="ui-page-chart-col-new"><div className="ui-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services / About Section ── */}
            <section className="ui-page-about-section-new">
                <div className="ui-page-about-top-notch-content">
                    <span className="ui-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="ui-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="ui-page-about-left-new">
                        <div className="ui-page-about-left-header">
                            <h2 className="ui-page-about-left-title">Why Choose Our<br />UI/UX Design Services?</h2>
                            <p className="ui-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="ui-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="ui-page-service-item-left-about">
                                        <span className="ui-page-service-num-new">{service.num}</span>
                                        <div className="ui-page-service-text-group">
                                            <span className="ui-page-service-name-about">{service.title}</span>
                                            <span className="ui-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="ui-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="ui-page-about-center-new">
                        <div className="ui-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="ui-page-dynamic-img-fade"
                            />
                            <div className="ui-page-about-badge-new">
                                <span className="ui-page-badge-num">50+</span>
                                <span className="ui-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="ui-page-about-right-new">
                        <div className="ui-page-about-detail-panel" key={selectedService}>
                            <div className="ui-page-detail-icon-wrap">
                                <span className="ui-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="ui-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="ui-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="ui-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="ui-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="ui-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="ui-page-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val1}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab1}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3}</span>
                                </div>
                            </div>
                            <button onClick={handleWhatsAppNavigation} className="ui-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Elevate Section ── */}
            <section className="ui-page-elevate-section">
                <div className="ui-page-el-container">
                    <div className="ui-page-el-left">
                        <img
                            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Design team collaboration"
                            className="ui-page-el-img-large"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Wireframing session"
                            className="ui-page-el-img-small-top"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="UI design process"
                            className="ui-page-el-img-small-bottom"
                        />

                        <div className="ui-page-el-badge-volunteer">
                            <span className="ui-page-el-vol-title">Join Our Team</span>
                            <div className="ui-page-el-vol-avatars">
                                <img src={cartoonMale1} alt="user" />
                                <img src={cartoonMale2} alt="user" />
                                <img src={cartoonMale3} alt="user" />
                                <div className="ui-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>

                    <div className="ui-page-el-right">
                        <div className="ui-page-el-preheading">About Us</div>
                        <h2 className="ui-page-el-title">Elevate your brand<br />with exceptional design</h2>
                        <p className="ui-page-el-desc">
                            At the core of every successful digital product is thoughtful, user-centered design. We create end-to-end design solutions — from user research and strategy to pixel-perfect interfaces and design systems — that give your users experiences they love and remember.
                        </p>

                        <div className="ui-page-el-stats">
                            <div className="ui-page-el-stat-box">
                                <div className="ui-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="7" strokeDasharray="4 2" /><path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" /></svg>
                                </div>
                                <div className="ui-page-el-stat-content">
                                    <span className="ui-page-el-stat-num">350+</span>
                                    <span className="ui-page-el-stat-label">Design solutions delivered</span>
                                </div>
                            </div>
                            <div className="ui-page-el-stat-box">
                                <div className="ui-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="7" strokeDasharray="4 2" /><path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" /></svg>
                                </div>
                                <div className="ui-page-el-stat-content">
                                    <span className="ui-page-el-stat-num">6+ Years</span>
                                    <span className="ui-page-el-stat-label">of design expertise</span>
                                </div>
                            </div>
                        </div>

                        <p className="ui-page-el-desc">
                            Explore a human-centered approach to design where creativity meets usability — helping you build digital products that users truly love and that drive measurable business results.
                        </p>

                        <button onClick={handleWhatsAppNavigation} className="ui-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* ── Productivity / Process Section ── */}
            <section className="ui-page-productivity-section">
                <div className="ui-page-prod-container">
                    <div className="ui-page-prod-left">
                        <h2 className="ui-page-prod-title">Power your product with a user-centered design process</h2>
                        <p className="ui-page-prod-desc">
                            From user research and wireframing to high-fidelity prototyping and design systems, we build end-to-end design solutions that turn ideas into exceptional digital experiences.
                        </p>
                        <div className="ui-page-prod-buttons">
                            <button onClick={handleWhatsAppNavigation} className="ui-page-btn-prod-primary">Get started</button>
                            <button onClick={handleWhatsAppNavigation} className="ui-page-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="ui-page-prod-avatars-box">
                            <div className="ui-page-prod-avatars">
                                <img src={cartoonFemale1} alt="user" />
                                <img src={cartoonFemale2} alt="user" />
                                <img src={cartoonFemale3} alt="user" />
                            </div>
                            <p className="ui-page-prod-avatar-text">
                                Trusted by design-led companies worldwide —<br />we help you create experiences users love!
                            </p>
                        </div>
                    </div>

                    <div className="ui-page-prod-right">
                        <div className="ui-page-prod-timeline">
                            <div className="ui-page-timeline-item">
                                <div className="ui-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="ui-page-timeline-content">
                                    <h3>DISCOVER</h3>
                                    <p>Research your users, understand their needs, and map the user journey unique to your product.</p>
                                </div>
                            </div>
                            <div className="ui-page-timeline-item">
                                <div className="ui-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <div className="ui-page-timeline-content">
                                    <h3>DESIGN</h3>
                                    <p>Create wireframes, prototypes, and pixel-perfect interfaces tailored to your brand and users.</p>
                                </div>
                            </div>
                            <div className="ui-page-timeline-item">
                                <div className="ui-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="ui-page-timeline-content">
                                    <h3>DELIVER</h3>
                                    <p>Hand off production-ready designs, design systems, and assets for development implementation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission / Service Cards Section ── */}
            <section className="ui-page-mission-section">
                <div className="ui-page-mission-container">
                    <div className="ui-page-mission-header">
                        <h2 className="ui-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="ui-page-mission-highlight">UI/UX Design</span> Smarter Through User Research
                        </h2>
                    </div>

                    <div className="ui-page-services-grid">

                        {/* Card 1 */}
                        <div className="ui-page-service-card bi-card-variant-1">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">User<br />Research</h3>
                                    <p className="ui-page-service-card-subtitle">Data-driven insights</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Conduct comprehensive user research, create detailed personas, and uncover insights that drive strategic design decisions.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="ui-page-service-card bi-card-variant-2">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">UI &<br />Visual Design</h3>
                                    <p className="ui-page-service-card-subtitle">Pixel-perfect interfaces</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Create stunning, responsive interfaces that balance aesthetics with usability, delivering exceptional user experiences.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="ui-page-service-card bi-card-variant-7">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">UX &<br />Interaction</h3>
                                    <p className="ui-page-service-card-subtitle">Seamless experiences</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Design intuitive user flows, micro-interactions, and navigation systems that delight users and drive engagement.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="ui-page-service-card bi-card-variant-3">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">Design<br />Systems</h3>
                                    <p className="ui-page-service-card-subtitle">Scalable consistency</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Build comprehensive design systems, component libraries, and style guides that accelerate product development.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="ui-page-service-card bi-card-variant-4">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">Mobile<br />App Design</h3>
                                    <p className="ui-page-service-card-subtitle">Native experiences</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Design engaging mobile experiences for iOS and Android following platform-specific guidelines and best practices.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="ui-page-service-card bi-card-variant-5">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">Prototyping<br />& Testing</h3>
                                    <p className="ui-page-service-card-subtitle">Validate early</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Create interactive prototypes and conduct usability testing to validate design decisions before development.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="ui-page-service-card bi-card-variant-6">
                            <div className="ui-page-card-header">
                                <div className="ui-page-card-title-group">
                                    <h3 className="ui-page-service-card-title">Accessibility<br />Design</h3>
                                    <p className="ui-page-service-card-subtitle">Inclusive experiences</p>
                                </div>
                                <div className="ui-page-card-badge">
                                    <div className="ui-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ui-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="ui-page-service-card-desc">Design inclusive digital products that meet WCAG standards, ensuring accessibility for all users.</p>
                            <div className="ui-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Agency Section ── */}
            <section className="ui-page-agency-section">
                <div className="ui-page-agency-container">
                    <div className="ui-page-agency-header">
                        <h2 className="ui-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="ui-page-lime-highlight">UI/UX DESIGN AGENCY</span>
                        </h2>
                    </div>

                    <div className="ui-page-agency-grid">
                        <div className="ui-page-agency-left">
                            <div className="ui-page-agency-image-card">
                                <div className="ui-page-dot-pattern-circle"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Design team collaboration"
                                    className="ui-page-portrait-img"
                                />
                                <div className="ui-page-exp-badge">
                                    <span className="ui-page-exp-number">6+</span>
                                    <span className="ui-page-exp-text">Years of<br />Design Excellence</span>
                                </div>
                            </div>
                        </div>

                        <div className="ui-page-agency-right">
                            <div className="ui-page-agency-info-row">
                                <div className="ui-page-info-col">
                                    <p className="ui-page-info-subtitle">WHO WE ARE</p>
                                    <p className="ui-page-info-desc">
                                        We are a passionate team of UI/UX designers, researchers, and strategists dedicated to creating digital experiences that users love. Our mission is to help businesses build products that are not only beautiful but also intuitive, accessible, and effective — driving real business results through human-centered design.
                                    </p>
                                </div>
                                <div className="ui-page-info-features">
                                    <p className="ui-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="ui-page-features-list">
                                        <li><span className="ui-page-check-icon">✓</span> User-Centered Design Process</li>
                                        <li><span className="ui-page-check-icon">✓</span> Expert UI/UX Designers</li>
                                        <li><span className="ui-page-check-icon">✓</span> 350+ Design Projects Delivered</li>
                                        <li><span className="ui-page-check-icon">✓</span> 6+ Years of Design Expertise</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="ui-page-agency-bottom-img-wrap">
                                <div className="ui-page-dot-pattern-square"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Design studio workspace"
                                    className="ui-page-landscape-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="ui-page-testimonial-section">
                <div className="ui-page-testimonial-container">
                    <p className="ui-page-testimonial-label">Testimonial</p>
                    <h2 className="ui-page-testimonial-heading">We Care About Our Clients'<br />Design Success Too</h2>

                    <div className="ui-page-testimonial-scroll-wrapper">
                        <div className="ui-page-testimonial-scroll-mask-left"></div>
                        <div className="ui-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="ui-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="ui-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="ui-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="ui-page-testimonial-name">{feedback.name}</h4>
                                    <p className="ui-page-testimonial-role">{feedback.role}</p>
                                    <p className="ui-page-testimonial-text">{feedback.text}</p>
                                    <div className="ui-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="ui-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="ui-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ui-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>

            {/* <TSPFFooter /> */}
            <BackToTop />
        </div>
    );
};

export default UIDesignServices;