import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
    faDatabase,
    faFaceSmile,
    faGraduationCap,
    faCode
} from '@fortawesome/free-solid-svg-icons';
import './About.css';
// import aboutVideo from '../../assets/OurCoreValuebg.mp4';
import aboutVideo from '../../assets/anthem.mp4';
import anthemThumbnail from '../../assets/anthemThumbnail.png';

gsap.registerPlugin(ScrollTrigger);


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
    const navigate = useNavigate();
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

    // 4. MODIFIED: Cinematic Entrance Animations
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const elements = [
                ".stats-stack-card",
                ".card-video-precise",
                ".hero-heading-inline",
                ".hero-description-p",
                ".inline-action-group",
                ".inline-icon-stack",
                ".visual-hero-card",
                ".stat-card-new"
            ];

            gsap.fromTo(elements, 
                { 
                    y: 100, 
                    opacity: 0 
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    stagger: 0.15,
                    scrollTrigger: {
                        trigger: ".about-main-card",
                        start: "top 85%",
                        toggleActions: "restart none none restart"
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

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
                                                <span className="stat-desc">global<br />clients</span>
                                            </div>
                                        </div>
                                        <div className="stat-success-badge">
                                            <span className="success-num">99%</span>
                                            <span className="success-lbl">success<br />rate</span>
                                        </div>
                                        {/* <div className="stat-projects-badge">
                                            <span className="projects-num">150+</span>
                                            <span className="projects-lbl">projects<br />completed</span>
                                        </div> */}
                                    </div>
                                    <div className="bottom-stat-row-new">
                                        <div className="black-circles-pill">
                                            <div className="icon-circle icon-solid">
                                                <FontAwesomeIcon icon={faDesktop} />
                                            </div>
                                            <div className="icon-circle icon-border">
                                                <FontAwesomeIcon icon={faGear} />
                                            </div>
                                        </div>
                                        <div className="stat-info-center">
                                            <p className="company-quote-small">
                                                Building the future of digital ecosystems through innovation and excellence.
                                            </p>
                                        </div>
                                        <div className="stat-action-btn">
                                            <FontAwesomeIcon icon={faChartLine} />
                                        </div>
                                    </div>
                                </div>

                                <div className="card-video-precise" onClick={(e) => handleAction(e, () => setIsVideoOpen(true))}>
                                    <div className="cv-left-side">
                                        <div className="cv-time-pill">
                                            <FontAwesomeIcon icon={faClock} /> <span>4m 36s</span>
                                        </div>
                                        <div className="cv-text-box">
                                            <h4>Watch Anthem</h4>
                                            <p>Watch Engloray's Insights</p>
                                        </div>
                                    </div>
                                    <div className="cv-right-side">
                                        <div className="cv-preview-full" style={{ backgroundImage: `url(${anthemThumbnail})` }}>
                                            <div className="cv-play-icon">
                                                <FontAwesomeIcon icon={faPlay} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-hero-precise-section">
                                <h1 className="hero-heading-inline">
                                    About Our Successful Achievements
                                    <div className="inline-action-group">
                                        <button className="pill-learn-btn" onClick={(e) => handleAction(e, () => navigate('/ourStoryPage'))}>Learn More</button>
                                        <div className="arrow-circle-btn" onClick={(e) => handleAction(e, () => navigate('/ourStoryPage'))}>
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </div>
                                    </div>
                                    <span className="inline-icon-stack">
                                        <div className="stack-icon icon-bio" key="tech-icon-1"><FontAwesomeIcon icon={faDesktop} /></div>
                                        <div className="stack-icon icon-galaxy" key="edu-icon"><FontAwesomeIcon icon={faGraduationCap} /></div>
                                        <div className="stack-icon icon-flask" key="tech-icon-2"><FontAwesomeIcon icon={faCode} /></div>
                                    </span>
                                </h1>
                                <p className="hero-description-p">
                                    ENGLORAY is a leading digital transformation partner, dedicated to empowering businesses through cutting-edge technology and creative excellence. Since our inception in 2023, we have evolved from a specialized branding studio into a comprehensive ecosystem of innovation, offering bespoke solutions in ERP systems, AI-driven marketing, and high-performance web development. Our mission is to bridge the gap between complex technical requirements and seamless user experiences, ensuring our clients achieve sustainable growth in an ever-evolving digital landscape.
                                </p>

                            </div>
                        </div>

                        <div className="grid-right-side">
                            <div className="visual-hero-card" style={{ backgroundImage: `url(${anthemThumbnail})` }}>
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
                    <div className="about-stats-grid-footer">
                        <div className="stat-card-new">
                            <div className="stat-card-icon"><FontAwesomeIcon icon={faChartLine} /></div>
                            <div className="stat-card-info">
                                <span className="stat-card-num">500+</span>
                                <span className="stat-card-lbl">Projects Completed</span>
                            </div>
                        </div>
                        <div className="stat-card-new highlight-card">
                            <div className="stat-card-icon"><FontAwesomeIcon icon={faFaceSmile} /></div>
                            <div className="stat-card-info">
                                <span className="stat-card-num">150+</span>
                                <span className="stat-card-lbl">Happy Brands</span>
                            </div>
                        </div>
                        <div className="stat-card-new">
                            <div className="stat-card-icon"><FontAwesomeIcon icon={faFlask} /></div>
                            <div className="stat-card-info">
                                <span className="stat-card-num">12+</span>
                                <span className="stat-card-lbl">Tech Solutions</span>
                            </div>
                        </div>
                        <div className="stat-card-new">
                            <div className="stat-card-icon"><FontAwesomeIcon icon={faArrowTrendUp} /></div>
                            <div className="stat-card-info">
                                <span className="stat-card-num">99%</span>
                                <span className="stat-card-lbl">Client Satisfaction</span>
                            </div>
                        </div>
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
