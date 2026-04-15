import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './SoftwareAppDev.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
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
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            num: '02',
            title: 'Mobile App Dev',
            icon: '✦',
            short: 'iOS & Android excellence',
            description: 'We create intuitive, high-performance mobile applications for iOS and Android. Our cross-platform solutions ensure a consistent user experience while leveraging native capabilities for maximum efficiency and security.We create intuitive, high-performance mobile applications for iOS and Android. Our cross-platform solutions ensure a consistent user experience while leveraging native capabilities for maximum efficiency and security.',
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            num: '03',
            title: 'Web Applications',
            icon: '✦',
            short: 'Modern dynamic web apps',
            description: 'We develop responsive and dynamic web applications using modern frameworks like React and Node.js. Our web products are designed to be fast, secure, and user-centric, providing a seamless experience across all devices.We develop responsive and dynamic web applications using modern frameworks like React and Node.js. Our web products are designed to be fast, secure, and user-centric, providing a seamless experience across all devices.',
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            num: '04',
            title: 'API Integration',
            icon: '✦',
            short: 'Unified digital ecosystem',
            description: 'We specialize in integrating complex third-party APIs and developing custom RESTful and GraphQL endpoints. We ensure your software communicates perfectly with other systems, creating a unified data environment.We specialize in integrating complex third-party APIs and developing custom RESTful and GraphQL endpoints. We ensure your software communicates perfectly with other systems, creating a unified data environment.',
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            num: '05',
            title: 'Quality Assurance',
            icon: '✦',
            short: 'Zero-bug performance',
            description: 'Our rigorous testing strategy includes automated unit tests, integration testing, and comprehensive user acceptance labs. We guarantee reliable, secure, and bug-free software that performs perfectly under heavy loads.Our rigorous testing strategy includes automated unit tests, integration testing, and comprehensive user acceptance labs. We guarantee reliable, secure, and bug-free software that performs perfectly under heavy loads.',
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            num: '06',
            title: 'DevOps & Cloud',
            icon: '✦',
            short: 'Scalable cloud infrastructure',
            description: 'We implement modern CI/CD pipelines and manage robust cloud infrastructure on AWS, Azure, and Google Cloud. Our DevOps practices ensure rapid deployment, zero downtime, and automatic scaling for your applications.We implement modern CI/CD pipelines and manage robust cloud infrastructure on AWS, Azure, and Google Cloud. Our DevOps practices ensure rapid deployment, zero downtime, and automatic scaling for your applications.',
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            num: '07',
            title: 'UI/UX Integration',
            icon: '✦',
            short: 'Human-centric design',
            description: 'Every line of code is written with the final user in mind. We bridge the gap between creative design and technical execution, ensuring that beautiful UI transitions into a high-performance functional product.Every line of code is written with the final user in mind. We bridge the gap between creative design and technical execution, ensuring that beautiful UI transitions into a high-performance functional product.',
            image: "data:image/jpeg;base64,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"
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

            <TopNavBar />
            <Navbar />

            {/* Hero Section */}
            <section className="sad-hero-section-new">
                <div className="sad-hero-container-new">
                    <div className="sad-hero-left-new">
                        <h4 className="sad-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="sad-hero-title-new">SOFTWARE & APPS</h1>
                        <h1 className="sad-hero-title-desc-new">
                            <img src={iphone14Img} alt="Software Mockup" className="sad-hero-iphone14-img" />
                        </h1>

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


            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default SoftwareAppDev;
