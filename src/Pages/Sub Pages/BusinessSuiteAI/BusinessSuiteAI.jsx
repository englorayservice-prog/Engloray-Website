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
    faBriefcase,
    faUserTie,
    faBullseye,
    faCalendarCheck,
    faLayerGroup,
    faCogs,
    faFileInvoiceDollar,
    faStore,
    faClipboardList,
    faBell,
    faRobot,
    faSearch,
    faLock,
    faChevronLeft,
    faChevronRight,
    faMicrochip,
    faBrain
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import '../CrmPage/CrmPage.css';
import '../ErpPage/ErpPage.css';
import './BusinessSuiteAI.css';

// Using common assets for mockups
import imgAiAnalysis from '../../../assets/images/erp_ai_analysis.png';
import imgForecasting from '../../../assets/images/erp_forecasting.png';
import imgCompliance from '../../../assets/images/erp_compliance.png';

const BusinessSuiteAI = () => {
    const [activeFeature, setActiveFeature] = useState(0);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);

    const useCasesList = [
        { title: "Retail & Commerce", icon: faStore, desc: "Optimize inventory, predict demand, and personalize customer experiences with AI. Track real-time sales trends and automate supply chain operations to stay ahead of the curve. Reduce overhead costs by mapping inefficient logistics paths automatically. Transform ad-hoc purchasing into a finely tuned, predictive procurement engine.", color: "#c62828" },
        { title: "Financial Services", icon: faFileInvoiceDollar, desc: "Automate accounting, fraud detection, and financial reporting with precision. Gain deep insights into your cash flow and automate tax compliance with our intelligent ledger system. Implement proactive compliance checks to avoid costly regulatory fines. Ensure rapid, secure transaction processing at an enterprise-scale volume.", color: "#d32f2f" },
        { title: "Manufacturing", icon: faCogs, desc: "Streamline production cycles, manage quality control, and schedule maintenance using predictive AI. Reduce downtime and maximize output by optimizing machine performance logs. Leverage computer vision to spot assembly anomalies instantly. Synchronize global production floors into one unified command center.", color: "#b71c1c" },
        { title: "Professional Services", icon: faUserTie, desc: "Manage projects, track time-sheets, and automate resource allocation seamlessly. Improve client satisfaction with predictive project delivery timelines and transparent reporting. Delegate routine admin tasks to autonomous AI assistants. Elevate human strategy by providing data-backed insights on client retention.", color: "#f44336" },
        { title: "Healthcare Admin", icon: faBuilding, desc: "Digitize patient records, manage staff scheduling, and ensure strict regulatory compliance. Build a secure platform that protects sensitive data while improving administrative speed. Empower medical staff with instant access to predictive diagnostic tools. Optimize bed allocation and resource routing during peak operating hours.", color: "#ff5252" },
        { title: "E-commerce", icon: faRocket, desc: "AI-driven product recommendations, automated order fulfillment, and logistics tracking. Integrate multiple storefronts and manage your global presence from a single hub. Anticipate dynamic market shifts to adjust pricing algorithms in real-time. Deliver hyper-personalized marketing campaigns that drive exponentially higher conversions.", color: "#c62828" }
    ];

    const nextUseCase = () => setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    const prevUseCase = () => setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const featureData = [
        {
            stats: [{ val: "92%", label: "Accuracy", color: "#c62828" }, { val: "5%", label: "Manual", color: "#1f2937" }, { val: "3%", label: "Outliers", color: "#e2e8f0" }],
            items: [
                { title: "AI Analytics", desc: "Automated business intelligence", stat: "99%", bg: "#c62828", icon: faBrain, statusClass: "success" },
                { title: "Decision Speed", desc: "Real-time data processing", stat: "<2 Sec", bg: "#1f2937", icon: faRobot, statusClass: "pending" },
                { title: "Market Prediction", desc: "Trend analysis accuracy", stat: "95%", bg: "#94a3b8", icon: faChartLine, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "95%", label: "Automated", color: "#c62828" }, { val: "4%", label: "Pending", color: "#1f2937" }, { val: "1%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Revenue Cycle", desc: "Average time saved weekly", stat: "15 Hr", bg: "#c62828", icon: faDatabase, statusClass: "success" },
                { title: "Invoice Matching", desc: "Precision financial sync", stat: "100%", bg: "#1f2937", icon: faFileInvoiceDollar, statusClass: "pending" },
                { title: "Tax Compliance", desc: "Automated audit readiness", stat: "99.9%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "88%", label: "Efficiency", color: "#c62828" }, { val: "10%", label: "On-hold", color: "#1f2937" }, { val: "2%", label: "Manual", color: "#e2e8f0" }],
            items: [
                { title: "Workflow Sync", desc: "Inter-department connectivity", stat: "95%", bg: "#c62828", icon: faLayerGroup, statusClass: "success" },
                { title: "Process Bots", desc: "Active automation agents", stat: "24/7", bg: "#1f2937", icon: faRobot, statusClass: "pending" },
                { title: "Uptime Rating", desc: "Enterprise cloud stability", stat: "99.99%", bg: "#94a3b8", icon: faCheckCircle, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "99%", label: "Secure", color: "#c62828" }, { val: "1%", label: "Scanning", color: "#1f2937" }, { val: "0%", label: "Leaks", color: "#e2e8f0" }],
            items: [
                { title: "Data Security", desc: "Bank-grade encryption active", stat: "AES-256", bg: "#c62828", icon: faLock, statusClass: "success" },
                { title: "AI Guardian", desc: "Real-time threat detection", stat: "Live", bg: "#1f2937", icon: faShieldAlt, statusClass: "pending" },
                { title: "Privacy Index", desc: "Global compliance score", stat: "98/100", bg: "#94a3b8", icon: faSearch, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        { icon: faMicrochip, title: "Next-Gen AI Core", desc: "Built with the latest neural models to optimize complex business processes.", color: "#c62828" },
        { icon: faChartPie, title: "Strategic Oversight", desc: "Real-time 360-degree view of your entire organization’s health and performance.", color: "#d32f2f" },
        { icon: faPlug, title: "Seamless Integration", desc: "Plug into your existing tech stack with 100+ native API connectors.", color: "#b71c1c" },
        { icon: faRobot, title: "Process Automation", desc: "Reduce operational overhead by automating repetitive tasks with intelligent bots.", color: "#d32f2f" },
        { icon: faShieldAlt, title: "Enterprise Security", desc: "Military-grade data protection and role-based access for deep governance.", color: "#ff5252" },
        { icon: faBolt, title: "Instant Scaling", desc: "Grow from 10 to 10,000 employees without worrying about infrastructure.", color: "#c62828" }
    ];

    return (
        <>
            <TopNavbar />
            <TwoLineNavbar />
            <div className="crm-subpage-container business-suite-theme">

                {/* HERO SECTION */}
                <section className="crm-subpage-hero crm-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow bs-glow-1" />
                        <div className="showcase-glow bs-glow-2" />
                        <div className="showcase-particles" />
                    </div>

                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(198, 40, 40, 0.2)', color: '#c62828' }}><FontAwesomeIcon icon={faMicrochip} /></div>
                            <div className="sw-content">
                                <span className="sw-title">AI Engine</span>
                                <p className="sw-detail">99.5% Accuracy</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(211, 47, 47, 0.2)', color: '#d32f2f' }}><FontAwesomeIcon icon={faBriefcase} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Workflows</span>
                                <p className="sw-detail">240 Active Bots</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(183, 28, 28, 0.2)', color: '#b71c1c' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="sw-content">
                                <span className="sw-title">ROI Uplift</span>
                                <p className="sw-detail">+35% Efficiency</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(198, 40, 40, 0.2)', color: '#c62828' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Data Shield</span>
                                <p className="sw-detail">256-bit AES</p>
                            </div>
                        </motion.div>

                        <div className="showcase-center-text">
                            <motion.div className="showcase-badge bs-badge-color" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
                                <FontAwesomeIcon icon={faRobot} /> Business Suite AI Engine
                            </motion.div>
                            <motion.h1 className="showcase-h1" initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
                                AUTOMATE YOUR<br /> <span className="bs-accent">Enterprise Today</span>
                            </motion.h1>
                            <motion.p className="showcase-p" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Transform your business operations with autonomous AI. From financial forecasting to supply chain optimization, everything in one intelligent executive suite.
                            </motion.p>
                            <motion.div className="showcase-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="bs-btn-primary">
                                    Start Automation <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">Explore AI Modules</button>
                            </motion.div>
                            <motion.div className="showcase-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <div className="sc-stat"><h3>250+</h3><span>Enterprises</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>1M+</h3><span>Automations</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>99.9%</h3><span>Security</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>4.9/5</h3><span>Rating</span></div>
                            </motion.div>
                        </div>

                        <div className="showcase-dashboard-stack">
                            <motion.div className="sc-card sc-card-left" initial={{ opacity: 0, x: 100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: -4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#6366f1" }} /> AI Core Modules</div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item bs-item"><FontAwesomeIcon icon={faCheckCircle} /> Forecasting</div>
                                    <div className="scc-item bs-item"><FontAwesomeIcon icon={faCheckCircle} /> Smart CRM</div>
                                    <div className="scc-item bs-item"><FontAwesomeIcon icon={faCheckCircle} /> Automation</div>
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-center" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }} whileHover={{ y: -10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faChartPie} className="scc-icon" style={{ color: "#8b5cf6" }} /> Growth Matrix</div>
                                <div className="scc-body scc-chart">
                                    {[55, 80, 60, 95, 70, 100].map((h, i) => (
                                        <motion.div className="scc-bar bs-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-right" initial={{ opacity: 0, x: -100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }} transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: 4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBell} className="scc-icon" style={{ color: "#c084fc" }} /> Smart Activity</div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Report generated</span> <small>Just now</small></div>
                                    <div className="scc-feed-item"><span>AI Forecast Sync</span> <small>5m ago</small></div>
                                    <div className="scc-feed-item"><span>Security Audit</span> <small>1h ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE BUSINESS SUITE */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <motion.div
                            className="cwi-header-row"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge bs-section-badge">Next-Gen Intelligence</span>
                            <h2 className="cwi-title">WHY CHOOSE <span className="bs-accent">AI SUITE?</span></h2>
                            <p className="cwi-desc">The most advanced business management platform — powered by autonomous AI engines.</p>
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
                                            {activeWhy === 0 ? "AI Analysis Hub" :
                                                activeWhy === 1 ? "Strategic Metrics" :
                                                    activeWhy === 2 ? "Integration Engine" :
                                                        "Autonomous Bots"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#c62828' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '99%' : activeWhy === 1 ? '95%' : activeWhy === 2 ? '95%' : '100%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#d32f2f' }} />
                                            <div className="cwi-pb-3" style={{ background: '#ff8a80' }} />
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
                                <div className="impact-badge-line-left bs-line" style={{ background: 'rgba(99, 102, 241, 0.2)' }} />
                                <span className="impact-badge bs-impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right bs-line" style={{ background: 'rgba(99, 102, 241, 0.2)' }} />
                            </div>
                            <h2>GLOBAL <span className="bs-span">Scale</span></h2>
                            <p>Helping modern enterprises move faster with AI-augmented workflows and real-time intelligence.</p>
                        </motion.div>
                        <div className="stats-grid">
                            {[
                                { number: "250", suffix: "+", label1: "Active", label2: "Enterprises", icon: faBuilding, color: "#6366f1", iconColor: "#818cf8" },
                                { number: "35", suffix: "%", label1: "Efficiency", label2: "Increase", icon: faCogs, color: "#8b5cf6", iconColor: "#a78bfa" },
                                { number: "50", suffix: "x", label1: "Faster Data", label2: "Analysis", icon: faBolt, color: "#06b6d4", iconColor: "#22d3ee" },
                                { number: "24", suffix: "/7", label1: "Autonomous", label2: "Operation", icon: faRobot, color: "#6366f1", iconColor: "#818cf8" }
                            ].map((stat, i) => (
                                <motion.div className="stat-card" key={i} style={{ '--card-color': stat.color }} initial={{ opacity: 0, scale: 0.9, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8 }}>
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

                {/* WHO USES BUSINESS SUITE */}
                <section className="crm-use-cases-section">
                    <div className="use-cases-container">
                        <motion.div
                            className="use-cases-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge bs-section-badge">Vertical Solutions</span>
                            <h2>Who Uses <span className="bs-span-h2">Business Suite?</span></h2>
                            <p>An intelligent ecosystem designed to adapt to any industry scale and complexity.</p>
                        </motion.div>
                        <div className="crm-uc-modern">
                            <div className="ucm-left">
                                <div className="ucm-table">
                                    <div className="ucm-row ucm-header">
                                        <div className="ucm-cell">Industry</div>
                                        <div className="ucm-cell">AI Focus</div>
                                        <div className="ucm-cell">Mechanism</div>
                                        <div className="ucm-cell">Outcome</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Retail</div>
                                        <div className="ucm-cell">Demand</div>
                                        <div className="ucm-cell">Inventory Prediction</div>
                                        <div className="ucm-cell">0% Stockouts</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Finance</div>
                                        <div className="ucm-cell">Risk</div>
                                        <div className="ucm-cell">Fraud Detection</div>
                                        <div className="ucm-cell">99.9% Secure</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Manufac.</div>
                                        <div className="ucm-cell">Output</div>
                                        <div className="ucm-cell">Predictive Maint.</div>
                                        <div className="ucm-cell">+20% Uptime</div>
                                    </div>
                                </div>

                                <div className="ucm-bottom-box" style={{ background: 'rgba(198, 40, 40, 0.05)', border: '1px solid rgba(198, 40, 40, 0.2)' }}>
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#c62828" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Healthcare Admin</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#c62828' }}>Patient Privacy</div>
                                        <div className="ucm-bb-desc">Regulatory Compliance</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">E-commerce</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#c62828' }}>Global Scale</div>
                                        <div className="ucm-bb-desc">Multi-channel Sync</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card" style={{ background: 'linear-gradient(135deg, #c62828, #8e0000)' }}>
                                    <svg className="ucm-wave" viewBox="0 0 500 500" preserveAspectRatio="none">
                                        <path d="M0,100 C150,200 350,0 500,100 L500,0 L0,0 Z" fill="rgba(255,255,255,0.05)"></path>
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
                <section className="crm-insights-section bs-insights-section">
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark bs-badge-dark"><FontAwesomeIcon icon={faLightbulb} /> AI Intelligence</span>
                            <h2>Automate Complexity,<br /><span className="bs-gradient-span">Drive Results</span></h2>
                            <p>Leverage our autonomous engine to handle logistics, financials and operations while your team focuses on strategy.</p>
                        </motion.div>
                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {[
                                    { image: imgAiAnalysis, title: "Predictive Forecasting", desc: "Identify market shifts before they happen with neural market trend analysis.", imgBg: "rgba(198,40,40,0.18)" },
                                    { image: imgForecasting, title: "Autonomous SCM", desc: "Self-optimizing supply chain that reacts to real-time global logistics data.", imgBg: "rgba(183,28,28,0.18)" },
                                    { image: imgAiAnalysis, title: "Financial Oversight", desc: "Real-time audit logs and anomaly detection across all currency transactions.", imgBg: "rgba(198,40,40,0.25)" },
                                    { image: imgCompliance, title: "Global Compliance", desc: "Automatic adaptation to regional tax laws and digital privacy regulations.", imgBg: "rgba(139,26,26,0.2)" },
                                    { image: imgForecasting, title: "Resource Optimisation", desc: "Dynamic workload balancing using historical performance and AI modeling.", imgBg: "rgba(178,34,34,0.2)" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card bs-arc-card insight-card-${i} ${activeInsight === i ? 'active-card' : ''}`}
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
                                        <div className="cic-line bs-cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div className="crm-cta-strip bs-cta-strip" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="cta-strip-text">
                                <h3>Ready to Transform Your Business?</h3>
                                <p>Onboard your enterprise to the AI era. 30-day enterprise pilot available now.</p>
                            </div>
                            <div className="cta-strip-actions">
                                <button className="bs-btn-cta-primary">Launch Suite</button>
                                <button className="crm-btn-outline bs-btn-outline">Pilot Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default BusinessSuiteAI;
