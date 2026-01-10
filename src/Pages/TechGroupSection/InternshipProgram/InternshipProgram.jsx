// import React, { useState } from 'react';
// import './InternshipProgram.css';

// const InternshipProgram = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     position: '',
//     preference: '',
//     resume: null
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [showForm, setShowForm] = useState(false);
//   const [selectedRole, setSelectedRole] = useState('');

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleFileChange = (e) => {
//     setFormData(prev => ({
//       ...prev,
//       resume: e.target.files[0]
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
    
//     // Reset form after 3 seconds
//     setTimeout(() => {
//       setIsSubmitted(false);
//       setFormData({
//         name: '',
//         email: '',
//         position: '',
//         preference: '',
//         resume: null
//       });
//       setShowForm(false);
//       setSelectedRole('');
//     }, 3000);
//   };

//   const handleRoleClick = (role) => {
//     setSelectedRole(role);
//     setFormData(prev => ({
//       ...prev,
//       position: role
//     }));
//     setShowForm(true);
//   };

//   const handleArrowClick = () => {
//     setSelectedRole('');
//     setShowForm(true);
//   };

//   const roles = [
//     {
//       title: "Graphic Designer",
//       icon: "🎨",
//       description: "Create stunning visual designs and branding materials",
//       route: "/GraphicDesignerInternPage"
//     },
//     {
//       title: "Website Developer",
//       icon: "💻",
//       description: "Build responsive and interactive web applications",
//       route: "/GraphicDesignerInternPage"

//     },
//     {
//       title: "UI/UX Designer",
//       icon: "✨",
//       description: "Design intuitive user interfaces and experiences",
//       route: "/GraphicDesignerInternPage"
//     },
//     {
//       title: "Software Developer",
//       icon: "🚀",
//       description: "Develop robust software solutions and applications",
//       route: "/GraphicDesignerInternPage"
//     }
//   ];

//   return (
//     <section className="internship-program  " id="internship">
//       {/* Floating Arrow */}
//       <div className="floating-arrow" onClick={handleArrowClick}>
//         <div className="arrow-symbol">➜</div>
//         <div className="arrow-glow"></div>
//       </div>

//       <div className="internship-container">
//         {/* Header - Centered */}
//         <div className="internship-header">
//             <span className="benefits-main-badge">Carrer Opportunity</span>
//           <h2 className="internship-title">Free Internship Program</h2>
//           <p className="internship-subtitle">
//             Kickstart your career with hands-on experience and expert mentorship
//           </p>
//         </div>

//         {/* Available Roles - 4 Cards in a Row */}
//         <div className="roles-section">
//           <h3 className="section-title">Available Roles</h3>
//           <div className="roles-grid">
//             {roles.map((role, index) => (
//               <div 
//                 key={role.title}
//                 className="role-card"
//                 style={{ animationDelay: `${index * 0.2}s` }}
//                 onClick={() => handleRoleClick(role.title)}
//               >
//                 <div className="role-icon">{role.icon}</div>
//                 <div className="role-glow"></div>
//                 <h4 className="role-title">{role.title}</h4>
//                 <p className="role-description">{role.description}</p>
//                 <div className="click-indicator">Click to Apply</div>
//                 <div className="role-hover-effect"></div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Form Modal */}
//         {showForm && (
//           <div className="form-modal-overlay">
//             <div className="form-modal">
//               <div className="modal-header">
//                 <h3 className="modal-title">
//                   {selectedRole ? `Apply for ${selectedRole}` : 'Join Our Internship Program'}
//                 </h3>
//                 <button 
//                   className="close-modal"
//                   onClick={() => {
//                     setShowForm(false);
//                     setSelectedRole('');
//                   }}
//                 >
//                   ×
//                 </button>
//               </div>
              
//               <div className="modal-content">
//                 {isSubmitted ? (
//                   <div className="success-message">
//                     <div className="success-icon">✓</div>
//                     <h4>Application Submitted!</h4>
//                     <p>We'll review your application and get back to you soon.</p>
//                   </div>
//                 ) : (
//                   <form className="enrollment-form" onSubmit={handleSubmit}>
//                     <div className="form-group">
//                       <label htmlFor="name">Full Name *</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Enter your full name"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="email">Email Address *</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleInputChange}
//                         required
//                         placeholder="Enter your email"
//                       />
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="position">Preferred Role *</label>
//                       <select
//                         id="position"
//                         name="position"
//                         placeholder = "Your choice"
//                         value={selectedRole || formData.position}
//                         onChange={handleInputChange}
//                         required
//                       >
//                         <option value="">Select your preferred role</option>
//                         <option value="Graphic Designer">Graphic Designer</option>
//                         <option value="Website Developer">Website Developer</option>
//                         <option value="UI/UX Designer">UI/UX Designer</option>
//                         <option value="Software Developer">Software Developer</option>
//                       </select>
//                     </div>

//                     <div className="form-group">
//                       <label>Internship Preference *</label>
//                       <div className="radio-group">
//                         <label className="radio-option">
//                           <input
//                             type="radio"
//                             name="preference"
//                             value="online"
//                             checked={formData.preference === 'online'}
//                             onChange={handleInputChange}
//                             required
//                           />
//                           <span className="radio-custom"></span>
//                           Online
//                         </label>
//                         <label className="radio-option">
//                           <input
//                             type="radio"
//                             name="preference"
//                             value="offline"
//                             checked={formData.preference === 'offline'}
//                             onChange={handleInputChange}
//                           />
//                           <span className="radio-custom"></span>
//                           Offline
//                         </label>
//                       </div>
//                     </div>

//                     <div className="form-group">
//                       <label htmlFor="resume">Upload Resume / Portfolio *</label>
//                       <div className="file-upload">
//                         <input
//                           type="file"
//                           id="resume"
//                           name="resume"
//                           onChange={handleFileChange}
//                           accept=".pdf,.doc,.docx,.jpg,.png,.zip"
//                           required
//                         />
//                         <label htmlFor="resume" className="file-label">
//                           <span className="file-icon">📎</span>
//                           {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, Images)'}
//                         </label>
//                       </div>
//                     </div>

//                     <button type="submit" className="submit-btn">
//                       <span>Submit Application</span>
//                       <div className="btn-glow"></div>
//                     </button>
//                   </form>
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default InternshipProgram;
 
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { 
  faPalette, 
  faDesktop, 
  faUserCheck, 
  faCode, 
  faArrowRight,
  faCheckCircle,
  faPaperclip
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './InternshipProgram.css';

// Add icons to the library
library.add(faPalette, faDesktop, faUserCheck, faCode, faArrowRight, faCheckCircle, faPaperclip);

const InternshipProgram = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    preference: '',
    resume: null
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      resume: e.target.files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();
      data.append("Name", formData.name);
      data.append("Email", formData.email);
      data.append("Role", formData.position);
      data.append("Mode", formData.preference);
      data.append("Resume", formData.resume);

      const response = await fetch(
        "https://localhost:8081/api/ButtonInternForm/submit",
        {
          method: "POST",
          body: data
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        alert(errorText);
        return;
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          position: '',
          preference: '',
          resume: null
        });
        setShowForm(false);
      }, 3000);

    } catch (error) {
      console.error("Submission failed:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const handleRoleClick = (role) => {
    if (role.route) {
      navigate(role.route);
    }
  };

  const handleArrowClick = () => {
    setShowForm(true);
  };

  const handleViewPrograms = () => {
    navigate('/allProgramsPage');
  };

  // Icon colors for each role
  const roleColors = {
    graphicDesigner: '#FFD166',    // Red
    websiteDeveloper: '#4ECDC4',   // Teal
    uiUxDesigner: '#FFD166',       // Yellow
    softwareDeveloper: '#06D6A0',  // Green
    default: '#118AB2'             // Blue
  };

  const roles = [
    {
      id: 1,
      title: "Graphic Designer",
      icon: faPalette,
      iconColor: roleColors.graphicDesigner,
      description: "Create stunning visual designs and branding materials",
      route: "/GraphicDesignerInternPage"
    },
    {
      id: 2,
      title: "Website Developer",
      icon: faDesktop,
      iconColor: roleColors.websiteDeveloper,
      description: "Build responsive and interactive web applications",
      route: "/websiteDeveloperInternPage"
    },
    {
      id: 3,
      title: "UI/UX Designer",
      icon: faUserCheck,
      iconColor: roleColors.uiUxDesigner,
      description: "Design intuitive user interfaces and experiences",
      route: "/uiuxDesignerInternPage"
    },
    {
      id: 4,
      title: "Software Developer",
      icon: faCode,
      iconColor: roleColors.softwareDeveloper,
      description: "Develop robust software solutions and applications",
      route: "/SoftwareDeveloperInternPage"
    }
  ];

  return (
    <section className="tgi-internship-program" id="internship">
      {/* Floating Arrow with FontAwesome Icon */}
      <div className="tgi-floating-arrow" onClick={handleArrowClick}>
        <div className="tgi-arrow-symbol">
          <FontAwesomeIcon 
            icon={faArrowRight} 
            style={{ 
              color: '#fe0000fe',
              fontSize: '1.5rem'
            }} 
          />
        </div>
        <div className="tgi-arrow-glow"></div>
      </div>

      <div className="tgi-internship-container" id='internship'>
        {/* Header - Centered */}
        <div className="tgi-internship-header">
          <span className="tgi-benefits-main-badge">Career Opportunity</span>
          <h2 className="tgi-internship-title">Free Internship Program</h2>
          <p className="tgi-internship-subtitle">
            Kickstart your career with hands-on experience and expert mentorship
          </p>
          
          {/* View Programs Button with FontAwesome Icon */}
          <button 
            className="tgi-view-programs-btn"
            onClick={handleViewPrograms}
          >
            View All Programs
            <span className="tgi-btn-arrow">
              <FontAwesomeIcon 
                icon={faArrowRight} 
                style={{ 
                  color: '#ffffff',
                  fontSize: '1rem',
                  marginLeft: '8px'
                }} 
              />
            </span>
          </button>
        </div>

        {/* Available Roles - 4 Cards in a Row */}
        <div className="tgi-roles-section">
          <h3 className="tgi-section-title">Available Roles</h3>
          <div className="tgi-roles-grid">
            {roles.map((role, index) => (
              <div 
                key={role.id}
                className="tgi-role-card"
                style={{ animationDelay: `${index * 0.2}s` }}
                onClick={() => handleRoleClick(role)}
              >
                <div className="tgi-role-icon">
                  <FontAwesomeIcon 
                    icon={role.icon} 
                    style={{ 
                      color: role.iconColor,
                      fontSize: '2.5rem'
                    }} 
                  />
                </div>
                <div className="tgi-role-glow"></div>
                <h4 className="tgi-role-title">{role.title}</h4>
                <p className="tgi-role-description">{role.description}</p>
                <div className="tgi-click-indicator">
                  View Details 
                  <FontAwesomeIcon 
                    icon={faArrowRight} 
                    style={{ 
                      color: role.iconColor,
                      fontSize: '0.9rem',
                      marginLeft: '5px'
                    }} 
                  />
                </div>
                <div className="tgi-role-hover-effect"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form Modal */}
        {showForm && (
          <div className="tgi-form-modal-overlay">
            <div className="tgi-form-modal">
              <div className="tgi-modal-header">
                <h3 className="tgi-modal-title">Join Our Internship Program</h3>
                <button 
                  className="tgi-close-modal"
                  onClick={() => setShowForm(false)}
                >
                  ×
                </button>
              </div>
              
              <div className="tgi-modal-content">
                {isSubmitted ? (
                  <div className="tgi-success-message">
                    <div className="tgi-success-icon">
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        style={{ 
                          color: '#06D6A0',
                          fontSize: '3rem'
                        }} 
                      />
                    </div>
                    <h4>Application Submitted!</h4>
                    <p>We'll review your application and get back to you soon.</p>
                  </div>
                ) : (
                  <form className="tgi-enrollment-form" onSubmit={handleSubmit}>
                    <div className="tgi-form-group">
                      <label htmlFor="tgi-name">Full Name *</label>
                      <input
                        type="text"
                        id="tgi-name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="tgi-form-group">
                      <label htmlFor="tgi-email">Email Address *</label>
                      <input
                        type="email"
                        id="tgi-email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="tgi-form-group">
                      <label htmlFor="tgi-position">Preferred Role *</label>
                      <select
                        id="tgi-position"
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select your preferred role</option>
                        {roles.map(role => (
                          <option key={role.id} value={role.title}>
                            {role.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="tgi-form-group">
                      <label>Internship Preference *</label>
                      <div className="tgi-radio-group">
                        <label className="tgi-radio-option">
                          <input
                            type="radio"
                            name="preference"
                            value="online"
                            checked={formData.preference === 'online'}
                            onChange={handleInputChange}
                            required
                          />
                          <span className="tgi-radio-custom"></span>
                          Online
                        </label>
                        <label className="tgi-radio-option">
                          <input
                            type="radio"
                            name="preference"
                            value="offline"
                            checked={formData.preference === 'offline'}
                            onChange={handleInputChange}
                          />
                          <span className="tgi-radio-custom"></span>
                          Offline
                        </label>
                      </div>
                    </div>

                    <div className="tgi-form-group">
                      <label htmlFor="tgi-resume">Upload Resume / Portfolio *</label>
                      <div className="tgi-file-upload">
                        <input
                          type="file"
                          id="tgi-resume"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx,.jpg,.png,.zip"
                          required
                        />
                        <label htmlFor="tgi-resume" className="tgi-file-label">
                          <span className="tgi-file-icon">
                            <FontAwesomeIcon 
                              icon={faPaperclip} 
                              style={{ 
                                color: '#666',
                                fontSize: '1rem'
                              }} 
                            />
                          </span>
                          {formData.resume ? formData.resume.name : 'Choose file (PDF, DOC, Images)'}
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="tgi-submit-btn">
                      <span>Submit Application</span>
                      <div className="tgi-btn-glow"></div>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InternshipProgram;