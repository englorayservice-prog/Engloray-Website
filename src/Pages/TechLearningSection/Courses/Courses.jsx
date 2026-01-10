import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPalette, 
  faMagicWandSparkles, 
  faCoffee, 
  faChartLine, 
  faLaptopCode, 
  faRobot, 
  faGlobe,
  faBullseye,
  faRocket,
  faThLarge,
  faList,
  faBell,
  faTimes,
  faArrowRight,
  faPaintBrush,
  faCompassDrafting,
  faCode,
  faLayerGroup,
  faCogs,
  faDesktop,
  faGraduationCap,
  faCalendarAlt,
  faUserTie,
  faUsers,
  faCheckCircle,
  faShapes
} from '@fortawesome/free-solid-svg-icons';
import './Courses.css';

const Courses = () => {
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('grid');
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});

  const courses = [
    {
      id: 1,
      title: "Graphics Design & Branding",
      description: "Learn logo design, brand identity, and digital ad design",
      features: [
        "Professional logo design techniques",
        "Brand identity development",
        "Digital advertisement design",
        "Real projects from Engloray Tech Group",
        "Industry-standard tools training"
      ],
      icon: <FontAwesomeIcon icon={faPalette} />,
      status: "available",
      color: "#8B5CF6",
      duration: "8 weeks",
      level: "Beginner to Advanced",
      shape: "hexagon",
      route: "/graphicsDesignCoursePage"
    },
    {
      id: 2,
      title: "UI/UX Design Mastery",
      description: "Master User Interface & Experience design from basics to advanced",
      features: [
        "Complete Figma & Adobe XD training",
        "User research and persona creation",
        "Wireframing and prototyping",
        "Design systems and components",
        "Portfolio development"
      ],
      icon: <FontAwesomeIcon icon={faCompassDrafting} />,
      status: "available",
      color: "#06B6D4",
      duration: "10 weeks",
      level: "Beginner to Advanced",
      shape: "hexagon",
      route: "/uiuxDesignCoursePage"
    },
    {
      id: 3,
      title: "Java Fullstack Mastery",
      description: "Master Java, Spring Boot, React, and modern fullstack development",
      features: [
        "Java Programming & Spring Boot",
        "React & Modern Frontend",
        "Database Design & Management",
        "REST API Development",
        "Cloud Deployment & DevOps"
      ],
      icon: <FontAwesomeIcon icon={faCode} />,
      status: "available",
      color: "#DC2626",
      duration: "16 weeks",
      level: "Beginner to Advanced",
      shape: "hexagon",
      route: "/javaFullStackCourseCoursePage"
    },
    {
      id: 4,
      title: "Digital Marketing",
      description: "Master digital marketing strategies and tools",
      features: [
        "SEO and SEM strategies",
        "Social media marketing",
        "Content marketing",
        "Analytics and reporting",
        "Campaign management"
      ],
      icon: <FontAwesomeIcon icon={faChartLine} />,
      status: "upcoming",
      color: "#F59E0B",
      duration: "6 weeks",
      level: "All Levels",
      shape: "hexagon",
      route: "/digital-marketing"
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Complete web development from frontend to deployment",
      features: [
        "Frontend & backend development",
        "Database management",
        "API integration",
        "Modern frameworks",
        "Project deployment"
      ],
      icon: <FontAwesomeIcon icon={faLayerGroup} />,
      status: "upcoming",
      color: "#EC4899",
      duration: "12 weeks",
      level: "Beginner Friendly",
      shape: "hexagon",
      route: "/fullstack-development"
    },
    {
      id: 6,
      title: "AI Creative Intelligence",
      description: "Harness AI tools for creative automation",
      features: [
        "AI creative automation tools",
        "Marketing AI strategies",
        "ChatGPT & Midjourney mastery",
        "Real-world AI implementation",
        "Automation workflows"
      ],
      icon: <FontAwesomeIcon icon={faRobot} />,
      status: "upcoming",
      color: "#10B981",
      duration: "8 weeks",
      level: "Intermediate",
      shape: "hexagon",
      route: "/ai-creative"
    },
    {
      id: 7,
      title: "Website Development",
      description: "Professional website development training",
      features: [
        "Responsive web design",
        "Frontend frameworks",
        "Performance optimization",
        "Cross-browser compatibility",
        "Modern development workflows"
      ],
      icon: <FontAwesomeIcon icon={faDesktop} />,
      status: "upcoming",
      color: "#EF4444",
      duration: "10 weeks",
      level: "Beginner Friendly",
      shape: "hexagon",
      route: "/website-development"
    }
  ];

  const availableCourses = courses.filter(course => course.status === 'available');
  const upcomingCourses = courses.filter(course => course.status === 'upcoming');

  const handleEnrollClick = (course) => {
    if (course.route) {
      navigate(course.route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const handleNotifyClick = (course) => {
    alert(`You'll be notified when ${course.title} becomes available!`);
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
    setSelectedCourse(null);
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


  // Generate particles
  const generateParticles = () => {
    const particles = [];
    const colors = ['purple', 'cyan', 'emerald', 'amber', 'pink', 'red', 'blue', 'green', 'indigo', 'rose'];
    const sizes = ['tiny', 'small', 'medium'];
    const animations = [
      'particle-float-left', 
      'particle-float-right', 
      'particle-float-up', 
      'particle-float-down',
      'particle-diagonal',
      'particle-spiral',
      'particle-pulse',
      'particle-rotate'
    ];

    // Generate 300+ particles
    for (let i = 0; i < 300; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = sizes[Math.floor(Math.random() * sizes.length)];
      const animation = animations[Math.floor(Math.random() * animations.length)];
      
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 20;
      const duration = 10 + Math.random() * 20;
      const yOffset = (Math.random() * 200 - 100);
      const xOffset = (Math.random() * 200 - 100);

      particles.push(
        <div 
          key={`particle-${i}`}
          className={`particle particle-${size} particle-${color}`}
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animation: `${animation} ${duration}s linear infinite`,
            animationDelay: `${delay}s`,
            '--y-offset': `${yOffset}px`,
            '--x-offset': `${xOffset}px`
          }}
        />
      );
    }
    return particles;
  };

  // Generate fast particles
  const generateFastParticles = () => {
    const fastParticles = [];
    for (let i = 0; i < 50; i++) {
      const top = Math.random() * 100;
      const delay = Math.random() * 3;
      const duration = 1 + Math.random() * 2;
      
      fastParticles.push(
        <div 
          key={`fast-${i}`}
          className="fast-particle"
          style={{
            top: `${top}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`
          }}
        />
      );
    }
    return fastParticles;
  };

  // Generate energy lines
  const generateEnergyLines = () => {
    const lines = [];
    for (let i = 0; i < 8; i++) {
      const top = 10 + (i * 10);
      const delay = i * 1;
      const width = 30 + Math.random() * 40;
      
      lines.push(
        <div 
          key={`line-${i}`}
          className="energy-line"
          style={{
            top: `${top}%`,
            animationDelay: `${delay}s`,
            width: `${width}%`
          }}
        />
      );
    }
    return lines;
  };

  // Generate particle clusters
  const generateClusters = () => {
    const clusters = [];
    for (let i = 0; i < 5; i++) {
      const top = 20 + (i * 15);
      const left = 10 + (i * 20);
      const delay = i * 4;
      
      clusters.push(
        <div 
          key={`cluster-${i}`}
          className="particle-cluster"
          style={{
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`
          }}
        />
      );
    }
    return clusters;
  };

  // Generate grid particles
  const generateGridParticles = () => {
    const gridParticles = [];
    const colors = ['purple', 'cyan', 'emerald', 'amber', 'pink'];
    
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 20; col++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const delay = Math.random() * 4;
        
        gridParticles.push(
          <div 
            key={`grid-${row}-${col}`}
            className={`grid-particle particle-${color}`}
            style={{
              gridColumn: col + 1,
              gridRow: row + 1,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
    }
    return gridParticles;
  };

  return (
    <section className="learning-courses-geometric" id="courses">
      {/* ULTRA CONGESTED PARTICLE BACKGROUND */}
      <div className="congested-particle-bg">
        {/* 300+ Random Particles */}
        {generateParticles()}
        
        {/* Fast Particles Layer */}
        <div className="fast-particles">
          {generateFastParticles()}
        </div>
        
        {/* Energy Streams */}
        {generateEnergyLines()}
        
        {/* Particle Clusters */}
        {generateClusters()}
        
        {/* Particle Grid */}
        <div className="particle-grid">
          {generateGridParticles()}
        </div>
        
        {/* Additional static particles for density */}
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={`static-${i}`}
            className={`particle particle-tiny particle-${['purple', 'cyan', 'emerald'][i % 3]}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          />
        ))}
      </div>

      {/* Enrollment Form Modal */}
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
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={enrollmentData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className={formErrors.name ? 'error' : ''}
                  required
                />
                {formErrors.name && <span className="form-error">{formErrors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={enrollmentData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className={formErrors.email ? 'error' : ''}
                  required
                />
                {formErrors.email && <span className="form-error">{formErrors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={enrollmentData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your 10-digit phone number"
                  className={formErrors.phone ? 'error' : ''}
                  required
                />
                {formErrors.phone && <span className="form-error">{formErrors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="course">Select Course *</label>
                <select
                  id="course"
                  name="course"
                  value={enrollmentData.course}
                  onChange={(e) => handleCourseSelect(e.target.value)}
                  className={formErrors.course ? 'error' : ''}
                  required
                >
                  <option value="">Choose a course</option>
                  {availableCourses.map(course => (
                    <option key={course.id} value={course.title}>
                      {course.title} - {course.duration}
                    </option>
                  ))}
                  {upcomingCourses.map(course => (
                    <option key={course.id} value={course.title}>
                      {course.title} - {course.duration} (Coming Soon)
                    </option>
                  ))}
                </select>
                {formErrors.course && <span className="form-error">{formErrors.course}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">Additional Information</label>
                <textarea
                  id="message"
                  name="message"
                  value={enrollmentData.message}
                  onChange={handleInputChange}
                  placeholder="Any questions or specific requirements?"
                  rows="4"
                />
              </div>

              <button type="submit" className="enrollment-form-submit">
                Submit Enrollment Request
              </button>
            </form>

            <div className="enrollment-form-footer">
              <p className="enrollment-form-note">
                * After submitting, our team will contact you within 24 hours to discuss course details and payment options.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="learning-geometric-header">
        <div className="learning-header-shapes">
          <div className="learning-shape learning-shape-1"></div>
          <div className="learning-shape learning-shape-2"></div>
          <div className="learning-shape learning-shape-3"></div>
        </div>
        <div className="learning-header-content">
          <span className="learning-geometric-badge">
            <FontAwesomeIcon icon={faShapes} style={{marginRight: '8px'}} />
            Learning Paths
          </span>
          <h1 className="learning-geometric-title">
            <span className="learning-title-line">Shape Your</span>
            <span className="learning-title-line">Future</span>
          </h1>
          <p className="learning-geometric-subtitle">
            Innovative courses designed around geometric learning principles
          </p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="learning-view-toggle">
        <button 
          className={`learning-view-btn ${activeView === 'grid' ? 'learning-active' : ''}`}
          onClick={() => setActiveView('grid')}
        >
          <span className="learning-view-icon">
            <FontAwesomeIcon icon={faThLarge} />
          </span>
          Grid View
        </button>
        <button 
          className={`learning-view-btn ${activeView === 'list' ? 'learning-active' : ''}`}
          onClick={() => setActiveView('list')}
        >
          <span className="learning-view-icon">
            <FontAwesomeIcon icon={faList} />
          </span>
          List View
        </button>
      </div>

      {/* Available Courses */}
      <div className="learning-section-geometric">
        <div className="learning-section-header">
          <h2 className="learning-section-title">
            <span className="learning-section-icon">
              <FontAwesomeIcon icon={faBullseye} />
            </span>
            Available Now
          </h2>
          <div className="learning-section-count">{availableCourses.length} Courses</div>
        </div>

        {activeView === 'grid' ? (
          <div className="learning-geometric-grid">
            {availableCourses.map((course, index) => (
              <div 
                key={course.id}
                className={`learning-geometric-item learning-${course.shape}`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  '--geometric-color': course.color
                }}
              >
                <div className="learning-geometric-content">
                  <div className="learning-geometric-icon" style={{color: course.color}}>
                    {course.icon}
                  </div>
                  <h3 className="learning-geometric-title-small">{course.title}</h3>
                  <p className="learning-geometric-desc">{course.description}</p>
                  <div className="learning-geometric-meta">
                    <span className="learning-meta-duration">
                      <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: '5px'}} />
                      {course.duration}
                    </span>
                    <span className="learning-meta-level">
                      <FontAwesomeIcon icon={faUserTie} style={{marginRight: '5px'}} />
                      {course.level}
                    </span>
                  </div>
                  <div className="learning-geometric-action">
                    <button 
                      className="learning-enroll-geometric"
                      onClick={() => handleEnrollClick(course)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
                <div className="learning-geometric-glow"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="learning-geometric-list">
            {availableCourses.map((course, index) => (
              <div 
                key={course.id}
                className="learning-list-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="learning-list-icon" style={{ backgroundColor: course.color }}>
                  <div style={{color: 'white'}}>
                    {course.icon}
                  </div>
                </div>
                <div className="learning-list-content">
                  <h3 className="learning-list-title">{course.title}</h3>
                  <p className="learning-list-desc">{course.description}</p>
                  <div className="learning-list-features">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="learning-list-feature">
                        <FontAwesomeIcon icon={faCheckCircle} style={{color: course.color, marginRight: '5px'}} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="learning-list-action">
                  <button 
                    className="learning-list-enroll"
                    onClick={() => handleEnrollClick(course)}
                    style={{ backgroundColor: course.color }}
                  >
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Upcoming Courses */}
      <div className="learning-section-geometric">
        <div className="learning-section-header">
          <h2 className="learning-section-title">
            <span className="learning-section-icon" style={{color: '#F59E0B'}}>
              <FontAwesomeIcon icon={faRocket} />
            </span>
            Coming Soon
          </h2>
          <div className="learning-section-count">{upcomingCourses.length} Courses</div>
        </div>

        <div className="learning-timeline-geometric">
          {upcomingCourses.map((course, index) => (
            <div 
              key={course.id}
              className="learning-timeline-item"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="learning-timeline-marker" style={{ backgroundColor: course.color }}>
                <span className="learning-timeline-icon" style={{color: 'white'}}>
                  {course.icon}
                </span>
              </div>
              <div className="learning-timeline-content">
                <div className="learning-timeline-header">
                  <h3 className="learning-timeline-title">{course.title}</h3>
                  <span className="learning-timeline-status">Coming Soon</span>
                </div>
                <p className="learning-timeline-desc">{course.description}</p>
                <div className="learning-timeline-meta">
                  <span className="learning-timeline-duration">
                    <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: '5px'}} />
                    {course.duration}
                  </span>
                  <span className="learning-timeline-level">
                    <FontAwesomeIcon icon={faUserTie} style={{marginRight: '5px'}} />
                    {course.level}
                  </span>
                </div>
                <button 
                  className="learning-timeline-notify"
                  onClick={() => handleNotifyClick(course)}
                >
                  <FontAwesomeIcon icon={faBell} style={{marginRight: '8px'}} />
                  Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SIMPLIFIED Join Course Button Section */}
      <div className="learning-section-geometric">
        <div className="learning-join-course-simple">
          <button 
            className="learning-join-course-simple-btn"
            onClick={handleJoinCourseClick}
          >
            <span className="learning-join-course-simple-icon">
              <FontAwesomeIcon icon={faRocket} />
            </span>
            <span className="learning-join-course-simple-text">Join Course Now</span>
            <span className="learning-join-course-simple-arrow">
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </button>
          <p className="learning-join-course-simple-note">
            <FontAwesomeIcon icon={faUsers} style={{marginRight: '8px', color: '#8B5CF6'}} />
            * 100% Placement Assistance | Live Projects | Industry Mentors
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="learning-geometric-cta">
        <div className="learning-cta-geometric">
          <div className="learning-cta-shapes">
            <div className="learning-cta-shape learning-cta-shape-1"></div>
            <div className="learning-cta-shape learning-cta-shape-2"></div>
            <div className="learning-cta-shape learning-cta-shape-3"></div>
          </div>
          <div className="learning-cta-content">
            <h3 className="learning-cta-title-geometric">
              <FontAwesomeIcon icon={faGraduationCap} style={{marginRight: '10px'}} />
              Ready to Transform?
            </h3>
            <p className="learning-cta-desc-geometric">
              Join our geometric learning community and build your future piece by piece
            </p>
            <button 
              className="learning-cta-btn-geometric"
              onClick={handleCTAClick}
            >
              <span>View All Courses</span>
              <div className="learning-cta-arrow-geometric">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;