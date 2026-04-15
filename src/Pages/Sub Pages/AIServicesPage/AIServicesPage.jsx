import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './AIServicesPage.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

import iphone14Img from '../../../assets/Iphone14.png';

import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import maleAvatar from '../../../assets/male_avatar.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import femaleAvatar from '../../../assets/female_avatar.png';

const AIServicesPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1, num: '01', title: 'AI Chatbot Solution', icon: '✦',
            short: 'Intelligent chatbots for 24/7 engagement',
            features: [
                'Natural language processing (NLP)',
                'Omnichannel platform deployment',
                'Seamless human agent handoff',
                'Context-aware memory retention',
                'Sentiment analysis & analytics',
                'Secure internal knowledge retrieval'
            ],
            stats: { val1: '147+', lab1: 'Deployments', val2: '5 Weeks', lab2: 'Avg Setup', val3: '92%', lab3: 'Accuracy' },
            description: 'Our AI Chatbot Solutions deliver intelligent, context-aware conversational experiences across websites, apps, and messaging platforms. We build bots that understand natural language, handle complex queries, learn from interactions, and seamlessly escalate to human agents — boosting customer satisfaction while cutting support costs.',
            image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80'
        },
        {
            id: 2, num: '02', title: 'AI Automation', icon: '◈',
            short: 'Automate workflows with intelligent AI',
            features: [
                'Intelligent document processing',
                'Cognitive robotic process automation',
                'Automated visual quality control',
                'Dynamic scheduling & dispatching',
                'Predictive maintenance alerts',
                'Cross-platform data integration'
            ],
            stats: { val1: '77+', lab1: 'Systems Built', val2: '3 Weeks', lab2: 'Avg Speed', val3: '93%', lab3: 'Efficiency Gain' },
            description: 'We design and deploy AI Automation Systems that eliminate repetitive manual tasks across your entire operation. From document processing and data extraction to intelligent decision routing and predictive scheduling — our systems integrate seamlessly with your existing tools to deliver measurable productivity gains from day one.',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80'
        },
        {
            id: 3, num: '03', title: ' AI Development', icon: '✦',
            short: 'Bespoke AI models for your unique needs',
            features: [
                'Proprietary model architecture',
                'Fine-tuning open-source LLMs',
                'Custom computer vision solutions',
                'Reinforcement learning environments',
                'Domain-specific knowledge graphs',
                'End-to-end MLOps pipelines'
            ],
            stats: { val1: '104+', lab1: 'Models Built', val2: '2 Weeks', lab2: 'Sprint Cycle', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'Every business has unique challenges that off-the-shelf AI cannot solve. We build custom AI models trained on your data, tuned to your domain, and integrated into your workflows. From proprietary recommendation engines to specialized NLP pipelines — we deliver AI built precisely for your competitive advantage.',
            image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80'
        },
        {
            id: 4, num: '04', title: 'AI-Powered Business ', icon: '◈',
            short: 'Smart tools that accelerate decision-making',
            features: [
                'Intelligent business dashboards',
                'Predictive sales forecasting',
                'Automated KPI reporting suites',
                'Semantic enterprise search',
                'Competitor landscape analysis',
                'AI-assisted code & content generation'
            ],
            stats: { val1: '66+', lab1: 'Tools Shipped', val2: '6 Weeks', lab2: 'Avg Build', val3: '96%', lab3: 'Adoption Rate' },
            description: 'We build AI-powered business tools that augment your team\'s intelligence — from smart dashboards and predictive analytics platforms to automated reporting systems and intelligent search engines. Our tools give your workforce real-time insights and actionable recommendations that drive faster, smarter decisions.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80'
        },
        {
            id: 5, num: '05', title: 'Machine Learning ', icon: '✦',
            short: 'Predictive models that learn and improve',
            features: [
                'Supervised & unsupervised learning',
                'Customer churn prediction models',
                'Fraud detection & risk scoring',
                'Demand forecasting algorithms',
                'Automated feature engineering',
                'Model explainability & drift monitoring'
            ],
            stats: { val1: '132+', lab1: 'Models Trained', val2: '6 Months', lab2: 'Avg Maturity', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'Our Machine Learning Solutions help you predict outcomes, detect patterns, and automate classification at scale. We handle everything from data preparation and feature engineering to model training, validation, and production deployment — giving you self-improving systems that get smarter with every data point.',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80'
        },
        {
            id: 6, num: '06', title: 'AI Strategy & Consulting', icon: '◈',
            short: 'Build your organization\'s AI roadmap',
            features: [
                'AI readiness & maturity assessments',
                'High-ROI use case identification',
                'Data infrastructure auditing',
                'Ethical AI & compliance guidelines',
                'Executive & team AI training',
                'Comprehensive vendor evaluation'
            ],
            stats: { val1: '89+', lab1: 'Clients Advised', val2: '4 Weeks', lab2: 'Avg Audit', val3: '4.8★', lab3: 'Rating' },
            description: 'Not sure where to start with AI? Our strategy consultants work closely with your leadership team to demystify AI, identify high-impact use cases, and build a pragmatic implementation roadmap. We help you avoid costly experiments and focus on AI initiatives that deliver real, measurable ROI.',
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80'
        }
    ];

    const pageData = {
        id: 3,
        title: 'AI SERVICES',
        description: 'Integrate artificial intelligence to automate and optimize your business processes.',
        shortDescription: 'Build Intelligent Systems That Think, Learn & Deliver Real Business Results',
        fullDescription: 'Build scalable, intelligent AI solutions tailored to your workflows, data, and competitive landscape.',
        features: ['AI Chatbots', 'Automation Systems', 'Machine Learning', 'AI Strategy'],
        duration: '2–6 weeks',
        projects: '500+ AI deployments',
        logo: '🤖'
    };

    const feedbacks = [
        {
            id: 1, name: 'Bruce Hardy', role: 'CEO, TechVentures',
            photo: cartoonMale1,
            text: 'The AI chatbot they built handles 80% of our customer queries automatically. Our support team now focuses on complex cases only. The accuracy and natural language understanding is outstanding.',
            stars: 5
        },
        {
            id: 2, name: 'Mark Smith', role: 'Operations Director',
            photo: cartoonMale2,
            text: 'The AI automation system eliminated 12 hours of manual data entry per day. Our error rate dropped to near zero and team productivity jumped 40% in the first month alone.',
            stars: 5
        },
        {
            id: 3, name: 'Sarah Jenkins', role: 'Head of Data Science',
            photo: cartoonFemale1,
            text: 'Their custom machine learning model increased our churn prediction accuracy from 61% to 94%. The ROI was clear within 60 days of deployment. Truly exceptional technical expertise.',
            stars: 5
        },
        {
            id: 4, name: 'Vera Duncan', role: 'Product Director',
            photo: cartoonFemale2,
            text: 'The AI strategy session completely transformed how we think about technology investment. Their roadmap helped us avoid expensive mistakes and focus on AI initiatives with real business impact.',
            stars: 5
        },
        {
            id: 5, name: 'David Chen', role: 'VP of Engineering',
            photo: cartoonMale3,
            text: 'The AI-powered business tools they built give our leadership team real-time predictive insights. Decision-making speed improved dramatically and we can now anticipate market shifts weeks in advance.',
            stars: 5
        },
        {
            id: 6, name: 'Emma Wilson', role: 'CTO, Retail Group',
            photo: cartoonFemale3,
            text: 'From NLP model training to production deployment, their team was exceptional at every stage. The recommendation engine they built increased our average order value by 28%.',
            stars: 5
        },
        {
            id: 7, name: 'James Miller', role: 'Startup Founder',
            photo: maleAvatar,
            text: 'We went from zero AI capabilities to a fully deployed custom ML pipeline in just eight weeks. The team handled everything — data engineering, model development, and cloud integration.',
            stars: 5
        },
        {
            id: 8, name: 'Linda Thompson', role: 'COO, HealthTech',
            photo: femaleAvatar,
            text: 'The AI document processing system they built handles thousands of medical records daily with 99.2% accuracy. It has transformed our compliance workflow and saved us enormous operational cost.',
            stars: 5
        }
    ];

    const extraImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
            title: 'AI Model Training',
            description: 'Building and training custom AI models on your proprietary data'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
            title: 'AI Infrastructure',
            description: 'Scalable cloud infrastructure for production AI deployment'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            title: 'AI Analytics Dashboard',
            description: 'Real-time monitoring and insights from deployed AI systems'
        }
    ];

    // WhatsApp navigation function
    const handleWhatsAppNavigation = () => {
        window.open('https://wa.me/916381759909', '_blank');
    };

    useEffect(() => {
        if (feedbackTrackRef.current) {
            feedbackTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    useEffect(() => {
        if (isExpanded) {
            const timeouts = [];
            extraImages.forEach((img, index) => {
                const timeout = setTimeout(() => {
                    setVisibleImages(prev => [...prev, img.id]);
                }, index * 300);
                timeouts.push(timeout);
            });
            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
            setVisibleImages([]);
        }
    }, [isExpanded]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="ai-page-page">
            <TopNavBar />
            <Navbar />

            {/* ── HERO SECTION ── */}
            <section className="ai-page-hero-section-new">
                <div className="ai-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="ai-page-hero-left-new">
                        <h4 className="ai-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="ai-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="ai-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray AI Services iPhone Mockup"
                                className="ai-page-hero-iphone14-img"
                                style={{ maxWidth: '55%', height: '20%' }}
                            />
                        </h1>

                        <div className="ai-page-hero-buttons-new">
                            <button onClick={handleWhatsAppNavigation} className="ai-page-btn-get-started-new">GET STARTED</button>
                            <button onClick={handleWhatsAppNavigation} className="ai-page-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="ai-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="ai-page-hero-stats-new">
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">15<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">AI Partners</span>
                            </div>
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">300<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">Clients</span>
                            </div>
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">4.9<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        <div className="ai-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">40<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">AI Awards</span>
                            </div>
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">500<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">AI Projects</span>
                            </div>
                            <div className="ai-page-stat-item-new">
                                <div className="ai-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36">
                                        <path className="ai-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                        <path className="ai-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                                    </svg>
                                    <span className="ai-page-stat-number-new">5<span className="ai-page-stat-dash">+</span></span>
                                </div>
                                <span className="ai-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="ai-page-hero-right-new">
                        <div className="ai-page-right-top-new">
                            <div className="ai-page-title-play-row">
                                <h2 className="ai-page-case-title-new">About Our<br />AI Company</h2>
                                <div className="ai-page-play-circle-new">
                                    <span className="ai-page-play-text-new">Play</span>
                                    <div className="ai-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="ai-page-about-company-desc-new">
                                We are a specialized AI engineering company delivering intelligent solutions that transform how businesses operate. From custom machine learning models to production-grade AI systems, our team combines deep research expertise with real-world deployment experience to deliver AI that works reliably at scale.
                            </p>

                            <div className="ai-page-avatars-row-new">
                                <div className="ai-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="12 8 12 12 14 14"></polyline>
                                    </svg>
                                </div>
                                <div className="ai-page-avatar-group-new">
                                    <img src="https://t3.ftcdn.net/jpg/07/28/48/98/360_F_728489827_qtQHjlMEeD53QhTdUEtdOvNPQw21pYjh.jpg" alt="avatar" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ53aAyRQ8l1h3GkPHeexbL9wyuTlrf1laQ&s" alt="avatar" />
                                    <img src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" alt="avatar" />
                                </div>
                                <div className="ai-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="ai-page-performance-card-new">
                            <div className="ai-page-perf-header-new">
                                <div className="ai-page-perf-item-new">
                                    <span className="ai-page-perf-label-new">MODEL ACCURACY</span>
                                    <span className="ai-page-perf-value-new">94%</span>
                                </div>
                                <div className="ai-page-perf-item-new text-right">
                                    <span className="ai-page-perf-label-new">AUTOMATION GAIN</span>
                                    <span className="ai-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="ai-page-perf-chart-new">
                                <div className="ai-page-chart-col-new"><div className="ai-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="ai-page-chart-col-new"><div className="ai-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="ai-page-chart-col-new"><div className="ai-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SERVICES DETAIL SECTION ── */}
            <section className="ai-page-about-section-new">
                <div className="ai-page-about-top-notch-content">
                    <span className="ai-page-about-left-tag">OUR AI SERVICES</span>
                </div>
                <div className="ai-page-about-inner-new">

                    {/* Left: Service List */}
                    <div className="ai-page-about-left-new">
                        <div className="ai-page-about-left-header">
                            <h2 className="ai-page-about-left-title">Why Choose Our<br />AI Solutions?</h2>
                            <p className="ai-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="ai-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="ai-page-service-item-left-about">
                                        <span className="ai-page-service-num-new">{service.num}</span>
                                        <div className="ai-page-service-text-group">
                                            <span className="ai-page-service-name-about">{service.title}</span>
                                            <span className="ai-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="ai-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="ai-page-about-center-new">
                        <div className="ai-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="ai-page-dynamic-img-fade"
                            />
                            <div className="ai-page-about-badge-new">
                                <span className="ai-page-badge-num">50+</span>
                                <span className="ai-page-badge-label">AI<br />Engineers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="ai-page-about-right-new">
                        <div className="ai-page-about-detail-panel" key={selectedService}>
                            <div className="ai-page-detail-icon-wrap">
                                <span className="ai-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="ai-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="ai-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="ai-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="ai-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="ai-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="ai-page-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val1 || '100+'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab1 || 'Projects'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2 || '3 Weeks'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2 || 'Timeline'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3 || '4.9★'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3 || 'Rating'}</span>
                                </div>
                            </div>
                            <button onClick={handleWhatsAppNavigation} className="ai-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ELEVATE SECTION ── */}
            <section className="ai-page-elevate-section">
                <div className="ai-page-el-container">
                    <div className="ai-page-el-left">
                        <img
                            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
                            alt="AI Team Lead"
                            className="ai-page-el-img-large"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                            alt="AI Engineer"
                            className="ai-page-el-img-small-top"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                            alt="AI Researcher"
                            className="ai-page-el-img-small-bottom"
                        />

                        <div className="ai-page-el-badge-volunteer">
                            <span className="ai-page-el-vol-title">Join Our AI Network</span>
                            <div className="ai-page-el-vol-avatars">
                                <img src={cartoonMale1} alt="user" />
                                <img src={cartoonMale2} alt="user" />
                                <img src={cartoonMale3} alt="user" />
                                <div className="ai-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>

                    <div className="ai-page-el-right">
                        <div className="ai-page-el-preheading">About Us</div>
                        <h2 className="ai-page-el-title">Elevate your business<br />with real AI intelligence</h2>
                        <p className="ai-page-el-desc">
                            At the core of every AI-powered business is the right strategy, the right models, and the right infrastructure. We build production-grade AI systems that don't just prototype — they perform. From intelligent automation to predictive analytics, our team ensures every AI solution delivers measurable, lasting business value.
                        </p>

                        <div className="ai-page-el-stats">
                            <div className="ai-page-el-stat-box">
                                <div className="ai-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="ai-page-el-stat-content">
                                    <span className="ai-page-el-stat-num">500+</span>
                                    <span className="ai-page-el-stat-label">AI Systems Deployed</span>
                                </div>
                            </div>

                            <div className="ai-page-el-stat-box">
                                <div className="ai-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" />
                                        <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
                                        <path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" />
                                    </svg>
                                </div>
                                <div className="ai-page-el-stat-content">
                                    <span className="ai-page-el-stat-num">5+ Years</span>
                                    <span className="ai-page-el-stat-label">of AI Engineering</span>
                                </div>
                            </div>
                        </div>

                        <p className="ai-page-el-desc">
                            Whether you need a conversational AI for customer service, a predictive model for demand forecasting, or a full AI transformation strategy — we have the expertise and track record to deliver results that exceed expectations.
                        </p>

                        <button onClick={handleWhatsAppNavigation} className="ai-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* ── PRODUCTIVITY / PROCESS SECTION ── */}
            <section className="ai-page-productivity-section">
                <div className="ai-page-prod-container">
                    <div className="ai-page-prod-left">
                        <h2 className="ai-page-prod-title">Supercharge your business with real AI intelligence</h2>
                        <p className="ai-page-prod-desc">
                            From intelligent chatbots and automation systems to custom ML models and AI strategy — we deliver end-to-end AI solutions that save time, reduce cost, and unlock new revenue opportunities.
                        </p>
                        <div className="ai-page-prod-buttons">
                            <button onClick={handleWhatsAppNavigation} className="ai-page-btn-prod-primary">Get started</button>
                            <button onClick={handleWhatsAppNavigation} className="ai-page-btn-prod-secondary">Talk to our AI team</button>
                        </div>
                        <div className="ai-page-prod-avatars-box">
                            <div className="ai-page-prod-avatars">
                                <img src={cartoonFemale1} alt="user" />
                                <img src={cartoonFemale2} alt="user" />
                                <img src={cartoonFemale3} alt="user" />
                            </div>
                            <p className="ai-page-prod-avatar-text">
                                Trusted by 300+ businesses globally — we help you<br />
                                build AI systems that actually deliver ROI!
                            </p>
                        </div>
                    </div>

                    <div className="ai-page-prod-right">
                        <div className="ai-page-prod-timeline">
                            <div className="ai-page-timeline-item">
                                <div className="ai-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                    </svg>
                                </div>
                                <div className="ai-page-timeline-content">
                                    <h3>DISCOVER</h3>
                                    <p>We assess your data, infrastructure, and business goals to identify the highest-impact AI opportunities.</p>
                                </div>
                            </div>
                            <div className="ai-page-timeline-item">
                                <div className="ai-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                                        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                                        <path d="M2 2l7.5 1.5"></path>
                                        <path d="M7 11l5-5"></path>
                                    </svg>
                                </div>
                                <div className="ai-page-timeline-content">
                                    <h3>BUILD</h3>
                                    <p>We design, train, and validate AI models and systems with rigorous testing before production deployment.</p>
                                </div>
                            </div>
                            <div className="ai-page-timeline-item">
                                <div className="ai-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                <div className="ai-page-timeline-content">
                                    <h3>SCALE</h3>
                                    <p>We monitor, optimize, and continuously improve your AI systems as your data and business evolve over time.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── MISSION & SERVICES GRID ── */}
            <section className="ai-page-mission-section">
                <div className="ai-page-mission-container">
                    <div className="ai-page-mission-header">
                        <h2 className="ai-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="ai-page-mission-highlight">AI Services</span> Smarter Through Artificial Intelligence
                        </h2>
                    </div>

                    <div className="ai-page-services-grid">
                        {/* Card 1 */}
                        <div className="ai-page-service-card bi-card-variant-1">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">AI<br />Chatbots</h3>
                                    <p className="ai-page-service-card-subtitle">24/7 intelligent support</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">Context-aware conversational AI that handles complex queries, learns from interactions, and integrates with your existing support stack.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="ai-page-service-card bi-card-variant-2">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">AI<br />Automation</h3>
                                    <p className="ai-page-service-card-subtitle">Eliminate manual work</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">Intelligent workflow automation that processes documents, routes decisions, and eliminates repetitive tasks across your entire operation.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M2 12h2M20 12h2M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 2v2M12 20v2" /></svg>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="ai-page-service-card bi-card-variant-7">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">Custom<br />AI Models</h3>
                                    <p className="ai-page-service-card-subtitle">Built for your data</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">Bespoke AI models trained on your proprietary data — from NLP pipelines and recommendation engines to computer vision systems.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="ai-page-service-card bi-card-variant-3">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">Machine<br />Learning</h3>
                                    <p className="ai-page-service-card-subtitle">Predictive intelligence</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">End-to-end ML pipelines from feature engineering and model training to production deployment and continuous retraining.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="ai-page-service-card bi-card-variant-4">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">AI<br />Business Tools</h3>
                                    <p className="ai-page-service-card-subtitle">Smart decision engines</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">AI-powered dashboards, predictive analytics platforms, and intelligent reporting tools that give your team real-time insights.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="ai-page-service-card bi-card-variant-5">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">Natural<br />Language AI</h3>
                                    <p className="ai-page-service-card-subtitle">Text & speech intelligence</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">Sentiment analysis, document classification, entity extraction, summarization, and multilingual NLP systems for any text use case.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="ai-page-service-card bi-card-variant-6">
                            <div className="ai-page-card-header">
                                <div className="ai-page-card-title-group">
                                    <h3 className="ai-page-service-card-title">AI Strategy<br />& Consulting</h3>
                                    <p className="ai-page-service-card-subtitle">Your AI transformation roadmap</p>
                                </div>
                                <div className="ai-page-card-badge">
                                    <div className="ai-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="ai-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="ai-page-service-card-desc">Expert AI audits, prioritized implementation roadmaps, and hands-on guidance to ensure your AI investments deliver measurable ROI.</p>
                            <div className="ai-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BUSINESS AGENCY SECTION ── */}
            <section className="ai-page-agency-section">
                <div className="ai-page-agency-container">
                    <div className="ai-page-agency-header">
                        <h2 className="ai-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="ai-page-lime-highlight">AI ENGINEERING AGENCY</span>
                        </h2>
                    </div>

                    <div className="ai-page-agency-grid">
                        <div className="ai-page-agency-left">
                            <div className="ai-page-agency-image-card">
                                <div className="ai-page-dot-pattern-circle"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&q=80"
                                    alt="Our AI Expert"
                                    className="ai-page-portrait-img"
                                />
                                <div className="ai-page-exp-badge">
                                    <span className="ai-page-exp-number">5+</span>
                                    <span className="ai-page-exp-text">Years of<br />AI Engineering</span>
                                </div>
                            </div>
                        </div>

                        <div className="ai-page-agency-right">
                            <div className="ai-page-agency-info-row">
                                <div className="ai-page-info-col">
                                    <p className="ai-page-info-subtitle">WHO WE ARE</p>
                                    <p className="ai-page-info-desc">
                                        We are a specialized team of AI researchers, engineers, and data scientists dedicated to building production-grade artificial intelligence systems. Our expertise spans machine learning, NLP, computer vision, and AI automation — with a relentless focus on delivering real, measurable business outcomes.
                                    </p>
                                </div>
                                <div className="ai-page-info-features">
                                    <p className="ai-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="ai-page-features-list">
                                        <li><span className="ai-page-check-icon">✓</span> Production-Ready AI Systems</li>
                                        <li><span className="ai-page-check-icon">✓</span> Certified ML Engineers</li>
                                        <li><span className="ai-page-check-icon">✓</span> 500+ AI Projects Delivered</li>
                                        <li><span className="ai-page-check-icon">✓</span> 5+ Years of AI Expertise</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="ai-page-agency-bottom-img-wrap">
                                <div className="ai-page-dot-pattern-square"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                                    alt="Our AI Team at Work"
                                    className="ai-page-landscape-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="ai-page-testimonial-section">
                <div className="ai-page-testimonial-container">
                    <p className="ai-page-testimonial-label">Testimonial</p>
                    <h2 className="ai-page-testimonial-heading">We Care About Our Clients'<br />AI Success Too</h2>

                    <div className="ai-page-testimonial-scroll-wrapper">
                        <div className="ai-page-testimonial-scroll-mask-left"></div>
                        <div className="ai-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="ai-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="ai-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="ai-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="ai-page-testimonial-name">{feedback.name}</h4>
                                    <p className="ai-page-testimonial-role">{feedback.role}</p>
                                    <p className="ai-page-testimonial-text">{feedback.text}</p>
                                    <div className="ai-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="ai-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="ai-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="ai-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>

            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default AIServicesPage;