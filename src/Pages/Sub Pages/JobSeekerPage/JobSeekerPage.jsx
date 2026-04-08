import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faSearch, faChartPie, faArrowRight, faHeadset, faChartLine, faLightbulb, faHeart, faShieldAlt, faBolt, faBuilding, faGraduationCap, faUserTie, faBullseye, faCheckCircle, faFileAlt, faHandshake, faBell, faRobot, faLock, faStore, faMapMarkerAlt, faStar, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import '../CrmPage/CrmPage.css';
import './JobSeekerPage.css';
import imgAi from '../../../assets/images/ai_follow_ups.png';
import imgOmnichannel from '../../../assets/images/omnichannel.png';
import imgAutomation from '../../../assets/images/automation.png';
import imgForecasting from '../../../assets/images/forecasting.png';
import imgSmartFunnel from '../../../assets/images/smart_deal_funnel.png';

const JobSeekerPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);

    const useCasesList = [
        { title: "Fresh Graduates", icon: faGraduationCap, desc: "Kickstart your career with curated entry-level roles, internships and campus drives. Access tailored resume templates, participate in mock interviews with AI, and confidently approach recruiters from top-tier companies globally.", color: "#3b82f6" },
        { title: "Working Professionals", icon: faUserTie, desc: "Explore lateral moves, promotions, and high-paying roles with zero hassle. Discover hidden opportunities, leverage our smart matching algorithm to find cultures that fit your style, and negotiate offers like a seasoned pro.", color: "#8b5cf6" },
        { title: "HR & Recruiters", icon: faHandshake, desc: "Post jobs, screen resumes with AI, manage your entire recruitment pipeline. Automate initial screening processes, schedule interviews with integrated calendars, and maintain a high-quality talent pool effortlessly.", color: "#06b6d4" },
        { title: "Startups & SMEs", icon: faStore, desc: "Find top talent quickly without expensive agency fees using our smart hiring suite. Access diverse candidate profiles, streamline onboarding workflows, and build high-performing teams while keeping your recruitment budget intact.", color: "#10b981" },
        { title: "Remote Workers", icon: faMapMarkerAlt, desc: "Discover fully remote, hybrid and freelance opportunities from global employers. Filter companies by remote-first culture, access international job markets seamlessly, and enjoy the ultimate freedom of working from anywhere.", color: "#f59e0b" },
        { title: "Career Changers", icon: faStar, desc: "Skill gap analysis and role recommendations to transition smoothly into new fields. Identify transferable skills, get matched with cross-industry roles, and smoothly navigate your professional pivot with confidence and ease.", color: "#ef4444" }
    ];

    const nextUseCase = () => setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    const prevUseCase = () => setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));

    const featureData = [
        {
            stats: [{ val: "95%", label: "Matched", color: "#f59e0b" }, { val: "4%", label: "Partial", color: "#1f2937" }, { val: "1%", label: "Not Fit", color: "#e2e8f0" }],
            items: [
                { title: "Jobs Matched", desc: "Total profile matches", stat: "500K+", bg: "#f59e0b", icon: faSearch, statusClass: "success" },
                { title: "Algorithm Speed", desc: "Matching query speed", stat: "<1s", bg: "#1f2937", icon: faBolt, statusClass: "pending" },
                { title: "Candidate Sat.", desc: "Finding relevant roles", stat: "98%", bg: "#94a3b8", icon: faHeart, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "98%", label: "ATS Pass", color: "#f59e0b" }, { val: "2%", label: "Review", color: "#1f2937" }, { val: "0%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Resumes Built", desc: "Total system resumes", stat: "1.5M+", bg: "#f59e0b", icon: faFileAlt, statusClass: "success" },
                { title: "Format Checks", desc: "Checks per resume", stat: "30+", bg: "#1f2937", icon: faCheckCircle, statusClass: "pending" },
                { title: "Data Security", desc: "End-to-end extraction", stat: "100%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "80%", label: "Response", color: "#f59e0b" }, { val: "15%", label: "Pending", color: "#1f2937" }, { val: "5%", label: "Ghosted", color: "#e2e8f0" }],
            items: [
                { title: "Interviews Set", desc: "Average per week", stat: "1.2K", bg: "#f59e0b", icon: faHandshake, statusClass: "success" },
                { title: "Active Recruiters", desc: "Verified global orgs", stat: "5K+", bg: "#1f2937", icon: faBuilding, statusClass: "pending" },
                { title: "Spam Filtered", desc: "Blocked low qual jobs", stat: "99%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "90%", label: "Click Rate", color: "#f59e0b" }, { val: "8%", label: "Ignored", color: "#1f2937" }, { val: "2%", label: "Bounced", color: "#e2e8f0" }],
            items: [
                { title: "Alerts Pushed", desc: "Daily personalized emails", stat: "800K", bg: "#f59e0b", icon: faBell, statusClass: "success" },
                { title: "Engagement", desc: "Average session time", stat: "4m", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Uptime", desc: "Alert delivery reliability", stat: "99.9%", bg: "#94a3b8", icon: faHeart, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        { icon: faSearch, title: "Smart Job Matching", desc: "AI algorithms match your profile to the most relevant openings in real time.", color: "#f59e0b" },
        { icon: faFileAlt, title: "Resume Builder", desc: "Create ATS-friendly resumes with guided templates for your target role.", color: "#fbbf24" },
        { icon: faHandshake, title: "Recruiter Connect", desc: "Get direct access to verified hiring managers from top companies worldwide.", color: "#f97316" },
        { icon: faBell, title: "Instant Job Alerts", desc: "Real-time notifications for openings matching your skills and salary preferences.", color: "#fb923c" },
        { icon: faShieldAlt, title: "Profile Verification", desc: "Verified badge builds trust with recruiters and increases your response rate.", color: "#d97706" },
        { icon: faChartLine, title: "Application Tracker", desc: "Track every application with status updates, interview schedules and follow-up reminders.", color: "#ea580c" }
    ];
    return (
        <>
            <TopNavbar /><TwoLineNavbar />
            <div className="crm-subpage-container job-theme">
                <section className="crm-subpage-hero crm-showcase-hero job-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow job-glow-1" /><div className="showcase-glow job-glow-2" /><div className="showcase-particles" />
                    </div>
                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#f59e0b' }}><FontAwesomeIcon icon={faSearch} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Resume Match</span>
                                <p className="sw-detail">85+ Daily Hits</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24' }}><FontAwesomeIcon icon={faUserTie} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Live Applicants</span>
                                <p className="sw-detail">Data live update</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(249, 115, 22, 0.2)', color: '#f97316' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Hire Growth</span>
                                <p className="sw-detail">+18% Success Rate</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(251, 146, 60, 0.2)', color: '#fb923c' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Verified Stats</span>
                                <p className="sw-detail">Safe & Encrypted</p>
                            </div>
                        </motion.div>

                        <div className="showcase-center-text">
                            <motion.div className="showcase-badge job-badge-color" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
                                <FontAwesomeIcon icon={faBriefcase} /> #1 Career Platform for Job Seekers
                            </motion.div>
                            <motion.h1 className="showcase-h1" initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
                                YOUR DREAM JOB<br /> Awaits <span className="job-accent">You Today</span>
                            </motion.h1>
                            <motion.p className="showcase-p" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Connect with top employers, build a standout profile, and land your next role faster with our AI-powered job matching platform.
                            </motion.p>
                            <motion.div className="showcase-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="job-btn-primary">
                                    Let's talk now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">View our works</button>
                            </motion.div>
                            <motion.div className="showcase-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <div className="sc-stat"><h3>5K+</h3><span>Active Jobs</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>50+</h3><span>Employers</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>150+</h3><span>Sectors</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>4.8/5</h3><span>Rating</span></div>
                            </motion.div>
                        </div>
                        <div className="showcase-dashboard-stack">
                            <motion.div className="sc-card sc-card-left" initial={{ opacity: 0, x: 100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: -4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#f59e0b" }} /> Platform Highlights</div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item job-item"><FontAwesomeIcon icon={faCheckCircle} /> Resume Score</div>
                                    <div className="scc-item job-item"><FontAwesomeIcon icon={faCheckCircle} /> AI Job Match</div>
                                    <div className="scc-item job-item"><FontAwesomeIcon icon={faCheckCircle} /> Mock Interviews</div>
                                </div>
                            </motion.div>
                            <motion.div className="sc-card sc-card-center" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }} whileHover={{ y: -10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faChartPie} className="scc-icon" style={{ color: "#f97316" }} /> Placement Rate</div>
                                <div className="scc-body scc-chart">
                                    {[50, 75, 55, 90, 65, 100].map((h, i) => <motion.div className="scc-bar job-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />)}
                                </div>
                            </motion.div>
                            <motion.div className="sc-card sc-card-right" initial={{ opacity: 0, x: -100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }} transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: 4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBriefcase} className="scc-icon" style={{ color: "#fbbf24" }} /> Recent Activity</div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Interview scheduled</span><small>Just now</small></div>
                                    <div className="scc-feed-item"><span>Profile viewed</span><small>5m ago</small></div>
                                    <div className="scc-feed-item"><span>Offer received</span><small>1h ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE OUR JOB HUB */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <motion.div
                            className="cwi-header-row"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge job-section-badge">Career Advantage</span>
                            <h2 className="cwi-title">WHY CHOOSE OUR <span className="job-accent" style={{ color: '#f59e0b' }}>JOB HUB?</span></h2>
                            <p className="cwi-desc">The smartest way to discover opportunities, connect with employers and grow your career.</p>
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
                                            {activeWhy === 0 ? "Match Algorithm Score" :
                                                activeWhy === 1 ? "Resume ATS Score" :
                                                    activeWhy === 2 ? "Recruiter Response" :
                                                        "Alert Precision"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#f59e0b' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '95%' : activeWhy === 1 ? '98%' : activeWhy === 2 ? '80%' : '90%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#fcd34d' }} />
                                            <div className="cwi-pb-3" style={{ background: '#fef3c7' }} />
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

                <section className="crm-impact-section">
                    <div className="impact-container">
                        <motion.div className="impact-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="impact-badge-wrapper">
                                <div className="impact-badge-line-left" style={{ background: 'linear-gradient(90deg,transparent,#f59e0b)', boxShadow: '0 0 10px #f59e0b' }} />
                                <span className="impact-badge job-impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right" style={{ background: 'linear-gradient(90deg,#f59e0b,transparent)', boxShadow: '0 0 10px #f59e0b' }} />
                            </div>
                            <h2>PROVEN <span className="job-span">Impact</span></h2>
                            <p>Thousands of candidates have found their dream roles through our intelligent hiring ecosystem.</p>
                        </motion.div>
                        <div className="stats-grid">
                            {[
                                { number: "5", suffix: "K+", label1: "Active", label2: "Job Seekers", icon: faUserTie, color: "#3b82f6", iconColor: "#60a5fa" },
                                { number: "87", suffix: "%", label1: "Placement", label2: "Success", icon: faHeart, color: "#1ed7b9", iconColor: "#2dd4bf" },
                                { number: "2", suffix: "x", label1: "Faster", label2: "Hiring", icon: faBolt, color: "#a855f7", iconColor: "#f59e0b" },
                                { number: "50", suffix: "+", label1: "Hiring", label2: "Enterprises", icon: faHandshake, color: "#f59e0b", iconColor: "#fbbf24" }
                            ].map((s, i) => (
                                <motion.div className="stat-card" key={i} style={{ '--card-color': s.color }} initial={{ opacity: 0, scale: 0.9, y: 30 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.15 }} viewport={{ once: true }} whileHover={{ y: -8, transition: { duration: 0.25 } }}>
                                    <div className="stat-card-inner">
                                        <div className="stat-top-row"><div className="stat-icon-box" style={{ '--icon-color': s.iconColor }}><FontAwesomeIcon icon={s.icon} /></div><div className="stat-value">{s.number}<span className="stat-suffix">{s.suffix}</span></div></div>
                                        <div className="stat-labels"><div className="stat-label-line">{s.label1}</div><div className="stat-label-line">{s.label2}</div></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="crm-use-cases-section">
                    <div className="use-cases-container">
                        <motion.div
                            className="use-cases-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge job-section-badge">Tailored Solutions</span>
                            <h2>Who Uses Our <span className="job-span-h2">Job Hub?</span></h2>
                            <p>From fresh graduates to seasoned professionals, our platform serves every career stage.</p>
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
                                        <div className="ucm-cell">Graduates</div>
                                        <div className="ucm-cell">Entry-level</div>
                                        <div className="ucm-cell">Apply Jobs</div>
                                        <div className="ucm-cell">First Career Step</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Professionals</div>
                                        <div className="ucm-cell">Lateral Moves</div>
                                        <div className="ucm-cell">Get Promoted</div>
                                        <div className="ucm-cell">Higher Salary</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Startups</div>
                                        <div className="ucm-cell">Hiring</div>
                                        <div className="ucm-cell">Post Jobs</div>
                                        <div className="ucm-cell">No Agency Fees</div>
                                    </div>
                                </div>

                                {/* Bottom Lightning Box */}
                                <div className="ucm-bottom-box" style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Remote Workers</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#f59e0b' }}>Flexible remote jobs</div>
                                        <div className="ucm-bb-desc">Global employer reach</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Career Changers</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#f59e0b' }}>Skill gap analysis</div>
                                        <div className="ucm-bb-desc">Smooth transition</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
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

                <section className="crm-insights-section job-insights-section">
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark job-badge-dark"><FontAwesomeIcon icon={faLightbulb} /> Career Intelligence</span>
                            <h2>Work Smarter,<br /><span className="job-gradient-span">Land Faster</span></h2>
                            <p>Our AI surfaces the right opportunities and gives you tools to stand out — from application to offer letter.</p>
                        </motion.div>
                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {[
                                    {
                                        title: "AI Resume Scoring",
                                        desc: "Instant feedback with keyword optimization tips to pass ATS filters effortlessly.",
                                        imgBg: "rgba(245,158,11,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="job-card-svg">
                                                {/* Resume doc */}
                                                <rect x="55" y="20" width="90" height="120" rx="6" fill="rgba(245,158,11,0.15)" stroke="#f59e0b" strokeWidth="1.5" />
                                                {/* Lines of text */}
                                                {[40, 55, 70, 85, 100, 115].map((y, k) => (
                                                    <rect key={k} x="70" y={y} width={k === 0 ? 50 : 65} height="6" rx="3" fill="rgba(251,191,36,0.4)" className={`job-line-fade job-line-fade-${k}`} />
                                                ))}
                                                {/* AI scan beam */}
                                                <line x1="55" y1="80" x2="145" y2="80" stroke="#fbbf24" strokeWidth="2" strokeDasharray="200" className="job-scan-beam" />
                                                {/* Score badge */}
                                                <circle cx="175" cy="55" r="22" fill="rgba(245,158,11,0.3)" stroke="#f59e0b" strokeWidth="2" className="job-score-ring" />
                                                <text x="175" y="52" textAnchor="middle" fill="#fbbf24" fontSize="12" fontWeight="bold">94</text>
                                                <text x="175" y="64" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="7">ATS Score</text>
                                                {/* Check sparks */}
                                                {[[163, 30], [188, 30], [163, 80], [188, 80]].map(([cx, cy], k) => (
                                                    <circle key={k} cx={cx} cy={cy} r="3" fill="#fbbf24" opacity="0.5" className={`job-spark job-spark-${k}`} />
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="9" fontFamily="Inter,sans-serif">AI-Powered ATS Filter</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Mock Interview Coach",
                                        desc: "Practice with our AI interviewer and get real-time feedback on answers and tone.",
                                        imgBg: "rgba(251,191,36,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="job-card-svg">
                                                {/* Person */}
                                                <circle cx="70" cy="55" r="20" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" />
                                                <circle cx="70" cy="52" r="8" fill="#fbbf24" opacity="0.5" />
                                                <path d="M50 75 Q70 88 90 75" fill="rgba(245,158,11,0.2)" stroke="#f59e0b" strokeWidth="1" />
                                                {/* Speech bubble person */}
                                                <path d="M94 42 Q130 30 130 55 Q130 70 108 70 L100 78 L102 70 Q94 70 94 55 Z" fill="rgba(245,158,11,0.2)" stroke="#fbbf24" strokeWidth="1.2" className="job-bubble-1" />
                                                {/* Waveform inside bubble */}
                                                {[108, 114, 120, 126].map((x, k) => (
                                                    <line key={k} x1={x} y1={55 - ([5, 9, 6, 4][k])} x2={x} y2={55 + ([5, 9, 6, 4][k])} stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" className={`job-wave job-wave-${k}`} />
                                                ))}
                                                {/* AI robot */}
                                                <rect x="155" y="40" width="50" height="45" rx="8" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" />
                                                <circle cx="168" cy="57" r="5" fill="#fbbf24" className="job-eye-blink" />
                                                <circle cx="192" cy="57" r="5" fill="#fbbf24" className="job-eye-blink" />
                                                <rect x="166" y="68" width="28" height="5" rx="2" fill="rgba(251,191,36,0.5)" />
                                                {/* AI speech bubble */}
                                                <path d="M148 38 Q138 25 155 25 Q172 25 172 35 L165 42 Z" fill="rgba(251,191,36,0.3)" stroke="#fbbf24" strokeWidth="1" className="job-bubble-2" />
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Real-Time AI Coaching</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Salary Benchmarking",
                                        desc: "Know your market worth with real-time salary data by role and experience level.",
                                        imgBg: "rgba(245,158,11,0.18)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="job-card-svg">
                                                {/* Horizontal bars */}
                                                {[
                                                    { label: "Junior", w: 80, y: 30, c: "rgba(245,158,11,0.5)" },
                                                    { label: "Mid", w: 130, y: 55, c: "rgba(251,191,36,0.7)" },
                                                    { label: "Senior", w: 170, y: 80, c: "#f59e0b" },
                                                    { label: "Lead", w: 140, y: 105, c: "rgba(234,88,12,0.6)" },
                                                ].map((b, k) => (
                                                    <g key={k}>
                                                        <text x="18" y={b.y + 10} fill="rgba(251,191,36,0.6)" fontSize="8">{b.label}</text>
                                                        <rect x="50" y={b.y} width={b.w} height="16" rx="4" fill={b.c} className={`job-hbar job-hbar-${k}`} />
                                                    </g>
                                                ))}
                                                {/* You marker */}
                                                <line x1="150" y1="18" x2="150" y2="130" stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="4 3" />
                                                <polygon points="146,20 154,20 150,14" fill="#fbbf24" />
                                                <text x="152" y="14" fill="#fbbf24" fontSize="7">You</text>
                                                {/* Currency symbol */}
                                                <text x="200" y="80" fill="rgba(251,191,36,0.4)" fontSize="36" fontWeight="bold">₹</text>
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Real-Time Market Data</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Confidential Job Search",
                                        desc: "Hidden mode lets you explore opportunities without your current employer knowing.",
                                        imgBg: "rgba(180,83,9,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="job-card-svg">
                                                {/* Background blurred profiles */}
                                                {[[40, 60], [80, 45], [120, 65], [160, 50], [200, 60]].map(([cx, cy], k) => (
                                                    <g key={k} opacity="0.25">
                                                        <circle cx={cx} cy={cy} r="12" fill="rgba(245,158,11,0.4)" stroke="#f59e0b" strokeWidth="1" />
                                                        <rect x={cx - 10} y={cy + 14} width="20" height="8" rx="2" fill="rgba(245,158,11,0.3)" />
                                                    </g>
                                                ))}
                                                {/* Incognito hood */}
                                                <ellipse cx="120" cy="65" rx="38" ry="42" fill="rgba(30,20,0,0.7)" stroke="#f59e0b" strokeWidth="2" className="job-incognito" />
                                                {/* Eye slits */}
                                                <ellipse cx="108" cy="62" rx="8" ry="5" fill="rgba(251,191,36,0.9)" className="job-eye-glow" />
                                                <ellipse cx="132" cy="62" rx="8" ry="5" fill="rgba(251,191,36,0.9)" className="job-eye-glow" />
                                                {/* Slash / hidden */}
                                                <line x1="84" y1="95" x2="96" y2="110" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" />
                                                <line x1="100" y1="95" x2="112" y2="110" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5" />
                                                {/* Shield badge */}
                                                <path d="M195 20 L210 28 L210 48 Q210 60 195 65 Q180 60 180 48 L180 28 Z" fill="rgba(245,158,11,0.25)" stroke="#f59e0b" strokeWidth="1.5" className="job-shield-pulse" />
                                                <text x="195" y="46" textAnchor="middle" fill="#fbbf24" fontSize="14">🔒</text>
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="9" fontFamily="Inter,sans-serif">100% Employer Hidden</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Application Pipeline",
                                        desc: "Track every application, interview stage, and offer letter in a visual kanban board.",
                                        imgBg: "rgba(217,119,6,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="job-card-svg">
                                                {/* Kanban columns */}
                                                {["Applied", "Interview", "Offer"].map((label, col) => (
                                                    <g key={col}>
                                                        <rect x={20 + col * 73} y="18" width="62" height="120" rx="6" fill="rgba(245,158,11,0.08)" stroke="rgba(245,158,11,0.25)" strokeWidth="1" />
                                                        <text x={51 + col * 73} y="32" textAnchor="middle" fill="rgba(251,191,36,0.6)" fontSize="7" fontWeight="600">{label}</text>
                                                    </g>
                                                ))}
                                                {/* Cards in columns */}
                                                {[
                                                    { col: 0, row: 0, c: "rgba(245,158,11,0.4)", w: 50, label: "Google" },
                                                    { col: 0, row: 1, c: "rgba(245,158,11,0.3)", w: 50, label: "Amazon" },
                                                    { col: 0, row: 2, c: "rgba(245,158,11,0.25)", w: 50, label: "Stripe" },
                                                    { col: 1, row: 0, c: "rgba(251,191,36,0.5)", w: 50, label: "Meta" },
                                                    { col: 1, row: 1, c: "rgba(251,191,36,0.35)", w: 50, label: "Netflix" },
                                                    { col: 2, row: 0, c: "rgba(234,88,12,0.6)", w: 50, label: "Apple ✓" },
                                                ].map((card, k) => (
                                                    <g key={k}>
                                                        <rect x={27 + card.col * 73} y={42 + card.row * 30} width={card.w} height="22" rx="4" fill={card.c} className={`job-kcard job-kcard-${k}`} />
                                                        <text x={52 + card.col * 73} y={57 + card.row * 30} textAnchor="middle" fill="white" fontSize="7" fontWeight="500">{card.label}</text>
                                                    </g>
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(251,191,36,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Visual Kanban Tracker</text>
                                            </svg>
                                        )
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card job-arc-card insight-card-${i} ${activeInsight === i ? 'active-card job-active-card' : ''}`}
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
                                        <div className="cic-image-wrapper job-svg-wrapper" style={{ background: item.imgBg }}>
                                            {item.visual}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="cic-line job-cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div className="crm-cta-strip job-cta-strip" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="cta-strip-text"><h3>Ready to Land Your Dream Job?</h3><p>Create your free profile today — no subscription needed.</p></div>
                            <div className="cta-strip-actions">
                                <button className="job-btn-cta-primary">Start Free Trial</button>
                                <button className="crm-btn-outline job-btn-outline">Schedule a Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};
export default JobSeekerPage;
