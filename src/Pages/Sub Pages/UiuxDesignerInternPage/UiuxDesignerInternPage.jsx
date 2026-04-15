import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaintBrush,
    faLaptopCode,
    faMobileAlt,
    faRocket,
    faBriefcase,
    faStar,
    faBook,
    faPencilAlt,
    faImage,
    faVideo,
    faFont,
    faCamera,
    faFileAlt,
    faSave,
    faClipboard,
    faChalkboardTeacher,
    faUserTie,
    faHandshake,
    faGraduationCap,
    faTrophy,
    faSyncAlt,
    faBullseye,
    faFlask,
    faEnvelope,
    faPhone,
    faMapMarkerAlt,
    faComments,
    faLock,
    faCheck,
    faCertificate,
    faBuilding,
    faGlobe,
    faQrcode,
    faUser,
    faPlayCircle,
    faPauseCircle,
    faClock,
    faCheckCircle,
    faTimes,
    faArrowRight,
    faRulerCombined,
    faPenFancy,
    faLightbulb,
    faFilePdf,
    faFileArchive,
    faFileWord,
    faFile,
    faDownload,
    faUsers,
    faMoneyBillWave,
    faNetworkWired,
    faTools,
    faPalette,
    faLayerGroup,
    faEye,
    faShieldAlt,
    faCrown,
    faGem,
    faInfoCircle,
    faBolt,
    faDesktop,
    faObjectGroup,
    faVial
} from '@fortawesome/free-solid-svg-icons';
import './UiuxDesignerInternPage.css';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";

// Resources
import pathOne from '../../../assets/resources file/resources file/TECH/UIUX Designers/UIUX Design Tools & Technology.pdf';
//import pathOne from '../../../../assets/resources file/resources file/TECH/UIUX Designers/UIUX Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/UIUX Designers/Learning, UX Thinking & Skill Development.pdf';
import pathThree from '../../../assets/resources file/resources file/TECH/UIUX Designers/Benefits of UIUX Design (for Designers & Businesses).pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/UIUX Designers/Productivity, AI & UX Workflow Support.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/UIUX Designers/UX Research, Testing & Design Systems.pdf';

import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import Footer from '../../../Components/Footer/Footer';
import { Helmet } from 'react-helmet';

// Missing icon assets
import iconGraduationCap from '../../../assets/iicons/icon_graduation_cap.png';
import iconEducationBook from '../../../assets/iicons/icon_education_book.png';
import iconCertificate from '../../../assets/iicons/icon_certificate.png';
import benefitCareer from '../../../assets/iicons/career_opportunities_vibrant.png';
import benefitCertification from '../../../assets/iicons/image copy.png';
import benefitSoftware from '../../../assets/iicons/benefit_software.png';
import benefitMoneyBack from '../../../assets/iicons/money_back_guarantee.jpg';
import boy1 from '../../../assets/images/boy1.png';
import boy2 from '../../../assets/images/boy2.png';
import boy3 from '../../../assets/images/boy3.png';
import boy4 from '../../../assets/images/boy4.png';
import girl1 from '../../../assets/images/girl1.png';
import girl2 from '../../../assets/images/girl2.png';
import girl3 from '../../../assets/images/girl3.png';
import girl4 from '../../../assets/images/girl4.png';

const uxHeroImg = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80";
const galleryModernLab = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const galleryCollab = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";
const galleryWorkstation = "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=1600&q=80";
const galleryPresentation = "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1600&q=80";
const galleryInteractive = "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1600&q=80";
const galleryArchitecture = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80";


const benefitMentorship = "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=800&q=80";
const benefitNetworking = "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80";


// Local assets for course backgrounds - Replaced with premium UI/UX images
const bgFundamentals = "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"; // UX Research workshop / Collab
const bgArchitecture = "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1600&q=80"; // Premium Wireframing/Prototyping screen
const bgAdvanced = "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1600&q=80"; // Clean desk with premium UI work
const bgDevOps = "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1600&q=80"; // Professional team review / testing context

const UiuxDesignerInternPage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef({});
    const containerRef = useRef(null);

    const [formData, setFormData] = useState({
        email: '',
        course: 'UI/UX Designer',
        agreeTerms: false
    });
    const [errors, setErrors] = useState({});
    const [showForm, setShowForm] = useState(false);
    const [activeDescription, setActiveDescription] = useState(null);
    const [downloadedResources, setDownloadedResources] = useState([]);
    const [activeCourseIndex, setActiveCourseIndex] = useState(40);
    const cardsWrapperRef = useRef(null);
    const autoSlideIntervalRef = useRef(null);
    const [toastMessage, setToastMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [activeAccordionIndex, setActiveAccordionIndex] = useState(0);
    const [showQuickTips, setShowQuickTips] = useState(false);
    const quickTipsRef = useRef(null);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80; // Adjust for header
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setActiveSection(sectionId);
        }
    };

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'course', 'signin', 'assets', 'gallery', 'templates', 'resources', 'benefits', 'feedback'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Show toast message
    useEffect(() => {
        if (toastMessage) {
            setShowToast(true);
            const timer = setTimeout(() => {
                setShowToast(false);
                setToastMessage('');
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    // Handle outside click for quick tips panel
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (quickTipsRef.current && !quickTipsRef.current.contains(event.target)) {
                setShowQuickTips(false);
            }
        };

        if (showQuickTips) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showQuickTips]);

    const showLockedSectionToast = (sectionName) => {
        setToastMessage(`🔒 ${sectionName} is locked. Please enroll in the course to access premium content.`);
    };

    const courseContent = [
        {
            id: 1,
            title: "UX Research & Discovery",
            description: [
                "User Persona Development",
                "Competitor Analysis",
                "Empathy Mapping",
                "User Interview Techniques",
                "Information Architecture",
                "UX Design Thinking"
            ],
            duration: "Research Phase",
            bgImage: bgFundamentals,
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            id: 2,
            title: "Wireframing & Prototyping",
            description: [
                "Low-Fidelity Wireframes",
                "Figma Component Basics",
                "User Flow Diagrams",
                "Interactive Prototypes",
                "Lottie Animations Basics",
                "Responsive Grid Systems"
            ],
            duration: "Design Iteration",
            bgImage: bgArchitecture,
            icon: <FontAwesomeIcon icon={faLayerGroup} />
        },
        {
            id: 3,
            title: "Advanced UI & Design Systems",
            description: [
                "Color Theory & Accessibility",
                "Advanced Figma Auto-Layout",
                "Building Design Systems",
                "Atomic Design Principles",
                "Variable & Style Management",
                "Developer Handoff Best Practices"
            ],
            duration: "System Scalability",
            bgImage: bgAdvanced,
            icon: <FontAwesomeIcon icon={faPalette} />
        },
        {
            id: 4,
            title: "Testing & Portfolio Building",
            description: [
                "Usability Testing Methods",
                "A/B Testing Strategies",
                "Design Feedback Loops",
                "UX Case Study Structure",
                "Portfolio Presentation",
                "AI-Driven Design Workflows"
            ],
            duration: "Professional Ready",
            bgImage: bgDevOps,
            icon: <FontAwesomeIcon icon={faBriefcase} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: galleryModernLab,
            title: "Creative Design Studio",
            description: "Our state-of-the-art design lab equipped with high-resolution displays and ergonomic collaborative zones.",
            icon: <FontAwesomeIcon icon={faDesktop} />
        },
        {
            url: galleryCollab,
            title: "Empathy Workshops",
            description: "Designers conducting user research and empathy mapping sessions in our dedicated brainstorming areas.",
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            url: galleryWorkstation,
            title: "Figma Prototyping",
            description: "Specialized workstations optimized for real-time collaboration and complex interactive prototyping.",
            icon: <FontAwesomeIcon icon={faObjectGroup} />
        },
        {
            url: galleryPresentation,
            title: "UX Review Sessions",
            description: "Designers presenting user flow diagrams and high-fidelity mockups for comprehensive stakeholder feedback.",
            icon: <FontAwesomeIcon icon={faEye} />
        },
        {
            url: galleryInteractive,
            title: "Usability Testing Lab",
            description: "Dedicated space for observing user interactions and documenting critical UX pain points and successes.",
            icon: <FontAwesomeIcon icon={faVial} />
        },
        {
            url: galleryArchitecture,
            title: "Design System Architecture",
            description: "Coordinating complex component libraries and style guides to ensure brand consistency across all platforms.",
            icon: <FontAwesomeIcon icon={faLayerGroup} />
        }
    ];

    const courseResources = [
        {
            id: 1,
            title: "UI/UX Design Tools & Technology",
            description: "Detailed overview of the design tools, platforms, and technologies used during the UI/UX design internship. This phase introduces industry-standard software such as Figma, Adobe XD, and modern prototyping platforms, along with creative workflows and collaboration practices used in professional environments.",
            type: "pdf",
            size: "1.4 MB",
            downloads: 1452,
            icon: <FontAwesomeIcon icon={faTools} />,
            isRestricted: false,
            fileName: "UIUX Design Tools & Technology.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Learning, UX Thinking & Skill Development",
            description: "Comprehensive guide to user experience (UX) thinking, design principles, and practical applications in UI/UX design. This section explores how user research influences design decisions and helps build empathy for users across various digital platforms.",
            type: "pdf",
            size: "0.2 MB",
            downloads: 986,
            icon: <FontAwesomeIcon icon={faStar} />,
            isRestricted: false,
            fileName: "Learning, UX Thinking & Skill Development.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Benefits of UI/UX Design",
            description: "Comprehensive guide on why UI/UX design is critical for product success and business growth. This section explains how user-centric design increases retention, improves satisfaction, and drives innovation in modern digital products.",
            type: "pdf",
            size: "4.0 MB",
            downloads: 2167,
            icon: <FontAwesomeIcon icon={faBullseye} />,
            isRestricted: false,
            fileName: "Benefits of UIUX Design (for Designers & Businesses).pdf",
            localPath: pathThree
        },
        {
            id: 4,
            title: "UX Research, Testing & Systems",
            description: "Deep dive into usability testing, user interviews, and building scalable design systems. This resource includes templates for research plans, usability reports, and style guide management used in professional design studios.",
            type: "pdf",
            size: "4.1 MB",
            downloads: 1845,
            icon: <FontAwesomeIcon icon={faFlask} />,
            isRestricted: false,
            fileName: "UX Research, Testing & Design Systems.pdf",
            localPath: pathSix
        },
        {
            id: 5,
            title: "Productivity, AI & UX Workflow",
            description: "A guide to mastering professional UI/UX workflows using AI-powered tools and Figma automation. This section covers AI prototyping, automated accessibility checks, and efficient handoff processes to development teams.",
            type: "pdf",
            size: "2.2 MB",
            downloads: 745,
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
            isRestricted: true,
            fileName: "Productivity, AI & UX Workflow Support.pdf",
            localPath: pathFive
        },
        {
            id: 6,
            title: "UX Case Study & Portfolio Building",
            description: "Step-by-step guide to creating an impressive design portfolio that gets you hired. Learn how to structure case studies, showcase your creative problem-solving skills, and present your design journey effectively to stakeholders.",
            type: "pdf",
            size: "1.7 MB",
            downloads: 532,
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            isRestricted: true,
            fileName: "UX Case Study & Portfolio Building.pdf",
            localPath: pathSix
        },
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "Transformed from a graphic designer to a product designer seamlessly. The UX research module is gold!",
            author: "Leo Castelli"
        },
        {
            id: 2,
            rating: 4,
            text: "Figma mastery and design systems are taught with incredible depth. Highly practical.",
            author: "Isabella Garcia"
        },
        {
            id: 3,
            rating: 5,
            text: "Building a full UX case study from scratch gave me the confidence to handle real stakeholder meetings.",
            author: "Marcus Thorne"
        },
        {
            id: 4,
            rating: 4,
            text: "The mentorship focused on empathy-driven design changed my perspective on product building.",
            author: "Zara Khan"
        },
        {
            id: 5,
            rating: 5,
            text: "Finally understood the 'why' behind design decisions. This isn't just a UI course, it's a UX masterclass.",
            author: "Ethan Jacobs"
        },
        {
            id: 6,
            rating: 5,
            text: "The integration with AI design tools helped me work 3x faster. A forward-thinking curriculum.",
            author: "Chloe Wagner"
        },
        {
            id: 7,
            rating: 4,
            text: "Great emphasis on accessibility and user testing. Every designer should know this.",
            author: "Arjan Dhillon"
        },
        {
            id: 8,
            rating: 5,
            text: "Got placed at a top-tier tech firm immediately after the internship. The technical prep is unparalleled.",
            author: "Penelope Quinn"
        }
    ];

    const benefitsData = [
        {
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            title: "Career Opportunities",
            description: "Access to 1000+ job placements with our partner companies across industries"
        },
        {
            icon: <FontAwesomeIcon icon={faCertificate} />,
            title: "Certification",
            description: "Industry-recognized certification that boosts your resume and credibility"
        },
        {
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
            title: "Mentorship",
            description: "1-on-1 mentorship sessions with experienced product design professionals"
        },
        {
            icon: <FontAwesomeIcon icon={faTools} />,
            title: "Software Access",
            description: "Free access to premium design software and tools during the course"
        },
        {
            icon: <FontAwesomeIcon icon={faNetworkWired} />,
            title: "Networking",
            description: "Join our community of 10,000+ designers and industry professionals"
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
            title: "Money Back Guarantee",
            description: "100% money-back guarantee if you don't land a job within 6 months"
        }
    ];

    const handleDownloadResource = (resourceId, resourceTitle, localPath, fileName) => {
        if (!downloadedResources.includes(resourceId)) {
            setDownloadedResources(prev => [...prev, resourceId]);
        }

        try {
            if (!localPath) {
                setToastMessage(`❌ File "${resourceTitle}" is not available for download.`);
                return;
            }

            const link = document.createElement('a');
            link.href = localPath;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setToastMessage(`✅ Downloaded: ${resourceTitle}`);

        } catch (error) {
            console.error('Download error:', error);
            setToastMessage(`❌ Error downloading ${resourceTitle}. File might not exist.`);
        }
    };

    const handleJoinCourseForResource = (resourceTitle) => {
        setToastMessage(`🔒 "${resourceTitle}" is only available to enrolled students. Please join our course to download this premium resource.`);
        setTimeout(() => {
            scrollToSection('signin');
        }, 1000);
    };

    const [isTransitioning, setIsTransitioning] = useState(true);
    const infiniteContent = Array(20).fill(courseContent).flat().map((item, i) => ({ ...item, uniqueId: i }));

    const handleTransitionEnd = () => {
        if (activeCourseIndex <= courseContent.length || activeCourseIndex >= infiniteContent.length - courseContent.length * 2) {
            setIsTransitioning(false);
            const base = Math.floor(infiniteContent.length / 2);
            const relativeIndex = activeCourseIndex % courseContent.length;
            const newPos = base - (base % courseContent.length) + relativeIndex;
            setActiveCourseIndex(newPos);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    };

    useEffect(() => {
        const startAutoSlide = () => {
            autoSlideIntervalRef.current = setInterval(() => {
                setActiveCourseIndex((prevIndex) => prevIndex + 1);
            }, 5000);
        };

        startAutoSlide();
        const container = cardsWrapperRef.current;
        const pauseAutoSlide = () => {
            if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
        };

        const resumeAutoSlide = () => {
            if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
            startAutoSlide();
        };

        if (container) {
            container.addEventListener('mouseenter', pauseAutoSlide);
            container.addEventListener('mouseleave', resumeAutoSlide);
        }

        return () => {
            if (autoSlideIntervalRef.current) clearInterval(autoSlideIntervalRef.current);
            if (container) {
                container.removeEventListener('mouseenter', pauseAutoSlide);
                container.removeEventListener('mouseleave', resumeAutoSlide);
            }
        };
    }, [courseContent.length]);

    const resetAutoSlide = () => {
        if (autoSlideIntervalRef.current) {
            clearInterval(autoSlideIntervalRef.current);
            autoSlideIntervalRef.current = setInterval(() => {
                setActiveCourseIndex((prev) => prev + 1);
            }, 5000);
        }
    };

    const handlePrevClick = () => {
        setActiveCourseIndex(prev => prev - 1);
        resetAutoSlide();
    };

    const handleNextClick = () => {
        setActiveCourseIndex(prev => prev + 1);
        resetAutoSlide();
    };

    const handleDotNavigation = (idx) => {
        const base = Math.floor(activeCourseIndex / courseContent.length) * courseContent.length;
        setActiveCourseIndex(base + idx);
        resetAutoSlide();
    };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSignSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitInternship({
                email: formData.email,
                course: formData.course
            });
            setShowSuccess(true);
            setFormData({ email: "", course: "UI/UX Designer", agreeTerms: false });
            setTimeout(() => setShowSuccess(false), 4000);
        } catch (error) {
            console.error("Internship submission failed:", error.message);
            alert(error.message);
        }
    };

    const handleImageClick = (imageData) => {
        setActiveDescription(activeDescription === imageData.title ? null : imageData.title);
    };

    const handleBenefitsClick = () => {
        showLockedSectionToast("UI/UX Designer Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'UX-filled' : ''}
                />
            );
        }
        return stars;
    };

    const getFileTypeIcon = (type) => {
        switch (type) {
            case 'pdf': return <FontAwesomeIcon icon={faFilePdf} />;
            case 'zip': return <FontAwesomeIcon icon={faFileArchive} />;
            case 'doc': return <FontAwesomeIcon icon={faFileWord} />;
            default: return <FontAwesomeIcon icon={faFile} />;
        }
    };

    return (
        <>
            <div>
                <Helmet>
                    <title>Engloray Tech | UI/UX Designer Internship</title>
                    <meta name="description" content="Master user experience design, product thinking, and intuitive interface creation with our premium UI/UX internship." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray Tech | UI/UX Designer" />
                    <meta property="og:description" content="Design the future of products with Engloray Tech." />
                </Helmet>
            </div>
            {showToast && (
                <div className="UX-toast-message show">
                    <div className="UX-toast-content">
                        <span className="UX-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                        <span className="UX-toast-text">{toastMessage}</span>
                        <button className="UX-toast-close" onClick={() => setShowToast(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}

            <div className="UX-content" ref={containerRef}>
                {/* <TopNavBar /> */}
                {/* <Navbar /> */}

                {/* Hero Section */}
                <section className="UX-section UX-hero-section-new" id="home">
                    <div className="UX-hero-top-row">
                        <div className="UX-hero-badges">
                            <span className="UX-hero-badge"><FontAwesomeIcon icon={faCheck} /> 2023 BEST DESIGN</span>
                            <span className="UX-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> DIGITAL EXPERIENCE</span>
                        </div>
                        <div className="UX-hero-top-line-container">
                            <hr className="UX-hero-top-line" />
                            <svg className="UX-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="UX-hero-typography">
                        <div className="UX-hero-line UX-hero-line-1">

                            <div className="UX-hero-title-wrapper">
                                <svg className="UX-sparkle-icon-large" viewBox="0 0 24 24" width="40" height="40">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="UX-hero-title-word">Where Teams</h1>
                            </div>

                            <p className="UX-hero-desc-small">
                                Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                            </p>
                        </div>

                        <div className="UX-hero-line UX-hero-line-2">
                            <div className="UX-hero-image-pill UX-hero-image-1">
                                <img src={uxHeroImg} alt="UI/UX Interface Design" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <h1 className="UX-hero-title-word UX-text-purple">Design & Experience</h1>
                            <svg className="UX-sparkle-icon-small" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="UX-hero-line UX-hero-line-3">
                            <svg className="UX-sparkle-icon-small" viewBox="0 0 24 24" width="25" height="25" style={{ marginRight: '0rem' }}>
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="UX-hero-title-word" style={{ marginLeft: '-1rem' }}>Together</h1>
                            <div className="UX-hero-image-pill UX-hero-image-2">
                                <img src={galleryCollab} alt="Professional Design Studio" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                                <div className="UX-play-btn">
                                    <div className="UX-play-icon-triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="UX-hero-bottom-row">
                        <div className="UX-hero-bottom-left">
                            <p className="UX-hero-desc-large">
                                Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                            </p>
                            <div className="UX-hero-actions">
                                <button className="UX-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                <button className="UX-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                            </div>
                        </div>

                        <div className="UX-hero-bottom-right">
                            <div className="UX-rotating-stamp">
                                <svg viewBox="0 0 100 100" className="UX-stamp-text-svg">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            C R E A T I V E • D E V E L O P E R •
                                        </textPath>
                                    </text>
                                </svg>
                                <svg className="UX-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section className="UX-section UX-course-horizontal-section" id="course">
                    <div className="UX-course-background-top"></div>
                    <div className="UX-course-background-bottom"></div>

                    <div className="UX-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                        <div className="UX-course-header-row">
                            <div className="UX-course-header-left">
                                <h2 className="UX-section-title">
                                    <span className="UX-text-purple">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                </h2>
                            </div>
                            <svg className="UX-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <div className="UX-course-header-right">
                                <a href="#course" className="UX-view-all-link">View All</a>
                            </div>
                        </div>

                        <div className="UX-course-carousel-container">
                            <div className="UX-carousel-wrapper">
                                <div
                                    className="UX-course-cards-wrapper"
                                    ref={cardsWrapperRef}
                                    style={{
                                        '--active-index': activeCourseIndex,
                                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {infiniteContent.map((item) => (
                                        <div key={item.uniqueId} className="UX-course-new-card">
                                            <div className="UX-course-card-badges">
                                                <span className="UX-badge-pill">Phase {item.id}</span>
                                                <span className="UX-badge-pill UX-badge-dark">{item.duration}</span>
                                            </div>
                                            <h3 className="UX-course-card-title">{item.title}</h3>
                                            <div className="UX-course-card-checklist">
                                                {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                    <div key={i} className="UX-checklist-item">
                                                        <FontAwesomeIcon icon={faCheck} className="UX-checklist-icon" />
                                                        <span>{point}</span>
                                                    </div>
                                                )) : (
                                                    <p className="UX-course-card-desc">{item.description}</p>
                                                )}
                                            </div>
                                            <div className="UX-course-card-image">
                                                <img src={item.bgImage} alt={item.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="UX-carousel-arrows">
                                <button className="UX-carousel-arrow UX-carousel-arrow-left" onClick={handlePrevClick} aria-label="Previous module">
                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                </button>

                                <button className="UX-carousel-arrow UX-carousel-arrow-right" onClick={handleNextClick} aria-label="Next module">
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>

                        <div className="UX-course-dots">
                            {courseContent.map((_, index) => {
                                const isActive = (activeCourseIndex % courseContent.length) === index;
                                return (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <button className={`UX-course-dot ${isActive ? 'UX-active-dot' : ''}`} onClick={() => handleDotNavigation(index)} aria-label={`Go to slide ${index + 1}`} />
                                        <span style={{ color: isActive ? 'white' : 'rgba(255, 255, 255, 0.4)', fontSize: '0.8rem', fontFamily: 'Inter', fontWeight: '600' }}>0{index + 1}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Dream Navigator Section */}
                <section className="UX-section UX-dream-navigator-section">
                    <div className="UX-dn-container">
                        <div className="UX-dn-header-row">
                            <div className="UX-dn-header-left">
                                <h2 className="UX-dn-title">
                                    <span>UX Resources, Research, </span>
                                    <br />
                                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem' }}>
                                        <button className="UX-split-action-btn" style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0 }} onClick={() => showLockedSectionToast("UX Resources, Research, Design Support")}>
                                            <FontAwesomeIcon icon={faLock} /> Join course to Access
                                        </button>
                                        <span>Design Support</span>
                                    </span>
                                </h2>
                            </div>
                            <div className="UX-dn-header-right">
                                <svg className="UX-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <p>
                                    Access our library of premium UX research templates, design systems, and expert support.
                                    Get 2000+ UI components, 50+ research plans, and expert mentorship.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="UX-section UX-influencer-section" id="signin">
                    <div className="UX-influencer-container">
                        <div className="UX-influencer-content">
                            {showForm ? (
                                <div className="UX-form-section UX-in-influencer">
                                    <div className="UX-form-wrapper UX-dark-form">
                                        <button className="UX-close-form-btn UX-close-dark" onClick={() => setShowForm(false)} aria-label="Close form">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                        <form className="UX-signin-form" onSubmit={handleSignSubmit}>
                                            <h3 className="UX-form-dark-title">Register Now</h3>
                                            <div className="UX-form-group">
                                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleFormChange} className={`UX-form-input ${errors.email ? 'UX-error' : ''}`} placeholder="Enter your email" />
                                                {errors.email && <span className="UX-error-message">{errors.email}</span>}
                                            </div>
                                            <div className="UX-form-group">
                                                <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                <input type="text" id="course" name="course" value={formData.course} onChange={handleFormChange} className={`UX-form-input ${errors.course ? 'UX-error' : ''}`} placeholder="Enter Course Name" />
                                                {errors.course && <span className="UX-error-message">{errors.course}</span>}
                                            </div>
                                            <div className="UX-form-group UX-checkbox-group">
                                                <input type="checkbox" id="agreeTerms" name="agreeTerms" checked={formData.agreeTerms} onChange={handleFormChange} />
                                                <label htmlFor="agreeTerms">I agree to the Terms of Service and Privacy Policy</label>
                                                {errors.agreeTerms && <span className="UX-error-message">{errors.agreeTerms}</span>}
                                            </div>
                                            <button type="submit" className="UX-submit-btn">
                                                Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="UX-influencer-split">
                                    <div className="UX-influencer-left">
                                        <h2 className="UX-influencer-title">
                                            Join <span className="UX-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                                            <br />
                                            <div className="UX-influencer-avatars">
                                                <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                <img src={iconEducationBook} alt="Education Book" />
                                                <img src={iconCertificate} alt="Education Certificate" />
                                            </div>
                                            to collaborate
                                            <br />
                                            with us

                                        </h2>
                                    </div>
                                    <div className="UX-influencer-right">
                                        <div className="UX-see-how-card" onClick={() => setShowForm(true)}>
                                            <div className="UX-card-top-icons">
                                                <div className="UX-video-circle">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                </div>
                                                <div className="UX-arrow-circle">
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                </div>
                                            </div>
                                            <h3 className="UX-see-how-text">See how<br />it's done</h3>
                                            <div className="UX-card-decorations">
                                                <div className="UX-decor-ring-1"></div>
                                                <div className="UX-decor-ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="UX-section UX-dream-navigator-section" id="dream-navigator">
                    <div className="UX-dn-container">
                        <div className="UX-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '2rem', position: 'relative' }}>
                            <div style={{ flex: 1 }}>
                                <h2 className="UX-dn-title">
                                    DESIGN
                                    <svg className="UX-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    RESOURCES
                                    <svg className="UX-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30">
                                        <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                    </svg>
                                </h2>
                                <div className="UX-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                    <svg className="UX-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Download valuable UX templates, research guides, and design sets to enhance your creative process.
                                    </p>
                                </div>
                            </div>

                            <div className="UX-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                <button className="UX-quick-tips-btn" onClick={() => setShowQuickTips(!showQuickTips)} style={{ background: '#1a1a2e', color: '#fff', border: 'none', padding: '0.8rem 1.5rem', borderRadius: '30px', cursor: 'pointer', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', marginTop: '1rem' }}>
                                    <FontAwesomeIcon icon={faLightbulb} style={{ color: '#ffd700' }} />
                                    Quick Tips & Shortcuts
                                </button>

                                <div className={`UX-quick-tips-panel ${showQuickTips ? 'UX-show' : ''}`} style={{ position: 'absolute', top: 'calc(100% + 15px)', right: 0, width: '350px', background: '#1a1a2e', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', zIndex: 100, opacity: showQuickTips ? 1 : 0, visibility: showQuickTips ? 'visible' : 'hidden', transform: showQuickTips ? 'translateY(0)' : 'translateY(-10px)', transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon icon={faLightbulb} style={{ color: '#ffd700', fontSize: '0.9rem' }} />
                                        </div>
                                        <span style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '0.9rem' }}>Tips</span>
                                    </div>
                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>UX Productivity Tips</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Master Figma Components</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Use components and variants to build scalable and maintainable design systems faster.</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Prioritize Accessibility</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Always check color contrast and button sizes to ensure your designs are inclusive for all users.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Accordion Resources */}
                        <div className="UX-dn-visual-row UX-resources-accordion">
                            {courseResources.slice(0, 6).map((resource, index) => {
                                const isActive = activeAccordionIndex === index;
                                const num = `0${index + 1}`;

                                if (isActive) {
                                    return (
                                        <div key={resource.id} className="UX-accordion-panel UX-accordion-expanded UX-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #fce7f3 0%, #f9a8d4 100%)' : 'linear-gradient(135deg, #fdf2f8 0%, #fbcfe8 100%)' }}>
                                            <div className="UX-dn-sc-header">
                                                <div className="UX-dn-sc-num">{num}</div>
                                                <div className="UX-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <h3 className="UX-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                            <p className="UX-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>
                                            <div className="UX-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                {resource.isRestricted && <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>}
                                            </div>

                                            {resource.isRestricted ? (
                                                <button className="UX-dn-sc-btn" onClick={() => handleJoinCourseForResource(resource.title)} style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}>
                                                    <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                </button>
                                            ) : (
                                                <button className={`UX-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'UX-downloaded' : ''}`} onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)} style={{ marginTop: 'auto', background: downloadedResources.includes(resource.id) ? '#4caf50' : '#1a1a2e', color: 'white' }}>
                                                    {downloadedResources.includes(resource.id) ? <> <FontAwesomeIcon icon={faCheck} /> Downloaded</> : <> <FontAwesomeIcon icon={faDownload} /> Download Now <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} /> </>}
                                                </button>
                                            )}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div key={resource.id} className={`UX-accordion-panel UX-accordion-collapsed UX-dn-v-pill ${index % 2 === 0 ? 'UX-dn-bg-dark' : 'UX-dn-bg-light'}`} onClick={() => setActiveAccordionIndex(index)}>
                                            <span className="UX-dn-v-text">{resource.title}</span>
                                            <div className="UX-dn-v-num">{num}</div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        <div className="UX-dn-stats-row">
                            <div className="UX-dn-stat-items">
                                <div className="UX-dn-stat-item"><strong>20</strong> Total Resources</div>
                                <div className="UX-dn-stat-item"><strong>15,000</strong> Total Downloads</div>
                                <div className="UX-dn-stat-item"><strong>{downloadedResources.length}</strong> Your Downloads</div>
                            </div>
                        </div>

                        <div className="UX-resources-note">
                            <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                            <p>
                                Our course includes <strong>20 comprehensive resources</strong> to support your UX journey. First 4 resources are available for free download. <strong>Advanced Research Templates</strong> and <strong>Case Study Guides</strong> are exclusive to enrolled students.
                            </p>
                        </div>
                        <hr className="UX-dn-divider" />

                        <div className="UX-dn-dashboard-row">
                            <div className="UX-dn-dash-left">
                                <h3 className="UX-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access Certificate included </h3>
                                <button className="UX-dn-dash-btn" onClick={handleBenefitsClick}>
                                    Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                </button>
                            </div>
                            <div className="UX-dn-dash-right">
                                <div className="UX-dn-dash-card">
                                    <div className="UX-dn-dash-icon">  <FontAwesomeIcon icon={faUsers} style={{ color: '#ec4899' }} /></div>
                                    <div className="UX-dn-dash-info">
                                        <span className="UX-dn-dash-label">Successful Graduates</span>
                                        <span className="UX-dn-dash-value">5,000+</span>
                                    </div>
                                </div>
                                <div className="UX-dn-dash-card">
                                    <div className="UX-dn-dash-icon">  <FontAwesomeIcon icon={faRocket} style={{ color: '#0ea5e9' }} /></div>
                                    <div className="UX-dn-dash-info">
                                        <span className="UX-dn-dash-label">Job Placement Rate</span>
                                        <span className="UX-dn-dash-value">92%</span>
                                    </div>
                                </div>
                                <div className="UX-dn-dash-card">
                                    <div className="UX-dn-dash-icon">  <FontAwesomeIcon icon={faHandshake} style={{ color: '#ec4899' }} /></div>
                                    <div className="UX-dn-dash-info">
                                        <span className="UX-dn-dash-label">Industry Partners</span>
                                        <span className="UX-dn-dash-value">50+</span>
                                    </div>
                                </div>
                                <div className="UX-dn-dash-card">
                                    <div className="UX-dn-dash-icon">  <FontAwesomeIcon icon={faComments} style={{ color: '#0ea5e9' }} /></div>
                                    <div className="UX-dn-dash-info">
                                        <span className="UX-dn-dash-label">Community Support</span>
                                        <span className="UX-dn-dash-value">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Gallery Section */}
                <section className="UX-section UX-new-gallery-section" id="gallery">
                    <div className="UX-Gallery-container-new">
                        <div className="UX-Gallery-header-new">
                            <div className="UX-Gallery-title-wrapper-new">
                                <span className="UX-Gallery-title-line-new"></span>
                                <h2 className="UX-Gallery-title-new">Design Environment</h2>
                            </div>
                        </div>

                        <div className="UX-Gallery-grid-new">
                            <div className="UX-Gallery-large-card-new" onClick={() => handleImageClick(imagesWithDescriptions[0])}>
                                <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="UX-Gallery-card-bg-new" />
                                <div className="UX-Gallery-card-overlay-new"></div>
                                <div className="UX-Gallery-card-content-new">
                                    <span className="UX-Gallery-badge-new">Environment</span>
                                    <h3 className="UX-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                </div>
                            </div>

                            <div className="UX-Gallery-middle-col-new">
                                {[1, 2, 3].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div key={index} className="UX-Gallery-small-card-new" onClick={() => handleImageClick(item)}>
                                            <div className="UX-Gallery-small-image-new">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                            <div className="UX-Gallery-small-content-new">
                                                <h4 className="UX-Gallery-small-title-new">{item.title}</h4>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="UX-Gallery-right-col-new">
                                {[4, 5].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div key={index} className="UX-Gallery-medium-card-new" onClick={() => handleImageClick(item)}>
                                            <img src={item.url} alt={item.title} className="UX-Gallery-card-bg-new" />
                                            <div className="UX-Gallery-card-overlay-new"></div>
                                            <div className="UX-Gallery-card-content-new">
                                                <h3 className="UX-Gallery-medium-title-new">{item.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {activeDescription && (
                            <div className="UX-gallery-description" style={{ marginTop: '2rem' }}>
                                <div className="UX-description-content">
                                    <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                    <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="UX-section UX-new-benefits-section" id="benefits">
                    {/* Background decorative SVG elements */}
                    <div className="UX-benefits-bg-shapes">
                        <svg className="UX-bg-shape UX-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#f472b6" strokeWidth="2" />
                        </svg>
                        <svg className="UX-bg-shape UX-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#f472b6" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="UX-benefits-container-new">
                        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                            <h2 className="UX-section-title">
                                <svg className="UX-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#db2777" />
                                </svg>
                                UI/UX Designer Benefits
                                <svg className="UX-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginLeft: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#db2777" />
                                </svg>
                            </h2>
                            <p className="UX-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                Accelerate your product design career with our industry-led internship benefits.
                            </p>
                        </div>

                        <div className="UX-benefits-image-grid-new">
                            {benefitsData.map((benefit, index) => {
                                const benefitImages = [benefitCareer, benefitCertification, benefitMentorship, benefitSoftware, benefitNetworking, benefitMoneyBack];
                                return (
                                    <div key={index} className={`UX-benefit-img-card-new UX-benefit-img-card-${index}-new`}>
                                        <img src={benefitImages[index]} alt={benefit.title} className="UX-benefit-card-bg-new" />
                                        <div className="UX-benefit-card-overlay-new"></div>
                                        <div className="UX-benefit-card-content-new">
                                            <div className="UX-benefit-card-header-new">
                                                <span className="UX-benefit-card-icon-new">{benefit.icon}</span>
                                                <h3 className="UX-benefit-card-title-new">{benefit.title}</h3>
                                            </div>
                                            <p className="UX-benefit-card-desc-new">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className="UX-section UX-dt-section" id="feedback">
                    <div className="UX-dt-container">
                        <div className="UX-dt-header">
                            <h2 className="UX-dt-title">
                                <span>UI/UX Designers</span> <span>Testimonials<svg className="UX-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#7ad690" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                            </h2>
                            <p className="UX-dt-subtitle">
                                Hear what our students have to say about their learning experience
                            </p>
                        </div>
                        <div className="UX-dt-cards-wrapper">
                            <div className="UX-dt-cards">
                                {[...testimonials, ...testimonials].map((testimonial, index) => {
                                    const cardClassIndex = (index % 5) + 1;
                                    const imgMap = {
                                        1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                        5: boy3, 6: girl3, 7: boy4, 8: girl4
                                    };
                                    const photoUrl = imgMap[testimonial.id];
                                    const isBoy = [1, 3, 5, 7].includes(testimonial.id);

                                    return (
                                        <div key={index} className={`UX-dt-card UX-dt-card-${cardClassIndex}`}>
                                            <div className="UX-dt-card-img-wrapper">
                                                <img
                                                    src={photoUrl}
                                                    alt={testimonial.author}
                                                    className={`UX-dt-card-img ${isBoy ? 'UX-dt-boy-avatar' : ''}`}
                                                />
                                            </div>
                                            <div className={`UX-dt-card-content UX-dt-content-bg-${cardClassIndex}`}>
                                                <h4 className="UX-dt-card-name">{testimonial.author}</h4>
                                                <p className="UX-dt-card-text">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
                <BackToTop />
            </div>
        </>
    );
}

export default UiuxDesignerInternPage;