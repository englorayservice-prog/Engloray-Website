import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './ErpSolutions.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
import { Helmet } from 'react-helmet';

import iphone14Img from '../../../assets/Iphone14.png';
import erpDashboardImg from '../../../assets/erp_dashboard_analytics.png';

const ErpSolutions = () => {
    const [selectedService, setSelectedService] = useState(0);

    const erpServices = [
        {
            id: 1,
            num: '01',
            title: 'ERP Implementation',
            icon: '🏢',
            short: 'Seamless business integration',
            description: 'We design and implement complete Enterprise Resource Planning systems that unify all business functions including finance, HR, manufacturing, and supply chain into one robust, real-time ecosystem for maximum operational efficiency.We design and implement complete Enterprise Resource Planning systems that unify all business',
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            num: '02',
            title: 'CRM System Setup',
            icon: '🤝',
            short: 'Customer-centric growth',
            description: 'We deploy advanced Customer Relationship Management systems that automate sales, manage customer data, and provide deep analytics to help you build stronger relationships and drive sustainable revenue growth.We deploy advanced Customer Relationship Management systems that automate sales, manage customer data, and prov',
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            num: '03',
            title: 'Business Automation',
            icon: '⚙️',
            short: 'Scale with automation',
            description: 'We identify manual, repetitive tasks across your organization and replace them with intelligent automation workflows. This reduces human error, dramatically cuts processing time, and allows your team to focus on high-value strategic work.We identify manual, repetitive tasks across your organization and replace them with intelligent automation workflows. This reduces human error, dramatically cuts processing time, and allows your team to focus on high-value strategic work.',
            image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            num: '04',
            title: 'Data Analytics & AI',
            icon: '📈',
            short: 'Actionable intelligence',
            description: 'We implement powerful BI dashboards and AI-driven reporting tools that transform fragmented business data into clear, actionable insights. Make data-backed decisions and predict future trends with precision and confidence.We implement powerful BI dashboards and AI-driven reporting tools that transform frag',
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            num: '05',
            title: 'Cloud Migration',
            icon: '☁️',
            short: 'Secure cloud scalability',
            description: 'We help businesses transition their legacy ERP and CRM systems to the cloud. Our migration strategy ensures zero data loss, enhanced security, and a flexible infrastructure that scales automatically with your business needs.We help businesses transition their legacy ERP and CRM systems to the cloud. Our migration ',
            image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            num: '06',
            title: 'Custom Integration',
            icon: '🔗',
            short: 'Unified software ecosystem',
            description: 'We build custom APIs and bridges to ensure your ERP/CRM communicates perfectly with all other software in your stack. Break down data silos and create a unified information flow across your entire digital environment.We build custom APIs and bridges to ensure your ERP/CRM communicates perfectly with all other ',
            image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            num: '07',
            title: 'Supply Chain Management',
            icon: '📦',
            short: 'Optimized logistics flow',
            description: 'Modern ERP solutions for procurement, inventory tracking, and warehouse management. We provide full visibility into your supply chain, reducing waste and ensuring timely delivery of goods to your final customers.Modern ERP solutions for procurement, inventory tracking, and warehouse management. We provide full visibility into your supply chain, reducing waste and ensuring timely delivery of goods to your final customers.',
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const internshipPrograms = [
        {
            id: 1,
            name: "ERP System Implementation",
            esc: "ERPI101",
            duration: "10 Weeks",
            description: "Learn end-to-end ERP implementation, configuration, and management. Bridge the gap between business processes and technical systems.",
            features: ["System Config", "Data Migration", "Process Mapping", "User Training", "Module Customization", "Post-Go-Live Support"]
        },
        {
            id: 2,
            name: "CRM & Sales Automation",
            esc: "CRMS201",
            duration: "8 Weeks",
            description: "Master CRM setup, sales automation, and customer data management to drive business intelligence and sales performance.",
            features: ["Lead Management", "Sales Pipeline", "Workflow Rules", "CRM Reporting", "Integration Basics", "Customer Success Strategy"]
        },
        {
            id: 3,
            name: "Business Process Analysis",
            esc: "BPA301",
            duration: "6 Weeks",
            description: "Analyze and optimize business processes for digital transformation. Learn to design efficient workflows for enterprise software.",
            features: ["Gap Analysis", "ROI Calculation", "Solution Design", "Change Management", "Requirement Gathering", "Stakeholder Management"]
        }
    ];

    const testimonials = [
        {
            id: 1,
            text: "Innovative, creative, and highly professional. They took our vision and expanded it into a brand that truly resonates with our global audience...",
            clientName: "DAVID CHEN",
            role: "PRODUCT LEAD",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
            stars: 5
        },
        {
            id: 2,
            text: "Every touchpoint they designed feels unmistakable. We've received numerous compliments on our new visual style and identity. They are truly masters of their..",
            clientName: "EMMA WILSON",
            role: "DESIGN DIRECTOR",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
            stars: 5
        },
        {
            id: 3,
            text: "The attention to detail in their branding process is remarkable. They don't just design; they strategize for growth. Our ROI has been fantastic.",
            clientName: "JAMES MILLER",
            role: "STARTUP FOUNDER",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
            stars: 5
        },
        {
            id: 4,
            text: "From logo design to environmental branding, they handled everything with grace and excellence. Our physical and digital presence are now perfectly..",
            clientName: "LINDA THOMPSON",
            role: "COO, RETAIL GROUP",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda",
            stars: 5
        }
    ];

    return (
        <div className="erp-page">
            <Helmet>
                <title>ERP & CRM Solutions | Engloray</title>
                <meta name="description" content="Streamline business operations with integrated ERP solutions and CRM systems." />
                <meta property="og:title" content="ERP & CRM Solutions | Engloray" />
            </Helmet>

            <TopNavBar />
            <Navbar />

            {/* Hero Section */}
            <section className="erp-hero-section-new">
                <div className="erp-hero-container-new">
                    <div className="erp-hero-left-new">
                        <h4 className="erp-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="erp-hero-title-new">ERP & CRM SOLUTIONS</h1>
                        <h1 className="erp-hero-title-desc-new">
                            <img src={iphone14Img} alt="ERP Dashboard Mockup" className="erp-hero-iphone14-img" />
                        </h1>

                        <div className="erp-hero-buttons-new">
                            <button className="erp-btn-get-started-new">SCHEDULE DEMO</button>
                            <button className="erp-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="erp-hero-desc-new">
                            Unified business systems for maximum efficiency. Streamline operations, enhance customer relationships, and drive business growth through intelligent platforms.
                        </p>

                        <div className="erp-hero-stats-new">
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">15<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Partners</span>
                            </div>
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">300<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Clients</span>
                            </div>
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">4.9<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Rating</span>
                            </div>
                        </div>

                        <div className="erp-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">40<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Awards</span>
                            </div>
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">500<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Projects</span>
                            </div>
                            <div className="erp-stat-item-new">
                                <div className="erp-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="erp-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="erp-circle-val erp-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="erp-stat-number-new">5<span className="erp-stat-dash">+</span></span>
                                </div>
                                <span className="erp-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    <div className="erp-hero-right-new">
                        <div className="erp-right-top-new">
                            <div className="erp-title-play-row">
                                <h2 className="erp-case-title-new">Enterprise Control<br />at Your Fingertips</h2>
                                <div className="erp-play-circle-new">
                                    <span className="erp-play-text-new">Watch Demo</span>
                                    <div className="erp-play-icon-new">▶</div>
                                </div>
                            </div>
                            <p className="erp-about-company-desc-new">
                                We transform fragmented business processes into cohesive, high-performance systems. Our ERP and CRM solutions are built to grow with you, providing real-time visibility into every aspect of your enterprise from finance to customer success.
                            </p>
                            <div className="erp-avatars-row-new">
                                <div className="erp-avatar-group-new">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ERP1" alt="ERP Specialist" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ERP2" alt="Implementation Expert" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=ERP3" alt="Analyst" />
                                </div>
                                <div className="erp-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>
                        <div className="erp-performance-card-new">
                            <div className="erp-perf-header-new">
                                <div className="erp-perf-item-new">
                                    <span className="erp-perf-label-new">EFFICIENCY</span>
                                    <span className="erp-perf-value-new">98%</span>
                                </div>
                                <div className="erp-perf-item-new" style={{ textAlign: 'right' }}>
                                    <span className="erp-perf-label-new">PROCESS SPEED</span>
                                    <span className="erp-perf-value-bold-new">85% ↑</span>
                                </div>
                            </div>
                            <div className="erp-perf-chart-new">
                                <div className="erp-chart-col-new"><div className="erp-bar-green-new" style={{ height: '55%' }}></div></div>
                                <div className="erp-chart-col-new"><div className="erp-bar-gray-new" style={{ height: '75%' }}></div></div>
                                <div className="erp-chart-col-new"><div className="erp-bar-blue-new" style={{ height: '95%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Services Section */}
            <section className="erp-about-section-new">
                <div className="erp-about-top-notch-content">
                    <span className="erp-about-left-tag">ENTERPRISE TOOLS</span>
                </div>
                <div className="erp-about-inner-new">
                    <div className="erp-about-left-new">
                        <div className="erp-about-left-header">
                            <h2 className="erp-about-left-title">Advanced ERP & CRM Services</h2>
                            <p className="erp-about-intro-new">Select a module to explore its capabilities.</p>
                        </div>
                        <div className="erp-about-services-list-new">
                            {erpServices.map((service, i) => (
                                <div key={service.id} className={`erp-about-service-item-new ${selectedService === i ? 'erp-service-active' : ''}`} onClick={() => setSelectedService(i)}>
                                    <div className="erp-service-item-left-about">
                                        <span className="erp-service-num-new">{service.num}</span>
                                        <div className="erp-service-text-group">
                                            <span className="erp-service-name-about">{service.title}</span>
                                            <span className="erp-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="erp-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="erp-about-center-new">
                        <div className="erp-about-img-wrap-new">
                            <img src={erpServices[selectedService].image} alt={erpServices[selectedService].title} />
                            <div className="erp-about-badge-new">
                                <span className="erp-badge-num">100+</span>
                                <span className="erp-badge-label">Scalable<br />Modules</span>
                            </div>
                        </div>
                    </div>

                    <div className="erp-about-right-new">
                        <div className="erp-about-detail-panel" key={selectedService}>
                            <div className="erp-detail-icon-wrap">
                                <span className="erp-detail-icon">{erpServices[selectedService].icon}</span>
                            </div>
                            <span className="erp-detail-num">{erpServices[selectedService].num}</span>
                            <h3 className="erp-detail-title">{erpServices[selectedService].title}</h3>
                            <p className="erp-detail-desc">{erpServices[selectedService].description}</p>
                            <div className="erp-detail-divider" />
                            <div className="erp-detail-stats">
                                <div className="erp-detail-stat">
                                    <span className="erp-detail-stat-val">75+</span>
                                    <span className="erp-detail-stat-label">Clients</span>
                                </div>
                                <div className="erp-detail-stat">
                                    <span className="erp-detail-stat-val">6-12 wks</span>
                                    <span className="erp-detail-stat-label">Timeline</span>
                                </div>
                                <div className="erp-detail-stat">
                                    <span className="erp-detail-stat-val">40%</span>
                                    <span className="erp-detail-stat-label">Efficiency ↑</span>
                                </div>
                            </div>
                            <button className="erp-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevate Section - Redesigned for Pixel-Perfect Alignment */}
            <section className="erp-elevate-section">
                <div className="erp-el-container">
                    <div className="erp-el-left">
                        <div className="erp-el-img-grid">
                            <div className="erp-el-img-item erp-el-main">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="ERP Team" />
                                <div className="erp-el-badge-volunteer">
                                    <span className="erp-el-vol-title">Implementation Team</span>
                                    <div className="erp-el-vol-avatars">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=E1" alt="e1" />
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=E2" alt="e2" />
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=E3" alt="e3" />
                                        <div className="erp-el-vol-count">+30</div>
                                    </div>
                                </div>
                            </div>
                            <div className="erp-el-img-item erp-el-top-left">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnBLg9ZWc43RRI6FF8cuG0Rxt9FXbiBpgXDg&s" alt="Data Analytics" />
                                <div className="erp-el-float-icon">📊</div>
                            </div>
                            <div className="erp-el-img-item erp-el-bottom-left">
                                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team Synergy" />
                            </div>
                        </div>
                    </div>

                    <div className="erp-el-right">
                        <div className="erp-el-preheading">— About Us</div>
                        <h2 className="erp-el-title">Centralize your business ecosystem with ERP</h2>
                        <p className="erp-el-desc">
                            In today's fast-paced market, fragmented data is your biggest blocker. We help you unify every touchpoint, from the first customer interaction to the final supply chain delivery, using high-performance ERP and CRM tools that ensure absolute clarity and control.
                        </p>

                        <div className="erp-el-stats-new">
                            <div className="erp-el-stat-card">
                                <div className="erp-el-stat-icon-wrap">🔋</div>
                                <div className="erp-el-stat-info">
                                    <span className="erp-el-stat-val">40%+</span>
                                    <span className="erp-el-stat-txt">Greater Efficiency</span>
                                </div>
                            </div>
                            <div className="erp-el-stat-card">
                                <div className="erp-el-stat-icon-wrap">🛡️</div>
                                <div className="erp-el-stat-info">
                                    <span className="erp-el-stat-val">100%</span>
                                    <span className="erp-el-stat-txt">Data Security</span>
                                </div>
                            </div>
                        </div>

                        <p className="erp-el-sub-desc">
                            Leverage a unified digital backbone that scales with your enterprise needs while maintaining absolute data integrity.
                        </p>

                        <button className="erp-el-btn-discover">Discover More</button>
                    </div>
                </div>
            </section>


            {/* Services Exploration */}


            {/* Productivity Section */}
            <section className="erp-productivity-section">
                <div className="erp-prod-container">
                    <div className="erp-prod-left">
                        <h2 className="erp-prod-title">ELEVATE YOUR BUSINESS WITH A POWERFUL BRAND</h2>
                        <p className="erp-prod-desc">
                            From strategic positioning to visual storytelling, we build a cohesive brand identity that truly resonates with your audience and drives growth.
                        </p>
                        <div className="erp-prod-buttons">
                            <button className="erp-btn-prod-primary">Get started</button>
                            <button className="erp-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="erp-prod-avatars-box">
                            <div className="erp-prod-avatars">
                                <img src="https://i.pravatar.cc/100?img=21" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=22" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=23" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=24" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=25" alt="user" />
                            </div>
                            <p className="erp-prod-avatar-text">Trusted by global leaders, we help you define<br />your unique position and win hearts!</p>
                        </div>
                    </div>
                    <div className="erp-prod-right">
                        <div className="erp-prod-timeline">
                            <div className="erp-timeline-item">
                                <div className="erp-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="erp-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Identify your unique brand voice, mission, and precise market positioning to stand out.</p>
                                </div>
                            </div>
                            <div className="erp-timeline-item">
                                <div className="erp-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                                </div>
                                <div className="erp-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Crafting visual foundations, including logos, icons, and typography that represent your soul.</p>
                                </div>
                            </div>
                            <div className="erp-timeline-item">
                                <div className="erp-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="erp-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Developing a compelling narrative and tone of voice that connects emotionally with users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Mission Section - High Fidelity Fan Arc Layout */}
            <section className="erp-fan-mission-section">
                <div className="erp-fan-container-new">
                    <h2 className="erp-fan-title-new">
                        OUR MISSION IS TO MAKE YOUR <span className="erp-fan-highlight-box">BUSINESS</span> BETTER THROUGH TECHNOLOGY
                    </h2>

                    <div className="erp-fan-cards-wrapper">
                        <div className="erp-fan-cards-arc">
                            {erpServices.slice(0, 6).map((service, idx) => {
                                // Manual distribution for the arc (Matching SoftwareAppDev)
                                const positions = [
                                    { rot: -30, transY: 100, left: '15%', color: '#6C48D1' },
                                    { rot: -20, transY: 40, left: '32%', color: '#E94D3F' },
                                    { rot: -10, transY: 10, left: '49%', color: '#F2994A' },
                                    { rot: 10, transY: 10, left: '51%', color: '#56CCF2' },
                                    { rot: 20, transY: 40, left: '68%', color: '#27AE60' },
                                    { rot: 30, transY: 100, left: '85%', color: '#2D9CDB' }
                                ];
                                const pos = positions[idx % positions.length];

                                return (
                                    <div
                                        className="erp-fan-card-item"
                                        key={idx}
                                        style={{
                                            '--card-rot': `${pos.rot}deg`,
                                            '--card-transY': `${pos.transY}px`,
                                            '--card-left': pos.left,
                                            '--card-color': pos.color
                                        }}
                                    >
                                        <div className="erp-fan-card-inner">
                                            <div className="erp-fan-card-header">
                                                <div className="erp-fan-card-meta">
                                                    <h3 className="erp-fan-card-title">{service.title}</h3>
                                                    <span className="erp-fan-card-subtitle">{service.short}</span>
                                                </div>
                                                <div className="erp-fan-card-rating">
                                                    ⭐ <span>5.0</span>
                                                </div>
                                            </div>
                                            <p className="erp-fan-card-desc">
                                                {service.description.length > 100 ? service.description.substring(0, 100) + "..." : service.description}
                                            </p>
                                            <div className="erp-fan-card-footer">
                                                <div className="erp-fan-card-icon-wrap">
                                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Unify Section - Redesigned as Professional Agency */}
            <section className="erp-agency-section">
                <div className="erp-agency-container">
                    <h2 className="erp-agency-main-title">
                        WE ARE A PROFESSIONAL <br />
                        <span className="erp-agency-highlight">BUSINESS AGENCY</span>
                    </h2>

                    <div className="erp-agency-grid">
                        <div className="erp-agency-left">
                            <div className="erp-agency-image-wrap">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="ERP Team" />
                                <div className="erp-agency-experience-badge">
                                    <span className="erp-exp-num">5+</span>
                                    <span className="erp-exp-text">YEARS OF <br /> EXPERIENCE</span>
                                </div>
                            </div>
                        </div>

                        <div className="erp-agency-who">
                            <h4 className="erp-agency-small-title">WHO WE ARE</h4>
                            <p className="erp-agency-desc">
                                We are experts in modernizing legacy processes through integrated enterprise software. We focus on data integrity, process automation, and scalable architecture to ensure your business stays agile.
                            </p>
                            <button className="erp-agency-btn">MORE INFORMATION</button>
                            <div className="erp-agency-image-wrap secondary">
                                <img src={erpDashboardImg} alt="ERP Analytics" />
                            </div>
                        </div>

                        <div className="erp-agency-why">
                            <h4 className="erp-agency-small-title">WHY CHOOSE US</h4>
                            <ul className="erp-agency-list">
                                <li>
                                    <span className="erp-check-icon">✓</span>
                                    <span>Top Guaranteed Results</span>
                                </li>
                                <li>
                                    <span className="erp-check-icon">✓</span>
                                    <span>Team of Industry Experts</span>
                                </li>
                                <li>
                                    <span className="erp-check-icon">✓</span>
                                    <span>98% Retention Rate</span>
                                </li>
                                <li>
                                    <span className="erp-check-icon">✓</span>
                                    <span>5+ Years Experience</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>


            {/* Testimonials */}
            <section className="erp-reviews-section">
                <div className="erp-container">
                    <span className="erp-testimonial-badge">Testimonial</span>
                    <h2 className="erp-reviews-title">WE CARE ABOUT OUR CUSTOMERS EXPERIENCE TOO</h2>
                    <div className="erp-reviews-slider-box">
                        <div className="erp-reviews-slider">
                            <div className="erp-review-track">
                                {[...testimonials, ...testimonials].map((review, index) => (
                                    <div className="erp-review-card" key={`${review.id}-${index}`}>
                                        <div className="erp-review-avatar-container">
                                            <img src={review.avatar} alt={review.clientName} />
                                        </div>
                                        <h3 className="erp-client-name">{review.clientName}</h3>
                                        <span className="erp-client-role">{review.role}</span>
                                        <p className="erp-review-text">{review.text}</p>
                                        <div className="erp-review-stars">
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

export default ErpSolutions;