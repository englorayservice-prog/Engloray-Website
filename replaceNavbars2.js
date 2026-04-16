const fs = require('fs');

const files = [
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\GraphicDesignerInternPage\\GraphicDesignerInterPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\SoftwareDeveloperInternPage\\SoftwareDeveloperInterPage.jsx'
];

for (let file of files) {
    if (!fs.existsSync(file)) {
        console.log("Not found:", file);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');

    // Remove old import for Navbar if it's there
    content = content.replace(/import\s+Navbar\s+from\s+['"]\.\.\/\.\.\/\.\.\/Components\/Navbar\/Navbar['"];?/g, '');
    
    // Check if TwoLineNavbar is already imported
    if (!content.includes('TwoLineNavbar')) {
        // Insert TwoLineNavbar import after TopNavBar
        content = content.replace(/(import\s+TopNavBar\s+from\s+['"]\.\.\/\.\.\/\.\.\/Components\/TopNavbar\/TopNavbar['"];?)/, "$1\nimport TwoLineNavbar from '../../../Components/TwoLineNavbar/TwoLineNavbar';");
    }

    // Replace uncommented Navbar component or commented with TopNavBar and TwoLineNavbar
    // First, remove existing lines that might have them
    content = content.replace(/\{\s*\/\*\s*<\/?TopNavBar\s*\/?>(?:\s*\*\/\s*\})?/g, '');
    content = content.replace(/\{\s*\/\*\s*<\/?Navbar\s*\/?>(?:\s*\*\/\s*\})?/g, '');
    content = content.replace(/<Navbar\s*\/>/g, '');
    content = content.replace(/<TopNavBar\s*\/>/g, '');

    // Now insert them right after <div className="...-content" ref={containerRef}>
    content = content.replace(/(<div\s+className="[^"]+-content"\s+ref=\{containerRef\}>)/, "$1\n                    <TopNavBar />\n                    <TwoLineNavbar />");

    fs.writeFileSync(file, content);
    console.log("Processed:", file);
}
