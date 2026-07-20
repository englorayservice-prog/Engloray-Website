/**
 * Engloray Master SEO Configuration
 * 
 * Central source of truth for all page-level SEO metadata.
 * Keywords sourced from instructions.md with intelligent page mapping.
 * Each page has ONE dominant search intent with supporting variations.
 */

const SITE_URL = 'https://www.engloray.com';
const SITE_NAME = 'Engloray';
const DEFAULT_OG_IMAGE = `${SITE_URL}/logo512.png`;
const SOCIAL_PROFILES = [
  'https://www.facebook.com/profile.php?id=61583616114977',
  'https://x.com/engloraytech',
  'https://www.linkedin.com/in/engloray-group-7534b6391/',
  'https://www.instagram.com/engloray/'
];

/**
 * SEO configuration for every public page.
 * 
 * Structure per page:
 * - title: SEO-optimized <title> tag
 * - description: Meta description (150-160 chars ideal)
 * - canonical: Absolute canonical URL
 * - h1: Recommended H1 (for reference, actual H1 lives in component)
 * - primaryKeyword: Dominant keyword from instructions.md
 * - secondaryKeywords: Supporting keywords
 * - ogType: Open Graph type
 * - schema: Array of schema types to generate
 * - breadcrumbs: Array of {name, url} for BreadcrumbList
 * - robots: robots meta content
 * - noindex: Boolean for noindex pages
 */
const seoConfig = {
  // ═══════════════════════════════════════════════════
  // HOMEPAGE
  // ═══════════════════════════════════════════════════
  '/': {
    title: 'Engloray | Technology, AI, Software, App Development, Branding & Digital Solutions Company',
    description: 'Engloray provides mobile app development, website development, custom software, AI solutions, UI/UX design, branding, graphic design, video editing, digital marketing, ERP, CRM, SaaS products, education, courses, internships and e-commerce solutions for businesses, startups and individuals.',
    canonical: `${SITE_URL}/`,
    h1: 'Technology, AI & Digital Solutions Company',
    primaryKeyword: 'technology and digital solutions company',
    secondaryKeywords: ['IT services company', 'digital transformation company', 'Engloray', 'Engloray company', 'creative technology company'],
    ogType: 'website',
    schema: ['Organization', 'WebSite'],
    breadcrumbs: [{ name: 'Home', url: `${SITE_URL}/` }],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — BRANDING & DESIGN
  // ═══════════════════════════════════════════════════
  '/brandingPage': {
    title: 'Branding & Creative Design Services | Engloray',
    description: 'Engloray offers professional branding, graphic design, and creative design services. Build a memorable brand identity with our expert creative team. Logo design, visual identity, and corporate branding solutions.',
    canonical: `${SITE_URL}/brandingPage`,
    h1: 'Branding & Creative Design Services',
    primaryKeyword: 'branding agency',
    secondaryKeywords: ['creative branding agency', 'brand identity design', 'branding services', 'Engloray branding'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/brandingPage` },
      { name: 'Branding & Design', url: `${SITE_URL}/brandingPage` }
    ],
    robots: 'index, follow',
  },

  '/brandingIdentityPage': {
    title: 'Brand Identity Design Company | Visual Identity & Brand Strategy | Engloray',
    description: 'Create a powerful brand identity with Engloray. We deliver logo design, visual identity systems, brand guidelines, corporate identity design, and complete brand strategy services for businesses and startups.',
    canonical: `${SITE_URL}/brandingIdentityPage`,
    h1: 'Brand Identity Design Services',
    primaryKeyword: 'brand identity design company',
    secondaryKeywords: ['visual identity design', 'corporate identity design', 'brand strategy services', 'startup branding agency'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/brandingPage` },
      { name: 'Brand Identity', url: `${SITE_URL}/brandingIdentityPage` }
    ],
    robots: 'index, follow',
  },

  '/graphicDesignPage': {
    title: 'Professional Graphic Design Services | Social Media, Print & Digital Design | Engloray',
    description: 'Engloray provides professional graphic design services including social media design, poster design, brochure design, business card design, presentation design, and marketing material design for businesses.',
    canonical: `${SITE_URL}/graphicDesignPage`,
    h1: 'Professional Graphic Design Services',
    primaryKeyword: 'graphic design services',
    secondaryKeywords: ['graphic design company', 'social media post design', 'business graphic design', 'Engloray graphic design'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/brandingPage` },
      { name: 'Graphic Design', url: `${SITE_URL}/graphicDesignPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — UI/UX DESIGN
  // ═══════════════════════════════════════════════════
  '/UiUxPage': {
    title: 'UI/UX Design Company | User Interface & Experience Design Services | Engloray',
    description: 'Engloray is a professional UI/UX design company offering user interface design, user experience design, wireframing, prototyping, and usability testing services for web apps, mobile apps, and SaaS products.',
    canonical: `${SITE_URL}/UiUxPage`,
    h1: 'UI/UX Design Services',
    primaryKeyword: 'UI UX design company',
    secondaryKeywords: ['UI UX design services', 'user interface design services', 'user experience design company', 'Engloray UI UX design'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/UiUxPage` },
      { name: 'UI/UX Design', url: `${SITE_URL}/UiUxPage` }
    ],
    robots: 'index, follow',
  },

  '/uiuxDesignPage': {
    title: 'UI/UX Design Services for Web & Mobile Apps | Engloray',
    description: 'Expert UI/UX design services for mobile apps, websites, dashboards, and SaaS products. Engloray delivers wireframing, interactive prototyping, Figma design, and responsive UI design for startups and enterprises.',
    canonical: `${SITE_URL}/uiuxDesignPage`,
    h1: 'UI/UX Design for Web & Mobile Applications',
    primaryKeyword: 'UI UX design services',
    secondaryKeywords: ['mobile app UI UX design', 'SaaS UI UX design', 'Figma design services', 'startup UI UX design'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/UiUxPage` },
      { name: 'UI/UX Design Services', url: `${SITE_URL}/uiuxDesignPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — DEVELOPMENT
  // ═══════════════════════════════════════════════════
  '/developmentPage': {
    title: 'Web & App Development Company | Full-Stack Development Services | Engloray',
    description: 'Engloray is a full-service web and app development company. We build custom websites, web applications, mobile apps, and enterprise software using React, Node.js, Java Spring Boot, and modern technologies.',
    canonical: `${SITE_URL}/developmentPage`,
    h1: 'Web & App Development Services',
    primaryKeyword: 'web development company',
    secondaryKeywords: ['full-stack web development company', 'web application development company', 'Engloray web development'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'Web & App Development', url: `${SITE_URL}/developmentPage` }
    ],
    robots: 'index, follow',
  },

  '/websiteDevelopmentPage': {
    title: 'Website Development Company | Custom Web Development Services | Engloray',
    description: 'Professional website development services by Engloray. We build responsive, SEO-friendly, and dynamic websites for businesses, startups, and enterprises. Custom web applications, e-commerce sites, and landing pages.',
    canonical: `${SITE_URL}/websiteDevelopmentPage`,
    h1: 'Website Development Services',
    primaryKeyword: 'website development company',
    secondaryKeywords: ['custom website development', 'responsive website development', 'SEO-friendly website development', 'business website development'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'Website Development', url: `${SITE_URL}/websiteDevelopmentPage` }
    ],
    robots: 'index, follow',
  },

  '/appDevelopmentPage': {
    title: 'Mobile App Development Company | Android, iOS & Cross-Platform Apps | Engloray',
    description: 'Engloray is a professional mobile app development company building custom Android, iOS, React Native, and Flutter applications for businesses and startups. End-to-end app development from idea to launch.',
    canonical: `${SITE_URL}/appDevelopmentPage`,
    h1: 'Mobile App Development Services',
    primaryKeyword: 'mobile app development company',
    secondaryKeywords: ['app development company', 'Android app development company', 'iOS app development company', 'React Native app development company', 'Engloray app development'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'App Development', url: `${SITE_URL}/appDevelopmentPage` }
    ],
    robots: 'index, follow',
  },

  '/mobileApplicationsPage': {
    title: 'Custom Mobile Application Development | Business & Enterprise Apps | Engloray',
    description: 'Build custom mobile applications for your business with Engloray. We develop scalable Android and iOS applications with backend integration, payment gateways, admin dashboards, and AI-powered features.',
    canonical: `${SITE_URL}/mobileApplicationsPage`,
    h1: 'Custom Mobile Application Development',
    primaryKeyword: 'custom mobile application development',
    secondaryKeywords: ['business app development', 'enterprise mobile app development', 'mobile app development with backend integration'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'Mobile Applications', url: `${SITE_URL}/mobileApplicationsPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — SOFTWARE
  // ═══════════════════════════════════════════════════
  '/softwareDevelopmentPage': {
    title: 'Custom Software Development Company | Enterprise Software Solutions | Engloray',
    description: 'Engloray is a custom software development company delivering enterprise software, business applications, cloud solutions, API development, and scalable software products for businesses and startups.',
    canonical: `${SITE_URL}/softwareDevelopmentPage`,
    h1: 'Custom Software Development Services',
    primaryKeyword: 'custom software development company',
    secondaryKeywords: ['software development company', 'enterprise software development', 'software solutions company', 'Engloray software company'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'Software Development', url: `${SITE_URL}/softwareDevelopmentPage` }
    ],
    robots: 'index, follow',
  },

  '/softwareSolutionPage': {
    title: 'Software Technology Solutions | Digital Product Engineering | Engloray',
    description: 'Engloray delivers software technology solutions including digital product engineering, system integration, software modernization, workflow automation, and custom management software for enterprises.',
    canonical: `${SITE_URL}/softwareSolutionPage`,
    h1: 'Software Technology Solutions',
    primaryKeyword: 'software solutions provider',
    secondaryKeywords: ['digital product engineering services', 'software modernization services', 'business automation software'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'Software Solutions', url: `${SITE_URL}/softwareSolutionPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — AI
  // ═══════════════════════════════════════════════════
  '/aiServicesPage': {
    title: 'AI Development Company | Artificial Intelligence Services & Solutions | Engloray',
    description: 'Engloray is an AI development company providing custom AI solutions, machine learning, generative AI, AI automation, AI chatbots, and AI consulting services for businesses, startups, and enterprises.',
    canonical: `${SITE_URL}/aiServicesPage`,
    h1: 'AI Services & Artificial Intelligence Solutions',
    primaryKeyword: 'AI development company',
    secondaryKeywords: ['artificial intelligence company', 'AI services', 'custom AI solutions', 'AI solutions for businesses', 'Engloray AI services'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'AI Services', url: `${SITE_URL}/aiServicesPage` }
    ],
    robots: 'index, follow',
  },

  '/aiProductPage': {
    title: 'AI-Powered Applications & Products | Generative AI Solutions | Engloray',
    description: 'Explore Engloray AI-powered applications and products. We build generative AI solutions, AI-powered software, intelligent business tools, and custom AI applications for modern businesses.',
    canonical: `${SITE_URL}/aiProductPage`,
    h1: 'AI-Powered Applications & Products',
    primaryKeyword: 'AI-powered applications',
    secondaryKeywords: ['generative AI solutions', 'AI software development company', 'AI product development'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'AI Products', url: `${SITE_URL}/aiProductPage` }
    ],
    robots: 'index, follow',
  },

  '/aiChatbotPage': {
    title: 'AI Chatbot Development Company | Custom Chatbot Solutions | Engloray',
    description: 'Engloray builds custom AI chatbots for businesses. We develop intelligent chatbots for customer support, WhatsApp, websites, and apps using generative AI, NLP, and conversational AI technologies.',
    canonical: `${SITE_URL}/aiChatbotPage`,
    h1: 'AI Chatbot Development Services',
    primaryKeyword: 'AI chatbot development company',
    secondaryKeywords: ['custom AI chatbot development', 'generative AI chatbot', 'AI customer support chatbot', 'WhatsApp AI chatbot'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'AI Chatbot', url: `${SITE_URL}/aiChatbotPage` }
    ],
    robots: 'index, follow',
  },

  '/businessSuiteAiPage': {
    title: 'AI Business Suite | Intelligent Business Automation Solutions | Engloray',
    description: 'Engloray AI Business Suite provides intelligent automation, AI-powered analytics, predictive tools, and smart business management solutions. Transform your business operations with AI technology.',
    canonical: `${SITE_URL}/businessSuiteAiPage`,
    h1: 'AI Business Suite & Intelligent Automation',
    primaryKeyword: 'AI solutions for businesses',
    secondaryKeywords: ['business automation using AI', 'intelligent business automation', 'AI workflow automation'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'Business Suite AI', url: `${SITE_URL}/businessSuiteAiPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — DIGITAL MARKETING
  // ═══════════════════════════════════════════════════
  '/marketingPage': {
    title: 'Digital Marketing Agency | Online Marketing & Growth Services | Engloray',
    description: 'Engloray is a full-service digital marketing agency offering SEO, social media marketing, paid advertising, content marketing, and lead generation services for businesses, startups, and enterprises.',
    canonical: `${SITE_URL}/marketingPage`,
    h1: 'Digital Marketing Services',
    primaryKeyword: 'digital marketing agency',
    secondaryKeywords: ['digital marketing company', 'online marketing company', 'Engloray digital marketing'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/marketingPage` },
      { name: 'Digital Marketing', url: `${SITE_URL}/marketingPage` }
    ],
    robots: 'index, follow',
  },

  '/digitalMarketingServicePage': {
    title: 'Digital Marketing Services | SEO, Social Media & PPC | Engloray',
    description: 'Comprehensive digital marketing services by Engloray including search engine optimization, social media marketing, Google Ads management, content marketing, and conversion optimization for business growth.',
    canonical: `${SITE_URL}/digitalMarketingServicePage`,
    h1: 'Comprehensive Digital Marketing Services',
    primaryKeyword: 'digital marketing services',
    secondaryKeywords: ['SEO services', 'social media marketing services', 'performance marketing agency', 'lead generation services'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/marketingPage` },
      { name: 'Digital Marketing Services', url: `${SITE_URL}/digitalMarketingServicePage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // SERVICE PAGES — ERP, CRM, SaaS
  // ═══════════════════════════════════════════════════
  '/erpSolutionsPage': {
    title: 'ERP Software Solutions | Enterprise Resource Planning Development | Engloray',
    description: 'Engloray develops custom ERP software solutions for businesses. Cloud ERP, inventory management, HR ERP, finance ERP, and complete enterprise resource planning implementation services.',
    canonical: `${SITE_URL}/erpSolutionsPage`,
    h1: 'ERP Software Solutions',
    primaryKeyword: 'ERP software for businesses',
    secondaryKeywords: ['custom ERP software', 'ERP development company', 'cloud ERP software', 'Engloray ERP'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/erpSolutionsPage` },
      { name: 'ERP Solutions', url: `${SITE_URL}/erpSolutionsPage` }
    ],
    robots: 'index, follow',
  },

  '/erpPage': {
    title: 'ERP Software Product | Cloud-Based Business Management System | Engloray',
    description: 'Engloray ERP is a cloud-based enterprise resource planning software for small businesses and enterprises. Manage inventory, HR, finance, sales, and operations from a single integrated platform.',
    canonical: `${SITE_URL}/erpPage`,
    h1: 'Engloray ERP Software',
    primaryKeyword: 'custom ERP software',
    secondaryKeywords: ['cloud ERP software', 'ERP software for small businesses', 'all-in-one business management software'],
    ogType: 'website',
    schema: ['SoftwareApplication', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/erpSolutionsPage` },
      { name: 'ERP Product', url: `${SITE_URL}/erpPage` }
    ],
    robots: 'index, follow',
  },

  '/crmServicesPage': {
    title: 'CRM Software Solutions | Customer Relationship Management | Engloray',
    description: 'Engloray provides custom CRM software solutions for businesses. Manage leads, sales pipeline, customer relationships, and business automation with our intelligent CRM development services.',
    canonical: `${SITE_URL}/crmServicesPage`,
    h1: 'CRM Software Solutions',
    primaryKeyword: 'CRM software for businesses',
    secondaryKeywords: ['custom CRM software', 'CRM development company', 'sales CRM software', 'Engloray CRM'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/crmServicesPage` },
      { name: 'CRM Solutions', url: `${SITE_URL}/crmServicesPage` }
    ],
    robots: 'index, follow',
  },

  '/crmPage': {
    title: 'CRM Software Product | Sales & Lead Management Platform | Engloray',
    description: 'Engloray CRM is a powerful customer relationship management platform for managing sales, leads, customer data, and business relationships. AI-powered CRM with automation and analytics.',
    canonical: `${SITE_URL}/crmPage`,
    h1: 'Engloray CRM Software',
    primaryKeyword: 'custom CRM software',
    secondaryKeywords: ['AI-powered CRM software', 'lead management software', 'sales automation CRM'],
    ogType: 'website',
    schema: ['SoftwareApplication', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/crmServicesPage` },
      { name: 'CRM Product', url: `${SITE_URL}/crmPage` }
    ],
    robots: 'index, follow',
  },

  '/saasPage': {
    title: 'SaaS Development Company | Cloud Software & Platform Development | Engloray',
    description: 'Engloray is a SaaS development company building cloud-based software platforms, subscription applications, multi-tenant solutions, and scalable SaaS products for startups and enterprises.',
    canonical: `${SITE_URL}/saasPage`,
    h1: 'SaaS Development Services',
    primaryKeyword: 'SaaS development company',
    secondaryKeywords: ['SaaS product development', 'cloud SaaS solutions', 'custom SaaS development', 'Engloray SaaS'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/saasPage` },
      { name: 'SaaS Development', url: `${SITE_URL}/saasPage` }
    ],
    robots: 'index, follow',
  },

  '/ecommerceDevelopmentPage': {
    title: 'E-Commerce Development Company | Online Store & Marketplace Development | Engloray',
    description: 'Engloray builds custom e-commerce websites, mobile shopping apps, multi-vendor marketplaces, and online stores with secure payment gateway integration and admin dashboard management.',
    canonical: `${SITE_URL}/ecommerceDevelopmentPage`,
    h1: 'E-Commerce Development Services',
    primaryKeyword: 'e-commerce development company',
    secondaryKeywords: ['e-commerce website development', 'online store development', 'marketplace app development', 'custom e-commerce solutions'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/developmentPage` },
      { name: 'E-Commerce Development', url: `${SITE_URL}/ecommerceDevelopmentPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // DATA ANALYTICS PAGES
  // ═══════════════════════════════════════════════════
  '/dataAnalyticsPage': {
    title: 'Data Analytics Services | Business Intelligence Solutions | Engloray',
    description: 'Engloray provides data analytics services and business intelligence solutions. Transform raw data into actionable insights with our data visualization, reporting, and predictive analytics services.',
    canonical: `${SITE_URL}/dataAnalyticsPage`,
    h1: 'Data Analytics Services',
    primaryKeyword: 'data analytics services',
    secondaryKeywords: ['business intelligence solutions', 'data visualization services', 'predictive analytics'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'Data Analytics', url: `${SITE_URL}/dataAnalyticsPage` }
    ],
    robots: 'index, follow',
  },

  '/dataanalyticsbusiness': {
    title: 'Business Data Analytics | Enterprise Analytics & Insights | Engloray',
    description: 'Enterprise-grade data analytics solutions by Engloray. We help businesses make data-driven decisions with advanced analytics, business intelligence dashboards, and strategic data consulting.',
    canonical: `${SITE_URL}/dataanalyticsbusiness`,
    h1: 'Business Data Analytics Solutions',
    primaryKeyword: 'business data analytics',
    secondaryKeywords: ['enterprise analytics solutions', 'data-driven business intelligence'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Services', url: `${SITE_URL}/aiServicesPage` },
      { name: 'Business Analytics', url: `${SITE_URL}/dataanalyticsbusiness` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // EDUCATION — COURSES
  // ═══════════════════════════════════════════════════
  '/allCoursesPage': {
    title: 'IT Training Courses | Technology & Design Courses with Certificates | Engloray',
    description: 'Explore Engloray professional IT training courses. Learn UI/UX design, graphic design, Java full-stack development, digital marketing, and drawing with industry-ready curriculum and certificates.',
    canonical: `${SITE_URL}/allCoursesPage`,
    h1: 'Professional IT & Creative Courses',
    primaryKeyword: 'IT training institute',
    secondaryKeywords: ['technology training company', 'online technology courses', 'IT courses with certificate', 'Engloray courses'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'All Courses', url: `${SITE_URL}/allCoursesPage` }
    ],
    robots: 'index, follow',
  },

  '/uiuxDesignCoursePage': {
    title: 'UI/UX Design Course | Learn UI/UX with Certificate & Internship | Engloray',
    description: 'Enroll in Engloray UI/UX design course. Learn user interface design, user experience design, Figma, wireframing, and prototyping with hands-on projects, industry certificate, and internship opportunities.',
    canonical: `${SITE_URL}/uiuxDesignCoursePage`,
    h1: 'UI/UX Design Course',
    primaryKeyword: 'UI UX design course',
    secondaryKeywords: ['UI UX course for beginners', 'UI UX course with certificate', 'Figma course', 'UI UX course with internship'],
    ogType: 'website',
    schema: ['Course', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'UI/UX Design Course', url: `${SITE_URL}/uiuxDesignCoursePage` }
    ],
    robots: 'index, follow',
  },

  '/graphicsDesignCoursePage': {
    title: 'Graphic Design Course | Learn Design with Certificate & Internship | Engloray',
    description: 'Join Engloray graphic design course. Learn Photoshop, Illustrator, Adobe design tools, social media design, and branding with practical projects, professional certificate, and internship placement.',
    canonical: `${SITE_URL}/graphicsDesignCoursePage`,
    h1: 'Graphic Design Course',
    primaryKeyword: 'graphic design course',
    secondaryKeywords: ['Photoshop course', 'Illustrator course', 'graphic design certification', 'graphic design course with internship'],
    ogType: 'website',
    schema: ['Course', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Graphic Design Course', url: `${SITE_URL}/graphicsDesignCoursePage` }
    ],
    robots: 'index, follow',
  },

  '/javaFullStackCourseCoursePage': {
    title: 'Java Full Stack Development Course | Learn Java, Spring Boot & React | Engloray',
    description: 'Master Java full-stack development with Engloray. Learn Java, Spring Boot, React, database management, API development, and deployment with live project training and career-oriented certification.',
    canonical: `${SITE_URL}/javaFullStackCourseCoursePage`,
    h1: 'Java Full Stack Development Course',
    primaryKeyword: 'software development courses',
    secondaryKeywords: ['Java internship', 'Spring Boot internship', 'full-stack development internship', 'programming courses'],
    ogType: 'website',
    schema: ['Course', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Java Full Stack Course', url: `${SITE_URL}/javaFullStackCourseCoursePage` }
    ],
    robots: 'index, follow',
  },

  '/drawingCoursePage': {
    title: 'Online Drawing Course | Learn Sketching, Illustration & Digital Art | Engloray',
    description: 'Enroll in Engloray online drawing course. Learn professional sketching, digital illustration, character drawing, painting techniques, and creative art with expert mentors and certification.',
    canonical: `${SITE_URL}/drawingCoursePage`,
    h1: 'Online Drawing & Creative Art Course',
    primaryKeyword: 'online drawing course',
    secondaryKeywords: ['drawing course', 'digital art course', 'illustration course', 'sketching course'],
    ogType: 'website',
    schema: ['Course', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Drawing Course', url: `${SITE_URL}/drawingCoursePage` }
    ],
    robots: 'index, follow',
  },

  '/digitalMarketingCoursePage': {
    title: 'Digital Marketing Course | Learn SEO, Social Media & Ads | Engloray',
    description: 'Learn digital marketing with Engloray. Master SEO, social media marketing, Google Ads, content marketing, email marketing, and analytics with practical training and industry certification.',
    canonical: `${SITE_URL}/digitalMarketingCoursePage`,
    h1: 'Digital Marketing Course',
    primaryKeyword: 'digital marketing course',
    secondaryKeywords: ['SEO course', 'social media marketing course', 'online marketing course'],
    ogType: 'website',
    schema: ['Course', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Digital Marketing Course', url: `${SITE_URL}/digitalMarketingCoursePage` }
    ],
    robots: 'index, follow',
  },

  '/corporateTraining': {
    title: 'Corporate Technology Training | Team Upskilling Programs | Engloray',
    description: 'Engloray provides corporate technology training programs for teams and organizations. Upskill your workforce in software development, AI, UI/UX, digital marketing, and emerging technologies.',
    canonical: `${SITE_URL}/corporateTraining`,
    h1: 'Corporate Technology Training',
    primaryKeyword: 'corporate technology training',
    secondaryKeywords: ['technology training company', 'industry-ready training', 'professional certification courses'],
    ogType: 'website',
    schema: ['Service', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Corporate Training', url: `${SITE_URL}/corporateTraining` }
    ],
    robots: 'index, follow',
  },

  '/mentorshipLearningPage': {
    title: 'Mentorship Learning Program | Industry Expert Guidance | Engloray',
    description: 'Engloray mentorship learning program connects students with industry experts for guided learning. Get personalized mentorship in technology, design, and marketing for career growth.',
    canonical: `${SITE_URL}/mentorshipLearningPage`,
    h1: 'Mentorship Learning Program',
    primaryKeyword: 'mentorship learning program',
    secondaryKeywords: ['practical technology training', 'career development courses'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Mentorship Learning', url: `${SITE_URL}/mentorshipLearningPage` }
    ],
    robots: 'index, follow',
  },

  '/projectBasedLearningPage': {
    title: 'Project-Based Learning | Live Project Training & Hands-On Experience | Engloray',
    description: 'Learn by doing with Engloray project-based learning. Work on real-world live projects in software development, web development, AI, and design to build your professional portfolio.',
    canonical: `${SITE_URL}/projectBasedLearningPage`,
    h1: 'Project-Based Learning Program',
    primaryKeyword: 'live project training',
    secondaryKeywords: ['project-based internship', 'internship with live projects', 'practical technology training'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Project-Based Learning', url: `${SITE_URL}/projectBasedLearningPage` }
    ],
    robots: 'index, follow',
  },

  '/workshopsPage': {
    title: 'Technology Workshops | Hands-On Tech & Design Workshops | Engloray',
    description: 'Join Engloray technology workshops covering software development, UI/UX design, AI, digital marketing, and creative design. Hands-on learning experiences for students and professionals.',
    canonical: `${SITE_URL}/workshopsPage`,
    h1: 'Technology Workshops',
    primaryKeyword: 'technology workshops',
    secondaryKeywords: ['tech workshops for students', 'design workshops', 'coding workshops'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Education', url: `${SITE_URL}/allCoursesPage` },
      { name: 'Workshops', url: `${SITE_URL}/workshopsPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // INTERNSHIP PAGES
  // ═══════════════════════════════════════════════════
  '/allProgramsPage': {
    title: 'Internship Programs | IT, Design & Marketing Internships with Certificate | Engloray',
    description: 'Explore Engloray internship programs in web development, graphic design, UI/UX, software development, digital marketing, and more. Remote internships with live projects and experience certificates.',
    canonical: `${SITE_URL}/allProgramsPage`,
    h1: 'Internship Programs',
    primaryKeyword: 'internship for students',
    secondaryKeywords: ['internship with certificate', 'online internship', 'IT internship', 'Engloray internships'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'All Programs', url: `${SITE_URL}/allProgramsPage` }
    ],
    robots: 'index, follow',
  },

  '/GraphicDesignerInternPage': {
    title: 'Graphic Design Internship | Creative Design Intern Program with Certificate | Engloray',
    description: 'Apply for Engloray graphic design internship. Gain hands-on experience in social media design, branding, poster design, and digital art with live projects and experience certificate.',
    canonical: `${SITE_URL}/GraphicDesignerInternPage`,
    h1: 'Graphic Design Internship',
    primaryKeyword: 'graphic design internship',
    secondaryKeywords: ['creative design internship', 'internship with certificate'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Graphic Design Internship', url: `${SITE_URL}/GraphicDesignerInternPage` }
    ],
    robots: 'index, follow',
  },

  '/websiteDeveloperInternPage': {
    title: 'Web Development Internship | Frontend & Backend Developer Intern | Engloray',
    description: 'Join Engloray web development internship program. Learn React, Node.js, full-stack development with real-world projects. Remote internship with experience certificate for students and freshers.',
    canonical: `${SITE_URL}/websiteDeveloperInternPage`,
    h1: 'Web Development Internship',
    primaryKeyword: 'web development internship',
    secondaryKeywords: ['frontend development internship', 'React internship', 'full-stack development internship'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Web Development Internship', url: `${SITE_URL}/websiteDeveloperInternPage` }
    ],
    robots: 'index, follow',
  },

  '/uiuxDesignerInternPage': {
    title: 'UI/UX Design Internship | Design Intern Program with Live Projects | Engloray',
    description: 'Apply for Engloray UI/UX design internship. Work on real design projects using Figma, learn wireframing and prototyping. Remote internship with professional experience certificate.',
    canonical: `${SITE_URL}/uiuxDesignerInternPage`,
    h1: 'UI/UX Design Internship',
    primaryKeyword: 'UI UX internship',
    secondaryKeywords: ['UI UX internship program', 'design internship with certificate'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'UI/UX Design Internship', url: `${SITE_URL}/uiuxDesignerInternPage` }
    ],
    robots: 'index, follow',
  },

  '/SoftwareDeveloperInternPage': {
    title: 'Software Development Internship | Java, Python & Full-Stack Intern | Engloray',
    description: 'Join Engloray software development internship. Build real software with Java, Python, Spring Boot. Gain practical experience in enterprise software development with experience certificate.',
    canonical: `${SITE_URL}/SoftwareDeveloperInternPage`,
    h1: 'Software Development Internship',
    primaryKeyword: 'software development internship',
    secondaryKeywords: ['Java internship', 'Python internship', 'backend development internship'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Software Development Internship', url: `${SITE_URL}/SoftwareDeveloperInternPage` }
    ],
    robots: 'index, follow',
  },

  '/salesExecutiveInternPage': {
    title: 'Sales Executive Internship | Business Sales Intern Program | Engloray',
    description: 'Apply for Engloray sales executive internship. Develop sales skills, learn lead generation, CRM management, and business development with real-world experience and professional certificate.',
    canonical: `${SITE_URL}/salesExecutiveInternPage`,
    h1: 'Sales Executive Internship',
    primaryKeyword: 'sales executive internship',
    secondaryKeywords: ['business internship', 'internship for freshers'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Sales Executive Internship', url: `${SITE_URL}/salesExecutiveInternPage` }
    ],
    robots: 'index, follow',
  },

  '/businessDevelopmentInternPage': {
    title: 'Business Development Internship | BD Intern Program | Engloray',
    description: 'Join Engloray business development internship. Learn market research, client acquisition, proposal writing, and strategic partnership development with live projects and experience certificate.',
    canonical: `${SITE_URL}/businessDevelopmentInternPage`,
    h1: 'Business Development Internship',
    primaryKeyword: 'business development internship',
    secondaryKeywords: ['internship for college students', 'career internship program'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Business Development Internship', url: `${SITE_URL}/businessDevelopmentInternPage` }
    ],
    robots: 'index, follow',
  },

  '/trainingMentorInternPage': {
    title: 'Training Mentor Internship | Teaching & Mentorship Intern Program | Engloray',
    description: 'Apply for Engloray training mentor internship. Develop teaching, mentorship, and presentation skills by guiding students through technology and creative courses with live projects.',
    canonical: `${SITE_URL}/trainingMentorInternPage`,
    h1: 'Training Mentor Internship',
    primaryKeyword: 'training mentor internship',
    secondaryKeywords: ['internship with experience certificate', 'industry internship program'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Internships', url: `${SITE_URL}/allProgramsPage` },
      { name: 'Training Mentor Internship', url: `${SITE_URL}/trainingMentorInternPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // RAYMART / E-COMMERCE PAGES
  // ═══════════════════════════════════════════════════
  '/raymartPage': {
    title: 'Raymart | Online Products & Services Marketplace | Engloray',
    description: 'Raymart by Engloray is an online marketplace for products and digital services. Buy graphic design, video editing, website development, branding, and professional services online.',
    canonical: `${SITE_URL}/raymartPage`,
    h1: 'Raymart Online Marketplace',
    primaryKeyword: 'Raymart online marketplace',
    secondaryKeywords: ['products and services marketplace', 'digital services marketplace', 'Engloray Raymart'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Raymart', url: `${SITE_URL}/raymartPage` }
    ],
    robots: 'index, follow',
  },

  '/raymartPageTwo': {
    title: 'Raymart Products | Shop Online Products & Digital Solutions | Engloray',
    description: 'Browse Raymart products and digital solutions. Shop affordable graphic design, branding, video editing, and technology services on the Engloray Raymart online marketplace.',
    canonical: `${SITE_URL}/raymartPageTwo`,
    h1: 'Raymart Products & Solutions',
    primaryKeyword: 'online products and services marketplace',
    secondaryKeywords: ['buy products online', 'digital products marketplace'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Raymart', url: `${SITE_URL}/raymartPage` },
      { name: 'Products', url: `${SITE_URL}/raymartPageTwo` }
    ],
    robots: 'index, follow',
  },

  '/raymartPageThree': {
    title: 'Raymart Services | Professional Digital Services Online | Engloray',
    description: 'Explore Raymart professional digital services. Get website development, app development, UI/UX design, branding, and marketing services from verified professionals on the Engloray marketplace.',
    canonical: `${SITE_URL}/raymartPageThree`,
    h1: 'Raymart Professional Services',
    primaryKeyword: 'digital services marketplace',
    secondaryKeywords: ['creative services marketplace', 'technology services marketplace'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Raymart', url: `${SITE_URL}/raymartPage` },
      { name: 'Services', url: `${SITE_URL}/raymartPageThree` }
    ],
    robots: 'index, follow',
  },

  '/raymartPageFour': {
    title: 'Raymart FAQ | Frequently Asked Questions | Engloray',
    description: 'Find answers to frequently asked questions about Raymart marketplace, ordering, services, payments, and delivery. Get help with your Raymart account and orders.',
    canonical: `${SITE_URL}/raymartPageFour`,
    h1: 'Raymart Frequently Asked Questions',
    primaryKeyword: 'Raymart marketplace FAQ',
    secondaryKeywords: ['Raymart help', 'Raymart support'],
    ogType: 'website',
    schema: ['FAQPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Raymart', url: `${SITE_URL}/raymartPage` },
      { name: 'FAQ', url: `${SITE_URL}/raymartPageFour` }
    ],
    robots: 'index, follow',
  },

  '/jobSeekerPage': {
    title: 'Job Seeker Platform | Find Technology & Creative Jobs | Engloray',
    description: 'Engloray Job Seeker platform connects talented professionals with technology, creative, and marketing job opportunities. Find your next career opportunity in IT, design, and digital marketing.',
    canonical: `${SITE_URL}/jobSeekerPage`,
    h1: 'Job Seeker Platform',
    primaryKeyword: 'job portal platform',
    secondaryKeywords: ['technology jobs', 'creative jobs', 'IT job portal'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/jobSeekerPage` },
      { name: 'Job Seeker', url: `${SITE_URL}/jobSeekerPage` }
    ],
    robots: 'index, follow',
  },

  '/learningPage': {
    title: 'Online Learning Platform | Technology & Creative Courses | Engloray',
    description: 'Engloray online learning platform offers technology, design, and marketing courses. Access video lessons, live projects, mentorship, and certifications for career growth in the digital industry.',
    canonical: `${SITE_URL}/learningPage`,
    h1: 'Online Learning Platform',
    primaryKeyword: 'online IT education platform',
    secondaryKeywords: ['online technology courses', 'skill development courses', 'Engloray education'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Products', url: `${SITE_URL}/learningPage` },
      { name: 'Learning Platform', url: `${SITE_URL}/learningPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // COMPANY PAGES
  // ═══════════════════════════════════════════════════
  '/ourStoryPage': {
    title: 'About Engloray | Our Story, Vision & Mission | Technology Company',
    description: 'Learn about Engloray — a technology, AI, creative, and education company. Discover our story, vision, mission, values, and commitment to delivering innovative digital solutions for businesses worldwide.',
    canonical: `${SITE_URL}/ourStoryPage`,
    h1: 'About Engloray — Our Story',
    primaryKeyword: 'Engloray company',
    secondaryKeywords: ['Engloray technologies', 'Engloray technology company', 'about Engloray'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About', url: `${SITE_URL}/ourStoryPage` },
      { name: 'Our Story', url: `${SITE_URL}/ourStoryPage` }
    ],
    robots: 'index, follow',
  },

  '/ourTeamPage': {
    title: 'Our Team | Meet the Engloray Leadership & Expert Team',
    description: 'Meet the talented team behind Engloray. Our experts in technology, AI, design, marketing, and education are dedicated to delivering world-class digital solutions and creative services.',
    canonical: `${SITE_URL}/ourTeamPage`,
    h1: 'Meet the Engloray Team',
    primaryKeyword: 'Engloray team',
    secondaryKeywords: ['Engloray leadership', 'Engloray experts'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'About', url: `${SITE_URL}/ourStoryPage` },
      { name: 'Our Team', url: `${SITE_URL}/ourTeamPage` }
    ],
    robots: 'index, follow',
  },

  '/contactPage': {
    title: 'Contact Engloray | Get In Touch for Services, Courses & Solutions',
    description: 'Contact Engloray for technology services, AI solutions, app development, web development, branding, courses, and internships. Reach us via phone, email, or visit our office in Madurai, Tamil Nadu.',
    canonical: `${SITE_URL}/contactPage`,
    h1: 'Contact Engloray',
    primaryKeyword: 'contact Engloray',
    secondaryKeywords: ['Engloray contact', 'Engloray phone number', 'Engloray email'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Contact', url: `${SITE_URL}/contactPage` }
    ],
    robots: 'index, follow',
  },

  '/CareersPage': {
    title: 'Careers at Engloray | Join Our Technology & Creative Team',
    description: 'Explore career opportunities at Engloray. Join our team of developers, designers, marketers, and AI engineers. We are hiring talented professionals passionate about technology and innovation.',
    canonical: `${SITE_URL}/CareersPage`,
    h1: 'Careers at Engloray',
    primaryKeyword: 'Engloray careers',
    secondaryKeywords: ['technology jobs', 'Engloray hiring', 'creative careers'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Careers', url: `${SITE_URL}/CareersPage` }
    ],
    robots: 'index, follow',
  },

  '/worksCaseStudiesPage': {
    title: 'Case Studies | Engloray Client Success Stories & Project Results',
    description: 'Explore Engloray case studies showcasing successful client projects in app development, web development, AI, branding, and digital marketing. See real results and business impact.',
    canonical: `${SITE_URL}/worksCaseStudiesPage`,
    h1: 'Case Studies & Success Stories',
    primaryKeyword: 'Engloray case studies',
    secondaryKeywords: ['Engloray projects', 'client success stories'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Works', url: `${SITE_URL}/worksCaseStudiesPage` },
      { name: 'Case Studies', url: `${SITE_URL}/worksCaseStudiesPage` }
    ],
    robots: 'index, follow',
  },

  '/worksClientProjectsPage': {
    title: 'Client Projects & Portfolio | Engloray Development & Design Showcase',
    description: 'View Engloray client projects and portfolio. Browse our work in mobile app development, website development, UI/UX design, branding, graphic design, and AI solutions.',
    canonical: `${SITE_URL}/worksClientProjectsPage`,
    h1: 'Client Projects & Portfolio',
    primaryKeyword: 'Engloray portfolio',
    secondaryKeywords: ['Engloray client projects', 'web development portfolio', 'app development portfolio'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Works', url: `${SITE_URL}/worksCaseStudiesPage` },
      { name: 'Client Projects', url: `${SITE_URL}/worksClientProjectsPage` }
    ],
    robots: 'index, follow',
  },

  '/allProjectsPage': {
    title: 'All Projects | Engloray Technology & Creative Project Gallery',
    description: 'Explore all Engloray projects across technology, development, design, AI, and marketing. See our complete portfolio of digital solutions delivered for businesses and startups.',
    canonical: `${SITE_URL}/allProjectsPage`,
    h1: 'All Projects',
    primaryKeyword: 'Engloray projects',
    secondaryKeywords: ['technology projects', 'development projects'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Works', url: `${SITE_URL}/worksCaseStudiesPage` },
      { name: 'All Projects', url: `${SITE_URL}/allProjectsPage` }
    ],
    robots: 'index, follow',
  },

  '/showcase': {
    title: 'Engloray Showcase | Featured Work & Innovation Highlights',
    description: 'Discover Engloray showcase featuring our most innovative projects, cutting-edge AI solutions, creative designs, and technology achievements. See what makes Engloray a trusted digital partner.',
    canonical: `${SITE_URL}/showcase`,
    h1: 'Engloray Showcase',
    primaryKeyword: 'Engloray showcase',
    secondaryKeywords: ['Engloray featured work', 'innovation highlights'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Showcase', url: `${SITE_URL}/showcase` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // TECH GROUP & TECH LEARNING SECTIONS
  // ═══════════════════════════════════════════════════
  '/tech-group': {
    title: 'Engloray Tech Group | Technology Services & Digital Solutions',
    description: 'Engloray Tech Group delivers comprehensive technology services including software development, app development, AI solutions, and digital transformation for businesses and enterprises.',
    canonical: `${SITE_URL}/tech-group`,
    h1: 'Engloray Tech Group',
    primaryKeyword: 'Engloray technology company',
    secondaryKeywords: ['technology services', 'digital solutions', 'Engloray services'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Tech Group', url: `${SITE_URL}/tech-group` }
    ],
    robots: 'index, follow',
  },

  '/tech-learning': {
    title: 'Engloray Tech Learning | Education, Courses & Skill Development',
    description: 'Engloray Tech Learning provides professional IT courses, creative design training, internships, and skill development programs. Learn technology, design, and marketing from industry experts.',
    canonical: `${SITE_URL}/tech-learning`,
    h1: 'Engloray Tech Learning',
    primaryKeyword: 'Engloray education',
    secondaryKeywords: ['technology training', 'skill development courses', 'IT education platform'],
    ogType: 'website',
    schema: ['WebPage', 'BreadcrumbList'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Tech Learning', url: `${SITE_URL}/tech-learning` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // LEGAL PAGES
  // ═══════════════════════════════════════════════════
  '/privacyPolicyPage': {
    title: 'Privacy Policy | Engloray',
    description: 'Read Engloray privacy policy. Learn how we collect, use, and protect your personal data when you use our website, services, courses, and digital platforms.',
    canonical: `${SITE_URL}/privacyPolicyPage`,
    h1: 'Privacy Policy',
    primaryKeyword: 'Engloray privacy policy',
    secondaryKeywords: [],
    ogType: 'website',
    schema: ['WebPage'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Privacy Policy', url: `${SITE_URL}/privacyPolicyPage` }
    ],
    robots: 'index, follow',
  },

  '/cookiesPolicyPage': {
    title: 'Cookie Policy | Engloray',
    description: 'Read Engloray cookie policy. Understand how we use cookies and similar technologies on our website to improve your browsing experience.',
    canonical: `${SITE_URL}/cookiesPolicyPage`,
    h1: 'Cookie Policy',
    primaryKeyword: 'Engloray cookie policy',
    secondaryKeywords: [],
    ogType: 'website',
    schema: ['WebPage'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Cookie Policy', url: `${SITE_URL}/cookiesPolicyPage` }
    ],
    robots: 'index, follow',
  },

  '/termsAndServicesPage': {
    title: 'Terms of Service | Engloray',
    description: 'Read Engloray terms of service. Understand the terms and conditions that govern your use of our website, services, courses, and digital platforms.',
    canonical: `${SITE_URL}/termsAndServicesPage`,
    h1: 'Terms of Service',
    primaryKeyword: 'Engloray terms of service',
    secondaryKeywords: [],
    ogType: 'website',
    schema: ['WebPage'],
    breadcrumbs: [
      { name: 'Home', url: `${SITE_URL}/` },
      { name: 'Terms of Service', url: `${SITE_URL}/termsAndServicesPage` }
    ],
    robots: 'index, follow',
  },

  // ═══════════════════════════════════════════════════
  // NOINDEX PAGES (internal/component routes)
  // ═══════════════════════════════════════════════════
  '/admissionPortal': {
    title: 'Admission Portal | Engloray',
    description: 'Engloray admission portal for course enrollment and internship applications.',
    canonical: `${SITE_URL}/admissionPortal`,
    h1: 'Admission Portal',
    primaryKeyword: '',
    secondaryKeywords: [],
    ogType: 'website',
    schema: [],
    breadcrumbs: [],
    robots: 'noindex, nofollow',
    noindex: true,
  },

  '/mainPageSubFooter': {
    title: 'Footer | Engloray',
    description: '',
    canonical: `${SITE_URL}/mainPageSubFooter`,
    noindex: true,
    robots: 'noindex, nofollow',
    schema: [],
    breadcrumbs: [],
  },

  '/techGroupSubPageFooter': {
    title: 'Footer | Engloray',
    description: '',
    canonical: `${SITE_URL}/techGroupSubPageFooter`,
    noindex: true,
    robots: 'noindex, nofollow',
    schema: [],
    breadcrumbs: [],
  },

  '/techLearningSubPageFooter': {
    title: 'Footer | Engloray',
    description: '',
    canonical: `${SITE_URL}/techLearningSubPageFooter`,
    noindex: true,
    robots: 'noindex, nofollow',
    schema: [],
    breadcrumbs: [],
  },

  '/raymartNavbar': {
    title: 'Navbar | Engloray',
    description: '',
    canonical: `${SITE_URL}/raymartNavbar`,
    noindex: true,
    robots: 'noindex, nofollow',
    schema: [],
    breadcrumbs: [],
  },

  '/StatsAndBenefitsPage': {
    title: 'Stats and Benefits | Engloray',
    description: '',
    canonical: `${SITE_URL}/StatsAndBenefitsPage`,
    noindex: true,
    robots: 'noindex, nofollow',
    schema: [],
    breadcrumbs: [],
  },
};

export { seoConfig, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIAL_PROFILES };
export default seoConfig;
