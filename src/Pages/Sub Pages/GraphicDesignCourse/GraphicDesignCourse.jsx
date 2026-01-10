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
  // Added missing icons
  faRulerCombined,
  faPenFancy,
  faLightbulb
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './GraphicDesignCourse.css';

// Import your assets - KEEPING COMMENTED SECTIONS UNCHANGED
import demoVideoFile from '../../../assets/Final GD Course video.mp4';
import videoThumbnail from '../../../assets/DemoThumbnail.png'; // Optional
import certificateImage from '../../../assets/GD Certificate.jpeg'; // Your certificate image
import { Helmet } from 'react-helmet';

const GraphicDesignCourse = () => {
  const [showEnrollment, setShowEnrollment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [expandedDescription, setExpandedDescription] = useState(false);
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Removed: const [showCertificateModal, setShowCertificateModal] = useState(false);
  const videoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: 'Graphic Design Masterclass'
  });

  const formSectionRef = useRef(null);
  const autoSlideRef = useRef(null);

  const courseData = {
    title: "Professional Graphic Design Masterclass",
    subtitle: "Transform Your Creative Career in 6 Months",
    duration: "6 Months | Live Interactive Training"
  };

  const courseDescription = `Unleash your creative potential with our comprehensive Graphic Design Masterclass! This 6-month intensive program is designed to transform beginners into industry-ready professionals. Our curriculum combines foundational design principles with practical software skills and real-world project experience.

## What You'll Master:
- **Design Fundamentals**: Color theory, typography, layout principles
- **Software Expertise**: Adobe Photoshop, Illustrator, Figma
- **Portfolio Development**: Build a stunning professional portfolio
- **Career Readiness**: Client communication, freelance setup, job preparation

## Learning Outcomes:
1. Create professional logos, branding materials, and marketing collateral
2. Design engaging social media graphics and web interfaces
3. Master industry-standard design software
4. Develop a competitive design portfolio
5. Understand design business fundamentals

## Why Choose Our Program:
- 🎯 **Industry-Aligned Curriculum**: Updated with current market demands
- 👨‍🏫 **Expert Mentors**: Learn from professionals with 10+ years experience
- 💼 **Placement Support**: 100% career assistance with top companies
- 🎓 **Global Certification**: Recognized by International Design Council
- 🔄 **Lifetime Access**: Course materials and updates forever
- 🤝 **Community Access**: Network with fellow designers`;

  const courseOutcomes = [
    { icon: <FontAwesomeIcon icon={faPaintBrush} />, title: 'Design Proficiency', desc: 'Master color theory, typography, and composition principles to create visually compelling designs' },
    { icon: <FontAwesomeIcon icon={faLaptopCode} />, title: 'Software Expertise', desc: 'Become proficient in Adobe Creative Suite, Figma, and industry-standard design tools' },
    { icon: <FontAwesomeIcon icon={faMobileAlt} />, title: 'Digital Design Skills', desc: 'Create responsive designs for web, mobile, and social media platforms' },
    { icon: <FontAwesomeIcon icon={faRocket} />, title: 'Portfolio Development', desc: 'Build a professional portfolio with 50+ real-world projects' },
    { icon: <FontAwesomeIcon icon={faBriefcase} />, title: 'Career Readiness', desc: 'Prepare for job interviews, freelance work, and client management' },
    { icon: <FontAwesomeIcon icon={faStar} />, title: 'Creative Confidence', desc: 'Develop problem-solving skills and creative thinking for design challenges' }
  ];

  const sixMonthCurriculum = [
    {
      month: "Month 1",
      title: "Design Fundamentals & Theory",
      topics: [
        'Week 1-2: Color Theory & Psychology',
        'Week 3-4: Typography & Font Pairing',
        'Week 5-6: Layout & Composition Principles',
        'Week 7-8: Design Thinking Process'
      ],
      projects: '8 Projects',
      icon: <FontAwesomeIcon icon={faBook} />,
      bgImage: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 2-3",
      title: "Software Mastery",
      topics: [
        'Adobe Photoshop: Photo Editing',
        'Illustrator: Vector Graphics',
        'Figma: UI/UX Design',
        'After Effects: Motion Basics',
        'CorelDRAW: Print Design'
      ],
      projects: '15 Projects',
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      bgImage: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 4-5",
      title: "Portfolio Development",
      topics: [
        'Logo & Brand Identity',
        'Social Media Graphics',
        'Print & Publication Design',
        'Web Interface Design',
        'Client Presentations'
      ],
      projects: '20 Projects',
      icon: <FontAwesomeIcon icon={faRocket} />,
      bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    },
    {
      month: "Month 6",
      title: "Career & Professional Skills",
      topics: [
        'Freelance Business Setup',
        'Client Communication',
        'Portfolio Presentation',
        'Job Interview Prep',
        'Salary Negotiation'
      ],
      projects: '7 Projects',
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      bgImage: 'https://images.unsplash.com/photo-1551836026-d5c2e5dc65b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const toolsResources = [
    {
      category: "AI Tools for Ideas, Concepts & Creativity ",
      items: [
        { name: "ChatGPT ", icon: <FontAwesomeIcon icon={faImage} />, description: "Design concepts, captions, taglines, brand ideas " },
        { name: "Gemini", icon: <FontAwesomeIcon icon={faPencilAlt} />, description: "Creative prompts, content ideas " },
        { name: "Notion AI ", icon: <FontAwesomeIcon icon={faPaintBrush} />, description: "Creative briefs, project planning " },
        { name: "Copy.ai ", icon: <FontAwesomeIcon icon={faVideo} />, description: "Marketing copy, ad text " }
      ]
    },
    {
      category: "AI Image Generation & Visual Creation Tools ",
      items: [
        { name: "Adobe Firefly ", icon: <FontAwesomeIcon icon={faFont} />, description: "Generative fill, text effects, AI visuals " },
        { name: "Midjourney", icon: <FontAwesomeIcon icon={faCamera} />, description: "Creative concepts, moodboards " },
        { name: "Leonardo AI ", icon: <FontAwesomeIcon icon={faPaintBrush} />, description: "High-quality artistic images " },
        { name: "DALL·E ", icon: <FontAwesomeIcon icon={faFileAlt} />, description: "Illustration & idea visuals " }
      ]
    },
    {
      category: " AI Tools for Editing, Retouching & Cleanup ",
      items: [
        { name: "Photoshop Generative Fill ", icon: <FontAwesomeIcon icon={faVideo} />, description: "Extend, replace, enhance images " },
        { name: " Clipdrop ", icon: <FontAwesomeIcon icon={faBook} />, description: "Lighting, background & enhancement " },
        { name: "Cleanup.pictures ", icon: <FontAwesomeIcon icon={faSave} />, description: "Remove unwanted objects " },
        { name: "Remove.bg ", icon: <FontAwesomeIcon icon={faClipboard} />, description: "One-click background removal " }
      ]
    },
    {
      category: "AI Tools for Fonts, Colors & Layout ",
      items: [
        { name: " Khroma ", icon: <FontAwesomeIcon icon={faChalkboardTeacher} />, description: " Smart color combinations " },
        { name: " Coolors ", icon: <FontAwesomeIcon icon={faUserTie} />, description: " Fast palette creation " },
        { name: "Fontjoy ", icon: <FontAwesomeIcon icon={faHandshake} />, description: "Perfect font combinations " },
        { name: "Canva AI ", icon: <FontAwesomeIcon icon={faBriefcase} />, description: " Auto layouts, resize & design help " }
      ]
    }
  ];

  const benefits = [
    {
      icon: <FontAwesomeIcon icon={faGraduationCap} />,
      title: 'Live Interactive Training',
      description: 'Real-time classes with industry experts and immediate doubt resolution'
    },
    {
      icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
      title: '1:1 Mentorship',
      description: 'Personal guidance from professionals with 10+ years experience'
    },
    {
      icon: <FontAwesomeIcon icon={faBriefcase} />,
      title: '100% Placement Assistance',
      description: 'Career support with top companies and internship opportunities'
    },
    {
      icon: <FontAwesomeIcon icon={faTrophy} />,
      title: 'Global Certification',
      description: 'Internationally recognized certificate from Design Council'
    },
    {
      icon: <FontAwesomeIcon icon={faSyncAlt} />,
      title: 'Lifetime Course Access',
      description: 'All course materials, updates, and recordings available forever'
    },
    {
      icon: <FontAwesomeIcon icon={faHandshake} />,
      title: 'Community Access',
      description: 'Network with 5000+ designers and participate in design challenges'
    },
    {
      icon: <FontAwesomeIcon icon={faLaptopCode} />,
      title: 'Software Access',
      description: 'Free access to Adobe Creative Suite for practice during course'
    },
    {
      icon: <FontAwesomeIcon icon={faBullseye} />,
      title: 'Project-Based Learning',
      description: 'Build 50+ real-world projects for your portfolio'
    },
    {
      icon: <FontAwesomeIcon icon={faFlask} />,
      title: 'Usability Testing',
      description: 'Conduct real user testing and gather actionable insights'
    },
    {
      icon: <FontAwesomeIcon icon={faRocket} />,
      title: 'Career Coaching',
      description: 'Interview preparation, resume building, and portfolio reviews'
    }
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
      name: 'Aravind T',
      role: 'Graphic Designer',
      review: 'Step by step teaching made learning easy with good mentorship and Guidance!..',
      rating: 5,
      avatar: 'AT',
      salary: 'GD course'
    },
    {
      name: 'Priyanka V',
      role: 'Graphic Designer',
      review: 'Very beginner friendly and useful course which help me to reach out the wanted job!',
      rating: 5,
      avatar: 'PV',
      salary: 'GD course'
    },
    {
      name: 'Suresh K',
      role: 'Graphic Designer',
      review: 'I learned print standards and professional layouts which are useful the future outcoming jobs!',
      rating: 5,
      avatar: 'SK',
      salary: 'GD course'
    }
  ];

  const contactDetails = [
    {
      icon: <FontAwesomeIcon icon={faEnvelope} />,
      title: 'Email Support',
      details: ['hello@engloraylearn.com'],
      description: '24-hour response time'
    },
    {
      icon: <FontAwesomeIcon icon={faPhone} />,
      title: 'Call/WhatsApp',
      details: ['+91 63681 75990', '+91 63699 45920'],
      description: 'Available 9 AM - 9 PM'
    },
    {
      icon: <FontAwesomeIcon icon={faMapMarkerAlt} />,
      title: 'Learning Center',
      details: ['Madurai, Tamil Nadu', 'INDIA 625001'],
      description: 'Visit for demo class'
    },
    {
      icon: <FontAwesomeIcon icon={faComments} />,
      title: 'Quick Chat',
      details: ['Live Chat Available', 'Telegram Support'],
      description: 'Instant design guidance'
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
    if (autoSlideRef.current) {
      clearInterval(autoSlideRef.current);
    }
    
    autoSlideRef.current = setInterval(() => {
      setCurrentModuleIndex((prev) => (prev + 1) % sixMonthCurriculum.length);
    }, 5000);

    return () => {
      if (autoSlideRef.current) {
        clearInterval(autoSlideRef.current);
      }
    };
  }, []);

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
    <>
    <div>
        <Helmet>
            <title>Engloray Learning</title>
            <meta name="description" content="using graphic design we can create new designer world" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
        </Helmet>
    
    <div className="gdc-page">
      {/* Hero Section */}
      <section className="gdc-hero">
        <div className="gdc-hero-bg"></div>
        <div className="gdc-hero-overlay"></div>
        
        <div className="gdc-hero-content">
          <div className="gdc-hero-badge"><FontAwesomeIcon icon={faGraduationCap} /> Professional Certification</div>
          <h1 className="gdc-hero-title">{courseData.title}</h1>
          <p className="gdc-hero-subtitle">{courseData.subtitle}</p>
          <p className="gdc-hero-duration">{courseData.duration}</p>
          
          <div className="gdc-hero-buttons">
            <button 
              className="gdc-enroll-btn"
              onClick={scrollToForm}
            >
              <FontAwesomeIcon icon={faRocket} /> Enroll Now
            </button>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="gdc-section gdc-white-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title">Master Graphic Design in 6 Months</h2>
          <p className="gdc-section-subtitle">From beginner to professional - Complete career transformation</p>
          
          <div className="gdc-course-description">
            <div className={`gdc-description-content ${expandedDescription ? 'expanded' : ''}`}>
              {courseDescription}
            </div>
            <button 
              className="gdc-readmore-btn"
              onClick={() => setExpandedDescription(!expandedDescription)}
            >
              {expandedDescription ? 'Read Less' : 'Read Full Course Details'}
            </button>
          </div>
        </div>
      </section>

      {/* Course Outcomes */}
      <section className="gdc-section gdc-dark-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title">Course Outcomes</h2>
          <p className="gdc-section-subtitle">What you'll achieve after completing this program</p>
          
          <div className="gdc-outcomes-grid">
            {courseOutcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="gdc-outcome-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gdc-outcome-icon-wrapper">
                  <div className="gdc-outcome-icon">{outcome.icon}</div>
                  <div className="gdc-outcome-icon-glow"></div>
                </div>
                <h3 className="gdc-outcome-title">{outcome.title}</h3>
                <p className="gdc-outcome-desc">{outcome.desc}</p>
                <div className="gdc-outcome-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Month Curriculum Slider */}
      <section className="gdc-section gdc-white-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title gdc-red-text">6-Month Course Breakdown</h2>
          <p className="gdc-section-subtitle">Comprehensive structured learning path</p>
          
          <div className="gdc-slider-controls-above">
            <button className="gdc-slider-prev" onClick={prevModule}>
              <FontAwesomeIcon icon={faArrowRight} style={{transform: 'rotate(180deg)'}} /> Previous Month
            </button>
            <div className="gdc-slider-dots">
              {sixMonthCurriculum.map((_, index) => (
                <button
                  key={index}
                  className={`gdc-slider-dot ${index === currentModuleIndex ? 'active' : ''}`}
                  onClick={() => setCurrentModuleIndex(index)}
                />
              ))}
            </div>
            <button className="gdc-slider-next" onClick={nextModule}>
              Next Month <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
          
          <div className="gdc-curriculum-slider-container">
            <div className="gdc-slider-wrapper">
              <div 
                className="gdc-slider-track"
                style={{ transform: `translateX(-${currentModuleIndex * 100}%)` }}
              >
                {sixMonthCurriculum.map((module, index) => (
                  <div 
                    key={index} 
                    className="gdc-module-slide"
                    style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url(${module.bgImage})` }}
                  >
                    <div className="gdc-module-content">
                      <div className="gdc-month-badge">{module.month}</div>
                      <div className="gdc-module-icon-container">
                        <div className="gdc-module-icon-slide">{module.icon}</div>
                      </div>
                      <h3 className="gdc-module-title-slide">{module.title}</h3>
                      <div className="gdc-module-meta-slide">
                        <span className="gdc-module-duration-slide">{module.month}</span>
                        <span className="gdc-module-projects-slide">{module.projects}</span>
                      </div>
                      
                      <div className="gdc-module-topics-slide">
                        {module.topics.map((topic, idx) => (
                          <div key={idx} className="gdc-topic-item-slide">
                            <span className="gdc-topic-check-slide"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="gdc-topic-text-slide">{topic}</span>
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

      {/* Tools & Resources Section */}
      <section className="gdc-section gdc-dark-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title">Tools & Resources</h2>
          <p className="gdc-section-subtitle">Everything you need to succeed in your design journey</p>
          
          <div className="gdc-tools-container">
            {toolsResources.map((category, categoryIndex) => (
              <div 
                key={categoryIndex} 
                className="gdc-tools-category"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="gdc-tools-category-title">{category.category}</h3>
                <div className="gdc-tools-grid">
                  {category.items.map((tool, toolIndex) => (
                    <div 
                      key={toolIndex} 
                      className="gdc-tool-card"
                      style={{ animationDelay: `${toolIndex * 0.1}s` }}
                    >
                      <div className="gdc-tool-icon">{tool.icon}</div>
                      <div className="gdc-tool-content">
                        <h4 className="gdc-tool-name">{tool.name}</h4>
                        <p className="gdc-tool-desc">{tool.description}</p>
                      </div>
                      <div className="gdc-tool-hover-effect"></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="gdc-section gdc-dark-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title">Program Benefits</h2>
          <p className="gdc-section-subtitle">Everything you need for a successful design career</p>
          
          <div className="gdc-benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="gdc-benefit-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="gdc-benefit-icon-wrapper">
                  <div className="gdc-benefit-icon">{benefit.icon}</div>
                  <div className="gdc-benefit-icon-glow"></div>
                </div>
                <h3 className="gdc-benefit-title">{benefit.title}</h3>
                <p className="gdc-benefit-desc">{benefit.description}</p>
                <div className="gdc-benefit-hover-effect"></div>
              </div>
            ))}
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

      {/* Success Stories */}
      <section className="gdc-section gdc-white-bg">
        <div className="gdc-container">
          <h2 className="gdc-section-title gdc-red-text">Student Success Stories</h2>
          <p className="gdc-section-subtitle">Transformations that inspire us every day</p>
          
          <div className="gdc-stories-grid-light">
            {testimonials.map((story, index) => (
              <div 
                key={index} 
                className="gdc-story-card-light"
              >
                <div className="gdc-story-header-light">
                  <div className="gdc-story-avatar-light">
                    <span className="gdc-avatar-text-light">{story.avatar}</span>
                  </div>
                  <div className="gdc-story-info-light">
                    <h4 className="gdc-story-name-light">{story.name}</h4>
                    <p className="gdc-story-role-light">{story.role}</p>
                    <div className="gdc-story-salary-light">Course Studied: {story.salary}</div>
                  </div>
                </div>
                
                <div className="gdc-story-rating-container-light">
                  <div className="gdc-story-rating-light">
                    {Array(story.rating).fill().map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                  </div>
                </div>
                
                <p className="gdc-story-review-light">
                  "{story.review}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="gdc-section gdc-dark-enrollment" ref={formSectionRef}>
        <div className="gdc-container">
          <div className="gdc-floating-icons-container">
            {floatingIcons.map((icon, index) => (
              <div 
                key={index} 
                className="gdc-floating-icon"
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
          
          <h2 className="gdc-section-title">Start Your Design Journey Today</h2>
          <p className="gdc-section-subtitle">Limited seats available for the next batch</p>
          
          <div className="gdc-contact-details-grid">
            {contactDetails.map((contact, index) => (
              <div key={index} className="gdc-contact-item-dark">
                <div className="gdc-contact-icon-dark">{contact.icon}</div>
                <h4 className="gdc-contact-title-dark">{contact.title}</h4>
                <div className="gdc-contact-info-dark">
                  {contact.details.map((detail, idx) => (
                    <p key={idx} className="gdc-contact-detail-dark">{detail}</p>
                  ))}
                </div>
                <p className="gdc-contact-description-dark">{contact.description}</p>
              </div>
            ))}
          </div>
          
          <div className="gdc-enrollment-section-dark">
            <h3 className="gdc-enrollment-title-dark">Secure Your Spot Now</h3>
            <p className="gdc-enrollment-subtitle-dark">Batch starting soon - Limited availability</p>
            
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
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="gdc-form-group-expanded-dark">
                      <label>Email Address *</label>
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
                  
                  <button type="submit" className="gdc-submit-btn-expanded-dark">
                    <FontAwesomeIcon icon={faRocket} /> Complete Enrollment
                  </button>
                </form>
              </div>
            ) : (
              <div className="gdc-enrollment-cta-dark">
                <button 
                  className="gdc-enrollment-btn-large-dark"
                  onClick={() => setShowEnrollment(true)}
                >
                  <FontAwesomeIcon icon={faBullseye} /> Start Enrollment Now
                </button>
                <p className="gdc-cta-note-dark">Complete the form to secure your seat</p>
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
    </div>
    </>
  );
};

export default GraphicDesignCourse;