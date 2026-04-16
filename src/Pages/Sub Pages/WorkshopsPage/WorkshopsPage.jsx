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
    faMobileAlt,
    faCalendarAlt,
    faUser,
    faTrophy,
    faStar,
    faChalkboardTeacher,
    faHandshake,
    faLightbulb,
    faMapMarkerAlt,
    faCheckCircle,
    faCheck,
    faCertificate,
    faGlobe,
    faBriefcase,
    faNetworkWired,
    faComments,
    faLifeRing,
    faUserGraduate,
    faFolder,
    faRocket,
    faCode,
    faLayerGroup,
    faProjectDiagram
} from '@fortawesome/free-solid-svg-icons';

import './WorkshopsPage.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

// Import staff specialty images
import graphicDesignImg from '../../../assets/graphic_design.png';
import uiUxDesignImg from '../../../assets/ui_ux.png';
import aiDesignImg from '../../../assets/AiImage.jpeg';
import brandingImg from '../../../assets/brandingImage.jpeg';
import instructorGowthamImg from '../../../assets/GowthamImage.png';
import mernImg from '../../../assets/MernStack.jfif';
import javaImg from '../../../assets/JavaFull.jfif';
import devImg from '../../../assets/DEvelopmentImage.jpeg';
import aiMLImg from '../../../assets/bg_ai_ml.png';
import RevAvatar1 from '../../../assets/rev_avatar_1.jfif';
import RevAvatar2 from '../../../assets/rev_avatar_2.jfif';
import RevAvatar3 from '../../../assets/rev_avatar_3.jfif';
import RevAvatar4 from '../../../assets/rev_avatar_4.jfif';
import RevAvatar5 from '../../../assets/rev_avatar_5.jfif';
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
                img: graphicDesignImg,
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
                title: "Java Full Stack Development",
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
                description: "Build robust enterprise apps with Java and modern front-end",
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
            color: primaryColor,
            icon: faBriefcase,
            iconColor: '#4ECDC4',
            img: instructorGowthamImg,
            bio: "Published 10+ apps on App Store and Google Play",
            rating: 4.8
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
            avatar: RevAvatar1,
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
            avatar: RevAvatar2,
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
            avatar: RevAvatar3,
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
            avatar: RevAvatar4,
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
            avatar: RevAvatar3,
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
            avatar: RevAvatar4,
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
        <div className="wsp-page">
            <TopNavBar />
            <TwoLineNavbar />
            {/* Hero Header Section */}
            <header className="wsp-header-redesign">
                <div className="wsp-header-container">

                    {/* Bottom Floating Cards */}
                    <div className="wsp-floating-card wsp-floating-left">
                        <div className="wsp-floating-icon wsp-icon-blue">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="wsp-floating-content">
                            <h4>Highest Rated</h4>
                            <p>Ranked #1 for tech skills</p>
                        </div>
                    </div>

                    <div className="wsp-floating-card wsp-floating-right">
                        <div className="wsp-floating-icon wsp-icon-pink">
                            <FontAwesomeIcon icon={faCertificate} />
                        </div>
                        <div className="wsp-floating-content">
                            <h4>Global Certification</h4>
                            <p>Earn industry-recognized certs</p>
                        </div>
                    </div>

                    <h1 className="wsp-title wsp-gradient-text">WORKSHOPS</h1>
                    <p className="wsp-subtitle">
                        Join our interactive workshops led by industry experts. Gain practical skills, work on real projects, and accelerate your career.
                    </p>

                    <div className="wsp-stats-cards">
                        {/* New First Card */}
                        <div className="wsp-stat-card">
                            <div className="wsp-card-checkbox"></div>
                            <div className="wsp-card-icon wsp-icon-blue">
                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                            </div>
                            <h3 className="wsp-card-title">100+</h3>
                            <p className="wsp-card-desc">Expert Mentors</p>
                        </div>
                        {/* Card 1 */}
                        <div className="wsp-stat-card">
                            <div className="wsp-card-checkbox"></div>
                            <div className="wsp-card-icon wsp-icon-red">
                                <FontAwesomeIcon icon={faProjectDiagram} />
                            </div>
                            <h3 className="wsp-card-title">50+</h3>
                            <p className="wsp-card-desc">Workshops Conducted</p>
                        </div>

                        {/* Card 2 */}
                        <div className="wsp-stat-card">
                            <div className="wsp-card-checkbox"></div>
                            <div className="wsp-card-icon wsp-icon-green">
                                <FontAwesomeIcon icon={faUserGraduate} />
                            </div>
                            <h3 className="wsp-card-title">5000+</h3>
                            <p className="wsp-card-desc">Participants Trained</p>
                        </div>

                        {/* Card 3 - Active */}
                        <div className="wsp-stat-card wsp-stat-card-active">
                            <div className="wsp-card-checkbox wsp-checkbox-active">
                                {/* <FontAwesomeIcon icon={faCheck} className="wsp-check-icon" /> */}
                            </div>
                            <div className="wsp-card-icon wsp-icon-purple">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <h3 className="wsp-card-title">15+</h3>
                            <p className="wsp-card-desc">Cities Covered</p>
                        </div>

                        {/* Card 4 */}
                        <div className="wsp-stat-card">
                            <div className="wsp-card-checkbox"></div>
                            <div className="wsp-card-icon wsp-icon-pink">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <h3 className="wsp-card-title">98%</h3>
                            <p className="wsp-card-desc">Satisfaction Rate</p>
                        </div>

                        {/* New Last Card */}
                        <div className="wsp-stat-card">
                            <div className="wsp-card-checkbox"></div>
                            <div className="wsp-card-icon wsp-icon-orange">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            <h3 className="wsp-card-title">100%</h3>
                            <p className="wsp-card-desc">Placement Assistance</p>
                        </div>
                    </div>

                    <button className="wsp-cta-button" onClick={() => scrollToContactSection('General Enrollment')}>
                        Explore Our Workshops
                    </button>

                    <div className="wsp-header-features">
                        <span className="wsp-feature-item"><FontAwesomeIcon icon={faCheck} /> Verified Industry Experts</span>
                        <span className="wsp-feature-item"><FontAwesomeIcon icon={faCheck} /> Limited Slots</span>
                        <span className="wsp-feature-item"><FontAwesomeIcon icon={faCheck} /> Practical Projects</span>
                    </div>

                    <div className="wsp-header-logos-wrapper">
                        <div className="wsp-header-logos">
                            <span className="wsp-logo-placeholder"><strong><FontAwesomeIcon icon={faNetworkWired} />Hired by Top MNC</strong></span>
                            <span className="wsp-logo-placeholder" style={{ fontWeight: 800, letterSpacing: '-1px' }}><em>//.</em>1:1 Mentorship</span>
                            <span className="wsp-logo-placeholder" style={{ fontWeight: 900 }}>Project-Based Learning</span>
                            <span className="wsp-logo-placeholder"><strong><FontAwesomeIcon icon={faLayerGroup} />Career Growth</strong></span>
                            {/* <span className="wsp-logo-placeholder" style={{ fontFamily: 'serif', fontWeight: 700 }}>Industry Recognized</span> */}
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
                                const nftImages = [
                                    "data:image/jpeg;base64,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", // 3D Graphic Design
                                    "data:image/jpeg;base64,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", // Default 3D Code
                                    "data:image/jpeg;base64,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", // 3D UI/UX
                                    "data:image/jpeg;base64,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"  // 3D Web
                                ];
                                const currentImg = nftImages[index % nftImages.length];

                                return (
                                    <div key={workshop.id} className="wsp-nft-card">
                                        {/* Top User Info */}
                                        <div className="wsp-nft-user">
                                            <div className="wsp-nft-avatar" />
                                            <div className="wsp-nft-user-info">
                                                <span className="wsp-nft-username">ENGLORAY_OFFICIAL</span>
                                                <span className="wsp-nft-id">Collection #{workshop.id}00</span>
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

                        <div className="wsp-program-grid">
                            {workshopStaff.map((staff, index) => {
                                const colors = ['#7c5cff', '#ff8453', '#62cc62', '#b35df8', '#4b9ff9'];
                                const bgColor = colors[index % colors.length];

                                return (
                                    <div key={staff.id} className="wsp-program-card" style={{ backgroundColor: bgColor }}>
                                        <div className="wsp-program-main">
                                            <div className="wsp-program-tags">
                                                <span className="wsp-program-tag">{staff.workshops} WORKSHOPS</span>
                                                <span className="wsp-program-tag"><FontAwesomeIcon icon={faCalendarAlt} /> {staff.experience.toUpperCase()}</span>
                                            </div>

                                            <img className="wsp-program-image" src={staff.img} alt={staff.name} />

                                            <h4 className="wsp-program-name">{staff.name}</h4>
                                            <h3 className="wsp-program-title">{staff.role.toUpperCase()}</h3>
                                            <p className="wsp-program-desc">
                                                {staff.bio}. In this profile, {staff.name.split(' ')[0]} focuses on {staff.specialization.join(', ')} and more.
                                            </p>

                                            <div className="wsp-program-bottom">
                                                <span className="wsp-program-price">★ {staff.rating} / 5 Rating</span>
                                            </div>
                                        </div>
                                        <a className="wsp-program-link" href="#!">Profile &rarr;</a>
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

                        <div className="wsp-az-timeline">
                            {awards.map((award, index) => {
                                const isLeft = index % 2 === 0;
                                return (
                                    <div key={award.id} className={`wsp-az-row ${isLeft ? 'wsp-az-row--left' : 'wsp-az-row--right'}`}>

                                        {/* LEFT SIDE */}
                                        <div className="wsp-az-side wsp-az-side--left">
                                            {isLeft ? (
                                                <div className="wsp-az-pill" style={{ '--pill-color': award.iconColor }}>
                                                    <span className="wsp-az-pill-icon" style={{ color: award.iconColor }}>
                                                        <FontAwesomeIcon icon={award.icon} />
                                                    </span>
                                                    <div className="wsp-az-pill-body">
                                                        <h3 className="wsp-az-pill-title">{award.title}</h3>
                                                        <p className="wsp-az-pill-meta">{award.organization} &middot; {award.year}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                /* S-curve connector arm going right→down for right items */
                                                <div className="wsp-az-arm wsp-az-arm--right-to-center" />
                                            )}
                                        </div>

                                        {/* CENTER BADGE */}
                                        <div className="wsp-az-badge-col">
                                            {index > 0 && <div className="wsp-az-vline" style={{ background: `linear-gradient(to bottom, transparent, ${award.iconColor}55)` }} />}
                                            <div className="wsp-az-badge" style={{ borderColor: award.iconColor, color: award.iconColor, boxShadow: `0 0 18px ${award.iconColor}44` }}>
                                                <span className="wsp-az-badge-num">{index + 1}</span>
                                            </div>
                                            {index < awards.length - 1 && <div className="wsp-az-vline" style={{ background: `linear-gradient(to bottom, ${award.iconColor}55, transparent)` }} />}
                                        </div>

                                        {/* RIGHT SIDE */}
                                        <div className="wsp-az-side wsp-az-side--right">
                                            {!isLeft ? (
                                                <div className="wsp-az-pill" style={{ '--pill-color': award.iconColor }}>
                                                    <span className="wsp-az-pill-icon" style={{ color: award.iconColor }}>
                                                        <FontAwesomeIcon icon={award.icon} />
                                                    </span>
                                                    <div className="wsp-az-pill-body">
                                                        <h3 className="wsp-az-pill-title">{award.title}</h3>
                                                        <p className="wsp-az-pill-meta">{award.organization} &middot; {award.year}</p>
                                                    </div>
                                                </div>
                                            ) : (
                                                /* S-curve connector arm going left→down for left items */
                                                <div className="wsp-az-arm wsp-az-arm--left-to-center" />
                                            )}
                                        </div>

                                    </div>
                                );
                            })}
                        </div>

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
                                const realIndex = index % reviews.length;
                                const isActive = index === activeReviewIndex;

                                return (
                                    <div
                                        key={`${review.id}-${index}`}
                                        className={`wsp-review-card-new ${isActive ? 'active' : ''}`}
                                        style={{
                                            background: `linear-gradient(160deg, ${review.bgColor} 0%, ${review.bgColor}cc 100%)`,
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
                                                    <option value="Graphic Design">Graphic Design</option>
                                                    <option value="Java & Python">Java & Python</option>
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
                                        <div className="wsp-neon-benefits">
                                            <div className="wsp-neon-benefit-item" title="Hands-on practical sessions">
                                                <FontAwesomeIcon icon={faCheckCircle} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Industry expert instructors">
                                                <FontAwesomeIcon icon={faChalkboardTeacher} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Certificate of completion">
                                                <FontAwesomeIcon icon={faCertificate} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Networking opportunities">
                                                <FontAwesomeIcon icon={faNetworkWired} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Lifetime access to materials">
                                                <FontAwesomeIcon icon={faUserGraduate} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Post-workshop support">
                                                <FontAwesomeIcon icon={faLifeRing} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Community Access">
                                                <FontAwesomeIcon icon={faComments} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Resource Library">
                                                <FontAwesomeIcon icon={faFolder} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Career Opportunities">
                                                <FontAwesomeIcon icon={faBriefcase} />
                                            </div>
                                            <div className="wsp-neon-benefit-item" title="Skill Mastery">
                                                <FontAwesomeIcon icon={faRocket} />
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
    );
};

export default WorkshopsPage;