import React, { useState, useRef } from 'react';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faPalette, 
  faRobot, 
  faMobileAlt, 
  faCloud,
  faCalendarAlt,
  faClock,
  faUser,
  faUsers,
  faTrophy,
  faStar,
  faChalkboardTeacher,
  faHandshake,
  faLightbulb,
  faBookOpen,
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faCheckCircle,
  faCertificate,
  faChevronRight,
  faChevronDown,
  faGlobe,
  faBriefcase,
  faNetworkWired,
  faLifeRing,  // Corrected this line - was falfeRing
  faUserGraduate
} from '@fortawesome/free-solid-svg-icons';

import './WorkshopsPage.css';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const WorkshopsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    workshop: '',
    message: ''
  });

  // Color palette using the existing primary color
  const primaryColor = '#FF6B6B';
  const secondaryColor = '#4ECDC4';
  const accentColor = '#FFD166';
  const darkColor = '#2D3047';
  const lightColor = '#F7FFF7';
  
  // Create a ref for the contact section
  const contactSectionRef = useRef(null);

  // Workshops Data with Font Awesome icons
  const workshopsData = {
    conducted: [
      {
        id: 1,
        title: "Graphic Design Fundamentals workshop",
        date: "2023",
        duration: "3 hours",
        participants: "150+",
        instructor: "Surya",
        status: "Completed",
        theme: "Graphic Design",
        color: primaryColor,
        icon: faPalette,
        iconColor: '#FF6B6B',
        description: "Comprehensive workshop covering Basic designs, typography and color theory."
      },
      {
        id: 2,
        title: "AI Tools for graphic design workshop",
        date: "2024",
        duration: "2 hours",
        participants: "200+",
        instructor: "Ashwin Kumar",
        status: "Completed",
        theme: "AI Tools",
        color: secondaryColor,
        icon: faRobot,
        iconColor: '#4ECDC4',
        description: "Hands-on workshop on modern AI Tools with Graphic design"
      },
      {
        id: 3,
        title: "UI/UX Basics Workshop",
        date: "2024",
        duration: "4 hours",
        participants: "120+",
        instructor: "Priya Nanadhini",
        status: "Completed",
        theme: "UI/UX",
        color: accentColor,
        icon: faLaptopCode,
        iconColor: '#FFD166',
        description: "Learn UI vs Ux clarity and wireframing basics with ui desing overview."
      },
      {
        id: 4,
        title: "Website & App ui design workshop",
        date: "2025",
        duration: "2 Days",
        participants: "180+",
        instructor: "Priya Nandhini",
        status: "Completed",
        theme: "Web design",
        color: darkColor,
        icon: faGlobe,
        iconColor: '#FF6B6B',
        description: "webiste Ui design with responsive designs and consistency"
      }
    ],
    upcoming: [
      {
        id: 5,
        title: "Graphic Design",
        date: "Apply now",
        duration: "upto 3 hrs",
        participants: "100",
        instructor: "Surya",
        status: "Upcoming",
        theme: "data",
        color: lightColor,
        icon: faPalette,
        iconColor: '#4ECDC4',
        description: "Learn Graphic design, UI design, and Branding",
        seats: "40",
      },
      {
        id: 6,
        title: "Java & python",
        date: "Apply now",
        duration: "upto 3 hrs",
        participants: "80",
        instructor: "Foujaan J S",
        status: "Upcoming",
        theme: "mobile",
        color: primaryColor,
        icon: faMobileAlt,
        iconColor: '#FFD166',
        description: "Build cross-platform apps with python & java",
        seats: "25",
      }
    ]
  };

  // Workshop Staff with Font Awesome icons
  const workshopStaff = [
    {
      id: 1,
      name: "Surya",
      role: "Sr Graphic Designer",
      workshops: "5+",
      experience: "2 Years",
      specialization: ["Graphic design", "branding", "logo desgin"],
      avatar: "SJ",
      color: primaryColor,
      icon: faPalette,
      iconColor: '#FF6B6B',
      bio: "Senior graphic designer since the company started",
      rating: 4.9
    },
    {
      id: 2,
      name: "Priya Nandhini",
      role: "Ui/Ux designer",
      workshops: "3+",
      experience: "2 Years",
      specialization: ["UI design", "Wireframing", "UX design"],
      avatar: "PN",
      color: primaryColor,
      icon: faLaptopCode,
      iconColor: '#4ECDC4',
      bio: "Built scalable UI's for more than 10+ companies",
      rating: 4.8
    },
    {
      id: 3,
      name: "Ashwin Kumar",
      role: "AI design Tools",
      workshops: "3+",
      experience: "2 Years",
      specialization: ["AI Tools", "Ux designs", "AI Usage"],
      avatar: "AK",
      color: primaryColor,
      icon: faRobot,
      iconColor: '#FFD166',
      bio: "Award-winner with focus on user-centered AI tools",
      rating: 4.9
    },
    {
      id: 4,
      name: "Stella",
      role: "Branding & visual identity",
      workshops: "6+",
      experience: "2 Years",
      specialization: ["Brand stratergy", "Typography", "project branding"],
      avatar: "ST",
      color: primaryColor,
      icon: faCertificate,
      iconColor: '#FF6B6B',
      bio: "Certified branding expert with enterprise deployment experience",
      rating: 4.7
    },
    {
      id: 5,
      name: "Gowtham",
      role: "portfolio & career growth",
      workshops: "5+",
      experience: "2 Years",
      specialization: ["portfolio structure", "freelance", "interview preperations"],
      avatar: "GM",
      color: primaryColor,
      icon: faBriefcase,
      iconColor: '#4ECDC4',
      bio: "Published 10+ apps on App Store and Google Play",
      rating: 4.8
    }
  ];

  // Awards & Recognition with Font Awesome icons
  const awards = [
    {
      id: 1,
      title: "Best Workshop Series 2023",
      organization: "Tech Education Awards",
      year: "2023",
      icon: faTrophy,
      iconColor: '#FFD166',
      color: primaryColor,
      description: "Recognized for outstanding workshop content and delivery"
    },
    {
      id: 2,
      title: "Excellence in Tech Education",
      organization: "Global Learning Summit",
      year: "2024",
      icon: faStar,
      iconColor: '#FF6B6B',
      color: primaryColor,
      description: "Award for innovative teaching methodologies"
    },
    {
      id: 3,
      title: "Topest Rated Instructor",
      organization: "Student Choice Awards",
      year: "2024",
      icon: faChalkboardTeacher,
      iconColor: '#4ECDC4',
      color: primaryColor,
      description: "Highest student satisfaction ratings"
    },
    {
      id: 4,
      title: "Industry Partnership Award",
      organization: "Tech Industry Council",
      year: "2025",
      icon: faHandshake,
      iconColor: '#FFD166',
      color: primaryColor,
      description: "For bridging industry-academia gap"
    },
    {
      id: 5,
      title: "Innovation in Curriculum",
      organization: "Education Innovation Forum",
      year: "2025",
      icon: faLightbulb,
      iconColor: '#FF6B6B',
      color: primaryColor,
      description: "Cutting-edge workshop content development"
    },
    {
      id: 6,
      title: "Allover Student Catcher",
      organization: "Innovation Enterprises Forum",
      year: "2025",
      icon: faUser,
      iconColor: '#6b97ffff',
      color: primaryColor,
      description: "Gathered more students all over the area"
    }

  ];

  // Workshop Reviews
  const reviews = [
    {
      id: 1,
      name: "Janani S",
      company: "graphic design Student",
      rating: 5,
      workshop: "Graphic design fundamentals workshop",
      review: "The workshop transformed my understanding of graphic design teaching style is exceptional!",
      date: "2023",
      avatar: "SJ",
      // icon: faComments
    },
    {
      id: 2,
      name: "Harini R",
      company: "AI student",
      rating: 5,
      workshop: "AI Tools for graphic design workshop",
      review: "Hands-on approach helped me build a real project with real time entities helps me more!",
      date: "2024",
      avatar: "HR",
      // icon: faComments
    },
    {
      id: 3,
      name: "Kavin S",
      company: "UI/UX design Student",
      rating: 5,
      workshop: "UI/UX basics Workshop",
      review: "From beginner to confident UI designer in 2 days.Their insights were invaluable.",
      date: "2024",
      avatar: "RC",
      // icon: faComments
    },
    {
      id: 4,
      name: "Lokesh M",
      company: "graphic & ui/ux student.",
      rating: 4,
      workshop: "Ui/Ux basics workshop",
      review: "Practical knowledge that I applied immediately at work. Excellent workshop!",
      date: "2024",
      avatar: "LM",
      // icon: faComments
    },
    {
      id: 5,
      name: "Mukesh K",
      company: "python student.",
      rating: 4,
      workshop: "AI Tools for graphic design workshop",
      review: "The workshop which helped me to understand more about the ai concepts!",
      date: "2024",
      avatar: "MK",
      // icon: faComments
    },
    {
      id: 6,
      name: "Gowshik k",
      company: "graphic design student.",
      rating: 4,
      workshop: "Graphic design fundamentals workshop",
      review: " knowledge that I gained from worshop is useful!",
      date: "2024",
      avatar: "GK",
      // icon: faComments
    }
  ];

  // Workshop Stats with Font Awesome icons
  const stats = [
    { label: "Workshops Conducted", value: "50+", icon: faBookOpen, iconColor: '#FF6B6B' },
    { label: "Participants Trained", value: "5000+", icon: faUsers, iconColor: '#4ECDC4' },
    { label: "Cities Covered", value: "15+", icon: faMapMarkerAlt, iconColor: '#FFD166' },
    { label: "Satisfaction Rate", value: "98%", icon: faStar, iconColor: '#FF6B6B' }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    workshopName: formData.workshop,
    message: formData.message
  };

  try {
    console.log("Workshop Payload:", payload);

    const response = await fetch(
      "https://localhost:8081/api/workshopform/submit",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      }
    );

    if (!response.ok) {
      const err = await response.text();
      throw new Error(err);
    }

    alert("Workshop registration successful!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      workshop: "",
      message: ""
    });

  } catch (error) {
    alert("Submission failed: " + error.message);
  }
};

  // Function to scroll to contact section
  const scrollToContactSection = (workshopTitle) => {
    // Set the selected workshop in the form
    setFormData(prev => ({
      ...prev,
      workshop: workshopTitle
    }));
    
    // Scroll to the contact section
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="wsp-page">
      <TopNavBar/>
      <TwoLineNavbar/>
      {/* Animated Header */}
      <header className="wsp-header">
        <div className="wsp-header-background">
          {/* Animated Workshop Elements */}
          <div className="wsp-workshop-elements">
            <div className="wsp-element wsp-element-1" style={{ color: '#FF6B6B' }}>
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <div className="wsp-element wsp-element-2" style={{ color: '#4ECDC4' }}>
              <FontAwesomeIcon icon={faPalette} />
            </div>
            <div className="wsp-element wsp-element-3" style={{ color: '#FFD166' }}>
              <FontAwesomeIcon icon={faMobileAlt} />
            </div>
            <div className="wsp-element wsp-element-4" style={{ color: '#FF6B6B' }}>
              <FontAwesomeIcon icon={faRobot} />
            </div>
            <div className="wsp-element wsp-element-5" style={{ color: '#4ECDC4' }}>
              <FontAwesomeIcon icon={faCloud} />
            </div>
          </div>
          
          <div className="wsp-header-content">
            <h1 className="wsp-title">
              <span className="wsp-title-text">Workshops</span>
              <span className="wsp-title-sub">Learn. Build. Innovate.</span>
            </h1>
            <p className="wsp-header-description">
              Join our interactive workshops led by industry experts. 
              Gain practical skills, work on real projects, and accelerate your career.
            </p>
            <div className="wsp-header-stats">
              {stats.map((stat, index) => (
                <div key={index} className="wsp-header-stat">
                  <span className="wsp-stat-icon" style={{ color: stat.iconColor }}>
                    <FontAwesomeIcon icon={stat.icon} />
                  </span>
                  <div>
                    <div className="wsp-stat-value">{stat.value}</div>
                    <div className="wsp-stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="wsp-scroll-indicator">
              <span className="wsp-scroll-text">Explore Workshops</span>
              <div className="wsp-scroll-arrow" style={{ color: primaryColor }}>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="wsp-main-content">
        {/* Workshops Section */}
        <section className="wsp-section wsp-workshops-section">
          <div className="wsp-container">
            <div className="wsp-section-header">
              <h2 className="wsp-section-title">Our Workshops</h2>
              <p className="wsp-section-subtitle">Hands-on learning experiences</p>
            </div>
            
            <div className="wsp-tabs">
              <button 
                className={`wsp-tab ${activeTab === 'upcoming' ? 'wsp-active' : ''}`}
                onClick={() => setActiveTab('upcoming')}
                style={{ borderColor: activeTab === 'upcoming' ? primaryColor : 'transparent' }}
              >
                <span className="wsp-tab-icon" style={{ color: primaryColor }}>
                  <FontAwesomeIcon icon={faCalendarAlt} />
                </span>
                <span className="wsp-tab-text">Upcoming Workshops</span>
              </button>
              <button 
                className={`wsp-tab ${activeTab === 'conducted' ? 'wsp-active' : ''}`}
                onClick={() => setActiveTab('conducted')}
                style={{ borderColor: activeTab === 'conducted' ? primaryColor : 'transparent' }}
              >
                <span className="wsp-tab-icon" style={{ color: primaryColor }}>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </span>
                <span className="wsp-tab-text">Past Workshops</span>
              </button>
            </div>
            
            <div className="wsp-workshops-grid">
              {workshopsData[activeTab].map((workshop) => (
                <div 
                  key={workshop.id} 
                  className="wsp-workshop-card"
                  style={{ '--workshop-color': primaryColor }}
                >
                  <div className="wsp-workshop-header">
                    <div className="wsp-workshop-icon" style={{ color: workshop.iconColor }}>
                      <FontAwesomeIcon icon={workshop.icon} />
                    </div>
                    <div className="wsp-workshop-badge" style={{ backgroundColor: primaryColor }}>
                      {workshop.status}
                    </div>
                  </div>
                  
                  <div className="wsp-workshop-content">
                    <h3 className="wsp-workshop-title">{workshop.title}</h3>
                    <p className="wsp-workshop-description">{workshop.description}</p>
                    
                    <div className="wsp-workshop-details">
                      <div className="wsp-detail-item">
                        <span className="wsp-detail-icon" style={{ color: primaryColor }}>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                        </span>
                        <span className="wsp-detail-text">{workshop.date}</span>
                      </div>
                      <div className="wsp-detail-item">
                        <span className="wsp-detail-icon" style={{ color: primaryColor }}>
                          <FontAwesomeIcon icon={faClock} />
                        </span>
                        <span className="wsp-detail-text">{workshop.duration}</span>
                      </div>
                      <div className="wsp-detail-item">
                        <span className="wsp-detail-icon" style={{ color: primaryColor }}>
                          <FontAwesomeIcon icon={faChalkboardTeacher} />
                        </span>
                        <span className="wsp-detail-text">{workshop.instructor}</span>
                      </div>
                      <div className="wsp-detail-item">
                        <span className="wsp-detail-icon" style={{ color: primaryColor }}>
                          <FontAwesomeIcon icon={faUsers} />
                        </span>
                        <span className="wsp-detail-text">{workshop.participants} Participants</span>
                      </div>
                    </div>
                    
                    {activeTab === 'upcoming' && (
                      <div className="wsp-upcoming-info">
                        <div className="wsp-price-section">
                          <div className="wsp-price-group">
                            <span className="wsp-price-label">Grab the seats when available</span>
                            <span className="wsp-price">{workshop.price}</span>
                          </div>
                          <div className="wsp-price-group">
                            <span className="wsp-price wsp-early-bird">{workshop.earlyBird}</span>
                          </div>
                        </div>
                        <div className="wsp-seats-info">
                          <span className="wsp-seats-label">Seats Available:</span>
                          <span className="wsp-seats-count">{workshop.seats}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Only show Register Now button for upcoming workshops */}
                  {activeTab === 'upcoming' && (
                    <div className="wsp-workshop-actions">
                      <button
                        onClick={() => scrollToContactSection(workshop.title)}
                        className="wsp-register-btn"
                        style={{ backgroundColor: primaryColor }}
                      >
                        <span className="wsp-btn-text">Register Now</span>
                        <span className="wsp-btn-arrow">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </span>
                      </button>
                    </div>
                  )}
                  
                  <div className="wsp-workshop-glow" style={{ backgroundColor: `${primaryColor}15` }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Workshop Staff */}
        <section className="wsp-section wsp-staff-section">
          <div className="wsp-container">
            <div className="wsp-section-header">
              <h2 className="wsp-section-title">Meet Our Instructors</h2>
              <p className="wsp-section-subtitle">Industry experts guiding your learning journey</p>
            </div>
            
            <div className="wsp-staff-grid">
              {workshopStaff.map((staff) => (
                <div key={staff.id} className="wsp-staff-card">
                  <div className="wsp-staff-header">
                    <div 
                      className="wsp-staff-avatar"
                      style={{ backgroundColor: `${primaryColor}20`, borderColor: primaryColor }}
                    >
                      <span className="wsp-avatar-text">{staff.avatar}</span>
                      <div className="wsp-rating-badge" style={{ backgroundColor: primaryColor }}>
                        <span className="wsp-rating-star">
                          <FontAwesomeIcon icon={faStar} />
                        </span>
                        <span className="wsp-rating-value">{staff.rating}</span>
                      </div>
                    </div>
                    
                    <div className="wsp-staff-info">
                      <h3 className="wsp-staff-name">{staff.name}</h3>
                      <p className="wsp-staff-role">{staff.role}</p>
                      <div className="wsp-staff-stats">
                        <div className="wsp-staff-stat">
                          <span className="wsp-stat-icon" style={{ color: primaryColor }}>
                            <FontAwesomeIcon icon={faBookOpen} />
                          </span>
                          <span className="wsp-stat-value">{staff.workshops}</span>
                        </div>
                        <div className="wsp-staff-stat">
                          <span className="wsp-stat-icon" style={{ color: primaryColor }}>
                            <FontAwesomeIcon icon={faBriefcase} />
                          </span>
                          <span className="wsp-stat-value">{staff.experience}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="wsp-staff-bio">{staff.bio}</p>
                  
                  <div className="wsp-staff-specialization">
                    {staff.specialization.map((skill, index) => (
                      <span 
                        key={index} 
                        className="wsp-skill-tag"
                        style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="wsp-section wsp-awards-section">
          <div className="wsp-container">
            <div className="wsp-section-header">
              <h2 className="wsp-section-title">Awards & Recognition</h2>
              <p className="wsp-section-subtitle">Our commitment to excellence</p>
            </div>
            
            <div className="wsp-awards-grid">
              {awards.map((award) => (
                <div 
                  key={award.id} 
                  className="wsp-award-card"
                  style={{ '--award-color': primaryColor }}
                >
                  <div className="wsp-award-icon" style={{ color: award.iconColor }}>
                    <FontAwesomeIcon icon={award.icon} />
                  </div>
                  
                  <div className="wsp-award-content">
                    <h3 className="wsp-award-title">{award.title}</h3>
                    <div className="wsp-award-meta">
                      <span className="wsp-award-org">{award.organization}</span>
                      <span className="wsp-award-year">{award.year}</span>
                    </div>
                    <p className="wsp-award-description">{award.description}</p>
                  </div>
                  
                  <div className="wsp-award-glow" style={{ backgroundColor: `${primaryColor}15` }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="wsp-section wsp-reviews-section">
          <div className="wsp-container">
            <div className="wsp-section-header">
              <h2 className="wsp-section-title">Workshop Reviews</h2>
              <p className="wsp-section-subtitle">What participants say about our workshops</p>
            </div>
            
            <div className="wsp-reviews-grid">
              {reviews.map((review) => (
                <div key={review.id} className="wsp-review-card">
                  <div className="wsp-review-header">
                    <div className="wsp-reviewer-avatar">
                      <span className="wsp-avatar-initials">{review.avatar}</span>
                    </div>
                    <div className="wsp-reviewer-info">
                      <h4 className="wsp-reviewer-name">{review.name}</h4>
                      <p className="wsp-reviewer-company">{review.company}</p>
                    </div>
                    <div className="wsp-review-rating" style={{ color: '#FFD166' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} />
                      ))}
                    </div>
                  </div>
                  
                  <div className="wsp-review-content">
                    <p className="wsp-review-text">"{review.review}"</p>
                    <div className="wsp-review-meta">
                      <span className="wsp-review-workshop">{review.workshop}</span>
                      <span className="wsp-review-date">{review.date}</span>
                    </div>
                  </div>
                  
                  {/* <div className="wsp-review-quote" style={{ color: primaryColor }}>
                    <FontAwesomeIcon icon={faQuoteRight} />
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Registration Section with ref */}
        <section 
          ref={contactSectionRef} 
          className="wsp-section wsp-contact-section"
          id="registration-form"
        >
          <div className="wsp-container">
            <div className="wsp-contact-grid">
              <div className="wsp-contact-info">
                <div className="wsp-section-header">
                  <h2 className="wsp-section-title">Register for Workshops</h2>
                  <p className="wsp-section-subtitle">Secure your spot today</p>
                </div>
                
                <div className="wsp-benefits-list">
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                    <span className="wsp-benefit-text">Hands-on practical sessions</span>
                  </div>
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faChalkboardTeacher} />
                    </span>
                    <span className="wsp-benefit-text">Industry expert instructors</span>
                  </div>
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faCertificate} />
                    </span>
                    <span className="wsp-benefit-text">Certificate of completion</span>
                  </div>
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faNetworkWired} />
                    </span>
                    <span className="wsp-benefit-text">Networking opportunities</span>
                  </div>
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faUserGraduate} />
                    </span>
                    <span className="wsp-benefit-text">Lifetime access to materials</span>
                  </div>
                  <div className="wsp-benefit-item">
                    <span className="wsp-benefit-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faLifeRing} />
                    </span>
                    <span className="wsp-benefit-text">Post-workshop support</span>
                  </div>
                </div>
                
                <div className="wsp-contact-details">
                  <div className="wsp-contact-item">
                    <span className="wsp-contact-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <div>
                      <p className="wsp-contact-label">Email</p>
                      <p className="wsp-contact-value">engloray@gmail.com</p>
                    </div>
                  </div>
                  <div className="wsp-contact-item">
                    <span className="wsp-contact-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faPhone} />
                    </span>
                    <div>
                      <p className="wsp-contact-label">Phone</p>
                      <p className="wsp-contact-value">+91 63681759909</p>
                    </div>
                  </div>
                  <div className="wsp-contact-item">
                    <span className="wsp-contact-icon" style={{ color: primaryColor }}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </span>
                    <div>
                      <p className="wsp-contact-label">Location</p>
                      <p className="wsp-contact-value">Madurai, TamilNadu INDIA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="wsp-contact-form">
                <div className="wsp-form-header">
                  <h3 className="wsp-form-title">Workshop Registration</h3>
                  <p className="wsp-form-subtitle">Fill this form to book your seat</p>
                </div>
                
                <form onSubmit={handleSubmit} className="wsp-form">
                  <div className="wsp-form-row">
                    <div className="wsp-form-group">
                      <label className="wsp-form-label">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="wsp-form-input"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    
                    <div className="wsp-form-group">
                      <label className="wsp-form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="wsp-form-input"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="wsp-form-row">
                    <div className="wsp-form-group">
                      <label className="wsp-form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="wsp-form-input"
                        placeholder="Enter your phone"
                      />
                    </div>
                    
                    <div className="wsp-form-group">
                      <label className="wsp-form-label">Workshop Interest *</label>
                      <select
                        name="workshop"
                        value={formData.workshop}
                        onChange={handleInputChange}
                        className="wsp-form-select"
                        required
                      >
                        <option value="">Select a workshop</option>
                        <option value="Graphic Design">Graphic Design</option>
                        <option value="Java & Python">Java & Python</option>
                        <option value="Other">Other</option>

                      </select>
                    </div>
                  </div>
                  
                  <div className="wsp-form-group">
                    <label className="wsp-form-label">Additional Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="wsp-form-textarea"
                      placeholder="Any questions or specific requirements?"
                      rows="3"
                    ></textarea>
                  </div>
                  
                  <div className="wsp-form-agreement">
                    <label className="wsp-agreement-label">
                      <input type="checkbox" required />
                      <span>I agree to receive workshop updates and related communications</span>
                    </label>
                  </div>
                  
                  <button type="submit" className="wsp-submit-btn" style={{ backgroundColor: primaryColor }}>
                    <span className="wsp-btn-text">Register Now</span>
                    <span className="wsp-btn-arrow">
                      <FontAwesomeIcon icon={faChevronRight} />
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <MainPageSubFooter/>
      <BackToTop/>
    </div>
  );
};
 
export default WorkshopsPage;