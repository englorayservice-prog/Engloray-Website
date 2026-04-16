import React, { useState, useEffect, useRef } from 'react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './SoftwareAppDev.css';
import { Helmet } from 'react-helmet';

import iphone14Img from '../../../assets/Iphone14.png';
import sadDashboardImg from '../../../assets/erp_dashboard_analytics.png';

import avatarOne from '../../../assets/male_avatar.png';
import avatarTwo from '../../../assets/cartoon_male_1.png';
import avatarThree from '../../../assets/cartoon_female_1.png';
import avatarFour from '../../../assets/cartoon_female_2.png';
import avatarFive from '../../../assets/cartoon_male_2.png';
import avatarSix from '../../../assets/cartoon_female_3.png';
import avatarSeven from '../../../assets/cartoon_male_3.png';
import avatarEight from '../../../assets/female_avatar.png';



const SoftwareAppDev = () => {
    const [selectedService, setSelectedService] = useState(0);

    const sadServices = [
        {
            id: 1,
            num: '01',
            title: 'Custom Software',
            icon: '✦',
            short: 'Tailored enterprise solutions',
            description: 'We build bespoke software solutions designed to solve your specific business challenges. From complex CRM systems to automated inventory management, our custom applications are built for high performance and total scalability.We build bespoke software solutions designed to solve your specific business challenges. From complex CRM systems to automated inventory management, our custom applications are built for high performance and total scalability.',
            image: "https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg"
        },
        {
            id: 2,
            num: '02',
            title: 'Mobile App Dev',
            icon: '✦',
            short: 'iOS & Android excellence',
            description: 'We create intuitive, high-performance mobile applications for iOS and Android. Our cross-platform solutions ensure a consistent user experience while leveraging native capabilities for maximum efficiency and security.We create intuitive, high-performance mobile applications for iOS and Android. Our cross-platform solutions ensure a consistent user experience while leveraging native capabilities for maximum efficiency and security.',
            image: "https://i.pinimg.com/736x/53/cd/eb/53cdebbe94ba413f2dacbe58315acc9c.jpg"
        },
        {
            id: 3,
            num: '03',
            title: 'Web Applications',
            icon: '✦',
            short: 'Modern dynamic web apps',
            description: 'We develop responsive and dynamic web applications using modern frameworks like React and Node.js. Our web products are designed to be fast, secure, and user-centric, providing a seamless experience across all devices.We develop responsive and dynamic web applications using modern frameworks like React and Node.js. Our web products are designed to be fast, secure, and user-centric, providing a seamless experience across all devices.',
            image: "https://i.pinimg.com/1200x/bc/a8/73/bca873cf91377ef59d1e0bb0369b7d98.jpg"
        },
        {
            id: 4,
            num: '04',
            title: 'API Integration',
            icon: '✦',
            short: 'Unified digital ecosystem',
            description: 'We specialize in integrating complex third-party APIs and developing custom RESTful and GraphQL endpoints. We ensure your software communicates perfectly with other systems, creating a unified data environment.We specialize in integrating complex third-party APIs and developing custom RESTful and GraphQL endpoints. We ensure your software communicates perfectly with other systems, creating a unified data environment.',
            image: "https://i.pinimg.com/1200x/fd/42/0f/fd420fa93aeaa55e10b5dcbe75e9d0ee.jpg"
        },
        {
            id: 5,
            num: '05',
            title: 'Quality Assurance',
            icon: '✦',
            short: 'Zero-bug performance',
            description: 'Our rigorous testing strategy includes automated unit tests, integration testing, and comprehensive user acceptance labs. We guarantee reliable, secure, and bug-free software that performs perfectly under heavy loads.Our rigorous testing strategy includes automated unit tests, integration testing, and comprehensive user acceptance labs. We guarantee reliable, secure, and bug-free software that performs perfectly under heavy loads.',
            image: "https://i.pinimg.com/1200x/a1/7e/92/a17e926721d214ed38986aa592f425ca.jpg"
        },
        {
            id: 6,
            num: '06',
            title: 'DevOps & Cloud',
            icon: '✦',
            short: 'Scalable cloud infrastructure',
            description: 'We implement modern CI/CD pipelines and manage robust cloud infrastructure on AWS, Azure, and Google Cloud. Our DevOps practices ensure rapid deployment, zero downtime, and automatic scaling for your applications.We implement modern CI/CD pipelines and manage robust cloud infrastructure on AWS, Azure, and Google Cloud. Our DevOps practices ensure rapid deployment, zero downtime, and automatic scaling for your applications.',
            image: "https://i.pinimg.com/1200x/40/48/22/404822461652af128e9fe3c651580175.jpg"
        },
        {
            id: 7,
            num: '07',
            title: 'UI/UX Integration',
            icon: '✦',
            short: 'Human-centric design',
            description: 'Every line of code is written with the final user in mind. We bridge the gap between creative design and technical execution, ensuring that beautiful UI transitions into a high-performance functional product.Every line of code is written with the final user in mind. We bridge the gap between creative design and technical execution, ensuring that beautiful UI transitions into a high-performance functional product.',
            image: "https://i.pinimg.com/1200x/07/98/ae/0798aefc1cf97ba532375aa914bc5131.jpg"
        }
    ];

    const internshipPrograms = [
        {
            id: 1,
            name: "Full-Stack Development",
            esc: "FWD101",
            duration: "12 Weeks",
            description: "Master modern web development with React, Node.js, and databases. Build production-ready web applications from scratch.",
            features: ["React & Redux", "Node.js & Express", "MongoDB & SQL", "RESTful APIs", "Authentication", "Cloud Deployment"]
        },
        {
            id: 2,
            name: "Mobile App Development",
            esc: "MAD201",
            duration: "10 Weeks",
            description: "Build cross-platform mobile applications with React Native. Master native device features and app store publishing.",
            features: ["React Native", "Expo Ecosystem", "Firebase Auth", "State Management", "Native APIs", "Store Deployment"]
        },
        {
            id: 3,
            name: "Backend & API Architecture",
            esc: "BAD301",
            duration: "8 Weeks",
            description: "Dive deep into server-side programming and complex API design. Learn to build scalable, high-performance backend systems.",
            features: ["Node.js Advanced", "Python/Django", "GraphQL Design", "Microservices", "Redis Caching", "Docker/K8s"]
        }
    ];

    const testimonials = [
        {
            id: 1,
            text: "Innovative, creative, and highly professional. They took our vision and expanded it into a brand that truly resonates with our global audience...",
            clientName: "DAVID CHEN",
            role: "PRODUCT LEAD",
            // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
            avatar: avatarOne,
            stars: 5
        },
        {
            id: 2,
            text: "Every touchpoint they designed feels unmistakable. We've received numerous compliments on our new visual style and identity. They are truly masters of their..",
            clientName: "EMMA WILSON",
            role: "DESIGN DIRECTOR",
            // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
            avatar: avatarTwo,
            stars: 5
        },
        {
            id: 3,
            text: "The attention to detail in their branding process is remarkable. They don't just design; they strategize for growth. Our ROI has been fantastic.",
            clientName: "JAMES MILLER",
            role: "STARTUP FOUNDER",
            // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
            avatar: avatarThree,
            stars: 5
        },
        {
            id: 4,
            text: "From logo design to environmental branding, they handled everything with grace and excellence. Our physical and digital presence are now perfectly..",
            clientName: "LINDA THOMPSON",
            role: "COO, RETAIL GROUP",
            // avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
            avatar: avatarFour,
            stars: 5
        }
    ];

    return (
        <div className="sad-page">
            <Helmet>
                <title>Software & App Development | Engloray</title>
                <meta name="description" content="Custom software solutions, mobile app development, and scalable web applications built with modern frameworks." />
                <meta property="og:title" content="Software & App Development | Engloray" />
            </Helmet>

            <TwoLineNavbar />

            {/* Hero Section */}
            <section className="sad-hero-section-new">
                <div className="sad-hero-container-new">
                    <div className="sad-hero-left-new">
                        <h4 className="sad-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="sad-hero-title-new">SOFTWARE & APPS</h1>

                        <div className="sad-hero-buttons-new">
                            <button className="sad-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Software%20%26%20App%20Development.', '_blank')}>GET STARTED</button>
                            <button className="sad-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20Software%20%26%20App%20Development.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="sad-hero-desc-new">
                            Crafting high-performance digital products that scale. From custom enterprise software to viral mobile apps, we turn complex requirements into elegant solutions.
                        </p>

                        <div className="sad-hero-stats-new">
                            <div className="sad-stat-item-new">
                                <div className="sad-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="sad-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="sad-circle-val sad-circle-indigo" strokeDasharray="92, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="sad-stat-number-new">120<span className="sad-stat-dash">+</span></span>
                                </div>
                                <span className="sad-stat-label-new">Deployed</span>
                            </div>
                            <div className="sad-stat-item-new">
                                <div className="sad-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="sad-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="sad-circle-val sad-circle-violet" strokeDasharray="88, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="sad-stat-number-new">50<span className="sad-stat-dash">+</span></span>
                                </div>
                                <span className="sad-stat-label-new">Engineers</span>
                            </div>
                            <div className="sad-stat-item-new">
                                <div className="sad-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="sad-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="sad-circle-val sad-circle-blue" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="sad-stat-number-new">99<span className="sad-stat-dash">%</span></span>
                                </div>
                                <span className="sad-stat-label-new">Uptime</span>
                            </div>
                        </div>

                        <div className="sad-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="sad-stat-item-new">
                                <div className="sad-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="sad-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="sad-circle-val sad-circle-indigo" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="sad-stat-number-new">2018</span>
                                </div>
                                <span className="sad-stat-label-new">Established</span>
                            </div>
                        </div>
                    </div>

                    {/* CENTER PANEL - iPhone 14 Image - ADD THIS MISSING DIV */}
                    <div className="sad-hero-center-new">
                        <img src={iphone14Img} alt="Software Mockup" className="sad-hero-iphone14-img" />
                    </div>

                    <div className="sad-hero-right-new">
                        <div className="sad-right-top-new">
                            <div className="sad-title-play-row">
                                <h2 className="sad-case-title-new">Engineering the<br />Future of Business</h2>
                                <div className="sad-play-circle-new">
                                    <span className="sad-play-text-new">Watch Process</span>
                                    <div className="sad-play-icon-new">▶</div>
                                </div>
                            </div>
                            <p className="sad-about-company-desc-new">
                                We don't just write code; we design ecosystems. Our development philosophy centers on creating scalable, resilient software architectures that grow with your ambitions. From initial agile planning to global cloud deployment, we are your technical partners at every step.
                            </p>
                            <div className="sad-avatars-row-new">
                                <div className="sad-avatar-group-new">
                                    <img src={avatarTwo} alt="Frontend Lead" />
                                    <img src={avatarThree} alt="Backend Master" />
                                    <img src={avatarFour} alt="DevOps Lead" />
                                </div>
                                <div className="sad-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>
                        <div className="sad-performance-card-new">
                            <div className="sad-perf-header-new">
                                <div className="sad-perf-item-new">
                                    <span className="sad-perf-label-new">LOAD TIME</span>
                                    <span className="sad-perf-value-new">1.2s</span>
                                </div>
                                <div className="sad-perf-item-new" style={{ textAlign: 'right' }}>
                                    <span className="sad-perf-label-new">THROUGHPUT</span>
                                    <span className="sad-perf-value-bold-new">99.9% ↑</span>
                                </div>
                            </div>
                            <div className="sad-perf-chart-new">
                                <div className="sad-chart-col-new"><div className="sad-bar-indigo-new" style={{ height: '40%' }}></div></div>
                                <div className="sad-chart-col-new"><div className="sad-bar-gray-new" style={{ height: '70%' }}></div></div>
                                <div className="sad-chart-col-new"><div className="sad-bar-violet-new" style={{ height: '90%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Services Section */}
            <section className="sad-about-section-new">
                <div className="sad-about-top-notch-content">
                    <span className="sad-about-left-tag">our services</span>
                </div>
                <div className="sad-about-inner-new">
                    <div className="sad-about-left-new">
                        <div className="sad-about-left-header">
                            <h2 className="sad-about-left-title">Advanced Dev & System Design</h2>
                            <p className="sad-about-intro-new">Select a tier to explore our capabilities.</p>
                        </div>
                        <div className="sad-about-services-list-new">
                            {sadServices.map((service, i) => (
                                <div key={service.id} className={`sad-about-service-item-new ${selectedService === i ? 'sad-service-active' : ''}`} onClick={() => setSelectedService(i)}>
                                    <div className="sad-service-item-left-about">
                                        <span className="sad-service-num-new">{service.num}</span>
                                        <div className="sad-service-text-group">
                                            <span className="sad-service-name-about">{service.title}</span>
                                            <span className="sad-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="sad-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="sad-about-center-new">
                        <div className="sad-about-img-wrap-new">
                            <img src={sadServices[selectedService].image} alt={sadServices[selectedService].title} />
                            <div className="sad-about-badge-new">
                                <span className="sad-badge-num">1M+</span>
                                <span className="sad-badge-label">Scalable<br />Concurrents</span>
                            </div>
                        </div>
                    </div>

                    <div className="sad-about-right-new">
                        <div className="sad-about-detail-panel" key={selectedService}>
                            <div className="sad-detail-icon-wrap">
                                <span className="sad-detail-icon">{sadServices[selectedService].icon}</span>
                            </div>
                            <span className="sad-detail-num">{sadServices[selectedService].num}</span>
                            <h3 className="sad-detail-title">{sadServices[selectedService].title}</h3>
                            <p className="sad-detail-desc">{sadServices[selectedService].description}</p>
                            <div className="sad-detail-divider" />
                            <div className="sad-detail-stats">
                                <div className="sad-detail-stat">
                                    <span className="sad-detail-stat-val">120+</span>
                                    <span className="sad-detail-stat-label">Projects</span>
                                </div>
                                <div className="sad-detail-stat">
                                    <span className="sad-detail-stat-val">4-12 wks</span>
                                    <span className="sad-detail-stat-label">Delivery</span>
                                </div>
                                <div className="sad-detail-stat">
                                    <span className="sad-detail-stat-val">5.0</span>
                                    <span className="sad-detail-stat-label">QA Score</span>
                                </div>
                            </div>
                            <button className="sad-detail-cta" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20build%20with%20ENGLORAY%20regarding%20Software%20%26%20App%20Development.', '_blank')}>Start Build →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevate Section - Redesigned for Pixel-Perfect Alignment */}
            <section className="sad-elevate-section">
                <div className="sad-el-container">
                    <div className="sad-el-left">
                        <div className="sad-el-img-grid">
                            <div className="sad-el-img-item sad-el-main">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Software Engineering" />
                                <div className="sad-el-badge-volunteer">
                                    <span className="sad-el-vol-title">Core Dev Team</span>
                                    <div className="sad-el-vol-avatars">
                                        <img src={avatarTwo} alt="s1" />
                                        <img src={avatarThree} alt="s2" />
                                        <img src={avatarFour} alt="s3" />
                                        <div className="sad-el-vol-count">+50</div>
                                    </div>
                                </div>
                            </div>
                            <div className="sad-el-img-item sad-el-top-left">
                                <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Deep Coding" />
                                <div className="sad-el-float-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                                </div>
                            </div>
                            <div className="sad-el-img-item sad-el-bottom-left">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="System Planning" />
                            </div>
                        </div>
                    </div>

                    <div className="sad-el-right">
                        <div className="sad-el-preheading">— About Us</div>
                        <h2 className="sad-el-title">Powerful Software<br />Designed for Scale</h2>
                        <p className="sad-el-desc">
                            We engineer robust software solutions tailored to solve your most complex business challenges. Our focus is on reliability, efficiency, and future-proof technology.
                        </p>

                        <div className="sad-el-stats-new">
                            <div className="sad-el-stat-card">
                                <div className="sad-el-stat-icon-wrap">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                </div>
                                <div className="sad-el-stat-info">
                                    <span className="sad-el-stat-val">80+</span>
                                    <span className="sad-el-stat-txt">Custom Systems</span>
                                </div>
                            </div>
                            <div className="sad-el-stat-card">
                                <div className="sad-el-stat-icon-wrap">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="sad-el-stat-info">
                                    <span className="sad-el-stat-val">5+ Years</span>
                                    <span className="sad-el-stat-txt">Software Engineering</span>
                                </div>
                            </div>
                        </div>

                        <p className="sad-el-sub-desc">
                            From enterprise-grade tools to custom software integrations, our team delivers high-quality code that empowers your business to reach and sustain new heights.
                        </p>

                        <button className="sad-el-btn-discover" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20have%20a%20Software%20Development%20inquiry.', '_blank')}>Talk to Tech Lead</button>
                    </div>
                </div>
            </section>

            {/* Productivity Section */}
            <section className="sad-productivity-section">
                <div className="sad-prod-container">
                    <div className="sad-prod-left">
                        <h2 className="sad-prod-title">ENGINEERING ROBUST SOFTWARE SYSTEMS FOR THE FUTURE</h2>
                        <p className="sad-prod-desc">
                            We deliver scalable and efficient custom software solutions designed to solve complex business challenges and improve operational performance.
                        </p>
                        <div className="sad-prod-buttons">
                            <button className="sad-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Software%20%26%20App%20Development.', '_blank')}>Get started</button>
                            <button className="sad-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20Software%20%26%20App%20Development.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="sad-prod-avatars-box">
                            <div className="sad-prod-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <img src={avatarFive} alt="user" />
                                <img src={avatarSix} alt="user" />
                            </div>
                            <p className="sad-prod-avatar-text">Trusted by global leaders, we help you define<br />your unique position and win hearts!</p>
                        </div>
                    </div>
                    <div className="sad-prod-right">
                        <div className="sad-prod-timeline">
                            <div className="sad-timeline-item">
                                <div className="sad-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="sad-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Deep engineering analysis and system architecture design for complex enterprise-grade software products.</p>
                                </div>
                            </div>
                            <div className="sad-timeline-item">
                                <div className="sad-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="sad-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Building robust backends and intuitive frontends for powerful tools and mission-critical applications.</p>
                                </div>
                            </div>
                            <div className="sad-timeline-item">
                                <div className="sad-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="sad-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Agile development sprints and rigorous testing protocols for highly reliable and scalable software solutions.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Redesigned as Fan Cards */}
            <section className="sad-mission-section">
                <div className="sad-mission-container">
                    <h2 className="sad-mission-title-new">
                        OUR MISSION IS TO MAKE YOUR <span className="sad-mission-highlight-box">SOFTWARE</span><br />
                        BETTER THROUGH TECHNOLOGY
                    </h2>

                    <div className="sad-mission-cards-wrapper">
                        <div className="sad-mission-cards-fan">
                            {[
                                { id: 1, title: 'CUSTOM SOFTWARE', subtitle: 'Scalable Solutions', desc: 'Building tailored software solutions that address your unique business needs with high scalability, performance, and enterprise-grade security for long-term reliability.', rating: '4.9', color: '#6A26E1', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>, rot: -18, transY: 50, left: '15%' },
                                { id: 2, title: 'WEB DEVELOPMENT', subtitle: 'High Performance', desc: 'Designing and developing fast, responsive, and high-performance web applications using modern frameworks and cutting-edge digital technologies for maximum impact.', rating: '4.8', color: '#F14949', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>, rot: -12, transY: 25, left: '26%' },
                                { id: 3, title: 'MOBILE APPS', subtitle: 'Cross-platform', desc: 'Creating powerful native and cross-platform mobile applications for both iOS and Android that deliver premium user experiences and high performance at scale.', rating: '4.7', color: '#F7931E', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>, rot: -6, transY: 8, left: '38%' },
                                { id: 4, title: 'API INTEGRATION', subtitle: 'Seamless Connect', desc: 'Developing and integrating robust, scalable APIs to ensure seamless communication between your diverse digital systems and third-party services globally.', rating: '5.0', color: '#36B0E3', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>, rot: 0, transY: 0, left: '50%' },
                                { id: 5, title: 'CLOUD SOLUTIONS', subtitle: 'Secure & Global', desc: 'Leveraging world-class cloud platforms to build secure, global, and highly available infrastructure for your applications and complex business data.', rating: '4.7', color: '#38C172', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>, rot: 6, transY: 8, left: '62%' },
                                { id: 6, title: 'DEV OPS', subtitle: 'Fast Deployment', desc: 'Implementing highly efficient CI/CD pipelines and automated testing to ensure rapid, reliable, and consistent software delivery across your entire pipeline.', rating: '4.9', color: '#4F5EDB', rot: 12, transY: 25, left: '74%', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12c0 6-4.39 10-10 10S2 18 2 12 6.39 2 12 2s10 4 10 10z"></path><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path><path d="M2 12h20"></path></svg> },
                                { id: 7, title: 'MAINTENANCE', subtitle: 'Ongoing Support', desc: 'Providing dedicated maintenance, proactive security monitoring, and regular updates to keep your software running smoothly and efficiently for years to come.', rating: '4.6', color: '#F06292', icon: <svg viewBox="0 0 24 24" width="64" height="64" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>, rot: 18, transY: 50, left: '85%' }
                            ].map((card) => (
                                <div
                                    className="sad-mission-card-new"
                                    key={card.id}
                                    style={{
                                        '--card-color': card.color,
                                        '--card-rot': `${card.rot}deg`,
                                        '--card-transY': `${card.transY}px`,
                                        '--card-left': card.left
                                    }}
                                >
                                    <div className="sad-mission-card-inner">
                                        <div className="sad-mission-card-header">
                                            <div className="sad-mission-card-titles">
                                                <h3 className="sad-mission-card-title">{card.title}</h3>
                                                <span className="sad-mission-card-subtitle">{card.subtitle}</span>
                                            </div>
                                            <div className="sad-mission-card-rating">
                                                <span>⭐</span> {card.rating}
                                            </div>
                                        </div>

                                        <p className="sad-mission-card-desc">{card.desc}</p>

                                        <div className="sad-mission-card-icon-bottom">
                                            <span className="sad-card-icon">{card.icon}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Agency Section - Software Dev Focus */}
            <section className="sad-agency-section">
                <div className="sad-agency-container">
                    <h2 className="sad-agency-main-title">
                        WE ARE A PROFESSIONAL <br />
                        <span className="sad-agency-highlight">DEVELOPMENT AGENCY</span>
                    </h2>

                    <div className="sad-agency-grid">
                        <div className="sad-agency-left">
                            <div className="sad-agency-image-card">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dev Team" className="sad-portrait-img" />
                                <div className="sad-agency-experience-badge">
                                    <span className="sad-exp-num">5+</span>
                                    <span className="sad-exp-text">YEARS OF <br /> EXPERIENCE</span>
                                </div>
                            </div>
                        </div>

                        <div className="sad-agency-right">
                            <div className="sad-agency-info-row">
                                <div className="sad-info-col">
                                    <h4 className="sad-agency-small-title">WHO WE ARE</h4>
                                    <p className="sad-agency-desc">
                                        We are experts in building high-performance, scalable software solutions. We focus on clean code, modular architecture, and modern tech stacks to ensure your digital products stay competitive and resilient.
                                    </p>
                                </div>
                                <div className="sad-info-features">
                                    <h4 className="sad-agency-small-title">WHY CHOOSE US</h4>
                                    <ul className="sad-agency-list">
                                        <li><span className="sad-check-icon">✓</span> Top Guaranteed Quality</li>
                                        <li><span className="sad-check-icon">✓</span> Team of Senior Developers</li>
                                        <li><span className="sad-check-icon">✓</span> 99% Uptime SLA</li>
                                        <li><span className="sad-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="sad-agency-bottom-img-wrap">
                                <img src={sadDashboardImg} alt="Software Analytics" className="sad-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="sad-reviews-section">
                <div className="sad-container">
                    <span className="sad-testimonial-badge">Testimonial</span>
                    <h2 className="sad-reviews-title">WE CARE ABOUT OUR CUSTOMERS EXPERIENCE TOO</h2>
                    <div className="sad-reviews-slider-box">
                        <div className="sad-reviews-slider">
                            <div className="sad-review-track">
                                {[...testimonials, ...testimonials].map((review, index) => (
                                    <div className="sad-review-card" key={`${review.id}-${index}`}>
                                        <div className="sad-review-avatar-container">
                                            <img src={review.avatar} alt={review.clientName} />
                                        </div>
                                        <h3 className="sad-client-name">{review.clientName}</h3>
                                        <span className="sad-client-role">{review.role}</span>
                                        <p className="sad-review-text">{review.text}</p>
                                        <div className="sad-review-stars">
                                            {[...Array(review.stars)].map((_, i) => (
                                                <span key={i}>★</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Internship Programs */}


            <WhiteFooter />
            <BackToTop />
        </div>
    );
};

export default SoftwareAppDev;
