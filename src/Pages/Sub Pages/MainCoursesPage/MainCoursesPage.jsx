import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPaintBrush,
    faLaptopCode,
    faPencilAlt,
    faRobot,
    faCode,
    faMobileAlt,
    faRocket,
    faBullseye,
    faChalkboardTeacher,
    faBriefcase,
    faSyncAlt,
    faTrophy,
    faUser,
    faUserTie,
    faCheck,
    faPhone,
    faEnvelope,
    faGraduationCap,
    faTools,
    faFileAlt,
    faCertificate,
    faBuilding,
    faComments,
    faStar,
    faGem,
    faCrown,
    faClock,
    faUsers,
    faChartLine,
    faLightbulb,
    faHandshake,
    faGlobe,
    faShieldAlt,
    faCalendarCheck,
    faBell,
    faLaptopFile
} from '@fortawesome/free-solid-svg-icons';
import './MainCoursesPage.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import TLSPFFooter from '../TechLearningSubPageFooter/TLSPFFooter';

import boyImg from '../../../assets/boy.jpg';
import girlImg from '../../../assets/girl (2).jpg';

const MainCoursesPage = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: ''
    });

    // Ref for intersection observer
    const headingRefs = useRef([]);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Setup heading slash animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const words = entry.target.querySelectorAll('.acp-slash-word');
                        words.forEach((word, index) => {
                            setTimeout(() => {
                                word.classList.add('animated');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.5 }
        );

        headingRefs.current.forEach(ref => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    // Handle WhatsApp navigation
    const handleWhatsAppNavigation = () => {
        const phoneNumber = '9047374263';
        const message = 'Hello! I would like to get more information about your courses.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Handle Notify Me button click
    const handleNotifyMe = () => {
        const phoneNumber = '9047374263';
        const message = 'Hello! I would like to be notified about upcoming courses.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Handle Book Consultation button click
    const handleBookConsultation = () => {
        const phoneNumber = '9047374263';
        const message = 'Hello! I would like to book a free career consultation.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    // Courses data - UPDATED with Java Fullstack Development
    const availableCourses = [
        {
            id: 1,
            title: "Graphics Design & Branding",
            description: "Master logo design, brand identity, and digital advertising with industry experts",
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            color: "#1E40AF",
            status: "enroll",
            features: ["Logo Design", "Brand Identity", "Digital Ads", "Real Projects"],
            students: "1,247+ Enrolled",
            route: "/graphicsDesignCoursePage",
            duration: "12 Weeks",
            level: "Beginner to Advanced",
            projects: "8+ Projects"
        },
        {
            id: 2,
            title: "UI/UX Design Mastery",
            description: "Complete UI/UX design training with industry tools and real-world projects",
            icon: <FontAwesomeIcon icon={faPencilAlt} />,
            color: "#047857",
            status: "enroll",
            features: ["Figma & Adobe XD", "User Research", "Prototyping", "Portfolio"],
            students: "892+ Enrolled",
            route: "/uiuxDesignCoursePage",
            duration: "16 Weeks",
            level: "Beginner to Expert",
            projects: "12+ Projects"
        },
        {
            id: 3,
            title: "Java Fullstack Development",
            description: "Master Java, Spring Boot, React, and modern fullstack development with real-world projects",
            icon: <FontAwesomeIcon icon={faLaptopCode} />,
            color: "#DC2626",
            status: "enroll",
            features: ["Java & Spring Boot", "React", "Databases", "Cloud Deployment"],
            students: "1,500+ Enrolled",
            route: "/javaFullStackCourseCoursePage",
            duration: "24 Weeks",
            level: "Beginner to Advanced",
            projects: "10+ Projects"
        }
    ];

    const upcomingCourses = [
        {
            id: 4,
            title: "AI Creative Intelligence",
            description: "Master AI tools for creative automation, marketing, and content generation",
            icon: <FontAwesomeIcon icon={faRobot} />,
            color: "#7C3AED",
            status: "notify",
            features: ["AI Automation", "ChatGPT", "Midjourney", "Marketing AI"],
            duration: "14 Weeks"
        },
        {
            id: 5,
            title: "Python Stack Development",
            description: "Complete web development from frontend to backend deployment",
            icon: <FontAwesomeIcon icon={faCode} />,
            color: "#7C3AED",
            status: "notify",
            features: ["Frontend & Backend", "Databases", "APIs", "Deployment"],
            duration: "24 Weeks"
        },
        {
            id: 6,
            title: "Mobile App Development",
            description: "Build native and cross-platform mobile applications",
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            color: "#0891B2",
            status: "notify",
            features: ["React Native", "Flutter", "iOS/Android", "App Store"],
            duration: "18 Weeks"
        }
    ];

    // Success stories - UPDATED to show name on one line
    const successStories = [
        {
            name: "Dinesh P",
            role: "Senior Designer",
            icon: <FontAwesomeIcon icon={faUserTie} />,
            salary: "45k",
            story: "Transitioned from marketing to UI/UX design and landed role in 6 months",
        },
        {
            name: "Harini R",
            role: "UI/UX designer",
            icon: <FontAwesomeIcon icon={faUser} />,
            salary: "25k",
            story: "Built a complete branding portfolio that impressed recruiters",
        },
        {
            name: "Gokul V",
            role: "Java Fullstack Developer",
            icon: <FontAwesomeIcon icon={faUserTie} />,
            salary: "50k",
            story: "From mechanical engineer to Java developer in 8 months",
        },
        {
            name: "Priya S",
            role: "Graphic + UI Designer",
            icon: <FontAwesomeIcon icon={faUser} />,
            salary: "45k",
            story: "From freelance designer to product team in under a year",
        }
    ];

    // Features with icons
    const features = [
        { icon: <FontAwesomeIcon icon={faRocket} />, title: "Accelerated Learning", desc: "Master skills in weeks, not years" },
        { icon: <FontAwesomeIcon icon={faBullseye} />, title: "Project-Based", desc: "Build real portfolio projects" },
        { icon: <FontAwesomeIcon icon={faChalkboardTeacher} />, title: "1:1 Mentorship", desc: "Direct guidance from experts" },
        { icon: <FontAwesomeIcon icon={faBriefcase} />, title: "Job Ready", desc: "90% placement rate within 3 months" },
        { icon: <FontAwesomeIcon icon={faSyncAlt} />, title: "Live Sessions", desc: "Interactive live classes" },
        { icon: <FontAwesomeIcon icon={faTrophy} />, title: "Certification", desc: "Industry-recognized certificates" }
    ];

    // Stats counter animation
    const [counters, setCounters] = useState({
        students: 0,
        placement: 0,
        partners: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCounters(prev => ({
                students: prev.students < 2500 ? prev.students + 50 : 2500,
                placement: prev.placement < 95 ? prev.placement + 2 : 95,
                partners: prev.partners < 60 ? prev.partners + 5 : 60
            }));
        }, 50);

        return () => clearInterval(interval);
    }, []);

    const handleEnrollClick = (course) => {
        navigate(course.route);
    };

    const handleFormChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            course: formData.course
        };

        try {
            const response = await fetch(
                "https://localhost:8081/api/courseform/submit",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                }
            );

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }

            alert("Thank you! Our team will contact you within 24 hours.");

            setFormData({
                name: '',
                email: '',
                phone: '',
                course: ''
            });

        } catch (error) {
            alert("Submission failed: " + error.message);
        }
    };

    return (
        <div className="acp-main-courses-page">
            <TopNavBar />
            <NavigationBar />
            {/* Hero Section – NFT-style Dark */}
            <section className="acp-hero-v2-section">

                {/* Sparkle decorations */}
                <div className="acp-v2-spark acp-v2-s1">✦</div>
                <div className="acp-v2-spark acp-v2-s2">✦</div>

                <div className="acp-container">
                    <div className="acp-hero-v2-grid">

                        {/* ── LEFT ── */}
                        <div className="acp-hero-v2-left">
                            <h1 className="acp-hero-v2-title">
                                <div className="acp-v2-title-row">
                                    <span className="acp-v2-plain">Let's build</span>
                                    <span className="acp-v2-green">your</span>
                                </div>
                                <div className="acp-v2-plain">Extraordinary</div>
                                <div className="acp-v2-title-row">
                                    <span className="acp-v2-green">Tech</span>
                                    <span className="acp-v2-plain">Career</span>
                                </div>
                            </h1>
                            <p className="acp-hero-v2-desc">
                                Gain industry-demanded skills with our intensive software development bootcamps and assure your future with our 100% placement focus.
                            </p>
                            <div className="acp-hero-v2-btns">
                                <button className="acp-v2-btn-primary" onClick={handleWhatsAppNavigation}>Discover</button>
                                <button className="acp-v2-btn-ghost" onClick={handleBookConsultation}>Learn More</button>
                            </div>

                            <div className="acp-v2-arrow-wrapper">
                                <svg width="90" height="45" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 25 Q 15 15 35 25 T 55 10 M 45 5 L 55 10 L 50 20" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </div>

                        {/* ── RIGHT: floating cards ── */}
                        <div className="acp-hero-v2-right">

                            <div className="acp-v2-card acp-v2-card-a">
                                <div className="acp-v2-card-img-wrapper" style={{ background: '#f8fafc' }}>
                                    <img className="acp-v2-card-img"
                                        src={girlImg}
                                        alt="Harini Student Image" style={{ objectPosition: 'top' }} />
                                </div>
                                <div className="acp-v2-card-body">
                                    <div className="acp-v2-card-row">
                                        <span className="acp-v2-cname">Java Fullstack</span>
                                        <span className="acp-v2-clikes">24 Weeks</span>
                                    </div>
                                    <div className="acp-v2-card-row acp-v2-bid-row" style={{ marginTop: '10px' }}>
                                        <span className="acp-v2-cbid-lbl">Enroll Now</span>
                                        <span className="acp-v2-cbid-val">Get Placed</span>
                                    </div>
                                    {/* Client Feedback inside card */}
                                    <div className="acp-v2-fb-strip" style={{ marginTop: '15px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                                        <div className="acp-v2-fb-text" style={{ fontStyle: 'italic', fontSize: '13px', color: '#475569', lineHeight: '1.6', textAlign: 'center', fontWeight: '500' }}>
                                            "Got exactly the skills I needed for a career in tech! Now placed in a top company!" <br /><br /><strong>— Harini K ⭐</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Rotating stamp badge */}


                            <div className="acp-v2-card acp-v2-card-b">
                                <div className="acp-v2-card-img-wrapper" style={{ background: '#f8fafc' }}>
                                    <img className="acp-v2-card-img"
                                        src={boyImg}
                                        alt="Arjun Student Image" style={{ objectPosition: 'top' }} />
                                </div>
                                <div className="acp-v2-card-body">
                                    <div className="acp-v2-card-row">
                                        <span className="acp-v2-cname">MERN Stack</span>
                                        <span className="acp-v2-clikes">18 Weeks</span>
                                    </div>
                                    <div className="acp-v2-card-row acp-v2-bid-row" style={{ marginTop: '10px' }}>
                                        <span className="acp-v2-cbid-lbl">Enroll Now</span>
                                        <span className="acp-v2-cbid-val">Get Placed</span>
                                    </div>
                                    {/* Client Feedback inside card */}
                                    <div className="acp-v2-fb-strip" style={{ marginTop: '15px', borderTop: '1px solid #f1f5f9', paddingTop: '15px' }}>
                                        <div className="acp-v2-fb-text" style={{ fontStyle: 'italic', fontSize: '13px', color: '#475569', lineHeight: '1.6', textAlign: 'center', fontWeight: '500' }}>
                                            "The intensive hands-on projects helped me build a great portfolio and landed me a job!" <br /><br /><strong>— Arjun D ⭐</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Marquee bar with exact text from image */}
                <div className="acp-v2-marquee-bar">
                    <div className="acp-v2-marquee-track">
                        {[
                            '❖ Python', 'React', 'JavaScript', 'Java Fullstack', 'Data Science ✽', 'Cloud Computing',
                            '❖ Python', 'React', 'JavaScript', 'Java Fullstack', 'Data Science ✽', 'Cloud Computing',
                            '❖ Python', 'React', 'JavaScript', 'Java Fullstack', 'Data Science ✽', 'Cloud Computing',
                            '❖ Python', 'React', 'JavaScript', 'Java Fullstack', 'Data Science ✽', 'Cloud Computing',
                        ].map((item, i) => (
                            <span key={i} className="acp-v2-marquee-item">{item}</span>
                        ))}
                    </div>
                </div>

            </section>



            {/* Features Section - Dark */}
            <section id="features" className="acp-features-section acp-section-dark acp-section">
                <div className="acp-container">
                    <div className="acp-section-header" ref={el => headingRefs.current[0] = el}>
                        <div className="acp-heading-wrapper">
                            <h2 className="acp-section-title">
                                <span className="acp-slash-word">Why</span>{' '}
                                <span className="acp-slash-word acp-accent-word">Choose</span>{' '}
                                <span className="acp-slash-word">Us</span>
                            </h2>
                            <div className="acp-rotating-circle">
                                <div className="acp-circle-ring"></div>
                                <div className="acp-circle-ring"></div>
                            </div>
                        </div>
                        <p className="acp-section-subtitle">
                            Designed by industry experts for maximum career impact
                        </p>
                    </div>

                    <div className="acp-features-grid">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="acp-feature-card"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="acp-feature-icon-wrapper">
                                    <div className="acp-feature-icon">{feature.icon}</div>
                                    <div className="acp-feature-rings">
                                        <div className="acp-ring acp-ring-1"></div>
                                        <div className="acp-ring acp-ring-2"></div>
                                    </div>
                                </div>
                                <h3>{feature.title}</h3>
                                <p>{feature.desc}</p>
                                <div className="acp-feature-line"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Courses Section - White */}
            <section id="courses" className="acp-courses-section acp-section-white acp-section">
                <div className="acp-container">
                    <div className="acp-section-header" ref={el => headingRefs.current[1] = el}>
                        <div className="acp-heading-wrapper">
                            <h2 className="acp-section-title">
                                <span className="acp-slash-word">Master</span>{' '}
                                <span className="acp-slash-word acp-accent-word">In-Demand</span>{' '}
                                <span className="acp-slash-word">Skills</span>
                            </h2>
                            <div className="acp-circle-path">
                                <div className="acp-path-dot acp-path-dot-1"></div>
                                <div className="acp-path-dot acp-path-dot-2"></div>
                                <div className="acp-path-dot acp-path-dot-3"></div>
                            </div>
                        </div>
                        <p className="acp-section-subtitle">
                            Hands-on courses with real-world projects and industry mentorship
                        </p>
                    </div>

                    <div className="acp-courses-grid">
                        {availableCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className="acp-course-card"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="acp-course-header">
                                    <div className="acp-course-icon" style={{ background: course.color }}>
                                        {course.icon}
                                    </div>
                                    <div className="acp-course-meta">
                                        <span className="acp-meta-item"><FontAwesomeIcon icon={faClock} /> {course.duration}</span>
                                        <span className="acp-meta-item"><FontAwesomeIcon icon={faGraduationCap} /> {course.level}</span>
                                    </div>
                                </div>

                                <h3>{course.title}</h3>
                                <p className="acp-course-description">{course.description}</p>

                                <div className="acp-course-features">
                                    {course.features.map((feature, idx) => (
                                        <span key={idx} className="acp-feature-tag">{feature}</span>
                                    ))}
                                </div>

                                <div className="acp-course-stats">
                                    <div className="acp-stat">
                                        <div className="acp-stat-value">{course.students.split('+')[0]}+</div>
                                        <div className="acp-stat-label"><FontAwesomeIcon icon={faUsers} /> Students</div>
                                    </div>
                                    <div className="acp-stat">
                                        <div className="acp-stat-value">{course.projects}</div>
                                        <div className="acp-stat-label"><FontAwesomeIcon icon={faBriefcase} /> Projects</div>
                                    </div>
                                </div>

                                <button
                                    className="acp-enroll-btn"
                                    style={{ background: course.color }}
                                    onClick={() => handleEnrollClick(course)}
                                >
                                    <span>Enroll Now</span>
                                    <svg className="acp-btn-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Courses - Dark */}
            <section className="acp-upcoming-section acp-section-dark acp-section">
                <div className="acp-container">
                    <div className="acp-section-header" ref={el => headingRefs.current[2] = el}>
                        <div className="acp-heading-wrapper">
                            <h2 className="acp-section-title">
                                <span className="acp-slash-word">Coming</span>{' '}
                                <span className="acp-slash-word acp-accent-word">Soon</span>
                            </h2>
                            <div className="acp-spinning-dots">
                                <div className="acp-dot acp-dot-1"></div>
                                <div className="acp-dot acp-dot-2"></div>
                                <div className="acp-dot acp-dot-3"></div>
                            </div>
                        </div>
                        <p className="acp-section-subtitle">
                            Be the first to master emerging technologies
                        </p>
                    </div>

                    <div className="acp-upcoming-grid">
                        {upcomingCourses.map((course, index) => (
                            <div
                                key={course.id}
                                className="acp-upcoming-card"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="acp-upcoming-icon" style={{ background: course.color }}>
                                    {course.icon}
                                </div>
                                <div className="acp-upcoming-content">
                                    <h3>{course.title}</h3>
                                    <p>{course.description}</p>
                                    <div className="acp-upcoming-features">
                                        {course.features.map((feature, idx) => (
                                            <span key={idx} className="acp-feature-chip">{feature}</span>
                                        ))}
                                    </div>
                                    <div className="acp-upcoming-meta">
                                        <span><FontAwesomeIcon icon={faClock} /> {course.duration}</span>
                                        <button className="acp-notify-btn" onClick={handleNotifyMe}>
                                            <FontAwesomeIcon icon={faBell} /> Notify Me
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories - White - UPDATED */}
            <section id="success" className="acp-success-section acp-section-white acp-section">
                <div className="acp-container">
                    <div className="acp-section-header" ref={el => headingRefs.current[3] = el}>
                        <div className="acp-heading-wrapper">
                            <h2 className="acp-section-title">
                                <span className="acp-slash-word">Success</span>{' '}
                                <span className="acp-slash-word acp-accent-word">Stories</span>
                            </h2>
                            <div className="acp-wave-line">
                                <div className="acp-wave"></div>
                                <div className="acp-wave"></div>
                                <div className="acp-wave"></div>
                            </div>
                        </div>
                        <p className="acp-section-subtitle">
                            From zero to hero - real career transformations
                        </p>
                    </div>

                    <div className="acp-success-stories">
                        {successStories.map((story, index) => (
                            <div
                                key={index}
                                className="acp-story-card"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                <div className="acp-story-header">
                                    <div className="acp-story-avatar">{story.icon}</div>
                                    <div className="acp-story-info">
                                        <h4>
                                            {story.name}
                                            <span className="acp-story-role"> • {story.role}</span>
                                        </h4>
                                    </div>
                                    <div className="acp-story-salary">{story.salary}</div>
                                </div>
                                <p className="acp-story-text">"{story.story}"</p>
                                <div className="acp-story-progress">
                                    <div className="acp-progress-bar">
                                        <div className="acp-progress-fill"></div>
                                    </div>
                                    <span>Career Growth</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section - Dark */}
            <section id="contact" className="acp-contact-section acp-section-dark acp-section">
                <div className="acp-container">
                    <div className="acp-contact-content">
                        <div className="acp-contact-left">
                            <div className="acp-heading-wrapper" ref={el => headingRefs.current[4] = el}>
                                <h2 className="acp-contact-title">
                                    <span className="acp-slash-word">Talk</span>{' '}
                                    <span className="acp-slash-word acp-accent-word">With</span>{' '}
                                    <span className="acp-slash-word">Us</span>
                                </h2>
                                <div className="acp-form-glow"></div>
                            </div>
                            <p className="acp-contact-subtitle">
                                Get personalized guidance from our career experts
                            </p>

                            <div className="acp-contact-benefits">
                                <div className="acp-benefit-item">
                                    <div className="acp-benefit-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div className="acp-benefit-text">
                                        <h4>Free Career Assessment</h4>
                                        <p>Understand your strengths and career path</p>
                                    </div>
                                </div>
                                <div className="acp-benefit-item">
                                    <div className="acp-benefit-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div className="acp-benefit-text">
                                        <h4>Personalized Roadmap</h4>
                                        <p>Get a custom learning plan tailored to your goals</p>
                                    </div>
                                </div>
                                <div className="acp-benefit-item">
                                    <div className="acp-benefit-icon"><FontAwesomeIcon icon={faCheck} /></div>
                                    <div className="acp-benefit-text">
                                        <h4>Scholarship Opportunities</h4>
                                        <p>Explore funding options for your education</p>
                                    </div>
                                </div>
                            </div>

                            <div className="acp-contact-info">
                                <div className="acp-info-item">
                                    <div className="acp-info-icon"><FontAwesomeIcon icon={faPhone} /></div>
                                    <div className="acp-info-text">
                                        <h4>Call Us</h4>
                                        <p>+91 90473 74263</p>
                                    </div>
                                </div>
                                <div className="acp-info-item">
                                    <div className="acp-info-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                                    <div className="acp-info-text">
                                        <h4 className='acp-email'>Email Us</h4>
                                        <p>engloraylearn@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="acp-contact-right">
                            <form className="acp-contact-form" onSubmit={handleFormSubmit}>
                                <h3 className="acp-form-title">Book Your Free Consultation</h3>
                                <p className="acp-form-description">
                                    Fill out the form below and our career advisor will contact you within 24 hours
                                </p>

                                <div className="acp-form-group">
                                    <label htmlFor="name"><FontAwesomeIcon icon={faUser} /> Full Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                <div className="acp-form-group">
                                    <label htmlFor="email"><FontAwesomeIcon icon={faEnvelope} /> Email Address *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        placeholder="Enter your email"
                                        required
                                    />
                                </div>

                                <div className="acp-form-group">
                                    <label htmlFor="course"><FontAwesomeIcon icon={faLaptopFile} /> Course Interested *</label>
                                    <input
                                        type="text"
                                        id="course"
                                        name="course"
                                        value={formData.course}
                                        onChange={handleFormChange}
                                        placeholder="Enter the course"
                                        required
                                    />
                                </div>

                                <div className="acp-form-group">
                                    <label htmlFor="phone"><FontAwesomeIcon icon={faPhone} /> Phone Number *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleFormChange}
                                        placeholder="Enter your phone number"
                                        required
                                    />
                                </div>

                                <button type="submit" className="acp-submit-btn">
                                    <span>Schedule call</span>
                                    <svg className="acp-submit-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" />
                                    </svg>
                                </button>

                                <p className="acp-form-note">
                                    * Required fields. We respect your privacy and will never share your information.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <TLSPFFooter />
            <BackToTop />
        </div>
    );
};

export default MainCoursesPage;