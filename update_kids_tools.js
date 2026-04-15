const fs = require('fs');

const jsxPath = 'd:\\Engloraywebsite\\Engloray-pro-website\\src\\Pages\\Sub Pages\\DrawingCourse\\DrawingCourse.jsx';
let jsxContent = fs.readFileSync(jsxPath, 'utf8');

// Replace toolsV2Data
const toolsStartMatch = 'const toolsV2Data = [';
let startIdx = jsxContent.indexOf(toolsStartMatch);
let endIdx = jsxContent.indexOf('const benefits = [');

if (startIdx !== -1 && endIdx !== -1) {
    const newToolsData = `const toolsV2Data = [
        [
            { name: "Wax Crayons", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Bright colors for fun drawing.", bg: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 100%)" },
            { name: "Oil Pastels", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Smooth blending and rich colors.", bg: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)" },
            { name: "Color Pencils", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Great for detailed sketches.", bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" },
            { name: "Blending Stumps", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Perfect shading and blending.", bg: "linear-gradient(135deg, #fccb90 0%, #d57eeb 100%)" }
        ],
        [
            { name: "Watercolor Cakes", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Easy to mix watercolor paints.", bg: "linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)" },
            { name: "Paint Brushes", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Various sizes for painting.", bg: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
            { name: "Color Palette", icon: <FontAwesomeIcon icon={faPaintBrush} />, desc: "Mix new exciting colors.", bg: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)" },
            { name: "Canvas Boards", icon: <FontAwesomeIcon icon={faBook} />, desc: "Sturdy boards for painting.", bg: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }
        ],
        [
            { name: "HB & 2B Pencils", icon: <FontAwesomeIcon icon={faPencilAlt} />, desc: "Basic pencils for sketching.", bg: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)" },
            { name: "Drawing Book", icon: <FontAwesomeIcon icon={faBook} />, desc: "Blank pages for imagination.", bg: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)" },
            { name: "Erasers & Sharpeners", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Correct mistakes easily.", bg: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" },
            { name: "Stencils", icon: <FontAwesomeIcon icon={faRulerCombined} />, desc: "Draw perfect shapes.", bg: "linear-gradient(135deg, #cfd9df 0%, #e2ebf0 100%)" }
        ],
        [
            { name: "Craft Paper", icon: <FontAwesomeIcon icon={faBook} />, desc: "Colorful papers for crafts.", bg: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" },
            { name: "Child-safe Scissors", icon: <FontAwesomeIcon icon={faRulerCombined} />, desc: "Safe tools for paper cutting.", bg: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)" },
            { name: "Glue Sticks", icon: <FontAwesomeIcon icon={faPenFancy} />, desc: "Mess-free paper gluing.", bg: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" },
            { name: "Glitter Pens", icon: <FontAwesomeIcon icon={faMagic} />, desc: "Add sparkle to artworks.", bg: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)" }
        ]
    ];\n\n    `;
    jsxContent = jsxContent.substring(0, startIdx) + newToolsData + jsxContent.substring(endIdx);
}

// Replace Labels
jsxContent = jsxContent.replace(
    '{["AI Generation", "Digital Painting", "Vector Design", "3D & Modeling"].map((label, idx)',
    '{["Crayons & Shading", "Watercolors", "Sketch Tools", "Crafting Items"].map((label, idx)'
);

// Replace headings
jsxContent = jsxContent.replace(
    '<h2 className="gdc-tools-v2-title"> Essential Tools & Resources</h2>',
    '<h2 className="gdc-tools-v2-title"> Fun Drawing Tools & Materials</h2>'
);
jsxContent = jsxContent.replace(
    '<p className="gdc-tools-v2-subtitle">Master the industry\\'s most powerful artistic workflow</p>',
    '<p className="gdc-tools-v2-subtitle">Everything kids need to bring their vibrant imagination to life!</p>'
);

fs.writeFileSync(jsxPath, jsxContent, 'utf8');
console.log('done');
