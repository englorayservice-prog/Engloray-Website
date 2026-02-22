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

  return (
    <section className="learning-courses-section" id="courses">

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
      <div className="learning-courses-header">
        <div className="learning-header-content">
          <span className="learning-header-badge">
            <FontAwesomeIcon icon={faShapes} style={{ marginRight: '8px' }} />
            Learning Paths
          </span>
          <h1 className="learning-header-title">
            <span className="learning-title-text">Shape Your Future</span>
          </h1>
          <p className="learning-header-subtitle">
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
      <div className="learning-section-container">
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
          <div className="learning-grid-view">
            {availableCourses.map((course, index) => (
              <div
                key={course.id}
                className="learning-course-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="learning-card-content">
                  <div className="learning-card-icon" style={{ color: course.color, backgroundColor: `${course.color}15` }}>
                    {course.icon}
                  </div>
                  <h3 className="learning-card-title">{course.title}</h3>
                  <p className="learning-card-desc">{course.description}</p>

                  <div className="learning-card-meta-row">
                    <span className="learning-meta-item">
                      <FontAwesomeIcon icon={faCalendarAlt} className="meta-icon" />
                      {course.duration}
                    </span>
                    <span className="learning-meta-item">
                      <FontAwesomeIcon icon={faUserTie} className="meta-icon" />
                      {course.level}
                    </span>
                  </div>

                  <button
                    className="learning-card-btn"
                    onClick={() => handleEnrollClick(course)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="learning-list-view">
            {availableCourses.map((course, index) => (
              <div
                key={course.id}
                className="learning-list-item"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="learning-list-icon" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                  {course.icon}
                </div>
                <div className="learning-list-content">
                  <h3 className="learning-list-title">{course.title}</h3>
                  <p className="learning-list-desc">{course.description}</p>
                  <div className="learning-list-features">
                    {course.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="learning-list-feature">
                        <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#10B981', marginRight: '5px' }} />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="learning-list-action">
                  <div className="learning-list-meta">
                    <span><FontAwesomeIcon icon={faCalendarAlt} /> {course.duration}</span>
                  </div>
                  <button
                    className="learning-list-enroll"
                    onClick={() => handleEnrollClick(course)}
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
      <div className="learning-section-container">
        <div className="learning-section-header">
          <h2 className="learning-section-title">
            <span className="learning-section-icon" style={{ color: '#F59E0B' }}>
              <FontAwesomeIcon icon={faRocket} />
            </span>
            Coming Soon
          </h2>
          <div className="learning-section-count">{upcomingCourses.length} Courses</div>
        </div>

        <div className="learning-upcoming-grid">
          {upcomingCourses.map((course, index) => (
            <div
              key={course.id}
              className="learning-upcoming-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="learning-upcoming-badge">Coming Soon</div>
              <div className="learning-upcoming-icon" style={{ color: course.color, backgroundColor: `${course.color}15` }}>
                {course.icon}
              </div>
              <h3 className="learning-upcoming-title">{course.title}</h3>
              <p className="learning-upcoming-desc">{course.description}</p>

              <div className="learning-upcoming-footer">
                <div className="learning-upcoming-meta">
                  <FontAwesomeIcon icon={faCalendarAlt} /> {course.duration}
                </div>
                <button className="learning-notify-btn" onClick={() => handleNotifyClick(course)}>
                  <FontAwesomeIcon icon={faBell} /> Notify Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* SIMPLIFIED Join Course Button Section */}
      <div className="learning-section-container">
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
            <FontAwesomeIcon icon={faUsers} style={{ marginRight: '8px', color: '#2563EB' }} />
            * 100% Placement Assistance | Live Projects | Industry Mentors
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="learning-cta-section">
        <div className="learning-cta-container">
          <div className="learning-cta-content">
            <h3 className="learning-cta-title">
              <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '10px' }} />
              Ready to Transform?
            </h3>
            <p className="learning-cta-desc">
              Join our learning community and build your future piece by piece
            </p>
            <button
              className="learning-cta-btn"
              onClick={handleCTAClick}
            >
              <span>View All Courses</span>
              <div className="learning-cta-arrow">
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