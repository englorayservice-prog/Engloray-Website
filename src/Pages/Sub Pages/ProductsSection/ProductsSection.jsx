import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faLaptopCode, faServer, faDatabase, faCloud } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './ProductsSection.css';

library.add(faArrowRight);

const ProductsSection = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.1 }
        );
        const section = document.getElementById('productsSection');
        if (section) observer.observe(section);
        return () => observer.disconnect();
    }, []);

    const products = [
        {
            id: 1,
            title: "SaaS",
            description: "Cloud-based software solutions that are scalable, secure, and accessible anytime, anywhere.",
            bg: "#ffffff",
            text: "#111827",
            route: "/saasPage"
        },
        {
            id: 2,
            title: "ERP",
            description: "Unified management platform for enterprises, schools, and colleges, streamlining academics, finance, and operations.",
            bg: "#ffffff",
            text: "#111827",
            route: "/erpPage"
        },
        {
            id: 3,
            title: "Business Suite AI",
            description: "AI-powered business tools that automate operations, improve decisions, and boost productivity. Our intelligent tools give your business a cutting edge by streamlining workflows and reducing manual effort. They enable real-time insights and smarter strategies to help organizations grow faster and operate more efficiently. With seamless integrations and advanced analytics, businesses can unlock deeper visibility into their operations. This empowers teams to innovate faster, optimize resources, and achieve sustainable growth in a competitive digital landscape.",

            bg: "#c62828",
            text: "#FFFFFF",
            route: "/products/business-suite-ai",
            isLarge: true,
            hasShield: true
        },
        {
            id: 4,
            title: "CRM",
            description: "Smart customer relationship tools to manage leads, sales, and customer engagement seamlessly.",
            bg: "#ffffff",
            text: "#111827",
            route: "/crmpage"
        },
        {
            id: 5,
            title: "AI Chatbot",
            description: "Intelligent conversational assistants that provide instant support and enhance user experience.",
            bg: "#ffffff",
            text: "#111827",
            route: "/aiChatbotPage"
        },
        {
            id: 6,
            title: "Job Seeker",
            description: "A smart platform connecting talent with opportunities through AI-driven job matching.",
            bg: "#ffffff",
            text: "#111827",
            route: "/jobSeekerPage"
        },
        {
            id: 7,
            title: "Learning & Career",
            description: "Interactive learning systems designed to upskill individuals and accelerate career growth.",
            bg: "#ffffff",
            text: "#111827",
            route: "/learningPage"
        }
    ];

    const gridClasses = ['ps-c0', 'ps-c1', 'ps-c2', 'ps-c3', 'ps-c4', 'ps-c5', 'ps-c6'];

    return (
        <section className={`ps-section ${isVisible ? 'ps-visible' : ''}`} id="productsSection">
            <div className="ps-container">
                <div className="ps-header-row">
                    <div className="ps-header-left">
                        <h2 className="ps-headline">Our Products</h2>
                    </div>
                    <div className="ps-header-right">
                        <p className="ps-subheadline">
                            Innovative solutions designed to power businesses and careers. We offer comprehensive software products across the most critical categories.
                        </p>
                    </div>
                </div>

                <div className="ps-cards-grid">
                    {products.map((product, i) => (
                        <div
                            key={product.id}
                            className={`ps-card ${gridClasses[i]} ${product.isLarge ? 'ps-card-large' : ''}`}
                            style={{ backgroundColor: product.bg }}
                            onClick={() => navigate(product.route)}
                        >
                            {/* Title + Arrow inline */}
                            <div className="ps-title-row">
                                <h4 className="ps-card-title" style={{ color: product.text }}>
                                    {product.title}
                                </h4>
                                <FontAwesomeIcon
                                    icon="arrow-right"
                                    className="ps-arrow-icon"
                                    style={{ color: product.text === '#FFFFFF' ? 'rgba(255,255,255,0.85)' : 'rgba(31,41,55,0.6)' }}
                                />
                            </div>

                            {/* Description */}
                            <p className="ps-card-desc" style={{ color: product.text === '#FFFFFF' ? 'rgba(255,255,255,0.8)' : 'rgba(31,41,55,0.65)' }}>
                                {product.description}
                            </p>

                            {/* Shield/AI Dynamic Animation for large card */}
                            {product.hasShield && (
                                <div className="ps-ai-animation-wrapper">
                                    <div className="ps-ai-glow"></div>
                                    <div className="ps-ai-particle ps-ai-p1"></div>
                                    <div className="ps-ai-particle ps-ai-p2"></div>
                                    <div className="ps-ai-particle ps-ai-p3"></div>
                                    <div className="ps-ai-particle ps-ai-p4"></div>

                                    {/* Data lines */}
                                    <div className="ps-ai-connection ps-ai-c1"></div>
                                    <div className="ps-ai-connection ps-ai-c2"></div>
                                    <div className="ps-ai-connection ps-ai-c3"></div>

                                    {/* AI Nodes */}
                                    <div className="ps-ai-node ps-ai-node-1">
                                        <FontAwesomeIcon icon={faLaptopCode} />
                                    </div>
                                    <div className="ps-ai-node ps-ai-node-2">
                                        <FontAwesomeIcon icon={faServer} />
                                    </div>
                                    <div className="ps-ai-node ps-ai-node-3">
                                        <FontAwesomeIcon icon={faDatabase} />
                                    </div>
                                    <div className="ps-ai-node ps-ai-node-4">
                                        <FontAwesomeIcon icon={faCloud} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductsSection;
