import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBookOpen, faArrowRight, faHeadset, faChartLine, faLightbulb, faHeart, faBolt, faBuilding, faUserTie, faBullseye, faCheckCircle, faCertificate, faUsers, faBriefcase, faRobot, faLock, faMedal, faCogs, faSearch, faVideo, faChalkboardTeacher, faShieldAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'motion/react';
import TopNavbar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import Footer from '../../../Components/Footer/Footer';
import '../CrmPage/CrmPage.css';
import './LearningPage.css';
import imgAi from '../../../assets/images/ai_follow_ups.png';
import imgOmnichannel from '../../../assets/images/omnichannel.png';
import imgAutomation from '../../../assets/images/automation.png';
import imgForecasting from '../../../assets/images/forecasting.png';
import imgSmartFunnel from '../../../assets/images/smart_deal_funnel.png';

const LearningPage = () => {
    useEffect(() => { window.scrollTo(0, 0); }, []);
    const [activeWhy, setActiveWhy] = useState(0);
    const [activeUseCase, setActiveUseCase] = useState(0);
    const [activeInsight, setActiveInsight] = useState(2);

    const useCasesList = [
        { title: "College Students", icon: faGraduationCap, desc: "Get industry-ready with practical skills, live projects and placement support before graduation. Build a strong foundation with hands-on coding challenges, participate in hackathons, and connect with peers to foster an engaging learning environment.", color: "#3b82f6" },
        { title: "Working Professionals", icon: faUserTie, desc: "Upskill in emerging technologies, earn certifications and unlock the next level of your career. Balance your busy schedule with flexible online modules, receive specialized mentorship, and navigate corporate promotions seamlessly.", color: "#8b5cf6" },
        { title: "Career Switchers", icon: faBriefcase, desc: "Transition smoothly into tech, design or marketing with structured bootcamps and mentorship. Overcome imposter syndrome with guided curriculums, real-world portfolio building, and actionable feedback from seasoned industry experts.", color: "#06b6d4" },
        { title: "Corporate Teams", icon: faBuilding, desc: "Customised training programs for teams to stay ahead in a rapidly evolving industry landscape. Ensure your workforce remains competitive by tracking progress through insightful dashboards and setting unified organizational learning goals.", color: "#10b981" },
        { title: "Freelancers", icon: faSearch, desc: "Build a marketable portfolio with niche skills that attract global clients and projects. Learn how to pitch effectively, deliver high-quality output consistently, and manage your freelance business like a true professional.", color: "#f59e0b" },
        { title: "Entrepreneurs", icon: faCogs, desc: "Learn product, marketing, finance and leadership to scale your startup the right way. Gain deep insights into market research, prototype development, and funding strategies to turn your bold ideas into successful ventures.", color: "#ef4444" }
    ];

    const nextUseCase = () => setActiveUseCase((prev) => (prev + 1) % useCasesList.length);
    const prevUseCase = () => setActiveUseCase((prev) => (prev === 0 ? useCasesList.length - 1 : prev - 1));

    const featureData = [
        {
            stats: [{ val: "90%", label: "Completion", color: "#ef4444" }, { val: "8%", label: "In Progress", color: "#1f2937" }, { val: "2%", label: "Dropout", color: "#e2e8f0" }],
            items: [
                { title: "Total Enrolled", desc: "Total learners currently", stat: "200K+", bg: "#ef4444", icon: faGraduationCap, statusClass: "success" },
                { title: "Avg. Duration", desc: "Average completion time", stat: "12 Wks", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "Course Rating", desc: "Average student feedback", stat: "4.8/5", bg: "#94a3b8", icon: faHeart, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "100%", label: "Verified", color: "#ef4444" }, { val: "0%", label: "Pending", color: "#1f2937" }, { val: "0%", label: "Failed", color: "#e2e8f0" }],
            items: [
                { title: "Certificates Issued", desc: "Total valid certifications", stat: "150K+", bg: "#ef4444", icon: faCheckCircle, statusClass: "success" },
                { title: "Global Partners", desc: "Recognized universally", stat: "50+", bg: "#1f2937", icon: faBuilding, statusClass: "pending" },
                { title: "Verification Rate", desc: "Instant verification", stat: "100%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "85%", label: "Available", color: "#ef4444" }, { val: "10%", label: "Booked", color: "#1f2937" }, { val: "5%", label: "Offline", color: "#e2e8f0" }],
            items: [
                { title: "Mentor Sessions", desc: "Average sessions per week", stat: "800 Hrs", bg: "#ef4444", icon: faUsers, statusClass: "success" },
                { title: "Expert Mentors", desc: "Industry seasoned pros", stat: "300+", bg: "#1f2937", icon: faUserTie, statusClass: "pending" },
                { title: "Satisfaction Score", desc: "Student rating globally", stat: "4.9/5", bg: "#94a3b8", icon: faHeart, statusClass: "neutral" }
            ]
        },
        {
            stats: [{ val: "99.9%", label: "Uptime", color: "#ef4444" }, { val: "0.1%", label: "Maint.", color: "#1f2937" }, { val: "0%", label: "Downt.", color: "#e2e8f0" }],
            items: [
                { title: "Live Classes", desc: "Total broadcasts monthly", stat: "1.2K+", bg: "#ef4444", icon: faVideo, statusClass: "success" },
                { title: "Bandwidth Used", desc: "Average monthly streaming", stat: "500 TB", bg: "#1f2937", icon: faChartLine, statusClass: "pending" },
                { title: "System Reliability", desc: "Historical cloud uptime", stat: "99.9%", bg: "#94a3b8", icon: faShieldAlt, statusClass: "neutral" }
            ]
        }
    ];

    const benefits = [
        { icon: faBookOpen, title: "Structured Learning Paths", desc: "Curated roadmaps from beginner to expert across tech, design, marketing and management.", color: "#ef4444" },
        { icon: faCertificate, title: "Industry Certifications", desc: "Earn globally recognised certifications that employers actively seek and value.", color: "#f87171" },
        { icon: faChalkboardTeacher, title: "Expert-Led Mentorship", desc: "One-on-one mentorship sessions with industry veterans who guide your career growth.", color: "#dc2626" },
        { icon: faVideo, title: "Live & Recorded Classes", desc: "Attend live sessions or watch recordings at your own pace — learning that fits your life.", color: "#fca5a5" },
        { icon: faBriefcase, title: "Placement Assistance", desc: "Resume building, mock interviews and direct placement support with 150+ hiring partners.", color: "#ef4444" },
        { icon: faCogs, title: "Project-Based Curriculum", desc: "Apply your learning through real projects that build a professional portfolio instantly.", color: "#b91c1c" }
    ];
    return (
        <>
            <TopNavbar /><TwoLineNavbar />
            <div className="crm-subpage-container learn-theme">
                <section className="crm-subpage-hero crm-showcase-hero learn-showcase-hero">
                    <div className="showcase-bg-layer">
                        <div className="showcase-glow learn-glow-1" /><div className="showcase-glow learn-glow-2" /><div className="showcase-particles" />
                    </div>
                    <div className="showcase-container">
                        {/* Left side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-left-top"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(239, 68, 68, 0.2)', color: '#ef4444' }}><FontAwesomeIcon icon={faCertificate} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Course Progress</span>
                                <p className="sw-detail">1.2M+ Certs Issued</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-left-bottom"
                            initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.7 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(248, 113, 113, 0.2)', color: '#f87171' }}><FontAwesomeIcon icon={faVideo} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Student Hub</span>
                                <p className="sw-detail">Data live update</p>
                            </div>
                        </motion.div>

                        {/* Right side widgets */}
                        <motion.div 
                            className="hero-side-widget sw-right-top"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.6 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(220, 38, 38, 0.2)', color: '#dc2626' }}><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Skill Gain</span>
                                <p className="sw-detail">+35% Growth</p>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="hero-side-widget sw-right-bottom"
                            initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.8 }}
                        >
                            <div className="sw-icon-box" style={{ background: 'rgba(252, 165, 165, 0.2)', color: '#fca5a5' }}><FontAwesomeIcon icon={faShieldAlt} /></div>
                            <div className="sw-content">
                                <span className="sw-title">Safe Learning</span>
                                <p className="sw-detail">Safe & Encrypted</p>
                            </div>
                        </motion.div>

                        <div className="showcase-center-text">
                            <motion.div className="showcase-badge learn-badge-color" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, type: "spring" }}>
                                <FontAwesomeIcon icon={faGraduationCap} /> Learning & Career Growth Platform
                            </motion.div>
                            <motion.h1 className="showcase-h1" initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1 }}>
                                YOUR CAREER<br />Growth Starts <span className="learn-accent">Here Today</span>
                            </motion.h1>
                            <motion.p className="showcase-p" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                                Master in-demand skills, earn certifications, and get placed — all through one powerful learning and career growth platform.
                            </motion.p>
                            <motion.div className="showcase-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
                                <a href="https://wa.me/916381759909" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }} className="learn-btn-primary">
                                    Let's talk now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "8px" }} />
                                </a>
                                <button className="sc-btn-secondary">View our works</button>
                            </motion.div>
                            <motion.div className="showcase-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                                <div className="sc-stat"><h3>13+</h3><span>Courses</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>5K+</h3><span>Students</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>90%</h3><span>Placement</span></div><div className="sc-stat-div" />
                                <div className="sc-stat"><h3>4.9/5</h3><span>Rating</span></div>
                            </motion.div>
                        </div>
                        <div className="showcase-dashboard-stack">
                            <motion.div className="sc-card sc-card-left" initial={{ opacity: 0, x: 100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: -8 }} transition={{ duration: 1, delay: 0.6, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: -4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faBullseye} className="scc-icon" style={{ color: "#ef4444" }} /> Learning Features</div>
                                <div className="scc-body scc-list">
                                    <div className="scc-item learn-item"><FontAwesomeIcon icon={faCheckCircle} /> Live Classes</div>
                                    <div className="scc-item learn-item"><FontAwesomeIcon icon={faCheckCircle} /> Mentorship</div>
                                    <div className="scc-item learn-item"><FontAwesomeIcon icon={faCheckCircle} /> Certifications</div>
                                </div>
                            </motion.div>
                            <motion.div className="sc-card sc-card-center" initial={{ opacity: 0, y: 200 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8, type: "spring", bounce: 0.3 }} whileHover={{ y: -10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faChartLine} className="scc-icon" style={{ color: "#f87171" }} /> Student Progress</div>
                                <div className="scc-body scc-chart">
                                    {[45, 70, 55, 88, 65, 100].map((h, i) => <motion.div className="scc-bar learn-bar" key={i} initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 1, delay: 1.2 + i * 0.1 }} />)}
                                </div>
                            </motion.div>
                            <motion.div className="sc-card sc-card-right" initial={{ opacity: 0, x: -100, y: 150 }} animate={{ opacity: 1, x: 0, y: 0, rotate: 8 }} transition={{ duration: 1, delay: 0.7, type: "spring", bounce: 0.3 }} whileHover={{ y: -10, rotate: 4, zIndex: 10 }}>
                                <div className="scc-header"><FontAwesomeIcon icon={faGraduationCap} className="scc-icon" style={{ color: "#fca5a5" }} /> Campus Activity</div>
                                <div className="scc-body scc-feed">
                                    <div className="scc-feed-item"><span>Course completed</span><small>Just now</small></div>
                                    <div className="scc-feed-item"><span>Certificate earned</span><small>20m ago</small></div>
                                    <div className="scc-feed-item"><span>Offer letter!</span><small>2h ago</small></div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* WHY CHOOSE OUR LEARNING PLATFORM */}
                <section className="crm-why-interactive">
                    <div className="cwi-container">
                        <motion.div
                            className="cwi-header-row"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge learn-section-badge">Growth Advantage</span>
                            <h2 className="cwi-title">WHY CHOOSE OUR <span className="learn-accent" style={{ color: '#ef4444' }}>LEARNING PLATFORM?</span></h2>
                            <p className="cwi-desc">From skill building to career placement — your complete growth journey under one roof.</p>
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
                                            {activeWhy === 0 ? "Curriculum Progress" :
                                                activeWhy === 1 ? "Certification Validity" :
                                                    activeWhy === 2 ? "Mentor Availability" :
                                                        "Video Quality & Uptime"}
                                        </h4>

                                        <div className="cwi-progress-bar">
                                            <motion.div className="cwi-pb-1" style={{ background: '#ef4444' }} initial={{ width: 0 }} animate={{ width: activeWhy === 0 ? '90%' : activeWhy === 1 ? '100%' : activeWhy === 2 ? '85%' : '99.9%' }} transition={{ duration: 0.8 }} />
                                            <div className="cwi-pb-2" style={{ background: '#fca5a5' }} />
                                            <div className="cwi-pb-3" style={{ background: '#fee2e2' }} />
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
                                <div className="impact-badge-line-left" style={{ background: 'linear-gradient(90deg,transparent,#ef4444)', boxShadow: '0 0 10px #ef4444' }} />
                                <span className="impact-badge learn-impact-badge">BY THE NUMBERS</span>
                                <div className="impact-badge-line-right" style={{ background: 'linear-gradient(90deg,#ef4444,transparent)', boxShadow: '0 0 10px #ef4444' }} />
                            </div>
                            <h2>PROVEN <span className="learn-span">Impact</span></h2>
                            <p>Thousands of learners have upskilled and landed careers through our expert-driven programs.</p>
                        </motion.div>
                        <div className="stats-grid">
                            {[
                                { number: "13", suffix: "+", label1: "Expert-Led", label2: "Courses", icon: faBookOpen, color: "#3b82f6", iconColor: "#60a5fa" },
                                { number: "90", suffix: "%", label1: "Career", label2: "Placement", icon: faMedal, color: "#1ed7b9", iconColor: "#2dd4bf" },
                                { number: "5", suffix: "K+", label1: "Successful", label2: "Students", icon: faUsers, color: "#a855f7", iconColor: "#f59e0b" },
                                { number: "150", suffix: "+", label1: "Hiring", label2: "Partners", icon: faBriefcase, color: "#f59e0b", iconColor: "#fbbf24" }
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
                            <span className="crm-section-badge learn-section-badge">Tailored Programs</span>
                            <h2>Who Learns With <span className="learn-span-h2">Us?</span></h2>
                            <p>Our learning ecosystem empowers students, professionals and enterprises to grow every day.</p>
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
                                        <div className="ucm-cell">Students</div>
                                        <div className="ucm-cell">Campus</div>
                                        <div className="ucm-cell">Upskill</div>
                                        <div className="ucm-cell">Placement Ready</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Professionals</div>
                                        <div className="ucm-cell">Careers</div>
                                        <div className="ucm-cell">Certifications</div>
                                        <div className="ucm-cell">Unlock Promotions</div>
                                    </div>
                                    <div className="ucm-row">
                                        <div className="ucm-cell">Switchers</div>
                                        <div className="ucm-cell">New Fields</div>
                                        <div className="ucm-cell">Bootcamps</div>
                                        <div className="ucm-cell">Mentorship</div>
                                    </div>
                                </div>

                                {/* Bottom Lightning Box */}
                                <div className="ucm-bottom-box" style={{ background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                                    <div className="ucm-bb-icon">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Corporate Teams</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#ef4444' }}>Custom training routes</div>
                                        <div className="ucm-bb-desc">Stay ahead of industry shifts</div>
                                    </div>
                                    <div className="ucm-bb-col">
                                        <div className="ucm-bb-title">Freelancers</div>
                                        <div className="ucm-bb-highlight" style={{ color: '#ef4444' }}>Build niche portfolios</div>
                                        <div className="ucm-bb-desc">Scale your solo business</div>
                                    </div>
                                </div>
                            </div>

                            <div className="ucm-right">
                                <div className="ucm-blue-card" style={{ background: 'linear-gradient(135deg, #ef4444, #b91c1c)' }}>
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

                <section className="crm-insights-section learn-insights-section">
                    <div className="crm-insights-inner">
                        <motion.div
                            className="crm-insights-header"
                            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <span className="crm-section-badge-dark learn-badge-dark"><FontAwesomeIcon icon={faLightbulb} /> Learning Intelligence</span>
                            <h2>Learn Smarter,<br /><span className="learn-gradient-span">Grow Faster</span></h2>
                            <p>Personalised learning paths, AI-driven insights and placement support that keep you ahead of the curve.</p>
                        </motion.div>
                        <div className="crm-insights-carousel-wrapper">
                            <div className="crm-insights-grid">
                                {[
                                    {
                                        title: "AI Learning Recommendations",
                                        desc: "The platform learns your pace and style to recommend the most relevant content and projects.",
                                        imgBg: "rgba(239,68,68,0.10)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="learn-card-svg">
                                                {/* Book stack */}
                                                <rect x="30" y="90" width="80" height="12" rx="3" fill="rgba(239,68,68,0.6)" stroke="#ef4444" strokeWidth="1" />
                                                <rect x="34" y="75" width="72" height="12" rx="3" fill="rgba(239,68,68,0.45)" stroke="#ef4444" strokeWidth="1" />
                                                <rect x="38" y="60" width="64" height="12" rx="3" fill="rgba(239,68,68,0.3)" stroke="#fca5a5" strokeWidth="1" />
                                                {/* AI brain glowing on right */}
                                                <circle cx="170" cy="70" r="32" fill="rgba(239,68,68,0.12)" stroke="#ef4444" strokeWidth="1.5" className="learn-brain-ring" />
                                                <circle cx="170" cy="70" r="20" fill="rgba(239,68,68,0.25)" stroke="#fca5a5" strokeWidth="1" className="learn-brain-inner" />
                                                {/* Brain squiggles */}
                                                <path d="M158 65 Q163 58 170 65 Q177 58 182 65" stroke="#fca5a5" strokeWidth="1.5" fill="none" />
                                                <path d="M157 72 Q162 80 170 72 Q178 80 183 72" stroke="#fca5a5" strokeWidth="1.5" fill="none" />
                                                {/* Connecting sparks from book to brain */}
                                                {[[115, 90], [130, 80], [145, 72]].map(([cx, cy], k) => (
                                                    <circle key={k} cx={cx} cy={cy} r="3" fill="#ef4444" className={`learn-spark learn-spark-${k}`} />
                                                ))}
                                                <path d="M110 90 Q130 72 148 70" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" strokeDasharray="4 3" fill="none" className="learn-connect-dash" />
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(252,165,165,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Personalised Learning Path</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Career Counselling Sessions",
                                        desc: "1:1 sessions with career coaches who map your strengths to the best opportunities.",
                                        imgBg: "rgba(248,113,113,0.10)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="learn-card-svg">
                                                {/* Student */}
                                                <circle cx="65" cy="52" r="18" fill="rgba(239,68,68,0.2)" stroke="#ef4444" strokeWidth="1.5" />
                                                <circle cx="65" cy="49" r="7" fill="#fca5a5" opacity="0.6" />
                                                <path d="M47 70 Q65 82 83 70" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1" />
                                                {/* Mentor */}
                                                <circle cx="175" cy="52" r="18" fill="rgba(220,38,38,0.2)" stroke="#dc2626" strokeWidth="1.5" />
                                                <circle cx="175" cy="49" r="7" fill="#fca5a5" opacity="0.6" />
                                                <path d="M157 70 Q175 82 193 70" fill="rgba(220,38,38,0.15)" stroke="#dc2626" strokeWidth="1" />
                                                {/* Chat bubbles exchanged */}
                                                <path d="M88 40 Q110 28 132 40 Q132 54 114 54 L106 62 L108 54 Q88 54 88 40 Z" fill="rgba(239,68,68,0.2)" stroke="#fca5a5" strokeWidth="1" className="learn-bubble-l" />
                                                <path d="M152 40 Q152 54 136 54 L128 62 L130 54 L130 54 Q120 54 120 40 Q130 28 152 40 Z" fill="rgba(220,38,38,0.2)" stroke="#fca5a5" strokeWidth="1" className="learn-bubble-r" />
                                                {/* Stars/rating */}
                                                {[100, 115, 130].map((x, k) => (
                                                    <text key={k} x={x} y="100" textAnchor="middle" fill="#ef4444" fontSize="12" className={`learn-star learn-star-${k}`}>★</text>
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(252,165,165,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Expert-Led 1:1 Mentorship</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Progress & Skill Analytics",
                                        desc: "Track course completion, quiz scores and skill growth in a real-time dashboard.",
                                        imgBg: "rgba(239,68,68,0.15)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="learn-card-svg">
                                                {/* Radial skill rings */}
                                                {[45, 36, 27, 18].map((r, k) => (
                                                    <circle key={k} cx="75" cy="80" r={r} fill="none" stroke={`rgba(239,68,68,${0.15 + k * 0.15})`} strokeWidth="8" strokeLinecap="round"
                                                        strokeDasharray={`${[0.9, 0.7, 0.55, 0.85][k] * 2 * Math.PI * r} ${2 * Math.PI * r}`} strokeDashoffset={-10}
                                                        className={`learn-ring learn-ring-${k}`} />
                                                ))}
                                                <text x="75" y="84" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="bold">87%</text>
                                                {/* Skill bars on right */}
                                                {[{ label: "React", pct: 90 }, { label: "Python", pct: 70 }, { label: "Design", pct: 55 }, { label: "SQL", pct: 80 }].map((s, k) => (
                                                    <g key={k}>
                                                        <text x="135" y={30 + k * 26} fill="rgba(252,165,165,0.7)" fontSize="7">{s.label}</text>
                                                        <rect x="135" y={35 + k * 26} width="80" height="8" rx="4" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.2)" strokeWidth="0.5" />
                                                        <rect x="135" y={35 + k * 26} width={s.pct * 0.8} height="8" rx="4" fill="rgba(239,68,68,0.6)" className={`learn-skillbar learn-skillbar-${k}`} />
                                                    </g>
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(252,165,165,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Live Skill Growth Dashboard</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Secure & Verified Profiles",
                                        desc: "Blockchain-verified certificates and encrypted profiles that employers trust completely.",
                                        imgBg: "rgba(185,28,28,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="learn-card-svg">
                                                {/* Certificate scroll */}
                                                <rect x="50" y="30" width="100" height="80" rx="6" fill="rgba(239,68,68,0.15)" stroke="#ef4444" strokeWidth="1.5" />
                                                <line x1="50" y1="50" x2="150" y2="50" stroke="rgba(252,165,165,0.3)" strokeWidth="1" />
                                                <text x="100" y="45" textAnchor="middle" fill="rgba(252,165,165,0.6)" fontSize="7" fontWeight="600">CERTIFICATE</text>
                                                {[65, 78, 91].map((y, k) => (
                                                    <rect key={k} x="62" y={y} width={[60, 45, 52][k]} height="5" rx="2" fill="rgba(239,68,68,0.35)" className={`learn-cert-line learn-cert-line-${k}`} />
                                                ))}
                                                {/* Seal */}
                                                <circle cx="120" cy="100" r="14" fill="rgba(220,38,38,0.4)" stroke="#ef4444" strokeWidth="1.5" className="learn-seal-spin" />
                                                <text x="120" y="104" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">✓</text>
                                                {/* Block chain links */}
                                                {[[168, 40], [185, 55], [168, 70], [185, 85]].map(([cx, cy], k) => (
                                                    <g key={k}>
                                                        <rect x={cx - 8} y={cy - 6} width="16" height="12" rx="3" fill="rgba(239,68,68,0.25)" stroke="#fca5a5" strokeWidth="1" className={`learn-block learn-block-${k}`} />
                                                        {k < 3 && <line x1={cx + (k % 2 === 0 ? 8 : -8)} y1={cy} x2={(k % 2 === 0 ? 185 : 168) - 8} y2={[55, 70, 85][k]} stroke="rgba(252,165,165,0.4)" strokeWidth="1" />}
                                                    </g>
                                                ))}
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(252,165,165,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Blockchain-Verified Credentials</text>
                                            </svg>
                                        )
                                    },
                                    {
                                        title: "Live Placement Pipeline",
                                        desc: "Track your job applications, interview stages and offer letters in one unified dashboard.",
                                        imgBg: "rgba(220,38,38,0.12)",
                                        visual: (
                                            <svg viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="learn-card-svg">
                                                {/* Pipeline stages as funnel */}
                                                {[
                                                    { w: 180, y: 22, label: "Applied — 24 roles", c: "rgba(239,68,68,0.35)" },
                                                    { w: 140, y: 48, label: "Shortlisted — 12", c: "rgba(239,68,68,0.5)" },
                                                    { w: 100, y: 74, label: "Interviews — 6", c: "rgba(220,38,38,0.65)" },
                                                    { w: 60, y: 100, label: "Offers — 2 ✓", c: "rgba(185,28,28,0.85)" },
                                                ].map((s, k) => (
                                                    <g key={k}>
                                                        <rect x={(220 - s.w) / 2} y={s.y} width={s.w} height="18" rx="4" fill={s.c} className={`learn-funnel learn-funnel-${k}`} />
                                                        <text x="120" y={s.y + 13} textAnchor="middle" fill="white" fontSize="7.5" fontWeight="500">{s.label}</text>
                                                    </g>
                                                ))}
                                                {/* Trophy at bottom */}
                                                <text x="120" y="138" textAnchor="middle" fill="#ef4444" fontSize="20" className="learn-trophy">🏆</text>
                                                <text x="120" y="152" textAnchor="middle" fill="rgba(252,165,165,0.7)" fontSize="9" fontFamily="Inter,sans-serif">Your Placement Funnel</text>
                                            </svg>
                                        )
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        className={`crm-insight-card learn-arc-card insight-card-${i} ${activeInsight === i ? 'active-card learn-active-card' : ''}`}
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
                                        <div className="cic-image-wrapper learn-svg-wrapper" style={{ background: item.imgBg }}>
                                            {item.visual}
                                        </div>
                                        <h3>{item.title}</h3>
                                        <p>{item.desc}</p>
                                        <div className="cic-line learn-cic-line" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <motion.div className="crm-cta-strip learn-cta-strip" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                            <div className="cta-strip-text"><h3>Ready to Transform Your Career?</h3><p>Enrol for free — start your first course today with zero commitment.</p></div>
                            <div className="cta-strip-actions">
                                <button className="learn-btn-cta-primary">Start Free Trial</button>
                                <button className="crm-btn-outline learn-btn-outline">Schedule a Demo</button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};
export default LearningPage;
