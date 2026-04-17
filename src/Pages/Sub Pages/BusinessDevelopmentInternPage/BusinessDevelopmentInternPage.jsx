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
import './BusinessDevelopmentInternPage.css';
import galleryPrototyping from '../../../assets/iicons/gallery_interactive_prototyping.png';
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
import scaleImg from '../../../assets/scale.jpeg';
import strategyImg from '../../../assets/strategy.jpeg';
import marketImg from '../../../assets/market.jpeg';
import partnershipImg from '../../../assets/partnership.jpeg';

import scale2Img from '../../../assets/scale2.jpeg';
import growth2Img from '../../../assets/growth2.jpeg';
import oppurtunityImg from '../../../assets/oppurtunity.jpeg';
import certImg from '../../../assets/cert.jpeg';
import mentorImg from '../../../assets/mentor.jpeg';
import toolImg from '../../../assets/tool.jpeg';
import network2Img from '../../../assets/network2.jpeg';
import roiImg from '../../../assets/roi.jpeg';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";


import pathOne from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Graphic Designer Benefits.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Learning, Skill Development & Growth.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Productivity, AI & Workflow Support.pdf';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import SubFooterOne from '../../../Pages/Sub Pages/subFooterOne/NewFooter1';

import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const BusinessDevelopmentInternPage = () => {
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
            title: "Market Analysis & Strategy",
            description: [
                "Introduction to Business Growth",
                "Market Research Techniques",
                "Competitor Analysis",
                "Identifying Growth Opportunities",
                "Strategic Planning Basics",
                "Understanding Market Trends"
            ],
            duration: "Foundations",
            bgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faChartLine} />
        },
        {
            id: 2,
            title: "Partnerships & B2B Sales",
            description: [
                "Building Strategic Partnerships",
                "Lead Generation for B2B",
                "Effective Business Communication",
                "Vendor & Client Relations",
                "Managing Business Accounts",
                "Networking Strategies"
            ],
            duration: "Strategic Connections",
            bgImage: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faHandshake} />
        },
        {
            id: 3,
            title: "Growth Marketing & Scaling",
            description: [
                "Digital Marketing for Business",
                "Social Media Growth Strategy",
                "Customer Acquisition Mastery",
                "Scaling Business Operations",
                "Optimizing Business Funnels",
                "Brand Expansion Tactics"
            ],
            duration: "Expansion",
            bgImage: scaleImg,
            icon: <FontAwesomeIcon icon={faRocket} />
        },
        {
            id: 4,
            title: "Operations & Management",
            description: [
                "Project Management Basics",
                "Business Process Optimization",
                "Performance Monitoring",
                "Collaboration with Growth Teams",
                "Proposal Writing & Pitching",
                "Final Business Presentation"
            ],
            duration: "Operations",
            bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faBriefcase} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: strategyImg,
            title: "Business Strategy Hub",
            description: "Our state-of-the-art office space for strategic planning, market analysis, and high-level team collaborations.",
            icon: <FontAwesomeIcon icon={faBuilding} />,
        },
        {
            url: marketImg,
            title: "Market Analysis Session",
            description: "Dive into collaborative market research where interns analyze industry trends, competitor movements, and upcoming business opportunities.",
            icon: <FontAwesomeIcon icon={faUsers} />,
        },
        {
            url: growth2Img,
            title: "Growth Planning Studio",
            description: "A professional business development space where students build growth strategies, lead pipelines, and business proposals using modern analytical tools.",
            icon: <FontAwesomeIcon icon={faChartLine} />,
        },
        {
            url: partnershipImg,
            title: "Partnership Review Session",
            description: "Interns present their curated business strategies to mentors and peers, receiving professional feedback to sharpen their strategic direction.",
            icon: <FontAwesomeIcon icon={faHandshake} />,
        },
        {
            url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            title: "Proposal Design & Layout",
            description: "Master the structure of business proposals, contract lifecycle management, and visual storytelling to build compelling business cases.",
            icon: <FontAwesomeIcon icon={faFileAlt} />,
        },
        {
            url: scale2Img,
            title: "Strategic Scaling Lab",
            description: "Transform business ideas into scalable models, testing market penetration strategies and validating growth concepts before full-scale implementation.",
            icon: <FontAwesomeIcon icon={faRocket} />,
        }
    ];

    // Course resources with local file paths
    const courseResources = [
        {
            id: 1,
            title: "Business Strategy & Management",
            description: "Detailed overview of the business development strategies, market trends, and growth planning methodologies used during the internship. This phase introduces industry-standard tools such as CRM software, data analytics platforms, and modern outreach frameworks, along with collaborative business workflows used in professional corporate environments. Interns will learn how to apply essential techniques to expand businesses, identify new market segments, and manage large-scale strategic initiatives.",
            type: "pdf",
            size: "2.8 MB",
            downloads: 1845,
            icon: <FontAwesomeIcon icon={faChartLine} />,
            isRestricted: false,
            fileName: "Business Strategy & Management.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Business Development Management Benefits",
            description: "Comprehensive guide to corporate networking, relationship building, and practical scaling tactics in business growth. This section explores how to foster long-term partnerships and build a sustainable brand presence across different industries. Interns will learn to create value-driven proposals, manage client expectations effectively, and use strategic growth principles to build resilient business models for startups and established global enterprises.",
            type: "pdf",
            size: "3.2 MB",
            downloads: 1476,
            icon: <FontAwesomeIcon icon={faStar} />,
            isRestricted: false,
            fileName: "Business Development Management Benefits.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Market Analysis Reference Guide",
            description: "Essential market research frameworks, competitor analysis tools, and best practices for identifying new business opportunities. This section helps interns understand how to analyze market data, manage lead pipelines, and maintain consistency in business outreach across global markets. Interns will explore market segmentation, SWOT analysis, and trend forecasting to improve business agility and ensure professional strategic positioning in various sectors.",
            type: "pdf",
            size: "2.1 MB",
            downloads: 1267,
            icon: <FontAwesomeIcon icon={faGlobe} />,
            isRestricted: false,
            fileName: "Market Analysis Reference Guide.pdf",
            localPath: pathOne
        },
        {
            id: 4,
            title: "Proposal & Contract Pack",
            description: "Collection of 50+ professionally structured templates for business proposals, partnership contracts, pitch decks, and commercial agreements. These templates help interns quickly understand document structure, pricing models, and strategic storytelling used in professional business cases. Interns can customize terms, growth metrics, and scaling plans to create unique proposals while learning efficient business development workflows used in corporate expansions and global partnerships.",
            type: "zip",
            size: "35 MB",
            downloads: 945,
            icon: <FontAwesomeIcon icon={faFileAlt} />,
            isRestricted: false,
            fileName: "Proposal & Contract Pack.zip",
            localPath: pathOne
        },
        {
            id: 5,
            title: "Growth & Strategic Scaling",
            description: "Learning, strategic development, and scaling opportunities designed to help interns improve their business leadership abilities and professional confidence. This section focuses on building strategic thinking, market penetration skills, and practical experience through guided business tasks and real-world projects. Interns gradually strengthen their ability to analyze macro trends, understand stakeholder expectations, and develop the ability to manage complex business growth initiatives for modern enterprises.",
            type: "pdf",
            size: "1.5 MB",
            downloads: 787,
            icon: <FontAwesomeIcon icon={faRocket} />,
            isRestricted: true,
            fileName: "Growth & Strategic Scaling.pdf",
            localPath: pathFive
        },
        {
            id: 6,
            title: "Enterprise Solutions & Support",
            description: "Step-by-step roadmap to building an impressive business portfolio or career in corporate strategy. This section explains how interns can organize their strategic projects, present growth concepts clearly, and highlight complex business problem-solving skills. Interns learn how to structure case studies, showcase partnership and scaling work, write short strategic descriptions, and build a professional business profile suitable for high-level interviews, consulting opportunities, and career progression.",
            type: "pdf",
            size: "2.9 MB",
            downloads: 643,
            icon: <FontAwesomeIcon icon={faUsers} />,
            isRestricted: true,
            fileName: "Enterprise Solutions & Support.pdf",
            localPath: pathSix
        },
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "The market analysis techniques I learned here helped me land a strategy role at a major tech firm.",
            author: "Aditya V"
        },
        {
            id: 2,
            rating: 4,
            text: "Gained incredible confidence in pitching and B2B communication. Truly practical training.",
            author: "Meghana S"
        },
        {
            id: 3,
            rating: 5,
            text: "From understanding lead generation to closing deals, this internship covered it all.",
            author: "Rohan K"
        },
        {
            id: 4,
            rating: 4,
            text: "The mentorship provided was top-notch. My mentor helped me refine my business proposals.",
            author: "Sneha P"
        },
        {
            id: 5,
            rating: 5,
            text: "Unbeatable experience in market research and competitor analysis. I felt ready for the corporate world.",
            author: "Vikram R"
        },
        {
            id: 6,
            rating: 5,
            text: "The networking opportunities were the highlight. I connected with so many industry leaders.",
            author: "Tanya M"
        },
        {
            id: 7,
            rating: 4,
            text: "Solid structure and intense learning. The real-world case studies were extremely helpful.",
            author: "Arjun L"
        },
        {
            id: 8,
            rating: 5,
            text: "Best decision for my career. I'm now leading growth for a promising startup!",
            author: "Kavya N"
        }
    ];


    const benefits = [
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: "Career Opportunities",
            description: "Access to 1000+ business consulting and leadership roles with our global partners",
            bgImage: oppurtunityImg,
        },
        {
            icon: <FontAwesomeIcon icon={faCertificate} />,
            title: "Certification",
            description: "Internationally recognized Business Development certification to boost your resume",
            bgImage: certImg,
        },
        {
            icon: <FontAwesomeIcon icon={faHandshake} />,
            title: "Strategic Mentorship",
            description: "1-on-1 sessions with experienced business consultants and corporate strategists",
            bgImage: mentorImg,
        },
        {
            icon: <FontAwesomeIcon icon={faTools} />,
            title: "Analytical Tools",
            description: "Free access to premium data analytics and market research software during the course",
            bgImage: toolImg,
        },
        {
            icon: <FontAwesomeIcon icon={faNetworkWired} />,
            title: "Global Networking",
            description: "Join our exclusive network of 10,000+ business leaders and corporate professionals",
            bgImage: network2Img,
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
            title: "ROI Focused Training",
            description: "Learn how to consistently deliver business value and scale your professional impact",
            bgImage: roiImg,
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
        showLockedSectionToast("Business Development Management Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'BDM-filled' : ''}
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
                <div className="BDM-toast-message show">
                    <div className="BDM-toast-content">
                        <span className="BDM-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                        <span className="BDM-toast-text">{toastMessage}</span>
                        <button
                            className="BDM-toast-close"
                            onClick={() => setShowToast(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}

            <div className="BDM-content" ref={containerRef}>
                    <TwoLineNavbar />
                
                

                {/* Hero Section */}
                <section
                    className="BDM-section BDM-hero-section-new"
                    id="home"
                >
                    <div className="BDM-hero-top-row">
                        <div className="BDM-hero-badges">
                            <span className="BDM-hero-badge"><FontAwesomeIcon icon={faCheckCircle} /> 2023 BEST STRATEGY</span>
                            <span className="BDM-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> WORLD CLASS GROWTH</span>
                        </div>
                        <div className="BDM-hero-top-line-container">
                            <hr className="BDM-hero-top-line" />
                            <svg className="BDM-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="BDM-hero-typography">
                        <div className="BDM-hero-line BDM-hero-line-1">
                            <div className="BDM-hero-title-wrapper">
                                <svg className="BDM-sparkle-icon-large" viewBox="0 0 24 24" width="40" height="40">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="BDM-hero-title-word">Where Teams</h1>
                            </div>
                            <p className="BDM-hero-desc-small">
                                Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                            </p>
                        </div>

                        <div className="BDM-hero-line BDM-hero-line-2">
                            <div className="BDM-hero-image-pill BDM-hero-image-1">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Business Development Management" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <h1 className="BDM-hero-title-word BDM-text-purple">Build & Expand</h1>
                            <svg className="BDM-sparkle-icon-small" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="BDM-hero-line BDM-hero-line-3">
                            <svg className="BDM-sparkle-icon-small" viewBox="0 0 24 24" width="25" height="25" >
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="BDM-hero-title-word" >Together</h1>
                            <div className="BDM-hero-image-pill BDM-hero-image-2">
                                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Business Development Management Studio" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                <div className="BDM-play-btn">
                                    <div className="BDM-play-icon-triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="BDM-hero-bottom-row">
                        <div className="BDM-hero-bottom-left">
                            <p className="BDM-hero-desc-large">
                                Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                            </p>
                            <div className="BDM-hero-actions">
                                <button className="BDM-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                <button className="BDM-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                            </div>
                        </div>

                        <div className="BDM-hero-bottom-right">
                            <div className="BDM-rotating-stamp">
                                <svg viewBox="0 0 100 100" className="BDM-stamp-text-svg">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            C R E A T I V E • D E V E L O P E R •
                                        </textPath>
                                    </text>
                                </svg>
                                <svg className="BDM-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section
                    className="BDM-section BDM-course-horizontal-section"
                    id="course"
                >
                    <div className="BDM-course-background-top"></div>
                    <div className="BDM-course-background-bottom"></div>

                    <div className="BDM-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                        <div className="BDM-course-header-row">
                            <div className="BDM-course-header-left">
                                <h2 className="BDM-section-title" style={{ color: '#2d2d2d' }}>INTERNSHIP</h2>
                                <h2 className="BDM-section-title">
                                    <span className="BDM-text-purple">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                </h2>
                            </div>
                            <svg className="BDM-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <div className="BDM-course-header-right">
                                <a href="#course" className="BDM-view-all-link">View All</a>
                            </div>
                        </div>

                        <div className="BDM-course-carousel-container">
                            <div className="BDM-carousel-wrapper">
                                <div
                                    className="BDM-course-cards-wrapper"
                                    ref={cardsWrapperRef}
                                    style={{
                                        '--active-index': activeCourseIndex,
                                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {infiniteContent.map((item) => (
                                        <div key={item.uniqueId} className="BDM-course-new-card">
                                            <div className="BDM-course-card-badges">
                                                <span className="BDM-badge-pill">Phase {item.id}</span>
                                                <span className="BDM-badge-pill BDM-badge-dark">{item.duration}</span>
                                            </div>
                                            <h3 className="BDM-course-card-title">{item.title}</h3>

                                            {/* Checklist items in 2-column grid */}
                                            <div className="BDM-course-card-checklist">
                                                {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                    <div key={i} className="BDM-checklist-item">
                                                        <FontAwesomeIcon icon={faCheck} className="BDM-checklist-icon" />
                                                        <span>{point}</span>
                                                    </div>
                                                )) : (
                                                    <p className="BDM-course-card-desc">{item.description}</p>
                                                )}
                                            </div>

                                            <div className="BDM-course-card-image">
                                                <img src={item.bgImage} alt={item.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="BDM-carousel-arrows">
                                <button
                                    className="BDM-carousel-arrow BDM-carousel-arrow-left"
                                    onClick={handlePrevClick}
                                    aria-label="Previous module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                </button>

                                <button
                                    className="BDM-carousel-arrow BDM-carousel-arrow-right"
                                    onClick={handleNextClick}
                                    aria-label="Next module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>

                        <div className="BDM-course-dots">
                            {courseContent.map((_, index) => {
                                const isActive = (activeCourseIndex % courseContent.length) === index;
                                return (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <button
                                            className={`BDM-course-dot ${isActive ? 'BDM-active-dot' : ''}`}
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

                {/* <section className="BDM-section BDM-influencer-section" id="signin">
          <div className="BDM-influencer-container">
            <div className="BDM-influencer-content">
              {showForm ? (
                <div className="BDM-form-section BDM-in-influencer">
                  <div className="BDM-form-wrapper BDM-dark-form">
                    <button
                      className="BDM-close-form-btn BDM-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="BDM-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="BDM-form-dark-title">Register Now</h3>
                      <div className="BDM-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`BDM-form-input ${errors.email ? 'BDM-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="BDM-error-message">{errors.email}</span>}
                      </div>

                      <div className="BDM-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`BDM-form-input ${errors.course ? 'BDM-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="BDM-error-message">{errors.course}</span>}
                      </div>

                      <div className="BDM-form-group BDM-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'BDM-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="BDM-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="BDM-submit-btn">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="BDM-influencer-split">
                  <div className="BDM-influencer-left">
                    <h2 className="BDM-influencer-title">
                      Join <span className="BDM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="BDM-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="BDM-influencer-search-bar">
                        <span className="BDM-search-placeholder">| Search</span>
                        <div className="BDM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="BDM-voice-icon" />
                          <button className="BDM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="BDM-influencer-right">
                    <div
                      className="BDM-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="BDM-card-top-icons">
                        <div className="BDM-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="BDM-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="BDM-see-how-text">See how<br />it's done</h3>
                      <div className="BDM-card-decorations">
                        <div className="BDM-decor-ring-1"></div>
                        <div className="BDM-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="BDM-join-course-banner">
                <h3 className="BDM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="BDM-join-banner-content">
                  <h4 className="BDM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Business Development Management course</h4>
                  <p className="BDM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="BDM-banner-register-btn" onClick={() => setShowForm(true)}>
                    Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div>
        </section> */}

                {/* Dream Navigator Section */}


                <section className="BDM-section BDM-influencer-section" id="signin">
                    <div className="BDM-influencer-container">
                        <div className="BDM-influencer-content">
                            {showForm ? (
                                <div className="BDM-form-section BDM-in-influencer">
                                    <div className="BDM-form-wrapper BDM-dark-form">
                                        <button
                                            className="BDM-close-form-btn BDM-close-dark"
                                            onClick={() => setShowForm(false)}
                                            aria-label="Close form"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>

                                        <form className="BDM-signin-form" onSubmit={handleSignSubmit}>
                                            <h3 className="BDM-form-dark-title">Register Now</h3>
                                            <div className="BDM-form-group">
                                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={`BDM-form-input ${errors.email ? 'BDM-error' : ''}`}
                                                    placeholder="Enter your email"
                                                />
                                                {errors.email && <span className="BDM-error-message">{errors.email}</span>}
                                            </div>

                                            <div className="BDM-form-group">
                                                <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                <input
                                                    type="text"
                                                    id="course"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleFormChange}
                                                    className={`BDM-form-input ${errors.course ? 'BDM-error' : ''}`}
                                                    placeholder="Enter Course Name"
                                                />
                                                {errors.course && <span className="BDM-error-message">{errors.course}</span>}
                                            </div>

                                            <div className="BDM-form-group BDM-checkbox-group">
                                                <input
                                                    type="checkbox"
                                                    id="agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleFormChange}
                                                    className={errors.agreeTerms ? 'BDM-error' : ''}
                                                />
                                                <label htmlFor="agreeTerms">
                                                    I agree to the Terms of Service and Privacy Policy
                                                </label>
                                                {errors.agreeTerms && <span className="BDM-error-message">{errors.agreeTerms}</span>}
                                            </div>

                                            <button type="submit" className="BDM-submit-btn">
                                                Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="BDM-influencer-split">
                                    <div className="BDM-influencer-left">
                                        <h2 className="BDM-influencer-title">
                                            Join <span className="BDM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                                            <br />
                                            <div className="BDM-influencer-avatars">
                                                <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                <img src={iconEducationBook} alt="Education Book" />
                                                <img src={iconCertificate} alt="Education Certificate" />
                                            </div>
                                            to collaborate
                                            <br />
                                            with us
                                            {/* <div className="BDM-influencer-search-bar">
                        <span className="BDM-search-placeholder"> Search</span>
                        <div className="BDM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="BDM-voice-icon" />
                          <button className="BDM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div> */}
                                        </h2>
                                    </div>
                                    <div className="BDM-influencer-right">
                                        <div
                                            className="BDM-see-how-card"
                                            onClick={() => setShowForm(true)}
                                        >
                                            <div className="BDM-card-top-icons">
                                                <div className="BDM-video-circle">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                </div>
                                                <div className="BDM-arrow-circle">
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                </div>
                                            </div>
                                            <h3 className="BDM-see-how-text">See how<br />it's done</h3>
                                            <div className="BDM-card-decorations">
                                                <div className="BDM-decor-ring-1"></div>
                                                <div className="BDM-decor-ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* {!showForm && (
              <div className="BDM-join-course-banner">
                <h3 className="BDM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="BDM-join-banner-content">
                  <h4 className="BDM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Business Development Management course</h4>
                  <p className="BDM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="BDM-banner-register-btn" onClick={() => setShowForm(true)}>
                    Register Now
                  </button>
                </div>
              </div>
            )} */}
                    </div>
                </section>

                <section className="BDM-section BDM-dream-navigator-section" id="dream-navigator">
                    <div className="BDM-dn-container">

                        {/* Design Resources Title - styled like Dream Navigator header */}
                        <div className="BDM-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '0.5rem', position: 'relative' }}>
                            <div style={{ flex: 1 }}>
                                <h2 className="BDM-dn-title">
                                    <div className="BDM-dn-title-line1">
                                        Strategic Growth &
                                        <svg className="BDM-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30" style={{ marginLeft: '10px' }}>
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="BDM-dn-title-line2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                                        <button
                                            className="BDM-split-action-btn"
                                            style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0, flexShrink: 0 }}
                                            onClick={() => showLockedSectionToast("Strategic Growth & Market Intelligence")}
                                        >
                                            <FontAwesomeIcon icon={faLock} /> Join course to Access
                                        </button>
                                        <span style={{ whiteSpace: 'nowrap' }}>Market Intelligence</span>
                                        <svg className="BDM-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30" style={{ flexShrink: 0 }}>
                                            <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </h2>
                                <div className="BDM-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                    <svg className="BDM-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Download valuable business strategy templates, market analysis guides, and partnership frameworks
                                        to enhance your growth planning process.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Tips Toggle Button */}
                            <div className="BDM-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                <button
                                    className="BDM-quick-tips-btn"
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
                                    className={`BDM-quick-tips-panel ${showQuickTips ? 'BDM-show' : ''}`}
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

                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>Business Productivity Tips</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* Tip 1 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Prioritize Macro Trends</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Focus on long-term market shifts rather than short-term fluctuations to build sustainable growth strategies.</p>
                                            </div>
                                        </div>
                                        {/* Tip 2 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Maintain a Clean CRM</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Always keep your lead data updated and standardized to ensure accurate forecasting and relationship management.</p>
                                            </div>
                                        </div>
                                        {/* Tip 3 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Follow up within 24h</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Speed is critical in business development. Always follow up with new leads or partners within one business day.</p>
                                            </div>
                                        </div>
                                        {/* Tip 4 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Networking is Social Capital</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Treat every interaction as an opportunity to build trust, not just to close a deal or secure a partnership.</p>
                                            </div>
                                        </div>
                                        {/* Tip 5 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Optimize Your Value Prop</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Constantly refine your business pitch based on feedback to ensure it resonates with current market pain points.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Visual Row - Accordion */}
                        <div className="BDM-dn-visual-row BDM-resources-accordion">
                            {courseResources.slice(0, 6).map((resource, index) => {
                                const isActive = activeAccordionIndex === index;
                                const num = `0${index + 1}`;

                                if (isActive) {
                                    return (
                                        <div key={resource.id} className="BDM-accordion-panel BDM-accordion-expanded BDM-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #ffedd5 0%, #fdba74 100%)' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)' }}>
                                            <div className="BDM-dn-sc-header">
                                                <div className="BDM-dn-sc-num">{num}</div>
                                                <div className="BDM-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <h3 className="BDM-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                            <p className="BDM-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>

                                            <div className="BDM-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                {resource.isRestricted && (
                                                    <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>
                                                )}
                                            </div>

                                            {resource.isRestricted ? (
                                                <button
                                                    className="BDM-dn-sc-btn"
                                                    onClick={() => handleJoinCourseForResource(resource.title)}
                                                    style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}
                                                >
                                                    <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                </button>
                                            ) : (
                                                <button
                                                    className={`BDM-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'BDM-downloaded' : ''}`}
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
                                            className={`BDM-accordion-panel BDM-accordion-collapsed BDM-dn-v-pill ${index % 2 === 0 ? 'BDM-dn-bg-dark' : 'BDM-dn-bg-light'}`}
                                            onClick={() => setActiveAccordionIndex(index)}
                                        >
                                            <span className="BDM-dn-v-text">{resource.title}</span>
                                            <div className="BDM-dn-v-num">{num}</div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        {/* Stats Row - horizontal style matching the reference UI */}
                        <div className="BDM-dn-stats-row">
                            <div className="BDM-dn-stat-items">
                                <div className="BDM-dn-stat-item"><strong>20</strong> Total Resources</div>
                                <div className="BDM-dn-stat-item"><strong>32,000</strong> Total Downloads</div>
                                <div className="BDM-dn-stat-item"><strong>{yourDownloadsCount}</strong> Your Downloads</div>
                            </div>
                            <div className="BDM-dn-socials">
                                <span className="BDM-dn-social-icon" title="Total Resources"><FontAwesomeIcon icon={faFileAlt} /></span>
                                <span className="BDM-dn-social-icon" title="Total Downloads"><FontAwesomeIcon icon={faDownload} /></span>
                                <span className="BDM-dn-social-icon" title="Your Downloads"><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </div>

                        <div className="BDM-resources-note">
                            <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                            <p>
                                Our course includes <strong>20 comprehensive resources</strong> to support your design journey.
                                First 4 resources are available for free download. <strong>Design Software Cheatsheets</strong> and
                                <strong> Portfolio Building Guide</strong> are exclusive to enrolled students.
                                Join our course to access all 20 premium resources and unlock full learning potential.
                            </p>
                        </div>

                        <hr className="BDM-dn-divider" />

                        {/* Bottom Dashboard Row */}
                        <div className="BDM-dn-dashboard-row">
                            <div className="BDM-dn-dash-left">
                                <h3 className="BDM-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access  Certificate included </h3>
                                <button
                                    className="BDM-dn-dash-btn"
                                    onClick={handleBenefitsClick}
                                >
                                    Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                </button>
                            </div>
                            <div className="BDM-dn-dash-right">
                                <div className="BDM-dn-dash-card">
                                    <div className="BDM-dn-dash-icon BDM-dash-icon-1"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ea580c" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                                    <div className="BDM-dn-dash-info">
                                        <span className="BDM-dn-dash-label">Successful Graduates</span>
                                        <span className="BDM-dn-dash-value">10,000+</span>
                                    </div>
                                </div>
                                <div className="BDM-dn-dash-card">
                                    <div className="BDM-dn-dash-icon BDM-dash-icon-2"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ea580c" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                    <div className="BDM-dn-dash-info">
                                        <span className="BDM-dn-dash-label">Job Placement Rate</span>
                                        <span className="BDM-dn-dash-value">94%</span>
                                    </div>
                                </div>
                                <div className="BDM-dn-dash-card">
                                    <div className="BDM-dn-dash-icon BDM-dash-icon-3"><FontAwesomeIcon icon={faUsers} style={{ color: '#ea580c' }} /></div>
                                    <div className="BDM-dn-dash-info">
                                        <span className="BDM-dn-dash-label">Industry Partners</span>
                                        <span className="BDM-dn-dash-value">50+</span>
                                    </div>
                                </div>
                                <div className="BDM-dn-dash-card">
                                    <div className="BDM-dn-dash-icon BDM-dash-icon-4"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#ea580c" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                                    <div className="BDM-dn-dash-info">
                                        <span className="BDM-dn-dash-label">Community Support</span>
                                        <span className="BDM-dn-dash-value">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Influencers Section (Dark UI Style) */}
                {/* <section className="BDM-section BDM-influencer-section" id="signin">
          <div className="BDM-influencer-container">
            <div className="BDM-influencer-content">
              {showForm ? (
                <div className="BDM-form-section BDM-in-influencer">
                  <div className="BDM-form-wrapper BDM-dark-form">
                    <button
                      className="BDM-close-form-btn BDM-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="BDM-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="BDM-form-dark-title">Register Now</h3>
                      <div className="BDM-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`BDM-form-input ${errors.email ? 'BDM-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="BDM-error-message">{errors.email}</span>}
                      </div>

                      <div className="BDM-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`BDM-form-input ${errors.course ? 'BDM-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="BDM-error-message">{errors.course}</span>}
                      </div>

                      <div className="BDM-form-group BDM-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'BDM-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="BDM-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="BDM-submit-btn">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="BDM-influencer-split">
                  <div className="BDM-influencer-left">
                    <h2 className="BDM-influencer-title">
                      Join <span className="BDM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="BDM-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="BDM-influencer-search-bar">
                        <span className="BDM-search-placeholder">| Search</span>
                        <div className="BDM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="BDM-voice-icon" />
                          <button className="BDM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="BDM-influencer-right">
                    <div
                      className="BDM-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="BDM-card-top-icons">
                        <div className="BDM-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="BDM-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="BDM-see-how-text">See how<br />it's done</h3>
                      <div className="BDM-card-decorations">
                        <div className="BDM-decor-ring-1"></div>
                        <div className="BDM-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="BDM-join-course-banner">
                <h3 className="BDM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="BDM-join-banner-content">
                  <h4 className="BDM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Business Development Management course</h4>
                  <p className="BDM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="BDM-banner-register-btn" onClick={() => setShowForm(true)}>
                    Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div> */}
                {/* </section> */}


                {/* Image Gallery Section */}
                <section
                    className="BDM-section BDM-new-gallery-section"
                    id="gallery"
                >
                    <div className="BDM-Gallery-container-new">
                        <div className="BDM-Gallery-header-new">
                            <div className="BDM-Gallery-title-wrapper-new">
                                <span className="BDM-Gallery-title-line-new"></span>
                                <h2 className="BDM-Gallery-title-new">Learning Environment</h2>
                            </div>
                            {/* <p className="BDM-Gallery-view-all-new">Explore our dynamic learning environment, where creativity meets collaboration. From hands-on projects to expert guidance, we provide everything you need to excel in your graphic design journey.</p> */}
                        </div>

                        <div className="BDM-Gallery-grid-new">
                            {/* Left Column (1 Large Card) */}
                            <div
                                className="BDM-Gallery-large-card-new"
                                onClick={() => handleImageClick(imagesWithDescriptions[0])}
                            >
                                <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="BDM-Gallery-card-bg-new" />
                                <div className="BDM-Gallery-card-overlay-new"></div>
                                <div className="BDM-Gallery-card-content-new">
                                    <span className="BDM-Gallery-badge-new">Environment</span>
                                    <h3 className="BDM-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                    <div className="BDM-Gallery-meta-new">
                                        <p className="BDM-Gallery-desc-new" style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '0.95rem', lineHeight: '1.5', marginTop: '10px' }}>{imagesWithDescriptions[0].description}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Column (3 Small Cards) */}
                            <div className="BDM-Gallery-middle-col-new">
                                {[1, 2, 3].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="BDM-Gallery-small-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <div className="BDM-Gallery-small-image-new">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                            <div className="BDM-Gallery-small-content-new">
                                                <span className="BDM-Gallery-badge-text-new">Environment</span>
                                                <h4 className="BDM-Gallery-small-title-new">{item.title}</h4>
                                                <p className="BDM-Gallery-small-desc-new" style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.85rem', lineHeight: '1.4', margin: '8px 0 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column (2 Medium Cards) */}
                            <div className="BDM-Gallery-right-col-new">
                                {[4, 5].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="BDM-Gallery-medium-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <img src={item.url} alt={item.title} className="BDM-Gallery-card-bg-new" />
                                            <div className="BDM-Gallery-card-overlay-new"></div>
                                            <div className="BDM-Gallery-card-content-new">
                                                <h3 className="BDM-Gallery-medium-title-new">{item.title}</h3>
                                                <p className="BDM-Gallery-medium-desc-new" style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.9rem', lineHeight: '1.4', marginTop: '8px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Existing Note Logic */}
                        {activeDescription && (
                            <div className="BDM-gallery-description" style={{ marginTop: '2rem' }}>
                                <div className="BDM-description-content">
                                    <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                    <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Ready-to-Use Design Templates */}
                {/* <section
          className="BDM-section BDM-locked-section BDM-templates-section"
          id="templates"
        >
          <div className="BDM-locked-section-overlay"></div>
          <div className="BDM-locked-content">
            <div className="BDM-locked-icon">
              <span className="BDM-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="BDM-section-title">Ready-to-Use Design Templates</h2>
            <p className="BDM-section-description">
              Get instant access to our proprietary library of 1000+ professionally designed templates.
              Includes social media kits, business presentations, marketing materials, UI/UX components,
              and print-ready templates that are fully customizable and commercially licensed.
            </p>
            <button
              className="BDM-locked-btn BDM-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="BDM-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="BDM-locked-note">
              <svg className="BDM-animated-star" viewBox="0 0 24 24" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
              </svg>
              One-time payment for lifetime access to all template updates  {/* Changed from faSparkles to faStar */}
                {/* </p>
          </div>
        </section> */}

                {/* Previous Resources Section removed as it's now integrated into the Dream Navigator section */}

                {/* Business Development Management Benefits Section */}
                <section
                    className="BDM-section BDM-new-benefits-section"
                    id="benefits"
                >
                    {/* Background decorative SVG elements */}
                    <div className="BDM-benefits-bg-shapes">
                        <svg className="BDM-bg-shape BDM-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#ea580c" strokeWidth="2" />
                        </svg>
                        <svg className="BDM-bg-shape BDM-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#ea580c" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="BDM-benefits-container-new">
                        {/* Keeping the original title and subtitle */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                            <h2 className="BDM-section-title">
                                <svg className="BDM-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#f59e0b" />
                                </svg>
                                Business Development Management Benefits
                                <svg className="BDM-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#f59e0b" />
                                </svg>
                            </h2>
                            <p className="BDM-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                When you join our comprehensive Business Development Management internship, you unlock exclusive benefits
                                that accelerate your career growth and skill development.
                            </p>
                        </div>

                        <div className="BDM-benefits-image-grid-new">
                            {benefits.map((benefit, index) => {
                                const benefitImages = [
                                    benefit.bgImage,
                                    benefit.bgImage,
                                    benefit.bgImage,
                                    benefit.bgImage,
                                    benefit.bgImage,
                                    benefit.bgImage,
                                ];
                                return (
                                    <div
                                        key={index}
                                        className={`BDM-benefit-img-card-new BDM-benefit-img-card-${index}-new`}
                                    >
                                        <img src={benefitImages[index]} alt={benefit.title} className="BDM-benefit-card-bg-new" />
                                        <div className="BDM-benefit-card-overlay-new"></div>
                                        <div className="BDM-benefit-card-content-new">
                                            <div className="BDM-benefit-card-header-new">
                                                <span className="BDM-benefit-card-icon-new">{benefit.icon}</span>
                                                <h3 className="BDM-benefit-card-title-new">{benefit.title}</h3>
                                            </div>
                                            <p className="BDM-benefit-card-desc-new">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Restyled to Dream Team UI */}
                <section
                    className="BDM-section BDM-dt-section"
                    id="feedback"
                >
                    <div className="BDM-dt-container">
                        <div className="BDM-dt-header">
                            <h2 className="BDM-dt-title">
                                <span>Business Dev</span> <span>Testimonials<svg className="BDM-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#ea580c" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                            </h2>

                            <p className="BDM-dt-subtitle">
                                Hear what our students have to say about their learning experience
                            </p>
                        </div>

                        <div className="BDM-dt-cards-wrapper">
                            <div className="BDM-dt-cards">
                                {[...testimonials, ...testimonials].map((testimonial, index) => {
                                    const cardClassIndex = (index % 5) + 1;
                                    const imgMap = {
                                        1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                        5: boy3, 6: girl3, 7: boy4, 8: girl4
                                    };

                                    const photoUrl = imgMap[testimonial.id];
                                    const isBoy = [1, 3, 5, 7].includes(testimonial.id);

                                    return (
                                        <div key={`${testimonial.id || index}-${index}`} className={`BDM-dt-card BDM-dt-card-${cardClassIndex}`}>
                                            <div className="BDM-dt-card-img-wrapper">
                                                <img
                                                    src={photoUrl}
                                                    alt={testimonial.author}
                                                    className={`BDM-dt-card-img ${isBoy ? 'BDM-dt-boy-avatar' : ''}`}
                                                />
                                                <div className="BDM-dt-pattern-bg"></div>
                                            </div>
                                            <div className={`BDM-dt-card-content BDM-dt-content-bg-${cardClassIndex}`}>
                                                <h4 className="BDM-dt-card-name">{testimonial.author}</h4>
                                                <p className="BDM-dt-card-text">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* <div className="BDM-dt-dots">
              <span className="BDM-dt-dot BDM-dt-dot-active"></span>
              <span className="BDM-dt-dot"></span>
              <span className="BDM-dt-dot"></span>
            </div> */}
                    </div>
                </section>
                <SubFooterOne />
                <BackToTop />
            </div>
        </>
    );
}

export default BusinessDevelopmentInternPage;

