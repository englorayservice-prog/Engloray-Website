import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLightbulb,
    faPalette,
    faCogs,
    faRocket,
    faChartLine,
    faBrush,
    faCode,
    faMobileAlt,
    faLaptop,
    faCrown,
    faGem,
    faBriefcase,
    faFlask,
    faPlane,
    faStethoscope,
    faDumbbell,
    faLeaf,
    faKissWinkHeart,
    faGraduationCap,
    faQuoteLeft,
    faChevronDown,
    faChevronUp,
    faCalendarCheck,
    faTrophy,
    faUsers,
    faSmile,
    faBullseye,
    faBolt,
    faArrowRight,
    faAward,
    faMedal,
    faCertificate,
    faChevronLeft,
    faChevronRight,
    faStar
} from '@fortawesome/free-solid-svg-icons';

import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';

//uiux
import clientLogoOne from '../../../assets/case study images/uiux/Divya makeovers.jpg';
import clientLogoTwo from '../../../assets/case study images/uiux/gym life.png';
//branding
import clientLogoThree from '../../../assets/case study images/branding/via nature.png';
import clientLogoFour from '../../../assets/case study images/branding/say.jpg';
//products
import clientLogoFive from '../../../assets/case study images/products/maax life.png';
import clientLogoSix from '../../../assets/case study images/products/studio makeup.png';
//websites
import clientLogoSeven from '../../../assets/case study images/Application/aara.png';
import clientLogoEight from '../../../assets/case study images/websites/mitt travels.jpg';
//applications
import clientLogoNine from '../../../assets/case study images/Application/pavizham.jpg';
import clientLogoTen from '../../../assets/case study images/Application/orthopetic clinic.png';

import './WorksClientProjects.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

// Import hero background image
import heroBackgroundImage from '../../../assets/download (29).jpeg';

// Logo data for marquee
const logoImages = [
    clientLogoOne,
    clientLogoTwo,
    clientLogoThree,
    clientLogoFour,
    clientLogoFive,
    clientLogoSix,
    clientLogoSeven,
    clientLogoEight,
    clientLogoNine,
    clientLogoTen,
    clientLogoOne,
    clientLogoTwo,
    clientLogoThree,
    clientLogoFour,
    clientLogoFive,
];

const WorksClientProjects = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const marqueeRef = useRef(null);
    const containerRef = useRef(null);

    // Client projects data
    const clientProjects = [
        {
            id: 1,
            title: "Divya Makeovers",
            subtitle: "Modernizing Makeovers with Designs",
            category: "UiUx",
            client: "Divya Makeovers",
            duration: "1 Months",
            results: "+40% Digital actions",
            description: "Built a Ui/Ux design for the makeovers to outlast their needs.",
            image: clientLogoOne,
            icon: faBrush,
            color: "#FF6B6B",
            challenges: [
                "Poor user flow for service inquiry and booking ",
                "Users found it difficult to navigate the website ",
                "No clear visual hierarchy "
            ],
            solutions: [
                "Designed a clean and intuitive UI layout ",
                "Structured user journey for easy service discovery",
                "Improved visual hierarchy for better user focus "
            ]
        },
        {
            id: 2,
            title: "Via Nature",
            subtitle: "Nature inspired visual system with organic color palette",
            category: "Branding",
            client: "Via Nature",
            duration: "1 Months",
            results: "+30% Faster Processing",
            description: "Clean and minimal label designs using the Label Designing and UI designing.",
            image: clientLogoThree,
            icon: faLeaf,
            color: "#4ECDC4",
            challenges: [
                "Packaging did not reflect natural and organic values ",
                "Labels lacked clarity and authenticity "
            ],
            solutions: [
                "Designed clean, eco-inspired product layouts ",
                "Built earthy label designs aligned with organic branding ",
                "Improved content hierarchy for ingredient and benefit clarity "
            ]
        },
        {
            id: 3,
            title: "Maxx Life",
            subtitle: "About the health and wellness of the people",
            category: "Products",
            client: "Maxx Life",
            duration: "1 Months",
            results: "+5000 Active Users",
            description: "Interactive wellness plaftorm with application and progress tracking.",
            image: clientLogoFive,
            icon: faBriefcase,
            color: "#FFD166",
            challenges: [
                "Labels lacked premium feel",
                "Product presentation did not match quality"
            ],
            solutions: [
                "Designed clean and premium label layouts",
                "Improved typography and spacing for clarity",
                "Strengthened visual hierarchy "
            ]
        },
        {
            id: 4,
            title: "Gym Life",
            subtitle: "Optimizing the Fitness World",
            category: "UiUx",
            client: "Gym Life",
            duration: "2 Months",
            results: "+35% Faster Usage",
            description: "Regularing the routine the of the Gym freaks using the Featured UI.",
            image: clientLogoTwo,
            icon: faDumbbell,
            color: "#FF6B6B",
            challenges: [
                "No website to showcase gym facilities and programs",
                "Difficulty converting visitors into membership inquiries"
            ],
            solutions: [
                "Designed a bold, fitness-focused website",
                "Highlighted programs, trainers, and facilities clearly",
                "Created strong call-to-action sections for inquiries",
            ]
        },
        {
            id: 5,
            title: "Say Bridals",
            subtitle: "Modern Bridals discovery",
            category: "Branding",
            client: "Say Bridals",
            duration: "1.5 Months",
            results: "+300% Lead Increase",
            description: "Getting the bridals through the easy searching and with fixed SEO's.",
            image: clientLogoFour,
            icon: faGem,
            color: "#4ECDC4",
            challenges: [
                "Needed an elegant online presence for bridal services",
                "Website had to emotionally connect with customers "
            ],
            solutions: [
                "Designed a graceful and visually rich bridal website ",
                "Focused on aesthetics, portfolio display, and inquiry flow ",
                "Ensured smooth mobile experience "
            ]
        },
        {
            id: 6,
            title: "Studio Makeup",
            subtitle: "Clean and elegant design for makeup studio",
            category: "Products",
            client: "Studio Makeup",
            duration: "1 Months",
            results: "+60% Online Orders",
            description: "Enhanced brand image with premium product appearence.",
            image: clientLogoSix,
            icon: faKissWinkHeart,
            color: "#FFD166",
            challenges: [
                "Needed premium cosmetic packaging",
                "Brand identity was not reflected clearly on products "
            ],
            solutions: [
                "Designed modern and premium cosmetic labels ",
                "Aligned product visuals with brand tone"
            ]
        },
        {
            id: 7,
            title: "Aara Labs",
            subtitle: "creative Lab application Designs",
            category: "Website",
            client: "Aara Labs",
            duration: "2.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive application for the medical testing lab .",
            image: clientLogoSeven,
            icon: faFlask,
            color: "#DC143C",
            challenges: [
                "No mobile access for lab services and reports ",
                "Patients needed easy digital access"
            ],
            solutions: [
                "Developed a clean and secure lab mobile application",
                "Structured UX for reports, services, and contact",
                "Simple mobile access."
            ]
        },
        {
            id: 8,
            title: "Mitt Travels",
            subtitle: "Inspired visual design with natural color palette",
            category: "Website",
            client: "Mitt Travels",
            duration: "1 Months",
            results: "+30% Faster Processing",
            description: "Clean and minimal web designs using the web Designing and UI designing.",
            image: clientLogoEight,
            icon: faPlane,
            color: "#DC143C",
            challenges: [
                "No online presence to showcase travel services ",
                "Needed a simple inquiry-driven website "
            ],
            solutions: [
                "Designed a clean and informative travel website ",
                "Highlighted services, destinations, and contact flow ",
                "Simple and attractive layout"
            ]
        },
        {
            id: 9,
            title: "Pavizham Jewellery",
            subtitle: "Modernizing online shopping experience",
            category: "App",
            client: "Pavizham Jewellers",
            duration: "1.5 Months",
            results: "+180% Sales Increase",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            image: clientLogoNine,
            icon: faCrown,
            color: "#6A0DAD",
            challenges: [
                "No mobile-based digital system for customers ",
                "Manual processes caused delays and confusion",
                "Poor user experience in accessing services"
            ],
            solutions: [
                "Designed and developed a user-friendly mobile application ",
                "Structured features for easy service access and communication",
                "Focused on smooth navigation and usability ",
                "Clean and intuitive mobile UI",
                "Smooth user flow for service interaction"
            ]
        },
        {
            id: 10,
            title: "Orthopedic Clinic",
            subtitle: "Multi-channel Clinic app",
            category: "App",
            client: "Orthopedic clinic",
            duration: "2 Months",
            results: "+150% Lead Patients",
            description: "Comprehensive enterprise App across social media, search, and email channels.",
            image: clientLogoTen,
            icon: faStethoscope,
            color: "#6A0DAD",
            challenges: [
                "Patients struggled with manual appointment booking",
                "High administrative workload",
                "Poor patient experience"
            ],
            solutions: [
                "Developed a patient-friendly mobile application ",
                "Integrated appointment booking and notifications",
                "Simplified patient interaction with the clinic"
            ]
        },
    ];

    // Client testimonials
    const clientTestimonials = [
        {
            id: 1,
            text: "The UI/UX design made our website simple, elegant, and easy for customers to book services. User experience improved a lot.",
            author: "Divya Makeover",
            role: "Bridal makeups online",
            company: "Bridals designs",
            icon: "👩‍🎨"
        },
        {
            id: 2,
            text: "The product and label designs perfectly reflect our natural and organic values. Clean, clear, and very appealing.",
            author: "Via Nature",
            role: "Branding nature projects",
            company: "Nature products",
            icon: "🌿"
        },
        {
            id: 3,
            text: "The product and label designs look premium and modern. It enhanced our brand image instantly.",
            author: "Studio makeup",
            role: "Bridal makeups",
            company: "Bridal makeup",
            icon: "💄"
        },
        {
            id: 4,
            text: "The website redesign transformed our online presence. Customer engagement increased significantly after the launch.",
            author: "Gym Life",
            role: "Fitness Center",
            company: "Gym Life",
            icon: "💪"
        },
        {
            id: 5,
            text: "The mobile app development was seamless. Our patients now book appointments easily and the feedback has been overwhelmingly positive.",
            author: "Orthopedic Clinic",
            role: "Medical Center",
            company: "Orthopedic Clinic",
            icon: "🏥"
        }
    ];

    // Filter projects by category
    const filteredProjects = activeCategory === 'all'
        ? clientProjects
        : clientProjects.filter(project => project.category === activeCategory);

    // Auto rotate projects every 3 seconds with fade effect only for right side content
    useEffect(() => {
        if (filteredProjects.length === 0) return;

        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentProjectIndex((prevIndex) =>
                    prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
                );
                setIsFading(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [filteredProjects.length]);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentTestimonialIndex]);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % clientTestimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
    };

    const handleTestimonialDotClick = (index) => {
        setCurrentTestimonialIndex(index);
    };

    // Get visible testimonials (3 cards at a time based on current index)
    const getVisibleTestimonials = () => {
        const visible = [];
        const total = clientTestimonials.length;

        for (let i = 0; i < 3; i++) {
            let index = (currentTestimonialIndex + i) % total;
            visible.push({ ...clientTestimonials[index], originalIndex: index });
        }

        return visible;
    };

    // Control functions for navigating projects
    const goToPrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) =>
                prevIndex === 0 ? filteredProjects.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 300);
    };

    const goToNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentProjectIndex((prevIndex) =>
                prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
            );
            setIsFading(false);
        }, 300);
    };

    // Drag to scroll functionality for marquee
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - marqueeRef.current.offsetLeft);
        setScrollLeft(marqueeRef.current.scrollLeft);
        marqueeRef.current.style.cursor = 'grabbing';
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        if (marqueeRef.current) {
            marqueeRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        if (marqueeRef.current) {
            marqueeRef.current.style.cursor = 'grab';
        }
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - marqueeRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        marqueeRef.current.scrollLeft = scrollLeft - walk;
    };

    const getCategoryLabel = (category) => {
        switch (category) {
            case 'UiUx': return 'UIUX';
            case 'Branding': return 'Branding';
            case 'Products': return 'Products';
            case 'App': return 'App';
            case 'Website': return 'Website';
            default: return category;
        }
    };

    const getCategoryColor = (category) => {
        switch (category) {
            case 'UiUx': return '#FF6B6B';
            case 'Branding': return '#4ECDC4';
            case 'Products': return '#45B7D1';
            case 'App': return '#8B0000';
            case 'Website': return '#3D0C41';
            default: return '#95A5A6';
        }
    };

    return (
        <div className="wcp-container">
            <TopNavBar />
            <TwoLineNavbar />

            {/* NEW HERO SECTION - EXACTLY FROM THE PROVIDED FILE */}
            <section className="hero">

                {/* BACKGROUND IMAGE */}
                <div className="hero-video-container">
                    <img
                        src={heroBackgroundImage}
                        alt="Background"
                        className="hero-video"
                    />
                    <div className="hero-video-overlay"></div>
                </div>

                {/* FIRST SECTION - Badge, Title, Project Growth Card, Right Side Cards */}
                <div className="hero-first-section">
                    {/* CASE STUDIES BADGE - TOP CENTER */}
                    <div className="case-studies-badge">
                        <span className="badge">Client Projects</span>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="hero-left">
                        <h1>
                            OUR <br /> Client Success
                        </h1>

                        {/* Insight Card with Graph */}
                        <div className="glass card salary-card">
                            <h4>Project Growth</h4>
                            <div className="chart-container">
                                <svg className="growth-chart" viewBox="0 0 300 80">
                                    <polyline
                                        points="0,60 40,45 80,30 120,35 160,25 200,40 240,20 280,30 300,25"
                                        fill="none"
                                        stroke="#b7ff3c"
                                        strokeWidth="2"
                                    />
                                    {[0, 40, 80, 120, 160, 200, 240, 280, 300].map((x, i) => (
                                        <circle
                                            key={i}
                                            cx={x}
                                            cy={i === 0 ? 60 : i === 1 ? 45 : i === 2 ? 30 : i === 3 ? 35 : i === 4 ? 25 : i === 5 ? 40 : i === 6 ? 20 : i === 7 ? 30 : 25}
                                            r="3"
                                            fill="#b7ff3c"
                                        />
                                    ))}
                                </svg>
                                <div className="chart-line">
                                    <div className="dot">+120%</div>
                                </div>
                            </div>
                            <div className="months">
                                <span>Mar</span><span>Apr</span><span>May</span>
                                <span>Jun</span><span>Jul</span><span>Aug</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-right">
                        {/* FIRST CARD - Active Projects */}
                        <div className="glass card small">
                            <h4>Active Projects</h4>
                            <div className="stats">
                                <span className="stat-left">200</span>
                                <span>310</span>
                                <span className="active stat-right">50+</span>
                            </div>
                            <div className="tabs">
                                <button>Branding</button>
                                <button>Product</button>
                                <button className="active">UI/UX</button>
                            </div>
                        </div>

                        {/* SECOND + THIRD IN ONE ROW */}
                        <div className="row-cards">
                            <div className="glass card small performance-card">
                                <h4>Performance Score</h4>
                                <div className="performance-score">
                                    <div className="score-circle">
                                        <span className="score-value">92</span>
                                        <span className="score-label">/100</span>
                                    </div>
                                    <p className="score-description">Overall Excellence Rating</p>
                                </div>
                                <div className="performance-metrics">
                                    <div className="metric">
                                        <span className="metric-label">Efficiency</span>
                                        <div className="metric-bar">
                                            <div className="metric-fill" style={{ width: '100%' }}></div>
                                        </div>
                                        <span className="metric-value">88%</span>
                                    </div>
                                    <div className="metric">
                                        <span className="metric-label">Quality</span>
                                        <div className="metric-bar">
                                            <div className="metric-fill" style={{ width: '100%' }}></div>
                                        </div>
                                        <span className="metric-value">94%</span>
                                    </div>
                                </div>
                            </div>

                            <div className="glass card small case-studies-card">
                                <h4>Client Projects</h4>
                                <div className="case-studies-content">
                                    <p className="big centered-number">100+</p>
                                    <div className="bars centered-bars">
                                        <span></span><span></span><span></span>
                                        <span></span><span></span>
                                    </div>
                                    <p className="case-studies-footer">Completed Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SECOND SECTION - Filter Bar and Bottom Cards */}
                <div className="hero-second-section">
                    {/* FILTER BAR */}
                    <div className="filters">
                        <button className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`} onClick={() => setActiveCategory('all')}>All Projects</button>
                        <button className={`filter-btn ${activeCategory === 'UiUx' ? 'active' : ''}`} onClick={() => setActiveCategory('UiUx')}>UI/UX</button>
                        <button className={`filter-btn ${activeCategory === 'Branding' ? 'active' : ''}`} onClick={() => setActiveCategory('Branding')}>Branding</button>
                        <button className={`filter-btn ${activeCategory === 'Products' ? 'active' : ''}`} onClick={() => setActiveCategory('Products')}>Products</button>
                        <button className={`filter-btn ${activeCategory === 'App' ? 'active' : ''}`} onClick={() => setActiveCategory('App')}>App</button>
                        <button className={`filter-btn ${activeCategory === 'Website' ? 'active' : ''}`} onClick={() => setActiveCategory('Website')}>Website</button>
                    </div>

                    {/* CASE STUDY CARDS */}
                    <div className="jobs">
                        {/* Dynamically show filtered projects as cards */}
                        {filteredProjects.slice(0, 3).map((project) => (
                            <div key={project.id} className="job-card glass">
                                <div className="job-top">
                                    <h4>{project.title}</h4>
                                    <span className="close">×</span>
                                </div>

                                <div className="job-meta">
                                    <span>{getCategoryLabel(project.category)}</span>
                                    <span>{project.duration}</span>
                                    <span>{project.results}</span>
                                </div>

                                <div className="location">
                                    {project.subtitle}
                                </div>

                                <div className="match">
                                    <div className="circle">
                                        <span>{Math.floor(Math.random() * 30) + 70}%</span>
                                    </div>
                                    <p>Success Rate</p>
                                </div>

                                {/* bottom badges */}
                                <div className="job-badges">
                                    <span>{getCategoryLabel(project.category)}</span>
                                    <span>Client: {project.client}</span>
                                    <span>Innovation</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </section>

            {/* Success Stories Section - Updated to match the provided design */}
            <section className="wcp-recognition-section">
                {/* LEFT */}
                <div className="wcp-left">
                    <h1>Our Success Stories</h1>

                    <p>
                        We transform ideas into reality through innovative solutions and cutting-edge technology. Each project tells a story of challenges overcome and goals achieved.
                    </p>

                    {/* CURVE */}
                    <div className="wcp-curve-container">
                        <svg viewBox="0 0 900 220" className="wcp-curve">
                            <path
                                d="M15,160 C200,-100 350,300 500,150 C650,0 750,250 880,80"
                                fill="transparent"
                                stroke="rgba(255, 200, 0, 0.6)"
                                strokeWidth="3"
                                strokeDasharray="6 6"
                                className="wcp-curve-path"
                            />

                            {/* DOTS */}
                            {[
                                { x: 18, y: 155 },
                                { x: 220, y: 85 },
                                { x: 420, y: 185 },
                                { x: 650, y: 105 },
                                { x: 875, y: 80 }
                            ].map((dot, i) => (
                                <g key={i}>
                                    <circle cx={dot.x} cy={dot.y} r="6" className="wcp-dot" />
                                    <circle cx={dot.x} cy={dot.y} r="16" className="wcp-ring" />
                                </g>
                            ))}
                        </svg>

                        {/* FLOATING TEXTS */}
                        <div className="wcp-floating-text wcp-ft-1">
                            <h4>Client Brie</h4>
                            <p>Understanding Business</p>
                        </div>

                        <div className="wcp-floating-text wcp-ft-2">
                            <h4>Insights</h4>
                            <p>User & Market Research</p>
                        </div>

                        <div className="wcp-floating-text wcp-ft-3">
                            <h4>Solution</h4>
                            <p>Product Strategy</p>
                        </div>

                        <div className="wcp-floating-text wcp-ft-4">
                            <h4>Deliver</h4>
                            <p>Implementation</p>
                        </div>

                        <div className="wcp-floating-text wcp-ft-5">
                            <h4>Impact</h4>
                            <p> Business Growth</p>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="wcp-stats">
                        <div className="wcp-card">
                            <h3>{clientProjects.length}+</h3>
                            <p>Projects Completed</p>
                        </div>

                        <div className="wcp-card">
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>

                        <div className="wcp-card">
                            <h3>10+</h3>
                            <p>Industry Awards</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="wcp-right">
                    <div className="wcp-trophy">🏆</div>

                    <div className="wcp-right-cards">
                        <div className="wcp-card wcp-small">
                            <span>⭐</span>
                            <p>Excellence</p>
                        </div>

                        <div className="wcp-card wcp-small">
                            <span>🏅</span>
                            <p>Recognition</p>
                        </div>

                        <div className="wcp-card wcp-small">
                            <span>💎</span>
                            <p>Premium</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section - White BG */}
            <section className="wcp-projects-section" ref={containerRef}>
                <div className="wcp-projects-container">
                    <div className="wcp-section-header">
                        <h2 className="wcp-section-title">Featured Client Projects</h2>
                        <p className="wcp-section-subtitle">
                            Browse our portfolio of successful implementations across different domains
                        </p>
                    </div>

                    {/* Floating Control Buttons on Left Side */}
                    <div className="wcp-floating-controls">
                        <button className="wcp-floating-btn wcp-up-btn" onClick={goToPrevious} aria-label="Previous project">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                        <button className="wcp-floating-btn wcp-down-btn" onClick={goToNext} aria-label="Next project">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>

                    {/* Projects Slider - Static Layout with Content Change */}
                    <div className="wcp-projects-slider">
                        {filteredProjects.length > 0 && (
                            <div className="wcp-project-slide">
                                {/* Left Side - Static Image Container with White Background */}
                                <div className="wcp-slide-left">
                                    <div className="wcp-slide-image-container">
                                        <div className="wcp-image-white-bg">
                                            <img
                                                src={filteredProjects[currentProjectIndex].image}
                                                alt={filteredProjects[currentProjectIndex].title}
                                                className="wcp-slide-image"
                                            />
                                            <div className="wcp-image-footer">
                                                <div className="wcp-image-text">
                                                    <span className="wcp-image-title">Engloray</span>
                                                    <p className="wcp-image-description">{filteredProjects[currentProjectIndex].description}</p>
                                                </div>
                                                <span className="wcp-image-badge" style={{ backgroundColor: filteredProjects[currentProjectIndex].color }}>
                                                    {getCategoryLabel(filteredProjects[currentProjectIndex].category)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content with fade-in/fade-out effect */}
                                <div className="wcp-slide-right">
                                    <div className={`wcp-content-wrapper ${isFading ? 'fade-out' : 'fade-in'}`}>
                                        <h3 className="wcp-slide-title">{filteredProjects[currentProjectIndex].title}</h3>
                                        <p className="wcp-slide-subtitle">{filteredProjects[currentProjectIndex].subtitle}</p>
                                        <p className="wcp-slide-client">Client: {filteredProjects[currentProjectIndex].client}</p>

                                        <div className="wcp-slide-metrics">
                                            <div className="wcp-slide-metric">
                                                <span className="wcp-slide-metric-label">
                                                    <FontAwesomeIcon icon={faCalendarCheck} className="wcp-slide-metric-icon" />
                                                    Duration
                                                </span>
                                                <span className="wcp-slide-metric-value">{filteredProjects[currentProjectIndex].duration}</span>
                                            </div>
                                            <div className="wcp-slide-metric">
                                                <span className="wcp-slide-metric-label">
                                                    <FontAwesomeIcon icon={faTrophy} className="wcp-slide-metric-icon" />
                                                    Results
                                                </span>
                                                <span className="wcp-slide-metric-value-highlighter">{filteredProjects[currentProjectIndex].results}</span>
                                            </div>
                                        </div>

                                        <p className="wcp-slide-description">{filteredProjects[currentProjectIndex].description}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Marquee Infinity Scroll for Logos - Full Width */}
                    <div className="wcp-marquee-full-wrapper">
                        <div className="wcp-marquee-full-container"
                            ref={marqueeRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: 'grab' }}>
                            <div className="wcp-marquee-full-track">
                                {logoImages.map((logo, index) => (
                                    <div key={index} className="wcp-marquee-full-item">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="wcp-marquee-full-logo" />
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {logoImages.map((logo, index) => (
                                    <div key={`duplicate-${index}`} className="wcp-marquee-full-item">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="wcp-marquee-full-logo" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredProjects.length === 0 && (
                        <div className="wcp-empty-state">
                            <h3>No projects found in this category</h3>
                            <p>Try selecting a different category to view our client projects</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="wcp-testimonials-section">
                {/* TOP BADGE */}
                <div className="wcp-badge-wrapper">
                    <span className="wcp-line"></span>
                    <span className="wcp-badge">Testimonials</span>
                    <span className="wcp-line"></span>
                </div>

                {/* TITLE */}
                <h1 className="wcp-title">What our clients are saying</h1>
                <p className="wcp-subtitle">
                    Hear directly from our clients about their experience working with us
                </p>

                {/* CARDS CAROUSEL - 3 cards visible at a time */}
                <div className="wcp-testimonials-carousel">
                    <div className="wcp-cards-container">
                        {getVisibleTestimonials().map((testimonial, idx) => (
                            <div
                                key={`${testimonial.originalIndex}-${currentTestimonialIndex}`}
                                className="wcp-card testimonial-card"
                            >
                                {/* QUOTE ICON */}
                                <div className="wcp-quote">“</div>

                                <p className="wcp-card-text">{testimonial.text}</p>

                                <div className="wcp-user">
                                    <div className="wcp-user-icon">{testimonial.icon}</div>
                                    <div>
                                        <h4>{testimonial.author}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>

                                {/* PURPLE GRADIENT INSIDE CARD */}
                                <div className="wcp-card-gradient"></div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="wcp-testimonial-controls">
                        <button
                            className="wcp-nav-btn wcp-prev-btn"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <div className="wcp-testimonial-dots">
                            {clientTestimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`wcp-testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                                    onClick={() => handleTestimonialDotClick(index)}
                                    aria-label={`Go to testimonial set starting at ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="wcp-nav-btn wcp-next-btn"
                            onClick={nextTestimonial}
                            aria-label="Next testimonial"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </section>
            <MainPageSubFooter />
            <BackToTop />
        </div>
    );
};

export default WorksClientProjects;
