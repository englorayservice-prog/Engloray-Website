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
    faInfoCircle  // This was added earlier
} from '@fortawesome/free-solid-svg-icons';
import './GraphicDesignerInternPage.css';
import gdHeroImg from '../../../assets/iicons/graphic_designer_hero.png';
import galleryLearningStudio from '../../../assets/iicons/gallery_learning_studio.png';
import galleryBrainstorming from '../../../assets/iicons/gallery_brainstorming.png';
import galleryDesignStudio from '../../../assets/iicons/gallery_design_studio.png';
import galleryPortfolioReview from '../../../assets/iicons/gallery_portfolio_review.png';
import galleryTypography from '../../../assets/iicons/gallery_typography_layout.png';
import galleryPrototyping from '../../../assets/iicons/gallery_interactive_prototyping.png';
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
import SubFooterOne from '../../../Pages/Sub Pages/subFooterOne/NewFooter1';

const GraphicDesignerInternPage = () => {
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

    const [scale, setScale] = useState(1);
    const scalingRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);

    useEffect(() => {
        const updateScale = () => {
            const designWidth = 1440;
            const currentWidth = window.innerWidth;
            const newScale = currentWidth / designWidth;
            setScale(newScale);
            if (scalingRef.current) {
                setContentHeight(scalingRef.current.offsetHeight);
            }
        };

        updateScale();
        window.addEventListener('resize', updateScale);

        // Initial delay to ensure all dynamic elements are rendered for height calculation
        const timeout = setTimeout(updateScale, 1000);

        return () => {
            window.removeEventListener('resize', updateScale);
            clearTimeout(timeout);
        };
    }, []);

    // Handle scroll to update active section
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'course', 'signin', 'assets', 'gallery', 'templates', 'resources', 'benefits', 'feedback'];
            const scrollPosition = (window.scrollY / scale) + 100;


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
    }, [scale]);

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
            title: "Design Basics & Tools",
            description: [
                "Introduction to Company Branding",
                "Adobe Photoshop Basics",
                "Adobe Illustrator Basics",
                "Typography Fundamentals",
                "Color Theory Basics",
                "Understanding Design Guidelines"
            ],
            duration: "Introduction",
            bgImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faFont} />
        },
        {
            id: 2,
            title: "Marketing & Social Media Design",
            description: [
                "Social Media Post Design",
                "Banner & Poster Design",
                "Marketing Creatives",
                "Thumbnail Design",
                "Image Editing & Retouching",
                "Creating Design Variations"
            ],
            duration: "Creative Work",
            bgImage: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faPalette} />
        },
        {
            id: 3,
            title: "UI Graphics & Branding",
            description: [
                "Website UI Graphics",
                "Landing Page Visuals",
                "Icon & Illustration Design",
                "Brand Identity Elements",
                "Logo Concept Design",
                "Design Optimization"
            ],
            duration: "Hands-on Work",
            bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faLayerGroup} />
        },
        {
            id: 4,
            title: "Project Work & Portfolio",
            description: [
                "Work on Live Client Projects",
                "Campaign Design Contributions",
                "Design Revisions & Feedback",
                "Collaboration with Development Team",
                "Portfolio Creation",
                "Final Presentation"
            ],
            duration: "Real Projects",
            bgImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faImage} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: galleryLearningStudio,
            title: "Modern Learning Studio",
            description: "Our state-of-the-art classroom with dual monitors and ergonomic furniture for comfortable learning sessions.",
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />
        },
        {
            url: galleryBrainstorming,
            title: "Brainstorming & Ideation",
            description: "Dive into collaborative brainstorming sessions where creative ideas are born, using mood boards, sketches, and visual planning.",
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            url: galleryDesignStudio,
            title: "Creative Design Studio",
            description: "A professional graphic design studio where students bring their brand identities, logos, and print media to life using industry-standard tools.",
            icon: <FontAwesomeIcon icon={faLaptopCode} />
        },
        {
            url: galleryPortfolioReview,
            title: "Portfolio Review Session",
            description: "Students present their curated design portfolios to mentors and peers, receiving professional feedback to sharpen their creative direction.",
            icon: <FontAwesomeIcon icon={faRocket} />
        },
        {
            url: galleryTypography,
            title: "Typography & Layout",
            description: "Master the fundamental rules of typography, grid systems, and visual hierarchy to construct balanced and readable designs.",
            icon: <FontAwesomeIcon icon={faFont} />
        },
        {
            url: galleryPrototyping,
            title: "Interactive Prototyping",
            description: "Transform static screens into clickable prototypes, testing user flows and validating your design concepts before development.",
            icon: <FontAwesomeIcon icon={faMobileAlt} />
        }
    ];

    // Course resources with local file paths
    const courseResources = [
        {
            id: 1,
            title: "Design Tools & Technology",
            description: "Detailed overview of the design tools, platforms, and technologies used during the graphic design internship. This phase introduces industry-standard software such as Adobe Photoshop, Illustrator, and modern digital design platforms, along with creative workflows and collaboration practices used in professional environments. Interns will learn how to apply essential techniques to create high-quality visual content for digital platforms, branding materials, marketing campaigns, and social media graphics.",
            type: "pdf",
            size: "2.4 MB",
            downloads: 2345,
            icon: <FontAwesomeIcon icon={faTools} />,
            isRestricted: false,
            fileName: "Design Tools & Technology.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Graphic Designer Benefits",
            description: "Comprehensive guide to color psychology, harmonies, and practical applications in graphic design. This section explores how colors influence emotions, perception, and brand identity across different digital platforms. Interns will learn to create balanced palettes, apply contrast effectively, combine complementary and analogous colors, and use color theory principles to design visually appealing graphics for branding, marketing campaigns, and engaging social media content.",
            type: "pdf",
            size: "3.1 MB",
            downloads: 1876,
            icon: <FontAwesomeIcon icon={faStar} />,  // Changed from faSparkles to faStar
            isRestricted: false,
            fileName: "Graphic Designer Benefits.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Typography Reference Guide",
            description: "Essential typography rules, font pairing suggestions, and best practices for creating clear, readable, and visually balanced designs. This section helps interns understand how to choose appropriate fonts, manage spacing, and maintain consistency across digital and print layouts. Interns will explore hierarchy, alignment, and contrast techniques to improve readability and ensure professional typography in branding, marketing materials, websites, and social media graphics.",
            type: "pdf",
            size: "1.8 MB",
            downloads: 1567,
            icon: <FontAwesomeIcon icon={faFont} />,
            isRestricted: false,
            fileName: "Typography Reference Guide.pdf",
            localPath: pathOne
        },
        {
            id: 4,
            title: "Design Templates Pack",
            description: "Collection of 50+ professionally designed templates for business cards, brochures, social media posts, banners, and marketing materials. These templates help interns quickly understand layout structure, spacing, and visual balance used in professional designs. Interns can customize colors, typography, and images to create unique designs while learning efficient design workflows used in branding, promotional campaigns, digital marketing content, and business communication.",
            type: "zip",
            size: "45 MB",
            downloads: 1245,
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            isRestricted: false,
            fileName: "Design Templates Pack.zip",
            localPath: pathOne
        },
        {
            id: 5,
            title: "Learning, Skill Development & Growth",
            description: "Learning, skill development, and growth opportunities designed to help interns improve their creative abilities and professional confidence. This section focuses on building design thinking, problem solving skills, and practical experience through guided tasks and real world projects. Interns gradually strengthen their creativity, understand industry expectations, and develop the ability to produce high quality visual designs for branding, marketing, and digital platforms.",
            type: "pdf",
            size: "1.2 MB",
            downloads: 987,
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
            isRestricted: true,
            fileName: "Learning, Skill Development & Growth.pdf",
            localPath: pathFive
        },
        {
            id: 6,
            title: "Productivity, AI & Workflow Support",
            description: "Step-by-step guide to creating an impressive design portfolio that gets you hired. This section explains how interns can organize their best projects, present design concepts clearly, and highlight creative problem solving skills. Interns learn how to structure case studies, showcase branding and digital work, write short project descriptions, and build a professional portfolio suitable for interviews, freelance opportunities, and career growth.",
            type: "pdf",
            size: "2.7 MB",
            downloads: 743,
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            isRestricted: true,
            fileName: "Productivity, AI & Workflow Support.pdf",
            localPath: pathSix
        },
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "Learning graphic design from scratch at ENGLORAY helped me start my design career.",
            author: "Arun kumar"
        },
        {
            id: 2,
            rating: 4,
            text: "I gained confidence and clarity in design fundamentals.",
            author: "Anitha M"
        },
        {
            id: 3,
            rating: 5,
            text: "From zero to portfolio-ENGLORAY guided me step by step.",
            author: "Karthik P"
        },
        {
            id: 4,
            rating: 4,
            text: "The training was beginner-friendly and very practical.",
            author: "Deepika R"
        },
        {
            id: 5,
            rating: 5,
            text: "The hands-on projects were incredible. I learned more in 3 months than I did in 3 years of college!",
            author: "Sarah J"
        },
        {
            id: 6,
            rating: 5,
            text: "Excellent mentorship and resources. The templates alone are worth the course price.",
            author: "Michael T"
        },
        {
            id: 7,
            rating: 4,
            text: "Great structure and flow. I really appreciated the real-world client briefs.",
            author: "Priya S"
        },
        {
            id: 8,
            rating: 5,
            text: "Transformed my career. I'm now working as a junior designer at a top agency!",
            author: "David Chen"
        }
    ];



    const benefits = [
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
            description: "1-on-1 mentorship sessions with experienced graphic design professionals"
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
        showLockedSectionToast("Graphic Designer Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'GD-filled' : ''}
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
        <div
            className="GD-scaling-outer-wrapper"
            style={{
                width: '100%',
                height: contentHeight * scale,
                overflow: 'hidden',
                backgroundColor: '#000000',
                position: 'relative'
            }}
        >
            <div
                ref={scalingRef}
                className="GD-scaling-inner-container"
                style={{
                    width: '1440px',
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: '#000000'
                }}
            >
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
                    <div className="GD-toast-message show">
                        <div className="GD-toast-content">
                            <span className="GD-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                            <span className="GD-toast-text">{toastMessage}</span>
                            <button
                                className="GD-toast-close"
                                onClick={() => setShowToast(false)}
                            >
                                <FontAwesomeIcon icon={faTimes} />
                            </button>
                        </div>
                    </div>
                )}

                <div className="GD-content" ref={containerRef}>
                    <TopNavBar />
                    <Navbar />
                    
                    

                    {/* Hero Section */}
                    <section
                        className="GD-section GD-hero-section-new"
                        id="home"
                    >
                        <div className="GD-hero-top-row">
                            <div className="GD-hero-badges">
                                <span className="GD-hero-badge"><FontAwesomeIcon icon={faCheckCircle} /> 2023 BEST DEVELOPMENT</span>
                                <span className="GD-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> WORLD CLASS DEVELOPMENT</span>
                            </div>
                            <div className="GD-hero-top-line-container">
                                <hr className="GD-hero-top-line" />
                                <svg className="GD-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>

                        <div className="GD-hero-typography">
                            <div className="GD-hero-line GD-hero-line-1">
                                <svg className="GD-sparkle-icon-large" viewBox="0 0 24 24" width="42" height="42">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="GD-hero-title-word">Where Teams</h1>
                                <p className="GD-hero-desc-small">
                                    Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                                </p>
                            </div>

                            <div className="GD-hero-line GD-hero-line-2">
                                <div className="GD-hero-image-pill GD-hero-image-1">
                                    <img src={gdHeroImg} alt="Graphic Designer" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                </div>
                                <h1 className="GD-hero-title-word GD-text-purple">Design &amp; Learn</h1>
                                <svg className="GD-sparkle-icon-small" viewBox="0 0 24 24" width="22" height="22">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>

                            <div className="GD-hero-line GD-hero-line-3">
                                <svg className="GD-sparkle-icon-small" viewBox="0 0 24 24" width="22" height="22">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="GD-hero-title-word">Together</h1>
                                <div className="GD-hero-image-pill GD-hero-image-2">
                                    <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Graphic Designer Studio" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                    <div className="GD-play-btn">
                                        <div className="GD-play-icon-triangle"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="GD-hero-bottom-row">
                            <div className="GD-hero-bottom-left">
                                <p className="GD-hero-desc-large">
                                    Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                                </p>
                                <div className="GD-hero-actions">
                                    <button className="GD-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                    <button className="GD-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                                </div>
                            </div>

                            <div className="GD-hero-bottom-right">
                                <div className="GD-rotating-stamp">
                                    <svg viewBox="0 0 100 100" className="GD-stamp-text-svg">
                                        <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                        <text>
                                            <textPath href="#circlePath" startOffset="0%">
                                                C R E A T I V E • D E V E L O P E R •
                                            </textPath>
                                        </text>
                                    </svg>
                                    <svg className="GD-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Course Content Section */}
                    <section
                        className="GD-section GD-course-horizontal-section"
                        id="course"
                    >
                        <div className="GD-course-background-top"></div>
                        <div className="GD-course-background-bottom"></div>

                        <div className="GD-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                            <div className="GD-course-header-row">
                                <div className="GD-course-header-left">
                                    <h2 className="GD-section-title" style={{ color: '#2d2d2d' }}>INTERNSHIP</h2>
                                    <h2 className="GD-section-title">
                                        <span className="GD-text-purple">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                    </h2>
                                </div>
                                <svg className="GD-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <div className="GD-course-header-right">
                                    <a href="#course" className="GD-view-all-link">View All</a>
                                </div>
                            </div>

                            <div className="GD-course-carousel-container">
                                <div className="GD-carousel-wrapper">
                                    <div
                                        className="GD-course-cards-wrapper"
                                        ref={cardsWrapperRef}
                                        style={{
                                            '--active-index': activeCourseIndex,
                                            transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                        }}
                                        onTransitionEnd={handleTransitionEnd}
                                    >
                                        {infiniteContent.map((item) => (
                                            <div key={item.uniqueId} className="GD-course-new-card">
                                                <div className="GD-course-card-badges">
                                                    <span className="GD-badge-pill">Phase {item.id}</span>
                                                    <span className="GD-badge-pill GD-badge-dark">{item.duration}</span>
                                                </div>
                                                <h3 className="GD-course-card-title">{item.title}</h3>

                                                {/* Checklist items in 2-column grid */}
                                                <div className="GD-course-card-checklist">
                                                    {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                        <div key={i} className="GD-checklist-item">
                                                            <FontAwesomeIcon icon={faCheck} className="GD-checklist-icon" />
                                                            <span>{point}</span>
                                                        </div>
                                                    )) : (
                                                        <p className="GD-course-card-desc">{item.description}</p>
                                                    )}
                                                </div>

                                                <div className="GD-course-card-image">
                                                    <img src={item.bgImage} alt={item.title} />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="GD-carousel-arrows">
                                    <button
                                        className="GD-carousel-arrow GD-carousel-arrow-left"
                                        onClick={handlePrevClick}
                                        aria-label="Previous module"
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                    </button>

                                    <button
                                        className="GD-carousel-arrow GD-carousel-arrow-right"
                                        onClick={handleNextClick}
                                        aria-label="Next module"
                                    >
                                        <FontAwesomeIcon icon={faArrowRight} />
                                    </button>
                                </div>
                            </div>

                            <div className="GD-course-dots">
                                {courseContent.map((_, index) => {
                                    const isActive = (activeCourseIndex % courseContent.length) === index;
                                    return (
                                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                            <button
                                                className={`GD-course-dot ${isActive ? 'GD-active-dot' : ''}`}
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




                    {/* Dream Navigator Section */}
                    <section className="GD-section GD-dream-navigator-section">
                        <div className="GD-dn-container">
                            {/* Top Header Row */}
                            <div className="GD-dn-header-row">
                                <div className="GD-dn-header-left">
                                    <h2 className="GD-dn-title">
                                        <div className="GD-dn-title-line1">
                                            Assets, Branding &
                                            <svg className="GD-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30" style={{ marginLeft: '10px' }}>
                                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                        <div className="GD-dn-title-line2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                                            <button
                                                className="GD-split-action-btn"
                                                style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0, flexShrink: 0 }}
                                                onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
                                            >
                                                <FontAwesomeIcon icon={faLock} /> Join course to Access
                                            </button>
                                            <span style={{ whiteSpace: 'nowrap' }}>Design Support</span>
                                            <svg className="GD-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30" style={{ flexShrink: 0 }}>
                                                <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                            </svg>
                                        </div>
                                    </h2>
                                </div>
                                <div className="GD-dn-header-right">
                                    <svg className="GD-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Access our library of premium design assets, complete branding kits, and expert support.
                                        Get 5000+ illustrations, 300+ fonts, and direct mentorship from senior designers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="GD-section GD-influencer-section" id="signin">
                        <div className="GD-influencer-container">
                            <div className="GD-influencer-content">
                                {showForm ? (
                                    <div className="GD-form-section GD-in-influencer">
                                        <div className="GD-form-wrapper GD-dark-form">
                                            <button
                                                className="GD-close-form-btn GD-close-dark"
                                                onClick={() => setShowForm(false)}
                                                aria-label="Close form"
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>

                                            <form className="GD-signin-form" onSubmit={handleSignSubmit}>
                                                <h3 className="GD-form-dark-title">Register Now</h3>
                                                <div className="GD-form-group">
                                                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleFormChange}
                                                        className={`GD-form-input ${errors.email ? 'GD-error' : ''}`}
                                                        placeholder="Enter your email"
                                                    />
                                                    {errors.email && <span className="GD-error-message">{errors.email}</span>}
                                                </div>

                                                <div className="GD-form-group">
                                                    <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                    <input
                                                        type="text"
                                                        id="course"
                                                        name="course"
                                                        value={formData.course}
                                                        onChange={handleFormChange}
                                                        className={`GD-form-input ${errors.course ? 'GD-error' : ''}`}
                                                        placeholder="Enter Course Name"
                                                    />
                                                    {errors.course && <span className="GD-error-message">{errors.course}</span>}
                                                </div>

                                                <div className="GD-form-group GD-checkbox-group">
                                                    <input
                                                        type="checkbox"
                                                        id="agreeTerms"
                                                        name="agreeTerms"
                                                        checked={formData.agreeTerms}
                                                        onChange={handleFormChange}
                                                        className={errors.agreeTerms ? 'GD-error' : ''}
                                                    />
                                                    <label htmlFor="agreeTerms">
                                                        I agree to the Terms of Service and Privacy Policy
                                                    </label>
                                                    {errors.agreeTerms && <span className="GD-error-message">{errors.agreeTerms}</span>}
                                                </div>

                                                <button type="submit" className="GD-submit-btn">
                                                    Register
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="GD-influencer-split">
                                        <div className="GD-influencer-left">
                                            <h2 className="GD-influencer-title">
                                                Join <span className="GD-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                                                <br />
                                                <div className="GD-influencer-avatars">
                                                    <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                    <img src={iconEducationBook} alt="Education Book" />
                                                    <img src={iconCertificate} alt="Education Certificate" />
                                                </div>
                                                to collaborate
                                                <br />
                                                with us

                                            </h2>
                                        </div>
                                        <div className="GD-influencer-right">
                                            <div
                                                className="GD-see-how-card"
                                                onClick={() => setShowForm(true)}
                                            >
                                                <div className="GD-card-top-icons">
                                                    <div className="GD-video-circle">
                                                        <FontAwesomeIcon icon={faVideo} />
                                                    </div>
                                                    <div className="GD-arrow-circle">
                                                        <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                    </div>
                                                </div>
                                                <h3 className="GD-see-how-text">See how<br />it's done</h3>
                                                <div className="GD-card-decorations">
                                                    <div className="GD-decor-ring-1"></div>
                                                    <div className="GD-decor-ring-2"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>


                            {/* {!showForm && (
              <div className="GD-join-course-banner">
                <h3 className="GD-join-banner-title">JOIN OUR COURSE</h3>
                <div className="GD-join-banner-content">
                  <h4 className="GD-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Graphic Designer course</h4>
                  <p className="GD-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="GD-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                        </div>
                    </section>

                    <section className="GD-section GD-dream-navigator-section" id="dream-navigator">
                        <div className="GD-dn-container">

                            {/* Design Resources Title - styled like Dream Navigator header */}
                            <div className="GD-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '0.5rem', position: 'relative' }}>
                                <div style={{ flex: 1 }}>
                                    <h2 className="GD-dn-title">
                                        DESIGN
                                        <svg className="GD-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30">
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                        RESOURCES
                                        <svg className="GD-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30">
                                            <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                        </svg>
                                    </h2>
                                    <div className="GD-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                        <svg className="GD-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                        <p>
                                            Download valuable design templates, guides, and assets
                                            to enhance your creative process.
                                        </p>
                                    </div>
                                </div>

                                {/* Quick Tips Toggle Button */}
                                <div className="GD-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                    <button
                                        className="GD-quick-tips-btn"
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
                                        className={`GD-quick-tips-panel ${showQuickTips ? 'GD-show' : ''}`}
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
                            <div className="GD-dn-visual-row GD-resources-accordion">
                                {courseResources.slice(0, 6).map((resource, index) => {
                                    const isActive = activeAccordionIndex === index;
                                    const num = `0${index + 1}`;

                                    if (isActive) {
                                        return (
                                            <div key={resource.id} className="GD-accordion-panel GD-accordion-expanded GD-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #f3e8ff 0%, #d8b4fe 100%)' : 'linear-gradient(135deg, #faf5ff 0%, #e9d5ff 100%)' }}>
                                                <div className="GD-dn-sc-header">
                                                    <div className="GD-dn-sc-num">{num}</div>
                                                    <div className="GD-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                        {resource.icon}
                                                    </div>
                                                </div>
                                                <h3 className="GD-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                                <p className="GD-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>

                                                <div className="GD-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                    <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                    <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                    {resource.isRestricted && (
                                                        <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>
                                                    )}
                                                </div>

                                                {resource.isRestricted ? (
                                                    <button
                                                        className="GD-dn-sc-btn"
                                                        onClick={() => handleJoinCourseForResource(resource.title)}
                                                        style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}
                                                    >
                                                        <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                    </button>
                                                ) : (
                                                    <button
                                                        className={`GD-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'GD-downloaded' : ''}`}
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
                                                className={`GD-accordion-panel GD-accordion-collapsed GD-dn-v-pill ${index % 2 === 0 ? 'GD-dn-bg-dark' : 'GD-dn-bg-light'}`}
                                                onClick={() => setActiveAccordionIndex(index)}
                                            >
                                                <span className="GD-dn-v-text">{resource.title}</span>
                                                <div className="GD-dn-v-num">{num}</div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            {/* Stats Row - horizontal style matching the reference UI */}
                            <div className="GD-dn-stats-row">
                                <div className="GD-dn-stat-items">
                                    <div className="GD-dn-stat-item"><strong>20</strong> Total Resources</div>
                                    <div className="GD-dn-stat-item"><strong>32,000</strong> Total Downloads</div>
                                    <div className="GD-dn-stat-item"><strong>{yourDownloadsCount}</strong> Your Downloads</div>
                                </div>
                                <div className="GD-dn-socials">
                                    <span className="GD-dn-social-icon" title="Total Resources"><FontAwesomeIcon icon={faFileAlt} /></span>
                                    <span className="GD-dn-social-icon" title="Total Downloads"><FontAwesomeIcon icon={faDownload} /></span>
                                    <span className="GD-dn-social-icon" title="Your Downloads"><FontAwesomeIcon icon={faUser} /></span>
                                </div>
                            </div>

                            <div className="GD-resources-note">
                                <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                                <p>
                                    Our course includes <strong>20 comprehensive resources</strong> to support your design journey.
                                    First 4 resources are available for free download. <strong>Design Software Cheatsheets</strong> and
                                    <strong> Portfolio Building Guide</strong> are exclusive to enrolled students.
                                    Join our course to access all 20 premium resources and unlock full learning potential.
                                </p>
                            </div>

                            <hr className="GD-dn-divider" />

                            {/* Bottom Dashboard Row */}
                            <div className="GD-dn-dashboard-row">
                                <div className="GD-dn-dash-left">
                                    <h3 className="GD-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access  Certificate included </h3>
                                    <button
                                        className="GD-dn-dash-btn"
                                        onClick={handleBenefitsClick}
                                    >
                                        Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                    </button>
                                </div>
                                <div className="GD-dn-dash-right">
                                    <div className="GD-dn-dash-card">
                                        <div className="GD-dn-dash-icon GD-dash-icon-1"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6c2bd9" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                                        <div className="GD-dn-dash-info">
                                            <span className="GD-dn-dash-label">Successful Graduates</span>
                                            <span className="GD-dn-dash-value">10,000+</span>
                                        </div>
                                    </div>
                                    <div className="GD-dn-dash-card">
                                        <div className="GD-dn-dash-icon GD-dash-icon-2"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6c2bd9" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                        <div className="GD-dn-dash-info">
                                            <span className="GD-dn-dash-label">Job Placement Rate</span>
                                            <span className="GD-dn-dash-value">94%</span>
                                        </div>
                                    </div>
                                    <div className="GD-dn-dash-card">
                                        <div className="GD-dn-dash-icon GD-dash-icon-3"><FontAwesomeIcon icon={faUsers} style={{ color: '#6c2bd9' }} /></div>
                                        <div className="GD-dn-dash-info">
                                            <span className="GD-dn-dash-label">Industry Partners</span>
                                            <span className="GD-dn-dash-value">50+</span>
                                        </div>
                                    </div>
                                    <div className="GD-dn-dash-card">
                                        <div className="GD-dn-dash-icon GD-dash-icon-4"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#6c2bd9" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                                        <div className="GD-dn-dash-info">
                                            <span className="GD-dn-dash-label">Community Support</span>
                                            <span className="GD-dn-dash-value">24/7</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Find Influencers Section (Dark UI Style) */}
                    {/* <section className="GD-section GD-influencer-section" id="signin">
          <div className="GD-influencer-container">
            <div className="GD-influencer-content">
              {showForm ? (
                <div className="GD-form-section GD-in-influencer">
                  <div className="GD-form-wrapper GD-dark-form">
                    <button
                      className="GD-close-form-btn GD-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="GD-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="GD-form-dark-title">Register Now</h3>
                      <div className="GD-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`GD-form-input ${errors.email ? 'GD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="GD-error-message">{errors.email}</span>}
                      </div>

                      <div className="GD-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`GD-form-input ${errors.course ? 'GD-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="GD-error-message">{errors.course}</span>}
                      </div>

                      <div className="GD-form-group GD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'GD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="GD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="GD-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="GD-influencer-split">
                  <div className="GD-influencer-left">
                    <h2 className="GD-influencer-title">
                      Join <span className="GD-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="GD-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="GD-influencer-search-bar">
                        <span className="GD-search-placeholder">| Search</span>
                        <div className="GD-search-actions">
                          <FontAwesomeIcon icon={faStar} className="GD-voice-icon" />
                          <button className="GD-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="GD-influencer-right">
                    <div
                      className="GD-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="GD-card-top-icons">
                        <div className="GD-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="GD-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="GD-see-how-text">See how<br />it's done</h3>
                      <div className="GD-card-decorations">
                        <div className="GD-decor-ring-1"></div>
                        <div className="GD-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="GD-join-course-banner">
                <h3 className="GD-join-banner-title">JOIN OUR COURSE</h3>
                <div className="GD-join-banner-content">
                  <h4 className="GD-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Graphic Designer course</h4>
                  <p className="GD-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="GD-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                    {/* </div> */}
                    {/* </section> */}

                    {/* Assets, Branding & Design Support (Video Layout Style) */}
                    {/* <section className="GD-section GD-split-section GD-split-reverse" id="assets">
          <div className="GD-split-container">
            <div className="GD-split-left">
              <div className="GD-video-visual">
                <svg className="GD-floating-bg-star GD-star-bg-3" viewBox="0 0 24 24" width="50" height="50">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
                <div className="GD-video-frame">
                  <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Graphic Designer" />
                  <div className="GD-video-overlay-text">
                    premium<br />assets
                  </div>
                </div>

                <div className="GD-float-tooltip">
                  <div className="GD-tt-header">
                    <span className="GD-tt-title">Context meaning</span>
                    <span className="GD-tt-flag">👑</span>
                  </div>
                  <div className="GD-tt-subtitle">"Direct support from seniors"</div>
                  <div className="GD-tt-footer">
                    <span className="GD-tt-bulb">💡</span> It means guiding and reviewing projects.
                  </div>
                </div>
              </div>
            </div>

            <div className="GD-split-right">
              <h2 className="GD-split-title">
                Assets, Branding & Design Support
                <svg className="GD-sparkle-icon-split" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
              </h2>

              <div className="GD-split-points" style={{ margin: '2rem 0' }}>
                <div className="GD-split-point" style={{ alignItems: 'center' }}>
                  <div className="GD-split-icon-red">
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#ff4d6d', fontSize: '1.2rem' }} />
                  </div>
                  <div className="GD-split-point-text">
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>No hidden fees or limited access to standard templates.</h4>
                  </div>
                </div>
                <div className="GD-split-point" style={{ alignItems: 'center' }}>
                  <div className="GD-split-icon-green">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00c48c', fontSize: '1.2rem' }} />
                  </div>
                  <div className="GD-split-point-text">
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>Includes lifetime access to premium assets + 6 months of design support.</h4>
                  </div>
                </div>
              </div>

              <p className="GD-split-desc" style={{ fontSize: '0.95rem' }}>
                Access our exclusive library of premium design assets, complete branding kits,
                and professional design support. Get 5000+ vector illustrations, 300+ premium fonts,
                brand identity templates, and direct support from senior designers.
              </p>

              <button
                className="GD-split-action-btn"
                onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
              >
                <FontAwesomeIcon icon={faLock} /> Join course to Access
              </button>
            </div>
          </div>
        </section> */}

                    {/* Image Gallery Section */}
                    <section
                        className="GD-section GD-new-gallery-section"
                        id="gallery"
                    >
                        <div className="GD-Gallery-container-new">
                            <div className="GD-Gallery-header-new">
                                <div className="GD-Gallery-title-wrapper-new">
                                    <span className="GD-Gallery-title-line-new"></span>
                                    <h2 className="GD-Gallery-title-new">Learning Environment</h2>
                                </div>
                                {/* <p className="GD-Gallery-view-all-new">Explore our dynamic learning environment, where creativity meets collaboration. From hands-on projects to expert guidance, we provide everything you need to excel in your graphic design journey.</p> */}
                            </div>

                            <div className="GD-Gallery-grid-new">
                                {/* Left Column (1 Large Card) */}
                                <div
                                    className="GD-Gallery-large-card-new"
                                    onClick={() => handleImageClick(imagesWithDescriptions[0])}
                                >
                                    <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="GD-Gallery-card-bg-new" />
                                    <div className="GD-Gallery-card-overlay-new"></div>
                                    <div className="GD-Gallery-card-content-new">
                                        <span className="GD-Gallery-badge-new">Environment</span>
                                        <h3 className="GD-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                        <div className="GD-Gallery-meta-new">
                                            <span className="GD-Gallery-meta-item-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                            <span className="GD-Gallery-meta-item-new"><FontAwesomeIcon icon={faComments} /> No Comments</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Middle Column (3 Small Cards) */}
                                <div className="GD-Gallery-middle-col-new">
                                    {[1, 2, 3].map((index) => {
                                        const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                        return (
                                            <div
                                                key={index}
                                                className="GD-Gallery-small-card-new"
                                                onClick={() => handleImageClick(item)}
                                            >
                                                <div className="GD-Gallery-small-image-new">
                                                    <img src={item.url} alt={item.title} />
                                                </div>
                                                <div className="GD-Gallery-small-content-new">
                                                    <span className="GD-Gallery-badge-text-new">Environment</span>
                                                    <h4 className="GD-Gallery-small-title-new">{item.title}</h4>
                                                    <span className="GD-Gallery-small-date-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Right Column (2 Medium Cards) */}
                                <div className="GD-Gallery-right-col-new">
                                    {[4, 5].map((index) => {
                                        const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                        return (
                                            <div
                                                key={index}
                                                className="GD-Gallery-medium-card-new"
                                                onClick={() => handleImageClick(item)}
                                            >
                                                <img src={item.url} alt={item.title} className="GD-Gallery-card-bg-new" />
                                                <div className="GD-Gallery-card-overlay-new"></div>
                                                <div className="GD-Gallery-card-content-new">
                                                    <h3 className="GD-Gallery-medium-title-new">{item.title}</h3>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Existing Note Logic */}
                            {activeDescription && (
                                <div className="GD-gallery-description" style={{ marginTop: '2rem' }}>
                                    <div className="GD-description-content">
                                        <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                        <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Ready-to-Use Design Templates */}
                    {/* <section
          className="GD-section GD-locked-section GD-templates-section"
          id="templates"
        >
          <div className="GD-locked-section-overlay"></div>
          <div className="GD-locked-content">
            <div className="GD-locked-icon">
              <span className="GD-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="GD-section-title">Ready-to-Use Design Templates</h2>
            <p className="GD-section-description">
              Get instant access to our proprietary library of 1000+ professionally designed templates.
              Includes social media kits, business presentations, marketing materials, UI/UX components,
              and print-ready templates that are fully customizable and commercially licensed.
            </p>
            <button
              className="GD-locked-btn GD-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="GD-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="GD-locked-note">
              <svg className="GD-animated-star" viewBox="0 0 24 24" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
              </svg>
              One-time payment for lifetime access to all template updates  {/* Changed from faSparkles to faStar */}
                    {/* </p>
          </div>
        </section> */}

                    {/* Previous Resources Section removed as it's now integrated into the Dream Navigator section */}

                    {/* Graphic Designer Benefits Section */}
                    <section
                        className="GD-section GD-new-benefits-section"
                        id="benefits"
                    >
                        {/* Background decorative SVG elements */}
                        <div className="GD-benefits-bg-shapes">
                            <svg className="GD-bg-shape GD-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#cfcaff" strokeWidth="2" />
                            </svg>
                            <svg className="GD-bg-shape GD-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#cfcaff" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="GD-benefits-container-new">
                            {/* Keeping the original title and subtitle */}
                            <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                                <h2 className="GD-section-title">
                                    <svg className="GD-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="black" />
                                    </svg>
                                    Graphic Designer Benefits
                                    <svg className="GD-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="black" />
                                    </svg>
                                </h2>
                                <p className="GD-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                    When you join our comprehensive graphic design course, you unlock exclusive benefits
                                    that accelerate your career growth and skill development.
                                </p>
                            </div>

                            <div className="GD-benefits-image-grid-new">
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
                                            className={`GD-benefit-img-card-new GD-benefit-img-card-${index}-new`}
                                        >
                                            <img src={benefitImages[index]} alt={benefit.title} className="GD-benefit-card-bg-new" />
                                            <div className="GD-benefit-card-overlay-new"></div>
                                            <div className="GD-benefit-card-content-new">
                                                <div className="GD-benefit-card-header-new">
                                                    <span className="GD-benefit-card-icon-new">{benefit.icon}</span>
                                                    <h3 className="GD-benefit-card-title-new">{benefit.title}</h3>
                                                </div>
                                                <p className="GD-benefit-card-desc-new">{benefit.description}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>



                    {/* Testimonials Section - Restyled to Dream Team UI */}
                    <section
                        className="GD-section GD-dt-section"
                        id="feedback"
                    >
                        <div className="GD-dt-container">
                            <div className="GD-dt-header">
                                <h2 className="GD-dt-title">
                                    <span>Designers</span> <span>Testimonials<svg className="GD-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#7ad690" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                                </h2>
                                <p className="GD-dt-subtitle">
                                    Hear what our students have to say about their learning experience
                                </p>
                            </div>

                            <div className="GD-dt-cards-wrapper">
                                <div className="GD-dt-cards">
                                    {[...testimonials, ...testimonials].map((testimonial, index) => {
                                        const cardClassIndex = (index % 5) + 1;
                                        const imgMap = {
                                            1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                            5: girl3, 6: boy3, 7: girl4, 8: boy4
                                        };

                                        const photoUrl = imgMap[testimonial.id];

                                        return (
                                            <div key={`${testimonial.id || index}-${index}`} className={`GD-dt-card GD-dt-card-${cardClassIndex}`}>
                                                <div className="GD-dt-card-img-wrapper">
                                                    <img
                                                        src={photoUrl}
                                                        alt={testimonial.author}
                                                        className="GD-dt-card-img"
                                                    />
                                                    <div className="GD-dt-pattern-bg"></div>
                                                </div>
                                                <div className={`GD-dt-card-content GD-dt-content-bg-${cardClassIndex}`}>
                                                    <h4 className="GD-dt-card-name">{testimonial.author}</h4>
                                                    <p className="GD-dt-card-text">{testimonial.text}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* <div className="GD-dt-dots">
              <span className="GD-dt-dot GD-dt-dot-active"></span>
              <span className="GD-dt-dot"></span>
              <span className="GD-dt-dot"></span>
            </div> */}
                        </div>
                    </section>
                    <BackToTop />
                    <SubFooterOne />
                </div>
            </div>
        </div>
    );
}

export default GraphicDesignerInternPage;