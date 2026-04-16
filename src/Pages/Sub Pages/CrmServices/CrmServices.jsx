import React, { useState, useEffect, useRef } from 'react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './CrmServices.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

import iphone14Img from '../../../assets/Iphone14.png';

import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import maleAvatar from '../../../assets/male_avatar.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import femaleAvatar from '../../../assets/female_avatar.png';

const CrmServices = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    // WhatsApp navigation function
    const navigateToWhatsApp = () => {
        window.open('https://wa.me/916381759909', '_blank');
    };

    const brandServices = [
        {
            id: 1, num: '01', title: 'CRM Implementation', icon: '❆',
            short: 'End-to-end CRM setup & deployment',
            features: [
                'Requirements gathering & process mapping',
                'CRM platform selection & configuration',
                'Data migration & cleansing',
                'Custom fields & module setup',
                'Team onboarding & user training',
                'Go-live support & post-launch hypercare'
            ],
            stats: { val1: '56+', lab1: 'Projects', val2: '2 Weeks', lab2: 'Avg Speed', val3: '4.8★', lab3: 'Rating' },
            description: 'We handle full CRM implementation — from needs assessment and stakeholder alignment to system configuration, data migration, and user training. Our experts ensure seamless deployment that aligns perfectly with your sales, marketing, and support team workflows for maximum productivity from day one.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
        },
        {
            id: 2, num: '02', title: 'Custom CRM Development', icon: '◈',
            short: 'Tailored CRM built for your business',
            features: [
                'Bespoke CRM architecture & system design',
                'Custom deal pipelines & workflow logic',
                'Role-based access control & permissions',
                'Third-party API & webhook integrations',
                'Mobile-ready & scalable interface',
                'Post-launch support & iterative optimization'
            ],
            stats: { val1: '96+', lab1: 'Deploys', val2: '5 Months', lab2: 'Avg Sprint', val3: '5.0★', lab3: 'Rating' },
            description: 'We build modular, fully custom CRM platforms designed around your exact business model — with custom fields, deal pipelines, contact modules, automated workflows, and role-based access. No bloat, no compromises, just a system that scales with you.',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
        },
        {
            id: 3, num: '03', title: 'CRM Integration', icon: '❆',
            short: 'Connect your CRM to every tool',
            features: [
                'Email & calendar two-way sync',
                'Marketing automation platform connect',
                'ERP & accounting system linking',
                'Telephony & VoIP integration',
                'Real-time data webhooks & REST APIs',
                'Single unified customer profile view'
            ],
            stats: { val1: '146+', lab1: 'Integrations', val2: '3 Weeks', lab2: 'Avg Speed', val3: '4.8★', lab3: 'Rating' },
            description: 'Sync your CRM with Gmail, Outlook, marketing platforms, ecommerce systems, telephony tools, and ERPs. We create a single source of truth across your entire tech stack, eliminating data silos and ensuring every team works from the same real-time information.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
        },
        {
            id: 4, num: '04', title: 'Sales Automation', icon: '◈',
            short: 'Automate repetitive sales workflows',
            features: [
                'Automated lead scoring & smart routing',
                'Multi-step email drip campaigns',
                'Deal stage trigger rules & alerts',
                'Sales task auto-assignment to reps',
                'Follow-up sequence scheduling',
                'Activity tracking & overdue reminders'
            ],
            stats: { val1: '129+', lab1: 'Automations', val2: '3 Weeks', lab2: 'Setup Time', val3: '4.5★', lab3: 'Rating' },
            description: 'Replace manual tasks with intelligent automation — lead scoring, follow-up sequences, deal stage triggers, email drip campaigns, and task assignments. Your team focuses entirely on selling while our automation handles all the repetitive groundwork behind the scenes.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        },
        {
            id: 5, num: '05', title: 'Lead Management', icon: '❆',
            short: 'Capture, track & convert more leads',
            features: [
                'Multi-channel lead capture & web forms',
                'AI-powered lead scoring & qualification',
                'Automated nurturing workflows',
                'Lead source attribution tracking',
                'Real-time pipeline visibility dashboard',
                'Zero lead leakage monitoring & alerts'
            ],
            stats: { val1: '77+', lab1: 'Deployments', val2: '2 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Rating' },
            description: 'Systematically capture leads from web forms, social media, campaigns, and trade shows into a centralized CRM pipeline. We build intelligent lead scoring, nurturing workflows, and automated follow-ups so no opportunity ever falls through the cracks.',
            image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80'
        },
        {
            id: 6, num: '06', title: 'Customer Retention System', icon: '◈',
            short: 'Keep customers loyal & engaged long-term',
            features: [
                'Churn risk prediction models & alerts',
                'Net Promoter Score (NPS) survey automation',
                'Automated renewal reminder campaigns',
                'Loyalty & rewards program integration',
                'Win-back email sequences for lost clients',
                'Customer health score dashboards'
            ],
            stats: { val1: '86+', lab1: 'Projects', val2: '5 Weeks', lab2: 'Avg Speed', val3: '4.7★', lab3: 'Rating' },
            description: 'Build long-term customer loyalty with automated retention workflows, satisfaction surveys, renewal reminders, loyalty programs, and churn prediction alerts. Our retention systems help you identify at-risk customers early and act before they leave.',
            image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
        }
    ];

    const pageData = {
        id: 3,
        title: 'CRM SERVICES',
        description: 'Manage customer relationships with advanced and customized CRM systems.',
        shortDescription: 'Build Smarter Customer Relationships That Drive Lasting Revenue',
        fullDescription: 'Build scalable, intelligent CRM solutions tailored to your sales process, customer lifecycle, and business goals.',
        features: ['Lead Tracking', 'Sales Automation', 'Pipeline Management', 'Customer Analytics'],
        duration: '2–4 weeks',
        projects: '500+ CRM implementations',
        logo: '📊'
    };

    const feedbacks = [
        {
            id: 1, name: 'Bruce Hardy', role: 'CEO, TechVentures',
            photo: cartoonMale1,
            text: 'The CRM implementation transformed how our sales team operates. Lead tracking and automation cut our follow-up time in half. Their team truly understood our pipeline needs.',
            stars: 5
        },
        {
            id: 2, name: 'Mark Smith', role: 'Sales Director',
            photo: cartoonMale2,
            text: 'Custom CRM development gave us exactly the pipeline and deal management system we needed. Our close rate improved 35% within the first quarter of deployment.',
            stars: 5
        },
        {
            id: 3, name: 'Sarah Jenkins', role: 'Operations Manager',
            photo: cartoonFemale1,
            text: 'CRM integration with our existing tools was seamless. No more data silos — our marketing and sales teams finally work from one unified system. Game-changing for us.',
            stars: 5
        },
        {
            id: 4, name: 'Vera Duncan', role: 'Head of Customer Success',
            photo: cartoonFemale2,
            text: 'The customer retention system they built for us reduced churn by 28%. The automated renewal reminders and satisfaction surveys are exactly what we were missing.',
            stars: 5
        },
        {
            id: 5, name: 'David Chen', role: 'VP of Revenue',
            photo: cartoonMale3,
            text: 'Sales automation freed our reps from admin work completely. Pipeline visibility improved dramatically and our forecast accuracy went from 60% to over 90%.',
            stars: 5
        },
        {
            id: 6, name: 'Emma Wilson', role: 'Marketing Director',
            photo: cartoonFemale3,
            text: 'Lead management is now a well-oiled machine. Every inquiry from every channel flows into the CRM instantly. Our response time dropped from hours to minutes.',
            stars: 5
        },
        {
            id: 7, name: 'James Miller', role: 'Startup Founder',
            photo: maleAvatar,
            text: 'We went from spreadsheets to a fully custom CRM in just five weeks. The transition was smooth, training was excellent, and our team adopted it immediately.',
            stars: 5
        },
        {
            id: 8, name: 'Linda Thompson', role: 'COO, Retail Group',
            photo: femaleAvatar,
            text: 'From CRM setup to full integration with our ecommerce platform, they delivered everything on time and on budget. Customer data is now our biggest competitive advantage.',
            stars: 5
        }
    ];

    const extraImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
            title: 'CRM Strategy Workshop',
            description: 'Collaborative sessions to map customer journeys and define CRM architecture'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
            title: 'Data Pipeline Setup',
            description: 'Building robust data flows between CRM and business systems'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80',
            title: 'Team Onboarding',
            description: 'Training your teams to get the most out of your new CRM platform'
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
        <div className="crm-page-page">
            <TwoLineNavbar />

            {/* ── HERO SECTION ── */}
            <section className="crm-page-hero-section-new">
                <div className="crm-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="crm-page-hero-left-new">
                        <h4 className="crm-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="crm-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="crm-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray CRM iPhone Mockup"
                                className="crm-page-hero-iphone14-img"
                                style={{ maxWidth: '55%', height: '20%' }}
                            />
                        </h1>

                        <div className="crm-page-hero-buttons-new">
                            <button onClick={navigateToWhatsApp} className="crm-page-btn-get-started-new">GET STARTED</button>
                            <button onClick={navigateToWhatsApp} className="crm-page-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="crm-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="crm-page-hero-stats-new">
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">15<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Partners</span>
                            </div>
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">300<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Clients</span>
                            </div>
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">4.9<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        <div className="crm-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">40<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Awards</span>
                            </div>
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">500<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Projects</span>
                            </div>
                            <div className="crm-page-stat-item-new">
                                <div className="crm-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="crm-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="crm-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="crm-page-stat-number-new">5<span className="crm-page-stat-dash">+</span></span>
                                </div>
                                <span className="crm-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="crm-page-hero-right-new">
                        <div className="crm-page-right-top-new">
                            <div className="crm-page-title-play-row">
                                <h2 className="crm-page-case-title-new">About Our<br />Company</h2>
                                <div className="crm-page-play-circle-new">
                                    <span className="crm-page-play-text-new">Play</span>
                                    <div className="crm-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="crm-page-about-company-desc-new">
                                We deliver intelligent CRM solutions that help businesses capture more leads, close more deals, and retain more customers. Our team of CRM specialists focuses on measurable outcomes — faster sales cycles, higher conversion rates, and stronger long-term customer relationships built on real data.
                            </p>

                            <div className="crm-page-avatars-row-new">
                                <div className="crm-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 8 12 12 14 14"></polyline>
                                    </svg>
                                </div>
                                <div className="crm-page-avatar-group-new">
                                    <img src="https://t3.ftcdn.net/jpg/07/28/48/98/360_F_728489827_qtQHjlMEeD53QhTdUEtdOvNPQw21pYjh.jpg" alt="avatar" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ53aAyRQ8l1h3GkPHeexbL9wyuTlrf1laQ&s" alt="avatar" />
                                    <img src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" alt="avatar" />
                                </div>
                                <div className="crm-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="crm-page-performance-card-new">
                            <div className="crm-page-perf-header-new">
                                <div className="crm-page-perf-item-new">
                                    <span className="crm-page-perf-label-new">PIPELINE GROWTH</span>
                                    <span className="crm-page-perf-value-new">92%</span>
                                </div>
                                <div className="crm-page-perf-item-new text-right">
                                    <span className="crm-page-perf-label-new">CLOSE RATE</span>
                                    <span className="crm-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="crm-page-perf-chart-new">
                                <div className="crm-page-chart-col-new"><div className="crm-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="crm-page-chart-col-new"><div className="crm-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="crm-page-chart-col-new"><div className="crm-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES DETAIL SECTION ── */}
            <section className="crm-page-about-section-new">
                <div className="crm-page-about-top-notch-content">
                    <span className="crm-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="crm-page-about-inner-new">

                    {/* Left: Service List */}
                    <div className="crm-page-about-left-new">
                        <div className="crm-page-about-left-header">
                            <h2 className="crm-page-about-left-title">Why Choose Our<br />CRM Solutions?</h2>
                            <p className="crm-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="crm-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="crm-page-service-item-left-about">
                                        <span className="crm-page-service-num-new">{service.num}</span>
                                        <div className="crm-page-service-text-group">
                                            <span className="crm-page-service-name-about">{service.title}</span>
                                            <span className="crm-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="crm-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="crm-page-about-center-new">
                        <div className="crm-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="crm-page-dynamic-img-fade"
                            />
                            <div className="crm-page-about-badge-new">
                                <span className="crm-page-badge-num">50+</span>
                                <span className="crm-page-badge-label">CRM<br />Experts</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="crm-page-about-right-new">
                        <div className="crm-page-about-detail-panel" key={selectedService}>
                            <div className="crm-page-detail-icon-wrap">
                                <span className="crm-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="crm-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="crm-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="crm-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="crm-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="crm-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="crm-page-detail-divider" />
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
                            </div>
                            <button onClick={navigateToWhatsApp} className="crm-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ELEVATE SECTION ── */}
            <section className="crm-page-elevate-section">
                <div className="crm-page-el-container">
                    <div className="crm-page-el-left">
                        <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                            alt="CRM Team large"
                            className="crm-page-el-img-large"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80"
                            alt="CRM Dashboard"
                            className="crm-page-el-img-small-top"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&q=80"
                            alt="CRM Analytics"
                            className="crm-page-el-img-small-bottom"
                        />

                        <div className="crm-page-el-badge-volunteer">
                            <span className="crm-page-el-vol-title">Join Our Network</span>
                            <div className="crm-page-el-vol-avatars">
                                <img src={cartoonMale1} alt="user" />
                                <img src={cartoonMale2} alt="user" />
                                <img src={cartoonMale3} alt="user" />
                                <div className="crm-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>

                    <div className="crm-page-el-right">
                        <div className="crm-page-el-preheading">About Us</div>
                        <h2 className="crm-page-el-title">Elevate your customer<br />relationships to new heights</h2>
                        <p className="crm-page-el-desc">
                            At the core of every successful business is a powerful CRM strategy. We design, build, and deploy intelligent CRM systems that give your team complete visibility into every customer interaction — from first touch to long-term retention. Our data-driven approach turns relationships into revenue.
                        </p>

                        <div className="crm-page-el-stats">
                            <div className="crm-page-el-stat-box">
                                <div className="crm-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="crm-page-el-stat-content">
                                    <span className="crm-page-el-stat-num">500+</span>
                                    <span className="crm-page-el-stat-label">CRM Implementations</span>
                                </div>
                            </div>

                            <div className="crm-page-el-stat-box">
                                <div className="crm-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="crm-page-el-stat-content">
                                    <span className="crm-page-el-stat-num">5+ Years</span>
                                    <span className="crm-page-el-stat-label">of CRM Expertise</span>
                                </div>
                            </div>
                        </div>

                        <p className="crm-page-el-desc">
                            Whether you need a simple contact database or a fully automated multi-channel sales engine, we deliver CRM solutions that grow with your business and keep your customers at the center of everything.
                        </p>

                        <button onClick={navigateToWhatsApp} className="crm-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTIVITY / PROCESS SECTION ── */}
            <section className="crm-page-productivity-section">
                <div className="crm-page-prod-container">
                    <div className="crm-page-prod-left">
                        <h2 className="crm-page-prod-title">Supercharge your sales with a powerful CRM engine</h2>
                        <p className="crm-page-prod-desc">
                            From lead capture to deal closure and customer retention, we build CRM systems that work exactly the way your team works — saving time, boosting conversions, and creating loyal customers.
                        </p>
                        <div className="crm-page-prod-buttons">
                            <button onClick={navigateToWhatsApp} className="crm-page-btn-prod-primary">Get started</button>
                            <button onClick={navigateToWhatsApp} className="crm-page-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="crm-page-prod-avatars-box">
                            <div className="crm-page-prod-avatars">
                                <img src={cartoonFemale1} alt="user" />
                                <img src={cartoonFemale2} alt="user" />
                                <img src={cartoonFemale3} alt="user" />

                            </div>
                            <p className="crm-page-prod-avatar-text">
                                Trusted by 300+ businesses worldwide — we help<br />
                                you turn every customer interaction into revenue!
                            </p>
                        </div>
                    </div>

                    <div className="crm-page-prod-right">
                        <div className="crm-page-prod-timeline">
                            <div className="crm-page-timeline-item">
                                <div className="crm-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <div className="crm-page-timeline-content">
                                    <h3>DISCOVER</h3>
                                    <p>We audit your current processes, map your customer journey, and define the exact CRM architecture your business needs.</p>
                                </div>
                            </div>
                            <div className="crm-page-timeline-item">
                                <div className="crm-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                        <path d="M2 2l7.5 1.5"></path>
                                        <path d="M7 11l5-5"></path>
                                    </svg>
                                </div>
                                <div className="crm-page-timeline-content">
                                    <h3>BUILD</h3>
                                    <p>We configure or develop your CRM platform, integrations, automations, and pipelines — all tailored to your sales workflow.</p>
                                </div>
                            </div>
                            <div className="crm-page-timeline-item">
                                <div className="crm-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div className="crm-page-timeline-content">
                                    <h3>GROW</h3>
                                    <p>We train your team, monitor performance, and continuously optimize the CRM to maximize pipeline conversion and retention.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & SERVICES GRID ── */}
            <section className="crm-page-mission-section">
                <div className="crm-page-mission-container">
                    <div className="crm-page-mission-header">
                        <h2 className="crm-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="crm-page-mission-highlight">CRM Services</span> Work Harder For You
                        </h2>
                    </div>

                    <div className="crm-page-services-grid">
                        {/* Card 1 */}
                        <div className="crm-page-service-card bi-card-variant-1">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">CRM<br />Implementation</h3>
                                    <p className="crm-page-service-card-subtitle">Full setup & go-live</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">End-to-end CRM deployment — from discovery and configuration to data migration, user training, and launch.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="crm-page-service-card bi-card-variant-2">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">Sales<br />Pipeline</h3>
                                    <p className="crm-page-service-card-subtitle">Deal tracking & forecasting</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Visual pipelines with drag-and-drop stages, deal scoring, revenue forecasting, and activity tracking.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="crm-page-service-card bi-card-variant-7">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">Lead<br />Management</h3>
                                    <p className="crm-page-service-card-subtitle">Capture, score & convert</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Multi-source lead capture, intelligent scoring, automated nurturing sequences, and no-leak follow-up systems.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="crm-page-service-card bi-card-variant-3">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">Sales<br />Automation</h3>
                                    <p className="crm-page-service-card-subtitle">Workflows on autopilot</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Automated follow-ups, task assignments, email sequences, deal stage triggers, and intelligent reminders.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2M20 12h2M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 2v2M12 20v2" /></svg>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="crm-page-service-card bi-card-variant-4">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">CRM<br />Integration</h3>
                                    <p className="crm-page-service-card-subtitle">Connect your entire stack</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Seamless two-way sync between your CRM and email, marketing, ecommerce, telephony, and ERP platforms.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="crm-page-service-card bi-card-variant-5">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">CRM<br />Analytics</h3>
                                    <p className="crm-page-service-card-subtitle">Data-driven decisions</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Real-time dashboards, revenue forecasting, team performance reports, and customer health score tracking.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="crm-page-service-card bi-card-variant-6">
                            <div className="crm-page-card-header">
                                <div className="crm-page-card-title-group">
                                    <h3 className="crm-page-service-card-title">Customer<br />Retention</h3>
                                    <p className="crm-page-service-card-subtitle">Reduce churn, grow loyalty</p>
                                </div>
                                <div className="crm-page-card-badge">
                                    <div className="crm-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="crm-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="crm-page-service-card-desc">Automated renewal reminders, churn prediction alerts, satisfaction surveys, and loyalty program integrations.</p>
                            <div className="crm-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUSINESS AGENCY SECTION ── */}
            <section className="crm-page-agency-section">
                <div className="crm-page-agency-container">
                    <div className="crm-page-agency-header">
                        <h2 className="crm-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="crm-page-lime-highlight">CRM CONSULTANCY</span>
                        </h2>
                    </div>

                    <div className="crm-page-agency-grid">
                        <div className="crm-page-agency-left">
                            <div className="crm-page-agency-image-card">
                                <div className="crm-page-dot-pattern-circle"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
                                    alt="Our CRM Expert"
                                    className="crm-page-portrait-img"
                                />
                                <div className="crm-page-exp-badge">
                                    <span className="crm-page-exp-number">5+</span>
                                    <span className="crm-page-exp-text">Years of<br />CRM Expertise</span>
                                </div>
                            </div>
                        </div>

                        <div className="crm-page-agency-right">
                            <div className="crm-page-agency-info-row">
                                <div className="crm-page-info-col">
                                    <p className="crm-page-info-subtitle">WHO WE ARE</p>
                                    <p className="crm-page-info-desc">
                                        We are a dedicated team of CRM architects, developers, and sales process consultants who specialize in building customer relationship systems that drive measurable growth. Our mission is simple: make your customer data your biggest competitive advantage.
                                    </p>
                                </div>
                                <div className="crm-page-info-features">
                                    <p className="crm-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="crm-page-features-list">
                                        <li><span className="crm-page-check-icon">✓</span> Guaranteed Measurable Results</li>
                                        <li><span className="crm-page-check-icon">✓</span> Certified CRM Specialists</li>
                                        <li><span className="crm-page-check-icon">✓</span> 500+ CRM Projects Delivered</li>
                                        <li><span className="crm-page-check-icon">✓</span> 5+ Years of Proven Expertise</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="crm-page-agency-bottom-img-wrap">
                                <div className="crm-page-dot-pattern-square"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Our CRM Team at Work"
                                    className="crm-page-landscape-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="crm-page-testimonial-section">
                <div className="crm-page-testimonial-container">
                    <p className="crm-page-testimonial-label">Testimonial</p>
                    <h2 className="crm-page-testimonial-heading">We Care About Our Clients'<br />CRM Success Too</h2>

                    <div className="crm-page-testimonial-scroll-wrapper">
                        <div className="crm-page-testimonial-scroll-mask-left"></div>
                        <div className="crm-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="crm-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="crm-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="crm-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="crm-page-testimonial-name">{feedback.name}</h4>
                                    <p className="crm-page-testimonial-role">{feedback.role}</p>
                                    <p className="crm-page-testimonial-text">{feedback.text}</p>
                                    <div className="crm-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="crm-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="crm-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="crm-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>

            <WhiteFooter />
            <BackToTop />
        </div>
    );
};

export default CrmServices;