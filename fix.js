const fs = require('fs');
let content = fs.readFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\JavaFullStackCourse\\JavaFullStackCourse.css', 'utf8');

content = content.replace(/jfs-/g, 'dcp-');
content = content.replace(/dcp-dgm-/g, 'dcp-');
content = content.replace(/Java Full Stack/g, 'Drawing Course');
content = content.replace(/GraphicDesignCourse/g, 'DrawingCourse');

if (!content.includes('--dcp-fluid-scale:')) {
    content = ':root { --dcp-fluid-scale: 1px; }\n' + content;
}

fs.writeFileSync('d:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.css', content, 'utf8');
