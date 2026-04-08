import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './TechCta.css';

const TechCta = () => {
    const navigate = useNavigate();

    const handleApplyNow = () => {
        window.scrollTo(0, 0);
        navigate('/allCoursesPage');
    };

    return (
        <section 
            className="tech-cta-fullbleed" 
            style={{ fontFamily: "'Poppins', sans-serif" }}
        >
            <div className="cta-bg-circle circle-1"></div>
            <div className="cta-bg-circle circle-2"></div>
            <div className="cta-bg-circle circle-3"></div>
            
            <div className="cta-content">
                <h2 className="cta-title" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Ready to <span className="cta-title-bold">Transform</span> Your Career?
                </h2>
                <p className="cta-description" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Join our professional learning program and gain the skills, experience,
                    and mentorship needed to succeed in today's competitive tech industry.
                </p>
                <div className="cta-button-container">
                    <button 
                        className="le-cta-btn-primary" 
                        onClick={handleApplyNow}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        Apply Now
                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                    </button>
                    <button 
                        className="le-cta-btn-secondary" 
                        onClick={() => navigate('/allCoursesPage')}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                        View Courses
                        <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '10px' }} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TechCta;
