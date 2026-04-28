import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './DataAnalytics.css';
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

// import businessDataImg from '../../../assets/images/Business Data Analytics Solution.png';
// import dashboardImg from '../../../assets/images/Data Dashboard & Visualization.jpg';
// import customerInsightsImg from '../../../assets/images/Customer Insights & Segmentation.jpg';
// import marketingAnalyticsImg from '../../../assets/images/Marketing Analytics Solution.jpg';

const DataAnalytics = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1, num: '01', title: 'Business Data Analytics Solution', icon: '✦', short: 'Transform raw data into actionable insights',
            features: [
                'Data mining & preparation workflows',
                'Executive KPI performance tracking',
                'Automated reporting pipelines',
                'Root cause & trend analysis',
                'Cloud data warehouse structuring',
                'Board-ready financial insight modeling'
            ],
            stats: { val1: '50+', lab1: 'Reports', val2: '3 Months', lab2: 'Avg Delivery', val3: '4.5★', lab3: 'Satisfaction' },
            description: 'Our Business Data Analytics solutions provide organizations with sophisticated tools and methodologies to transform raw information into actionable strategic insights. We deliver custom dashboards, KPI tracking, and automated reporting pipelines that empower leadership to make confident, data-driven decisions and achieve sustainable growth.',
            image: "https://i.pinimg.com/736x/f7/e0/56/f7e056e0c8181d44016dc971038774c4.jpg"
        },
        {
            id: 2, num: '02', title: 'Data Dashboard & Visualization', icon: '◈', short: 'Interactive charts and real-time dashboards',
            features: [
                'Interactive PowerBI/Tableau builds',
                'Real-time streaming data visuals',
                'Custom D3.js embedded charting',
                'Mobile-responsive dashboard views',
                'Self-service BI deployment',
                'Visual storytelling & UX design'
            ],
            stats: { val1: '150+', lab1: 'Dashboards', val2: '3 Weeks', lab2: 'Build Time', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Data Dashboard & Visualization solutions provide businesses with a centralized visual command center that transforms complex datasets into easy-to-understand charts and interactive graphs. Our experts design intuitive, real-time dashboards tailored to your industry so every stakeholder can interpret data instantly and act with confidence.',
            image: "https://i.pinimg.com/736x/d7/3d/44/d73d44700aaedf5fe202f687a2237bcb.jpg"
        },
        {
            id: 3, num: '03', title: 'Performance Analytics', icon: '✦', short: 'Track revenue drivers and team performance',
            features: [
                'Sales funnel conversion tracking',
                'Individual rep performance metrics',
                'Revenue forecasting & modeling',
                'CRM data cleansing & integration',
                'Geographic territory analysis',
                'Win/loss predictive indicators'
            ],
            stats: { val1: '87+', lab1: 'Projects', val2: '2 Months', lab2: 'Avg Speed', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Sales and performance analytics solutions provide businesses with a powerful framework to track key revenue drivers and individual team contributions. We integrate CRM platforms, financial systems, and custom data sources to deliver real-time performance reports, sales forecasting models, and automated alerting that keep your team on target.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        },
        {
            id: 4, num: '04', title: 'Customer Insights', icon: '◈', short: 'Deep audience profiling and segmentation',
            features: [
                '360-degree customer profiling',
                'Behavioral cohort segmentation',
                'Lifetime value (LTV) modeling',
                'Churn risk probability scoring',
                'Purchase pattern recognition',
                'Personalization engine data feeds'
            ],
            stats: { val1: '141+', lab1: 'Segments', val2: '6 Weeks', lab2: 'Avg Speed', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'Customer Insights & Segmentation solutions provide businesses with a deep understanding of their diverse audience by dividing large consumer bases into specific groups based on shared behaviors, demographics, and purchasing patterns. We gather data from multiple touchpoints to build rich customer profiles that power targeted campaigns and product improvements.',
            image: "https://i.pinimg.com/1200x/38/84/02/388402143e1958f05c341b8e3fc5e4a0.jpg"
        },
        {
            id: 5, num: '05', title: 'Marketing Analytics', icon: '✦', short: 'Measure and optimize campaign performance',
            features: [
                'Multi-touch attribution modeling',
                'Cross-channel ad spend ROI',
                'A/B testing statistical readouts',
                'Social media sentiment tracking',
                'Web traffic funnel optimization',
                'Automated agency reporting'
            ],
            stats: { val1: '73+', lab1: 'Campaigns', val2: '4 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'Marketing Analytics solutions provide businesses with a sophisticated framework to measure and optimize the effectiveness of promotional campaigns across digital and physical channels. We build attribution models, funnel analysis tools, and multi-channel ROI dashboards that give your marketing team the clarity to allocate budget intelligently and scale what works.',
            image: "https://i.pinimg.com/736x/9c/7b/63/9c7b639a76ff775b1d0b89aceb8cebc2.jpg"
        }
    ];

    const pageData = {
        title: 'DATA ANALYTICS',
        description: 'Leverage data insights to make informed business decisions and drive growth.',
        fullDescription: 'We deliver scalable, insight-driven analytics solutions tailored to your specific business requirements — from raw data pipelines to executive dashboards.',
    };

    const feedbacks = [
        {
            id: 1, name: 'Alex Thompson', role: 'CEO, TechVentures',
            photo: cartoonMale1,
            text: 'The analytics dashboards Engloray built gave us a clear view of our entire pipeline. Decision-making has never been faster or more confident. Truly transformative for our operations.',
            stars: 5
        },
        {
            id: 2, name: 'Ryan Miller', role: 'Marketing Director',
            photo: cartoonMale2,
            text: 'Our marketing ROI visibility went from zero to real-time. The attribution models they built finally showed us exactly which channels were driving revenue. Outstanding work.',
            stars: 5
        },
        {
            id: 3, name: 'Jessica Lee', role: 'Head of Sales',
            photo: cartoonFemale1,
            text: 'Sales forecasting used to be guesswork. Now our reps have live performance scorecards and our managers have accurate weekly forecasts. The team at Engloray delivered beyond expectations.',
            stars: 5
        },
        {
            id: 4, name: 'Sophie Wagner', role: 'Data Strategy Lead',
            photo: cartoonFemale2,
            text: 'Customer segmentation used to take our team weeks. With the automated pipeline Engloray set up, we now refresh segments daily. The business impact has been incredible.',
            stars: 5
        },
        {
            id: 5, name: 'Michael Zhang', role: 'Product Lead',
            photo: cartoonMale3,
            text: 'The product analytics infrastructure they built for us is rock-solid. We can trace every user interaction and tie it back to revenue outcomes. Highly recommended for any data-driven team.',
            stars: 5
        },
        {
            id: 6, name: 'Olivia Brown', role: 'Operations Director',
            photo: cartoonFemale3,
            text: 'We now have a single source of truth across every department. The custom reporting suite Engloray built saved us 20+ hours per week in manual reporting. Exceptional quality.',
            stars: 5
        },
        {
            id: 7, name: 'Christopher Scott', role: 'Startup Founder',
            photo: maleAvatar,
            text: 'As an early-stage startup, having clear metrics was critical. Engloray helped us instrument everything from day one and build investor-ready dashboards. Worth every penny.',
            stars: 5
        },
        {
            id: 8, name: 'Isabella Garcia', role: 'COO, Retail Group',
            photo: femaleAvatar,
            text: 'The inventory and demand forecasting models Engloray delivered cut our overstock costs by 30%. Their team genuinely understood our business before writing a single line of code.',
            stars: 5
        }
    ];

    const extraImages = [
        {
            id: 1,
            url: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Data Strategy Workshop',
            description: 'Collaborative sessions to define KPIs, data sources, and analytics roadmap'
        },
        {
            id: 2,
            url: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Dashboard Design Process',
            description: 'Wireframing and prototyping interactive dashboards for every stakeholder'
        },
        {
            id: 3,
            url: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Analytics Engineering',
            description: 'Building robust data pipelines and warehouses for reliable reporting'
        }
    ];

    const internshipCourses = [
        {
            id: 1, name: 'Data Analytics Fundamentals', esc: 'DA101', duration: '8 Weeks',
            description: 'Master core analytics concepts, from data wrangling and SQL to statistical thinking and visualization.',
            logo: '📊',
            features: ['SQL & Database Queries', 'Data Cleaning & Wrangling', 'Statistical Foundations', 'Visualization Principles', 'Excel & Google Sheets', 'Reporting Best Practices']
        },
        {
            id: 2, name: 'Business Intelligence & Dashboards', esc: 'BI201', duration: '12 Weeks',
            description: 'Design and build enterprise-grade BI dashboards using modern tools and real business datasets.',
            logo: '📈',
            features: ['Power BI & Tableau', 'KPI Framework Design', 'DAX & Calculated Measures', 'Data Modeling', 'Executive Reporting', 'Live Dashboard Deployment']
        },
        {
            id: 3, name: 'Advanced Analytics & Forecasting', esc: 'AA301', duration: '10 Weeks',
            description: 'Apply predictive and prescriptive analytics to real-world business problems using Python and ML.',
            logo: '🤖',
            features: ['Python for Data Analysis', 'Machine Learning Basics', 'Time-Series Forecasting', 'Cohort & Funnel Analysis', 'A/B Testing', 'Model Deployment']
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
        <div className="data-page-page">
            <TopNavBar />
            <Navbar />

            {/* ── Hero Section ── */}
            <section className="data-page-hero-section-new">
                <div className="data-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="data-page-hero-left-new">
                        <h4 className="data-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="data-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="data-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Data Analytics iPhone Mockup"
                                className="data-page-hero-iphone14-img"
                                style={{ maxWidth: '55%', height: '20%' }}
                            />
                        </h1>

                        <div className="data-page-hero-buttons-new">
                            <button onClick={handleWhatsAppNavigation} className="data-page-btn-get-started-new">GET STARTED</button>
                            <button onClick={handleWhatsAppNavigation} className="data-page-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="data-page-hero-desc-new">{pageData.fullDescription}</p>

                        <div className="data-page-hero-stats-new">
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">15<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Partners</span>
                            </div>
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">300<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Clients</span>
                            </div>
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">4.9<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        <div className="data-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">40<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Awards</span>
                            </div>
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">500<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Projects</span>
                            </div>
                            <div className="data-page-stat-item-new">
                                <div className="data-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="data-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="data-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="data-page-stat-number-new">5<span className="data-page-stat-dash">+</span></span>
                                </div>
                                <span className="data-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="data-page-hero-right-new">
                        <div className="data-page-right-top-new">
                            <div className="data-page-title-play-row">
                                <h2 className="data-page-case-title-new">About Our<br />Company</h2>
                                <div className="data-page-play-circle-new">
                                    <span className="data-page-play-text-new">Play</span>
                                    <div className="data-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="data-page-about-company-desc-new">
                                We deliver innovative data analytics solutions that help businesses grow faster, uncover hidden opportunities, and create measurable impact. Our team of analysts, engineers, and strategists focuses on quality, clarity, and results you can act on immediately.
                            </p>

                            <div className="data-page-avatars-row-new">
                                <div className="data-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="data-page-avatar-group-new">
                                    <img src="https://t3.ftcdn.net/jpg/07/28/48/98/360_F_728489827_qtQHjlMEeD53QhTdUEtdOvNPQw21pYjh.jpg" alt="avatar" />
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGQ53aAyRQ8l1h3GkPHeexbL9wyuTlrf1laQ&s" alt="avatar" />
                                    <img src="https://t4.ftcdn.net/jpg/06/43/68/65/360_F_643686558_Efl6HB1ITw98bx1PdAd1wy56QpUTMh47.jpg" alt="avatar" />
                                </div>
                                <div className="data-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="data-page-performance-card-new">
                            <div className="data-page-perf-header-new">
                                <div className="data-page-perf-item-new">
                                    <span className="data-page-perf-label-new">DATA ACCURACY</span>
                                    <span className="data-page-perf-value-new">96%</span>
                                </div>
                                <div className="data-page-perf-item-new text-right">
                                    <span className="data-page-perf-label-new">INSIGHT DELIVERY</span>
                                    <span className="data-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="data-page-perf-chart-new">
                                <div className="data-page-chart-col-new"><div className="data-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="data-page-chart-col-new"><div className="data-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="data-page-chart-col-new"><div className="data-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services / About Section ── */}
            <section className="data-page-about-section-new">
                <div className="data-page-about-top-notch-content">
                    <span className="data-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="data-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="data-page-about-left-new">
                        <div className="data-page-about-left-header">
                            <h2 className="data-page-about-left-title">Why Choose Our<br />Data Analytics?</h2>
                            <p className="data-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="data-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="data-page-service-item-left-about">
                                        <span className="data-page-service-num-new">{service.num}</span>
                                        <div className="data-page-service-text-group">
                                            <span className="data-page-service-name-about">{service.title}</span>
                                            <span className="data-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="data-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="data-page-about-center-new">
                        <div className="data-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="data-page-dynamic-img-fade"
                            />
                            <div className="data-page-about-badge-new">
                                <span className="data-page-badge-num">50+</span>
                                <span className="data-page-badge-label">Expert<br />Analysts</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel */}
                    <div className="data-page-about-right-new">
                        <div className="data-page-about-detail-panel" key={selectedService}>
                            <div className="data-page-detail-icon-wrap">
                                <span className="data-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="data-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="data-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="data-page-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="data-page-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="data-page-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
                            <div className="data-page-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val1}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab1}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3}</span>
                                </div>
                            </div>
                            <button onClick={handleWhatsAppNavigation} className="data-page-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Elevate Section ── */}
            <section className="data-page-elevate-section">
                <div className="data-page-el-container">
                    <div className="data-page-el-left">
                        <img
                            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Data analytics team at work"
                            className="data-page-el-img-large"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Dashboard wireframing"
                            className="data-page-el-img-small-top"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                            alt="Data pipeline engineering"
                            className="data-page-el-img-small-bottom"
                        />

                        <div className="data-page-el-badge-volunteer">
                            <span className="data-page-el-vol-title">Join Our Team</span>
                            <div className="data-page-el-vol-avatars">
                                <img src={cartoonMale1} alt="user" />
                                <img src={cartoonMale2} alt="user" />
                                <img src={cartoonMale3} alt="user" />
                                <div className="data-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>

                    <div className="data-page-el-right">
                        <div className="data-page-el-preheading">About Us</div>
                        <h2 className="data-page-el-title">Elevate your business<br />with data clarity</h2>
                        <p className="data-page-el-desc">
                            At the core of every high-performing business is a strong data strategy. We design and deliver end-to-end analytics solutions — from data infrastructure and ETL pipelines to interactive dashboards and predictive models — that give your teams the insights they need to act with confidence.
                        </p>

                        <div className="data-page-el-stats">
                            <div className="data-page-el-stat-box">
                                <div className="data-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="7" strokeDasharray="4 2" /><path d="M12 7c-1.5 1.5-1.5 4-1.5 6 1.5 0 2-2 2-2s1 3 3 1c0-2.5-2-4-3.5-5z" fill="#5b58ee" /></svg>
                                </div>
                                <div className="data-page-el-stat-content">
                                    <span className="data-page-el-stat-num">250+</span>
                                    <span className="data-page-el-stat-label">Analytics solutions delivered</span>
                                </div>
                            </div>
                            <div className="data-page-el-stat-box">
                                <div className="data-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="7" strokeDasharray="4 2" /><path d="M10.5 9.5a2.5 2.5 0 113 0v5a2.5 2.5 0 11-3 0v-5z" fill="#5b58ee" /></svg>
                                </div>
                                <div className="data-page-el-stat-content">
                                    <span className="data-page-el-stat-num">5+ Years</span>
                                    <span className="data-page-el-stat-label">of data expertise</span>
                                </div>
                            </div>
                        </div>

                        <p className="data-page-el-desc">
                            Explore a structured approach to analytics where precision meets strategy — helping you build lasting competitive advantages through better data and smarter decisions.
                        </p>

                        <button onClick={handleWhatsAppNavigation} className="data-page-el-btn">Discover More</button>
                    </div>
                </div>
            </section>

            {/* ── Productivity / Process Section ── */}
            <section className="data-page-productivity-section">
                <div className="data-page-prod-container">
                    <div className="data-page-prod-left">
                        <h2 className="data-page-prod-title">Power your business with a robust data strategy</h2>
                        <p className="data-page-prod-desc">
                            From data collection and warehousing to advanced visualization and predictive analytics, we build end-to-end solutions that turn information into your most valuable asset.
                        </p>
                        <div className="data-page-prod-buttons">
                            <button onClick={handleWhatsAppNavigation} className="data-page-btn-prod-primary">Get started</button>
                            <button onClick={handleWhatsAppNavigation} className="data-page-btn-prod-secondary">Talk to our team</button>
                        </div>
                        <div className="data-page-prod-avatars-box">
                            <div className="data-page-prod-avatars">
                                <img src={cartoonFemale1} alt="user" />
                                <img src={cartoonFemale2} alt="user" />
                                <img src={cartoonFemale3} alt="user" />
                            </div>
                            <p className="data-page-prod-avatar-text">
                                Trusted by data-driven companies worldwide —<br />we help you find signal in the noise!
                            </p>
                        </div>
                    </div>

                    <div className="data-page-prod-right">
                        <div className="data-page-prod-timeline">
                            <div className="data-page-timeline-item">
                                <div className="data-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="data-page-timeline-content">
                                    <h3>DISCOVER</h3>
                                    <p>Audit your existing data sources, define KPIs, and map the analytics landscape unique to your business.</p>
                                </div>
                            </div>
                            <div className="data-page-timeline-item">
                                <div className="data-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                                </div>
                                <div className="data-page-timeline-content">
                                    <h3>BUILD</h3>
                                    <p>Engineer reliable data pipelines, warehouses, and visualization layers tailored to your stack and scale.</p>
                                </div>
                            </div>
                            <div className="data-page-timeline-item">
                                <div className="data-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="data-page-timeline-content">
                                    <h3>ACTIVATE</h3>
                                    <p>Deliver insights to every stakeholder through live dashboards, automated reports, and alert systems.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission / Service Cards Section ── */}
            <section className="data-page-mission-section">
                <div className="data-page-mission-container">
                    <div className="data-page-mission-header">
                        <h2 className="data-page-mission-title">
                            Our Mission Is To Make Your<br />
                            <span className="data-page-mission-highlight">Data Analytics</span> Smarter Through Data
                        </h2>
                    </div>

                    <div className="data-page-services-grid">

                        {/* Card 1 */}
                        <div className="data-page-service-card bi-card-variant-1">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Data<br />Engineering</h3>
                                    <p className="data-page-service-card-subtitle">Reliable pipelines</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Design and build scalable ETL/ELT pipelines and data warehouses that consolidate your data into a single reliable source of truth.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="data-page-service-card bi-card-variant-2">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">BI &<br />Dashboards</h3>
                                    <p className="data-page-service-card-subtitle">Executive visibility</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Build interactive Power BI and Tableau dashboards that translate complex data into clear, actionable stories for every level of leadership.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="data-page-service-card bi-card-variant-7">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Predictive<br />Analytics</h3>
                                    <p className="data-page-service-card-subtitle">Forecast the future</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Apply machine learning and statistical models to forecast demand, churn, revenue, and other critical business outcomes with confidence.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="data-page-service-card bi-card-variant-3">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Customer<br />Analytics</h3>
                                    <p className="data-page-service-card-subtitle">Know your audience</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Segment customers by behavior, lifetime value, and demographics to power hyper-personalized marketing and product experiences.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="data-page-service-card bi-card-variant-4">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Marketing<br />Analytics</h3>
                                    <p className="data-page-service-card-subtitle">Optimize spend</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Measure campaign ROI across every channel with attribution models, funnel analysis, and A/B testing frameworks that guide smarter budget allocation.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="data-page-service-card bi-card-variant-5">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Real-Time<br />Reporting</h3>
                                    <p className="data-page-service-card-subtitle">Always current</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Automate report generation and delivery so your teams receive the right data at the right time — without manual effort or stale numbers.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 7 */}
                        <div className="data-page-service-card bi-card-variant-6">
                            <div className="data-page-card-header">
                                <div className="data-page-card-title-group">
                                    <h3 className="data-page-service-card-title">Data<br />Governance</h3>
                                    <p className="data-page-service-card-subtitle">Trust your data</p>
                                </div>
                                <div className="data-page-card-badge">
                                    <div className="data-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="data-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="data-page-service-card-desc">Establish data quality standards, lineage tracking, and access controls that ensure every decision is based on accurate, trustworthy information.</p>
                            <div className="data-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Agency Section ── */}
            <section className="data-page-agency-section">
                <div className="data-page-agency-container">
                    <div className="data-page-agency-header">
                        <h2 className="data-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="data-page-lime-highlight">DATA ANALYTICS AGENCY</span>
                        </h2>
                    </div>

                    <div className="data-page-agency-grid">
                        <div className="data-page-agency-left">
                            <div className="data-page-agency-image-card">
                                <div className="data-page-dot-pattern-circle"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                                    alt="Analytics team collaboration"
                                    className="data-page-portrait-img"
                                />
                                <div className="data-page-exp-badge">
                                    <span className="data-page-exp-number">5+</span>
                                    <span className="data-page-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="data-page-agency-right">
                            <div className="data-page-agency-info-row">
                                <div className="data-page-info-col">
                                    <p className="data-page-info-subtitle">WHO WE ARE</p>
                                    <p className="data-page-info-desc">
                                        We are a focused team of data analysts, engineers, and strategists dedicated to turning your raw data into clear, actionable intelligence. Our mission is to equip businesses with the analytics infrastructure and insights needed to compete confidently in a data-driven world.
                                    </p>
                                </div>
                                <div className="data-page-info-features">
                                    <p className="data-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="data-page-features-list">
                                        <li><span className="data-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="data-page-check-icon">✓</span> Team of Data & BI Experts</li>
                                        <li><span className="data-page-check-icon">✓</span> 250+ Analytics Projects Delivered</li>
                                        <li><span className="data-page-check-icon">✓</span> 5+ Years of Data Expertise</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="data-page-agency-bottom-img-wrap">
                                <div className="data-page-dot-pattern-square"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Analytics dashboard in action"
                                    className="data-page-landscape-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials ── */}
            <section className="data-page-testimonial-section">
                <div className="data-page-testimonial-container">
                    <p className="data-page-testimonial-label">Testimonial</p>
                    <h2 className="data-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="data-page-testimonial-scroll-wrapper">
                        <div className="data-page-testimonial-scroll-mask-left"></div>
                        <div className="data-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="data-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="data-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="data-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="data-page-testimonial-name">{feedback.name}</h4>
                                    <p className="data-page-testimonial-role">{feedback.role}</p>
                                    <p className="data-page-testimonial-text">{feedback.text}</p>
                                    <div className="data-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="data-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="data-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="data-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>

            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default DataAnalytics;