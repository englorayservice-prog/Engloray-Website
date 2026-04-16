const fs = require('fs');

const files = [
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\GraphicDesignerInternPage\\GraphicDesignerInternPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\GraphicDesignerInternPage\\GraphicDesignerInterPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\UiuxDesignerInternPage\\UiuxDesignerInternPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\WebstieDeveloperInternPage\\WebsiteDeveloperInternPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\SoftwareDeveloperInternPage\\SoftwareDeveloperInterPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\SalesExecutiveInternPage\\SalesExecutiveInternPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\BusinessDevelopmentInternPage\\BusinessDevelopmentInternPage.jsx',
    'c:\\Engloray-Website\\src\\Pages\\Sub Pages\\TrainingMentorInternPage\\TrainingMentorInternPage.jsx'
];

for (let file of files) {
    if (!fs.existsSync(file)) {
        console.log("Not found:", file);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');

    // Replace <TwoLineNavbar /> with <Navbar />
    content = content.replace(/<TwoLineNavbar\s*\/>/g, '<Navbar />');

    // Replace TwoLineNavbar import with Navbar import
    if (!content.includes("import Navbar from '../../../Components/Navbar/Navbar';")) {
        content = content.replace(
            /import\s+TwoLineNavbar\s+from\s+['"]\.\.\/\.\.\/\.\.\/Components\/TwoLineNavbar\/TwoLineNavbar['"];?/, 
            "import Navbar from '../../../Components/Navbar/Navbar';"
        );
    } else {
        // Just remove TwoLineNavbar import
        content = content.replace(/import\s+TwoLineNavbar\s+from\s+['"]\.\.\/\.\.\/\.\.\/Components\/TwoLineNavbar\/TwoLineNavbar['"];?\n?/g, '');
    }

    fs.writeFileSync(file, content);
    console.log("Processed:", file);
}
