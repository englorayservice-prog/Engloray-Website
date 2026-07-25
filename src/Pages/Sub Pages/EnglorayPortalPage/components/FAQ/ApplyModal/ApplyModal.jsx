import React, { useState, useEffect } from 'react';
import { FaTimes, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import confetti from 'canvas-confetti';


const coursesList = [
  "Graphic Designing",
  "Full Stack Java",
  "UI/UX Design",
  "Drawing",
  "Digital Marketing"
];

const internshipsList = [
  "Graphic Designing",
  "Website Development",
  "UI/UX Research",
  "Software Development",
  "Sales Executive",
  "Training Mentor",
  "Business Development"
];

export const ApplyModal = ({ isOpen, onClose, defaultDistrict = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programType: 'course',
    programName: coursesList[0],
    district: defaultDistrict,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [srAnnouncement, setSrAnnouncement] = useState(''); // For accessibility screen reader alerts

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      programName: prev.programType === 'course' ? coursesList[0] : internshipsList[0]
    }));
  }, [formData.programType]);

  // Sync defaultDistrict prop into form when modal opens
  useEffect(() => {
    if (isOpen && defaultDistrict) {
      setFormData((prev) => ({ ...prev, district: defaultDistrict }));
    }
  }, [isOpen, defaultDistrict]);

  // Prevent scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required.";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address.";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      tempErrors.phone = "Please enter a 10-digit phone number.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setSrAnnouncement("Submitting your application. Please wait.");

    setTimeout(() => {
      setStatus('success');
      setSrAnnouncement("Application submitted successfully!");
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      programType: 'course',
      programName: coursesList[0],
      district: '',
      message: ''
    });
    setErrors({});
    setStatus('idle');
    setSrAnnouncement('');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black/60 backdrop-blur-md z-[10000] flex justify-center items-start sm:items-center p-4 sm:p-6 overflow-y-auto"
      onClick={resetForm}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      {/* Visually hidden container for screen reader announcements */}
      <div className="sr-only" aria-live="polite">{srAnnouncement}</div>

      <div 
        className="w-full max-w-lg bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 relative shadow-floating my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-5 right-5 bg-transparent border-none text-gray-400 hover:text-brand-purple text-lg cursor-pointer transition-colors"
          onClick={resetForm}
          aria-label="Close Portal"
        >
          <FaTimes />
        </button>

        {status !== 'success' ? (
          <>
            <h3 id="modal-headline" className="text-xl md:text-2xl font-extrabold mb-2" style={{ color: '#1F2937' }}>Apply for Admission</h3>
            <p className="text-xs text-gray-500 mb-6">Submit your details and we'll get back to you within 24 hours.</p>

            {/* Pre-selected District Badge */}
            {formData.district && (
              <div className="mb-4 flex items-center gap-2 rounded-lg px-4 py-2.5" style={{ background: 'rgba(108,76,241,0.07)', border: '1px solid rgba(108,76,241,0.15)' }}>
                <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#6C4CF1' }}>District Hub:</span>
                <span className="text-sm font-bold" style={{ color: '#4F46E5' }}>{formData.district}</span>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, district: '' }))}
                  className="ml-auto text-gray-500 hover:text-sky-400 text-xs bg-transparent border-none cursor-pointer transition-colors"
                  aria-label="Clear district"
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="name" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`border rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none ${errors.name ? 'border-red-500' : 'border-gray-200 focus:border-brand-purple'}`}
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-[10px] text-red-500 mt-0.5">{errors.name}</span>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="email" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`border rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none ${errors.email ? 'border-red-500' : 'border-gray-200 focus:border-brand-purple'}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-[10px] text-red-500 mt-0.5">{errors.email}</span>}
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="phone" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`border rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none ${errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-brand-purple'}`}
                    placeholder="9876543210"
                  />
                  {errors.phone && <span className="text-[10px] text-red-500 mt-0.5">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="programType" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Program Type</label>
                  <select
                    id="programType"
                    name="programType"
                    value={formData.programType}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none focus:border-brand-purple bg-white"
                  >
                    <option value="course">Featured Course</option>
                    <option value="internship">Interactive Internship</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5 text-left">
                  <label htmlFor="programName" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Select Subject</label>
                  <select
                    id="programName"
                    name="programName"
                    value={formData.programName}
                    onChange={handleChange}
                    className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none focus:border-brand-purple bg-white"
                  >
                    {formData.programType === 'course'
                      ? coursesList.map((c) => <option key={c} value={c}>{c}</option>)
                      : internshipsList.map((i) => <option key={i} value={i}>{i}</option>)
                    }
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 text-left">
                <label htmlFor="message" className="text-[10px] font-bold tracking-wider uppercase" style={{ color: '#4B5563' }}>Cover Letter / Notes (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="border border-gray-200 rounded-lg px-4 py-2.5 text-gray-800 text-sm outline-none focus:border-brand-purple resize-none bg-white"
                  placeholder="Tell us about your learning goals..."
                />
              </div>

              <button 
                type="submit" 
                className="w-full font-semibold py-3.5 rounded-xl text-white hover:scale-[1.01] active:scale-[0.99] transition-all border-none cursor-pointer mt-4 flex items-center justify-center gap-2"
                style={{ background: 'linear-gradient(135deg, #6C4CF1, #4F46E5)', boxShadow: '0 4px 20px rgba(108,76,241,0.35)' }}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <>
                    <FaSpinner className="animate-spin" /> Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </button>
            </form>
          </>
        ) : (
          <div className="flex flex-col items-center text-center py-6">
            <FaCheckCircle className="text-brand-emerald text-5xl mb-4 filter drop-shadow-[0_0_10px_rgba(16,185,129,0.3)] animate-pulse" style={{ color: '#10b981' }} />
            <h3 className="text-xl md:text-2xl font-extrabold mb-3" style={{ color: '#1F2937' }}>Application Submitted! 🎉</h3>
            <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
              Congratulations, <strong style={{ color: '#6C4CF1' }}>{formData.name}</strong>! Your application for the <strong style={{ color: '#6C4CF1' }}>{formData.programName} {formData.programType}</strong> cohort has been received.
            </p>
            <p className="text-xs text-gray-500 mt-2">Our coordinators will contact you at <strong style={{ color: '#1F2937' }}>{formData.email}</strong> within 24 hours.</p>
            <button className="mt-8 px-6 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer" style={{ border: '1px solid #ECEEF5', color: '#6C4CF1', background: 'transparent' }} onClick={resetForm}>
              Close Portal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyModal;
