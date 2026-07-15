import React from 'react';
import HeroSection from '../HeroSection/HeroSection'
import ServicesSection from '../ServiceSection/ServicesSection';
import ProductsSection from '../../Sub Pages/ProductsSection/ProductsSection';
import PortfolioSection from '../PortfolioSection/PortfolioSection';
import TestimonialsSection from '../TestimonailsSection/TestimonialsSection';
import InternshipProgram from '../InternshipProgram/InternshipProgram';
import BenefitsFooter from '../BenfitsFooter/BenifitsFooter';
import TwoLineNavbar from '../../../Components/Navbar/Navbar';
import WhiteFooter from '../../../Components/WhiteFooter/WhiteFooter';

import './TechGroup.css';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import BackToTop from '../../../Components/BackToTop/BackToTop';
import AboutSection from '../AboutSection/About';
import SEOHead from '../../../seo/SEOHead';
import SchemaMarkup from '../../../seo/SchemaMarkup';

const TechGroup = () => {
  return (
    <div className="tech-group-page">
            <SEOHead pageKey="/tech-group" />
            <SchemaMarkup pageKey="/tech-group" />

      <TopNavBar />
      <TwoLineNavbar excludeItems={['works']} />
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <PortfolioSection />
      <AboutSection />
      <TestimonialsSection />
      <InternshipProgram />
      <BenefitsFooter />
      {/* <WhiteFooter /> */}
      <BackToTop />
    </div>
  );
};


export default TechGroup;