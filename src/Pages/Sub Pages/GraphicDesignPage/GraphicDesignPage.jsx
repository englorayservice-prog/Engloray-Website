import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './GraphicDesign.css';
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
const GraphicDesignPage = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [{
        id: 1, num: '01', title: 'Social Media Design Package', icon: '✦', short: 'Social Media Design Package services', stats: { val1: '144+', lab1: 'Designs', val2: '3 Weeks', lab2: 'Creative', val3: '5.0★', lab3: 'Satisfaction' },
        description: 'Social Media Design Package focused solutions provided by A social media design package provides a comprehensive set of branded visual assets tailored to establish a professional and cohesive online presence across multiple platforms like Instagram Facebook LinkedIn and TikTok. These bundles typically include essential elements such as custom profile pictures and high resolution cover photos alongside reusable post templates that ensure consistent typography and color schemes. Modern 2026 packages from providers like Samyak Online or Asset Magnets often incorporate motion graphics and vertical video formats for Reels or Stories to maximize engagement in fast scrolling feeds. By using a unified design system businesses can build instant brand recognition and trust with their target audience while saving significant time on daily content creation. Most agencies also offer tiered options ranging from basic starter sets for small businesses ',
        image: "https://i.pinimg.com/736x/ad/72/ec/ad72ec179f898d99ad2a953f75188a8a.jpg"
    },
    {
        id: 2, num: '02', title: 'Business Branding Kit', icon: '◈', short: 'Business Branding Kit services', stats: { val1: '89+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'A business branding kit serves as a centralized digital hub that stores all the essential visual and strategic assets needed to maintain a consistent professional identity across every customer touchpoint. This comprehensive resource typically includes various versions of the company logo such as primary horizontal and secondary square layouts alongside a defined color palette featuring exact hex codes to ensure accurate reproduction on screens and in print. Modern 2026 kits from platforms like Canva or Adobe Express also house specific typography pairings and curated image libraries that reflect the unique personality and values of the brand. By organizing these elements in a single accessible location businesses can streamline their creative workflows and empower team members or external partners to produce on brand marketing materials quickly without constant supervision. s provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/4b/c4/b9/4bc4b96d820ff7392f9c1f8692246cd5.jpg"
    },
    {
        id: 3, num: '03', title: 'Marketing Design Solution', icon: '✦', short: 'Marketing Design Solution services', stats: { val1: '40+', lab1: 'Designs', val2: '3 Months', lab2: 'Creative', val3: '5.0★', lab3: 'Satisfaction' },
        description: 'Marketing design focuses on creating visual content that drives consumer action and builds brand awareness by blending artistic creativity with strategic business goals. This specialized field involves the production of diverse assets like digital advertisements and email headers alongside physical materials such as brochures or event banners to capture attention in a crowded marketplace. Modern 2026 strategies from top agencies like Pentagram or Sagmeister & Walsh often leverage data driven insights to tailor designs for specific target demographics across platforms like Instagram and LinkedIn. By maintaining a consistent look and feel throughout every promotional campaign a business can establish a recognizable identity that fosters long term customer loyalty and trust. Effective marketing design ultimately transforms complex information into clear and compelling visual stories that motivate people to click and buy or subscribe to a service.Marketing Design Solution focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/f8/bb/26/f8bb26f7387644df73e2660ab988ea81.jpg"
    },
    {
        id: 4, num: '04', title: 'Advertisement Creative Package', icon: '◈', short: 'Advertisement Creative Package services', stats: { val1: '108+', lab1: 'Completed', val2: '5 Months', lab2: 'Avg Speed', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'Ad creative design involves the strategic development of visual and text elements specifically crafted to capture attention and drive conversions across digital platforms like Facebook Instagram and Google. This specialized process combines psychology with graphic design to ensure that every banner video or static image communicates a clear value proposition while aligning with the broader brand identity. Modern 2026 strategies from leading firms like Sociallyin or Disruptive Advertising frequently utilize A/B testing and data analytics to determine which colors layouts and calls to action perform best for specific target audiences. By focusing on high quality visuals and mobile first formatting creators can stop the scroll and encourage users to engage  Ultimately effective ad design serves as the primary bridge between a potential customer and a successful sale by making complex offers feel simple and enticing.Advertisement Creative Package focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/7d/f4/93/7df493e721223104faeb16514118ba91.jpg"
    },
    {
        id: 5, num: '05', title: 'Logo & Identity Design', icon: '✦', short: 'Logo & Identity Design services', stats: { val1: '98+', lab1: 'Designs', val2: '5 Months', lab2: 'Creative', val3: '4.6★', lab3: 'Satisfaction' },
        description: 'Logo & Identity Print design solutions encompass the creation of physical marketing materials that help businesses communicate with their customers through tangible media like brochures and business cards and large scale banners. This specialized field focuses on high resolution graphics  Design focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/61/a2/49/61a2490a11c58c122a1a82dd19e6cb91.jpg"
    },
    {
        id: 6, num: '06', title: 'Corporate Design Package', icon: '◈', short: 'Corporate Design Package services', stats: { val1: '86+', lab1: 'Designs', val2: '6 Months', lab2: 'Creative', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'Corporate Design Package focused solutions provided primary recognizable face of a business across digital and physical platforms. Modern 2026 workflows from top firms like Chermayeff & Geismar & Haviv or Landor extend far beyond a single graphic to include a cohesive set of rules for how a brand should look and feel in every context by Engloray expert team.',
        image: "https://i.pinimg.com/736x/a6/84/65/a684653e07f061b0510381dd79e9ac1d.jpg"
    },
    {
        id: 7, num: '07', title: 'Print Design Solution', icon: '✦', short: 'Print Design Solution services', stats: { val1: '53+', lab1: 'Designs', val2: '2 Months', lab2: 'Creative', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Print design solutions encompass the creation of physical marketing materials that help businesses communicate with their customers through tangible media like brochures and business cards and large scale banners. This specialized field focuses on high resolution graphics and precise color management systems like CMYK to ensure that what appears on a computer screen translates perfectly onto paper or fabric. Modern 2026 workflows from providers like Vistaprint or MOO integrate advanced finishing techniques such as foil stamping and spot UV coating to create premium tactile experiences that digital screens cannot replicate.Print Design Solution focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/c1/af/a2/c1afa29cca2eaf42015a5ccf33c1cf5e.jpg"
    }];

    const pageData = {
        id: 3,
        title: "GRAPHIC DESIGN",
        description: "Visually stunning designs that communicate your brand's unique message.",
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
        <div className="gd-page-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section Rebuild */}
            <section className="gd-page-hero-section-new">
                <div className="gd-page-hero-container-new">

                    {/* Left Panel */}
                    <div className="gd-page-hero-left-new">
                        <h4 className="gd-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="gd-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="gd-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="gd-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="gd-page-hero-buttons-new">
                            <button className="gd-page-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Graphic%20Design.', '_blank')}>GET STARTED</button>
                            <button className="gd-page-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20Graphic%20Design.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="gd-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="gd-page-hero-stats-new">
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">15<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Partners</span>
                            </div>
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">300<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Clients</span>
                            </div>
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">4.9<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats matching the user's request */}
                        <div className="gd-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">40<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Awards</span>
                            </div>
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">500<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Projects</span>
                            </div>
                            <div className="gd-page-stat-item-new">
                                <div className="gd-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="gd-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="gd-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="gd-page-stat-number-new">5<span className="gd-page-stat-dash">+</span></span>
                                </div>
                                <span className="gd-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="gd-page-hero-right-new">
                        <div className="gd-page-right-top-new">
                            {/* <p className="gd-page-case-subtitle-new">Case Examples</p> */}
                            <div className="gd-page-title-play-row">
                                <h2 className="gd-page-case-title-new">About Our<br />company</h2>
                                <div className="gd-page-play-circle-new">
                                    <span className="gd-page-play-text-new">Play</span>
                                    <div className="gd-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="gd-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="gd-page-avatars-row-new">
                                <div className="gd-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="gd-page-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="gd-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>

                            {/* <p className="gd-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results.
                            </p> */}
                        </div>

                        <div className="gd-page-performance-card-new">
                            <div className="gd-page-perf-header-new">
                                <div className="gd-page-perf-item-new">
                                    <span className="gd-page-perf-label-new">PERFORMANCE</span>
                                    <span className="gd-page-perf-value-new">92%</span>
                                </div>
                                <div className="gd-page-perf-item-new text-right">
                                    <span className="gd-page-perf-label-new">RESULTS</span>
                                    <span className="gd-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="gd-page-perf-chart-new">
                                <div className="gd-page-chart-col-new"><div className="gd-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="gd-page-chart-col-new"><div className="gd-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="gd-page-chart-col-new"><div className="gd-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="gd-page-hero-notch-new">
                        <div className="gd-page-bottom-bar-content-new">
                            Our <span className="gd-page-bottom-icon-new">
                                <span className="gd-page-b-icon-blue"></span>
                                <span className="gd-page-b-icon-black"> — </span>
                            </span> services
                        </div>
                    </div> */}
                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="gd-page-about-section-new">
                <div className="gd-page-about-top-notch-content">
                    <span className="gd-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="gd-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="gd-page-about-left-new">
                        <div className="gd-page-about-left-header">
                            <h2 className="gd-page-about-left-title">Why Choose Our<br />Branding & Design?</h2>
                            <p className="gd-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="gd-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="gd-page-service-item-left-about">
                                        <span className="gd-page-service-num-new">{service.num}</span>
                                        <div className="gd-page-service-text-group">
                                            <span className="gd-page-service-name-about">{service.title}</span>
                                            <span className="gd-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="gd-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="gd-page-about-center-new">
                        <div className="gd-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="gd-page-dynamic-img-fade"
                            />
                            <div className="gd-page-about-badge-new">
                                <span className="gd-page-badge-num">50+</span>
                                <span className="gd-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="gd-page-about-right-new">
                        <div className="gd-page-about-detail-panel" key={selectedService}>
                            <div className="gd-page-detail-icon-wrap">
                                <span className="gd-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="gd-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="gd-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="gd-page-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="gd-page-detail-divider" />
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
                            <button className="gd-page-detail-cta" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20get%20started%20with%20ENGLORAY%20on%20Graphic%20Design.', '_blank')}>Get Started →</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="gd-page-elevate-section">
                <div className="gd-page-el-container">
                    <div className="gd-page-el-left">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBbY1vS4rdsAr2h40aFcWFZXQvKkk8yl8eKQ&s" alt="Team large" className="gd-page-el-img-large" />
                        <img src="data:image/jpeg;base64,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tCWrJPgZ82rttP8At26SdccVQXEtJaVcv6feeBqzbfAN50/qjPJdZzWkWnnV94pZ9XrarhzZ2NNl5B5c4xOhrR1cnShpV0qyquGcdGf2HMvRFtH+1Y/bTrjk7RPpJ9PwjlH/AC/f+xbex/oybJE0zUuF3LBag0FNpGG+JcVhJHnqs+UqSnxbfe8jXX/RNonTpbSpZdRLAqCM7zGmJ3ERwqwcpZRaWF1TpUnGTw8lS97Ntr8Q/wDL1xrycuB2d7Szzhax6t2tZgYyHAAO1c6HDONalKThhIkWekKELlTlLCSfHuJKxaEtIZS0phQqdmFDzxw5CprLYWktL2kqMouptw+h8Ow0WXo2UMQig80WWqjxDqzksOT7x0BTKMmhFazWZ5kgqi3mvKaCmQOOcR7qEp08RLjQVzSt7tVKrwsPaU46HtHgm9HXFb4rV9E9r9uWH6q7n9BSx6Gn8IhMpgAyknDAA88dKVvVU02iJfaYsqlvUhGom3FpbH9CU7IOjJ08SeBll7pmVoQKVu0zPIYsK0HLGDx+jriFHW13jOCjvqxbfm7+deuOapy4Eyd7Sf8AUT+o+g7TKtSPNksqhXF4lcyOQxvCDUskW6uadSlqxe00iO5VhABABABABABABABABABABAHIAIAIAIAIA7ABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABABAH/9k=" alt="Team top" className="gd-page-el-img-small-top" />
                        <img src="data:image/jpeg;base64,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" alt="Team bottom" className="gd-page-el-img-small-bottom" />



                        <div className="gd-page-el-badge-volunteer">
                            <span className="gd-page-el-vol-title">Be Our Volunteer</span>
                            <div className="gd-page-el-vol-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <div className="gd-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="gd-page-el-right">
                        <div className="gd-page-el-preheading">About Us</div>
                        <h2 className="gd-page-el-title">Visual Excellence that<br />Speaks Volumes</h2>
                        <p className="gd-page-el-desc">
                            In a world of fleeting attention, great design makes an impact. We create stunning visual layouts and marketing assets tailored to your brand's unique personality.
                        </p>

                        <div className="gd-page-el-stats">
                            <div className="gd-page-el-stat-box">
                                <div className="gd-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10a1 1 0 0 0-1-1h-6.12a1 1 0 0 1-.77-.36l-1.55-1.89a1 1 0 0 0-.77-.36H12a1 1 0 0 1-1-1V3a1 1 0 0 0-1-1H12z"></path><circle cx="8.5" cy="8.5" r="1.5"></circle><circle cx="11.5" cy="11.5" r="1.5"></circle><circle cx="15.5" cy="11.5" r="1.5"></circle><circle cx="18.5" cy="8.5" r="1.5"></circle></svg>
                                </div>
                                <div className="gd-page-el-stat-content">
                                    <span className="gd-page-el-stat-num">300+</span>
                                    <span className="gd-page-el-stat-label">Creative Designs</span>
                                </div>
                            </div>

                            <div className="gd-page-el-stat-box">
                                <div className="gd-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="gd-page-el-stat-content">
                                    <span className="gd-page-el-stat-num">5+ Years</span>
                                    <span className="gd-page-el-stat-label">of expertise</span>
                                </div>
                            </div>
                        </div>

                        <p className="gd-page-el-desc">
                            Whether it's social media content, print materials, or digital ads, we ensure your message is delivered with clarity, style, and professional precision.
                        </p>

                        <button className="gd-page-el-btn" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20discuss%20a%20Graphic%20Design%20project.', '_blank')}>Talk to a Designer</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="gd-page-productivity-section">
                <div className="gd-page-prod-container">
                    <div className="gd-page-prod-left">
                        <h2 className="gd-page-prod-title">Transform your ideas into stunning graphic designs</h2>
                        <p className="gd-page-prod-desc">
                            Our creative team delivers high-impact visual solutions that capture attention and communicate your message effectively across all platforms.
                        </p>
                        <div className="gd-page-prod-buttons">
                            <button className="gd-page-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Graphic%20Design.', '_blank')}>Get started</button>
                            <button className="gd-page-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20Graphic%20Design.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="gd-page-prod-avatars-box">
                            <div className="gd-page-prod-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <img src={avatarFive} alt="user" />
                                <img src={avatarSix} alt="user" />
                            </div>
                            <p className="gd-page-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="gd-page-prod-right">
                        <div className="gd-page-prod-timeline">
                            <div className="gd-page-timeline-item">
                                <div className="gd-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="gd-page-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Researching visual trends and audience preferences to ensure designs hit the mark every time.</p>
                                </div>
                            </div>
                            <div className="gd-page-timeline-item">
                                <div className="gd-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="gd-page-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Creating stunning visual layouts, marketing materials, and digital assets that capture attention.</p>
                                </div>
                            </div>
                            <div className="gd-page-timeline-item">
                                <div className="gd-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="gd-page-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Strategizing the distribution and presentation of high-impact designs for maximum visibility.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="gd-page-courses-section">
                <div className="gd-page-container">

                    <div className="gd-page-section-header">
                        <h2 className="gd-page-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="gd-page-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="gd-page-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="gd-page-course-card" key={course.id}>

                                <div className="gd-page-course-header">
                                    <div className="gd-page-course-logo">{course.logo}</div>
                                    <h3 className="gd-page-course-title">{course.name}</h3>
                                    <p className="gd-page-course-desc">{course.description}</p>
                                </div>

                                <div className="gd-page-course-features">
                                    <ul className="gd-page-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="gd-page-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="gd-page-course-details">

                                    <div className="gd-page-detail-item">
                                        <div className="gd-page-detail-label">Course Code</div>
                                        <div className="gd-page-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="gd-page-detail-item">
                                        <div className="gd-page-detail-label">Duration</div>
                                        <div className="gd-page-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="gd-page-detail-item">
                                        <div className="gd-page-detail-label">Projects</div>
                                        <div className="gd-page-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="gd-page-mission-section">
                <div className="gd-page-mission-container">
                    <div className="gd-page-mission-header">
                        {/* <p className="gd-page-mission-label">Our Services</p> */}
                        <h2 className="gd-page-mission-title">
                            OUR MISSION IS TO MAKE YOUR <span className="gd-page-mission-highlight">DESIGN</span><br />
                            BETTER THROUGH TECHNOLOGY
                        </h2>
                    </div>

                    <div className="gd-page-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="gd-page-service-card bi-card-variant-1">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Logo<br />Design</h3>
                                    <p className="gd-page-service-card-subtitle">Visual Essence</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Crafting unique and memorable logos that capture the soul and core identity of your business while ensuring a timeless appeal for your global audience.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="gd-page-service-card bi-card-variant-2">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Brand<br />Identity</h3>
                                    <p className="gd-page-service-card-subtitle">Cohesive Look</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Developing complete visual systems with custom color palettes and consistent typography that perfectly align with your brand's core values and unique professional message.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="gd-page-service-card bi-card-variant-7">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Print<br />Media</h3>
                                    <p className="gd-page-service-card-subtitle">Tangible Impact</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Designing high-quality brochures, business cards, and creative marketing materials that leave a powerful and tangible impact on your offline customers and clients.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect><rect x="6" y="2" width="12" height="6"></rect></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="gd-page-service-card bi-card-variant-3">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Social<br />Design</h3>
                                    <p className="gd-page-service-card-subtitle">Digital Buzz</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Creating eye-catching social media graphics and custom digital assets that drive viral engagement and consistent business growth across all major social platforms.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="gd-page-service-card bi-card-variant-4">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Brand<br />Storytelling</h3>
                                    <p className="gd-page-service-card-subtitle">Emotional connect</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Creating a compelling brand narrative through your design elements that builds deep emotional connections and fosters long-term customer loyalty and trust.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="gd-page-service-card bi-card-variant-5">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Typography<br />& Voice</h3>
                                    <p className="gd-page-service-card-subtitle">Unique message</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Selecting the perfect fonts and defining a consistent tone of voice that effectively communicates your unique brand message to your target audience globally.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="gd-page-service-card bi-card-variant-6">
                            <div className="gd-page-card-header">
                                <div className="gd-page-card-title-group">
                                    <h3 className="gd-page-service-card-title">Market<br />Research</h3>
                                    <p className="gd-page-service-card-subtitle">Trend analysis</p>
                                </div>
                                <div className="gd-page-card-badge">
                                    <div className="gd-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="gd-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="gd-page-service-card-desc">Analyzing deep design trends and your core competitors to ensure your brand stands out and dominates the competitive digital and physical design space.</p>
                            <div className="gd-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="gd-page-agency-section">
                <div className="gd-page-agency-container">
                    <div className="gd-page-agency-header">
                        {/* <p className="gd-page-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="gd-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="gd-page-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="gd-page-agency-grid">
                        <div className="gd-page-agency-left">
                            <div className="gd-page-agency-image-card">
                                <div className="gd-page-dot-pattern-circle"></div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBvOAifT5Bf5D30qDzAU7hDDSD3JR9eGEK7w&s" alt="Our Expert" className="gd-page-portrait-img" />
                                <div className="gd-page-exp-badge">
                                    <span className="gd-page-exp-number">5+</span>
                                    <span className="gd-page-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="gd-page-agency-right">
                            <div className="gd-page-agency-info-row">
                                <div className="gd-page-info-col">
                                    <p className="gd-page-info-subtitle">WHO WE ARE</p>
                                    <p className="gd-page-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>

                                </div>
                                <div className="gd-page-info-features">
                                    <p className="gd-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="gd-page-features-list">
                                        <li><span className="gd-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="gd-page-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="gd-page-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="gd-page-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="gd-page-agency-bottom-img-wrap">
                                <div className="gd-page-dot-pattern-square"></div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nlqqG03CUhSXRs7lJ27MDNZaOpwSvAEuaA&s" alt="Our Workplace" className="gd-page-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="gd-page-testimonial-section">
                <div className="gd-page-testimonial-container">
                    <p className="gd-page-testimonial-label">Testimonial</p>
                    <h2 className="gd-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="gd-page-testimonial-scroll-wrapper">
                        <div className="gd-page-testimonial-scroll-mask-left"></div>
                        <div className="gd-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="gd-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="gd-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="gd-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="gd-page-testimonial-name">{feedback.name}</h4>
                                    <p className="gd-page-testimonial-role">{feedback.role}</p>
                                    <p className="gd-page-testimonial-text">{feedback.text}</p>
                                    <div className="gd-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="gd-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="gd-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="gd-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            {/* <TSPFFooter /> */}
                        <WhiteFooter />

            <BackToTop />
        </div>
    );
};

export default GraphicDesignPage;
