import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
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
import "./DrawingCourse.css";

import demoVideoFile from "../../../assets/Final GD Course video.mp4";
import videoThumbnail from "../../../assets/DemoThumbnail.png";
import uiuxCertificate from "../../../assets/drawing.png";

import avatarF1 from "../../../assets/t1.png";
import avatarM1 from "../../../assets/t2.png";
import avatarF2 from "../../../assets/t3.png";

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

const DrawingCourse = () => {
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
        course: "UI/UX Design Mastery"
    });

    // Hero Images from user upload
    //const uiuxHero1 = require('../../../assets/dwc1.jpeg');
    //const uiuxHero2 = require('../../../assets/dwc2.jpeg');
    //const uiuxHero3 = require('../../../assets/dwc3.jpeg');
    //const uiuxHero4 = require('../../../assets/dwc4.jpeg');
    //const uiuxHero5 = require('../../../assets/dwc5.jpeg');

    // New UI/UX-themed hero gallery images (do not reuse GD assets)
    const uiuxHeroAssets = {
        //a1: uiuxHero1,
        //a2: uiuxHero2,
        //a3: uiuxHero3,
        //a4: uiuxHero4,
        //a5: uiuxHero5
    };

    const allTestimonials = [
        {
            name: "Suresh P",
            role: "Digital Marketing Executive",
            text: "Gained confidence working on real product flows. What felt complex before is now structured and clear—from research to wireframes to high-fidelity prototypes and developer handoff.",
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
            avatar: avatarM1
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
            avatar: avatarM1
        },
        {
            name: "Sneha T",
            role: "Performance Marketer",
            text: "Learning design systems and components changed everything. I can now build consistent UI, maintain scalability, and deliver pixel-perfect screens with fast iteration cycles.",
            avatar: avatarF1
        },
        {
            name: "Rohan D",
            role: "Digital Marketing Executive",
            text: "The focus on real product case studies helped me create a strong portfolio. The project reviews made my work polished and ready for interviews with top product companies.",
            avatar: avatarM1
        },
        {
            name: "Kavya J",
            role: "Performance Marketer",
            text: "I finally understand how to run interviews, synthesize insights, and turn research into meaningful design decisions. The frameworks and practice sessions were incredibly useful.",
            avatar: avatarF1
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
            title: "Introduction to Drawing",
            icon: <FontAwesomeIcon icon={faBullseye} />,
            points: ["Introduction to tools", "Basic hand  practice", "Line practice"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Basic Shapes",
            icon: <FontAwesomeIcon icon={faRulerCombined} />,
            points: ["Drawing basic shapes", "Shape drawing", "Object drawing shapes"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Nature Drawing",
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            points: ["Tree drawing", "Mountain & River scenery", "Landscape drawing"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Advanced Setching Techniques",
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            points: ["Advanced pencil control", "Line weight & line quality", "Quick Sketch practice"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Still life Drawing",
            icon: <FontAwesomeIcon icon={faLaptopCode} />,
            points: ["Drawing real objects", "Composition techniques", "Proportion and balance"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        },
        {
            title: "Light and Shadow",
            icon: <FontAwesomeIcon icon={faRocket} />,
            points: ["Understanding light source", "Creating depth & contrast", "Shading methods"],
            bgColor: "rgba(61, 82, 217, 0.12)",
            iconColor: "#3D52D9"
        }
    ];

    const courseOutcomes = [
        {
            icon: <FontAwesomeIcon icon={faBullseye} />,
            title: "Drawing Fundamentals",
            desc: "Learn the basics of sketching, line control, and shapes. Understand proportions, hand movement, and how to build a strong foundation for all types of drawing."
        },
        {
            icon: <FontAwesomeIcon icon={faRulerCombined} />,
            title: "Shading & Light Mastery",
            desc: "Master light, shadow, and depth using different shading techniques. Learn how to create realistic forms, textures, and volume in your drawings."
        },
        {
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            title: "Perspective & Composition",
            desc: "Understand 1-point, 2-point, and 3-point perspective. Learn how to compose scenes, balance elements, and create visually appealing artwork."
        },
        {
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            title: "Human Anatomy & Portraits",
            desc: "Master keyword research, on-page SEO, and technical optimization. Learn how to improve search rankings, drive organic traffic, and create content that attracts and converts users."
        },
        {
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            title: "Creative Illustration & Style",
            desc: "Explore character design, creative sketching, and personal art styles. Learn how to express ideas visually and develop a unique artistic identity."
        },
        {
            icon: <FontAwesomeIcon icon={faStar} />,
            title: "Advanced Artwork & Portfolio",
            desc: "Create detailed artworks and final pieces for your portfolio. Learn presentation techniques, finishing touches, and how to showcase your work professionally."
        }
    ];

    // New UI/UX-themed curriculum backgrounds (do not reuse GD assets)
    const sixMonthCurriculum = [
        {
            month: "Month 1",
            title: "Coloring Techniques",
            topics: [
                "Crayon coloring",
                "Pencil Shading basics",
                "Color combination",
                "Light and dark practice",
                "coloring"
            ],
            projects: "5 Projects",
            icon: <FontAwesomeIcon icon={faBook} />,
            bgImage: "https://images.unsplash.com/photo-1560421683-6856ea585c78?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFydCUyMGNsYXNzfGVufDB8fDB8fHww"
        },
        {
            month: "Month 2",
            title: "Creative Drawing",
            topics: [
                "Imagination drawing",
                "Simple story drawing",
                "3D object Shading",
                "Complete scenery drawing",
                "Student Portfolio preparation"
            ],
            projects: "15 Projects",
            icon: <FontAwesomeIcon icon={faChartLine} />,
            bgImage: "https://media.gettyimages.com/id/1903747144/photo/group-of-diversity-school-children-learning-acrylic-art-together-in-art-class.jpg?s=612x612&w=gi&k=20&c=HB3qMK88rJzlv9C_e5gQGB1gLaOOTRrQWPbkau5ZaiU="
        },
        {
            month: "Month 3",
            title: "Advanced Coloring Techniques",
            topics: [
                "Color pencil shading",
                "Story illustration",
                "Theme based drawing ",
                "realistic animal sketch",
                "Birds wings & feathers"
            ],
            projects: "20 Projects",
            icon: <FontAwesomeIcon icon={faSearch} />,
            bgImage: "https://images.squarespace-cdn.com/content/v1/66271484b6fb225bf83036a5/b8ff9480-6475-4428-9182-ad8d4b8b0d9f/IMG_4974.jpg"
        },
        {
            month: "Month 4",
            title: "Advanced & Final project",
            topics: [
                "Realistic drawing project",
                "creative artwork",
                "Advanced water colors",
                "color Harmony",
                "Advanced Portfolio preparation"
            ],
            projects: "7 Projects",
            icon: <FontAwesomeIcon icon={faBriefcase} />,
            bgImage: "https://cdn.vectorstock.com/i/500p/43/08/children-drawing-and-art-class-vector-23494308.jpg"
        }
    ];

    const toolsV2Data = [
        [
            {
                name: "ChatGPT",
                icon: <FontAwesomeIcon icon={faComments} />,
                desc: "Advanced conversational AI.",
                img: chatgptAiLogo
            },
            {
                name: "Gemini",
                icon: <FontAwesomeIcon icon={faGlobe} />,
                desc: "Intelligent multimodal assistance.",
                img: geminiAiLogo
            },
            {
                name: "Notion AI",
                icon: <FontAwesomeIcon icon={faPencilAlt} />,
                desc: "Smart workspace workflows.",
                img: notionAiLogo
            },
            {
                name: "Jasper AI",
                icon: <FontAwesomeIcon icon={faRocket} />,
                desc: "Executive AI copy and concepts.",
                img: jasperAiLogo
            }
        ],
        [
            {
                name: "Khroma",
                icon: <FontAwesomeIcon icon={faMagic} />,
                desc: "Visual generation for UI.",
                bg: "linear-gradient(135deg, #8B5CF6 0%, #D946EF 100%)"
            },
            {
                name: "Colors AI",
                icon: <FontAwesomeIcon icon={faRocket} />,
                desc: "Concepts and mood.",
                bg: "linear-gradient(135deg, #FEF08A 0%, #3BC9F1 100%)"
            },
            {
                name: "Fontjoy",
                icon: <FontAwesomeIcon icon={faLightbulb} />,
                desc: "Idea visuals.",
                bg: "linear-gradient(135deg, #312E81 0%, #9D174D 100%)"
            },
            {
                name: "Stark",
                icon: <FontAwesomeIcon icon={faBullseye} />,
                desc: "Accessibility and UI checks.",
                bg: "linear-gradient(135deg, #2563EB 0%, #0891B2 100%)"
            }
        ],
        [
            {
                name: "Maze",
                icon: <FontAwesomeIcon icon={faFlask} />,
                desc: "Rapid testing and data.",
                bg: "linear-gradient(135deg, #FACC15 0%, #F97316 100%)"
            },
            {
                name: "Hotjar",
                icon: <FontAwesomeIcon icon={faCheckCircle} />,
                desc: "Heatmaps and user behavior.",
                bg: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)"
            },
            {
                name: "UserTesting",
                icon: <FontAwesomeIcon icon={faUser} />,
                desc: "Real-time user feedback.",
                bg: "linear-gradient(135deg, #10B981 0%, #047857 100%)"
            },
            {
                name: "UX Tweak",
                icon: <FontAwesomeIcon icon={faSyncAlt} />,
                desc: "Uncovering user insights.",
                bg: "linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)"
            }
        ],
        [
            {
                name: "Adobe Firefly",
                icon: <FontAwesomeIcon icon={faPaintBrush} />,
                desc: "Advanced UI and Prototyping.",
                bg: "linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)"
            },
            {
                name: "Mockup AI",
                icon: <FontAwesomeIcon icon={faLaptopCode} />,
                desc: "No-code website development.",
                bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)"
            },
            {
                name: "Spline AI",
                icon: <FontAwesomeIcon icon={faRocket} />,
                desc: "Interactive 3D web experiences.",
                bg: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)"
            },
            {
                name: "Lume AI",
                icon: <FontAwesomeIcon icon={faMagic} />,
                desc: "Lightweight UI animations.",
                bg: "linear-gradient(135deg, #06B6D4 0%, #0369A1 100%)"
            }
        ]
    ];

    const benefits = [
        { icon: <FontAwesomeIcon icon={faGraduationCap} />, title: "Live Interactive Training", description: "Real-time classes with product designers and immediate doubt resolution for faster learning." },
        { icon: <FontAwesomeIcon icon={faHandshake} />, title: "1:1 Mentorship", description: "Personal guidance from mentors with 10+ years experience in UI/UX and product design." },
        { icon: <FontAwesomeIcon icon={faBriefcase} />, title: "100% Placement Assistance", description: "Career support with portfolio reviews, mock interviews, and referrals to hiring partners." },
        { icon: <FontAwesomeIcon icon={faTrophy} />, title: "Global Certification", description: "Internationally recognized certification to validate your UI/UX skills globally." },
        { icon: <FontAwesomeIcon icon={faClock} />, title: "Lifetime Course Access", description: "All course materials, updates, and recordings available forever for continuous growth." },
        { icon: <FontAwesomeIcon icon={faComments} />, title: "Community Access", description: "Network with 5000+ designers and participate in design challenges and peer reviews." },
        { icon: <FontAwesomeIcon icon={faLaptopCode} />, title: "Tool Mastery", description: "Hands-on practice with modern tools and workflows used by product teams worldwide." },
        { icon: <FontAwesomeIcon icon={faBullseye} />, title: "Project-Based Learning", description: "Build real case studies and portfolio projects that stand out in UI/UX interviews." },
        { icon: <FontAwesomeIcon icon={faFlask} />, title: "Usability Testing", description: "Learn to test prototypes, gather insights, and iterate confidently with real feedback." },
        { icon: <FontAwesomeIcon icon={faRocket} />, title: "Career Coaching", description: "Interview prep and storytelling guidance to land your first UI/UX role faster." }
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
        title: "Professional UI/UX Certification",
        description: "Globally recognized certificate accredited by International Design Council",
        features: ["✅ Digital & Physical Copy", "✅ Lifetime Validity", "✅ Online Verification", "✅ International Recognition", "✅ QR Code Authentication", "✅ Accredited by Design Council"],
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
        <div className="gdc-page">
            {/* Hero Section Upgrade - Minimalist Premium Design */}
            <header className="gdc-hero-v3">
                <div className="gdc-v3-sparkle-wrapper">
                    <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-1">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-2">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-md sparkle-pos-3">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-4">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-5">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-md sparkle-pos-6">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-7">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-8">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                </div>

                <div className="gdc-v3-container">
                    <div className="gdc-v3-header-content">
                        <h1 className="gdc-v3-main-title">
                            Advanced <span className="gdc-v3-arrow-capsule-straight">→</span> Drawing <br /> Mastery Program
                        </h1>

                        <p className="gdc-v3-subtitle-original">
                            Master sketching, shading, perspective & composition <br />
                            to create expressive artworks and build a strong creative foundation.
                        </p>

                        <div className="gdc-v3-sub-row">
                            <div className="gdc-v3-members-info">
                                <p>With more than</p>
                                <h3>2K+ ARTISTS</h3>
                                <h3>500+ DRAWING LESSONS</h3>
                            </div>

                            <button className="gdc-v3-join-btn" onClick={scrollToForm}>
                                Join us <span className="gdc-v3-join-arrow">↗</span>
                            </button>
                        </div>
                    </div>

                    <div className="gdc-v3-asset-gallery">
                        <div className="gdc-v3-card gdc-card-blue">
                            <img src={uiuxHeroAssets.a1} alt="UIUX Asset 1" className="gdc-v3-card-img" />
                        </div>
                        <div className="gdc-v3-card gdc-card-dark">
                            <img src={uiuxHeroAssets.a2} alt="UIUX Asset 2" className="gdc-v3-card-img" />
                        </div>
                        <div className="gdc-v3-card gdc-card-center-featured">
                            <img src={uiuxHeroAssets.a3} alt="UIUX Asset 3" className="gdc-v3-card-img" />
                        </div>
                        <div className="gdc-v3-card gdc-card-dark">
                            <img src={uiuxHeroAssets.a4} alt="UIUX Asset 4" className="gdc-v3-card-img" />
                        </div>
                        <div className="gdc-v3-card gdc-card-blue">
                            <img src={uiuxHeroAssets.a5} alt="UIUX Asset 5" className="gdc-v3-card-img" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Marquee Section bridging Hero and Intro */}
            <div className="gdc-v2-marquee-container">
                <div className="gdc-v2-marquee">
                    <span>
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        LINE ART <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        SHADING TECHNIQUES <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        PERSPECTIVE DRAWING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        HUMAN ANATOMY <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        PORTRAIT DRAWING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        LIGHT & SHADOW <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        COMPOSITION <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        CHARACTER DESIGN <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        CREATIVE SKETCHING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
                        SHADING TECHNIQUES
                    </span>
                </div>
            </div>

            {/* New Intro Section - Re-designed to 2-column layout */}
            <section className="gdc-intro-section">
                <div className="gdc-container">
                    <div className="gdc-intro-layout">
                        <div className="gdc-intro-left">
                            <h2 className="gdc-intro-title">
                                Master Advanced <br /> Drawing in 6 Months
                            </h2>
                            <p className="gdc-intro-desc">
                                The Advanced Drawing Classes are designed for students who have Mastered the basics and are ready to develop professional-Skill level
                            </p>
                            <button className="gdc-intro-cta" onClick={scrollToForm}>
                                Contact
                            </button>
                        </div>

                        <div className="gdc-intro-right">
                            <div className="gdc-intro-grid">
                                {introCategories.map((cat, i) => (
                                    <div key={i} className="gdc-intro-category-box">
                                        <div className="gdc-intro-card-icon" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                                            {cat.icon}
                                        </div>
                                        <div className="gdc-intro-card-content">
                                            <h3 className="gdc-intro-card-title">{cat.title}</h3>
                                            <div className="gdc-intro-card-points">
                                                {cat.points.map((point, idx) => (
                                                    <div key={idx} className="gdc-intro-point">
                                                        <FontAwesomeIcon icon={faStar} className="gdc-intro-point-star" />
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
                                What you'll achieve after completing this program. Master workflows, build case studies, and transform into an industry-ready Drawing Skills.
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
                                    className={`dgm-outcome-numbered-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                                >
                                    <div className="dgm-outcome-card-content-wrapper">
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
            <section className="gdc-curriculum-v2-section">
                <div className="gdc-container">
                    <div className="gdc-curriculum-v2-layout">
                        <div className="gdc-curriculum-v2-left">
                            <span className="gdc-curriculum-v2-tag">PRO COURSE</span>
                            <h2 className="gdc-curriculum-v2-title">
                                4-Month Course <br /> Breakdown
                            </h2>
                            <p className="gdc-curriculum-v2-desc">
                                A structured digital marketing journey built for real-world success.
                                Master performance marketing, SEO, content strategy, and analytics to create high-impact campaigns in 6 intensive months.
                            </p>

                            <div className="gdc-curriculum-v2-stats">
                                <div className="gdc-stat-item">
                                    <span className="gdc-stat-num">50+</span>
                                    <span className="gdc-stat-label">Real Campaigns</span>
                                </div>
                                <div className="gdc-stat-item">
                                    <span className="gdc-stat-num">100%</span>
                                    <span className="gdc-stat-label">Practical</span>
                                </div>
                            </div>
                        </div>

                        <div className="gdc-curriculum-v2-right">
                            <div className="gdc-curriculum-nav-v2">
                                <button className="gdc-nav-btn-v2" onClick={prevModule}>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                                <button className="gdc-nav-btn-v2" onClick={nextModule}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </div>

                            <div className="gdc-slider-v5-container">
                                {sixMonthCurriculum.map((module, index) => {
                                    const isActive = index === currentModuleIndex;
                                    const isNext = index === (currentModuleIndex + 1) % sixMonthCurriculum.length;
                                    const isPrev = index === (currentModuleIndex - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length;

                                    let cardState = "hidden";
                                    if (isActive) cardState = "active";
                                    else if (isPrev) cardState = "top";
                                    else if (isNext) cardState = "bottom";

                                    return (
                                        <div key={index} className={`gdc-curriculum-v5-card ${cardState}`}>
                                            <div className="gdc-curriculum-v5-inner">
                                                <div className="gdc-curriculum-v5-bg">
                                                    <img src={module.bgImage} alt={module.title} className="gdc-curriculum-v5-img" />
                                                    <div className="gdc-curriculum-v5-overlay"></div>
                                                </div>

                                                <div className="gdc-curriculum-v5-content">
                                                    <div className="gdc-curriculum-v5-header">
                                                        <span className="gdc-curriculum-v5-month">{module.month}</span>
                                                        <span className="gdc-curriculum-v5-proj">Projects: {module.projects}</span>
                                                    </div>
                                                    <h3 className="gdc-curriculum-v5-title">{module.title}</h3>
                                                    <div className="gdc-curriculum-v5-topics">
                                                        {module.topics.map((topic, tidx) => (
                                                            <div key={tidx} className="gdc-curriculum-v5-topic">
                                                                <FontAwesomeIcon icon={faCheck} className="gdc-curriculum-v5-check" /> {topic}
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
            <section className="gdc-tools-v2">
                <div className="gdc-container">
                    <div className="gdc-tools-v2-header">
                        <h2 className="gdc-tools-v2-title"> AI Tools & Resources</h2>
                        <p className="gdc-tools-v2-subtitle">Master the industry's most powerful Digital Marketing workflow</p>
                    </div>

                    <div className="gdc-tools-v2-layout">
                        <div className="gdc-tools-sidebar">
                            {["Ideas & UX", "AI Generative", "Validation", "Pro Workflow"].map((label, idx) => (
                                <button key={idx} className={`gdc-tool-tab ${activeToolCategory === idx ? "active" : ""}`} onClick={() => setActiveToolCategory(idx)}>
                                    <span className="tab-number">0{idx + 1}</span>
                                    <span className="tab-label">{label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="gdc-tools-main-display">
                            <div className="gdc-pods-container" key={activeToolCategory}>
                                {toolsV2Data[activeToolCategory].map((tool, index) => (
                                    <div key={index} className={`gdc-tool-pod pod-${index + 1}`}>
                                        <div className="gdc-pod-inner">
                                            <div className="gdc-pod-bg-image" style={{ background: tool.bg ? tool.bg : `url(${tool.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                            <div className="gdc-pod-content">{activeToolCategory !== 0 ? <h4 className="gdc-pod-name">{tool.name}</h4> : null}</div>
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
                                        <p>{benefit.description.substring(0, 70)}...</p>
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
                                        <p>{benefit.description.substring(0, 70)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 3: 2 Original Cards */}
                        <div className="dgm-benefits-row dgm-row-2">
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
                                        <p>{benefit.description.substring(0, 70)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Cards - Positioned Independently */}
                    {/* Left Bottom Floating Card */}
                    <div className="dgm-floating-benefit-card dgm-floating-card-left">
                        <div className="dgm-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="dgm-new-content">
                            <h3>Industry Recognition</h3>
                            <p>Get certified with globally recognized credentials that validate your expertise and boost your career prospects worldwide...</p>
                        </div>
                    </div>

                    {/* Right Bottom Floating Card */}
                    <div className="dgm-floating-benefit-card dgm-floating-card-right">
                        <div className="dgm-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="dgm-new-content">
                            <h3>Lifetime Updates</h3>
                            <p>Stay ahead with free lifetime access to all future course updates, new modules, and industry-relevant content additions...</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Section with Simplified Lock Overlay */}
            <section className="gdc-section gdc-dark-bg">
                <div className="gdc-container">
                    <h2 className="gdc-section-title">Professional Certification</h2>
                    <p className="gdc-section-subtitle">Earn a globally recognized certificate upon completion</p>

                    <div className="gdc-certificate-single">
                        <div className="gdc-certificate-image-wrapper">
                            <img
                                src={certificate.image}
                                alt="UI/UX Design Mastery Certificate"
                                className="gdc-certificate-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80";
                                }}
                            />

                            <div className="gdc-certificate-lock-overlay">
                                <div className="gdc-lock-icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className="gdc-lock-text">Certificate Locked</div>
                            </div>

                            <div className="gdc-certificate-overlay">
                                <span className="gdc-certificate-badge">Your Professional Certificate Template</span>
                            </div>
                            <div className="gdc-certificate-download-note">
                                <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
                            </div>
                        </div>

                        <div className="gdc-certificate-info-single">
                            <h3 className="gdc-certificate-title-single">{certificate.title}</h3>
                            <p className="gdc-certificate-desc-single">{certificate.description}</p>

                            <div className="gdc-certificate-features-single">
                                {certificate.features.map((feature, index) => (
                                    <div key={index} className="gdc-certificate-feature-item-single">
                                        <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace("✅ ", "")}
                                    </div>
                                ))}
                            </div>

                            <div className="gdc-certificate-benefits">
                                <div className="gdc-benefit">
                                    <span className="gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <span className="gdc-benefit-text">Enhances your professional credibility</span>
                                </div>
                                <div className="gdc-benefit">
                                    <span className="gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <span className="gdc-benefit-text">Increases job opportunities by 75%</span>
                                </div>
                                <div className="gdc-benefit">
                                    <span className="gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <span className="gdc-benefit-text">Globally recognized by employers</span>
                                </div>
                                <div className="gdc-benefit">
                                    <span className="gdc-benefit-icon">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                    <span className="gdc-benefit-text">QR code verification for authenticity</span>
                                </div>
                            </div>

                            <div className="gdc-certificate-instructions">
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
            <section className="gdc-testi-grid-section">
                <div className="gdc-container">
                    <div className="gdc-testi-grid-wrapper">
                        <div className="gdc-testi-grid-left">
                            <h2 className="gdc-testi-main-title">Experience Learning Like Never Before</h2>
                            <p className="gdc-testi-subtitle">
                                Discover personalized, practical learning that prepares you for real product teams. Read stories from learners who transformed their Marketing careers with our mentorship.
                            </p>
                        </div>

                        <div className="gdc-testi-grid-right">
                            <div
                                className="gdc-testi-card-top"
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)" }}
                            >
                                <div className="gdc-testi-card-overlay">
                                    <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[0]?.text}"</p>
                                        <div className="gdc-testi-author">
                                            <img src={activeTestimonials[0]?.avatar} alt={activeTestimonials[0]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[0]?.name}</h4>
                                                <p>{activeTestimonials[0]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="gdc-testi-squares-row">
                                <div className="gdc-testi-card-bottom-left">
                                    <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[1]?.text}"</p>
                                        <div className="gdc-testi-author">
                                            <img src={activeTestimonials[1]?.avatar} alt={activeTestimonials[1]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[1]?.name}</h4>
                                                <p>{activeTestimonials[1]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="gdc-testi-card-bottom-right">
                                    <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[2]?.text}"</p>
                                        <div className="gdc-testi-author">
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
            <section className="gdc-dark-enrollment-FIXED" ref={formSectionRef}>
                <div className="gdc-container">
                    <div className="gdc-floating-icons-v2">
                        {floatingIcons.map((icon, index) => (
                            <div
                                key={index}
                                className="gdc-v2-float-icon"
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

                    <section className="gdc-v3-community-banner">
                        <div className="gdc-banner-grid-overlay"></div>
                        <div className="gdc-banner-decor-sparkle sp-1">✦</div>
                        <div className="gdc-banner-decor-sparkle sp-2">✦</div>
                        <div className="gdc-banner-decor-sparkle sp-3">✦</div>
                        <div className="gdc-banner-decor-circle cir-1"></div>
                        <div className="gdc-banner-decor-circle cir-2"></div>

                        <div className="gdc-banner-container">
                            <div className="gdc-banner-content">
                                <h2 className="gdc-banner-title">
                                    Start Your Marketing <br /> Journey Today
                                </h2>

                                <div className="gdc-banner-ratings">
                                    <div className="gdc-rating-box">
                                        <div className="gdc-stars">★★★★★</div>
                                        <div className="gdc-rating-text">4.9 / 5 rating</div>
                                        <div className="gdc-rating-source">Coursezilla</div>
                                    </div>
                                    <div className="gdc-rating-box">
                                        <div className="gdc-stars">★★★★★</div>
                                        <div className="gdc-rating-text">4.8 / 5 rating</div>
                                        <div className="gdc-rating-source">Globalskills</div>
                                    </div>
                                </div>
                            </div>

                            <div className="gdc-ray gdc-ray-left-top">
                                <div className="gdc-ray-trail"></div>
                                <div className="gdc-ray-box">
                                    <div className="gdc-ray-icon icon-email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="gdc-ray-content">
                                        <h4>Email Support</h4>
                                        <p>hello@engloraylearn.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gdc-ray gdc-ray-left-bottom">
                                <div className="gdc-ray-trail"></div>
                                <div className="gdc-ray-box">
                                    <div className="gdc-ray-icon icon-whatsapp">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </div>
                                    <div className="gdc-ray-content">
                                        <h4>WHATSAPP</h4>
                                        <p>+91 63681 75990</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gdc-ray gdc-ray-right-top">
                                <div className="gdc-ray-trail"></div>
                                <div className="gdc-ray-box">
                                    <div className="gdc-ray-icon icon-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="gdc-ray-content">
                                        <h4>Learning Center</h4>
                                        <p>Madurai, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="gdc-ray gdc-ray-right-bottom">
                                <div className="gdc-ray-trail"></div>
                                <div className="gdc-ray-box">
                                    <div className="gdc-ray-icon icon-chat">
                                        <FontAwesomeIcon icon={faComments} />
                                    </div>
                                    <div className="gdc-ray-content">
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
                            <p className="dgm-enroll-subtitle">join a focused learning experience designed to help you master practical skills, build a standout portfolio, and launch your journey as a professional Artist</p>
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
                                                <option value="UI/UX Design Mastery">UI/UX Design Mastery</option>
                                                <option value="UX Research & Strategy">UX Research & Strategy</option>
                                                <option value="Design Systems & UI">Design Systems & UI</option>
                                                <option value="Mobile App UI/UX">Mobile App UI/UX</option>
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
                <div className="gdc-toast">
                    <div className="gdc-toast-content">
                        <div className="gdc-toast-icon">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="gdc-toast-message">
                            <h4>Enrollment Successful!</h4>
                            <p>Welcome to UI/UX Design Mastery! Our team will contact you within 24 hours.</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DrawingCourse;