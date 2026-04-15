const fs = require('fs');

const routeMap = {
  'branding & identity': '/brandingIdentityPage',
  'website development': '/websiteDevelopmentPage',
  'e-commerce development': '/ecommerceDevelopmentPage',
  'mobile app development': '/appDevelopmentPage',
  'ui/ux design': '/uiuxDesignPage',
  'software & tech': '/softwareSolutionPage',
  'data analytics': '/dataAnalyticsPage',
  'ai services': '/aiServicesPage',
  'crm service': '/crmPage',
  'saas service': '/saasPage',
  'CRM': '/crmPage',
  'ERP': '/erpPage',
  'AI CHATBOT': '/aiChatbotPage',
  'JOB SEEKER HUB': '/jobSeekerPage',
  'LEARNING & CAREER': '/learningPage',
  'SAAS': '/saasPage'
};

function extractWithCategories(filePath, rowClass, type) {
  const content = fs.readFileSync(filePath, 'utf8');
  const rows = content.split(rowClass);
  const results = [];

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const catMatch = row.match(/className=".*?row-title".*?>(.*?)</);
    const category = catMatch ? catMatch[1].trim() : 'General';

    const itemRegex = /\{\s*title:\s*"([^"]+)"/g;
    let match;
    while ((match = itemRegex.exec(row)) !== null) {
      const title = match[1];
      // Check for link in routeMap, fallback to category or parent if needed
      let link = routeMap[category] || routeMap[title] || '/raymartPageFour';
      
      results.push({
        title: title,
        category: category,
        type: type,
        link: link
      });
    }
  }
  return results;
}

const services = extractWithCategories('d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/RayMartPageTwo/RayMartPageTwo.jsx', 'className="rm-designs-row"', 'service');
const products = extractWithCategories('d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/RayMartPageThree/RayMartPageThree.jsx', 'className="rm3-store-row"', 'product');

const allItems = [...services, ...products];

// deduplicate
const uniqueItems = Array.from(new Set(allItems.map(a => JSON.stringify(a))))
  .map(e => JSON.parse(e));

fs.writeFileSync('d:/Engloraywebsite/Engloray-pro-website/src/Pages/TechGroupSection/HeroSection/SearchData.json', JSON.stringify(uniqueItems, null, 2));
console.log('Total unique items extracted: ' + uniqueItems.length);
