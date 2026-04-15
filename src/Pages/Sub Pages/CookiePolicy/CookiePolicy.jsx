import React from 'react';
import './CookiePolicy.css';

const CookiePolicy = () => {
const cookieSections = [
  {
    id: 1,
    title: "What Are Cookies?",
    content: "Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. Cookies help websites function properly, remember user preferences, and improve user experience."
  },
  {
    id: 2,
    title: "How We Use Cookies",
    content: "Engloray uses cookies to:\n• Ensure the website works correctly\n• Improve website performance and speed\n• Understand how visitors interact with our content\n• Enhance user experience and navigation\n• Support marketing and analytics efforts"
  },
  {
    id: 3,
    title: "Essential Cookies",
    content: "These cookies are necessary for basic website functionality, such as:\n• Page navigation\n• Form submissions\n• Security and access control\n\nWithout these cookies, the website may not function properly."
  },
  {
    id: 4,
    title: "Performance & Analytics Cookies",
    content: "These cookies help us understand:\n• Visitor traffic and usage patterns\n• Popular pages and content\n• Website performance and errors\n\nThis data is used only for internal analysis and improvement."
  },
  {
    id: 5,
    title: "Functional Cookies",
    content: "These cookies remember:\n• User preferences\n• Language or region settings\n• Previously entered information\n\nThey help provide a more personalized experience."
  },
  {
    id: 6,
    title: "Marketing & Advertising Cookies",
    content: "These cookies may be used to:\n• Display relevant ads\n• Measure marketing campaign effectiveness\n• Track interactions with promotional content\n\nEngloray does not sell personal data to advertisers."
  },
  {
    id: 7,
    title: "Third-Party Cookies",
    content: "Some cookies may be placed by trusted third-party services such as:\n• Analytics providers (e.g., Google Analytics)\n• Payment gateways\n• Embedded content or tools\n\nEngloray does not control third-party cookie policies. Please review their respective privacy policies."
  },
  {
    id: 8,
    title: "Managing Cookies",
    content: "You can control or disable cookies through your browser settings:\n• Accept or reject cookies\n• Delete stored cookies\n• Set alerts for cookie usage\n\nPlease note that disabling cookies may affect website functionality."
  },
  {
    id: 9,
    title: "Consent",
    content: "By using our website, you:\n• Agree to the use of cookies as described in this policy\n• May withdraw consent at any time by changing browser settings"
  },
  {
    id: 10,
    title: "Updates to This Policy",
    content: "Engloray may update this Cookies Policy from time to time. Any changes will be posted on this page with an updated date."
  },
  {
    id: 11,
    title: "Contact Us",
    content: "If you have questions about our Cookies Policy, contact us at:\n[Your Contact Information Here]"
  }
];

  return (
    <div className="copa-cookies-container">
      {/* Header Section */}
      <header className="copa-cookies-header-section">
        <div className="copa-cookies-header">
          <h1>Engloray Cookies Policy</h1>
          <p className="copa-last-updated">Last Update: December 12, 2025</p>
        </div>
      </header>
      
      {/* Main Content Section */}
      <main className="copa-cookies-content-section">
        {/* Wave Background */}
        <div className="copa-wave-container">
          <div className="copa-wave-layer-1"></div>
          <div className="copa-wave-layer-2"></div>
          <div className="copa-wave-layer-3"></div>
        </div>
        
        <div className="copa-cookies-content">
          <div className="copa-intro-text">
            <p>
              This Cookies Policy explains how Engloray Tech Group and Engloray Learning Generation (“Engloray”, “we”, “our”, or “us”) use cookies and similar technologies on our website. 
            </p>
            <p>
              By continuing to use our website, you consent to the use of cookies in accordance with this policy.             </p>
          </div>
          
          <div className="copa-sections-container">
            {cookieSections.map(section => (
              <section key={section.id} className="copa-cookies-section">
                <div className="copa-section-number">{section.id}.</div>
                <div className="copa-section-content">
                  <h2>{section.title}</h2>
                  <p>{section.content}</p>
                </div>
              </section>
            ))}
          </div>
          
          <div className="copa-contact-section">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Cookies Policy or how we use cookies, please contact us:
            </p>
            <div className="copa-contact-details">
              <p><strong>Email:</strong>engloray@gmail.com </p>
              <p><strong>Address:</strong> Madurai, TamilNadu, INDIA</p>
              <p><strong>For cookie preferences:</strong> Manage your preferences through the cookie consent banner on our website.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="copa-cookies-footer-section">
        <div className="copa-cookies-footer">
          <div className="copa-footer-content">
            <div className="copa-footer-left">
              <p className="copa-copyright">Engloray © 2025</p>
            </div>
            <div className="copa-footer-right">
              <nav className="copa-footer-nav">
                <a href="/privacyPolicyPage" className="copa-footer-link">Privacy</a>
                <a href="/termsAndServicesPage" className="copa-footer-link">Terms of Use</a>
                <a href="/" className="copa-footer-link active">Cookies Policy</a>
              </nav>
            </div>
          </div>
          <div className="copa-footer-bottom">
            <div className="copa-footer-branding">
              <p className="copa-company-logo">Engloray.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CookiePolicy;
