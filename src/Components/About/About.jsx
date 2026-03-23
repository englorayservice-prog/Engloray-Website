import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
    faPlay,
    faArrowUpRightFromSquare,
    faClock,
    faChevronRight,
    faPalette,
    faDesktop,
    faMobileScreenButton,
    faGear,
    faChartLine,
    faTimes,
    faBezierCurve,
    faFlask,
    faDna,
    faCircleNodes,
    faCapsules,
    faBacteria,
    faDatabase
} from '@fortawesome/free-solid-svg-icons';
import './About.css';
//import aboutVideo from '../../../assets/engloray VIdeo.mp4';
import aboutVideo from 'D:/Project-Engloray/Engloray-Website-main/src/assets/engloray VIdeo.mp4';


// 1. MODIFIED: Custom Hook for LocalStorage Persistence
function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value) => {
        try {
            const valueToStore = value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue];
}

const About = () => {
    // 2. MODIFIED: Using Persistent State for UI Interactions
    const [isVideoOpen, setIsVideoOpen] = useLocalStorage('engloray_video_modal', false);

    // Stable data for Bento Grid Tags (Grouped as in image)
    const pillGroups = [
        [
            { id: 'tag-xna', icon: faDna, text: 'Business Development' },
            { id: 'tag-crispr', icon: faCircleNodes, text: 'Marketing' },
        ],
        [
            { id: 'tag-synbio', icon: faCapsules, text: 'Brand Design' },
            { id: 'tag-microbiome', icon: faBacteria, text: 'Web Devlopment' },
        ],
        [
            { id: 'tag-bioinfo', icon: faDatabase, text: 'Branding' }
        ]
    ];

    // 3. MODIFIED: Handler to prevent accidental refreshes
    const handleAction = (e, callback) => {
        if (e) e.preventDefault();
        if (callback) callback();
    };

    return (
        <section id="engloray-about-section-precise" className="engloray-about-wrapper">
            <div className="about-outer-container">
                <div className="about-main-card">
                    {/* 2. MAIN BENTO GRID */}
                    <div className="about-content-grid">
                        <div className="grid-left-side">
                            <div className="bento-top-row">
                                <div className="stats-stack-card">
                                    <div className="black-stat-card">
                                        <div className="stat-inner">
                                            <div className="stat-icon-wrap">
                                                <FontAwesomeIcon icon={faArrowTrendUp} />
                                            </div>
                                            <div className="stat-data">
                                                <span className="stat-val">320+</span>
                                                <span className="stat-desc">bio-assets<br />analyzed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-stat-row-new">
                                        <div className="black-circles-pill">
                                            <div className="c-solid"></div>
                                            <div className="c-border"></div>
                                        </div>
                                        <div className="stat-info-center">
                                            <span className="info-num">12+</span>
                                            <span className="info-lbl">biotech solutions<br />available</span>
                                        </div>
                                        <div className="stat-action-btn" onClick={(e) => handleAction(e)}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-video-precise" onClick={(e) => handleAction(e, () => setIsVideoOpen(true))}>
                                    <div className="cv-left-side">
                                        <div className="cv-time-pill">
                                            <FontAwesomeIcon icon={faClock} /> <span>4m 36s</span>
                                        </div>
                                        <div className="cv-text-box">
                                            <h4>Watch Video</h4>
                                            <p>Watch Engloray's Insights</p>
                                        </div>
                                    </div>
                                    <div className="cv-right-side">
                                        <div className="cv-preview-full">
                                            <div className="cv-play-icon">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-hero-precise-section">
                                <h1 className="hero-heading-inline">
                                    About Our<br />
                                    Succesfull
                                    <span className="inline-action-group">
                                        <button className="pill-learn-btn" onClick={(e) => handleAction(e, () => window.location.href = '#services')}>Learn More</button>
                                        <div className="arrow-circle-btn" onClick={(e) => handleAction(e)}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </span>
                                    <br />
                                    Achievements <span className="inline-icon-stack">
                                        <div className="stack-icon icon-bio" key="bio-icon"><FontAwesomeIcon icon={faBezierCurve} /></div>
                                        <div className="stack-icon icon-galaxy" key="galaxy-icon"></div>
                                        <div className="stack-icon icon-flask" key="flask-icon"><FontAwesomeIcon icon={faFlask} /></div>
                                    </span>
                                </h1>
                                <p className="hero-description-p">
                                    ENGLORAY began in 2023 as a creative studio dedicated to building visual identities through expert branding and packaging design. We soon evolved into a digital experience partner, expanding our expertise into high-impact website design and UI/UX solutions. By 2024, we launched specialized divisions—ENGLORAY Tech Group for business solution
                                </p>
                            </div>
                        </div>

                        <div className="grid-right-side">
                            <div className="visual-hero-card">
                                <div className="visual-pagination-dots">
                                    <span></span>
                                    <span className="active"></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <div className="visual-glass-footer">
                                    <div className="glass-content-left">
                                        <h3 className="join-text">Join Our<br />Platform</h3>
                                        <div className="glass-divider"></div>
                                        <p className="learn-text">& Learn<br />How To<br />Start</p>
                                    </div>
                                    <div className="glass-toggle-group" onClick={(e) => handleAction(e)}>
                                        <div className="toggle-circle-white"></div>
                                        <div className="toggle-circle-black">
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. MODIFIED: Footer Tags Grouped as Groups of Two */}
                    <div className="about-pills-row">
                        {pillGroups.map((group, groupIdx) => (
                            <div key={`group-${groupIdx}`} className="pill-group">
                                {group.map((tag) => (
                                    <div key={tag.id} className="pill-tag">
                                        <FontAwesomeIcon icon={tag.icon} /> {tag.text}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isVideoOpen && (
                <div className="about-modal-overlay" onClick={() => setIsVideoOpen(false)}>
                    <div className="about-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-about-modal" onClick={(e) => handleAction(e, () => setIsVideoOpen(false))}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <div className="about-video-placeholder">
                            <video
                                src={aboutVideo}
                                controls
                                autoPlay
                                style={{ width: '100%', borderRadius: '24px' }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default About;
