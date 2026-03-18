import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRobot,
  faShoppingCart,
  faMobileAlt,
  faHospital,
  faUser,
  faUserTie,
  faUserGraduate,
  faClock,
  faFolderOpen,
  faUsers,
  faStar,
  faChevronLeft,
  faChevronRight,
  faComments,
  faPhone,
  faEnvelope,
  faBolt,
  faCalendar,
  faCheck,
  faPaintBrush,
  faLaptopCode,
  faPencilAlt,
  faBriefcase,
  faGraduationCap,
  faGlobe,
  faBrain,
  faRocket,
  faGem,
  faCrown,
  faHandshake,
  faCode,
  faShieldAlt,
  faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import './OurTeamPage.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const OurTeamPage = () => {
  const [activeReview, setActiveReview] = useState(0);

  // Team Projects
  const teamProjects = [
    {
      id: 1,
      title: "Ui/Ux Design for Makeover",
      description: "User Friendly Navigation for booking Appointments",
      tech: ["Ui/Ux", "Branding", "Designing"],
      progress: 100,
      color: "#FF6B6B",
      icon: <FontAwesomeIcon icon={faRobot} />
    },
    {
      id: 2,
      title: "Gym Life",
      description: "Website To Showcase Gym Facilities And Programs",
      tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
      progress: 100,
      color: "#4ECDC4",
      icon: <FontAwesomeIcon icon={faShoppingCart} />
    },
    {
      id: 3,
      title: "Mobile App For Jewellery",
      description: "Mobile Based Digital System For customers",
      tech: ["React Native", "Kotlin", "Swift", "Firebase"],
      progress: 100,
      color: "#45B7D1",
      icon: <FontAwesomeIcon icon={faMobileAlt} />
    },
    {
      id: 4,
      title: "Healthcare App for clinic",
      description: "Patient Friendly mobile App for booking Appointments",
      tech: ["Python", "PyTorch", "PostgreSQL", "Docker"],
      progress: 100,
      color: "#96CEB4",
      icon: <FontAwesomeIcon icon={faHospital} />
    }
  ];

  // Team Members
  const teamMembers = [
    {
      id: 1,
      name: "Gowtham",
      role: "Founder & Creative Director",
      experience: "2+ Years",
      projects: "36+",
      avatar: "G",
      skills: ["Web Design", "Ui/Ux Design", "Branding", "Designing"],
      color: "#FF6B6B",
      quote: "Building intelligent solutions that transform businesses",
      icon: <FontAwesomeIcon icon={faUserTie} />
    },
    {
      id: 2,
      name: "Surya",
      role: "Chief Operating Officer",
      experience: "2+ Years",
      projects: "20+",
      avatar: "S",
      skills: ["Team Management", "Coordination", "Ui/Ux", "Photoshop"],
      color: "#4ECDC4",
      quote: "Designing experiences that users love",
      icon: <FontAwesomeIcon icon={faUserGraduate} />
    },
    {
      id: 3,
      name: "Lilly",
      role: "Marketing Specialist",
      experience: "2+ Years",
      projects: "27+",
      avatar: "L",
      skills: ["Leadership", "Digital marketing", "Analytics", "SEO"],
      color: "#45B7D1",
      quote: "Crafting scalable and efficient solutions",
      icon: <FontAwesomeIcon icon={faUser} />
    }
  ];

  const totalTeamMembers = 16;

  // Team Timeline
  const teamTimeline = [
    {
      year: 2023,
      quarter: "Phase 1",
      title: "The Beginning",
      description: "ENGLORAY began as a creative design and branding studio, focused on helping local businesses and startups build their visual identity. ",
      members: ["Logo Design", "Branding Systems", "Product & label Design"],
      color: "#FF6B6B",
      side: "left",
      icon: <FontAwesomeIcon icon={faPaintBrush} />
    },
    {
      year: 2024,
      quarter: "Phase 2",
      title: "Growth & Digital Entry",
      description: "As client requirements evolved, ENGLORAY expanded into website design and UI/UX, marking the transition into digital platforms. ",
      members: ["Website Design", "Ui/Ux Design", "Branding for Digital platforms"],
      color: "#4ECDC4",
      side: "right",
      icon: <FontAwesomeIcon icon={faLaptopCode} />
    },
    {
      year: 2024,
      quarter: "Phase 3",
      title: "Ecosystem Expansion",
      description: "Launching Two Divisions : Tech Group & Learning Genration",
      members: ["Tech Group: ","Corporate Wensites", "UI/Ux Driven Business platforms", "Branding + Digital Integrations",
        "Learning Genration:", "Graphic Design Courses", "UI/Ux Training Programs", "Career Launching Paths"
      ],
      color: "#45B7D1",
      side: "left",
      icon: <FontAwesomeIcon icon={faPencilAlt} />
    },
    {
      year: 2025,
      quarter: "Phase 4",
      title: "Full Service Delivery",
      description: "By 2025, ENGLORAY delivered end-to-end solutions covering branding, technology, and growth",
      members: ["Mobile Applications", "Digital Promotions & Ads", "Software & System Solutions"],
      color: "#96CEB4",
      side: "right",
      icon: <FontAwesomeIcon icon={faBriefcase} />
    },
    {
      year: 2025,
      quarter: "Phase 5",
      title: "The Present",
      description: "A Trusted Creative, Tech & Learning Partner. ",
      members: ["ENGLORAY operates as", "ENGLORAY TECH GROUP:" ,"Business & Technology ",
        "ENGLORAY LEARNING GENERATION:",  "Education & Skills "],
      color: "#372d0aff",
      side: "left",
      icon: <FontAwesomeIcon icon={faGraduationCap} />
    },
    {
      year: 2026,
      quarter: "Phase 6",
      title: "The Future",
      description: "ENGLORAY's future roadmap focuses on growth, innovation, and international expansion",
      members: ["International Client Projects", "AI assisted Branding & designing Systems", "Global Learning Programs and certifications",
        "Advanced Learning Programs", "Scalable Platforms & SaaS products"
      ],
      color: "#DDA0DD",
      side: "right",
      icon: <FontAwesomeIcon icon={faGlobe} />
    }
  ];

  // Team Reviews
  const teamReviews = [
    {
      id: 1,
      client: "Divya Makeover",
      role: "Bridal Studio",
      review: "UI/UX design made our website easy and pleasant for customers.",
      rating: 5,
      project: "Ui/Ux Design for Makeover"
    },
    {
      id: 2,
      client: "Gym Life",
      role: "Fitness",
      review: "The website clearly represents our gym and helped us get more inquiries.",
      rating: 5,
      project: "Gym Fitness Website"
    },
    {
      id: 3,
      client: "Pavizham Jewellers",
      role: "Jewellery",
      review: "The mobile app made our business operations much smoother.",
      rating: 5,
      project: "Mobile App for jewellery"
    },
    {
      id: 4,
      client: "Orthopedic Clinic",
      role: "Medical",
      review: "The app made booking appointments very easy for patients.",
      rating: 5,
      project: "HealthCare App for Clinic"
    }
  ];

  const handleNextReview = () => {
    setActiveReview((prev) => (prev + 1) % teamReviews.length);
  };

  const handlePrevReview = () => {
    setActiveReview((prev) => (prev - 1 + teamReviews.length) % teamReviews.length);
  };

  // WhatsApp function
  const handleWhatsAppClick = () => {
    const phoneNumber = '+916381759909';
    const message = 'Hello ENGLORAY Team! I would like to discuss a project.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="otp-page">
      <TopNavBar/>
      <TwoLineNavbar/>
      {/* Animated Header */}
      <header className="otp-header">
        <div className="otp-header-background">
          <div className="otp-particle-container">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="otp-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              ></div>
            ))}
          </div>
          <div className="otp-header-content">
            <h1 className="otp-title">
              <span className="otp-title-text">Our Team</span>
              <span className="otp-title-sub">Build Better Business</span>
            </h1>
            <p className="otp-header-description">
              ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team.
            </p>
            <div className="otp-scroll-indicator">
              <span className="otp-scroll-text">Meet Our Team</span>
              <div className="otp-scroll-arrow"><FontAwesomeIcon icon={faChevronDown} /></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="otp-main-content">
        {/* Team Stats */}
        <section className="otp-section otp-stats-section">
          <div className="otp-container">
            <div className="otp-stats-grid">
              <div className="otp-stat-item">
                <div className="otp-stat-number">2+</div>
                <div className="otp-stat-label">Years Combined Experience</div>
              </div>
              <div className="otp-stat-item">
                <div className="otp-stat-number">285+</div>
                <div className="otp-stat-label">Projects Completed</div>
              </div>
              <div className="otp-stat-item">
                <div className="otp-stat-number">98%</div>
                <div className="otp-stat-label">Client Satisfaction</div>
              </div>
              <div className="otp-stat-item">
                <div className="otp-stat-number">16+</div>
                <div className="otp-stat-label">Team Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Projects */}
        <section className="otp-section otp-projects-section">
          <div className="otp-container">
            <div className="otp-section-header">
              <h2 className="otp-section-title">Team Projects</h2>
              <p className="otp-section-subtitle">Recent work showcasing our expertise</p>
            </div>
            
            <div className="otp-projects-grid">
              {teamProjects.map((project) => (
                <div key={project.id} className="otp-project-card">
                  <div className="otp-project-header">
                    <div className="otp-project-icon" style={{ color: project.color }}>
                      {project.icon}
                    </div>
                    <h3 className="otp-project-title">{project.title}</h3>
                  </div>
                  <p className="otp-project-description">{project.description}</p>
                  
                  <div className="otp-project-tech">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="otp-tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="otp-project-progress">
                    <div className="otp-progress-info">
                      <span className="otp-progress-label">Completion</span>
                      <span className="otp-progress-percent">{project.progress}%</span>
                    </div>
                    <div className="otp-progress-bar">
                      <div 
                        className="otp-progress-fill"
                        style={{
                          width: `${project.progress}%`,
                          backgroundColor: project.color
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="otp-project-glow" style={{ backgroundColor: `${project.color}15` }}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members - Only 3 Cards */}
        <section className="otp-section otp-members-section">
          <div className="otp-container">
            <div className="otp-section-header">
              <h2 className="otp-section-title">Core Team Members</h2>
              <p className="otp-section-subtitle">Meet our leadership team</p>
            </div>
            
            <div className="otp-members-grid">
              {teamMembers.map((member) => (
                <div 
                  key={member.id} 
                  className="otp-member-card"
                  style={{
                    animationDelay: `${(member.id - 1) * 0.1}s`
                  }}
                >
                  <div className="otp-member-header">
                    <div 
                      className="otp-member-avatar"
                      style={{ backgroundColor: `${member.color}20`, borderColor: member.color }}
                    >
                      <span className="otp-avatar-text">{member.avatar}</span>
                    </div>
                    <div className="otp-member-info">
                      <h3 className="otp-member-name">{member.name}</h3>
                      <p className="otp-member-role">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="otp-member-stats">
                    <div className="otp-member-stat">
                      <span className="otp-stat-icon"><FontAwesomeIcon icon={faClock} /></span>
                      <span className="otp-stat-value">{member.experience}</span>
                    </div>
                    <div className="otp-member-stat">
                      <span className="otp-stat-icon"><FontAwesomeIcon icon={faFolderOpen} /></span>
                      <span className="otp-stat-value">{member.projects}</span>
                    </div>
                  </div>
                  
                  <p className="otp-member-quote">"{member.quote}"</p>
                  
                  <div className="otp-member-skills">
                    {member.skills.map((skill, index) => (
                      <span 
                        key={index} 
                        className="otp-skill-tag"
                        style={{ backgroundColor: `${member.color}15`, color: member.color }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Total Team Count */}
            <div className="otp-team-count-container">
              <div className="otp-team-count-card">
                <div className="otp-team-count-icon"><FontAwesomeIcon icon={faUsers} /></div>
                <div className="otp-team-count-content">
                  <div className="otp-team-count-number">{totalTeamMembers}+</div>
                  <div className="otp-team-count-label">Total Team Members</div>
                  <p className="otp-team-count-description">
                    Including designers, developers, strategists, and specialists working together to deliver exceptional results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Timeline */}
        <section className="otp-section otp-timeline-section">
          <div className="otp-container">
            <div className="otp-section-header">
              <h2 className="otp-section-title">Team Journey</h2>
              <p className="otp-section-subtitle">Our growth and achievements timeline</p>
            </div>
            
            <div className="otp-timeline-container">
              {/* Year Headers */}
              <div className="otp-year-headers">
                <div className="otp-year-header" style={{ '--year-color': '#FF6B6B' }}>
                  <h3 className="otp-hexco-text">2023</h3>
                  <span className="otp-year-label">Foundation</span>
                </div>
                <div className="otp-year-header" style={{ '--year-color': '#4ECDC4' }}>
                  <h3 className="otp-hexco-text">2024</h3>
                  <span className="otp-year-label">Growth</span>
                </div>
              </div>
              
              {/* Timeline Center Line */}
              <div className="otp-timeline-center-line">
                <div className="otp-timeline-line"></div>
                <div className="otp-timeline-progress"></div>
              </div>
              
              {/* Timeline Items */}
              <div className="otp-timeline-items">
                {teamTimeline.map((item, index) => (
                  <div 
                    key={index} 
                    className={`otp-timeline-card otp-timeline-${item.side}`}
                    style={{ 
                      '--item-color': item.color,
                      '--index': index
                    }}
                  >
                    {/* Mobile Compact Layout */}
                    <div className="otp-timeline-mobile-header">
                      <div className="otp-timeline-mobile-year" style={{ color: item.color }}>
                        {item.year}
                      </div>
                      <div className="otp-quarter-badge" style={{ backgroundColor: item.color }}>
                        {item.quarter}
                      </div>
                    </div>
                    
                    {/* Timeline Dot */}
                    <div className="otp-timeline-dot" style={{ backgroundColor: item.color }}>
                      <div className="otp-dot-inner"></div>
                    </div>
                    
                    {/* Content Card */}
                    <div className="otp-timeline-content">
                      <div className="otp-content-header">
                        <h3 className="otp-hexco-text otp-timeline-title">{item.title}</h3>
                        <p className="otp-timeline-description">{item.description}</p>
                      </div>
                      
                      {/* Team Members Involved */}
                      <div className="otp-timeline-team">
                        <h4 className="otp-team-heading">Key Focus</h4>
                        <div className="otp-team-list">
                          {item.members.map((member, i) => (
                            <div key={i} className="otp-team-member">
                              <div className="otp-team-dot" style={{ backgroundColor: item.color }}></div>
                              <span className="otp-team-name">{member}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Glow Effect */}
                      <div className="otp-content-glow" style={{ backgroundColor: `${item.color}15` }}></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Timeline Navigation */}
              <div className="otp-timeline-navigation">
                <div className="otp-navigation-dots">
                  {teamTimeline.map((_, index) => (
                    <div 
                      key={index} 
                      className="otp-navigation-dot"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="otp-section otp-reviews-section">
          <div className="otp-container">
            <div className="otp-section-header">
              <h2 className="otp-section-title">Client Testimonials</h2>
              <p className="otp-section-subtitle">What our clients say about our team</p>
            </div>
            
            <div className="otp-reviews-container">
              <div className="otp-reviews-content">
                {teamReviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className={`otp-review-card ${index === activeReview ? 'otp-active' : ''}`}
                  >
                    <div className="otp-review-header">
                      <div className="otp-review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />
                        ))}
                      </div>
                      <div className="otp-review-project">{review.project}</div>
                    </div>
                    
                    <p className="otp-review-text">"{review.review}"</p>
                    
                    <div className="otp-review-client">
                      <div className="otp-client-info">
                        <h4 className="otp-client-name">{review.client}</h4>
                        <p className="otp-client-role">{review.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="otp-reviews-controls">
                <button className="otp-review-btn otp-prev-btn" onClick={handlePrevReview}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="otp-review-dots">
                  {teamReviews.map((_, index) => (
                    <button
                      key={index}
                      className={`otp-review-dot ${index === activeReview ? 'otp-active' : ''}`}
                      onClick={() => setActiveReview(index)}
                    ></button>
                  ))}
                </div>
                <button className="otp-review-btn otp-next-btn" onClick={handleNextReview}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Modified for WhatsApp */}
        <section className="otp-section otp-contact-section">
          <div className="otp-container">
            <div className="otp-section-header">
              <h2 className="otp-section-title">Get In Touch</h2>
              <p className="otp-section-subtitle">Ready to start your project?</p>
            </div>
            
            <div className="otp-whatsapp-container">
              <div className="otp-whatsapp-info">
                <div className="otp-whatsapp-icon">
                  <span className="otp-whatsapp-logo"><FontAwesomeIcon icon={faComments} /></span>
                </div>
                <div className="otp-whatsapp-content">
                  <h3 className="otp-whatsapp-title">Chat with us on WhatsApp</h3>
                  <p className="otp-whatsapp-description">
                    Get instant responses, share files, and discuss your project directly with our team.
                  </p>
                  <div className="otp-whatsapp-details">
                    <div className="otp-whatsapp-item">
                      <span className="otp-whatsapp-label"><FontAwesomeIcon icon={faCalendar} /> Available:</span>
                      <span className="otp-whatsapp-value"> Mon - Fri, 9AM - 6PM</span>
                    </div>
                    <div className="otp-whatsapp-item">
                      <span className="otp-whatsapp-label"><FontAwesomeIcon icon={faBolt} /> Response Time:</span>
                      <span className="otp-whatsapp-value"> Within 15 minutes</span>
                    </div>
                    <div className="otp-whatsapp-item">
                      <span className="otp-whatsapp-label"><FontAwesomeIcon icon={faEnvelope} /> Alternative:</span>
                      <span className="otp-whatsapp-value"> engloray@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="otp-whatsapp-btn" onClick={handleWhatsAppClick}>
                <span className="otp-whatsapp-btn-icon"><FontAwesomeIcon icon={faPhone} /></span>
                <span className="otp-whatsapp-btn-text">Start Chat on WhatsApp</span>
                <span className="otp-whatsapp-btn-arrow"><FontAwesomeIcon icon={faChevronRight} /></span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <MainPageSubFooter/>
      <BackToTop/>
    </div>
  );
};

export default OurTeamPage;

// import React, { useState } from 'react';
// import './OurTeamPage.css';
// import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
// import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
// import BackToTop from '../../../Components/BackToTop/BackToTop';
// import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

// const OurTeamPage = () => {
//   const [activeReview, setActiveReview] = useState(0);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   // Team Projects
//   const teamProjects = [
//     {
//       id: 1,
//       title: "Ui/Ux Design for Makeover",
//       description: "User Friendly Navigation for booking Appointments",
//       tech: ["Ui/Ux", "Branding", "Designing"],
//       progress: 100,
//       color: "#FF6B6B",
//       icon: "🤖"
//     },
//     {
//       id: 2,
//       title: "Gym Life",
//       description: "Website To Showcase Gym Facilities And Programs",
//       tech: ["Next.js", "Node.js", "MongoDB", "Redis"],
//       progress: 100,
//       color: "#4ECDC4",
//       icon: "🛒"
//     },
//     {
//       id: 3,
//       title: "Mobile App For Jewellery",
//       description: "Mobile Based Digital System For customers",
//       tech: ["React Native", "Kotlin", "Swift", "Firebase"],
//       progress: 100,
//       color: "#45B7D1",
//       icon: "📱"
//     },
//     {
//       id: 4,
//       title: "Healthcare App for clinic",
//       description: "Patient Friendly mobile App for booking Appointments",
//       tech: ["Python", "PyTorch", "PostgreSQL", "Docker"],
//       progress: 100,
//       color: "#96CEB4",
//       icon: "🏥"
//     }
//   ];

//   // Team Members - Only 3 displayed with total count 16+
//   const teamMembers = [
//     {
//       id: 1,
//       name: "Gowtham",
//       role: "Founder & Creative Director",
//       experience: "2+ Years",
//       projects: "36+",
//       avatar: "G",
//       skills: ["Web Design", "Ui/Ux Design", "Branding", "Designing"],
//       color: "#FF6B6B",
//       quote: "Building intelligent solutions that transform businesses"
//     },
//     {
//       id: 2,
//       name: "Surya",
//       role: "Chief Operating Officer",
//       experience: "2+ Years",
//       projects: "20+",
//       avatar: "S",
//       skills: ["Team Management", "Coordination", "Ui/Ux", "Photoshop"],
//       color: "#4ECDC4",
//       quote: "Designing experiences that users love"
//     },
//     {
//       id: 3,
//       name: "Lilly",
//       role: "Marketing Specialist",
//       experience: "2+ Years",
//       projects: "27+",
//       avatar: "L",
//       skills: ["Leadership", "Digital marketing", "Analytics", "SEO"],
//       color: "#45B7D1",
//       quote: "Crafting scalable and efficient solutions"
//     }
//   ];

//   const totalTeamMembers = 16; // Total count of staff/members

//   // Team Timeline
//   const teamTimeline = [
//     {
//       year: 2023,
//       quarter: "Phase 1",
//       title: "The Beginning",
//       description: "ENGLORAY began as a creative design and branding studio, focused on helping local businesses and startups build their visual identity. ",
//       members: ["Logo Design", "Branding Systems", "Product & label Design"],
//       color: "#FF6B6B",
//       side: "left"
//     },
//     {
//       year: 2024,
//       quarter: "Phase 2",
//       title: "Growth & Digital Entry",
//       description: "As client requirements evolved, ENGLORAY expanded into website design and UI/UX, marking the transition into digital platforms. ",
//       members: ["Website Design", "Ui/Ux Design", "Branding for Digital platforms"],
//       color: "#4ECDC4",
//       side: "right"
//     },
//     {
//       year: 2024,
//       quarter: "Phase 3",
//       title: "Ecosystem Expansion",
//       description: "Launching Two Divisions : Tech Group & Learning Genration",
//       members: ["Tech Group: ","Corporate Wensites", "UI/Ux Driven Business platforms", "Branding + Digital Integrations",
//         "Learning Genration:", "Graphic Design Courses", "UI/Ux Training Programs", "Career Launching Paths"
//       ],
//       color: "#45B7D1",
//       side: "left"
//     },
//     {
//       year: 2025,
//       quarter: "Phase 4",
//       title: "Full Service Delivery",
//       description: "By 2025, ENGLORAY delivered end-to-end solutions covering branding, technology, and growth",
//       members: ["Mobile Applications", "Digital Promotions & Ads", "Software & System Solutions"],
//       color: "#96CEB4",
//       side: "right"
//     },
//     {
//       year: 2025,
//       quarter: "Phase 5",
//       title: "The Present",
//       description: "A Trusted Creative, Tech & Learning Partner. ",
//       members: ["ENGLORAY operates as", "ENGLORAY TECH GROUP:" ,"Business & Technology ",
//         "ENGLORAY LEARNING GENERATION:",  "Education & Skills "],
//       color: "#372d0aff",
//       side: "left"
//     },
//     {
//       year: 2026,
//       quarter: "Phase 6",
//       title: "The Future",
//       description: "ENGLORAY's future roadmap focuses on growth, innovation, and international expansion",
//       members: ["International Client Projects", "AI assisted Branding & designing Systems", "Global Learning Programs and certifications",
//         "Advanced Learning Programs", "Scalable Platforms & SaaS products"
//       ],
//       color: "#DDA0DD",
//       side: "right"
//     }
//   ];

//   // Team Reviews
//   const teamReviews = [
//     {
//       id: 1,
//       client: "Divya Makeover",
//       role: "Bridal Studio",
//       review: "UI/UX design made our website easy and pleasant for customers.",
//       rating: 5,
//       project: "Ui/Ux Design for Makeover"
//     },
//     {
//       id: 2,
//       client: "Gym Life",
//       role: "Fitness",
//       review: "The website clearly represents our gym and helped us get more inquiries.",
//       rating: 5,
//       project: "Gym Fitness Website"
//     },
//     {
//       id: 3,
//       client: "Pavizham Jewellers",
//       role: "Jewellery",
//       review: "The mobile app made our business operations much smoother.",
//       rating: 5,
//       project: "Mobile App for jewellery"
//     },
//     {
//       id: 4,
//       client: "Orthopedic Clinic",
//       role: "Medical",
//       review: "The app made booking appointments very easy for patients.",
//       rating: 5,
//       project: "HealthCare App for Clinic"
//     }
//   ];

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Message sent successfully! Our team will contact you shortly.');
//     setFormData({
//       name: '',
//       email: '',
//       subject: '',
//       message: ''
//     });
//   };

//   const handleNextReview = () => {
//     setActiveReview((prev) => (prev + 1) % teamReviews.length);
//   };

//   const handlePrevReview = () => {
//     setActiveReview((prev) => (prev - 1 + teamReviews.length) % teamReviews.length);
//   };

//   return (
//     <div className="otp-page">
//       <TopNavBar/>
//       <TwoLineNavbar/>
//       {/* Animated Header */}
//       <header className="otp-header">
//         <div className="otp-header-background">
//           <div className="otp-particle-container">
//             {[...Array(20)].map((_, i) => (
//               <div 
//                 key={i} 
//                 className="otp-particle"
//                 style={{
//                   left: `${Math.random() * 100}%`,
//                   animationDelay: `${i * 0.1}s`
//                 }}
//               ></div>
//             ))}
//           </div>
//           <div className="otp-header-content">
//             <h1 className="otp-title">
//               <span className="otp-title-text">Our Team</span>
//               <span className="otp-title-sub">Build Better Business</span>
//             </h1>
//             <p className="otp-header-description">
//               ENGLORAY is trusted by clients, valued by customers, empowering students, and supported by a strong team.
//             </p>
//             <div className="otp-scroll-indicator">
//               <span className="otp-scroll-text">Meet Our Team</span>
//               <div className="otp-scroll-arrow">↓</div>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="otp-main-content">
//         {/* Team Stats */}
//         <section className="otp-section otp-stats-section">
//           <div className="otp-container">
//             <div className="otp-stats-grid">
//               <div className="otp-stat-item">
//                 <div className="otp-stat-number">2+</div>
//                 <div className="otp-stat-label">Years Combined Experience</div>
//               </div>
//               <div className="otp-stat-item">
//                 <div className="otp-stat-number">285+</div>
//                 <div className="otp-stat-label">Projects Completed</div>
//               </div>
//               <div className="otp-stat-item">
//                 <div className="otp-stat-number">98%</div>
//                 <div className="otp-stat-label">Client Satisfaction</div>
//               </div>
//               <div className="otp-stat-item">
//                 <div className="otp-stat-number">16+</div>
//                 <div className="otp-stat-label">Team Members</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Projects */}
//         <section className="otp-section otp-projects-section">
//           <div className="otp-container">
//             <div className="otp-section-header">
//               <h2 className="otp-section-title">Team Projects</h2>
//               <p className="otp-section-subtitle">Recent work showcasing our expertise</p>
//             </div>
            
//             <div className="otp-projects-grid">
//               {teamProjects.map((project) => (
//                 <div key={project.id} className="otp-project-card">
//                   <div className="otp-project-header">
//                     <div className="otp-project-icon" style={{ color: project.color }}>
//                       {project.icon}
//                     </div>
//                     <h3 className="otp-project-title">{project.title}</h3>
//                   </div>
//                   <p className="otp-project-description">{project.description}</p>
                  
//                   <div className="otp-project-tech">
//                     {project.tech.map((tech, index) => (
//                       <span key={index} className="otp-tech-tag">{tech}</span>
//                     ))}
//                   </div>
                  
//                   <div className="otp-project-progress">
//                     <div className="otp-progress-info">
//                       <span className="otp-progress-label">Completion</span>
//                       <span className="otp-progress-percent">{project.progress}%</span>
//                     </div>
//                     <div className="otp-progress-bar">
//                       <div 
//                         className="otp-progress-fill"
//                         style={{
//                           width: `${project.progress}%`,
//                           backgroundColor: project.color
//                         }}
//                       ></div>
//                     </div>
//                   </div>
                  
//                   <div className="otp-project-glow" style={{ backgroundColor: `${project.color}15` }}></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Team Members - Only 3 Cards */}
//         <section className="otp-section otp-members-section">
//           <div className="otp-container">
//             <div className="otp-section-header">
//               <h2 className="otp-section-title">Core Team Members</h2>
//               <p className="otp-section-subtitle">Meet our leadership team</p>
//             </div>
            
//             <div className="otp-members-grid">
//               {teamMembers.map((member) => (
//                 <div 
//                   key={member.id} 
//                   className="otp-member-card"
//                   style={{
//                     animationDelay: `${(member.id - 1) * 0.1}s`
//                   }}
//                 >
//                   <div className="otp-member-header">
//                     <div 
//                       className="otp-member-avatar"
//                       style={{ backgroundColor: `${member.color}20`, borderColor: member.color }}
//                     >
//                       <span className="otp-avatar-text">{member.avatar}</span>
//                     </div>
//                     <div className="otp-member-info">
//                       <h3 className="otp-member-name">{member.name}</h3>
//                       <p className="otp-member-role">{member.role}</p>
//                     </div>
//                   </div>
                  
//                   <div className="otp-member-stats">
//                     <div className="otp-member-stat">
//                       <span className="otp-stat-icon">⏳</span>
//                       <span className="otp-stat-value">{member.experience}</span>
//                     </div>
//                     <div className="otp-member-stat">
//                       <span className="otp-stat-icon">📁</span>
//                       <span className="otp-stat-value">{member.projects}</span>
//                     </div>
//                   </div>
                  
//                   <p className="otp-member-quote">"{member.quote}"</p>
                  
//                   <div className="otp-member-skills">
//                     {member.skills.map((skill, index) => (
//                       <span 
//                         key={index} 
//                         className="otp-skill-tag"
//                         style={{ backgroundColor: `${member.color}15`, color: member.color }}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
                  
//                   <div className="otp-member-hover">
//                     {/* <span className="otp-hover-text">View Profile</span> */}
//                     {/* <span className="otp-hover-arrow">→</span> */}
//                   </div>
//                 </div>
//               ))}
//             </div>
            
//             {/* Total Team Count */}
//             <div className="otp-team-count-container">
//               <div className="otp-team-count-card">
//                 <div className="otp-team-count-icon">👥</div>
//                 <div className="otp-team-count-content">
//                   <div className="otp-team-count-number">{totalTeamMembers}+</div>
//                   <div className="otp-team-count-label">Total Team Members</div>
//                   <p className="otp-team-count-description">
//                     Including designers, developers, strategists, and specialists working together to deliver exceptional results
//                   </p>

//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Team Timeline */}
//         <section className="otp-section otp-timeline-section">
//           <div className="otp-container">
//             <div className="otp-section-header">
//               <h2 className="otp-section-title">Team Journey</h2>
//               <p className="otp-section-subtitle">Our growth and achievements timeline</p>
//             </div>
            
//             <div className="otp-timeline-container">
//               {/* Year Headers */}
//               <div className="otp-year-headers">
//                 <div className="otp-year-header" style={{ '--year-color': '#FF6B6B' }}>
//                   <h3 className="otp-hexco-text">2023</h3>
//                   <span className="otp-year-label">Foundation</span>
//                 </div>
//                 <div className="otp-year-header" style={{ '--year-color': '#4ECDC4' }}>
//                   <h3 className="otp-hexco-text">2024</h3>
//                   <span className="otp-year-label">Growth</span>
//                 </div>
//               </div>
              
//               {/* Timeline Center Line */}
//               <div className="otp-timeline-center-line">
//                 <div className="otp-timeline-line"></div>
//                 <div className="otp-timeline-progress"></div>
//               </div>
              
//               {/* Timeline Items */}
//               <div className="otp-timeline-items">
//                 {teamTimeline.map((item, index) => (
//                   <div 
//                     key={index} 
//                     className={`otp-timeline-card otp-timeline-${item.side}`}
//                     style={{ 
//                       '--item-color': item.color,
//                       '--index': index
//                     }}
//                   >
//                     {/* Year Indicator */}
//                     <div className="otp-timeline-year" style={{ color: item.color }}>
//                       {item.year}
//                     </div>
                    
//                     {/* Quarter Badge */}
//                     <div className="otp-quarter-container">
//                       <div className="otp-quarter-badge" style={{ backgroundColor: item.color }}>
//                         {item.quarter}
//                       </div>
//                       <div className="otp-connector-line" style={{ backgroundColor: item.color }}></div>
//                     </div>
                    
//                     {/* Content Card */}
//                     <div className="otp-timeline-content">
//                       <div className="otp-content-header">
//                         <h3 className="otp-hexco-text otp-timeline-title">{item.title}</h3>
//                         <p className="otp-timeline-description">{item.description}</p>
//                       </div>
                      
//                       {/* Team Members Involved */}
//                       <div className="otp-timeline-team">
//                         <h4 className="otp-team-heading">Key Focus</h4>
//                         <div className="otp-team-list">
//                           {item.members.map((member, i) => (
//                             <div key={i} className="otp-team-member">
//                               <div className="otp-team-dot" style={{ backgroundColor: item.color }}></div>
//                               <span className="otp-team-name">{member}</span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
                      
//                       {/* Glow Effect */}
//                       <div className="otp-content-glow" style={{ backgroundColor: `${item.color}15` }}></div>
//                     </div>
                    
//                     {/* Timeline Dot */}
//                     <div className="otp-timeline-dot" style={{ backgroundColor: item.color }}>
//                       <div className="otp-dot-inner"></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Timeline Navigation */}
//               <div className="otp-timeline-navigation">
//                 <div className="otp-navigation-dots">
//                   {teamTimeline.map((_, index) => (
//                     <div 
//                       key={index} 
//                       className="otp-navigation-dot"
//                       style={{ animationDelay: `${index * 0.2}s` }}
//                     ></div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Client Reviews */}
//         <section className="otp-section otp-reviews-section">
//           <div className="otp-container">
//             <div className="otp-section-header">
//               <h2 className="otp-section-title">Client Testimonials</h2>
//               <p className="otp-section-subtitle">What our clients say about our team</p>
//             </div>
            
//             <div className="otp-reviews-container">
//               <div className="otp-reviews-content">
//                 {teamReviews.map((review, index) => (
//                   <div 
//                     key={review.id} 
//                     className={`otp-review-card ${index === activeReview ? 'otp-active' : ''}`}
//                   >
//                     <div className="otp-review-header">
//                       <div className="otp-review-rating">
//                         {'★'.repeat(review.rating)}
//                       </div>
//                       <div className="otp-review-project">{review.project}</div>
//                     </div>
                    
//                     <p className="otp-review-text">"{review.review}"</p>
                    
//                     <div className="otp-review-client">
//                       <div className="otp-client-info">
//                         <h4 className="otp-client-name">{review.client}</h4>
//                         <p className="otp-client-role">{review.role}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
              
//               <div className="otp-reviews-controls">
//                 <button className="otp-review-btn otp-prev-btn" onClick={handlePrevReview}>
//                   ←
//                 </button>
//                 <div className="otp-review-dots">
//                   {teamReviews.map((_, index) => (
//                     <button
//                       key={index}
//                       className={`otp-review-dot ${index === activeReview ? 'otp-active' : ''}`}
//                       onClick={() => setActiveReview(index)}
//                     ></button>
//                   ))}
//                 </div>
//                 <button className="otp-review-btn otp-next-btn" onClick={handleNextReview}>
//                   →
//                 </button>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Contact Form */}
//         <section className="otp-section otp-contact-section">
//           <div className="otp-container">
//             <div className="otp-contact-grid">
//               <div className="otp-contact-info">
//                 <div className="otp-section-header">
//                   <h2 className="otp-section-title">Connect With Us</h2>
//                   <p className="otp-section-subtitle">Let's work together</p>
//                 </div>
                
//                 <div className="otp-contact-details">
//                   <div className="otp-contact-item">
//                     <div className="otp-contact-icon">📧</div>
//                     <div>
//                       <h4 className="otp-contact-label">Email</h4>
//                       <p className="otp-contact-value"> engloray@gmail.com</p>
//                     </div>
//                   </div>
                  
//                   <div className="otp-contact-item">
//                     <div className="otp-contact-icon">📱</div>
//                     <div>
//                       <h4 className="otp-contact-label">Phone</h4>
//                       <p className="otp-contact-value">+91 63681759909 , +91 6369945920</p>
//                     </div>
//                   </div>
                  
//                   <div className="otp-contact-item">
//                     <div className="otp-contact-icon">📍</div>
//                     <div>
//                       <h4 className="otp-contact-label">Location</h4>
//                       <p className="otp-contact-value">Madurai, TamilNadu, INDIA</p>
//                     </div>
//                   </div>
                  
//                   <div className="otp-contact-item">
//                     <div className="otp-contact-icon">🕒</div>
//                     <div>
//                       <h4 className="otp-contact-label">Working Hours</h4>
//                       <p className="otp-contact-value">Mon - Fri: 9AM - 6PM PST</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="otp-contact-form">
//                 <div className="otp-form-header">
//                   <h3 className="otp-form-title">Send us a message</h3>
//                   <p className="otp-form-subtitle">Our team will respond within 24 hours</p>
//                 </div>
                
//                 <form onSubmit={handleSubmit} className="otp-form">
//                   <div className="otp-form-group">
//                     <label className="otp-form-label">Your Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       className="otp-form-input"
//                       placeholder="Enter your name"
//                       required
//                     />
//                   </div>
                  
//                   <div className="otp-form-group">
//                     <label className="otp-form-label">Email Address</label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       className="otp-form-input"
//                       placeholder="Enter your email"
//                       required
//                     />
//                   </div>
                  
//                   <div className="otp-form-group">
//                     <label className="otp-form-label">Subject</label>
//                     <input
//                       type="text"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleInputChange}
//                       className="otp-form-input"
//                       placeholder="What is this regarding?"
//                       required
//                     />
//                   </div>
                  
//                   <div className="otp-form-group">
//                     <label className="otp-form-label">Message</label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       className="otp-form-textarea"
//                       placeholder="Tell us about your project..."
//                       rows="4"
//                       required
//                     ></textarea>
//                   </div>
                  
//                   <button type="submit" className="otp-submit-btn">
//                     <span className="otp-btn-text">Send Message</span>
//                     <span className="otp-btn-arrow">→</span>
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//       <MainPageSubFooter/>
//       <BackToTop/>
//     </div>
//   );
// };

// export default OurTeamPage;