import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './UiuxDesign.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

import iphone14Img from '../../../assets/Iphone14.png';

const UiuxDesign = () => {
    const [selectedService, setSelectedService] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const reviewTrackRef = useRef(null);

    const uiuxServices = [
        {
            id: 1,
            num: '01',
            title: 'User Research',
            icon: '🔍',
            short: 'Understanding your users',
            description: 'We dive deep into understanding your target audience, their pain points, and behaviors. Through interviews, surveys, and competitive analysis, we gather the insights needed to build a product that truly resonates with real users and solves their specific problems effectively.',
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            num: '02',
            title: 'Wireframing',
            icon: '📐',
            short: 'Blueprints for success',
            description: 'Before adding colors and images, we create the structural skeleton of your interface. Wireframes focus on layout, functionality, and information hierarchy, ensuring the flow is logical and the user journey is seamless from the very start.',
            image: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            num: '03',
            title: 'Prototyping',
            icon: '🖱️',
            short: 'Interactive design testing',
            description: 'We build high-fidelity interactive prototypes that look and feel like the final product. This allows us to test navigation, interactions, and usability before a single line of code is written, saving time and ensuring a polished final experience.',
            image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            num: '04',
            title: 'Visual UI Design',
            icon: '🎨',
            short: 'Aesthetics meet function',
            description: 'We craft stunning visual interfaces that align with your brand identity. Our designs focus on typography, color theory, and precise spacing to create a professional look that enhances user trust and provides a delightful aesthetic experience.',
            image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            num: '05',
            title: 'Interaction Design',
            icon: '✨',
            short: 'Meaningful motion',
            description: 'We define how specific visual elements move and respond to user input. From subtle micro-interactions to smooth page transitions, we add dynamism that guides users, provides feedback, and makes the interface feel incredibly alive.',
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            num: '06',
            title: 'Responsive Design',
            icon: '📱',
            short: 'Beauty on every screen',
            description: 'We ensure your digital product looks and functions perfectly across all devices—from massive desktop screens to the smallest smartphones. Our responsive layouts automatically adapt to provide a consistent and professional experience everywhere.',
            image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            num: '07',
            title: 'Information Architecture',
            icon: '📑',
            short: 'Logical content structure',
            description: 'We organize and structure your content in a way that helps users find what they need instantly. By creating clear navigation systems and content hierarchies, we reduce cognitive load and improve overall user satisfaction and conversion rates.',
            image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    const testimonials = [
        {
            id: 1,
            text: "Very clean and professional UI/UX. The user flow is smooth and makes our services easy to understand.",
            clientName: "PAVIZHAM",
            role: "PAVIZHAM JEWELLERS",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=P1",
            stars: 5
        },
        {
            id: 2,
            text: "Navigation is smooth and the design feels modern. UI/UX improvements helped our website look more professional.",
            clientName: "VIAAN",
            role: "VIAAN ENTERPRISES",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=V2",
            stars: 5
        },
        {
            id: 3,
            text: "After the UI/UX redesign, users easily find our programs. Member engagement improved significantly!",
            clientName: "GYM LIFE",
            role: "FITNESS FOUNDER",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=G3",
            stars: 5
        },
        {
            id: 4,
            text: "The packaging feels authentic and natural. Our team captured the brand story perfectly through design.",
            clientName: "TAMIL NATURALS",
            role: "TAMIL NATURALS CEO",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=T4",
            stars: 5
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "UI/UX Fundamentals",
            esc: "FWD101",
            duration: "12 Weeks",
            description: "Master user research, wireframing, user flows, information architecture and core usability principles to build scientific designs.",
            features: ["Figma Mastery", "Adobe XD", "User Persona Research", "Information Architecture", "Wireframing Basics", "Usability Testing"]
        },
        {
            id: 2,
            name: "Visual & Interaction Design",
            esc: "MAD201",
            duration: "10 Weeks",
            description: "Creating polished interfaces, interaction patterns, motion design, and comprehensive component systems for modern apps.",
            features: ["Advanced Prototyping", "Animation Principles", "System Design", "Micro-interactions", "High-fidelity UI", "Case Study Building"]
        },
        {
            id: 3,
            name: "Web Development for Designers",
            esc: "BAD301",
            duration: "8 Weeks",
            description: "Bridge the gap between design and dev. Learn HTML structure, CSS styling, responsive layouts and UI-friendly components.",
            features: ["HTML5 & CSS3", "Modern Javascript", "Responsive Layouts", "React js Basics", "Git for Designers", "Web Animation"]
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    useEffect(() => {
        if (reviewTrackRef.current) {
            reviewTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    return (
        <div className="ui-page">
            <TopNavBar />
            <Navbar />

            {/* Hero Section */}
            <section className="ui-hero-section-new">
                <div className="ui-hero-container-new">
                    <div className="ui-hero-left-new">
                        <h4 className="ui-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="ui-hero-title-new">UI/UX DESIGNS</h1>
                        <h1 className="ui-hero-title-desc-new">
                            <img src={iphone14Img} alt="UI/UX iPhone Mockup" className="ui-hero-iphone14-img" />
                        </h1>

                        <div className="ui-hero-buttons-new">
                            <button className="ui-btn-get-started-new">GET STARTED</button>
                            <button className="ui-btn-contact-us-new">CONTACT US</button>
                        </div>

                        <p className="ui-hero-desc-new">
                            User-centered designs that provide seamless experiences, focused on creating visually appealing and functional interfaces.
                        </p>

                        <div className="ui-hero-stats-new">
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">15<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Partners</span>
                            </div>
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">300<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Clients</span>
                            </div>
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">4.9<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Rating</span>
                            </div>
                        </div>

                        <div className="ui-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">40<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Awards</span>
                            </div>
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">500<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Projects</span>
                            </div>
                            <div className="ui-stat-item-new">
                                <div className="ui-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="ui-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="ui-circle-val ui-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="ui-stat-number-new">5<span className="ui-stat-dash">+</span></span>
                                </div>
                                <span className="ui-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    <div className="ui-hero-right-new">
                        <div className="ui-right-top-new">
                            <div className="ui-title-play-row">
                                <h2 className="ui-case-title-new">Excellence in<br />UI/UX Design</h2>
                                <div className="ui-play-circle-new">
                                    <span className="ui-play-text-new">Showreel</span>
                                    <div className="ui-play-icon-new">▶</div>
                                </div>
                            </div>
                            <p className="ui-about-company-desc-new">
                                We transform complex requirements into simple, intuitive interfaces. Our approach combines data-driven research with high-end visual aesthetics to create products that users love to engage with and help businesses scale.
                            </p>
                            <div className="ui-avatars-row-new">
                                <div className="ui-avatar-group-new">
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=UX1" alt="UX Designer" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=UX2" alt="UI Designer" />
                                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=UX3" alt="Researcher" />
                                </div>
                                <div className="ui-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>
                        <div className="ui-performance-card-new">
                            <div className="ui-perf-header-new">
                                <div className="ui-perf-item-new">
                                    <span className="ui-perf-label-new">USABILITY</span>
                                    <span className="ui-perf-value-new">96%</span>
                                </div>
                                <div className="ui-perf-item-new" style={{ textAlign: 'right' }}>
                                    <span className="ui-perf-label-new">ENGAGEMENT</span>
                                    <span className="ui-perf-value-bold-new">92% ↑</span>
                                </div>
                            </div>
                            <div className="ui-perf-chart-new">
                                <div className="ui-chart-col-new"><div className="ui-bar-green-new" style={{ height: '45%' }}></div></div>
                                <div className="ui-chart-col-new"><div className="ui-bar-gray-new" style={{ height: '70%' }}></div></div>
                                <div className="ui-chart-col-new"><div className="ui-bar-blue-new" style={{ height: '90%' }}></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Services Section */}
            <section className="ui-about-section-new">
                <div className="ui-about-top-notch-content">
                    <span className="ui-about-left-tag">MODERN UI/UX</span>
                </div>
                <div className="ui-about-inner-new">
                    <div className="ui-about-left-new">
                        <div className="ui-about-left-header">
                            <h2 className="ui-about-left-title">Why Choose Our<br />Web & UI/UX?</h2>
                            <p className="ui-about-intro-new">Click any service below to see our methodology.</p>
                        </div>
                        <div className="ui-about-services-list-new">
                            {uiuxServices.map((service, i) => (
                                <div key={service.id} className={`ui-about-service-item-new ${selectedService === i ? 'ui-service-active' : ''}`} onClick={() => setSelectedService(i)}>
                                    <div className="ui-service-item-left-about">
                                        <span className="ui-service-num-new">{service.num}</span>
                                        <div className="ui-service-text-group">
                                            <span className="ui-service-name-about">{service.title}</span>
                                            <span className="ui-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="ui-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ui-about-center-new">
                        <div className="ui-about-img-wrap-new">
                            <img src={uiuxServices[selectedService].image} alt={uiuxServices[selectedService].title} />
                            <div className="ui-about-badge-new">
                                <span className="ui-badge-num">80+</span>
                                <span className="ui-badge-label">Live<br />Products</span>
                            </div>
                        </div>
                    </div>

                    <div className="ui-about-right-new">
                        <div className="ui-about-detail-panel" key={selectedService}>
                            <div className="ui-detail-icon-wrap">
                                <span className="ui-detail-icon">{uiuxServices[selectedService].icon}</span>
                            </div>
                            <span className="ui-detail-num">{uiuxServices[selectedService].num}</span>
                            <h3 className="ui-detail-title">{uiuxServices[selectedService].title}</h3>
                            <p className="ui-detail-desc">{uiuxServices[selectedService].description}</p>
                            <div className="ui-detail-divider" />
                            <div className="ui-detail-stats">
                                <div className="ui-detail-stat">
                                    <span className="ui-detail-stat-val">80+</span>
                                    <span className="ui-detail-stat-label">Projects</span>
                                </div>
                                <div className="ui-detail-stat">
                                    <span className="ui-detail-stat-val">3-6 weeks</span>
                                    <span className="ui-detail-stat-label">Timeline</span>
                                </div>
                                <div className="ui-detail-stat">
                                    <span className="ui-detail-stat-val">99%</span>
                                    <span className="ui-detail-stat-label">Satisfaction</span>
                                </div>
                            </div>
                            <button className="ui-detail-cta">Get Started →</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Elevate Section - Redesigned for Pixel-Perfect Alignment */}
            <section className="ui-elevate-section">
                <div className="ui-el-container">
                    <div className="ui-el-left">
                        <div className="ui-el-img-grid">
                            <div className="ui-el-img-item ui-el-main">
                                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="UI UX Team" />
                                <div className="ui-el-badge-volunteer">
                                    <span className="ui-el-vol-title">Expert UI Team</span>
                                    <div className="ui-el-vol-avatars">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=U1" alt="u1" />
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=U2" alt="u2" />
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=U3" alt="u3" />
                                        <div className="ui-el-vol-count">+25</div>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-el-img-item ui-el-top-left">
                                <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Design Review" />
                                <div className="ui-el-float-icon">🎨</div>
                            </div>
                            <div className="ui-el-img-item ui-el-bottom-left">
                                <img src="data:image/jpeg;base64,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" />
                            </div>
                        </div>
                    </div>

                    <div className="ui-el-right">
                        <div className="ui-el-preheading">— About Us</div>
                        <h2 className="ui-el-title">Elevate your product with superior designer UX</h2>
                        <p className="ui-el-desc">
                            We believe that great design is not just how it looks, but how it works. Our UI/UX solutions focus on accessibility, intuitive navigation, and high-performance layouts that turn visitors into loyal customers. Every pixel is crafted with human psychology in mind.
                        </p>

                        <div className="ui-el-stats-new">
                            <div className="ui-el-stat-card">
                                <div className="ui-el-stat-icon-wrap">📈</div>
                                <div className="ui-el-stat-info">
                                    <span className="ui-el-stat-val">350+</span>
                                    <span className="ui-el-stat-txt">UI/UX Solutions</span>
                                </div>
                            </div>
                            <div className="ui-el-stat-card">
                                <div className="ui-el-stat-icon-wrap">🛡️</div>
                                <div className="ui-el-stat-info">
                                    <span className="ui-el-stat-val">8+ Years</span>
                                    <span className="ui-el-stat-txt">Design Excellence</span>
                                </div>
                            </div>
                        </div>

                        <p className="ui-el-sub-desc">
                            Bridging the gap between user needs and technical feasibility through strategic, evidence-based design patterns.
                        </p>

                        <button className="ui-el-btn-discover">View Showcase</button>
                    </div>
                </div>
            </section>

            {/* Productivity Section */}
            <section className="ui-productivity-section">
                <div className="ui-prod-container">
                    <div className="ui-prod-left">
                        <h2 className="ui-prod-title">Modern workflow for meaningful results</h2>
                        <p className="ui-prod-desc">
                            From initial research to final developer handoff, we maintain a transparent and collaborative workflow that ensures your vision is realized with technical precision and design excellence.
                        </p>
                        <div className="ui-prod-buttons">
                            <button className="ui-btn-prod-primary">Let's Design</button>
                            <button className="ui-btn-prod-secondary">Talk to Experts</button>
                        </div>
                        <div className="ui-prod-avatars-box">
                            <div className="ui-prod-avatars">
                                <img src="https://i.pravatar.cc/100?img=1" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=2" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=3" alt="user" />
                            </div>
                            <p className="ui-prod-avatar-text">Trusted by tech founders and market leaders worldwide.</p>
                        </div>
                    </div>
                    <div className="ui-prod-right">
                        <div className="ui-prod-timeline">
                            <div className="ui-timeline-item">
                                <div className="ui-timeline-icon">💡</div>
                                <div className="ui-timeline-content">
                                    <h3>IDEATION</h3>
                                    <p>Brainstorming and conceptualizing solutions based on user needs.</p>
                                </div>
                            </div>
                            <div className="ui-timeline-item">
                                <div className="ui-timeline-icon">🖋️</div>
                                <div className="ui-timeline-content">
                                    <h3>DESIGN</h3>
                                    <p>Crafting interactive high-fidelity user interfaces and experiences.</p>
                                </div>
                            </div>
                            <div className="ui-timeline-item">
                                <div className="ui-timeline-icon">🚀</div>
                                <div className="ui-timeline-content">
                                    <h3>RELEASE</h3>
                                    <p>Iterative testing and refined handoff for development success.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Mission Section - 6-Card Fan Arc with Service Content */}
            <section className="ui-reviews-section-fan">
                <div className="ui-fan-container">
                    <h2 className="ui-fan-title">
                        OUR MISSION IS TO MAKE YOUR <span className="ui-fan-highlight-box">UX/UI</span> BETTER THROUGH TECHNOLOGY
                    </h2>

                    <div className="ui-fan-cards-wrapper">
                        <div className="ui-fan-cards-arc">
                            {uiuxServices.slice(0, 6).map((service, idx) => {
                                // Sophisticated distribution for 6 cards (Wide Arc)
                                const positions = [
                                    { rot: -18, transY: 50, left: '10%', color: '#6C48D1' },
                                    { rot: -10, transY: 25, left: '26%', color: '#E94D3F' },
                                    { rot: -3, transY: 5, left: '42%', color: '#F2994A' },
                                    { rot: 3, transY: 5, left: '58%', color: '#56CCF2' },
                                    { rot: 10, transY: 25, left: '74%', color: '#27AE60' },
                                    { rot: 18, transY: 50, left: '90%', color: '#2D9CDB' }
                                ];
                                const pos = positions[idx];

                                return (
                                    <div
                                        className="ui-fan-card-item"
                                        key={idx}
                                        style={{
                                            '--card-rot': `${pos.rot}deg`,
                                            '--card-transY': `${pos.transY}px`,
                                            '--card-left': pos.left,
                                            '--card-color': pos.color
                                        }}
                                    >
                                        <div className="ui-fan-card-inner">
                                            <div className="ui-fan-card-header">
                                                <div className="ui-fan-card-meta">
                                                    <h3 className="ui-fan-card-title">{service.title}</h3>
                                                    <span className="ui-fan-card-subtitle">{service.short}</span>
                                                </div>
                                                <div className="ui-fan-card-rating">
                                                    ⭐ <span>5.0</span>
                                                </div>
                                            </div>
                                            <p className="ui-fan-card-desc">
                                                {service.description.length > 110 ? service.description.substring(0, 110) + "..." : service.description}
                                            </p>
                                            <div className="ui-fan-card-footer">
                                                <div className="ui-fan-card-icon-wrap">
                                                    <span style={{ fontSize: '24px' }}>{service.icon}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Mission Section - Professional Business Agency */}
            <section className="ui-mission-section-redesign">
                <div className="ui-mission-redesign-container">
                    <h2 className="ui-mission-redesign-title">
                        WE ARE A PROFESSIONAL <br />
                        <span className="ui-mission-title-highlight">BUSINESS AGENCY</span>
                    </h2>

                    <div className="ui-mission-redesign-content">
                        {/* Left Column: Tall Image + Badge */}
                        <div className="ui-mission-left-col">
                            <div className="ui-mission-tall-img-wrap">
                                <img src="data:image/jpeg;base64,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" alt="UI Design Workspace" className="ui-mission-tall-img" />
                                <div className="ui-mission-experience-badge">
                                    <span className="ui-badge-big-num">5+</span>
                                    <span className="ui-badge-small-txt">YEARS OF<br />EXPERIENCE</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Text Content + Second Image */}
                        <div className="ui-mission-right-col">
                            <div className="ui-mission-text-top">
                                <div className="ui-mission-who-we-are">
                                    <h4 className="ui-mission-subheading">WHO WE ARE</h4>
                                    <p className="ui-mission-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>
                                    <button className="ui-mission-more-btn">MORE INFORMATION</button>
                                </div>

                                <div className="ui-mission-why-choose">
                                    <h4 className="ui-mission-subheading">WHY CHOOSE US</h4>
                                    <ul className="ui-mission-checklist">
                                        <li>
                                            <span className="ui-check-icon">✓</span>
                                            <span>Top Guaranteed Results</span>
                                        </li>
                                        <li>
                                            <span className="ui-check-icon">✓</span>
                                            <span>Team of Industry Experts</span>
                                        </li>
                                        <li>
                                            <span className="ui-check-icon">✓</span>
                                            <span>250+ Total Projects Worldwide</span>
                                        </li>
                                        <li>
                                            <span className="ui-check-icon">✓</span>
                                            <span>5+ Years of Experience</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="ui-mission-landscape-img-wrap">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="UI UX Strategy Session" className="ui-mission-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Internship Courses */}


            {/* New Testimonial Section - Marquee Style */}
            <section className="ui-testimonial-section-new">
                <div className="ui-testimonial-container-new">
                    <p className="ui-testimonial-label-new">Testimonial</p>
                    <h2 className="ui-testimonial-heading-new">We Care About Our Customers<br />Experience Too</h2>

                    <div className="ui-testimonial-scroll-wrapper">
                        <div className="ui-testimonial-grid-horizontal">
                            {[...testimonials, ...testimonials].map((feedback, index) => (
                                <div className="ui-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="ui-testimonial-avatar-wrap">
                                        <img src={feedback.avatar} alt={feedback.clientName} className="ui-testimonial-avatar" />
                                    </div>
                                    <h4 className="ui-testimonial-name">{feedback.clientName}</h4>
                                    <p className="ui-testimonial-role">{feedback.role}</p>
                                    <p className="ui-testimonial-text">{feedback.text}</p>
                                    <div className="ui-testimonial-stars">
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <span key={i} className="ui-star filled">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default UiuxDesign;