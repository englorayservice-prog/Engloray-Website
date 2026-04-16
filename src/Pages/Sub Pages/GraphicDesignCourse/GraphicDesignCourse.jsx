import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';

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
  faChevronUp,
  faFolderOpen,
  faChevronDown,
  faRulerCombined,
  faPenFancy,
  faLightbulb,
  faMagic
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './GraphicDesignCourse.css';

// Import your assets - KEEPING COMMENTED SECTIONS UNCHANGED
import demoVideoFile from '../../../assets/Final GD Course video.mp4';
import videoThumbnail from '../../../assets/DemoThumbnail.png';
import certificateImage from '../../../assets/Graphic-Designer.png';
import heroBg from '../../../assets/gd-hero-bg.png';
import centerDesignImage from '../../../assets/center-design.png';
import heroAlternative from '../../../assets/(3).png';
import expertiseImage from '../../../assets/OurExperise&Learning.png';
import heroImage from '../../../assets/hero-image-transparent.png';
import characterIllustration from '../../../assets/character-illustration.png';
import fundamentalsBg from '../../../assets/fundamentals-bg.png';
import softwareBg from '../../../assets/software-bg.png';
import portfolioBg from '../../../assets/portfolio-bg.png';
import careerBg from '../../../assets/career-bg.png';
import t1 from '../../../assets/t1.png';
import t2 from '../../../assets/t2.png';
import t3 from '../../../assets/t3.png';
import featuredAsset from '../../../assets/gd-featured-hero.jpeg';
import customAsset1 from '../../../assets/gd-asset-1-custom-v2.jpeg';
import customAsset2 from '../../../assets/gd-asset-2-custom-v2.jpeg';
import customAsset3 from '../../../assets/gd-asset-3-custom-v3.jpeg';
import customAsset4 from '../../../assets/gd-asset-4-custom-v2.jpeg';
import customAsset5 from '../../../assets/gd-asset-5-custom-v2.jpeg';
import enhancementBg from '../../../assets/enhancement-bg.jpeg';

// Generated Tool Logos
import chatgptLogo from '../../../assets/chatgpt_logo.png';
import geminiLogo from '../../../assets/gemini_logo.png';
import figmaLogo from '../../../assets/figma_logo.png';
import indesignLogo from '../../../assets/indesign_logo.png';
import illustratorLogo from '../../../assets/illustrator_logo.png';
import photoshopLogo from '../../../assets/photoshop_logo.png';
import clipdropLogo from '../../../assets/clipdrop-hd.png';
import removeBgLogo from '../../../assets/removebg-logo.png';
import luminarLogo from '../../../assets/luminar-hd.png';
import canvaMagicLogo from '../../../assets/canva-magic-hd.png';

// Brand Logos for Tools Section
import notionAiLogoV2 from '../../../assets/notion_ai_logo_v2.png';
import copyAiLogoV2 from '../../../assets/copy_ai_logo_v2.png';
import illustratorLogoV2 from '../../../assets/illustrator_logo_v2.png';
import luminarLogoV3 from '../../../assets/luminar_logo_v3.png';
import chatgptLogoV2 from '../../../assets/chatgpt_logo_v2.png';

// Custom Testimonial Avatars
import avatarF1 from '../../../assets/t1.png';
import avatarM1 from '../../../assets/t2.png';
import avatarF2 from '../../../assets/t3.png';

const GraphicDesignCourse = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testiSetIndex, setTestiSetIndex] = useState(0);

  useEffect(() => {
    const testiInterval = setInterval(() => {
      setTestiSetIndex(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(testiInterval);
  }, []);

  const allTestimonials = [
    { name: "Suresh P", role: "UI/UX Designer", text: "Gained confidence of working with real client projects which I used to fear. Facing a client is now easy! The course provided me with the exactly industry-standard skills and professional communication techniques needed for global success.", avatar: avatarM1 },
    { name: "Priya R", role: "Graphic Designer", text: "The practical approach and project-based learning completely transformed how I design. Highly recommended!", avatar: avatarF1 },
    { name: "Rahul M", role: "Creative Director", text: "The curriculum is perfectly aligned with industry standards. Easily the best investment for my career. The projects really challenged my limits.", avatar: avatarM1 },
    { name: "Anita K", role: "Freelancer", text: "I landed my first freelance gig within weeks of starting the program. The support here is unmatched and the mentors really help you bridge the gap between creative ideation and professional execution for international clients.", avatar: avatarF2 },
    { name: "Vikas S", role: "Product Designer", text: "From zero to building full-fledged design systems. The mentors really push you to bring out your best.", avatar: avatarM1 },
    { name: "Sneha T", role: "Marketing", text: "Learning visual storytelling here helped me create high-converting ad campaigns. Truly a game-changer.", avatar: avatarF1 },
    { name: "Rohan D", role: "Visual Designer", text: "The focus on modern tools like Figma and Midjourney sets this course apart from all other programs. It provided me with the exactly industry-standard skills needed to land a high-paying role as a visual designer at a top global firm.", avatar: avatarM1 },
    { name: "Kavya J", role: "Brand Identity", text: "I finally understand the psychology behind colors and typography. The deep dives are perfect for crafting premium visual identities for my global design clients.", avatar: avatarF1 },
    { name: "Manoj V", role: "Web Designer", text: "The community and constant feedback loops made learning complex layouts feel like a breeze. It's the perfect environment for anyone entering the world of digital design.", avatar: avatarM1 }
  ];

  const activeTestimonials = allTestimonials.slice(testiSetIndex * 3, (testiSetIndex * 3) + 3);

  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Graphic Design Masterclass'
  });

  const [activeToolCategory, setActiveToolCategory] = useState(0);
  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const courseData = {
    title: "Professional Graphic Design Masterclass",
    subtitle: "Transform Your Creative Career in 6 Months",
    duration: "6 Months | Live Interactive Training"
  };

  const courseDescription = `Unleash your creative potential with our comprehensive Graphic Design Masterclass! This 6-month intensive program is designed to transform beginners into industry-ready professionals. Our curriculum combines foundational design principles with practical software skills and real-world project experience.`;

  const introCategories = [
    {
      title: "Design Fundamentals",
      icon: <FontAwesomeIcon icon={faRulerCombined} />,
      points: ["Color Theory", "Typography & Fonts", "Layout Design"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Software Tools",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      points: ["Adobe Photoshop", "Illustrator & Figma", "Adobe InDesign"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Visual Branding",
      icon: <FontAwesomeIcon icon={faBullseye} />,
      points: ["Logo Design", "Brand Identity", "Identity Systems"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Digital Design",
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      points: ["Social Media Graphics", "UI/UX Layouts", "Web Typography"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Portfolio Building",
      icon: <FontAwesomeIcon icon={faRocket} />,
      points: ["50+ Real Projects", "Professional Showcase", "Case Study Prep"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    },
    {
      title: "Freelancing Skills",
      icon: <FontAwesomeIcon icon={faHandshake} />,
      points: ["Client Management", "Business Setup", "Proposal Drafting"],
      bgColor: "rgba(61, 82, 217, 0.12)",
      iconColor: "#3D52D9"
    }
  ];

  const courseOutcomes = [
    {
      icon: <FontAwesomeIcon icon={faPaintBrush} />,
      title: "Design Proficiency",
      desc: "Master color theory, typography, and composition to create high-impact designs. Deliver clean, engaging visuals that strengthen brand identity. Gain industry-level expertise in visual storytelling and professional layout design."
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Software Expertise",
      desc: "Gain deep proficiency in Adobe Creative Suite, including Photoshop, Illustrator, and InDesign, following modern industry workflows and professional design standards for today's competitive market. Work efficiently with industry tools to produce high-quality, production-ready designs."
    },
    {
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      title: "Digital Design",
      desc: "Learn to create pixel-perfect, responsive designs specifically tailored for modern web interfaces, mobile applications, and high-engagement social media platforms for leading global brands. Build user-centric digital products that stand out in the global marketplace."
    },
    {
      icon: <FontAwesomeIcon icon={faFolderOpen} />,
      title: "Portfolio Projects",
      desc: "Build a diverse, professional portfolio featuring high-quality real-world case studies that showcase your versatility and problem-solving skills to top global design employers and agencies. Present your work with clarity and confidence to stand out in competitive creative industries."
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
      title: "Creative Mindset",
      desc: "Master a creative mindset to analyze and solve visual design challenges with professional logic, combining strategic thinking, user understanding, and aesthetic judgment. Learn how to approach problems from multiple perspectives, generate innovative ideas and translate concepts into impactful visual solutions."
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Prep",
      desc: "Get ready for your first job with dedicated interview preparation, including mock interviews, portfolio reviews, and real-world hiring insights. Learn how to build and position your personal brand, communicate effectively with clients, and manage projects professionally. Gain practical knowledge in freelance business."
    }
  ];

  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "Design Fundamentals & Ideation",
      topics: [
        'Color Theory & Psychology',
        'Typography Foundations',
        'Composition & Layout',
        'Design Thinking & Process',
        'Creative Problem Solving'
      ],
      projects: '5 Projects',
      icon: <FontAwesomeIcon icon={faRulerCombined} />,
      bgImage: fundamentalsBg
    },
    {
      month: "Month 2-3",
      title: "Mastering Professional Tools",
      topics: [
        'Photoshop: Advanced Editing',
        'Illustrator: Vector Design',
        'Figma: Modern UI/UX',
        'Motion Design Basics',
        'Iconography & Assets'
      ],
      projects: '15 Projects',
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      bgImage: softwareBg
    },
    {
      month: "Month 4-5",
      title: "Portfolio Development",
      topics: [
        'Logo & Brand Identity',
        'Social Media Campaigns',
        'Web & Interface Design',
        'Print & Publication',
        'Case Study Creation'
      ],
      projects: '20 Projects',
      icon: <FontAwesomeIcon icon={faRocket} />,
      bgImage: portfolioBg
    },
    {
      month: "Month 6",
      title: "Career & Freelance Prep",
      topics: [
        'Personal Brand Strategy',
        'Resume & Portfolio Building',
        'Client Management Skills',
        'Freelancing Fundamentals',
        'Interview Mastery'
      ],
      projects: '7 Projects',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      bgImage: careerBg
    }
  ];

  const toolsV2Data = [
    [
      { name: "ChatGPT", icon: <FontAwesomeIcon icon={faComments} />, desc: "AI concepts and brand storytelling.", bg: "#3498db" },
      { name: "Gemini", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Creative prompts and content strategy.", bg: "#9b59b6" },
      { name: "Notion AI", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Professional briefs and planning.", bg: "#e91e63" },
      { name: "Copy.ai", icon: <FontAwesomeIcon icon={faImage} />, desc: "Marketing copy and brand taglines.", bg: "#2ecc71" }
    ],
    [
      { name: "Adobe Firefly", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Generative fill and text effects.", bg: "#1abc9c" },
      { name: "Midjourney", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Ultra-realistic creative concepts.", bg: "#3f51b5" },
      { name: "Leonardo AI", icon: <FontAwesomeIcon icon={faImage} />, desc: "Studio-quality artistic images.", bg: "#ff4081" },
      { name: "DALL·E", icon: <FontAwesomeIcon icon={faLightbulb} />, desc: "Visual idea generation.", bg: "#8bc34a" }
    ],
    [
      { name: "ClipDrop", icon: <FontAwesomeIcon icon={faImage} />, desc: "Instant background removal.", bg: "#ff9800" },
      { name: "Remove.bg", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "High-quality background removal.", bg: "#00bcd4" },
      { name: "Luminar AI", icon: <FontAwesomeIcon icon={faFlask} />, desc: "Automated face retouching.", bg: "#ff5722" },
      { name: "Canva Magic", icon: <FontAwesomeIcon icon={faImage} />, desc: "One-click design cleanup.", bg: "#673ab7" }
    ],
    [
      { name: "InDesign", icon: <FontAwesomeIcon icon={faFileAlt} />, desc: "Layout design for print and digital.", bg: "#f44336" },
      { name: "Figma", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Interface design and prototyping.", bg: "#009688" },
      { name: "Illustrator", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Vector graphics and illustration.", bg: "#03a9f4" },
      { name: "Photoshop", icon: <FontAwesomeIcon icon={faImage} />, desc: "Image editing and manipulation.", bg: "#607d8b" }
    ]
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: 'Live Interactive Training',
      description: 'Real-time classes with industry experts and immediate doubt resolution to gain design skills.'
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: '1:1 Mentorship',
      description: 'Personal guidance from professionals with 10+ years experience to accelerate your design career.'
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: '100% Placement Assistance',
      description: 'Career support with top companies, internship opportunities, resume building, and mock interviews.'
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy} />,
      title: 'Global Certification',
      description: 'Internationally recognized certificate from Design Council to validate your skills globally.'
    },
    {
      icon: <FontAwesomeIcon icon={faSyncAlt} />,
      title: 'Lifetime Course Access',
      description: 'All course materials and recordings available forever. Stay updated with latest trends and tools.'
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: 'Community Access',
      description: 'Network with 5000+ designers and participate in design challenges with global professionals.'
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: 'Software Access',
      description: 'Free access to Adobe Creative Suite for practice during course. Get hands-on with premium tools.'
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: 'Project-Based Learning',
      description: 'Build 50+ real-world projects for your portfolio using industry-standard briefs and feedback.'
    },
    {
      icon: <FontAwesomeIcon icon={faFlask} />,
      title: 'Usability Testing',
      description: 'Conduct real user testing and gather insights to refine designs through data-driven decisions.'
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: 'Career Coaching',
      description: 'Interview preparation and portfolio reviews with our strategic experts to land your dream job.'
    }
  ];

  const hexToRgba = (hex, alpha) => {
    const cleaned = hex.replace('#', '').trim();
    const isShort = cleaned.length === 3;
    const full = isShort
      ? cleaned.split('').map((c) => `${c}${c}`).join('')
      : cleaned;
    const r = parseInt(full.slice(0, 2), 16);
    const g = parseInt(full.slice(2, 4), 16);
    const b = parseInt(full.slice(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  const benefitIconPalette = [
    '#BAE6FD', '#C4B5FD', '#FBCFE8', '#BBF7D0', '#FED7AA', '#FEF08A', '#E9D5FF', '#A7F3D0', '#BAE6FD', '#C4B5FD'
  ];

  const demoVideo = {
    title: 'Graphic Design Masterclass - Free Demo Lesson',
    duration: '15:45',
    instructor: 'Engloray Expert',
    description: 'Watch this sample lesson to experience our teaching methodology and see how we make complex design concepts easy to understand.',
    videoFile: demoVideoFile,
    thumbnail: videoThumbnail || 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  };

  const testimonials = [
    {
      name: "Pavithra S",
      role: "UI Designer | Course Studied: UI/UX",
      review: "This course completely well structred and easy way to follow through easy guidance and mentorship.",
      image: t1
    },
    {
      name: "Suresh P",
      role: "UI/UX Designer | Course Studied: UI/UX",
      review: "Gained confidence of working with real client projects which I used to feared to face a client is now easy!....",
      image: t2
    },
    {
      name: "Nithya M",
      role: "UI Designer | Course Studied: UI/UX",
      review: "Design thinking concepts were very useful to acheive the dream job in dream company.",
      image: t3
    }
  ];

  const contactDetails = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: 'Email Support',
      details: ['hello@engloraylearn.com'],
      description: '24-hour response time',
      link: 'mailto:hello@engloraylearn.com'
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: 'WHATSAPP',
      details: ['+91 63681 75990', '+91 63699 45920'],
      description: 'Available 9 AM - 9 PM',
      link: 'tel:+916368175990'
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: 'Learning Center',
      details: ['Madurai, Tamil Nadu', 'INDIA 625001'],
      description: 'Visit for demo class',
      link: 'https://maps.google.com/?q=Engloray+Madurai'
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: 'Quick Chat',
      details: ['Live Chat Available', 'Telegram Support'],
      description: 'Instant design guidance',
      link: 'https://wa.me/916368175990'
    }
  ];

  const certificate = {
    id: 1,
    title: "Professional Certification",
    description: "Globally recognized certificate accredited by International Design Council",
    features: [
      "âœ… Digital & Physical Copy",
      "âœ… Lifetime Validity",
      "âœ… Online Verification",
      "âœ… International Recognition",
      "âœ… QR Code Authentication",
      "âœ… Accredited by Design Council"
    ],
    image: certificateImage
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

  useEffect(() => {
    const curriculumTimer = setInterval(() => {
      setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    }, 5000);

    const testimonialTimer = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      clearInterval(curriculumTimer);
      clearInterval(testimonialTimer);
    };
  }, [sixMonthCurriculum.length, testimonials.length]);

  const nextModule = () => {
    setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    resetAutoSlide();
  };

  const prevModule = () => {
    setCurrentModuleIndex((prev) => (prev - 1 + sixMonthCurriculum.length) % sixMonthCurriculum.length);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
      autoSlideRef.current = setInterval(() => {
        setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
      }, 5000);
    }
  };

  const nextBenefit = () => {
    setCurrentBenefitIndex((prev) => Math.min(prev + 1, benefits.length - 3));
  };

  const prevBenefit = () => {
    setCurrentBenefitIndex((prev) => Math.max(prev - 1, 0));
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setShowEnrollment(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await submitEnrollment(formData);

      setShowSuccess(true);

      setFormData({
        name: '',
        email: '',
        phone: '',
        course: 'Graphic Design Masterclass'
      });

      setTimeout(() => setShowEnrollment(false), 3000);
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      alert("Enrollment failed. Please try again.");
      console.error(error);
    }
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="gdc-page">
      <TopNavBar />
      <NavigationBar />
      {/* Hero Section */}
      <header className="gdc-hero-v3">
        <div className="gdc-v3-sparkle-wrapper">
          <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-1"><FontAwesomeIcon icon={faStar} /></div>
          <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-2"><FontAwesomeIcon icon={faStar} /></div>
          <div className="gdc-v3-sparkle sparkle-md sparkle-pos-3"><FontAwesomeIcon icon={faMagic} /></div>
          <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-4"><FontAwesomeIcon icon={faStar} /></div>
          <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-5"><FontAwesomeIcon icon={faMagic} /></div>
          <div className="gdc-v3-sparkle sparkle-md sparkle-pos-6"><FontAwesomeIcon icon={faStar} /></div>
          <div className="gdc-v3-sparkle sparkle-lg sparkle-pos-7"><FontAwesomeIcon icon={faStar} /></div>
          <div className="gdc-v3-sparkle sparkle-sm sparkle-pos-8"><FontAwesomeIcon icon={faMagic} /></div>
        </div>

        <div className="gdc-v3-container">
          <div className="gdc-v3-header-content">
            <h1 className="gdc-v3-main-title">
              Professional <span className="gdc-v3-arrow-capsule-straight">→</span> Graphic <br /> Designing Masterclass
            </h1>

            <p className="gdc-v3-subtitle-original">
              Transform Your Creative Career in 6 Months. <br />
              Master industry tools like Photoshop, Illustrator & Figma to build a professional portfolio.
            </p>

            <div className="gdc-v3-sub-row">
              <div className="gdc-v3-members-info">
                <p>With more than</p>
                <h3>2K+ MEMBERS</h3>
                <h3>500+ TUTORIALS</h3>
              </div>

              <button className="gdc-v3-join-btn" onClick={scrollToForm}>
                Join us <span className="gdc-v3-join-arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="gdc-v3-asset-gallery">
            <div className="gdc-v3-card gdc-card-blue">
              <img src={customAsset1} alt="GD Asset 1" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-dark">
              <img src={customAsset2} alt="GD Asset 2" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-center-featured">
              <img src={customAsset3} alt="GD Asset 3" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-dark gdc-card-tall">
              <img src={customAsset4} alt="GD Asset 4" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-blue">
              <img src={customAsset5} alt="GD Asset 5" className="gdc-v3-card-img" />
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Section */}
      <div className="gdc-v2-marquee-container">
        <div className="gdc-v2-marquee">
          <span>
            BRANDING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            LOGO DESIGN <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            TYPOGRAPHY <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            UI/UX <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            MOTION GRAPHICS <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            PACKAGING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            ILLUSTRATION <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            PRINT DESIGN <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            BRANDING <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            LOGO DESIGN <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            TYPOGRAPHY <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            UI/UX
          </span>
        </div>
      </div>

      {/* Intro Section */}
      <section className="gdc-intro-section">
        <div className="gdc-container">
          <div className="gdc-intro-layout">
            <div className="gdc-intro-left">
              <h2 className="gdc-intro-title">Master Graphic <br /> Design in 6 Months</h2>
              <p className="gdc-intro-desc">
                Unleash your creative potential with our intensive program designed to transform beginners into industry-ready professionals. Master every tool and concept needed for a global creative career.
              </p>
              <button className="gdc-intro-cta" onClick={scrollToForm}>Contact</button>
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

      {/* Course Outcomes Section */}
      <section className="gdc-outcomes-numbered">
        <div className="gdc-container">
          <div className="gdc-outcomes-header-row">
            <div className="gdc-outcomes-title-col">
              <h2 className="gdc-outcomes-main-title">Course Outcomes</h2>
            </div>
            <div className="gdc-outcomes-desc-col">
              <p className="gdc-outcomes-top-desc text-left">
                What you'll achieve after completing this program. Master workflows, build case studies, and transform into an industry-ready UI/UX designer.
              </p>
            </div>
          </div>

          <div className="gdc-outcomes-numbered-grid">
            {courseOutcomes.map((outcome, index) => {
              const isBlack = index === 1 || index === 3 || index === 5;
              const cardNumber = (index + 1).toString().padStart(2, '0');

              return (
                <div
                  key={index}
                  className={`gdc-outcome-numbered-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                >
                  <div className="gdc-outcome-card-content-wrapper">
                    <div className="gdc-outcome-card-left">
                      <div className="gdc-outcome-card-number">{cardNumber}</div>
                      <div className="gdc-outcome-numbered-icon">{outcome.icon}</div>
                    </div>

                    <div className="gdc-outcome-card-right">
                      <h3 className="gdc-outcome-numbered-title">{outcome.title}</h3>
                      <p className="gdc-outcome-numbered-desc">{outcome.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6-Month Course Breakdown Section */}
      <section className="gdc-curriculum-v2-section">
        <div className="gdc-container">
          <div className="gdc-curriculum-v2-layout">
            <div className="gdc-curriculum-v2-left">
              <span className="gdc-curriculum-v2-tag">PRO COURSE</span>
              <h2 className="gdc-curriculum-v2-title">6-Month Course <br /> Breakdown</h2>
              <p className="gdc-curriculum-v2-desc">
                A comprehensive structured learning path designed for industry excellence. Master design thinking, professional tools, and portfolio building in 6 intensive months.
              </p>

              <div className="gdc-curriculum-v2-stats">
                <div className="gdc-stat-item">
                  <span className="gdc-stat-num">50+</span>
                  <span className="gdc-stat-label">Real Projects</span>
                </div>
                <div className="gdc-stat-item">
                  <span className="gdc-stat-num">100%</span>
                  <span className="gdc-stat-label">Practical</span>
                </div>
              </div>
            </div>

            <div className="gdc-curriculum-v2-right">
              <div className="gdc-curriculum-nav-v2">
                <button className="gdc-nav-btn-v2" onClick={prevModule}><FontAwesomeIcon icon={faChevronUp} /></button>
                <button className="gdc-nav-btn-v2" onClick={nextModule}><FontAwesomeIcon icon={faChevronDown} /></button>
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
                    <div
                      key={index}
                      className={`gdc-curriculum-v5-card ${cardState}`}
                    >
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

      {/* Tools & Resources Section */}
      <section className="gdc-tools-v2 gdc-tools-container">
        <div className="gdc-container">
          <div className="gdc-tools-v2-header">
            <h2 className="gdc-tools-v2-title">AI Tools & Resources</h2>
            <p className="gdc-tools-v2-subtitle">Master the industry's most powerful creative workflow</p>
          </div>

          <div className="gdc-tools-v2-layout">
            <div className="gdc-tools-sidebar">
              {["AI Dev Assistants", "Backend & AI", "Cloud & Data", "Engineering Suite"].map((label, idx) => (
                <button
                  key={idx}
                  className={`gdc-tool-tab ${activeToolCategory === idx ? 'active' : ''}`}
                  onClick={() => setActiveToolCategory(idx)}
                >
                  <span className="tab-number">0{idx + 1}</span>
                  <span className="tab-label">{label}</span>
                </button>
              ))}
            </div>

            <div className="gdc-tools-main-display">
              <div className="gdc-pods-container" key={activeToolCategory}>
                {toolsV2Data[activeToolCategory].map((tool, index) => (
                  <div key={index} className={`gdc-tool-pod pod-${index + 1}`}>
                    <div className="gdc-pod-inner" style={{ backgroundColor: tool.bg }}>
                      <div className="gdc-pod-content">
                        <div className="gdc-pod-icon">{tool.icon}</div>
                        <h4 className="gdc-pod-name">{tool.name}</h4>
                        <p className="gdc-pod-desc">{tool.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Benefits Section */}
      <section className="gdc-benefits-reimagined">
        <div className="gdc-container">
          <div className="gdc-benefits-header">
            <h2 className="gdc-benefits-title">Where Features Meet For You</h2>
          </div>

          <div className="gdc-benefits-staggered">
            {/* Row 1 - 5 cards */}
            <div className="gdc-benefits-row gdc-row-5">
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className="gdc-new-benefit-card">
                  {(() => {
                    const color = benefitIconPalette[index] || "#BAE6FD";
                    return (
                      <div className="gdc-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="gdc-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Layout - Left Tall + Middle Col (Row 2 & 3) + Right Tall */}
            <div className="gdc-benefits-bottom-layout">

              {/* Left Tall Card */}
              <div className="gdc-new-benefit-card gdc-benefit-card-tall">
                <div className="gdc-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="gdc-new-content">
                  <h3>Industry Recognition</h3>
                  <p>Get certified with globally recognized credentials that validate your expertise and boost your career prospects. Enhance your profile and unlock better global opportunities for future growth.</p>
                </div>
              </div>

              {/* Middle Grid Column */}
              <div className="gdc-benefits-middle-col">
                <div className="gdc-benefits-row gdc-row-3">
                  {benefits.slice(5, 8).map((benefit, index) => (
                    <div key={index} className="gdc-new-benefit-card">
                      {(() => {
                        const absoluteIndex = 5 + index;
                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                        return (
                          <div className="gdc-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                            {benefit.icon}
                          </div>
                        );
                      })()}
                      <div className="gdc-new-content">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="gdc-benefits-row gdc-row-2">
                  {benefits.slice(8, 10).map((benefit, index) => (
                    <div key={index} className="gdc-new-benefit-card">
                      {(() => {
                        const absoluteIndex = 8 + index;
                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                        return (
                          <div className="gdc-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                            {benefit.icon}
                          </div>
                        );
                      })()}
                      <div className="gdc-new-content">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Tall Card */}
              <div className="gdc-new-benefit-card gdc-benefit-card-tall">
                <div className="gdc-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
                  <FontAwesomeIcon icon={faTrophy} />
                </div>
                <div className="gdc-new-content">
                  <h3>Lifetime Updates</h3>
                  <p>Stay ahead with free lifetime access to all future course updates and industry-relevant content additions. You will always have direct access to the latest platform changes and tools to remain a competitive expert.</p>
                </div>
              </div>

            </div>
          </div>

          {/* REMOVE the two floating card divs entirely */}
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="gdc-demo-video-section gdc-white-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title gdc-red-text">Experience Our Teaching</h2>
          <p className="gdc-section-subtitle">Watch a sample lesson from our course</p>

          <div className="gdc-video-layout">
            <div className="gdc-video-left">
              <div className="gdc-single-video-container">
                <div className="gdc-video-card-light">
                  <div className="gdc-video-thumbnail-single" onClick={handlePlayVideo}>
                    <video
                      ref={videoRef}
                      className="gdc-video-player"
                      poster={demoVideo.thumbnail}
                      onClick={handlePlayVideo}
                      onEnded={handleVideoEnd}
                      onPlay={handleVideoPlay}
                      onPause={handleVideoPause}
                      controls={isPlaying}
                    >
                      <source src={demoVideo.videoFile} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {!isPlaying && (
                      <div className="gdc-video-overlay-single">
                        <div className="gdc-play-button-single">
                          <FontAwesomeIcon icon={faPlayCircle} />
                        </div>
                        <div className="gdc-video-duration-single">
                          <FontAwesomeIcon icon={faClock} /> {demoVideo.duration}
                        </div>
                      </div>
                    )}

                    {isPlaying && (
                      <div className="gdc-video-controls-overlay">
                        <button className="gdc-video-control-btn" onClick={handlePlayVideo}>
                          {isPlaying
                            ? <FontAwesomeIcon icon={faPauseCircle} />
                            : <FontAwesomeIcon icon={faPlayCircle} />}
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="gdc-video-info-single-light">
                    <h3 className="gdc-video-title-single-light">{demoVideo.title}</h3>
                    <p className="gdc-video-instructor-single-light">
                      Instructor: <span>{demoVideo.instructor}</span>
                    </p>
                    <p className="gdc-video-description-single-light">
                      {demoVideo.description}
                    </p>
                    <button className="gdc-watch-btn-single" onClick={handlePlayVideo}>
                      {isPlaying
                        ? <><FontAwesomeIcon icon={faPauseCircle} /> Pause Video</>
                        : <><FontAwesomeIcon icon={faPlayCircle} /> Watch Free Demo Lesson</>}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="gdc-video-right">
              <h3 className="gdc-video-side-title">Learn by Watching Real Sessions</h3>
              <p className="gdc-video-side-desc">
                Experience our teaching approach through real-time lessons designed to give you practical insights.
                Understand how concepts are explained, how projects are built, and how students are guided step-by-step
                to achieve industry-level skills. This preview gives you a clear idea of the learning experience,
                mentorship quality, and hands-on approach we follow in our programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className="gdc-certificate-section gdc-dark-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title">Professional Certification</h2>
          <p className="gdc-section-subtitle">Earn a globally recognized certificate upon completion</p>

          <div className="gdc-certificate-single">
            <div className="gdc-certificate-image-wrapper">
              <img
                src={certificate.image}
                alt="Graphic Design Masterclass Certificate"
                className="gdc-certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                }}
              />

              <div className="gdc-certificate-lock-overlay">
                <div className="gdc-lock-icon"><FontAwesomeIcon icon={faLock} /></div>
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
                    <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace('âœ… ', '')}
                  </div>
                ))}
              </div>

              <div className="gdc-certificate-benefits">
                <div className="gdc-benefit">
                  <span className="gdc-benefit-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
                  <span className="gdc-benefit-text">Enhances your professional credibility</span>
                </div>
                <div className="gdc-benefit">
                  <span className="gdc-benefit-icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                  <span className="gdc-benefit-text">Increases job opportunities by 75%</span>
                </div>
                <div className="gdc-benefit">
                  <span className="gdc-benefit-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                  <span className="gdc-benefit-text">Globally recognized by employers</span>
                </div>
                <div className="gdc-benefit">
                  <span className="gdc-benefit-icon"><FontAwesomeIcon icon={faQrcode} /></span>
                  <span className="gdc-benefit-text">QR code verification for authenticity</span>
                </div>
              </div>

              <div className="gdc-certificate-instructions">
                <h4><FontAwesomeIcon icon={faCertificate} /> Certificate Details:</h4>
                <ul>
                  <li><FontAwesomeIcon icon={faCheck} /> Issued upon successful completion of the course</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Includes student name and unique certificate ID</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Verified through our online portal</li>
                  <li><FontAwesomeIcon icon={faCheck} /> Available in digital (PDF) and physical formats</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="gdc-testi-grid-section">
        <div className="gdc-container">
          <div className="gdc-testi-grid-wrapper">
            <div className="gdc-testi-grid-left">
              <h2 className="gdc-testi-main-title">Experience Learning Like Never Before</h2>
              <p className="gdc-testi-subtitle">
                Discover Personalized, AI-Powered Learning that prepares students for success in the real world. Read transformational stories from our top alumni.
              </p>
            </div>

            <div className="gdc-testi-grid-right">
              <div className="gdc-testi-card-top" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)` }}>
                <div className="gdc-testi-card-overlay">
                  <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[0].text}"</p>
                    <div className="gdc-testi-author">
                      <img src={activeTestimonials[0].avatar} alt={activeTestimonials[0].name} />
                      <div>
                        <h4>{activeTestimonials[0].name}</h4>
                        <p>{activeTestimonials[0].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="gdc-testi-squares-row">
                <div className="gdc-testi-card-bottom-left">
                  <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[1].text}"</p>
                    <div className="gdc-testi-author">
                      <img src={activeTestimonials[1].avatar} alt={activeTestimonials[1].name} />
                      <div>
                        <h4>{activeTestimonials[1].name}</h4>
                        <p>{activeTestimonials[1].role}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="gdc-testi-card-bottom-right">
                  <div className="gdc-testi-quote-content fade-in-anim" key={testiSetIndex}>
                    <p>"{activeTestimonials[2].text}"</p>
                    <div className="gdc-testi-author">
                      <img src={activeTestimonials[2].avatar} alt={activeTestimonials[2].name} />
                      <div>
                        <h4>{activeTestimonials[2].name}</h4>
                        <p>{activeTestimonials[2].role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enroll Now Section */}
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
                <h2 className="gdc-banner-title">Start Your Design <br /> Journey Today</h2>

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
                  <div className="gdc-ray-icon icon-email"><FontAwesomeIcon icon={faEnvelope} /></div>
                  <div className="gdc-ray-content">
                    <h4>Email Support</h4>
                    <p>hello@engloraylearn.com</p>
                  </div>
                </div>
              </div>

              <div className="gdc-ray gdc-ray-left-bottom">
                <div className="gdc-ray-trail"></div>
                <div className="gdc-ray-box">
                  <div className="gdc-ray-icon icon-whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></div>
                  <div className="gdc-ray-content">
                    <h4>WHATSAPP</h4>
                    <p>+91 63681 75990</p>
                  </div>
                </div>
              </div>

              <div className="gdc-ray gdc-ray-right-top">
                <div className="gdc-ray-trail"></div>
                <div className="gdc-ray-box">
                  <div className="gdc-ray-icon icon-center"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                  <div className="gdc-ray-content">
                    <h4>Learning Center</h4>
                    <p>Madurai, Tamil Nadu</p>
                  </div>
                </div>
              </div>

              <div className="gdc-ray gdc-ray-right-bottom">
                <div className="gdc-ray-trail"></div>
                <div className="gdc-ray-box">
                  <div className="gdc-ray-icon icon-chat"><FontAwesomeIcon icon={faComments} /></div>
                  <div className="gdc-ray-content">
                    <h4>Quick Chat</h4>
                    <p>Live Chat Available</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="gdc-single-enroll-container">
            <div className="gdc-enroll-left-content">
              <h3 className="gdc-enroll-title">Start Your Journey</h3>
              <p className="gdc-enroll-subtitle">join a focused learning experience designed to help you master practical skills, build a standout portfolio, and launch your journey as a professional designer</p>
            </div>

            <div className="gdc-enroll-right-form">
              <div className="gdc-enroll-form-wrapper">
                <h4 className="gdc-enroll-form-title">Enrollment Form</h4>
                <form onSubmit={handleSubmit} className="gdc-enroll-form">
                  <div className="gdc-enroll-form-grid">
                    <div className="gdc-enroll-form-group">
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

                    <div className="gdc-enroll-form-group">
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

                    <div className="gdc-enroll-form-group">
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

                    <div className="gdc-enroll-form-group">
                      <label>Select Course *</label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="Graphic Design Masterclass">Graphic Design Masterclass</option>
                        <option value="UI/UX Design Specialization">UI/UX Design Specialization</option>
                        <option value="Motion Graphics Course">Motion Graphics Course</option>
                        <option value="Brand Identity Design">Brand Identity Design</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="gdc-enroll-submit-btn">
                    Complete Enrollment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Toast Message */}
      {showSuccess && (
        <div className="gdc-toast">
          <div className="gdc-toast-content">
            <div className="gdc-toast-icon"><FontAwesomeIcon icon={faTrophy} /></div>
            <div className="gdc-toast-message">
              <h4>Enrollment Successful!</h4>
              <p>Welcome to Graphic Design Masterclass! Our team will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraphicDesignCourse;
