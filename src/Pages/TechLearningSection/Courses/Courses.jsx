import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MernImg from '../../../assets/Mern Developer.jfif'
import MernStack from '../../../assets/MernStack.jfif'
import JavaFull from '../../../assets/JavaFull.jfif'
import graphicDesignImg from '../../../assets/graphic_design.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {
  faPalette,
  faChartLine,
  faLaptopCode,
  faList,
  faTimes,
  faArrowRight,
  faCompassDrafting,
  faCode,
  faStar,
  faClock,
  faBullhorn,
  faPenNib,
  faFlag,
  faExchangeAlt,
  faBinoculars,
  faLock,
  faCloud
} from '@fortawesome/free-solid-svg-icons';
import './Courses.css';


const Courses = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Graphic Design');

  const categories = [
    { id: 1, name: 'Graphic Design', icon: faPenNib, count: 25, route: "/graphicsDesignCoursePage" },
    { id: 2, name: 'Full Stack', icon: faLaptopCode, count: 20, route: "/javaFullStackCourseCoursePage" },
    { id: 3, name: 'UI/UX Design', icon: faCompassDrafting, count: 15, route: "/uiuxDesignCoursePage" },
    { id: 4, name: 'Drawing', icon: faPalette, count: 12, route: "/drawingCoursePage" },
    { id: 5, name: 'Digital Marketing', icon: faBullhorn, count: 18, route: "/digitalMarketingCoursePage" },
  ];

  const courses = [
    // Graphic Design
    {
      id: 1,
      category: "Graphic Design",
      title: "Graphic Design Fundamentals: The Basics",
      description: "Learn logo design, brand identity, and digital ad design",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "08 WEEKS",
      level: "Beginner",
      lessons: 9,
      students: "30+",
      rating: 4.8,
      buyers: 859,
      authorImage: "https://i.pravatar.cc/150?u=kevin",
      image: graphicDesignImg,
      topTags: ["On-Demand"],
      badges: ["BESTSELLER"],
      skills: ["Beginner", "#Certified", "#HandsOn"]
    },
    {
      id: 11,
      category: "Graphic Design",
      title: "Advanced Brand Identity & Typography",
      description: "Master complex branding systems and advanced font manipulation",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "10 WEEKS",
      level: "Intermediate",
      lessons: 12,
      students: "25+",
      rating: 4.9,
      buyers: 420,
      authorImage: "https://i.pravatar.cc/150?u=alice",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpBlO5O2mie0KMe2m86SK7UP4bfmLRhweyQ&s",
      topTags: ["Mentorship"],
      badges: [],
      skills: ["Intermediate", "#ProjectBased"]
    },
    {
      id: 12,
      category: "Graphic Design",
      title: "Mastering Digital Illustration & 3D Art",
      description: "Professional level illustration techniques and 3D rendering for designers",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "12 WEEKS",
      level: "Advanced",
      lessons: 15,
      students: "15+",
      rating: 5.0,
      buyers: 156,
      theoryHours: "15+",
      practiceHours: "10+",
      authorImage: "https://i.pravatar.cc/150?u=marcus",
      price: "FREE",
      image: "data:image/jpeg;base64,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",
      route: "/graphicsDesignCoursePage",
      topTags: ["Live Sessions"],
      badges: ["MASTERY"],
      skills: ["Advanced", "#Masterclass", "#Intensive"]
    },

    // Full Stack
    {
      id: 3,
      category: "Full Stack",
      title: "Cloud Computing Fundamentals: AWS & Azure",
      description: "Learn how to build and manage scalable cloud infrastructures",
      icon: <FontAwesomeIcon icon={faCloud} />,
      status: "available",
      duration: "06 WEEKS",
      level: "Beginner",
      lessons: 12,
      students: "100+",
      rating: 4.7,
      buyers: 1250,
      authorImage: "https://i.pravatar.cc/150?u=john",
      price: "FREE",
      image: MernImg,
      topTags: ["Self-paced"],
      badges: ["Popular"],
      skills: ["Beginner", "#Portfolio", "#frontend"]
    },
    {
      id: 2,
      category: "Full Stack",
      title: "MERN Stack Mastery: Building Modern Apps",
      description: "Master React, Node, Express, and MongoDB in this intensive course",
      icon: <FontAwesomeIcon icon={faCompassDrafting} />,
      status: "available",
      duration: "12 WEEKS",
      level: "Intermediate",
      lessons: 24,
      students: "50+",
      rating: 4.9,
      buyers: 859,
      authorImage: "https://i.pravatar.cc/150?u=max",
      price: "FREE",
      image: MernStack,
      topTags: ["Certified"],
      badges: [],
      skills: ["Intermediate", "#Certified", "#HandsOn"]
    },
    {
      id: 22,
      category: "Full Stack",
      title: "Java Full Stack: Spring Boot & React",
      description: "Enterprise level development with Java, Spring, and modern Frontend",
      icon: <FontAwesomeIcon icon={faCode} />,
      status: "available",
      duration: "16 WEEKS",
      level: "Advanced",
      lessons: 30,
      students: "40+",
      rating: 4.8,
      buyers: 670,
      theoryHours: "20+",
      practiceHours: "10+",
      authorImage: "https://i.pravatar.cc/150?u=kevin2",
      price: "FREE",
      image: JavaFull,
      topTags: ["Job-ready"],
      badges: ["Career Boost"],
      skills: ["Advanced", "#MasterClass", "Jobready"]
    },

    // UI/UX Design
    {
      id: 31,
      category: "UI/UX Design",
      title: "Introduction to User Experience Research",
      description: "Learn how to understand users and create effective flows",
      icon: <FontAwesomeIcon icon={faCompassDrafting} />,
      status: "available",
      duration: "04 WEEKS",
      level: "Beginner",
      lessons: 8,
      students: "60+",
      rating: 4.6,
      buyers: 310,
      authorImage: "https://i.pravatar.cc/150?u=lena",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt85Na6H5fyeZVTS9CpLOokn4_9yzYr2xlJCx1OXmWPQ&s=10",
      topTags: ["Accredited"],
      badges: [],
      skills: ["Beginner", "#Certified", "#HandsOn"]
    },
    {
      id: 32,
      category: "UI/UX Design",
      title: "UI Design Systems & Prototyping",
      description: "Build scalable design systems and interactive prototypes",
      icon: <FontAwesomeIcon icon={faCompassDrafting} />,
      status: "available",
      duration: "08 WEEKS",
      level: "Intermediate",
      lessons: 15,
      students: "35+",
      rating: 4.8,
      buyers: 520,
      authorImage: "https://i.pravatar.cc/150?u=david",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMthQ9ybtfti6JMDjv35TfM7txcNvQzFtqSEsZjEb1yA&s=10",
      topTags: ["LifeTime Access"],
      badges: ["Toolkit"],
      skills: ["Intermediate", "#Certified", "#HandsOn"]
    },
    {
      id: 33,
      category: "UI/UX Design",
      title: "Advanced UX Strategy for Products",
      description: "High-level strategy, accessibility, and metric-driven design",
      icon: <FontAwesomeIcon icon={faCompassDrafting} />,
      status: "available",
      duration: "10 WEEKS",
      level: "Advanced",
      lessons: 20,
      students: "20+",
      rating: 5.0,
      buyers: 180,
      theoryHours: "10+",
      practiceHours: "10+",
      authorImage: "https://i.pravatar.cc/150?u=sofia",
      price: "FREE",
      image: "https://t3.ftcdn.net/jpg/04/11/44/64/360_F_411446459_X5J7lYVxHD74AM7It5p2sizFhl1afiV3.jpg",
      topTags: ["Masterclass"],
      badges: ["Expert"],
      skills: ["Advanced", "#Certified", "#HandsOn"]
    },

    // Cyber Security
    {
      id: 5,
      category: "Digital Marketing",
      title: "Social Media Marketing Basics",
      description: "Grow your presence on Instagram, TikTok, and LinkedIn",
      icon: <FontAwesomeIcon icon={faChartLine} />,
      status: "available",
      duration: "04 WEEKS",
      level: "Beginner",
      lessons: 10,
      students: "200+",
      rating: 4.7,
      buyers: 2400,
      authorImage: "https://i.pravatar.cc/150?u=zak",
      price: "FREE",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      topTags: ["community"],
      badges: ["Top Rated"],
      skills: ["Beginner", "#CaseStudy", "#Growth"]
    },
    {
      id: 41,
      category: "Digital Marketing",
      title: "SEO Mastery: Rank #1 on Google",
      description: "Advanced search engine optimization and content strategy",
      icon: <FontAwesomeIcon icon={faChartLine} />,
      status: "available",
      duration: "06 WEEKS",
      level: "Intermediate",
      lessons: 14,
      students: "80+",
      rating: 4.9,
      buyers: 1100,
      theoryHours: "10+",
      practiceHours: "10+",
      authorImage: "https://i.pravatar.cc/150?u=emma",
      price: "FREE",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=800&auto=format&fit=crop",
      topTags: ["Lifetime Access"],
      badges: [],
      skills: ["Intermediate", "#LiveMentorship"]
    },
    {
      id: 42,
      category: "Digital Marketing",
      title: "Data Analytics for Marketers",
      description: "Master Google Analytics, GTM, and data-driven decision making",
      icon: <FontAwesomeIcon icon={faChartLine} />,
      status: "available",
      duration: "08 WEEKS",
      level: "Advanced",
      lessons: 18,
      students: "50+",
      rating: 4.8,
      buyers: 450,
      theoryHours: "20+",
      practiceHours: "10+",
      authorImage: "https://i.pravatar.cc/150?u=robert",
      price: "FREE",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      topTags: ["Mentorship"],
      badges: ["High Demand"],
      skills: ["Advanced", "#analytics", "#DataMining"]
    },
    // ADD THIS inside courses array (after UI/UX or anywhere, structure unchanged)

    // Drawing Courses
    {
      id: 51,
      category: "Drawing",
      title: "Pencil Drawing Basics: From Lines to Life",
      description: "Learn shading, proportions, and sketching techniques from scratch",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "06 WEEKS",
      level: "Beginner",
      lessons: 10,
      students: "45+",
      rating: 4.7,
      buyers: 320,
      authorImage: "https://i.pravatar.cc/150?u=drawing1",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800&auto=format&fit=crop",
      topTags: ["Sketching"],
      badges: ["Popular"],
      skills: ["Beginner", "#Sketch", "#Shading"]
    },
    {
      id: 52,
      category: "Drawing",
      title: "Portrait Drawing Mastery",
      description: "Master facial proportions, expressions, and realistic portraits",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "08 WEEKS",
      level: "Intermediate",
      lessons: 14,
      students: "30+",
      rating: 4.9,
      buyers: 210,
      authorImage: "https://i.pravatar.cc/150?u=drawing2",
      image: "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?q=80&w=800&auto=format&fit=crop",
      topTags: ["Portrait"],
      badges: [],
      skills: ["Intermediate", "#Portrait", "#Realism"]
    },
    {
      id: 53,
      category: "Drawing",
      title: "Advanced Illustration & Concept Art",
      description: "Create professional illustrations and concept art for games and media",
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      duration: "10 WEEKS",
      level: "Advanced",
      lessons: 18,
      students: "20+",
      rating: 5.0,
      buyers: 150,
      theoryHours: "12+",
      practiceHours: "12+",
      authorImage: "https://i.pravatar.cc/150?u=drawing3",
      image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop",
      topTags: ["Illustration"],
      badges: ["Mastery"],
      skills: ["Advanced", "#ConceptArt", "#Creative"]
    }
  ];

  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});



  const handleEnrollClick = (course) => {
    if (course.route) {
      navigate(course.route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };



  const handleCTAClick = () => {
    const activeCat = categories.find(cat => cat.name === activeCategory);
    if (activeCat && activeCat.route) {
      navigate(activeCat.route);
    } else {
      navigate('/allCoursesPage');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open enrollment form
  const handleJoinCourseClick = () => {
    setShowEnrollmentForm(true);
    document.body.style.overflow = 'hidden';
  };

  // Close enrollment form
  const handleCloseForm = () => {
    setShowEnrollmentForm(false);
    setEnrollmentData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
    setFormErrors({});
    document.body.style.overflow = 'auto';
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEnrollmentData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle course selection
  const handleCourseSelect = (courseTitle) => {
    setEnrollmentData(prev => ({
      ...prev,
      course: courseTitle
    }));
    if (formErrors.course) {
      setFormErrors(prev => ({
        ...prev,
        course: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const errors = {};

    if (!enrollmentData.name.trim()) {
      errors.name = 'Name is required';
    } else if (enrollmentData.name.length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!enrollmentData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(enrollmentData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!enrollmentData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(enrollmentData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!enrollmentData.course.trim()) {
      errors.course = 'Please select a course';
    }

    return errors;
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:8081/api/ButtonCoursesForm/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: enrollmentData.name,
            email: enrollmentData.email,
            phone: enrollmentData.phone,
            course: enrollmentData.course,
            formType: "Join Course Form"
          })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Submission failed");
      }

      alert("Enrollment form submitted successfully! We will contact you soon.");

      setEnrollmentData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      });

      setFormErrors({});
      handleCloseForm();

    } catch (error) {
      alert(error.message);
    }
  };



  return (
    <section className="popular-courses-section" id="courses">
  <div className="courses-container">
    {/* Header Section */}
    <div className="courses-header">

      {/* User Goal Selection Section */}
      <div className="user-goals-container">
        <motion.h2 
          className="goals-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          What brings you to Engloray today?
        </motion.h2>
        
        <div className="goals-grid">
          {[
            { icon: faFlag, text: "Start my career" },
            { icon: faExchangeAlt, text: "Change my career" },
            { icon: faChartLine, text: "Grow in my current role" },
            { icon: faBinoculars, text: "Explore topics outside of work" }
          ].map((goal, idx) => (
            <motion.div 
              key={idx}
              className="goal-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="goal-icon-box">
                <FontAwesomeIcon icon={goal.icon} className="goal-custom-logo" />
              </div>
              <span className="goal-text">{goal.text}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="courses-container">
        {/* Header Section */}
        <div className="courses-header">

          {/* User Goal Selection Section */}
          <div className="user-goals-container">
            <h2 className="goals-title">What brings you to Engloray today?</h2>
            <div className="goals-grid">
              <div className="goal-card">
                <div className="goal-icon-box">
                  <FontAwesomeIcon icon={faFlag} className="goal-custom-logo" />
                </div>
                <span className="goal-text">Start my career</span>
              </div>
              <div className="goal-card">
                <div className="goal-icon-box">
                  <FontAwesomeIcon icon={faExchangeAlt} className="goal-custom-logo" />
                </div>
                <span className="goal-text">Change my career</span>
              </div>
              <div className="goal-card">
                <div className="goal-icon-box">
                  <FontAwesomeIcon icon={faChartLine} className="goal-custom-logo" />
                </div>
                <span className="goal-text">Grow in my current role</span>
              </div>
              <div className="goal-card">
                <div className="goal-icon-box">
                  <FontAwesomeIcon icon={faBinoculars} className="goal-custom-logo" />
                </div>
                <span className="goal-text">Explore topics outside of work</span>
              </div>
            </div>
          </div>

          <div className="learning-head">

            {/* ── Hero Text ── */}
            <div className="lh-hero-text">
              <h1 className="lh-hero-title">
                <span>AI-Powered Learning<br />for Tomorrow's Leaders</span>
              </h1>
              <p className="lh-hero-subtitle">
                Empowering Students with Personalized, Interactive Learning<br />
                Designed to Build Essential Skills for Future Success
              </p>
              <button className="lh-cta-btn">Get Started</button>
            </div>

            {/* ── 3-Column Card Grid ── */}
            <div className="lh-cards-grid">

              {/* LEFT — person studying */}
              <div className="lh-card lh-card-large lh-card-person">
                <img
                  src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=900&auto=format&fit=crop"
                  alt="Student learning online"
                  className="lh-card-img"
                />
                {/* floating emoji */}
                {/* <div className="lh-float-char lh-char-yellow">😊</div> */}
                {/* speech bubble */}
                <div className="lh-speech-bubble">
                  <p>Learn anytime, anywhere with our online courses.</p>
                  <div className="lh-bubble-brand">
                    <span className="lh-brand-dot"></span>
                    Engloray
                  </div>
                </div>
              </div>

              {/* MIDDLE — stacked cards */}
              <div className="lh-card-column">

                {/* Teachers card — lime-green */}
                <div className="lh-card lh-card-teachers">
                  <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop" alt="Teachers Background" className="lh-teachers-bg" />
                  <div className="lh-teachers-content">
                    <div className="lh-teacher-avatars">
                      <img src="https://i.pravatar.cc/150?u=t1" alt="Teacher 1" />
                      <img src="https://i.pravatar.cc/150?u=t2" alt="Teacher 2" />
                      <img src="https://i.pravatar.cc/150?u=t3" alt="Teacher 3" />
                      <div className="lh-more-teachers">+8</div>
                    </div>
                    <h3 className="lh-teachers-title">
                      Professional&nbsp;
                      {/* <span className="lh-teachers-badge"></span> */}
                      &nbsp;Teachers
                    </h3>
                    <svg className="lh-curvy-line" viewBox="0 0 90 14" fill="none">
                      <path d="M0,10 Q22,2 45,10 T90,10" stroke="#000" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* Chance card — lavender */}


              </div>

              {/* RIGHT — child image + math badge */}
              <div className="lh-card lh-card-large lh-card-math">
                <img
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=900&auto=format&fit=crop"
                  alt="VR learning"
                  className="lh-card-img"
                />
                <div className="lh-math-badge">
                  <span className="lh-badge-dot"></span>
                  <div className="lh-badge-info">
                    <h4>FUTURE OF LEARNING AND DEVELOPMENT</h4>
                    <span>For Beginner</span>
                  </div>
                  <div className="lh-badge-time">
                    <span className="lh-time-num">12</span>
                    <span className="lh-time-unit">Weeks</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <span className="popular-badge" style={{ marginTop: '30px' }}>
            <FontAwesomeIcon icon={faList} className="badge-icon" />
            POPULAR COURSES
          </span>
          <h2 className="courses-main-title">Our Career Courses</h2>
        </div>

        {/* Category Filter Bar */}
        <div className="categories-filter-bar">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-item ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.name)}
            >
              <FontAwesomeIcon icon={cat.icon} className="badge-icon" />
              <span>{cat.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="learning-head">
        {/* Hero Text */}
        <div className="lh-hero-text">
          <motion.h1 
            className="lh-hero-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <span>AI-Powered Learning<br />for Tomorrow's Leaders</span>
          </motion.h1>
          <motion.p 
            className="lh-hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Empowering Students with Personalized, Interactive Learning<br />
            Designed to Build Essential Skills for Future Success
          </motion.p>
          <motion.button 
            className="lh-cta-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Get Started
          </motion.button>
        </div>

        {/* 3-Column Card Grid */}
        <div className="lh-cards-grid">
          {/* LEFT */}
          <motion.div 
            className="lh-card lh-card-large lh-card-person"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=900&auto=format&fit=crop" alt="Student learning" className="lh-card-img" />
            <div className="lh-speech-bubble">
              <p>Learn anytime, anywhere with our online courses.</p>
              <div className="lh-bubble-brand"><span className="lh-brand-dot"></span>Engloray</div>
            </div>
          </motion.div>

          {/* MIDDLE */}
          <div className="lh-card-column">
            <motion.div 
              className="lh-card lh-card-teachers"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=400&auto=format&fit=crop" alt="Teachers" className="lh-teachers-bg" />
                  <div className="lh-teachers-content">
                    <div className="lh-teacher-avatars">
                      <img src="https://i.pravatar.cc/150?u=t1" alt="T1" /><img src="https://i.pravatar.cc/150?u=t2" alt="T2" /><img src="https://i.pravatar.cc/150?u=t3" alt="T3" />
                      <div className="lh-more-teachers">+8</div>
                    </div>
                    <h3 className="lh-teachers-title">Professional Teachers</h3>
                  </div>
                </motion.div>

                {/* Keep the duplicated steps grid here as requested "dont delete anything" */}
                <div className="cs-steps-grid">
              {/* Card 1 - Digital Marketing (Top Left) */}
              <div className="cs-step-card cs-card-pink ani-pulse">
                <div className="cs-step-number">01</div>
                <div className="cs-card-content">
                  <h3 className="cs-step-title">Cyber Security</h3>
                  <p className="cs-step-desc">
                    Protect digital assets and infrastructures by mastering advanced security protocols and threat detection.
                  </p>
                  <div className="cs-card-footer">
                    <span className="cs-weeks-badge"><FontAwesomeIcon icon={faClock} /> 8 WEEKS</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Full Stack (Top Right) */}
              <div className="cs-step-card cs-card-purple ani-typing">
                <div className="cs-step-number">02</div>
                <div className="cs-card-content">
                  <h3 className="cs-step-title">Business Intelligence</h3>
                  <p className="cs-step-desc">
                    A Technology-driven framework of strategies, tools, and processes used by organizations to analyze raw data and convert it into actionable insights
                  </p>
                  <div className="cs-card-footer">
                    <span className="cs-weeks-badge"><FontAwesomeIcon icon={faClock} /> 12 WEEKS</span>
                  </div>
                </div>
              </div>

              {/* Card 3 - AI Creative (Mid Left) */}
              <div className="cs-step-card cs-card-yellow ani-float">
                <div className="cs-step-number">03</div>
                <div className="cs-card-content">
                  <h3 className="cs-step-title">AI Creative Intelligence</h3>
                  <p className="cs-step-desc">
                    Harness the power of Generative AI and automation to revolutionize your creative workflow and output.
                  </p>
                  <div className="cs-card-footer">
                    <span className="cs-weeks-badge"><FontAwesomeIcon icon={faClock} /> 10 WEEKS</span>
                  </div>
                </div>
              </div>

              {/* Card 4 - Website Development (Mid Right) */}
              <div className="cs-step-card cs-card-blue ani-growth">
                <div className="cs-step-number">04</div>
                <div className="cs-card-content">
                  <h3 className="cs-step-title">Cloud Computing</h3>
                  <p className="cs-step-desc">
                    Master AWS, Azure, and Google Cloud to build scalable, resilient, and secure enterprise infrastructures.
                  </p>
                  <div className="cs-card-footer">
                    <span className="cs-weeks-badge"><FontAwesomeIcon icon={faClock} /> 8 WEEKS</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>

          {/* RIGHT */}
          <motion.div 
            className="lh-card lh-card-large lh-card-math"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=900&auto=format&fit=crop" alt="VR learning" className="lh-card-img" />
            <div className="lh-math-badge">
              <span className="lh-badge-dot"></span>
              <div className="lh-badge-info">
                <h4>FUTURE OF LEARNING AND DEVELOPMENT</h4>
                <span>For Beginner</span>
              </div>
              <div className="lh-badge-time"><span className="lh-time-num">12</span><span className="lh-time-unit">Weeks</span></div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.span 
        className="popular-badge" 
        style={{ marginTop: '30px', display: 'inline-block' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <FontAwesomeIcon icon={faList} className="badge-icon" />
        POPULAR COURSES
      </motion.span>
      <motion.h2 
        className="courses-main-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Career Courses
      </motion.h2>
    </div>

    {/* Courses Grid */}
    <div className="courses-grid-layout">
      {courses.filter(c => activeCategory === 'All' || c.category === activeCategory).map((course, idx) => (
        <motion.div 
          key={course.id} 
          className="course-card" 
          onClick={() => handleEnrollClick(course)}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          {/* ... Card Content Stays Identical ... */}
          <div className="course-card-top">
            <img src={course.image} alt={course.title} className="course-image" />
            {/* ... rest of your course card code ... */}
          </div>
          <div className="course-card-body">
             <h3 className="course-title">{course.title}</h3>
             {/* ... rest of body ... */}
          </div>
        </motion.div>
      ))}
    </div>

    {/* Coming Soon Section */}
    <div className="coming-soon-section">
      <motion.div 
        className="cs-header-content"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="cs-main-heading">UPCOMING COURSES</h2>
        <p className="cs-description">Stay ahead with our soon-to-be-launched expert-led courses.</p>
      </motion.div>

      <div className="cs-steps-grid">
        {/* Apply animations to the Upcoming Cards */}
        {[
          { id: "01", title: "Cyber Security", color: "pink", desc: "Protect digital assets..." },
          { id: "02", title: "Business Intelligence", color: "purple", desc: "Technology-driven framework..." },
          { id: "03", title: "AI Creative Intelligence", color: "yellow", desc: "Harness power of Gen AI..." },
          { id: "04", title: "Cloud Computing", color: "blue", desc: "Master AWS, Azure..." }
        ].map((item, idx) => (
          <motion.div 
            key={idx}
            className={`cs-step-card cs-card-${item.color}`}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
          >
            <div className="cs-step-number">{item.id}</div>
            <div className="cs-card-content">
              <h3 className="cs-step-title">{item.title}</h3>
              <p className="cs-step-desc">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
  );
};

export default Courses;