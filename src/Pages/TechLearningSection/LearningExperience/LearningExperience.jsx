import React, { useState } from 'react';
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
  faNetworkWired,
  faMagicWandSparkles
} from '@fortawesome/free-solid-svg-icons';
import './LearningExperience.css';

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
  faNetworkWired,
  faMagicWandSparkles
);

const LearningExperience = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const navigate = useNavigate();

  const handleApplyNow = () => {
    window.scrollTo(0, 0);
    navigate('/allCoursesPage');
  };

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

        {/* ================= NEW STEP LAYOUT SECTION ================= */}
        <div className="learning-wrapper">

          {/* LEFT SIDE */}
          <div className="learning-left">
            <div className="learning-badge-wrapper">
              <span className="red-dot"></span>
              <span className="badge-text">Programs we Offer</span>
            </div>

            <h2 className="learning-main-heading">
              Discover our simple three step process for professional growth
            </h2>

            <div className="cta-mini-card">
              <h3 className="cta-mini-title">Ready to Start Your Journey?</h3>
              <p className="cta-mini-text">
                Personalized guidance and expert support every step of the way.
              </p>
              <button className="cta-mini-btn" onClick={handleApplyNow}>
                <span className="btn-text">Join the Program</span>
                <FontAwesomeIcon icon={faMagicWandSparkles} className="btn-sparkle" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - STEPS */}
          <div className="learning-right">

            <div className="step-item" onClick={navigateToProjects}>
              <div className="step-icon-box yellow">
                <span className="icon-inner-dot"></span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Project-Based Learning</h4>
                <p className="step-description">
                  Work on real Englergy Tech Group projects from day one. Build practical skills through hands-on experience with actual client work.
                </p>
              </div>
            </div>

            <div className="step-item" onClick={navigateToMentorship}>
              <div className="step-icon-box blue">
                <span className="icon-inner-dot"></span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Expert Mentorship</h4>
                <p className="step-description">
                  Get guidance from industry experts throughout your journey. Receive personalized feedback and career advice from professionals.
                </p>
              </div>
            </div>

            <div className="step-item" onClick={handleApplyNow}>
              <div className="step-icon-box orange">
                <span className="icon-inner-dot"></span>
              </div>
              <div className="step-content">
                <h4 className="step-title">Career Acceleration</h4>
                <p className="step-description">
                  Accelerate your path to top tech companies with our dedicated placement assistance and industry-recognized certification.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= IMPACT SECTION (UNCHANGED) ================= */}
        <div className="impact-section">

          <div className="impact-header">
            <h3 className="impact-title">Our Impact in Numbers</h3>
            <p className="impact-subtitle">
              Join thousands of successful learners who transformed their careers
            </p>
          </div>

          <div className="impact-layout-custom">

            <div className="impact-left">
              <div className="card card-1">
                <div className="impact-big-number">1.3K+</div>
                <div className="impact-big-label">Active Learners</div>
              </div>

              <div className="left-bottom">
                <div className="left-stack">
                  <div className="card card-2">
                    <div className="impact-small-number">100%</div>
                    <div className="impact-small-label">Success Rate</div>
                  </div>

                  <div className="card card-3">
                    <div className="impact-small-number">200+</div>
                    <div className="impact-small-label">Projects Done</div>
                  </div>
                </div>

                <div className="card card-4">
                  <div className="impact-big-number">20+</div>
                  <div className="impact-big-label">Expert Mentors</div>
                </div>
              </div>
            </div>

            <div className="impact-right">
              <div className="card card-5">
                <div className="impact-big-number">100+</div>
                <div className="impact-big-label">Companies</div>
              </div>

              <div className="right-stack">
                <div className="card card-6">
                  <div className="impact-small-number">4.9</div>
                  <div className="impact-small-label">Rating</div>
                </div>

                <div className="card card-7">
                  <div className="impact-small-number">24/7</div>
                  <div className="impact-small-label">Support</div>
                </div>
              </div>

              <div className="card card-8">
                <div className="impact-big-number">10+</div>
                <div className="impact-big-label">Global Partners</div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= CTA (UNCHANGED) ================= */}
        <div className="cta-section">
          <div className="cta-content">
            <h3 className="cta-title">Ready to Transform Your Career?</h3>
            <p className="cta-description">
              Join our professional learning program and gain the skills,
              experience, and mentorship needed to succeed in today's tech industry.
            </p>
            <button className="cta-button-fullwidth" onClick={handleApplyNow}>
              <FontAwesomeIcon icon={faRocket} />
              Apply Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningExperience;