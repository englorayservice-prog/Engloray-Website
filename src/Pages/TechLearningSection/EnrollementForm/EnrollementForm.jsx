import React, { useState } from 'react';
import './EnrollementForm.css';

const EnrollementForm = () => {
  const [learningFormData, setLearningFormData] = useState({
    learningName: '',
    learningEmail: '',
    learningPhone: '',
    learningQualification: '',
    learningCourse: '',
    learningMode: ''
  });

  const [learningErrors, setLearningErrors] = useState({});
  const [learningIsSubmitting, setLearningIsSubmitting] = useState(false);
  const [learningIsSubmitted, setLearningIsSubmitted] = useState(false);
  // const [showQualificationSuggestions, setShowQualificationSuggestions] = useState(false);

  /*
  const qualificationSuggestions = [
    'High School',
    'Diploma',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Associate Degree',
    'Professional Certificate',
    'Other'
  ];
  */

  const courseOptions = [
    'Java Full Stack Development',
    'UI/UX Design',
    'Graphic Design'
  ];

  /*
  const learningModeOptions = [
    { value: 'online', label: 'Online' },
    { value: 'offline', label: 'Offline' }
  ];
  */

  const learningHandleChange = (e) => {
    const { name, value } = e.target;
    setLearningFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (learningErrors[name]) {
      setLearningErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }

    /*
    // Show suggestions for qualification
    if (name === 'learningQualification') {
      setShowQualificationSuggestions(value.length > 0);
    }
    */
  };

  /*
  const learningHandleQualificationSelect = (qualification) => {
    setLearningFormData(prev => ({
      ...prev,
      learningQualification: qualification
    }));
    setShowQualificationSuggestions(false);
  };

  const learningHandleModeChange = (mode) => {
    setLearningFormData(prev => ({
      ...prev,
      learningMode: mode
    }));
    
    if (learningErrors.learningMode) {
      setLearningErrors(prev => ({
        ...prev,
        learningMode: ''
      }));
    }
  };
  */

  const learningValidateForm = () => {
    const newLearningErrors = {};

    if (!learningFormData.learningName.trim()) {
      newLearningErrors.learningName = 'Full name is required';
    }

    if (!learningFormData.learningEmail.trim()) {
      newLearningErrors.learningEmail = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(learningFormData.learningEmail)) {
      newLearningErrors.learningEmail = 'Email is invalid';
    }

    if (!learningFormData.learningPhone.trim()) {
      newLearningErrors.learningPhone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(learningFormData.learningPhone.replace(/\D/g, ''))) {
      newLearningErrors.learningPhone = 'Phone number must be 10 digits';
    }

    // if (!learningFormData.learningQualification.trim()) {
    //   newLearningErrors.learningQualification = 'Qualification is required';
    // }

    if (!learningFormData.learningCourse) {
      newLearningErrors.learningCourse = 'Course selection is required';
    }

    // if (!learningFormData.learningMode) {
    //   newLearningErrors.learningMode = 'Learning mode is required';
    // }

    setLearningErrors(newLearningErrors);
    return Object.keys(newLearningErrors).length === 0;
  };

const learningHandleSubmit = async (e) => {
  e.preventDefault();

  if (!learningValidateForm()) {
    return;
  }

  setLearningIsSubmitting(true);

  try {
    const response = await fetch(
      "https://localhost:8081/api/ButtonCoursesForm/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: learningFormData.learningName,
          email: learningFormData.learningEmail,
          phone: learningFormData.learningPhone,
          course: learningFormData.learningCourse,
          formType: "Quick Enrollment Form"
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Submission failed");
    }

    setLearningIsSubmitted(true);

  } catch (error) {
    alert(error.message);
  } finally {
    setLearningIsSubmitting(false);
  }
};


  const learningResetForm = () => {
    setLearningFormData({
      learningName: '',
      learningEmail: '',
      learningPhone: '',
      learningQualification: '',
      learningCourse: '',
      learningMode: ''
    });
    setLearningErrors({});
    setLearningIsSubmitted(false);
    // setShowQualificationSuggestions(false);
  };

  if (learningIsSubmitted) {
    return (
      <div className="learning-enrollment-success">
        <div className="learning-success-icon">🎉</div>
        <h2>Application Submitted!</h2>
        <p>Thank you for your interest in our program. Our team will contact you within 24 hours.</p>
        <div className="learning-success-details">
          <p><strong>Name:</strong> {learningFormData.learningName}</p>
          <p><strong>Course:</strong> {learningFormData.learningCourse}</p>
          <p><strong>Mode:</strong> {learningFormData.learningMode === 'online' ? 'Online' : 'Offline'}</p>
        </div>
        <button onClick={learningResetForm} className="learning-submit-btn">
          Apply Again
        </button>
      </div>
    );
  }

  return (
    <div className="learning-enrollment-form-container">
      <div className="learning-form-header">
        <h2>Quick Enrollment</h2>
        <p>Start your learning journey today - fill in your details below</p>
      </div>

      <form onSubmit={learningHandleSubmit} className="learning-enrollment-form">
        <div className="learning-form-section">
          <div className="learning-form-single-column">
            {/* Full Name */}
            <div className="learning-form-group">
              <label htmlFor="learningName" className="learning-required">
                Full Name
              </label>
              <input
                type="text"
                id="learningName"
                name="learningName"
                value={learningFormData.learningName}
                onChange={learningHandleChange}
                className={learningErrors.learningName ? 'learning-error' : ''}
                placeholder="Enter your full name"
              />
              {learningErrors.learningName && (
                <span className="learning-error-message">{learningErrors.learningName}</span>
              )}
            </div>

            {/* Email */}
            <div className="learning-form-group">
              <label htmlFor="learningEmail" className="learning-required">
                Email Address
              </label>
              <input
                type="email"
                id="learningEmail"
                name="learningEmail"
                value={learningFormData.learningEmail}
                onChange={learningHandleChange}
                className={learningErrors.learningEmail ? 'learning-error' : ''}
                placeholder="Enter your email"
              />
              {learningErrors.learningEmail && (
                <span className="learning-error-message">{learningErrors.learningEmail}</span>
              )}
            </div>

            {/* Phone Number */}
            <div className="learning-form-group">
              <label htmlFor="learningPhone" className="learning-required">
                Phone Number
              </label>
              <input
                type="tel"
                id="learningPhone"
                name="learningPhone"
                value={learningFormData.learningPhone}
                onChange={learningHandleChange}
                className={learningErrors.learningPhone ? 'learning-error' : ''}
                placeholder="10-digit phone number"
                maxLength="10"
              />
              {learningErrors.learningPhone && (
                <span className="learning-error-message">{learningErrors.learningPhone}</span>
              )}
            </div>

            {/* Current Qualification - Typeable Input with Suggestions
            <div className="learning-form-group learning-qualification-group">
              <label htmlFor="learningQualification" className="learning-required">
                Current Qualification
              </label>
              <div className="learning-input-with-suggestions">
                <input
                  type="text"
                  id="learningQualification"
                  name="learningQualification"
                  value={learningFormData.learningQualification}
                  onChange={learningHandleChange}
                  className={learningErrors.learningQualification ? 'learning-error' : ''}
                  placeholder="Type or select your qualification"
                />
                {showQualificationSuggestions && (
                  <div className="learning-suggestions-list">
                    {qualificationSuggestions
                      .filter(qual => 
                        qual.toLowerCase().includes(learningFormData.learningQualification.toLowerCase())
                      )
                      .map((qualification, index) => (
                        <div
                          key={index}
                          className="learning-suggestion-item"
                          onClick={() => learningHandleQualificationSelect(qualification)}
                        >
                          {qualification}
                        </div>
                      ))
                    }
                  </div>
                )}
              </div>
              {learningErrors.learningQualification && (
                <span className="learning-error-message">{learningErrors.learningQualification}</span>
              )}
            </div> */}

            {/* Course Selection */}
            <div className="learning-form-group">
              <label htmlFor="learningCourse" className="learning-required">
                Course Applying For
              </label>
              <select
                id="learningCourse"
                name="learningCourse"
                value={learningFormData.learningCourse}
                onChange={learningHandleChange}
                className={learningErrors.learningCourse ? 'learning-error' : ''}
              >
                <option value="">Select Course</option>
                {courseOptions.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
              {learningErrors.learningCourse && (
                <span className="learning-error-message">{learningErrors.learningCourse}</span>
              )}
            </div>

            {/* Learning Mode - Radio Buttons (Only Online/Offline)
            <div className="learning-form-group learning-radio-group">
              <label className="learning-required">Preferred Learning Mode</label>
              <div className="learning-radio-options">
                {learningModeOptions.map((mode) => (
                  <label key={mode.value} className="learning-radio-label">
                    <input
                      type="radio"
                      name="learningMode"
                      value={mode.value}
                      checked={learningFormData.learningMode === mode.value}
                      onChange={() => learningHandleModeChange(mode.value)}
                      className="learning-radio-input"
                    />
                    <span className="learning-radio-custom"></span>
                    {mode.label}
                  </label>
                ))}
              </div>
              {learningErrors.learningMode && (
                <span className="learning-error-message">{learningErrors.learningMode}</span>
              )}
            </div> */}
          </div>
        </div>

        {/* Form Actions */}
        <div className="learning-form-actions">
          <button
            type="button"
            onClick={learningResetForm}
            className="learning-reset-btn"
            disabled={learningIsSubmitting}
          >
            Reset Form
          </button>
          <button
            type="submit"
            className="learning-submit-btn"
            disabled={learningIsSubmitting}
          >
            {learningIsSubmitting ? (
              <>
                <div className="learning-spinner"></div>
                Processing...
              </>
            ) : (
              'Apply Now'
            )}
          </button>
        </div>

        <div className="learning-form-footer">
          <p className="learning-required-note">
            <span className="learning-required-marker">*</span> All fields are required
          </p>
        </div>
      </form>
    </div>
  );
};

export default EnrollementForm;