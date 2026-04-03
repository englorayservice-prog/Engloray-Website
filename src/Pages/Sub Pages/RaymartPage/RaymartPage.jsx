import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RaymartPage.css';
import { BarChart, Bar, XAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faFire, faStar, faChartLine, faRobot, faCheck, faWandMagicSparkles, faUsers, faRotateLeft, faShieldHalved, faBriefcase, faHeadset, faNewspaper, faGraduationCap, faChevronRight, faEnvelope, faBuilding, faPlus, faHandshake, faCode, faStore, faSearch } from '@fortawesome/free-solid-svg-icons';
import aiProduct01Img from '../../../assets/ai-product-01.png';
import aiProductImg from '../../../assets/ai-product.png';
import brandingDesignKitImg from '../../../assets/brandinganddesignkit.png';
import saasDashboardImg from '../../../assets/allinonesassdashboard.png';
import globalImage from '../../../assets/global-image.png';
import aiDeploymentHubImg from './ai-deployment-hub.png';
import paymentImg from '../../../assets/payment.png';
import socialMediaImg from '../../../assets/social-media.png';

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
  { name: 'Graphic&Design', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80' },
  { name: 'Cartoon Animation', img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80' },
  { name: 'Illustration', img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&q=80' },
  { name: 'Flyers & Vouchers', img: 'https://images.unsplash.com/photo-1561069934-eee225952461?w=600&q=80' },
  { name: 'logo design', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&q=80' },
  { name: 'Social graphics', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80' },
  { name: 'Article writing', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80' },
  { name: 'Video Editing', img: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=600&q=80' },
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
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80', // Office meeting / branding
    title: 'How to perfectly align your re-branding strategy for 2025',
    time: '45 Minutes Ago',
    category: 'BRANDING'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80', // Data dashboards
    title: 'Integrating Next-Gen AI Products into Your SaaS Architecture',
    time: '2 Days Ago',
    category: 'TECHNOLOGY'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=200&q=80',
    title: '10 High-Converting E-Commerce Templates You Need to Try',
    time: '3 Days Ago',
    category: 'E-COMMERCE'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=200&q=80',
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
    hero: { title: 'Brand Identity\nDesign Kit', subtitle: 'Complete visual identity package\nLogos, colors & typography\nDelivered in 48 Hours', btn: 'GET STARTED', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80', bg: '#1a1a2e', color: '#fff' },
    tr: { category: 'POPULAR', title: 'Logo\nDesign\nPackage', btn: 'ORDER NOW', img: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=500&q=80', bg: '#fff8f0', color: '#000' },
    br: {
      title: 'BRAND STYLE GUIDE',
      price: '$249',
      img: 'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=500&q=80',
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
      img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&q=80',
      bg: '#c9ada7', color: '#fff'
    }
  },
  'SaaS': {
    hero: { title: 'All-in-One\nSaaS Dashboard', subtitle: 'Manage users, billing & analytics\nfrom a single control panel\n99.9% Uptime Guaranteed', btn: 'START FREE TRIAL', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80', bg: '#0f3460', color: '#fff' },
    tr: { category: 'TRENDING', title: 'Subscription\nBilling\nEngine', btn: 'SEE DEMO', img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80', bg: '#f0f4ff', color: '#000' },
    br: {
      title: 'MULTI TENANT HOSTING',
      price: '$79/mo',
      img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80',
      bg: '#1b2a4a',
      color: '#fff',
      badgeIcon: faFire,
      badgeText: 'HOT INFRASTRUCTURE',
      features: ['Dedicated Database', 'Custom Domain Routing', '99.9% Uptime SLA'],
      rating: 4.8,
      reviews: '1.2k+ Tenants Hosted'
    },
    bl1: { title: 'Starter\nWorkspace', price: '$12.00', urlText: 'VIEW ALL PLANS', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&q=80', bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Analytics Suite',
      subtitle: 'Real-time insights',
      desc: 'Track metrics, user growth, and churn with pre-built dashboards.',
      deal: '20% OFF',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80',
      bg: '#334e68', color: '#fff'
    }
  },
  'UI/UX': {
    hero: { title: 'Design System\nStarter Kit', subtitle: 'Components, tokens & patterns\nfor product teams\n200+ ready-to-use elements', btn: 'DOWNLOAD FREE', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80', bg: '#6246ea', color: '#fff' },
    tr: { category: 'TOP RATED', title: 'User Flow\nDiagram\nTemplates', btn: 'USE TEMPLATE', img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&q=80', bg: '#fdf6ec', color: '#000' },
    br: {
      title: 'PROTOTYPE INTERACTION LIBRARY',
      price: '$59',
      img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=500&q=80',
      bg: '#2d2d2d',
      color: '#fff',
      badgeIcon: faWandMagicSparkles,
      badgeText: 'TOP RATED',
      features: ['200+ Micro-interactions', 'Figma & Framer Ready', 'Auto-layout Components'],
      rating: 5.0,
      reviews: '3.4k+ Designers Using'
    },
    bl1: { title: 'Wireframe\nUI Kit', price: '$18.00', urlText: 'PREVIEW SCREENS', img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&q=80', bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Usability Toolkit',
      subtitle: 'Research made easy',
      desc: 'Screen recording, heatmaps, and structured interview templates.',
      deal: '50% OFF',
      img: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&q=80',
      bg: '#e45858', color: '#fff'
    }
  },
  'Advertising': {
    hero: { title: 'Ad Creative\nStudio', subtitle: 'Launch scroll-stopping campaigns\nacross every major platform\n3x Average ROAS Reported', btn: 'LAUNCH CAMPAIGN', img: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=500&q=80', bg: '#f4a261', color: '#000' },
    tr: { category: 'BEST SELLER', title: 'Social Ads\nCreative\nPack', btn: 'VIEW PACK', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80', bg: '#fff9f0', color: '#000' },
    br: {
      title: 'RETARGETING CAMPAIGN BUNDLE',
      price: '$199',
      img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&q=80',
      bg: '#1d1d1d',
      color: '#fff',
      badgeIcon: faChartLine,
      badgeText: 'HIGH CONVERTING',
      features: ['10x Ad Variations', 'Pixel Tracking Setup', 'A/B Testing Framework'],
      rating: 4.7,
      reviews: '850+ Campaigns Launched'
    },
    bl1: { title: 'Display Banner\nSet 10x', price: '$35.00', urlText: 'SEE ALL SIZES', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&q=80', bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Performance Kit',
      subtitle: 'Built to convert',
      desc: 'High-converting ad templates for Facebook, Instagram & TikTok.',
      deal: '25% OFF',
      img: 'https://images.unsplash.com/photo-1455309036818-60dac0c395bc?w=500&q=80',
      bg: '#2d6a4f', color: '#fff'
    }
  },
  'AI Product': {
    hero: { title: 'AI Model\nDeployment Hub', subtitle: 'Ship production-ready AI models\nwith one-click infrastructure\nScale to millions of users', btn: 'DEPLOY NOW', img: aiDeploymentHubImg, bg: '#0d0d0d', color: '#fff' },
    tr: { category: 'HOT', title: 'Prompt\nEngineering\nToolkit', btn: 'TRY IT FREE', img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80', bg: '#eef2ff', color: '#000' },
    br: {
      title: 'FINE-TUNE CUSTOM MODELS',
      price: '$399',
      img: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&q=80',
      bg: '#0a0a1a',
      color: '#fff',
      badgeIcon: faRobot,
      badgeText: 'NEXT GEN AI',
      features: ['Bring Your Own Data', 'Llama 3 / Mistral Support', 'Distributed Training'],
      rating: 4.9,
      reviews: '200+ Models Deployed'
    },
    bl1: { title: 'AI Chat\nWidget SDK', price: '$24.00', urlText: 'READ THE DOCS', img: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?w=500&q=80', bg: '#ffffff', color: '#000' },
    bl2: {
      title: 'Image Gen API',
      subtitle: 'Generate at scale',
      desc: 'Integrate cutting-edge stable diffusion models in minutes.',
      deal: '15% OFF',
      img: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=500&q=80',
      bg: '#3a0ca3', color: '#fff'
    }

  }
};

const popularCards = [
  { id: 1, title: 'Brand Identity\nDesign Kit', subtitle: 'BRANDING', bg: '#e2e8f0', color: '#111', img: brandingDesignKitImg, btnText: 'Shop Now' },
  { id: 2, title: 'AI Neural\nProcessor', subtitle: 'AI PRODUCT', bg: '#23252a', color: '#fff', img: aiProduct01Img, btnText: 'Pre-Order' },
  { id: 3, title: 'All-in-One\nSaaS Dashboard', subtitle: 'SAAS', bg: '#e76f51', color: '#111', img: saasDashboardImg, btnText: 'Shop Now' }
];

/* ─── Main Component ─────────────────────────────────────────── */
const RaymartPage = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Branding');
  const navigate = useNavigate();

  const data = bentoData[activeCategory] || bentoData['Branding'];
  const [activeService, setActiveService] = useState('Branding');
  const [activeProduct, setActiveProduct] = useState('BRANDING & IDENTITY');
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [activeResourcePage, setActiveResourcePage] = useState(0);
  const itemsPerService = 4;

  const productsData = {
    'BRANDING & IDENTITY': [
      { id: 1, name: 'BRAND GUIDELINES KIT', rating: 5, badge: 'HOT', color: '#f0f4ff', img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80' },
      { id: 2, name: 'LOGO DESIGN BUNDLE', rating: 5, badge: 'NEW', color: '#f0fff4', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&q=80' },
      { id: 3, name: 'SOCIAL MEDIA PACK', rating: 4, badge: 'SALE', color: '#fff7f0', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
      { id: 4, name: 'PREMIUM TYPOGRAPHY', rating: 5, badge: 'TOP', color: '#fef0ff', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
    ],
    'UI/UX DESIGN': [
      { id: 5, name: 'FIGMA DASHBOARD UI', rating: 5, badge: 'HOT', color: '#f0f4ff', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
      { id: 6, name: 'WIREFRAME STARTER', rating: 5, badge: 'NEW', color: '#f0fff4', img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80' },
      { id: 7, name: 'MOBILE APP UI KIT', rating: 5, badge: 'TOP', color: '#fff7f0', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80' },
      { id: 8, name: 'DESIGN SYSTEM V2.0', rating: 5, badge: 'SALE', color: '#fef0ff', img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
    ],
    'WEBSITE DEVELOPMENT': [
      { id: 9, name: 'REACT ADMIN THEME', rating: 5, badge: 'HOT', color: '#f0f4ff', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
      { id: 10, name: 'E-COMMERCE TEMPLATE', rating: 4, badge: 'SALE', color: '#f0fff4', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
      { id: 11, name: 'PORTFOLIO VUE TEMPLATE', rating: 5, badge: 'NEW', color: '#fff7f0', img: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=400&q=80' },
      { id: 12, name: 'SEO WORDPRESS THEME', rating: 5, badge: 'TOP', color: '#fef0ff', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
    ],
    'AI PRODUCTS': [
      { id: 13, name: 'AI PROMPT LIBRARY', rating: 5, badge: 'NEW', color: '#f0f4ff', img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&q=80' },
      { id: 14, name: 'CHATBOT UI REACT', rating: 5, badge: 'HOT', color: '#f0fff4', img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&q=80' },
      { id: 15, name: 'MACHINE LEARNING API', rating: 4, badge: 'SALE', color: '#fff7f0', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80' },
      { id: 16, name: 'IMAGE GENERATOR SCRIPT', rating: 5, badge: 'TOP', color: '#fef0ff', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80' },
    ],
    'APP DEVELOPMENT': [
      { id: 17, name: 'FLUTTER E-COMM APPS', rating: 5, badge: 'HOT', color: '#f0f4ff', img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80' },
      { id: 18, name: 'SWIFT FINANCE APP KIT', rating: 4, badge: 'SALE', color: '#f0fff4', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80' },
      { id: 19, name: 'REACT NATIVE CHAT', rating: 5, badge: 'TOP', color: '#fff7f0', img: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?w=400&q=80' },
      { id: 20, name: 'APP MONETIZATION PLUGIN', rating: 5, badge: 'NEW', color: '#fef0ff', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
    ],
  };

  const servicesData = {
    'Branding': [
      { id: 101, name: 'BRAND STRATEGY & IDENTITY', price: '₹4,999', rating: 4.8, img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80' },
      { id: 102, name: 'LOGO DESIGN PACK', price: '₹2,499', rating: 4.9, img: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&q=80' },
      { id: 103, name: 'SOCIAL MEDIA KIT', price: '₹1,999', rating: 4.7, img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
      { id: 104, name: 'BRAND STYLE GUIDE', price: '₹3,499', rating: 4.6, img: 'https://images.unsplash.com/photo-1561069934-eee225952461?w=400&q=80' },
    ],
    'Designing': [
      { id: 201, name: 'PRINT & GRAPHIC DESIGN', price: '₹1,500', rating: 4.5, img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80' },
      { id: 202, name: 'ILLUSTRATION SET', price: '₹2,200', rating: 4.8, img: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80' },
      { id: 203, name: 'MARKETING ASSETS', price: '₹1,800', rating: 4.4, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
      { id: 204, name: 'MOTION GRAPHICS', price: '₹5,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=400&q=80' },
    ],
    'UI/UX': [
      { id: 301, name: 'MOBILE APP DESIGN', price: '₹8,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80' },
      { id: 302, name: 'WEB DASHBOARD UI', price: '₹6,500', rating: 4.7, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80' },
      { id: 303, name: 'USER RESEARCH KIT', price: '₹3,000', rating: 4.5, img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=400&q=80' },
      { id: 304, name: 'PROTOTYPE INTERACTION', price: '₹4,500', rating: 4.8, img: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&q=80' },
    ],
    'Application': [
      { id: 401, name: 'BESPOKE IOS APP', price: '₹45,000', rating: 5.0, img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80' },
      { id: 402, name: 'ANDROID DEV PACK', price: '₹38,000', rating: 4.8, img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&q=80' },
      { id: 403, name: 'CROSS-PLATFORM BUILD', price: '₹55,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80' },
      { id: 404, name: 'APP MAINTENANCE', price: '₹5,000/mo', rating: 4.6, img: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&q=80' },
    ],
    'Website': [
      { id: 501, name: 'E-COMMERCE STORE', price: '₹15,000', rating: 4.9, img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80' },
      { id: 502, name: 'CORPORATE LANDING', price: '₹8,000', rating: 4.7, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
      { id: 503, name: 'SEO OPTIMIZATION', price: '₹4,000', rating: 4.5, img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
      { id: 504, name: 'CUSTOM BLOG SETUP', price: '₹6,000', rating: 4.8, img: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&q=80' },
    ]
  };

  const currentServices = servicesData[activeService] || servicesData['Branding'];
  const currentProducts = productsData[activeProduct] || productsData['BRANDING & IDENTITY'];

  return (
    <div className="rm-page">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="rm-hero">
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
          <div className="rm-search-bar">
            <input
              type="text"
              placeholder="Everything you need starts with a search..."
              value={search}
              onChange={e => setSearch(e.target.value)}
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
          <div className="rm-hero-pills">
            <button className="rm-pill">Top Rated tools</button>
            <button className="rm-pill">Browse New items</button>
            <button className="rm-pill">Popular AI products</button>
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
              <div className="rm-bento-card rm-bg-hero" style={{ backgroundColor: data.hero.bg, color: data.hero.color }}>
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
                <div className="rm-bento-card rm-bg-bl1" style={{ backgroundColor: data.bl1.bg, color: data.bl1.color, position: "relative", padding: 0, overflow: "hidden" }}>
                  <div style={{ width: "100%", height: "100%", position: "absolute", inset: 0 }}>
                    <SalesChart section={activeCategory} />
                  </div>
                </div>
                <div className="rm-bento-card rm-bg-bl2" style={{ backgroundColor: data.bl2.bg, color: data.bl2.color, textAlign: "left" }}>
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
              <div className="rm-bento-card rm-bg-tr" style={{ backgroundColor: data.tr.bg, color: data.tr.color }}>
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

              <div className="rm-bento-card rm-bg-br" style={{ backgroundColor: data.br.bg, color: data.br.color, textAlign: "left" }}>
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
            <button className="rm-preorder-btn">Discover Now</button>
          </div>

        </div>
      </div>

      {/* ── POPULAR BRANDS & SERVICES ──────────────────────────── */}
      <div className="rm-popular-wrapper">
        <div className="rm-popular-header">
          <h3>Popular Brands and Services</h3>
        </div>

        <div className="rm-popular-carousel-container">
          <div className="rm-popular-track">
            {popularCards.map(c => (
              <div key={c.id} className="rm-pop-card" style={{ backgroundColor: c.bg, color: c.color }}>
                <div className="rm-pop-card-content">
                  <span className="rm-pop-card-sub">{c.subtitle}</span>
                  <h4 className="rm-pop-card-title">{c.title}</h4>
                  <button className="rm-pop-card-btn" style={{ color: c.bg === '#23252a' || c.bg === '#2b2d42' ? '#000' : '#fff', backgroundColor: c.bg === '#23252a' || c.bg === '#2b2d42' ? '#fff' : '#111' }}>{c.btnText}</button>
                </div>
                <img src={c.img} alt={c.title} className="rm-pop-card-img" style={{ objectFit: c.bg === '#23252a' ? 'contain' : 'cover' }} />
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
                <div className="rm-global-stat-value">Millions</div>
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
                <div className="rm-global-stat-value">$444B</div>
                <div className="rm-global-stat-label">global economic activity</div>
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
            <div key={idx} className="rm-need-card">
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
      <section className="rm-showcase-section">
        <div className="rm-showcase-container">
          {/* Black Sidebar */}
          <div className="rm-showcase-sidebar">
            <div className="rm-showcase-sidebar-header">
              <FontAwesomeIcon icon={faFire} className="rm-showcase-sidebar-icon" />
              <h3>Our Products</h3>
            </div>
            <div className="rm-showcase-cat-list">
              {[
                'BRANDING & IDENTITY',
                'UI/UX DESIGN',
                'WEBSITE DEVELOPMENT',
                'AI PRODUCTS',
                'APP DEVELOPMENT',
              ].map(cat => (
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
                <div key={product.id} className="rm-showcase-card">
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
                  <input type="text" placeholder="Search products..." className="rm-showcase-search-input" />
                </div>
                <button className="rm-showcase-view-more-btn">View more</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR SERVICES SHOWCASE ─────────────────────────────── */}
      <section className="rm-showcase-section">
        <div className="rm-showcase-container hot-sale" style={{ marginTop: '30px' }}>
          {/* Red Sidebar */}
          <div className="rm-showcase-sidebar">
            <div className="rm-showcase-sidebar-header">
              <FontAwesomeIcon icon={faBriefcase} className="rm-showcase-sidebar-icon" />
              <h3>Our Services</h3>
            </div>
            <div className="rm-showcase-cat-list">
              {['Branding', 'Designing', 'UI/UX', 'Application', 'Website'].map(cat => (
                <div
                  key={cat}
                  className={`rm-showcase-cat-item ${activeService === cat ? 'active' : ''}`}
                  onClick={() => setActiveService(cat)}
                  style={{
                    backgroundColor: activeService === cat ? 'rgba(255, 255, 255, 0.25)' : 'rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <span>{cat.toUpperCase()}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="rm-showcase-cat-arrow" />
                </div>
              ))}
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
                <div key={service.id} className="rm-showcase-card">
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
                  <input type="text" placeholder="Enter your email address" className="rm-showcase-search-input" />
                </div>
                <button className="rm-showcase-view-more-btn">View more</button>
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
            <div className="rm-jl-card">
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
          <div className="rm-dual-header">
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
            <input type="email" placeholder="Enter your email address" className="rm-cta-input" />
            <button className="rm-cta-subscribe-btn">Subscribe</button>
          </div>
          <button className="rm-cta-trial-btn">Start free trial</button>
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
  );
};

export default RaymartPage;
