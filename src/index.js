import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './Styles/Style.css';
import './Styles/globals.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import './Fonts/Pavlet.woff2';
// import './Fonts/Pavlet.woff';
// import './Fonts/Aldrich-Regular.woff2';
// import './Fonts/Aldrich-Regular.woff';
// import './Fonts/HEXCO-Regular.woff2';
// import './Fonts/HEXCO-Regular.woff';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
