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
    faChartLine,
    faInfoCircle  // This was added earlier
} from '@fortawesome/free-solid-svg-icons';
import './SalesExecutiveInternPage.css';
import benefitCareer from '../../../assets/iicons/benefit_career.png';
import benefitCertification from '../../../assets/iicons/benefit_certification.png';
import benefitMentorship from '../../../assets/iicons/benefit_mentorship.png';
import benefitSoftware from '../../../assets/iicons/benefit_software.png';
import benefitNetworking from '../../../assets/iicons/benefit_networking.png';
import benefitMoneyBack from '../../../assets/iicons/benefit_money_back.png';
import iconGraduationCap from '../../../assets/iicons/icon_graduation_cap.png';
import iconEducationBook from '../../../assets/iicons/icon_education_book.png';
import iconCertificate from '../../../assets/iicons/icon_certificate.png';
import boy1 from '../../../assets/images/boy1.png';
import boy2 from '../../../assets/images/boy2.png';
import boy3 from '../../../assets/images/boy3.png';
import boy4 from '../../../assets/images/boy4.png';
import girl1 from '../../../assets/images/girl1.png';
import girl2 from '../../../assets/images/girl2.png';
import girl3 from '../../../assets/images/girl3.png';
import girl4 from '../../../assets/images/girl4.png';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";


import pathOne from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Graphic Designer Benefits.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Learning, Skill Development & Growth.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Productivity, AI & Workflow Support.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const SalesExecutiveInternPage = () => {
    const [activeSection, setActiveSection] = useState('home');
    const sectionsRef = useRef({});
    const containerRef = useRef(null);

    const [formData, setFormData] = useState({
        email: '',
        course: '',
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
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                email: formData.email,
                course: formData.course
            };

            await submitInternship(payload);

            // ✅ success UI
            setShowSuccess(true);

            setFormData({
                email: "",
                course: ""
            });

            setTimeout(() => {
                setShowSuccess(false);
            }, 4000);

        } catch (error) {
            console.error("Internship submission failed:", error.message);
            alert(error.message); // backend error text
        }
    };


    const courseContent = [
        {
            id: 1,
            title: "Sales Fundamentals & Lead Gen",
            description: [
                "Introduction to Modern Sales",
                "Lead Generation Strategies",
                "Target Audience Identification",
                "Cold Outreach Fundamentals",
                "CRM Basics & Data Entry",
                "Understanding the Buying Cycle"
            ],
            duration: "Foundations",
            bgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faBullseye} />
        },
        {
            id: 2,
            title: "Communication & Pitching",
            description: [
                "Persuasive Pitching Mastery",
                "Effective Communication Skills",
                "Handle Objections Confidently",
                "Developing Value Propositions",
                "Product Demonstration Mastery",
                "Building Client Rapport"
            ],
            duration: "Communication",
            bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faComments} />
        },
        {
            id: 3,
            title: "CRM & Pipeline Management",
            description: [
                "Salesforce & Hubspot Basics",
                "Pipeline Optimization",
                "Follow-up Strategy & Cadence",
                "Client Relationship Management",
                "Automating Outreach",
                "Forecasting & Sales Reports"
            ],
            duration: "Management",
            bgImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faBriefcase} />
        },
        {
            id: 4,
            title: "Negotiation & Closing",
            description: [
                "Strategic Negotiation Skills",
                "Advanced Closing Techniques",
                "Final Contract Lifecycle",
                "Upselling & Relationship Growth",
                "Handling High-Value Accounts",
                "Final Sales Presentation"
            ],
            duration: "Closing",
            bgImage: "https://images.unsplash.com/photo-1573164060897-425941c302ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faHandshake} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Sales Training Hub",
            description: "Our dedicated training center equipped with the latest CRM tools and simulation setups for high-stakes selling.",
            icon: <FontAwesomeIcon icon={faUserTie} />
        },
        {
            url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Outreach Strategy Lab",
            description: "Collaborative sessions where teams analyze market trends and develop multi-channel outreach strategies for lead generation.",
            icon: <FontAwesomeIcon icon={faComments} />
        },
        {
            url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Pitch Presentation Room",
            description: "A professional pitch room where interns practice executive-level presentations and receive real-time peer and mentor feedback.",
            icon: <FontAwesomeIcon icon={faRocket} />
        },
        {
            url: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Sales Performance Review",
            description: "Weekly analysis of sales metrics and pipeline health, providing interns with direct insights into their professional growth.",
            icon: <FontAwesomeIcon icon={faBullseye} />
        },
        {
            url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Negotiation Masterclass",
            description: "Expert-led workshops focusing on psychology, non-verbal cues, and strategic leverage to close complex business deals.",
            icon: <FontAwesomeIcon icon={faHandshake} />
        },
        {
            url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "CRM Virtual Lab",
            description: "Hands-on experience with industry-leading CRM platforms like Salesforce, HubSpot, and Pipedrive to manage global leads.",
            icon: <FontAwesomeIcon icon={faBuilding} />
        }
    ];

    // Course resources with local file paths
    const courseResources = [
        {
            id: 1,
            title: "Sales Strategy & CRM Tools",
            description: "A comprehensive guide on managing the sales lifecycle, utilizing modern CRM tools, and executing effective lead generation campaigns. This module covers identifying target markets, automating initial outreach, and maintaining accurate data-driven pipelines for maximum conversion rates and performance tracking.",
            type: "pdf",
            size: "2.8 MB",
            downloads: 4120,
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            isRestricted: false,
            fileName: "Sales Strategy & CRM Tools.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Sales Executive Benefits",
            description: "Explores the psychological triggers behind successful sales and client relationships. This resource provides insights into mirroring techniques, building trust rapidly, and aligning product values with client needs to influence decision-making and build long-term business loyalty and sustained revenue growth.",
            type: "pdf",
            size: "3.5 MB",
            downloads: 3250,
            icon: <FontAwesomeIcon icon={faStar} />,
            isRestricted: false,
            fileName: "Sales Executive Benefits.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Prospecting & Script Pack",
            description: "A collection of high-converting cold call scripts, email templates, and LinkedIn outreach frameworks. These proven templates are designed to break through the noise, secure initial meetings, and move prospects smoothly through the early stages of the sales funnel with professional persistence.",
            type: "pdf",
            size: "1.5 MB",
            downloads: 2890,
            icon: <FontAwesomeIcon icon={faComments} />,
            isRestricted: false,
            fileName: "Prospecting & Script Pack.pdf",
            localPath: pathOne
        },
        {
            id: 4,
            title: "Client Proposal Templates",
            description: "Professional, customizable proposal and presentation templates for B2B and SaaS sales. Learn how to structure pricing, showcase ROI, and address common client pain points visually and strategically to increase your win rate and shorten the overall sales cycle significantly.",
            type: "zip",
            size: "22 MB",
            downloads: 1980,
            icon: <FontAwesomeIcon icon={faFileAlt} />,
            isRestricted: false,
            fileName: "Client Proposal Templates.zip",
            localPath: pathOne
        },
        {
            id: 5,
            title: "Negotiation & Growth Strategies",
            description: "Advanced techniques for handling complex negotiations and upselling existing accounts. This guide focuses on finding win-win outcomes, managing procurement obstacles, and expanding client relationships through strategic account management and periodic performance reviews for long-term growth.",
            type: "pdf",
            size: "2.1 MB",
            downloads: 1420,
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
            isRestricted: true,
            fileName: "Negotiation & Growth Strategies.pdf",
            localPath: pathFive
        },
        {
            id: 6,
            title: "Sales Leadership & Support",
            description: "A Roadmap for transitioning from an individual contributor to a sales leadership role. This resource outlines team management principles, sales coaching frameworks, and performance monitoring strategies to support collective team success and organizational scalability in various industries.",
            type: "pdf",
            size: "1.9 MB",
            downloads: 1150,
            icon: <FontAwesomeIcon icon={faUserTie} />,
            isRestricted: true,
            fileName: "Sales Leadership & Support.pdf",
            localPath: pathSix
        },
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "The communication skills I developed here helped me close my first high-value deal within weeks.",
            author: "Rahul S"
        },
        {
            id: 2,
            rating: 4,
            text: "I gained a deep understanding of CRM tools and pipeline management. Very practical training.",
            author: "Pooja K"
        },
        {
            id: 3,
            rating: 5,
            text: "From cold outreach to final closing, the ENGLORAY mentors guided me through every step.",
            author: "Siddharth M"
        },
        {
            id: 4,
            rating: 4,
            text: "The sales simulation exercises were a game-changer. I felt confident before even talking to real clients.",
            author: "Divya R"
        },
        {
            id: 5,
            rating: 5,
            text: "Incredible hands-on experience in lead generation and objection handling. Highly recommended!",
            author: "Manish P"
        },
        {
            id: 6,
            rating: 5,
            text: "The networking opportunities with industry leaders provided a massive boost to my sales career.",
            author: "Ananya V"
        },
        {
            id: 7,
            rating: 4,
            text: "Great structure and flow. I really appreciated the real-world client briefs and negotiation workshops.",
            author: "Kiran J"
        },
        {
            id: 8,
            rating: 5,
            text: "Transformed my professional approach. I'm now a top performer at a leading SaaS company!",
            author: "Harshini T"
        }
    ];


    const benefits = [
        {
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            title: "Career Opportunities",
            description: "Direct access to high-paying sales roles with our 1000+ industry partners"
        },
        {
            icon: <FontAwesomeIcon icon={faCertificate} />,
            title: "Certification",
            description: "Recognized Sales Excellence certification to validate your professional expertise"
        },
        {
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
            title: "Sales Coaching",
            description: "Weekly 1-on-1 coaching with senior sales leaders to refine your pitching and closing"
        },
        {
            icon: <FontAwesomeIcon icon={faTools} />,
            title: "Sales Tools Access",
            description: "Hands-on experience with premium CRM and outreach automation software"
        },
        {
            icon: <FontAwesomeIcon icon={faNetworkWired} />,
            title: "Business Networking",
            description: "Connect with a global network of 10,000+ professionals and business leaders"
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
            title: "Performance Growth",
            description: "Learn how to consistently hit targets and scale your professional earning potential"
        }
    ];

    const totalResourcesCount = 20;
    const yourDownloadsCount = downloadedResources.length;
    const yourDownloadsPercentage = Math.round((yourDownloadsCount / totalResourcesCount) * 100);

    // Function to download local files
    const handleDownloadResource = (resourceId, resourceTitle, localPath, fileName) => {
        if (!downloadedResources.includes(resourceId)) {
            setDownloadedResources(prev => [...prev, resourceId]);
        }

        try {
            if (!localPath) {
                setToastMessage(`❌ File "${resourceTitle}" is not available for download.`);
                return;
            }

            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = localPath;
            link.download = fileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Show success message
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

    // Generate infinite array track (large enough buffer)
    const infiniteContent = Array(20).fill(courseContent).flat().map((item, i) => ({ ...item, uniqueId: i }));

    const handleTransitionEnd = () => {
        // If we've drifted too close to bounds, jump back to center silently
        if (activeCourseIndex <= courseContent.length || activeCourseIndex >= infiniteContent.length - courseContent.length * 2) {
            setIsTransitioning(false); // disable animation
            const base = Math.floor(infiniteContent.length / 2);
            // adjust to keep the relative visual position exactly identical
            const relativeIndex = activeCourseIndex % courseContent.length;
            const newPos = base - (base % courseContent.length) + relativeIndex;

            setActiveCourseIndex(newPos);

            // Re-enable transition for the next click after the DOM updates
            setTimeout(() => {
                setIsTransitioning(true);
            }, 50);
        }
    };

    // Auto-slide functionality
    useEffect(() => {
        const startAutoSlide = () => {
            autoSlideIntervalRef.current = setInterval(() => {
                setActiveCourseIndex((prevIndex) => prevIndex + 1);
            }, 5000);
        };

        startAutoSlide();

        const container = cardsWrapperRef.current;
        const pauseAutoSlide = () => {
            if (autoSlideIntervalRef.current) {
                clearInterval(autoSlideIntervalRef.current);
            }
        };

        const resumeAutoSlide = () => {
            if (autoSlideIntervalRef.current) {
                clearInterval(autoSlideIntervalRef.current);
            }
            startAutoSlide();
        };

        if (container) {
            container.addEventListener('mouseenter', pauseAutoSlide);
            container.addEventListener('mouseleave', resumeAutoSlide);
        }

        return () => {
            if (autoSlideIntervalRef.current) {
                clearInterval(autoSlideIntervalRef.current);
            }
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
        // ensure base is aligned, if the idx is selected jump right to it starting from current base
        setActiveCourseIndex(base + idx);
        resetAutoSlide();
    };



    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // const validatePassword = (password) => {
    //   return password.length >= 6;
    // };

    const handleFormChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSignSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                email: formData.email,
                course: formData.course
            };

            await submitInternship(payload);

            // ✅ SUCCESS UI
            setShowSuccess(true);

            setFormData({
                email: "",
                course: ""
            });

            setTimeout(() => {
                setShowSuccess(false);
            }, 4000);

        } catch (error) {
            console.error("Internship submission failed:", error.message);
            alert(error.message); // shows backend validation message
        }
    };


    const handleImageClick = (imageData) => {
        if (activeDescription === imageData.title) {
            setActiveDescription(null);
        } else {
            setActiveDescription(imageData.title);
        }
    };

    const handleBenefitsClick = () => {
        showLockedSectionToast("Sales Executive Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'SE-filled' : ''}
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
                    <title>Engloray Tech</title>
                    <meta name="description" content="Transform creative concepts into professional designs while mastering Adobe" />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    {/* <link rel="canonical" href="https://yourapp.com" /> */}
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Your App | Config" />
                    <meta property="og:description" content="Lorem Ipsum" />
                    {/* <meta property="og:url" content="https://yourapp.com" /> */}
                </Helmet>
            </div>
            {/* Toast Message - Fixed Position */}
            {showToast && (
                <div className="SE-toast-message show">
                    <div className="SE-toast-content">
                        <span className="SE-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                        <span className="SE-toast-text">{toastMessage}</span>
                        <button
                            className="SE-toast-close"
                            onClick={() => setShowToast(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}

            <div className="SE-content" ref={containerRef}>
                {/* <TopNavBar/> */}
                {/* <Navbar/> */}

                {/* Hero Section */}
                <section
                    className="SE-section SE-hero-section-new"
                    id="home"
                >
                    <div className="SE-hero-top-row">
                        <div className="SE-hero-badges">
                            <span className="SE-hero-badge"><FontAwesomeIcon icon={faCheckCircle} /> 2023 BEST SALES</span>
                            <span className="SE-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> WORLD CLASS REVENUE</span>
                        </div>
                        <div className="SE-hero-top-line-container">
                            <hr className="SE-hero-top-line" />
                            <svg className="SE-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="SE-hero-typography">
                        <div className="SE-hero-line SE-hero-line-1">
                            <div className="SE-hero-title-wrapper">
                                <svg className="SE-sparkle-icon-large" viewBox="0 0 24 24" width="40" height="40">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="SE-hero-title-word">Where Teams</h1>
                            </div>
                            <p className="SE-hero-desc-small">
                                Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                            </p>
                        </div>

                        <div className="SE-hero-line SE-hero-line-2">
                            <div className="SE-hero-image-pill SE-hero-image-1">
                                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Sales Executive" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <h1 className="SE-hero-title-word SE-text-purple">Sell & Grow</h1>
                            <svg className="SE-sparkle-icon-small" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="SE-hero-line SE-hero-line-3">
                            <svg className="SE-sparkle-icon-small" viewBox="0 0 24 24" width="25" height="25" >
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="SE-hero-title-word" >Together</h1>
                            <div className="SE-hero-image-pill SE-hero-image-2">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Sales Executive Studio" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                <div className="SE-play-btn">
                                    <div className="SE-play-icon-triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="SE-hero-bottom-row">
                        <div className="SE-hero-bottom-left">
                            <p className="SE-hero-desc-large">
                                Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                            </p>
                            <div className="SE-hero-actions">
                                <button className="SE-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                <button className="SE-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                            </div>
                        </div>

                        <div className="SE-hero-bottom-right">
                            <div className="SE-rotating-stamp">
                                <svg viewBox="0 0 100 100" className="SE-stamp-text-svg">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            C R E A T I V E • D E V E L O P E R •
                                        </textPath>
                                    </text>
                                </svg>
                                <svg className="SE-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section
                    className="SE-section SE-course-horizontal-section"
                    id="course"
                >
                    <div className="SE-course-background-top"></div>
                    <div className="SE-course-background-bottom"></div>

                    <div className="SE-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                        <div className="SE-course-header-row">
                            <div className="SE-course-header-left">
                                <h2 className="SE-section-title" style={{ color: '#2d2d2d' }}>INTERNSHIP</h2>
                                <h2 className="SE-section-title">
                                    <span className="SE-text-purple">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                </h2>
                            </div>
                            <svg className="SE-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <div className="SE-course-header-right">
                                <a href="#course" className="SE-view-all-link">View All</a>
                            </div>
                        </div>

                        <div className="SE-course-carousel-container">
                            <div className="SE-carousel-wrapper">
                                <div
                                    className="SE-course-cards-wrapper"
                                    ref={cardsWrapperRef}
                                    style={{
                                        '--active-index': activeCourseIndex,
                                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {infiniteContent.map((item) => (
                                        <div key={item.uniqueId} className="SE-course-new-card">
                                            <div className="SE-course-card-badges">
                                                <span className="SE-badge-pill">Phase {item.id}</span>
                                                <span className="SE-badge-pill SE-badge-dark">{item.duration}</span>
                                            </div>
                                            <h3 className="SE-course-card-title">{item.title}</h3>

                                            {/* Checklist items in 2-column grid */}
                                            <div className="SE-course-card-checklist">
                                                {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                    <div key={i} className="SE-checklist-item">
                                                        <FontAwesomeIcon icon={faCheck} className="SE-checklist-icon" />
                                                        <span>{point}</span>
                                                    </div>
                                                )) : (
                                                    <p className="SE-course-card-desc">{item.description}</p>
                                                )}
                                            </div>

                                            <div className="SE-course-card-image">
                                                <img src={item.bgImage} alt={item.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="SE-carousel-arrows">
                                <button
                                    className="SE-carousel-arrow SE-carousel-arrow-left"
                                    onClick={handlePrevClick}
                                    aria-label="Previous module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                </button>

                                <button
                                    className="SE-carousel-arrow SE-carousel-arrow-right"
                                    onClick={handleNextClick}
                                    aria-label="Next module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>

                        <div className="SE-course-dots">
                            {courseContent.map((_, index) => {
                                const isActive = (activeCourseIndex % courseContent.length) === index;
                                return (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <button
                                            className={`SE-course-dot ${isActive ? 'SE-active-dot' : ''}`}
                                            onClick={() => handleDotNavigation(index)}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                        <span style={{
                                            color: isActive ? 'white' : 'rgba(255, 255, 255, 0.4)',
                                            fontSize: '0.8rem',
                                            fontFamily: 'Inter',
                                            fontWeight: '600'
                                        }}>
                                            0{index + 1}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* <section className="SE-section SE-influencer-section" id="signin">
          <div className="SE-influencer-container">
            <div className="SE-influencer-content">
              {showForm ? (
                <div className="SE-form-section SE-in-influencer">
                  <div className="SE-form-wrapper SE-dark-form">
                    <button
                      className="SE-close-form-btn SE-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="SE-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="SE-form-dark-title">Register Now</h3>
                      <div className="SE-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`SE-form-input ${errors.email ? 'SE-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="SE-error-message">{errors.email}</span>}
                      </div>

                      <div className="SE-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`SE-form-input ${errors.course ? 'SE-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="SE-error-message">{errors.course}</span>}
                      </div>

                      <div className="SE-form-group SE-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'SE-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="SE-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="SE-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="SE-influencer-split">
                  <div className="SE-influencer-left">
                    <h2 className="SE-influencer-title">
                      Join <span className="SE-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="SE-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="SE-influencer-search-bar">
                        <span className="SE-search-placeholder">| Search</span>
                        <div className="SE-search-actions">
                          <FontAwesomeIcon icon={faStar} className="SE-voice-icon" />
                          <button className="SE-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="SE-influencer-right">
                    <div
                      className="SE-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="SE-card-top-icons">
                        <div className="SE-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="SE-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="SE-see-how-text">See how<br />it's done</h3>
                      <div className="SE-card-decorations">
                        <div className="SE-decor-ring-1"></div>
                        <div className="SE-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="SE-join-course-banner">
                <h3 className="SE-join-banner-title">JOIN OUR COURSE</h3>
                <div className="SE-join-banner-content">
                  <h4 className="SE-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Sales Executive course</h4>
                  <p className="SE-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="SE-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div>
        </section> */}

                {/* Dream Navigator Section */}


                <section className="SE-section SE-influencer-section" id="signin">
                    <div className="SE-influencer-container">
                        <div className="SE-influencer-content">
                            {showForm ? (
                                <div className="SE-form-section SE-in-influencer">
                                    <div className="SE-form-wrapper SE-dark-form">
                                        <button
                                            className="SE-close-form-btn SE-close-dark"
                                            onClick={() => setShowForm(false)}
                                            aria-label="Close form"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>

                                        <form className="SE-signin-form" onSubmit={handleSignSubmit}>
                                            <h3 className="SE-form-dark-title">Register Now</h3>
                                            <div className="SE-form-group">
                                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={`SE-form-input ${errors.email ? 'SE-error' : ''}`}
                                                    placeholder="Enter your email"
                                                />
                                                {errors.email && <span className="SE-error-message">{errors.email}</span>}
                                            </div>

                                            <div className="SE-form-group">
                                                <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                <input
                                                    type="text"
                                                    id="course"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleFormChange}
                                                    className={`SE-form-input ${errors.course ? 'SE-error' : ''}`}
                                                    placeholder="Enter Course Name"
                                                />
                                                {errors.course && <span className="SE-error-message">{errors.course}</span>}
                                            </div>

                                            <div className="SE-form-group SE-checkbox-group">
                                                <input
                                                    type="checkbox"
                                                    id="agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleFormChange}
                                                    className={errors.agreeTerms ? 'SE-error' : ''}
                                                />
                                                <label htmlFor="agreeTerms">
                                                    <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                                                </label>
                                                {errors.agreeTerms && <span className="SE-error-message">{errors.agreeTerms}</span>}
                                            </div>

                                            <button type="submit" className="SE-submit-btn">
                                                <FontAwesomeIcon icon={faRocket} /> Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="SE-influencer-split">
                                    <div className="SE-influencer-left">
                                        <h2 className="SE-influencer-title">
                                            Join <span className="SE-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                                            <br />
                                            <div className="SE-influencer-avatars">
                                                <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                <img src={iconEducationBook} alt="Education Book" />
                                                <img src={iconCertificate} alt="Education Certificate" />
                                            </div>
                                            to collaborate
                                            <br />
                                            with us
                                            {/* <div className="SE-influencer-search-bar">
                        <span className="SE-search-placeholder"> Search</span>
                        <div className="SE-search-actions">
                          <FontAwesomeIcon icon={faStar} className="SE-voice-icon" />
                          <button className="SE-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div> */}
                                        </h2>
                                    </div>
                                    <div className="SE-influencer-right">
                                        <div
                                            className="SE-see-how-card"
                                            onClick={() => setShowForm(true)}
                                        >
                                            <div className="SE-card-top-icons">
                                                <div className="SE-video-circle">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                </div>
                                                <div className="SE-arrow-circle">
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                </div>
                                            </div>
                                            <h3 className="SE-see-how-text">See how<br />it's done</h3>
                                            <div className="SE-card-decorations">
                                                <div className="SE-decor-ring-1"></div>
                                                <div className="SE-decor-ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* {!showForm && (
              <div className="SE-join-course-banner">
                <h3 className="SE-join-banner-title">JOIN OUR COURSE</h3>
                <div className="SE-join-banner-content">
                  <h4 className="SE-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Sales Executive course</h4>
                  <p className="SE-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="SE-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                    </div>
                </section>

                <section className="SE-section SE-dream-navigator-section" id="dream-navigator">
                    <div className="SE-dn-container">

                        {/* Design Resources Title - styled like Dream Navigator header */}
                        <div className="SE-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '0.5rem', position: 'relative' }}>
                            <div style={{ flex: 1 }}>
                                <h2 className="SE-dn-title">
                                    <div className="SE-dn-title-line1">
                                        Sales Strategy &
                                        <svg className="SE-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30" style={{ marginLeft: '10px' }}>
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="SE-dn-title-line2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                                        <button
                                            className="SE-split-action-btn"
                                            style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0, flexShrink: 0 }}
                                            onClick={() => showLockedSectionToast("Sales Strategy & Performance Support")}
                                        >
                                            <FontAwesomeIcon icon={faLock} /> Join course to Access
                                        </button>
                                        <span style={{ whiteSpace: 'nowrap' }}>Performance Support</span>
                                        <svg className="SE-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30" style={{ flexShrink: 0 }}>
                                            <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </h2>
                                <div className="SE-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                    <svg className="SE-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Get access to modern CRM tools, high-converting pitch decks, and direct mentorship
                                        to accelerate your sales performance and career growth.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Tips Toggle Button */}
                            <div className="SE-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                <button
                                    className="SE-quick-tips-btn"
                                    onClick={() => setShowQuickTips(!showQuickTips)}
                                    style={{
                                        background: '#1a1a2e',
                                        color: '#fff',
                                        border: 'none',
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '30px',
                                        cursor: 'pointer',
                                        fontWeight: '600',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                        transition: 'all 0.3s ease',
                                        marginTop: '1rem'
                                    }}
                                >
                                    <FontAwesomeIcon icon={faLightbulb} style={{ color: '#ffd700' }} />
                                    Quick Tips & Shortcuts
                                </button>

                                {/* Floating Tips Panel */}
                                <div
                                    className={`SE-quick-tips-panel ${showQuickTips ? 'SE-show' : ''}`}
                                    style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 15px)',
                                        right: 0,
                                        width: '350px',
                                        background: '#1a1a2e',
                                        borderRadius: '16px',
                                        padding: '1.5rem',
                                        boxShadow: '0 10px 40px rgba(0,0,0,0.2)',
                                        zIndex: 100,
                                        opacity: showQuickTips ? 1 : 0,
                                        visibility: showQuickTips ? 'visible' : 'hidden',
                                        transform: showQuickTips ? 'translateY(0)' : 'translateY(-10px)',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                                        <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <FontAwesomeIcon icon={faLightbulb} style={{ color: '#ffd700', fontSize: '0.9rem' }} />
                                        </div>
                                        <span style={{ color: '#ffd700', fontWeight: 'bold', fontSize: '0.9rem' }}>Tips</span>
                                    </div>

                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>Design Productivity Tips</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* Tip 1 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Organize Your Design Files</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Keep your design files properly named and organized in folders so they are easy to locate and edit later.</p>
                                            </div>
                                        </div>
                                        {/* Tip 2 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Use Consistent Typography</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Always maintain consistent font styles, sizes, and spacing to ensure a professional and clean design layout.</p>
                                            </div>
                                        </div>
                                        {/* Tip 3 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Leverage Design Shortcuts</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Use keyboard shortcuts in tools like Photoshop, Illustrator, or Figma to speed up your workflow.</p>
                                            </div>
                                        </div>
                                        {/* Tip 4 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Maintain Design Consistency</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Follow brand guidelines for colors, typography, and spacing to keep designs visually consistent.</p>
                                            </div>
                                        </div>
                                        {/* Tip 5 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Optimize Images Before Export</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Compress and optimize images before exporting to improve performance and maintain quality.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Visual Row - Accordion */}
                        <div className="SE-dn-visual-row SE-resources-accordion">
                            {courseResources.slice(0, 6).map((resource, index) => {
                                const isActive = activeAccordionIndex === index;
                                const num = `0${index + 1}`;

                                if (isActive) {
                                    return (
                                        <div key={resource.id} className="SE-accordion-panel SE-accordion-expanded SE-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #dcfce7 0%, #86efac 100%)' : 'linear-gradient(135deg, #f0fdf4 0%, #bbf7d0 100%)' }}>
                                            <div className="SE-dn-sc-header">
                                                <div className="SE-dn-sc-num">{num}</div>
                                                <div className="SE-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <h3 className="SE-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                            <p className="SE-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>

                                            <div className="SE-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                {resource.isRestricted && (
                                                    <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>
                                                )}
                                            </div>

                                            {resource.isRestricted ? (
                                                <button
                                                    className="SE-dn-sc-btn"
                                                    onClick={() => handleJoinCourseForResource(resource.title)}
                                                    style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}
                                                >
                                                    <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                </button>
                                            ) : (
                                                <button
                                                    className={`SE-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'SE-downloaded' : ''}`}
                                                    onClick={() => handleDownloadResource(resource.id, resource.title, resource.localPath, resource.fileName)}
                                                    style={{ marginTop: 'auto', background: downloadedResources.includes(resource.id) ? '#4caf50' : '#1a1a2e', color: 'white' }}
                                                >
                                                    {downloadedResources.includes(resource.id) ? (
                                                        <><FontAwesomeIcon icon={faCheckCircle} /> Downloaded</>
                                                    ) : (
                                                        <><FontAwesomeIcon icon={faDownload} /> Download Now <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} /></>
                                                    )}
                                                </button>
                                            )}
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div
                                            key={resource.id}
                                            className={`SE-accordion-panel SE-accordion-collapsed SE-dn-v-pill ${index % 2 === 0 ? 'SE-dn-bg-dark' : 'SE-dn-bg-light'}`}
                                            onClick={() => setActiveAccordionIndex(index)}
                                        >
                                            <span className="SE-dn-v-text">{resource.title}</span>
                                            <div className="SE-dn-v-num">{num}</div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        {/* Stats Row - horizontal style matching the reference UI */}
                        <div className="SE-dn-stats-row">
                            <div className="SE-dn-stat-items">
                                <div className="SE-dn-stat-item"><strong>20</strong> Total Resources</div>
                                <div className="SE-dn-stat-item"><strong>32,000</strong> Total Downloads</div>
                                <div className="SE-dn-stat-item"><strong>{yourDownloadsCount}</strong> Your Downloads</div>
                            </div>
                            <div className="SE-dn-socials">
                                <span className="SE-dn-social-icon" title="Total Resources"><FontAwesomeIcon icon={faFileAlt} /></span>
                                <span className="SE-dn-social-icon" title="Total Downloads"><FontAwesomeIcon icon={faDownload} /></span>
                                <span className="SE-dn-social-icon" title="Your Downloads"><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </div>

                        <div className="SE-resources-note">
                            <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                            <p>
                                Our course includes <strong>20 comprehensive resources</strong> to support your design journey.
                                First 4 resources are available for free download. <strong>Design Software Cheatsheets</strong> and
                                <strong> Portfolio Building Guide</strong> are exclusive to enrolled students.
                                Join our course to access all 20 premium resources and unlock full learning potential.
                            </p>
                        </div>

                        <hr className="SE-dn-divider" />

                        {/* Bottom Dashboard Row */}
                        <div className="SE-dn-dashboard-row">
                            <div className="SE-dn-dash-left">
                                <h3 className="SE-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access  Certificate included </h3>
                                <button
                                    className="SE-dn-dash-btn"
                                    onClick={handleBenefitsClick}
                                >
                                    Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                </button>
                            </div>
                            <div className="SE-dn-dash-right">
                                <div className="SE-dn-dash-card">
                                    <div className="SE-dn-dash-icon SE-dash-icon-1"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#16a34a" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                                    <div className="SE-dn-dash-info">
                                        <span className="SE-dn-dash-label">Successful Graduates</span>
                                        <span className="SE-dn-dash-value">10,000+</span>
                                    </div>
                                </div>
                                <div className="SE-dn-dash-card">
                                    <div className="SE-dn-dash-icon SE-dash-icon-2"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#16a34a" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                    <div className="SE-dn-dash-info">
                                        <span className="SE-dn-dash-label">Job Placement Rate</span>
                                        <span className="SE-dn-dash-value">94%</span>
                                    </div>
                                </div>
                                <div className="SE-dn-dash-card">
                                    <div className="SE-dn-dash-icon SE-dash-icon-3"><FontAwesomeIcon icon={faUsers} style={{ color: '#16a34a' }} /></div>
                                    <div className="SE-dn-dash-info">
                                        <span className="SE-dn-dash-label">Industry Partners</span>
                                        <span className="SE-dn-dash-value">50+</span>
                                    </div>
                                </div>
                                <div className="SE-dn-dash-card">
                                    <div className="SE-dn-dash-icon SE-dash-icon-4"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#16a34a" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                                    <div className="SE-dn-dash-info">
                                        <span className="SE-dn-dash-label">Community Support</span>
                                        <span className="SE-dn-dash-value">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Influencers Section (Dark UI Style) */}
                {/* <section className="SE-section SE-influencer-section" id="signin">
          <div className="SE-influencer-container">
            <div className="SE-influencer-content">
              {showForm ? (
                <div className="SE-form-section SE-in-influencer">
                  <div className="SE-form-wrapper SE-dark-form">
                    <button
                      className="SE-close-form-btn SE-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="SE-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="SE-form-dark-title">Register Now</h3>
                      <div className="SE-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`SE-form-input ${errors.email ? 'SE-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="SE-error-message">{errors.email}</span>}
                      </div>

                      <div className="SE-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`SE-form-input ${errors.course ? 'SE-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="SE-error-message">{errors.course}</span>}
                      </div>

                      <div className="SE-form-group SE-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'SE-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="SE-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="SE-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="SE-influencer-split">
                  <div className="SE-influencer-left">
                    <h2 className="SE-influencer-title">
                      Join <span className="SE-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="SE-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="SE-influencer-search-bar">
                        <span className="SE-search-placeholder">| Search</span>
                        <div className="SE-search-actions">
                          <FontAwesomeIcon icon={faStar} className="SE-voice-icon" />
                          <button className="SE-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="SE-influencer-right">
                    <div
                      className="SE-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="SE-card-top-icons">
                        <div className="SE-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="SE-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="SE-see-how-text">See how<br />it's done</h3>
                      <div className="SE-card-decorations">
                        <div className="SE-decor-ring-1"></div>
                        <div className="SE-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="SE-join-course-banner">
                <h3 className="SE-join-banner-title">JOIN OUR COURSE</h3>
                <div className="SE-join-banner-content">
                  <h4 className="SE-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Sales Executive course</h4>
                  <p className="SE-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="SE-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div> */}


                {/* Image Gallery Section */}
                <section
                    className="SE-section SE-new-gallery-section"
                    id="gallery"
                >
                    <div className="SE-Gallery-container-new">
                        <div className="SE-Gallery-header-new">
                            <div className="SE-Gallery-title-wrapper-new">
                                <span className="SE-Gallery-title-line-new"></span>
                                <h2 className="SE-Gallery-title-new">Learning Environment</h2>
                            </div>
                            {/* <p className="SE-Gallery-view-all-new">Explore our dynamic learning environment, where creativity meets collaboration. From hands-on projects to expert guidance, we provide everything you need to excel in your graphic design journey.</p> */}
                        </div>

                        <div className="SE-Gallery-grid-new">
                            {/* Left Column (1 Large Card) */}
                            <div
                                className="SE-Gallery-large-card-new"
                                onClick={() => handleImageClick(imagesWithDescriptions[0])}
                            >
                                <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="SE-Gallery-card-bg-new" />
                                <div className="SE-Gallery-card-overlay-new"></div>
                                <div className="SE-Gallery-card-content-new">
                                    <span className="SE-Gallery-badge-new">Environment</span>
                                    <h3 className="SE-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                    <div className="SE-Gallery-meta-new">
                                        <span className="SE-Gallery-meta-item-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                        <span className="SE-Gallery-meta-item-new"><FontAwesomeIcon icon={faComments} /> No Comments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Column (3 Small Cards) */}
                            <div className="SE-Gallery-middle-col-new">
                                {[1, 2, 3].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="SE-Gallery-small-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <div className="SE-Gallery-small-image-new">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                            <div className="SE-Gallery-small-content-new">
                                                <span className="SE-Gallery-badge-text-new">Environment</span>
                                                <h4 className="SE-Gallery-small-title-new">{item.title}</h4>
                                                <span className="SE-Gallery-small-date-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column (2 Medium Cards) */}
                            <div className="SE-Gallery-right-col-new">
                                {[4, 5].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="SE-Gallery-medium-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <img src={item.url} alt={item.title} className="SE-Gallery-card-bg-new" />
                                            <div className="SE-Gallery-card-overlay-new"></div>
                                            <div className="SE-Gallery-card-content-new">
                                                <h3 className="SE-Gallery-medium-title-new">{item.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Existing Note Logic */}
                        {activeDescription && (
                            <div className="SE-gallery-description" style={{ marginTop: '2rem' }}>
                                <div className="SE-description-content">
                                    <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                    <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Ready-to-Use Design Templates */}
                {/* <section
          className="SE-section SE-locked-section SE-templates-section"
          id="templates"
        >
          <div className="SE-locked-section-overlay"></div>
          <div className="SE-locked-content">
            <div className="SE-locked-icon">
              <span className="SE-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="SE-section-title">Ready-to-Use Design Templates</h2>
            <p className="SE-section-description">
              Get instant access to our proprietary library of 1000+ professionally designed templates.
              Includes social media kits, business presentations, marketing materials, UI/UX components,
              and print-ready templates that are fully customizable and commercially licensed.
            </p>
            <button
              className="SE-locked-btn SE-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="SE-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="SE-locked-note">
              <svg className="SE-animated-star" viewBox="0 0 24 24" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
              </svg>
              One-time payment for lifetime access to all template updates  {/* Changed from faSparkles to faStar */}
                {/* </p>
          </div>
        </section> */}

                {/* Previous Resources Section removed as it's now integrated into the Dream Navigator section */}

                {/* Sales Executive Benefits Section */}
                <section
                    className="SE-section SE-new-benefits-section"
                    id="benefits"
                >
                    {/* Background decorative SVG elements */}
                    <div className="SE-benefits-bg-shapes">
                        <svg className="SE-bg-shape SE-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#06D6A0" strokeWidth="2" />
                        </svg>
                        <svg className="SE-bg-shape SE-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#06D6A0" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="SE-benefits-container-new">
                        {/* Keeping the original title and subtitle */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                            <h2 className="SE-section-title">
                                <svg className="SE-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#22c55e" />
                                </svg>
                                Sales Executive Benefits
                                <svg className="SE-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#22c55e" />
                                </svg>
                            </h2>
                            <p className="SE-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                When you join our comprehensive graphic design course, you unlock exclusive benefits
                                that accelerate your career growth and skill development.
                            </p>
                        </div>

                        <div className="SE-benefits-image-grid-new">
                            {benefits.map((benefit, index) => {
                                const benefitImages = [
                                    benefitCareer,         // Career Opportunities - custom generated
                                    benefitCertification,  // Certification - custom generated
                                    benefitMentorship,     // Mentorship - custom generated
                                    benefitSoftware,       // Software Access - bright 3D illustration
                                    benefitNetworking,     // Networking - bright studio networking concept
                                    benefitMoneyBack       // Money Back Guarantee - bright gold/security concept
                                ];
                                return (
                                    <div
                                        key={index}
                                        className={`SE-benefit-img-card-new SE-benefit-img-card-${index}-new`}
                                    >
                                        <img src={benefitImages[index]} alt={benefit.title} className="SE-benefit-card-bg-new" />
                                        <div className="SE-benefit-card-overlay-new"></div>
                                        <div className="SE-benefit-card-content-new">
                                            <div className="SE-benefit-card-header-new">
                                                <span className="SE-benefit-card-icon-new">{benefit.icon}</span>
                                                <h3 className="SE-benefit-card-title-new">{benefit.title}</h3>
                                            </div>
                                            <p className="SE-benefit-card-desc-new">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Restyled to Dream Team UI */}
                <section
                    className="SE-section SE-dt-section"
                    id="feedback"
                >
                    <div className="SE-dt-container">
                        <div className="SE-dt-header">
                            <h2 className="SE-dt-title">
                                <span>Sales Team</span> <span>Testimonials<svg className="SE-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#16a34a" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                            </h2>


                            <p className="SE-dt-subtitle">
                                Hear what our students have to say about their learning experience
                            </p>
                        </div>

                        <div className="SE-dt-cards-wrapper">
                            <div className="SE-dt-cards">
                                {[...testimonials, ...testimonials].map((testimonial, index) => {
                                    const cardClassIndex = (index % 5) + 1;
                                    const imgMap = {
                                        1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                        5: girl3, 6: boy3, 7: girl4, 8: boy4
                                    };

                                    const photoUrl = imgMap[testimonial.id];
                                    const isBoy = [1, 3, 6, 8].includes(testimonial.id);

                                    return (
                                        <div key={`${testimonial.id || index}-${index}`} className={`SE-dt-card SE-dt-card-${cardClassIndex}`}>
                                            <div className="SE-dt-card-img-wrapper">
                                                <img
                                                    src={photoUrl}
                                                    alt={testimonial.author}
                                                    className={`SE-dt-card-img ${isBoy ? 'SE-dt-boy-avatar' : ''}`}
                                                />
                                                <div className="SE-dt-pattern-bg"></div>
                                            </div>
                                            <div className={`SE-dt-card-content SE-dt-content-bg-${cardClassIndex}`}>
                                                <h4 className="SE-dt-card-name">{testimonial.author}</h4>
                                                <p className="SE-dt-card-text">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* <div className="SE-dt-dots">
              <span className="SE-dt-dot SE-dt-dot-active"></span>
              <span className="SE-dt-dot"></span>
              <span className="SE-dt-dot"></span>
            </div> */}
                    </div>
                </section>
                <BackToTop />
            </div>
        </>
    );
}

export default SalesExecutiveInternPage;

