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
                        <div className="features-deco-icon">
                            <FontAwesomeIcon icon={faPencil} style={{ fontSize: '3rem', color: '#000000ff', transform: 'rotate(15deg)' }} />
                        </div>
                        <h2 className="features-main-title">Practice whatever way<br />is better for you</h2>
                        <div className="features-tab-nav">
                            {Object.keys(tabs).map((tab) => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                    onClick={() => setActiveTab(tab)}
                                    style={{
                                        backgroundColor: activeTab === tab ? '#ffffff' : tabs[tab].color,
                                        /* Align text and fill gap for first tab when unselected */
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
                                </button>
                            ))}
                        </div>

                        <div className="active-tab-content-card" style={{ borderTopLeftRadius: activeTab === 'clubs' ? '0' : '30px', zIndex: 1 }}>
                            <div className="tab-text-side blue-style-list">
                                <ul className="tab-details-list">
                                    {tabs[activeTab].details.map((detail, i) => (
                                        <li key={i}>
                                            <span className="list-bullet">•</span>
                                            <span className="list-text">{detail}</span>
                                        </li>
                                    ))}
                                </ul>
                                <button className="tab-cta-btn blue-card-btn">
                                    Learn more and join
                                </button>
                            </div>
                            <div className="tab-visual-side blue-style-visual">
                                <img src={tabs[activeTab].img} alt={activeTab} className="tab-illustration" />
                                <div className="floating-bubble blue-card-bubble">...</div>
                            </div>
                        </div>

                        {/* Additional Content to Fill Space */}
                        <div className="practice-benefits-section">
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <img src={mentorIcon} alt="Expert Mentors" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Expert Mentors</h4>
                                    <p>Learn from industry professionals with years of experience.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <img src={projectIcon} alt="Real Projects" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Real Projects</h4>
                                    <p>Build a portfolio with actual client work and case studies.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">
                                    <img src={communityIcon} alt="Community" />
                                </div>
                                <div className="benefit-text">
                                    <h4>Community</h4>
                                    <p>Join a global network of ambitious tech learners.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Sidebar Column */}
                <div className="faq-sidebar-column">
                    <div className="faq-header">
                        <span className="faq-tag">FAQ</span>
                        <div className="faq-decoration">
                            <i className="fas fa-question"></i>
                        </div>
                    </div>

                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${openFaq === index ? 'open' : ''}`}
                                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                            >
                                <div className="faq-question">
                                    <span>{faq.q}</span>
                                    <span className="faq-toggle">{openFaq === index ? '−' : '+'}</span>
                                </div>
                                {openFaq === index && (
                                    <div className="faq-answer">
                                        <p>{faq.a}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Personal Advice Box */}
                    <div className="personal-advice-box">
                        <h4>Any question left or need personal advice?</h4>
                        <p>Sign up for a free consultation and we will guide you to the right choice.</p>
                        <button className="advice-cta-btn">
                            Book a Free Consultation
                        </button>
                        <div className="heart-float">💚</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LearningFeatures;
