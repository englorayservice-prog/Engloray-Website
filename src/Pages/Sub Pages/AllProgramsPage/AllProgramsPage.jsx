import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPalette,
  faPencilRuler,
  faCode,
  faLaptopCode,
  faRobot,
  faLayerGroup,
  faChartLine,
  faProjectDiagram,
  faUserGraduate,
  faBriefcase,
  faVideo,
  faCertificate,
  faUsers,
  faCrown,
  faPhoneAlt,
  faStar,
  faGraduationCap,
  faMagic, // Replaced faCrystalBall with faMagic
  faComments,
  faCalendarAlt,
  faUser,
  faEnvelope,
  faPhone,
  faClock,
  faCalendarCheck,
  faSignInAlt,
  faBell,
  faChevronDown,
  faChevronUp,
  faCheckCircle,
  faRocket,
  faLightbulb,
  faBolt,
  faBullseye,
  faFire,
  faPaintBrush,
  faDesktop,
  faDatabase,
  faCloud,
  faSearch,
  faTools,
  faEye, // Added for future vision
  faBrain, // Added for AI/innovation
  faForward // Added for future-forward
} from '@fortawesome/free-solid-svg-icons';
import "./AllProgramsPage.css";
import TopNavBar from "../../../Components/TopNavbar/TopNavbar";
import Navbar from "../../../Components/Navbar/Navbar";
import BackToTop from "../../../Components/BackToTop/BackToTop";
import TSPFFooter from "../TechGroupSubPagefooter/TSPFFooter";

const AllProgramsPage = () => {
  const navigate = useNavigate();
  const [visibleCourses, setVisibleCourses] = useState(2);
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });
  const [floatingIcons, setFloatingIcons] = useState([]);
  
  const stats = [
    { label: "Students", value: "2,000+" },
    { label: "Placement Rate", value: "95%" },
    { label: "Partners", value: "50+" },
  ];

  const whyItems = [
    { 
      title: "Project-Based Learning", 
      text: "Build portfolio-worthy projects with guided mentorship.",
      icon: faProjectDiagram,
      color: "#FF6B6B"
    },
    { 
      title: "1:1 Mentorship", 
      text: "Personal coach for career guidance and feedback.",
      icon: faUserGraduate,
      color: "#4ECDC4"
    },
    { 
      title: "Job-Ready Curriculum", 
      text: "Industry-aligned syllabus to make you job ready.",
      icon: faBriefcase,
      color: "#FFD166"
    },
    { 
      title: "Live Sessions", 
      text: "Weekly live classes with industry practitioners.",
      icon: faVideo,
      color: "#06D6A0"
    },
    { 
      title: "Certification", 
      text: "Receive verified certificates on course completion.",
      icon: faCertificate,
      color: "#118AB2"
    },
    { 
      title: "Community", 
      text: "Join a supportive, active student community.",
      icon: faUsers,
      color: "#EF476F"
    },
  ];

  const allCourses = [
    {
      title: "Graphics Design & Branding",
      desc: "Master the foundations of visual communication through color theory, typography, composition, and modern design principles. Learn to create logos, brand identities, marketing materials, and digital assets that convey strong messages. Understand brand psychology, storytelling, and consistency across platforms. Build a portfolio that showcases your creativity, strategic thinking, and ability to design memorable, high-impact brand experiences.",
      students: "1.2k students",
      level: "Beginner → Pro",
      projects: 8,
      icon: faPalette,
      iconColor: "#FF6B6B",
      route: "/GraphicDesignerInternPage"
    },
    {
      title: "UI / UX Design Mastery",
      desc: "Develop complete user-centered design expertise from research to final prototype. Learn wireframing, interaction design, usability testing, and design systems. Explore user psychology, accessibility, responsive layouts, and modern UX workflows. Use industry tools to craft intuitive, visually polished interfaces. Build real-world projects that demonstrate your ability to solve problems and deliver seamless, meaningful digital experiences across web and mobile platforms.",
      students: "900+ students",
      level: "Beginner → Advanced",
      projects: 10,
      icon: faPencilRuler,
      iconColor: "#4ECDC4",
      route: "/uiuxDesignerInternPage"
    },
    {
      title: "Web Development Bootcamp",
      desc: "Learn full-stack web development starting from HTML, CSS, JavaScript, and responsive design. Build interactive websites and dynamic applications using Front-end frameworks, APIs, and Back-end essentials like databases and authentication. Understand deployment, version control, and real-world development workflows. Create multiple projects that strengthen your portfolio and prepare you for professional web development roles in today's fast-growing tech industry.",
      students: "1.5k students",
      level: "Beginner → Advanced",
      projects: 12,
      icon: faCode,
      iconColor: "#118AB2",
      route: "/websiteDeveloperInternPage"
    },
    {
      title: "Software Development Mastry",
      desc: "Gain strong programming foundations through algorithms, data structures, databases, and software architecture. Learn to build scalable applications using modern frameworks, clean code principles, and real-world development methods. Understand debugging, testing, deployment, and project planning. Work on practical projects that enhance your problem-solving abilities and prepare you for professional software development roles across multiple platforms and technologies.",
      students: "800+ students",
      level: "Intermediate",
      projects: 6,
      icon: faLaptopCode,
      iconColor: "#06D6A0",
      route: "/SoftwareDeveloperInternPage"
    },
  ];

  const futureCourses = [
    { 
      title: "AI Creative Intelligence", 
      desc: "Generative design workflows & creative AI tools.",
      icon: faRobot,
      iconColor: "#FF6B6B"
    },
    { 
      title: "Full-Stack Development", 
      desc: "Modern web stacks, databases, and deployment.",
      icon: faLayerGroup,
      iconColor: "#4ECDC4"
    },
    { 
      title: "Digital Marketing", 
      desc: "Growth strategies, ads, analytics & content.",
      icon: faChartLine,
      iconColor: "#FFD166"
    },
  ];

  const floatingIconSymbols = [
    { icon: faLaptopCode, color: "#FF6B6B" },
    { icon: faCode, color: "#4ECDC4" },
    { icon: faRocket, color: "#118AB2" },
    { icon: faBullseye, color: "#06D6A0" },
    { icon: faChartLine, color: "#FFD166" },
    { icon: faStar, color: "#EF476F" },
    { icon: faFire, color: "#FF6B6B" },
    { icon: faLightbulb, color: "#FFD166" },
    { icon: faBolt, color: "#06D6A0" },
    { icon: faPalette, color: "#118AB2" },
    { icon: faMagic, color: "#4ECDC4" },
    { icon: faPaintBrush, color: "#FF6B6B" },
    { icon: faDesktop, color: "#06D6A0" },
    { icon: faDatabase, color: "#118AB2" },
    { icon: faCloud, color: "#4ECDC4" },
    { icon: faSearch, color: "#FFD166" },
    { icon: faTools, color: "#EF476F" },
    { icon: faBrain, color: "#FF6B6B" },
    { icon: faForward, color: "#06D6A0" },
    { icon: faEye, color: "#118AB2" }
  ];
  
  const scrollToForm = () => {
    const formSection = document.getElementById('talk');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleEnrollClick = (course) => {
    if (course.route) {
      navigate(course.route);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };
  
  const handleLoadMore = () => {
    if (visibleCourses >= allCourses.length) {
      setVisibleCourses(2);
    } else {
      setVisibleCourses(allCourses.length);
    }
  };
  
  const handleNotifyClick = (course) => {
    alert(`You'll be notified when ${course.title} becomes available!`);
  };
  
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
const handleScheduleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    course: formData.course
  };

  try {
    const response = await fetch(
      "https://localhost:8081/api/AllProgramsForm/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      const error = await response.text();
      throw new Error(error);
    }

    setShowToast(true);
    setFormData({ name: '', email: '', phone: '', course: '' });

    setTimeout(() => setShowToast(false), 3000);
  } catch (error) {
    alert("Submission failed: " + error.message);
  }
};

  
  useEffect(() => {
    const icons = [];
    for (let i = 0; i < 15; i++) {
      const randomIcon = floatingIconSymbols[Math.floor(Math.random() * floatingIconSymbols.length)];
      icons.push({
        id: i,
        icon: randomIcon.icon,
        color: randomIcon.color,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 10}s`,
        duration: `${10 + Math.random() * 10}s`,
        size: `${1 + Math.random() * 1.5}rem`
      });
    }
    setFloatingIcons(icons);
  }, []);
  
  const displayedCourses = allCourses.slice(0, visibleCourses);
  
  return (
    <div className="app-front-page">
      {showToast && (
        <div className="app-toast-notification show">
          <span className="app-toast-icon">
            <FontAwesomeIcon icon={faCheckCircle} />
          </span>
          <span>Call scheduled successfully! We'll contact you soon.</span>
        </div>
      )}
      <TopNavBar/>
      <Navbar/>
      <section className="app-hero app-section" id="home">
        <div className="app-hero-content">
          <div className="app-pill">
            <FontAwesomeIcon icon={faCrown} style={{ marginRight: '10px' }} />
            TOP RATED COURSES
          </div>
          <h1 className="app-hero-title">Transform Your Skills. Shape Your Career.</h1>
          <p className="app-hero-sub">
            Learn industry-driven skills with live mentors, project-based curriculum and placement support.
          </p>
          <div className="app-hero-actions">
            <button className="app-btn app-btn-primary" onClick={scrollToForm}>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} />
              Contact Us
            </button>
          </div>

          <div className="app-stats-row">
            {stats.map((s) => (
              <div className="app-stat-card app-card" key={s.label}>
                <div className="app-stat-value">{s.value}</div>
                <div className="app-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="app-section app-why" id="why">
        <div className="app-container">
          <h2 className="app-section-title">
            <FontAwesomeIcon icon={faStar} style={{ marginRight: '15px' }} />
            Why Choose Us?
          </h2>
          <p className="app-section-sub">A learning experience designed to convert your effort into a career.</p>

          <div className="app-why-grid">
            {whyItems.map((w, index) => (
              <article className="app-feature-card app-card" key={w.title}>
                <div className="app-icon-circle" style={{ backgroundColor: w.color }}>
                  <FontAwesomeIcon icon={w.icon} />
                </div>
                <h3>{w.title}</h3>
                <p className="app-feature-desc">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <section className="app-section app-courses" id="courses">
        <div className="app-container">
          <h2 className="app-section-title">
            <FontAwesomeIcon icon={faGraduationCap} style={{ marginRight: '15px' }} />
            In-Demand Skills to Learn Now
          </h2>
          <div className="app-courses-grid">
            {displayedCourses.map((c) => (
              <article className="app-course-card app-card" key={c.title}>
                <div className="app-course-top">
                  <div className="app-course-icon" style={{ backgroundColor: c.iconColor }}>
                    <FontAwesomeIcon icon={c.icon} />
                  </div>
                  <div className="app-course-meta">
                    <div className="app-course-title">{c.title}</div>
                    <div className="app-course-level">{c.level}</div>
                  </div>
                </div>
                <p className="app-course-desc">{c.desc}</p>
                <div className="app-course-footer">
                  <div className="app-course-stats">
                    <span>
                      <FontAwesomeIcon icon={faUsers} style={{ marginRight: '5px' }} />
                      {c.students}
                    </span>
                    <span>
                      <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: '5px' }} />
                      {c.projects} projects
                    </span>
                  </div>
                  <div className="app-course-actions">
                    <button 
                      className="app-btn app-btn-primary"
                      onClick={() => handleEnrollClick(c)}                               
                    >
                      <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: '10px' }} />
                      Enroll
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {allCourses.length > 2 && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                className="app-btn app-btn-outline app-load-more-btn" 
                onClick={handleLoadMore}
              >
                <FontAwesomeIcon 
                  icon={visibleCourses >= allCourses.length ? faChevronUp : faChevronDown} 
                  style={{ marginRight: '10px' }} 
                />
                {visibleCourses >= allCourses.length ? 'View Less' : 'View More Courses'}
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="app-section app-future" id="future">
        <div className="app-container">
          <h2 className="app-section-title">
            <FontAwesomeIcon icon={faMagic} style={{ marginRight: '15px' }} />
            Future-Proof Skills
          </h2>
          <p className="app-section-sub">Courses launching soon — join the waitlist to get notified.</p>

          <div className="app-future-grid">
            {futureCourses.map((f) => (
              <div className="app-future-card app-card" key={f.title}>
                <div className="app-future-icon" style={{ backgroundColor: f.iconColor }}>
                  <FontAwesomeIcon icon={f.icon} />
                </div>
                <h3>{f.title}</h3>
                <p className="app-future-desc">{f.desc}</p>
                <button 
                  className="app-btn app-btn-outline"
                  onClick={() => handleNotifyClick(f)}
                >
                  <FontAwesomeIcon icon={faBell} style={{ marginRight: '10px' }} />
                  Notify Me
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="app-section app-talk" id="talk">
        <div className="app-floating-icons">
          {floatingIcons.map((icon) => (
            <div
              key={icon.id}
              className="app-floating-icon"
              style={{
                left: icon.left,
                animationDelay: icon.delay,
                animationDuration: icon.duration,
                fontSize: icon.size,
                color: icon.color
              }}
            >
              <FontAwesomeIcon icon={icon.icon} />
            </div>
          ))}
        </div>
        
        <div className="app-container app-talk-grid">
          <div className="app-talk-left">
            <h2 className="app-section-title">
              <FontAwesomeIcon icon={faComments} style={{ marginRight: '15px' }} />
              Talk With Us
            </h2>
            <p className="app-section-sub">Schedule a free 15-minute call to discuss your goals and the right course path.</p>
            <ul className="app-talk-bullets">
              <li>
                <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px', color: '#ff3333' }} />
                One-on-one guidance
              </li>
              <li>
                <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px', color: '#ff3333' }} />
                Flexible schedules
              </li>
              <li>
                <FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '10px', color: '#ff3333' }} />
                Career planning & interview prep
              </li>
            </ul>
            <div className="app-contact-info app-mini-card">
              <div>
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} />
                engloraytechgroup@gmail.com
              </div>
              <div>
                <FontAwesomeIcon icon={faPhone} style={{ marginRight: '10px' }} />
                +91 63817 59909
              </div>
            </div>
          </div>

          <form className="app-talk-form app-card" onSubmit={handleScheduleSubmit}>
            <h3>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px' }} />
              Book a slot
            </h3>
            <label className="app-input">
              <div className="app-input-icon">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <input 
                type="text" 
                name="name"
                placeholder="Full name" 
                required 
                value={formData.name}
                onChange={handleFormChange}
              />
            </label>
            <label className="app-input">
              <div className="app-input-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input 
                type="email" 
                name="email"
                placeholder="Email address" 
                required 
                value={formData.email}
                onChange={handleFormChange}
              />
            </label>
            <label className="app-input">
              <div className="app-input-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input 
                type="tel" 
                name="phone"
                placeholder="Phone (optional)" 
                value={formData.phone}
                onChange={handleFormChange}
              />
            </label>
            <label className="app-input">
              <div className="app-input-icon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <select 
                name="course"
                value={formData.course}
                onChange={handleFormChange}
                required
              >
                <option value="" disabled>Select preferred Course</option>
                <option>Graphic Design</option>
                <option>Ui/Ux Design</option>
                <option>Software Developer</option>
                <option>Web Developer</option>
              </select>
            </label>
            <button type="submit" className="app-btn app-btn-primary app-fullwidth">
              <FontAwesomeIcon icon={faCalendarCheck} style={{ marginRight: '10px' }} />
              Schedule Call
            </button>
          </form>
        </div>
      </section>
      <TSPFFooter/>
      <BackToTop/>
    </div>
  );
};

export default AllProgramsPage;
