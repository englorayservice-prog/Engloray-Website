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
    window.scrollTo(0, 0);
    navigate('/allCoursesPage');
  };

  const handleCloseEnrollment = () => {
    setShowEnrollmentForm(false);
  };

  // Navigation handlers
  const navigateToProjects = () => {
    window.scrollTo(0, 0);
    navigate('/projectBasedLearningPage');
  };

  const navigateToMentorship = () => {
    window.scrollTo(0, 0);
    navigate('/mentorshipLearningPage');
  };

  return (
    <section className="learning-section" id='programs'>
      <div className="learning-container">

        {/* Header Section */}
        <div className="learning-header">
          <span className="learning-program-badge">
            <FontAwesomeIcon icon={faGraduationCap} className="badge-icon" />
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
            <div className="section-decoration"></div>
            <div className="section-icon">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </div>
            <div className="section-body">
              <h3 className="section-title">Project-Based Learning</h3>
              <p className="section-description">
                Work on real Engloray Tech Group projects from day one. Build practical skills
                through hands-on experience with actual client work.
              </p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon icon={faBullseye} className="feature-icon" />
                  Real-world projects from day one
                </li>
                <li>
                  <FontAwesomeIcon icon={faHandshake} className="feature-icon" />
                  Hands-on technical experience
                </li>
                <li>
                  <FontAwesomeIcon icon={faNetworkWired} className="feature-icon" />
                  Client collaboration opportunities
                </li>
                <li>
                  <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
                  Portfolio building
                </li>
              </ul>
              <button className="section-cta-link">
                Learn More <FontAwesomeIcon icon={faRocket} style={{ marginLeft: '8px' }} />
              </button>
            </div>
          </div>

          {/* Right Section - Mentor Support */}
          <div
            className="content-section mentor-section"
            onClick={navigateToMentorship}
            style={{ cursor: 'pointer' }}
          >
            <div className="section-decoration"></div>
            <div className="section-icon">
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <div className="section-body">
              <h3 className="section-title">Mentor Support</h3>
              <p className="section-description">
                Get guidance from industry experts throughout your journey. Get
                personalized feedback and career advice from professionals.
              </p>
              <ul className="feature-list">
                <li>
                  <FontAwesomeIcon icon={faUserTie} className="feature-icon" />
                  1:1 expert mentorship
                </li>
                <li>
                  <FontAwesomeIcon icon={faChartLine} className="feature-icon" />
                  Personalized career guidance
                </li>
                <li>
                  <FontAwesomeIcon icon={faLightbulb} className="feature-icon" />
                  Industry insights
                </li>
                <li>
                  <FontAwesomeIcon icon={faNetworkWired} className="feature-icon" />
                  Professional network building
                </li>
              </ul>
              <button className="section-cta-link">
                Learn More <FontAwesomeIcon icon={faRocket} style={{ marginLeft: '8px' }} />
              </button>
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
              <div key={index} className="impact-card">
                <div className="impact-icon">
                  <FontAwesomeIcon icon={stat.icon} />
                </div>
                <div className="impact-content">
                  <div className="impact-number">{stat.number}</div>
                  <div className="impact-label">{stat.label}</div>
                </div>
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
                <FontAwesomeIcon icon={faRocket} />
                Apply Now
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Enrollment Form Dialog */}
      {showEnrollmentForm && (
        <div className="learning-enrollment-dialog">
          <div className="learning-dialog-overlay" onClick={handleCloseEnrollment}></div>
          <div className="learning-dialog-content">
            <button className="learning-dialog-close" onClick={handleCloseEnrollment}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <EnrollementForm onClose={handleCloseEnrollment} />
          </div>
        </div>
      )}
    </section>
  );
};

export default LearningExperience;