import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import {
  faPhoneAlt,
  faEnvelope,
  faDesktop,
  faGraduationCap,
  faBriefcase,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './NewFooter.css';
import logo from '../../../assets/Logo.png'; // Assuming standard logo location

const NewFooter = () => {
    const navigate = useNavigate();

    const handleWhatsAppClick = (num) => {
        const url = `https://wa.me/${num}?text=Hello! I was browsing your website and would like to connect.`;
        window.open(url, '_blank');
    };

    return (
        <footer className="newFooterOuter">
            <div className="newFooterContainer">
                <div className="newFooterGrid">
                    
                    {/* Brand Column */}
                    <div className="newFooterBrandCol">
                        <div className="newFooterLogo">
                            <img src={logo} alt="Engloray Logo" className="newFooterLogoImg" />
                            <span className="newFooterBrandName">ENGLORAY</span>
                        </div>
                        <p className="newFooterBrandDesc">
                            Empowering your vision with cutting-edge technology and creative mastery. 
                            Your strategic global partner for digital excellence and innovation.
                        </p>
                        <div className="newFooterSocials">
                            <a href="https://www.facebook.com/profile.php?id=61583616114977" target="_blank" rel="noopener noreferrer" className="newFooterSocialLink"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="https://x.com/engloraytech" target="_blank" rel="noopener noreferrer" className="newFooterSocialLink"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="https://www.instagram.com/engloray/" target="_blank" rel="noopener noreferrer" className="newFooterSocialLink"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/in/engloray-group-7534b6391/" target="_blank" rel="noopener noreferrer" className="newFooterSocialLink"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div className="newFooterLinksCol">
                        <div className="newFooterColHeader">
                            <FontAwesomeIcon icon={faDesktop} className="newFooterHeaderIcon" />
                            <h4 className="newFooterColTitle">SERVICES</h4>
                        </div>
                        <ul className="newFooterLinkList">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/brandingIdentityPage'); }}>Branding</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/softwareDevelopmentPage'); }}>Development</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/digitalMarketingServicePage'); }}>Digital Marketing</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/uiuxDesignPage'); }}>UI/UX Design</a></li>
                        </ul>
                    </div>

                    {/* Education Column */}
                    <div className="newFooterLinksCol">
                        <div className="newFooterColHeader">
                            <FontAwesomeIcon icon={faGraduationCap} className="newFooterHeaderIcon" />
                            <h4 className="newFooterColTitle">EDUCATION</h4>
                        </div>
                        <ul className="newFooterLinkList">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/allProgramsPage'); }}>All Programs</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/workshopsPage'); }}>Workshops</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/corporateTraining'); }}>Corporate Training</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/allCoursesPage'); }}>E-learning</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="newFooterLinksCol">
                        <div className="newFooterColHeader">
                            <FontAwesomeIcon icon={faBriefcase} className="newFooterHeaderIcon" />
                            <h4 className="newFooterColTitle">COMPANY</h4>
                        </div>
                        <ul className="newFooterLinkList">
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/ourStoryPage'); }}>About Us</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/worksClientProjectsPage'); }}>Works</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/CareersPage'); }}>Careers</a></li>
                            <li><a href="#" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="newFooterContactCol">
                        <div className="newFooterColHeader">
                            <FontAwesomeIcon icon={faEnvelope} className="newFooterHeaderIcon" />
                            <h4 className="newFooterColTitle">CONTACT INFO</h4>
                        </div>
                        <div className="newFooterContactItem">
                            <span className="newFooterContactIcon"><FontAwesomeIcon icon={faEnvelope} /></span>
                            <span className="newFooterContactText">engloraytechgroup@gmail.com</span>
                        </div>
                        <div className="newFooterContactItem" onClick={() => handleWhatsAppClick('6381759909')} style={{cursor: 'pointer'}}>
                            <span className="newFooterContactIcon"><FontAwesomeIcon icon={faPhoneAlt} /></span>
                            <span className="newFooterContactText">+91 6381759909</span>
                        </div>
                        <div className="newFooterContactItem" onClick={() => handleWhatsAppClick('6366945920')} style={{cursor: 'pointer'}}>
                            <span className="newFooterContactIcon"><FontAwesomeIcon icon={faPhoneAlt} /></span>
                            <span className="newFooterContactText">+91 6366945920</span>
                        </div>
                        <div className="newFooterContactItem">
                            <span className="newFooterContactIcon"><FontAwesomeIcon icon={faGlobe} /></span>
                            <span className="newFooterContactText">Madurai, TamilNadu, INDIA</span>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="newFooterBottom">
                    <div className="newFooterCopyright">
                        © {new Date().getFullYear()} ENGLORAY. All rights reserved.
                    </div>
                    <div className="newFooterLegal">
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/privacyPolicyPage'); }}>Privacy Policy</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/termsAndServicesPage'); }}>Terms of Use</a>
                        <a href="#" onClick={(e) => { e.preventDefault(); navigate('/cookiesPolicyPage'); }}>Cookie Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};



export default NewFooter;
