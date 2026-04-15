import React from 'react';
import './TermsAndServices.css';

const TermsAndServices = () => {
  const termsPoints = [
    {
      id: 1,
      title: "Acceptance of Terms",
      content: "By accessing or using Engloray's website, services, or learning programs, you confirm that you:",
      bulletPoints: [
        "Have read and understood these Terms & Conditions",
        "Agree to comply with all applicable laws and regulations",
        "Accept responsibility for all activities performed under your account"
      ],
      note: "If you do not agree with these terms, please do not use our services."
    },
    {
      id: 2,
      title: "Services Overview",
      content: "Engloray provides:",
      bulletPoints: [
        "Branding, graphic design, UI/UX design, web development, software development, and digital marketing services",
        "Online and offline professional training programs through Engloray Learning Generation",
        "Internship, project-based learning, and certification programs"
      ],
      note: "Service details, timelines, and deliverables may vary based on the agreement or course selected."
    },
    {
      id: 3,
      title: "User Eligibility",
      content: "By using Engloray services, you confirm that:",
      bulletPoints: [
        "You are at least 18 years old or have parental/guardian consent",
        "The information you provide is accurate and complete",
        "You will use the services for lawful purposes only"
      ]
    },
    {
      id: 4,
      title: "User Responsibilities",
      content: "Users agree to:",
      bulletPoints: [
        "Provide accurate information during registration or enquiry",
        "Not misuse, copy, or redistribute content without permission",
        "Not engage in fraudulent, abusive, or harmful activities",
        "Respect instructors, team members, and other users"
      ],
      note: "Violation of these responsibilities may result in service suspension or termination."
    },
    {
      id: 5,
      title: "Payments, Fees & Billing",
      sections: [
        {
          title: "Services & Courses",
          content: "",
          bulletPoints: [
            "All fees must be paid as agreed before service delivery or course access",
            "Fees may vary based on selected services, packages, or programs"
          ]
        },
        {
          title: "EMI & Installments (If Applicable)",
          content: "",
          bulletPoints: [
            "EMI schedules must be followed strictly",
            "Late or missed payments may result in restricted access",
            "Any extra payment adjustments are applied as per Engloray's internal policy"
          ]
        },
        {
          title: "Refund Policy",
          content: "",
          bulletPoints: [
            "Fees once paid are non-refundable, unless explicitly stated in writing",
            "Refunds (if applicable) are processed as per the agreed policy"
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Intellectual Property Rights",
      content: "All content provided by Engloray, including:",
      bulletPoints: [
        "Designs, course materials, videos, documents, and branding assets",
        "Website content, logos, graphics, and training resources"
      ],
      note: "are the intellectual property of Engloray, unless otherwise stated. Users may not reproduce, resell, or distribute content without written permission."
    },
    {
      id: 7,
      title: "Client Projects & Deliverables",
      bulletPoints: [
        "Project timelines depend on client approvals and information sharing",
        "Delays caused by clients may affect delivery schedules",
        "Final files are shared only after full payment clearance",
        "Engloray reserves the right to showcase completed work in portfolios unless restricted by NDA"
      ]
    },
    {
      id: 8,
      title: "Student, Internship & Training Terms",
      bulletPoints: [
        "Course access is provided only to registered students",
        "Certificates are issued upon successful completion and evaluation",
        "Internship or placement assistance does not guarantee employment",
        "Misconduct or plagiarism may lead to course termination"
      ]
    },
    {
      id: 9,
      title: "Confidentiality",
      content: "Both Engloray and users agree to:",
      bulletPoints: [
        "Maintain confidentiality of sensitive data",
        "Not disclose project details, internal materials, or personal information",
        "Respect non-disclosure agreements where applicable"
      ]
    },
    {
      id: 10,
      title: "Third-Party Tools & Platforms",
      content: "Engloray may use third-party tools, software, or platforms for:",
      bulletPoints: [
        "Payments",
        "Hosting",
        "Learning management",
        "Communication"
      ],
      note: "Engloray is not responsible for outages or issues caused by third-party providers."
    },
    {
      id: 11,
      title: "Limitation of Liability",
      content: "Engloray shall not be liable for:",
      bulletPoints: [
        "Indirect or consequential damages",
        "Loss of data, business, or revenue",
        "Delays caused by external factors"
      ],
      note: "Use of our services is at your own risk."
    },
    {
      id: 12,
      title: "Termination of Services",
      content: "Engloray reserves the right to:",
      bulletPoints: [
        "Suspend or terminate services for policy violations",
        "Refuse service if misuse or unethical behavior is detected",
        "Terminate access without prior notice in serious cases"
      ]
    },
    {
      id: 13,
      title: "Governing Law & Jurisdiction",
      content: "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the jurisdiction of Indian courts."
    },
    {
      id: 14,
      title: "Modifications to Terms",
      content: "Engloray reserves the right to update or modify these Terms & Conditions at any time. Continued use of the website or services constitutes acceptance of the revised terms."
    },
    {
      id: 15,
      title: "Contact Information",
      content: "For any questions regarding these Terms & Conditions, contact:",
      bulletPoints: [
        "Email: engloray@gmail.com",
        "Phone: +91 6381759909 / +91 6369945920",
        "Address: Madurai, Tamil Nadu, INDIA"
      ]
    }
  ]

  return (
    <div className="ts-terms-container">
      {/* Header Section */}
      <header className="ts-terms-header-section">
        <div className="ts-terms-header">
          <h1>Engloray Terms and Conditions</h1>
          <p className="ts-last-updated">Last Update: December 12, 2025</p>
        </div>
      </header>
      
      {/* Main Content Section */}
      <main className="ts-terms-content-section">
        {/* Wave Background */}
        <div className="ts-wave-container">
          <div className="ts-wave-layer-1"></div>
          <div className="ts-wave-layer-2"></div>
          <div className="ts-wave-layer-3"></div>
        </div>
        
        <div className="ts-terms-content">
          <div className="ts-intro-text">
            <p>
              Welcome to Engloray. By accessing our website, enrolling in our courses, or using our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully before using our website or services.
            </p>
          </div>
          
          <div className="ts-points-container">
            {termsPoints.map(point => (
              <section key={point.id} className="ts-terms-point">
                <div className="ts-point-number">{point.id}.</div>
                <div className="ts-point-content">
                  <h2>{point.title}</h2>
                  
                  {/* Main content */}
                  {point.content && <p>{point.content}</p>}
                  
                  {/* Bullet points */}
                  {point.bulletPoints && (
                    <ul className="ts-bullet-points">
                      {point.bulletPoints.map((bullet, index) => (
                        <li key={index}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  
                  {/* Subsections (for Payment section) */}
                  {point.sections && point.sections.map((section, index) => (
                    <div key={index} className="ts-subsection">
                      <h3 className="ts-subsection-title">{section.title}</h3>
                      {section.content && <p>{section.content}</p>}
                      {section.bulletPoints && (
                        <ul className="ts-bullet-points ts-nested">
                          {section.bulletPoints.map((bullet, bulletIndex) => (
                            <li key={bulletIndex}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  
                  {/* Note/Additional content */}
                  {point.note && <p className="ts-note">{point.note}</p>}
                </div>
              </section>
            ))}
          </div>
          
          <div className="ts-contact-section">
            <h2>Contact Information</h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="ts-contact-details">
              <p><strong>Email:</strong> engloray@gmail.com</p>
              <p><strong>Phone:</strong> +91 6381759909 / +91 6369945920</p>
              <p><strong>Address:</strong>Madurai, TamilNadu, INDIA</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer Section */}
      <footer className="ts-terms-footer-section">
        <div className="ts-terms-footer">
          <div className="ts-footer-content">
            <div className="ts-footer-left">
              <p className="ts-copyright">Engloray © 2025</p>
            </div>
            <div className="ts-footer-right">
              <nav className="ts-footer-nav">
                <a href="/privacyPolicyPage" className="ts-footer-link">Privacy</a>
                <a href="/" className="ts-footer-link active">Terms of Use</a>
                <a href="/cookiesPolicyPage" className="ts-footer-link">Cookie Policy</a>
              </nav>
            </div>
          </div>
          <div className="ts-footer-bottom">
            <div className="ts-footer-branding">
              <p className="ts-company-logo">engloray.com</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndServices;
