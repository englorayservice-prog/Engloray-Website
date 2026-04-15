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
        course: "Drawing"
    });

    // Hero Images from user upload
    const uiuxHero1 = require('../../../assets/10 Easy Paper Crafts for Kids - ALESTER LOJIC.jfif');
    const uiuxHero2 = require('../../../assets/Cartoon boy with paintbrush and palette.jfif');
    const uiuxHero3 = require('../../../assets/Creative Art Activities for Grade 1 and 2 - Educators Technology.jfif');
    const uiuxHero4 = require('../../../assets/download.jfif');
    const uiuxHero5 = require('../../../assets/Personal Touch_ DIY Cards for Grandparents Day.jfif');

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
            { name: "Wax Crayons", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Bright colors for fun drawing.", bg: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)" },
            { name: "Oil Pastels", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Smooth blending and rich colors.", bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
            { name: "Color Pencils", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Great for detailed sketches.", bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" },
            { name: "Blending Stumps", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Perfect shading and blending.", bg: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)" }
        ],
        [
            { name: "Watercolor Cakes", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Easy to mix watercolor paints.", bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
            { name: "Paint Brushes", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Various sizes for painting.", bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
            { name: "Color Palette", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Mix new exciting colors.", bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
            { name: "Canvas Boards", icon: <FontAwesomeIcon icon={faBook} />, desc: "Sturdy boards for painting.", bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }
        ],
        [
            { name: "HB & 2B Pencils", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Basic pencils for sketching.", bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)" },
            { name: "Drawing Book", icon: <FontAwesomeIcon icon={faBook} />, desc: "Blank pages for imagination.", bg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
            { name: "Erasers & Sharpeners", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Correct mistakes easily.", bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
            { name: "Stencils", icon: <FontAwesomeIcon icon={faRulerCombined} />, desc: "Draw perfect shapes.", bg: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)" }
        ],
        [
            { name: "Craft Paper", icon: <FontAwesomeIcon icon={faBook} />, desc: "Colorful papers for crafts.", bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
            { name: "Child-safe Scissors", icon: <FontAwesomeIcon icon={faRulerCombined} />, desc: "Safe tools for paper cutting.", bg: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)" },
            { name: "Glue Sticks", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Mess-free paper gluing.", bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
            { name: "Glitter Pens", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Add sparkle to artworks.", bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" }
        ]
    ];

    const benefits = [
        { icon: <FontAwesomeIcon icon={faPaintBrush} />, title: "Live Fun Drawing Classes", description: "Real-time, interactive drawing sessions where kids follow along with expert artists step-by-step." },
        { icon: <FontAwesomeIcon icon={faUser} />, title: "Personalized Attention", description: "Individual feedback in small class sizes to help your child improve their drawing skills naturally." },
        { icon: <FontAwesomeIcon icon={faStar} />, title: "Creative Development", description: "Encourages creative thinking and imagination, helping kids build their own beautiful art collection." },
        { icon: <FontAwesomeIcon icon={faTrophy} />, title: "Achievement Certificates", description: "Fun rewards and globally recognized certificates to celebrate your child's artistic milestones." },
        { icon: <FontAwesomeIcon icon={faClock} />, title: "Lifetime Video Access", description: "Rewatch our fun drawing videos anytime, anywhere so your kids can practice at their own pace." },
        { icon: <FontAwesomeIcon icon={faComments} />, title: "Kids Art Community", description: "A safe and encouraging space for kids to share their artworks and participate in drawing challenges." },
        { icon: <FontAwesomeIcon icon={faPencilAlt} />, title: "Master Colors & Shapes", description: "Hands-on practice with crayons, pastels, and basic shapes to understand color theory easily." },
        { icon: <FontAwesomeIcon icon={faBook} />, title: "Fun Art Projects", description: "Engaging weekly themes and drawing adventures to keep kids excited and actively learning." },
        { icon: <FontAwesomeIcon icon={faMagic} />, title: "Showcase & Feedback", description: "Kids learn to proudly present their artworks and receive positive, encouraging feedback." },
        { icon: <FontAwesomeIcon icon={faRocket} />, title: "Confidence Building", description: "Careful guidance to help kids express their imagination freely, boosting their creative confidence." }
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
        title: "Professional Drawing Certification",
        description: "Globally recognized certificate accredited by International Design Council",
        features: ["✅ Fun & Interactive Drawing Sessions", "✅ Beginner Friendly Classes", "✅ Step-by-Step Easy Learning", "✅ Creative Skill Development", "✅ Color & Imagination Enhancement", "✅ Certificate of Completion"],
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
            setFormData({ name: "", email: "", phone: "", course: "Drawing" });
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
        <div className="dcp-page">
            {/* Hero Section Upgrade - Minimalist Premium Design */}
            <header className="dcp-hero-v3">
                <div className="dcp-v3-sparkle-wrapper">
                    <div className="dcp-v3-sparkle sparkle-lg sparkle-pos-1">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-sm sparkle-pos-2">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-md sparkle-pos-3">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-lg sparkle-pos-4">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-sm sparkle-pos-5">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-md sparkle-pos-6">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-lg sparkle-pos-7">
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="dcp-v3-sparkle sparkle-sm sparkle-pos-8">
                        <FontAwesomeIcon icon={faMagic} />
                    </div>
                </div>

                <div className="dcp-v3-container">
                    <div className="dcp-v3-header-content">
                        <h1 className="dcp-v3-main-title">
                            Advanced <span className="dcp-v3-arrow-capsule-straight">→</span> Drawing <br /> Mastery Program
                        </h1>

                        <p className="dcp-v3-subtitle-original">
                            Master sketching, shading, perspective & composition <br />
                            to create expressive artworks and build a strong creative foundation.
                        </p>

                        <div className="dcp-v3-sub-row">
                            <div className="dcp-v3-members-info">
                                <p>With more than</p>
                                <h3>2K+ ARTISTS</h3>
                                <h3>500+ DRAWING LESSONS</h3>
                            </div>

                            <button className="dcp-v3-join-btn" onClick={scrollToForm}>
                                Join us <span className="dcp-v3-join-arrow">↗</span>
                            </button>
                        </div>
                    </div>

                    <div className="dcp-v3-asset-gallery">
                        <div className="dcp-v3-card dcp-card-blue">
                            <img src={uiuxHeroAssets.a1} alt="UIUX Asset 1" className="dcp-v3-card-img" />
                        </div>
                        <div className="dcp-v3-card dcp-card-dark">
                            <img src={uiuxHeroAssets.a2} alt="UIUX Asset 2" className="dcp-v3-card-img" />
                        </div>
                        <div className="dcp-v3-card dcp-card-center-featured">
                            <img src={uiuxHeroAssets.a3} alt="UIUX Asset 3" className="dcp-v3-card-img" />
                        </div>
                        <div className="dcp-v3-card dcp-card-dark">
                            <img src={uiuxHeroAssets.a4} alt="UIUX Asset 4" className="dcp-v3-card-img" />
                        </div>
                        <div className="dcp-v3-card dcp-card-blue">
                            <img src={uiuxHeroAssets.a5} alt="UIUX Asset 5" className="dcp-v3-card-img" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Marquee Section bridging Hero and Intro */}
            <div className="dcp-v2-marquee-container">
                <div className="dcp-v2-marquee">
                    <span>
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        LINE ART <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SHADING TECHNIQUES <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        PERSPECTIVE DRAWING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        HUMAN ANATOMY <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        PORTRAIT DRAWING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        LIGHT & SHADOW <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        COMPOSITION <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        CHARACTER DESIGN <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        CREATIVE SKETCHING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SHADING TECHNIQUES
                    </span>
                    <span aria-hidden="true">
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        LINE ART <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SHADING TECHNIQUES <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        PERSPECTIVE DRAWING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        HUMAN ANATOMY <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        PORTRAIT DRAWING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        LIGHT & SHADOW <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        COMPOSITION <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        CHARACTER DESIGN <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        CREATIVE SKETCHING <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SKETCHING BASICS <FontAwesomeIcon icon={faStar} className="dcp-marquee-star" />
                        SHADING TECHNIQUES
                    </span>
                </div>
            </div>

            {/* New Intro Section - Re-designed to 2-column layout */}
            <section className="dcp-intro-section">
                <div className="dcp-container">
                    <div className="dcp-intro-layout">
                        <div className="dcp-intro-left">
                            <h2 className="dcp-intro-title">
                                Master Advanced <br /> Drawing in 6 Months
                            </h2>
                            <p className="dcp-intro-desc">
                                The Advanced Drawing Classes are designed for students who have Mastered the basics and are ready to develop professional-Skill level
                            </p>
                            <button className="dcp-intro-cta" onClick={scrollToForm}>
                                Contact
                            </button>
                        </div>

                        <div className="dcp-intro-right">
                            <div className="dcp-intro-grid">
                                {introCategories.map((cat, i) => (
                                    <div key={i} className="dcp-intro-category-box">
                                        <div className="dcp-intro-card-icon" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                                            {cat.icon}
                                        </div>
                                        <div className="dcp-intro-card-content">
                                            <h3 className="dcp-intro-card-title">{cat.title}</h3>
                                            <div className="dcp-intro-card-points">
                                                {cat.points.map((point, idx) => (
                                                    <div key={idx} className="dcp-intro-point">
                                                        <FontAwesomeIcon icon={faStar} className="dcp-intro-point-star" />
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
            <section className="dcp-section dcp-outcomes-numbered">
                <div className="dcp-container">
                    <div className="dcp-outcomes-header-row">
                        <div className="dcp-outcomes-title-col">
                            <h2 className="dcp-outcomes-main-title">Course Outcomes</h2>
                        </div>
                        <div className="dcp-outcomes-desc-col">
                            <p className="dcp-outcomes-top-desc text-left">
                                What you'll achieve after completing this program. Master workflows, build case studies, and transform into an industry-ready Drawing Skills.
                            </p>
                        </div>
                    </div>

                    <div className="dcp-outcomes-numbered-grid">
                        {courseOutcomes.map((outcome, index) => {
                            const isBlack = index === 1 || index === 3 || index === 5;
                            const cardNumber = (index + 1).toString().padStart(2, '0');

                            return (
                                <div
                                    key={index}
                                    className={`dcp-outcome-numbered-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                                >
                                    <div className="dcp-outcome-card-content-wrapper">
                                        {/* Left side - Number and Icon */}
                                        <div className="dcp-outcome-card-left">
                                            <div className="dcp-outcome-card-number">{cardNumber}</div>
                                            <div className="dcp-outcome-numbered-icon">{outcome.icon}</div>
                                        </div>

                                        {/* Right side - Title and Description */}
                                        <div className="dcp-outcome-card-right">
                                            <h3 className="dcp-outcome-numbered-title">{outcome.title}</h3>
                                            <p className="dcp-outcome-numbered-desc">{outcome.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 6-Month Course Breakdown - Vertical Slider Redesign */}
            <section className="dcp-curriculum-v2-section">
                <div className="dcp-container">
                    <div className="dcp-curriculum-v2-layout">
                        <div className="dcp-curriculum-v2-left">
                            <span className="dcp-curriculum-v2-tag">PRO COURSE</span>
                            <h2 className="dcp-curriculum-v2-title">
                                4-Month Course <br /> Breakdown
                            </h2>
                            <p className="dcp-curriculum-v2-desc">
                                A structured digital marketing journey built for real-world success.
                                Master performance marketing, SEO, content strategy, and analytics to create high-impact campaigns in 6 intensive months.
                            </p>

                            <div className="dcp-curriculum-v2-stats">
                                <div className="dcp-stat-item">
                                    <span className="dcp-stat-num">50+</span>
                                    <span className="dcp-stat-label">Real Campaigns</span>
                                </div>
                                <div className="dcp-stat-item">
                                    <span className="dcp-stat-num">100%</span>
                                    <span className="dcp-stat-label">Practical</span>
                                </div>
                            </div>
                        </div>

                        <div className="dcp-curriculum-v2-right">
                            <div className="dcp-curriculum-nav-v2">
                                <button className="dcp-nav-btn-v2" onClick={prevModule}>
                                    <FontAwesomeIcon icon={faChevronUp} />
                                </button>
                                <button className="dcp-nav-btn-v2" onClick={nextModule}>
                                    <FontAwesomeIcon icon={faChevronDown} />
                                </button>
                            </div>

                            <div className="dcp-slider-v5-container">
                                {sixMonthCurriculum.map((module, index) => {
                                    const isActive = index === currentModuleIndex;
                                    const isNext = index === (currentModuleIndex + 1) % sixMonthCurriculum.length;
                                    const isPrev = index === (currentModuleIndex - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length;

                                    let cardState = "hidden";
                                    if (isActive) cardState = "active";
                                    else if (isPrev) cardState = "top";
                                    else if (isNext) cardState = "bottom";

                                    return (
                                        <div key={index} className={`dcp-curriculum-v5-card ${cardState}`}>
                                            <div className="dcp-curriculum-v5-inner">
                                                <div className="dcp-curriculum-v5-bg">
                                                    <img src={module.bgImage} alt={module.title} className="dcp-curriculum-v5-img" />
                                                    <div className="dcp-curriculum-v5-overlay"></div>
                                                </div>

                                                <div className="dcp-curriculum-v5-content">
                                                    <div className="dcp-curriculum-v5-header">
                                                        <span className="dcp-curriculum-v5-month">{module.month}</span>
                                                        <span className="dcp-curriculum-v5-proj">Projects: {module.projects}</span>
                                                    </div>
                                                    <h3 className="dcp-curriculum-v5-title">{module.title}</h3>
                                                    <div className="dcp-curriculum-v5-topics">
                                                        {module.topics.map((topic, tidx) => (
                                                            <div key={tidx} className="dcp-curriculum-v5-topic">
                                                                <FontAwesomeIcon icon={faCheck} className="dcp-curriculum-v5-check" /> {topic}
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
            <section className="dcp-tools-v2">
                <div className="dcp-container">
                    <div className="dcp-tools-v2-header">
                        <h2 className="dcp-tools-v2-title"> Fun Drawing Tools & Materials</h2>
                        <p className="dcp-tools-v2-subtitle">Everything kids need to bring their vibrant imagination to life!</p>
                    </div>

                    <div className="dcp-tools-v2-layout">
                        <div className="dcp-tools-sidebar">
                            {["Crayons & Shading", "Watercolors", "Sketch Tools", "Crafting Items"].map((label, idx) => (
                                <button key={idx} className={`dcp-tool-tab ${activeToolCategory === idx ? "active" : ""}`} onClick={() => setActiveToolCategory(idx)}>
                                    <span className="tab-number">0{idx + 1}</span>
                                    <span className="tab-label">{label}</span>
                                </button>
                            ))}
                        </div>

                        <div className="dcp-tools-main-display">
                            <div className="dcp-pods-container" key={activeToolCategory}>
                                {toolsV2Data[activeToolCategory].map((tool, index) => (
                                    <div key={index} className={`dcp-tool-pod pod-${index + 1}`}>
                                        <div className="dcp-pod-inner">
                                            <div className="dcp-pod-bg-image" style={{ background: tool.bg ? tool.bg : `url(${tool.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                                            <div className="dcp-pod-content">
                                                <div className="dcp-pod-icon">{tool.icon}</div>
                                                <h4 className="dcp-pod-name">{tool.name}</h4>
                                                <p className="dcp-pod-desc">{tool.desc}</p>
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
            <section className="dcp-section dcp-benefits-reimagined">
                <div className="dcp-container">
                    <div className="dcp-benefits-header">
                        <h2 className="dcp-benefits-title">Where Features Meet For You</h2>
                    </div>

                    <div className="dcp-benefits-staggered">
                        {/* Row 1: 5 Cards */}
                        <div className="dcp-benefits-row dcp-row-5">
                            {benefits.slice(0, 5).map((benefit, index) => (
                                <div key={index} className="dcp-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 0 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dcp-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dcp-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description.substring(0, 70)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 2: 3 Cards */}
                        <div className="dcp-benefits-row dcp-row-3">
                            {benefits.slice(5, 8).map((benefit, index) => (
                                <div key={index} className="dcp-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 5 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dcp-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dcp-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description.substring(0, 70)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Row 3: 2 Original Cards */}
                        <div className="dcp-benefits-row dcp-row-2" style={{ gap: "50px" }}>
                            {benefits.slice(8, 10).map((benefit, index) => (
                                <div key={index} className="dcp-new-benefit-card">
                                    {(() => {
                                        const absoluteIndex = 8 + index;
                                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                                        return (
                                            <div className="dcp-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                                {benefit.icon}
                                            </div>
                                        );
                                    })()}
                                    <div className="dcp-new-content">
                                        <h3>{benefit.title}</h3>
                                        <p>{benefit.description.substring(0, 70)}...</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Floating Cards - Positioned Independently */}
                    {/* Left Bottom Floating Card */}
                    {/* You can manually change the left, top, bottom, and width values here to reposition or resize the card */}
                    <div
                        className="dcp-floating-benefit-card dcp-floating-card-left"
                        style={{
                            left: "calc(50% - 505px)",
                            top: "320px",
                            bottom: "0px",
                            width: "190px",
                            height: "auto",
                            justifyContent: "center",
                            padding: "18px"
                        }}
                    >
                        <div className="dcp-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <div className="dcp-new-content" >
                            <h3>Creative Milestones</h3>
                            <p>Celebrate your child's artistic journey with certificates of completion that highlight their new creative skills. Each beautiful certificate rewards their hard work and boosts their unique imagination.</p>
                        </div>
                    </div>

                    {/* Right Bottom Floating Card */}
                    <div className="dcp-floating-benefit-card dcp-floating-card-right" style={{
                        right: "calc(50% - 505px)",
                        top: "320px",
                        bottom: "0px",
                        width: "190px",
                        height: "auto",
                        justifyContent: "center",
                        padding: "18px"
                    }}>
                        <div className="dcp-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="dcp-new-content">
                            <h3>Endless Creativity</h3>
                            <p>Enjoy unlimited free access to our growing library of fun drawing lessons, keeping your little artist constantly inspired. We regularly add new exciting modules and engaging projects so they always have fresh creative challenges.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certificate Section with Simplified Lock Overlay */}
            <section className="dcp-section dcp-dark-bg">
                <div className="dcp-container">
                    <h2 className="dcp-section-title">Professional Certification</h2>
                    <p className="dcp-section-subtitle">Earn a globally recognized certificate upon completion</p>

                    <div className="dcp-certificate-single">
                        <div className="dcp-certificate-image-wrapper">
                            <img
                                src={certificate.image}
                                alt="UI/UX Design Mastery Certificate"
                                className="dcp-certificate-image"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80";
                                }}
                            />

                            <div className="dcp-certificate-lock-overlay">
                                <div className="dcp-lock-icon">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className="dcp-lock-text">Certificate Locked</div>
                            </div>

                            <div className="dcp-certificate-overlay">
                                <span className="dcp-certificate-badge">Your Professional Certificate Template</span>
                            </div>
                            <div className="dcp-certificate-download-note">
                                <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
                            </div>
                        </div>

                        <div className="dcp-certificate-info-single">
                            <h3 className="dcp-certificate-title-single">{certificate.title}</h3>
                            <p className="dcp-certificate-desc-single">{certificate.description}</p>

                            <div className="dcp-certificate-features-single">
                                {certificate.features.map((feature, index) => (
                                    <div key={index} className="dcp-certificate-feature-item-single">
                                        <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace("✅ ", "")}
                                    </div>
                                ))}
                            </div>

                            <div className="dcp-certificate-benefits">
                                <div className="dcp-benefit">
                                    <span className="dcp-benefit-icon">
                                        <FontAwesomeIcon icon={faGraduationCap} />
                                    </span>
                                    <span className="dcp-benefit-text">Builds creativity and imagination skills</span>
                                </div>

                                <div className="dcp-benefit">
                                    <span className="dcp-benefit-icon">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </span>
                                    <span className="dcp-benefit-text">Improves focus and fine motor skills</span>
                                </div>

                                <div className="dcp-benefit">
                                    <span className="dcp-benefit-icon">
                                        <FontAwesomeIcon icon={faGlobe} />
                                    </span>
                                    <span className="dcp-benefit-text">Encourages self-expression through art</span>
                                </div>

                                <div className="dcp-benefit">
                                    <span className="dcp-benefit-icon">
                                        <FontAwesomeIcon icon={faCheckCircle} />
                                    </span>
                                    <span className="dcp-benefit-text">Certificate of completion provided</span>
                                </div>
                            </div>

                            <div className="dcp-certificate-instructions dcp-cert-left">
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
            <section className="dcp-testi-grid-section">
                <div className="dcp-container">
                    <div className="dcp-testi-grid-wrapper">
                        <div className="dcp-testi-grid-left">
                            <h2 className="dcp-testi-main-title">Experience Learning Like Never Before</h2>
                            <p className="dcp-testi-subtitle">
                                Discover personalized, practical learning that prepares you for real product teams. Read stories from learners who transformed their Marketing careers with our mentorship.
                            </p>
                        </div>

                        <div className="dcp-testi-grid-right">
                            <div
                                className="dcp-testi-card-top"
                                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)" }}
                            >
                                <div className="dcp-testi-card-overlay">
                                    <div className="dcp-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[0]?.text}"</p>
                                        <div className="dcp-testi-author">
                                            <img src={activeTestimonials[0]?.avatar} alt={activeTestimonials[0]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[0]?.name}</h4>
                                                <p>{activeTestimonials[0]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="dcp-testi-squares-row">
                                <div className="dcp-testi-card-bottom-left">
                                    <div className="dcp-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[1]?.text}"</p>
                                        <div className="dcp-testi-author">
                                            <img src={activeTestimonials[1]?.avatar} alt={activeTestimonials[1]?.name} />
                                            <div>
                                                <h4>{activeTestimonials[1]?.name}</h4>
                                                <p>{activeTestimonials[1]?.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="dcp-testi-card-bottom-right">
                                    <div className="dcp-testi-quote-content fade-in-anim" key={testiSetIndex}>
                                        <p>"{activeTestimonials[2]?.text}"</p>
                                        <div className="dcp-testi-author">
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
            <section className="dcp-dark-enrollment-FIXED" ref={formSectionRef}>
                <div className="dcp-container">
                    <div className="dcp-floating-icons-v2">
                        {floatingIcons.map((icon, index) => (
                            <div
                                key={index}
                                className="dcp-v2-float-icon"
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

                    <section className="dcp-v3-community-banner">
                        <div className="dcp-banner-grid-overlay"></div>
                        <div className="dcp-banner-decor-sparkle sp-1">✦</div>
                        <div className="dcp-banner-decor-sparkle sp-2">✦</div>
                        <div className="dcp-banner-decor-sparkle sp-3">✦</div>
                        <div className="dcp-banner-decor-circle cir-1"></div>
                        <div className="dcp-banner-decor-circle cir-2"></div>

                        <div className="dcp-banner-container">
                            <div className="dcp-banner-content">
                                <h2 className="dcp-banner-title">
                                    Start Your Drawing <br /> Journey Today
                                </h2>

                                <div className="dcp-banner-ratings">
                                    <div className="dcp-rating-box">
                                        <div className="dcp-stars">★★★★★</div>
                                        <div className="dcp-rating-text">4.9 / 5 rating</div>
                                        <div className="dcp-rating-source">Happy Kids</div>
                                    </div>
                                    <div className="dcp-rating-box">
                                        <div className="dcp-stars">★★★★★</div>
                                        <div className="dcp-rating-text">4.8 / 5 rating</div>
                                        <div className="dcp-rating-source">Parents Choice</div>
                                    </div>
                                </div>
                            </div>

                            <div className="dcp-ray dcp-ray-left-top">
                                <div className="dcp-ray-trail"></div>
                                <div className="dcp-ray-box">
                                    <div className="dcp-ray-icon icon-email">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="dcp-ray-content">
                                        <h4>Email Support</h4>
                                        <p>hello@engloraylearn.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dcp-ray dcp-ray-left-bottom">
                                <div className="dcp-ray-trail"></div>
                                <div className="dcp-ray-box">
                                    <div className="dcp-ray-icon icon-whatsapp">
                                        <FontAwesomeIcon icon={faWhatsapp} />
                                    </div>
                                    <div className="dcp-ray-content">
                                        <h4>WHATSAPP</h4>
                                        <p>+91 63681 75990</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dcp-ray dcp-ray-right-top">
                                <div className="dcp-ray-trail"></div>
                                <div className="dcp-ray-box">
                                    <div className="dcp-ray-icon icon-center">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </div>
                                    <div className="dcp-ray-content">
                                        <h4>Learning Center</h4>
                                        <p>Madurai, Tamil Nadu</p>
                                    </div>
                                </div>
                            </div>

                            <div className="dcp-ray dcp-ray-right-bottom">
                                <div className="dcp-ray-trail"></div>
                                <div className="dcp-ray-box">
                                    <div className="dcp-ray-icon icon-chat">
                                        <FontAwesomeIcon icon={faComments} />
                                    </div>
                                    <div className="dcp-ray-content">
                                        <h4>Quick Chat</h4>
                                        <p>Live Chat Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Single Black Container with Left Content and Right Form */}
                    <div className="dcp-single-enroll-container">
                        {/* Left Side - Content */}
                        <div className="dcp-enroll-left-content">
                            <h3 className="dcp-enroll-title">Start Your Creative Adventure</h3>
                            <p className="dcp-enroll-subtitle">Join our fun drawing classes tailored for kids! Help your child explore their imagination, master exciting new art techniques, and build a beautiful collection of artworks they'll be proud to share.</p>
                        </div>

                        {/* Right Side - Form */}
                        <div className="dcp-enroll-right-form">
                            <div className="dcp-enroll-form-wrapper">
                                <h4 className="dcp-enroll-form-title">Enrollment Form</h4>
                                <form onSubmit={handleSubmit} className="dcp-enroll-form">
                                    <div className="dcp-enroll-form-grid">
                                        <div className="dcp-enroll-form-group">
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

                                        <div className="dcp-enroll-form-group">
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

                                        <div className="dcp-enroll-form-group">
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

                                        <div className="dcp-enroll-form-group">
                                            <label>Select Course *</label>
                                            <select
                                                name="course"
                                                value={formData.course}
                                                onChange={handleInputChange}
                                                required
                                            >
                                                <option value="Drawing">Drawing</option>
                                                <option value="Graphic Design">Graphic Design</option>
                                                <option value="Ui/Ux Design">Ui/Ux Design</option>
                                                <option value="Java Full Stack">Java Full Stack</option>
                                                <option value="Digital Marketing">Digital Marketing</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="dcp-enroll-submit-btn">
                                        Complete Enrollment
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showSuccess && (
                <div className="dcp-toast">
                    <div className="dcp-toast-content">
                        <div className="dcp-toast-icon">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                        <div className="dcp-toast-message">
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