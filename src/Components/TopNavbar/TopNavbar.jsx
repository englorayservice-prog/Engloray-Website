// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './TopNavbar.css';

// const TopNavBar = () => {
//   const navigate = useNavigate();

//   const navigationItems = [
//     { 
//       label: 'For Businesses', 
//       path: '/' // Current page (home)
//     },
//     { 
//       label: 'For Clients', 
//       path: '/tech-group' // Tech group page
//     },
//     { 
//       label: 'For Students', 
//       path: '/tech-learning' // E-learning page
//     }
//   ];

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   return (
//     <nav className="topnav-main">
//       <div className="topnav-container">
//         {/* Navigation items - Left aligned */}
//         <div className="topnav-items">
//           {navigationItems.map((item) => (
//             <button
//               key={item.label}
//               className="topnav-link"
//               onClick={() => handleNavigation(item.path)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default TopNavBar;

import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {Helmet} from "react-helmet"
import './TopNavbar.css';

const TopNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { 
      label: 'For Businesses', 
      path: '/', // Home page
      exact: true
    },
    { 
      label: 'For Clients', 
      path: '/tech-group', // Tech group page
      exact: false
    },
    { 
      label: 'For Students', 
      path: '/tech-learning', // E-learning page
      exact: false
    },
    { 
      label: 'Raymart', 
      path: '/raymartPage',
      exact: false
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  // Function to check if a navigation item is active
  const isActive = (item) => {
    if (item.exact) {
      return location.pathname === item.path;
    } else {
      return location.pathname.startsWith(item.path) || 
             (item.path === '/' && location.pathname === '/') ||
             (item.path !== '/' && location.pathname.includes(item.path));
    }
  };

  // Get the current active page label for visual indicator
  const getActivePage = () => {
    const activeItem = navigationItems.find(item => isActive(item));
    return activeItem ? activeItem.label : 'For Businesses'; // Default
  };

  return (
    <>
    <div>
          <Helmet>
          <title>Engloray</title>
            <meta name="description" content="This top navbar shows pages of the main website header parts" />
            <meta name="robots" content="max-snippet:-1, max-image-preview: large, max-video-preview:-1" />
            {/* <link rel="canonical" href="https://yourapp.com" /> */}
            <meta property="og:locale" content="en_US" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Your App | Config" />
            <meta property="og:description" content="Lorem Ipsum" />
            {/* <meta property="og:url" content="https://yourapp.com" /> */}
          </Helmet>
          
      <nav className="topnav-main">
      <div className="topnav-container">
        {/* Navigation items - Left aligned */}
        <div className="topnav-items">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              className={`topnav-link ${isActive(item) ? 'topnav-active' : ''}`}
              onClick={() => handleNavigation(item.path)}
            >
              {item.label}
              {isActive(item) && <span className="topnav-active-indicator"></span>}
            </button>
          ))}
        </div>

        {/* Current Page Indicator */}
        <div className="topnav-current-page">
          <span className="current-page-label">Currently viewing:</span>
          <span className="current-page-name">{getActivePage()}</span>
        </div>
      </div>
    </nav>
  </div>
  </>
  );
};

export default TopNavBar;