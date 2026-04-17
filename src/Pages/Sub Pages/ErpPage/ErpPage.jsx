import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faDatabase,
    faChartPie,
    faPlug,
    faShieldAlt,
    faRocket,
    faCheckCircle,
    faArrowRight,
    faHeadset,
    faChartLine,
    faLightbulb,
    faHeart,
    faBolt,
    faBuilding,
    faGraduationCap,
    faUserTie,
    faBullseye,
    faCalendarCheck,
    faLayerGroup,
    faCogs,
    faFileInvoiceDollar,
    faBus,
    faClipboardList,
    faBell,
    faRobot,
    faSearch,
    faLock,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import SubFooterOne from '../../../Pages/Sub Pages/subFooterOne/NewFooter1'
import '../CrmPage/CrmPage.css';
import './ErpPage.css';
import imgErpAi from '../../../assets/images/erp_ai_analysis.png';
import imgErpParent from '../../../assets/images/erp_parent_comms.png';
import imgErpForecast from '../../../assets/images/erp_forecasting.png';
import imgErpCompliance from '../../../assets/images/erp_compliance.png';
import imgErpAttendance from '../../../assets/images/erp_attendance.png';

const ErpPage = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);

    const useCasesList = [
        { title: "Primary Schools", icon: faGraduationCap, desc: "Digitize attendance, homework, parent communication and exam results seamlessly. Keep track of student activities, generate automated progress reports, and build a cohesive ecosystem connecting teachers, students, and parents effortlessly.", color: "#3b82f6" },
        { title: "Colleges & Universities", icon: faBuilding, desc: "Manage complex academic structures, multiple courses, and thousands of students. Streamline course registration, automate fee collection, and maintain comprehensive digital records for faculty and staff campus-wide without any friction.", color: "#8b5cf6" },
        { title: "Coaching Institutes", icon: faUserTie, desc: "Track student progress, automate batches, and manage faculty schedules effortlessly. Provide interactive learning materials, conduct seamless online assessments, and analyze student performance trends to boost overall results effectively.", color: "#06b6d4" },
        { title: "Corporate Training", icon: faCogs, desc: "Deliver employee training, certifications, and track skill development in-house. Monitor learning curves, assign customized training modules to different departments, and ensure company-wide compliance with interactive courses and tracking.", color: "#10b981" },
        { title: "Residential Schools", icon: faBus, desc: "Integrate hostel management, transport, mess and academics in one system. Maintain real-time logs for visitors, automate room allocations, and track bus locations to ensure maximum safety for all students.", color: "#f59e0b" },
        { title: "Government Institutes", icon: faClipboardList, desc: "Comply with regulatory reporting, manage grants, and digitize public records. Ensure transparent data management, automate document verification, and provide a secure digital infrastructure for all your critical government operations.", color: "#ef4444" }
    ];

    const nextUseCase = () => setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    const prevUseCase = () => setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featureData = [
        {
            stats: [{ val: "85%", label: "Automated", color: "#10b981" }, { val: "10%", label: "Pending", color: "#1f2937" }, { val: "5%", label: "Manual", color: "#e2e8f0" }],
            items: [
                { title: "Total Admissions", desc: "Total lifecycle completions", stat: "10K+", bg: "#10b981", icon: faDatabase, statusClass: "success" },
                { title: "Admin Time", desc: "Average time saved weekly", stat: "25 Hrs", bg: "#1f2937", icon: faRobot, statusClass: "pending" },
                { title: "Data Accuracy", desc: "Reduced manual errors", stat: "99.9%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "98%", label: "Collected", color: "#10b981" }, { val: "1%", label: "Overdue", color: "#1f2937" }, { val: "1%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Fee Transactions", desc: "Monthly verified payments", stat: "50K+", bg: "#10b981", icon: faChartLine, statusClass: "success" },
                { title: "Auto Reminders", desc: "SMS/Emails sent to parents", stat: "15K+", bg: "#1f2937", icon: faRobot, statusClass: "pending" },
                { title: "Payment Secure", desc: "Bank-grade encryption", stat: "100%", bg: "#94a3b8", icon: faLock, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "99.5%", label: "Matched", color: "#10b981" }, { val: "0.5%", label: "Absent", color: "#1f2937" }, { val: "0%", label: "Error", color: "#e2e8f0" }],
            items: [
                { title: "Daily Logs", desc: "Students tracked globally", stat: "100K+", bg: "#10b981", icon: faDatabase, statusClass: "success" },
                { title: "Biometric Sync", desc: "Average processing time", stat: "<1 Sec", bg: "#1f2937", icon: faBolt, statusClass: "pending" },
                { title: "Alerts Delivered", desc: "Instant updates to parents", stat: "100%", bg: "#94a3b8", icon: faCheckCircle, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "95%", label: "On-Time", color: "#10b981" }, { val: "4%", label: "Delayed", color: "#1f2937" }, { val: "1%", label: "Traffic", color: "#e2e8f0" }],
            items: [
                { title: "Active Routes", desc: "Buses tracked in real-time", stat: "500+", bg: "#10b981", icon: faChartPie, statusClass: "success" },
                { title: "Fuel Savings", desc: "Optimized route efficiency", stat: "12%", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Safety Rating", desc: "Parent satisfaction score", stat: "4.9/5", bg: "#94a3b8", icon: faHeart, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        { icon: faLayerGroup, title: "Unified Admin Panel", desc: "Manage all departments — academics, HR, finance — from a single, powerful dashboard.", color: "#10b981" },
        { icon: faFileInvoiceDollar, title: "Smart Fee Management", desc: "Automate fee collection, generate receipts, and track payment history with ease.", color: "#06b6d4" },
        { icon: faCalendarCheck, title: "Attendance Automation", desc: "Biometric and RFID-based attendance tracking with real-time alerts to parents.", color: "#34d399" },
        { icon: faBus, title: "Transport Management", desc: "GPS-enabled bus tracking, route planning, and fleet management in real-time.", color: "#14b8a6" },
        { icon: faShieldAlt, title: "Data Security & RBAC", desc: "Role-based access control and end-to-end encryption keep institutional data safe.", color: "#0ea5e9" },
        { icon: faBell, title: "Instant Notifications", desc: "Push, SMS and email notifications for events, fees, results and circulars instantly.", color: "#22c55e" }
    ];

    return (
        <>
            <TwoLineNavbar />
            <div className="crm-subpage-container erp-theme">

                {/* HERO SECTION */}
                <section className="crm-subpage-hero crm-showcase-hero erp-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow erp-glow-1" />
                        <div className="showcase-glow erp-glow-2" />
                        <div className="showcase-particles" />
                    </div>

                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#10b981' }}><FontAwesomeIcon icon={faBuilding} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Campus Live</span>
                                <p className="sw-detail">12 Active Schools</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(59, 130, 246, 0.2)', color: '#3b82f6' }}><FontAwesomeIcon icon={faDatabase} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Fee Collection</span>
                                <p className="sw-detail">Real-time sync</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#a78bfa' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Exam Progress</span>
                                <p className="sw-detail">+22% Avg Score</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">System Security</span>
                                <p className="sw-detail">Encrypted Data</p>
                            </div>
                        </motion.div>

                        <div className="showcase-center-text">
                            <motion.div className="showcase-badge erp-badge-color" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
                                <FontAwesomeIcon icon={faBuilding} /> Smart Campus ERP Platform
                            </motion.div>
                            <motion.h1 className="showcase-h1" initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
                                MANAGE YOUR<br /> School <span className="erp-accent">Smarter Today</span>
                            </motion.h1>
                            <motion.p className="showcase-p" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Empower your institution with integrated ERP — from admissions to alumni, everything in one intelligent platform.
                            </motion.p>
                            <motion.div className="showcase-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="erp-btn-primary">
                                    Let's talk now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">View our works</button>
                            </motion.div>
                            <motion.div className="showcase-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <div className="sc-stat"><h3>50+</h3><span>Institutes</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>5K+</h3><span>Students</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>99%</h3><span>Uptime</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>4.8/5</h3><span>Rating</span></div>
                            </motion.div>
                        </div>

                        <div className="showcase-dashboard-stack">
                            <motion.div className="sc-card sc-card-left" initial={{ opacity: 0, x: 100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: -4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#10b981" }} /> Core Modules</div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item erp-item"><FontAwesomeIcon icon={faCheckCircle} /> Admissions</div>
                                    <div className="scc-item erp-item"><FontAwesomeIcon icon={faCheckCircle} /> Academics</div>
                                    <div className="scc-item erp-item"><FontAwesomeIcon icon={faCheckCircle} /> HR & Payroll</div>
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-center" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }} whileHover={{ y: -10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faChartPie} className="scc-icon" style={{ color: "#06b6d4" }} /> Enrollment Trends</div>
                                <div className="scc-body scc-chart">
                                    {[55, 80, 60, 95, 70, 100].map((h, i) => (
                                        <motion.div className="scc-bar erp-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-right" initial={{ opacity: 0, x: -100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }} transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: 4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBell} className="scc-icon" style={{ color: "#22c55e" }} /> Campus Activity</div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Fees collected</span> <small>Just now</small></div>
                                    <div className="scc-feed-item"><span>New admission</span> <small>10m ago</small></div>
                                    <div className="scc-feed-item"><span>Exam scheduled</span> <small>1h ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE OUR ERP */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <motion.div
                            className="cwi-header-row"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge erp-section-badge">Institution Advantage</span>
                            <h2 className="cwi-title">WHY CHOOSE OUR <span className="erp-accent" style={{ color: '#10b981' }}>ERP?</span></h2>
                            <p className="cwi-desc">A complete institution management suite — built for modern schools, colleges and universities.</p>
                        </motion.div>

                        <div className="cwi-content">
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
                                                <span className="cwii-num" style={{ color: isActive ? '#fff' : '#0f172a' }}>0{index + 1}</span>
                                                <h3 className="cwii-title" style={{ color: isActive ? '#fff' : '#0f172a' }}>{benefit.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

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
                                        <h4 className="cwi-dash-title">
                                            {activeWhy === 0 ? "Unified Dashboards" :
                                                activeWhy === 1 ? "Fee Automation" :
                                                    activeWhy === 2 ? "Attendance Match" :
                                                        "Transport Accuracy"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#10b981' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '100%' : activeWhy === 1 ? '98%' : activeWhy === 2 ? '99.5%' : '95%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#6ee7b7' }} />
                                            <div className="cwi-pb-3" style={{ background: '#d1fae5' }} />
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

                {/* PROVEN IMPACT */}
                <section className="crm-impact-section">
                    <div className="impact-container">
                        <motion.div className="impact-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="impact-badge-wrapper">
                                <div className="impact-badge-line-left erp-line" />
                                <span className="impact-badge erp-impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right erp-line" />
                            </div>
                            <h2>PROVEN <span className="erp-span">Impact</span></h2>
                            <p>Trusted by institutions across India to digitize operations and improve academic outcomes.</p>
                        </motion.div>
                        <div className="stats-grid">
                            {[
                                { number: "50", suffix: "+", label1: "Institutes", label2: "Onboarded", icon: faBuilding, color: "#3b82f6", iconColor: "#60a5fa" },
                                { number: "98", suffix: "%", label1: "Attendance", label2: "Accuracy", icon: faCalendarCheck, color: "#1ed7b9", iconColor: "#2dd4bf" },
                                { number: "3", suffix: "x", label1: "Faster Admin", label2: "Processing", icon: faBolt, color: "#a855f7", iconColor: "#f59e0b" },
                                { number: "24", suffix: "/7", label1: "Dedicated", label2: "Support", icon: faHeadset, color: "#f59e0b", iconColor: "#fbbf24" }
                            ].map((stat, i) => (
                                <motion.div className="stat-card" key={i} style={{ '--card-color': stat.color }} initial={{ opacity: 0, scale: 0.9, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8, transition: { duration: 0.25 } }}>
                                    <div className="stat-card-inner">
                                        <div className="stat-top-row">
                                            <div className="stat-icon-box" style={{ '--icon-color': stat.iconColor }}><FontAwesomeIcon icon={stat.icon} /></div>
                                            <div className="stat-value">{stat.number}<span className="stat-suffix">{stat.suffix}</span></div>
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
                </section>

                {/* WHO USES OUR ERP */}
                <section className="crm-use-cases-section">
                    <div className="use-cases-container">
                        <motion.div
                            className="use-cases-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge erp-section-badge">Tailored Solutions</span>
                            <h2>Who Uses Our <span className="erp-span-h2">ERP?</span></h2>
                            <p>Our platform adapts to every kind of educational institution with workflows built for your needs.</p>
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
                                        <div className="ucm-cell">Schools</div>
                                        <div className="ucm-cell">Students</div>
                                        <div className="ucm-cell">Attendance</div>
                                        <div className="ucm-cell">Digitized Comm.</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Colleges</div>
                                        <div className="ucm-cell">Academics</div>
                                        <div className="ucm-cell">Structure</div>
                                        <div className="ucm-cell">Scale to 10k+</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Coaching</div>
                                        <div className="ucm-cell">Faculty</div>
                                        <div className="ucm-cell">Scheduling</div>
                                        <div className="ucm-cell">Track Progress</div>
                                    </div>
                                </div>

                                {/* Bottom Lightning Box */}
                                <div className="ucm-bottom-box" style={{ background: 'rgba(16, 185, 129, 0.05)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Corporate Training</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#10b981' }}>Deliver certificates</div>
                                        <div className="ucm-bb-desc">Track skills in-house</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Govt Institutes</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#10b981' }}>Manage public grants</div>
                                        <div className="ucm-bb-desc">Regulatory compliance</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card" style={{ background: 'linear-gradient(135deg, #10b981, #047857)' }}>
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
                </section>

                {/* WORK SMARTER SECTION */}
                <section className="crm-insights-section erp-insights-section">
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark erp-badge-dark"><FontAwesomeIcon icon={faLightbulb} /> ERP Intelligence</span>
                            <h2>Automate Everything,<br /><span className="erp-gradient-span">Focus on Learning</span></h2>
                            <p>From smart fee reminders to AI-driven academic analytics — let the platform handle the operations while you focus on education.</p>
                        </motion.div>
                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {[
                                    { //image: imgErpAi, 
                                        title: "AI Result Analysis", desc: "Instantly identify underperforming students and suggest personalised improvement plans.", imgBg: "rgba(16,185,129,0.18)"
                                    },
                                    { //image: imgErpParent, 
                                        title: "Parent Communication Hub", desc: "Automated SMS, email and in-app notifications keep parents informed at every step.", imgBg: "rgba(6,182,212,0.18)"
                                    },
                                    { //image: imgErpForecast, 
                                        title: "Academic Forecasting", desc: "Predictive analytics to forecast exam outcomes and flag at-risk students early.", imgBg: "rgba(16,185,129,0.25)"
                                    },
                                    { //image: imgErpCompliance, 
                                        title: "GDPR & DPDP Compliant", desc: "Role-based access, audit logs and encrypted student records built-in from day one.", imgBg: "rgba(5,150,105,0.2)"
                                    },
                                    { //image: imgErpAttendance, 
                                        title: "Smart Attendance Tracking", desc: "Biometric and QR-based attendance with real-time parent alerts for every absence.", imgBg: "rgba(20,184,166,0.2)"
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card erp-arc-card insight-card-${i} ${activeInsight === i ? 'active-card' : ''}`}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: i * 0.15 }}
                                        viewport={{ once: true }}
                                        onClick={() => setActiveInsight(i)}
                                    >
                                        {i === 0 && (
                                            <button className="card-attached-arrow left" onClick={(e) => { e.stopPropagation(); setActiveInsight(Math.max(0, activeInsight - 1)); }} style={{ opacity: activeInsight === 0 ? 0.3 : 1, pointerEvents: activeInsight === 0 ? 'none' : 'auto' }}>
                                                <FontAwesomeIcon icon={faChevronLeft} />
                                            </button>
                                        )}
                                        {i === 4 && (
                                            <button className="card-attached-arrow right" onClick={(e) => { e.stopPropagation(); setActiveInsight(Math.min(4, activeInsight + 1)); }} style={{ opacity: activeInsight === 4 ? 0.3 : 1, pointerEvents: activeInsight === 4 ? 'none' : 'auto' }}>
                                                <FontAwesomeIcon icon={faChevronRight} />
                                            </button>
                                        )}
                                        <div className="cic-image-wrapper" style={{ background: item.imgBg }}>
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="cic-line erp-cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div className="crm-cta-strip erp-cta-strip" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="cta-strip-text">
                                <h3>Ready to Digitize Your Institution?</h3>
                                <p>Get a free demo — no commitment required. Full access for 30 days.</p>
                            </div>
                            <div className="cta-strip-actions">
                                <button className="erp-btn-cta-primary">Start Free Trial</button>
                                <button className="crm-btn-outline erp-btn-outline">Schedule a Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
            <SubFooterOne />
        </>
    );
};

export default ErpPage;
