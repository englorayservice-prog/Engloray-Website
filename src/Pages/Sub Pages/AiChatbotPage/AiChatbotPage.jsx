import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faComments,
    faChartPie,
    faBolt,
    faCheckCircle,
    faArrowRight,
    faHeadset,
    faChartLine,
    faLightbulb,
    faHeart,
    faShieldAlt,
    faBuilding,
    faStore,
    faGraduationCap,
    faLanguage,
    faBullseye,
    faBrain,
    faPlug,
    faSearch,
    faLock,
    faClock,
    faUserTie,
    faBriefcase,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import '../CrmPage/CrmPage.css';
import './AiChatbotPage.css';
import imgAi from '../../../assets/images/ai_follow_ups.png';
import imgOmnichannel from '../../../assets/images/omnichannel.png';
import imgAutomation from '../../../assets/images/automation.png';
import imgForecasting from '../../../assets/images/forecasting.png';
import imgSmartFunnel from '../../../assets/images/smart_deal_funnel.png';

const AiChatbotPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);

    const useCasesList = [
        { title: "E-commerce", icon: faStore, desc: "Answer product queries, track orders, and process returns instantly with zero wait time. Provide personalized product recommendations based on browsing history, handle holiday traffic spikes effortlessly, and remarkably improve your conversion rates.", color: "#3b82f6" },
        { title: "Healthcare", icon: faHeadset, desc: "Triage patient symptoms, book appointments, and send prescription reminders automatically. Ensure full compliance with medical data regulations, reduce administrative overhead for your clinic staff, and provide immediate empathetic responses to patients.", color: "#8b5cf6" },
        { title: "Banking & Finance", icon: faChartLine, desc: "Handle account queries, fraud alerts, and loan inquiries securely 24 hours a day. Deploy robust authentication mechanisms within the chat, automate routine transaction requests, and maintain optimal security for highly sensitive financial data.", color: "#06b6d4" },
        { title: "Education", icon: faGraduationCap, desc: "Answer admissions questions, share study resources, and schedule counselling sessions. Act as a 24/7 virtual campus guide, provide instantaneous updates regarding exam schedules, and foster a highly engaged prospective student community.", color: "#10b981" },
        { title: "Real Estate", icon: faBuilding, desc: "Qualify leads, schedule property visits, and send automated follow-ups to prospects. Instantly share property brochures, answer localized neighborhood questions, and keep potential buyers engaged long after they leave your website.", color: "#f59e0b" },
        { title: "HR & Recruitment", icon: faBriefcase, desc: "Screen candidates, schedule interviews, and answer employee FAQs with conversational AI. Modernize your internal ticketing system, guide new hires through their onboarding journeys smoothly, and assist your HR team with routine inquiries.", color: "#ef4444" }
    ];

    const nextUseCase = () => setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    const prevUseCase = () => setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));

    const featureData = [
        {
            stats: [{ val: "98%", label: "Accurate", color: "#a855f7" }, { val: "1.5%", label: "Confused", color: "#1f2937" }, { val: "0.5%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Queries Resolved", desc: "Total auto-completions", stat: "1M+", bg: "#a855f7", icon: faBrain, statusClass: "success" },
                { title: "Processing Time", desc: "Response latency", stat: "300ms", bg: "#1f2937", icon: faBolt, statusClass: "pending" },
                { title: "Model Precision", desc: "Contextual understanding", stat: "99%", bg: "#94a3b8", icon: faCheckCircle, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "96%", label: "Native", color: "#a855f7" }, { val: "3%", label: "Direct", color: "#1f2937" }, { val: "1%", label: "Grammar", color: "#e2e8f0" }],
            items: [
                { title: "Locales Served", desc: "Global dialects parsed", stat: "30+", bg: "#a855f7", icon: faLanguage, statusClass: "success" },
                { title: "Translate Speed", desc: "Real-time lag", stat: "<1s", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Data Privacy", desc: "Secure NLP pipeline", stat: "100%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "99.9%", label: "Live", color: "#a855f7" }, { val: "0.1%", label: "Scaling", color: "#1f2937" }, { val: "0%", label: "Down", color: "#e2e8f0" }],
            items: [
                { title: "24/7 Hours", desc: "Continuous monthly run", stat: "720 Hrs", bg: "#a855f7", icon: faClock, statusClass: "success" },
                { title: "Agent Savings", desc: "Labor cost reduction", stat: "$50K", bg: "#1f2937", icon: faBuilding, statusClass: "pending" },
                { title: "High Availability", desc: "Global CDN uptime", stat: "99.9%", bg: "#94a3b8", icon: faLock, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "85%", label: "1-Click", color: "#a855f7" }, { val: "10%", label: "Custom", color: "#1f2937" }, { val: "5%", label: "Dev", color: "#e2e8f0" }],
            items: [
                { title: "Platforms Synced", desc: "Ready connectors", stat: "25+", bg: "#a855f7", icon: faPlug, statusClass: "success" },
                { title: "Integration Time", desc: "Average deployment", stat: "1 Hr", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Secure API", desc: "Tokenized requests", stat: "256-bit", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        { icon: faBrain, title: "Deep NLP Engine", desc: "Understands user intent with advanced NLP, context switching and multi-turn conversation memory.", color: "#a855f7" },
        { icon: faLanguage, title: "Multilingual Support", desc: "Communicate with customers in 30+ languages with real-time translation and localisation.", color: "#8b5cf6" },
        { icon: faClock, title: "24/7 Availability", desc: "Never miss a customer query. Instant responses around the clock with zero downtime.", color: "#c084fc" },
        { icon: faPlug, title: "Easy Integration", desc: "Plug seamlessly into your website, WhatsApp, Telegram, Slack, and CRM in minutes.", color: "#7c3aed" },
        { icon: faShieldAlt, "title": "Enterprise Security", desc: "End-to-end encrypted conversations with full compliance for GDPR and data privacy regulations.", color: "#9333ea" },
        { icon: faChartLine, "title": "Real-time Analytics", desc: "Conversation dashboards, sentiment tracking, and drop-off analysis in a live admin panel.", color: "#a78bfa" }
    ];

    return (
        <>
            <TopNavbar />
            <TwoLineNavbar />
            <div className="crm-subpage-container ai-theme">

                {/* HERO SECTION */}
                <section className="crm-subpage-hero crm-showcase-hero ai-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow ai-glow-1" />
                        <div className="showcase-glow ai-glow-2" />
                        <div className="showcase-particles" />
                    </div>
                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7' }}><FontAwesomeIcon icon={faRobot} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Model Training</span>
                                <p className="sw-detail">98.5% Accuracy</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(139, 92, 246, 0.2)', color: '#8b5cf6' }}><FontAwesomeIcon icon={faComments} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Live Dialogs</span>
                                <p className="sw-detail">150 Chats Ongoing</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(192, 132, 252, 0.2)', color: '#c084fc' }}><FontAwesomeIcon icon={faBolt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Response Speed</span>
                                <p className="sw-detail">300ms Latency</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#a855f7' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Data Security</span>
                                <p className="sw-detail">SOC2 Compliant</p>
                            </div>
                        </motion.div>

                        <div className="showcase-center-text">
                            <motion.div className="showcase-badge ai-badge-color" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
                                <FontAwesomeIcon icon={faRobot} /> Intelligent AI Chatbot Platform
                            </motion.div>
                            <motion.h1 className="showcase-h1" initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
                                YOUR AI SUPPORT<br /> Starts <span className="ai-accent">Right Here</span>
                            </motion.h1>
                            <motion.p className="showcase-p" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Deploy an intelligent chatbot trained on your business data. Handle thousands of queries instantly with near-human accuracy.
                            </motion.p>
                            <motion.div className="showcase-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="ai-btn-primary">
                                    Let's talk now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">View our works</button>
                            </motion.div>
                            <motion.div className="showcase-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <div className="sc-stat"><h3>100K+</h3><span>Queries/Day</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>95%</h3><span>Accuracy</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>30+</h3><span>Languages</span></div>
                                <div className="sc-stat-div" />
                                <div className="sc-stat"><h3>4.9/5</h3><span>Rating</span></div>
                            </motion.div>
                        </div>

                        <div className="showcase-dashboard-stack">
                            <motion.div className="sc-card sc-card-left" initial={{ opacity: 0, x: 100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: -4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#a855f7" }} /> Bot Capabilities</div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item ai-item"><FontAwesomeIcon icon={faCheckCircle} /> Intent Detection</div>
                                    <div className="scc-item ai-item"><FontAwesomeIcon icon={faCheckCircle} /> Sentiment Analysis</div>
                                    <div className="scc-item ai-item"><FontAwesomeIcon icon={faCheckCircle} /> Auto Escalation</div>
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-center" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }} whileHover={{ y: -10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faChartPie} className="scc-icon" style={{ color: "#c084fc" }} /> Query Resolution Rate</div>
                                <div className="scc-body scc-chart">
                                    {[60, 85, 70, 95, 80, 100].map((h, i) => (
                                        <motion.div className="scc-bar ai-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div className="sc-card sc-card-right" initial={{ opacity: 0, x: -100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }} transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: 4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faComments} className="scc-icon" style={{ color: "#8b5cf6" }} /> Live Conversations</div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Query resolved</span> <small>Just now</small></div>
                                    <div className="scc-feed-item"><span>New chat started</span> <small>3m ago</small></div>
                                    <div className="scc-feed-item"><span>Escalated to agent</span> <small>8m ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE OUR AI CHATBOT */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <motion.div
                            className="cwi-header-row"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge ai-section-badge">Intelligent Advantage</span>
                            <h2 className="cwi-title">WHY CHOOSE OUR <span className="ai-accent" style={{ color: '#a855f7' }}>AI CHATBOT?</span></h2>
                            <p className="cwi-desc">Deploy an ultra-smart virtual agent that continuously learns, providing flawless multi-lingual conversational experiences securely.</p>
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
                                            {activeWhy === 0 ? "NLP Confidence Score" :
                                                activeWhy === 1 ? "Translation Accuracy" :
                                                    activeWhy === 2 ? "Uptime Status" :
                                                        "Integration Speed"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#a855f7' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '98%' : activeWhy === 1 ? '96%' : activeWhy === 2 ? '99.9%' : '85%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#d8b4fe' }} />
                                            <div className="cwi-pb-3" style={{ background: '#f3e8ff' }} />
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
                                <div className="impact-badge-line-left" style={{ background: 'linear-gradient(90deg, transparent, #a855f7)', boxShadow: '0 0 10px #a855f7' }} />
                                <span className="impact-badge ai-impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right" style={{ background: 'linear-gradient(90deg, #a855f7, transparent)', boxShadow: '0 0 10px #a855f7' }} />
                            </div>
                            <h2>PROVEN <span className="ai-span">Impact</span></h2>
                            <p>Businesses across industries trust our AI chatbot to deliver instant, accurate and empathetic support.</p>
                        </motion.div>
                        <div className="stats-grid">
                            {[
                                { number: "100", suffix: "K+", label1: "Conversations", label2: "Per Day", icon: faComments, color: "#3b82f6", iconColor: "#60a5fa" },
                                { number: "95", suffix: "%", label1: "Query", label2: "Resolution", icon: faHeart, color: "#1ed7b9", iconColor: "#2dd4bf" },
                                { number: "5", suffix: "x", label1: "Faster", label2: "Response", icon: faBolt, color: "#a855f7", iconColor: "#f59e0b" },
                                { number: "24", suffix: "/7", label1: "Always On", label2: "Support", icon: faHeadset, color: "#f59e0b", iconColor: "#fbbf24" }
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

                {/* WHO USES OUR AI CHATBOT */}
                <section className="crm-use-cases-section">
                    <div className="use-cases-container">
                        <motion.div
                            className="use-cases-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge ai-section-badge">Tailored Solutions</span>
                            <h2>Who Uses Our <span className="ai-span-h2">AI Chatbot?</span></h2>
                            <p>Our intelligent conversational platform fits every industry that values fast, accurate and scalable support.</p>
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
                                        <div className="ucm-cell">E-commerce</div>
                                        <div className="ucm-cell">Shoppers</div>
                                        <div className="ucm-cell">Track Orders</div>
                                        <div className="ucm-cell">Zero Wait Time</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Healthcare</div>
                                        <div className="ucm-cell">Patients</div>
                                        <div className="ucm-cell">Book Appts</div>
                                        <div className="ucm-cell">Triage Symptoms</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Education</div>
                                        <div className="ucm-cell">Students</div>
                                        <div className="ucm-cell">Admissions</div>
                                        <div className="ucm-cell">Instant Answers</div>
                                    </div>
                                </div>

                                {/* Bottom Lightning Box */}
                                <div className="ucm-bottom-box" style={{ background: 'rgba(168, 85, 247, 0.05)', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Banking & Finance</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#a855f7' }}>Securely handle queries</div>
                                        <div className="ucm-bb-desc">Automate loan inquiries 24/7</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">HR & Recruitment</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#a855f7' }}>Screen candidates fast</div>
                                        <div className="ucm-bb-desc">Answer employee FAQs instantly</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card" style={{ background: 'linear-gradient(135deg, #a855f7, #7e22ce)' }}>
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
                <section className="crm-insights-section ai-insights-section">
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark ai-badge-dark"><FontAwesomeIcon icon={faLightbulb} /> AI Intelligence</span>
                            <h2>Smarter Conversations,<br /><span className="ai-gradient-span">Happier Customers</span></h2>
                            <p>Move beyond scripted replies — our AI understands context, learns from every interaction, and keeps improving over time.</p>
                        </motion.div>
                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {/* Card 0 — Self-Learning AI Model */}
                                {[
                                    {
                                        title: "Self-Learning AI Model",
                                        desc: "The bot continuously learns from past conversations to improve accuracy and handle edge cases.",
                                        imgBg: "rgba(168,85,247,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="ai-card-svg">
                                                {/* Neural nodes */}
                                                {[[40, 80], [90, 40], [90, 80], [90, 120], [140, 60], [140, 100], [190, 80]].map(([cx, cy], k) => (
                                                    <circle key={k} cx={cx} cy={cy} r="10" fill="rgba(168,85,247,0.3)" stroke="#a855f7" strokeWidth="1.5" className={`ai-node ai-node-${k}`} />
                                                ))}
                                                {/* Connections */}
                                                {[[40, 80, 90, 40], [40, 80, 90, 80], [40, 80, 90, 120], [90, 40, 140, 60], [90, 80, 140, 60], [90, 80, 140, 100], [90, 120, 140, 100], [140, 60, 190, 80], [140, 100, 190, 80]].map(([x1, y1, x2, y2], k) => (
                                                    <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(168,85,247,0.4)" strokeWidth="1" className="ai-conn" />
                                                ))}
                                                {/* Pulse rings */}
                                                <circle cx="190" cy="80" r="16" fill="none" stroke="#a855f7" strokeWidth="1" opacity="0.6" className="ai-pulse" />
                                                <circle cx="190" cy="80" r="22" fill="none" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" className="ai-pulse2" />
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(192,132,252,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Neural Learning Engine</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Live Agent Handoff",
                                        desc: "Detect frustration signals and escalate to a human agent instantly with full context preserved.",
                                        imgBg: "rgba(192,132,252,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="ai-card-svg">
                                                {/* Bot head */}
                                                <rect x="20" y="50" width="60" height="55" rx="10" fill="rgba(168,85,247,0.25)" stroke="#a855f7" strokeWidth="1.5" />
                                                <circle cx="38" cy="72" r="5" fill="#c084fc" className="ai-blink" />
                                                <circle cx="62" cy="72" r="5" fill="#c084fc" className="ai-blink" />
                                                <path d="M38 88 Q50 96 62 88" stroke="#c084fc" strokeWidth="2" fill="none" />
                                                {/* Arrow */}
                                                <path d="M90 77 L150 77" stroke="#a855f7" strokeWidth="2" strokeDasharray="6 3" className="ai-arrow-dash" />
                                                <polygon points="148,71 158,77 148,83" fill="#a855f7" />
                                                {/* Human head */}
                                                <circle cx="188" cy="60" r="18" fill="rgba(192,132,252,0.25)" stroke="#c084fc" strokeWidth="1.5" />
                                                <circle cx="188" cy="57" r="7" fill="#c084fc" opacity="0.6" />
                                                <path d="M170 80 Q188 92 206 80" fill="rgba(192,132,252,0.3)" stroke="#c084fc" strokeWidth="1" />
                                                {/* Alert dot */}
                                                <circle cx="95" cy="60" r="8" fill="rgba(239,68,68,0.8)" className="ai-alert-pulse" />
                                                <text x="95" y="64" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">!</text>
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(192,132,252,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Instant Escalation</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Conversation Analytics",
                                        desc: "Deep insights into chat volume, resolution rate, and user sentiment across all channels.",
                                        imgBg: "rgba(168,85,247,0.18)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="ai-card-svg">
                                                {/* Bars */}
                                                {[{ x: 30, h: 60, c: "#a855f7" }, { x: 65, h: 40, c: "#7c3aed" }, { x: 100, h: 80, c: "#a855f7" }, { x: 135, h: 50, c: "#c084fc" }, { x: 170, h: 100, c: "#a855f7" }].map((b, k) => (
                                                    <rect key={k} x={b.x} y={120 - b.h} width="28" height={b.h} rx="4" fill={b.c} opacity="0.75" className={`ai-bar-rise ai-bar-rise-${k}`} />
                                                ))}
                                                {/* Trend line */}
                                                <polyline points="44,90 79,100 114,70 149,85 184,40" stroke="#f0abfc" strokeWidth="2" fill="none" strokeDasharray="200" strokeDashoffset="0" className="ai-trend-line" />
                                                {[44, 79, 114, 149, 184].map((x, k) => (
                                                    <circle key={k} cx={x} cy={[90, 100, 70, 85, 40][k]} r="4" fill="#e879f9" className="ai-dot-pop" />
                                                ))}
                                                {/* Axis */}
                                                <line x1="18" y1="120" x2="210" y2="120" stroke="rgba(192,132,252,0.3)" strokeWidth="1" />
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(192,132,252,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Chat Volume & Sentiment</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Bank-Grade Security",
                                        desc: "All conversations are encrypted end-to-end. Fully GDPR, HIPAA and ISO 27001 compliant.",
                                        imgBg: "rgba(109,40,217,0.15)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="ai-card-svg">
                                                {/* Shield */}
                                                <path d="M120 18 L165 38 L165 85 Q165 120 120 140 Q75 120 75 85 L75 38 Z" fill="rgba(109,40,217,0.3)" stroke="#a855f7" strokeWidth="2" className="ai-shield-glow" />
                                                {/* Lock body */}
                                                <rect x="106" y="80" width="28" height="22" rx="4" fill="rgba(168,85,247,0.6)" stroke="#c084fc" strokeWidth="1" />
                                                {/* Lock shackle */}
                                                <path d="M112 80 L112 72 Q120 62 128 72 L128 80" fill="none" stroke="#c084fc" strokeWidth="2.5" strokeLinecap="round" />
                                                {/* Checkmark */}
                                                <polyline points="112,91 118,97 130,84" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="ai-check-draw" />
                                                {/* Orbit rings */}
                                                <ellipse cx="120" cy="79" rx="50" ry="18" fill="none" stroke="rgba(168,85,247,0.2)" strokeWidth="1" strokeDasharray="4 3" />
                                                <ellipse cx="120" cy="79" rx="65" ry="28" fill="none" stroke="rgba(168,85,247,0.12)" strokeWidth="1" />
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(192,132,252,0.7)" fontSize="9" fontFamily="Inter,sans-serif">End-to-End Encrypted</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Omnichannel Deployment",
                                        desc: "Deploy on web, WhatsApp, Messenger, Slack and mobile with one unified management console.",
                                        imgBg: "rgba(139,92,246,0.15)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="ai-card-svg">
                                                {/* Center hub */}
                                                <circle cx="120" cy="80" r="20" fill="rgba(168,85,247,0.5)" stroke="#a855f7" strokeWidth="2" className="ai-hub-pulse" />
                                                <text x="120" y="84" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
                                                {/* Channel nodes */}
                                                {[{ cx: 50, cy: 35, label: "Web" }, { cx: 190, cy: 35, label: "WA" }, { cx: 50, cy: 125, label: "Msg" }, { cx: 190, cy: 125, label: "Slack" }, { cx: 120, cy: 20, label: "App" }].map((n, k) => (
                                                    <g key={k}>
                                                        <line x1="120" y1="80" x2={n.cx} y2={n.cy} stroke="rgba(168,85,247,0.35)" strokeWidth="1.5" strokeDasharray="5 3" className={`ai-spoke ai-spoke-${k}`} />
                                                        <circle cx={n.cx} cy={n.cy} r="16" fill="rgba(139,92,246,0.3)" stroke="#c084fc" strokeWidth="1.5" className={`ai-chan-pop ai-chan-pop-${k}`} />
                                                        <text x={n.cx} y={n.cy + 4} textAnchor="middle" fill="#e9d5ff" fontSize="8" fontWeight="600">{n.label}</text>
                                                    </g>
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(192,132,252,0.7)" fontSize="9" fontFamily="Inter,sans-serif">One Console, Every Channel</text>
                                            </svg>
                                        )
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card ai-arc-card insight-card-${i} ${activeInsight === i ? 'active-card ai-active-card' : ''}`}
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
                                        <div className="cic-image-wrapper ai-svg-wrapper" style={{ background: item.imgBg }}>
                                            {item.visual}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="cic-line ai-cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div className="crm-cta-strip ai-cta-strip" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="cta-strip-text">
                                <h3>Ready to Deploy Your AI Chatbot?</h3>
                                <p>Start free — no credit card required. Live in under 48 hours.</p>
                            </div>
                            <div className="cta-strip-actions">
                                <button className="ai-btn-cta-primary">Start Free Trial</button>
                                <button className="crm-btn-outline ai-btn-outline">Schedule a Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
};

export default AiChatbotPage;
