import React from 'react';
import './TechLearningHighlights.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faHandshake, faArrowUpRightFromSquare, faLaptopCode, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';

const TechLearningHighlights = () => {
    return (
        <section className="tl-highlights-section">
            <div className="tlh-peoplr-bottom-grid">

                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Real-World <br />Practice</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Develop your abilities with hands-on projects designed to simulate actual industry scenarios and workplace challenges.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faLaptopCode} style={{ marginRight: '6px' }} /> Live Projects</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faLaptopCode} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#6a4ae0' }}><FontAwesomeIcon icon={faGraduationCap} /></div>
                        </div>
                    </div>
                </div>

                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Guided <br />Mentorship</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Gain insights from experienced industry professionals who provide personalized support and feedback throughout your journey.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faUsers} style={{ marginRight: '6px' }} /> Expert Mentors</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faUsers} /></div>
                        </div>
                    </div>
                </div>

                <div className="tlh-bottom-card">
                    <div className="tlh-bcard-header">
                        <h3>Experience <br />First</h3>
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="tlh-card-arrow" />
                    </div>
                    <p>Equip yourself with the practical skills, strong portfolio, and confidence needed to secure top-tier tech opportunities.</p>
                    <div className="tlh-card-footer">
                        <span className="tlh-footer-pill lime-footer"><FontAwesomeIcon icon={faTrophy} style={{ marginRight: '6px' }} /> 90% Placement</span>
                        <div className="tlh-icon-badges" style={{ marginLeft: 'auto' }}>
                            <div className="tlh-edu-badge" style={{ background: '#3b2c85' }}><FontAwesomeIcon icon={faTrophy} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#6a4ae0' }}><FontAwesomeIcon icon={faHandshake} /></div>
                            <div className="tlh-edu-badge" style={{ background: '#8b6ff0' }}><FontAwesomeIcon icon={faUsers} /></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechLearningHighlights;
