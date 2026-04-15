const fs = require('fs');
const puppeteer = require('puppeteer');

const css = fs.readFileSync('d:/Engloraywebsite/Engloray-pro-website/src/Pages/Sub Pages/GraphicDesignCourse/GraphicDesignCourse.css', 'utf-8');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    
    await page.setContent('<style>' + css + '</style><body><div class=\"gdc-page\"><div class=\"gdc-v3-main-title\">TEST TITLE</div><div class=\"gdc-v3-join-btn\">JOIN BTN</div></div></body>');
    
    const res = await page.evaluate(() => {
        const title = document.querySelector('.gdc-v3-main-title');
        const btn = document.querySelector('.gdc-v3-join-btn');
        return {
            titleMaxWidth: window.getComputedStyle(title).maxWidth,
            titleFontSize: window.getComputedStyle(title).fontSize,
            btnFontSize: window.getComputedStyle(btn).fontSize,
            btnPadding: window.getComputedStyle(btn).padding,
            scaleVar: window.getComputedStyle(document.documentElement).getPropertyValue('--gdc-fluid-scale')
        };
    });
    console.log(res);
    
    await browser.close();
})();
