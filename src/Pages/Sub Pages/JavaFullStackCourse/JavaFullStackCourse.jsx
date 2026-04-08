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
  faMagic,
  faServer,
  faNetworkWired,
  faTerminal,
  faMicrochip,
  faCodeBranch,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './JavaFullStackCourse.css';

// Import your assets - KEEPING COMMENTED SECTIONS UNCHANGED
import demoVideoFile from '../../../assets/Final GD Course video.mp4';
import videoThumbnail from '../../../assets/DemoThumbnail.png'; // Optional
import certificateImage from '../../../assets/Full-Stack.png'; // Your certificate image
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
// Custom Testimonial Avatars
import avatarF1 from '../../../assets/t1.png';
import avatarM1 from '../../../assets/t2.png';
import avatarF2 from '../../../assets/t3.png';

// Java Full Stack Hero Assets
import jfsHero1 from '../../../assets/jfs_hero_1.jpeg';
import jfsHero2 from '../../../assets/jfs_hero_2.jpeg';
import jfsHero3 from '../../../assets/j.jpeg';
import jfsHero4 from '../../../assets/v.jpeg';
import jfsHero5 from '../../../assets/jfs_hero_5.jpeg';

const jfsHeroAssets = {
  a1: jfsHero1,
  a2: jfsHero2,
  a3: jfsHero3,
  a4: jfsHero4,
  a5: jfsHero5
};



const JavaFullStackCourse = () => {
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
    { name: "Suresh P", role: "Java Developer", text: "Gained confidence of working with real enterprise projects which I used to fear. Technical interviews are now easy! The course provided me with the exactly industry-standard skills and professional coding techniques needed for global success.", avatar: avatarM1 },
    { name: "Priya R", role: "Full Stack Engineer", text: "The practical approach and project-based learning completely transformed how I build software. Highly recommended!", avatar: avatarF1 },
    { name: "Rahul M", role: "Backend Architect", text: "The curriculum is perfectly aligned with industry standards. Easily the best investment for my career. The projects really challenged my limits.", avatar: avatarM1 },
    { name: "Anita K", role: "Freelancer", text: "I landed my first freelance gig within weeks of starting the program. The support here is unmatched and the mentors really help you bridge the gap between creative logic and professional execution for international clients.", avatar: avatarF2 },
    { name: "Vikas S", role: "Tech Lead", text: "From zero to building full-fledged microservices. The mentors really push you to bring out your best.", avatar: avatarM1 },
    { name: "Sneha T", role: "Cloud Engineer", text: "Learning system architecture here helped me create high-scalable cloud environments. Truly a game-changer.", avatar: avatarF1 },
    { name: "Rohan D", role: "Software Engineer", text: "The focus on modern tools like Spring Boot and React sets this course apart from all other programs. It provided me with the exactly industry-standard skills needed to land a high-paying role as a software engineer at a top global firm.", avatar: avatarM1 },
    { name: "Kavya J", role: "Database Admin", text: "I finally understand the database sharding and optimization. The deep dives are perfect for crafting premium data solutions for my global tech clients.", avatar: avatarF1 },
    { name: "Manoj V", role: "Integration Specialist", text: "The community and constant feedback loops made learning complex APIs feel like a breeze. It's the perfect environment for anyone entering the world of digital software.", avatar: avatarM1 }
  ];

  const activeTestimonials = allTestimonials.slice(testiSetIndex * 3, (testiSetIndex * 3) + 3);

  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Java Full Stack Mastery'
  });

  const [activeToolCategory, setActiveToolCategory] = useState(0);
  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const courseData = {
    title: "Professional Java Full Stack Mastery",
    subtitle: "Transform Your Tech Career in 6 Months",
    duration: "6 Months | Live Coding & Architecture"
  };

  const courseDescription = `Unleash your developer potential with our comprehensive Java Full Stack Mastery! This 6-month intensive program is designed to transform beginners into industry-ready engineers. Our curriculum combines core programming logic with practical framework skills and real-world project experience.`;

  const introCategories = [
    {
      title: "Java Foundations",
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      points: ["OOP Principles", "Collections Framework", "Algorithm Design"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Enterprise Systems",
      icon: <FontAwesomeIcon icon={faServer} />,
      points: ["Spring Boot Core", "Hibernate ORM", "Spring Security"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Backend Architecture",
      icon: <FontAwesomeIcon icon={faNetworkWired} />,
      points: ["Microservices", "RESTful APIs", "Service Discovery"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Frontend Mastery",
      icon: <FontAwesomeIcon icon={faTerminal} />,
      points: ["React.js Hooks", "State Management", "Responsive UI"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Cloud & DevOps",
      icon: <FontAwesomeIcon icon={faRocket} />,
      points: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    },
    {
      title: "Full Stack Projects",
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      points: ["Agile Development", "System Design", "Testing Frameworks"],
      bgColor: "rgba(61, 82, 217, 0.12)", // Blue
      iconColor: "#3D52D9"
    }
  ];

  const courseOutcomes = [
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: "Backend Excellence",
      desc: "Master Java core, multithreading, and enterprise design patterns to create high-performance systems. Deliver clean, scalable code that strengthens system reliability. Gain industry-level expertise in distributed systems and professional architecture design."
    },
    {
      icon: <FontAwesomeIcon icon={faServer} />,
      title: "Framework Mastery",
      desc: "Gain deep proficiency in Spring Ecosystem, including Spring Boot, Data, and Security, following modern enterprise workflows and professional coding standards for today's competitive tech market. Work efficiently with industry tools to produce high-quality, production-ready applications."
    },
    {
      icon: <FontAwesomeIcon icon={faTerminal} />,
      title: "Frontend Integration",
      desc: "Learn to create pixel-perfect, responsive web interfaces specifically tailored for modern enterprise dashboards, SaaS platforms, and high-engagement digital experiences for leading global tech firms. Build user-centric software products that stand out in the global marketplace."
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: "Full Stack Integration",
      desc: "Build a diverse, professional portfolio featuring high-quality real-world case studies that showcase your versatility and problem-solving skills to top global tech employers and agencies. Present your work with clarity and confidence to stand out in competitive software industries."
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Engineering Prep",
      desc: "Get ready for your first engineering role with dedicated technical interview preparation, system design strategies, and comprehensive agile project management training for career success in the software industry."
    },
    {
      icon: <FontAwesomeIcon icon={faMicrochip} />,
      title: "Architectural Mindset",
      desc: "Master an architectural mindset to analyze and solve complex software challenges with professional engineering logic."
    }
  ];

  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "Java Core & OOP Foundations",
      topics: [
        'Java Fundamentals',
        'OOP Implementation',
        'Collections Framework',
        'Exceptions & File I/O',
        'Algorithm Design'
      ],
      projects: '5 Projects',
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      bgImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      month: "Month 2-3",
      title: "Backend Systems & Spring Boot",
      topics: [
        'Spring Boot Core',
        'Data Access JPA',
        'REST API Security',
        'Microservices Patterns',
        'Caching & Databases'
      ],
      projects: '15 Projects',
      icon: <FontAwesomeIcon icon={faServer} />,
      bgImage: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      month: "Month 4-5",
      title: "Modern Frontend & React",
      topics: [
        'React.js Hooks',
        'Global State Redux',
        'Next.js Implementation',
        'Full Stack Integration',
        'Testing Frameworks'
      ],
      projects: '20 Projects',
      icon: <FontAwesomeIcon icon={faTerminal} />,
      bgImage: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      month: "Month 6",
      title: "Cloud Deployment & Career",
      topics: [
        'AWS Cloud Basics',
        'Docker & Kubernetes',
        'CI/CD Workflows',
        'System Design Prep',
        'Interview Mastery'
      ],
      projects: '7 Projects',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const toolsV2Data = [
    [
      { name: "ChatGPT", icon: <FontAwesomeIcon icon={faComments} />, desc: "AI code assistant and logic optimization.", bg: "linear-gradient(135deg, #10B981 0%, #047857 100%)" },
      { name: "Gemini", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Technical documentation and research aid.", bg: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)" },
      { name: "GitHub Copilot", icon: <FontAwesomeIcon icon={faCodeBranch} />, desc: "Real-time AI pair programming support.", bg: "linear-gradient(135deg, #8B5CF6 0%, #4C1D95 100%)" },
      { name: "Notion", icon: <FontAwesomeIcon icon={faFileAlt} />, desc: "Engineering specs and project planning.", bg: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)" }
    ],
    [
      { name: "PostgreSQL", icon: <FontAwesomeIcon icon={faDatabase} />, desc: "Relational data modeling and storage.", bg: "linear-gradient(135deg, #F43F5E 0%, #BE123C 100%)" },
      { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} />, desc: "NoSQL document-based data management.", bg: "linear-gradient(135deg, #FACC15 0%, #B45309 100%)" },
      { name: "Redis", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "High-speed caching and sessions.", bg: "linear-gradient(135deg, #06B6D4 0%, #0369A1 100%)" },
      { name: "Docker", icon: <FontAwesomeIcon icon={faBriefcase} />, desc: "Containerized application delivery.", bg: "linear-gradient(135deg, #14B8A6 0%, #0F766E 100%)" }
    ],
    [
      { name: "AWS", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Global cloud infrastructure services.", bg: "linear-gradient(135deg, #6366F1 0%, #4338CA 100%)" },
      { name: "Kubernetes", icon: <FontAwesomeIcon icon={faNetworkWired} />, desc: "Orchestrating container workloads.", bg: "linear-gradient(135deg, #D946EF 0%, #A21CAF 100%)" },
      { name: "Jenkins", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "Automated build and CI pipelines.", bg: "linear-gradient(135deg, #F97316 0%, #C2410C 100%)" },
      { name: "Git", icon: <FontAwesomeIcon icon={faCodeBranch} />, desc: "Distributed version control system.", bg: "linear-gradient(135deg, #84CC16 0%, #4D7C0F 100%)" }
    ],
    [
      { name: "IntelliJ IDEA", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Leading JVM integrated development.", bg: "linear-gradient(135deg, #64748B 0%, #334155 100%)" },
      { name: "VS Code", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Lightweight polyglot code editing.", bg: "linear-gradient(135deg, #EF4444 0%, #B91C1C 100%)" },
      { name: "Postman", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Testing and documenting REST APIs.", bg: "linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)" },
      { name: "Spring Boot", icon: <FontAwesomeIcon icon={faServer} />, desc: "Enterprise application framework.", bg: "linear-gradient(135deg, #A855F7 0%, #7E22CE 100%)" }
    ]
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: 'Live Interactive Training',
      description: 'Real-time classes with industry experts and immediate doubt resolution to gain coding skills.'
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: '1:1 Mentorship',
      description: 'Personal guidance from professionals with 10+ years experience to accelerate your software career.'
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: '100% Placement Assistance',
      description: 'Career support with top companies, internship opportunities, resume building, and mock interviews.'
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy} />,
      title: 'Global Certification',
      description: 'Internationally recognized certificate from Tech Council to validate your skills globally.'
    },
    {
      icon: <FontAwesomeIcon icon={faSyncAlt} />,
      title: 'Lifetime Course Access',
      description: 'All course materials and recordings available forever. Stay updated with latest trends and tools.'
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: 'Community Access',
      description: 'Network with 5000+ developers and participate in coding challenges with global professionals.'
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: 'Cloud Lab Access',
      description: 'Free access to AWS / Azure cloud sandbox for practice during course. Get hands-on with premium tools.'
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: 'Project-Based Learning',
      description: 'Build 50+ real-world projects for your portfolio using industry-standard briefs and feedback.'
    },
    {
      icon: <FontAwesomeIcon icon={faFlask} />,
      title: 'Unit Testing Mastery',
      description: 'Conduct real system testing and gather insights to refine code through data-driven decisions.'
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
    title: 'Java Full Stack Mastery - Free Demo Lesson',
    duration: '22:15',
    instructor: 'Engloray Expert',
    description: 'Watch this sample lesson to experience our coding methodology and see how we make complex software architecture easy to understand.',
    videoFile: demoVideoFile,
    thumbnail: videoThumbnail || 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  };

  const testimonials = [
    {
      name: "Pavithra S",
      role: "Java Developer | Course Studied: Full Stack",
      review: "This course completely well structred and easy way to follow through easy guidance and mentorship.",
      image: t1
    },
    {
      name: "Suresh P",
      role: "Backend Engineer | Course Studied: Full Stack",
      review: "Gained confidence of working with real enterprise projects which I used to feared to face a client is now easy!....",
      image: t2
    },
    {
      name: "Nithya M",
      role: "Frontend Developer | Course Studied: Full Stack",
      review: "Architecture concepts were very useful to acheive the dream job in dream company.",
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
      description: 'Instant technical guidance',
      link: 'https://wa.me/916368175990'
    }
  ];

  const certificate = {
    id: 1,
    title: "Technical Certification",
    description: "Globally recognized certificate accredited by International Tech Council",
    features: [
      "✅ Digital & Physical Copy",
      "✅ Lifetime Validity",
      "✅ Online Verification",
      "✅ International Recognition",
      "✅ QR Code Authentication",
      "✅ Accredited by Tech Council"
    ],
    image: certificateImage // Your local certificate image
  };

  const floatingIcons = [
    <FontAwesomeIcon icon={faLaptopCode} />,
    <FontAwesomeIcon icon={faDatabase} />,
    <FontAwesomeIcon icon={faServer} />,
    <FontAwesomeIcon icon={faTerminal} />,
    <FontAwesomeIcon icon={faCodeBranch} />,
    <FontAwesomeIcon icon={faMicrochip} />,
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
              Professional <span className="gdc-v3-arrow-capsule-straight">→</span> Java <br /> Full Stack Mastery
            </h1>

            <p className="gdc-v3-subtitle-original">
              Transform Your Tech Career in 6 Months. Master industry frameworks like Spring Boot, Microservices & React.js to build scalable enterprise apps.
            </p>

            <div className="gdc-v3-sub-row">
              <div className="gdc-v3-members-info">
                <p>With more than</p>
                <h3>3K+ DEVELOPERS</h3>
                <h3>800+ LAB SESSIONS</h3>
              </div>

              <button className="gdc-v3-join-btn" onClick={scrollToForm}>
                Join us <span className="gdc-v3-join-arrow">↗</span>
              </button>
            </div>
          </div>

          <div className="gdc-v3-asset-gallery">
            <div className="gdc-v3-card gdc-card-blue">
              <img src={jfsHeroAssets.a1} alt="JFS Asset 1" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-dark">
              <img src={jfsHeroAssets.a2} alt="JFS Asset 2" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-center-featured">
              <img src={jfsHeroAssets.a3} alt="JFS Asset 3" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-dark">
              <img src={jfsHeroAssets.a4} alt="JFS Asset 4" className="gdc-v3-card-img" />
            </div>
            <div className="gdc-v3-card gdc-card-blue">
              <img src={jfsHeroAssets.a5} alt="JFS Asset 5" className="gdc-v3-card-img" />
            </div>
          </div>
        </div>
      </header>

      {/* Marquee Section bridging Hero and Intro */}
      <div className="gdc-v2-marquee-container">
        <div className="gdc-v2-marquee">
          <span>
            JAVA <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            SPRING BOOT <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            MICROSERVICES <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            REACT.JS <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            AWS CLOUD <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            DOCKER <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            SQL & NO-SQL <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            KUBERNETES <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            JAVA <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            SPRING BOOT <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            MICROSERVICES <FontAwesomeIcon icon={faStar} className="gdc-marquee-star" />
            REACT.JS
          </span>
        </div>
      </div>

      {/* New Intro Section - Re-designed to 2-column layout */}
      <section className="gdc-intro-section">
        <div className="gdc-container">
          <div className="gdc-intro-layout">
            <div className="gdc-intro-left">
              <h2 className="gdc-intro-title">Master Java Full <br /> Stack in 6 Months</h2>
              <p className="gdc-intro-desc">
                Unleash your developer potential with our intensive program designed to transform beginners into industry-ready engineers. Master every tool and concept needed for a global software career.
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
              <h2 className="gdc-curriculum-v2-title">6-Month Course <br /> Breakdown</h2>
              <p className="gdc-curriculum-v2-desc">
                A comprehensive structured learning path designed for industry excellence. Master software architecture, professional frameworks, and portfolio building in 6 intensive months.
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
                      <div className="gdc-pod-bg-image" style={{ background: tool.bg || `url(${tool.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                      <div className="gdc-pod-content">
                        <h4 className="gdc-pod-name">{tool.name}</h4>
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

          {/* Single Black Container with Left Content and Right Form */}
          <div className="jfs-single-enroll-container">
            {/* Left Side - Content */}
            <div className="jfs-enroll-left-content">
              <h3 className="jfs-enroll-title">Start Your Journey</h3>
              <p className="jfs-enroll-subtitle">join a focused learning experience designed to help you master practical skills, build a standout portfolio, and launch your journey as a professional FullStack Developer</p>
            </div>

            {/* Right Side - Form */}
            <div className="jfs-enroll-right-form">
              <div className="jfs-enroll-form-wrapper">
                <h4 className="jfs-enroll-form-title">Enrollment Form</h4>
                <form onSubmit={handleSubmit} className="jfs-enroll-form">
                  <div className="jfs-enroll-form-grid">
                    <div className="jfs-enroll-form-group">
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

                    <div className="jfs-enroll-form-group">
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

                    <div className="jfs-enroll-form-group">
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

                    <div className="jfs-enroll-form-group">
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

                  <button type="submit" className="jfs-enroll-submit-btn">
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
              <p>Welcome to Java Full Stack Mastery! Our team will contact you within 24 hours.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JavaFullStackCourse;