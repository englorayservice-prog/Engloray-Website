import React, { useState, useRef, useEffect } from 'react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import characterImg from '../../../assets/CharacIMG.jfif';
import {
    faLaptopCode,
    faPalette,
    faRobot,

    faCalendarAlt,
    faUser,
    faTrophy,
    faStar,
    faChalkboardTeacher,
    faHandshake,
    faLightbulb,
    faCheckCircle,
    faCertificate,
    faGlobe,
    faBriefcase,
    faNetworkWired,
    faCode,
    faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

import './WorkshopsStyles.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

// Import staff specialty images
import graphicDesignImg from '../../../assets/graphic_design.png';
import newGraphicDesignImg from '../../../assets/new_graphic_design.png';
import uiUxDesignImg from '../../../assets/ui_ux.png';
import aiDesignImg from '../../../assets/AiImage.jpeg';
import brandingImg from '../../../assets/brandingImage.jpeg';
import mernImg from '../../../assets/MernStack.jfif';
import javaImg from '../../../assets/JavaFull.jfif';
import aiMLImg from '../../../assets/bg_ai_ml.png';
import drawingImg from '../../../assets/drawing.png';
import cartoonMale1 from '../../../assets/cartoon_male_1.png';
import cartoonMale2 from '../../../assets/cartoon_male_2.png';
import cartoonMale3 from '../../../assets/cartoon_male_3.png';
import cartoonMale4 from '../../../assets/cartoon_male_4.png';
import cartoonFemale1 from '../../../assets/cartoon_female_1.png';
import cartoonFemale2 from '../../../assets/cartoon_female_2.png';
import cartoonFemale3 from '../../../assets/cartoon_female_3.png';
import cartoonFemale4 from '../../../assets/cartoon_female_4.png';

import typographyBackground from '../../../assets/typography_background.png';
import pixarCharacters from '../../../assets/pixar_characters.png';
import pixarLeft from '../../../assets/pixar_left.png';
import pixarRight from '../../../assets/pixar_right.png';
import SEOHead from '../../../seo/SEOHead';
import SchemaMarkup from '../../../seo/SchemaMarkup';




const getWorkshopCategory = (workshop) => {
    if (!workshop) return "TECH WORKSHOP";
    const title = workshop.title.toLowerCase();
    if (title.includes("graphic design") || title.includes("design masterclass")) {
        return "GRAPHIC DESIGN";
    }
    if (title.includes("javascript full stack") || title.includes("java full stack")) {
        return "FULL-STACK JAVASCRIPT";
    }
    if (title.includes("mern stack")) {
        return "MERN STACK DEV";
    }
    if (title.includes("artificial intelligence") || title.includes("ai & ml") || title.includes("machine learning")) {
        return "AI & MACHINE LEARNING";
    }
    if (title.includes("ui/ux")) {
        return "UI/UX DESIGN";
    }
    if (workshop.theme) {
        return workshop.theme.toUpperCase();
    }
    return "TECH WORKSHOP";
};

const WorkshopsPage = () => {
    const [activeTab, setActiveTab] = useState('upcoming');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        workshop: '',
        message: ''
    });

    // Color palette using the existing primary color
    const primaryColor = '#FF6B6B';
    const secondaryColor = '#4ECDC4';
    const accentColor = '#FFD166';
    const darkColor = '#2D3047';
    const lightColor = '#F7FFF7';

    // Create a ref for the contact section
    const contactSectionRef = useRef(null);

    // Workshops Data with Font Awesome icons
    const workshopsData = {
        conducted: [
            {
                id: 1,
                title: "Graphic Design Fundamentals workshop",
                date: "2023",
                duration: "3 hours",
                participants: "150+",
                instructor: "Surya",
                status: "Completed",
                theme: "Graphic Design",
                color: primaryColor,
                icon: faPalette,
                img: newGraphicDesignImg,
                iconColor: '#FF6B6B',
                description: "Comprehensive workshop covering Basic designs, typography and color theory."
            },
            {
                id: 2,
                title: "AI Tools for graphic design workshop",
                date: "2024",
                duration: "2 hours",
                participants: "200+",
                instructor: "Ashwin Kumar",
                status: "Completed",
                theme: "AI Tools",
                color: secondaryColor,
                icon: faRobot,
                img: aiDesignImg,
                iconColor: '#4ECDC4',
                description: "Hands-on workshop on modern AI Tools with Graphic design"
            },
            {
                id: 3,
                title: "UI/UX Basics Workshop",
                date: "2024",
                duration: "4 hours",
                participants: "120+",
                instructor: "Priya Nanadhini",
                status: "Completed",
                theme: "UI/UX",
                color: accentColor,
                icon: faLaptopCode,
                img: uiUxDesignImg,
                iconColor: '#FFD166',
                description: "Learn UI vs Ux clarity and wireframing basics with ui desing overview."
            },
            {
                id: 4,
                title: "Website & App ui design workshop",
                date: "2025",
                duration: "2 Days",
                participants: "180+",
                instructor: "Priya Nandhini",
                status: "Completed",
                theme: "Web design",
                color: darkColor,
                icon: faGlobe,
                img: brandingImg,
                iconColor: '#FF6B6B',
                description: "webiste Ui design with responsive designs and consistency"
            }
        ],
        upcoming: [
            {
                id: 5,
                title: "Graphic Design Masterclass",
                date: "Apply now",
                duration: "upto 3 hrs",
                participants: "100",
                instructor: "Surya",
                status: "Upcoming",
                theme: "design",
                img: graphicDesignImg,
                color: lightColor,
                icon: faPalette,
                iconColor: '#4ECDC4',
                description: "Learn Graphic design, UI design, and Branding",
                seats: "40",
            },
            {
                id: 6,
                title: "JavaScript Full Stack Development",
                date: "Apply now",
                duration: "upto 5 hrs",
                participants: "80",
                instructor: "Foujaan J S",
                status: "Upcoming",
                theme: "programming",
                img: javaImg,
                color: primaryColor,
                icon: faCode,
                iconColor: '#FFD166',
                description: "Master JavaScript, Node.js, and modern Full-Stack web development",
                seats: "25",
            },
            {
                id: 7,
                title: "MERN Stack Web Development",
                date: "Apply now",
                duration: "upto 6 hrs",
                participants: "60",
                instructor: "Priya Nandhini",
                status: "Upcoming",
                theme: "development",
                img: mernImg,
                color: secondaryColor,
                icon: faLaptopCode,
                iconColor: '#4ECDC4',
                description: "Master MongoDB, Express, React, and Node.js in this hands-on workshop",
                seats: "15",
            },
            {
                id: 8,
                title: "Artificial Intelligence & ML",
                date: "Apply now",
                duration: "upto 4 hrs",
                participants: "120",
                instructor: "Ashwin Kumar",
                status: "Upcoming",
                theme: "AI",
                img: aiMLImg,
                color: accentColor,
                icon: faRobot,
                iconColor: '#FF6B6B',
                description: "Dive deep into AI concepts and machine learning algorithms",
                seats: "30",
            }
        ]
    };

    // Workshop Staff with Font Awesome icons
    const workshopStaff = [
        {
            id: 1,
            name: "Surya",
            role: "Sr Graphic Designer",
            workshops: "5+",
            experience: "2 Years",
            specialization: ["Graphic design", "branding", "logo desgin"],
            avatar: "SJ",
            avatarImg: cartoonMale1,
            color: primaryColor,
            icon: faPalette,
            iconColor: '#FF6B6B',
            img: graphicDesignImg,
            bio: "Senior graphic designer since the company started",
            rating: 4.9
        },
        {
            id: 2,
            name: "Priya Nandhini",
            role: "Ui/Ux designer",
            workshops: "3+",
            experience: "2 Years",
            specialization: ["UI design", "Wireframing", "UX design"],
            avatar: "PN",
            avatarImg: cartoonFemale2,
            color: primaryColor,
            icon: faLaptopCode,
            iconColor: '#4ECDC4',
            img: uiUxDesignImg,
            bio: "Built scalable UI's for more than 10+ companies",
            rating: 4.8
        },
        {
            id: 3,
            name: "Ashwin Kumar",
            role: "AI design Tools",
            workshops: "3+",
            experience: "2 Years",
            specialization: ["AI Tools", "Ux designs", "AI Usage"],
            avatar: "AK",
            avatarImg: cartoonMale2,
            color: primaryColor,
            icon: faRobot,
            iconColor: '#FFD166',
            img: aiDesignImg,
            bio: "Award-winner with focus on user-centered AI tools",
            rating: 4.9
        },
        {
            id: 4,
            name: "Stella",
            role: "Branding & visual identity",
            workshops: "6+",
            experience: "2 Years",
            specialization: ["Brand stratergy", "Typography", "project branding"],
            avatar: "ST",
            avatarImg: cartoonFemale1,
            color: primaryColor,
            icon: faCertificate,
            iconColor: '#FF6B6B',
            img: brandingImg,
            bio: "Certified branding expert with enterprise deployment experience",
            rating: 4.7
        },
        {
            id: 5,
            name: "Gowtham",
            role: "portfolio & career growth",
            workshops: "5+",
            experience: "2 Years",
            specialization: ["portfolio structure", "freelance", "interview preperations"],
            avatar: "GM",
            avatarImg: cartoonMale3,
            color: primaryColor,
            icon: faBriefcase,
            iconColor: '#4ECDC4',
            img: graphicDesignImg,
            bio: "Published 10+ apps on App Store and Google Play",
            rating: 4.8
        },
        {
            id: 6,
            name: "Foujaan",
            role: "Full Stack Developer",
            workshops: "4+",
            experience: "2 Years",
            specialization: ["React & Node.js", "Database design", "System Architecture"],
            avatar: "FJ",
            avatarImg: cartoonMale4,
            color: primaryColor,
            icon: faCode,
            iconColor: '#FFD166',
            img: javaImg,
            bio: "Expert full stack engineer specializing in web applications",
            rating: 4.8
        },
        {
            id: 7,
            name: "Sowmya",
            role: "Drawing Class Instructor",
            workshops: "5+",
            experience: "2 Years",
            specialization: ["Pencil Drawing", "Oil Painting", "Creative Art"],
            avatar: "SY",
            avatarImg: cartoonFemale4,
            color: primaryColor,
            icon: faPalette,
            iconColor: '#4ECDC4',
            img: drawingImg,
            bio: "Experienced art educator passionate about nurturing creativity",
            rating: 4.9
        }
    ];

    // Awards & Recognition with Font Awesome icons
    const awards = [
        {
            id: 1,
            title: "Best Workshop Series 2023",
            organization: "Tech Education Awards",
            year: "2023",
            icon: faTrophy,
            iconColor: '#FFD166',
            color: primaryColor,
            description: "Recognized for outstanding workshop content and delivery"
        },
        {
            id: 2,
            title: "Excellence in Tech Education",
            organization: "Global Learning Summit",
            year: "2024",
            icon: faStar,
            iconColor: '#FF6B6B',
            color: primaryColor,
            description: "Award for innovative teaching methodologies"
        },
        {
            id: 3,
            title: "Topest Rated Instructor",
            organization: "Student Choice Awards",
            year: "2024",
            icon: faChalkboardTeacher,
            iconColor: '#4ECDC4',
            color: primaryColor,
            description: "Highest student satisfaction ratings"
        },
        {
            id: 4,
            title: "Industry Partnership Award",
            organization: "Tech Industry Council",
            year: "2025",
            icon: faHandshake,
            iconColor: '#FFD166',
            color: primaryColor,
            description: "For bridging industry-academia gap"
        },
        {
            id: 5,
            title: "Innovation in Curriculum",
            organization: "Education Innovation Forum",
            year: "2025",
            icon: faLightbulb,
            iconColor: '#FF6B6B',
            color: primaryColor,
            description: "Cutting-edge workshop content development"
        },
        {
            id: 6,
            title: "Allover Student Catcher",
            organization: "Innovation Enterprises Forum",
            year: "2025",
            icon: faUser,
            iconColor: '#6b97ffff',
            color: primaryColor,
            description: "Gathered more students all over the area"
        }
    ];
    // Workshop Reviews
    const reviews = [
        {
            id: 1,
            name: "Janani S",
            company: "graphic design Student",
            rating: 5,
            workshop: "Graphic design fundamentals workshop",
            review: "The workshop transformed my understanding of graphic design teaching style is exceptional!",
            date: "2023",
            avatar: cartoonFemale1,
            bgColor: "#c62a6a" // Vivid Pink
        },
        {
            id: 2,
            name: "Harini R",
            company: "AI student",
            rating: 5,
            workshop: "AI Tools for graphic design workshop",
            review: "Hands-on approach helped me build a real project with real time entities helps me more!",
            date: "2024",
            avatar: cartoonFemale2,
            bgColor: "#1565c0" // Vivid Blue
        },
        {
            id: 3,
            name: "Kavin S",
            company: "UI/UX design Student",
            rating: 5,
            workshop: "UI/UX basics Workshop",
            review: "From beginner to confident UI designer in 2 days.Their insights were invaluable.",
            date: "2024",
            avatar: cartoonMale1,
            bgColor: "#00796b" // Vivid Teal
        },
        {
            id: 4,
            name: "Lokesh M",
            company: "graphic & ui/ux student.",
            rating: 4,
            workshop: "Ui/Ux basics workshop",
            review: "Practical knowledge that I applied immediately at work. Excellent workshop!",
            date: "2024",
            avatar: cartoonMale2,
            bgColor: "#5c35b5" // Vivid Indigo
        },
        {
            id: 5,
            name: "Mukesh K",
            company: "python student.",
            rating: 4,
            workshop: "AI Tools for graphic design workshop",
            review: "The workshop which helped me to understand more about the ai concepts!",
            date: "2024",
            avatar: cartoonMale3,
            bgColor: "#e65100" // Vivid Orange
        },
        {
            id: 6,
            name: "Gowshik k",
            company: "graphic design student.",
            rating: 4,
            workshop: "Graphic design fundamentals workshop",
            review: " knowledge that I gained from worshop is useful!",
            date: "2024",
            avatar: cartoonFemale3,
            bgColor: "#6a1b9a" // Vivid Purple
        }
    ];
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            workshopName: formData.workshop,
            message: formData.message
        };

        try {
            console.log("Workshop Payload:", payload);

            const response = await fetch(
                "https://localhost:8081/api/workshopform/submit",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                const err = await response.text();
                throw new Error(err);
            }

            alert("Workshop registration successful!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                workshop: "",
                message: ""
            });

        } catch (error) {
            alert("Submission failed: " + error.message);
        }
    };

    // Function to scroll to contact section
    const scrollToContactSection = (workshopTitle) => {
        // Set the selected workshop in the form
        setFormData(prev => ({
            ...prev,
            workshop: workshopTitle
        }));

        // Scroll to the contact section
        if (contactSectionRef.current) {
            contactSectionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    // Infinite Loop Logic for Reviews
    const [activeReviewIndex, setActiveReviewIndex] = useState(reviews.length); // Start at first card of middle set
    const [isTransitioning, setIsTransitioning] = useState(true);
    const isPausedRef = useRef(false);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPausedRef.current) {
                handleNext();
            }
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        setIsTransitioning(true);
        setActiveReviewIndex(prev => prev + 1);
    };

    const handleTransitionEnd = () => {
        // If we've scrolled past the end of the middle set (reviews.length * 2) 
        // or before the beginning (reviews.length - 1), snap to middle without transition
        if (activeReviewIndex >= reviews.length * 2) {
            setIsTransitioning(false);
            setActiveReviewIndex(activeReviewIndex - reviews.length);
        } else if (activeReviewIndex < reviews.length) {
            setIsTransitioning(false);
            setActiveReviewIndex(activeReviewIndex + reviews.length);
        }
    };

    // Cloned reviews for seamless loop (triple the list: [Set1, Set2, Set3])
    const extendedReviews = [...reviews, ...reviews, ...reviews];

    return (
        <div>
            <SEOHead pageKey="/workshopsPage" />
            <SchemaMarkup pageKey="/workshopsPage" />
            <TopNavBar />
            <TwoLineNavbar />
            <div className="wsp-page">
                {/* Hero Header Section */}
                <header className="wsp-header-redesign">
                    <div className="wsp-header-container">

                        <div className="wsp-hero-grid">
                            
                            {/* Left Widget Column */}
                            <div className="wsp-hero-col wsp-hero-left-col">
                                <div className="wsp-hero-card wsp-card-pixar-left">
                                    <div className="wsp-hero-card-img-wrap">
                                        <img src={pixarLeft} alt="Developer Mentor" className="wsp-hero-card-img" />
                                    </div>
                                    <div className="wsp-wave-bar-custom">
                                        <div className="wsp-wave-pulse-icon">
                                            <FontAwesomeIcon icon={faTrophy} />
                                        </div>
                                        <p className="wsp-wave-text">
                                            Join our interactive workshops led by industry experts. Gain practical skills and accelerate your career.
                                        </p>
                                    </div>
                                </div>
                                <div className="wsp-audience-row">
                                    <div className="wsp-stacked-avatars">
                                        <img src={cartoonFemale1} alt="Participant" />
                                        <img src={cartoonMale1} alt="Participant" />
                                        <img src={cartoonFemale2} alt="Participant" />
                                        <img src={cartoonMale2} alt="Participant" />
                                    </div>
                                    <div className="wsp-audience-text">
                                        <span className="wsp-aud-count">5000+ Trained Participants</span>
                                        <span className="wsp-aud-sub">100+ Expert Mentors • 50+ Workshops</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Center Headline / CTA / Banner Column */}
                            <div className="wsp-hero-col wsp-hero-center-col">
                                <h1 className="wsp-title wsp-gradient-text-redesign">WORKSHOPS</h1>
                                
                                <p className="wsp-hero-center-desc">
                                    Join our interactive workshops led by industry experts. Gain practical skills, work on real projects, and accelerate your career.
                                </p>
                                
                                <div className="wsp-play-cta-wrapper" onClick={() => scrollToContactSection('General Enrollment')}>
                                    <div className="wsp-play-btn-black">
                                        <div className="wsp-play-arrow"></div>
                                    </div>
                                    <div className="wsp-play-btn-purple">
                                        Explore Our Workshops
                                    </div>
                                </div>

                                <div className="wsp-hero-banner-container">
                                    {/* Dark background block with repeating text */}
                                    <div className="wsp-hero-banner-bg" style={{ backgroundImage: `url(${typographyBackground})` }}></div>
                                    {/* Transparent character image overlaying it */}
                                    <img src={pixarCharacters} alt="Workshops Pixar Characters" className="wsp-hero-banner-char-img" />
                                    <div className="wsp-banner-floating-badge">
                                        <FontAwesomeIcon icon={faCertificate} className="wsp-badge-cert-icon" />
                                        <span>Global Certification • 15+ Cities Covered • Earn industry-recognized certs</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right Widget Column */}
                            <div className="wsp-hero-col wsp-hero-right-col">
                                <div className="wsp-hero-card wsp-card-pixar-right">
                                    <div className="wsp-hero-card-img-wrap">
                                        <img src={pixarRight} alt="Designer Student" className="wsp-hero-card-img" />
                                    </div>
                                    <div className="wsp-desc-card-custom">
                                        <div className="wsp-desc-icon-wrap">
                                            <FontAwesomeIcon icon={faLaptopCode} />
                                        </div>
                                        <p className="wsp-desc-text">
                                            Work on real projects, build a standout portfolio, and prepare for top MNC placements.
                                        </p>
                                    </div>
                                </div>
                                <div className="wsp-tech-features-row">
                                    <div className="wsp-tech-icons">
                                        <FontAwesomeIcon icon={faLaptopCode} title="React & JS" />
                                        <FontAwesomeIcon icon={faPalette} title="UI/UX & Design" />
                                        <FontAwesomeIcon icon={faCode} title="Java & Fullstack" />
                                    </div>
                                    <div className="wsp-tech-features-text">
                                        <span className="wsp-tf-bold">98% Satisfaction Rate</span>
                                        <span className="wsp-tf-sub">100% Placement Assistance</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                        {/* Logos Wrapper Row */}
                        <div className="wsp-header-logos-wrapper-redesign">
                            {/* Extra badges visible on screens > 1400px */}
                            <div className="wsp-logo-placeholder-redesign wsp-header-logos-extra-badge left-badge">
                                <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#10b981' }}>
                                    <FontAwesomeIcon icon={faCheckCircle} />
                                </div>
                                <div className="wsp-logo-text-wrap">
                                    <span className="wsp-logo-title">100% Practical Labs</span>
                                    <span className="wsp-logo-sub">Hands-On Focus</span>
                                </div>
                            </div>

                            <div className="wsp-header-logos-redesign">
                                <div className="wsp-logo-placeholder-redesign">
                                    <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#2563eb' }}>
                                        <FontAwesomeIcon icon={faNetworkWired} />
                                    </div>
                                    <div className="wsp-logo-text-wrap">
                                        <span className="wsp-logo-title">Hired by Top MNC</span>
                                        <span className="wsp-logo-sub">Partner Network</span>
                                    </div>
                                </div>
                                <div className="wsp-logo-placeholder-redesign">
                                    <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#ea580c' }}>
                                        <FontAwesomeIcon icon={faChalkboardTeacher} />
                                    </div>
                                    <div className="wsp-logo-text-wrap">
                                        <span className="wsp-logo-title">1:1 Mentorship</span>
                                        <span className="wsp-logo-sub">Expert Guidance</span>
                                    </div>
                                </div>
                                <div className="wsp-logo-placeholder-redesign">
                                    <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#16a34a' }}>
                                        <FontAwesomeIcon icon={faLaptopCode} />
                                    </div>
                                    <div className="wsp-logo-text-wrap">
                                        <span className="wsp-logo-title">Project-Based Learning</span>
                                        <span className="wsp-logo-sub">Real-World Apps</span>
                                    </div>
                                </div>
                                <div className="wsp-logo-placeholder-redesign">
                                    <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#7c3aed' }}>
                                        <FontAwesomeIcon icon={faLayerGroup} />
                                    </div>
                                    <div className="wsp-logo-text-wrap">
                                        <span className="wsp-logo-title">Career Growth</span>
                                        <span className="wsp-logo-sub">Placement Prep</span>
                                    </div>
                                </div>
                            </div>

                            <div className="wsp-logo-placeholder-redesign wsp-header-logos-extra-badge right-badge">
                                <div className="wsp-logo-icon-wrap" style={{ backgroundColor: '#8b5cf6' }}>
                                    <FontAwesomeIcon icon={faCertificate} />
                                </div>
                                <div className="wsp-logo-text-wrap">
                                    <span className="wsp-logo-title">Expert Certification</span>
                                    <span className="wsp-logo-sub">Get Verified</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>
                <main className="wsp-main-content">
                    {/* Workshops Section */}
                    <section className="wsp-section wsp-workshops-section">
                        <div className="wsp-container">
                            <div className="wsp-section-header">
                                <h2 className="wsp-section-title">Explore <span>Workshops</span></h2>
                                <p className="wsp-section-subtitle">Collect knowledge, master new skills</p>
                            </div>

                            <div className="wsp-tabs">
                                <button
                                    className={`wsp-tab ${activeTab === 'upcoming' ? 'wsp-active' : ''}`}
                                    onClick={() => setActiveTab('upcoming')}
                                    style={{ borderColor: activeTab === 'upcoming' ? primaryColor : 'transparent' }}
                                >
                                    <span className="wsp-tab-icon" style={{ color: primaryColor }}>
                                        <FontAwesomeIcon icon={faCalendarAlt} />
                                    </span>
                                    <span className="wsp-tab-text">Upcoming Workshops</span>
                                </button>
                                <button
                                    className={`wsp-tab ${activeTab === 'conducted' ? 'wsp-active' : ''}`}
                                    onClick={() => setActiveTab('conducted')}
                                    style={{ borderColor: activeTab === 'conducted' ? primaryColor : 'transparent' }}
                                >
                                    <span className="wsp-tab-icon" style={{ color: primaryColor }}>
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                    <span className="wsp-tab-text">Past Workshops</span>
                                </button>
                            </div>

                            <div className={`wsp-bento-grid ${activeTab === 'conducted' ? 'wsp-conducted-grid' : 'wsp-upcoming-grid'}`}>
                                {workshopsData[activeTab].map((workshop, index) => {

                                    return (
                                        <div key={workshop.id} className="wsp-nft-card">
                                            {/* Top User Info */}
                                            <div className="wsp-nft-user">
                                                <div className="wsp-nft-avatar" style={{
                                                    background: 'none',
                                                    backgroundColor: `${workshop.iconColor || '#6c5ce7'}22`,
                                                    borderColor: workshop.iconColor || '#6c5ce7',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: workshop.iconColor || '#6c5ce7',
                                                    fontSize: '0.85rem'
                                                }}>
                                                    <FontAwesomeIcon icon={workshop.icon || faLaptopCode} />
                                                </div>
                                                <div className="wsp-nft-user-info">
                                                    <span className="wsp-nft-username">{getWorkshopCategory(workshop)}</span>
                                                    <span className="wsp-nft-id">INSTRUCTOR: {workshop.instructor}</span>
                                                </div>
                                            </div>

                                            {/* Main Image Container */}
                                            <div className="wsp-nft-image-wrap">
                                                <img src={workshop.img} alt={workshop.title} className="wsp-nft-img" />
                                                <div className="wsp-nft-overlay" />
                                            </div>

                                            {/* Content Section */}
                                            <div className="wsp-nft-content">
                                                <h3 className="wsp-nft-title">{workshop.title}</h3>

                                                <div className="wsp-nft-footer">
                                                    <div className="wsp-nft-price-box">
                                                        <span className="wsp-nft-price-label">ESTIMATED TIME</span>
                                                        <span className="wsp-nft-price-val">3 hrs</span>
                                                    </div>

                                                    <button className="wsp-nft-enroll-btn" onClick={() => scrollToContactSection(workshop.title)}>
                                                        ENROLL NOW
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Workshop Staff */}
                    <section className="wsp-section wsp-staff-section-v2">
                        <div className="wsp-container">
                            <div className="wsp-section-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <h2 className="wsp-section-title-v2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: 'clamp(2rem, 5vw, 2.5rem)', color: '#fff', textTransform: 'uppercase', marginBottom: '10px' }}>
                                    EXPERT INSTRUCTORS
                                </h2>
                                <p className="wsp-section-subtitle-v2" style={{ fontFamily: "'Aldrich', monospace", color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
                                    INDUSTRY LEADERS SHARING THEIR CRAFT
                                </p>
                            </div>
                        </div>

                        <div className="wsp-instructors-marquee-wrapper">
                            <div className="wsp-instructors-marquee-track">
                                {[...workshopStaff, ...workshopStaff].map((staff, index) => {
                                    const colors = ['#7c5cff', '#ff8453', '#62cc62', '#b35df8', '#4b9ff9'];
                                    const bgColor = colors[index % colors.length];

                                    return (
                                        <div key={`${staff.id}-${index}`} className="wsp-program-card" style={{ backgroundColor: bgColor }}>
                                            <div className="wsp-program-main">
                                                <div className="wsp-program-tags">
                                                    <span className="wsp-program-tag">{staff.workshops} WORKSHOPS</span>
                                                    <span className="wsp-program-tag"><FontAwesomeIcon icon={faCalendarAlt} /> {staff.experience.toUpperCase()}</span>
                                                </div>

                                                <img className="wsp-program-image" src={staff.avatarImg} alt={staff.name} />

                                                <h4 className="wsp-program-name">{staff.name}</h4>
                                                <h3 className="wsp-program-title">{staff.role.toUpperCase()}</h3>
                                                <p className="wsp-program-desc">
                                                    {staff.bio}. In this profile, {staff.name.split(' ')[0]} focuses on {staff.specialization.join(', ')} and more.
                                                </p>

                                                <div className="wsp-program-bottom">
                                                    <span className="wsp-program-price">★ {staff.rating} / 5 Rating</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>

                    {/* Awards & Recognition - Snake Timeline */}
                    <section className="wsp-section wsp-awards-section">
                        <div className="wsp-container">
                            <div className="wsp-section-header">
                                <h2 className="wsp-section-title">Awards &amp; Recognition</h2>
                                <p className="wsp-section-subtitle">Our commitment to excellence</p>
                            </div>
                        </div>

                        <div className="wsp-az-timeline-horizontal wsp-timeline-marquee-anim">
                            <div className="wsp-az-main-hline"></div>
                            {[...awards, ...awards, ...awards, ...awards].map((award, idx) => {
                                const isTop = idx % 2 === 0;
                                // Calculate original index to preserve correct numbering (1-6)
                                const originalIndex = idx % awards.length;
                                return (
                                    <div key={`${award.id}-${idx}`} className={`wsp-az-item ${isTop ? 'wsp-az-item--top' : 'wsp-az-item--bottom'}`}>

                                        {/* PILL CONTENT */}
                                        <div className="wsp-az-side-h">
                                            <div className="wsp-az-pill" style={{ '--pill-color': award.iconColor }}>
                                                <span className="wsp-az-pill-icon" style={{ color: award.iconColor }}>
                                                    <FontAwesomeIcon icon={award.icon} />
                                                </span>
                                                <div className="wsp-az-pill-body">
                                                    <h3 className="wsp-az-pill-title">{award.title}</h3>
                                                    <p className="wsp-az-pill-meta">{award.organization} &middot; {award.year}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* AXIS BADGE COL */}
                                        <div className="wsp-az-badge-col-h">
                                            <div className="wsp-az-hline-connect" style={{ background: `linear-gradient(to right, transparent, ${award.iconColor}55)` }} />

                                            <div className="wsp-az-badge" style={{ borderColor: award.iconColor, color: award.iconColor, boxShadow: `0 0 18px ${award.iconColor}44` }}>
                                                <span className="wsp-az-badge-num">{originalIndex + 1}</span>
                                            </div>

                                            <div className="wsp-az-hline-connect" style={{ background: `linear-gradient(to right, ${award.iconColor}55, transparent)` }} />
                                        </div>

                                    </div>
                                );
                            })}
                        </div>
                    </section>

                    {/* Reviews Section - Card Style */}
                    <section className="wsp-section wsp-reviews-section-new">

                        {/* Title inside container */}
                        <div className="wsp-container">
                            <div className="wsp-section-header">
                                <h2 className="wsp-section-title">Student Reviews</h2>
                                <p className="wsp-section-subtitle">What participants say about our workshops</p>
                            </div>
                        </div>

                        {/* Full-viewport-width carousel — overflow hidden clips at screen edges */}
                        <div
                            className="wsp-reviews-carousel-wrapper"
                            onMouseEnter={() => { isPausedRef.current = true; }}
                            onMouseLeave={() => { isPausedRef.current = false; }}
                        >
                            <div
                                className="wsp-reviews-track"
                                onTransitionEnd={handleTransitionEnd}
                                style={{
                                    transition: isTransitioning ? 'transform 0.75s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
                                    transform: `translateX(calc(50vw - var(--wsp-review-offset, 140px) - ${activeReviewIndex} * var(--wsp-review-step, 312px)))`
                                }}
                            >
                                {extendedReviews.map((review, index) => {

                                    const isActive = index === activeReviewIndex;

                                    return (
                                        <div
                                            key={`${review.id}-${index}`}
                                            className={`wsp-review-card-new ${isActive ? 'active' : ''}`}
                                            style={{
                                                background: review.bgColor,
                                                color: '#fff'
                                            }}
                                            onClick={() => {
                                                setIsTransitioning(true);
                                                setActiveReviewIndex(index);
                                            }}
                                        >
                                            {/* Floating Avatar */}
                                            <div className="wsp-review-avatar-large">
                                                <img src={review.avatar} alt={review.name} className="wsp-review-avatar-img" />
                                            </div>

                                            {/* Top gloss area */}
                                            <div className="wsp-review-top"></div>

                                            {/* Info bottom */}
                                            <div className="wsp-review-bottom">
                                                <div className="wsp-review-color-bar" style={{ backgroundColor: review.bgColor }}></div>
                                                <h3 className="wsp-review-name-new">{review.name}</h3>
                                                <p className="wsp-review-role">{review.company}</p>
                                                <div className="wsp-review-rating-new">
                                                    {[...Array(review.rating)].map((_, i) => (
                                                        <FontAwesomeIcon key={i} icon={faStar} />
                                                    ))}
                                                </div>
                                                <p className="wsp-review-text-new">"{review.review}"</p>
                                                <div className="wsp-review-meta-new">
                                                    <span className="wsp-review-workshop-new">{review.workshop}</span>
                                                    <span className="wsp-review-date-new">{review.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Dot indicators inside container */}
                        <div className="wsp-container">
                            <div className="wsp-review-dots">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        className={`wsp-review-dot ${activeReviewIndex % reviews.length === i ? 'active' : ''}`}
                                        onClick={() => {
                                            setIsTransitioning(true);
                                            setActiveReviewIndex(i + reviews.length);
                                        }}
                                    />
                                ))}
                            </div>
                        </div>

                    </section>

                    {/* Contact/Registration Section with ref */}
                    <section
                        ref={contactSectionRef}
                        className="wsp-section wsp-neon-contact-section"
                        id="registration-form"
                    >
                        {/* Faded Background Text */}
                        <div className="wsp-neon-bg-text">REGISTER</div>

                        <div className="wsp-container wsp-neon-contact-container">
                            {/* Header Area */}
                            <div className="wsp-neon-header-area">
                                <div className="wsp-neon-badge">
                                    <span className="wsp-neon-dot"></span> Registration <span className="wsp-neon-dot"></span>
                                </div>
                                <h2 className="wsp-neon-main-title">
                                    Register for <span className="wsp-neon-highlight">Workshops</span>
                                </h2>
                                <p className="wsp-neon-subtitle">Fill this form to book your seat</p>
                            </div>

                            <div className="wsp-neon-contact-grid">

                                {/* Left Column - Form */}
                                <div className="wsp-neon-form-col">
                                    <form onSubmit={handleSubmit} className="wsp-neon-form">
                                        <div className="wsp-neon-form-row">
                                            <div className="wsp-neon-input-group">
                                                <label>Full Name *</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Ex. John Doe"
                                                    required
                                                />
                                            </div>
                                            <div className="wsp-neon-input-group">
                                                <label>Email Address *</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="example@gmail.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="wsp-neon-form-row">
                                            <div className="wsp-neon-input-group">
                                                <label>Phone Number *</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Phone Number"
                                                    required
                                                />
                                            </div>
                                            <div className="wsp-neon-input-group">
                                                <label>Workshop Interest *</label>
                                                <div className="wsp-neon-select-wrapper">
                                                    <select
                                                        name="workshop"
                                                        value={formData.workshop}
                                                        onChange={handleInputChange}
                                                        required
                                                    >
                                                        <option value="">Select a workshop</option>
                                                        {workshopsData.upcoming.map(ws => (
                                                            <option key={ws.id} value={ws.title}>{ws.title}</option>
                                                        ))}
                                                        <option value="Other">Other</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="wsp-neon-input-group">
                                            <label>Additional Message</label>
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Enter here.."
                                                rows="4"
                                            ></textarea>
                                        </div>

                                        <div className="wsp-neon-input-group wsp-neon-checkbox-group">
                                            <label>
                                                <input type="checkbox" required />
                                                <span className="wsp-neon-checkbox-text">I agree to receive workshop updates and communications.</span>
                                            </label>
                                        </div>

                                        <button type="submit" className="wsp-neon-submit-btn">
                                            Register Now
                                        </button>
                                    </form>
                                </div>

                                {/* Right Column - Info Card */}
                                <div className="wsp-neon-info-col">
                                    <div className="wsp-neon-info-card">

                                        {/* Top Dark Section */}
                                        <div className="wsp-neon-info-top">
                                            {/* Grid Pattern Overlay */}
                                            <div className="wsp-neon-grid-pattern"></div>

                                            <div className="wsp-neon-info-block">
                                                <h4>Location</h4>
                                                <p>Madurai, TamilNadu INDIA</p>
                                            </div>

                                            <div className="wsp-neon-info-block">
                                                <h4>Contact</h4>
                                                <p>Phone : +91 63681759909</p>
                                                <p>Email : engloray@gmail.com</p>
                                            </div>
                                        </div>

                                        {/* Bright Green Bottom Section (Replacing "Stay Connected") */}
                                        <div className="wsp-neon-info-bottom">
                                            <div className="wsp-neon-topo-pattern"></div>
                                            <h4 className="wsp-neon-bottom-title">Exclusive Perks</h4>
                                            <div className="wsp-neon-benefits-list">
                                                <div className="wsp-neon-benefit-row">
                                                    <FontAwesomeIcon icon={faCheckCircle} className="wsp-neon-benefit-icon" />
                                                    <span className="wsp-neon-benefit-text-label">Hands-on practical sessions</span>
                                                </div>
                                                <div className="wsp-neon-benefit-row">
                                                    <FontAwesomeIcon icon={faChalkboardTeacher} className="wsp-neon-benefit-icon" />
                                                    <span className="wsp-neon-benefit-text-label">Industry expert instructors</span>
                                                </div>
                                                <div className="wsp-neon-benefit-row">
                                                    <FontAwesomeIcon icon={faCertificate} className="wsp-neon-benefit-icon" />
                                                    <span className="wsp-neon-benefit-text-label">Certificate of completion</span>
                                                </div>
                                                <div className="wsp-neon-benefit-row">
                                                    <FontAwesomeIcon icon={faNetworkWired} className="wsp-neon-benefit-icon" />
                                                    <span className="wsp-neon-benefit-text-label">Networking opportunities</span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
                <WhiteFooter />
                <BackToTop />
            </div>
        </div>

    );
};

export default WorkshopsPage;