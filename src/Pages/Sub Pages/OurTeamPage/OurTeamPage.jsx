import React, { useState, useEffect, useRef } from 'react';
// import Predictive from '../../../assets/Predictive.jfif';
// import Growth from '../../../assets/Growth.jfif';
// import AI from '../../../assets/AIpowered.jfif';
// import Omni from '../../../assets/Omni.jfif';
import TeamHeroImg from '../../../assets/page_career.jpg';
import BrandingHeroImg from '../../../assets/uiux_hero_1.png';
import Avatar1 from '../../../assets/Gowtham_img.png';
import Avatar2 from '../../../assets/Surya_img.png';
//import Avatar3 from '../../../assets/';
import Avatar4 from '../../../assets/Lily_image.png';
import DigitalSolutionsImg from '../../../assets/Side_img.png';
import uiuxProjectImg from '../../../assets/Makeover_img.jpg';
import gymProjectImg from '../../../assets/Gym_img.jpg';
import jewelleryProjectImg from '../../../assets/Jewellery_img.jpg';
import healthcareProjectImg from '../../../assets/Healthcare_img.jpg';
// import ProjectsBg from '../../../assets/otp-projects-bg.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRobot,
    faShoppingCart,
    faMobileAlt,
    faHospital,
    faUser,
    faUserTie,
    faUserGraduate,
    faClock,
    faUsers,
    faStar,
    faChevronRight,
    faComments,
    faPhone,
    faEnvelope,
    faPaintBrush,
    faLaptopCode,
    faPencilAlt,
    faBriefcase,
    faGraduationCap,
    faGlobe,
    faBrain,
    faRocket,
    faHandshake,
    faArrowRight,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons';
import './OurTeamPage.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import MainPageSubFooter from '../MainPageSubFooter/MainPageSubFooter';

const OurTeamPage = () => {
    // const [projectIndex, setProjectIndex] = useState(0);

    // const nextProject = () => {
    //   setProjectIndex((prev) => (prev + 1) % teamProjects.length);
    // };

    // const prevProject = () => {
    //   setProjectIndex((prev) => (prev - 1 + teamProjects.length) % teamProjects.length);
    // };

    const scrollRef = useRef(null);

    useEffect(() => {
        // const projectTimer = setInterval(() => {
        //   setProjectIndex((prev) => (prev + 1) % teamProjects.length);
        // }, 4000); // Slower interval for readability

        // Automatic vertical scroll for projects
        const autoScrollInterval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 10) {
                    // Reset to top smoothly
                    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    // Scroll down by one card height (approx 200px)
                    scrollRef.current.scrollBy({ top: 220, behavior: 'smooth' });
                }
            }
        }, 3000);

        return () => {
            // clearInterval(projectTimer);
            clearInterval(autoScrollInterval);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Only once on mount to keep regular interval

    // Team Projects
    const teamProjects = [
        {
            id: 1,
            title: 'Ui/Ux Design for Makeover',
            description: 'User Friendly Navigation for booking Appointments',
            icon: <FontAwesomeIcon icon={faRobot} />,
            tags: ['Ui/Ux', 'Branding', 'Designing'],
            completion: '100%',
            color: '#FF6B6B',
            image: uiuxProjectImg
        },
        {
            id: 2,
            title: 'Gym Life',
            description: 'Website To Showcase Gym Facilities And Programs',
            icon: <FontAwesomeIcon icon={faShoppingCart} />,
            tags: ['Next.js', 'Node.js', 'MongoDB', 'Redis'],
            completion: '100%',
            color: '#4ECDC4',
            image: gymProjectImg
        },
        {
            id: 3,
            title: 'Mobile App For Jewellery',
            description: 'Mobile Based Digital System For customers',
            icon: <FontAwesomeIcon icon={faMobileAlt} />,
            tags: ['React Native', 'Kotlin', 'Swift', 'Firebase'],
            completion: '100%',
            color: '#45B7D1',
            image: jewelleryProjectImg
        },
        {
            id: 4,
            title: 'Healthcare App for clinic',
            description: 'Patient Friendly mobile App for booking Appointments',
            icon: <FontAwesomeIcon icon={faHospital} />,
            tags: ['Python', 'PyTorch', 'PostgreSQL', 'Docker'],
            completion: '100%',
            color: '#96CEB4',
            image: healthcareProjectImg
        }
    ];

    // Team Members
    const teamMembers = [
        {
            id: 1,
            name: "Gowtham",
            role: "Founder & Creative Director",
            experience: "2+ Years",
            projects: "36+",
            avatar: "G",
            skills: ["Web Design", "Ui/Ux Design", "Branding", "Designing"],
            color: "#5B63B7",
            quote: "Building intelligent solutions that transform businesses",
            icon: <FontAwesomeIcon icon={faUserTie} />,
            img: Avatar1,
            date: "Apr 01 - 15 min read"
        },
        {
            id: 2,
            name: "Surya",
            role: "Chief Operating Officer",
            experience: "2+ Years",
            projects: "20+",
            avatar: "S",
            skills: ["Team Management", "Ui/Ux", "Coordination", "Photoshop"],
            color: "#FFA62B",
            quote: "Designing experiences that users love",
            icon: <FontAwesomeIcon icon={faUserGraduate} />,
            img: Avatar2,
            date: "Mar 22 - 12 min read"
        },
        // {
        //     id: 3,
        //     name: "Shan",
        //     role: "Marketing Specialist",
        //     experience: "2+ Years",
        //     projects: "27+",
        //     avatar: "L",
        //     skills: ["Leadership", "Digital marketing", "Analytics", "SEO"],
        //     color: "#5B63B7",
        //     quote: "Crafting scalable and efficient solutions",
        //     icon: <FontAwesomeIcon icon={faUser} />,
        //     img: Avatar3,
        //     date: "Feb 14 - 10 min read"
        // },
        {
            id: 4,
            name: "Lilly",
            role: "Lead Designer",
            experience: "3+ Years",
            projects: "42+",
            avatar: "L",
            skills: ["UI/UX", "Visual Arts", "Motion Design"],
            color: "#FFA62B",
            quote: "Creating visual stories that inspire action",
            icon: <FontAwesomeIcon icon={faPaintBrush} />,
            img: Avatar4,
            date: "Jan 10 - 8 min read"
        },
    ];
    //     {
    //         id: 2,
    //         name: "Surya",
    //         role: "Chief Operating Officer",
    //         experience: "2+ Years",
    //         projects: "20+",
    //         avatar: "S",
    //         skills: ["Team Management", "Ui/Ux", "Coordination", "Photoshop"],
    //         color: "#4ECDC4",
    //         quote: "Designing experiences that users love",
    //         icon: <FontAwesomeIcon icon={faUserGraduate} />,
    //         img: "data:image/jpeg;base64,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", /* Futuristic management/data */
    //         date: "Mar 22 - 12 min read"
    //     },
    //     {
    //         id: 3,
    //         name: "Lilly",
    //         role: "Marketing Specialist",
    //         experience: "2+ Years",
    //         projects: "27+",
    //         avatar: "L",
    //         skills: ["Leadership", "Digital marketing", "Analytics", "SEO"],
    //         color: "#45B7D1",
    //         quote: "Crafting scalable and efficient solutions",
    //         icon: <FontAwesomeIcon icon={faUser} />,
    //         img: "data:image/jpeg;base64,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", /* Creative abstract gradient */
    //         date: "Feb 14 - 10 min read"
    //     }
    // ];

    // const totalTeamMembers = 16;

    // Team Timeline
    const teamTimeline = [
        {
            year: 2023,
            quarter: "Phase 1",
            title: "The Beginning",
            description: "ENGLORAY began as a creative design and branding studio, focused on helping local businesses and startups build their visual identity. ",
            members: ["Logo Design", "Branding Systems", "Product & label Design"],
            color: "#FF6B6B",
            side: "left",
            icon: <FontAwesomeIcon icon={faPaintBrush} />
        },
        {
            year: 2024,
            quarter: "Phase 2",
            title: "Growth & Digital Entry",
            description: "As client requirements evolved, ENGLORAY expanded into website design and UI/UX, marking the transition into digital platforms. ",
            members: ["Website Design", "Ui/Ux Design", "Branding for Digital platforms"],
            color: "#4ECDC4",
            side: "right",
            icon: <FontAwesomeIcon icon={faLaptopCode} />
        },
        {
            year: 2024,
            quarter: "Phase 3",
            title: "Ecosystem Expansion",
            description: "Launching Two Divisions : Tech Group & Learning Genration",
            members: ["Tech Group: ", "Corporate Wensites", "UI/Ux Driven Business platforms", "Branding + Digital Integrations",
                "Learning Genration:", "Graphic Design Courses", "UI/Ux Training Programs", "Career Launching Paths"
            ],
            color: "#45B7D1",
            side: "left",
            icon: <FontAwesomeIcon icon={faPencilAlt} />
        },
        {
            year: 2025,
            quarter: "Phase 4",
            title: "Full Service Delivery",
            description: "By 2025, ENGLORAY delivered end-to-end solutions covering branding, technology, and growth",
            members: ["Mobile Applications", "Digital Promotions & Ads", "Software & System Solutions"],
            color: "#96CEB4",
            side: "right",
            icon: <FontAwesomeIcon icon={faBriefcase} />
        },
        {
            year: 2025,
            quarter: "Phase 5",
            title: "The Present",
            description: "A Trusted Creative, Tech & Learning Partner. ",
            members: ["ENGLORAY operates as", "ENGLORAY TECH GROUP:", "Business & Technology ",
                "ENGLORAY LEARNING GENERATION:", "Education & Skills "],
            color: "#372d0aff",
            side: "left",
            icon: <FontAwesomeIcon icon={faGraduationCap} />
        },
        {
            year: 2026,
            quarter: "Phase 6",
            title: "The Future",
            description: "ENGLORAY's future roadmap focuses on growth, innovation, and international expansion",
            members: ["International Client Projects", "AI assisted Branding & designing Systems", "Global Learning Programs and certifications",
                "Advanced Learning Programs", "Scalable Platforms & SaaS products"
            ],
            color: "#DDA0DD",
            side: "right",
            icon: <FontAwesomeIcon icon={faGlobe} />
        }
    ];

    // Team Reviews
    const teamReviews = [
        {
            id: 1,
            name: "Divya",
            location: "MADURAI",
            role: "Bridal Studio",
            review: "The UI/UX design transformed our digital presence. It made our website incredibly intuitive and pleasant for our customers to navigate, resulting in much higher engagement.",
            stars: 5,
            avatar: "https://i.pravatar.cc/150?u=jessica",
            bgColor: "#ffffff"
        },
        {
            id: 2,
            name: "Surya",
            location: "CHENNAI",
            role: "Fitness",
            review: "ENGLORAY clearly understood our brand vision for Gym Life. The new website perfectly represents our gym and has directly helped us double our monthly inquiries.",
            stars: 5,
            avatar: "https://i.pravatar.cc/150?u=heather",
            bgColor: "#ffffff"
        },
        {
            id: 3,
            name: "Arun",
            location: "COIMBATORE",
            role: "Jewellery",
            review: "From concept to delivery, the team was exceptional. The mobile app they developed for Pavizham Jewels has made our daily business operations significantly smoother.",
            stars: 4,
            avatar: "https://i.pravatar.cc/150?u=olivia",
            bgColor: "#ffffff"
        },
        {
            id: 4,
            name: "Dr. Karthik",
            location: "TRICHY",
            role: "Medical",
            review: "The patient management app is a game-changer for our clinic. Booking appointments is now effortless for patients, and the interface is clean and professional.",
            stars: 5,
            avatar: "https://i.pravatar.cc/150?u=olivia",
            bgColor: "#ffffff"
        }
    ];

    // const handleNextReview = () => {
    //   setActiveReview((prev) => (prev + 1) % teamReviews.length);
    // };

    // const handlePrevReview = () => {
    //   setActiveReview((prev) => (prev - 1 + teamReviews.length) % teamReviews.length);
    // };

    // WhatsApp function
    const handleWhatsAppClick = () => {
        const phoneNumber = '+916381759909';
        const message = 'Hello ENGLORAY Team! I would like to discuss a project.';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="otp-page">
            <TopNavBar />
            <TwoLineNavbar />
            {/* Animated Header */}
            <header className="otp-new-header">
                <div className="otp-header-container">

                    <div className="otp-header-top-content">
                        <div className="otp-badge-wrapper">
                            <span className="otp-badge-pill">
                                <span className="otp-badge-tag">New</span>
                                <span className="otp-badge-text">Explore Our Latest Inovations </span>
                                <FontAwesomeIcon icon={faChevronRight} className="otp-badge-arrow" />
                            </span>
                        </div>

                        <h1 className="otp-main-title">
                            <span style={{ fontWeight: "900" }}>OUR TEAM</span> <br />
                            <span className="otp-gradient-text">
                                <span style={{ fontFamily: "'Aclonica', sans-serif" }}>BUILD BETTER BUSINESS</span></span>
                        </h1>

                        <p className="otp-main-subtitle-new">
                            ENGLORAY is trusted by clients, valued by customers, empowering <br />
                            students and suported by a strong Team.
                        </p>
                    </div>

                    <div className="otp-3d-cards-container">
                        {/* Curved Glass Backdrop mimicking the image */}
                        <div className="otp-glass-curve-backdrop"></div>

                        {/* Glowing Floor Spotlight Base */}
                        <div className="otp-glowing-floor-base"></div>

                        {/* Speedy Dashes next to center card */}
                        <div className="otp-speed-lines-left">
                            <span className="otp-speed-line"></span>
                            <span className="otp-speed-line"></span>
                            <span className="otp-speed-line"></span>
                        </div>
                        <div className="otp-speed-lines-right">
                            <span className="otp-speed-line"></span>
                            <span className="otp-speed-line"></span>
                            <span className="otp-speed-line"></span>
                        </div>

                        {/* Left Card — Our Team Related */}
                        <div className="otp-3d-card otp-card-left">
                            <div className="otp-side-section-top">
                                <div className="otp-card-head">
                                    <img src={TeamHeroImg} alt="Our Team" className="otp-side-img" />
                                </div>
                                <p className="otp-side-desc">A passionate team of designers, developers and strategists building digital excellence together.</p>

                                <div className="otp-side-tags">
                                    <span className="otp-mini-tag">#TeamWork</span>
                                    <span className="otp-mini-tag">#Experts</span>
                                    <span className="otp-mini-tag">#Innovation</span>
                                </div>
                            </div>

                            <div className="otp-side-section-bottom">
                                <hr className="otp-side-divider" />
                                <div className="otp-side-platforms">
                                    <FontAwesomeIcon icon={faUsers} /><FontAwesomeIcon icon={faBriefcase} /><FontAwesomeIcon icon={faHandshake} />
                                </div>
                                <p className="otp-side-desc-mini">16+ dedicated team members.</p>
                            </div>
                        </div>

                        {/* Center Card (Main) */}
                        <div className="otp-3d-card otp-card-center">
                            <div className="otp-side-section-top">
                                <div className="otp-card-head">
                                    <img src={BrandingHeroImg} alt="Visionary" className="otp-side-img" />
                                </div>
                                <p className="otp-side-desc">Transforming ideas into stunning visual identities that resonate with your audience.</p>

                                <div className="otp-side-tags">
                                    <span className="otp-mini-tag">#CreativeStrategy</span>
                                    <span className="otp-mini-tag">#Branding</span>
                                    <span className="otp-mini-tag">#UI/UX</span>
                                </div>
                            </div>

                            <div className="otp-side-section-bottom">
                                <hr className="otp-side-divider" />
                                <div className="otp-side-platforms">
                                    <FontAwesomeIcon icon={faPaintBrush} /><FontAwesomeIcon icon={faPencilAlt} /><FontAwesomeIcon icon={faLaptopCode} />
                                </div>
                                <p className="otp-side-desc-mini">Our awesome guests are industry experts.</p>
                            </div>
                        </div>

                        {/* Right Card */}
                        <div className="otp-3d-card otp-card-right">
                            <div className="otp-side-section-top">
                                <div className="otp-card-head">
                                    <img src={DigitalSolutionsImg} alt="Strategy" className="otp-side-img" />
                                </div>
                                <p className="otp-side-desc">Engineering scalable digital solutions that drive growth and business efficiency.</p>

                                <div className="otp-side-tags">
                                    <span className="otp-mini-tag">#TechGroup</span>
                                    <span className="otp-mini-tag">#Systems</span>
                                    <span className="otp-mini-tag">#Growth</span>
                                </div>
                            </div>

                            <div className="otp-side-section-bottom">
                                <hr className="otp-side-divider" />
                                <div className="otp-side-platforms">
                                    <FontAwesomeIcon icon={faGlobe} /><FontAwesomeIcon icon={faRocket} /><FontAwesomeIcon icon={faBrain} />
                                </div>
                                <p className="otp-side-desc-mini">Our awesome guests are industry experts.</p>
                            </div>
                        </div>
                    </div>


                    <div className="otp-slogan-container">
                        <h2 className="otp-slogan-main">Transforming businesses and empowering individuals through innovative digital solutions and education.</h2>
                        <div className="otp-slogan-separator"></div>
                        <p className="otp-slogan-sub">YOUR GATEWAY TO EXCLUSIVE BUSINESS SCALING, TECH SOLUTIONS, AND ELITE CAREER GROWTH.</p>
                        <div className="otp-cta-row">
                            <button className="otp-btn-access-new">
                                <span className="otp-btn-text">Work With US</span> <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                            </button>
                        </div>
                    </div>
                </div>

            </header >

            {/* Main Content */}
            < main className="otp-main-content" >
                {/* Team Stats */}


                {/* Core Team - Redesigned like image */}
                <section className="otp-core-team-redesign">
                    <div className="otp-ct-header-area">
                        <div className="otp-ct-title-section">
                            <h2 className="otp-ct-title-bold">OUR</h2>
                            <h2 className="otp-ct-title-bold"><span className="otp-ct-highlight">CREATIVE</span> TEAM</h2>
                            <p className="otp-ct-desc">
                                Including Designers, Developers, Strategists and Specialists working together to deliver exceptional results. We focus on transforming businesses and empowering individuals through innovative digital solutions.
                            </p>
                        </div>

                    </div>



                    <div className="otp-ct-cards-area">
                        {teamMembers.map((member, index) => {
                            return (
                                <div key={member.id} className="otp-ct-card-new">
                                    <div className="otp-ct-avatar-container">
                                        <img src={member.img} alt={member.name} className="otp-ct-avatar-img" />
                                    </div>
                                    <h3 className="otp-ct-vertical-name">{member.name}</h3>
                                    <div className="otp-ct-member-info">
                                        <h4 className="otp-ct-member-name-text">{member.name}</h4>
                                        <p className="otp-ct-member-role-text">{member.role}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Team Projects - Animative Red Redesign */}
                <section className="otp-projects-red-bento">
                    {/* Header */}
                    <div className="otp-projects-bento-header">
                        <span className="otp-bento-badge">Our Projects</span>
                        <h2 className="otp-bento-title">
                            Our Professional <span className="otp-bento-title-accent"> <br />Amazing Services for Your Business</span>
                        </h2>
                        <p className="otp-bento-desc">
                            Expert-led digital transformation strategies that elevate your brand presence and operational efficiency. We focus on delivering value-driven innovations that resonate with your global audience and future-proof your business model.
                        </p>
                    </div>

                    <div className="otp-projects-bento-grid">
                        {teamProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="otp-bento-card"
                                style={{ '--delay': `${index * 0.2}s` }}
                            >
                                <div className="otp-bento-card-bg"></div>
                                <div className="otp-bento-card-inner">
                                    {/* Single Image at Top */}
                                    <div className="otp-card-single-image" style={{ position: 'relative', marginTop: '-10px', marginLeft: '-10px', marginRight: '-10px', marginBottom: '20px' }}>
                                        <img src={project.image} alt={project.title} style={{ width: '100%', height: '280px', objectFit: 'cover', borderRadius: '12px 12px 0 0', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 30px))', display: 'block' }} />
                                    </div>

                                    {/* Top Bar */}
                                    <div className="otp-bento-top">
                                        <div className="otp-bento-icon">
                                            {project.icon}
                                        </div>
                                        <span className="otp-bento-status">Active</span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="otp-bento-project-title">{project.title}</h3>
                                    <p className="otp-bento-project-desc">{project.description}</p>

                                    {/* Tags */}
                                    <div className="otp-bento-tags">
                                        {project.tags.map((tag, idx) => (
                                            <span key={idx} className="otp-bento-tag">{tag}</span>
                                        ))}
                                    </div>

                                    {/* Progress Line */}
                                    <div className="otp-bento-progress">
                                        <div className="otp-bento-prog-label">
                                            <span>Completion</span>
                                            <span>{project.completion}</span>
                                        </div>
                                        <div className="otp-bento-prog-bar">
                                            <div className="otp-bento-prog-fill" style={{ width: project.completion }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Abstract Quotes ticker */}
                    <div className="otp-bento-ticker">
                        <div className="otp-bento-ticker-track">
                            <span>Building intelligent solutions that transform businesses to stay ahead in the digital landscape.</span>
                            <span>•</span>
                            <span>Designing seamless experiences that users love while maintaining high performance and scale.</span>
                            <span>•</span>
                            <span>Crafting scalable and efficient solutions tailored to the unique needs of your amazing business.</span>
                            <span>•</span>
                            <span>Building intelligent solutions that transform businesses to stay ahead in the digital landscape.</span>
                        </div>
                    </div>
                </section>

                {/* Team Timeline */}
                <section className="otp-section otp-timeline-section">
                    <div className="otp-container">
                        <div className="otp-section-header">
                            <h2 className="otp-section-title">Team Journey</h2>
                            <p className="otp-section-subtitle">Our growth and achievements timeline</p>
                        </div>

                        <div className="otp-timeline-container">
                            {/* Year Headers */}
                            <div className="otp-year-headers">
                                <div className="otp-year-header" style={{ '--year-color': '#FF6B6B' }}>
                                    <h3 className="otp-hexco-text">2023</h3>
                                    <span className="otp-year-label">Foundation</span>
                                </div>
                                <div className="otp-year-header" style={{ '--year-color': '#4ECDC4' }}>
                                    <h3 className="otp-hexco-text">2024</h3>
                                    <span className="otp-year-label">Growth</span>
                                </div>
                            </div>

                            {/* Timeline Center Line */}
                            <div className="otp-timeline-center-line">
                                <div className="otp-timeline-line"></div>
                                <div className="otp-timeline-progress"></div>
                            </div>

                            {/* Timeline Items */}
                            <div className="otp-timeline-items">
                                {teamTimeline.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`otp-timeline-card otp-timeline-${item.side}`}
                                        style={{
                                            '--item-color': item.color,
                                            '--index': index
                                        }}
                                    >
                                        {/* Content Card */}
                                        <div className="otp-timeline-content">
                                            <div className="otp-content-header">
                                                <h3 className="otp-hexco-text otp-timeline-title">{item.title}</h3>
                                                <p className="otp-timeline-description">{item.description}</p>
                                            </div>

                                            {/* Team Members Involved */}
                                            <div className="otp-timeline-team">
                                                <h4 className="otp-team-heading">Key Focus</h4>
                                                <div className="otp-team-list">
                                                    {item.members.map((member, i) => (
                                                        <div key={i} className="otp-team-member">
                                                            <div className="otp-team-dot" style={{ backgroundColor: item.color }}></div>
                                                            <span className="otp-team-name">{member}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Glow Effect */}
                                            <div className="otp-content-glow" style={{ backgroundColor: `${item.color}15` }}></div>
                                        </div>

                                        {/* Center Dot + Year + Phase anchored on the line */}
                                        <div className="otp-timeline-center-anchor">
                                            <div className="otp-timeline-dot" style={{ backgroundColor: item.color }}>
                                                <div className="otp-dot-inner"></div>
                                            </div>
                                            <div className="otp-timeline-dot-label">
                                                <div className="otp-timeline-mobile-year" style={{ color: item.color }}>
                                                    {item.year}
                                                </div>
                                                <div className="otp-quarter-badge" style={{ backgroundColor: item.color }}>
                                                    {item.quarter}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline Navigation */}
                            <div className="otp-timeline-navigation">

                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Reviews — Continuous Downward Scroll */}
                <section className="otp-section otp-reviews-section">

                    {/* Centered Header */}
                    <div className="otp-reviews-centered-header">
                        <span className="otp-reviews-badge">Client Testimonials</span>
                        <h2 className="otp-section-title-reviews-new">CLIENT'S TRUSTED VOICE</h2>
                    </div>

                    {/* Scrolling Cards - centered */}
                    <div className="otp-reviews-marquee-outer">
                        {/* Top fade mask */}
                        <div className="otp-marquee-fade-top"></div>

                        <div className="otp-reviews-marquee-track">
                            {/* Duplicated for seamless infinite loop */}
                            {[...teamReviews, ...teamReviews, ...teamReviews].map((review, index) => {
                                const avatarColors = ['#ffffff', '#1a0a0a', '#ffffff', '#1a0a0a'];
                                const avatarText = ['#dc143c', '#ffffff', '#dc143c', '#ffffff'];
                                const colorIdx = index % teamReviews.length;
                                return (
                                    <div
                                        key={index}
                                        className="otp-stack-card"
                                        style={{
                                            '--card-index': index,
                                            background: 'linear-gradient(135deg, #30040dff 0%, #a30f2d 100%)',
                                        }}
                                    >
                                        <div className="otp-stack-card-header">
                                            <div
                                                className="otp-stack-avatar"
                                                style={{ backgroundColor: avatarColors[colorIdx], color: avatarText[colorIdx] }}
                                            >
                                                {review.name.charAt(0)}
                                            </div>
                                            <div className="otp-stack-meta">
                                                <h4 className="otp-stack-name">{review.name}</h4>
                                                <span className="otp-stack-role">{review.role} · {review.location}</span>
                                            </div>
                                            <div className="otp-stack-stars-badge">
                                                <FontAwesomeIcon icon={faStar} />
                                                <span>{review.stars}/5</span>
                                            </div>
                                        </div>
                                        <p className="otp-stack-review-text">{review.review}</p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Bottom fade mask */}
                        <div className="otp-marquee-fade-bottom"></div>
                    </div>

                </section>

                {/* Contact Section */}
                <section className="otp-section otp-contact-section">
                    <div className="otp-container">
                        <div className="otp-contact-grid">

                            {/* Left Side: Info */}
                            <div className="otp-contact-info">
                                <h2 className="otp-contact-title">Get In Touch</h2>
                                <p className="otp-contact-subtitle">
                                    Our architects are ready to bring your vision to life. Connect with us through your preferred channel.
                                </p>
                            </div>

                            {/* Right Side: Cards */}
                            <div className="otp-contact-cards">

                                {/* Main WhatsApp Card */}
                                <div className="otp-contact-card-main">
                                    <div className="otp-card-header">
                                        <div className="otp-card-header-text">
                                            <span className="otp-card-label">OFFICE HOURS</span>
                                            <h3 className="otp-card-value">Mon - Fri, 9AM - 6PM</h3>
                                        </div>
                                        <div className="otp-card-icon-box">
                                            <FontAwesomeIcon icon={faClock} />
                                        </div>
                                    </div>
                                    <button className="otp-contact-btn-main" onClick={handleWhatsAppClick}>
                                        <FontAwesomeIcon icon={faComments} className="otp-btn-icon" /> Chat on WhatsApp
                                    </button>
                                </div>

                                {/* Small Cards Row */}
                                <div className="otp-contact-cards-row">
                                    <div className="otp-contact-card-small">
                                        <div className="otp-card-icon-box">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="otp-contact-card-small-text">
                                            <h4 className="otp-card-small-title">Email Us</h4>
                                            <p className="otp-card-small-subtitle">engloray@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="otp-contact-card-small">
                                        <div className="otp-card-icon-box">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="otp-contact-card-small-text">
                                            <h4 className="otp-card-small-title">Phone Call</h4>
                                            <p className="otp-card-small-subtitle">+91 638175909</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <MainPageSubFooter />
            <BackToTop />
        </div >
    );
};

export default OurTeamPage;
