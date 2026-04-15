import React, { useState } from 'react';
import EnrollementForm from '../EnrollementForm/EnrollementForm';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { motion } from 'framer-motion';

import {
  faUsers,
  faChartLine,
  faBriefcase,
  faUserTie,
  faBuilding,
  faStar,
  faHeadset,
  faClock,
  faTimes,
  faProjectDiagram,
  faUserFriends,
  faBullseye,
  faHandshake,
  faLightbulb,
  faGraduationCap,
  faNetworkWired,
  faRocket,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import './LearningExperience.css';
// import OurImpacts from '../OurImpacts/OurImpacts';

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
  faNetworkWired,
  faArrowRight
);

const LearningExperience = () => {
  const [showEnrollmentForm, setShowEnrollmentForm] = useState(false);
  const navigate = useNavigate();





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
   
// ... inside your component return

<section className="learning-section" id='programs'>
  <div className="learning-container">

    {/* Header Section */}
    <div className="learning-header">
      <motion.span 
        className="learning-program-badge" 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
        style={{ backgroundColor: '#EFF6FF', color: '#10639a', border: 'none', borderRadius: '100px', padding: '6px 16px', fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', display: 'inline-block' }}
      >
        <FontAwesomeIcon icon={faGraduationCap} className="badge-icon" style={{ marginRight: '8px' }} />
        Programs we Offer
      </motion.span>

      <motion.h2 
        className="learning-title" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.1 }}
        style={{ fontFamily: "'Outfit', sans-serif", fontSize: '45px', fontWeight: '800', color: '#1A1A1A', marginTop: '15px' }}
      >
        Professional Learning Program
      </motion.h2>

      <motion.p 
        className="learning-subtitle" 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ color: '#64748B', fontSize: '23px', fontWeight: '400', maxWidth: '600px', margin: '0 auto' }}
      >
        Transform your career through hands-on experience and expert mentorship
      </motion.p>
    </div>

    {/* Main Content Grid */}
    <div className="main-content-grid">

      {/* Left Section - Project Based Learning */}
      <motion.div
        className="content-section project-section"
        onClick={navigateToProjects}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ height: '220px', background: 'linear-gradient(180deg, #FFF1F1 0%, rgba(255, 241, 241, 0) 100%)', width: '100%', position: 'absolute', top: 0, left: 0 }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px', marginTop: '10px', position: 'relative', zIndex: 3 }}>
          <div className="section-icon" style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '4px solid white', color: '#EF4444', fontSize: '32px' }}>
            <FontAwesomeIcon icon={faProjectDiagram} />
          </div>
          <h3 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Project-Based Learning</h3>
        </div>

        <div className="section-body" style={{ padding: '0 5px' }}>
          <p className="section-description" style={{ color: '#64748B', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
            Work on real Engloray Tech Group projects from day one. Build practical skills through hands-on experience by collaborating with professional developers.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
            {["Real-world projects", "Hands-on experience", "Client collaboration", "Portfolio building"].map((tag, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (i * 0.1) }}
                style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.button 
            className="section-cta-link" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '18px 36px', borderRadius: '14px', fontWeight: '700', fontSize: '18px', border: 'none', width: '100%', cursor: 'pointer' }}
          >
            Explore Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '12px' }} />
          </motion.button>
        </div>
      </motion.div>

      {/* Right Section - Mentor Support */}
      <motion.div
        className="content-section mentor-section"
        onClick={navigateToMentorship}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ height: '220px', background: 'linear-gradient(180deg, #E0F2FF 0%, rgba(224, 242, 255, 0) 100%)', width: '100%', position: 'absolute', top: 0, left: 0 }}></div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px', marginTop: '10px', position: 'relative', zIndex: 3 }}>
          <div className="section-icon" style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '4px solid white', color: '#3B82F6', fontSize: '32px' }}>
            <FontAwesomeIcon icon={faUserFriends} />
          </div>
          <h3 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Mentor Support</h3>
        </div>

        <div className="section-body" style={{ padding: '0 5px' }}>
          <p className="section-description" style={{ color: '#64748B', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
            Get guidance from industry experts throughout your journey. Get personalized feedback and career roadmap planning to accelerate your growth.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
            {["1:1 Expert Mentorship", "Career Guidance", "Industry Insights", "Network Building"].map((tag, i) => (
              <motion.span 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (i * 0.1) }}
                style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}
              >
                {tag}
              </motion.span>
            ))}
          </div>

          <motion.button 
            className="section-cta-link" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '18px 36px', borderRadius: '14px', fontWeight: '700', fontSize: '18px', border: 'none', width: '100%', cursor: 'pointer' }}
          >
            Explore Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '12px' }} />
          </motion.button>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default LearningExperience;