/**
 * Fix remaining react-helmet → react-helmet-async imports
 */

const fs = require('fs');

const files = [
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/TechLearningSection/NavigationBar/NavigationBar.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/TechLearningSection/LearningFooter/LearningFooter.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/subFooterOne/NewFooter1.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/subFooterTwo/NewFooter.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/TechGroupSection/BenfitsFooter/BenifitsFooter.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/kishanth/SoftwareAppDev/SoftwareAppDev.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/UiUxPageCopy/UiUxPageCopy.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/GraphicDesignerInternPage/GraphicDesignerInternPage.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Components/TwoLineNavbar/TwoLineNavbar.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Components/RayMartNavbar/RayMartNavbar.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Components/WhiteFooter/WhiteFooter.jsx',
  'd:/Engloraywebsite/Engloray-pro-website/src/Components/Navbar/Navbar.jsx',
];

let fixed = 0;

files.forEach(fp => {
  try {
    let content = fs.readFileSync(fp, 'utf-8');
    if (content.includes("from 'react-helmet'") && !content.includes("from 'react-helmet-async'")) {
      content = content.replace(/from 'react-helmet'/g, "from 'react-helmet-async'");
      fs.writeFileSync(fp, content, 'utf-8');
      console.log('  FIXED: ' + fp.split('/').pop());
      fixed++;
    } else if (content.includes('from "react-helmet"') && !content.includes('from "react-helmet-async"')) {
      content = content.replace(/from "react-helmet"/g, 'from "react-helmet-async"');
      fs.writeFileSync(fp, content, 'utf-8');
      console.log('  FIXED: ' + fp.split('/').pop());
      fixed++;
    } else {
      console.log('  SKIP: ' + fp.split('/').pop() + ' (already fixed or no match)');
    }
  } catch (err) {
    console.log('  ERROR: ' + fp.split('/').pop() + ' — ' + err.message);
  }
});

console.log('\nFixed: ' + fixed + ' files');
