const fs = require('fs');
let path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/???/g, '?');
content = content.replace(/???/g, '?');
content = content.replace(/???/g, '?');
content = content.replace(/???/g, '?');
content = content.replace(/???/g, '?');
content = content.replace(/???/g, '?');

fs.writeFileSync(path, content, 'utf8');
