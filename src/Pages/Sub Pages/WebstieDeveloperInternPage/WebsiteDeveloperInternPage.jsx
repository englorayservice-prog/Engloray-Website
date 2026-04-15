import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faLaptopCode,
    faServer,
    faRocket,
    faBriefcase,
    faStar,
    faBook,
    faTerminal,
    faDatabase,
    faGlobe,
    faCloud,
    faShieldAlt,
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
    faQrcode,
    faUser,
    faVideo,
    faPlayCircle,
    faPauseCircle,
    faClock,
    faCheckCircle,
    faTimes,
    faArrowRight,
    faRulerCombined,
    faTools,
    faLightbulb,
    faFilePdf,
    faFileArchive,
    faFileWord,
    faFile,
    faDownload,
    faUsers,
    faMoneyBillWave,
    faNetworkWired,
    faEye,
    faCrown,
    faGem,
    faInfoCircle
} from '@fortawesome/free-solid-svg-icons';
import './WebsiteDeveloperInternPage.css';
//import iconGraduationCap from '../../../../assets/iicons/icon_graduation_cap.png';
import iconGraduationCap from '../../../assets/iicons/icon_graduation_cap.png';
import iconEducationBook from '../../../assets/iicons/icon_education_book.png';
import iconCertificate from '../../../assets/iicons/icon_certificate.png';
// import avatarMale from '../../../../assets/iicons/avatar_male.png';
// import avatarFemale from '../../../../assets/iicons/avatar_female.png';

//import { submitInternship } from "../../HandleSubmit/InternshipSubmit";
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";

import pathOne from '../../../assets/resources file/resources file/TECH/Website developer/Core Development Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/Website developer/Benefits of Website Developer Resources.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/Website developer/Backend, Database & Server Support.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/Website developer/Frontend Development Stack.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';
import Footer from '../../../Components/Footer/Footer';
import benefitCareer from '../../../assets/iicons/career_opportunities_vibrant.png';
import benefitCertification from '../../../assets/iicons/image copy.png';
import benefitMoneyBack from '../../../assets/iicons/money_back_guarantee.jpg';
import boy1 from '../../../assets/images/boy1.png';
import boy2 from '../../../assets/images/boy2.png';
import boy3 from '../../../assets/images/boy3.png';
import boy4 from '../../../assets/images/boy4.png';
import girl1 from '../../../assets/images/girl1.png';
import girl2 from '../../../assets/images/girl2.png';
import girl3 from '../../../assets/images/girl3.png';
import girl4 from '../../../assets/images/girl4.png';

// Training phase background images - 100% topic-relevant
const bgFrontend = "https://images.unsplash.com/photo-1537884944318-390069bb8665?auto=format&fit=crop&w=1600&q=80"; // HTML/CSS/JS code on screen
const bgBackend = "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80"; // Server rack/database infrastructure
const bgFullStack = "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?auto=format&fit=crop&w=1600&q=80"; // Developer working on multiple screens

const wdHeroImg = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80";
const galleryModernLab = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const galleryCollab = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80";
const galleryWorkstation = "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=1600&q=80";
const galleryPresentation = "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80";
const galleryInteractive = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1600&q=80";
const galleryArchitecture = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80";


const benefitMentorship = "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80";
const benefitSoftware = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80"; // Premium Dark Editor screen
const benefitNetworking = "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=800&q=80";


// Local assets for course backgrounds - Replaced with relevant Web Dev images

const bgPerformance = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80"; // Analytics dashboard / SEO charts

const WebsiteDeveloperInternPage = () => {
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
            title: "Frontend Development stack",
            description: [
                "HTML5 & CSS3 Advanced",
                "JavaScript ES6+ Features",
                "React.js Hooks & Context",
                "Responsive Web Design",
                "Tailwind CSS Framework",
                "Web Accessibility Basics"
            ],
            duration: "6 weeks",
            bgImage: bgFrontend,
            icon: <FontAwesomeIcon icon={faCode} />
        },
        {
            id: 2,
            title: "Backend Development",
            description: [
                "Node.js & Express.js",
                "RESTful API Development",
                "SQL & NoSQL Databases",
                "Auth & Security (JWT)",
                "Server Side Rendering",
                "API Documentation (Swagger)"
            ],
            duration: "8 weeks",
            bgImage: bgBackend,
            icon: <FontAwesomeIcon icon={faServer} />
        },
        {
            id: 3,
            title: "Full-Stack Mastery",
            description: [
                "MERN Stack Integration",
                "State Management (Redux)",
                "Cloud Deployment (AWS/Heroku)",
                "Testing & Debugging",
                "CI/CD Pipelines",
                "Project Architecture"
            ],
            duration: "8 weeks",
            bgImage: bgFullStack,
            icon: <FontAwesomeIcon icon={faLaptopCode} />
        },
        {
            id: 4,
            title: "Performance & SEO",
            description: [
                "Core Web Vitals",
                "SEO Auditing & Strategy",
                "Frontend Optimization",
                "Speed Testing Tools",
                "CDN Configuration",
                "Caching Strategies"
            ],
            duration: "6 weeks",
            bgImage: bgPerformance,
            icon: <FontAwesomeIcon icon={faRocket} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: galleryModernLab,
            title: "Modern Web Lab",
            description: "Our state-of-the-art web development lab with high-performance computers and dual monitors for immersive coding sessions.",
            icon: <FontAwesomeIcon icon={faLaptopCode} />
        },
        {
            url: galleryCollab,
            title: "Team Collaboration Space",
            description: "Students working together on web projects in our interactive collaboration zone with real-time code sharing.",
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            url: galleryWorkstation,
            title: "Web Development Workstation",
            description: "Individual development stations equipped with professional tools and IDEs for hands-on web development practice.",
            icon: <FontAwesomeIcon icon={faTerminal} />
        },
        {
            url: galleryPresentation,
            title: "Project Presentation Room",
            description: "Students showcasing web projects to instructors and peers in our dedicated presentation room.",
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />
        },
        {
            url: galleryInteractive,
            title: "Interactive Development",
            description: "Building responsive and dynamic web interfaces with modern frameworks and real-time feedback loop.",
            icon: <FontAwesomeIcon icon={faCode} />
        },
        {
            url: galleryArchitecture,
            title: "System Architecture Design",
            description: "Designing scalable system architectures and database schemas for high-traffic web applications.",
            icon: <FontAwesomeIcon icon={faDatabase} />
        }
    ];

    // Course resources with local file paths
    const courseResources = [
        {
            id: 1,
            title: "Core Development Tools & Technology",
            description: "Detailed overview of the coding tools, platforms, and technologies used during the website developer internship. This phase introduces industry-standard software such as VS Code, Git, and modern web frameworks like React and Node.js, along with agile development workflows and collaboration practices used in professional environments. Interns will learn how to apply essential techniques to build scalable web applications.",
            type: "pdf",
            size: "2.4 MB",
            downloads: 2345,
            icon: <FontAwesomeIcon icon={faTools} />,
            isRestricted: false,
            fileName: "Core Development Tools & Technology.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Benefits of Website Developer Resources",
            description: "Comprehensive guide to leveraging development resources for building high-performance web applications. This section explores how frameworks, libraries, and dev tools influence development efficiency and application quality across different platforms. Interns will learn to use professional documentation, debugging tools, and performance monitors to build visually appealing and highly functional websites.",
            type: "pdf",
            size: "3.1 MB",
            downloads: 1876,
            icon: <FontAwesomeIcon icon={faStar} />,
            isRestricted: false,
            fileName: "Benefits of Website Developer Resources.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Frontend Development Stack",
            description: "Essential frontend development rules, framework best practices, and UI/UX patterns for creating modern and visually balanced web applications. This section helps interns understand how to choose appropriate libraries, manage state, and maintain consistency across web layouts. Interns will explore responsive design, accessibility, and modern CSS techniques to improve user experience.",
            type: "pdf",
            size: "1.8 MB",
            downloads: 1567,
            icon: <FontAwesomeIcon icon={faGlobe} />,
            isRestricted: false,
            fileName: "Frontend Development Stack.pdf",
            localPath: pathSix
        },
        {
            id: 4,
            title: "Backend, Database & Server Support",
            description: "Collection of server templates, database schemas, and API structures for backend development. These resources help interns quickly understand server architecture, database normalization, and API design. Interns can customize Node.js express routes, MongoDB schemas, and environment configurations to create secure and scalable backend systems.",
            type: "pdf",
            size: "4.5 MB",
            downloads: 1245,
            icon: <FontAwesomeIcon icon={faServer} />,
            isRestricted: false,
            fileName: "Backend, Database & Server Support.pdf",
            localPath: pathFive
        },
        {
            id: 5,
            title: "Learning, Skill Development & Growth",
            description: "Learning, skill development, and growth opportunities designed to help interns improve their technical abilities and professional confidence. This section focuses on building algorithmic thinking, problem solving skills, and practical experience through guided coding tasks and real world projects. Interns gradually strengthen their engineering mindset and industry readiness.",
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
            description: "Step-by-step guide to creating an impressive developer portfolio and GitHub profile that gets you hired. This section explains how interns can organize their repositories, contribute to open source, and highlight technical problem solving skills. Interns learn how to structure READMEs, showcase full-stack projects, and prepare for technical interviews.",
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
            text: "The React and performance optimization techniques I learned here helped me land a frontend role at a top agency.",
            author: "Aditya S"
        },
        {
            id: 2,
            rating: 4,
            text: "Gained incredible confidence in building responsive and accessible web applications. Truly practical training.",
            author: "Meghana R"
        },
        {
            id: 3,
            rating: 5,
            text: "From mastering CSS Grid to deploying complex React apps, this internship covered all the essentials.",
            author: "Rohan D"
        },
        {
            id: 4,
            rating: 4,
            text: "The mentorship provided was exceptional. My mentor helped me refine my codebase and GitHub profile.",
            author: "Sneha V"
        },
        {
            id: 5,
            rating: 5,
            text: "Unbeatable experience in modern web workflows and design systems. I felt ready for the professional world.",
            author: "Vikram P"
        },
        {
            id: 6,
            rating: 5,
            text: "The networking opportunities were fantastic. I connected with so many talented developers and industry leaders.",
            author: "Tanya S"
        },
        {
            id: 7,
            rating: 4,
            text: "Solid structure and intense learning. The real-world project briefs were extremely helpful for my portfolio.",
            author: "Arjun M"
        },
        {
            id: 8,
            rating: 5,
            text: "Best decision for my career. I'm now a lead frontend developer at a growing tech startup!",
            author: "Kavya R"
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
            icon: <FontAwesomeIcon icon={faUsers} />,
            title: "Expert Mentorship",
            description: "1-on-1 mentorship sessions with experienced web development professionals"
        },
        {
            icon: <FontAwesomeIcon icon={faTools} />,
            title: "Software Access",
            description: "Free access to premium web development tools and IDEs during the course"
        },
        {
            icon: <FontAwesomeIcon icon={faComments} />,
            title: "Active Community",
            description: "Join our community of 10,000+ developers and industry professionals"
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
        showLockedSectionToast("Website Developer Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'WD-filled' : ''}
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
                    <title>Engloray Tech | Website Developer Internship</title>
                    <meta name="description" content="Build modern, scalable web applications and master full-stack development with our premium internship program." />
                    <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content="Engloray Tech | Website Developer" />
                    <meta property="og:description" content="Join our premium web development internship program." />
                </Helmet>
            </div>
            {/* Toast Message - Fixed Position */}
            {showToast && (
                <div className="WD-toast-message show">
                    <div className="WD-toast-content">
                        <span className="WD-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                        <span className="WD-toast-text">{toastMessage}</span>
                        <button
                            className="WD-toast-close"
                            onClick={() => setShowToast(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}

            <div className="WD-content" ref={containerRef}>
                {/* <TopNavBar/> */}
                {/* <Navbar/> */}

                {/* Hero Section */}
                <section
                    className="WD-section WD-hero-section-new"
                    id="home"
                >
                    <div className="WD-hero-top-row">
                        <div className="WD-hero-badges">
                            <span className="WD-hero-badge"><FontAwesomeIcon icon={faCheckCircle} /> 2023 BEST DEVELOPMENT</span>
                            <span className="WD-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> WORLD CLASS DEVELOPMENT</span>
                        </div>
                        <div className="WD-hero-top-line-container">
                            <hr className="WD-hero-top-line" />
                            <svg className="WD-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="WD-hero-typography">
                        <div className="WD-hero-line WD-hero-line-1">
                            <svg className="WD-sparkle-icon-large" viewBox="0 0 24 24" width="40" height="40">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="WD-hero-title-word">Where Teams</h1>
                            <p className="WD-hero-desc-small">
                                Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                            </p>
                        </div>

                        <div className="WD-hero-line WD-hero-line-2">
                            <div className="WD-hero-image-pill WD-hero-image-1">
                                <img src={wdHeroImg} alt="Website Developer" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <h1 className="WD-hero-title-word WD-text-blue">Build & Deploy</h1>
                            <svg className="WD-sparkle-icon-small" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="WD-hero-line WD-hero-line-3">
                            <svg className="WD-sparkle-icon-small" viewBox="0 0 24 24" width="25" height="25" style={{ marginRight: '0rem' }}>
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="WD-hero-title-word" style={{ marginLeft: '-1rem' }}>Together</h1>
                            <div className="WD-hero-image-pill WD-hero-image-2">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80" alt="Web Development Studio" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                <div className="WD-play-btn">
                                    <div className="WD-play-icon-triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="WD-hero-bottom-row">
                        <div className="WD-hero-bottom-left">
                            <p className="WD-hero-desc-large">
                                Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                            </p>
                            <div className="WD-hero-actions">
                                <button className="WD-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                <button className="WD-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                            </div>
                        </div>

                        <div className="WD-hero-bottom-right">
                            <div className="WD-rotating-stamp">
                                <svg viewBox="0 0 100 100" className="WD-stamp-text-svg">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            C R E A T I V E • D E V E L O P E R •
                                        </textPath>
                                    </text>
                                </svg>
                                <svg className="WD-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section
                    className="WD-section WD-course-horizontal-section"
                    id="course"
                >
                    <div className="WD-course-background-top"></div>
                    <div className="WD-course-background-bottom"></div>

                    <div className="WD-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                        <div className="WD-course-header-row">
                            <div className="WD-course-header-left">
                                <h2 className="WD-section-title" style={{ color: '#2d2d2d' }}>INTERNSHIP</h2>
                                <h2 className="WD-section-title">
                                    <span className="WD-text-blue">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                </h2>
                            </div>
                            <svg className="WD-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <div className="WD-course-header-right">
                                <a href="#course" className="WD-view-all-link">View All</a>
                            </div>
                        </div>

                        <div className="WD-course-carousel-container">
                            <div className="WD-carousel-wrapper">
                                <div
                                    className="WD-course-cards-wrapper"
                                    ref={cardsWrapperRef}
                                    style={{
                                        '--active-index': activeCourseIndex,
                                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {infiniteContent.map((item) => (
                                        <div key={item.uniqueId} className="WD-course-new-card">
                                            <div className="WD-course-card-badges">
                                                <span className="WD-badge-pill">Phase {item.id}</span>
                                                <span className="WD-badge-pill WD-badge-dark">{item.duration}</span>
                                            </div>
                                            <h3 className="WD-course-card-title">{item.title}</h3>

                                            {/* Checklist items in 2-column grid */}
                                            <div className="WD-course-card-checklist">
                                                {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                    <div key={i} className="WD-checklist-item">
                                                        <FontAwesomeIcon icon={faCheck} className="WD-checklist-icon" />
                                                        <span>{point}</span>
                                                    </div>
                                                )) : (
                                                    <p className="WD-course-card-desc">{item.description}</p>
                                                )}
                                            </div>

                                            <div className="WD-course-card-image">
                                                <img src={item.bgImage} alt={item.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="WD-carousel-arrows">
                                <button
                                    className="WD-carousel-arrow WD-carousel-arrow-left"
                                    onClick={handlePrevClick}
                                    aria-label="Previous module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                </button>

                                <button
                                    className="WD-carousel-arrow WD-carousel-arrow-right"
                                    onClick={handleNextClick}
                                    aria-label="Next module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>

                        <div className="WD-course-dots">
                            {courseContent.map((_, index) => {
                                const isActive = (activeCourseIndex % courseContent.length) === index;
                                return (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <button
                                            className={`WD-course-dot ${isActive ? 'WD-active-dot' : ''}`}
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

                {/* <section className="WD-section WD-influencer-section" id="signin">
          <div className="WD-influencer-container">
            <div className="WD-influencer-content">
              {showForm ? (
                <div className="WD-form-section WD-in-influencer">
                  <div className="WD-form-wrapper WD-dark-form">
                    <button
                      className="WD-close-form-btn WD-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="WD-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="WD-form-dark-title">Register Now</h3>
                      <div className="WD-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.email ? 'WD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="WD-error-message">{errors.email}</span>}
                      </div>

                      <div className="WD-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.course ? 'WD-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="WD-error-message">{errors.course}</span>}
                      </div>

                      <div className="WD-form-group WD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'WD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="WD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="WD-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="WD-influencer-split">
                  <div className="WD-influencer-left">
                    <h2 className="WD-influencer-title">
                      Join <span className="WD-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="WD-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="WD-influencer-search-bar">
                        <span className="WD-search-placeholder">| Search</span>
                        <div className="WD-search-actions">
                          <FontAwesomeIcon icon={faStar} className="WD-voice-icon" />
                          <button className="WD-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="WD-influencer-right">
                    <div
                      className="WD-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="WD-card-top-icons">
                        <div className="WD-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="WD-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="WD-see-how-text">See how<br />it's done</h3>
                      <div className="WD-card-decorations">
                        <div className="WD-decor-ring-1"></div>
                        <div className="WD-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="WD-join-course-banner">
                <h3 className="WD-join-banner-title">JOIN OUR COURSE</h3>
                <div className="WD-join-banner-content">
                  <h4 className="WD-join-course-subtitle"><FontAwesomeIcon icon={faLaptopCode} /> Website Developer course</h4>
                  <p className="WD-join-course-desc">
                    A website developer builds and maintains the visual and functional aspects of websites. They use programming languages like HTML, CSS, and JavaScript to create responsive layouts, interactive elements, and seamless user experiences across various devices and platforms.
                  </p>
                  <button className="WD-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div>
        </section> */}

                {/* Dream Navigator Section */}


                <section className="WD-section WD-influencer-section" id="signin">
                    <div className="WD-influencer-container">
                        <div className="WD-influencer-content">
                            {showForm ? (
                                <div className="WD-form-section WD-in-influencer">
                                    <div className="WD-form-wrapper WD-dark-form">
                                        <button
                                            className="WD-close-form-btn WD-close-dark"
                                            onClick={() => setShowForm(false)}
                                            aria-label="Close form"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>

                                        <form className="WD-signin-form" onSubmit={handleSignSubmit}>
                                            <h3 className="WD-form-dark-title">Register Now</h3>
                                            <div className="WD-form-group">
                                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={`WD-form-input ${errors.email ? 'WD-error' : ''}`}
                                                    placeholder="Enter your email"
                                                />
                                                {errors.email && <span className="WD-error-message">{errors.email}</span>}
                                            </div>

                                            <div className="WD-form-group">
                                                <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                <input
                                                    type="text"
                                                    id="course"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleFormChange}
                                                    className={`WD-form-input ${errors.course ? 'WD-error' : ''}`}
                                                    placeholder="Enter Course Name"
                                                />
                                                {errors.course && <span className="WD-error-message">{errors.course}</span>}
                                            </div>

                                            <div className="WD-form-group WD-checkbox-group">
                                                <input
                                                    type="checkbox"
                                                    id="agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleFormChange}
                                                    className={errors.agreeTerms ? 'WD-error' : ''}
                                                />
                                                <label htmlFor="agreeTerms">
                                                    <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                                                </label>
                                                {errors.agreeTerms && <span className="WD-error-message">{errors.agreeTerms}</span>}
                                            </div>

                                            <button type="submit" className="WD-submit-btn">
                                                <FontAwesomeIcon icon={faRocket} /> Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="WD-influencer-split">
                                    <div className="WD-influencer-left">
                                        <h2 className="WD-influencer-title">
                                            Join <span className="WD-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Codebase
                                            <br />
                                            <div className="WD-influencer-avatars">
                                                <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                <img src={iconEducationBook} alt="Education Book" />
                                                <img src={iconCertificate} alt="Education Certificate" />
                                            </div>
                                            to build apps
                                            <br />
                                            with us
                                            {/* <div className="WD-influencer-search-bar">
                        <span className="WD-search-placeholder"> Search</span>
                        <div className="WD-search-actions">
                          <FontAwesomeIcon icon={faStar} className="WD-voice-icon" />
                          <button className="WD-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div> */}
                                        </h2>
                                    </div>
                                    <div className="WD-influencer-right">
                                        <div
                                            className="WD-see-how-card"
                                            onClick={() => setShowForm(true)}
                                        >
                                            <div className="WD-card-top-icons">
                                                <div className="WD-video-circle">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                </div>
                                                <div className="WD-arrow-circle">
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                </div>
                                            </div>
                                            <h3 className="WD-see-how-text">See how<br />it's done</h3>
                                            <div className="WD-card-decorations">
                                                <div className="WD-decor-ring-1"></div>
                                                <div className="WD-decor-ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* {!showForm && (
              <div className="WD-join-course-banner">
                <h3 className="WD-join-banner-title">JOIN OUR COURSE</h3>
                <div className="WD-join-banner-content">
                  <h4 className="WD-join-course-subtitle"><FontAwesomeIcon icon={faLaptopCode} /> Website Developer course</h4>
                  <p className="WD-join-course-desc">
                    A website developer builds and maintains the visual and functional aspects of websites. They use programming languages like HTML, CSS, and JavaScript to create responsive layouts, interactive elements, and seamless user experiences across various devices and platforms.
                  </p>
                  <button className="WD-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                    </div>
                </section>

                <section className="WD-section WD-dream-navigator-section" id="dream-navigator">
                    <div className="WD-dn-container">

                        {/* Design Resources Title - styled like Dream Navigator header */}
                        <div className="WD-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '2rem', position: 'relative' }}>
                            <div style={{ flex: 1 }}>
                                <h2 className="WD-dn-title">
                                    <div className="WD-dn-title-line1">
                                        Tools, Code & Development
                                        <svg className="WD-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30">
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="WD-dn-title-line2" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        <button
                                            className="WD-split-action-btn"
                                            style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0 }}
                                            onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
                                        >
                                            <FontAwesomeIcon icon={faLock} /> Join course to Access
                                        </button>
                                        <span>Support</span>
                                        <svg className="WD-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30">
                                            <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </h2>
                                <div className="WD-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                    <svg className="WD-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Get access to modern frameworks, production-ready components, and direct support
                                        to accelerate your development workflow.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Tips Toggle Button */}
                            <div className="WD-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                <button
                                    className="WD-quick-tips-btn"
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
                                    className={`WD-quick-tips-panel ${showQuickTips ? 'WD-show' : ''}`}
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

                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>Developer Productivity Tips</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* Tip 1 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Organize Your Project Files</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Keep your codebase properly structured with separate folders for components, styles, and assets to ensure maintainability.</p>
                                            </div>
                                        </div>
                                        {/* Tip 2 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Use Consistent Coding Standards</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Always maintain consistent naming conventions, indentation, and linting rules to ensure a professional and readable codebase.</p>
                                            </div>
                                        </div>
                                        {/* Tip 3 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Leverage IDE Shortcuts</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Use keyboard shortcuts in VS Code, IntelliJ, or other IDEs to speed up your development workflow and efficiency.</p>
                                            </div>
                                        </div>
                                        {/* Tip 4 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Maintain Code Documentation</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Follow documentation standards like JSDoc or maintain a clear README to help other developers understand your logic.</p>
                                            </div>
                                        </div>
                                        {/* Tip 5 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Optimize Performance Before Deploy</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Minify your code and optimize assets like images or fonts to improve page load speed and Lighthouse scores.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Visual Row - Accordion */}
                        <div className="WD-dn-visual-row WD-resources-accordion">
                            {courseResources.slice(0, 6).map((resource, index) => {
                                const isActive = activeAccordionIndex === index;
                                const num = `0${index + 1}`;

                                if (isActive) {
                                    return (
                                        <div key={resource.id} className="WD-accordion-panel WD-accordion-expanded WD-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #e0ebff 0%, #b3caff 100%)' : 'linear-gradient(135deg, #eae0ff 0%, #cbb3ff 100%)' }}>
                                            <div className="WD-dn-sc-header">
                                                <div className="WD-dn-sc-num">{num}</div>
                                                <div className="WD-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <h3 className="WD-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                            <p className="WD-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>

                                            <div className="WD-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                {resource.isRestricted && (
                                                    <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>
                                                )}
                                            </div>

                                            {resource.isRestricted ? (
                                                <button
                                                    className="WD-dn-sc-btn"
                                                    onClick={() => handleJoinCourseForResource(resource.title)}
                                                    style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}
                                                >
                                                    <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                </button>
                                            ) : (
                                                <button
                                                    className={`WD-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'WD-downloaded' : ''}`}
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
                                            className={`WD-accordion-panel WD-accordion-collapsed WD-dn-v-pill ${index % 2 === 0 ? 'WD-dn-bg-dark' : 'WD-dn-bg-light'}`}
                                            onClick={() => setActiveAccordionIndex(index)}
                                        >
                                            <span className="WD-dn-v-text">{resource.title}</span>
                                            <div className="WD-dn-v-num">{num}</div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        {/* Stats Row - horizontal style matching the reference UI */}
                        <div className="WD-dn-stats-row">
                            <div className="WD-dn-stat-items">
                                <div className="WD-dn-stat-item"><strong>20</strong> Total Resources</div>
                                <div className="WD-dn-stat-item"><strong>32,000</strong> Total Downloads</div>
                                <div className="WD-dn-stat-item"><strong>{yourDownloadsCount}</strong> Your Downloads</div>
                            </div>
                            <div className="WD-dn-socials">
                                <span className="WD-dn-social-icon" title="Total Resources"><FontAwesomeIcon icon={faFileAlt} /></span>
                                <span className="WD-dn-social-icon" title="Total Downloads"><FontAwesomeIcon icon={faDownload} /></span>
                                <span className="WD-dn-social-icon" title="Your Downloads"><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </div>

                        <div className="WD-resources-note">
                            <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                            <p>
                                Our course includes <strong>20 comprehensive resources</strong> to support your development journey.
                                First 4 resources are available for free download. <strong>Web Development Cheatsheets</strong> and
                                <strong> Project Portfolio Guide</strong> are exclusive to enrolled students.
                                Join our course to access all 20 premium resources and unlock full learning potential.
                            </p>
                        </div>

                        <hr className="WD-dn-divider" />

                        {/* Bottom Dashboard Row */}
                        <div className="WD-dn-dashboard-row">
                            <div className="WD-dn-dash-left">
                                <h3 className="WD-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access  Certificate included </h3>
                                <button
                                    className="WD-dn-dash-btn"
                                    onClick={handleBenefitsClick}
                                >
                                    Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                </button>
                            </div>
                            <div className="WD-dn-dash-right">
                                <div className="WD-dn-dash-card">
                                    <div className="WD-dn-dash-icon WD-dash-icon-1"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                                    <div className="WD-dn-dash-info">
                                        <span className="WD-dn-dash-label">Successful Graduates</span>
                                        <span className="WD-dn-dash-value">10,000+</span>
                                    </div>
                                </div>
                                <div className="WD-dn-dash-card">
                                    <div className="WD-dn-dash-icon WD-dash-icon-2"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                    <div className="WD-dn-dash-info">
                                        <span className="WD-dn-dash-label">Job Placement Rate</span>
                                        <span className="WD-dn-dash-value">94%</span>
                                    </div>
                                </div>
                                <div className="WD-dn-dash-card">
                                    <div className="WD-dn-dash-icon WD-dash-icon-3"><FontAwesomeIcon icon={faUsers} style={{ color: '#2563eb' }} /></div>
                                    <div className="WD-dn-dash-info">
                                        <span className="WD-dn-dash-label">Industry Partners</span>
                                        <span className="WD-dn-dash-value">50+</span>
                                    </div>
                                </div>
                                <div className="WD-dn-dash-card">
                                    <div className="WD-dn-dash-icon WD-dash-icon-4"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                                    <div className="WD-dn-dash-info">
                                        <span className="WD-dn-dash-label">Community Support</span>
                                        <span className="WD-dn-dash-value">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Influencers Section (Dark UI Style) */}
                {/* <section className="WD-section WD-influencer-section" id="signin">
          <div className="WD-influencer-container">
            <div className="WD-influencer-content">
              {showForm ? (
                <div className="WD-form-section WD-in-influencer">
                  <div className="WD-form-wrapper WD-dark-form">
                    <button
                      className="WD-close-form-btn WD-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="WD-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="WD-form-dark-title">Register Now</h3>
                      <div className="WD-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.email ? 'WD-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="WD-error-message">{errors.email}</span>}
                      </div>

                      <div className="WD-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`WD-form-input ${errors.course ? 'WD-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="WD-error-message">{errors.course}</span>}
                      </div>

                      <div className="WD-form-group WD-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'WD-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          <FontAwesomeIcon icon={faCheckCircle} /> I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="WD-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="WD-submit-btn">
                        <FontAwesomeIcon icon={faRocket} /> Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="WD-influencer-split">
                  <div className="WD-influencer-left">
                    <h2 className="WD-influencer-title">
                      Join <span className="WD-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="WD-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="WD-influencer-search-bar">
                        <span className="WD-search-placeholder">| Search</span>
                        <div className="WD-search-actions">
                          <FontAwesomeIcon icon={faStar} className="WD-voice-icon" />
                          <button className="WD-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="WD-influencer-right">
                    <div
                      className="WD-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="WD-card-top-icons">
                        <div className="WD-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="WD-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="WD-see-how-text">See how<br />it's done</h3>
                      <div className="WD-card-decorations">
                        <div className="WD-decor-ring-1"></div>
                        <div className="WD-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="WD-join-course-banner">
                <h3 className="WD-join-banner-title">JOIN OUR COURSE</h3>
                <div className="WD-join-banner-content">
                  <h4 className="WD-join-course-subtitle"><FontAwesomeIcon icon={faLaptopCode} /> Website Developer course</h4>
                  <p className="WD-join-course-desc">
                    A website developer builds and maintains the visual and functional aspects of websites. They use programming languages like HTML, CSS, and JavaScript to create responsive layouts, interactive elements, and seamless user experiences across various devices and platforms.
                  </p>
                  <button className="WD-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div> */}
                {/* </section> */}

                {/* Assets, Branding & Design Support (Video Layout Style) */}
                {/* <section className="WD-section WD-split-section WD-split-reverse" id="assets">
          <div className="WD-split-container">
            <div className="WD-split-left">
              <div className="WD-video-visual">
                <svg className="WD-floating-bg-star WD-star-bg-3" viewBox="0 0 24 24" width="50" height="50">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
                <div className="WD-video-frame">
                  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Website Developer" />
                  <div className="WD-video-overlay-text">
                    premium<br />assets
                  </div>
                </div>

                <div className="WD-float-tooltip">
                  <div className="WD-tt-header">
                    <span className="WD-tt-title">Context meaning</span>
                    <span className="WD-tt-flag">👑</span>
                  </div>
                  <div className="WD-tt-subtitle">"Direct support from seniors"</div>
                  <div className="WD-tt-footer">
                    <span className="WD-tt-bulb">💡</span> It means guiding and reviewing projects.
                  </div>
                </div>
              </div>
            </div>

            <div className="WD-split-right">
              <h2 className="WD-split-title">
                Assets, Branding & Design Support
                <svg className="WD-sparkle-icon-split" viewBox="0 0 24 24" width="32" height="32">
                  <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                </svg>
              </h2>

              <div className="WD-split-points" style={{ margin: '2rem 0' }}>
                <div className="WD-split-point" style={{ alignItems: 'center' }}>
                  <div className="WD-split-icon-red">
                    <FontAwesomeIcon icon={faTimes} style={{ color: '#ff4d6d', fontSize: '1.2rem' }} />
                  </div>
                  <div className="WD-split-point-text">
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>No hidden fees or limited access to standard templates.</h4>
                  </div>
                </div>
                <div className="WD-split-point" style={{ alignItems: 'center' }}>
                  <div className="WD-split-icon-green">
                    <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#00c48c', fontSize: '1.2rem' }} />
                  </div>
                  <div className="WD-split-point-text">
                    <h4 style={{ margin: 0, fontSize: '1rem' }}>Includes lifetime access to premium assets + 6 months of design support.</h4>
                  </div>
                </div>
              </div>

              <p className="WD-split-desc" style={{ fontSize: '0.95rem' }}>
                Access our exclusive library of premium design assets, complete branding kits,
                and professional design support. Get 5000+ vector illustrations, 300+ premium fonts,
                brand identity templates, and direct support from senior designers.
              </p>

              <button
                className="WD-split-action-btn"
                onClick={() => showLockedSectionToast("Assets, Branding & Design Support")}
              >
                <FontAwesomeIcon icon={faLock} /> Join course to Access
              </button>
            </div>
          </div>
        </section> */}

                {/* Image Gallery Section */}
                <section
                    className="WD-section WD-new-gallery-section"
                    id="gallery"
                >
                    <div className="WD-Gallery-container-new">
                        <div className="WD-Gallery-header-new">
                            <div className="WD-Gallery-title-wrapper-new">
                                <span className="WD-Gallery-title-line-new"></span>
                                <h2 className="WD-Gallery-title-new">Learning Environment</h2>
                            </div>
                            {/* <p className="WD-Gallery-view-all-new">Explore our dynamic learning environment, where creativity meets collaboration. From hands-on projects to expert guidance, we provide everything you need to excel in your graphic design journey.</p> */}
                        </div>

                        <div className="WD-Gallery-grid-new">
                            {/* Left Column (1 Large Card) */}
                            <div
                                className="WD-Gallery-large-card-new"
                                onClick={() => handleImageClick(imagesWithDescriptions[0])}
                            >
                                <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="WD-Gallery-card-bg-new" />
                                <div className="WD-Gallery-card-overlay-new"></div>
                                <div className="WD-Gallery-card-content-new">
                                    <span className="WD-Gallery-badge-new">Environment</span>
                                    <h3 className="WD-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                    <div className="WD-Gallery-meta-new">
                                        <span className="WD-Gallery-meta-item-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                        <span className="WD-Gallery-meta-item-new"><FontAwesomeIcon icon={faComments} /> No Comments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Column (3 Small Cards) */}
                            <div className="WD-Gallery-middle-col-new">
                                {[1, 2, 3].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="WD-Gallery-small-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <div className="WD-Gallery-small-image-new">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                            <div className="WD-Gallery-small-content-new">
                                                <span className="WD-Gallery-badge-text-new">Environment</span>
                                                <h4 className="WD-Gallery-small-title-new">{item.title}</h4>
                                                <span className="WD-Gallery-small-date-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column (2 Medium Cards) */}
                            <div className="WD-Gallery-right-col-new">
                                {[4, 5].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="WD-Gallery-medium-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <img src={item.url} alt={item.title} className="WD-Gallery-card-bg-new" />
                                            <div className="WD-Gallery-card-overlay-new"></div>
                                            <div className="WD-Gallery-card-content-new">
                                                <h3 className="WD-Gallery-medium-title-new">{item.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Existing Note Logic */}
                        {activeDescription && (
                            <div className="WD-gallery-description" style={{ marginTop: '2rem' }}>
                                <div className="WD-description-content">
                                    <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                    <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>


                {/* Previous Resources Section removed as it's now integrated into the Dream Navigator section */}

                {/* Graphic Designer Benefits Section */}
                <section
                    className="WD-section WD-new-benefits-section"
                    id="benefits"
                >
                    {/* Background decorative SVG elements */}
                    <div className="WD-benefits-bg-shapes">
                        <svg className="WD-bg-shape WD-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#cfcaff" strokeWidth="2" />
                        </svg>
                        <svg className="WD-bg-shape WD-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#cfcaff" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="WD-benefits-container-new">
                        {/* Keeping the original title and subtitle */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                            <h2 className="WD-section-title">
                                <svg className="WD-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="black" />
                                </svg>
                                Website Developer Benefits
                                <svg className="WD-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="black" />
                                </svg>
                            </h2>
                            <p className="WD-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                When you join our comprehensive website development course, you unlock exclusive benefits
                                that accelerate your career growth and engineering mastery.
                            </p>
                        </div>

                        <div className="WD-benefits-image-grid-new">
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
                                        className={`WD-benefit-img-card-new WD-benefit-img-card-${index}-new`}
                                    >
                                        <img src={benefitImages[index]} alt={benefit.title} className="WD-benefit-card-bg-new" />
                                        <div className="WD-benefit-card-overlay-new"></div>
                                        <div className="WD-benefit-card-content-new">
                                            <div className="WD-benefit-card-header-new">
                                                <span className="WD-benefit-card-icon-new">{benefit.icon}</span>
                                                <h3 className="WD-benefit-card-title-new">{benefit.title}</h3>
                                            </div>
                                            <p className="WD-benefit-card-desc-new">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Restyled to Dream Team UI */}
                <section
                    className="WD-section WD-dt-section"
                    id="feedback"
                >
                    <div className="WD-dt-container">
                        <div className="WD-dt-header">
                            <h2 className="WD-dt-title">
                                <span>Web Developers</span> <span>Testimonials<svg className="WD-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#7ad690" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                            </h2>

                            <p className="WD-dt-subtitle">
                                Hear what our students have to say about their learning experience
                            </p>
                        </div>

                        <div className="WD-dt-cards-wrapper">
                            <div className="WD-dt-cards">
                                {[...testimonials, ...testimonials].map((testimonial, index) => {
                                    const cardClassIndex = (index % 5) + 1;
                                    const imgMap = {
                                        1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                        5: girl3, 6: boy3, 7: girl4, 8: boy4
                                    };
                                    const photoUrl = imgMap[testimonial.id] || boy1;


                                    return (
                                        <div key={index} className={`WD-dt-card WD-dt-card-${cardClassIndex}`}>
                                            <div className="WD-dt-card-img-wrapper">
                                                <img src={photoUrl} alt={testimonial.author} className="WD-dt-card-img" />
                                            </div>
                                            <div className={`WD-dt-card-content WD-dt-content-bg-${cardClassIndex}`}>
                                                <h4 className="WD-dt-card-name">{testimonial.author}</h4>
                                                <p className="WD-dt-card-text">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* <div className="WD-dt-dots">
              <span className="WD-dt-dot WD-dt-dot-active"></span>
              <span className="WD-dt-dot"></span>
              <span className="WD-dt-dot"></span>
            </div> */}
                    </div>
                </section>
                <BackToTop />
                <Footer />
            </div>
        </>
    );
}

export default WebsiteDeveloperInternPage;
