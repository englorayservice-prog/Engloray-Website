const fs = require('fs');
let content = 'Advanced <span className="dcp-v3-arrow-capsule-straight">\u00E2\u2020\u2019</span>';
let map = {
    '\u00E2\u2020\u2019': '?',
    '\u00E2\u2020\u2014': '?',
    '\u00E2\u0153\u2026': '?',
    '\u00E2\u0153\u00A6': '?',
    '\u00E2\u02DC\u2026': '?',
    '\u00E2\u20AC\u201D': '?'
};
for (const [bad, good] of Object.entries(map)) {
    content = content.split(bad).join(good);
}
console.log(content);
