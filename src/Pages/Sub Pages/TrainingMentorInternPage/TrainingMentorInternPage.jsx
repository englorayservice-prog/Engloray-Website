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
import './TrainingMentorInternPage.css';
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
import pedaImg from '../../../assets/peda.jpeg';
import { submitInternship } from "../../Sub Pages/HandleSubmit/InternshipSubmit";
import design1Img from '../../../assets/strategy.jpeg';
import design2Img from '../../../assets/design2.jpeg';
import design3Img from '../../../assets/design3.jpeg';
import design4Img from '../../../assets/design4.jpeg';
import design5Img from '../../../assets/design5.jpeg';
import design6Img from '../../../assets/design6.jpeg';

import train1Img from '../../../assets/train1.jpeg';
import certImg from '../../../assets/cert.jpeg';
import train3Img from '../../../assets/train3.jpeg';
import train4Img from '../../../assets/train4s.jpeg';
import train5Img from '../../../assets/train5.jpeg';
import train6Img from '../../../assets/train6.jpeg';

import pathOne from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Design Tools & Technology.pdf';
import pathTwo from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Graphic Designer Benefits.pdf';
import pathFive from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Learning, Skill Development & Growth.pdf';
import pathSix from '../../../assets/resources file/resources file/TECH/GRAPHICS DESIGNERS/Productivity, AI & Workflow Support.pdf';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import Navbar from '../../../Components/Navbar/Navbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { Helmet } from 'react-helmet';

const TrainingMentorInternPage = () => {
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
            title: "Pedagogy & Classroom Mgmt",
            description: [
                "Introduction to Educational Theory",
                "Principles of Effective Teaching",
                "Classroom Management Strategies",
                "Student Engagement Techniques",
                "Creating Inclusive Environments",
                "Understanding Learning Styles"
            ],
            duration: "Foundations",
            bgImage: pedaImg,
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />
        },
        {
            id: 2,
            title: "Curriculum & Lesson Planning",
            description: [
                "Designing Modern Curricula",
                "Lesson Plan Structure & Goals",
                "Developing Educational Content",
                "Assessment Design & Strategy",
                "Integrating Technology in Class",
                "Mapping Learning Outcomes"
            ],
            duration: "Instructional Design",
            bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faBook} />
        },
        {
            id: 3,
            title: "Student Mentorship & Guidance",
            description: [
                "One-on-One Mentoring Skills",
                "Providing Constructive Feedback",
                "Career Guidance for Students",
                "Handling Challenging Students",
                "Motivational Speaking for Educators",
                "Building Student Rapport"
            ],
            duration: "Mentorship",
            bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faUsers} />
        },
        {
            id: 4,
            title: "Educational Leadership",
            description: [
                "Training the Trainer Program",
                "Educational Program Evaluation",
                "Strategic Planning in Education",
                "Collaboration with Faculty",
                "Digital Learning Platforms",
                "Final Mentorship Presentation"
            ],
            duration: "Leadership",
            bgImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
            icon: <FontAwesomeIcon icon={faUserTie} />
        }
    ];

    const imagesWithDescriptions = [
        {
            url: design1Img,
            title: "Modern Mentoring Hub",
            description: "Our dedicated classroom for teaching methods, student engagement training, and interactive learning sessions.",
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />
        },
        {
            title: "Collaborative Teaching Lab",
            description: "Dive into collaborative brainstorming sessions where new educational strategies and curriculum ideas are developed.",
            icon: <FontAwesomeIcon icon={faUsers} />,
            url: design2Img,
        },
        {
            title: "Instructional Design Studio",
            description: "A professional mentor training space where students build lesson plans, course content, and assessment frameworks.",
            icon: <FontAwesomeIcon icon={faBook} />,
            url: design3Img,
        },
        {
            title: "Student Assessment Session",
            description: "Interns present their curated teaching portfolios to senior educators, receiving professional feedback to sharpen their mentoring skills.",
            icon: <FontAwesomeIcon icon={faRocket} />,
            url: design4Img,
        },
        {
            title: "Educational Research Lab",
            description: "Master the fundamental rules of student psychology, learning curves, and visual aids to construct balanced educational experiences.",
            icon: <FontAwesomeIcon icon={faLightbulb} />,
            url: design5Img,
        },
        {
            title: "Interactive Mentoring Lab",
            description: "Transform theoretical lessons into interactive classroom flows, testing student engagement and validating training concepts.",
            icon: <FontAwesomeIcon icon={faLaptopCode} />,
            url: design6Img,
        }
    ];

    // Course resources with local file paths
    const courseResources = [
        {
            id: 1,
            title: "Mentorship Tools & Pedagogy",
            description: "Detailed overview of the teaching tools, educational platforms, and mentorship methodologies used during the training internship. This phase introduces industry-standard software for digital learning, student management platforms, and modern instructional design frameworks, along with collaborative mentoring practices used in professional academic environments. Interns will learn how to apply essential techniques to create high-quality educational content and engaging student experiences.",
            type: "pdf",
            size: "2.5 MB",
            downloads: 1450,
            icon: <FontAwesomeIcon icon={faTools} />,
            isRestricted: false,
            fileName: "Mentorship Tools & Pedagogy.pdf",
            localPath: pathOne
        },
        {
            id: 2,
            title: "Training Mentor Intern Benefits",
            description: "Comprehensive guide to educational psychology, student motivation, and practical mentoring applications. This section explores how to influence student success and build a sustainable educational environment across different age groups. Interns will learn to create balanced lesson plans, apply feedback effectively, combine digital and traditional teaching methods, and use pedagogical principles to design engaging training modules for students.",
            type: "pdf",
            size: "3.4 MB",
            downloads: 1120,
            icon: <FontAwesomeIcon icon={faStar} />,
            isRestricted: false,
            fileName: "Training Mentor Intern Benefits.pdf",
            localPath: pathTwo
        },
        {
            id: 3,
            title: "Curriculum Design Reference",
            description: "Essential curriculum design rules, content structuring suggestions, and best practices for creating clear, effective, and visually balanced educational materials. This section helps interns understand how to plan course flows, manage student expectations, and maintain consistency across digital and print learning layouts. Interns will explore learning objects, assessment techniques, and student engagement strategies to ensure professional instruction in classroom environments.",
            type: "pdf",
            size: "1.9 MB",
            downloads: 980,
            icon: <FontAwesomeIcon icon={faBook} />,
            isRestricted: false,
            fileName: "Curriculum Design Reference.pdf",
            localPath: pathOne
        },
        {
            id: 4,
            title: "Student Engagement Pack",
            description: "Collection of 50+ professionally designed templates for lesson plans, student feedback forms, progress reports, and interactive classroom activities. These templates help interns quickly understand classroom structure, student flow, and educational balance used in professional training environments. Interns can customize goals, feedback criteria, and learning paths to create unique student experiences while learning efficient mentoring workflows used in academic institutions.",
            type: "zip",
            size: "28 MB",
            downloads: 650,
            icon: <FontAwesomeIcon icon={faUsers} />,
            isRestricted: false,
            fileName: "Student Engagement Pack.zip",
            localPath: pathOne
        },
        {
            id: 5,
            title: "Learning & Skill Development Growth",
            description: "Mentorship and skill development opportunities designed to help interns improve their educational leadership and professional confidence. This section focuses on building instructional thinking, student problem-solving skills, and practical experience through guided teaching tasks and real-world projects. Interns gradually strengthen their ability to handle classrooms, understand parent/student expectations, and develop the ability to produce high-quality training materials for students.",
            type: "pdf",
            size: "1.4 MB",
            downloads: 540,
            icon: <FontAwesomeIcon icon={faGraduationCap} />,
            isRestricted: true,
            fileName: "Learning & Skill Development Growth.pdf",
            localPath: pathFive
        },
        {
            id: 6,
            title: "Mentorship Excellence & Support",
            description: "Step-by-step guide to building an impressive educational portfolio or career in academic leadership. This section explains how interns can organize their mentoring projects, present instructional concepts clearly, and highlight complex educational problem-solving skills. Interns learn how to structure teaching case studies, showcase student success stories, write short pedagogical descriptions, and build a professional mentoring profile suitable for high-level interviews and career growth.",
            type: "pdf",
            size: "2.6 MB",
            downloads: 430,
            icon: <FontAwesomeIcon icon={faUserTie} />,
            isRestricted: true,
            fileName: "Mentorship Excellence & Support.pdf",
            localPath: pathSix
        },
    ];

    const testimonials = [
        {
            id: 1,
            rating: 5,
            text: "The pedagogical techniques I learned here helped me become a more effective and engaging educator.",
            author: "Vignesh R"
        },
        {
            id: 2,
            rating: 4,
            text: "Gained immense clarity on student psychology and classroom management. Truly inspiring mentorship.",
            author: "Sneha G"
        },
        {
            id: 3,
            rating: 5,
            text: "From lesson planning to student guidance, this internship provided a complete roadmap for my teaching career.",
            author: "Akash B"
        },
        {
            id: 4,
            rating: 4,
            text: "The 'Train the Trainer' program was exceptional. I feel equipped to handle any educational challenge.",
            author: "Deepika S"
        },
        {
            id: 5,
            rating: 5,
            text: "Excellent resources and hands-on experience in instructional design. I've grown so much as a mentor.",
            author: "Rajesh K"
        },
        {
            id: 6,
            rating: 5,
            text: "The mentorship sessions were the highlight. Learning from experienced educators was invaluable.",
            author: "Meera V"
        },
        {
            id: 7,
            rating: 4,
            text: "Great structure and flow. I really appreciated the focus on interactive learning and digital tools.",
            author: "Rahul J"
        },
        {
            id: 8,
            rating: 5,
            text: "Transformed my vision of education. I'm now leading a department at a prestigious institution!",
            author: "Shalini P"
        }
    ];


    const benefits = [
        {
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            title: "Career Opportunities",
            description: "Access to 1000+ educational leadership and teaching roles with our partner institutions",
            bgImage: train1Img
        },
        {
            icon: <FontAwesomeIcon icon={faCertificate} />,
            title: "Certification",
            description: "Professional Mentorship certification recognized globally in the academic sector",
            bgImage: certImg
        },
        {
            icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
            title: "Master Mentorship",
            description: "1-on-1 sessions with senior educators and instructional design experts",
            bgImage: train3Img
        },
        {
            icon: <FontAwesomeIcon icon={faTools} />,
            title: "Teaching Software",
            description: "Free access to premium classroom management and LMS tools during the course",
            bgImage: train4Img
        },
        {
            icon: <FontAwesomeIcon icon={faNetworkWired} />,
            title: "Educator Network",
            description: "Join our global community of 10,000+ mentors, teachers, and trainers",
            bgImage: train5Img
        },
        {
            icon: <FontAwesomeIcon icon={faMoneyBillWave} />,
            title: "Impact Growth",
            description: "Learn how to consistently improve student outcomes and scale your educational impact",
            bgImage: train6Img
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
        showLockedSectionToast("Training Mentor Benefits");
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <FontAwesomeIcon
                    key={i}
                    icon={faStar}
                    className={i <= rating ? 'TM-filled' : ''}
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
                <div className="TM-toast-message show">
                    <div className="TM-toast-content">
                        <span className="TM-toast-icon"><FontAwesomeIcon icon={faLock} /></span>
                        <span className="TM-toast-text">{toastMessage}</span>
                        <button
                            className="TM-toast-close"
                            onClick={() => setShowToast(false)}
                        >
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                </div>
            )}

            <div className="TM-content" ref={containerRef}>
                {/* <TopNavBar/> */}
                {/* <Navbar/> */}

                {/* Hero Section */}
                <section
                    className="TM-section TM-hero-section-new"
                    id="home"
                >
                    <div className="TM-hero-top-row">
                        <div className="TM-hero-badges">
                            <span className="TM-hero-badge"><FontAwesomeIcon icon={faCheckCircle} /> 2023 BEST MENTORSHIP</span>
                            <span className="TM-hero-badge"><FontAwesomeIcon icon={faLaptopCode} /> WORLD CLASS TRAINING</span>
                        </div>
                        <div className="TM-hero-top-line-container">
                            <hr className="TM-hero-top-line" />
                            <svg className="TM-sparkle-icon" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>

                    <div className="TM-hero-typography">
                        <div className="TM-hero-line TM-hero-line-1">
                            <div className="TM-hero-title-wrapper">
                                <svg className="TM-sparkle-icon-large" viewBox="0 0 24 24" width="40" height="40">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                                <h1 className="TM-hero-title-word">Where Teams</h1>
                            </div>
                            <p className="TM-hero-desc-small">
                                Creative developer studio builds modern digital experiences for web apps brands and startups through design code innovation collaboration and scalable technology solutions for global users.
                            </p>
                        </div>

                        <div className="TM-hero-line TM-hero-line-2">
                            <div className="TM-hero-image-pill TM-hero-image-1">
                                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Training Mentor" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                            </div>
                            <h1 className="TM-hero-title-word TM-text-purple">Teach & Mentor</h1>
                            <svg className="TM-sparkle-icon-small" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                        </div>

                        <div className="TM-hero-line TM-hero-line-3">
                            <svg className="TM-sparkle-icon-small" viewBox="0 0 24 24" width="25" height="25" >
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <h1 className="TM-hero-title-word" >Together</h1>
                            <div className="TM-hero-image-pill TM-hero-image-2">
                                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Training Mentor Studio" style={{ objectFit: 'cover', objectPosition: 'center' }} />
                                <div className="TM-play-btn">
                                    <div className="TM-play-icon-triangle"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="TM-hero-bottom-row">
                        <div className="TM-hero-bottom-left">
                            <p className="TM-hero-desc-large">
                                Creative Developer Studio empowers teams to transform ideas into powerful digital products. We combine creativity, engineering expertise, and strategic thinking to build responsive websites, intelligent platforms, and engaging user experiences that support innovation, improve productivity, and help businesses expand confidently in today’s fast-evolving online ecosystem.
                            </p>
                            <div className="TM-hero-actions">
                                <button className="TM-btn-primary" onClick={() => scrollToSection('course')}>Get Started</button>
                                <button className="TM-btn-icon" onClick={() => scrollToSection('course')}><FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} /></button>
                            </div>
                        </div>

                        <div className="TM-hero-bottom-right">
                            <div className="TM-rotating-stamp">
                                <svg viewBox="0 0 100 100" className="TM-stamp-text-svg">
                                    <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                    <text>
                                        <textPath href="#circlePath" startOffset="0%">
                                            C R E A T I V E • D E V E L O P E R •
                                        </textPath>
                                    </text>
                                </svg>
                                <svg className="TM-stamp-star" viewBox="0 0 24 24" width="30" height="30">
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Course Content Section */}
                <section
                    className="TM-section TM-course-horizontal-section"
                    id="course"
                >
                    <div className="TM-course-background-top"></div>
                    <div className="TM-course-background-bottom"></div>

                    <div className="TM-course-horizontal-container" style={{ zIndex: 2, position: 'relative' }}>
                        <div className="TM-course-header-row">
                            <div className="TM-course-header-left">
                                <h2 className="TM-section-title" style={{ color: '#2d2d2d' }}>INTERNSHIP</h2>
                                <h2 className="TM-section-title">
                                    <span className="TM-text-purple">TRAINING</span> <span style={{ color: '#2d2d2d' }}>PROGRAM</span>
                                </h2>
                            </div>
                            <svg className="TM-sparkle-icon-header" viewBox="0 0 24 24" width="20" height="20">
                                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                            </svg>
                            <div className="TM-course-header-right">
                                <a href="#course" className="TM-view-all-link">View All</a>
                            </div>
                        </div>

                        <div className="TM-course-carousel-container">
                            <div className="TM-carousel-wrapper">
                                <div
                                    className="TM-course-cards-wrapper"
                                    ref={cardsWrapperRef}
                                    style={{
                                        '--active-index': activeCourseIndex,
                                        transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                                    }}
                                    onTransitionEnd={handleTransitionEnd}
                                >
                                    {infiniteContent.map((item) => (
                                        <div key={item.uniqueId} className="TM-course-new-card">
                                            <div className="TM-course-card-badges">
                                                <span className="TM-badge-pill">Phase {item.id}</span>
                                                <span className="TM-badge-pill TM-badge-dark">{item.duration}</span>
                                            </div>
                                            <h3 className="TM-course-card-title">{item.title}</h3>

                                            {/* Checklist items in 2-column grid */}
                                            <div className="TM-course-card-checklist">
                                                {Array.isArray(item.description) ? item.description.map((point, i) => (
                                                    <div key={i} className="TM-checklist-item">
                                                        <FontAwesomeIcon icon={faCheck} className="TM-checklist-icon" />
                                                        <span>{point}</span>
                                                    </div>
                                                )) : (
                                                    <p className="TM-course-card-desc">{item.description}</p>
                                                )}
                                            </div>

                                            <div className="TM-course-card-image">
                                                <img src={item.bgImage} alt={item.title} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="TM-carousel-arrows">
                                <button
                                    className="TM-carousel-arrow TM-carousel-arrow-left"
                                    onClick={handlePrevClick}
                                    aria-label="Previous module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(180deg)' }} />
                                </button>

                                <button
                                    className="TM-carousel-arrow TM-carousel-arrow-right"
                                    onClick={handleNextClick}
                                    aria-label="Next module"
                                >
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </button>
                            </div>
                        </div>

                        <div className="TM-course-dots">
                            {courseContent.map((_, index) => {
                                const isActive = (activeCourseIndex % courseContent.length) === index;
                                return (
                                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                                        <button
                                            className={`TM-course-dot ${isActive ? 'TM-active-dot' : ''}`}
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

                {/* <section className="TM-section TM-influencer-section" id="signin">
          <div className="TM-influencer-container">
            <div className="TM-influencer-content">
              {showForm ? (
                <div className="TM-form-section TM-in-influencer">
                  <div className="TM-form-wrapper TM-dark-form">
                    <button
                      className="TM-close-form-btn TM-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="TM-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="TM-form-dark-title">Register Now</h3>
                      <div className="TM-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`TM-form-input ${errors.email ? 'TM-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="TM-error-message">{errors.email}</span>}
                      </div>

                      <div className="TM-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`TM-form-input ${errors.course ? 'TM-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="TM-error-message">{errors.course}</span>}
                      </div>

                      <div className="TM-form-group TM-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'TM-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="TM-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="TM-submit-btn">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="TM-influencer-split">
                  <div className="TM-influencer-left">
                    <h2 className="TM-influencer-title">
                      Join <span className="TM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="TM-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="TM-influencer-search-bar">
                        <span className="TM-search-placeholder">| Search</span>
                        <div className="TM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="TM-voice-icon" />
                          <button className="TM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="TM-influencer-right">
                    <div
                      className="TM-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="TM-card-top-icons">
                        <div className="TM-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="TM-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="TM-see-how-text">See how<br />it's done</h3>
                      <div className="TM-card-decorations">
                        <div className="TM-decor-ring-1"></div>
                        <div className="TM-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="TM-join-course-banner">
                <h3 className="TM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="TM-join-banner-content">
                  <h4 className="TM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Training Mentor course</h4>
                  <p className="TM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="TM-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div>
        </section> */}

                {/* Dream Navigator Section */}


                <section className="TM-section TM-influencer-section" id="signin">
                    <div className="TM-influencer-container">
                        <div className="TM-influencer-content">
                            {showForm ? (
                                <div className="TM-form-section TM-in-influencer">
                                    <div className="TM-form-wrapper TM-dark-form">
                                        <button
                                            className="TM-close-form-btn TM-close-dark"
                                            onClick={() => setShowForm(false)}
                                            aria-label="Close form"
                                        >
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>

                                        <form className="TM-signin-form" onSubmit={handleSignSubmit}>
                                            <h3 className="TM-form-dark-title">Register Now</h3>
                                            <div className="TM-form-group">
                                                <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleFormChange}
                                                    className={`TM-form-input ${errors.email ? 'TM-error' : ''}`}
                                                    placeholder="Enter your email"
                                                />
                                                {errors.email && <span className="TM-error-message">{errors.email}</span>}
                                            </div>

                                            <div className="TM-form-group">
                                                <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                                                <input
                                                    type="text"
                                                    id="course"
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleFormChange}
                                                    className={`TM-form-input ${errors.course ? 'TM-error' : ''}`}
                                                    placeholder="Enter Course Name"
                                                />
                                                {errors.course && <span className="TM-error-message">{errors.course}</span>}
                                            </div>

                                            <div className="TM-form-group TM-checkbox-group">
                                                <input
                                                    type="checkbox"
                                                    id="agreeTerms"
                                                    name="agreeTerms"
                                                    checked={formData.agreeTerms}
                                                    onChange={handleFormChange}
                                                    className={errors.agreeTerms ? 'TM-error' : ''}
                                                />
                                                <label htmlFor="agreeTerms">
                                                    I agree to the Terms of Service and Privacy Policy
                                                </label>
                                                {errors.agreeTerms && <span className="TM-error-message">{errors.agreeTerms}</span>}
                                            </div>

                                            <button type="submit" className="TM-submit-btn">
                                                Register
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="TM-influencer-split">
                                    <div className="TM-influencer-left">
                                        <h2 className="TM-influencer-title">
                                            Join <span className="TM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                                            <br />
                                            <div className="TM-influencer-avatars">
                                                <img src={iconGraduationCap} alt="Education Graduation Cap" />
                                                <img src={iconEducationBook} alt="Education Book" />
                                                <img src={iconCertificate} alt="Education Certificate" />
                                            </div>
                                            to collaborate
                                            <br />
                                            with us
                                            {/* <div className="TM-influencer-search-bar">
                        <span className="TM-search-placeholder"> Search</span>
                        <div className="TM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="TM-voice-icon" />
                          <button className="TM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div> */}
                                        </h2>
                                    </div>
                                    <div className="TM-influencer-right">
                                        <div
                                            className="TM-see-how-card"
                                            onClick={() => setShowForm(true)}
                                        >
                                            <div className="TM-card-top-icons">
                                                <div className="TM-video-circle">
                                                    <FontAwesomeIcon icon={faVideo} />
                                                </div>
                                                <div className="TM-arrow-circle">
                                                    <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                                                </div>
                                            </div>
                                            <h3 className="TM-see-how-text">See how<br />it's done</h3>
                                            <div className="TM-card-decorations">
                                                <div className="TM-decor-ring-1"></div>
                                                <div className="TM-decor-ring-2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>


                        {/* {!showForm && (
              <div className="TM-join-course-banner">
                <h3 className="TM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="TM-join-banner-content">
                  <h4 className="TM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Training Mentor course</h4>
                  <p className="TM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="TM-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                    </div>
                </section>

                <section className="TM-section TM-dream-navigator-section" id="dream-navigator">
                    <div className="TM-dn-container">

                        {/* Design Resources Title - styled like Dream Navigator header */}
                        <div className="TM-dn-resources-title-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '0', marginBottom: '0.5rem', position: 'relative' }}>
                            <div style={{ flex: 1 }}>
                                <h2 className="TM-dn-title">
                                    <div className="TM-dn-title-line1">
                                        Educational Leadership &
                                        <svg className="TM-dn-icon-sparkle" viewBox="0 0 24 24" width="30" height="30" style={{ marginLeft: '10px' }}>
                                            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                    <div className="TM-dn-title-line2" style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem', flexWrap: 'nowrap' }}>
                                        <button
                                            className="TM-split-action-btn"
                                            style={{ padding: '1.7rem 1.5rem', fontSize: '1rem', margin: 0, flexShrink: 0 }}
                                            onClick={() => showLockedSectionToast("Educational Leadership & Pedagogical Support")}
                                        >
                                            <FontAwesomeIcon icon={faLock} /> Join course to Access
                                        </button>
                                        <span style={{ whiteSpace: 'nowrap' }}>Pedagogical Support</span>
                                        <svg className="TM-dn-icon-sparkle-outline" viewBox="0 0 24 24" width="30" height="30" style={{ flexShrink: 0 }}>
                                            <path d="M12 2L14.26 9.74L22 12L14.26 14.26L12 22L9.74 14.26L2 12L9.74 9.74L12 2ZM12 6.86L10.85 10.85L6.86 12L10.85 13.15L12 17.14L13.15 13.15L17.14 12L13.15 10.85L12 6.86Z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </h2>
                                <div className="TM-dn-header-right" style={{ flex: 'unset', padding: '1.2rem 0 0 0' }}>
                                    <svg className="TM-dn-small-sparkies" viewBox="0 0 24 24" width="16" height="16">
                                        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
                                    </svg>
                                    <p>
                                        Download valuable instructional templates, lesson planning guides, and student engagement assets
                                        to enhance your teaching process.
                                    </p>
                                </div>
                            </div>

                            {/* Quick Tips Toggle Button */}
                            <div className="TM-quick-tips-container" ref={quickTipsRef} style={{ position: 'relative' }}>
                                <button
                                    className="TM-quick-tips-btn"
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
                                    className={`TM-quick-tips-panel ${showQuickTips ? 'TM-show' : ''}`}
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

                                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1.2rem', fontWeight: 'bold' }}>Mentorship Excellence Tips</h3>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {/* Tip 1 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Empathy is the Foundation</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Understand each student's unique learning curve and challenges to provide truly personalized guidance.</p>
                                            </div>
                                        </div>
                                        {/* Tip 2 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Structured Lesson Plans</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Always have a clear roadmap for every session to ensure learning objectives are met efficiently.</p>
                                            </div>
                                        </div>
                                        {/* Tip 3 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Use Interactive Tech</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Leverage digital tools like Kahoot or Moodle to keep students engaged and facilitate active learning.</p>
                                            </div>
                                        </div>
                                        {/* Tip 4 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Feedback Must Be Actionable</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Avoid vague comments. Tell students exactly what was done well and specifically how they can improve.</p>
                                            </div>
                                        </div>
                                        {/* Tip 5 */}
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#4caf50', marginTop: '4px', fontSize: '1rem' }} />
                                            <div>
                                                <h4 style={{ color: 'white', fontSize: '0.95rem', marginBottom: '4px', fontWeight: '600' }}>Master Classroom Timing</h4>
                                                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Balance lecture time with hands-on practice to maintain student focus and maximize retention.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Visual Row - Accordion */}
                        <div className="TM-dn-visual-row TM-resources-accordion">
                            {courseResources.slice(0, 6).map((resource, index) => {
                                const isActive = activeAccordionIndex === index;
                                const num = `0${index + 1}`;

                                if (isActive) {
                                    return (
                                        <div key={resource.id} className="TM-accordion-panel TM-accordion-expanded TM-dn-spark-card" style={{ background: index % 2 === 0 ? 'linear-gradient(135deg, #ccfbf1 0%, #5eead4 100%)' : 'linear-gradient(135deg, #f0fdfa 0%, #99f6e4 100%)' }}>
                                            <div className="TM-dn-sc-header">
                                                <div className="TM-dn-sc-num">{num}</div>
                                                <div className="TM-dn-sc-avatar" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1a1a2e', fontSize: '1.2rem' }}>
                                                    {resource.icon}
                                                </div>
                                            </div>
                                            <h3 className="TM-dn-sc-title" style={{ fontSize: '1.5rem', marginBottom: '0.9rem', color: '#1a1a2e', fontWeight: 'bold' }}>{resource.title}</h3>
                                            <p className="TM-dn-sc-desc" style={{ marginBottom: '1rem', color: '#1a1a2e', opacity: 0.8, fontSize: '0.9rem' }}>{resource.description}</p>

                                            <div className="TM-resource-meta" style={{ marginBottom: '1.5rem', color: '#1a1a2e', opacity: 0.9, fontSize: '0.85rem', display: 'flex', gap: '1.5rem', fontWeight: 'bold', marginTop: '2rem' }}>
                                                <span>{resource.type.toUpperCase()} • {resource.size}</span>
                                                <span><FontAwesomeIcon icon={faDownload} /> {resource.downloads.toLocaleString()} downloads</span>
                                                {resource.isRestricted && (
                                                    <span style={{ color: '#d32f2f' }}><FontAwesomeIcon icon={faLock} /> Exclusive</span>
                                                )}
                                            </div>

                                            {resource.isRestricted ? (
                                                <button
                                                    className="TM-dn-sc-btn"
                                                    onClick={() => handleJoinCourseForResource(resource.title)}
                                                    style={{ marginTop: 'auto', background: '#1a1a2e', color: 'white' }}
                                                >
                                                    <FontAwesomeIcon icon={faLock} /> Join Course to Download <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(45deg)', marginLeft: '5px' }} />
                                                </button>
                                            ) : (
                                                <button
                                                    className={`TM-dn-sc-btn ${downloadedResources.includes(resource.id) ? 'TM-downloaded' : ''}`}
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
                                            className={`TM-accordion-panel TM-accordion-collapsed TM-dn-v-pill ${index % 2 === 0 ? 'TM-dn-bg-dark' : 'TM-dn-bg-light'}`}
                                            onClick={() => setActiveAccordionIndex(index)}
                                        >
                                            <span className="TM-dn-v-text">{resource.title}</span>
                                            <div className="TM-dn-v-num">{num}</div>
                                        </div>
                                    );
                                }
                            })}
                        </div>

                        {/* Stats Row - horizontal style matching the reference UI */}
                        <div className="TM-dn-stats-row">
                            <div className="TM-dn-stat-items">
                                <div className="TM-dn-stat-item"><strong>20</strong> Total Resources</div>
                                <div className="TM-dn-stat-item"><strong>32,000</strong> Total Downloads</div>
                                <div className="TM-dn-stat-item"><strong>{yourDownloadsCount}</strong> Your Downloads</div>
                            </div>
                            <div className="TM-dn-socials">
                                <span className="TM-dn-social-icon" title="Total Resources"><FontAwesomeIcon icon={faFileAlt} /></span>
                                <span className="TM-dn-social-icon" title="Total Downloads"><FontAwesomeIcon icon={faDownload} /></span>
                                <span className="TM-dn-social-icon" title="Your Downloads"><FontAwesomeIcon icon={faUser} /></span>
                            </div>
                        </div>

                        <div className="TM-resources-note">
                            <h4><FontAwesomeIcon icon={faLightbulb} /> Note:</h4>
                            <p>
                                Our course includes <strong>20 comprehensive resources</strong> to support your design journey.
                                First 4 resources are available for free download. <strong>Design Software Cheatsheets</strong> and
                                <strong> Portfolio Building Guide</strong> are exclusive to enrolled students.
                                Join our course to access all 20 premium resources and unlock full learning potential.
                            </p>
                        </div>

                        <hr className="TM-dn-divider" />

                        {/* Bottom Dashboard Row */}
                        <div className="TM-dn-dashboard-row">
                            <div className="TM-dn-dash-left">
                                <h3 className="TM-dn-dash-title"> 30-day money-back guarantee <br />Lifetime access  Certificate included </h3>
                                <button
                                    className="TM-dn-dash-btn"
                                    onClick={handleBenefitsClick}
                                >
                                    Join course to Access <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '0.8rem', marginLeft: '4px' }} />
                                </button>
                            </div>
                            <div className="TM-dn-dash-right">
                                <div className="TM-dn-dash-card">
                                    <div className="TM-dn-dash-icon TM-dash-icon-1"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0d9488" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg></div>
                                    <div className="TM-dn-dash-info">
                                        <span className="TM-dn-dash-label">Successful Graduates</span>
                                        <span className="TM-dn-dash-value">10,000+</span>
                                    </div>
                                </div>
                                <div className="TM-dn-dash-card">
                                    <div className="TM-dn-dash-icon TM-dash-icon-2"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0d9488" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg></div>
                                    <div className="TM-dn-dash-info">
                                        <span className="TM-dn-dash-label">Job Placement Rate</span>
                                        <span className="TM-dn-dash-value">94%</span>
                                    </div>
                                </div>
                                <div className="TM-dn-dash-card">
                                    <div className="TM-dn-dash-icon TM-dash-icon-3"><FontAwesomeIcon icon={faUsers} style={{ color: '#0d9488' }} /></div>
                                    <div className="TM-dn-dash-info">
                                        <span className="TM-dn-dash-label">Industry Partners</span>
                                        <span className="TM-dn-dash-value">50+</span>
                                    </div>
                                </div>
                                <div className="TM-dn-dash-card">
                                    <div className="TM-dn-dash-icon TM-dash-icon-4"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0d9488" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg></div>
                                    <div className="TM-dn-dash-info">
                                        <span className="TM-dn-dash-label">Community Support</span>
                                        <span className="TM-dn-dash-value">24/7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Find Influencers Section (Dark UI Style) */}
                {/* <section className="TM-section TM-influencer-section" id="signin">
          <div className="TM-influencer-container">
            <div className="TM-influencer-content">
              {showForm ? (
                <div className="TM-form-section TM-in-influencer">
                  <div className="TM-form-wrapper TM-dark-form">
                    <button
                      className="TM-close-form-btn TM-close-dark"
                      onClick={() => setShowForm(false)}
                      aria-label="Close form"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>

                    <form className="TM-signin-form" onSubmit={handleSignSubmit}>
                      <h3 className="TM-form-dark-title">Register Now</h3>
                      <div className="TM-form-group">
                        <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleFormChange}
                          className={`TM-form-input ${errors.email ? 'TM-error' : ''}`}
                          placeholder="Enter your email"
                        />
                        {errors.email && <span className="TM-error-message">{errors.email}</span>}
                      </div>

                      <div className="TM-form-group">
                        <label htmlFor="course"><FontAwesomeIcon icon={faBook} /> Course</label>
                        <input
                          type="text"
                          id="course"
                          name="course"
                          value={formData.course}
                          onChange={handleFormChange}
                          className={`TM-form-input ${errors.course ? 'TM-error' : ''}`}
                          placeholder="Enter Course Name"
                        />
                        {errors.course && <span className="TM-error-message">{errors.course}</span>}
                      </div>

                      <div className="TM-form-group TM-checkbox-group">
                        <input
                          type="checkbox"
                          id="agreeTerms"
                          name="agreeTerms"
                          checked={formData.agreeTerms}
                          onChange={handleFormChange}
                          className={errors.agreeTerms ? 'TM-error' : ''}
                        />
                        <label htmlFor="agreeTerms">
                          I agree to the Terms of Service and Privacy Policy
                        </label>
                        {errors.agreeTerms && <span className="TM-error-message">{errors.agreeTerms}</span>}
                      </div>

                      <button type="submit" className="TM-submit-btn">
                        Register
                      </button>
                    </form>
                  </div>
                </div>
              ) : (
                <div className="TM-influencer-split">
                  <div className="TM-influencer-left">
                    <h2 className="TM-influencer-title">
                      Join <span className="TM-search-badge"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.6em', marginRight: '4px' }} /> Q</span> Our Course
                      <br />
                      <div className="TM-influencer-avatars">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 1" />
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 2" />
                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" alt="User 3" />
                      </div>
                      to collaborate
                      <br />
                      with us
                      <div className="TM-influencer-search-bar">
                        <span className="TM-search-placeholder">| Search</span>
                        <div className="TM-search-actions">
                          <FontAwesomeIcon icon={faStar} className="TM-voice-icon" />
                          <button className="TM-search-submit"><FontAwesomeIcon icon={faComments} style={{ fontSize: '0.7em' }} /></button>
                        </div>
                      </div>
                    </h2>
                  </div>
                  <div className="TM-influencer-right">
                    <div
                      className="TM-see-how-card"
                      onClick={() => setShowForm(true)}
                    >
                      <div className="TM-card-top-icons">
                        <div className="TM-video-circle">
                          <FontAwesomeIcon icon={faVideo} />
                        </div>
                        <div className="TM-arrow-circle">
                          <FontAwesomeIcon icon={faArrowRight} style={{ transform: 'rotate(-45deg)' }} />
                        </div>
                      </div>
                      <h3 className="TM-see-how-text">See how<br />it's done</h3>
                      <div className="TM-card-decorations">
                        <div className="TM-decor-ring-1"></div>
                        <div className="TM-decor-ring-2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>


            {/* {!showForm && (
              <div className="TM-join-course-banner">
                <h3 className="TM-join-banner-title">JOIN OUR COURSE</h3>
                <div className="TM-join-banner-content">
                  <h4 className="TM-join-course-subtitle"><FontAwesomeIcon icon={faPaintBrush} /> Training Mentor course</h4>
                  <p className="TM-join-course-desc">
                    A graphic designer creates visual concepts that communicate messages through typography, color, imagery, and layout. They design logos, branding, posters, digital content, and user interfaces, blending creativity with strategy to solve problems and deliver clear, engaging visual communication across different media platforms.
                  </p>
                  <button className="TM-banner-register-btn" onClick={() => setShowForm(true)}>
                    <FontAwesomeIcon icon={faRocket} /> Register Now
                  </button>
                </div>
              </div>
            )} */}
                {/* </div> */}
                {/* </section> */}



                {/* Image Gallery Section */}
                <section
                    className="TM-section TM-new-gallery-section"
                    id="gallery"
                >
                    <div className="TM-Gallery-container-new">
                        <div className="TM-Gallery-header-new">
                            <div className="TM-Gallery-title-wrapper-new">
                                <span className="TM-Gallery-title-line-new"></span>
                                <h2 className="TM-Gallery-title-new">Learning Environment</h2>
                            </div>
                            {/* <p className="TM-Gallery-view-all-new">Explore our dynamic learning environment, where creativity meets collaboration. From hands-on projects to expert guidance, we provide everything you need to excel in your graphic design journey.</p> */}
                        </div>

                        <div className="TM-Gallery-grid-new">
                            {/* Left Column (1 Large Card) */}
                            <div
                                className="TM-Gallery-large-card-new"
                                onClick={() => handleImageClick(imagesWithDescriptions[0])}
                            >
                                <img src={imagesWithDescriptions[0].url} alt={imagesWithDescriptions[0].title} className="TM-Gallery-card-bg-new" />
                                <div className="TM-Gallery-card-overlay-new"></div>
                                <div className="TM-Gallery-card-content-new">
                                    <span className="TM-Gallery-badge-new">Environment</span>
                                    <h3 className="TM-Gallery-large-title-new">{imagesWithDescriptions[0].title}</h3>
                                    <div className="TM-Gallery-meta-new">
                                        <span className="TM-Gallery-meta-item-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                        <span className="TM-Gallery-meta-item-new"><FontAwesomeIcon icon={faComments} /> No Comments</span>
                                    </div>
                                </div>
                            </div>

                            {/* Middle Column (3 Small Cards) */}
                            <div className="TM-Gallery-middle-col-new">
                                {[1, 2, 3].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="TM-Gallery-small-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <div className="TM-Gallery-small-image-new">
                                                <img src={item.url} alt={item.title} />
                                            </div>
                                            <div className="TM-Gallery-small-content-new">
                                                <span className="TM-Gallery-badge-text-new">Environment</span>
                                                <h4 className="TM-Gallery-small-title-new">{item.title}</h4>
                                                <span className="TM-Gallery-small-date-new"><FontAwesomeIcon icon={faClock} /> March 8, 2022</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Right Column (2 Medium Cards) */}
                            <div className="TM-Gallery-right-col-new">
                                {[4, 5].map((index) => {
                                    const item = imagesWithDescriptions[index % imagesWithDescriptions.length];
                                    return (
                                        <div
                                            key={index}
                                            className="TM-Gallery-medium-card-new"
                                            onClick={() => handleImageClick(item)}
                                        >
                                            <img src={item.url} alt={item.title} className="TM-Gallery-card-bg-new" />
                                            <div className="TM-Gallery-card-overlay-new"></div>
                                            <div className="TM-Gallery-card-content-new">
                                                <h3 className="TM-Gallery-medium-title-new">{item.title}</h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Existing Note Logic */}
                        {activeDescription && (
                            <div className="TM-gallery-description" style={{ marginTop: '2rem' }}>
                                <div className="TM-description-content">
                                    <h4><FontAwesomeIcon icon={faInfoCircle} /> About this Environment:</h4>
                                    <p>{imagesWithDescriptions.find(img => img.title === activeDescription)?.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </section>

                {/* Ready-to-Use Design Templates */}
                {/* <section
          className="TM-section TM-locked-section TM-templates-section"
          id="templates"
        >
          <div className="TM-locked-section-overlay"></div>
          <div className="TM-locked-content">
            <div className="TM-locked-icon">
              <span className="TM-premium-badge"><FontAwesomeIcon icon={faGem} /> EXCLUSIVE</span>
            </div>
            <h2 className="TM-section-title">Ready-to-Use Design Templates</h2>
            <p className="TM-section-description">
              Get instant access to our proprietary library of 1000+ professionally designed templates.
              Includes social media kits, business presentations, marketing materials, UI/UX components,
              and print-ready templates that are fully customizable and commercially licensed.
            </p>
            <button
              className="TM-locked-btn TM-pay-now-btn"
              onClick={() => showLockedSectionToast("Ready-to-Use Design Templates")}
            >
              <span className="TM-locked-btn-text"><FontAwesomeIcon icon={faLock} /> Join course to Access</span>
            </button>
            <p className="TM-locked-note">
              <svg className="TM-animated-star" viewBox="0 0 24 24" width="20" height="20" style={{ verticalAlign: 'middle', marginRight: '6px' }}>
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="currentColor" />
              </svg>
              One-time payment for lifetime access to all template updates  {/* Changed from faSparkles to faStar */}
                {/* </p>
          </div>
        </section> */}

                {/* Previous Resources Section removed as it's now integrated into the Dream Navigator section */}

                {/* Training Mentor Benefits Section */}
                <section
                    className="TM-section TM-new-benefits-section"
                    id="benefits"
                >
                    {/* Background decorative SVG elements */}
                    <div className="TM-benefits-bg-shapes">
                        <svg className="TM-bg-shape TM-bg-shape-1" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10,100 C10,20 100,10 180,90 C100,200 20,180 10,100 Z" fill="none" stroke="#06D6A0" strokeWidth="2" />
                        </svg>
                        <svg className="TM-bg-shape TM-bg-shape-2" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path d="M190,100 C190,20 100,10 20,90 C100,200 180,180 190,100 Z" fill="none" stroke="#06D6A0" strokeWidth="2" />
                        </svg>
                    </div>

                    <div className="TM-benefits-container-new">
                        {/* Keeping the original title and subtitle */}
                        <div style={{ textAlign: 'center', marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                            <h2 className="TM-section-title">
                                <svg className="TM-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#9333ea" />
                                </svg>
                                Training Mentor Benefits
                                <svg className="TM-animated-star" viewBox="0 0 24 24" width="36" height="36" style={{ verticalAlign: 'middle', marginRight: '10px' }}>
                                    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" fill="#9333ea" />
                                </svg>
                            </h2>
                            <p className="TM-section-subtitle" style={{ margin: '0 auto', color: '#555' }}>
                                When you join our comprehensive graphic design course, you unlock exclusive benefits
                                that accelerate your career growth and skill development.
                            </p>
                        </div>

                        <div className="TM-benefits-image-grid-new">
                            {benefits.map((benefit, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`TM-benefit-img-card-new TM-benefit-img-card-${index}-new`}
                                    >
                                        <img src={benefit.bgImage} alt={benefit.title} className="TM-benefit-card-bg-new" />
                                        <div className="TM-benefit-card-overlay-new"></div>
                                        <div className="TM-benefit-card-content-new">
                                            <div className="TM-benefit-card-header-new">
                                                <span className="TM-benefit-card-icon-new">{benefit.icon}</span>
                                                <h3 className="TM-benefit-card-title-new">{benefit.title}</h3>
                                            </div>
                                            <p className="TM-benefit-card-desc-new">{benefit.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Testimonials Section - Restyled to Dream Team UI */}
                <section
                    className="TM-section TM-dt-section"
                    id="feedback"
                >
                    <div className="TM-dt-container">
                        <div className="TM-dt-header">
                            <h2 className="TM-dt-title">
                                <span>Training Mentors</span> <span>Testimonials<svg className="TM-dt-title-underline" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="#0d9488" strokeWidth="8" fill="none" strokeLinecap="round" /></svg></span>
                            </h2>


                            <p className="TM-dt-subtitle">
                                Hear what our students have to say about their learning experience
                            </p>
                        </div>

                        <div className="TM-dt-cards-wrapper">
                            <div className="TM-dt-cards">
                                {[...testimonials, ...testimonials].map((testimonial, index) => {
                                    const cardClassIndex = (index % 5) + 1;
                                    const imgMap = {
                                        1: boy1, 2: girl1, 3: boy2, 4: girl2,
                                        5: boy3, 6: girl3, 7: boy4, 8: girl4
                                    };

                                    const photoUrl = imgMap[testimonial.id];
                                    const isBoy = [1, 3, 5, 7].includes(testimonial.id);

                                    return (
                                        <div key={`${testimonial.id || index}-${index}`} className={`TM-dt-card TM-dt-card-${cardClassIndex}`}>
                                            <div className="TM-dt-card-img-wrapper">
                                                <img
                                                    src={photoUrl}
                                                    alt={testimonial.author}
                                                    className={`TM-dt-card-img ${isBoy ? 'TM-dt-boy-avatar' : ''}`}
                                                />
                                                <div className="TM-dt-pattern-bg"></div>
                                            </div>
                                            <div className={`TM-dt-card-content TM-dt-content-bg-${cardClassIndex}`}>
                                                <h4 className="TM-dt-card-name">{testimonial.author}</h4>
                                                <p className="TM-dt-card-text">{testimonial.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* <div className="TM-dt-dots">
              <span className="TM-dt-dot TM-dt-dot-active"></span>
              <span className="TM-dt-dot"></span>
              <span className="TM-dt-dot"></span>
            </div> */}
                    </div>
                </section>
                <BackToTop />
            </div>
        </>
    );
}

export default TrainingMentorInternPage;

