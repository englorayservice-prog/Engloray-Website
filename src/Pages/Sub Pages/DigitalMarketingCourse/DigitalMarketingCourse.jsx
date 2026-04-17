import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import SubFooterTwo from '../subFooterTwo/NewFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import {
    faArrowRight,
    faBook,
    faBriefcase,
    faBullseye,
    faCertificate,
    faCheck,
    faCheckCircle,
    faChevronDown,
    faChevronUp,
    faClock,
    faSearch,
    faComments,
    faEnvelope,
    faChartLine,
    faFlask,
    faGlobe,
    faPauseCircle,
    faPlayCircle,
    faGraduationCap,
    faHandshake,
    faLaptopCode,
    faLightbulb,
    faLock,
    faMagic,
    faRocket,
    faMapMarkerAlt,
    faMobileAlt,
    faPaintBrush,
    faPencilAlt,
    faPenFancy,
    faRulerCombined,
    faStar,
    faSyncAlt,
    faTimes,
    faTrophy,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./DigitalMarketingCourse.css";

import demoVideoFile from "../../../assets/Final GD Course video.mp4";
import videoThumbnail from "../../../assets/DemoThumbnail.png";
import uiuxCertificate from "../../../assets/Digital-Marketing.png";

import avatarF1 from "../../../assets/testimonials/cartoon_female_1.png";
import avatarF3 from "../../../assets/testimonials/cartoon_female_3.png";
import avatarM1 from "../../../assets/testimonials/cartoon_male_1.png";
import avatarM2 from "../../../assets/testimonials/cartoon_male_2.png";
import avatarM3 from "../../../assets/testimonials/cartoon_male_3.png";
import avatarF2 from "../../../assets/testimonials/cartoon_female_2.png";


// AI Tool Logos (Ideas & UX)
import chatgptAiLogo from '../../../assets/chatgpt_ai_logo.jpg';
import geminiAiLogo from '../../../assets/gemini_ai_logo.jpg';
import notionAiLogo from '../../../assets/notion_ai_logo.jpg';
import jasperAiLogo from '../../../assets/jasper_logo.png';

// AI Generative Logos
import adobeFireflyBg from '../../../assets/adobe_firefly_logo.png';
import midjourneyBg from '../../../assets/midjourney_logo.png';
import leonardoAiBg from '../../../assets/leonardo_ai_logo.png';
import dalleBg from '../../../assets/dalle_logo.png';

const DigitaMarketingCourse = () => {
    const [showEnrollment, setShowEnrollment] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [testiSetIndex, setTestiSetIndex] = useState(0);
    const [activeToolCategory, setActiveToolCategory] = useState(0);

    const videoRef = useRef(null);
    const formSectionRef = useRef(null);
    const autoSlideRef = useRef(null);

    useEffect(() => {
        const testiInterval = setInterval(() => {
            setTestiSetIndex((prev) => (prev + 1) % 3);
        }, 5000);
        return () => clearInterval(testiInterval);
    }, []);

    useEffect(() => {
        const curriculumTimer = setInterval(() => {
            setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
        }, 5000);
        return () => clearInterval(curriculumTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "Digital Marketing"
    });

    // Hero Images from user upload
    const uiuxHero3 = require('../../../assets/Digital Marketing.jfif');
    const uiuxHero2 = require('../../../assets/HOME.jfif');
    const uiuxHero1 = require('../../../assets/Pin by Angélica del Carmen KALBERMATT on programación _ Scrapbook design.jfif');
    const uiuxHero4 = require('../../../assets/Social Media Templates.jfif');
    const uiuxHero5 = require('../../../assets/Seo.jfif');

    // New UI/UX-themed hero gallery images (do not reuse GD assets)
    const uiuxHeroAssets = {
        a1: uiuxHero1,
        a2: uiuxHero2,
        a3: uiuxHero3,
        a4: uiuxHero4,
        a5: uiuxHero5
    };

    const allTestimonials = [
        {
            name: "Suresh P",
            role: "Digital Marketing Executive",
            text: "Gained confidence working on real product flows. What felt complex before is now structured and clear?from research to wireframes to high-fidelity prototypes and developer handoff.",
            avatar: avatarM1
        },
        {
            name: "Priya R",
            role: "Digital Marketing Executive",
            text: "The step-by-step approach made UI design feel simple. I learned spacing, typography, components, and design systems in a way that helped me build clean, professional screens fast.",
            avatar: avatarF1
        },
        {
            name: "Rahul M",
            role: "Performance Marketer",
            text: "The curriculum is perfectly aligned with modern product teams. I improved my UX thinking, created case studies, and learned stakeholder-ready presentations for real-world projects.",
            avatar: avatarM3
        },
        {
            name: "Anita K",
            role: "Freelancer",
            text: "I started freelancing with confidence after learning discovery, client briefs, wireframes, and prototyping. The mentorship helped me communicate design decisions with clarity and impact.",
            avatar: avatarF2
        },
        {
            name: "Vikas S",
            role: "Freelancer",
            text: "From user research to usability testing, the process finally clicked. I learned how to validate ideas, iterate quickly, and build experiences that actually solve user problems.",
            avatar: avatarM2
        },
        {
            name: "Sneha T",
            role: "Performance Marketer",
            text: "Learning design systems and components changed everything. I can now build consistent UI, maintain scalability, and deliver pixel-perfect screens with fast iteration cycles.",
            avatar: avatarF3
        },
        {
            name: "Rohan D",
            role: "Digital Marketing Executive",
            text: "The focus on real product case studies helped me create a strong portfolio. The project reviews made my work polished and ready for interviews with top product companies.",
            avatar: avatarM3
        },
        {
            name: "Kavya J",
            role: "Performance Marketer",
            text: "I finally understand how to run interviews, synthesize insights, and turn research into meaningful design decisions. The frameworks and practice sessions were incredibly useful.",
            avatar: avatarF3
        },
        {
            name: "Manoj V",
            role: "Freelancer",
            text: "The prototyping and interaction lessons made my work feel alive. I learned micro-interactions, motion intent, and how to present flows in a way developers can implement easily.",
            avatar: avatarM1
        }
    ];

    const activeTestimonials = allTestimonials.slice(testiSetIndex * 3, testiSetIndex * 3 + 3);

    const introCategories = [
        {
            title: "Performance Marketing",
            icon: <FontAwesomeIcon icon={faBullseye} />,
            points: ["Google Ads", "Meta Ads", "Campaign Optimization"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "SEO & Organic Growth",
            icon: <FontAwesomeIcon icon={faRulerCombined} />,
            points: ["Keyword Research", "On-Page & Technical SEO", "Content Optimization"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Social Media Marketing",
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            points: ["Content Strategy", "Audience Engagement", "Growth Techniques"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Email Marketing",
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            points: ["Campaign Creation", "Automation Funnels", "Lead Nurturing"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Analytics & Tracking",
            icon: <FontAwesomeIcon icon={faLaptopCode} />,
            points: ["Google Analytics (GA4)", "Conversion Tracking", "Data Insights"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Brand & Growth Strategy",
            icon: <FontAwesomeIcon icon={faRocket} />,
            points: ["Funnel Building", "Customer Journey Mapping", "Scaling Strategies"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        }
    ];

    const courseOutcomes = [
        {
            icon: <FontAwesomeIcon icon={faBullseye} />,
            title: "Marketing Fundamentals",
            desc: "Understand core digital marketing concepts, audience targeting, and channel strategies. Learn how to position brands effectively, craft compelling messaging, and build strong foundations for long-term marketing success using consumer behavior insights."
        },
        {
            icon: <FontAwesomeIcon icon={faRulerCombined} />,
            title: "Performance Marketing Mastery",
            desc: "Run high-converting ad campaigns using Google Ads and Meta platforms. Learn campaign structuring, audience segmentation, and optimization techniques to maximize ROI. Gain practical experience in budget management and scaling performance."
        },
        {
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            title: "Content & Social Media Strategy",
            desc: "Create engaging content for social platforms that drives reach and engagement. Build content calendars, manage communities, and develop strategies that grow brand presence organically using visual storytelling and platform-specific techniques."
        },
        {
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            title: "SEO & Organic Growth",
            desc: "Master keyword research, on-page SEO, and technical optimization to dominate search results. Learn how to improve rankings, drive organic traffic, and create content that converts while maintaining long-term search authority."
        },
        {
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            title: "Analytics & Career Growth",
            desc: "Analyze campaign performance using tools like GA4 and professional tracking systems. Build comprehensive reports, extract actionable insights, and use data-driven metrics to drive business success and career growth."
        },
        {
            icon: <FontAwesomeIcon icon={faStar} />,
            title: "Marketing Strategy & Scaling",
            desc: "Develop full-funnel marketing strategies from initial awareness to final conversion. Learn customer journey mapping and advanced scaling techniques to lead large-scale marketing initiatives and grow brands sustainably."
        }
    ];

    // New UI/UX-themed curriculum backgrounds (do not reuse GD assets)
    const sixMonthCurriculum = [
        {
            month: "Month 1",
            title: "Marketing Foundations & Strategy",
            topics: [
                "Digital Marketing Fundamentals",
                "Audience Research & Targeting",
                "Customer Journey Mapping",
                "Brand Positioning",
                "Marketing Funnels"
            ],
            projects: "5 Projects",
            icon: <FontAwesomeIcon icon={faBook} />,
            bgImage: "https://i.pinimg.com/1200x/8f/c8/7a/8fc87a863b5427b99122024587184ffd.jpg"
        },
        {
            month: "Month 2-3",
            title: "Performance & Paid Advertising",
            topics: [
                "Google Ads (Search & Display)",
                "Meta Ads (Facebook & Instagram)",
                "Campaign Structure & Targeting",
                "A/B Testing & Optimization",
                "Budget & ROI Management"
            ],
            projects: "15 Projects",
            icon: <FontAwesomeIcon icon={faChartLine} />,
            bgImage: "https://i.pinimg.com/1200x/23/fc/f9/23fcf911674e0a7eab8d8f2512a344ea.jpg"
        },
        {
            month: "Month 4-5",
            title: "SEO & Content Marketing",
            topics: [
                "Keyword Research",
                "On-Page & Technical SEO",
                "Content Strategy & Blogging",
                "Social Media Growth",
                "Email Marketing Funnels"
            ],
            projects: "20 Projects",
            icon: <FontAwesomeIcon icon={faSearch} />,
            bgImage: "https://i.pinimg.com/736x/3a/3b/86/3a3b8682cce91c1f09d8c48e32ca5acb.jpg"
        },
        {
            month: "Month 6",
            title: "Analytics, Scaling & Career Prep",
            topics: [
                "Google Analytics (GA4)",
                "Conversion Tracking",
                "Campaign Performance Analysis",
                "Scaling Strategies",
                "Freelance & Interview Prep"
            ],
            projects: "7 Projects",
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            bgImage: "https://i.pinimg.com/736x/29/81/e3/2981e3bccd8697f5a22d255174d74704.jpg"
        }
    ];

    const toolsV2Data = [
        [
            {
                name: "Ahrefs",
                icon: <FontAwesomeIcon icon={faSearch} />,
                desc: "Keywords & backlinks.",
                bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
            },
            {
                name: "Semrush",
                icon: <FontAwesomeIcon icon={faGlobe} />,
                desc: "Comprehensive SEO suite.",
                bg: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)"
            },
            {
                name: "Screaming Frog",
                icon: <FontAwesomeIcon icon={faRocket} />,
                desc: "Technical website crawler.",
                bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
            },
            {
                name: "Yoast SEO",
                icon: <FontAwesomeIcon icon={faTrophy} />,
                desc: "On-page optimization.",
                bg: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)"
            }
        ],
        [
            {
                name: "Google Ads",
                icon: <FontAwesomeIcon icon={faLightbulb} />,
                desc: "Search intent marketing.",
                bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
            },
            {
                name: "Meta Ads",
                icon: <FontAwesomeIcon icon={faUser} />,
                desc: "Social reach and conversion.",
                bg: "linear-gradient(135deg, #ffd1ff 0%, #fad0c4 100%)"
            },
            {
                name: "LinkedIn Ads",
                icon: <FontAwesomeIcon icon={faBriefcase} />,
                desc: "B2B professional targeting.",
                bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
            },
            {
                name: "TikTok Ads",
                icon: <FontAwesomeIcon icon={faMobileAlt} />,
                desc: "Viral video campaigns.",
                bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)"
            }
        ],
        [
            {
                name: "Hootsuite",
                icon: <FontAwesomeIcon icon={faClock} />,
                desc: "Social scheduling.",
                bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
            },
            {
                name: "Buffer",
                icon: <FontAwesomeIcon icon={faBullseye} />,
                desc: "Brand organic growth.",
                bg: "linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)"
            },
            {
                name: "Canva",
                icon: <FontAwesomeIcon icon={faPaintBrush} />,
                desc: "Quick content creation.",
                bg: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
            },
            {
                name: "Sprout Social",
                icon: <FontAwesomeIcon icon={faComments} />,
                desc: "Audience engagement.",
                bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
            }
        ],
        [
            {
                name: "Google Analytics 4",
                icon: <FontAwesomeIcon icon={faChartLine} />,
                desc: "Deep user behavior tracking.",
                bg: "linear-gradient(135deg, #96e6a1 0%, #d4fc79 100%)"
            },
            {
                name: "Hotjar",
                icon: <FontAwesomeIcon icon={faCheckCircle} />,
                desc: "User heatmaps.",
                bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)"
            },
            {
                name: "Looker Studio",
                icon: <FontAwesomeIcon icon={faBook} />,
                desc: "Custom KPI dashboards.",
                bg: "linear-gradient(135deg, #a8ede5 0%, #fed6e3 100%)"
            },
            {
                name: "HubSpot",
                icon: <FontAwesomeIcon icon={faMagic} />,
                desc: "CRM and tracking.",
                bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
            }
        ]
    ];

    const benefits = [
        { icon: <FontAwesomeIcon icon={faGraduationCap} />, title: "Live Interactive Training", description: "Real-time classes with senior digital marketers and immediate doubt resolution for faster learning." },
        { icon: <FontAwesomeIcon icon={faHandshake} />, title: "1:1 Mentorship", description: "Personal guidance from performance marketers and SEO experts with 10+ years of experience." },
        { icon: <FontAwesomeIcon icon={faBriefcase} />, title: "100% Placement Assistance", description: "Career support with campaign portfolio reviews, mock interviews, and hiring partner referrals." },
        { icon: <FontAwesomeIcon icon={faTrophy} />, title: "Global Certification", description: "Internationally recognized certification to validate your digital marketing skills globally." },
        { icon: <FontAwesomeIcon icon={faClock} />, title: "Lifetime Course Access", description: "All course materials, platform updates, and recordings available forever for continuous growth." },
        { icon: <FontAwesomeIcon icon={faComments} />, title: "Community Access", description: "Network with 5000+ marketers and participate in live campaign challenges and peer reviews." },
        { icon: <FontAwesomeIcon icon={faLaptopCode} />, title: "Tool Mastery", description: "Hands-on practice with modern ad platforms, SEO tools, and analytics workflows used globally." },
        { icon: <FontAwesomeIcon icon={faBullseye} />, title: "Project-Based Learning", description: "Build real marketing campaigns and data-driven case studies that stand out in interviews." },
        { icon: <FontAwesomeIcon icon={faChartLine} />, title: "Data-Driven Approach", description: "Learn to track metrics, gather insights, and optimize campaigns confidently with real data." },
        { icon: <FontAwesomeIcon icon={faRocket} />, title: "Career Coaching", description: "Interview prep and strategizing guidance to land your first Digital Marketing role faster." }
    ];

    const hexToRgba = (hex, alpha) => {
        const cleaned = hex.replace("#", "").trim();
        const isShort = cleaned.length === 3;
        const full = isShort ? cleaned.split("").map((c) => `${c}${c}`).join("") : cleaned;
        const r = parseInt(full.slice(0, 2), 16);
        const g = parseInt(full.slice(2, 4), 16);
        const b = parseInt(full.slice(4, 6), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    };

    const benefitIconPalette = ["#BAE6FD", "#C4B5FD", "#FBCFE8", "#BBF7D0", "#FED7AA", "#FEF08A", "#E9D5FF", "#A7F3D0", "#BAE6FD", "#C4B5FD"];

    const demoVideo = {
        title: "UI/UX Design Mastery - Free Demo Lesson",
        duration: "15:45",
        instructor: "Engloray Expert",
        description: "Watch this sample lesson to experience our teaching methodology and see how we simplify UX processes into actionable steps.",
        videoFile: demoVideoFile,
        thumbnail: videoThumbnail || "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1200&q=80"
    };

    const certificate = {
        title: "Professional Digital Marketing Certification",
        description: "Globally recognized certificate accredited by International Design Council",
        features: ["? Digital & Physical Copy", "? Lifetime Validity", "? Online Verification", "? International Recognition", "? QR Code Authentication", "? Accredited by Leading Marketing Experts"],
        image: uiuxCertificate
    };

    const floatingIcons = [
        <FontAwesomeIcon icon={faPaintBrush} />,
        <FontAwesomeIcon icon={faPencilAlt} />,
        <FontAwesomeIcon icon={faRulerCombined} />,
        <FontAwesomeIcon icon={faPenFancy} />,
        <FontAwesomeIcon icon={faBullseye} />,
        <FontAwesomeIcon icon={faLightbulb} />,
        <FontAwesomeIcon icon={faRocket} />,
        <FontAwesomeIcon icon={faTrophy} />
    ];

    const contactDetails = [
        { icon: <FontAwesomeIcon icon={faEnvelope} />, title: "Email Support", details: ["hello@engloraylearn.com"], description: "24-hour response time", link: "mailto:hello@engloraylearn.com" },
        { icon: <FontAwesomeIcon icon={faWhatsapp} />, title: "WHATSAPP", details: ["+91 63681 75990", "+91 63699 45920"], description: "Available 9 AM - 9 PM", link: "https://wa.me/916368175990" },
        { icon: <FontAwesomeIcon icon={faMapMarkerAlt} />, title: "Learning Center", details: ["Madurai, Tamil Nadu", "INDIA 625001"], description: "Visit for demo class", link: "https://maps.google.com/?q=Engloray+Madurai" },
        { icon: <FontAwesomeIcon icon={faComments} />, title: "Quick Chat", details: ["Live Chat Available", "Telegram Support"], description: "Instant design guidance", link: "https://wa.me/916368175990" }
    ];

    const nextModule = () => {
        setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    };

    const prevModule = () => {
        setCurrentModuleIndex((prev) => (prev - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length);
    };

    const scrollToForm = () => {
        formSectionRef.current?.scrollIntoView({ behavior: "smooth" });
        setShowEnrollment(true);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await submitEnrollment(formData);
            setShowSuccess(true);
            setFormData({ name: "", email: "", phone: "", course: "UI/UX Design Mastery" });
            setTimeout(() => setShowEnrollment(false), 3000);
            setTimeout(() => setShowSuccess(false), 5000);
        } catch (error) {
            alert("Enrollment failed. Please try again.");
            // eslint-disable-next-line no-console
            console.error(error);
        }
    };

    const handlePlayVideo = () => {
        if (!videoRef.current) return;
        if (isPlaying) videoRef.current.pause();
        else videoRef.current.play();
        setIsPlaying(!isPlaying);
    };

    const handleVideoEnd = () => setIsPlaying(false);
    const handleVideoPlay = () => setIsPlaying(true);
    const handleVideoPause = () => setIsPlaying(false);

    return (
        <div className="dgm-gdc-page">
            <NavigationBar />
            {/* Hero Section Upgrade - Minimalist Premium Design */}
            <header className="dgm-gdc-hero-v3">
                <div className="dgm-gdc-v3-sparkle-wrapper">
                    <div className="dgm-gdc-v3-sparkle sparkle-lg sparkle-pos-1">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-sm sparkle-pos-2">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-md sparkle-pos-3">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-lg sparkle-pos-4">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-sm sparkle-pos-5">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-md sparkle-pos-6">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-lg sparkle-pos-7">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dgm-gdc-v3-sparkle sparkle-sm sparkle-pos-8">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                </div>

                <div className="dgm-gdc-v3-container">
                    <div className="dgm-gdc-v3-header-content">
                        <h1 className="dgm-gdc-v3-main-title">
                            Digital <span className="dgm-gdc-v3-arrow-capsule-straight">→</span> Marketing <br /> Mastery Program
                        </h1>

                        <p className="dgm-gdc-v3-subtitle-original">
                            Master SEO, social media, paid ads & content strategies <br />
                            to build high-impact campaigns and grow real-world brands.
                        </p>

                        <div className="dgm-gdc-v3-sub-row">
                            <div className="dgm-gdc-v3-members-info">
                                <p>With more than</p>
                                <h3>2K+ LEARNERS</h3>
                                <h3>500+ MARKETING LESSONS</h3>
                            </div>

                            <button className="dgm-gdc-v3-join-btn" onClick={scrollToForm}>
                                Join us <span className="dgm-gdc-v3-join-arrow">↗</span>
                            </button>
                        </div>
                    </div>

                    <div className="dgm-gdc-v3-asset-gallery">
                        <div className="dgm-gdc-v3-card dgm-gdc-card-blue">
                            <img src={uiuxHeroAssets.a1} alt="UIUX Asset 1" className="dgm-gdc-v3-card-img" />
                        </div>
                        <div className="dgm-gdc-v3-card dgm-gdc-card-dark">
                            <img src={uiuxHeroAssets.a2} alt="UIUX Asset 2" className="dgm-gdc-v3-card-img" />
                        </div>
                        <div className="dgm-gdc-v3-card dgm-gdc-card-center-featured">
                            <img src={uiuxHeroAssets.a3} alt="UIUX Asset 3" className="dgm-gdc-v3-card-img" />
                        </div>
                        <div className="dgm-gdc-v3-card dgm-gdc-card-dark">
                            <img src={uiuxHeroAssets.a4} alt="UIUX Asset 4" className="dgm-gdc-v3-card-img" />
                        </div>
                        <div className="dgm-gdc-v3-card dgm-gdc-card-blue">
                            <img src={uiuxHeroAssets.a5} alt="UIUX Asset 5" className="dgm-gdc-v3-card-img" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Marquee Section bridging Hero and Intro */}
            <div className="dgm-gdc-v2-marquee-container">
                <div className="dgm-gdc-v2-marquee">
                    <span>
                        SEO STRATEGY <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        SOCIAL MEDIA MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        PERFORMANCE ADS  <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        CONTENT MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        EMAIL MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        GOOGLE ADS <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        FACEBOOK & INSTAGRAM ADS <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        ANALYTICS & TRACKING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        FUNNEL BUILDING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        BRAND GROWTH STRATEGY <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        SOCIAL MEDIA MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        PERFORMANCE ADS
                    </span>
                    <span aria-hidden="true">
                        SEO STRATEGY <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        SOCIAL MEDIA MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        PERFORMANCE ADS  <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        CONTENT MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        EMAIL MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        GOOGLE ADS <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        FACEBOOK & INSTAGRAM ADS <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        ANALYTICS & TRACKING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        FUNNEL BUILDING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        BRAND GROWTH STRATEGY <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        SOCIAL MEDIA MARKETING <FontAwesomeIcon icon={faStar} className="dgm-gdc-marquee-star" />
                        PERFORMANCE ADS
                    </span>
                </div>
            </div>

            {/* New Intro Section - Re-designed to 2-column layout */}
            <section className="dgm-gdc-intro-section">
                <div className="dgm-gdc-container">
                    <div className="dgm-gdc-intro-layout">
                        <div className="dgm-gdc-intro-left">
                            <h2 className="dgm-gdc-intro-title">
                                Master Digital <br /> Marketing in 6 Months
                            </h2>
                            <p className="dgm-gdc-intro-desc">
                                Learn the complete digital marketing process from strategy to execution. Build real campaigns, master industry tools, and become job-ready with hands-on experience and measurable results.
                            </p>
                            <button className="dgm-gdc-intro-cta" onClick={scrollToForm}>
                                Contact
                            </button>
                        </div>

                        <div className="dgm-gdc-intro-right">
                            <div className="dgm-gdc-intro-grid">
                                {introCategories.map((cat, i) => (
                                    <div key={i} className="dgm-gdc-intro-category-box">
                                        <div className="dgm-gdc-intro-card-icon" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                                            {cat.icon}
                                        </div>
                                        <div className="dgm-gdc-intro-card-content">
                                            <h3 className="dgm-gdc-intro-card-title">{cat.title}</h3>
                                            <div className="dgm-gdc-intro-card-points">
                                                {cat.points.map((point, idx) => (
                                                    <div key={idx} className="dgm-gdc-intro-point">
                                                        <FontAwesomeIcon icon={faStar} className="dgm-gdc-intro-point-star" />
                                                        {point}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Course Outcomes - Redesigned Numbered Grid */}
            <section className="dgm-section dgm-outcomes-numbered">
                <div className="dgm-container">
                    <div className="dgm-outcomes-header-row">
                        <div className="dgm-outcomes-title-col">
                            <h2 className="dgm-outcomes-main-title">Course Outcomes</h2>
                        </div>
                        <div className="dgm-outcomes-desc-col">
                            <p className="dgm-outcomes-top-desc text-left">
                                What you'll achieve after completing this program. Master workflows, build case studies, and transform into an industry-ready UI/UX designer.
                            </p>
                        </div>
                    </div>

                    <div className="dgm-outcomes-numbered-grid">
                        {courseOutcomes.map((outcome, index) => {
                            const isBlack = index === 1 || index === 3 || index === 5;
                            const cardNumber = (index + 1).toString().padStart(2, '0');

                            return (
                                <div
                                    key={index}
                                    className={`digi-mkt-outcome-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                                >
                                    <div
                                        className="dgm-outcome-card-content-wrapper"
                                        style={index === 3 ? { marginTop: "40px", marginLeft: "8px" } : {}}
                                    >
                                        {/* Left side - Number and Icon */}
                                        <div className="dgm-outcome-card-left">
                                            <div className="dgm-outcome-card-number">{cardNumber}</div>
                                            <div className="dgm-outcome-numbered-icon">{outcome.icon}</div>
                                        </div>

                                        {/* Right side - Title and Description */}
                                        <div className="dgm-outcome-card-right">
                                            <h3 className="dgm-outcome-numbered-title">{outcome.title}</h3>
                                            <p className="dgm-outcome-numbered-desc">{outcome.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6-Month Course Breakdown - Vertical Slider Redesign */}
            <section className="dgm-gdc-curriculum-v2-section">
                <div className="dgm-gdc-container">
                    <div className="dgm-gdc-curriculum-v2-layout">
                        <div className="dgm-gdc-curriculum-v2-left">
                            <span className="dgm-gdc-curriculum-v2-tag">PRO COURSE</span>
                            <h2 className="dgm-gdc-curriculum-v2-title">
                                6-Month Course <br /> Breakdown
                            </h2>
                            <p className="dgm-gdc-curriculum-v2-desc">
                                A structured digital marketing journey built for real-world success.
                                Master performance marketing, SEO, content strategy, and analytics to create high-impact campaigns in 6 intensive months.
                            </p>

                            <div className="dgm-gdc-curriculum-v2-stats">
                                <div className="dgm-gdc-stat-item">
                                    <span className="dgm-gdc-stat-num">50+</span>
                                    <span className="dgm-gdc-stat-label">Real Campaigns</span>
                                </div>
                                <div className="dgm-gdc-stat-item">
                                    <span className="dgm-gdc-stat-num">100%</span>
                                    <span className="dgm-gdc-stat-label">Practical</span>
                                </div>
                            </div>
                        </div>

                        <div className="dgm-gdc-curriculum-v2-right">
                            <div className="dgm-gdc-curriculum-nav-v2">
                                <button className="dgm-gdc-nav-btn-v2" onClick={prevModule}>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                                <button className="dgm-gdc-nav-btn-v2" onClick={nextModule}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </div>

                            <div className="dgm-gdc-slider-v5-container">
                                {sixMonthCurriculum.map((module, index) => {
                                    const isActive = index === currentModuleIndex;
                                    const isNext = index === (currentModuleIndex + 1) % sixMonthCurriculum.length;
                                    const isPrev = index === (currentModuleIndex - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length;

                                    let cardState = "hidden";
                                    if (isActive) cardState = "active";
                                    else if (isPrev) cardState = "top";
                                    else if (isNext) cardState = "bottom";

                                    return (
                                        <div key={index} className={`dgm-gdc-curriculum-v5-card ${cardState}`}>
                                            <div className="dgm-gdc-curriculum-v5-inner">
                                                <div className="dgm-gdc-curriculum-v5-bg">
                                                    <img src={module.bgImage} alt={module.title} className="dgm-gdc-curriculum-v5-img" />
                                                    <div className="dgm-gdc-curriculum-v5-overlay"></div>
                                                </div>

                                                <div className="dgm-gdc-curriculum-v5-content">
                                                    <div className="dgm-gdc-curriculum-v5-header">
                                                        <span className="dgm-gdc-curriculum-v5-month">{module.month}</span>
                                                        <span className="dgm-gdc-curriculum-v5-proj">Projects: {module.projects}</span>
                                                    </div>
                                                    <h3 className="dgm-gdc-curriculum-v5-title">{module.title}</h3>
                                                    <div className="dgm-gdc-curriculum-v5-topics">
                                                        {module.topics.map((topic, tidx) => (
                                                            <div key={tidx} className="dgm-gdc-curriculum-v5-topic">
                                                                <FontAwesomeIcon icon={faCheck} className="dgm-gdc-curriculum-v5-check" /> {topic}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tools & Resources - Interactive V2 Redesign */}
            <section className="dgm-gdc-tools-v2">
                <div className="dgm-gdc-container">
                    <div className="dgm-gdc-tools-v2-header">
                        <h2 className="dgm-gdc-tools-v2-title">Marketing Tools & Platforms</h2>
                        <p className="dgm-gdc-tools-v2-subtitle">Master the industry's most powerful Digital Marketing workflow</p>
                    </div>

                    <div className="dgm-gdc-tools-v2-layout">
                        <div className="dgm-gdc-tools-sidebar">
                            {["SEO Tools", "Ad Platforms", "Social Media", "Analytics"].map((label, idx) => (
                                <button key={idx} className={`dgm-gdc-tool-tab ${activeToolCategory === idx ? "active" : ""}`} onClick={() => setActiveToolCategory(idx)}>
                                    <span className="tab-number">0{idx + 1}</span>
                                    <span className="tab-label">{label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="dgm-gdc-tools-main-display">
                            <div className="dgm-gdc-pods-container" key={activeToolCategory}>
                                {toolsV2Data[activeToolCategory].map((tool, index) => (
                                    <div key={index} className={`dgm-gdc-tool-pod pod-${index + 1}`}>
                                        <div className="dgm-gdc-pod-inner">
                                            <div className="dgm-gdc-pod-bg-image" style={{ background: tool.bg ? tool.bg : `url(${tool.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                            <div className="dgm-gdc-pod-content">
                                                <div className="dgm-gdc-pod-icon">{tool.icon}</div>
                                                <h4 className="dgm-gdc-pod-name">{tool.name}</h4>
                                                <p className="dgm-gdc-pod-desc">{tool.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section - Where Features Meet For You Upgrade */}
            <section className="dgm-section dgm-benefits-reimagined">
                <div className="dgm-container">
                    <div className="dgm-benefits-header">
                        <h2 className="dgm-benefits-title">Where Features Meet For You</h2>
                    </div>

                    <div className="dgm-benefits-staggered">
                        {/* Row 1: 5 Cards */}
                        <div className="dgm-benefits-row dgm-row-5">
                            {benefits.slice(0, 5).map((benefit, index) => (
                                <div key={index} className="dgm-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 0 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dgm-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2: 3 Cards */}
                        <div className="dgm-benefits-row dgm-row-3">
                            {benefits.slice(5, 8).map((benefit, index) => (
                                <div key={index} className="dgm-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 5 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dgm-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 3: 2 Original Cards */}
                        <div className="dgm-benefits-row dgm-row-2" style={{ gap: "50px" }}>
                            {benefits.slice(8, 10).map((benefit, index) => (
                                <div key={index} className="dgm-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 8 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dgm-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Cards - Positioned Independently */}
                    {/* Left Bottom Floating Card */}
                    <div
                        className="dgm-floating-benefit-card dgm-floating-card-left"
                        style={{
                            left: "calc(50% - 505px)", // Move left or right (e.g. "100px", "5%", "calc(50% - 505px)")
                            top: "320px",              // Moves the card up and down
                            bottom: "0px",             // Stretches the card to the bottom 
                            width: "190px",            // Width of the card
                            height: "auto",
                            justifyContent: "center",
                            padding: "18px"
                        }}
                    >
                        <div className="dgm-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="dgm-new-content">
                            <h3>Industry Recognition</h3>
                            <p>Get certified with globally recognized credentials. Our prestigious certification proves to top-tier employers that you have mastered modern marketing strategies and hands-on campaign execution.</p>
                        </div>
                    </div>

                    {/* Right Bottom Floating Card */}
                    <div className="dgm-floating-benefit-card dgm-floating-card-right" style={{
                        right: "calc(50% - 505px)", // Move left or right (e.g. "100px", "5%", "calc(50% - 505px)")
                        top: "320px",              // Moves the card up and down
                        bottom: "0px",             // Stretches the card to the bottom 
                        width: "190px",            // Width of the card
                        height: "auto",
                        justifyContent: "center",
                        padding: "18px"
                    }}>
                        <div className="dgm-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="dgm-new-content">
                            <h3>Lifetime Updates</h3>
                            <p>Stay ahead with free lifetime access to all future course updates and industry-relevant content additions. You will always have direct access to the latest platform changes and cutting-edge tools to remain a competitive expert.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Section with Simplified Lock Overlay */}
            <section className="dgm-gdc-section dgm-gdc-dark-bg">
                <div className="dgm-gdc-container">
                    <h2 className="dgm-gdc-section-title">Professional Certification</h2>
                    <p className="dgm-gdc-section-subtitle">Earn a globally recognized certificate upon completion</p>

                    <div className="dgm-gdc-certificate-single">
                        <div className="dgm-gdc-certificate-image-wrapper">
                            <img
                                src={certificate.image}
                                alt="UI/UX Design Mastery Certificate"
                                className="dgm-gdc-certificate-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80";
                                }}
                            />

                            <div className="dgm-gdc-certificate-lock-overlay">
                                <div className="dgm-gdc-lock-icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className="dgm-gdc-lock-text">Certificate Locked</div>
                            </div>

                            <div className="dgm-gdc-certificate-overlay">
                                <span className="dgm-gdc-certificate-badge">Your Professional Certificate Template</span>
                            </div>
                            <div className="dgm-gdc-certificate-download-note">
                                <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
                            </div>
                        </div>

                        <div className="dgm-gdc-certificate-info-single">
                            <h3 className="dgm-gdc-certificate-title-single">{certificate.title}</h3>
                            <p className="dgm-gdc-certificate-desc-single">{certificate.description}</p>

                            <div className="dgm-gdc-certificate-features-single">
                                {certificate.features.map((feature, index) => (
                                    <div key={index} className="dgm-gdc-certificate-feature-item-single">
                                        <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace("? ", "")}
                                    </div>
                                ))}
                            </div>

                            <div className="dgm-gdc-certificate-benefits">
                                <div className="dgm-gdc-benefit">
                                    <span className="dgm-gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <span className="dgm-gdc-benefit-text">Enhances your professional credibility</span>
                                </div>
                                <div className="dgm-gdc-benefit">
                                    <span className="dgm-gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <span className="dgm-gdc-benefit-text">Increases job opportunities by 75%</span>
                                </div>
                                <div className="dgm-gdc-benefit">
                                    <span className="dgm-gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <span className="dgm-gdc-benefit-text">Globally recognized by employers</span>
                                </div>
                                <div className="dgm-gdc-benefit">
                                    <span className="dgm-gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                    <span className="dgm-gdc-benefit-text">QR code verification for authenticity</span>
                                </div>
                            </div>

                            <div className="dgm-gdc-certificate-instructions">
                                <h4>
                                    <FontAwesomeIcon icon={faCertificate} /> Certificate Details:
                                </h4>
                                <ul>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} /> Issued upon successful completion of the course
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} /> Includes student name and unique certificate ID
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} /> Verified through our online portal
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faCheck} /> Available in digital (PDF) and physical formats
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Premium Testimonials - V9 Grid Layout */}
            <section className="dgm-gdc-testi-grid-section">
                <div className="dgm-gdc-container">
                    <div className="dgm-gdc-testi-grid-wrapper">
                        <div className="dgm-gdc-testi-grid-left">
                            <h2 className="dgm-gdc-testi-main-title">Experience Learning Like Never Before</h2>
                            <p className="dgm-gdc-testi-subtitle">
                                Discover personalized, practical learning that prepares you for real product teams. Read stories from learners who transformed their Marketing careers with our mentorship.
                            </p>
                        </div>

                        <div className="dgm-gdc-testi-grid-right">
                            <div
                                className="dgm-gdc-testi-card-top"
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)" }}
                            >
                                <div className="dgm-gdc-testi-card-overlay">
                                    <div className="dgm-gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[0]?.text}"</p>
                                        <div className="dgm-gdc-testi-author">
                                            <img src={activeTestimonials[0]?.avatar} alt={activeTestimonials[0]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[0]?.name}</h4>
                                                <p>{activeTestimonials[0]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dgm-gdc-testi-squares-row">
                                <div className="dgm-gdc-testi-card-bottom-left">
                                    <div className="dgm-gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[1]?.text}"</p>
                                        <div className="dgm-gdc-testi-author">
                                            <img src={activeTestimonials[1]?.avatar} alt={activeTestimonials[1]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[1]?.name}</h4>
                                                <p>{activeTestimonials[1]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dgm-gdc-testi-card-bottom-right">
                                    <div className="dgm-gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[2]?.text}"</p>
                                        <div className="dgm-gdc-testi-author">
                                            <img src={activeTestimonials[2]?.avatar} alt={activeTestimonials[2]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[2]?.name}</h4>
                                                <p>{activeTestimonials[2]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enroll Now Section (V2 Expansion) */}
            <section className="dgm-gdc-dark-enrollment-FIXED" ref={formSectionRef}>
                <div className="dgm-gdc-container">
                    <div className="dgm-gdc-floating-icons-v2">
                        {floatingIcons.map((icon, index) => (
                            <div
                                key={index}
                                className="dgm-gdc-v2-float-icon"
                                style={{
                                    animationDelay: `${index * 0.5}s`,
                                    left: `${(index * 12.5) % 100}%`,
                                    top: `${20 + (index * 10) % 60}%`
                                }}
                            >
                                {icon}
                            </div>
                        ))}
                    </div>

                    <section className="dgm-gdc-v3-community-banner">
                        <div className="dgm-gdc-banner-grid-overlay"></div>
                        <div className="dgm-gdc-banner-decor-sparkle sp-1">✦</div>
                        <div className="dgm-gdc-banner-decor-sparkle sp-2">✦</div>
                        <div className="dgm-gdc-banner-decor-sparkle sp-3">✦</div>
                        <div className="dgm-gdc-banner-decor-circle cir-1"></div>
                        <div className="dgm-gdc-banner-decor-circle cir-2"></div>

                        <div className="dgm-gdc-banner-container">
                            <div className="dgm-gdc-banner-content">
                                <h2 className="dgm-gdc-banner-title">
                                    Start Your Marketing <br /> Journey Today
                                </h2>

                                <div className="dgm-gdc-banner-ratings">
                                    <div className="dgm-gdc-rating-box">
                                        <div className="dgm-gdc-stars">★★★★★</div>
                                        <div className="dgm-gdc-rating-text">4.9 / 5 rating</div>
                                        <div className="dgm-gdc-rating-source">Coursezilla</div>
                                    </div>
                                    <div className="dgm-gdc-rating-box">
                                        <div className="dgm-gdc-stars">★★★★★</div>
                                        <div className="dgm-gdc-rating-text">4.8 / 5 rating</div>
                                        <div className="dgm-gdc-rating-source">Globalskills</div>
                                    </div>
                                </div>
                            </div>

                            <div className="dgm-gdc-ray dgm-gdc-ray-left-top">
                                <div className="dgm-gdc-ray-trail"></div>
                                <div className="dgm-gdc-ray-box">
                                    <div className="dgm-gdc-ray-icon icon-email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="dgm-gdc-ray-content">
                                        <h4>Email Support</h4>
                                        <p>hello@engloraylearn.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dgm-gdc-ray dgm-gdc-ray-left-bottom">
                                <div className="dgm-gdc-ray-trail"></div>
                                <div className="dgm-gdc-ray-box">
                                    <div className="dgm-gdc-ray-icon icon-whatsapp">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </div>
                                    <div className="dgm-gdc-ray-content">
                                        <h4>WHATSAPP</h4>
                                        <p>+91 63681 75990</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dgm-gdc-ray dgm-gdc-ray-right-top">
                                <div className="dgm-gdc-ray-trail"></div>
                                <div className="dgm-gdc-ray-box">
                                    <div className="dgm-gdc-ray-icon icon-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="dgm-gdc-ray-content">
                                        <h4>Learning Center</h4>
                                        <p>Madurai, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dgm-gdc-ray dgm-gdc-ray-right-bottom">
                                <div className="dgm-gdc-ray-trail"></div>
                                <div className="dgm-gdc-ray-box">
                                    <div className="dgm-gdc-ray-icon icon-chat">
                                        <FontAwesomeIcon icon={faComments} />
                                    </div>
                                    <div className="dgm-gdc-ray-content">
                                        <h4>Quick Chat</h4>
                                        <p>Live Chat Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Single Black Container with Left Content and Right Form */}
                    <div className="dgm-single-enroll-container">
                        {/* Left Side - Content */}
                        <div className="dgm-enroll-left-content">
                            <h3 className="dgm-enroll-title">Start Your Journey</h3>
                            <p className="dgm-enroll-subtitle">join a focused learning experience designed to help you master practical skills, build a standout portfolio, and launch your journey as a Performance Marketer </p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="dgm-enroll-right-form">
                            <div className="dgm-enroll-form-wrapper">
                                <h4 className="dgm-enroll-form-title">Enrollment Form</h4>
                                <form onSubmit={handleSubmit} className="dgm-enroll-form">
                                    <div className="dgm-enroll-form-grid">
                                        <div className="dgm-enroll-form-group">
                                            <label>Full Name *</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        <div className="dgm-enroll-form-group">
                                            <label>Email ID *</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your email"
                                            />
                                        </div>

                                        <div className="dgm-enroll-form-group">
                                            <label>Phone Number *</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        <div className="dgm-enroll-form-group">
                                            <label>Select Course *</label>
                                            <select
                                                name="course"
                                                value={formData.course}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="Digital Marketing">Digital Marketing</option>
                                                <option value="Graphic Design">Graphic Design</option>
                                                <option value="Ui/Ux Design">Ui/Ux Design</option>
                                                <option value="Java Full Stack">Java Full Stack</option>
                                                <option value="Drawing">Drawing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="dgm-enroll-submit-btn">
                                        Complete Enrollment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showSuccess && (
                <div className="dgm-gdc-toast">
                    <div className="dgm-gdc-toast-content">
                        <div className="dgm-gdc-toast-icon">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="dgm-gdc-toast-message">
                            <h4>Enrollment Successful!</h4>
                            <p>Welcome to UI/UX Design Mastery! Our team will contact you within 24 hours.</p>
                        </div>
                    </div>
                </div>
            )}
            <SubFooterTwo />
            <BackToTop />
        </div>
    );
};

export default DigitaMarketingCourse;