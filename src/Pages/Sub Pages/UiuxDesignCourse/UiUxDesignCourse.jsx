import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
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
  faComments,
  faEnvelope,
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
import "./UiuxDesignCourse.css";

import demoVideoFile from "../../../assets/Final GD Course video.mp4";
import videoThumbnail from "../../../assets/DemoThumbnail.png";
import uiuxCertificate from "../../../assets/Ui-Ux.png";

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

const UiuxDesignCourse = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [testiSetIndex, setTestiSetIndex] = useState(0);
  const [activeToolCategory, setActiveToolCategory] = useState(0);

  const videoRef = useRef(null);
  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);
  const [fluidScale, setFluidScale] = useState(1);

  useEffect(() => {
    const testiInterval = setInterval(() => {
      setTestiSetIndex((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(testiInterval);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      let newScale = 1;
      if (width >= 1440) {
        newScale = width / 1440;
      } else if (width <= 768) {
        newScale = Math.max(0.8, Math.min(width / 480, 1.2));
      } else {
        newScale = Math.max(0.7, window.innerWidth / 1440);
      }
      setFluidScale(newScale);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    course: "Ui/Ux Design"
  });

  // Hero Images from user upload
  const uiuxHero1 = require('../../../assets/uiux_hero_1.png');
  const uiuxHero2 = require('../../../assets/uiux_hero_2.png');
  const uiuxHero3 = require('../../../assets/u.jpeg');
  const uiuxHero4 = require('../../../assets/uiux_hero_4.png');
  const uiuxHero5 = require('../../../assets/u2.jpeg');

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
      role: "UI/UX Designer",
      text: "Gained confidence working on real product flows. What felt complex before is now structured and clear—from research to wireframes to high-fidelity prototypes and developer handoff.",
      avatar: avatarM1
    },
    {
      name: "Priya R",
      role: "UI Designer",
      text: "The step-by-step approach made UI design feel simple. I learned spacing, typography, components, and design systems in a way that helped me build clean, professional screens fast.",
      avatar: avatarF1
    },
    {
      name: "Rahul M",
      role: "Product Designer",
      text: "The curriculum is perfectly aligned with modern product teams. I improved my UX thinking, created case studies, and learned stakeholder-ready presentations for real-world projects.",
      avatar: avatarM3
    },
    {
      name: "Anita K",
      role: "Freelancer",
      text: "I started freelancing with confidence after learning discovery, client briefs, wireframes, and prototyping. The mentorship helped me communicate design decisions with clarity and impact.",
      avatar: avatarF1
    },
    {
      name: "Vikas S",
      role: "UX Designer",
      text: "From user research to usability testing, the process finally clicked. I learned how to validate ideas, iterate quickly, and build experiences that actually solve user problems.",
      avatar: avatarM1
    },
    {
      name: "Sneha T",
      role: "UI/UX Designer",
      text: "Learning design systems and components changed everything. I can now build consistent UI, maintain scalability, and deliver pixel-perfect screens with fast iteration cycles.",
      avatar: avatarF2
    },
    {
      name: "Rohan D",
      role: "UI/UX Designer",
      text: "The focus on real product case studies helped me create a strong portfolio. The project reviews made my work polished and ready for interviews with top product companies.",
      avatar: avatarM2
    },
    {
      name: "Kavya J",
      role: "UX Researcher",
      text: "I finally understand how to run interviews, synthesize insights, and turn research into meaningful design decisions. The frameworks and practice sessions were incredibly useful.",
      avatar: avatarF3
    },
    {
      name: "Manoj V",
      role: "Interaction Designer",
      text: "The prototyping and interaction lessons made my work feel alive. I learned micro-interactions, motion intent, and how to present flows in a way developers can implement easily.",
      avatar: avatarM1
    }
  ];

  const activeTestimonials = allTestimonials.slice(testiSetIndex * 3, testiSetIndex * 3 + 3);

  const introCategories = [
    {
      title: "UX Research",
      icon: <FontAwesomeIcon icon={faBullseye} />,
      points: ["User Interviews", "Personas", "Usability Testing"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Wireframing",
      icon: <FontAwesomeIcon icon={faRulerCombined} />,
      points: ["Information Architecture", "User Flows", "Low-Fi Layouts"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "UI Design",
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      points: ["Typography", "Spacing Systems", "Visual Hierarchy"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Prototyping",
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      points: ["Clickable Prototypes", "Interactions", "Design Reviews"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Design Systems",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      points: ["Components", "Variants", "Auto Layout"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Portfolio",
      icon: <FontAwesomeIcon icon={faRocket} />,
      points: ["Case Studies", "Storytelling", "Handoff Ready"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    }
  ];

  const courseOutcomes = [
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: "UX Research Skills",
      desc: "Master interviews, surveys, and usability testing to uncover deep user needs and turn raw insights into clear design decisions. Learn to synthesize data through personas and journey maps to create solutions that truly resonate with real users in professional product environments."
    },
    {
      icon: <FontAwesomeIcon icon={faRulerCombined} />,
      title: "Wireframing Mastery",
      desc: "Build information architecture, user flows, and wireframes that structure complex products into simple, intuitive layouts. Create blueprints that enhance usability and guide seamless user journeys while maintaining consistency across all digital touchpoints."
    },
    {
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      title: "UI Design Excellence",
      desc: "Design pixel-perfect interfaces with modern typography, layout systems, and comprehensive design components. Master visual hierarchy and color theory to create consistent, high-fidelity screens that feel premium and are ready for developer handoff."
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      title: "Prototyping & Testing",
      desc: "Create interactive prototypes to validate flows and identify pain points through rapid iteration and stakeholder feedback. Learn to conduct professional usability testing to refine user experiences and ensure seamless interactions before final product shipping."
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Prep",
      desc: "Prepare for high-level interviews with polished portfolios, case studies, and professional design presentations. Learn effective collaboration with product teams and developers while building a strong personal brand to succeed in the global design market."
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
      title: "Product Thinking",
      desc: "Develop a strategic product mindset to solve complex problems and align design decisions with core business goals. Learn to prioritize features and design experiences that drive measurable outcomes and deliver long-term value to users."
    }
  ];

  // New UI/UX-themed curriculum backgrounds (do not reuse GD assets)
  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "UX Foundations & Research",
      topics: ["Design Thinking & Process", "User Interviews", "Personas & JTBD", "Journey Mapping", "Problem Framing"],
      projects: "5 Projects",
      icon: <FontAwesomeIcon icon={faBook} />,
      bgImage: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1400&q=80"
    },
    {
      month: "Month 2-3",
      title: "Wireframes & UI Systems",
      topics: ["Information Architecture", "User Flows", "Wireframes (Lo-Fi → Hi-Fi)", "Components & Variants", "Auto Layout"],
      projects: "15 Projects",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      bgImage: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=1400&q=80"
    },
    {
      month: "Month 4-5",
      title: "Prototypes & Case Studies",
      topics: ["Interactive Prototypes", "Accessibility Basics", "Usability Testing", "Iteration & Validation", "Case Study Storytelling"],
      projects: "20 Projects",
      icon: <FontAwesomeIcon icon={faRocket} />,
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1400&q=80"
    },
    {
      month: "Month 6",
      title: "Portfolio & Handoff",
      topics: ["Design Documentation", "Developer Handoff", "Stakeholder Presentations", "Interview Prep", "Freelance Basics"],
      projects: "7 Projects",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      bgImage: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1400&q=80"
    }
  ];

  const toolsV2Data = [
    [
      {
        name: "ChatGPT",
        icon: <FontAwesomeIcon icon={faComments} />,
        desc: "Advanced conversational AI for copy and concepts.",
        bg: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)"
      },
      {
        name: "Gemini",
        icon: <FontAwesomeIcon icon={faGlobe} />,
        desc: "Multimodal assistance for idea generation.",
        bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
      },
      {
        name: "Notion AI",
        icon: <FontAwesomeIcon icon={faPencilAlt} />,
        desc: "Smart workspace for design documentation.",
        bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
      },
      {
        name: "Jasper AI",
        icon: <FontAwesomeIcon icon={faRocket} />,
        desc: "Executive AI copy for product messaging.",
        bg: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)"
      }
    ],
    [
      {
        name: "Khroma",
        icon: <FontAwesomeIcon icon={faMagic} />,
        desc: "Visual generation for UI.",
        bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)"
      },
      {
        name: "Colors AI",
        icon: <FontAwesomeIcon icon={faRocket} />,
        desc: "Dynamic color concepts and mood boards.",
        bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
      },
      {
        name: "Fontjoy",
        icon: <FontAwesomeIcon icon={faLightbulb} />,
        desc: "Idea visuals.",
        bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
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
      setFormData({ name: "", email: "", phone: "", course: "Ui/Ux Design" });
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
    <div className="uiux-page" style={{ '--uiux-fluid-scale': `${fluidScale}px` }}>
      <NavigationBar />
      {/* Hero Section Upgrade - Minimalist Premium Design */}
      <header className="uiux-hero-v3">
        <div className="uiux-v3-sparkle-wrapper">
          <div className="uiux-v3-sparkle sparkle-lg sparkle-pos-1">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="uiux-v3-sparkle sparkle-sm sparkle-pos-2">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="uiux-v3-sparkle sparkle-md sparkle-pos-3">
            <FontAwesomeIcon icon={faMagic} />
          </div>
          <div className="uiux-v3-sparkle sparkle-lg sparkle-pos-4">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="uiux-v3-sparkle sparkle-sm sparkle-pos-5">
            <FontAwesomeIcon icon={faMagic} />
          </div>
          <div className="uiux-v3-sparkle sparkle-md sparkle-pos-6">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="uiux-v3-sparkle sparkle-lg sparkle-pos-7">
            <FontAwesomeIcon icon={faStar} />
          </div>
          <div className="uiux-v3-sparkle sparkle-sm sparkle-pos-8">
            <FontAwesomeIcon icon={faMagic} />
          </div>
        </div>

        <div className="uiux-v3-container">
          <div className="uiux-v3-header-content">
            <h1 className="uiux-v3-main-title">
              UI/UX <span className="uiux-v3-arrow-capsule-straight">→</span> Design <br /> Mastery Program
            </h1>

            <p className="uiux-v3-subtitle-original">
              Transform into a Product Designer in 6 Months. <br />
              Master research, wireframes, prototyping & design systems to build a job-ready portfolio.
            </p>

            <div className="uiux-v3-sub-row">
              <div className="uiux-v3-members-info">
                <p>With more than</p>
                <h3>2K+ MEMBERS</h3>
                <h3>500+ TUTORIALS</h3>
              </div>

              <button className="uiux-v3-join-btn" onClick={scrollToForm}>
                Join us <span className="uiux-v3-join-arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="uiux-v3-asset-gallery">
            <div className="uiux-v3-card uiux-card-blue">
              <img src={uiuxHeroAssets.a1} alt="UIUX Asset 1" className="uiux-v3-card-img" />
            </div>
            <div className="uiux-v3-card uiux-card-dark">
              <img src={uiuxHeroAssets.a2} alt="UIUX Asset 2" className="uiux-v3-card-img" />
            </div>
            <div className="uiux-v3-card uiux-card-center-featured">
              <img src={uiuxHeroAssets.a3} alt="UIUX Asset 3" className="uiux-v3-card-img" />
            </div>
            <div className="uiux-v3-card uiux-card-dark">
              <img src={uiuxHeroAssets.a4} alt="UIUX Asset 4" className="uiux-v3-card-img" />
            </div>
            <div className="uiux-v3-card uiux-card-blue">
              <img src={uiuxHeroAssets.a5} alt="UIUX Asset 5" className="uiux-v3-card-img" />
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Section bridging Hero and Intro */}
      <div className="uiux-v2-marquee-container">
        <div className="uiux-v2-marquee">
          <span>
            USER RESEARCH <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            WIREFRAMES <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PROTOTYPING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            DESIGN SYSTEMS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            USABILITY TESTING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            MICROCOPY <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            UI COMPONENTS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PRODUCT FLOWS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            USER RESEARCH <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            WIREFRAMES <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PROTOTYPING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            DESIGN SYSTEMS
          </span>
          <span aria-hidden="true">
            USER RESEARCH <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            WIREFRAMES <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PROTOTYPING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            DESIGN SYSTEMS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            USABILITY TESTING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            MICROCOPY <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            UI COMPONENTS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PRODUCT FLOWS <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            USER RESEARCH <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            WIREFRAMES <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            PROTOTYPING <FontAwesomeIcon icon={faStar} className="uiux-marquee-star" />
            DESIGN SYSTEMS
          </span>
        </div>
      </div>

      {/* New Intro Section - Re-designed to 2-column layout */}
      <section className="uiux-intro-section">
        <div className="uiux-container">
          <div className="uiux-intro-layout">
            <div className="uiux-intro-left">
              <h2 className="uiux-intro-title">
                Master UI/UX <br /> Design in 6 Months
              </h2>
              <p className="uiux-intro-desc">
                Learn the complete product design process from research to high-fidelity UI. Build case studies, master modern tools, and become job-ready with real-world project experience.
              </p>
              <button className="uiux-intro-cta" onClick={scrollToForm}>
                Contact
              </button>
            </div>

            <div className="uiux-intro-right">
              <div className="uiux-intro-grid">
                {introCategories.map((cat, i) => (
                  <div key={i} className="uiux-intro-category-box">
                    <div className="uiux-intro-card-icon" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                      {cat.icon}
                    </div>
                    <div className="uiux-intro-card-content">
                      <h3 className="uiux-intro-card-title">{cat.title}</h3>
                      <div className="uiux-intro-card-points">
                        {cat.points.map((point, idx) => (
                          <div key={idx} className="uiux-intro-point">
                            <FontAwesomeIcon icon={faStar} className="uiux-intro-point-star" />
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
      <section className="uiux-dgm-section uiux-dgm-outcomes-numbered">
        <div className="uiux-dgm-container">
          <div className="uiux-dgm-outcomes-header-row">
            <div className="uiux-dgm-outcomes-title-col">
              <h2 className="uiux-dgm-outcomes-main-title">Course Outcomes</h2>
            </div>
            <div className="uiux-dgm-outcomes-desc-col">
              <p className="uiux-dgm-outcomes-top-desc text-left">
                What you'll achieve after completing this program. Master workflows, build case studies, and transform into an industry-ready UI/UX designer.
              </p>
            </div>
          </div>

          <div className="uiux-dgm-outcomes-numbered-grid">
            {courseOutcomes.map((outcome, index) => {
              const isBlack = index === 1 || index === 3 || index === 5;
              const cardNumber = (index + 1).toString().padStart(2, '0');

              return (
                <div
                  key={index}
                  className={`uiux-dgm-outcome-numbered-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                >
                  <div className="uiux-dgm-outcome-card-content-wrapper">
                    {/* Left side - Number and Icon */}
                    <div className="uiux-dgm-outcome-card-left">
                      <div className="uiux-dgm-outcome-card-number">{cardNumber}</div>
                      <div className="uiux-dgm-outcome-numbered-icon">{outcome.icon}</div>
                    </div>

                    {/* Right side - Title and Description */}
                    <div className="uiux-dgm-outcome-card-right">
                      <h3 className="uiux-dgm-outcome-numbered-title">{outcome.title}</h3>
                      <p className="uiux-dgm-outcome-numbered-desc">{outcome.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 6-Month Course Breakdown - Vertical Slider Redesign */}
      <section className="uiux-curriculum-v2-section">
        <div className="uiux-container">
          <div className="uiux-curriculum-v2-layout">
            <div className="uiux-curriculum-v2-left">
              <span className="uiux-curriculum-v2-tag">PRO COURSE</span>
              <h2 className="uiux-curriculum-v2-title">
                6-Month Course <br /> Breakdown
              </h2>
              <p className="uiux-curriculum-v2-desc">
                A structured product design path built for industry excellence. Master research, UI systems, prototyping, and portfolio storytelling in 6 intensive months.
              </p>

              <div className="uiux-curriculum-v2-stats">
                <div className="uiux-stat-item">
                  <span className="uiux-stat-num">50+</span>
                  <span className="uiux-stat-label">Real Projects</span>
                </div>
                <div className="uiux-stat-item">
                  <span className="uiux-stat-num">100%</span>
                  <span className="uiux-stat-label">Practical</span>
                </div>
              </div>
            </div>

            <div className="uiux-curriculum-v2-right">
              <div className="uiux-curriculum-nav-v2">
                <button className="uiux-nav-btn-v2" onClick={prevModule}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <button className="uiux-nav-btn-v2" onClick={nextModule}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>

              <div className="uiux-slider-v5-container">
                {sixMonthCurriculum.map((module, index) => {
                  const isActive = index === currentModuleIndex;
                  const isNext = index === (currentModuleIndex + 1) % sixMonthCurriculum.length;
                  const isPrev = index === (currentModuleIndex - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length;

                  let cardState = "hidden";
                  if (isActive) cardState = "active";
                  else if (isPrev) cardState = "top";
                  else if (isNext) cardState = "bottom";

                  return (
                    <div key={index} className={`uiux-curriculum-v5-card ${cardState}`}>
                      <div className="uiux-curriculum-v5-inner">
                        <div className="uiux-curriculum-v5-bg">
                          <img src={module.bgImage} alt={module.title} className="uiux-curriculum-v5-img" />
                          <div className="uiux-curriculum-v5-overlay"></div>
                        </div>

                        <div className="uiux-curriculum-v5-content">
                          <div className="uiux-curriculum-v5-header">
                            <span className="uiux-curriculum-v5-month">{module.month}</span>
                            <span className="uiux-curriculum-v5-proj">Projects: {module.projects}</span>
                          </div>
                          <h3 className="uiux-curriculum-v5-title">{module.title}</h3>
                          <div className="uiux-curriculum-v5-topics">
                            {module.topics.map((topic, tidx) => (
                              <div key={tidx} className="uiux-curriculum-v5-topic">
                                <FontAwesomeIcon icon={faCheck} className="uiux-curriculum-v5-check" /> {topic}
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
      <section className="uiux-tools-v2">
        <div className="uiux-container">
          <div className="uiux-tools-v2-header">
            <h2 className="uiux-tools-v2-title"> AI Tools & Resources</h2>
            <p className="uiux-tools-v2-subtitle">Master the industry's most powerful UI/UX workflow</p>
          </div>

          <div className="uiux-tools-v2-layout">
            <div className="uiux-tools-sidebar">
              {["Ideas & UX", "AI Generative", "Validation", "Pro Workflow"].map((label, idx) => (
                <button key={idx} className={`uiux-tool-tab ${activeToolCategory === idx ? "active" : ""}`} onClick={() => setActiveToolCategory(idx)}>
                  <span className="tab-number">0{idx + 1}</span>
                  <span className="tab-label">{label}</span>
                </button>
              ))}
            </div>

            <div className="uiux-tools-main-display">
              <div className="uiux-pods-container" key={activeToolCategory}>
                {toolsV2Data[activeToolCategory].map((tool, index) => (
                  <div key={index} className={`uiux-tool-pod pod-${index + 1}`}>
                    <div className="uiux-pod-inner">
                      <div className="uiux-pod-bg-image" style={{ background: tool.bg, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                      <div className="uiux-pod-content">
                        <div className="uiux-pod-icon">{tool.icon}</div>
                        <h4 className="uiux-pod-name">{tool.name}</h4>
                        <p className="uiux-pod-desc">{tool.desc}</p>
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
      <section className="uiux-dgm-section uiux-dgm-benefits-reimagined">
        <div className="uiux-dgm-container">
          <div className="uiux-dgm-benefits-header">
            <h2 className="uiux-dgm-benefits-title">Where Features Meet For You</h2>
          </div>

          <div className="uiux-dgm-benefits-staggered">
            {/* Row 1: 5 Cards */}
            <div className="uiux-dgm-benefits-row uiux-dgm-row-5">
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className="uiux-dgm-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 0 + index;
                    const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                    return (
                      <div className="uiux-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="uiux-dgm-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Cards */}
            <div className="uiux-dgm-benefits-row uiux-dgm-row-3">
              {benefits.slice(5, 8).map((benefit, index) => (
                <div key={index} className="uiux-dgm-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 5 + index;
                    const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                    return (
                      <div className="uiux-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="uiux-dgm-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: 2 Original Cards */}
            <div className="uiux-dgm-benefits-row uiux-dgm-row-2" style={{ gap: "50px" }}>
              {benefits.slice(8, 10).map((benefit, index) => (
                <div key={index} className="uiux-dgm-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 8 + index;
                    const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                    return (
                      <div className="uiux-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="uiux-dgm-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating Cards - Positioned Independently */}
          {/* Left Bottom Floating Card */}
          <div
            className="uiux-dgm-floating-benefit-card uiux-dgm-floating-card-left"
            style={{
              left: "calc(50% - (640 * var(--uiux-fluid-scale)))",
              top: "calc(200 * var(--uiux-fluid-scale))",
              width: "calc(240 * var(--uiux-fluid-scale))",
              height: "calc(380 * var(--uiux-fluid-scale))",
              justifyContent: "center",
              padding: "calc(25 * var(--uiux-fluid-scale))"
            }}
          >
            <div className="uiux-dgm-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className="uiux-dgm-new-content">
              <h3>Industry Recognition</h3>
              <p>Get certified with globally recognized credentials that validate your expertise and boost your career worldwide.Strengthen your profile with trusted certification and gain the confidence to pursue better opportunities.</p>
            </div>
          </div>

          {/* Right Bottom Floating Card */}
          <div className="uiux-dgm-floating-benefit-card uiux-dgm-floating-card-right" style={{
            right: "calc(50% - (640 * var(--uiux-fluid-scale)))",
            top: "calc(200 * var(--uiux-fluid-scale))",
            width: "calc(240 * var(--uiux-fluid-scale))",
            height: "calc(380 * var(--uiux-fluid-scale))",
            justifyContent: "center",
            padding: "calc(25 * var(--uiux-fluid-scale))"
          }}>
            <div className="uiux-dgm-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div className="uiux-dgm-new-content">
              <h3>Lifetime Updates</h3>
              <p>Stay ahead with free lifetime access to all future course updates and industry-relevant content additions. Keep learning with updated lessons and resources to improve your skills and stay competitive always.</p>
            </div>
          </div>
        </div>
      </section>



      {/* Certificate Section with Simplified Lock Overlay */}
      <section className="uiux-section uiux-dark-bg">
        <div className="uiux-container">
          <h2 className="uiux-section-title">Professional Certification</h2>
          <p className="uiux-section-subtitle">Earn a globally recognized certificate upon completion</p>

          <div className="uiux-certificate-single">
            <div className="uiux-certificate-image-wrapper">
              <img
                src={certificate.image}
                alt="UI/UX Design Mastery Certificate"
                className="uiux-certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80";
                }}
              />

              <div className="uiux-certificate-lock-overlay">
                <div className="uiux-lock-icon">
                  <FontAwesomeIcon icon={faLock} />
                </div>
                <div className="uiux-lock-text">Certificate Locked</div>
              </div>

              <div className="uiux-certificate-overlay">
                <span className="uiux-certificate-badge">Your Professional Certificate Template</span>
              </div>
              <div className="uiux-certificate-download-note">
                <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
              </div>
            </div>

            <div className="uiux-certificate-info-single">
              <h3 className="uiux-certificate-title-single">{certificate.title}</h3>
              <p className="uiux-certificate-desc-single">{certificate.description}</p>

              <div className="uiux-certificate-features-single">
                {certificate.features.map((feature, index) => (
                  <div key={index} className="uiux-certificate-feature-item-single">
                    <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace("✅ ", "")}
                  </div>
                ))}
              </div>

              <div className="uiux-certificate-benefits">
                <div className="uiux-benefit">
                  <span className="uiux-benefit-icon">
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>
                  <span className="uiux-benefit-text">Enhances your professional credibility</span>
                </div>
                <div className="uiux-benefit">
                  <span className="uiux-benefit-icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </span>
                  <span className="uiux-benefit-text">Increases job opportunities by 75%</span>
                </div>
                <div className="uiux-benefit">
                  <span className="uiux-benefit-icon">
                    <FontAwesomeIcon icon={faGlobe} />
                  </span>
                  <span className="uiux-benefit-text">Globally recognized by employers</span>
                </div>
                <div className="uiux-benefit">
                  <span className="uiux-benefit-icon">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span className="uiux-benefit-text">QR code verification for authenticity</span>
                </div>
              </div>

              <div className="uiux-certificate-instructions">
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
      <section className="uiux-testi-grid-section">
        <div className="uiux-container">
          <div className="uiux-testi-grid-wrapper">
            <div className="uiux-testi-grid-left">
              <h2 className="uiux-testi-main-title">Experience Learning Like Never Before</h2>
              <p className="uiux-testi-subtitle">
                Discover personalized, practical learning that prepares you for real product teams. Read stories from learners who transformed their UI/UX careers with our mentorship.
              </p>
            </div>

            <div className="uiux-testi-grid-right">
              <div
                className="uiux-testi-card-top"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)" }}
              >
                <div className="uiux-testi-card-overlay">
                  <div className="uiux-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[0]?.text}"</p>
                    <div className="uiux-testi-author">
                      <img src={activeTestimonials[0]?.avatar} alt={activeTestimonials[0]?.name} />
                      <div>
                        <h4>{activeTestimonials[0]?.name}</h4>
                        <p>{activeTestimonials[0]?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="uiux-testi-squares-row">
                <div className="uiux-testi-card-bottom-left">
                  <div className="uiux-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[1]?.text}"</p>
                    <div className="uiux-testi-author">
                      <img src={activeTestimonials[1]?.avatar} alt={activeTestimonials[1]?.name} />
                      <div>
                        <h4>{activeTestimonials[1]?.name}</h4>
                        <p>{activeTestimonials[1]?.role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="uiux-testi-card-bottom-right">
                  <div className="uiux-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[2]?.text}"</p>
                    <div className="uiux-testi-author">
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
      <section className="uiux-dark-enrollment-FIXED" ref={formSectionRef}>
        <div className="uiux-container">
          <div className="uiux-floating-icons-v2">
            {floatingIcons.map((icon, index) => (
              <div
                key={index}
                className="uiux-v2-float-icon"
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

          <section className="uiux-v3-community-banner">
            <div className="uiux-banner-grid-overlay"></div>
            <div className="uiux-banner-decor-sparkle sp-1">✦</div>
            <div className="uiux-banner-decor-sparkle sp-2">✦</div>
            <div className="uiux-banner-decor-sparkle sp-3">✦</div>
            <div className="uiux-banner-decor-circle cir-1"></div>
            <div className="uiux-banner-decor-circle cir-2"></div>

            <div className="uiux-banner-container">
              <div className="uiux-banner-content">
                <h2 className="uiux-banner-title">
                  Start Your UI/UX <br /> Journey Today
                </h2>

                <div className="uiux-banner-ratings">
                  <div className="uiux-rating-box">
                    <div className="uiux-stars">★★★★★</div>
                    <div className="uiux-rating-text">4.9 / 5 rating</div>
                    <div className="uiux-rating-source">Coursezilla</div>
                  </div>
                  <div className="uiux-rating-box">
                    <div className="uiux-stars">★★★★★</div>
                    <div className="uiux-rating-text">4.8 / 5 rating</div>
                    <div className="uiux-rating-source">Globalskills</div>
                  </div>
                </div>
              </div>

              <div className="uiux-ray uiux-ray-left-top">
                <div className="uiux-ray-trail"></div>
                <div className="uiux-ray-box">
                  <div className="uiux-ray-icon icon-email">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                  <div className="uiux-ray-content">
                    <h4>Email Support</h4>
                    <p>hello@engloraylearn.com</p>
                  </div>
                </div>
              </div>

              <div className="uiux-ray uiux-ray-left-bottom">
                <div className="uiux-ray-trail"></div>
                <div className="uiux-ray-box">
                  <div className="uiux-ray-icon icon-whatsapp">
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </div>
                  <div className="uiux-ray-content">
                    <h4>WHATSAPP</h4>
                    <p>+91 63681 75990</p>
                  </div>
                </div>
              </div>

              <div className="uiux-ray uiux-ray-right-top">
                <div className="uiux-ray-trail"></div>
                <div className="uiux-ray-box">
                  <div className="uiux-ray-icon icon-center">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="uiux-ray-content">
                    <h4>Learning Center</h4>
                    <p>Madurai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="uiux-ray uiux-ray-right-bottom">
                <div className="uiux-ray-trail"></div>
                <div className="uiux-ray-box">
                  <div className="uiux-ray-icon icon-chat">
                    <FontAwesomeIcon icon={faComments} />
                  </div>
                  <div className="uiux-ray-content">
                    <h4>Quick Chat</h4>
                    <p>Live Chat Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Single Black Container with Left Content and Right Form */}
          <div className="uiux-single-enroll-container">
            {/* Left Side - Content */}
            <div className="uiux-enroll-left-content">
              <h3 className="uiux-enroll-title">Start Your Journey</h3>
              <p className="uiux-enroll-subtitle">join a focused learning experience designed to help you master practical skills, build a standout portfolio, and launch your journey as a professional designer</p>
            </div>

            {/* Right Side - Form */}
            <div className="uiux-enroll-right-form">
              <div className="uiux-enroll-form-wrapper">
                <h4 className="uiux-enroll-form-title">Enrollment Form</h4>
                <form onSubmit={handleSubmit} className="uiux-enroll-form">
                  <div className="uiux-enroll-form-grid">
                    <div className="uiux-enroll-form-group">
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

                    <div className="uiux-enroll-form-group">
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

                    <div className="uiux-enroll-form-group">
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

                    <div className="uiux-enroll-form-group">
                      <label>Select Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Ui/Ux Design">Ui/Ux Design</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Java Full Stack">Java Full Stack</option>
                        <option value="Drawing">Drawing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="uiux-enroll-submit-btn">
                    Complete Enrollment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showSuccess && (
        <div className="uiux-toast">
          <div className="uiux-toast-content">
            <div className="uiux-toast-icon">
              <FontAwesomeIcon icon={faTrophy} />
            </div>
            <div className="uiux-toast-message">
              <h4>Enrollment Successful!</h4>
              <p>Welcome to Ui/Ux Design Course! Our team will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UiuxDesignCourse;
