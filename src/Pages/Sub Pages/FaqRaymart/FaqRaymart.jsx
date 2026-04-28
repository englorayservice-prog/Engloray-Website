import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import NavigationBar from '../../../Pages/TechLearningSection/NavigationBar/NavigationBar';
import brandingData from './raymart_branding_data.json';
import Logo from '../../../../src/assets/18.png'; // Using the logo from assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot, faArrowRight, faComments, faChevronLeft, faChevronRight, faHeart, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import './FaqRaymart.css';
import emilycarter from '../../../assets/images/emilybg.jpg.jpeg';
import michaelchen from '../../../assets/images/michaelchen.jpg.jpeg';
import sarahjenkins from '../../../assets/images/sarahjenkins.jpg.jpeg';
import RayMartNavbar from '../../../Components/RayMartNavbar/RayMartNavbar';

import brandOne from '../../../assets/WEBSITE_IMAGES/Branding & Identity/1.png';
import brandTwo from '../../../assets/WEBSITE_IMAGES/Branding & Identity/2.png';
import brandThree from '../../../assets/WEBSITE_IMAGES/Branding & Identity/3.png';
import brandFour from '../../../assets/WEBSITE_IMAGES/Branding & Identity/4.png';
import brandFive from '../../../assets/WEBSITE_IMAGES/Branding & Identity/5.png';
import brandSix from '../../../assets/WEBSITE_IMAGES/Branding & Identity/6.png';
import brandSeven from '../../../assets/WEBSITE_IMAGES/Branding & Identity/7.png';
import brandEight from '../../../assets/WEBSITE_IMAGES/Branding & Identity/8.png';

import websiteOne from '../../../assets/WEBSITE_IMAGES/website/1.png';
import websiteTwo from '../../../assets/WEBSITE_IMAGES/website/2.png';
import webstieThree from '../../../assets/WEBSITE_IMAGES/website/3.png';
import websiteFour from '../../../assets/WEBSITE_IMAGES/website/4.png';
import websiteFive from '../../../assets/WEBSITE_IMAGES/website/5.png';
import websiteSix from '../../../assets/WEBSITE_IMAGES/website/6.png';
import websiteSeven from '../../../assets/WEBSITE_IMAGES/website/7.png';
import websiteEight from '../../../assets/WEBSITE_IMAGES/website/8.png';


import devlopOne from '../../../assets/WEBSITE_IMAGES/development/1.png';
import devlopTwo from '../../../assets/WEBSITE_IMAGES/development/2.png';
import devlopThree from '../../../assets/WEBSITE_IMAGES/development/3.png';
import devlopFour from '../../../assets/WEBSITE_IMAGES/development/4.png';
import devlopFive from '../../../assets/WEBSITE_IMAGES/development/5.png';
import devlopSix from '../../../assets/WEBSITE_IMAGES/development/6.png';
import devlopSeven from '../../../assets/WEBSITE_IMAGES/development/7.png';
import devlopEight from '../../../assets/WEBSITE_IMAGES/development/8.png';

import ecomOne from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/1.png';
import ecomTwo from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/2.png';
import ecomThree from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/3.png';
import ecomFour from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/4.png';
import ecomFive from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/5.png';
import ecomSix from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/6.png';
import ecomSeven from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/7.png';


import appOne from '../../../assets/WEBSITE_IMAGES/service 5, app development/1.png';
import appTwo from '../../../assets/WEBSITE_IMAGES/service 5, app development/2.png';
import appThree from '../../../assets/WEBSITE_IMAGES/service 5, app development/3.png';
import appFour from '../../../assets/WEBSITE_IMAGES/service 5, app development/4.png';
import appFive from '../../../assets/WEBSITE_IMAGES/service 5, app development/5.png';


import graphicOne from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/1.png';
import graphicTwo from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/2.png';
import graphicThree from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/3.png';
import graphicFour from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/4.png';
import graphicFive from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/5.png';
import graphicSix from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/6.png';
import graphicSeven from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/7.png';
import graphicEight from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/8.png';


import uiOne from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/1.png';
import uiTwo from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/2.png';
import uiThree from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/3.png';
import uiFour from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/4.png';
import uiFive from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/5.png';


import softOne from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/1.png';
import softTwo from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/2.png';
import softThree from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/3.png';
import softFour from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/4.png';
import softFive from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/5.png';
import softSix from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/6.png';


import dataOne from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/1.png';
import dataTwo from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/2.png';
import dataThree from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/3.png';
import dataFour from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/4.png';
import dataFive from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/5.png';
import dataSix from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/6.png';
import dataSeven from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/7.png';
import dataEight from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/8.png';


import aiOne from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/1.png';
import aiTwo from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/2.png';
import aiThree from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/3.png';
import aiFour from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/4.png';
import aiFive from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/5.png';
import aiSix from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/6.png';
import aiSeven from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/7.png';


import crmOne from '../../../assets/WEBSITE_IMAGES/crm sevices/1.png';
import crmTwo from '../../../assets/WEBSITE_IMAGES/crm sevices/2.png';
import crmThree from '../../../assets/WEBSITE_IMAGES/crm sevices/3.png';
import crmFour from '../../../assets/WEBSITE_IMAGES/crm sevices/4.png';
import crmFive from '../../../assets/WEBSITE_IMAGES/crm sevices/5.png';
import crmSix from '../../../assets/WEBSITE_IMAGES/crm sevices/6.png';


import saasOne from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/1.png';
import saasTwo from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/2.png';
import saasThree from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/3.png';
import saasFour from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/4.png';
import saasFive from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/5.png';
import saasSix from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/6.png';

import devOne from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/1.png';
import devTwo from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/2.png';
import devThree from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/3.png';
import devFour from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/4.png';
import devFive from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/5.png';
import devSix from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/6.png';
import devSeven from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/7.png';
import devEight from '../../../assets/WEBSITE_IMAGES/service 2,DEVELOPMENT SERVICES/8.png';

import webOne from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/CORPORATE WEBSITE.png';
import webTwo from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/landing page image 1.png';
import webThree from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/landing page images.png';
import webFour from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/online store development.png';
import webFive from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/PORTFOLIO.png';
import webSix from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/portpolio website.png';
import webSeven from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/web development.png';
import webEight from '../../../assets/WEBSITE_IMAGES/service 3_WEBSITE_DEVELOPMENT/website for business.png';

import chatOne from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/1.png';
import chatTwo from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/2.png';
import chatThree from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/3.png';
import chatFour from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/4.png';
import chatFive from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/5.png';
import chatSix from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/6.png';
import chatSeven from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/7.png';

import bizAiOne from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/1.png';
import bizAiTwo from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/2.png';
import bizAiThree from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/3.png';
import bizAiFour from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/4.png';
import bizAiFive from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/5.png';
import bizAiSix from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/6.png';

import erpOne from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/1.png';
import erpTwo from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/2.png';
import erpThree from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/3.png';
import erpFour from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/4.png';
import erpFive from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/5.png';
import erpSix from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/6.png';
import erpSeven from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/7.png';

import jobOne from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/1.png';
import jobTwo from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/2.png';
import jobThree from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/3.png';
import jobFour from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/4.png';
import jobFive from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/5.png';
import jobSix from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/6.png';
import jobSeven from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/7.png';

import learnOne from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/1.png';
import learnTwo from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/2.png';
import learnThree from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/3.png';
import learnFour from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/4.png';
import learnFive from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/5.png';
import learnSix from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/graphic design courses.png';


const FaqRaymart = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [openIndex, setOpenIndex] = useState(0);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
    const [isFading, setIsFading] = useState(false);

    // Get ID from navigation state, default to the first one
    const activeId = location.state?.id || "global-identity-suite";
    const pageData = brandingData.find(item => item.id === activeId) || brandingData[0];

    // Avatar mapping for local imports
    const avatarMap = {
        "Emily Carter": emilycarter,
        "Michael Chen": michaelchen,
        "Sarah Jenkins": sarahjenkins
    };

    const mainImageMap = {
        "EcomOne": ecomOne, "EcomTwo": ecomTwo, "EcomThree": ecomThree, "EcomFour": ecomFour, "EcomFive": ecomFive, "EcomSix": ecomSix, "EcomSeven": ecomSeven,
        "AppOne": appOne, "AppTwo": appTwo, "AppThree": appThree, "AppFour": appFour, "AppFive": appFive,
        "GraphicOne": graphicOne, "GraphicTwo": graphicTwo, "GraphicThree": graphicThree, "GraphicFour": graphicFour, "GraphicFive": graphicFive, "GraphicSix": graphicSix, "GraphicSeven": graphicSeven, "GraphicEight": graphicEight,
        "UiOne": uiOne, "UiTwo": uiTwo, "UiThree": uiThree, "UiFour": uiFour, "UiFive": uiFive,
        "SoftOne": softOne, "SoftTwo": softTwo, "SoftThree": softThree, "SoftFour": softFour, "SoftFive": softFive, "SoftSix": softSix,
        "DataOne": dataOne, "DataTwo": dataTwo, "DataThree": dataThree, "DataFour": dataFour, "DataFive": dataFive, "DataSix": dataSix, "DataSeven": dataSeven, "DataEight": dataEight,
        "AiOne": aiOne, "AiTwo": aiTwo, "AiThree": aiThree, "AiFour": aiFour, "AiFive": aiFive, "AiSix": aiSix, "AiSeven": aiSeven,
        "CrmOne": crmOne, "CrmTwo": crmTwo, "CrmThree": crmThree, "CrmFour": crmFour, "CrmFive": crmFive, "CrmSix": crmSix,
        "SaasOne": saasOne, "SaasTwo": saasTwo, "SaasThree": saasThree, "SaasFour": saasFour, "SaasFive": saasFive, "SaasSix": saasSix,
        "DevOne": devOne, "DevTwo": devTwo, "DevThree": devThree, "DevFour": devFour, "DevFive": devFive, "DevSix": devSix, "DevSeven": devSeven, "DevEight": devEight,
        "WebOne": webOne, "WebTwo": webTwo, "WebThree": webThree, "WebFour": webFour, "WebFive": webFive, "WebSix": webSix, "WebSeven": webSeven, "WebEight": webEight,
        "ChatOne": chatOne, "ChatTwo": chatTwo, "ChatThree": chatThree, "ChatFour": chatFour, "ChatFive": chatFive, "ChatSix": chatSix, "ChatSeven": chatSeven,
        "BizAiOne": bizAiOne, "BizAiTwo": bizAiTwo, "BizAiThree": bizAiThree, "BizAiFour": bizAiFour, "BizAiFive": bizAiFive, "BizAiSix": bizAiSix,
        "ErpOne": erpOne, "ErpTwo": erpTwo, "ErpThree": erpThree, "ErpFour": erpFour, "ErpFive": erpFive, "ErpSix": erpSix, "ErpSeven": erpSeven,
        "JobOne": jobOne, "JobTwo": jobTwo, "JobThree": jobThree, "JobFour": jobFour, "JobFive": jobFive, "JobSix": jobSix, "JobSeven": jobSeven,
        "LearnOne": learnOne, "LearnTwo": learnTwo, "LearnThree": learnThree, "LearnFour": learnFour, "LearnFive": learnFive, "LearnSix": learnSix,
        "BrandOne": brandOne, "BrandTwo": brandTwo, "BrandThree": brandThree, "BrandFour": brandFour, "BrandFive": brandFive, "BrandSix": brandSix, "BrandSeven": brandSeven, "BrandEight": brandEight,
        "WebsiteOne": websiteOne, "WebsiteTwo": websiteTwo, "WebsiteThree": webstieThree, "WebsiteFour": websiteFour, "WebsiteFive": websiteFive, "WebsiteSix": websiteSix, "WebsiteSeven": websiteSeven, "WebsiteEight": websiteEight,
        "DevlopOne": devlopOne, "DevlopTwo": devlopTwo, "DevlopThree": devlopThree, "DevlopFour": devlopFour, "DevlopFive": devlopFive, "DevlopSix": devlopSix, "DevlopSeven": devlopSeven, "DevlopEight": devlopEight
    };

    // Image swapping state
    const [heroImage, setHeroImage] = useState(pageData.mainImage);
    const [thumbImages, setThumbImages] = useState(pageData.thumbnails);

    useEffect(() => {
        setHeroImage(pageData.mainImage);
        setThumbImages(pageData.thumbnails);
    }, [pageData]);

    const handleThumbClick = (index) => {
        const newThumbs = [...thumbImages];
        const clickedThumb = newThumbs[index];
        const currentHero = heroImage;

        // Swap
        newThumbs[index] = currentHero;
        setHeroImage(clickedThumb);
        setThumbImages(newThumbs);
    };

    const handleNextThumb = () => {
        const newThumbs = [...thumbImages];
        const currentHero = heroImage;
        const firstThumb = newThumbs.shift();
        newThumbs.push(currentHero);
        setHeroImage(firstThumb);
        setThumbImages(newThumbs);
    };

    const handlePrevThumb = () => {
        const newThumbs = [...thumbImages];
        const currentHero = heroImage;
        const lastThumb = newThumbs.pop();
        newThumbs.unshift(currentHero);
        setHeroImage(lastThumb);
        setThumbImages(newThumbs);
    };

    // --- RELATED SERVICES/PRODUCTS LOGIC ---
    const serviceIds = [
        "branding-identity", "development-services", "website-development",
        "ecommerce-development", "app-development", "graphic-design",
        "ui-ux-design", "software-tech-solutions", "data-analytics",
        "ai-services", "crm-services", "saas-services"
    ];

    const productIds = [
        "crm-products", "saas-products", "erp-products",
        "ai-chatbot-products", "job-seeker-hub", "learning-career",
        "business-suit-ai"
    ];

    const isService = serviceIds.includes(activeId);
    const relatedItems = isService
        ? brandingData.filter(item => serviceIds.includes(item.id) && item.id !== activeId)
        : brandingData.filter(item => productIds.includes(item.id) && item.id !== activeId);

    const relatedTitle = isService ? "other related services" : "other related products";

    const handleCardClick = (id) => {
        navigate('/raymartPageFour', { state: { id } });
    };

    // Use testimonials from JSON data
    const testimonialsData = pageData.testimonials || [];

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (!scrollRef.current) return;
        const { scrollLeft, scrollWidth } = scrollRef.current;

        // Exact measure of one card and its gap based on actual DOM elements
        const cards = scrollRef.current.children;
        if (cards.length === 0) return;
        const cardWithGap = cards[0].offsetWidth + 15;
        const singleSetWidth = (scrollWidth + 15) / 3;

        let targetScroll = direction === 'left' ? scrollLeft - cardWithGap : scrollLeft + cardWithGap;

        // "Teleport" immediately if we reach the end of the middle set in either direction
        if (direction === 'right' && targetScroll >= (singleSetWidth * 2)) {
            scrollRef.current.scrollLeft = scrollLeft - singleSetWidth;
            targetScroll = scrollRef.current.scrollLeft + cardWithGap;
        } else if (direction === 'left' && targetScroll <= (singleSetWidth - cardWithGap)) {
            scrollRef.current.scrollLeft = scrollLeft + singleSetWidth;
            targetScroll = scrollRef.current.scrollLeft - cardWithGap;
        }

        scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
    };

    useEffect(() => {
        // Scroll to top on mount or when activeId changes
        window.scrollTo(0, 0);

        // Initial position: start at the middle set for the carousel
        if (scrollRef.current) {
            const { scrollWidth } = scrollRef.current;
            const singleSetWidth = (scrollWidth + 15) / 3;
            scrollRef.current.scrollLeft = singleSetWidth;
        }
    }, [activeId]);

    useEffect(() => {
        if (testimonialsData.length === 0) return;
        const timer = setInterval(() => {
            setIsFading(true); // Trigger fade out
            setTimeout(() => {
                setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
                setIsFading(false); // Trigger fade in with new content
            }, 500); // match transition duration in CSS
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonialsData]);

    const faqs = [
        {
            question: "Why is Engloray Learning important for my career?",
            answer: "Engloray Learning allows students and professionals to engage with practical, project-based courses. It provides measurable results in skill enhancement, allows for targeted career growth, and enables learners to adapt to changing industry demands with confidence."
        },
        {
            question: "How can Engloray help improve my technical skills?",
            answer: "We offer hands-on project based learning, expert mentorship, and industry-standard curriculum designed to build your portfolio and practical knowledge."
        },
        {
            question: "How long does it take to complete the programs?",
            answer: "Our programs are flexible. Most intensive courses range from 3 to 6 months depending on the track and your dedication."
        },
        {
            question: "Do you provide placement or internship opportunities?",
            answer: "Yes, we connect our top performers with our tech group and partner networks for potential internship and job opportunities."
        }
    ];

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <>
            <Helmet>
                <title>FAQ & Feedback | Engloray</title>
            </Helmet>

            <RayMartNavbar />

            <div className="faq-raymart-container">

                {/* ═══════════ HERO SECTION (Case Study Layout) ═══════════ */}
                <div className="cs-wrapper">

                    {/* LEFT SIDE */}
                    <div className="cs-left">

                        {/* MAIN HERO */}
                        <div className="cs-hero">
                            <img src={mainImageMap[heroImage] || mainImageMap[pageData.id] || heroImage} alt={pageData.title} />
                        </div>

                        {/* THUMBNAILS */}
                        <div className="cs-thumbs-wrapper">
                            <button className="thumb-nav-btn left" onClick={handlePrevThumb}>
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            <div className="cs-thumbs">
                                {thumbImages.map((img, i) => (
                                    <img
                                        key={i}
                                        src={mainImageMap[img] || img}
                                        alt={`branding-${i}`}
                                        onClick={() => handleThumbClick(i)}
                                    />
                                ))}
                            </div>
                            <button className="thumb-nav-btn right" onClick={handleNextThumb}>
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-right">

                        {/* TOP SMALL IMAGE */}
                        <div className="cs-side-image">
                            <img src={mainImageMap[pageData.sidebarImage] || pageData.sidebarImage} alt="Side" />
                        </div>

                        {/* CONTENT */}
                        <div className="cs-side-content">
                            <h2>{pageData.title}</h2>
                            <p>
                                {pageData.description}
                            </p>

                            {/* INFO ROWS */}
                            <div className="cs-info">
                                <div>
                                    <span>Client</span>
                                    <p>{pageData.client}</p>
                                </div>
                                <div>
                                    <span>Timeline</span>
                                    <p>{pageData.timeline}</p>
                                </div>
                                <div>
                                    <span>Year</span>
                                    <p>{pageData.year}</p>
                                </div>
                            </div>

                            {/* PILL BARS */}
                            <div className="cs-bars">
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Brand Strategy</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.strategy}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>UI/UX Design</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.design}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Development</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.development}%` }}></div></div>
                                    </div>
                                </div>
                                <div className="bar">
                                    <div className="bar-row">
                                        <span>Marketing</span>
                                        <div className="track"><div className="fill" style={{ width: `${pageData.bars.marketing}%` }}></div></div>
                                    </div>
                                </div>
                            </div>

                            {/* BOTTOM BADGES */}
                            <div className="cs-bottom-badges">
                                {pageData.bottomBadges && pageData.bottomBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

                {/* EXTRA SECTION */}
                <div className="cs-bottom-section">

                    {/* LEFT SIDE (3 BOXES) */}
                    <div className="cs-bottom-left">

                        {pageData.offerContents && pageData.offerContents[0] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <div className="cs-box-title">
                                        <h4>{pageData.offerContents[0].title}</h4>
                                        <p className="box-description">{pageData.offerContents[0].description}</p>
                                    </div>
                                    <div className="cs-box-right">
                                        <span className="green-tag">{pageData.offerContents[0].tag}</span>
                                        <span className="price">{pageData.offerContents[0].price}</span>
                                        <button>Contact soon</button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {pageData.offerContents && pageData.offerContents[1] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <h4>{pageData.offerContents[1].title}</h4>
                                    <div className="cs-box-right">
                                        <span className="green-tag">{pageData.offerContents[1].tag}</span>
                                        <span className="price">{pageData.offerContents[1].price}</span>
                                        <button>Contact soon</button>
                                    </div>
                                </div>
                                <div className="cs-list-container">
                                    <ul className="cs-feature-list">
                                        {pageData.offerContents[1].features.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {pageData.offerContents && pageData.offerContents[2] && (
                            <div className="cs-box">
                                <div className="cs-box-row">
                                    <h4>{pageData.offerContents[2].title}</h4>
                                </div>
                                <div className="cs-pricing-container">
                                    <div className="cs-pricing-list">
                                        {pageData.offerContents[2].modules.map((mod, i) => (
                                            <div className="pricing-item" key={i}><span>{mod.name}</span><span className="price-value">{mod.value}</span></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="cs-total">
                                    <span className="green-tag">{pageData.offerContents[2].tag}</span>
                                    <span className="price">{pageData.offerContents[2].price}</span>
                                    <button>Contact soon</button>
                                </div>
                            </div>
                        )}

                    </div>

                    {/* RIGHT SIDE (2 DARK BOXES) */}
                    <div className="cs-bottom-right">

                        <div className="cs-dark-box">
                            <h4>Features</h4>
                            <div className="cs-dark-list-container">
                                <ul className="cs-feature-dark-list">
                                    {pageData.features && pageData.features.map((feature, i) => (
                                        <li key={i}>✔ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="cs-dark-box">
                            <h4>Comparison</h4>
                            <div className="cs-table-container">
                                <table className="cs-comparison-table">
                                    <thead>
                                        <tr>
                                            <th>Feature</th><th>Basic</th><th>Pro</th><th>Enterprise</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {pageData.comparison && pageData.comparison.map((row, i) => (
                                            <tr key={i}>
                                                <td>{row.feature}</td>
                                                <td>{row.basic ? '✔' : '✖'}</td>
                                                <td>{row.pro ? '✔' : '✖'}</td>
                                                <td>{row.enterprise ? '✔' : '✖'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>

                </div>

                {/* FINAL CONTENT SECTION */}
                <div className="cs-final-section">

                    {/* LEFT SIDE */}
                    <div className="cs-final-left">
                        <div className="cs-final-image">
                            <img src={mainImageMap[pageData.finalImage] || pageData.finalImage} alt="Final Case Study" />
                        </div>
                        <p className="cs-final-desc">
                            {pageData.finalDescription}
                        </p>
                        <div className="cs-final-text">
                            {pageData.finalTexts && pageData.finalTexts.map((text, i) => (
                                <div key={i}>
                                    <h4>{text.title}</h4>
                                    <p>{text.content}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="cs-final-right">

                        <div className="cs-final-box">
                            <h4>Achievements</h4>
                            <div className="cs-img-grid">
                                <img src={mainImageMap[pageData.thumbnails[0]] || pageData.thumbnails[0]} alt="Achievement 1" />
                                <img src={mainImageMap[pageData.thumbnails[1]] || pageData.thumbnails[1]} alt="Achievement 2" />
                                <img src={mainImageMap[pageData.thumbnails[2]] || pageData.thumbnails[2]} alt="Achievement 3" />
                                <div className="number-container"><span className="count">+{pageData.achievementsCount}</span></div>
                            </div>
                        </div>

                        <div className="cs-final-box">
                            <h4>Visual Assets</h4>
                            <div className="cs-img-grid">
                                <img src={mainImageMap[pageData.thumbnails[3]] || pageData.thumbnails[3]} alt="Asset 1" />
                                <img src={mainImageMap[pageData.thumbnails[2]] || pageData.thumbnails[2]} alt="Asset 2" />
                                <img src={mainImageMap[pageData.thumbnails[1]] || pageData.thumbnails[1]} alt="Asset 3" />
                                <div className="number-container"><span className="count">+{pageData.visualAssetsCount}</span></div>
                            </div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>{pageData.title} Summary</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    {pageData.summary && pageData.summary.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="badges">
                                {pageData.finalSummaryBadges && pageData.finalSummaryBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>
                        </div>

                        <div className="cs-final-box dark">
                            <h4>Key Outcomes</h4>
                            <div className="cs-final-list-container">
                                <ul className="cs-final-ul-list">
                                    {pageData.outcomes && pageData.outcomes.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="badges">
                                {pageData.keyOutcomesBadges && pageData.keyOutcomesBadges.map((badge, i) => (
                                    <span key={i}>{badge}</span>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>

                {/* Our Services Section */}
                <section className="fr-services-section">
                    <h2 className="fr-srv-main-title">{relatedTitle}</h2>

                    <div className="fr-srv-banner">
                        <button className="fr-srv-arrow left" onClick={() => scroll('left')}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>

                        <div className="fr-srv-grid" ref={scrollRef} style={{ overflowX: 'hidden' }}>
                            {relatedItems.map((srv, idx) => (
                                <div className="fr-srv-card" key={idx} onClick={() => handleCardClick(srv.id)}>
                                    <div className="fr-srv-img-box">
                                        <img src={mainImageMap[srv.mainImage] || srv.mainImage} alt={srv.title} />
                                    </div>
                                    <div className="fr-srv-content">
                                        <h4 className="fr-srv-title">{srv.title}</h4>
                                        <div className="fr-srv-footer">
                                            <button className="fr-srv-footer-icon">
                                                <FontAwesomeIcon icon={faBorderAll} />
                                            </button>
                                            <div className="fr-srv-price">Explore</div>
                                            <span className="fr-srv-brand-tag">ENGLORAY</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="fr-srv-arrow right" onClick={() => scroll('right')}>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>

                    {/* <div className="fr-srv-bottom-bar">
                        <span className="fr-srv-similar">Similar Titles</span>
                        <span className="fr-srv-see-more">See more</span>
                    </div> */}

                    <div className="fr-srv-dots">
                        <div className="fr-srv-dot active"></div>
                        <div className="fr-srv-dot"></div>
                        <div className="fr-srv-dot"></div>
                        <div className="fr-srv-dot"></div>
                    </div>

                </section>

                {/* Testimonials Section */}
                <section className="fr-testimonials-section">
                    <div className="fr-testimonials-header">
                        <div className="fr-test-header-left">
                            <h2 className="fr-test-heading">What top-tier<br />companies say<br />about Branding & Identity</h2>
                        </div>
                        <div className="fr-test-header-right">
                            <p className="fr-test-desc">
                                Join the growing number of businesses and companies that have experienced the transformative impact of our digital services.
                                Our commitment to technical excellence and strategic innovation has empowered
                                countless global education leaders to stay ahead in an ever-evolving market.
                            </p>
                        </div>
                    </div>

                    <div className="fr-testimonials-grid">
                        {/* Grey Card: outer wrapper for positioning notch divs */}
                        <div className="fr-test-card fr-grey-card-wrapper">

                            {/* Inner clipping container: overflow:hidden + border-radius clips image to outer rounded shape */}
                            <div className={`fr-card-grey`}>
                                <div
                                    className={`fr-grey-full-img fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}
                                    style={{ backgroundImage: `url(${avatarMap[testimonialsData[currentTestimonialIndex]?.name] || pageData.mainImage})` }}
                                ></div>
                                <div className="fr-grey-full-overlay"></div>

                                {/* Text content overlaid on image - Showing name and position here as requested */}
                                <div className={`fr-grey-text-overlay fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}>
                                    <div className="fr-grey-card-author">
                                        <span className="fr-grey-author-name">{testimonialsData[currentTestimonialIndex]?.name}</span>
                                        <span className="fr-grey-author-title">{testimonialsData[currentTestimonialIndex]?.position}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Notch cutout divs: OUTSIDE fr-card-grey so overflow:hidden doesn't clip their border-radius */}
                            <div className="fr-grey-notch fr-grey-notch-tl"></div>
                            <div className="fr-grey-notch fr-grey-notch-br"></div>

                        </div>

                        {/* Green Card - Showing content here */}
                        <div className="fr-test-card fr-card-green">
                            <div className="fr-shape-bg">
                                <div className="fr-shape-rect fr-green-rect-a"></div>
                                <div className="fr-shape-rect fr-green-rect-b"></div>
                                <div className="fr-shape-fillet fr-green-fillet-tr"></div>
                                <div className="fr-shape-fillet fr-green-fillet-bl"></div>
                            </div>
                            <div className="fr-card-content">
                                <div className={`fr-testimonial-fade ${isFading ? 'fading-out' : 'fading-in'}`}>
                                    <div className="fr-test-badge-wrapper">
                                        <span className="fr-test-badge">
                                            <FontAwesomeIcon icon={faComments} className="fr-badge-icon" /> Client Testimonial
                                        </span>
                                    </div>
                                    <div className="fr-test-content">
                                        <p className="fr-test-quote">
                                            {testimonialsData[currentTestimonialIndex]?.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </section>

                {/* FAQ Section */}
                <section className="fr-faq-section">
                    <div className="fr-faq-left">
                        <h2 className="fr-heading">Branding & Identity FAQs</h2>
                        <p className="fr-desc">
                            As a leading educational platform and agency, we are dedicated to providing
                            comprehensive educational resources and answering frequently asked questions to help our students.
                        </p>
                        <div className="fr-buttons">
                            <button className="fr-btn-outline">More Questions</button>
                            <button className="fr-btn-link">Contact Us</button>
                        </div>
                    </div>

                    <div className="fr-faq-right">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`fr-accordion-item ${openIndex === index ? 'active' : ''}`}
                            >
                                <div className="fr-accordion-header" onClick={() => toggleAccordion(index)}>
                                    <h3>{faq.question}</h3>
                                    <span className="fr-icon">{openIndex === index ? '−' : '+'}</span>
                                </div>
                                <div
                                    className="fr-accordion-body"
                                    style={{ maxHeight: openIndex === index ? '200px' : '0px' }}
                                >
                                    <div className="fr-accordion-content">
                                        <p>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Ready to work with us (Banner + Footer) */}
                <section className="fr-ready-section">

                    <div className="fr-banner-card">
                        <h2 className="fr-banner-title">Ready to work with us ?</h2>
                        <button className="fr-banner-btn">Get Started &nbsp; &gt;</button>
                    </div>

                    <div className="fr-footer-area">
                        <div className="fr-footer-col fr-col-brand">
                            <div className="fr-footer-logo">
                                <img src={Logo} alt="Engloray" style={{ filter: 'brightness(0)' }} />
                            </div>
                            <p className="fr-footer-desc">
                                Empowering careers and businesses through expert technical training and innovative digital solutions.
                            </p>
                            <div className="fr-socials">
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faLinkedinIn} /></div>
                                <div className="fr-social-icon"><FontAwesomeIcon icon={faInstagram} /></div>
                            </div>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Services</h4>
                            <a href="/brandingPage">Branding & Design</a>
                            <a href="/developmentPage">Web Development</a>
                            <a href="/marketingPage">Digital Marketing</a>
                            <a href="/UiUxPage">UI/UX Design</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Education</h4>
                            <a href="/allProgramsPage">All Programs</a>
                            <a href="/workshopsPage">Workshops</a>
                            <a href="/corporateTraining">Corporate Training</a>
                            <a href="/allCoursesPage">E-learning</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Company</h4>
                            <a href="/ourStoryPage">About Us</a>
                            <a href="/worksCaseStudiesPage">Works</a>
                            <a href="/CareersPage">Careers</a>
                            <a href="#footer">Contact</a>
                        </div>

                        <div className="fr-footer-col">
                            <h4>Licence</h4>
                            <a href="/privacyPolicyPage">Privacy Policy</a>
                            <a href="/termsAndServicesPage">Terms of Service</a>
                            <a href="/cookiesPolicyPage">Cookie Policy</a>
                        </div>

                        <div className="fr-footer-col fr-col-contact">
                            <h4>Contact Info</h4>
                            <p><FontAwesomeIcon icon={faEnvelope} className="fr-contact-icon-fixed" /> engloray@gmail.com</p>
                            <p><FontAwesomeIcon icon={faPhone} className="fr-contact-icon-fixed" /> +91 6381759909</p>
                            <p><FontAwesomeIcon icon={faPhone} className="fr-contact-icon-fixed" /> +91 6369945920</p>
                            <p><FontAwesomeIcon icon={faLocationDot} className="fr-contact-icon-fixed" /> Madurai, TamilNadu, INDIA</p>
                        </div>
                    </div>

                </section>

            </div>
        </>
    );
};

export default FaqRaymart;
