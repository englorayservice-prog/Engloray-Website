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
    <section className="learning-section" id='programs'>
      <div className="learning-container">

        {/* Header Section */}
        <div className="learning-header">
          <span className="learning-program-badge" style={{ backgroundColor: '#EFF6FF', color: '#10639a', border: 'none', borderRadius: '100px', padding: '6px 16px', fontWeight: '800', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            <FontAwesomeIcon icon={faGraduationCap} className="badge-icon" style={{ marginRight: '8px' }} />
            Programs we Offer
          </span>
          <h2 className="learning-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '45px', fontWeight: '800', color: '#1A1A1A', marginTop: '15px' }}>Professional Learning Program</h2>
          <p className="learning-subtitle" style={{ color: '#64748B', fontSize: '23px', fontWeight: '400', maxWidth: '600px', margin: '0 auto' }}>
            Transform your career through hands-on experience and expert mentorship
          </p>
        </div>

        {/* Main Content - Two Equal Sections */}
        <div className="main-content-grid">

          {/* Left Section - Project Based Learning */}
          <div
            className="content-section project-section"
            onClick={navigateToProjects}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            {/* Top Bar Decoration - Red Fade */}
            <div style={{ height: '220px', background: 'linear-gradient(180deg, #FFF1F1 0%, rgba(255, 241, 241, 0) 100%)', width: '100%', position: 'absolute', top: 0, left: 0 }}>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px', marginTop: '10px', position: 'relative', zIndex: 3 }}>
              <div className="section-icon" style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '4px solid white', color: '#EF4444', fontSize: '32px' }}>
                <FontAwesomeIcon icon={faProjectDiagram} />
              </div>
              <h3 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Project-Based Learning</h3>
            </div>

            <div className="section-body" style={{ padding: '0 5px' }}>
              <p className="section-description" style={{ color: '#64748B', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
                Work on real Engloray Tech Group projects from day one. Build practical skills
                through hands-on experience by collaborating with professional developers on
                production-grade software solutions in a fast-paced environment.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Real-world projects</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Hands-on experience</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Client collaboration</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Portfolio building</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Tech Stack Mastery</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Agile Workflow</span>
              </div>

              <button className="section-cta-link" style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '18px 36px', borderRadius: '14px', fontWeight: '700', fontSize: '18px', border: 'none', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                Explore Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '12px' }} />
              </button>
            </div>
          </div>

          {/* Right Section - Mentor Support */}
          <div
            className="content-section mentor-section"
            onClick={navigateToMentorship}
            style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
          >
            {/* Top Bar Decoration - Blue Fade */}
            <div style={{ height: '220px', background: 'linear-gradient(180deg, #E0F2FF 0%, rgba(224, 242, 255, 0) 100%)', width: '100%', position: 'absolute', top: 0, left: 0 }}>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '25px', marginBottom: '30px', marginTop: '10px', position: 'relative', zIndex: 3 }}>
              <div className="section-icon" style={{ width: '84px', height: '84px', borderRadius: '50%', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(0,0,0,0.15)', border: '4px solid white', color: '#3B82F6', fontSize: '32px' }}>
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h3 className="section-title" style={{ fontFamily: "'Outfit', sans-serif", fontSize: '32px', fontWeight: '800', color: '#1A1A1A', margin: 0 }}>Mentor Support</h3>
            </div>

            <div className="section-body" style={{ padding: '0 5px' }}>
              <p className="section-description" style={{ color: '#64748B', fontSize: '18px', lineHeight: '1.6', marginBottom: '32px' }}>
                Get guidance from industry experts throughout your journey. Get
                personalized feedback, career roadmap planning, and technical deep-dives to
                accelerate your professional growth and career confidence.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>1:1 Expert Mentorship</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Career Guidance</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Industry Insights</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Network Building</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Mock Interviews</span>
                <span style={{ backgroundColor: '#F3F4F6', color: '#374151', padding: '12px 24px', borderRadius: '12px', fontSize: '16px', fontWeight: '600' }}>Soft Skills</span>
              </div>

              <button className="section-cta-link" style={{ backgroundColor: '#1A1A1A', color: 'white', padding: '18px 36px', borderRadius: '14px', fontWeight: '700', fontSize: '18px', border: 'none', width: '100%', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                Explore Now <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '12px' }} />
              </button>
            </div>
          </div>

        </div>

        {/* VK-Style Impact Section */}
        {/* <OurImpacts /> */}


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