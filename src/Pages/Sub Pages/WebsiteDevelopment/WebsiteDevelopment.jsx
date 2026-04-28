import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import './WebsiteDev.css';
import TSPFFooter from '../TechGroupSubPagefooter/TSPFFooter';
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
const WebsiteDevelopment = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [autoSlide, setAutoSlide] = useState(true);
    const [visibleImages, setVisibleImages] = useState([]);
    const [selectedService, setSelectedService] = useState(0);
    const feedbackTrackRef = useRef(null);

    const brandServices = [{
        id: 1, num: '01', title: 'Business Website Development', icon: '✦', short: 'Business Website Development services', stats: { val1: '45+', lab1: 'Deploys', val2: '2 Weeks', lab2: 'Sprints', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Business website development is the strategic process of planning, designing, coding, and maintaining a digital presence tailored to achieve commercial goals, such as generating leads, selling products, and establishing brand credibility. It involves creating a secure, responsive, and user-friendly experience across all devices, often utilizing content management systems (CMS) for flexibility. Key phases include market analysis, wireframing, frontend/backend development, and SEO optimization to ensure high performance and search engine visibility Business Website Development focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/a3/a3/fc/a3a3fcf846518ccede3af2f2867e97f1.jpg"
    },
    {
        id: 2, num: '02', title: 'Corporate Website Development', icon: '◈', short: 'Corporate Website Development services', stats: { val1: '87+', lab1: 'Deploys', val2: '4 Weeks', lab2: 'Sprints', val3: '4.8★', lab3: 'Satisfaction' },
        description: 'Corporate website development creates a professional digital presence to establish brand credibility, engage stakeholders, and drive growth through secure, responsive platforms. The process involves strategic planning, UI/UX design, and coding (front-end/back-end) to integrate content management, search functionality, and secure, high-speed performance, often utilizing CMS platforms Corporate Website Development focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/6e/9a/39/6e9a39ddb69f1f0c6b9871ccedd9f408.jpg"
    },
    {
        id: 3, num: '03', title: 'Portfolio Website Development', icon: '✦', short: 'Portfolio Website Development services', stats: { val1: '145+', lab1: 'Deploys', val2: '3 Months', lab2: 'Sprints', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'A professional portfolio website acts as a digital resume, showcasing your best work, skills, and personal brand to potential employers or clients. Key elements include an engaging hero section, a curated projects gallery, a concise "About Me," and clear contact information. Structure it using HTML, style with CSS/frameworks for a responsive design, and consider using hosting platforms like GitHub Pages, Netlify, or Vercel for deployment Portfolio Website Development focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/93/0a/21/930a21214b7ce191373c77bcdaf57966.jpg"
    },
    {
        id: 4, num: '04', title: 'Landing Page Design', icon: '◈', short: 'Landing Page Design services', stats: { val1: '80+', lab1: 'Designs', val2: '4 Weeks', lab2: 'Creative', val3: '4.5★', lab3: 'Satisfaction' },
        description: 'Landing Page Design Effective landing page development focuses on creating a standalone, distraction-free webpage designed for a single conversion goal, such as capturing leads or driving sales. Unlike a website homepage designed for exploration, a high-converting landing page is "message-matched" to the ad, email, or social media link that brought the user there, providing a cohesive experience. Key elements include a compelling, benefit-driven headline, concise copy, a prominent Call-to-Action (CTA), and social proof, such as testimonials, to build trust focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/1200x/37/9a/05/379a05d6291c820b26ce8db608d6edd6.jpg"
    },
    {
        id: 5, num: '05', title: 'Custom Website Development', icon: '✦', short: 'Custom Website Development services', stats: { val1: '138+', lab1: 'Deploys', val2: '4 Months', lab2: 'Sprints', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'Custom web application development is the process of designing and building software specifically tailored to an organization’s unique workflows, users, and business goals. Unlike off-the-shelf software, which offers a "one-size-fits-all" approach, custom web apps are engineered from the ground up to solve specific, complex problems that generic products cannot address. These applications run in a web browser and do not require local installation, providing seamless accessibility across different devices and platforms. Key advantages of this bespoke approach includeCustom Website Development focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/d8/66/a8/d866a8ec39b5f64f66a7159792b02737.jpg"
    },
    {
        id: 6, num: '06', title: 'Responsive (Mobile-Friendly) Design', icon: '◈', short: 'Responsive (Mobile-Friendly) Design services', stats: { val1: '143+', lab1: 'Designs', val2: '6 Weeks', lab2: 'Creative', val3: '4.9★', lab3: 'Satisfaction' },
        description: 'Responsive (Mobile-Friendly) Responsive (mobile-friendly) design ensures websites automatically adapt to any screen size—from smartphones to desktops—by using flexible grids, layouts, and CSS media queries. It improves user experience through touch-friendly elements, fast loading, and readable text. Key techniques include implementing a viewport meta tag and prioritizing mobile-first layouts Design focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/736x/94/a4/0f/94a40fcad366c4f7ccd5a1bf535cd3f5.jpg"
    },
    {
        id: 7, num: '07', title: 'SEO-Friendly Website Structure', icon: '✦', short: 'SEO-Friendly Website Structure services', stats: { val1: '75+', lab1: 'Completed', val2: '6 Months', lab2: 'Avg Speed', val3: '4.7★', lab3: 'Satisfaction' },
        description: 'An SEO-friendly website structure uses a flat, hierarchical model—ideally mapping to a "pyramid structure"—where the homepage links to categories, and categories link to subcategories and individual pages. Key principles include keeping content within 3-4 clicks of the homepage, using descriptive URL structures, and creating intuitive navigation to enhance crawling and user experience.  SEO-Friendly Website Structure focused solutions provided by Engloray expert team.',
        image: "https://i.pinimg.com/1200x/c3/6d/53/c36d53e3a03d1f0d943bec19c19ed73f.jpg"
    }];

    const pageData = {
        id: 3,
        title: "WEBSITE DEVELOPMENT",
        description: "Create intuitive, responsive, and high-performance websites optimized for all modern devices.",
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
        <div className="web-page-page">
            <TopNavBar />
            <Navbar />
            {/* Hero Section */}
            <section className="web-page-hero-section-new">
                <div className="web-page-hero-container-new">

                    {/* LEFT PANEL */}
                    <div className="web-page-hero-left-new">
                        <h4 className="web-page-hero-subtitle-new">WE ARE ENGLORAY</h4>
                        <h1 className="web-page-hero-title-new">{pageData.title}</h1>
                        <h1 className="web-page-hero-title-desc-new">
                            <img
                                src={iphone14Img}
                                alt="Engloray Branding iPhone Mockup"
                                className="web-page-hero-iphone14-img"
                                style={{ maxWidth: "55%", height: "20%" }}
                            />
                        </h1>

                        <div className="web-page-hero-buttons-new">
                            <button className="web-page-btn-get-started-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Website%20Development.', '_blank')}>GET STARTED</button>
                            <button className="web-page-btn-contact-us-new" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20want%20to%20contact%20ENGLORAY%20about%20Website%20Development.', '_blank')}>CONTACT US</button>
                        </div>

                        <p className="web-page-hero-desc-new">
                            {pageData.fullDescription}
                        </p>

                        <div className="web-page-hero-stats-new">
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-blue" strokeDasharray="15, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">15<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Partners</span>
                            </div>
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-green" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">300<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Clients</span>
                            </div>
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-gray" strokeDasharray="98, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">4.9<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Rating</span>
                            </div>
                        </div>

                        {/* Second row of stats */}
                        <div className="web-page-hero-stats-new" style={{ marginTop: '30px' }}>
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-blue" strokeDasharray="40, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">40<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Awards</span>
                            </div>
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-green" strokeDasharray="80, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">500<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Projects</span>
                            </div>
                            <div className="web-page-stat-item-new">
                                <div className="web-page-stat-circle-new">
                                    <svg viewBox="0 0 36 36"><path className="web-page-circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /><path className="web-page-circle-val bi-circle-gray" strokeDasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" /></svg>
                                    <span className="web-page-stat-number-new">5<span className="web-page-stat-dash">+</span></span>
                                </div>
                                <span className="web-page-stat-label-new">Years</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT PANEL */}
                    <div className="web-page-hero-right-new">
                        <div className="web-page-right-top-new">
                            <div className="web-page-title-play-row">
                                <h2 className="web-page-case-title-new">About Our<br />company</h2>
                                <div className="web-page-play-circle-new">
                                    <span className="web-page-play-text-new">Play</span>
                                    <div className="web-page-play-icon-new">▶</div>
                                </div>
                            </div>

                            <p className="web-page-about-company-desc-new">
                                We deliver innovative digital solutions that help businesses grow faster, improve performance, and create impactful user experiences. Our team focuses on quality, creativity, and measurable results. We take pride in building robust, lasting brand identities that deeply resonate with your target audience and help you maintain a competitive edge.
                            </p>

                            <div className="web-page-avatars-row-new">
                                <div className="web-page-avatar-icon-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#555" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"></circle><polyline points="12 8 12 12 14 14"></polyline></svg>
                                </div>
                                <div className="web-page-avatar-group-new">
                                    <img src={avatarTwo} alt="avatar" />
                                    <img src={avatarThree} alt="avatar" />
                                    <img src={avatarFour} alt="avatar" />
                                </div>
                                <div className="web-page-download-btn-new">
                                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="#1a1a1a" strokeWidth="2" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                </div>
                            </div>
                        </div>

                        <div className="web-page-performance-card-new">
                            <div className="web-page-perf-header-new">
                                <div className="web-page-perf-item-new">
                                    <span className="web-page-perf-label-new">PERFORMANCE</span>
                                    <span className="web-page-perf-value-new">92%</span>
                                </div>
                                <div className="web-page-perf-item-new text-right">
                                    <span className="web-page-perf-label-new">RESULTS</span>
                                    <span className="web-page-perf-value-bold-new">98% ↑</span>
                                </div>
                            </div>
                            <div className="web-page-perf-chart-new">
                                <div className="web-page-chart-col-new"><div className="web-page-bar-green-new" style={{ height: '35%' }}></div></div>
                                <div className="web-page-chart-col-new"><div className="web-page-bar-gray-new" style={{ height: '60%' }}></div></div>
                                <div className="web-page-chart-col-new"><div className="web-page-bar-blue-new" style={{ height: '80%' }}></div></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* About Section - Interactive Service Detail Panel */}
            <section className="web-page-about-section-new">
                <div className="web-page-about-top-notch-content">
                    <span className="web-page-about-left-tag">OUR SERVICES</span>
                </div>
                <div className="web-page-about-inner-new">

                    {/* Left: Clickable Service List */}
                    <div className="web-page-about-left-new">
                        <div className="web-page-about-left-header">
                            <h2 className="web-page-about-left-title">Why Choose Our<br />Website</h2>
                            <p className="web-page-about-intro-new">
                                Click any service below to explore what we offer.
                            </p>
                        </div>

                        <div className="web-page-about-services-list-new">
                            {brandServices.map((service, i) => (
                                <div
                                    key={service.id}
                                    className={`bi-about-service-item-new ${selectedService === i ? 'bi-service-active' : ''}`}
                                    onClick={() => setSelectedService(i)}
                                >
                                    <div className="web-page-service-item-left-about">
                                        <span className="web-page-service-num-new">{service.num}</span>
                                        <div className="web-page-service-text-group">
                                            <span className="web-page-service-name-about">{service.title}</span>
                                            <span className="web-page-service-short-about">{service.short}</span>
                                        </div>
                                    </div>
                                    <span className="web-page-service-arrow-about">{selectedService === i ? '↘' : '→'}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Center: Main Image */}
                    <div className="web-page-about-center-new">
                        <div className="web-page-about-img-wrap-new">
                            <img
                                key={selectedService}
                                src={brandServices[selectedService].image}
                                alt={brandServices[selectedService].title}
                                className="web-page-dynamic-img-fade"
                            />
                            <div className="web-page-about-badge-new">
                                <span className="web-page-badge-num">50+</span>
                                <span className="web-page-badge-label">Expert<br />Designers</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Detail Panel - pops content when service is clicked */}
                    <div className="web-page-about-right-new">
                        <div className="web-page-about-detail-panel" key={selectedService}>
                            <div className="web-page-detail-icon-wrap">
                                <span className="web-page-detail-icon">{brandServices[selectedService].icon}</span>
                            </div>
                            <span className="web-page-detail-num">{brandServices[selectedService].num}</span>
                            <h3 className="web-page-detail-title">{brandServices[selectedService].title}</h3>
                            <p className="web-page-detail-desc">{brandServices[selectedService].description}</p>
                            <div className="web-page-detail-divider" />
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
                            <button className="web-page-detail-cta" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20get%20started%20with%20ENGLORAY%20on%20Website%20Development.', '_blank')}>Get Started →</button>
                        </div>
                    </div>


                </div>
            </section>

            {/* Elevate Brand About Section */}
            <section className="web-page-elevate-section">
                <div className="web-page-el-container">
                    <div className="web-page-el-left">
                        <img src="data:image/jpeg;base64,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" alt="Team large" className="web-page-el-img-large" />
                        <img src="data:image/jpeg;base64,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" alt="Team top" className="web-page-el-img-small-top" />
                        <img src="data:image/jpeg;base64,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" alt="Team bottom" className="web-page-el-img-small-bottom" />



                        <div className="web-page-el-badge-volunteer">
                            <span className="web-page-el-vol-title">Be Our Volunteer</span>
                            <div className="web-page-el-vol-avatars">
                                <img src={avatarTwo} alt="user" />
                                <img src={avatarThree} alt="user" />
                                <img src={avatarFour} alt="user" />
                                <div className="web-page-el-vol-count">+14</div>
                            </div>
                        </div>
                    </div>
                    <div className="web-page-el-right">
                        <div className="web-page-el-preheading">About Us</div>
                        <h2 className="web-page-el-title">Modern Web Solutions<br />for Your Business</h2>
                        <p className="web-page-el-desc">
                            Your website is your primary digital business card. We design and develop high-performance sites that are optimized for speed, SEO, and visual appeal.
                        </p>

                        <div className="web-page-el-stats">
                            <div className="web-page-el-stat-box">
                                <div className="web-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                                </div>
                                <div className="web-page-el-stat-content">
                                    <span className="web-page-el-stat-num">500+</span>
                                    <span className="web-page-el-stat-label">Websites Launched</span>
                                </div>
                            </div>

                            <div className="web-page-el-stat-box">
                                <div className="web-page-el-stat-icon">
                                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                </div>
                                <div className="web-page-el-stat-content">
                                    <span className="web-page-el-stat-num">5+ Years</span>
                                    <span className="web-page-el-stat-label">Web Innovation</span>
                                </div>
                            </div>
                        </div>

                        <p className="web-page-el-desc">
                            Using modern React frameworks and best practices, we create responsive web experiences that work flawlessly across all modern devices and platforms.
                        </p>

                        <button className="web-page-el-btn" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20am%20interested%20in%20Website%20Development%20services.', '_blank')}>Start Your Website</button>
                    </div>
                </div>
            </section>

            {/* Productivity Integration Section */}
            <section className="web-page-productivity-section">
                <div className="web-page-prod-container">
                    <div className="web-page-prod-left">
                        <h2 className="web-page-prod-title">Create a modern, responsive website that works for you</h2>
                        <p className="web-page-prod-desc">
                            We design and develop fast, secure, and visually appealing websites tailored to your business needs, ensuring a strong and impactful online presence.
                        </p>
                        <div className="web-page-prod-buttons">
                            <button className="web-page-btn-prod-primary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20start%20a%20project%20with%20ENGLORAY%20regarding%20Website%20Development.', '_blank')}>Get started</button>
                            <button className="web-page-btn-prod-secondary" onClick={() => window.open('https://wa.me/916381759909?text=Hello!%20I%20would%20like%20to%20talk%20to%20the%20team%20about%20Website%20Development.', '_blank')}>Talk to our team</button>
                        </div>
                        <div className="web-page-prod-avatars-box">
                            <div className="web-page-prod-avatars">
                                <img src={avatarTwo} alt="avatar" />
                                <img src={avatarThree} alt="avatar" />
                                <img src={avatarFour} alt="avatar" />
                                <img src={avatarFive} alt="avatar" />
                                <img src={avatarSix} alt="avatar" />
                            </div>
                            <p className="web-page-prod-avatar-text">
                                Trusted by global leaders, we help you define<br />
                                your unique position and win hearts!
                            </p>
                        </div>
                    </div>
                    <div className="web-page-prod-right">
                        <div className="web-page-prod-timeline">
                            <div className="web-page-timeline-item">
                                <div className="web-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </div>
                                <div className="web-page-timeline-content">
                                    <h3>STRATEGY</h3>
                                    <p>Defining technical requirements and SEO goals for a dominant and high-converting web presence.</p>
                                </div>
                            </div>
                            <div className="web-page-timeline-item">
                                <div className="web-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.5 1.5"></path><path d="M7 11l5-5"></path></svg>
                                </div>
                                <div className="web-page-timeline-content">
                                    <h3>IDENTITY</h3>
                                    <p>Crafting responsive layouts and custom web designs that turn browser visitors into loyal customers.</p>
                                </div>
                            </div>
                            <div className="web-page-timeline-item">
                                <div className="web-page-timeline-icon">
                                    <svg viewBox="0 0 24 24" width="32" height="32" stroke="#BAFF29" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                                </div>
                                <div className="web-page-timeline-content">
                                    <h3>PLAN</h3>
                                    <p>Building secure, high-performance sites with a clear roadmap for long-term digital growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses */}
            {/* <section className="web-page-courses-section">
                <div className="web-page-container">

                    <div className="web-page-section-header">
                        <h2 className="web-page-section-title1">
                            Internship & Training Programs
                        </h2>
                        <p className="web-page-section-subtitle">
                            Create a powerful and memorable brand identity that communicates your values.
                        </p>
                    </div>

                    <div className="web-page-courses-grid">

                        {internshipCourses.map((course) => (
                            <div className="web-page-course-card" key={course.id}>

                                <div className="web-page-course-header">
                                    <div className="web-page-course-logo">{course.logo}</div>
                                    <h3 className="web-page-course-title">{course.name}</h3>
                                    <p className="web-page-course-desc">{course.description}</p>
                                </div>

                                <div className="web-page-course-features">
                                    <ul className="web-page-features-list">
                                        {course.features.map((feature, index) => (
                                            <li key={index} className="web-page-feature-item">{feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="web-page-course-details">

                                    <div className="web-page-detail-item">
                                        <div className="web-page-detail-label">Course Code</div>
                                        <div className="web-page-detail-value">{course.esc}</div>
                                    </div>

                                    <div className="web-page-detail-item">
                                        <div className="web-page-detail-label">Duration</div>
                                        <div className="web-page-detail-value">{course.duration}</div>
                                    </div>

                                    <div className="web-page-detail-item">
                                        <div className="web-page-detail-label">Projects</div>
                                        <div className="web-page-detail-value">5+</div>
                                    </div>

                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section> */}

            {/* Testimonials */}
            {/* MISSION & SERVICES SECTION */}
            <section className="web-page-mission-section">
                <div className="web-page-mission-container">
                    <div className="web-page-mission-header">
                        {/* <p className="web-page-mission-label">Our Services</p> */}
                        <h2 className="web-page-mission-title">
                            OUR MISSION IS TO MAKE YOUR <span className="web-page-mission-highlight">WEBSITE</span><br />
                            BETTER THROUGH TECHNOLOGY
                        </h2>
                    </div>

                    <div className="web-page-services-grid">
                        {/* Card 1: Logo Design */}
                        <div className="web-page-service-card bi-card-variant-1">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">UI/UX<br />Design</h3>
                                    <p className="web-page-service-card-subtitle">Visual foundation</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Crafting intuitive and engaging user interfaces that prioritize user experience and brand aesthetics.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path></svg>
                            </div>
                        </div>

                        {/* Card 2: Brand Strategy */}
                        <div className="web-page-service-card bi-card-variant-2">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">Frontend<br />Dev</h3>
                                    <p className="web-page-service-card-subtitle">Modern Interface</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Building fast, responsive, and interactive frontend experiences using the latest web technologies.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>
                            </div>
                        </div>

                        {/* Card 3: Brand Audit */}
                        <div className="web-page-service-card bi-card-variant-7">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">Backend<br />Dev</h3>
                                    <p className="web-page-service-card-subtitle">Powering Systems</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.8</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Developing robust and scalable server-side architectures to handle complex business logic and data security.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                        </div>

                        {/* Card 4: Visual Identity */}
                        <div className="web-page-service-card bi-card-variant-3">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">CMS<br />Solutions</h3>
                                    <p className="web-page-service-card-subtitle">Easy Content</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">5.0</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Implementing powerful, user-friendly content management systems that allow you to manage and update your entire website effortlessly and without any technical knowledge.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="110" height="110" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                            </div>
                        </div>

                        {/* Card 5: Brand Storytelling */}
                        <div className="web-page-service-card bi-card-variant-4">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">Performance<br />Fix</h3>
                                    <p className="web-page-service-card-subtitle">Speed Optimize</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.7</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Optimizing your web application for lightning-fast load times, smooth scrolling, and professional performance across all modern mobile and desktop digital devices.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
                            </div>
                        </div>

                        {/* Card 6: Typography & Voice */}
                        <div className="web-page-service-card bi-card-variant-5">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">SEO<br />Strategy</h3>
                                    <p className="web-page-service-card-subtitle">Better Visibility</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.9</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Integrating advanced SEO strategies and technical best practices to improve search engine rankings and drive consistent, high-quality organic traffic growth to your brand.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </div>
                        </div>

                        {/* Card 6: Market Research */}
                        <div className="web-page-service-card bi-card-variant-6">
                            <div className="web-page-card-header">
                                <div className="web-page-card-title-group">
                                    <h3 className="web-page-service-card-title">Maintenance</h3>
                                    <p className="web-page-service-card-subtitle">System Update</p>
                                </div>
                                <div className="web-page-card-badge">
                                    <div className="web-page-badge-icon-bg">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                                    </div>
                                    <span className="web-page-badge-rating">4.6</span>
                                </div>
                            </div>
                            <p className="web-page-service-card-desc">Providing dedicated ongoing support, security monitoring, and regular technical updates to ensure your website remains highly secure, stable, and efficient at all times.</p>
                            <div className="web-page-service-icon-wrap">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUSINESS AGENCY SECTION */}
            <section className="web-page-agency-section">
                <div className="web-page-agency-container">
                    <div className="web-page-agency-header">
                        {/* <p className="web-page-agency-welcome">WELCOME TO ENGLORAY</p> */}
                        <h2 className="web-page-agency-main-title">
                            WE ARE A PROFESSIONAL<br />
                            <span className="web-page-lime-highlight">BUSINESS AGENCY</span>
                        </h2>
                    </div>

                    <div className="web-page-agency-grid">
                        <div className="web-page-agency-left">
                            <div className="web-page-agency-image-card">
                                <div className="web-page-dot-pattern-circle"></div>
                                <img src="data:image/jpeg;base64,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" alt="Our Expert" className="web-page-portrait-img" />
                                <div className="web-page-exp-badge">
                                    <span className="web-page-exp-number">5+</span>
                                    <span className="web-page-exp-text">Years of<br />Experience</span>
                                </div>
                            </div>
                        </div>

                        <div className="web-page-agency-right">
                            <div className="web-page-agency-info-row">
                                <div className="web-page-info-col">
                                    <p className="web-page-info-subtitle">WHO WE ARE</p>
                                    <p className="web-page-info-desc">
                                        We are a dynamic team of thinkers, designers, and developers dedicated to creating brands that leave a lasting impact. Our mission is to empower businesses with strategic design and innovative digital solutions that drive real growth and engagement.
                                    </p>

                                </div>
                                <div className="web-page-info-features">
                                    <p className="web-page-info-subtitle">WHY CHOOSE US</p>
                                    <ul className="web-page-features-list">
                                        <li><span className="web-page-check-icon">✓</span> Top Guaranteed Results</li>
                                        <li><span className="web-page-check-icon">✓</span> Team of Industry Experts</li>
                                        <li><span className="web-page-check-icon">✓</span> 250+ Total Projects Worldwide</li>
                                        <li><span className="web-page-check-icon">✓</span> 5+ Years of Experience</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="web-page-agency-bottom-img-wrap">
                                <div className="web-page-dot-pattern-square"></div>
                                <img src="data:image/jpeg;base64,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" alt="Our Workplace" className="web-page-landscape-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="web-page-testimonial-section">
                <div className="web-page-testimonial-container">
                    <p className="web-page-testimonial-label">Testimonial</p>
                    <h2 className="web-page-testimonial-heading">We Care About Our Customers<br />Experience Too</h2>

                    <div className="web-page-testimonial-scroll-wrapper">
                        <div className="web-page-testimonial-scroll-mask-left"></div>
                        <div className="web-page-testimonial-grid-horizontal">
                            {[...feedbacks, ...feedbacks].map((feedback, index) => (
                                <div className="web-page-testimonial-card-horizontal" key={`${feedback.id}-${index}`}>
                                    <div className="web-page-testimonial-avatar-wrap">
                                        <img src={feedback.photo} alt={feedback.name} className="web-page-testimonial-avatar" />
                                    </div>
                                    <h4 className="web-page-testimonial-name">{feedback.name}</h4>
                                    <p className="web-page-testimonial-role">{feedback.role}</p>
                                    <p className="web-page-testimonial-text">{feedback.text}</p>
                                    <div className="web-page-testimonial-stars">
                                        {Array.from({ length: feedback.stars }).map((_, i) => (
                                            <span key={i} className="web-page-star filled">★</span>
                                        ))}
                                        {Array.from({ length: 5 - feedback.stars }).map((_, i) => (
                                            <span key={i} className="web-page-star">★</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="web-page-testimonial-scroll-mask-right"></div>
                    </div>
                </div>
            </section>
            {/* <TSPFFooter /> */}
            <WhiteFooter />
            <BackToTop />
        </div>
    );
};

export default WebsiteDevelopment;
