const fs = require('fs');

let paths = [
    'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx',
    'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DigitalMarketingCourse\\DigitalMarketingCourse.jsx'
];

let map = {
    '\u00E2\u2020\u2019': '?',
    '\u00E2\u2020\u2014': '?',
    '\u00E2\u0153\u2026': '?',
    '\u00E2\u0153\u00A6': '?', 
    '\u00E2\u02DC\u2026': '?',
    '\u00E2\u20AC\u201D': '?'
};

paths.forEach(path => {
    if (fs.existsSync(path)) {
        let content = fs.readFileSync(path, 'utf8');
        let initialContent = content;
        for (const [bad, good] of Object.entries(map)) {
            content = content.split(bad).join(good);
        }
        if (content !== initialContent) {
            fs.writeFileSync(path, content, 'utf8');
            console.log('Fixed: ' + path);
        }
    }
});
