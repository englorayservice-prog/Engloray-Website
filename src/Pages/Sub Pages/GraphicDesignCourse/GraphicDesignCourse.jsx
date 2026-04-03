import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";

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
  faChevronDown,
  // Added missing icons
  faRulerCombined,
  faPenFancy,
  faLightbulb,
  faMagic
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './GraphicDesignCourse.css';

// Import your assets - KEEPING COMMENTED SECTIONS UNCHANGED
import demoVideoFile from '../../../assets/Final GD Course video.mp4';
import videoThumbnail from '../../../assets/DemoThumbnail.png'; // Optional
import certificateImage from '../../../assets/GD Certificate.jpeg'; // Your certificate image
import heroBg from '../../../assets/gd-hero-bg.png'; // Exact user reference background
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
import figmaLogoV2 from '../../../assets/figma_logo_v2.png';
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
    }, 5000); // Swap every 5 seconds
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
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Software Tools",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      points: ["Adobe Photoshop", "Illustrator & Figma", "Adobe InDesign"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Visual Branding",
      icon: <FontAwesomeIcon icon={faBullseye} />,
      points: ["Logo Design", "Brand Identity", "Identity Systems"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Digital Design",
      icon: <FontAwesomeIcon icon={faMobileAlt} />,
      points: ["Social Media Graphics", "UI/UX Layouts", "Web Typography"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Portfolio Building",
      icon: <FontAwesomeIcon icon={faRocket} />,
      points: ["50+ Real Projects", "Professional Showcase", "Case Study Prep"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Freelancing Skills",
      icon: <FontAwesomeIcon icon={faHandshake} />,
      points: ["Client Management", "Business Setup", "Proposal Drafting"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
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
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: "Portfolio Projects",
      desc: "Build a diverse, professional portfolio featuring high-quality real-world case studies that showcase your versatility and problem-solving skills to top global design employers and agencies. Present your work with clarity and confidence to stand out in competitive creative industries."
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Career Prep",
      desc: "Get ready for your first job with dedicated interview preparation, freelance business strategies, and professional client management training for career success in the creative industry."
    },
    {
      icon: <FontAwesomeIcon icon={faStar} />,
      title: "Creative Mindset",
      desc: "Master a creative mindset to analyze and solve visual design challenges with professional logic."
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
      { name: "ChatGPT", icon: <FontAwesomeIcon icon={faComments} />, desc: "AI concepts and brand storytelling.", img: chatgptLogoV2 },
      { name: "Gemini", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Creative prompts and content strategy.", img: geminiLogo },
      { name: "Notion AI", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Professional briefs and planning.", img: notionAiLogoV2 },
      { name: "Copy.ai", icon: <FontAwesomeIcon icon={faImage} />, desc: "Marketing copy and brand taglines.", img: copyAiLogoV2 }
    ],
    [
      { name: "Adobe Firefly", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Generative fill and text effects.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400" },
      { name: "Midjourney", icon: <FontAwesomeIcon icon={faRocket} />, desc: "Ultra-realistic creative concepts.", img: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=400" },
      { name: "Leonardo AI", icon: <FontAwesomeIcon icon={faImage} />, desc: "Studio-quality artistic images.", img: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=400" },
      { name: "DALL·E", icon: <FontAwesomeIcon icon={faLightbulb} />, desc: "Visual idea generation.", img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=400" }
    ],
    [
      { name: "ClipDrop", icon: <FontAwesomeIcon icon={faImage} />, desc: "Instant background removal.", img: clipdropLogo },
      { name: "Remove.bg", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "High-quality background removal.", img: removeBgLogo },
      { name: "Luminar AI", icon: <FontAwesomeIcon icon={faFlask} />, desc: "Automated face retouching.", img: luminarLogoV3 },
      { name: "Canva Magic", icon: <FontAwesomeIcon icon={faImage} />, desc: "One-click design cleanup.", img: canvaMagicLogo }
    ],
    [
      { name: "InDesign", icon: <FontAwesomeIcon icon={faFileAlt} />, desc: "Layout design for print and digital.", img: indesignLogo },
      { name: "Figma", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Interface design and prototyping.", img: figmaLogoV2 },
      { name: "Illustrator", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Vector graphics and illustration.", img: illustratorLogoV2 },
      { name: "Photoshop", icon: <FontAwesomeIcon icon={faImage} />, desc: "Image editing and manipulation.", img: photoshopLogo }
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
    '#BAE6FD', // sky blue
    '#C4B5FD', // light purple
    '#FBCFE8', // soft pink
    '#BBF7D0', // mint green
    '#FED7AA', // light orange
    '#FEF08A', // soft yellow
    '#E9D5FF', // lavender
    '#A7F3D0', // aqua
    '#BAE6FD', // sky blue
    '#C4B5FD'  // light purple
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
      "✅ Digital & Physical Copy",
      "✅ Lifetime Validity",
      "✅ Online Verification",
      "✅ International Recognition",
      "✅ QR Code Authentication",
      "✅ Accredited by Design Council"
    ],
    image: certificateImage // Your local certificate image
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
    // Curriculum auto-slide
    const curriculumTimer = setInterval(() => {
      setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    }, 5000);

    // Testimonial auto-slide
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
      {/* Hero Section Upgrade - Minimalist Premium Design */}
      <header className="gdc-hero-v3">
        {/* Animated Sparkles - Randomly placed, bigger and bolder */}
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

      {/* Marquee Section bridging Hero and Intro */}
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

      {/* New Intro Section - Re-designed to 2-column layout */}
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



      {/* Course Outcomes - Bento Style Redesign */}
      <section className="gdc-section gdc-outcomes-bento">
        <div className="gdc-container">
          <div className="gdc-outcomes-header-row">
            <div className="gdc-outcomes-title-col">
              <h2 className="gdc-outcomes-main-title">Course Outcomes</h2>
            </div>
            <div className="gdc-outcomes-desc-col">
              <p className="gdc-outcomes-top-desc text-left">
                What you'll achieve after completing this program. Master industry tools, build a professional portfolio, and transform your career.
              </p>
            </div>
          </div>

          <div className="gdc-outcomes-grid-bento">
            {/* Column 1: Tall Card (Outcomes 1 & 2) */}
            <div className="gdc-bento-card gdc-card-tall">
              <div className="gdc-bento-sub-item gdc-bento-clipped-item gdc-bento-first-item">
                <div className="gdc-bento-clipped-bg">
                  <div className="gdc-bento-lobe lobe-left"></div>
                  <div className="gdc-bento-lobe lobe-right"></div>
                </div>
                <div className="gdc-bento-clipped-content">
                  <div className="gdc-bento-header-inline">
                    <div className="gdc-bento-icon">{courseOutcomes[0].icon}</div>
                    <h3 className="gdc-bento-title">{courseOutcomes[0].title}</h3>
                  </div>
                  <p className="gdc-bento-text">Master color theory, typography, and advanced composition to create stunning, high-impact designs for any medium.</p>
                </div>
              </div>
              <div className="gdc-bento-sub-item">
                <div className="gdc-bento-header-inline">
                  <div className="gdc-bento-icon">{courseOutcomes[1].icon}</div>
                  <h3 className="gdc-bento-title">{courseOutcomes[1].title}</h3>
                </div>
                <p className="gdc-bento-text">{courseOutcomes[1].desc}</p>
              </div>
            </div>

            {/* Column 2: Tall Violet Card (Outcomes 3 & 4) */}
            <div className="gdc-bento-card gdc-card-tall gdc-card-violet">
              <div className="gdc-curvy-line-overlay">
                {/* 2. Added thick intricate orange curly line SVG matching reference */}
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M-10,30 Q30,70 50,40 T120,50" fill="none" stroke="#fa7c2f" strokeWidth="5" strokeLinecap="round" />
                  <path d="M40,45 Q70,20 90,80 T150,90" fill="none" stroke="#fa7c2f" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <div className="gdc-bento-sub-item gdc-bento-first-item">
                <div className="gdc-bento-header-inline">
                  <div className="gdc-bento-icon icon-white">{courseOutcomes[2].icon}</div>
                  <h3 className="gdc-bento-title text-white">{courseOutcomes[2].title}</h3>
                </div>
                <p className="gdc-bento-text text-white-muted">{courseOutcomes[2].desc}</p>
              </div>
              <div className="gdc-bento-sub-item">
                <div className="gdc-bento-header-inline">
                  <div className="gdc-bento-icon icon-white">{courseOutcomes[3].icon}</div>
                  <h3 className="gdc-bento-title text-white">{courseOutcomes[3].title}</h3>
                </div>
                <p className="gdc-bento-text text-white-muted">{courseOutcomes[3].desc}</p>
              </div>
            </div>

            {/* Column 3: Two Square Cards (Outcomes 5 & 6) */}
            <div className="gdc-bento-col-right">
              <div className="gdc-bento-card gdc-card-square gdc-square-top">
                <div className="gdc-bento-header-inline">
                  <div className="gdc-bento-icon">{courseOutcomes[4].icon}</div>
                  <h3 className="gdc-bento-title">{courseOutcomes[4].title}</h3>
                </div>
                <p className="gdc-bento-text">Prepare for your first professional design role with dedicated interview coaching, intensive freelance pricing strategies, and comprehensive client management training to ensure your long-term success. Master industry-standard communication and presentation skills to truly stand out to global employers and agencies.</p>
              </div>
              <div className="gdc-bento-card gdc-card-square gdc-square-bottom gdc-creative-glow-bg">
                <div className="gdc-creative-abstract-shape">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0,80 Q50,20 100,80" fill="none" stroke="#94a3b8" strokeWidth="1" opacity="0.15" />
                  </svg>
                </div>
                <div className="gdc-bento-header-inline">
                  <div className="gdc-bento-icon">{courseOutcomes[5].icon}</div>
                  <h3 className="gdc-bento-title">{courseOutcomes[5].title}</h3>
                </div>
                <p className="gdc-bento-text">Master a creative mindset to analyze and solve visual design challenges with professional logic.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 6-Month Course Breakdown - Vertical Slider Redesign */}
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
              {/* Vertical Navigation Controls - Top Right precisely as per design */}
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
      {/* Tools & Resources - Interactive V2 Redesign */}
      <section className="gdc-tools-v2">
        <div className="gdc-container">
          <div className="gdc-tools-v2-header">
            <h2 className="gdc-tools-v2-title"> AI Tools & Resources</h2>
            <p className="gdc-tools-v2-subtitle">Master the industry's most powerful creative workflow</p>
          </div>

          <div className="gdc-tools-v2-layout">
            {/* Sidebar Tabs */}
            <div className="gdc-tools-sidebar">
              {["Ideas & Concepts", "AI Generative", "Enhancement", "Professional Suite"].map((label, idx) => (
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

            {/* Main Overlapping Pods Display */}
            <div className="gdc-tools-main-display">
              <div className="gdc-pods-container" key={activeToolCategory}>
                {toolsV2Data[activeToolCategory].map((tool, index) => (
                  <div key={index} className={`gdc-tool-pod pod-${index + 1}`}>
                    <div className="gdc-pod-inner">
                      <div className="gdc-pod-bg-image" style={{ backgroundImage: `url(${tool.img})` }}></div>
                      <div className="gdc-pod-content">
                        {activeToolCategory === 1 ? (
                          <h4 className="gdc-pod-name">{tool.name}</h4>
                        ) : null}
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
      <section className="gdc-section gdc-benefits-reimagined">
        <div className="gdc-container">
          <div className="gdc-benefits-header">
            <h2 className="gdc-benefits-title">Where Features Meet For You</h2>
          </div>

          <div className="gdc-benefits-staggered">
            {/* Row 1: 5 Cards */}
            <div className="gdc-benefits-row gdc-row-5">
              {benefits.slice(0, 5).map((benefit, index) => (
                <div key={index} className="gdc-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 0 + index;
                    const color = benefitIconPalette[absoluteIndex] || '#BAE6FD';
                    return (
                      <div
                        className="gdc-new-icon"
                        style={{
                          background: hexToRgba(color, 0.18),
                          color
                        }}
                      >
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="gdc-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: 3 Cards */}
            <div className="gdc-benefits-row gdc-row-3">
              {benefits.slice(5, 8).map((benefit, index) => (
                <div key={index} className="gdc-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 5 + index;
                    const color = benefitIconPalette[absoluteIndex] || '#BAE6FD';
                    return (
                      <div
                        className="gdc-new-icon"
                        style={{
                          background: hexToRgba(color, 0.18),
                          color
                        }}
                      >
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="gdc-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: 2 Cards */}
            <div className="gdc-benefits-row gdc-row-2">
              {benefits.slice(8, 10).map((benefit, index) => (
                <div key={index} className="gdc-new-benefit-card">
                  {(() => {
                    const absoluteIndex = 8 + index;
                    const color = benefitIconPalette[absoluteIndex] || '#BAE6FD';
                    return (
                      <div
                        className="gdc-new-icon"
                        style={{
                          background: hexToRgba(color, 0.18),
                          color
                        }}
                      >
                        {benefit.icon}
                      </div>
                    );
                  })()}
                  <div className="gdc-new-content">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description.substring(0, 70)}...</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Demo Video Section */}
      <section className="gdc-section gdc-white-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title gdc-red-text">Experience Our Teaching</h2>
          <p className="gdc-section-subtitle">Watch a sample lesson from our course</p>

          <div className="gdc-single-video-container">
            <div className="gdc-video-card-light">
              <div className="gdc-video-thumbnail-single" onClick={handlePlayVideo}>
                {/* Video Player */}
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

                {/* Custom Play Button Overlay (shows when video is not playing) */}
                {!isPlaying && (
                  <div className="gdc-video-overlay-single">
                    <div className="gdc-play-button-single">
                      <FontAwesomeIcon icon={faPlayCircle} />
                    </div>
                    <div className="gdc-video-duration-single"><FontAwesomeIcon icon={faClock} /> {demoVideo.duration}</div>
                  </div>
                )}

                {/* Video Controls Overlay (shows when video is playing) */}
                {isPlaying && (
                  <div className="gdc-video-controls-overlay">
                    <button
                      className="gdc-video-control-btn"
                      onClick={handlePlayVideo}
                    >
                      {isPlaying ? <FontAwesomeIcon icon={faPauseCircle} /> : <FontAwesomeIcon icon={faPlayCircle} />}
                    </button>
                  </div>
                )}
              </div>

              <div className="gdc-video-info-single-light">
                <h3 className="gdc-video-title-single-light">{demoVideo.title}</h3>
                <p className="gdc-video-instructor-single-light">Instructor: <span>{demoVideo.instructor}</span></p>
                <p className="gdc-video-description-single-light">{demoVideo.description}</p>
                <button
                  className="gdc-watch-btn-single"
                  onClick={handlePlayVideo}
                >
                  {isPlaying ? <><FontAwesomeIcon icon={faPauseCircle} /> Pause Video</> : <><FontAwesomeIcon icon={faPlayCircle} /> Watch Free Demo Lesson</>}
                </button>
              </div>
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
                alt="Graphic Design Masterclass Certificate"
                className="gdc-certificate-image"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                }}
              />

              {/* Simplified Lock Overlay - No button, just lock icon and text */}
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
                    <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace('✅ ', '')}
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



      {/* Premium Testimonials - V9 Grid Layout */}
      <section className="gdc-testi-grid-section">
        <div className="gdc-container">
          <div className="gdc-testi-grid-wrapper">

            {/* Left side: Headers and Intro */}
            <div className="gdc-testi-grid-left">
              <h2 className="gdc-testi-main-title">Experience Learning Like Never Before</h2>
              <p className="gdc-testi-subtitle">
                Discover Personalized, AI-Powered Learning that prepares students for success in the real world. Read transformational stories from our top alumni.
              </p>
            </div>

            {/* Right side: 3-Card Grid */}
            <div className="gdc-testi-grid-right">
              {/* Top Large Card */}
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

              {/* Bottom Row */}
              <div className="gdc-testi-squares-row">
                {/* Bottom Left: Lime Green Theme */}
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

                {/* Bottom Right: Light Purple Theme */}
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

          {/* Redesigned Contact Section - Start Your Design Journey Today */}
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

              {/* Contact Rays */}
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

          <div className="gdc-v2-cta-box">
            <h3 className="gdc-v2-cta-title">Secure Your Seat</h3>
            <p className="gdc-v2-enroll-sub" style={{ marginBottom: '40px' }}>Only 5 Seats Left for the Upcoming Batch</p>

            {showEnrollment ? (
              <div className="gdc-enrollment-form-expanded-dark">
                <div className="gdc-form-header-expanded-dark">
                  <h4><FontAwesomeIcon icon={faClipboard} /> Enrollment Form</h4>
                  <button
                    className="gdc-form-close-btn-dark"
                    onClick={() => setShowEnrollment(false)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="gdc-enrollment-form-content-dark">
                  <div className="gdc-form-grid-expanded-dark">
                    <div className="gdc-form-group-expanded-dark">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="gdc-form-group-expanded-dark">
                      <label>Email ID *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="gdc-form-group-expanded-dark">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div className="gdc-form-group-expanded-dark">
                      <label>Course *</label>
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

                  <button type="submit" className="gdc-v2-enroll-btn">
                    Complete Enrollment
                  </button>
                </form>
              </div>
            ) : (
              <div className="gdc-v2-cta-actions">
                <button
                  className="gdc-v2-enroll-btn"
                  onClick={() => setShowEnrollment(true)}
                >
                  <FontAwesomeIcon icon={faBullseye} /> Enroll In Masterclass Now
                </button>
                <p className="gdc-cta-note-dark" style={{ marginTop: '20px', color: '#666' }}>Secure your future in design with one click</p>
              </div>
            )}
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