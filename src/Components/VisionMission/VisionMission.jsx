// import React, { useEffect, useRef } from 'react';
// import './VisionMission.css';

// const VisionMission = () => {
//   const sectionRef = useRef(null);
//   const headerRef = useRef(null);
//   const visionCardRef = useRef(null);
//   const missionCardRef = useRef(null);
//   const valuesRef = useRef(null);
//   const valueItemsRef = useRef([]);

//   const addToValueItemsRef = (el) => {
//     if (el && !valueItemsRef.current.includes(el)) {
//       valueItemsRef.current.push(el);
//     }
//   };

//   useEffect(() => {
//     const elements = [
//       { ref: sectionRef, delay: 0 },
//       { ref: headerRef, delay: 200 },
//       { ref: visionCardRef, delay: 400 },
//       { ref: missionCardRef, delay: 600 },
//       { ref: valuesRef, delay: 800 },
//     ];

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const timeout = entry.target.dataset.delay || 0;
//             setTimeout(() => {
//               entry.target.classList.add('in-view');
//             }, timeout);
//           }
//         });
//       },
//       {
//         threshold: 0.1,
//         rootMargin: '0px 0px -10% 0px'
//       }
//     );

//     elements.forEach(({ ref, delay }) => {
//       if (ref.current) {
//         ref.current.dataset.delay = delay;
//         observer.observe(ref.current);
//       }
//     });

//     valueItemsRef.current.forEach((valueItem, index) => {
//       if (valueItem) {
//         valueItem.dataset.delay = 800 + (index * 100);
//         observer.observe(valueItem);
//       }
//     });

//     return () => {
//       elements.forEach(({ ref }) => {
//         if (ref.current) observer.unobserve(ref.current);
//       });
//       valueItemsRef.current.forEach((valueItem) => {
//         if (valueItem) observer.unobserve(valueItem);
//       });
//     };
//   }, []);

//   return (
//     <section id="vision-mission" className="vision-mission-section" ref={sectionRef}>
//       <div className="vision-mission-container">
        
//         {/* Header */}
//         <div className="section-header" ref={headerRef}>
//           <h2>OUR MISSION & VISION</h2>
//           <p>Driving innovation and education to create meaningful impact</p>
//         </div>

//         {/* Vision & Mission Cards in Single Row */}
//         <div className="cards-row">
//           {/* Vision Card */}
//           <div className="vm-card vision-card" ref={visionCardRef}>
//             <div className="card-header">
//               <div className="card-icon">👁️</div>
//               <h3>Our Vision</h3>
//             </div>
//             <div className="card-content">
//               <ul className="bullet-list">
//                 <li>To be the leading innovator in technology solutions that transform businesses</li>
//                 <li>Creating a future where technology and education work hand in hand</li>
//                 <li>To establish a world-class ecosystem where creativity meets technology</li>
//                 <li>Empowering every individual and organization to achieve their full potential</li>
//               </ul>
//             </div>
//           </div>

//           {/* Mission Card */}
//           <div className="vm-card mission-card" ref={missionCardRef}>
//             <div className="card-header">
//               <div className="card-icon">🎯</div>
//               <h3>Our Mission</h3>
//             </div>
//             <div className="card-content">
//               <ul className="bullet-list">
//                 <li>To deliver exceptional technology services and educational programs</li>
//                 <li>Providing comprehensive digital solutions through Engloray Tech Group</li>
//                 <li>To consistently exceed client expectations through innovative solutions</li>
//                 <li>Creating transformative learning experiences for successful careers</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         {/* Core Values - ALL 5 CARDS */}
//         <div className="values-section" ref={valuesRef}>
//           <h3>Our Core Values</h3>
//           <div className="values-grid">
//             {/* Innovation Card */}
//             <div className="value-item" ref={addToValueItemsRef}>
//               <div className="value-inner">
//                 <div className="value-front">
//                   <div className="value-icon">💡</div>
//                   <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Innovation</h4>
//                 </div>
//                 <div className="value-back">
//                   <p>Pushing boundaries and embracing new technologies to create groundbreaking solutions.</p>
//                   <button className="value-button">
//                     Explore
//                     <span className="value-arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Creativity Card */}
//             <div className="value-item" ref={addToValueItemsRef}>
//               <div className="value-inner">
//                 <div className="value-front">
//                   <div className="value-icon">🎨</div>
//                   <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Creativity</h4>
//                 </div>
//                 <div className="value-back">
//                   <p>Thinking differently and designing solutions that inspire and engage users.</p>
//                   <button className="value-button">
//                     Explore
//                     <span className="value-arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Integrity Card */}
//             <div className="value-item" ref={addToValueItemsRef}>
//               <div className="value-inner">
//                 <div className="value-front">
//                   <div className="value-icon">🛡️</div>
//                   <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Integrity</h4>
//                 </div>
//                 <div className="value-back">
//                   <p>Building trust through transparency, honesty, and ethical business practices.</p>
//                   <button className="value-button">
//                     Explore
//                     <span className="value-arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Growth Card */}
//             <div className="value-item" ref={addToValueItemsRef}>
//               <div className="value-inner">
//                 <div className="value-front">
//                   <div className="value-icon">📈</div>
//                   <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Growth</h4>
//                 </div>
//                 <div className="value-back">
//                   <p>Continuous improvement and expansion for our clients, students, and team members.</p>
//                   <button className="value-button">
//                     Explore
//                     <span className="value-arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Education Card */}
//             <div className="value-item" ref={addToValueItemsRef}>
//               <div className="value-inner">
//                 <div className="value-front">
//                   <div className="value-icon">🎓</div>
//                   <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Education</h4>
//                 </div>
//                 <div className="value-back">
//                   <p>Empowering through knowledge sharing, skill development, and accessible learning.</p>
//                   <button className="value-button">
//                     Explore
//                     <span className="value-arrow">→</span>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionMission;

import React, { useEffect, useRef } from 'react';
import visionIcon from '../../assets/iicons/vision.png';
import missionIcon from '../../assets/iicons/development and support 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeLowVision, faBullseye, faLightbulb, faPalette, faShieldHalved, faChartLine, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './VisionMission.css';

const VisionMission = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const visionCardRef = useRef(null);
  const missionCardRef = useRef(null);
  const valuesRef = useRef(null);
  const valueItemsRef = useRef([]);

  const addToValueItemsRef = (el) => {
    if (el && !valueItemsRef.current.includes(el)) {
      valueItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const elements = [
      { ref: sectionRef, delay: 0 },
      { ref: headerRef, delay: 200 },
      { ref: visionCardRef, delay: 200 },
      { ref: missionCardRef, delay: 200 },
      { ref: valuesRef, delay: 200 },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeout = entry.target.dataset.delay || 0;
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, timeout);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        ref.current.dataset.delay = delay;
        observer.observe(ref.current);
      }
    });

    valueItemsRef.current.forEach((valueItem, index) => {
      if (valueItem) {
        valueItem.dataset.delay = 800 + (index * 100);
        observer.observe(valueItem);
      }
    });

    return () => {
      elements.forEach(({ ref }) => {
        if (ref.current) observer.unobserve(ref.current);
      });
      valueItemsRef.current.forEach((valueItem) => {
        if (valueItem) observer.unobserve(valueItem);
      });
    };
  }, []);

  return (
    <section id="vision-mission" className="vision-mission-section" ref={sectionRef}>
      <div className="vision-mission-container">
        
        {/* Header */}
        <div className="section-header" ref={headerRef}>
          <h2>OUR MISSION & VISION</h2>
          <p>Driving innovation and education to create meaningful impact</p>
        </div>

        {/* Vision & Mission Cards in Single Row with Flip Animation */}
        <div className="cards-row">
          {/* Vision Card */}
          <div className="vm-card vision-card" ref={visionCardRef}>
            {/* Front Side */}
            <div className="card-front">
              <div>
                <div className="card-header">
                  {/* <div className="card-icon">👁️</div> */}
                  <div className="card-icon"> <FontAwesomeIcon 
                      icon={faEyeLowVision} 
                      style={{color: "#1760de", fontSize: "2rem"}} 
                    />
                    </div>
                  <h3>Our Vision</h3>
                </div>
                <div className="card-content">
                  <ul className="bullet-list">
                    <li>To be the leading innovator in technology solutions that transform businesses</li>
                    <li>Creating a future where technology and education work hand in hand</li>
                    <li>To establish a world-class ecosystem where creativity meets technology</li>
                    <li>Empowering every individual and organization to achieve their full potential</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Back Side */}
            <div className="card-back">
              <div className="back-content">
                <div className="back-text-icon">VISION</div>
                <h4>Our Vision</h4>
                <p>We envision a future where technology seamlessly integrates with human potential, creating unprecedented opportunities for growth, innovation, and positive global impact.</p>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className="vm-card mission-card" ref={missionCardRef}>
            {/* Front Side */}
            <div className="card-front">
              <div>
                <div className="card-header">
                  {/* <div className="card-icon">🎯</div> */}
                  <div className="card-icon"> <FontAwesomeIcon 
                      icon={faBullseye} 
                      style={{color: "#dc0909", fontSize: "2rem"}} 
                    /></div>
                  <h3>Our Mission</h3>
                  {/* <p>hover here</p> */}
                </div>
                <div className="card-content">
                  <ul className="bullet-list">
                    <li>To deliver exceptional technology services and educational programs</li>
                    <li>Providing comprehensive digital solutions through Engloray Tech Group</li>
                    <li>To consistently exceed client expectations through innovative solutions</li>
                    <li>Creating transformative learning experiences for successful careers</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Back Side */}
            <div className="card-back">
              <div className="back-content">
                <div className="back-text-icon">MISSION</div>
                <h4>Our Mission</h4>
                <p>We are committed to empowering individuals and businesses through cutting-edge technology solutions and transformative education that drives real-world success.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values - ALL 5 CARDS (Updated without Explore button) */}
        <div className="values-section" ref={valuesRef}>
          <h3>Our Core Values</h3>
          <div className="values-grid">
            {/* Innovation Card */}
            <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  {/* <div className="value-icon">💡</div> */}
                  <div className="value-icon"> <FontAwesomeIcon 
                      icon={faLightbulb} 
                      style={{color: "#a4a91fff", fontSize: "2rem"}} 
                    /></div>
                  <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Innovation</h4>
                </div>
                <div className="value-back">
                  <p>Pushing boundaries and embracing new technologies to create groundbreaking solutions.</p>
                </div>
              </div>
            </div>

            {/* Creativity Card */}
            <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  {/* <div className="value-icon">🎨</div> */}
                  <div className="value-icon"> <FontAwesomeIcon 
                      icon={faPalette} 
                      style={{color: "#d99a1cff", fontSize: "2rem"}} 
                    /></div>
                  <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Creativity</h4>
                </div>
                <div className="value-back">
                  <p>Thinking differently and designing solutions that inspire and engage users.</p>
                </div>
              </div>
            </div>

            {/* Integrity Card */}
            <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  {/* <div className="value-icon">🛡️</div> */}
                  <div className="value-icon"> <FontAwesomeIcon 
                      icon={faShieldHalved} 
                      style={{color: "#1760de", fontSize: "2rem"}} 
                    /></div>
                  <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Integrity</h4>
                </div>
                <div className="value-back">
                  <p>Building trust through transparency, honesty, and ethical business practices.</p>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  {/* <div className="value-icon">📈</div> */}
                  <div className="value-icon"> <FontAwesomeIcon 
                      icon={faChartLine} 
                      style={{color: "#5f8bd8ff", fontSize: "2rem"}} 
                    /></div>
                  <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Growth</h4>
                </div>
                <div className="value-back">
                  <p>Continuous improvement and expansion for our clients, students, and team members.</p>
                </div>
              </div>
            </div>

            {/* Education Card */}
            <div className="value-item" ref={addToValueItemsRef}>
              <div className="value-inner">
                <div className="value-front">
                  {/* <div className="value-icon">🎓</div> */}
                  <div className="value-icon"> <FontAwesomeIcon 
                      icon={faGraduationCap} 
                      style={{color: "#1760de", fontSize: "2rem"}} 
                    /></div>
                  <h4 style={{fontFamily: 'Aldrich', fontWeight: 100}}>Education</h4>
                </div>
                <div className="value-back">
                  <p>Empowering through knowledge sharing, skill development, and accessible learning.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;