import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './BrandingAndIdentity.css';
// import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

import brandStrategyImg from '../../../assets/Service images/branding/branding stratgey.png';
import brandNaming from '../../../assets/Service images/branding/brand naming.png';
import brandIdentityImg from '../../../assets/Service images/branding/brand identity design.png';
import logoDesignImg from '../../../assets/Service images/branding/logo design.png';
import brandGuidelinesImg from '../../../assets/Service images/branding/brand guidelines.png';
import marketingAssetsImg from '../../../assets/Service images/branding/business and marketing assets.png';
import socialBrandingImg from '../../../assets/Service images/branding/social media branding.png';
import rebrandingServicesImg from '../../../assets/Service images/branding/rebranding service.png';
import colorPaletteImg from '../../../assets/services/color_palette.png';
import typographyImg from '../../../assets/services/typography.png';
import visualStyleImg from '../../../assets/services/visual_style.png';
import environmentImg from '../../../assets/services/environmental_branding.png';
import portraitImg from '../../../assets/agency/branding_concept_abstract.png';
import landscapeImg from '../../../assets/agency/landscape.png';
//import customBrandImage from '../../../assets/services/brand_identity_custom.png';
import iphone14Img from '../../../assets/Service images/Branding & identity-Photoroom.png';

import avatarOne from '../../../assets/male_avatar.png';
import avatarTwo from '../../../assets/cartoon_male_1.png';
import avatarThree from '../../../assets/cartoon_female_1.png';
import avatarFour from '../../../assets/cartoon_female_2.png';
import avatarFive from '../../../assets/cartoon_male_2.png';
import avatarSix from '../../../assets/cartoon_female_3.png';
import avatarSeven from '../../../assets/cartoon_male_3.png';
import avatarEight from '../../../assets/female_avatar.png';
// import subFooterOne from '../subFooterOne/NewFooter1';


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
            features: [
                'Core brand purpose & positioning',
                'Target audience & market research',
                'Competitor analysis & differentiation',
                'Brand messaging framework',
                'Long-term growth roadmap',
                'Performance monitoring & adjustment'
            ],
            stats: { val1: '128+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We define your brand\'s core purpose, values, and positioning to create a powerful foundation for growth. Our strategic approach ensures your messaging resonates deeply with your target audience across all channels. We conduct thorough market research to keep your brand ahead of industry trends and competitor moves. Every strategy we build is data-driven and focused on long-term sustainability and market leadership. We provide ongoing support to monitor your brand performance and adjust strategies as market dynamics shift. Our goal is to ensure your brand remains a powerful asset that consistently drives business value and growth.',
            // image: "https://i.pinimg.com/1200x/6f/b0/1a/6fb01adbccd1f7398a2f46bad1ac3a0b.jpg"
            image: brandStrategyImg
        },
        {
            id: 2,
            num: '02',
            title: 'Brand Naming',
            icon: '◈',
            short: 'Brand Naming services',
            features: [
                'Creative & memorable name ideation',
                'Linguistic & cultural research',
                'Trademark availability screening',
                'Domain name acquisition support',
                'Brand recall & emotional impact testing',
                'Comprehensive naming frameworks'
            ],
            stats: { val1: '81+', lab1: 'Completed', val2: '6 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'We craft memorable and impactful names that capture the essence of your business and stand out in the market. Our naming process combines creativity with linguistic research to ensure global appeal and trademark availability. We explore cultural nuances and phonetics to ensure your brand name sounds right across different languages and regions. A great name is the first step toward building a brand that people recognize and trust instantly. We ensure your brand name has a strong emotional impact and high recall value among your target demographic. Our exhaustive selection process filters out weak candidates to leave you with only the most compelling and legally sound options.',
            // image: "https://i.pinimg.com/736x/4b/c4/b9/4bc4b96d820ff7392f9c1f8692246cd5.jpg"
            image: brandNaming
        },
        {
            id: 3,
            num: '03',
            title: 'Logo Design',
            icon: '✦',
            short: 'Logo Design services',
            features: [
                'Custom, timeless logo concepts',
                'Mathematical precision & balance',
                'Iterative design process based on feedback',
                'Responsive formats (Favicons to billboards)',
                'Brand personality alignment',
                'Complete asset delivery (Vector & raster)'
            ],
            stats: { val1: '42+', lab1: 'Designs', val2: '4 Weeks', lab2: 'Creative', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We design unique and timeless logos that serve as the distinct visual anchor for your brand identity. Each logo is meticulously crafted to be simple, memorable, and reflective of your brand\'s unique personality. We provide multiple concepts and iterate based on your feedback to ensure the final design perfectly aligns with your vision. Our logos are optimized for all formats, from tiny favicons to massive outdoor billboards and signage. We focus on the mathematical precision and visual balance of every logo to ensure it looks perfect at any size or resolution. Your logo will be a symbol of quality that builds immediate trust and recognition with every person who sees it.',
            // image: "https://i.pinimg.com/736x/35/cd/d2/35cdd2c488ebb6bcf1cba345487303a1.jpg"
            image: logoDesignImg
        },
        {
            id: 4,
            num: '04',
            title: 'Brand Identity Design',
            icon: '◈',
            short: 'Brand Identity Design services',
            features: [
                'Cohesive visual design systems',
                'Custom color palette selection',
                'Typography & font pairing',
                'Imagery & photography styles',
                'Iconography & graphic elements',
                'Cross-platform consistency'
            ],
            stats: { val1: '47+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.7★', lab3: 'Satisfaction' },
            description: 'We create comprehensive visual systems including color palettes, typography, and imagery styles that define your brand. Our holistic design approach ensures a consistent and professional look across every physical and digital touchpoint. We focus on creating a visual language that communicates your brand\'s values without saying a single word. This consistency helps build brand recognition and fosters a deeper connection with your global audience. We carefully select colors and fonts that evoke the right emotions and communicate your brand\'s unique story effectively. This cohesive visual system acts as the silent ambassador for your brand in every market you choose to enter.',
            image: brandIdentityImg
        },
        {
            id: 5,
            num: '05',
            title: 'Brand Guidelines (Brand Book)',
            icon: '✦',
            short: 'Brand Guidelines (Brand Book) services',
            features: [
                'Detailed brand usage manuals',
                'Logo & clear space rules',
                'Color codes (CMYK, RGB, HEX)',
                'Tone of voice & messaging rules',
                'Typography hierarchy',
                'Living documentation for creative teams'
            ],
            stats: { val1: '133+', lab1: 'Completed', val2: '5 Weeks', lab2: 'Avg Speed', val3: '5.0★', lab3: 'Satisfaction' },
            description: 'We develop detailed brand guidelines that serve as the definitive manual for maintaining your brand\'s visual integrity. This brand book ensures that anyone representing your company can deliver a consistent and unified brand experience. Our guidelines cover everything from logo usage and color specifications to tone of voice and photography styles. This comprehensive resource empowers your team to produce high-quality brand assets independently and correctly. This living document evolves with your brand, providing a reliable source of truth for all your creative endeavors and marketing campaigns. It protects your brand equity by ensuring that every piece of content you produce is unmistakably yours and of high quality.',
            image: brandGuidelinesImg
        },
        {
            id: 6,
            num: '06',
            title: 'Business & Marketing Assets',
            icon: '◈',
            short: 'Business & Marketing Assets services',
            features: [
                'Professional business card design',
                'Letterheads & corporate stationery',
                'Brochures & presentation templates',
                'High-end print & paper finish consulting',
                'Sales & event collateral',
                'Conversion-focused marketing materials'
            ],
            stats: { val1: '144+', lab1: 'Completed', val2: '5 Months', lab2: 'Avg Speed', val3: '4.7★', lab3: 'Satisfaction' },
            description: 'We design professional business cards, letterheads, brochures, and marketing collateral that enhance your corporate presence. Our assets are designed to leave a lasting positive impression on your clients and business partners. We pay attention to paper quality, printing techniques, and finishing touches to ensure your physical assets feel as premium as your services. Great design in every touchpoint demonstrates your brand\'s commitment to excellence and professional quality. We leverage modern design trends while respecting timeless principles to ensure your marketing materials never feel outdated or generic. Every asset we produce is a tool designed to convert interest into action and build long-term loyalty with your clients.',
            image: marketingAssetsImg
        },
        {
            id: 7,
            num: '07',
            title: 'Social Media Branding',
            icon: '✦',
            short: 'Social Media Branding services',
            features: [
                'Custom profile & cover graphics',
                'Reusable post & story templates',
                'Cohesive grid & feed curation',
                'Platform-specific asset optimization',
                'Engaging visual content creation',
                'Brand persona consistency online'
            ],
            stats: { val1: '118+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.9★', lab3: 'Satisfaction' },
            description: 'We optimize your brand\'s presence across social platforms with custom profile graphics, post templates, and content styles. Our social branding ensures your business maintains a cohesive and engaging personality in the digital space. We create visually striking templates that make your social media feed look professional and organized while making content creation easy. Engaging social visuals help increase your brand\'s reach and foster an active, loyal community online. We help you maintain a consistent posting schedule by providing easy-to-use design assets that don\'t require advanced technical skills to update. Your brand will stay top-of-mind with a feed that looks curated, intentional, and highly professional at all times.',
            image: socialBrandingImg
        },
        {
            id: 8,
            num: '08',
            title: 'Rebranding Services',
            icon: '◈',
            short: 'Rebranding Services services',
            features: [
                'Brand audit & legacy preservation',
                'Modernized identity & visual refresh',
                'Audience reconnection strategies',
                'Smooth multi-platform transition plan',
                'Internal team alignment & training',
                'Market rollout & launch support'
            ],
            stats: { val1: '90+', lab1: 'Completed', val2: '3 Months', lab2: 'Avg Speed', val3: '4.6★', lab3: 'Satisfaction' },
            description: 'We revitalize existing brands with a fresh perspective, modernizing your identity while preserving your core values. Our rebranding process helps you reconnect with your audience and stay relevant in an evolving market. We manage the entire transition process to ensure your new brand is launched smoothly across all existing platforms and channels. A well-executed rebrand can breathe new life into your business and drive a significant increase in customer interest. We help you navigate the complexities of rebranding to minimize confusion and maximize excitement among your existing customer base. Rebranding is an opportunity to tell a new story and we make sure that story is heard loud and clear by the right people.',
            image: rebrandingServicesImg
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
                                <h2 className="bi-case-title-new" style={{ textTransform: 'uppercase', fontFamily: '"Space Grotesk", sans-serif', fontWeight: 800, fontSize: '28px', color: '#1a1a1a', letterSpacing: '0.5px' }}>ENGINEERING THE<br />FUTURE OF<br />BUSINESS</h2>
                                <div className="bi-play-circle-new" style={{ border: '1px solid #eee' }}>
                                    <span className="bi-play-text-new" style={{ textAlign: 'center', lineHeight: '1.2' }}>Watch<br />Process</span>
                                    <div className="bi-play-icon-new" style={{ background: '#1a1a1a', color: 'white' }}>▶</div>
                                </div>
                            </div>

                            <p className="bi-about-company-desc-new" style={{ color: '#666', fontSize: '15px' }}>
                                We don't just write code; we design ecosystems. Our development philosophy centers on creating scalable, resilient software architectures that grow with your ambitions. From initial agile planning to global cloud deployment, we are your technical partners at every step.
                            </p>

                            <div className="bi-avatars-row-new" style={{ justifyContent: 'space-between', marginTop: '10px', marginBottom: '40px' }}>
                                <div className="bi-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="bi-download-btn-new" style={{ border: '1px solid #eee' }}>
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="bi-performance-card-new" style={{ padding: '0px 10px', background: 'transparent', boxShadow: 'none', maskImage: 'none', WebkitMaskImage: 'none', marginTop: '20px' }}>
                            <div className="bi-perf-header-new" style={{ marginBottom: '30px' }}>
                                <div className="bi-perf-item-new">
                                    <span className="bi-perf-label-new">LOAD TIME</span>
                                    <span className="bi-perf-value-new">1.2s</span>
                                </div>
                                <div className="bi-perf-item-new text-right">
                                    <span className="bi-perf-label-new">THROUGHPUT</span>
                                    <span className="bi-perf-value-bold-new">99.9% ↑</span>
                                </div>
                            </div>
                            <div className="bi-perf-chart-new" style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', height: '35px', justifyContent: 'space-between', padding: '0 5px' }}>
                                {[40, 55, 30, 70, 45, 80, 50, 90, 60, 100, 75, 40, 65, 85, 55, 95, 70, 45, 80, 60, 100, 50, 85, 40, 75, 55, 90, 65, 100, 80, 45, 70].map((h, i) => (
                                    <div key={i} style={{ flex: 1, background: '#3b5bda', height: `${h}%`, borderRadius: '1px' }}></div>
                                ))}
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
                            {/* <div className="bi-detail-icon-wrap">
                                <span className="bi-detail-icon">{brandServices[selectedService].icon}</span>
                            </div> */}
                            <span className="bi-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="bi-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="bi-detail-desc">{brandServices[selectedService].description}</p>
                            {brandServices[selectedService].features && (
                                <ul className="bi-detail-features">
                                    {brandServices[selectedService].features.map((f, fi) => (
                                        <li key={fi} className="bi-detail-feature-item">{f}</li>
                                    ))}
                                </ul>
                            )}
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
                            <button className="bi-detail-cta" onClick={() => window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=engloraytechgroup.com&su=Inquiry regarding ${encodeURIComponent(brandServices[selectedService].title)} service`, '_blank')}>Get Started →</button>
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
                        <img src="/images/branding_identity_graphic.png" alt="Branding & Identity" className="bi-el-img-small-bottom" />



                        <div className="bi-el-badge-volunteer">
                            <span className="bi-el-vol-title">Be Our Volunteer</span>
                            <div className="bi-el-vol-avatars">
                                <img src="https://i.pravatar.cc/100?img=6" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=7" alt="user" />
                                <img src="https://i.pravatar.cc/100?img=8" alt="user" />
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
                                <img src={customBrandImage} alt="Brand Identity Services" className="bi-landscape-img" />
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
            {/* <TSPFFooter /> */}
            {/* <WhiteFooter /> */}
            <BackToTop />
        </div>
    );
};

export default BrandingAndIdentity;

















