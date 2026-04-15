import React, { useState } from 'react';
import './LearningFeatures.css';
import clubsImg from '../../../assets/images/clubs_illustration.png';
import sessionsImg from '../../../assets/images/sessions_illustration.png';
import examImg from '../../../assets/images/exam_illustration.png';
import mentorIcon from '../../../assets/iicons/career coching.png';
import projectIcon from '../../../assets/iicons/project based learning.png';
import communityIcon from '../../../assets/iicons/community assces.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const LearningFeatures = () => {
    const [activeTab, setActiveTab] = useState('clubs');
    const [openFaq, setOpenFaq] = useState(0);

    const tabs = {
        clubs: {
            title: "Conversational Clubs",
            content: "For those who look for consistent practice and gradual speaking improvement.",
            details: [
                "Discussions held once a week, each session for 60 minutes",
                "Studying materials provided in advance to enrich your vocabulary",
                "Small groups of 5-8 people for maximum participation"
            ],
            color: "#a78bfa",
            img: clubsImg
        },
        sessions: {
            title: "Individual Sessions",
            content: "Personalized 1-on-1 mentorship sessions tailored to your specific tech goals.",
            details: [
                "Custom learning path based on your current skill level",
                "Flexible scheduling to fit your professional life",
                "Direct code review and technical guidance from experts"
            ],
            color: "#818cf8",
            img: sessionsImg
        },
        exams: {
            title: "Exam Preparation",
            content: "Structured bootcamps to prepare you for global tech certifications.",
            details: [
                "Mock exams and intensive problem-solving sessions",
                "Special focus on time management and exam strategy",
                "Certificate of completion from Engloray Learning"
            ],
            color: "#bef264",
            img: examImg
        }
    };

    const faqs = [
        {
            q: "How do I choose among your offers?",
            a: "You can sign up for a free consultation where we determine which option suits you best and matches your learning goals. If you choose 2 or more products, you can get a 15% discount!"
        },
        {
            q: "Are the sessions recorded?",
            a: "Yes, all individual and club sessions are recorded and made available in your student dashboard for lifetime access."
        },
        {
            q: "Is your school for all levels?",
            a: "Absolutely! We have tracks for absolute beginners, intermediate learners, and advanced professionals looking to specialize."
        },
        {
            q: "Do you provide internship support?",
            a: "Yes, our best performers get exclusive opportunities to intern with Engloray Tech Group on real client projects."
        }
    ];

    return (
        <section className="learning-features-section">
    <div className="learning-features-grid-bg"></div>

    <div className="learning-features-container">
        <div className="main-content-column">
            {/* Practice Header */}
            <div className="features-header-box">
                <motion.div 
                    className="features-deco-icon"
                    initial={{ opacity: 0, rotate: -15 }}
                    whileInView={{ opacity: 1, rotate: 15 }}
                    transition={{ duration: 0.8 }}
                >
                    <FontAwesomeIcon icon={faPencil} style={{ fontSize: '3rem', color: '#000000ff', transform: 'rotate(15deg)' }} />
                </motion.div>
                
                <motion.h2 
                    className="features-main-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                >
                    Practice whatever way<br />is better for you
                </motion.h2>

                <div className="features-tab-nav">
                    {Object.keys(tabs).map((tab, idx) => (
                        <motion.button
                            key={tab}
                            className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab)}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            style={{
                                backgroundColor: activeTab === tab ? '#ffffff' : tabs[tab].color,
                                ...(tab === 'clubs' && activeTab !== 'clubs' ? {
                                    height: 'calc(100% + 30px)',
                                    marginBottom: '-30px',
                                    zIndex: 0,
                                    borderBottomLeftRadius: '0',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    paddingTop: '1.2rem'
                                } : {})
                            }}
                        >
                            {tabs[tab].title}
                        </motion.button>
                    ))}
                </div>

                <motion.div 
                    key={activeTab} // Key ensures animation triggers on tab change
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="active-tab-content-card" 
                    style={{ borderTopLeftRadius: activeTab === 'clubs' ? '0' : '30px', zIndex: 1 }}
                >
                    <div className="tab-text-side blue-style-list">
                        <ul className="tab-details-list">
                            {tabs[activeTab].details.map((detail, i) => (
                                <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <span className="list-bullet">•</span>
                                    <span className="list-text">{detail}</span>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="tab-cta-btn blue-card-btn"
                        >
                            Learn more and join
                        </motion.button>
                    </div>
                    <div className="tab-visual-side blue-style-visual">
                        <motion.img 
                            src={tabs[activeTab].img} 
                            alt={activeTab} 
                            className="tab-illustration" 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                        />
                        <div className="floating-bubble blue-card-bubble">...</div>
                    </div>
                </motion.div>

                {/* Staggered Benefit Items */}
                <div className="practice-benefits-section">
                    {[
                        { icon: mentorIcon, title: "Expert Mentors", desc: "Learn from industry professionals." },
                        { icon: projectIcon, title: "Real Projects", desc: "Build a portfolio with client work." },
                        { icon: communityIcon, title: "Community", desc: "Join a global network." }
                    ].map((benefit, idx) => (
                        <motion.div 
                            key={idx}
                            className="benefit-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                        >
                            <div className="benefit-icon"><img src={benefit.icon} alt={benefit.title} /></div>
                            <div className="benefit-text">
                                <h4>{benefit.title}</h4>
                                <p>{benefit.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        {/* FAQ Sidebar */}
        <div className="faq-sidebar-column">
            <motion.div 
                className="faq-header"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <span className="faq-tag">FAQ</span>
            </motion.div>

            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-item ${openFaq === index ? 'open' : ''}`} onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                        <div className="faq-question">
                            <span>{faq.q}</span>
                            <motion.span animate={{ rotate: openFaq === index ? 180 : 0 }}>
                                {openFaq === index ? '−' : '+'}
                            </motion.span>
                        </div>
                        <AnimatePresence>
                            {openFaq === index && (
                                <motion.div 
                                    className="faq-answer"
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p>{faq.a}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            {/* Advice Box Pop */}
            <motion.div 
                className="personal-advice-box"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
            >
                <h4>Any question left or need personal advice?</h4>
                <p>Sign up for a free consultation.</p>
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="advice-cta-btn"
                >
                    Book a Free Consultation
                </motion.button>
                <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="heart-float"
                >
                    💚
                </motion.div>
            </motion.div>
        </div>
    </div>
</section>
    );
};

export default LearningFeatures;
