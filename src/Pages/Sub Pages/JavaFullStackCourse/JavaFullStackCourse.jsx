import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { submitEnrollment } from "../../Sub Pages/HandleSubmit/HandleSubmit";
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import NavigationBar from '../../TechLearningSection/NavigationBar/NavigationBar';
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
  faDatabase,
  faCloud,
  faLayerGroup,
  faMagnet
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './JavaFullStackCourse.css';
import SubFooterTwo from '../subFooterTwo/NewFooter';
import BackToTop from '../../../Components/BackToTop/BackToTop';
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
import avatarF1 from "../../../assets/testimonials/cartoon_female_1.png";
import avatarF3 from "../../../assets/testimonials/cartoon_female_3.png";
import avatarM1 from "../../../assets/testimonials/cartoon_male_1.png";
import avatarM2 from "../../../assets/testimonials/cartoon_male_2.png";
import avatarM3 from "../../../assets/testimonials/cartoon_male_3.png";
import avatarF2 from "../../../assets/testimonials/cartoon_female_2.png";

// Java Full Stack Hero Assets
import jfsHero1 from '../../../assets/jfs_hero_1.jpeg';
import jfsHero2 from '../../../assets/jfs_hero_2.jpeg';
import jfsHero3 from '../../../assets/j.jpeg';
import jfsHero4 from '../../../assets/v.jpeg';
import jfsHero5 from '../../../assets/jfs_hero_5.jpeg';
import { div } from 'three/src/nodes/math/OperatorNode.js';

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
  const [fluidScale, setFluidScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
      let newScale = 1;

      if (width >= 1440) {
        newScale = width / 1440;
      } else if (width <= 768) {
        // Hybrid mobile scaling matching original clamp bounds
        newScale = Math.max(0.8, Math.min(width / 480, 1.2));
      } else {
        // Between 768 and 1440: Optimized scaling for tablets to ensure proper expansion
        // This prevents the "stuck at 0.7" issue and targets ~0.9 scale near 1024px.
        newScale = Math.max(0.7, width / 1150);
      }

      setFluidScale(newScale);
    };

    // Calculate on mount and attach
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const testiInterval = setInterval(() => {
      setTestiSetIndex(prev => (prev + 1) % 3);
    }, 5000); // Swap every 5 seconds
    return () => clearInterval(testiInterval);
  }, []);

  const allTestimonials = [
    { name: "Suresh P", role: "Java Developer", text: "Gained confidence of working with real enterprise projects which I used to fear. Technical interviews are now easy! The course provided me with the exactly industry-standard skills and professional coding techniques needed for global success.", avatar: avatarM1 },
    { name: "Priya R", role: "Full Stack Engineer", text: "The practical approach and project-based learning completely transformed how I build software. Highly recommended!", avatar: avatarF1 },
    { name: "Rahul M", role: "Backend Architect", text: "The curriculum is perfectly aligned with industry standards. Easily the best investment for my career. The projects really challenged my limits.", avatar: avatarM3 },
    { name: "Anita K", role: "Freelancer", text: "I landed my first freelance gig within weeks of starting the program. The support here is unmatched and the mentors really help you bridge the gap between creative logic and professional execution for international clients.", avatar: avatarF2 },
    { name: "Vikas S", role: "Tech Lead", text: "From zero to building full-fledged microservices. The mentors really push you to bring out your best.", avatar: avatarM2 },
    { name: "Sneha T", role: "Cloud Engineer", text: "Learning system architecture here helped me create high-scalable cloud environments. Truly a game-changer.", avatar: avatarF3 },
    { name: "Rohan D", role: "Software Engineer", text: "The focus on modern tools like Spring Boot and React sets this course apart from all other programs. It provided me with the exactly industry-standard skills needed to land a high-paying role as a software engineer at a top global firm.", avatar: avatarM3 },
    { name: "Kavya J", role: "Database Admin", text: "I finally understand the database sharding and optimization. The deep dives are perfect for crafting premium data solutions for my global tech clients.", avatar: avatarF3 },
    { name: "Manoj V", role: "Integration Specialist", text: "The community and constant feedback loops made learning complex APIs feel like a breeze. It's the perfect environment for anyone entering the world of digital software.", avatar: avatarM1 }
  ];

  const activeTestimonials = allTestimonials.slice(testiSetIndex * 3, (testiSetIndex * 3) + 3);

  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Java Full Stack'
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
      icon: <FontAwesomeIcon icon={faCloud} />,
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
      icon: <FontAwesomeIcon icon={faLayerGroup} />,
      title: "Full Stack Integration",
      desc: "Build a diverse, professional portfolio featuring high-quality real-world case studies that showcase your versatility and problem-solving skills to top global tech employers and agencies. Present your work with clarity and confidence to stand out in competitive software industries."
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: "Engineering Prep",
      desc: "Get ready for your first engineering role with dedicated technical interview preparation, system design strategies, and comprehensive agile project management training for career success in the software industry. Master the art of problem-solving under pressure, learn to optimize your LinkedIn and resume, and gain the confidence to lead technical discussions with senior engineers at top global tech firms."
    },
    {
      icon: <FontAwesomeIcon icon={faMicrochip} />,
      title: "Architectural Mindset",
      desc: "Master an architectural mindset to analyze and solve complex software challenges with professional engineering logic. Learn to design distributed systems, handle scale, and implement robust security layers. Gain deep insights into microservices, message queues, and database sharding to build future-proof, enterprise-grade applications for the global market."
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
      { name: "ChatGPT", icon: <FontAwesomeIcon icon={faComments} />, desc: "AI pair programming and logic optimization.", bg: "linear-gradient(135deg, #FF6B00 0%, #FF8533 100%)" },
      { name: "Gemini", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Technical documentation and research aid.", bg: "linear-gradient(135deg, #FF4500 0%, #FF6347 100%)" },
      { name: "GitHub Copilot", icon: <FontAwesomeIcon icon={faCodeBranch} />, desc: "Real-time AI code completion support.", bg: "linear-gradient(135deg, #D35400 0%, #E67E22 100%)" },
      { name: "Blackbox AI", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Intelligent code search and generation.", bg: "linear-gradient(135deg, #C0392B 0%, #E74C3C 100%)" }
    ],
    [
      { name: "Spring AI", icon: <FontAwesomeIcon icon={faServer} />, desc: "Integrating AI models into Spring apps.", bg: "linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)" },
      { name: "LangChain4j", icon: <FontAwesomeIcon icon={faNetworkWired} />, desc: "Java power for LLM applications.", bg: "linear-gradient(135deg, #2980B9 0%, #3498DB 100%)" },
      { name: "Postman", icon: <FontAwesomeIcon icon={faGlobe} />, desc: "Testing and documenting REST APIs.", bg: "linear-gradient(135deg, #E67E22 0%, #F39C12 100%)" },
      { name: "Swagger", icon: <FontAwesomeIcon icon={faFileAlt} />, desc: "API specification and visualization.", bg: "linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)" }
    ],
    [
      { name: "MongoDB", icon: <FontAwesomeIcon icon={faDatabase} />, desc: "NoSQL document-based data storage.", bg: "linear-gradient(135deg, #16A085 0%, #1ABC9C 100%)" },
      { name: "Redis", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "High-speed caching and sessions.", bg: "linear-gradient(135deg, #C0392B 0%, #E74C3C 100%)" },
      { name: "AWS Bedrock", icon: <FontAwesomeIcon icon={faCloud} />, desc: "Cloud foundations for AI workload.", bg: "linear-gradient(135deg, #F39C12 0%, #F1C40F 100%)" },
      { name: "Docker", icon: <FontAwesomeIcon icon={faBriefcase} />, desc: "App containerization and delivery.", bg: "linear-gradient(135deg, #2980B9 0%, #3498DB 100%)" }
    ],
    [
      { name: "SonarQube", icon: <FontAwesomeIcon icon={faCheckCircle} />, desc: "AI-driven static code analysis.", bg: "linear-gradient(135deg, #34495E 0%, #5D6D7E 100%)" },
      { name: "Snyk", icon: <FontAwesomeIcon icon={faLock} />, desc: "Automated vulnerability detection.", bg: "linear-gradient(135deg, #4B1D95 0%, #7C3AED 100%)" },
      { name: "Jenkins", icon: <FontAwesomeIcon icon={faSyncAlt} />, desc: "Automated CI/CD pipelines.", bg: "linear-gradient(135deg, #D35400 0%, #E67E22 100%)" },
      { name: "IntelliJ IDEA", icon: <FontAwesomeIcon icon={faLaptopCode} />, desc: "Elite IDE for Java engineering.", bg: "linear-gradient(135deg, #2C3E50 0%, #465769 100%)" }
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
      icon: <FontAwesomeIcon icon={faUserTie} />,
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
      "Digital & Physical Copy",
      "Lifetime Validity",
      "Online Verification",
      "International Recognition",
      "QR Code Authentication",
      "Accredited by Tech Council"
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
    <FontAwesomeIcon icon={faMagnet} />,
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
        course: 'Java Full Stack'
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
    <>
      <div>
        <TopNavBar />
        <NavigationBar />
        <div className="jfs-page" style={{ '--jfs-fluid-scale': `${fluidScale}px` }}>
          {/* Hero Section Upgrade - Minimalist Premium Design */}
          <header className="jfs-hero-v3">
            {/* Animated Sparkles - Randomly placed, bigger and bolder */}
            <div className="jfs-v3-sparkle-wrapper">
              <div className="jfs-v3-sparkle sparkle-lg sparkle-pos-1"><FontAwesomeIcon icon={faStar} /></div>
              <div className="jfs-v3-sparkle sparkle-sm sparkle-pos-2"><FontAwesomeIcon icon={faStar} /></div>
              <div className="jfs-v3-sparkle sparkle-md sparkle-pos-3"><FontAwesomeIcon icon={faMagic} /></div>
              <div className="jfs-v3-sparkle sparkle-lg sparkle-pos-4"><FontAwesomeIcon icon={faStar} /></div>
              <div className="jfs-v3-sparkle sparkle-sm sparkle-pos-5"><FontAwesomeIcon icon={faMagic} /></div>
              <div className="jfs-v3-sparkle sparkle-md sparkle-pos-6"><FontAwesomeIcon icon={faStar} /></div>
              <div className="jfs-v3-sparkle sparkle-lg sparkle-pos-7"><FontAwesomeIcon icon={faStar} /></div>
              <div className="jfs-v3-sparkle sparkle-sm sparkle-pos-8"><FontAwesomeIcon icon={faMagic} /></div>
            </div>

            <div className="jfs-v3-container">
              <div className="jfs-v3-header-content">
                <h1 className="jfs-v3-main-title">
                  Professional <span className="jfs-v3-arrow-capsule-straight">→</span> Java <br /> Full Stack Mastery
                </h1>

                <p className="jfs-v3-subtitle-original">
                  Transform Your Tech Career in 6 Months. Master industry frameworks like Spring Boot, Microservices & React.js to build scalable enterprise apps.
                </p>

                <div className="jfs-v3-sub-row">
                  <div className="jfs-v3-members-info">
                    <p>With more than</p>
                    <h3>3K+ DEVELOPERS</h3>
                    <h3>800+ LAB SESSIONS</h3>
                  </div>

                  <button className="jfs-v3-join-btn" onClick={scrollToForm}>
                    Join us <span className="jfs-v3-join-arrow">↗</span>
                  </button>
                </div>
              </div>

              <div className="jfs-v3-asset-gallery">
                <div className="jfs-v3-card jfs-card-blue">
                  <img src={jfsHeroAssets.a1} alt="JFS Asset 1" className="jfs-v3-card-img" />
                </div>
                <div className="jfs-v3-card jfs-card-dark">
                  <img src={jfsHeroAssets.a2} alt="JFS Asset 2" className="jfs-v3-card-img" />
                </div>
                <div className="jfs-v3-card jfs-card-center-featured">
                  <img src={jfsHeroAssets.a3} alt="JFS Asset 3" className="jfs-v3-card-img" />
                </div>
                <div className="jfs-v3-card jfs-card-dark">
                  <img src={jfsHeroAssets.a4} alt="JFS Asset 4" className="jfs-v3-card-img" />
                </div>
                <div className="jfs-v3-card jfs-card-blue">
                  <img src={jfsHeroAssets.a5} alt="JFS Asset 5" className="jfs-v3-card-img" />
                </div>
              </div>
            </div>
          </header>

          {/* Marquee Section bridging Hero and Intro */}
          <div className="jfs-v2-marquee-container">
            <div className="jfs-v2-marquee">
              <span>
                JAVA <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SPRING BOOT <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                MICROSERVICES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                REACT.JS <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                AWS CLOUD <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                DOCKER <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SQL & NO-SQL <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                KUBERNETES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                JAVA <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SPRING BOOT <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                MICROSERVICES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                REACT.JS
              </span>
              <span aria-hidden="true">
                JAVA <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SPRING BOOT <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                MICROSERVICES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                REACT.JS <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                AWS CLOUD <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                DOCKER <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SQL & NO-SQL <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                KUBERNETES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                JAVA <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                SPRING BOOT <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                MICROSERVICES <FontAwesomeIcon icon={faStar} className="jfs-marquee-star" />
                REACT.JS
              </span>
            </div>
          </div>

          {/* New Intro Section - Re-designed to 2-column layout */}
          <section className="jfs-intro-section">
            <div className="jfs-container">
              <div className="jfs-intro-layout">
                <div className="jfs-intro-left">
                  <h2 className="jfs-intro-title">Master Java Full <br /> Stack in 6 Months</h2>
                  <p className="jfs-intro-desc">
                    Unleash your developer potential with our intensive program designed to transform beginners into industry-ready engineers. Master every tool and concept needed for a global software career.
                  </p>
                  <button className="jfs-intro-cta" onClick={scrollToForm}>Contact</button>
                </div>

                <div className="jfs-intro-right">
                  <div className="jfs-intro-grid">
                    {introCategories.map((cat, i) => (
                      <div key={i} className="jfs-intro-category-box">
                        <div className="jfs-intro-card-icon" style={{ backgroundColor: cat.bgColor, color: cat.iconColor }}>
                          {cat.icon}
                        </div>
                        <div className="jfs-intro-card-content">
                          <h3 className="jfs-intro-card-title">{cat.title}</h3>
                          <div className="jfs-intro-card-points">
                            {cat.points.map((point, idx) => (
                              <div key={idx} className="jfs-intro-point">
                                <FontAwesomeIcon icon={faStar} className="jfs-intro-point-star" />
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
          <section className="jfs-dgm-section jfs-dgm-outcomes-numbered">
            <div className="jfs-dgm-container">
              <div className="jfs-dgm-outcomes-header-row">
                <div className="jfs-dgm-outcomes-title-col">
                  <h2 className="jfs-dgm-outcomes-main-title">Course Outcomes</h2>
                </div>
                <div className="jfs-dgm-outcomes-desc-col">
                  <p className="jfs-dgm-outcomes-top-desc text-left">
                    What you'll achieve after completing this program. Master full-stack architectures, build scalable applications, and transform into an industry-ready Java Full Stack Developer.
                  </p>
                </div>
              </div>

              <div className="jfs-dgm-outcomes-numbered-grid">
                {courseOutcomes.map((outcome, index) => {
                  const isBlack = index === 1 || index === 3 || index === 5;
                  const cardNumber = (index + 1).toString().padStart(2, '0');

                  return (
                    <div
                      key={index}
                      className={`jfs-dgm-outcome-numbered-card ${isBlack ? 'black-bg' : 'white-bg'}`}
                    >
                      <div className="jfs-dgm-outcome-card-content-wrapper">
                        {/* Left side - Number and Icon */}
                        <div className="jfs-dgm-outcome-card-left">
                          <div className="jfs-dgm-outcome-card-number">{cardNumber}</div>
                          <div className="jfs-dgm-outcome-numbered-icon">{outcome.icon}</div>
                        </div>

                        {/* Right side - Title and Description */}
                        <div className="jfs-dgm-outcome-card-right">
                          <h3 className="jfs-dgm-outcome-numbered-title">{outcome.title}</h3>
                          <p className="jfs-dgm-outcome-numbered-desc">{outcome.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>


          {/* 6-Month Course Breakdown - Vertical Slider Redesign */}
          <section className="jfs-curriculum-v2-section">
            <div className="jfs-container">
              <div className="jfs-curriculum-v2-layout">
                <div className="jfs-curriculum-v2-left">
                  <span className="jfs-curriculum-v2-tag">PRO COURSE</span>
                  <h2 className="jfs-curriculum-v2-title">6-Month Course <br /> Breakdown</h2>
                  <p className="jfs-curriculum-v2-desc">
                    A comprehensive structured learning path designed for industry excellence. Master software architecture, professional frameworks, and portfolio building in 6 intensive months.
                  </p>

                  <div className="jfs-curriculum-v2-stats">
                    <div className="jfs-stat-item">
                      <span className="jfs-stat-num">50+</span>
                      <span className="jfs-stat-label">Real Projects</span>
                    </div>
                    <div className="jfs-stat-item">
                      <span className="jfs-stat-num">100%</span>
                      <span className="jfs-stat-label">Practical</span>
                    </div>
                  </div>
                </div>

                <div className="jfs-curriculum-v2-right">
                  {/* Vertical Navigation Controls - Top Right precisely as per design */}
                  <div className="jfs-curriculum-nav-v2">
                    <button className="jfs-nav-btn-v2" onClick={prevModule}><FontAwesomeIcon icon={faChevronUp} /></button>
                    <button className="jfs-nav-btn-v2" onClick={nextModule}><FontAwesomeIcon icon={faChevronDown} /></button>
                  </div>

                  <div className="jfs-slider-v5-container">
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
                          className={`jfs-curriculum-v5-card ${cardState}`}
                        >
                          <div className="jfs-curriculum-v5-inner">
                            <div className="jfs-curriculum-v5-bg">
                              <img src={module.bgImage} alt={module.title} className="jfs-curriculum-v5-img" />
                              <div className="jfs-curriculum-v5-overlay"></div>
                            </div>

                            <div className="jfs-curriculum-v5-content">
                              <div className="jfs-curriculum-v5-header">
                                <span className="jfs-curriculum-v5-month">{module.month}</span>
                                <span className="jfs-curriculum-v5-proj">Projects: {module.projects}</span>
                              </div>
                              <h3 className="jfs-curriculum-v5-title">{module.title}</h3>
                              <div className="jfs-curriculum-v5-topics">
                                {module.topics.map((topic, tidx) => (
                                  <div key={tidx} className="jfs-curriculum-v5-topic">
                                    <FontAwesomeIcon icon={faCheck} className="jfs-curriculum-v5-check" /> {topic}
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
          <section className="jfs-tools-v2 jfs-tools-container">
            <div className="jfs-container">
              <div className="jfs-tools-v2-header">
                <h2 className="jfs-tools-v2-title"> AI Tools & Resources</h2>
                <p className="jfs-tools-v2-subtitle">Master the industry's most powerful creative workflow</p>
              </div>

              <div className="jfs-tools-v2-layout">
                {/* Sidebar Tabs */}
                <div className="jfs-tools-sidebar">
                  {["AI Dev Assistants", "Backend & AI", "Cloud & Data", "Engineering Suite"].map((label, idx) => (
                    <button
                      key={idx}
                      className={`jfs-tool-tab ${activeToolCategory === idx ? 'active' : ''}`}
                      onClick={() => setActiveToolCategory(idx)}
                    >
                      <span className="tab-number">0{idx + 1}</span>
                      <span className="tab-label">{label}</span>
                    </button>
                  ))}
                </div>

                {/* Main Overlapping Pods Display */}
                <div className="jfs-tools-main-display">
                  <div className="jfs-pods-container" key={activeToolCategory}>
                    {toolsV2Data[activeToolCategory].map((tool, index) => (
                      <div key={index} className={`jfs-tool-pod pod-${index + 1}`}>
                        <div className="jfs-pod-inner">
                          <div className="jfs-pod-bg-image" style={{ background: tool.bg || `url(${tool.img})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>
                          <div className="jfs-pod-content">
                            <div className="jfs-pod-icon">{tool.icon}</div>
                            <h4 className="jfs-pod-name">{tool.name}</h4>
                            <p className="jfs-pod-desc">{tool.desc}</p>
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
          <section className="jfs-dgm-section jfs-dgm-benefits-reimagined">
            <div className="jfs-dgm-container">
              <div className="jfs-dgm-benefits-header">
                <h2 className="jfs-dgm-benefits-title">Where Features Meet For You</h2>
              </div>

              <div className="jfs-dgm-benefits-staggered">
                {/* Row 1: 5 Cards */}
                <div className="jfs-dgm-benefits-row jfs-dgm-row-5">
                  {benefits.slice(0, 5).map((benefit, index) => (
                    <div key={index} className="jfs-dgm-new-benefit-card">
                      {(() => {
                        const absoluteIndex = 0 + index;
                        const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                        return (
                          <div className="jfs-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                            {benefit.icon}
                          </div>
                        );
                      })()}
                      <div className="jfs-dgm-new-content">
                        <h3>{benefit.title}</h3>
                        <p>{benefit.description.substring(0, 70)}...</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Layout - Left Tall + Middle Col (Row 2 & 3) + Right Tall */}
                <div className="jfs-dgm-benefits-bottom-layout">

                  {/* Left Tall Card */}
                  <div className="jfs-dgm-new-benefit-card jfs-dgm-benefit-card-tall">
                    <div className="jfs-dgm-new-icon" style={{ background: hexToRgba("#BAE6FD", 0.18), color: "#BAE6FD" }}>
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div className="jfs-dgm-new-content">
                      <h3>Industry Recognition</h3>
                      <p>
                        Get certified with globally recognized credentials that validate your expertise and strengthen your professional credibility across industries. Showcase your skills with confidence and stand out in competitive job markets. Unlock better global career opportunities with certifications.
                      </p>
                    </div>
                  </div>

                  {/* Middle Grid Column */}
                  <div className="jfs-dgm-benefits-middle-col">
                    <div className="jfs-dgm-benefits-row jfs-dgm-row-3">
                      {benefits.slice(5, 8).map((benefit, index) => (
                        <div key={index} className="jfs-dgm-new-benefit-card">
                          {(() => {
                            const absoluteIndex = 5 + index;
                            const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                            return (
                              <div className="jfs-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                {benefit.icon}
                              </div>
                            );
                          })()}
                          <div className="jfs-dgm-new-content">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description.substring(0, 70)}...</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="jfs-dgm-benefits-row jfs-dgm-row-2">
                      {benefits.slice(8, 10).map((benefit, index) => (
                        <div key={index} className="jfs-dgm-new-benefit-card">
                          {(() => {
                            const absoluteIndex = 8 + index;
                            const color = benefitIconPalette[absoluteIndex] || "#BAE6FD";
                            return (
                              <div className="jfs-dgm-new-icon" style={{ background: hexToRgba(color, 0.18), color }}>
                                {benefit.icon}
                              </div>
                            );
                          })()}
                          <div className="jfs-dgm-new-content">
                            <h3>{benefit.title}</h3>
                            <p>{benefit.description.substring(0, 70)}...</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Tall Card */}
                  <div className="jfs-dgm-new-benefit-card jfs-dgm-benefit-card-tall">
                    <div className="jfs-dgm-new-icon" style={{ background: hexToRgba("#C4B5FD", 0.18), color: "#C4B5FD" }}>
                      <FontAwesomeIcon icon={faTrophy} />
                    </div>
                    <div className="jfs-dgm-new-content">
                      <h3>Lifetime Updates</h3>
                      <p>
                        Stay ahead with free lifetime access to all future course updates and continuously evolving learning materials. Keep your skills sharp by exploring practical resources, real-world examples, and new concepts. Adapt confidently to the changing digital landscape and achieve long-term career growth.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </section>


          {/* Certificate Section with Simplified Lock Overlay */}
          <section className="jfs-section jfs-dark-bg">
            <div className="jfs-container">
              <h2 className="jfs-section-title">Professional Certification</h2>
              <p className="jfs-section-subtitle">Earn a globally recognized certificate upon completion</p>

              <div className="jfs-certificate-single">
                <div className="jfs-certificate-image-wrapper">
                  <img
                    src={certificate.image}
                    alt="Graphic Design Masterclass Certificate"
                    className="jfs-certificate-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80";
                    }}
                  />

                  {/* Simplified Lock Overlay - No button, just lock icon and text */}
                  <div className="jfs-certificate-lock-overlay">
                    <div className="jfs-lock-icon"><FontAwesomeIcon icon={faLock} /></div>
                    <div className="jfs-lock-text">Certificate Locked</div>
                  </div>

                  <div className="jfs-certificate-overlay">
                    <span className="jfs-certificate-badge">Your Professional Certificate Template</span>
                  </div>
                  <div className="jfs-certificate-download-note">
                    <p>This is a sample template. Your actual certificate will include your name, course details, and issue date.</p>
                  </div>
                </div>

                <div className="jfs-certificate-info-single">
                  <h3 className="jfs-certificate-title-single">{certificate.title}</h3>
                  <p className="jfs-certificate-desc-single">{certificate.description}</p>

                  <div className="jfs-certificate-features-single">
                    {certificate.features.map((feature, index) => (
                      <div key={index} className="jfs-certificate-feature-item-single">
                        <FontAwesomeIcon icon={faCheckCircle} /> {feature.replace('âœ… ', '')}
                      </div>
                    ))}
                  </div>

                  <div className="jfs-certificate-benefits">
                    <div className="jfs-benefit">
                      <span className="jfs-benefit-icon"><FontAwesomeIcon icon={faGraduationCap} /></span>
                      <span className="jfs-benefit-text">Enhances your professional credibility</span>
                    </div>
                    <div className="jfs-benefit">
                      <span className="jfs-benefit-icon"><FontAwesomeIcon icon={faBriefcase} /></span>
                      <span className="jfs-benefit-text">Increases job opportunities by 75%</span>
                    </div>
                    <div className="jfs-benefit">
                      <span className="jfs-benefit-icon"><FontAwesomeIcon icon={faGlobe} /></span>
                      <span className="jfs-benefit-text">Globally recognized by employers</span>
                    </div>
                    <div className="jfs-benefit">
                      <span className="jfs-benefit-icon"><FontAwesomeIcon icon={faQrcode} /></span>
                      <span className="jfs-benefit-text">QR code verification for authenticity</span>
                    </div>
                  </div>

                  <div className="jfs-certificate-instructions">
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
          <section className="jfs-testi-grid-section">
            <div className="jfs-container">
              <div className="jfs-testi-grid-wrapper">

                {/* Left side: Headers and Intro */}
                <div className="jfs-testi-grid-left">
                  <h2 className="jfs-testi-main-title">Experience Learning Like Never Before</h2>
                  <p className="jfs-testi-subtitle">
                    Discover Personalized, AI-Powered Learning that prepares students for success in the real world. Read transformational stories from our top alumni.
                  </p>
                </div>

                {/* Right side: 3-Card Grid */}
                <div className="jfs-testi-grid-right">
                  {/* Top Large Card */}
                  <div className="jfs-testi-card-top" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800)` }}>
                    <div className="jfs-testi-card-overlay">
                      <div className="jfs-testi-quote-content fade-in-anim" key={testiSetIndex}>
                        <p>"{activeTestimonials[0].text}"</p>
                        <div className="jfs-testi-author">
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
                  <div className="jfs-testi-squares-row">
                    {/* Bottom Left: Lime Green Theme */}
                    <div className="jfs-testi-card-bottom-left">
                      <div className="jfs-testi-quote-content fade-in-anim" key={testiSetIndex}>
                        <p>"{activeTestimonials[1].text}"</p>
                        <div className="jfs-testi-author">
                          <img src={activeTestimonials[1].avatar} alt={activeTestimonials[1].name} />
                          <div>
                            <h4>{activeTestimonials[1].name}</h4>
                            <p>{activeTestimonials[1].role}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right: Light Purple Theme */}
                    <div className="jfs-testi-card-bottom-right">
                      <div className="jfs-testi-quote-content fade-in-anim" key={testiSetIndex}>
                        <p>"{activeTestimonials[2].text}"</p>
                        <div className="jfs-testi-author">
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
          <section className="jfs-dark-enrollment-FIXED" ref={formSectionRef}>
            <div className="jfs-container">
              <div className="jfs-floating-icons-v2">
                {floatingIcons.map((icon, index) => (
                  <div
                    key={index}
                    className="jfs-v2-float-icon"
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
              <section className="jfs-v3-community-banner">
                <div className="jfs-banner-grid-overlay"></div>
                <div className="jfs-banner-decor-sparkle sp-1">✦</div>
                <div className="jfs-banner-decor-sparkle sp-2">✦</div>
                <div className="jfs-banner-decor-sparkle sp-3">✦</div>
                <div className="jfs-banner-decor-circle cir-1"></div>
                <div className="jfs-banner-decor-circle cir-2"></div>

                <div className="jfs-banner-container">
                  <div className="jfs-banner-content">
                    <h2 className="jfs-banner-title">Start Your Tech <br /> Journey Today</h2>


                    <div className="jfs-banner-ratings">
                      <div className="jfs-rating-box">
                        <div className="jfs-stars">★★★★★</div>
                        <div className="jfs-rating-text">4.9 / 5 rating</div>
                        <div className="jfs-rating-source">Coursezilla</div>
                      </div>
                      <div className="jfs-rating-box">
                        <div className="jfs-stars">★★★★★</div>
                        <div className="jfs-rating-text">4.8 / 5 rating</div>
                        <div className="jfs-rating-source">Globalskills</div>
                      </div>
                    </div>


                  </div>

                  {/* Contact Rays */}
                  <div className="jfs-ray jfs-ray-left-top">
                    <div className="jfs-ray-trail"></div>
                    <div className="jfs-ray-box">
                      <div className="jfs-ray-icon icon-email"><FontAwesomeIcon icon={faEnvelope} /></div>
                      <div className="jfs-ray-content">
                        <h4>Email Support</h4>
                        <p>hello@engloraylearn.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="jfs-ray jfs-ray-left-bottom">
                    <div className="jfs-ray-trail"></div>
                    <div className="jfs-ray-box">
                      <div className="jfs-ray-icon icon-whatsapp"><FontAwesomeIcon icon={faWhatsapp} /></div>
                      <div className="jfs-ray-content">
                        <h4>WHATSAPP</h4>
                        <p>+91 63681 75990</p>
                      </div>
                    </div>
                  </div>

                  <div className="jfs-ray jfs-ray-right-top">
                    <div className="jfs-ray-trail"></div>
                    <div className="jfs-ray-box">
                      <div className="jfs-ray-icon icon-center"><FontAwesomeIcon icon={faMapMarkerAlt} /></div>
                      <div className="jfs-ray-content">
                        <h4>Learning Center</h4>
                        <p>Madurai, Tamil Nadu</p>
                      </div>
                    </div>
                  </div>

                  <div className="jfs-ray jfs-ray-right-bottom">
                    <div className="jfs-ray-trail"></div>
                    <div className="jfs-ray-box">
                      <div className="jfs-ray-icon icon-chat"><FontAwesomeIcon icon={faComments} /></div>
                      <div className="jfs-ray-content">
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
                            <option value="Java Full Stack">Java Full Stack</option>
                            <option value="Graphic Design">Graphic Design</option>
                            <option value="Ui/Ux Design">Ui/Ux Design</option>
                            <option value="Drawing">Drawing</option>
                            <option value="Digital Marketing">Digital Marketing</option>
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
            <div className="jfs-toast">
              <div className="jfs-toast-content">
                <div className="jfs-toast-icon"><FontAwesomeIcon icon={faTrophy} /></div>
                <div className="jfs-toast-message">
                  <h4>Enrollment Successful!</h4>
                  <p>Welcome to Java Full Stack Course! Our team will contact you within 24 hours.</p>
                </div>
              </div>
            </div>
          )}
          <SubFooterTwo />
          <BackToTop />
        </div>
      </div>
    </>
  );
};

export default JavaFullStackCourse;