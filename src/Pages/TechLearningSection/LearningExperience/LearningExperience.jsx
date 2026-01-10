// import React, { useEffect, useState } from 'react';
// import EnrollementForm from '../EnrollementForm/EnrollementForm';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { 
//   faUsers, 
//   faChartLine, 
//   faBriefcase, 
//   faUserTie,
//   faBuilding,
//   faStar,
//   faHeadset,
//   faClock,
//   faRocket,
//   faTimes,
//   faProjectDiagram,
//   faUserFriends,
//   faBullseye, // Changed from faTarget to faBullseye
//   faHandshake,
//   faLightbulb,
//   faGraduationCap,
//   faNetworkWired
// } from '@fortawesome/free-solid-svg-icons';
// import './LearningExperience.css';

// // Add icons to the library
// library.add(
//   faUsers, 
//   faChartLine, 
//   faBriefcase, 
//   faUserTie,
//   faBuilding,
//   faStar,
//   faHeadset,
//   faClock,
//   faRocket,
//   faTimes,
//   faProjectDiagram,
//   faUserFriends,
//   faBullseye, // Changed from faTarget to faBullseye
//   faHandshake,
//   faLightbulb,
//   faGraduationCap,
//   faNetworkWired
// );

// const LearningExperience = () => {
//   const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
//   const navigate = useNavigate();

//   const impactStats = [
//     { 
//       number: "1.3K+", 
//       label: "Active Learners", 
//       icon: faUsers,
//       color: "#60a5fa"
//     },
//     { 
//       number: "100%", 
//       label: "Success Rate", 
//       icon: faChartLine,
//       color: "#10b981"
//     },
//     { 
//       number: "500+", 
//       label: "Projects Done", 
//       icon: faBriefcase,
//       color: "#f59e0b"
//     },
//     { 
//       number: "20+", 
//       label: "Expert Mentors", 
//       icon: faUserTie,
//       color: "#8b5cf6"
//     },
//     { 
//       number: "100+", 
//       label: "Companies", 
//       icon: faBuilding,
//       color: "#ef4444"
//     },
//     { 
//       number: "4.9", 
//       label: "Rating", 
//       icon: faStar,
//       color: "#f97316"
//     },
//     { 
//       number: "24/7", 
//       label: "Support", 
//       icon: faHeadset,
//       color: "#06b6d4"
//     },
//     { 
//       number: "3hr/day", 
//       label: "Learning Hours", 
//       icon: faClock,
//       color: "#ec4899"
//     }
//   ];

//   const handleApplyNow = () => {
//     setShowEnrollmentForm(true);
//   };

//   const handleCloseEnrollment = () => {
//     setShowEnrollmentForm(false);
//   };

//   // Navigation handlers
//   const navigateToProjects = () => {
//     window.scrollTo(0,0);
//     navigate('/projectBasedLearningPage');
//   };

//   const navigateToMentorship = () => {
//     window.scrollTo(0,0);
//     navigate('/mentorshipLearningPage');
//   };

//   return (
//     <section className="learning-section" id='programs'>
//       <div className="learning-container">
        
//         {/* Header Section */}
//         <div className="learning-header">
//           <span className="learning-program-badge">
//             <FontAwesomeIcon 
//               icon={faGraduationCap}
//               style={{ 
//                 color: '#ffffff',
//                 fontSize: '0.8rem',
//                 marginRight: '8px'
//               }}
//             />
//             Programs we Offer
//           </span>
//           <h2 className="learning-title">Professional Learning Program</h2>
//           <p className="learning-subtitle">
//             Transform your career through hands-on experience and expert mentorship
//           </p>
//         </div>

//         {/* Main Content - Two Equal Sections */}
//         <div className="main-content-grid">
          
//           {/* Left Section - Project Based Learning */}
//           <div 
//             className="content-section project-section" 
//             onClick={navigateToProjects}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="section-icon">
//               <FontAwesomeIcon 
//                 icon={faProjectDiagram}
//                 style={{ 
//                   color: '#ffffff',
//                   fontSize: '2.5rem'
//                 }}
//               />
//             </div>
//             <h3 className="section-title">Project-Based Learning</h3>
//             <div className="section-content">
//               <p className="section-description">
//                 Work on real Englergy Tech Group projects from day one. Build practical skills 
//                 through hands-on experience with actual client work.
//               </p>
//               <ul className="feature-list">
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faBullseye} // Changed from faTarget to faBullseye
//                     style={{ 
//                       color: '#f87171',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Real-world projects from day one
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faHandshake}
//                     style={{ 
//                       color: '#f87171',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Hands-on technical experience
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faNetworkWired}
//                     style={{ 
//                       color: '#f87171',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Client collaboration opportunities
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faLightbulb}
//                     style={{ 
//                       color: '#f87171',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Portfolio building
//                 </li>
//               </ul>
//             </div>
//           </div>

//           {/* Right Section - Mentor Support */}
//           <div 
//             className="content-section mentor-section" 
//             onClick={navigateToMentorship}
//             style={{ cursor: 'pointer' }}
//           >
//             <div className="section-icon">
//               <FontAwesomeIcon 
//                 icon={faUserFriends}
//                 style={{ 
//                   color: '#ffffff',
//                   fontSize: '2.5rem'
//                 }}
//               />
//             </div>
//             <h3 className="section-title">Mentor Support</h3>
//             <div className="section-content">
//               <p className="section-description">
//                 Get guidance from industry experts throughout your journey. Get 
//                 personalized feedback and career advice from professionals.
//               </p>
//               <ul className="feature-list">
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faUserTie}
//                     style={{ 
//                       color: '#60a5fa',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   1:1 expert mentorship
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faChartLine}
//                     style={{ 
//                       color: '#60a5fa',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Personalized career guidance
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faLightbulb}
//                     style={{ 
//                       color: '#60a5fa',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Industry insights
//                 </li>
//                 <li>
//                   <FontAwesomeIcon 
//                     icon={faNetworkWired}
//                     style={{ 
//                       color: '#60a5fa',
//                       fontSize: '0.9rem',
//                       marginRight: '10px'
//                     }}
//                   />
//                   Professional network building
//                 </li>
//               </ul>
//             </div>
//           </div>

//         </div>

//         {/* New Animated Impact Section */}
//         <div className="impact-section">
//           <div className="impact-header">
//             <h3 className="impact-title">Our Impact in Numbers</h3>
//             <p className="impact-subtitle">Join thousands of successful learners who transformed their careers</p>
//           </div>
          
//           <div className="impact-grid">
//             {impactStats.map((stat, index) => (
//               <div 
//                 key={index} 
//                 className="impact-card"
//                 style={{ '--accent-color': stat.color }}
//               >
//                 <div className="impact-icon">
//                   <FontAwesomeIcon 
//                     icon={stat.icon}
//                     style={{ 
//                       color: stat.color,
//                       fontSize: '3rem'
//                     }}
//                   />
//                 </div>
//                 <div className="impact-content">
//                   <div className="impact-number">{stat.number}</div>
//                   <div className="impact-label">{stat.label}</div>
//                 </div>
//                 <div className="impact-wave"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section">
//           <div className="cta-content">
//             <h3 className="cta-title">Ready to Transform Your Career?</h3>
//             <p className="cta-description">
//               Join our professional learning program and gain the skills, experience, 
//               and mentorship needed to succeed in today's competitive tech industry.
//             </p>
//             <div className="cta-button-container">
//               <button className="cta-button-fullwidth" onClick={handleApplyNow}>
//                 <FontAwesomeIcon 
//                   icon={faRocket}
//                   style={{ 
//                     color: '#1e40af',
//                     fontSize: '1.2rem'
//                   }}
//                 />
//                 Apply Now
//               </button>
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* Enrollment Form Dialog */}
//       {showEnrollmentForm && (
//         <div className="learning-enrollment-dialog">
//           <div className="learning-dialog-overlay" onClick={handleCloseEnrollment}></div>
//           <div className="learning-dialog-content">
//             <button className="learning-dialog-close" onClick={handleCloseEnrollment}>
//               <FontAwesomeIcon 
//                 icon={faTimes}
//                 style={{ 
//                   color: '#ffffff',
//                   fontSize: '1.2rem'
//                 }}
//               />
//             </button>
//             {/* <EnrollementForm onClose={handleCloseEnrollment} /> */}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default LearningExperience;

import React, { useEffect, useState } from 'react';
import EnrollementForm from '../EnrollementForm/EnrollementForm';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faUsers, 
  faChartLine, 
  faBriefcase, 
  faUserTie,
  faBuilding,
  faStar,
  faHeadset,
  faClock,
  faRocket,
  faTimes,
  faProjectDiagram,
  faUserFriends,
  faBullseye,
  faHandshake,
  faLightbulb,
  faGraduationCap,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';
import './LearningExperience.css';

// Add icons to the library
library.add(
  faUsers, 
  faChartLine, 
  faBriefcase, 
  faUserTie,
  faBuilding,
  faStar,
  faHeadset,
  faClock,
  faRocket,
  faTimes,
  faProjectDiagram,
  faUserFriends,
  faBullseye,
  faHandshake,
  faLightbulb,
  faGraduationCap,
  faNetworkWired
);

const LearningExperience = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const navigate = useNavigate();

  const impactStats = [
    { 
      number: "1.3K+", 
      label: "Active Learners", 
      icon: faUsers,
      color: "#60a5fa"
    },
    { 
      number: "100%", 
      label: "Success Rate", 
      icon: faChartLine,
      color: "#10b981"
    },
    { 
      number: "500+", 
      label: "Projects Done", 
      icon: faBriefcase,
      color: "#f59e0b"
    },
    { 
      number: "20+", 
      label: "Expert Mentors", 
      icon: faUserTie,
      color: "#8b5cf6"
    },
    { 
      number: "100+", 
      label: "Companies", 
      icon: faBuilding,
      color: "#ef4444"
    },
    { 
      number: "4.9", 
      label: "Rating", 
      icon: faStar,
      color: "#f97316"
    },
    { 
      number: "24/7", 
      label: "Support", 
      icon: faHeadset,
      color: "#06b6d4"
    },
    { 
      number: "3hr/day", 
      label: "Learning Hours", 
      icon: faClock,
      color: "#ec4899"
    }
  ];

  const handleApplyNow = () => {
    // Navigate to courses page instead of opening form
    window.scrollTo(0,0);
    navigate('/allCoursesPage');
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentForm(false);
  };

  // Navigation handlers
  const navigateToProjects = () => {
    window.scrollTo(0,0);
    navigate('/projectBasedLearningPage');
  };

  const navigateToMentorship = () => {
    window.scrollTo(0,0);
    navigate('/mentorshipLearningPage');
  };

  return (
    <section className="learning-section" id='programs'>
      <div className="learning-container">
        
        {/* Header Section */}
        <div className="learning-header">
          <span className="learning-program-badge">
            <FontAwesomeIcon 
              icon={faGraduationCap}
              style={{ 
                color: '#ffffff',
                fontSize: '0.8rem',
                marginRight: '8px'
              }}
            />
            Programs we Offer
          </span>
          <h2 className="learning-title">Professional Learning Program</h2>
          <p className="learning-subtitle">
            Transform your career through hands-on experience and expert mentorship
          </p>
        </div>

        {/* Main Content - Two Equal Sections */}
        <div className="main-content-grid">
          
          {/* Left Section - Project Based Learning */}
          <div 
            className="content-section project-section" 
            onClick={navigateToProjects}
            style={{ cursor: 'pointer' }}
          >
            <div className="section-icon">
              <FontAwesomeIcon 
                icon={faProjectDiagram}
                style={{ 
                  color: '#ffffff',
                  fontSize: '2.5rem'
                }}
              />
            </div>
            <h3 className="section-title">Project-Based Learning</h3>
            <div className="section-content">
              <p className="section-description">
                Work on real Englergy Tech Group projects from day one. Build practical skills 
                through hands-on experience with actual client work.
              </p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon 
                    icon={faBullseye}
                    style={{ 
                      color: '#f87171',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Real-world projects from day one
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faHandshake}
                    style={{ 
                      color: '#f87171',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Hands-on technical experience
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faNetworkWired}
                    style={{ 
                      color: '#f87171',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Client collaboration opportunities
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faLightbulb}
                    style={{ 
                      color: '#f87171',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Portfolio building
                </li>
              </ul>
            </div>
          </div>

          {/* Right Section - Mentor Support */}
          <div 
            className="content-section mentor-section" 
            onClick={navigateToMentorship}
            style={{ cursor: 'pointer' }}
          >
            <div className="section-icon">
              <FontAwesomeIcon 
                icon={faUserFriends}
                style={{ 
                  color: '#ffffff',
                  fontSize: '2.5rem'
                }}
              />
            </div>
            <h3 className="section-title">Mentor Support</h3>
            <div className="section-content">
              <p className="section-description">
                Get guidance from industry experts throughout your journey. Get 
                personalized feedback and career advice from professionals.
              </p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon 
                    icon={faUserTie}
                    style={{ 
                      color: '#60a5fa',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  1:1 expert mentorship
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faChartLine}
                    style={{ 
                      color: '#60a5fa',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Personalized career guidance
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faLightbulb}
                    style={{ 
                      color: '#60a5fa',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Industry insights
                </li>
                <li>
                  <FontAwesomeIcon 
                    icon={faNetworkWired}
                    style={{ 
                      color: '#60a5fa',
                      fontSize: '0.9rem',
                      marginRight: '10px'
                    }}
                  />
                  Professional network building
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* New Animated Impact Section */}
        <div className="impact-section">
          <div className="impact-header">
            <h3 className="impact-title">Our Impact in Numbers</h3>
            <p className="impact-subtitle">Join thousands of successful learners who transformed their careers</p>
          </div>
          
          <div className="impact-grid">
            {impactStats.map((stat, index) => (
              <div 
                key={index} 
                className="impact-card"
                style={{ '--accent-color': stat.color }}
              >
                <div className="impact-icon">
                  <FontAwesomeIcon 
                    icon={stat.icon}
                    style={{ 
                      color: stat.color,
                      fontSize: '3rem'
                    }}
                  />
                </div>
                <div className="impact-content">
                  <div className="impact-number">{stat.number}</div>
                  <div className="impact-label">{stat.label}</div>
                </div>
                <div className="impact-wave"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Career?</h3>
            <p className="cta-description">
              Join our professional learning program and gain the skills, experience, 
              and mentorship needed to succeed in today's competitive tech industry.
            </p>
            <div className="cta-button-container">
              <button className="cta-button-fullwidth" onClick={handleApplyNow}>
                <FontAwesomeIcon 
                  icon={faRocket}
                  style={{ 
                    color: '#1e40af',
                    fontSize: '1.2rem'
                  }}
                />
                Apply Now
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Enrollment Form Dialog - REMOVED since we're navigating to courses page */}
    </section>
  );
};

export default LearningExperience;