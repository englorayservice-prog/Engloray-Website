import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullseye,
    faChartLine,
    faBolt,
    faRocket,
    faLightbulb,
    faPalette,
    faCode,
    faMobileAlt,
    faLaptop,
    faGem,
    faLeaf,
    faHamburger,
    faBuilding,
    faFlask,
    faStethoscope,
    faGraduationCap,
    faRing,
    faBriefcase,
    faCrown,
    faTrophy,
    faUsers,
    faCalendarCheck,
    faStar,
    faQuoteLeft,
    faChevronDown,
    faChevronUp,
    faArrowRight,
    faAward,
    faMedal,
    faCertificate,
    faChevronLeft,
    faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
//uiux
import caseStudyLogoOne from '../../../assets/case study images/uiux/pavizham.jpg';
import caseStudyLogoTwo from '../../../assets/case study images/uiux/viaan.jpg';
//branding
import caseStudyLogoThree from '../../../assets/case study images/branding/isha bites.png';
import caseStudyLogoFour from '../../../assets/case study images/branding/malar.jpg';
//products
import caseStudyLogoFive from '../../../assets/case study images/products/amico.png';
import caseStudyLogoSix from '../../../assets/case study images/products/brandex.png';
//websites
import caseStudyLogoSeven from '../../../assets/case study images/websites/green park school.png';
import caseStudyLogoEight from '../../../assets/case study images/websites/say.jpg';
//application
import caseStudyLogoNine from '../../../assets/case study images/Application/aara.png';
import caseStudyLogoTen from '../../../assets/case study images/Application/orthopetic clinic.png';
import './WorksCaseStudies.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';
// Import the hero background image
import heroBackgroundImage from '../../../assets/download (29).jpeg'; // Update this path to your actual image

// Logo data for marquee - 15 logos
const logoImages = [
    caseStudyLogoOne,
    caseStudyLogoTwo,
    caseStudyLogoThree,
    caseStudyLogoFour,
    caseStudyLogoFive,
    caseStudyLogoSix,
    caseStudyLogoSeven,
    caseStudyLogoEight,
    caseStudyLogoNine,
    caseStudyLogoTen,
    caseStudyLogoOne,
    caseStudyLogoTwo,
    caseStudyLogoThree,
    caseStudyLogoFour,
    caseStudyLogoFive,
];

const WorksCaseStudies = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const marqueeRef = useRef(null);
    const studiesContainerRef = useRef(null);

    // Case study data
    const caseStudies = [
        {
            id: 1,
            title: "Pavizham Jewellery",
            subtitle: "Modernizing online shopping experience",
            category: "UiUx",
            client: "Pavizham Jewellers",
            duration: "1.5 Months",
            results: "+180% Sales Increase",
            description: "Complete redesign of an e-commerce platform focusing on user experience and conversion optimization.",
            image: caseStudyLogoOne,
            color: "#FF6B6B",
        },
        {
            id: 2,
            title: "Isha Bites",
            subtitle: "Building scalable Brands",
            category: "Branding",
            client: "Isha Bites",
            duration: "1.5 Months",
            results: "+95% User Engagement",
            description: "Development of full branding with real-time features and logo integration.",
            image: caseStudyLogoThree,
            color: "#4ECDC4",
        },
        {
            id: 3,
            title: "Amico food Products",
            subtitle: "creative Food Product Designs",
            category: "Products",
            client: "Amico",
            duration: "1.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive designs for the natural food product company.",
            image: caseStudyLogoFive,
            color: "#45B7D1",
        },
        {
            id: 4,
            title: "Viaan Enterprises",
            subtitle: "Multi-channel marketing strategy",
            category: "UiUx",
            client: "Viaan Enterprises",
            duration: "1 Months",
            results: "+150% Lead Generation",
            description: "Comprehensive enterprise campaign across social media, search, and email channels.",
            image: caseStudyLogoTwo,
            color: "#FF6B6B",
        },
        {
            id: 5,
            title: "Malar Herbs",
            subtitle: "Creating a herbal product using branding",
            category: "Branding",
            client: "Malar Herbal Products",
            duration: "1.5 Months",
            results: "+200% Operational Efficiency",
            description: "Enterprise branding platform for internal operations.",
            image: caseStudyLogoFour,
            color: "#4ECDC4",
        },
        {
            id: 6,
            title: "Brandex",
            subtitle: "products-driven decision making",
            category: "Products",
            client: "Brandex",
            duration: "1 Months",
            results: "+250% Insight Generation",
            description: "Creative Logos and Design for the product Company.",
            image: caseStudyLogoSix,
            color: "#45B7D1",
        },
        {
            id: 7,
            title: "Green Park School",
            subtitle: "Modernizing online school experience",
            category: "Website",
            client: "Green park school",
            duration: "2 Months",
            results: "+180% Digitalization",
            description: "Complete redesign of an erp platform focusing on user experience and conversion optimization.",
            image: caseStudyLogoSeven,
            color: "#3D0C41",
        },
        {
            id: 8,
            title: "Say Bridal Studio",
            subtitle: "Building scalable Brands",
            category: "Website",
            client: "Say bridals",
            duration: "1.5 Months",
            results: "+95% User Engagement",
            description: "Development of full website with real-time features and logo integration.",
            image: caseStudyLogoEight,
            color: "#3D0C41",
        },
        {
            id: 9,
            title: "Aara Labs",
            subtitle: "creative Lab application Designs",
            category: "App",
            client: "Aara Labs",
            duration: "2.5 Months",
            results: "+300% Productivity",
            description: "Created the Productive application for the medical testing lab .",
            image: caseStudyLogoNine,
            color: "#8B0000",
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
            image: caseStudyLogoTen,
            color: "#8B0000",
        },
    ];

    // Testimonials data - 5 testimonials with person icons
    const testimonials = [
        {
            id: 1,
            text: "Very clean and professional website design. ENGLORAY gave us a strong digital presence that suits our business.",
            name: "Pavizham jewellery",
            role: "Pavithra S",
            icon: "👨‍💼",
        },
        {
            id: 2,
            text: "ENGLORAY transformed our product packaging into a professional, market-ready design. The labels improved shelf visibility and customer confidence",
            name: "Amico",
            role: "Elango C",
            icon: "👨‍💼",
        },
        {
            id: 3,
            text: "ENGLORAY delivered herbal packaging that feels trustworthy and premium. Customers now clearly understand our product quality.",
            name: "Malar Herbs",
            role: "Malarvizhi S",
            icon: "👨‍💼",
        },
        {
            id: 4,
            text: "Exceptional service and creative solutions! ENGLORAY's team understood our vision perfectly and delivered beyond expectations.",
            name: "Viaan Enterprises",
            role: "Ramesh K",
            icon: "👨‍💼",
        },
        {
            id: 5,
            text: "The branding strategy created by ENGLORAY completely transformed our market presence. Highly recommended for any business looking to grow!",
            name: "Brandex",
            role: "Priya M",
            icon: "👨‍💼",
        },
    ];

    // Filter case studies by category
    const filteredStudies = activeCategory === 'all'
        ? caseStudies
        : caseStudies.filter(study => study.category === activeCategory);

    // Auto rotate case studies every 3 seconds with fade effect only for right side content
    useEffect(() => {
        if (filteredStudies.length === 0) return;

        const interval = setInterval(() => {
            setIsFading(true);
            setTimeout(() => {
                setCurrentStudyIndex((prevIndex) =>
                    prevIndex === filteredStudies.length - 1 ? 0 : prevIndex + 1
                );
                setIsFading(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [filteredStudies.length]);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentTestimonialIndex]);

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleTestimonialDotClick = (index) => {
        setCurrentTestimonialIndex(index);
    };

    // Get visible testimonials (3 cards at a time based on current index)
    const getVisibleTestimonials = () => {
        const visible = [];
        const total = testimonials.length;

        // Show 3 cards starting from current index
        for (let i = 0; i < 3; i++) {
            let index = (currentTestimonialIndex + i) % total;
            visible.push({ ...testimonials[index], originalIndex: index });
        }

        return visible;
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

    // Drag to scroll functionality
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

    // Control functions for navigating case studies
    const goToPrevious = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentStudyIndex((prevIndex) =>
                prevIndex === 0 ? filteredStudies.length - 1 : prevIndex - 1
            );
            setIsFading(false);
        }, 300);
    };

    const goToNext = () => {
        setIsFading(true);
        setTimeout(() => {
            setCurrentStudyIndex((prevIndex) =>
                prevIndex === filteredStudies.length - 1 ? 0 : prevIndex + 1
            );
            setIsFading(false);
        }, 300);
    };

    return (
        <div className="wcs-container">
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
                        <span className="badge">Case Studies</span>
                    </div>

                    {/* LEFT CONTENT */}
                    <div className="hero-left">
                        <h1>
                            OUR <br /> Featured Works
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
                        {/* FIRST CARD - Active Projects with adjusted numbers */}
                        <div className="glass card small">
                            <h4>Active Projects</h4>
                            <div className="stats">
                                <span className="stat-left">257</span>
                                <span>413</span>
                                <span className="active stat-right">98</span>
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
                                <h4>Case Studies</h4>
                                <div className="case-studies-content">
                                    <p className="big centered-number">128</p>
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
                        <span>This month</span>
                        <span>All Industries</span>
                        <span>High Impact</span>
                        <span>Design + Development</span>
                        <span>Featured</span>
                    </div>

                    {/* CASE STUDY CARDS */}
                    <div className="jobs">
                        {/* Card 1: Brand Identity Design - UNCHANGED */}
                        <div key={1} className="job-card glass">
                            <div className="job-top">
                                <h4>Brand Identity Design</h4>
                                <span className="close">×</span>
                            </div>

                            <div className="job-meta">
                                <span>Client Project</span>
                                <span>6 Weeks</span>
                                <span>UI/UX</span>
                            </div>

                            <div className="location">
                                Fintech · Global Product
                            </div>

                            <div className="match">
                                <div className="circle">
                                    <span>79%</span>
                                </div>
                                <p>Success Rate</p>
                            </div>

                            {/* bottom badges */}
                            <div className="job-badges">
                                <span>Branding</span>
                                <span>Figma</span>
                                <span>UX Strategy</span>
                                <span>Research</span>
                                <span>Design System</span>
                            </div>
                        </div>

                        {/* Card 2: WEB DEVELOPMENT - UPDATED */}
                        <div key={2} className="job-card glass">
                            <div className="job-top">
                                <h4>Web Development</h4>
                                <span className="close">×</span>
                            </div>

                            <div className="job-meta">
                                <span>Enterprise Project</span>
                                <span>8 Weeks</span>
                                <span>Full Stack</span>
                            </div>

                            <div className="location">
                                E-Commerce · Scalable Platform
                            </div>

                            <div className="match">
                                <div className="circle">
                                    <span>86%</span>
                                </div>
                                <p>Performance Boost</p>
                            </div>

                            {/* bottom badges */}
                            <div className="job-badges">
                                <span>React</span>
                                <span>Node.js</span>
                                <span>MongoDB</span>
                                <span>REST API</span>
                                <span>Cloud</span>
                            </div>
                        </div>

                        {/* Card 3: DATA ANALYTICS - UPDATED */}
                        <div key={3} className="job-card glass">
                            <div className="job-top">
                                <h4>Data Analytics</h4>
                                <span className="close">×</span>
                            </div>

                            <div className="job-meta">
                                <span>Analytics Project</span>
                                <span>10 Weeks</span>
                                <span>Data Science</span>
                            </div>

                            <div className="location">
                                Business Intelligence · Insights
                            </div>

                            <div className="match">
                                <div className="circle">
                                    <span>92%</span>
                                </div>
                                <p>Accuracy Rate</p>
                            </div>

                            {/* bottom badges */}
                            <div className="job-badges">
                                <span>Python</span>
                                <span>SQL</span>
                                <span>Tableau</span>
                                <span>Machine Learning</span>
                                <span>Predictive Models</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* Success Stories Section - Updated to match the provided design */}
            <section className="wcs-recognition-section">
                {/* LEFT */}
                <div className="wcs-left">
                    <h1>Our Success Stories</h1>

                    <p>
                        We transform ideas into reality through innovative solutions and cutting-edge technology. Each project tells a story of challenges overcome and goals achieved.
                    </p>

                    {/* CURVE */}
                    <div className="wcs-curve-container">
                        <svg viewBox="0 0 900 220" className="wcs-curve">
                            <path
                                d="M15,160 C200,-100 350,300 500,150 C650,0 750,250 880,80"
                                fill="transparent"
                                stroke="rgba(255, 200, 0, 0.6)"
                                strokeWidth="3"
                                strokeDasharray="6 6"
                                className="wcs-curve-path"
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
                                    <circle cx={dot.x} cy={dot.y} r="6" className="wcs-dot" />
                                    <circle cx={dot.x} cy={dot.y} r="16" className="wcs-ring" />
                                </g>
                            ))}
                        </svg>

                        {/* FLOATING TEXTS - Added 5th floating text */}
                        <div className="wcs-floating-text wcs-ft-1">
                            <h4>Discovery</h4>
                            <p>User Research</p>
                        </div>

                        <div className="wcs-floating-text wcs-ft-2">
                            <h4>Strategy</h4>
                            <p>Brand Direction</p>
                        </div>

                        <div className="wcs-floating-text wcs-ft-3">
                            <h4>Execution</h4>
                            <p>Design System</p>
                        </div>

                        <div className="wcs-floating-text wcs-ft-4">
                            <h4>Launch</h4>
                            <p>Go Live</p>
                        </div>

                        {/* NEW 5TH FLOATING TEXT */}
                        <div className="wcs-floating-text wcs-ft-5">
                            <h4>Growth</h4>
                            <p>Scale & Optimize</p>
                        </div>
                    </div>

                    {/* STATS */}
                    <div className="wcs-stats">
                        <div className="wcs-card">
                            <h3>150+</h3>
                            <p>Projects Completed</p>
                        </div>

                        <div className="wcs-card">
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>

                        <div className="wcs-card">
                            <h3>40+</h3>
                            <p>Industry Awards</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="wcs-right">
                    <div className="wcs-trophy">🏆</div>

                    <div className="wcs-right-cards">
                        <div className="wcs-card wcs-small">
                            <span>⭐</span>
                            <p>Excellence</p>
                        </div>

                        <div className="wcs-card wcs-small">
                            <span>🏅</span>
                            <p>Recognition</p>
                        </div>

                        <div className="wcs-card wcs-small">
                            <span>💎</span>
                            <p>Premium</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies Section - White BG */}
            <section className="wcs-studies-section" ref={studiesContainerRef}>
                <div className="wcs-studies-container">
                    <div className="wcs-section-header">
                        <h2 className="wcs-section-title">Featured Case Studies</h2>
                        <p className="wcs-section-subtitle">
                            Browse our portfolio of successful implementations across different domains
                        </p>
                    </div>

                    {/* Floating Control Buttons on Left Side */}
                    <div className="wcs-floating-controls">
                        <button className="wcs-floating-btn wcs-up-btn" onClick={goToPrevious} aria-label="Previous case study">
                            <FontAwesomeIcon icon={faChevronUp} />
                        </button>
                        <button className="wcs-floating-btn wcs-down-btn" onClick={goToNext} aria-label="Next case study">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </button>
                    </div>

                    {/* Case Studies Slider - Static Layout with Content Change */}
                    <div className="wcs-studies-slider">
                        {filteredStudies.length > 0 && (
                            <div className="wcs-study-slide">
                                {/* Left Side - Static Image Container with White Background */}
                                <div className="wcs-slide-left">
                                    <div className="wcs-slide-image-container">
                                        <div className="wcs-image-white-bg">
                                            <img
                                                src={filteredStudies[currentStudyIndex].image}
                                                alt={filteredStudies[currentStudyIndex].title}
                                                className="wcs-slide-image"
                                            />
                                            <div className="wcs-image-footer">
                                                <div className="wcs-image-text">
                                                    <span className="wcs-image-title">Engloray</span>
                                                    <p className="wcs-image-description">{filteredStudies[currentStudyIndex].description}</p>
                                                </div>
                                                <span className="wcs-image-badge" style={{ backgroundColor: filteredStudies[currentStudyIndex].color }}>
                                                    {getCategoryLabel(filteredStudies[currentStudyIndex].category)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content with fade-in/fade-out effect */}
                                <div className="wcs-slide-right">
                                    <div className={`wcs-content-wrapper ${isFading ? 'fade-out' : 'fade-in'}`}>
                                        <h3 className="wcs-slide-title">{filteredStudies[currentStudyIndex].title}</h3>
                                        <p className="wcs-slide-subtitle">{filteredStudies[currentStudyIndex].subtitle}</p>
                                        <p className="wcs-slide-client">Client: {filteredStudies[currentStudyIndex].client}</p>

                                        <div className="wcs-slide-metrics">
                                            <div className="wcs-slide-metric">
                                                <span className="wcs-slide-metric-label">
                                                    <FontAwesomeIcon icon={faCalendarCheck} className="wcs-slide-metric-icon" />
                                                    Duration
                                                </span>
                                                <span className="wcs-slide-metric-value">{filteredStudies[currentStudyIndex].duration}</span>
                                            </div>
                                            <div className="wcs-slide-metric">
                                                <span className="wcs-slide-metric-label">
                                                    <FontAwesomeIcon icon={faTrophy} className="wcs-slide-metric-icon" />
                                                    Results
                                                </span>
                                                <span className="wcs-slide-metric-value-highlighter">{filteredStudies[currentStudyIndex].results}</span>
                                            </div>
                                        </div>

                                        <p className="wcs-slide-description">{filteredStudies[currentStudyIndex].description}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* No Dot Indicators - Removed */}
                    </div>

                    {/* Marquee Infinity Scroll for Logos - Full Width */}
                    <div className="wcs-marquee-full-wrapper">
                        <div className="wcs-marquee-full-container"
                            ref={marqueeRef}
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                            style={{ cursor: 'grab' }}>
                            <div className="wcs-marquee-full-track">
                                {logoImages.map((logo, index) => (
                                    <div key={index} className="wcs-marquee-full-item">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="wcs-marquee-full-logo" />
                                    </div>
                                ))}
                                {/* Duplicate for seamless loop */}
                                {logoImages.map((logo, index) => (
                                    <div key={`duplicate-${index}`} className="wcs-marquee-full-item">
                                        <img src={logo} alt={`Logo ${index + 1}`} className="wcs-marquee-full-logo" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Empty State */}
                    {filteredStudies.length === 0 && (
                        <div className="wcs-empty-state">
                            <h3>No projects found in this category</h3>
                            <p>Try selecting a different category to view our case studies</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="wcs-testimonials-section">
                {/* TOP BADGE */}
                <div className="wcs-badge-wrapper">
                    <span className="wcs-line"></span>
                    <span className="wcs-badge">Testimonials</span>
                    <span className="wcs-line"></span>
                </div>

                {/* TITLE */}
                <h1 className="wcs-title">What our clients are saying</h1>
                <p className="wcs-subtitle">
                    Hear directly from our clients about their experience working with us
                </p>

                {/* CARDS CAROUSEL - 3 cards visible at a time */}
                <div className="wcs-testimonials-carousel">
                    <div className="wcs-cards-container">
                        {getVisibleTestimonials().map((testimonial, idx) => (
                            <div
                                key={`${testimonial.originalIndex}-${currentTestimonialIndex}`}
                                className="wcs-card testimonial-card"
                            >
                                {/* QUOTE ICON */}
                                <div className="wcs-quote">“</div>

                                <p className="wcs-card-text">{testimonial.text}</p>

                                <div className="wcs-user">
                                    <div className="wcs-user-icon">{testimonial.icon}</div>
                                    <div>
                                        <h4>{testimonial.name}</h4>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>

                                {/* PURPLE GRADIENT INSIDE CARD */}
                                <div className="wcs-card-gradient"></div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="wcs-testimonial-controls">
                        <button
                            className="wcs-nav-btn wcs-prev-btn"
                            onClick={prevTestimonial}
                            aria-label="Previous testimonial"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <div className="wcs-testimonial-dots">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    className={`wcs-testimonial-dot ${index === currentTestimonialIndex ? 'active' : ''}`}
                                    onClick={() => handleTestimonialDotClick(index)}
                                    aria-label={`Go to testimonial set starting at ${index + 1}`}
                                />
                            ))}
                        </div>
                        <button
                            className="wcs-nav-btn wcs-next-btn"
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

export default WorksCaseStudies;
