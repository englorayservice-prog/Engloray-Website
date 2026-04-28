import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RaymartPage.css';
import RayMartNavbar from '../../../Components/RayMartNavbar/RayMartNavbar';
import TopNavBar from '../../../Components/TopNavbar/TopNavbar';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faFire, faStar, faChartLine, faRobot, faCheck, faWandMagicSparkles, faUsers, faRotateLeft, faShieldHalved, faBriefcase, faHeadset, faNewspaper, faGraduationCap, faChevronRight, faChevronLeft, faEnvelope, faBuilding, faPlus, faHandshake, faCode, faStore, faSearch } from '@fortawesome/free-solid-svg-icons';
import aiProduct01Img from '../../../assets/ai-product-01.png';
import aiProductImg from '../../../assets/ai-product.png';
import brandingDesignKitImg from '../../../assets/brandinganddesignkit.png';
import saasDashboardImg from '../../../assets/allinonesassdashboard.png';
import globalImage from '../../../assets/global-image.png';
import aiDeploymentHubImg from './ai-deployment-hub.png';
import paymentImg from '../../../assets/payment.png';
import socialMediaImg from '../../../assets/social-media.png';
import uiuxDesignKitImg from '../../../assets/uiux_hero_1.png';
import digitalMarketingPackImg from '../../../assets/social-media.png';
import logoDesignImg from '../../../assets/services/logo_design.png';
import raymartHeroBg from '../../../assets/Section.png';
import brandOne from '../../../assets/WEBSITE_IMAGES/Branding & Identity/1.png';
import brandTwo from '../../../assets/WEBSITE_IMAGES/Branding & Identity/2.png';
import brandThree from '../../../assets/WEBSITE_IMAGES/Branding & Identity/3.png';
import brandFour from '../../../assets/WEBSITE_IMAGES/Branding & Identity/4.png';
import webOne from '../../../assets/WEBSITE_IMAGES/website/1.png';
import webTwo from '../../../assets/WEBSITE_IMAGES/website/2.png';
import webThree from '../../../assets/WEBSITE_IMAGES/website/3.png';
import webFour from '../../../assets/WEBSITE_IMAGES/website/4.png';
import devOne from '../../../assets/WEBSITE_IMAGES/development/1.png';
import devTwo from '../../../assets/WEBSITE_IMAGES/development/2.png';
import devThree from '../../../assets/WEBSITE_IMAGES/development/3.png';
import devFour from '../../../assets/WEBSITE_IMAGES/development/4.png';

// RayMart Product Assets from Page Three
import crmOne from '../../../assets/WEBSITE_IMAGES/crm sevices/1.png';
import crmTwo from '../../../assets/WEBSITE_IMAGES/crm sevices/2.png';
import crmThree from '../../../assets/WEBSITE_IMAGES/crm sevices/3.png';
import crmFour from '../../../assets/WEBSITE_IMAGES/crm sevices/4.png';
import erpOne from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/1.png';
import erpTwo from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/2.png';
import erpThree from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/3.png';
import erpFour from '../../../assets/WEBSITE_IMAGES/ERP SOFTWARE/4.png';
import botOne from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/1.png';
import botTwo from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/2.png';
import botThree from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/3.png';
import botFour from '../../../assets/WEBSITE_IMAGES/AI CHATBOT/4.png';
import jobOne from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/1.png';
import jobTwo from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/2.png';
import jobThree from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/3.png';
import jobFour from '../../../assets/WEBSITE_IMAGES/JOB SEEKER HUB/4.png';
import careerOne from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/1.png';
import careerTwo from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/2.png';
import careerThree from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/3.png';
import careerFour from '../../../assets/WEBSITE_IMAGES/LEARNING AND CAREER/4.png';
import saasOne from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/1.png';
import saasTwo from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/2.png';
import saasThree from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/3.png';
import saasFour from '../../../assets/WEBSITE_IMAGES/SAAS PRODUCT/4.png';
import businessOne from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/1.png';
import businessTwo from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/2.png';
import businessThree from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/3.png';
import businessFour from '../../../assets/WEBSITE_IMAGES/BUSINESS AI SUIT/4.png';

// RayMart Service Assets from Page Two
import ecomOne from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/1.png';
import ecomTwo from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/2.png';
import ecomThree from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/3.png';
import ecomFour from '../../../assets/WEBSITE_IMAGES/service 4, e commerce development/4.png';
import appOne from '../../../assets/WEBSITE_IMAGES/service 5, app development/1.png';
import appTwo from '../../../assets/WEBSITE_IMAGES/service 5, app development/2.png';
import appThree from '../../../assets/WEBSITE_IMAGES/service 5, app development/3.png';
import appFour from '../../../assets/WEBSITE_IMAGES/service 5, app development/4.png';
import graphicOne from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/1.png';
import graphicTwo from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/2.png';
import graphicThree from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/3.png';
import graphicFour from '../../../assets/WEBSITE_IMAGES/service 6, GRAPHIC DESING CARD6/4.png';
import uiOne from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/1.png';
import uiTwo from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/2.png';
import uiThree from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/3.png';
import uiFour from '../../../assets/WEBSITE_IMAGES/service 7, UI UX/4.png';
import softOne from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/1.png';
import softTwo from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/2.png';
import softThree from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/3.png';
import softFour from '../../../assets/WEBSITE_IMAGES/service 8, SOFTWERE SOLUTION/4.png';
import dataOne from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/1.png';
import dataTwo from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/2.png';
import dataThree from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/3.png';
import dataFour from '../../../assets/WEBSITE_IMAGES/service 9, DATA ANALYTICS/4.png';
import aiOne from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/1.png';
import aiTwo from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/2.png';
import aiThree from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/3.png';
import aiFour from '../../../assets/WEBSITE_IMAGES/service 10, AI SERVICES/4.png';


/* ─── Mock Data ─────────────────────────────────────────────── */
const raymartSidebarCategories = [
  { id: 1, name: 'Branding', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { id: 2, name: 'SaaS', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg> },
  { id: 3, name: 'UI/UX', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg> },
  { id: 4, name: 'Advertising', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg> },
  { id: 5, name: 'AI Product', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg> },
];

const sectionChartData = {
  Branding: [
    { month: 'Jan', value: 20 }, { month: 'Feb', value: 28 }, { month: 'Mar', value: 35 },
    { month: 'Apr', value: 30 }, { month: 'May', value: 45 }, { month: 'Jun', value: 50 },
    { month: 'Jul', value: 55 }, { month: 'Aug', value: 60 }, { month: 'Sep', value: 58 },
    { month: 'Oct', value: 70 }, { month: 'Nov', value: 78 }, { month: 'Dec', value: 90 },
  ],
  SaaS: [
    { month: 'Jan', value: 15 }, { month: 'Feb', value: 22 }, { month: 'Mar', value: 30 },
    { month: 'Apr', value: 40 }, { month: 'May', value: 48 }, { month: 'Jun', value: 55 },
    { month: 'Jul', value: 60 }, { month: 'Aug', value: 72 }, { month: 'Sep', value: 80 },
    { month: 'Oct', value: 88 }, { month: 'Nov', value: 95 }, { month: 'Dec', value: 110 },
  ],
  'UI/UX': [
    { month: 'Jan', value: 10 }, { month: 'Feb', value: 18 }, { month: 'Mar', value: 25 },
    { month: 'Apr', value: 32 }, { month: 'May', value: 28 }, { month: 'Jun', value: 40 },
    { month: 'Jul', value: 45 }, { month: 'Aug', value: 52 }, { month: 'Sep', value: 48 },
    { month: 'Oct', value: 60 }, { month: 'Nov', value: 68 }, { month: 'Dec', value: 80 },
  ],
  Advertising: [
    { month: 'Jan', value: 30 }, { month: 'Feb', value: 42 }, { month: 'Mar', value: 50 },
    { month: 'Apr', value: 58 }, { month: 'May', value: 65 }, { month: 'Jun', value: 72 },
    { month: 'Jul', value: 68 }, { month: 'Aug', value: 80 }, { month: 'Sep', value: 90 },
    { month: 'Oct', value: 95 }, { month: 'Nov', value: 105 }, { month: 'Dec', value: 120 },
  ],
  'AI Product': [
    { month: 'Jan', value: 25 }, { month: 'Feb', value: 38 }, { month: 'Mar', value: 52 },
    { month: 'Apr', value: 65 }, { month: 'May', value: 80 }, { month: 'Jun', value: 95 },
    { month: 'Jul', value: 110 }, { month: 'Aug', value: 125 }, { month: 'Sep', value: 118 },
    { month: 'Oct', value: 140 }, { month: 'Nov', value: 160 }, { month: 'Dec', value: 185 },
  ],
};

const SalesChart = ({ section }) => {
  const salesData = sectionChartData[section] || sectionChartData['Branding'];
  // If your current state is named something like 'selectedTab' or 'activeTab':


  return (
    <div style={{ background: '#fff', borderRadius: '12px', padding: '14px', height: '100%', width: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', fontWeight: 600, color: '#111', marginBottom: '8px' }}>
        Monthly Sales Growth
      </p>
      <div style={{ flex: 1, minHeight: 0 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={salesData} barSize={8} barCategoryGap="5%" margin={{ top: 0, right: 0, left: 0, bottom: -15 }}>
            <XAxis
              dataKey="month"
              tick={{ fontSize: 7, fill: '#999', fontFamily: "'Poppins', sans-serif" }}
              axisLine={false}
              tickLine={false}
              interval={0}
            />
            <Tooltip
              cursor={false}
              contentStyle={{ fontSize: '10px', fontFamily: "'Poppins', sans-serif", borderRadius: '6px', border: 'none', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
            <Bar dataKey="value" fill="#b0b8c1" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* <div style={{ marginTop: '8px', borderTop: '1px solid #f0f0f0', paddingTop: '8px' }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '22px', fontWeight: 700, color: '#111', margin: 0 }}>25%</p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '10px', color: '#888', margin: 0 }}>Targeted Sales Growth 27%</p>
      </div> */}
    </div>
  );
};

const featuredProducts = [
  { id: 1, name: 'Wireless Headphones', price: '₹2,499', originalPrice: '₹4,999', rating: 4.5, reviews: 1240, badge: 'HOT', color: '#f0f4ff', emoji: '🎧' },
  { id: 2, name: 'Smart Watch Pro', price: '₹8,999', originalPrice: '₹14,999', rating: 4.8, reviews: 860, badge: 'NEW', color: '#f0fff4', emoji: '⌚' },
  { id: 3, name: 'Noise-Cancel Buds', price: '₹1,299', originalPrice: '₹2,499', rating: 4.3, reviews: 2100, badge: 'SALE', color: '#fff7f0', emoji: '🎵' },
  { id: 4, name: 'Gaming Mouse', price: '₹3,199', originalPrice: '₹5,500', rating: 4.7, reviews: 530, badge: 'TOP', color: '#fef0ff', emoji: '🖱️' },
];

const popularBrands = [
  { name: 'Samsung', emoji: '📱' },
  { name: 'Apple', emoji: '🍎' },
  { name: 'Sony', emoji: '🎮' },
  { name: 'Nike', emoji: '👟' },
  { name: 'Adidas', emoji: '🏃' },
  { name: 'LG', emoji: '📺' },
];

const stats = [
  { value: '10M+', label: 'Active Buyers' },
  { value: '170+', label: 'Global Brands' },
  { value: '10%', label: 'Avg. Savings' },
  { value: '₹44B', label: 'Annual GMV' },
];

const needCategories = [
  { name: 'CRM SOLUTIONS', img: crmOne, targetId: 'crm-products' },
  { name: 'WEBSITE DEVELOPMENT', img: softOne, targetId: 'website-development' },
  { name: 'AI CHATBOTS', img: botOne, targetId: 'ai-chatbot-products' },
  { name: 'UI/UX DESIGN', img: uiOne, targetId: 'ui-ux-design' },
  { name: 'SAAS PRODUCTS', img: saasOne, targetId: 'saas-products' },
  { name: 'APP DEVELOPMENT', img: appOne, targetId: 'app-development' },
  { name: 'ERP SOLUTIONS', img: erpOne, targetId: 'erp-products' },
  { name: 'BRANDING & STRATEGY', img: brandingDesignKitImg, targetId: 'branding-identity' },
];

const listings = [
  { id: 1, name: 'Pro Earbuds Max', price: '₹1,899', rating: 4.6, emoji: '🎧', tag: 'Best Seller' },
  { id: 2, name: 'Smart LED Bulb', price: '₹399', rating: 4.2, emoji: '💡', tag: 'Limited' },
  { id: 3, name: 'Yoga Mat Premium', price: '₹799', rating: 4.5, emoji: '🧘', tag: 'Popular' },
  { id: 4, name: 'Coffee Maker Pro', price: '₹3,499', rating: 4.9, emoji: '☕', tag: 'Top Rated' },
  { id: 5, name: 'Running Shoes X', price: '₹2,999', rating: 4.4, emoji: '👟', tag: 'New' },
  { id: 6, name: 'Skincare Kit', price: '₹1,199', rating: 4.7, emoji: '🧴', tag: 'Trending' },
];

const justLandingData = [
  {
    id: 1,
    img: brandingDesignKitImg,
    title: 'How to perfectly align your re-branding strategy for 2025',
    time: '45 Minutes Ago',
    category: 'BRANDING'
  },
  {
    id: 2,
    img: aiDeploymentHubImg,
    title: 'Integrating Next-Gen AI Products into Your SaaS Architecture',
    time: '2 Days Ago',
    category: 'TECHNOLOGY'
  },
  {
    id: 3,
    img: ecomOne,
    title: '10 High-Converting E-Commerce Templates You Need to Try',
    time: '3 Days Ago',
    category: 'E-COMMERCE'
  },
  {
    id: 4,
    img: appOne,
    title: 'The Ultimate Guide to Cross-Platform App Development in 2025',
    time: '1 Week Ago',
    category: 'DEVELOPMENT'
  }
];

const bestSellingData = [
  {
    id: 1,
    stars: 5,
    title: 'Instant delivery and flexible pricing!',
    desc: "I used to have experience buying digital assets on many platforms like Envato, Gumroad, etc.. And see that Raymart really gives a lot for my 1st choice for my shopping experience. Competitive price, instant digital delivery and support in 24/7. Extremely recommended!",
    reviewerName: 'Drake N.',
    reviewerStatus: 'VERIFIED BUYER',
    reviewerDate: 'Apr 23, Los Angeles',
    reviewerImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrakeN',
    productName: 'E-COMMERCE TEMPLATE'
  },
  {
    id: 2,
    stars: 5,
    title: 'Saved us hundreds of hours of design work!',
    desc: "The UI kit is incredibly well-structured with precise design tokens. Our team imported it straight into our SaaS project and hit the ground running. Clean layers, great components, worth every single penny.",
    reviewerName: 'Alex M.',
    reviewerStatus: 'VERIFIED BUYER',
    reviewerDate: 'May 12, London',
    reviewerImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexM',
    productName: 'FIGMA DASHBOARD UI'
  },
  {
    id: 3,
    stars: 5,
    title: 'Flawless long-term execution.',
    desc: "We hired their elite team for ongoing maintenance. They consistently squash bugs before our users even notice them, and their flat monthly rate is the best we've seen on the market.",
    reviewerName: 'Sarah K.',
    reviewerStatus: 'VERIFIED CLIENT',
    reviewerDate: 'Jun 01, Austin',
    reviewerImg: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahK',
    productName: 'APP MAINTENANCE'
  }
];

const helpItems = [
  {
    icon: faNewspaper,
    title: 'Blog',
    desc: 'Get all the marketing and business strategy tips you need to help you run an online business.',
    link: 'Read',
    gradient: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)'
  },
  {
    icon: faGraduationCap,
    title: 'Online Courses',
    desc: 'Learn tried-and-tested business tips with instant access to lessons from successful entrepreneurs.',
    link: 'Learn',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)'
  },
  {
    icon: faUsers,
    title: 'Community',
    desc: 'Connect with a community of brands, partners, and fellow merchants who understand Shopify.',
    link: 'Connect',
    gradient: 'linear-gradient(135deg, #60a5fa 0%, #2563eb 100%)'
  },
  {
    icon: faHeadset,
    title: 'Help Center',
    desc: 'Find answers with a dedicated helpdesk resource of articles and videos from our Support team.',
    link: 'Get help',
    gradient: 'linear-gradient(135deg, #2dd4bf 0%, #0d9488 100%)'
  },
];

/* ─── Star Rating ────────────────────────────────────────────── */
const Stars = ({ rating }) => (
  <span className="rm-stars">
    {[1, 2, 3, 4, 5].map(n => (
      <span key={n} className={n <= Math.round(rating) ? 'rm-star filled' : 'rm-star'}>★</span>
    ))}
  </span>
);

/* ─── Bento Mock Data ─────────────────────────────────────────── */
const bentoData = {
  'Branding': {
    hero: { title: 'Brand Identity\nDesign Kit', subtitle: 'Complete visual identity package\nLogos, colors & typography\nDelivered in 48 Hours', btn: 'GET STARTED', img: brandingDesignKitImg, bg: '#1a1a2e', color: '#fff' },
    tr: { category: 'POPULAR', title: 'Logo\nDesign\nPackage', btn: 'ORDER NOW', img: logoDesignImg, bg: '#fff8f0', color: '#000' },
    br: {
      title: 'BRAND STYLE GUIDE',
      price: '$249',
      img: graphicTwo,
      bg: '#2b2d42',
      color: '#fff',
      badgeIcon: faArrowTrendUp,
      badgeText: 'TRENDING NOW',
      features: ['Logo + Colors + Typography', 'Social Media Kit', 'Brand Guidelines'],
      rating: 4.9,
      reviews: '500+ Brands Built'
    },
    bl1: {
      type: 'chart',
      title: 'Brand Project Sales',
      data: [
        { month: 'Jan', value: 40 }, { month: 'Feb', value: 55 }, { month: 'Mar', value: 48 },
        { month: 'Apr', value: 70 }, { month: 'May', value: 65 }, { month: 'Jun', value: 90 }
      ],
      bg: '#ffffff', color: '#000'
    },
    bl2: {
      title: 'Brand Offers',
      subtitle: 'Premium assets & packages',
      desc: 'Get full identity packs built for your specific target audience.',
      deal: '30% OFF',
      img: graphicThree,
      bg: '#c9ada7', color: '#fff'
    }
  },
  'SaaS': {
    hero: { title: 'All-in-One\nSaaS Dashboard', subtitle: 'Manage users, billing & analytics\nfrom a single control panel\n99.9% Uptime Guaranteed', btn: 'START FREE TRIAL', img: saasDashboardImg, bg: '#0f3460', color: '#fff' },
    tr: { category: 'TRENDING', title: 'CRM Solutions\nHub', btn: 'SEE DEMO', img: crmOne, bg: '#f0f4ff', color: '#000' },
    br: {
      title: 'ENTERPRISE ERP BUNDLE',
      price: '$79/mo',
      img: erpOne,
      bg: '#1b2a4a',
      color: '#fff',
      badgeIcon: faFire,
      badgeText: 'HOT INFRASTRUCTURE',
      features: ['Financial Intelligence', 'Supply Chain Master', 'Operations Core 3.0'],
      rating: 4.8,
      reviews: '1.2k+ Enterprises Hosted'
    },
    bl1: { title: 'Starter\nWorkspace', price: '$12.00', urlText: 'VIEW ALL PLANS', img: saasOne, bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Analytics Suite',
      subtitle: 'Real-time insights',
      desc: 'Track metrics, user growth, and churn with pre-built dashboards.',
      deal: '20% OFF',
      img: dataOne,
      bg: '#334e68', color: '#fff'
    }
  },
  'UI/UX': {
    hero: { title: 'Design System\nStarter Kit', subtitle: 'Components, tokens & patterns\nfor product teams\n200+ ready-to-use elements', btn: 'DOWNLOAD FREE', img: uiuxDesignKitImg, bg: '#6246ea', color: '#fff' },
    tr: { category: 'TOP RATED', title: 'Mobile UI\nDiagram\nTemplates', btn: 'USE TEMPLATE', img: uiOne, bg: '#fdf6ec', color: '#000' },
    br: {
      title: 'WEB LAYOUT LIBRARY',
      price: '$59',
      img: uiTwo,
      bg: '#2d2d2d',
      color: '#fff',
      badgeIcon: faWandMagicSparkles,
      badgeText: 'TOP RATED',
      features: ['200+ Micro-interactions', 'Modern Web Frameworks', 'Auto-layout Components'],
      rating: 5.0,
      reviews: '3.4k+ Designers Using'
    },
    bl1: { title: 'Wireframe\nUI Kit', price: '$18.00', urlText: 'PREVIEW SCREENS', img: uiThree, bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Usability Toolkit',
      subtitle: 'Research made easy',
      desc: 'Screen recording, heatmaps, and structured interview templates.',
      deal: '50% OFF',
      img: uiFour,
      bg: '#e45858', color: '#fff'
    }
  },
  'Advertising': {
    hero: { title: 'Ad Creative\nStudio', subtitle: 'Launch scroll-stopping campaigns\nacross every major platform\n3x Average ROAS Reported', btn: 'LAUNCH CAMPAIGN', img: graphicThree, bg: '#f4a261', color: '#000' },
    tr: { category: 'BEST SELLER', title: 'Social Ads\nCreative\nPack', btn: 'VIEW PACK', img: graphicOne, bg: '#fff9f0', color: '#000' },
    br: {
      title: 'MARKETING CAMPAIGN BUNDLE',
      price: '$199',
      img: graphicOne,
      bg: '#1d1d1d',
      color: '#fff',
      badgeIcon: faChartLine,
      badgeText: 'HIGH CONVERTING',
      features: ['10x Ad Variations', 'Pixel Tracking Setup', 'A/B Testing Framework'],
      rating: 4.7,
      reviews: '850+ Campaigns Launched'
    },
    bl1: { title: 'Digital\nMarketing Set', price: '$35.00', urlText: 'SEE ALL SIZES', img: socialMediaImg, bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Performance Kit',
      subtitle: 'Built to convert',
      desc: 'High-converting ad templates for Facebook, Instagram & TikTok.',
      deal: '25% OFF',
      img: graphicTwo,
      bg: '#2d6a4f', color: '#fff'
    }
  },
  'AI Product': {
    hero: { title: 'AI Model\nDeployment Hub', subtitle: 'Ship production-ready AI models\nwith one-click infrastructure\nScale to millions of users', btn: 'DEPLOY NOW', img: aiDeploymentHubImg, bg: '#0d0d0d', color: '#fff' },
    tr: { category: 'HOT', title: 'Neural Processor\nToolkit', btn: 'TRY IT FREE', img: botOne, bg: '#eef2ff', color: '#000' },
    br: {
      title: 'FINE-TUNE CUSTOM MODELS',
      price: '$399',
      img: aiOne,
      bg: '#0a0a1a',
      color: '#fff',
      badgeIcon: faRobot,
      badgeText: 'NEXT GEN AI',
      features: ['Bring Your Own Data', 'Llama 3 / Mistral Support', 'Distributed Training'],
      rating: 4.9,
      reviews: '200+ Models Deployed'
    },
    bl1: { title: 'AI Chat\nWidget SDK', price: '$24.00', urlText: 'READ THE DOCS', img: botTwo, bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Image Gen API',
      subtitle: 'Generate at scale',
      desc: 'Integrate cutting-edge stable diffusion models in minutes.',
      deal: '15% OFF',
      img: aiTwo,
      bg: '#3a0ca3', color: '#fff'
    }
  }
};


const popularCards = [
  {
    id: 1,
    title: 'Brand Identity\nDesign Kit',
    subtitle: 'DESIGN & IDENTITY',
    desc: 'Complete visual identity package including logos, colors & typography.',
    img: brandingDesignKitImg,
    btnText: 'Shop Now',
    targetId: 'branding-identity'
  },
  {
    id: 2,
    title: 'Ultimate\nSales Hub',
    subtitle: 'CRM SYSTEMS',
    desc: 'The elite Salesforce alternative for managing leads, deals, and pipelines.',
    img: crmOne,
    btnText: 'Shop Now',
    targetId: 'crm-products'
  },
  {
    id: 3,
    title: 'Razor AI\nAssistant',
    subtitle: 'AI INTELLIGENCE',
    desc: 'Next-gen customer support bot powered by the latest LLM models.',
    img: botOne,
    btnText: 'Get Started',
    targetId: 'ai-chatbot-products'
  },
  {
    id: 4,
    title: 'Custom Web\nApplication',
    subtitle: 'DEVELOPMENT',
    desc: 'Enterprise-grade web apps built for performance, security, and scale.',
    img: softOne,
    btnText: 'Build Now',
    targetId: 'development-services'
  },
  {
    id: 5,
    title: 'Online Store\nSolution',
    subtitle: 'E-COMMERCE',
    desc: 'High-converting online store development for retail and digital brands.',
    img: ecomOne,
    btnText: 'Launch Store',
    targetId: 'ecommerce-development'
  },
  {
    id: 6,
    title: 'Financial\nIntelligence',
    subtitle: 'ERP & LOGIC',
    desc: 'Unified accounting and operations management for the modern enterprise.',
    img: erpOne,
    btnText: 'Explore',
    targetId: 'erp-products'
  },
  {
    id: 7,
    title: 'SaaS\nBilling Pro',
    subtitle: 'SAAS SOLUTION',
    desc: 'Automated subscription billing and recurring revenue tracking system.',
    img: saasTwo,
    btnText: 'Get Started',
    targetId: 'saas-products'
  },
  {
    id: 8,
    title: 'Design System\nPro',
    subtitle: 'INTERFACE',
    desc: 'Comprehensive component library for rapid web and mobile development.',
    img: uiuxDesignKitImg,
    btnText: 'View Kit',
    targetId: 'ui-ux-design'
  }
];

/* ─── Main Component ─────────────────────────────────────────── */
const RaymartPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Branding');
  const navigate = useNavigate();
  const popularTrackRef = React.useRef(null);
  const searchRef = React.useRef(null);

  const scrollToMarketSection = (id) => {
    // Intelligent mapping of card targets to marketplace states
    const productMapping = {
      'crm-products': 'CRM',
      'erp-products': 'ERP',
      'ai-chatbot-products': 'AI CHATBOT',
      'job-seeker-hub': 'JOB SEEKER HUB',
      'learning-career': 'CAREER & LEARNING',
      'saas-products': 'SAAS',
      'business-suit-ai': 'BUSINESS SUIT AI'
    };

    const serviceMapping = {
      'branding-identity': 'BRANDING & IDENTITY',
      'development-services': 'DEVELOPMENT SERVICES',
      'website-development': 'WEBSITE DEVELOPMENT',
      'ecommerce-development': 'E-COMMERCE DEVELOPMENT',
      'app-development': 'APP DEVELOPMENT',
      'graphic-design': 'GRAPHIC DESIGN',
      'ui-ux-design': 'UI/UX DESIGN',
      'software-tech-solutions': 'SOFTWARE & TECH SOLUTIONS',
      'data-analytics': 'DATA ANALYTICS',
      'ai-products': 'AI SERVICES'
    };

    if (productMapping[id]) {
      setActiveProduct(productMapping[id]);
      const el = document.getElementById('products-marketplace');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (serviceMapping[id]) {
      setActiveService(serviceMapping[id]);
      const el = document.getElementById('services-marketplace');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // General fallback scroll for other IDs
      const element = document.getElementById(id) || document.querySelector(`[data-nav-id="${id}"]`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const scrollPopular = (dir) => {
    if (!popularTrackRef.current) return;
    const track = popularTrackRef.current;
    const scrollAmount = 450;
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (dir === 'right') {
      // If we're near the end, wrap back to the start
      if (track.scrollLeft >= maxScroll - 50) {
        track.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else {
      // If we're near the start, wrap to the end
      if (track.scrollLeft <= 50) {
        track.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        track.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const data = bentoData[activeCategory] || bentoData['Branding'];
  const [activeService, setActiveService] = useState('BRANDING & IDENTITY');
  const [activeProduct, setActiveProduct] = useState('CRM');
  const [searchFocused, setSearchFocused] = useState(false);
  const [showcaseSearch, setShowcaseSearch] = useState('');
  const [showcaseSearchFocused, setShowcaseSearchFocused] = useState(false);
  const [serviceShowcaseSearch, setServiceShowcaseSearch] = useState('');
  const [serviceShowcaseSearchFocused, setServiceShowcaseSearchFocused] = useState(false);
  const [ctaEmail, setCtaEmail] = useState('');

  const allServiceCategories = [
    'BRANDING & IDENTITY', 'DEVELOPMENT SERVICES', 'WEBSITE DEVELOPMENT',
    'E-COMMERCE DEVELOPMENT', 'APP DEVELOPMENT', 'GRAPHIC DESIGN',
    'UI/UX DESIGN', 'SOFTWARE & TECH SOLUTIONS', 'DATA ANALYTICS',
    'AI SERVICES', 'CRM SERVICES', 'SAAS SERVICES'
  ];
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeResourcePage, setActiveResourcePage] = useState(0);
  const itemsPerService = 4;

  const productsData = {
    'CRM': [
      { id: 1, name: "Ultimate Sales Hub", rating: 5, badge: "HOT", color: "#f0f4ff", img: crmOne, navId: "crm-products" },
      { id: 2, name: "Customer Link Pro", rating: 5, badge: "NEW", color: "#f0fff4", img: crmTwo, navId: "crm-products" },
      { id: 3, name: "Unified CRM Connect", rating: 5, badge: "SALE", color: "#fff7f0", img: crmThree, navId: "crm-products" },
      { id: 4, name: "Sales Growth Engine", rating: 5, badge: "TOP", color: "#fef0ff", img: crmFour, navId: "crm-products" }
    ],
    'ERP': [
      { id: 5, name: "Financial Intelligence", rating: 5, badge: "HOT", color: "#f0f4ff", img: erpOne, navId: "erp-products" },
      { id: 6, name: "Supply Chain Master", rating: 5, badge: "NEW", color: "#f0fff4", img: erpTwo, navId: "erp-products" },
      { id: 7, name: "Operations Core 3.0", rating: 5, badge: "TOP", color: "#fff7f0", img: erpThree, navId: "erp-products" },
      { id: 8, name: "Enterprise Logic Hub", rating: 5, badge: "SALE", color: "#fef0ff", img: erpFour, navId: "erp-products" }
    ],
    'AI CHATBOT': [
      { id: 9, name: "Razor AI Assistant", rating: 5, badge: "HOT", color: "#f0f4ff", img: botOne, navId: "ai-chatbot-products" },
      { id: 10, name: "Nexus GPT Node", rating: 5, badge: "NEW", color: "#f0fff4", img: botTwo, navId: "ai-chatbot-products" },
      { id: 11, name: "Infinite Voice Flow", rating: 5, badge: "TOP", color: "#fff7f0", img: botThree, navId: "ai-chatbot-products" },
      { id: 12, name: "Neural Link Desk", rating: 5, badge: "SALE", color: "#fef0ff", img: botFour, navId: "ai-chatbot-products" }
    ],
    'JOB SEEKER HUB': [
      { id: 13, name: "AI Resume Optimizer", rating: 5, badge: "HOT", color: "#f0f4ff", img: jobOne, navId: "job-seeker-hub" },
      { id: 14, name: "Job Market Scanner", rating: 5, badge: "NEW", color: "#f0fff4", img: jobTwo, navId: "job-seeker-hub" },
      { id: 15, name: "Mock Interview Coach", rating: 5, badge: "SALE", color: "#fff7f0", img: jobThree, navId: "job-seeker-hub" },
      { id: 16, name: "Industry Bridge Port", rating: 5, badge: "TOP", color: "#fef0ff", img: jobFour, navId: "job-seeker-hub" }
    ],
    'CAREER & LEARNING': [
      { id: 17, name: "Fullstack Web Academy", rating: 5, badge: "HOT", color: "#f0f4ff", img: careerOne, navId: "learning-career" },
      { id: 18, name: "Data Science Masters", rating: 5, badge: "NEW", color: "#f0fff4", img: careerTwo, navId: "learning-career" },
      { id: 19, name: "UX/UI Design Lab", rating: 5, badge: "TOP", color: "#fff7f0", img: careerThree, navId: "learning-career" },
      { id: 20, name: "Executive Leadership", rating: 5, badge: "SALE", color: "#fef0ff", img: careerFour, navId: "learning-career" }
    ],
    'SAAS': [
      { id: 21, name: "Cloud Ops Manager", rating: 5, badge: "HOT", color: "#f0f4ff", img: saasOne, navId: "saas-products" },
      { id: 22, name: "SaaS Billing Pro", rating: 5, badge: "NEW", color: "#f0fff4", img: saasTwo, navId: "saas-products" },
      { id: 23, name: "API Nexus Hub", rating: 5, badge: "SALE", color: "#fff7f0", img: saasThree, navId: "saas-products" },
      { id: 24, name: "User Auth Guard", rating: 5, badge: "TOP", color: "#fef0ff", img: saasFour, navId: "saas-products" }
    ],
    'BUSINESS SUIT AI': [
      { id: 25, name: "Executive AI Dashboard", rating: 5, badge: "HOT", color: "#f0f4ff", img: businessOne, navId: "business-suit-ai" },
      { id: 26, name: "Legal Doc Parser", rating: 5, badge: "NEW", color: "#f0fff4", img: businessTwo, navId: "business-suit-ai" },
      { id: 27, name: "Biz Strategy Copilot", rating: 5, badge: "SALE", color: "#fff7f0", img: businessThree, navId: "business-suit-ai" },
      { id: 28, name: "Meeting Synthesizer", rating: 5, badge: "TOP", color: "#fef0ff", img: businessFour, navId: "business-suit-ai" }
    ]
  };


  const servicesData = {
    'BRANDING & IDENTITY': [
      { id: 101, name: "Brand Strategy", rating: 4.8, img: brandOne, navId: "branding-identity" },
      { id: 102, name: "Brand Naming", rating: 4.9, img: brandTwo, navId: "branding-identity" },
      { id: 103, name: "Logo Design", rating: 4.7, img: brandThree, navId: "branding-identity" },
      { id: 104, name: "Brand Identity Design", rating: 4.6, img: brandFour, navId: "branding-identity" },
    ],
    'DEVELOPMENT SERVICES': [
      { id: 201, name: "Website Development", rating: 4.8, img: webOne, navId: "development-services" },
      { id: 202, name: "E-Commerce Development", rating: 4.9, img: webTwo, navId: "development-services" },
      { id: 203, name: "Mobile App Development", rating: 4.7, img: webThree, navId: "development-services" },
      { id: 204, name: "Custom Web Application", rating: 4.6, img: webFour, navId: "development-services" },
    ],
    'WEBSITE DEVELOPMENT': [
      { id: 301, name: "Business Website", rating: 4.8, img: devOne, navId: "website-development" },
      { id: 302, name: "Corporate Website", rating: 4.9, img: devTwo, navId: "website-development" },
      { id: 303, name: "Portfolio Website", rating: 4.7, img: devThree, navId: "website-development" },
      { id: 304, name: "Landing Page Design", rating: 4.6, img: devFour, navId: "website-development" },
    ],
    'E-COMMERCE DEVELOPMENT': [
      { id: 401, name: "Online Store Dev", rating: 4.8, img: ecomOne, navId: "ecommerce-development" },
      { id: 402, name: "Shopify / WooCommerce", rating: 4.9, img: ecomTwo, navId: "ecommerce-development" },
      { id: 403, name: "Custom E-Commerce", rating: 4.7, img: ecomThree, navId: "ecommerce-development" },
      { id: 404, name: "Product Management", rating: 4.6, img: ecomFour, navId: "ecommerce-development" },
    ],
    'APP DEVELOPMENT': [
      { id: 501, name: "Business App Solution", rating: 4.8, img: appOne, navId: "app-development" },
      { id: 502, name: "E-Commerce App", rating: 4.9, img: appTwo, navId: "app-development" },
      { id: 503, name: "Startup Launch Kit", rating: 4.7, img: appThree, navId: "app-development" },
      { id: 504, name: "Custom App Dev", rating: 4.6, img: appFour, navId: "app-development" },
    ],
    'GRAPHIC DESIGN': [
      { id: 601, name: "Social Media Pack", rating: 4.8, img: graphicOne, navId: "graphic-design" },
      { id: 602, name: "Business Branding Kit", rating: 4.9, img: graphicTwo, navId: "graphic-design" },
      { id: 603, name: "Marketing Design", rating: 4.7, img: graphicThree, navId: "graphic-design" },
      { id: 604, name: "Advertisement Creative", rating: 4.6, img: graphicFour, navId: "graphic-design" },
    ],
    'UI/UX DESIGN': [
      { id: 701, name: "Website UI/UX", rating: 4.8, img: uiOne, navId: "ui-ux-design" },
      { id: 702, name: "Mobile UI/UX", rating: 4.9, img: uiTwo, navId: "ui-ux-design" },
      { id: 703, name: "Dashboard Design", rating: 4.7, img: uiThree, navId: "ui-ux-design" },
      { id: 704, name: "Product UI/UX", rating: 4.6, img: uiFour, navId: "ui-ux-design" },
    ],
    'SOFTWARE & TECH SOLUTIONS': [
      { id: 801, name: "Custom Software", rating: 4.8, img: softOne, navId: "software-tech-solutions" },
      { id: 802, name: "Enterprise Solutions", rating: 4.9, img: softTwo, navId: "software-tech-solutions" },
      { id: 803, name: "ERP & Management", rating: 4.7, img: softThree, navId: "software-tech-solutions" },
      { id: 804, name: "Legacy Migration", rating: 4.6, img: softFour, navId: "software-tech-solutions" },
    ],
    'DATA ANALYTICS': [
      { id: 901, name: "Business Analytics", rating: 4.8, img: dataOne, navId: "data-analytics" },
      { id: 902, name: "Visualization", rating: 4.9, img: dataTwo, navId: "data-analytics" },
      { id: 903, name: "Sales Performance", rating: 4.7, img: dataThree, navId: "data-analytics" },
      { id: 904, name: "Customer Insights", rating: 4.6, img: dataFour, navId: "data-analytics" },
    ],
    'AI SERVICES': [
      { id: 1001, name: "AI Chatbot Solution", rating: 4.8, img: aiOne, navId: "ai-services" },
      { id: 1002, name: "AI Automation System", rating: 4.9, img: aiTwo, navId: "ai-services" },
      { id: 1003, name: "Custom AI Development", rating: 4.7, img: aiThree, navId: "ai-services" },
      { id: 1004, name: "AI-Powered Tools", rating: 4.6, img: aiFour, navId: "ai-services" },
    ],
    'CRM SERVICES': [
      { id: 1101, name: "CRM Implementation", rating: 4.8, img: crmOne, navId: "crm-services" },
      { id: 1102, name: "Customer Data Platform", rating: 4.9, img: crmTwo, navId: "crm-services" },
      { id: 1103, name: "Sales Automation", rating: 4.7, img: crmThree, navId: "crm-services" },
      { id: 1104, name: "CRM Strategy", rating: 4.6, img: crmFour, navId: "crm-services" },
    ],
    'SAAS SERVICES': [
      { id: 1201, name: "Cloud Launch", rating: 4.8, img: saasOne, navId: "saas-services" },
      { id: 1202, name: "Multi-Tenant", rating: 4.9, img: saasTwo, navId: "saas-services" },
      { id: 1203, name: "Subscription Billing", rating: 4.7, img: saasThree, navId: "saas-services" },
      { id: 1204, name: "SaaS Framework", rating: 4.6, img: saasFour, navId: "saas-services" },
    ]
  };

  const currentServices = servicesData[activeService] || servicesData['BRANDING & IDENTITY'];
  const currentProducts = productsData[activeProduct] || productsData['CRM'];

  // ── Flat catalog for search ──────────────────────────────────
  const allMarketplaceItems = React.useMemo(() => {
    const products = Object.entries(productsData).flatMap(([cat, items]) =>
      items.map(p => ({ ...p, category: cat, type: 'Product' }))
    );
    const services = Object.entries(servicesData).flatMap(([cat, items]) =>
      items.map(s => ({ ...s, category: cat, type: 'Service' }))
    );
    return [...products, ...services];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const defaultSuggestions = [
    { name: 'Ultimate Sales Hub', category: 'CRM', type: 'Product', navId: 'crm-products' },
    { name: 'Razor AI Assistant', category: 'AI CHATBOT', type: 'Product', navId: 'ai-chatbot-products' },
    { name: 'Brand Identity Design Kit', category: 'BRANDING & IDENTITY', type: 'Service', navId: 'branding-identity' },
    { name: 'Financial Intelligence', category: 'ERP', type: 'Product', navId: 'erp-products' },
    { name: 'Website UI/UX', category: 'UI/UX DESIGN', type: 'Service', navId: 'ui-ux-design' },
    { name: 'SaaS Billing Pro', category: 'SAAS', type: 'Product', navId: 'saas-products' },
    { name: 'Social Media Strategy', category: 'ADVERTISING', type: 'Service', navId: 'graphic-design' },
    { name: 'Custom App Dev', category: 'APP DEVELOPMENT', type: 'Service', navId: 'app-products' },
  ];

  const searchSuggestions = search.trim().length === 0
    ? defaultSuggestions
    : allMarketplaceItems
      .filter(item => item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()))
      .slice(0, 8);

  const showcaseSuggestions = showcaseSearch.trim().length === 0
    ? allMarketplaceItems.filter(item => item.type === 'Product').slice(0, 5)
    : allMarketplaceItems
      .filter(item => item.type === 'Product' && (
        item.name.toLowerCase().includes(showcaseSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(showcaseSearch.toLowerCase())
      ))
      .slice(0, 5);

  const serviceShowcaseSuggestions = serviceShowcaseSearch.trim().length === 0
    ? allMarketplaceItems.filter(item => item.type === 'Service').slice(0, 5)
    : allMarketplaceItems
      .filter(item => item.type === 'Service' && (
        item.name.toLowerCase().includes(serviceShowcaseSearch.toLowerCase()) ||
        item.category.toLowerCase().includes(serviceShowcaseSearch.toLowerCase())
      ))
      .slice(0, 5);

  const handleSuggestionClick = (item) => {
    navigate('/raymartPageFour', { state: { id: item.navId } });
  };

  const categoryNavIdMap = {
    'Branding': 'branding-identity',
    'SaaS': 'saas-products',
    'UI/UX': 'ui-ux-design',
    'Advertising': 'graphic-design',
    'AI Product': 'ai-services'
  };

  return (
    <>
      <div>
        <TopNavBar />
        <div className="rm-page">
          <RayMartNavbar />
          {/* ── HERO ──────────────────────────────────────────────── */}
          <section className="rm-hero" style={{ backgroundImage: `url(${raymartHeroBg})`, backgroundSize: '75%', backgroundRepeat: 'repeat' }}>
            {/* Dark overlay */}
            <div className="rm-hero-overlay" />

            {/* Centered content */}
            <div className="rm-hero-center">
              <h1 className="rm-hero-title">
                Build. Launch. Grow — All in<br />One Marketplace
              </h1>
              <p className="rm-hero-sub">
                From idea to execution — power your startup with ready-to-use tools.<br />
                Find Websites, Apps, SaaS, Tools &amp; Digital Assets
              </p>
              <div className="rm-search-wrapper">
                <div className="rm-search-bar">
                  <input
                    type="text"
                    ref={searchRef}
                    placeholder="Everything you need starts with a search..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                    className="rm-search-input"
                  />
                  <button className="rm-search-btn">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px', verticalAlign: 'text-bottom' }}>
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    Search
                  </button>
                </div>

                {/* ── Search Dropdown ── */}
                {searchFocused && (
                  <div
                    className="rm-search-dropdown"
                    onMouseDown={(e) => e.preventDefault()} /* Prevent input blur when interacting with dropdown */
                  >
                    <p className="rm-search-dropdown-label">
                      {search.trim() === '' ? 'Popular picks' : `Results for "${search}"`}
                    </p>
                    <div className="rm-search-dropdown-scroll">
                      {searchSuggestions.length > 0 ? (
                        <div className="rm-search-dual-columns">
                          <div className="rm-search-column">
                            <h5 className="rm-column-header">PRODUCTS</h5>
                            {searchSuggestions.filter(item => item.type === 'Product').length > 0 ?
                              searchSuggestions.filter(item => item.type === 'Product').map((item, idx) => (
                                <div
                                  key={`prod-${idx}`}
                                  className="rm-search-dropdown-item"
                                  onMouseDown={() => handleSuggestionClick(item)}
                                >
                                  <span className="rm-search-item-type"></span>
                                  <div className="rm-search-item-info">
                                    <span className="rm-search-item-name">{item.name}</span>
                                    <span className="rm-search-item-cat">{item.category}</span>
                                  </div>
                                  <span className="rm-search-item-arrow">→</span>
                                </div>
                              )) : <p className="rm-column-empty">No products match</p>
                            }
                          </div>
                          <div className="rm-search-column">
                            <h5 className="rm-column-header">SERVICES</h5>
                            {searchSuggestions.filter(item => item.type === 'Service').length > 0 ?
                              searchSuggestions.filter(item => item.type === 'Service').map((item, idx) => (
                                <div
                                  key={`serv-${idx}`}
                                  className="rm-search-dropdown-item"
                                  onMouseDown={() => handleSuggestionClick(item)}
                                >
                                  <span className="rm-search-item-type">🛠</span>
                                  <div className="rm-search-item-info">
                                    <span className="rm-search-item-name">{item.name}</span>
                                    <span className="rm-search-item-cat">{item.category}</span>
                                  </div>
                                  <span className="rm-search-item-arrow">→</span>
                                </div>
                              )) : <p className="rm-column-empty">No services match</p>
                            }
                          </div>
                        </div>
                      ) : (
                        <p className="rm-search-no-results">No results found. Try a different keyword.</p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="rm-hero-pills">
                <button className="rm-pill" onMouseDown={() => { setActiveProduct('CRM'); setTimeout(() => document.getElementById('products-marketplace')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Top Rated tools</button>
                <button
                  className="rm-pill"
                  onMouseDown={(e) => {
                    e.preventDefault();
                    document.querySelector('.rm-search-wrapper')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    setTimeout(() => {
                      searchRef.current?.focus();
                      setSearchFocused(true);
                    }, 400);
                  }}
                >
                  Browse New items
                </button>
                <button className="rm-pill" onMouseDown={() => { setActiveProduct('BUSINESS SUIT AI'); setTimeout(() => document.getElementById('products-marketplace')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Popular AI products</button>
              </div>
            </div>
          </section>



          {/* ── MAIN BODY ─────────────────────────────────────────── */}
          <div className="rm-body">

            {/* Sidebar */}
            <aside className="rm-sidebar">
              <div className="rm-sidebar-card">
                <h4 className="rm-sidebar-title">Category</h4>
                <div className="rm-sidebar-divider"></div>
                <div className="rm-cat-list">
                  {raymartSidebarCategories.map(cat => (
                    <button
                      key={cat.id}
                      className={`rm-cat-btn ${activeCategory === cat.name ? 'active' : ''}`}
                      onClick={() => setActiveCategory(cat.name)}
                    >
                      <span className="rm-cat-icon">{cat.icon}</span>
                      <span className="rm-cat-name">{cat.name}</span>
                      <span className="rm-cat-arrow">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="#5ad9bb" stroke="none">
                          <circle cx="12" cy="12" r="12" />
                          <polyline points="10 8 14 12 10 16" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Center content */}
            <main className="rm-main rm-bento-main">
              <div className="rm-bento-container">
                {/* Left Column */}
                <div className="rm-bento-col-left">
                  <div
                    className="rm-bento-card rm-bg-hero"
                    style={{ backgroundColor: data.hero.bg, color: data.hero.color, cursor: 'pointer' }}
                    onClick={() => navigate('/raymartPageFour', { state: { id: categoryNavIdMap[activeCategory] } })}
                  >
                    {/* Apply an opacity fade to the left side so text works */}
                    <div
                      className="rm-hero-overlay-fade"
                      style={{ background: `linear-gradient(90deg, ${data.hero.bg} 0%, ${data.hero.bg}ee 40%, transparent 100%)` }}
                    ></div>
                    <div className="rm-bento-content">
                      <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: "28px", fontWeight: 600, textAlign: "left", margin: "0 0 16px", whiteSpace: "pre-line" }}>{data.hero.title}</h2>
                      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 400, textAlign: "left", opacity: "0.95", margin: "0 0 24px", whiteSpace: "pre-line" }}>{data.hero.subtitle}</p>
                      <button style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 500, textAlign: "left", padding: "12px 28px", borderRadius: "8px", border: "none" }}>{data.hero.btn}</button>
                    </div>
                    <img src={data.hero.img} alt="Hero" className="rm-bg-hero-img" />
                  </div>

                  <div className="rm-bg-bottom-row">
                    <div
                      className="rm-bento-card rm-bg-bl1"
                      style={{ backgroundColor: data.bl1.bg, color: data.bl1.color, position: "relative", padding: 0, overflow: "hidden", cursor: 'pointer' }}
                      onClick={() => navigate('/raymartPageFour', { state: { id: categoryNavIdMap[activeCategory] } })}
                    >
                      <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                        <SalesChart section={activeCategory} />
                      </div>
                    </div>
                    <div
                      className="rm-bento-card rm-bg-bl2"
                      style={{ backgroundColor: data.bl2.bg, color: data.bl2.color, textAlign: "left", cursor: 'pointer' }}
                      onClick={() => navigate('/raymartPageFour', { state: { id: categoryNavIdMap[activeCategory] } })}
                    >
                      <div
                        className="rm-hero-overlay-fade"
                        style={{ background: `linear-gradient(90deg, ${data.bl2.bg} 0%, ${data.bl2.bg}ea 65%, transparent 100%)`, width: "100%" }}
                      ></div>
                      <div className="rm-bento-content rm-bento-content-bl2">
                        <span className="rm-bl2-title">{data.bl2.title}</span>
                        {data.bl2.subtitle && <span className="rm-bl2-sub">{data.bl2.subtitle}</span>}
                        {data.bl2.deal && <div className="rm-bl2-deal">{data.bl2.deal}</div>}
                      </div>
                      <img src={data.bl2.img} alt={data.bl2.title} className="rm-bg-bl2-img" />
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="rm-bento-col-right">
                  <div
                    className="rm-bento-card rm-bg-tr"
                    style={{ backgroundColor: data.tr.bg, color: data.tr.color, cursor: 'pointer' }}
                    onClick={() => navigate('/raymartPageFour', { state: { id: categoryNavIdMap[activeCategory] } })}
                  >
                    <div
                      className="rm-hero-overlay-fade"
                      style={{ background: `linear-gradient(270deg, ${data.tr.bg} 0%, ${data.tr.bg}ee 50%, transparent 100%)` }}
                    ></div>
                    <div className="rm-bento-content">
                      <span className="rm-tr-cat">{data.tr.category}</span>
                      <h3 style={{ textAlign: "right" }}>{data.tr.title}</h3>
                      <button style={{ textAlign: "right" }}>{data.tr.btn}</button>
                    </div>
                    <img src={data.tr.img} alt="Top Right" className="rm-bg-tr-img" />
                  </div>

                  <div
                    className="rm-bento-card rm-bg-br"
                    style={{ backgroundColor: data.br.bg, color: data.br.color, textAlign: "left", cursor: 'pointer' }}
                    onClick={() => navigate('/raymartPageFour', { state: { id: categoryNavIdMap[activeCategory] } })}
                  >
                    <div
                      className="rm-hero-overlay-fade"
                      style={{ background: `linear-gradient(90deg, ${data.br.bg} 0%, ${data.br.bg}ea 65%, transparent 100%)`, width: "100%" }}
                    ></div>
                    <div className="rm-bento-content rm-bento-content-br">
                      {data.br.badgeText && (
                        <div className="rm-br-badge">
                          <FontAwesomeIcon icon={data.br.badgeIcon} style={{ marginRight: '6px' }} />
                          {data.br.badgeText}
                        </div>
                      )}
                      <h3>{data.br.title}</h3>
                      {data.br.features && (
                        <div className="rm-br-features" style={{ marginBottom: '10px', paddingBottom: '10px' }}>
                          {data.br.features.map((f, i) => (
                            <div key={i} className="rm-br-feature">
                              <FontAwesomeIcon icon={faCheck} style={{ marginRight: '6px', color: '#5ad9bb' }} />
                              {f}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="rm-br-footer" style={{ marginTop: '0px', paddingTop: '0px' }}>
                        {data.br.rating && (
                          <div className="rm-br-rating">
                            <FontAwesomeIcon icon={faStar} style={{ color: '#f59e0b', marginRight: '4px' }} />
                            {data.br.rating} Client Rating • {data.br.reviews}
                          </div>
                        )}
                        {/* <div className="rm-br-price-box">
                      <span className="rm-br-from">From</span>
                      <span className="rm-br-price">{data.br.price}</span>
                    </div> */}
                      </div>
                    </div>
                    <img src={data.br.img} alt="Bottom Right" className="rm-bg-br-img" />
                  </div>
                </div>
              </div>
            </main>

          </div>

          {/* ── PRE-ORDER BANNER ─────────────────────────────────── */}
          <div className="rm-preorder-wrapper">
            <div className="rm-preorder-banner">

              <div className="rm-preorder-left">
                <span className="rm-preorder-chip">PRE ORDER</span>
                <span className="rm-preorder-desc">AI SMART DEVICE</span>
                <span className="rm-preorder-subtext">Shipping Early 2027</span>
              </div>

              <div className="rm-preorder-product-group">
                <div className="rm-preorder-center">
                  <img src={aiProduct01Img} alt="AI Product 01" className="rm-preorder-img img-main" />
                  <img src={aiProductImg} alt="AI Product" className="rm-preorder-img img-secondary" />
                </div>

                <div className="rm-preorder-text-center-right">
                  <div className="rm-preorder-tr-titles">
                    <span className="rm-preorder-product-name">Neural Core Model</span>
                    <span className="rm-preorder-product-name">Series X</span>
                  </div>
                  <span className="rm-preorder-slogan">A healthy leap ahead</span>
                </div>
              </div>

              <div className="rm-preorder-right">
                <button className="rm-preorder-btn" onClick={() => scrollToMarketSection('ai-chatbot-products')}>Discover Now</button>
              </div>

            </div>
          </div>

          {/* ── POPULAR BRANDS & SERVICES ──────────────────────────── */}
          <div className="rm-popular-wrapper">
            <div className="rm-popular-header">
              <h3>Popular Brands and Services</h3>
              <div className="rm-popular-nav">
                <button className="rm-pop-nav-btn" onClick={() => scrollPopular('left')}>
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="rm-pop-nav-btn" onClick={() => scrollPopular('right')}>
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>

            <div className="rm-popular-carousel-container">
              <div className="rm-popular-track" ref={popularTrackRef}>
                {popularCards.map(c => (
                  <div key={c.id} className="rm-pop-card" onClick={() => scrollToMarketSection(c.targetId)}>
                    <div className="rm-pop-card-bg" style={{ backgroundImage: `url(${c.img})` }} />
                    <div className="rm-pop-card-overlay" />
                    <div className="rm-pop-card-content">
                      <span className="rm-pop-card-sub">{c.subtitle}</span>
                      <h4 className="rm-pop-card-title">{c.title}</h4>
                      <p className="rm-pop-card-desc">{c.desc}</p>
                      <button className="rm-pop-card-btn" onClick={(e) => {
                        e.stopPropagation(); // Prevent double triggering since card also has onClick
                        scrollToMarketSection(c.targetId);
                      }}>{c.btnText}</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── GLOBAL IMPACT SECTION ─────────────────────────────── */}
          <section className="rm-global-impact-section">
            <div className="rm-global-impact-container">
              <div className="rm-global-left">
                <img src={globalImage} alt="Global reach" className="rm-global-img" />
              </div>
              <div className="rm-global-right">
                <h2 className="rm-global-title">
                  Discover why millions of<br />
                  entrepreneurs choose Raymart to<br />
                  build their business —<br />
                  <span className="rm-global-highlight">from hello world to IPO.</span>
                </h2>
                <div className="rm-global-stats-grid">
                  <div className="rm-global-stat-item">
                    <div className="rm-global-stat-value">1M+</div>
                    <div className="rm-global-stat-label">of merchants worldwide</div>
                  </div>
                  <div className="rm-global-stat-item">
                    <div className="rm-global-stat-value">170+</div>
                    <div className="rm-global-stat-label">countries represented</div>
                  </div>
                  <div className="rm-global-stat-item">
                    <div className="rm-global-stat-value">10%</div>
                    <div className="rm-global-stat-label">of total US ecommerce</div>
                  </div>
                  <div className="rm-global-stat-item">
                    <div className="rm-global-stat-value">10M</div>
                    <div className="rm-global-stat-label">Transactions Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── CORE VALUES ────────────────────────────────────────── */}
          <section className="rm-corevalues-section">
            <div className="rm-corevalues-header">
              {/* <h2 className="rm-corevalues-title">Our Core Values</h2> */}
              <h2 className="rm-corevalues-title" style={{ textAlign: 'left' }}>Everything we build, designed for someone like you</h2>
            </div>
            <div className="rm-corevalues-grid">
              {[
                { icon: faBuilding, color: '#dcfce7', iconColor: '#22c55e', label: 'Enterprise', desc: 'The endless, composable stack for enterprise retail.' },
                { icon: faPlus, color: '#fce7f3', iconColor: '#ec4899', label: 'Plus', desc: 'A commerce solution for growing digital brands.' },
                { icon: faHandshake, color: '#e0e7ff', iconColor: '#4f46e5', label: 'Partners', desc: 'Offer your expertise to Raymart merchants all over the world.' },
                { icon: faCode, color: '#ffedd5', iconColor: '#f97316', label: 'Developers', desc: 'Build the future of commerce with Raymart\'s powerful API.' },
                { icon: faStore, color: '#f3e8ff', iconColor: '#a855f7', label: 'Retail stores', desc: 'The complete system for selling in person.' },
              ].map(v => (
                <div key={v.label} className="rm-corevalue-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                  <span className="rm-corevalue-icon" style={{ background: v.color, color: v.iconColor }}>
                    <FontAwesomeIcon icon={v.icon} />
                  </span>
                  <h4 className="rm-corevalue-label" style={{ textTransform: 'none' }}>{v.label}</h4>
                  <p className="rm-corevalue-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── RED INFO BAR ───────────────────────────────────────── */}
          <div className="rm-infobar">
            {[
              { icon: faUsers, text: 'Trusted by 10,000+ Users' },
              { icon: faRotateLeft, text: '30-Day Money Back' },
              { icon: faShieldHalved, text: '100% Secure Payment' },
              { icon: faBriefcase, text: 'Business-Ready Solutions' },
              { icon: faHeadset, text: '24/7 Online Live Support' },
            ].map((item, i) => (
              <span key={i} className="rm-infobar-item">
                <FontAwesomeIcon icon={item.icon} className="rm-infobar-icon" />
                {item.text}
              </span>
            ))}
          </div>

          {/* ── SOMETHING YOU'D NEED ──────────────────────────────── */}
          <section className="rm-need-section">
            <div className="rm-need-header">
              <h2 className="rm-need-title">Here are Something You'd Need</h2>
            </div>
            <div className="rm-need-grid">
              {needCategories.map((n, idx) => (
                <div key={idx} className="rm-need-card" onClick={() => scrollToMarketSection(n.targetId)}>
                  <div
                    className="rm-need-bg"
                    style={{ backgroundImage: `url(${n.img})` }}
                  />
                  <div className="rm-need-overlay" />
                  <span className="rm-need-name">{n.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── OUR PRODUCTS SHOWCASE ─────────────────────────────── */}
          <section className={`rm-showcase-section ${showcaseSearchFocused ? 'rm-section-active' : ''}`} id="products-marketplace">
            <div className="rm-showcase-container">
              {/* Black Sidebar */}
              <div className="rm-showcase-sidebar">
                <div className="rm-showcase-sidebar-header">
                  <FontAwesomeIcon icon={faFire} className="rm-showcase-sidebar-icon" />
                  <h3>Our Products</h3>
                </div>
                <div className="rm-showcase-cat-list">
                  {['CRM', 'ERP', 'AI CHATBOT', 'JOB SEEKER HUB', 'CAREER & LEARNING', 'SAAS', 'BUSINESS SUIT AI'].map(cat => (
                    <div
                      key={cat}
                      className={`rm-showcase-cat-item ${activeProduct === cat ? 'active' : ''}`}
                      onClick={() => setActiveProduct(cat)}
                    >
                      <span>{cat}</span>
                      <FontAwesomeIcon icon={faChevronRight} className="rm-showcase-cat-arrow" />
                    </div>
                  ))}
                </div>
                <div className="rm-sidebar-watermark">
                  <FontAwesomeIcon icon={faFire} />
                </div>
              </div>

              {/* Main Product Area */}
              <div className="rm-showcase-main">
                <div className="rm-showcase-header">
                  <div className="rm-showcase-timer-info">
                    {/* Optional info like "Flash Sale" or "Latest" */}
                  </div>
                  <button className="rm-showcase-view-all" onClick={() => navigate('/raymartPageThree')}>View All Products</button>
                </div>

                <div className="rm-showcase-grid">
                  {currentProducts.map(product => (
                    <div key={product.id} className="rm-showcase-card" onClick={() => navigate('/raymartPageFour', { state: { id: product.navId } })} style={{ cursor: 'pointer' }}>
                      <div className="rm-product-badge">{product.badge}</div>
                      <div className="rm-product-img-wrap" style={{ backgroundColor: product.color }}>
                        <img src={product.img} alt={product.name} style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
                      </div>
                      <div className="rm-product-info">
                        <Stars rating={product.rating} />
                        <h4 className="rm-product-name">{product.name}</h4>
                        <div className="rm-product-price-row">
                          {/* <span className="rm-current-price">{product.price}</span> */}
                          {/* <span className="rm-old-price">{product.originalPrice}</span> */}
                        </div>
                        <div className="rm-product-stock">
                          <FontAwesomeIcon icon={faCheck} className="rm-stock-icon" /> In Stock
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rm-showcase-footer">
                  <div className="rm-showcase-footer-left">
                    <strong>Looking for something else?</strong>
                    <p>Explore our full product catalog or view more products available.</p>
                  </div>
                  <div className="rm-showcase-footer-right">
                    <div className="rm-showcase-search-box">
                      <FontAwesomeIcon icon={faSearch} style={{ color: '#94a3b8' }} />
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="rm-showcase-search-input"
                        value={showcaseSearch}
                        onChange={(e) => setShowcaseSearch(e.target.value)}
                        onFocus={() => setShowcaseSearchFocused(true)}
                        onBlur={() => setTimeout(() => setShowcaseSearchFocused(false), 200)}
                      />

                      {/* Showcase Search Dropdown */}
                      {showcaseSearchFocused && (
                        <div
                          className="rm-showcase-search-dropdown"
                          onMouseDown={(e) => e.preventDefault()} /* Prevent input blur when interacting with dropdown or scrollbar */
                        >
                          {showcaseSuggestions.length > 0 ? (
                            showcaseSuggestions.map((item) => (
                              <div
                                key={`${item.id}-${item.name}`}
                                className="rm-showcase-search-item"
                                onMouseDown={() => handleSuggestionClick(item)}
                              >
                                <img src={item.img} alt="" className="rm-showcase-search-img" />
                                <div className="rm-showcase-search-info">
                                  <span className="rm-showcase-search-name">{item.name}</span>
                                  <span className="rm-showcase-search-cat">{item.category}</span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="rm-showcase-no-results">No products found</div>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      className="rm-showcase-view-more-btn"
                      onClick={() => {
                        navigate('/raymartPageThree', {
                          state: { search: showcaseSearch }
                        });
                      }}
                    >
                      EXPLORE CATALOG
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── OUR SERVICES SHOWCASE ─────────────────────────────── */}
          <section className={`rm-showcase-section ${serviceShowcaseSearchFocused ? 'rm-section-active' : ''}`} id="services-marketplace">
            <div className="rm-showcase-container hot-sale" style={{ marginTop: '-50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)' }}>
              {/* Red Sidebar */}
              <div className="rm-showcase-sidebar">
                <div className="rm-showcase-sidebar-header">
                  <FontAwesomeIcon icon={faBriefcase} className="rm-showcase-sidebar-icon" />
                  <h3>Our Services</h3>
                </div>
                <div className="rm-showcase-cat-list rm-services-scroll-wrap">
                  {allServiceCategories.map(cat => (
                    <div
                      key={cat}
                      className={`rm-showcase-cat-item ${activeService === cat ? 'active' : ''}`}
                      onClick={() => setActiveService(cat)}
                      style={{
                        backgroundColor: activeService === cat ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <span>{cat}</span>
                      <FontAwesomeIcon icon={faChevronRight} className="rm-showcase-cat-arrow" />
                    </div>
                  ))}
                </div>
                <div className="rm-sidebar-watermark">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              </div>

              {/* Main Content Area */}
              <div className="rm-showcase-main">
                <div className="rm-showcase-header">
                  <div className="rm-showcase-timer-info">
                    {/* Section title could go here */}
                  </div>
                  <button className="rm-showcase-view-all" onClick={() => navigate('/raymartPageTwo')}>Explore All Services</button>
                </div>

                <div className="rm-showcase-grid">
                  {currentServices.map(service => (
                    <div key={service.id} className="rm-showcase-card" onClick={() => navigate('/raymartPageFour', { state: { id: service.navId } })} style={{ cursor: 'pointer' }}>
                      <div className="rm-product-badge">ELITE</div>
                      <div className="rm-product-img-wrap" style={{ background: '#f8fafc' }}>
                        <img src={service.img} alt={service.name} style={{ width: '80%', height: '80%', objectFit: 'cover', borderRadius: '4px' }} />
                      </div>
                      <div className="rm-product-info">
                        <Stars rating={service.rating} />
                        <h4 className="rm-product-name">{service.name}</h4>
                        <div className="rm-product-price-row">
                          {/* <span className="rm-current-price">{service.price}</span> */}
                        </div>
                        <div className="rm-product-stock">
                          <FontAwesomeIcon icon={faCheck} className="rm-stock-icon" /> Trusted Service
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rm-showcase-footer">
                  <div className="rm-showcase-footer-left">
                    <strong>Need a custom solution?</strong>
                    <p>Describe your project requirements below.</p>
                  </div>
                  <div className="rm-showcase-footer-right">
                    <div className="rm-showcase-search-box">
                      <FontAwesomeIcon icon={faSearch} style={{ color: '#94a3b8' }} />
                      <input
                        type="text"
                        placeholder="Search services..."
                        className="rm-showcase-search-input"
                        value={serviceShowcaseSearch}
                        onChange={(e) => setServiceShowcaseSearch(e.target.value)}
                        onFocus={() => setServiceShowcaseSearchFocused(true)}
                        onBlur={() => setTimeout(() => setServiceShowcaseSearchFocused(false), 200)}
                      />

                      {/* Service Showcase Search Dropdown */}
                      {serviceShowcaseSearchFocused && (
                        <div
                          className="rm-showcase-search-dropdown"
                          onMouseDown={(e) => e.preventDefault()}
                        >
                          {serviceShowcaseSuggestions.length > 0 ? (
                            serviceShowcaseSuggestions.map((item) => (
                              <div
                                key={`${item.id}-${item.name}`}
                                className="rm-showcase-search-item"
                                onMouseDown={() => handleSuggestionClick(item)}
                              >
                                <img src={item.img} alt="" className="rm-showcase-search-img" />
                                <div className="rm-showcase-search-info">
                                  <span className="rm-showcase-search-name">{item.name}</span>
                                  <span className="rm-showcase-search-cat">{item.category}</span>
                                </div>
                              </div>
                            ))
                          ) : (
                            <div className="rm-showcase-no-results">No services found</div>
                          )}
                        </div>
                      )}
                    </div>
                    <button
                      className="rm-showcase-view-more-btn"
                      onClick={() => {
                        if (serviceShowcaseSearch.trim()) {
                          navigate('/raymartPageTwo', { state: { search: serviceShowcaseSearch } });
                        }
                      }}
                    >FIND EXPERTS</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ── JUST LANDING / BEST SELLING ───────────────────────── */}
          <section className="rm-dual-section">
            {/* Left: Latest Articles */}
            <div className="rm-dual-container">
              <div className="rm-dual-header">
                <h3 className="rm-dual-title">Latest Resources</h3>
                <span className="rm-dual-link">VIEW ALL</span>
              </div>

              <div className="rm-jl-slider-wrapper">
                <button
                  className="rm-jl-nav prev"
                  onClick={() => setActiveResourcePage(prev => (prev === 0 ? Math.ceil(justLandingData.length / 2) - 1 : prev - 1))}
                >&lt;</button>
                <div className="rm-jl-card" style={{ backgroundColor: '#f0efefff' }}>
                  {justLandingData.slice(activeResourcePage * 2, activeResourcePage * 2 + 2).map((item, index) => (
                    <React.Fragment key={item.id}>
                      <div className="rm-jl-row">
                        <div className="rm-jl-img-wrap">
                          <img src={item.img} className="rm-jl-img" alt="" />
                        </div>
                        <div className="rm-jl-info">
                          <h4 className="rm-jl-title">{item.title}</h4>
                          <span className="rm-jl-meta"><span className="rm-jl-time">{item.time}</span> • <span className="rm-jl-cat">{item.category}</span></span>
                        </div>
                      </div>
                      {index === 0 && <div className="rm-jl-divider"></div>}
                    </React.Fragment>
                  ))}
                </div>
                <button
                  className="rm-jl-nav next"
                  onClick={() => setActiveResourcePage(prev => (prev === Math.ceil(justLandingData.length / 2) - 1 ? 0 : prev + 1))}
                >&gt;</button>
              </div>
            </div>

            {/* Right: Top Client Reviews */}
            <div className="rm-dual-container">
              <div className="rm-dual-header" >
                <h3 className="rm-dual-title">Top Client Reviews</h3>
                <div className="rm-bs-nav">
                  <button onClick={() => setActiveReviewIndex(prev => (prev === 0 ? bestSellingData.length - 1 : prev - 1))}>&lt;</button>
                  <button onClick={() => setActiveReviewIndex(prev => (prev === bestSellingData.length - 1 ? 0 : prev + 1))}>&gt;</button>
                </div>
              </div>

              <div className="rm-bs-card">
                <div className="rm-bs-review-head">
                  <span className="rm-bs-stars">★★★★★</span>
                  <span className="rm-bs-review-title">{bestSellingData[activeReviewIndex].title}</span>
                </div>
                <p className="rm-bs-desc">{bestSellingData[activeReviewIndex].desc}</p>
                <div className="rm-bs-footer">
                  <div className="rm-bs-reviewer">
                    <img src={bestSellingData[activeReviewIndex].reviewerImg} className="rm-bs-avatar" alt="" />
                    <div className="rm-bs-rinfo">
                      <div className="rm-bs-rname">{bestSellingData[activeReviewIndex].reviewerName} <span className="rm-bs-rstatus">{bestSellingData[activeReviewIndex].reviewerStatus}</span></div>
                      <div className="rm-bs-rdate">{bestSellingData[activeReviewIndex].reviewerDate}</div>
                    </div>
                  </div>
                  <a href="#" className="rm-bs-product">{bestSellingData[activeReviewIndex].productName}</a>
                </div>
              </div>
            </div>
          </section>

          {/* ── HELP SECTION ──────────────────────────────────────── */}
          <section className="rm-help-section">
            <div className="rm-help-container">
              <div className="rm-help-header">
                <span className="rm-help-overline">RAYMART SUPPORT</span>
                <h2 className="rm-help-title">The help you need,<br />when you need it</h2>
              </div>
              <div className="rm-help-grid">
                {helpItems.map(h => (
                  <div key={h.title} className="rm-help-card">
                    <div className="rm-help-icon-box" style={{ background: h.gradient }}>
                      <FontAwesomeIcon icon={h.icon} />
                    </div>
                    <h4 className="rm-help-name">{h.title}</h4>
                    <p className="rm-help-desc">{h.desc}</p>
                    <button className="rm-help-btn">
                      {h.link} <FontAwesomeIcon icon={faChevronRight} className="rm-help-btn-icon" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── MARQUEE ───────────────────────────────────────────── */}
          <div className="rm-marquee-strip">
            <div className="rm-marquee-track">
              {Array(10).fill('START YOUR FREE TRIAL →').map((t, i) => (
                <span key={i} className="rm-marquee-item">{t}</span>
              ))}
            </div>
          </div>

          <section className="rm-cta-section">
            <h2 className="rm-cta-title">Grow your<br />business here</h2>
            <p className="rm-cta-sub">
              Whether you want to sell products down the street or around the world, we have all the tools you need.
            </p>
            <div className="rm-cta-actions">
              <div className="rm-cta-input-group">
                <FontAwesomeIcon icon={faEnvelope} style={{ color: '#888', marginRight: '10px' }} />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="rm-cta-input"
                  value={ctaEmail}
                  onChange={(e) => setCtaEmail(e.target.value)}
                />
                <button
                  className="rm-cta-subscribe-btn"
                  onClick={() => {
                    if (ctaEmail.trim()) {
                      const subject = encodeURIComponent('Get Updates Subscription');
                      const body = encodeURIComponent(`Please subscribe me to receive updates. My email is: ${ctaEmail}`);
                      window.open(`mailto:engloray@gmail.com?subject=${subject}&body=${body}`, '_self');
                    }
                  }}
                >
                  Get Updates
                </button>
              </div>
              <button
                className="rm-cta-trial-btn"
                onClick={() => window.open('https://wa.me/916381769909', '_blank')}
              >
                Start free trial
              </button>
            </div>
          </section>

          {/* ── FOOTER ────────────────────────────────────────────── */}
          <footer className="rm-footer">
            {/* Top strip accent */}
            <div className="rm-footer-accent" />

            {/* Main 5-column grid */}
            <div className="rm-footer-main">

              {/* Col 1 – Brand */}
              <div className="rm-footer-brand-col">
                <h4 className="rm-footer-brand">RAYMART — 1ST TECH ONLINE MARKET</h4>
                <p className="rm-footer-hotline-label">HOT LINE 24/7</p>
                <p className="rm-footer-phone">6381769909 <br />6369945920</p>
                <p className="rm-footer-address">ECEC Skill School, Opp to Fenner, Madurai<br />Tamil Nadu 625009</p>
                <p className="rm-footer-email">engloray@gmail.com</p>
                <div className="rm-footer-socials" style={{ margin: '20px 0' }}>
                  <img src={socialMediaImg} alt="Social Media" style={{ height: '30px', width: 'auto', objectFit: 'contain', transform: 'scale(3)', transformOrigin: 'left' }} />
                </div>
              </div>

              {/* Col 2 – Top Categories */}
              <div className="rm-footer-col">
                <h5 className="rm-footer-col-title">TOP CATEGORIES</h5>
                {['Branding & Identity', 'UI/UX Design', 'Website Development', 'App Development', 'AI Products', 'Advertising', 'SaaS Tools', 'Office'].map(l => (
                  <p key={l} className="rm-footer-link">{l}</p>
                ))}
              </div>

              {/* Col 3 – Company */}
              <div className="rm-footer-col">
                <h5 className="rm-footer-col-title">COMPANY</h5>
                {['About Store', 'Contact', 'Career', 'Blog', 'Sitemap', 'Store Locations'].map(l => (
                  <p key={l} className="rm-footer-link">{l}</p>
                ))}
              </div>

              {/* Col 4 – Help Center */}
              <div className="rm-footer-col">
                <h5 className="rm-footer-col-title">HELP CENTER</h5>
                {['Customer Service', 'Policy', 'Terms & Conditions', 'Track Order', 'FAQs', 'My Account', 'Product Support'].map(l => (
                  <p
                    key={l}
                    className="rm-footer-link"
                    onClick={() => { if (l === 'Customer Service') navigate('/contactPage'); }}
                    style={{ cursor: l === 'Customer Service' ? 'pointer' : 'default' }}
                  >
                    {l}
                  </p>
                ))}
              </div>

              {/* Col 5 – Partner */}
              <div className="rm-footer-col">
                <h5 className="rm-footer-col-title">PARTNER</h5>
                {['Become Seller', 'All Seller', 'Advertise', 'Partnerships'].map(l => (
                  <p key={l} className="rm-footer-link">{l}</p>
                ))}
              </div>
            </div>

            {/* Newsletter bar */}
            <div className="rm-footer-newsletter" style={{
              display: 'grid',
              gridTemplateColumns: '2fr 4.4fr',
              gap: '40px',
              padding: '10px 72px 48px',
              borderTop: '1px solid #f1f5f9',
              alignItems: 'flex-start'
            }}>
              {/* Aligned with first column */}
              <div className="rm-footer-lang-row" style={{ display: 'flex', gap: '10px' }}>
                <button className="rm-footer-lang-btn">USD ▾</button>
                <button className="rm-footer-lang-btn">🇺🇸 Eng ▾</button>
              </div>

              {/* Aligned with columns 2-5 */}
              <div className="rm-footer-newsletter-content" style={{ textAlign: 'left' }}>
                <p className="rm-footer-newsletter-label" style={{ margin: '0 0 20px', fontWeight: '800', textTransform: 'uppercase', textAlign: 'left' }}>
                  SUBSCRIBE &amp; GET <span className="rm-footer-newsletter-highlight">10% OFF</span> FOR YOUR FIRST ORDER
                </p>
                <div className="rm-footer-newsletter-form" style={{ maxWidth: '100%', marginBottom: '12px', display: 'flex' }}>
                  <input type="email" placeholder="Enter your email address" className="rm-footer-email-input" style={{ textAlign: 'left' }} />
                  <button className="rm-footer-subscribe-btn">SUBSCRIBE</button>
                </div>
                <p className="rm-footer-newsletter-note" style={{ textAlign: 'left', fontSize: '0.75rem' }}>
                  By subscribing, you're agreed to our <a href="#" className="rm-footer-policy-link">Policy</a>
                </p>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="rm-footer-bottom" style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>© 2026 Raymart. All Rights Reserved.</span>
              <div className="rm-footer-payments" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src={paymentImg} alt="Payment Methods" className="rm-payment-img" style={{ height: '24px', width: 'auto', transform: 'scale(5)', objectFit: 'contain' }} />
              </div>
              <a href="#" className="rm-footer-mobile-app">Mobile App</a>
            </div>
          </footer>

        </div>
      </div>
    </>
  );
};

export default RaymartPage;
