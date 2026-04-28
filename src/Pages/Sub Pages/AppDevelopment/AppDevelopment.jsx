import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './AppDevelopment.css';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';


import logoDesignImg from '../../../assets/services/logo_design.png';
import colorPaletteImg from '../../../assets/services/color_palette.png';
import typographyImg from '../../../assets/services/typography.png';
import visualStyleImg from '../../../assets/services/visual_style.png';
import environmentImg from '../../../assets/services/environmental_branding.png';
import portraitImg from '../../../assets/agency/branding_concept_abstract.png';
import landscapeImg from '../../../assets/agency/landscape.png';
import iphone14Img from '../../../assets/Iphone14.png';

import avatarOne from '../../../assets/male_avatar.png';
import avatarTwo from '../../../assets/cartoon_male_1.png';
import avatarThree from '../../../assets/cartoon_female_1.png';
import avatarFour from '../../../assets/cartoon_female_2.png';
import avatarFive from '../../../assets/cartoon_male_2.png';
import avatarSix from '../../../assets/cartoon_female_3.png';
import avatarSeven from '../../../assets/cartoon_male_3.png';
import avatarEight from '../../../assets/female_avatar.png';


// Removed missing premium_avatar local imports
const AppDevelopment = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [{
        id: 1, num: '01', title: 'Business App Solution', icon: '✦', short: 'Business App Solution services', stats: { val1: '62+', lab1: 'Completed', val2: '4 Months', lab2: 'Avg Speed', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Business App Solution focused solutions provided by Engloray expert team Our comprehensive business app solution streamlines daily operations by integrating project management and communication tools into one platform. Employees can track tasks in real time and share critical updates instantly which reduces project delays. The mobile app enables remote workers to submit reports immediately and access company resources from any location. Management teams utilize the centralized data analytics dashboard to make informed decisions and improve productivity. Implementing this software solution helps businesses reduce overhead costs and increase overall efficiency..',
        image: "https://i.pinimg.com/736x/15/ca/1f/15ca1f6f0dff507379b6e14f975153ac.jpg"
    },
    {
        id: 2, num: '02', title: 'E-Commerce App Package', icon: '◈', short: 'E-Commerce App Package services', stats: { val1: '87+', lab1: 'Completed', val2: '5 Weeks', lab2: 'Avg Speed', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'E-Commerce App Package focused solutions provided by Engloray expert team A complete e-commerce app package provides everything necessary to launch an online store. It includes a user-friendly mobile application for customers with features like product browsing and secure checkout. The package also features a comprehensive admin panel for managing products orders and inventory. Secure payment gateways are integrated for smooth transactions. Customers can track their orders directly through the app. The backend system offers robust data security and fast load times. Many packages also include personalized push notifications and analytical tools to track sales performanc.',
        image: "https://i.pinimg.com/736x/f6/69/99/f6699993bcfd79e29d8b9da82d9bd27e.jpg"
    },
    {
        id: 3, num: '03', title: 'Startup App Launch Kit', icon: '✦', short: 'Startup App Launch Kit services', stats: { val1: '58+', lab1: 'Completed', val2: '5 Weeks', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
        description: 'Startup App Launch Kit focused solutions provided by Engloray expert team.A comprehensive app launch kit empowers startups to deploy their digital product within thirty days by providing a structured roadmap and essential resources. This toolkit streamlines development workflows through pre-configured technology stacks such as Flutter for cross-platform apps or React Native for rapid iteration. It includes foundational elements like backend setup with Node.js and PostgreSQL as well as essential frontend tools including Tailwind CSS. These kits often feature built-in security protocols like JWT authentication and Stripe integration to ensure a secure and compliant product launch. Using a curated launch kit reduces technical debt and accelerates time to market for new venture',
        image: "https://i.pinimg.com/1200x/18/59/b9/1859b90826919f2362b9fd6f415441cb.jpg"
    },
    {
        id: 4, num: '04', title: 'Custom App Development', icon: '◈', short: 'Custom App Development services', stats: { val1: '146+', lab1: 'Deploys', val2: '6 Weeks', lab2: 'Sprints', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'Custom application development allows businesses to build software that fits their specific needs and goals without relying on generic off the shelf products. This tailored approach ensures that the application matches unique workflows and can scale as a company grows. Many modern platforms such as Microsoft Power Apps and Bubble now use no code or low code tools that allow people to create professional apps using drag and drop interfaces rather than complex programming. These tools make the development process faster and more affordable while still providing security and integration with existing systems. By focusing on user experience and intuitive design a custom app can improve overall efficiency and give a business a competitive advantage',
        image: "https://i.pinimg.com/1200x/29/f6/7f/29f67fab51ed7137844ced743fcb1271.jpg"
    },
    {
        id: 5, num: '05', title: 'Android App Development', icon: '✦', short: 'Android App Development services', stats: { val1: '101+', lab1: 'Deploys', val2: '6 Months', lab2: 'Sprints', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'Android App Development focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/96/4e/5b/964e5b4b1881dd66816a59b11bb16fd6.jpg"
    },
    {
        id: 6, num: '06', title: 'iOS App Development', icon: '◈', short: 'iOS App Development services', stats: { val1: '139+', lab1: 'Deploys', val2: '5 Weeks', lab2: 'Sprints', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'iOS app development involves creating software specifically for Apple devices like the iPhone and iPad using the Swift programming language and the Xcode development environment. This specialized process ensures that applications take full advantage of unique hardware features and maintain high performance levels while adhering to strict security standards. Developers often use modern frameworks like SwiftUI to build intuitive user interfaces that automatically adapt to various screen sizes and orientations. By following the Apple Human Interface Guidelines creators can ensure their apps feel familiar and easy to use for millions of people worldwide. Successful deployment requires a paid developer account and a rigorous review process to ensure every app meets quality expectations before reaching the App StoreiOS',
        image: "https://i.pinimg.com/1200x/3a/a7/44/3aa7447e74120a34093fa7190e5df4a0.jpg"
    }];

    const pageData = {
        id: 3,
        title: "APP DEVELOPMENT",
        description: "Develop cutting-edge mobile applications for iOS and Android platforms.",
        shortDescription: "Create Memorable Brand that Resonate with Your Audience",
        fullDescription: "Build scalable and efficient software solutions tailored to your specific business requirements.",
        features: ["Logo Creation", "Iconography", "Social Media Branding", "Visual Style"],
        duration: "2-4 weeks",
        projects: "50+ completed logo",
        logo: "📱"
    };

    const feedbacks = [
        {
            id: 1,
            name: "Bruce Hardy",
            role: "CEO, TechVentures",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bruce&backgroundColor=b6e3f4&mouth=smile",
            photo: avatarOne,
            text: "Digital ad campaigns helped us generate quality admission inquiries. The creatives and messaging worked very well. Their team's dedication to our brand's success was truly exceptional.",
            stars: 5
        },
        {
            id: 2,
            name: "Mark Smith",
            role: "Marketing Director",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mark&backgroundColor=c0aede&mouth=smile",
            photo: avatarTwo,
            text: "Promotional designs were eye-catching and effective. We saw a clear increase in walk-in customers and overall brand engagement within just a few weeks of implementation.",
            stars: 5
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Brand Manager",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffdfbf&mouth=smile",
            photo: avatarThree,
            text: "The web and mobile development services they provided were top-notch. Our and brand identity has never felt more unified and powerful. Truly a game-changer for us.",
            stars: 5
        },
        {
            id: 4,
            name: "Vera Duncan",
            role: "Creative Head",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Vera&backgroundColor=d1d4f9&mouth=smile",
            photo: avatarFour,
            text: "Building our digital presence from scratch felt like an impossible task, but this team made it look easy. Their expertise in branding and identity design is second to none.",
            stars: 5
        },
        {
            id: 5,
            name: "David Chen",
            role: "Product Lead",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede&mouth=smile",
            photo: avatarFive,
            text: "Innovative, creative, and highly professional. They took our vision and expanded it into a brand that truly resonates with our global audience. Highly recommended!",
            stars: 5
        },
        {
            id: 6,
            name: "Emma Wilson",
            role: "Design Director",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ffdfbf&mouth=smile",
            photo: avatarSix,
            text: "Every touchpoint they designed feels unmistakable. We've received numerous compliments on our new visual style and identity. They are truly masters of their craft.",
            stars: 5
        },
        {
            id: 7,
            name: "James Miller",
            role: "Startup Founder",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=b6e3f4&mouth=smile",
            photo: avatarSeven,
            text: "The attention to detail in their branding process is remarkable. They don't just design; they strategize for growth. Our ROI has been fantastic.",
            stars: 5
        },
        {
            id: 8,
            name: "Linda Thompson",
            role: "COO, Retail Group",
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Linda&backgroundColor=d1d4f9&mouth=smile",
            photo: avatarEight,
            text: "From logo design to environmental branding, they handled everything with grace and excellence. Our physical and digital presence are now perfectly aligned.",
            stars: 5
        }
    ];

    // Related branding & identity images - same size as main image
    const extraImages = [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Brand Strategy Workshop",
            description: "Collaborative brainstorming sessions to define brand vision and positioning"
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Design Process",
            description: "Sketching and digital design creation for comprehensive brand identity"
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Creative Studio",
            description: "Our design team working on innovative branding projects"
        }
    ];

    const internshipCourses = [
        {
            id: 1,
            name: "Brand Identity Design",
            esc: "BID101",
            duration: "8 Weeks",
            description: "Create a powerful and memorable brand identity that communicates your values and connects with your audience.",
            logo: "💻",
            features: ["Logo Design & Visual Language", "Typography Systems", "Color Psychology & Brand Palette", "Brand Voice & Personality", "Iconography & Pattern Systems", "Complete Brand Guidelines"]
        },
        {
            id: 2,
            name: "Brand Strategy & Positioning",
            esc: "MAD201",
            duration: "12 Weeks",
            description: "Craft a compelling brand strategy that defines your value, differentiates you, and builds long-term trust.",
            logo: "📱",
            features: ["Brand Vision & Mission", "Audience Personas", "Value Proposition Design", "Competitive & Market Analysis", "Brand Messaging Framework", "Positioning Map & Tone Guidelines"]
        },
        {
            id: 3,
            name: "Packaging & Visual Communication Design",
            esc: "BAD301",
            duration: "10 Weeks",
            description: "Learn to design packaging and brand visuals that attract customers and elevate brand perception.",
            logo: "⚙️",
            features: ["Packaging Design Principles", "Mockups & 3D Visualizations", "Label & Product Design", "Retail Branding", "Visual Storytelling Assets", "Material Knowledge"]
        }
    ];

    useEffect(() => {
        if (feedbackTrackRef.current) {
            feedbackTrackRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide]);

    useEffect(() => {
        let interval;
        if (autoSlide) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [autoSlide, feedbacks.length]);

    // Handle image animation when expanded
    useEffect(() => {
        if (isExpanded) {
            // Show images one by one with delay
            const timeouts = [];
            extraImages.forEach((img, index) => {
                const timeout = setTimeout(() => {
                    setVisibleImages(prev => [...prev, img.id]);
                }, index * 300); // 300ms delay between each image
                timeouts.push(timeout);
            });

            return () => {
                timeouts.forEach(timeout => clearTimeout(timeout));
                setVisibleImages([]);
            };
        } else {
            // Clear all images when collapsed
            setVisibleImages([]);
        }
    }, [isExpanded]);

    const handleDotClick = (index) => {
        setCurrentSlide(index);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % feedbacks.length);
        setAutoSlide(false);
        setTimeout(() => setAutoSlide(true), 10000);
    };

    const handleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="app-page-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="app-page-hero-section-new">
                <div className="app-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="app-page-hero-left-new">
                        <h4 className="app-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="app-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="app-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="app-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="app-page-hero-buttons-new">
                            <button className="app-page-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20App%20Development.', '_blank')}>GET STARTED</button>
                            <button className="app-page-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20App%20Development.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="app-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="app-page-hero-stats-new">
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">15<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Partners</span>
                            </div>
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">300<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Clients</span>
                            </div>
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">4.9<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="app-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">40<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Awards</span>
                            </div>
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">500<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Projects</span>
                            </div>
                            <div className="app-page-stat-item-new">
                                <div className="app-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="app-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="app-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="app-page-stat-number-new">5<span className="app-page-stat-dash">+</span></span>
                                </div>
                                <span className="app-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="app-page-hero-right-new">
                        <div className="app-page-right-top-new">
                            {/* <p className="app-page-case-subtitle-new">Case Examples</p> */}
                            <div className="app-page-title-play-row">
                                <h2 className="app-page-case-title-new">About Our<br />company</h2>
                                <div className="app-page-play-circle-new">
                                    <span className="app-page-play-text-new">Play</span>
                                    <div className="app-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="app-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="app-page-avatars-row-new">
                                <div className="app-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="app-page-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="app-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="app-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="app-page-performance-card-new">
                            <div className="app-page-perf-header-new">
                                <div className="app-page-perf-item-new">
                                    <span className="app-page-perf-label-new">PERFORMANCE</span>
                                    <span className="app-page-perf-value-new">92%</span>
                                </div>
                                <div className="app-page-perf-item-new text-right">
                                    <span className="app-page-perf-label-new">RESULTS</span>
                                    <span className="app-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="app-page-perf-chart-new">
                                <div className="app-page-chart-col-new"><div className="app-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="app-page-chart-col-new"><div className="app-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="app-page-chart-col-new"><div className="app-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="app-page-hero-notch-new">
                        <div className="app-page-bottom-bar-content-new">
                            Our <span className="app-page-bottom-icon-new">
                                <span className="app-page-b-icon-blue"></span>
                                <span className="app-page-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="app-page-about-section-new">
                <div className="app-page-about-top-notch-content">
                    <span className="app-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="app-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="app-page-about-left-new">
                        <div className="app-page-about-left-header">
                            <h2 className="app-page-about-left-title">Why Choose Our<br />App Development?</h2>
                            <p className="app-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="app-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="app-page-service-item-left-about">
                                        <span className="app-page-service-num-new">{service.num}</span>
                                        <div className="app-page-service-text-group">
                                            <span className="app-page-service-name-about">{service.title}</span>
                                            <span className="app-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="app-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="app-page-about-center-new">
                        <div className="app-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="app-page-dynamic-img-fade"
                            />
                            <div className="app-page-about-badge-new">
                                <span className="app-page-badge-num">50+</span>
                                <span className="app-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="app-page-about-right-new">
                        <div className="app-page-about-detail-panel" key={selectedService}>
                            <div className="app-page-detail-icon-wrap">
                                <span className="app-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="app-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="app-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="app-page-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="app-page-detail-divider" />
                            <div className="bi-detail-stats">
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val1 || '100+'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab1 || 'Projects'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val2 || '3 Weeks'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab2 || 'Timeline'}</span>
                                </div>
                                <div className="bi-detail-stat">
                                    <span className="bi-detail-stat-val">{brandServices[selectedService].stats?.val3 || '4.9★'}</span>
                                    <span className="bi-detail-stat-label">{brandServices[selectedService].stats?.lab3 || 'Rating'}</span>
                                </div>
                            </div>
                            <button className="app-page-detail-cta" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20get%20started%20with%20ENGLORAY%20on%20App%20Development.', '_blank')}>Get Started →</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="app-page-elevate-section">
                <div className="app-page-el-container">
                    <div className="app-page-el-left">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team large" className="app-page-el-img-large" />
                        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team top" className="app-page-el-img-small-top" />
                        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Team bottom" className="app-page-el-img-small-bottom" />

                        <div className="app-page-el-badge-volunteer">
                            <span className="app-page-el-vol-title">Be Our Volunteer</span>
                            <div className="app-page-el-vol-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <div className="app-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="app-page-el-right">
                        <div className="app-page-el-preheading">About Us</div>
                        <h2 className="app-page-el-title">Scalable Apps for<br />the Modern User</h2>
                        <p className="app-page-el-desc">
                            We turn complex ideas into intuitive mobile applications. Our development process focuses on performance, security, and a user-centric interface that wins.
                        </p>

                        <div className="app-page-el-stats">
                            <div className="app-page-el-stat-box">
                                <div className="app-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                                </div>
                                <div className="app-page-el-stat-content">
                                    <span className="app-page-el-stat-num">100+</span>
                                    <span className="app-page-el-stat-label">Live Applications</span>
                                </div>
                            </div>

                            <div className="app-page-el-stat-box">
                                <div className="app-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="app-page-el-stat-content">
                                    <span className="app-page-el-stat-num">5+ Years</span>
                                    <span className="app-page-el-stat-label">App Excellence</span>
                                </div>
                            </div>
                        </div>

                        <p className="app-page-el-desc">
                            Whether you're building for iOS or Android, we leverage the latest technologies to deliver mobile experiences that your users will love and trust.
                        </p>

                        <button className="app-page-el-btn" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20have%20an%20App%20Development%20enquiry.', '_blank')}>Talk to App Expert</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="app-page-productivity-section">
                <div className="app-page-prod-container">
                    <div className="app-page-prod-left">
                        <h2 className="app-page-prod-title">Build powerful mobile applications for your business</h2>
                        <p className="app-page-prod-desc">
                            Turn your vision into reality with our end-to-end mobile development services, focusing on performance, scalability, and exceptional user experience.
                        </p>
                        <div className="app-page-prod-buttons">
                            <button className="app-page-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20App%20Development.', '_blank')}>Get started</button>
                            <button className="app-page-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20App%20Development.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="app-page-prod-avatars-box">
                            <div className="app-page-prod-avatars">
                                <img src={avatarTwo} alt="avatar" />
                                <img src={avatarThree} alt="avatar" />
                                <img src={avatarFour} alt="avatar" />
                                <img src={avatarFive} alt="avatar" />
                                <img src={avatarSix} alt="avatar" />
                            </div>
                            <p className="app-page-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="app-page-prod-right">
                        <div className="app-page-prod-timeline">
                            <div className="app-page-timeline-item">
                                <div className="app-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="app-page-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Mapping the user journey and defining key features to ensure mobile success from day one.</p>
                                </div>
                            </div>
                            <div className="app-page-timeline-item">
                                <div className="app-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="app-page-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Designing intuitive mobile interfaces (UI) and engaging UX experiences that users truly love.</p>
                                </div>
                            </div>
                            <div className="app-page-timeline-item">
                                <div className="app-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="app-page-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Developing a scalable architecture and deployment roadmap for your future-ready application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="app-page-courses-section">
                <div className="app-page-container">

                    <div className="app-page-section-header">
                        <h2 className="app-page-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="app-page-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="app-page-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="app-page-course-card" key={course.id}>

                                <div className="app-page-course-header">
                                    <div className="app-page-course-logo">{course.logo}</div>
                                    <h3 className="app-page-course-title">{course.name}</h3>
                                    <p className="app-page-course-desc">{course.description}</p>
                                </div>

                                <div className="app-page-course-features">
                                    <ul className="app-page-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="app-page-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="app-page-course-details">

                                    <div className="app-page-detail-item">
                                        <div className="app-page-detail-label">Course Code</div>
                                        <div className="app-page-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="app-page-detail-item">
                                        <div className="app-page-detail-label">Duration</div>
                                        <div className="app-page-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="app-page-detail-item">
                                        <div className="app-page-detail-label">Projects</div>
                                        <div className="app-page-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="app-page-mission-section">
                <div className="app-page-mission-container">
                    <div className="app-page-mission-header">
                        {/* <p className="app-page-mission-label">Our Services</p> */}
                        <h2 className="app-page-mission-title">
                            OUR MISSION IS TO MAKE YOUR <span className="app-page-mission-highlight">APPLICATION</span><br />
                            BETTER THROUGH TECHNOLOGY
                        </h2>
                    </div>

                    <div className="app-page-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="app-page-service-card bi-card-variant-1">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">iOS<br />Development</h3>
                                    <p className="app-page-service-card-subtitle">Apple Ecosystem</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Building premium, high-performance native applications for iPhone and iPad using Swift and SwiftUI.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="app-page-service-card bi-card-variant-2">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">Android<br />Apps</h3>
                                    <p className="app-page-service-card-subtitle">Global Reach</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Developing feature-rich native Android applications tailored for the vast and diverse mobile market.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="app-page-service-card bi-card-variant-7">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">Cross<br />Platform</h3>
                                    <p className="app-page-service-card-subtitle">Write Once</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Creating powerful applications for both iOS and Android using frameworks like Flutter and React Native.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="app-page-service-card bi-card-variant-3">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">UI/UX<br />Design</h3>
                                    <p className="app-page-service-card-subtitle">Mobile First</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Designing intuitive, mobile-focused interfaces that ensure a seamless, engaging, and delightful user journey for all your application users across different platforms.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="app-page-service-card bi-card-variant-4">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="app-page-service-card-subtitle">Emotional connect</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Creating a compelling brand narrative through your app that builds deep emotional connections and fosters long-term customer loyalty and engagement.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="app-page-service-card bi-card-variant-5">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">Typography<br />& Voice</h3>
                                    <p className="app-page-service-card-subtitle">Unique message</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Selecting premium fonts and defining a consistent tone of voice that effectively communicates your application's unique message and values to your target audience.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="app-page-service-card bi-card-variant-6">
                            <div className="app-page-card-header">
                                <div className="app-page-card-title-group">
                                    <h3 className="app-page-service-card-title">Market<br />Research</h3>
                                    <p className="app-page-service-card-subtitle">Trend analysis</p>
                                </div>
                                <div className="app-page-card-badge">
                                    <div className="app-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="app-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="app-page-service-card-desc">Analyzing deep market trends and core competitors to ensure your application stands out clearly and dominates its category in today's competitive digital space.</p>
                            <div className="app-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="app-page-agency-section">
                <div className="app-page-agency-container">
                    <div className="app-page-agency-header">
                        <h2 className="app-page-agency-main-title">
                            WE BUILD POWERFUL<br />
                            <span className="app-page-lime-highlight">MOBILE & WEB APPS</span>
                        </h2>
                    </div>

                    <div className="app-page-agency-grid">
                        <div className="app-page-agency-left">
                            <div className="app-page-agency-image-card">
                                <div className="app-page-dot-pattern-circle"></div>
                                <img src={portraitImg} alt="App Developer" className="app-page-portrait-img" />
                                <div className="app-page-exp-badge">
                                    <span className="app-page-exp-number">5+</span>
                                    <span className="app-page-exp-text">Years of<br />Development</span>
                                </div>
                            </div>
                        </div>

                        <div className="app-page-agency-right">
                            <div className="app-page-agency-info-row">
                                <div className="app-page-info-col">
                                    <p className="app-page-info-subtitle">WHO WE ARE</p>
                                    <p className="app-page-info-desc">
                                        We are a passionate team of app developers, UI/UX designers, and tech innovators focused on building scalable mobile and web applications. Our goal is to turn your ideas into high-performance digital products that deliver seamless user experiences.
                                    </p>
                                </div>

                                <div className="app-page-info-features">
                                    <p className="app-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="app-page-features-list">
                                        <li><span className="app-page-check-icon">✓</span> High-Performance App Solutions</li>
                                        <li><span className="app-page-check-icon">✓</span> Expert Developers & Designers</li>
                                        <li><span className="app-page-check-icon">✓</span> 250+ Apps Delivered Successfully</li>
                                        <li><span className="app-page-check-icon">✓</span> 5+ Years of Development Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="app-page-agency-bottom-img-wrap">
                                <div className="app-page-dot-pattern-square"></div>
                                <img src={landscapeImg} alt="App Development Workspace" className="app-page-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="app-page-testimonial-section">
                <div className="app-page-testimonial-container">
                    <p className="app-page-testimonial-label">Testimonial</p>
                    <h2 className="app-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="app-page-testimonial-scroll-wrapper">
                        <div className="app-page-testimonial-scroll-mask-left"></div>
                        <div className="app-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="app-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="app-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="app-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="app-page-testimonial-name">{feedback.name}</h4>
                                    <p className="app-page-testimonial-role">{feedback.role}</p>
                                    <p className="app-page-testimonial-text">{feedback.text}</p>
                                    <div className="app-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="app-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="app-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="app-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            {/* <TSPFFooter /> */}
            <WhiteFooter />

            <BackToTop />
        </div>
    );
};

export default AppDevelopment;
