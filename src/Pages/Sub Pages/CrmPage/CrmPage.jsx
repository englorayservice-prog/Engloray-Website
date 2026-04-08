import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDatabase,
    faRobot,
    faChartPie,
    faPlug,
    faBuilding,
    faStore,
    faGraduationCap,
    faHospital,
    faMoneyBillTrendUp,
    faBriefcase,
    faCheckCircle,
    faArrowRight,
    faHeadset,
    faShieldAlt,
    faRocket,
    faChartLine,
    faLightbulb,
    faHeart,
    faBolt,
    faSearch,
    faArrowUpRightFromSquare,
    faUserTie,
    faBullseye,
    faShareNodes,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import './CrmPage.css';
import crmHeroImage from '../../../assets/images/crmbg.png';
import imgAi from '../../../assets/images/ai_follow_ups.png';
import imgOmnichannel from '../../../assets/images/omnichannel.png';
import imgAutomation from '../../../assets/images/automation.png';
import imgForecasting from '../../../assets/images/forecasting.png';
import imgSmartFunnel from '../../../assets/images/smart_deal_funnel.png';


const CrmPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);
    const [activeWhy, setActiveWhy] = useState(0); // Starting on 1st item as per user request
    const [activeUseCase, setActiveUseCase] = useState(0);

    const useCasesList = [
        { title: "Real Estate", desc: "Manage property listings, track client interactions, and automate follow-ups to close deals faster and smarter. Coordinate open houses seamlessly, schedule agent viewings automatically, and keep your prospective buyers engaged with tailored, high-value property alerts directly from the platform." },
        { title: "Retail & E-commerce", desc: "Sync customer purchase histories, manage loyalty programs, and segment audiences for targeted marketing. Gain deep behavioral analytics to craft personalized discounts, reduce cart abandonment rates, and drive unprecedented customer retention across all your physical and digital storefronts." },
        { title: "Education", desc: "Streamline student enrollment, manage alumni relations, and track communication history seamlessly. Empower your administrative staff by automating massive outreach campaigns, tracking donation analytics, and ensuring prospective students receive immediate, personalized guidance." },
        { title: "Healthcare", desc: "Securely manage patient inquiries, schedule appointments, and maintain compliance with data privacy standards. Facilitate smooth doctor-patient interactions, instantly deploy post-visit feedback forms, and ensure your entire clinic operates with maximum efficiency and confidentiality." },
        { title: "Financial Services", desc: "Track client portfolios, guarantee secure document management, and automate regulatory compliance workflows. Provide bespoke financial advice with accurate historical data, instantly manage bulk policy renewals, and keep sensitive transactions secure within a heavily encrypted vault." },
        { title: "Agencies & Consulting", desc: "Consolidate project communication, handle multiple client pipelines, and improve service delivery drastically. Provide your clients with transparent reporting dashboards, easily delegate complex inter-departmental tasks, and scale your consulting business without operational bottlenecks." }
    ];

    const nextUseCase = () => {
        setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    };

    const prevUseCase = () => {
        setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featureData = [
        {
            stats: [{ val: "85%", label: "Used", color: "#3b82f6" }, { val: "10%", label: "Free", color: "#1f2937" }, { val: "5%", label: "System", color: "#e2e8f0" }],
            items: [
                { title: "Leads Processed", desc: "Total lifecycle completions", stat: "50M+", bg: "#3b82f6", icon: faDatabase, statusClass: "success" },
                { title: "Team Time Saved", desc: "Average per week", stat: "15 Hrs", bg: "#1f2937", icon: faRobot, statusClass: "pending" },
                { title: "System Uptime", desc: "Historical reliability", stat: "99.9%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "95%", label: "Automated", color: "#3b82f6" }, { val: "4%", label: "Triggered", color: "#1f2937" }, { val: "1%", label: "Manual", color: "#e2e8f0" }],
            items: [
                { title: "Workflows Run", desc: "Tasks per month", stat: "10M+", bg: "#3b82f6", icon: faBolt, statusClass: "success" },
                { title: "Response Time", desc: "Lead reply speed", stat: "<1m", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Spam Intercepts", desc: "Junk leads blocked", stat: "99%", bg: "#94a3b8", icon: faCheckCircle, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "85%", label: "Efficiency", color: "#3b82f6" }, { val: "10%", label: "Manual", color: "#1f2937" }, { val: "5%", label: "Other", color: "#e2e8f0" }],
            items: [
                { title: "Converted Leads", desc: "Current fiscal quarter", stat: "25K+", bg: "#3b82f6", icon: faChartPie, statusClass: "success" },
                { title: "Close Rate", desc: "Global average boost", stat: "+15%", bg: "#1f2937", icon: faBuilding, statusClass: "pending" },
                { title: "Data Privacy", desc: "End-to-end encrypted", stat: "100%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "99%", label: "Synced", color: "#3b82f6" }, { val: "0.5%", label: "Retry", color: "#1f2937" }, { val: "0.5%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Active Syncs", desc: "Connected 3rd-party apps", stat: "300+", bg: "#3b82f6", icon: faPlug, statusClass: "success" },
                { title: "API Requests", desc: "Daily successful calls", stat: "500M", bg: "#1f2937", icon: faDatabase, statusClass: "pending" },
                { title: "Auth Security", desc: "Advanced OAuth protocols", stat: "Secure", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        {
            icon: faDatabase,
            title: "Centralized Customer Data",
            desc: "Keep all customer information in one secure, easily accessible location — no more siloed spreadsheets.",
            color: "#3b82f6"
        },
        {
            icon: faRobot,
            title: "Sales Automation",
            desc: "Automate follow-ups, emails, and repetitive data entry tasks effortlessly so your team focuses on selling.",
            color: "#8b5cf6"
        },
        {
            icon: faChartPie,
            title: "Advanced Analytics",
            desc: "Gain real-time insights with detailed, customizable performance dashboards tailored to your KPIs.",
            color: "#06b6d4"
        },
        {
            icon: faPlug,
            title: "Seamless Integration",
            desc: "Connect with your favourite tools and platforms without any coding required — plug and play.",
            color: "#f59e0b"
        },
        {
            icon: faShieldAlt,
            title: "Enterprise Security",
            desc: "Bank-grade encryption and role-based access controls ensure your customer data stays protected at all times.",
            color: "#10b981"
        },
        {
            icon: faRocket,
            title: "Rapid Onboarding",
            desc: "Get your team up and running in hours, not weeks, with guided workflows and dedicated onboarding support.",
            color: "#ef4444"
        }
    ];

    return (
        <>
            <TopNavbar />
            <TwoLineNavbar />

            <div className="crm-subpage-container">

                {/* HERO SECTION — New Showcase Layout */}
                <section className="crm-subpage-hero crm-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow sc-glow-1" />
                        <div className="showcase-glow sc-glow-2" />
                        <div className="showcase-particles" />
                    </div>

                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box"><FontAwesomeIcon icon={faHeadset} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Incoming Support</span>
                                <p className="sw-detail">24 Active Tickets</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(34, 197, 94, 0.2)', color: '#22c55e' }}><FontAwesomeIcon icon={faCheckCircle} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Campaign Sync</span>
                                <p className="sw-detail">Data live update</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Monthly Revenue</span>
                                <p className="sw-detail">+14.2% Growth</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Security Status</span>
                                <p className="sw-detail">Safe & Encrypted</p>
                            </div>
                        </motion.div>

                        {/* Center Content */}
                        <div className="showcase-center-text">
                            <motion.div
                                className="showcase-badge"
                                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}
                            >
                                <FontAwesomeIcon icon={faRocket} /> Next-Gen CRM Platform
                            </motion.div>

                            <motion.h1
                                className="showcase-h1"
                                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                YOUR ULTIMATE<br /> CRM STARTS <span className="sc-accent">Here Today</span>
                            </motion.h1>

                            <motion.p
                                className="showcase-p"
                                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                Manage your business with an intelligent platform. Experience smarter lead tracking and a beautifully clean interface.
                            </motion.p>

                            <motion.div
                                className="showcase-actions"
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                            >
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="sc-btn-primary">
                                    Let's talk now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">View our works</button>
                            </motion.div>

                            <motion.div
                                className="showcase-stats"
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <div className="sc-stat">
                                    <h3>10k+</h3><span>Active Users</span>
                                </div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat">
                                    <h3>5M+</h3><span>Leads Managed</span>
                                </div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat">
                                    <h3>4.9/5.0</h3><span>Satisfaction</span>
                                </div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat">
                                    <h3>2.5x</h3><span>Growth Rate</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Overlapping Fanned-Out Dashboard Cards */}
                        <div className="showcase-dashboard-stack">
                            {/* Left Card: Core Advantages */}
                            <motion.div
                                className="sc-card sc-card-left"
                                initial={{ opacity: 0, x: 100, y: 150, rotate: 0 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }}
                                transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }}
                                whileHover={{ y: -10, rotate: -4, zIndex: 10 }}
                            >
                                <div className="scc-header">
                                    <FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#3b82f6" }} /> Core Advantages
                                </div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item"><FontAwesomeIcon icon={faCheckCircle} /> Lead Tracking</div>
                                    <div className="scc-item"><FontAwesomeIcon icon={faCheckCircle} /> Sales Boost</div>
                                    <div className="scc-item"><FontAwesomeIcon icon={faCheckCircle} /> Data Insights</div>
                                </div>
                            </motion.div>

                            {/* Center Card: Lead Conversion Rate */}
                            <motion.div
                                className="sc-card sc-card-center"
                                initial={{ opacity: 0, y: 200 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className="scc-header">
                                    <FontAwesomeIcon icon={faChartPie} className="scc-icon" style={{ color: "#8b5cf6" }} /> Lead Conversion Rate
                                </div>
                                <div className="scc-body scc-chart">
                                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                                        <motion.div className="scc-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Card: Team Activity */}
                            <motion.div
                                className="sc-card sc-card-right"
                                initial={{ opacity: 0, x: -100, y: 150, rotate: 0 }}
                                animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }}
                                transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }}
                                whileHover={{ y: -10, rotate: 4, zIndex: 10 }}
                            >
                                <div className="scc-header">
                                    <FontAwesomeIcon icon={faRobot} className="scc-icon" style={{ color: "#10b981" }} /> Team Activity Log
                                </div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Deals won</span> <small>Just now</small></div>
                                    <div className="scc-feed-item"><span>New workflow</span> <small>15m ago</small></div>
                                    <div className="scc-feed-item"><span>Integration</span> <small>2h ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── WHY CHOOSE OUR CRM (Interactive List Layout) ── */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <div className="cwi-header-row">
                            <motion.h2 
                                className="cwi-title"
                                initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                WHY CHOOSE <span>OUR CRM</span>
                            </motion.h2>
                            <motion.p 
                                className="cwi-desc"
                                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                Simplify your business life by securely connecting your accounts and automatically categorizing customer interactions.
                            </motion.p>
                        </div>

                        <div className="cwi-content">
                            {/* Left Background Layer - The list matches the screenshot */}
                            <div className="cwi-list">
                                {benefits.slice(0, 4).map((benefit, index) => {
                                    const isActive = activeWhy === index;
                                    return (
                                        <div
                                            key={index}
                                            className={`cwi-item ${isActive ? 'active' : ''}`}
                                            onMouseEnter={() => setActiveWhy(index)}
                                        >
                                            <div className="cwii-left">
                                                <span className="cwii-num">0{index + 1}</span>
                                                <h3 className="cwii-title">{benefit.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Center Floating Box - Content changes based on active index */}
                            <div className="cwi-floating-box-container">
                                <motion.div
                                    className="cwi-floating-box"
                                    key={activeWhy}
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="cwi-dash-header">
                                        <span></span><span></span><span></span>
                                    </div>

                                    <div className="cwi-dash-body">
                                        {/* Fake UI Widget similar to the screenshot */}
                                        <h4 className="cwi-dash-title">
                                            {activeWhy === 0 ? "Data Storage Status" :
                                                activeWhy === 1 ? "Automation Tasks" :
                                                    activeWhy === 2 ? "Latest Conversions" : "Integration Sync"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#3b82f6' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '85%' : activeWhy === 1 ? '95%' : activeWhy === 2 ? '85%' : '99%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#93c5fd' }} />
                                            <div className="cwi-pb-3" style={{ background: '#dbeafe' }} />
                                        </div>

                                        <div className="cwi-dash-stats">
                                            {featureData[activeWhy].stats.map((s, idx) => (
                                                <div className="cwi-stat" key={idx}>
                                                    <span className="dot" style={{ background: s.color }}></span>
                                                    <div>
                                                        <h4>{s.val}</h4>
                                                        <p>{s.label}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="cwi-list-items">
                                            {featureData[activeWhy].items.map((item, i) => (
                                                <div className="cwi-list-item" key={i}>
                                                    <div className="cwi-li-left">
                                                        <div className="cwi-li-avatar" style={{ background: item.bg }}>
                                                            <FontAwesomeIcon icon={item.icon} style={{ color: 'white', fontSize: '14px' }} />
                                                        </div>
                                                        <div className="cwi-li-text">
                                                            <h5>{item.title}</h5>
                                                            <p>{item.desc}</p>
                                                        </div>
                                                    </div>
                                                    <div className={`cwi-li-badge ${item.statusClass}`}>
                                                        {item.stat}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── PROVEN IMPACT ── */}
                < section className="crm-impact-section" >
                    <div className="impact-container">

                        <motion.div
                            className="impact-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <div className="impact-badge-wrapper">
                                <div className="impact-badge-line-left" />
                                <span className="impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right" />
                            </div>
                            <h2>PROVEN <span>Impact</span></h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Join thousands of businesses that have transformed their sales processes and customer relations with our platform.
                            </motion.p>
                        </motion.div>

                        <div className="stats-grid">
                            {[
                                { number: "250", suffix: "+", label1: "Enterprise", label2: "Clients", icon: faBuilding, color: "#3b82f6", iconColor: "#60a5fa" },
                                { number: "98", suffix: "%", label1: "Customer", label2: "Retention", icon: faHeart, color: "#1ed7b9", iconColor: "#2dd4bf" },
                                { number: "3", suffix: "x", label1: "Faster Sales", label2: "Cycles", icon: faBolt, color: "#a855f7", iconColor: "#f59e0b" },
                                { number: "24", suffix: "/7", label1: "Dedicated", label2: "Support", icon: faHeadset, color: "#f59e0b", iconColor: "#fbbf24" }
                            ].map((stat, i) => (
                                <motion.div
                                    className="stat-card"
                                    key={i}
                                    style={{ '--card-color': stat.color }}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                                >
                                    <div className="stat-card-inner">
                                        <div className="stat-top-row">
                                            <div className="stat-icon-box" style={{ '--icon-color': stat.iconColor }}>
                                                <FontAwesomeIcon icon={stat.icon} />
                                            </div>
                                            <div className="stat-value">
                                                {stat.number}<span className="stat-suffix">{stat.suffix}</span>
                                            </div>
                                        </div>
                                        <div className="stat-labels">
                                            <div className="stat-label-line">{stat.label1}</div>
                                            <div className="stat-label-line">{stat.label2}</div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </section >

                {/* ── WHO USES OUR CRM ── */}
                < section className="crm-use-cases-section" >
                    <div className="use-cases-container">
                        <motion.div
                            className="use-cases-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge">Tailored Solutions</span>
                            <h2>Who Uses Our <span>CRM?</span></h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Our platform adapts to various industries, providing tailored workflows that match your unique business requirements.
                            </motion.p>
                        </motion.div>

                        <div className="crm-uc-modern">
                            <div className="ucm-left">
                                {/* Table Layout */}
                                <div className="ucm-table">
                                    <div className="ucm-row ucm-header">
                                        <div className="ucm-cell">Industry</div>
                                        <div className="ucm-cell">Focus Area</div>
                                        <div className="ucm-cell">Action</div>
                                        <div className="ucm-cell">Key Benefit</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Retail</div>
                                        <div className="ucm-cell">Shoppers</div>
                                        <div className="ucm-cell">Sync Data</div>
                                        <div className="ucm-cell">Target Marketing</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Education</div>
                                        <div className="ucm-cell">Students</div>
                                        <div className="ucm-cell">Enrollment</div>
                                        <div className="ucm-cell">Manage Alumni</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Healthcare</div>
                                        <div className="ucm-cell">Patients</div>
                                        <div className="ucm-cell">Scheduling</div>
                                        <div className="ucm-cell">Maintain Privacy</div>
                                    </div>
                                </div>

                                {/* Bottom Lightning Box */}
                                <div className="ucm-bottom-box">
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Financial Services</div>
                                        <div className="ucm-bb-highlight">Track client portfolios</div>
                                        <div className="ucm-bb-desc">Automate regulatory compliance effortlessly</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Agencies & Consulting</div>
                                        <div className="ucm-bb-highlight">Improve service delivery</div>
                                        <div className="ucm-bb-desc">Consolidate multiple client pipelines</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card">
                                    <svg className="ucm-wave" viewBox="0 0 500 500" preserveAspectRatio="none">
                                        <path d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z" fill="rgba(255,255,255,0.05)"></path>
                                        <path d="M0,150 C200,300 400,50 500,150 L500,0 L0,0 Z" fill="rgba(255,255,255,0.03)"></path>
                                        <path d="M0,200 C250,400 450,100 500,200 L500,0 L0,0 Z" fill="rgba(255,255,255,0.02)"></path>
                                        <path d="M0,250 C300,500 500,150 500,250 L500,0 L0,0 Z" fill="rgba(255,255,255,0.01)"></path>
                                    </svg>
                                    <div className="ucm-bc-text">
                                        <h4>{useCasesList[activeUseCase].title}</h4>
                                        <p>{useCasesList[activeUseCase].desc}</p>
                                    </div>
                                    <div className="ucm-inner-nav">
                                        <span onClick={prevUseCase} style={{ cursor: 'pointer' }}>&lt;</span>
                                        <span onClick={nextUseCase} style={{ cursor: 'pointer' }}>&gt;</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* ── NEW: GET SMARTER WITH CRM (below Who Uses) ── */}
                < section className="crm-insights-section" >
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark">
                                <FontAwesomeIcon icon={faLightbulb} /> CRM Intelligence
                            </span>
                            <h2>Work Smarter,<br /><span>Not Harder</span></h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                Leverage AI-driven insights and automation to supercharge every touchpoint of your
                                customer journey — from first contact to loyal advocate.
                            </motion.p>
                        </motion.div>

                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {[
                                    {
                                        image: imgAi,
                                        title: "AI-Powered Follow-Ups",
                                        desc: "Let the system predict the best time to reach out and draft personalised messages automatically."
                                    },
                                    {
                                        image: imgOmnichannel,
                                        title: "Omnichannel Support",
                                        desc: "Consolidate emails, calls, chats and social into one unified inbox your team will love."
                                    },
                                    {
                                        image: imgAutomation,
                                        title: "Automated Workflows",
                                        desc: "Trigger tasks automatically based on client behavior without lifting a finger."
                                    },
                                    {
                                        image: imgForecasting,
                                        title: "Predictive Forecasting",
                                        desc: "See what's coming before it happens. Our models help you plan quarters with confidence."
                                    },
                                    {
                                        image: imgSmartFunnel,
                                        title: "Smart Deal Funnels",
                                        desc: "Visualize your entire sales pipeline and instantly identify bottlenecks using AI-driven tracking."
                                    }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card insight-card-${i} ${activeInsight === i ? 'active-card' : ''}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: i * 0.15 }}
                                        viewport={{ once: true }}
                                        onClick={() => setActiveInsight(i)}
                                    >
                                        {i === 0 && (
                                            <button
                                                className="card-attached-arrow left"
                                                onClick={(e) => { e.stopPropagation(); setActiveInsight(Math.max(0, activeInsight - 1)); }}
                                                style={{ opacity: activeInsight === 0 ? 0.3 : 1, pointerEvents: activeInsight === 0 ? 'none' : 'auto' }}
                                            >
                                                <FontAwesomeIcon icon={faChevronLeft} />
                                            </button>
                                        )}
                                        {i === 4 && (
                                            <button
                                                className="card-attached-arrow right"
                                                onClick={(e) => { e.stopPropagation(); setActiveInsight(Math.min(4, activeInsight + 1)); }}
                                                style={{ opacity: activeInsight === 4 ? 0.3 : 1, pointerEvents: activeInsight === 4 ? 'none' : 'auto' }}
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                        )}

                                        <div className="cic-image-wrapper">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Horizontal CTA strip */}
                        <motion.div
                            className="crm-cta-strip"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            <div className="cta-strip-text">
                                <h3>Ready to Transform Your Customer Relationships?</h3>
                                <p>Start free — no credit card required. 14-day full access trial.</p>
                            </div>
                            <div className="cta-strip-actions">
                                <button className="crm-btn-cta-primary">Start Free Trial</button>
                                <button className="crm-btn-outline">Schedule a Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section >

            </div >
            <Footer />
        </>
    );
};

export default CrmPage;
