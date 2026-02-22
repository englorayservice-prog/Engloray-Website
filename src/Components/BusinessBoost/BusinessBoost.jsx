import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BusinessBoost.css';
import { Globe, Megaphone, ArrowUpRight } from 'lucide-react';
import greenCircle from '../../assets/green circle.png';

gsap.registerPlugin(ScrollTrigger);

const boostCardsData = [
    {
        title: "SaaS",
        description: "Cloud-based software solutions that are scalable, secure, and accessible anytime, anywhere.",
        bg: "#D6C1E8", // Lilac
        text: "#1F2937"
    },
    {
        title: "ERP",
        description: "Unified management platform for enterprises, schools, and colleges, streamlining academics, finance, and operations.",
        bg: "#AC58E9", // Ultraviolet (keep this violet color)
        text: "#FFFFFF",
        descriptionStyle: { paddingLeft: "50px" } // Adjusted padding for longer text
    },
    {
        title: "CRM",
        description: "Smart customer relationship tools to manage leads, sales, and customer engagement seamlessly.",
        bg: "#08262C", // Dark Teal (Kept existing)
        text: "#FFFFFF"
    },
    {
        title: "Business Suite AI",
        description: "AI-powered business tools that automate operations, improve decisions, and boost productivity.",
        bg: "#124A59", // Medium Teal (Kept existing)
        text: "#FFFFFF"
    },
    {
        title: "AI Chatbot",
        description: "Intelligent conversational assistants that provide instant support and enhance user experience.",
        bg: "#F4F8F9", // Frosted Snow (Kept existing)
        text: "#1F2937"
    },
    {
        title: "Job Seeker",
        description: "A smart platform connecting talent with opportunities through AI-driven job matching.",
        bg: "#292F91", // Previous SaaS Blue (Dark Blue)
        text: "#FFFFFF"
    },
    {
        title: "Learning & Career",
        description: "Interactive learning systems designed to upskill individuals and accelerate career growth.",
        bg: "#4CA8DD", // Previous ERP Blue (Light Blue)
        text: "#FFFFFF"
    }
];

const BusinessBoost = () => {
    const sectionRef = useRef(null);
    const scrollTrackRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Infinite vertical scrolling animation using GSAP
            if (scrollTrackRef.current) {
                const totalHeight = scrollTrackRef.current.scrollHeight / 2; // Half because content is duplicated
                const cards = gsap.utils.toArray('.boost-card');

                // Vertical scrolling animation
                gsap.set(scrollTrackRef.current, { y: 0 });

                const scrollTween = gsap.to(scrollTrackRef.current, {
                    y: -totalHeight,
                    duration: 30,
                    ease: "none",
                    repeat: -1,
                    modifiers: {
                        y: gsap.utils.unitize(y => parseFloat(y) % totalHeight)
                    }
                });
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="business-boost-section" ref={sectionRef}>
            <div className="business-boost-container">
                {/* Left Section */}
                <div className="boost-left-section">
                    <h2 className="boost-intro-text">
                        Build an AI product
                        <span className="highlight-faster">
                            faster
                            <img src={greenCircle} alt="" className="faster-bg" />
                        </span>
                        than ever.
                    </h2>
                    <h1 className="boost-main-title">
                        <span className="boost-highlight">10x...</span>
                        <br />
                        <span className="boost-title-main">Boost</span>
                        <br />
                        <span className="boost-subtitle">Your Business</span>
                    </h1>

                    <p className="boost-description">
                        Whether you want to take your business global or just expand your horizons, we will help you identify new customers.
                    </p>

                    <button className="boost-cta-button">
                        Get started
                        <span className="cta-icon"><ArrowUpRight size={30} strokeWidth={3.5} /></span>
                    </button>

                    <div className="boost-stats">
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <Globe className="stat-icon-svg" strokeWidth={2.5} />
                            </div>
                            <div className="stat-text">
                                <h4>Your Global Expansion</h4>
                                <p>Digital Partner</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon-wrapper">
                                <Megaphone className="stat-icon-svg" strokeWidth={2.5} />
                            </div>
                            <div className="stat-textt">
                                <h4>Driving Customer Acquisition</h4>
                                <p>Celebrating Five Years Strong</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section - Infinite Scrolling Cards */}
                <div className="boost-right-section">
                    <div className="scroll-track" ref={scrollTrackRef}>
                        {/* Original Cards */}
                        {boostCardsData.map((card, index) => (
                            <div
                                className="boost-card"
                                key={`original-${index}`}
                                style={{ backgroundColor: card.bg, color: card.text }}
                            >
                                <div className="card-content-wrapper">
                                    <h3 className="card-title-left">{card.title}</h3>
                                    <p className="card-description-right">{card.description}</p>
                                </div>
                                <span className="card-arrow">→</span>
                            </div>
                        ))}

                        {/* Duplicated Cards for Infinite Scroll */}
                        {boostCardsData.map((card, index) => (
                            <div
                                className="boost-card"
                                key={`duplicate-${index}`}
                                style={{ backgroundColor: card.bg, color: card.text }}
                            >
                                <div className="card-content-wrapper">
                                    <h3 className="card-title-left">{card.title}</h3>
                                    <p className="card-description-right">{card.description}</p>
                                </div>
                                <span className="card-arrow">→</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessBoost;
