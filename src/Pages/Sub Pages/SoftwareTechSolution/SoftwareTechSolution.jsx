import React, { useState, useEffect, useRef } from 'react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './SoftwareTech.css';
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
// import customSoftImg from '../../../assets/Custom Software Development.jpg';
// import busAutoImg from '../../../assets/Business Automation System.jpg';
// import crmErpImg from '../../../assets/CRM & ERP Solution.jpg';
// import saasProdImg from '../../../assets/SaaS Product Development.jpg';
// import startupKitImg from '../../../assets/Startup Tech Launch Kit.jpg';
// import realDevImg from '../../../assets/software developer.jpg';
// import agencyCodingImg from '../../../assets/agency_coding.jpg';

const SoftwareTechSolution = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1, num: '01', title: 'Custom Software Development', icon: '✦', short: 'Tailored software built for your business needs',
            features: [
                'Full-cycle proprietary software builds',
                'Enterprise-grade architecture design',
                'Microservices & cloud-native setup',
                'Legacy system modernization scripts',
                'Deep third-party API integrations',
                'Dedicated post-launch support SLA'
            ],
            stats: { val1: '133+', lab1: 'Deploys', val2: '4 Weeks', lab2: 'Sprints', val3: '4.8★', lab3: 'Satisfaction' },
            description: 'We design and develop custom software solutions tailored to your unique business workflows. From enterprise platforms to lightweight tools, our engineers build scalable, secure, and maintainable systems that eliminate inefficiencies and drive operational excellence.',
            // image: customSoftImg
        },
        {
            id: 2, num: '02', title: 'Business Automation System', icon: '◈', short: 'Automate repetitive tasks & streamline operations',
            features: [
                'Robotic Process Automation (RPA)',
                'Automated data entry workflows',
                'Document parsing & AI extraction',
                'Cross-platform webhook logic',
                'Internal process orchestration',
                'Real-time anomaly alerts'
            ],
            stats: { val1: '125+', lab1: 'Completed', val2: '2 Weeks', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'Transform your business operations with intelligent automation systems. We build workflow automation, RPA solutions, and process orchestration tools that reduce manual effort, eliminate errors, and let your team focus on what truly matters — growing your business.',
            // image: busAutoImg
        },
        {
            id: 3, num: '03', title: 'CRM & ERP Solution', icon: '✦', short: 'Unified platforms for sales, ops, and finance',
            features: [
                'End-to-end ecosystem deployment',
                'Financial & operational sync',
                'Sales funnel modular configurations',
                'Role-based access & security rules',
                'Centralized data warehousing',
                'User adoption training sessions'
            ],
            stats: { val1: '138+', lab1: 'Completed', val2: '4 Months', lab2: 'Avg Speed', val3: '4.5★', lab3: 'Satisfaction' },
            description: 'Centralize your customer relationships and enterprise resources with powerful CRM and ERP platforms. We implement and customize solutions that give you a 360° view of your business — from lead management and order processing to inventory control and financial reporting.',
            // image: crmErpImg
        },
        {
            id: 4, num: '04', title: 'SaaS Product Development', icon: '◈', short: 'Build and launch your own cloud-based product',
            features: [
                'Multi-tenant architecture planning',
                'Subscription & billing integration',
                'Zero-downtime CI/CD pipelines',
                'Automated onboarding flows',
                'Scalable NoSQL/SQL databases',
                'Performance load testing setup'
            ],
            stats: { val1: '84+', lab1: 'Deploys', val2: '5 Weeks', lab2: 'Sprints', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Turn your software idea into a market-ready SaaS product. From architecture design and multi-tenancy setup to subscription billing and CI/CD pipelines, we help founders and enterprises launch robust, scalable SaaS platforms that are ready to grow from day one.',
            // image: saasProdImg
        },
        {
            id: 5, num: '05', title: 'Startup Tech Launch', icon: '✦', short: 'Everything a startup needs to go live fast',
            features: [
                'Rapid MVP feature prioritization',
                'Cloud infrastructure & DNS setup',
                'Lean frontend & backend stack',
                'Technical strategy & roadmapping',
                'Pre-configured analytics tools',
                'Investor-ready tech documentation'
            ],
            stats: { val1: '63+', lab1: 'Completed', val2: '6 Weeks', lab2: 'Avg Speed', val3: '4.5★', lab3: 'Satisfaction' },
            description: 'Launch your startup with speed and confidence. Our Startup Tech Launch Kit includes MVP development, cloud infrastructure setup, DevOps pipelines, and tech strategy consulting — giving early-stage companies a solid technical foundation without the overhead of a full in-house team.',
            // image: startupKitImg
        }
    ];

    const pageData = {
        id: 3,
        title: "SOFTWARE & TECH SOLUTION",
        description: "Comprehensive technology solutions to drive your business forward in the digital age.",
        shortDescription: "Build Powerful Software That Scales With Your Business",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Custom Development", "Cloud Architecture", "API Integration", "DevOps & CI/CD"],
        duration: "2-4 weeks",
        projects: "500+ completed projects",
        logo: "📱"
    };

    const feedbacks = [
        {
            id: 1,
            name: "Bruce Hardy",
            role: "CEO, TechVentures",
            photo: cartoonMale1,
            text: "Their custom software platform transformed our internal operations completely. The team delivered on time, within budget, and the system has been rock-solid since launch. Truly exceptional engineering work.",
            stars: 5
        },
        {
            id: 2,
            name: "Mark Smith",
            role: "CTO, FinBridge",
            photo: cartoonMale2,
            text: "The ERP integration they built for us replaced three legacy systems. Our team productivity jumped significantly and data accuracy improved dramatically. Best tech investment we've made.",
            stars: 5
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Product Manager, CloudStack",
            photo: cartoonFemale1,
            text: "They built our SaaS MVP in just 6 weeks. The architecture is clean, the code is maintainable, and the product is already attracting paying customers. Highly recommend their startup kit.",
            stars: 5
        },
        {
            id: 4,
            name: "Vera Duncan",
            role: "Operations Head, LogiCore",
            photo: cartoonFemale2,
            text: "The business automation system they delivered eliminated hours of manual data entry every week. Our error rate dropped to near zero and the team morale improved noticeably. Excellent work.",
            stars: 5
        },
        {
            id: 5,
            name: "David Chen",
            role: "Founder, NexaAI",
            photo: cartoonMale3,
            text: "From cloud architecture to CI/CD pipelines, their engineering team is phenomenal. They think about scalability from day one and never cut corners. Our platform now handles 10x the load seamlessly.",
            stars: 5
        },
        {
            id: 6,
            name: "Emma Wilson",
            role: "Tech Director, RetailPro",
            photo: cartoonFemale3,
            text: "The CRM they customized for us integrates perfectly with our existing tools. Customer response times improved by 40% and our sales team finally has the visibility they need. Incredible outcome.",
            stars: 5
        },
        {
            id: 7,
            name: "James Miller",
            role: "Startup Founder, Launchpad",
            photo: maleAvatar,
            text: "I came to them with just an idea. They helped me validate it, built the MVP, and set up all the infrastructure. Six months later we closed our seed round. They are true tech partners.",
            stars: 5
        },
        {
            id: 8,
            name: "Linda Thompson",
            role: "COO, MediFlow",
            photo: femaleAvatar,
            text: "Their healthcare software solution met all compliance requirements and integrated seamlessly with our clinical systems. The project was complex but they handled every challenge professionally.",
            stars: 5
        }
    ];

    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Engineering Collaboration",
            description: "Agile development sprints and collaborative code reviews"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Clean Code Architecture",
            description: "Writing scalable, maintainable, and production-ready code"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "DevOps & Cloud",
            description: "Automated pipelines and cloud infrastructure management"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "Full-Stack Web Development",
            esc: "FSD101",
            duration: "8 Weeks",
            description: "Master modern full-stack development from React frontends to Node.js backends with cloud deployment.",
            logo: "💻",
            features: ["React & Next.js", "Node.js & Express", "PostgreSQL & MongoDB", "REST & GraphQL APIs", "AWS / GCP Deployment", "CI/CD Pipelines"]
        },
        {
            id: 2,
            name: "Mobile App Development",
            esc: "MAD201",
            duration: "12 Weeks",
            description: "Build cross-platform mobile applications for iOS and Android using React Native and Flutter.",
            logo: "📱",
            features: ["React Native & Flutter", "Native Device APIs", "Push Notifications", "Offline Storage", "App Store Publishing", "Performance Optimization"]
        },
        {
            id: 3,
            name: "Cloud & DevOps Engineering",
            esc: "CDE301",
            duration: "10 Weeks",
            description: "Learn to architect, deploy, and manage scalable cloud infrastructure with modern DevOps practices.",
            logo: "⚙️",
            features: ["AWS / Azure / GCP", "Docker & Kubernetes", "Terraform & IaC", "GitHub Actions CI/CD", "Monitoring & Logging", "Security Best Practices"]
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
        <div className="soft-page-page">
            <TopNavBar />
            <TwoLineNavbar />

            {/* Hero Section */}
            <section className="soft-page-hero-section-new">
                <div className="soft-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="soft-page-hero-left-new">
                        <h4 className="soft-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="soft-page-hero-title-new">SOFTWARE &amp; TECH<br />SOLUTION</h1>
                        <h1 className="soft-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Software Tech iPhone Mockup"
                                className="soft-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="soft-page-hero-buttons-new">
                            <button onClick={handleWhatsAppNavigation} className="soft-page-btn-get-started-new">GET STARTED</button>
                            <button onClick={handleWhatsAppNavigation} className="soft-page-btn-contact-us-new">CONTACT US</button>
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
                            <div className="soft-page-title-play-row">
                                <h2 className="soft-page-case-title-new">About Our<br />company</h2>
                                <div className="soft-page-play-circle-new">
                                    <span className="soft-page-play-text-new">Play</span>
                                    <div className="soft-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="soft-page-about-company-desc-new">
                                We deliver innovative software and technology solutions that help businesses automate operations, scale faster, and create powerful digital experiences. Our engineering team focuses on quality, performance, and measurable results — building robust, lasting systems that give you a competitive edge in your industry.
                            </p>

                            <div className="soft-page-avatars-row-new">
                                <div className="soft-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="soft-page-avatar-group-new">
                                    <img src="https://t3.ftcdn.net/jpg/07/28/48/98/360_F_728489827_qtQHjlMEeD53QhTdUEtdOvNPQw21pYjh.jpg" alt="avatar" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ53aAyRQ8l1h3GkPHeexbL9wyuTlrf1laQ&s" alt="avatar" />
                                    <img src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" alt="avatar" />
                                </div>
                                <div className="soft-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
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
                            <h2 className="soft-page-about-left-title">Why Choose Our<br />Software Solutions?</h2>
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
                                <span className="soft-page-badge-label">Expert<br />Engineers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="soft-page-about-right-new">
                        <div className="soft-page-about-detail-panel" key={selectedService}>
                            <div className="soft-page-detail-icon-wrap">
                                <span className="soft-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="soft-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="soft-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="soft-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="soft-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="soft-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
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
                            </div>
                            <button onClick={handleWhatsAppNavigation} className="soft-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="soft-page-elevate-section">
                <div className="soft-page-el-container">
                    <div className="soft-page-el-left">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Software engineering team collaboration"
                            className="soft-page-el-img-large"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Code on screen"
                            className="soft-page-el-img-small-top"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Tech team meeting"
                            className="soft-page-el-img-small-bottom"
                        />

                        <div className="soft-page-el-badge-volunteer">
                            <span className="soft-page-el-vol-title">Join Our Team</span>
                            <div className="soft-page-el-vol-avatars">
                                <img src={cartoonMale1} alt="user" />
                                <img src={cartoonMale2} alt="user" />
                                <img src={cartoonMale3} alt="user" />
                                <div className="soft-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="soft-page-el-right">
                        <div className="soft-page-el-preheading">About Us</div>
                        <h2 className="soft-page-el-title">Elevate your business with<br />powerful technology</h2>
                        <p className="soft-page-el-desc">
                            At the core of every thriving digital business is robust, well-engineered software. We craft strategic, technically excellent solutions that solve real operational challenges. From architecture design and API development to cloud deployment and ongoing support, our team ensures every system is built to last and scale.
                        </p>

                        <div className="soft-page-el-stats">
                            <div className="soft-page-el-stat-box">
                                <div className="soft-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="soft-page-el-stat-content">
                                    <span className="soft-page-el-stat-num">500+</span>
                                    <span className="soft-page-el-stat-label">Projects delivered</span>
                                </div>
                            </div>

                            <div className="soft-page-el-stat-box">
                                <div className="soft-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="soft-page-el-stat-content">
                                    <span className="soft-page-el-stat-num">5+ Years</span>
                                    <span className="soft-page-el-stat-label">of engineering expertise</span>
                                </div>
                            </div>
                        </div>

                        <p className="soft-page-el-desc">
                            Explore a dynamic approach to software engineering where innovation meets reliability — helping you build digital products that customers love and that scale effortlessly as your business grows.
                        </p>

                        <button onClick={handleWhatsAppNavigation} className="soft-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="soft-page-productivity-section">
                <div className="soft-page-prod-container">
                    <div className="soft-page-prod-left">
                        <h2 className="soft-page-prod-title">Accelerate your business with enterprise-grade software</h2>
                        <p className="soft-page-prod-desc">
                            From system architecture to deployment pipelines, we engineer software products that perform, scale, and deliver real ROI for your organization.
                        </p>
                        <div className="soft-page-prod-buttons">
                            <button onClick={handleWhatsAppNavigation} className="soft-page-btn-prod-primary">Get started</button>
                            <button onClick={handleWhatsAppNavigation} className="soft-page-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="soft-page-prod-avatars-box">
                            <div className="soft-page-prod-avatars">
                                <img src={cartoonFemale1} alt="user" />
                                <img src={cartoonFemale2} alt="user" />
                                <img src={cartoonFemale3} alt="user" />
                            </div>
                            <p className="soft-page-prod-avatar-text">
                                Trusted by startups and enterprises globally,<br />
                                we build software that powers your growth!
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
                                    <h3>DISCOVERY</h3>
                                    <p>We analyze your business needs, tech stack, and objectives to define the ideal software architecture and solution roadmap.</p>
                                </div>
                            </div>
                            <div className="soft-page-timeline-item">
                                <div className="soft-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="soft-page-timeline-content">
                                    <h3>DEVELOPMENT</h3>
                                    <p>Agile sprints, clean code, and rigorous testing to deliver high-performance software that meets your exact specifications.</p>
                                </div>
                            </div>
                            <div className="soft-page-timeline-item">
                                <div className="soft-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="soft-page-timeline-content">
                                    <h3>DEPLOYMENT</h3>
                                    <p>Seamless cloud deployment, CI/CD automation, and ongoing support to keep your software running at peak performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Services Section */}
            <section className="soft-page-mission-section">
                <div className="soft-page-mission-container">
                    <div className="soft-page-mission-header">
                        <h2 className="soft-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="soft-page-mission-highlight">Software Tech</span> Better Through Technology
                        </h2>
                    </div>

                    <div className="soft-page-services-grid">
                        {/* Card 1: Custom Development */}
                        <div className="soft-page-service-card bi-card-variant-1">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Custom<br />Development</h3>
                                    <p className="soft-page-service-card-subtitle">Tailored engineering</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Building bespoke software systems that solve your unique operational challenges and scale with your business growth.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 2: Cloud Architecture */}
                        <div className="soft-page-service-card bi-card-variant-2">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Cloud<br />Architecture</h3>
                                    <p className="soft-page-service-card-subtitle">Scalable infrastructure</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Designing and deploying resilient cloud infrastructure on AWS, Azure, and GCP that scales with zero downtime.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>
                            </div>
                        </div>

                        {/* Card 3: API Integration */}
                        <div className="soft-page-service-card bi-card-variant-7">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">API<br />Integration</h3>
                                    <p className="soft-page-service-card-subtitle">Seamless connectivity</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Connecting your systems with third-party services through secure, well-documented REST and GraphQL API integrations.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line></svg>
                            </div>
                        </div>

                        {/* Card 4: Mobile Development */}
                        <div className="soft-page-service-card bi-card-variant-3">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Mobile<br />Development</h3>
                                    <p className="soft-page-service-card-subtitle">Cross-platform apps</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Building high-performance iOS and Android applications with React Native and Flutter for seamless cross-platform experiences.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>

                        {/* Card 5: DevOps & CI/CD */}
                        <div className="soft-page-service-card bi-card-variant-4">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">DevOps<br />& CI/CD</h3>
                                    <p className="soft-page-service-card-subtitle">Automated pipelines</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Implementing fully automated CI/CD pipelines, containerization with Docker and Kubernetes for rapid, reliable deployments.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 6: Database & Backend */}
                        <div className="soft-page-service-card bi-card-variant-5">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Database<br />& Backend</h3>
                                    <p className="soft-page-service-card-subtitle">Reliable data layer</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Designing optimized database schemas and backend systems that handle millions of transactions with speed and reliability.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                            </div>
                        </div>

                        {/* Card 7: Security & Compliance */}
                        <div className="soft-page-service-card bi-card-variant-6">
                            <div className="soft-page-card-header">
                                <div className="soft-page-card-title-group">
                                    <h3 className="soft-page-service-card-title">Security<br />& Compliance</h3>
                                    <p className="soft-page-service-card-subtitle">Enterprise protection</p>
                                </div>
                                <div className="soft-page-card-badge">
                                    <div className="soft-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="soft-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="soft-page-service-card-desc">Implementing security best practices, penetration testing, and compliance frameworks to protect your software and user data.</p>
                            <div className="soft-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Agency Section */}
            <section className="soft-page-agency-section">
                <div className="soft-page-agency-container">
                    <div className="soft-page-agency-header">
                        <h2 className="soft-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="soft-page-lime-highlight">TECHNOLOGY AGENCY</span>
                        </h2>
                    </div>

                    <div className="soft-page-agency-grid">
                        <div className="soft-page-agency-left">
                            <div className="soft-page-agency-image-card">
                                <div className="soft-page-dot-pattern-circle"></div>
                                <img
                                    // src={agencyCodingImg}
                                    alt="Professional Technology Agency"
                                    className="soft-page-portrait-img"
                                />
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
                                        We are a dynamic team of software engineers, cloud architects, and product strategists dedicated to building technology that drives real business impact. Our mission is to empower companies with robust, scalable digital systems that eliminate inefficiencies and unlock new growth opportunities.
                                    </p>
                                </div>
                                <div className="soft-page-info-features">
                                    <p className="soft-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="soft-page-features-list">
                                        <li><span className="soft-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="soft-page-check-icon">✓</span> Team of Senior Engineers</li>
                                        <li><span className="soft-page-check-icon">✓</span> 500+ Projects Delivered Worldwide</li>
                                        <li><span className="soft-page-check-icon">✓</span> 5+ Years of Tech Expertise</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="soft-page-agency-bottom-img-wrap">
                                <div className="soft-page-dot-pattern-square"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Our Engineering Workspace"
                                    className="soft-page-landscape-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="soft-page-testimonial-section">
                <div className="soft-page-testimonial-container">
                    <p className="soft-page-testimonial-label">Testimonial</p>
                    <h2 className="soft-page-testimonial-heading" style={{ position: 'relative', left: '-180px' }}>We Care About Our Customers<br />Experience Too</h2>

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

            <WhiteFooter />
            <BackToTop />
        </div>
    );
};

export default SoftwareTechSolution;