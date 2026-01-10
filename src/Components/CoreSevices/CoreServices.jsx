import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketSimple } from '@fortawesome/free-solid-svg-icons';
import './CoreServices.css';

// Import icons
import brandingIcon from '../../assets/branding.png';
import developmentIcon from '../../assets/development';
import marketingIcon from '../../assets/Testing.png';
import aiIcon from '../../assets/ai.png';
import educationIcon from '../../assets/ai.png';


// Import background images
const backgroundImages = {
  branding: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  development: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  marketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80',
  education: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80'
};

const CoreServices = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const services = [
    {
      id: 1,
      title: "Branding & Design",
      description: "Crafting memorable brand identities that resonate with your audience and drive business growth through strategic design thinking.",
      // icon: brandingIcon,
      icon: brandingIcon,
      background: backgroundImages.branding,
      features: ["Logo & Identity", "Brand Strategy", "UI/UX Design", "Visual Systems"],
      color: "#8B5CF6",
      route: '/brandingPage'
    },
    {
      id: 2,
      title: "Web & App Development",
      description: "Building cutting-edge digital experiences with robust, scalable solutions that perform across all platforms and devices.",
      icon: developmentIcon,
      background: backgroundImages.development,
      features: ["Web Development", "Mobile Apps", "E-commerce", "Progressive Web Apps"],
      color: "#EF4444",
      route: '/developmentPage'
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Driving growth through data-driven marketing strategies that increase visibility, engagement, and conversion rates.",
      icon: marketingIcon,
      background: backgroundImages.marketing,
      features: ["SEO & SEM", "Social Media", "Content Strategy", "Analytics"],
      color: "#3B82F6",
      route: '/marketingPage'
    },
    {
      id: 4,
      title: "UI/UX Designs",
      description: "Empowering teams and individuals with cutting-edge skills and knowledge through comprehensive training programs.",
      icon: educationIcon,
      background: backgroundImages.education,
      features: ["Corporate Training", "Branding", "UI Designs", "Label design"],
      color: "#F59E0B",
      route: '/UiUxPage'

    },
    {
      id: 5,
            title: "Mobile Applications",
      description: "Transforming Ideas into Powerful Mobile Experiences.",
      icon: aiIcon,
      background: backgroundImages.ai,
      features: ["Api Integration", "cross paltform support", "personalization", "Data Encryption"],
      color: "#10B981",
      route: '/mobileApplicationsPage'
    }
  ];

 useEffect(() => {
    let interval;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === services.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, services.length]);

  const nextSlide = () => {
    setCurrentIndex(currentIndex === services.length - 1 ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? services.length - 1 : currentIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
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
          <h2 className="carousel-title">
            Why <span className="title-accent">Choose ENGLORAY</span>
          </h2>
          <p className="carousel-subtitle">
            Comprehensive digital solutions that drive transformation and accelerate growth
          </p>
        </div>

        {/* Carousel */}
        <div className="carousel-full-wrapper">
          <div className="carousel-controls-top">
            <button className="carousel-btn" onClick={prevSlide}>←</button>
            <button className="carousel-btn" onClick={nextSlide}>→</button>
          </div>

          <div className="carousel-full-container">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * 100}%)`,
              '--slide-count': services.length  }}
            >
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  className="carousel-slide"
                  onClick={() => handleServiceClick(service.route)}
                >
                  <div 
                    className="slide-bg-image"
                    style={{ backgroundImage: `url(${service.background})` }}
                  ></div>
                  
                  <div className="slide-content">
                    <div className="service-icon-box" style={{ backgroundColor: service.color }}>
                      <img src={service.icon} alt={service.title} className="service-icon" />
                    </div>

                    <div className="service-content">
                      <h3 className="service-title">{service.title}</h3>
                      <p className="service-description">{service.description}</p>

                      <div className="features-grid">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="feature-item">
                            <span className="feature-dot" style={{ backgroundColor: service.color }}></span>
                            <span className="feature-text">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <button 
                        className="service-cta-button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleServiceClick(service.route);
                        }}
                        style={{ backgroundColor: service.color }}
                      >
                        Explore Service →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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