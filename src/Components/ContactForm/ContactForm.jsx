
import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://localhost:8081/api/ContactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      await response.json();

      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
      }, 2000);

    } catch (error) {
      console.error("API Error:", error);
      alert("Form submission failed. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="ecf-contact-modal-overlay" onClick={handleOverlayClick}>
      <div className="ecf-contact-modal">
        <button className="ecf-close-button" onClick={onClose}>
          <span>×</span>
        </button>
        
        {isSubmitted ? (
          <div className="ecf-success-message">
            <div className="ecf-success-icon">✓</div>
            <h3>Thank You!</h3>
            <p>Your message has been sent successfully. We'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <div className="ecf-contact-header">
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <form className="ecf-contact-form" onSubmit={handleSubmit}>
              <div className="ecf-form-row">
                <div className="ecf-form-group">
                  <label htmlFor="ecf-name">Full Name *</label>
                  <input
                    type="text"
                    id="ecf-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="ecf-form-group">
                  <label htmlFor="ecf-email">Email Address *</label>
                  <input
                    type="email"
                    id="ecf-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Phone field taking full width */}
              <div className="ecf-form-row">
                <div className="ecf-form-group ecf-full-width">
                  <label htmlFor="ecf-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="ecf-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number with country code"
                  />
                </div>
              </div>

              <div className="ecf-form-group">
                <label htmlFor="ecf-message">Message *</label>
                <textarea
                  id="ecf-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="ecf-submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="ecf-spinner"></div>
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;