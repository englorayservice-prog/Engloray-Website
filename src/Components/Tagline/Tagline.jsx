import React, { useState, useEffect } from 'react';
import './Tagline.css';

const Tagline = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentLetterIndex, setCurrentLetterIndex] = useState(0);
  const [displayedWords, setDisplayedWords] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationCycle, setAnimationCycle] = useState(0);
  
  const words = ["Build", "better", "business"];
  const fullText = words.join(" ");

  useEffect(() => {
    // Reset on mount and when cycle changes
    setDisplayedWords([]);
    setCurrentWordIndex(0);
    setCurrentLetterIndex(0);
    setIsAnimating(false);
    
    // Start animation after a brief delay
    const startTimer = setTimeout(() => {
      startWordAnimation();
    }, 1000);
    
    return () => clearTimeout(startTimer);
  }, [animationCycle]);

  const startWordAnimation = () => {
    setIsAnimating(true);
    animateWord(0, 0);
  };

  const animateWord = (wordIndex, letterIndex) => {
    if (wordIndex >= words.length) {
      // All words animated, prepare to restart
      setTimeout(() => {
        restartAnimation();
      }, 2000); // Pause before restarting
      return;
    }

    if (letterIndex >= words[wordIndex].length) {
      // Current word completed, move to next word
      setTimeout(() => {
        setCurrentWordIndex(wordIndex + 1);
        setCurrentLetterIndex(0);
        animateWord(wordIndex + 1, 0);
      }, 300); // Pause between words
      return;
    }

    // Animate next letter
    setTimeout(() => {
      setCurrentLetterIndex(letterIndex + 1);
      animateWord(wordIndex, letterIndex + 1);
    }, 80); // Speed of letter animation
  };

  const restartAnimation = () => {
    setIsAnimating(false);
    setAnimationCycle(prev => prev + 1);
  };

  // Get the current state for each letter
  const getLetterState = (wordIndex, letterIndex) => {
    // If we're on a previous word, it's fully joined
    if (wordIndex < currentWordIndex) {
      return 'joined';
    }
    
    // If we're on the current word
    if (wordIndex === currentWordIndex) {
      // Letters before current letter are joined
      if (letterIndex < currentLetterIndex) {
        return 'joined';
      }
      // Current letter is flying
      if (letterIndex === currentLetterIndex && currentLetterIndex > 0) {
        return 'flying';
      }
    }
    
    // All other letters are waiting
    return 'waiting';
  };

  // Check if word is "better" to apply red color
  const isBetterWord = (wordIndex) => {
    return wordIndex === 1; // "better" is the second word (index 1)
  };

  return (
    <section className="tagline-section" id='tagline'>
      <div className="tagline-container">
        <div className="tagline-text-wrapper" key={`tagline-${animationCycle}`}>
          {words.map((word, wordIndex) => (
            <span 
              key={`word-${wordIndex}`} 
              className={`word-container ${isBetterWord(wordIndex) ? 'better-word' : ''}`}
            >
              {word.split('').map((letter, letterIndex) => {
                const state = getLetterState(wordIndex, letterIndex);
                
                return (
                  <span
                    key={`letter-${wordIndex}-${letterIndex}`}
                    className={`letter ${state}`}
                  >
                    {letter}
                  </span>
                );
              })}
              
              {/* Add space between words except after last word */}
              {wordIndex < words.length - 1 && (
                <span className="letter-space">&nbsp;</span>
              )}
            </span>
          ))}
          
          {/* Full invisible text to maintain layout */}
          <span className="invisible-text">{fullText}</span>
        </div>
      </div>
    </section>
  );
};

export default Tagline;

// import React, { useEffect, useRef } from 'react';
// import SearchBar from '../SearchBar/SearchBar';
// import './Tagline.css';

// const Tagline = () => {
//   const textRef = useRef(null);
//   const introRef = useRef(null);
//   const searchRef = useRef(null);
//   const bgRefs = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('in-view');
//           } else {
//             // Remove class when out of view to re-animate on scroll
//             entry.target.classList.remove('in-view');
//           }
//         });
//       },
//       {
//         threshold: 0.3,
//         rootMargin: '0px 0px -10% 0px'
//       }
//     );

//     // Observe all elements
//     if (textRef.current) observer.observe(textRef.current);
//     if (introRef.current) observer.observe(introRef.current);
//     if (searchRef.current) observer.observe(searchRef.current);
    
//     bgRefs.current.forEach((bgEl) => {
//       if (bgEl) observer.observe(bgEl);
//     });

//     return () => {
//       if (textRef.current) observer.unobserve(textRef.current);
//       if (introRef.current) observer.unobserve(introRef.current);
//       if (searchRef.current) observer.unobserve(searchRef.current);
      
//       bgRefs.current.forEach((bgEl) => {
//         if (bgEl) observer.unobserve(bgEl);
//       });
//     };
//   }, []);

//   const addBgToRefs = (el) => {
//     if (el && !bgRefs.current.includes(el)) {
//       bgRefs.current.push(el);
//     }
//   };

//   return (
//     <section className="tagline-section">
//       {/* Background animated elements */}
//       <div className="bg-element" ref={addBgToRefs}></div>
//       <div className="bg-element" ref={addBgToRefs}></div>

//       <div className="tagline-container">
//         <h1 className="tagline-text" ref={textRef}>
//           Build Better Business
//         </h1>
//         <p className="shortIntro" ref={introRef}>
//           "A creative and technology-driven ecosystem where innovation meets education. 
//           We empower businesses with cutting-edge solutions through <span className='color-textOne'> Engloray Tech Group </span>
//           while building future-ready professionals via<span className='color-textTwo'> Engloray E-Learning </span>Generation. 
//           Our mission bridges the gap between industry needs and skilled talent, 
//           creating sustainable growth and digital transformation for tomorrow's world."
//         </p>
        
//         {/* Search Bar Section
//         <div className="search-section" ref={searchRef}>
//           <SearchBar />
//         </div> */}
//       </div>
//     </section>
//   );
// };

// export default Tagline;
