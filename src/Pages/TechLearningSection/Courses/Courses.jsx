import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
  faBinoculars
} from '@fortawesome/free-solid-svg-icons';
import './Courses.css';
import teachersImg from '../../../assets/images/teachers_bg.png';

const Courses = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('Digital Marketing');

  const categories = [
    { id: 1, name: 'Graphic Design', icon: faPenNib, count: 245 },
    { id: 2, name: 'Full Stack', icon: faLaptopCode, count: 286 },
    { id: 3, name: 'UI/UX Design', icon: faCompassDrafting, count: 140 },
    { id: 4, name: 'Digital Marketing', icon: faBullhorn, count: 286 }


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
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
      route: "/graphicsDesignCoursePage",
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
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      route: "/graphicsDesignCoursePage",
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
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      route: "/graphicsDesignCoursePage",
      topTags: ["Live Sessions"],
      badges: ["MASTERY"],
      skills: ["Advanced", "#Masterclass", "#Intensive"]
    },

    // Full Stack
    {
      id: 3,
      category: "Full Stack",
      title: "Web Development 101: HTML, CSS & JS",
      description: "The complete starting point for future full stack developers",
      icon: <FontAwesomeIcon icon={faCode} />,
      status: "available",
      duration: "06 WEEKS",
      level: "Beginner",
      lessons: 12,
      students: "100+",
      rating: 4.7,
      buyers: 1250,
      authorImage: "https://i.pravatar.cc/150?u=john",
      price: "FREE",
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
      route: "/javaFullStackCourseCoursePage",
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
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
      route: "/uiuxDesignCoursePage",
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
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
      route: "/javaFullStackCourseCoursePage",
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
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
      route: "/uiuxDesignCoursePage",
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
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      route: "/uiuxDesignCoursePage",
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
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      route: "/uiuxDesignCoursePage",
      topTags: ["Masterclass"],
      badges: ["Expert"],
      skills: ["Advanced", "#Certified", "#HandsOn"]
    },

    // Digital Marketing
    {
      id: 4,
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
      route: "/digital-marketing",
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
      route: "/digital-marketing",
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
      route: "/digital-marketing",
      topTags: ["Mentorship"],
      badges: ["High Demand"],
      skills: ["Advanced", "#analytics", "#DataMining"]
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
    navigate('/allCoursesPage');
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
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"
                  alt="Student learning online"
                  className="lh-card-img"
                />
                {/* floating emoji */}
                <div className="lh-float-char lh-char-yellow">😊</div>
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
                  <img src={teachersImg} alt="Teachers Background" className="lh-teachers-bg" />
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
                  src="data:image/jpeg;base64,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"
                  alt="Child learning"
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

          <span className="popular-badge" style={{ marginTop: '80px' }}>
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
              <div className="category-icon-box">
                <FontAwesomeIcon icon={cat.icon} />
              </div>
              <div className="category-info">
                <h4 className="category-name">{cat.name}</h4>
                <p className="category-count">{cat.count} Courses</p>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid-layout">
          {courses.filter(c => activeCategory === 'All' || c.category === activeCategory).map((course) => (
            <div key={course.id} className="course-card" onClick={() => handleEnrollClick(course)}>
              <div className="course-card-top">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="tagtop-container">
                  {course.topTags?.map((tag, idx) => (
                    <span key={idx} className="top-tag-white">{tag}</span>
                  ))}
                </div>
                {course.badges && course.badges.length > 0 && (
                  <div className="badge-overlay-container">
                    {course.badges.map((badge, idx) => (
                      <span key={idx} className={`overlay-badge badge-${badge.toLowerCase()}`}>
                        {badge} <span className="fire-emoji"></span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="course-card-body">
                <h3 className="course-title">{course.title}</h3>

                <div className="course-rating-row">
                  <FontAwesomeIcon icon={faStar} className="star-icon-yellow" />
                  <span className="rating-text"><b>{course.rating}</b> (bought {course.buyers} ppl)</span>
                </div>

                <div className="course-skills-tags">
                  {course.skills?.map((skill, idx) => (
                    <span key={idx} className={`skill-pill skill-${skill.replace('#', '').toLowerCase()}`}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="course-stats-container">
                  <div className="stat-item">
                    <span className="stat-label">THEORY</span>
                    <span className="stat-val">{course.theoryHours || (course.id % 2 === 0 ? '120' : '116')} Lessons.</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">PRACTICE</span>
                    <span className="stat-val">{course.practiceHours || (course.id % 2 === 0 ? '50' : '38')} Topics.</span>
                  </div>
                </div>

                <div className="course-card-action">
                  <button className="enroll-now-btn" onClick={(e) => { e.stopPropagation(); handleJoinCourseClick(); }}>
                    Enroll Now
                  </button>
                  <button className="new-details-btn">
                    Details <FontAwesomeIcon icon={faArrowRight} className="arrow-icon" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="view-all-container">
          <button className="view-all-btn" onClick={handleCTAClick}>
            VIEW ALL COURSES <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
          </button>
        </div>

        {/* Coming Soon Section - New Stimulating Space Design */}
        <div className="coming-soon-section">
          <div className="cs-header-content">
            <h2 className="cs-main-heading">
              UPCOMING COURSES  <span className="cs-heading-accent"></span>
            </h2>
            <p className="cs-description">
              Our upcoming professional programs are designed to inspire innovation and career mastery.
              Stay ahead with our soon-to-be-launched expert-led courses.
            </p>
          </div>

          <div className="cs-cards-container">
            {/* Background Decorative Line - Vertical ZigZag */}
            <div className="cs-decorative-line">
              <svg viewBox="0 0 400 1200" preserveAspectRatio="none" style={{ height: '100%', width: '100%' }}>
                <path
                  d="M100,50 C150,150 350,200 300,350 C250,500 50,550 100,700 C150,850 350,900 300,1050"
                  stroke="#cbd5e1"
                  strokeDasharray="10 10"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>

            <div className="cs-steps-grid">
              {/* Card 1 - Digital Marketing (Top Left) */}
              <div className="cs-step-card cs-card-pink ani-pulse">
                <div className="cs-step-number">01</div>
                <div className="cs-card-content">
                  <h3 className="cs-step-title">Digital Marketing</h3>
                  <p className="cs-step-desc">
                    Master the art of online growth and data-driven marketing strategies to dominate the digital landscape.
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
                  <h3 className="cs-step-title">Full Stack Development</h3>
                  <p className="cs-step-desc">
                    Build scalable end-to-end applications from scratch using modern frameworks and cloud infrastructure.
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
                  <h3 className="cs-step-title">Website Development</h3>
                  <p className="cs-step-desc">
                    Professional training in responsive design and high-performance web architecture for the modern era.
                  </p>
                  <div className="cs-card-footer">
                    <span className="cs-weeks-badge"><FontAwesomeIcon icon={faClock} /> 8 WEEKS</span>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="cs-action-container">
            <button className="cs-premium-join-btn" onClick={handleJoinCourseClick}>
              <span className="btn-label">JOIN COURSE NOW</span>
              <div className="btn-icon">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
            <p className="cs-subtext-info">✨ 100% Placement Assistance | Live Projects | Industry Mentors</p>
          </div>
        </div>
      </div>

      {/* Enrollment form modal kept for functionality */}
      {showEnrollmentForm && (
        <div className="enrollment-form-overlay" onClick={handleCloseForm}>
          <div className="enrollment-form-container" onClick={(e) => e.stopPropagation()}>
            <button className="enrollment-form-close" onClick={handleCloseForm}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div className="enrollment-form-header">
              <h2 className="enrollment-form-title">Join Our Course</h2>
              <p className="enrollment-form-subtitle">Fill out the form below and we'll get in touch with you</p>
            </div>
            <form className="enrollment-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input type="text" id="name" name="name" value={enrollmentData.name} onChange={handleInputChange} placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" value={enrollmentData.email} onChange={handleInputChange} placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" name="phone" value={enrollmentData.phone} onChange={handleInputChange} placeholder="Enter your 10-digit phone number" required />
              </div>
              <div className="form-group">
                <label htmlFor="course">Select Course *</label>
                <select id="course" name="course" value={enrollmentData.course} onChange={(e) => handleCourseSelect(e.target.value)} required>
                  <option value="">Choose a course</option>
                  {courses.map(course => (
                    <option key={course.id} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="enrollment-form-submit">Submit Enrollment Request</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;