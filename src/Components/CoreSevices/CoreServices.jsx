import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import './CoreServices.css';

import designingImg from '../../assets/core_services/designing.png';
import developmentImg from '../../assets/core_services/development.png';
import saasImg from '../../assets/core_services/saas.png';
import brandingImg from '../../assets/brandinganddesignkit.png';
import analyticsImg from '../../assets/Data-Analytics.png';
import aiProductImg from '../../assets/Ai-Products.png';

const brandingIcon = "";
const developmentIcon = "";
const marketingIcon = "";
const aiIcon = "";
const educationIcon = "";

const CoreServices = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const minIndex = 1;
  const maxIndex = 3; // services.length - 3 (6 - 3 = 3) for 4 visible cards

  const services = [
    {
      id: 1,
      title: "Designing",
      description: "Crafting memorable brand identities that resonate with your audience and drive business growth through strategic design thinking.",
      icon: brandingIcon,
      background: designingImg,
      features: ["Logo & Identity", "Brand Strategy", "UI/UX Design", "Visual Systems"],
      color: "#18181A",
      route: '/marketingPage'
    },
    {
      id: 2,
      title: "Development",
      description: "Building cutting-edge digital experiences with robust, scalable solutions that perform across all platforms and devices.",
      icon: developmentIcon,
      background: developmentImg,
      features: ["Web Development", "Mobile Apps", "E-commerce", "Progressive Web Apps"],
      color: "#6D28D9",
      route: '/developmentPage'
    },
    {
      id: 3,
      title: "SAAS",
      description: "Building scalable, multi-tenant software solutions that empower businesses to deliver high-quality digital services at scale.",
      icon: marketingIcon,
      background: saasImg,
      features: ["Multi-tenancy", "Scalable Cloud", "API Management", "Enterprise Security"],
      color: "#18181A",
      route: '/saasPage'
    },
    {
      id: 4,
      title: "Branding",
      description: "Empowering teams and individuals with cutting-edge skills and knowledge through comprehensive training programs.",
      icon: educationIcon,
      background: brandingImg,
      features: ["Corporate Training", "Branding", "UI Designs", "Label design"],
      color: "#6D28D9",
      route: '/brandingPage'
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Transforming Ideas into Powerful Mobile Experiences.",
      icon: aiIcon,
      background: analyticsImg,
      features: ["Api Integration", "cross paltform support", "personalization", "Data Encryption"],
      color: "#18181A",
      route: '/mobileApplicationsPage'
    },
    {
      id: 6,
      title: "AI Product",
      description: "Developing intelligent solutions that automate processes, improve decision-making, and drive innovation.",
      icon: aiIcon,
      background: aiProductImg,
      features: ["Machine Learning", "NLP", "Predictive Analytics", "Process Automation"],
      color: "#6D28D9",
      route: '/aiProductPage'
    }
  ];

  useEffect(() => {
    let interval;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? minIndex : prevIndex + 1
        );
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex >= maxIndex ? minIndex : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex <= minIndex ? maxIndex : currentIndex - 1);
  };

  const goToSlide = (index) => {
    let target = Math.max(minIndex, Math.min(index, maxIndex));
    setCurrentIndex(target);
  };

  const handleServiceClick = (route) => {
    navigate(route);
  };

  return (
    <section
      id="CoreServices"
      className="services-carousel-section"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="carousel-main-container">
        {/* Header */}
        <div className="carousel-header">
          <div className="header-top-row">
            <h2 className="carousel-title">Our Works</h2>
            <p className="carousel-subtitle">
              Explore our recent portfolio showcasing the successful works for our client.
            </p>
          </div>
        </div>

        {/* Carousel */}
        <div className="carousel-full-wrapper">
          <div className="carousel-controls-top">
            <button className="carousel-btn" onClick={prevSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="carousel-btn" onClick={nextSlide}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>

          <div className="carousel-full-container">
            <div
              className="carousel-track"
              style={{
                '--current-index': currentIndex,
                '--slide-count': services.length
              }}
            >
              {services.map((service, index) => {
                const isCenter = index === currentIndex;
                return (
                  <div
                    key={service.id}
                    className={`carousel-slide ${isCenter ? 'center-card' : 'side-card'}`}
                    onClick={() => handleServiceClick(service.route)}
                  >
                    <div
                      className="slide-bg-image"
                      style={{ backgroundImage: `url(${service.background})` }}
                    ></div>

                    <div className="slide-wrapper">
                      <div
                        className="slide-content"
                        style={{
                          '--card-bg': service.color,
                        }}
                      >
                        <div className="card-ui-header">
                          <h3 className="card-ui-title">{service.title}</h3>
                        </div>

                        <div className="card-mockup-area">
                          <div
                            className="mockup-bg"
                            style={{ backgroundImage: `url(${service.background})` }}
                          ></div>
                        </div>
                      </div>

                      <div className="card-ui-action">
                        <div className="action-circle" style={{
                          backgroundColor: (service.id === 2 || service.id === 4 || service.id === 6) ? '#C0FF2D' : 'white',
                        }}>
                          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M7 17L17 7M17 7H7M17 7V17"
                              stroke="black"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Indicators */}
          <div className="color-dots-indicators">
            {services.map((service, index) => (
              <button
                key={index}
                className={`color-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                style={{
                  backgroundColor: service.color
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;