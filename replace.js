const fs = require('fs');
const path = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\TechLearningSection\\Courses\\Courses.jsx';

let content = fs.readFileSync(path, 'utf8');

const search1 = 'src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=900&auto=format&fit=crop"';
const replace1 = 'src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=900&auto=format&fit=crop"';
content = content.replace(search1, replace1);

const search2 = /<div className="lh-card lh-card-large lh-card-math">\s*<img\s+src="data:image\/jpeg;base64,[^"]+"\s+alt="Child learning"\s+className="lh-card-img"\s*\/>/s;
const replace2 = `<div className="lh-card lh-card-large lh-card-math">
                <img
                  src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=900&auto=format&fit=crop"
                  alt="VR learning"
                  className="lh-card-img"
                />`;
content = content.replace(search2, replace2);

fs.writeFileSync(path, content, 'utf8');
console.log('Replacements completed successfully.');
