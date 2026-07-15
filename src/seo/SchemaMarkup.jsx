/**
 * SchemaMarkup — Reusable JSON-LD structured data component.
 * 
 * Generates valid JSON-LD for search engines based on schema type.
 * 
 * Usage:
 *   <SchemaMarkup pageKey="/" />
 *   <SchemaMarkup pageKey="/aiServicesPage" />
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, SOCIAL_PROFILES } from './seoConfig';

/**
 * Generate Organization schema (used on homepage)
 */
const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Engloray',
  alternateName: ['Engloray Technologies', 'Engloray Tech Group', 'Engloray Company'],
  url: SITE_URL,
  logo: `${SITE_URL}/logo512.png`,
  description: 'Engloray is a multi-service technology, creative, education, AI, and digital solutions company offering app development, web development, software development, AI services, UI/UX design, branding, graphic design, video editing, digital marketing, ERP, CRM, SaaS products, courses, internships, and e-commerce solutions.',
  foundingDate: '2020',
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-6381769909',
      contactType: 'customer service',
      email: 'engloray@gmail.com',
      areaServed: 'IN',
      availableLanguage: ['English', 'Tamil']
    }
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN'
  },
  sameAs: SOCIAL_PROFILES,
});

/**
 * Generate WebSite schema with SearchAction (used on homepage)
 */
const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  alternateName: 'Engloray Technologies',
  url: SITE_URL,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/logo512.png`
    }
  }
});

/**
 * Generate Service schema
 */
const generateServiceSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: config.h1 || config.title.split('|')[0].trim(),
  description: config.description,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo512.png`
  },
  url: config.canonical,
  areaServed: {
    '@type': 'Country',
    name: 'India'
  },
  serviceType: config.primaryKeyword || config.h1,
});

/**
 * Generate Course schema
 */
const generateCourseSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: config.h1 || config.title.split('|')[0].trim(),
  description: config.description,
  provider: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo512.png`
  },
  url: config.canonical,
  courseMode: 'Online',
  educationalLevel: 'Beginner to Advanced',
  inLanguage: 'en',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Online',
    courseWorkload: 'PT40H',
  }
});

/**
 * Generate SoftwareApplication schema
 */
const generateSoftwareApplicationSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: config.h1 || config.title.split('|')[0].trim(),
  description: config.description,
  url: config.canonical,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
  },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL
  }
});

/**
 * Generate WebPage schema
 */
const generateWebPageSchema = (config) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: config.h1 || config.title.split('|')[0].trim(),
  description: config.description,
  url: config.canonical,
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo512.png`
  },
  inLanguage: 'en',
});

/**
 * Generate BreadcrumbList schema
 */
const generateBreadcrumbSchema = (breadcrumbs) => {
  if (!breadcrumbs || breadcrumbs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

/**
 * Schema type to generator mapping
 */
const schemaGenerators = {
  Organization: () => generateOrganizationSchema(),
  WebSite: () => generateWebSiteSchema(),
  Service: (config) => generateServiceSchema(config),
  Course: (config) => generateCourseSchema(config),
  SoftwareApplication: (config) => generateSoftwareApplicationSchema(config),
  WebPage: (config) => generateWebPageSchema(config),
  FAQPage: (config) => generateWebPageSchema(config), // Base, can be enhanced with actual FAQ data
  BreadcrumbList: (config) => generateBreadcrumbSchema(config.breadcrumbs),
};

const SchemaMarkup = ({ pageKey }) => {
  const config = seoConfig[pageKey];

  if (!config || !config.schema || config.schema.length === 0) {
    return null;
  }

  const schemas = config.schema
    .map((schemaType) => {
      const generator = schemaGenerators[schemaType];
      if (generator) {
        return generator(config);
      }
      return null;
    })
    .filter(Boolean);

  if (schemas.length === 0) return null;

  return (
    <Helmet>
      {schemas.map((schema, index) => (
        <script
          key={`schema-${index}`}
          type="application/ld+json"
        >
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SchemaMarkup;
