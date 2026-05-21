const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            if (f !== 'node_modules' && f !== '.git') {
                walkDir(dirPath, callback);
            }
        } else {
            callback(dirPath);
        }
    });
}

const root = path.resolve(__dirname, '..');
console.log('Scanning root directory:', root);

walkDir(root, (filePath) => {
    if (filePath.endsWith('.json')) {
        try {
            const content = fs.readFileSync(filePath, 'utf8');
            if (!content.trim()) {
                console.log(`EMPTY JSON FILE FOUND: ${filePath}`);
                return;
            }
            JSON.parse(content);
        } catch (err) {
            console.log(`INVALID JSON FILE: ${filePath}`);
            console.log(`Error: ${err.message}`);
        }
    }
});
