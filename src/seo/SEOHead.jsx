/**
 * SEOHead — Reusable Helmet wrapper for consistent SEO metadata.
 * 
 * Usage:
 *   <SEOHead pageKey="/appDevelopmentPage" />
 *   or
 *   <SEOHead pageKey="/" />
 * 
 * Automatically generates: title, description, canonical, OG tags,
 * Twitter cards, robots directives from seoConfig.js.
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig, SITE_NAME, DEFAULT_OG_IMAGE } from './seoConfig';

const SEOHead = ({ pageKey, customTitle, customDescription, customImage }) => {
  const config = seoConfig[pageKey];

  if (!config) {
    console.warn(`SEOHead: No config found for pageKey="${pageKey}"`);
    return null;
  }

  const title = customTitle || config.title;
  const description = customDescription || config.description;
  const ogImage = customImage || DEFAULT_OG_IMAGE;
  const canonical = config.canonical;
  const robots = config.robots || 'index, follow';
  const ogType = config.ogType || 'website';

  return (
    <Helmet>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@engloraytech" />

      {/* Additional SEO signals */}
      <meta name="author" content="Engloray" />
      <meta name="publisher" content="Engloray" />
    </Helmet>
  );
};

export default SEOHead;
