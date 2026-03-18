import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  const passages = [
    {
      id: 1,
      title: "Scope of This Policy",
      content: "This policy applies to:",
      bulletPoints: [
        "Visitors to Engloray websites",
        "Clients using our branding, design, web, software, and digital marketing services",
        "Students, interns, and learners enrolled in Engloray Learning Generation",
        "Users interacting with our forms, ads, and communications"
      ]
    },
    {
      id: 2,
      title: "Information We Collect",
      sections: [
        {
          title: "Personal Information",
          content: "We may collect personal details including:",
          bulletPoints: [
            "Full name",
            "Email address",
            "Phone number",
            "Business or institution name",
            "Course, service, or consultation details",
            "Billing and payment information (processed securely via third-party gateways)"
          ]
        },
        {
          title: "Technical & Usage Information",
          content: "Automatically collected data may include:",
          bulletPoints: [
            "IP address",
            "Browser and device type",
            "Operating system",
            "Pages visited, time spent, and referral sources",
            "Interaction with website content and advertisements"
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Purpose of Data Collection",
      content: "Engloray collects information to:",
      bulletPoints: [
        "Provide and manage professional services and learning programs",
        "Communicate with clients, students, and partners",
        "Process enrollments, payments, and support requests",
        "Improve website performance and user experience",
        "Conduct internal analysis and business improvement",
        "Maintain security, compliance, and fraud prevention"
      ]
    },
    {
      id: 4,
      title: "Legal Basis for Processing Data",
      content: "We process personal data based on:",
      bulletPoints: [
        "User consent",
        "Contractual necessity",
        "Legitimate business interests",
        "Legal and regulatory obligations"
      ]
    },
    {
      id: 5,
      title: "Cookies & Tracking Technologies",
      content: "We use cookies and similar technologies to:",
      bulletPoints: [
        "Enhance website functionality",
        "Analyze traffic and user behavior",
        "Improve marketing effectiveness"
      ],
      note: "Users may control or disable cookies through browser settings. Disabling cookies may affect certain website features."
    },
    {
      id: 6,
      title: "Data Sharing & Confidentiality",
      content: "Engloray follows a strict no-selling policy for personal data. Information may be shared only:",
      bulletPoints: [
        "With authorized internal team members",
        "With trusted third-party service providers (hosting, payment processing)",
        "When legally required by law or government authorities"
      ],
      note: "All partners are required to maintain confidentiality and data protection standards."
    },
    {
      id: 7,
      title: "Data Security Measures",
      content: "We implement appropriate safeguards, including:",
      bulletPoints: [
        "Secure hosting environments",
        "Limited access controls",
        "Confidentiality agreements with staff and interns",
        "Regular monitoring for unauthorized access"
      ],
      note: "While we take strong measures, no digital system can guarantee absolute security."
    },
    {
      id: 8,
      title: "Student, Intern & Client Data Protection",
      bulletPoints: [
        "Student records, assignments, and certifications are stored securely",
        "Client projects, designs, strategies, and business data remain confidential",
        "Intern and trainee access is limited and supervised",
        "All intellectual property remains protected"
      ]
    },
    {
      id: 9,
      title: "Data Retention Policy",
      content: "We retain personal data only:",
      bulletPoints: [
        "As long as required to fulfill services or learning objectives",
        "To comply with legal, accounting, or regulatory requirements"
      ],
      note: "When data is no longer needed, it is securely deleted or anonymized."
    },
    {
      id: 10,
      title: "International Data Transfers",
      content: "Engloray may serve clients and students globally. By using our website, you consent to the transfer and processing of your data in accordance with this Privacy Policy and applicable laws."
    },
    {
      id: 11,
      title: "User Rights & Choices",
      content: "You have the right to:",
      bulletPoints: [
        "Access your personal information",
        "Request correction or updates",
        "Request data deletion (subject to legal obligations)",
        "Withdraw consent for marketing communications"
      ],
      note: "Requests can be submitted using the contact details below."
    },
    {
      id: 12,
      title: "Third-Party Websites",
      content: "Our website may include links to third-party platforms. Engloray is not responsible for the privacy practices or content of external websites."
    },
    {
      id: 13,
      title: "Children's Privacy",
      content: "Engloray does not knowingly collect personal data from children under the age of 13 without parental consent."
    },
    {
      id: 14,
      title: "Policy Updates & Changes",
      content: "We may update this Privacy Policy periodically. Any updates will be posted on this page with a revised effective date."
    },
    {
      id: 15,
      title: "Contact Information",
      content: "For questions, concerns, or data requests, contact:",
      bulletPoints: [
        "Email: engloray@gmail.com",
        "Phone: +91 6381759909",
        "       +91 6369945920",
        "Address: Madurai, TamilNadu, INDIA"
      ]
    }
  ];

  return (
    <div className="pp-privacy-policy-container">
      {/* Header Section */}
      <header className="pp-privacy-header-section">
        <div className="pp-policy-header">
          <h1>Engloray Privacy Policy</h1>
          <p className="pp-last-updated">Last Update: November 3, 2025</p>
        </div>
      </header>
      
      {/* Main Content Section */}
      <main className="pp-privacy-content-section">
        {/* Wave Background */}
        <div className="pp-wave-container">
          <div className="pp-wave-layer-1"></div>
          <div className="pp-wave-layer-2"></div>
          <div className="pp-wave-layer-3"></div>
        </div>
        
        <div className="pp-policy-content">
          <div className="pp-intro-text">
            <p>
              Engloray processes information both for its own business purposes (as a "controller") and in connection with our Services offered to customers (as a "processor"). This Policy enables you to understand how we handle your personal information when you interact with our website, services, or marketing materials.
            </p>
            <p>
              The term "you" or "users" is used to refer to individuals browsing, installing, downloading, accessing or otherwise using our Website, content, or our Services. The term "customer" is used to describe legal entities that use our Services.
            </p>
          </div>
          
          <div className="pp-passages-container">
            {passages.map(passage => (
              <section key={passage.id} className="pp-policy-passage">
                <div className="pp-passage-number">{passage.id}.</div>
                <div className="pp-passage-content">
                  <h2>{passage.title}</h2>
                  
                  {/* Main content */}
                  {passage.content && <p>{passage.content}</p>}
                  
                  {/* Bullet points */}
                  {passage.bulletPoints && (
                    <ul className="pp-bullet-points">
                      {passage.bulletPoints.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Subsections (for Information We Collect section) */}
                  {passage.sections && passage.sections.map((section, index) => (
                    <div key={index} className="pp-subsection">
                      <h3 className="pp-subsection-title">{section.title}</h3>
                      {section.content && <p>{section.content}</p>}
                      {section.bulletPoints && (
                        <ul className="pp-bullet-points pp-nested">
                          {section.bulletPoints.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  
                  {/* Note/Additional content */}
                  {passage.note && <p className="pp-note">{passage.note}</p>}
                </div>
              </section>
            ))}
          </div>
          
          <div className="pp-additional-info">
            <h2>Additional Information</h2>
            <p>
              For more detailed information about our data practices, or if you have any questions about this Privacy Policy, please contact us using the contact information provided above. We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="pp-privacy-footer-section">
        <div className="pp-policy-footer">
          <div className="pp-footer-content">
            <div className="pp-footer-left">
              <p className="pp-copyright">© 2025, Engloray, Inc. All rights reserved.</p>
            </div>
            <div className="pp-footer-right">
              <nav className="pp-footer-nav">
                <a href="/" className="pp-footer-link active">Privacy Policy</a>
                <a href="/termsAndServicesPage" className="pp-footer-link">Terms of Use</a>
                <a href="/cookiesPolicyPage" className="pp-footer-link">Cookie Policy</a>
              </nav>
            </div>
          </div>
            
          {/* Company branding at bottom */}
          <div className="pp-footer-bottom">
            <div className="pp-footer-branding">
              <p className="pp-company-logo">engloray.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;