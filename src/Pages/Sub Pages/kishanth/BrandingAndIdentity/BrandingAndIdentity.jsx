import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './BrandingAndIdentity.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';

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
const BrandingAndIdentity = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [
        {
            id: 1,
            num: '01',
            title: 'Brand Strategy',
            icon: '✦',
            short: 'Brand Strategy services',
            stats: { val1: '128+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We define your brand\'s core purpose, values, and positioning to create a powerful foundation for growth. Our strategic approach ensures your messaging resonates deeply with your target audience across all channels. We conduct thorough market research to keep your brand ahead of industry trends and competitor moves. Every strategy we build is data-driven and focused on long-term sustainability and market leadership. We provide ongoing support to monitor your brand performance and adjust strategies as market dynamics shift. Our goal is to ensure your brand remains a powerful asset that consistently drives business value and growth.',
            image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 2,
            num: '02',
            title: 'Brand Naming',
            icon: '◈',
            short: 'Brand Naming services',
            stats: { val1: '81+', lab1: 'Completed', val2: '6 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'We craft memorable and impactful names that capture the essence of your business and stand out in the market. Our naming process combines creativity with linguistic research to ensure global appeal and trademark availability. We explore cultural nuances and phonetics to ensure your brand name sounds right across different languages and regions. A great name is the first step toward building a brand that people recognize and trust instantly. We ensure your brand name has a strong emotional impact and high recall value among your target demographic. Our exhaustive selection process filters out weak candidates to leave you with only the most compelling and legally sound options.',
            image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dc4a7?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 3,
            num: '03',
            title: 'Logo Design',
            icon: '✦',
            short: 'Logo Design services',
            stats: { val1: '42+', lab1: 'Designs', val2: '4 Weeks', lab2: 'Creative', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We design unique and timeless logos that serve as the distinct visual anchor for your brand identity. Each logo is meticulously crafted to be simple, memorable, and reflective of your brand\'s unique personality. We provide multiple concepts and iterate based on your feedback to ensure the final design perfectly aligns with your vision. Our logos are optimized for all formats, from tiny favicons to massive outdoor billboards and signage. We focus on the mathematical precision and visual balance of every logo to ensure it looks perfect at any size or resolution. Your logo will be a symbol of quality that builds immediate trust and recognition with every person who sees it.',
            image: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 4,
            num: '04',
            title: 'Brand Identity Design',
            icon: '◈',
            short: 'Brand Identity Design services',
            stats: { val1: '47+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.7★', lab3: 'Satisfaction' },
            description: 'We create comprehensive visual systems including color palettes, typography, and imagery styles that define your brand. Our holistic design approach ensures a consistent and professional look across every physical and digital touchpoint. We focus on creating a visual language that communicates your brand\'s values without saying a single word. This consistency helps build brand recognition and fosters a deeper connection with your global audience. We carefully select colors and fonts that evoke the right emotions and communicate your brand\'s unique story effectively. This cohesive visual system acts as the silent ambassador for your brand in every market you choose to enter.',
            image: "https://images.unsplash.com/photo-1634942537034-2216ea30948e?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 5,
            num: '05',
            title: 'Brand Guidelines (Brand Book)',
            icon: '✦',
            short: 'Brand Guidelines (Brand Book) services',
            stats: { val1: '133+', lab1: 'Completed', val2: '5 Weeks', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We develop detailed brand guidelines that serve as the definitive manual for maintaining your brand\'s visual integrity. This brand book ensures that anyone representing your company can deliver a consistent and unified brand experience. Our guidelines cover everything from logo usage and color specifications to tone of voice and photography styles. This comprehensive resource empowers your team to produce high-quality brand assets independently and correctly. This living document evolves with your brand, providing a reliable source of truth for all your creative endeavors and marketing campaigns. It protects your brand equity by ensuring that every piece of content you produce is unmistakably yours and of high quality.',
            image: "https://images.unsplash.com/photo-1544391682-445025dc40cd?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 6,
            num: '06',
            title: 'Business & Marketing Assets',
            icon: '◈',
            short: 'Business & Marketing Assets services',
            stats: { val1: '144+', lab1: 'Completed', val2: '5 Months', lab2: 'Avg Speed', val3: '4.7★', lab3: 'Satisfaction' },
            description: 'We design professional business cards, letterheads, brochures, and marketing collateral that enhance your corporate presence. Our assets are designed to leave a lasting positive impression on your clients and business partners. We pay attention to paper quality, printing techniques, and finishing touches to ensure your physical assets feel as premium as your services. Great design in every touchpoint demonstrates your brand\'s commitment to excellence and professional quality. We leverage modern design trends while respecting timeless principles to ensure your marketing materials never feel outdated or generic. Every asset we produce is a tool designed to convert interest into action and build long-term loyalty with your clients.',
            image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 7,
            num: '07',
            title: 'Social Media Branding',
            icon: '✦',
            short: 'Social Media Branding services',
            stats: { val1: '118+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'We optimize your brand\'s presence across social platforms with custom profile graphics, post templates, and content styles. Our social branding ensures your business maintains a cohesive and engaging personality in the digital space. We create visually striking templates that make your social media feed look professional and organized while making content creation easy. Engaging social visuals help increase your brand\'s reach and foster an active, loyal community online. We help you maintain a consistent posting schedule by providing easy-to-use design assets that don\'t require advanced technical skills to update. Your brand will stay top-of-mind with a feed that looks curated, intentional, and highly professional at all times.',
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=95"
        },
        {
            id: 8,
            num: '08',
            title: 'Rebranding Services',
            icon: '◈',
            short: 'Rebranding Services services',
            stats: { val1: '90+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'We revitalize existing brands with a fresh perspective, modernizing your identity while preserving your core values. Our rebranding process helps you reconnect with your audience and stay relevant in an evolving market. We manage the entire transition process to ensure your new brand is launched smoothly across all existing platforms and channels. A well-executed rebrand can breathe new life into your business and drive a significant increase in customer interest. We help you navigate the complexities of rebranding to minimize confusion and maximize excitement among your existing customer base. Rebranding is an opportunity to tell a new story and we make sure that story is heard loud and clear by the right people.',
            image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=95"
        }
    ];

    const pageData = {
        id: 3,
        title: "BRANDING & IDENTITY DESIGN",
        description: "We craft unique visual identities, strategic messaging, and memorable experiences that elevate your business and leave a lasting impression.",
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
            // photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James&backgroundColor=b6e3f4&mouth=smile",/
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
        <div className="bi-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="bi-hero-section-new">
                <div className="bi-hero-container-new">

                    {/* Left Panel */}
                    <div className="bi-hero-left-new">
                        <h4 className="bi-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="bi-hero-title-new">{pageData.title}</h1>
                        <h1 className="bi-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="bi-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="bi-hero-buttons-new">
                            <button className="bi-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Branding%20%26%20Identity.', '_blank')}>GET STARTED</button>
                            <button className="bi-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20Branding%20%26%20Identity.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="bi-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="bi-hero-stats-new">
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">15<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Partners</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">300<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Clients</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">4.9<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="bi-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">40<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Awards</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">500<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Projects</span>
                            </div>
                            <div className="bi-stat-item-new">
                                <div className="bi-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="bi-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="bi-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="bi-stat-number-new">5<span className="bi-stat-dash">+</span></span>
                                </div>
                                <span className="bi-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="bi-hero-right-new">
                        <div className="bi-right-top-new">
                            {/* <p className="bi-case-subtitle-new">Case Examples</p> */}
                            <div className="bi-title-play-row">
                                <h2 className="bi-case-title-new">About Our<br />company</h2>
                                <div className="bi-play-circle-new">
                                    <span className="bi-play-text-new">Play</span>
                                    <div className="bi-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="bi-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="bi-avatars-row-new">
                                <div className="bi-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="bi-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="bi-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="bi-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="bi-performance-card-new">
                            <div className="bi-perf-header-new">
                                <div className="bi-perf-item-new">
                                    <span className="bi-perf-label-new">PERFORMANCE</span>
                                    <span className="bi-perf-value-new">92%</span>
                                </div>
                                <div className="bi-perf-item-new text-right">
                                    <span className="bi-perf-label-new">RESULTS</span>
                                    <span className="bi-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="bi-perf-chart-new">
                                <div className="bi-chart-col-new"><div className="bi-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="bi-chart-col-new"><div className="bi-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="bi-chart-col-new"><div className="bi-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="bi-hero-notch-new">
                        <div className="bi-bottom-bar-content-new">
                            Our <span className="bi-bottom-icon-new">
                                <span className="bi-b-icon-blue"></span>
                                <span className="bi-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="bi-about-section-new">
                <div className="bi-about-top-notch-content">
                    <span className="bi-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="bi-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="bi-about-left-new">
                        <div className="bi-about-left-header">
                            <h2 className="bi-about-left-title">Why Choose Our<br />Branding & Design?</h2>
                            <p className="bi-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="bi-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="bi-service-item-left-about">
                                        <span className="bi-service-num-new">{service.num}</span>
                                        <div className="bi-service-text-group">
                                            <span className="bi-service-name-about">{service.title}</span>
                                            <span className="bi-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="bi-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="bi-about-center-new">
                        <div className="bi-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="bi-dynamic-img-fade"
                            />
                            <div className="bi-about-badge-new">
                                <span className="bi-badge-num">50+</span>
                                <span className="bi-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="bi-about-right-new">
                        <div className="bi-about-detail-panel" key={selectedService}>
                            <div className="bi-detail-icon-wrap">
                                <span className="bi-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="bi-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="bi-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="bi-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="bi-detail-divider" />
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
                            <button className="bi-detail-cta">Get Started →</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="bi-elevate-section">
                <div className="bi-el-container">
                    <div className="bi-el-left">
                        <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Team large" className="bi-el-img-large" />
                        <img src="data:image/jpeg;base64,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" alt="Team top" className="bi-el-img-small-top" />
                        <img src="data:image/jpeg;base64,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" alt="Team bottom" className="bi-el-img-small-bottom" />



                        <div className="bi-el-badge-volunteer">
                            <span className="bi-el-vol-title">Be Our Volunteer</span>
                            <div className="bi-el-vol-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <div className="bi-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="bi-el-right">
                        <div className="bi-el-preheading">About Us</div>
                        <h2 className="bi-el-title">Shape a Brand that<br />Lasts Forever</h2>
                        <p className="bi-el-desc">
                            At the core of every successful business is a compelling brand identity. We craft strategic, visually stunning branding solutions that resonate with your target audience.
                        </p>

                        <div className="bi-el-stats">
                            <div className="bi-el-stat-box">
                                <div className="bi-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#5b58ee" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20v-4"></path></svg>
                                </div>
                                <div className="bi-el-stat-content">
                                    <span className="bi-el-stat-num">250+</span>
                                    <span className="bi-el-stat-label">Projects Delivered</span>
                                </div>
                            </div>

                            <div className="bi-el-stat-box">
                                <div className="bi-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#ffc107" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="bi-el-stat-content">
                                    <span className="bi-el-stat-num">5+ Years</span>
                                    <span className="bi-el-stat-label">Visual Experience</span>
                                </div>
                            </div>
                        </div>

                        <p className="bi-el-desc">
                            From comprehensive market research to pixel-perfect logo design, our team ensures every touchpoint reflects your unique vision and goals.
                        </p>

                        <button className="bi-el-btn" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Branding%20and%20Identity%20services.', '_blank')}>Elevate Your Brand</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="bi-productivity-section">
                <div className="bi-prod-container">
                    <div className="bi-prod-left">
                        <h2 className="bi-prod-title">Elevate your business with a powerful brand identity</h2>
                        <p className="bi-prod-desc">
                            From strategic positioning to visual storytelling, we build a cohesive brand identity that truly resonates with your audience and drives growth in the digital landscape.
                        </p>
                        <div className="bi-prod-buttons">
                            <button className="bi-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Branding%20%26%20Identity.', '_blank')}>Get started</button>
                            <button className="bi-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20Branding%20%26%20Identity.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="bi-prod-avatars-box">
                            <div className="bi-prod-avatars">
                                <img src={avatarTwo} alt="avatar" />
                                <img src={avatarThree} alt="avatar" />
                                <img src={avatarFour} alt="avatar" />
                                <img src={avatarFive} alt="avatar" />
                                <img src={avatarSix} alt="avatar" />
                            </div>
                            <p className="bi-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                    your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="bi-prod-right">
                        <div className="bi-prod-timeline">
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Define brand vision, mission, and precise market positioning to stand out in a crowded market.</p>
                                </div>
                            </div>
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Craft visual foundations, including logos, icons, and typography that represent your brand's soul.</p>
                                </div>
                            </div>
                            <div className="bi-timeline-item">
                                <div className="bi-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="bi-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Develop a compelling narrative and tone of voice that connects emotionally with your audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="bi-courses-section">
                <div className="bi-container">

                    <div className="bi-section-header">
                        <h2 className="bi-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="bi-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="bi-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="bi-course-card" key={course.id}>

                                <div className="bi-course-header">
                                    <div className="bi-course-logo">{course.logo}</div>
                                    <h3 className="bi-course-title">{course.name}</h3>
                                    <p className="bi-course-desc">{course.description}</p>
                                </div>

                                <div className="bi-course-features">
                                    <ul className="bi-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="bi-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bi-course-details">

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Course Code</div>
                                        <div className="bi-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Duration</div>
                                        <div className="bi-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="bi-detail-item">
                                        <div className="bi-detail-label">Projects</div>
                                        <div className="bi-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="bi-mission-section">
                <div className="bi-mission-container">
                    <div className="bi-mission-header">
                        {/* <p className="bi-mission-label">Our Services</p> */}
                        <h2 className="bi-mission-title">
                            OUR MISSION IS TO MAKE YOUR <span className="bi-mission-highlight">BRANDING</span><br />
                            BETTER THROUGH TECHNOLOGY
                        </h2>
                    </div>

                    <div className="bi-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="bi-page-service-card bi-card-variant-1">
                            <div className="bi-page-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-page-service-card-title">Logo<br />Design</h3>
                                    <p className="bi-page-service-card-subtitle">Visual Essence</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Crafting unique and memorable logos that capture the soul and core identity of your business through strategic design and high-end visual concepts.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="bi-page-service-card bi-card-variant-2">
                            <div className="bi-page-card-header">
                                <div className="bi-page-card-title-group">
                                    <h3 className="bi-page-service-card-title">Brand<br />Strategy</h3>
                                    <p className="bi-page-service-card-subtitle">Strategic growth</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Defining your unique purpose, positioning, and personality to resonate deeply with your target audience and drive sustainable long-term business growth.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="bi-page-service-card bi-card-variant-7">
                            <div className="bi-page-card-header">
                                <div className="bi-page-card-title-group">
                                    <h3 className="bi-page-service-card-title">Brand<br />Audit</h3>
                                    <p className="bi-page-service-card-subtitle">Deep Analysis</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Evaluating your brand presence and market position to uncover strategic opportunities for growth and ensure maximum competitive impact in your industry.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="bi-page-service-card bi-card-variant-3">
                            <div className="bi-page-card-header">
                                <div className="bi-page-card-title-group">
                                    <h3 className="bi-page-service-card-title">Visual<br />Identity</h3>
                                    <p className="bi-page-service-card-subtitle">Cohesive system</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Developing complete visual systems with custom palettes, premium typography, and detailed brand guidelines for absolute consistency across all your platforms.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="bi-page-service-card bi-card-variant-4">
                            <div className="bi-page-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-page-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="bi-page-service-card-subtitle">Narrative Art</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Creating compelling brand narratives that build deep emotional connections with your audience and foster enduring loyalty through powerful storytelling.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="bi-page-service-card bi-card-variant-5">
                            <div className="bi-page-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-page-service-card-title">Typography<br />& Voice</h3>
                                    <p className="bi-page-service-card-subtitle">Style Guide</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Selecting perfect fonts and defining a consistent tone of voice that effectively communicates your brand's unique message and professional identity to the world.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 7: Market Research */}
                        <div className="bi-page-service-card bi-card-variant-6">
                            <div className="bi-page-card-header">
                                <div className="bi-card-title-group">
                                    <h3 className="bi-page-service-card-title">Market<br />Research</h3>
                                    <p className="bi-page-service-card-subtitle">Stand Out</p>
                                </div>
                                <div className="bi-page-card-badge">
                                    <div className="bi-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="bi-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="bi-page-service-card-desc">Implementing strategic brand positioning that ensures you dominate your market niche efficiently and stand out clearly from all global and local competitors.</p>
                            <div className="bi-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="bi-agency-section">
                <div className="bi-agency-container">
                    <div className="bi-agency-header">
                        {/* <p className="bi-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="bi-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="bi-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="bi-agency-grid">
                        <div className="bi-agency-left">
                            <div className="bi-agency-image-card">
                                <div className="bi-dot-pattern-circle"></div>
                                <img src={portraitImg} alt="Our Expert" className="bi-portrait-img" />
                                <div className="bi-exp-badge">
                                    <span className="bi-exp-number">5+</span>
                                    <span className="bi-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="bi-agency-right">
                            <div className="bi-agency-info-row">
                                <div className="bi-info-col">
                                    <p className="bi-info-subtitle">WHO WE ARE</p>
                                    <p className="bi-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>
                                </div>
                                <div className="bi-info-features">
                                    <p className="bi-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="bi-features-list">
                                        <li><span className="bi-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="bi-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="bi-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="bi-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="bi-agency-bottom-img-wrap">
                                <div className="bi-dot-pattern-square"></div>
                                <img src={landscapeImg} alt="Our Workplace" className="bi-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bi-testimonial-section">
                <div className="bi-testimonial-container">
                    <p className="bi-testimonial-label">Testimonial</p>
                    <h2 className="bi-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="bi-testimonial-scroll-wrapper">
                        <div className="bi-testimonial-scroll-mask-left"></div>
                        <div className="bi-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="bi-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="bi-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="bi-testimonial-avatar" />
                                    </div>
                                    <h4 className="bi-testimonial-name">{feedback.name}</h4>
                                    <p className="bi-testimonial-role">{feedback.role}</p>
                                    <p className="bi-testimonial-text">{feedback.text}</p>
                                    <div className="bi-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="bi-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="bi-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="bi-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            <TSPFFooter />
            <BackToTop />
        </div>
    );
};

export default BrandingAndIdentity;
