const { Jimp } = require('jimp');

const srcPath = "C:\\Users\\Javith\\.gemini\\antigravity-ide\\brain\\6b01fe08-4462-440c-b0e0-e9a1a1d1c3c2\\pixar_characters_white_1781245547351.png";
const destPath = "d:\\Engloraywebsite\\Engloray-pro-website\\src\\assets\\pixar_characters.png";

Jimp.read(srcPath)
  .then(image => {
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    // Threshold parameters for keying out white
    const t1 = 20; // Distance below which pixels are fully transparent
    const t2 = 60; // Distance above which pixels are fully opaque
    
    image.scan(0, 0, width, height, function(x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];
      const a = this.bitmap.data[idx + 3];
      
      // Calculate Euclidean distance from white (255, 255, 255)
      const dist = Math.sqrt(
        Math.pow(255 - r, 2) +
        Math.pow(255 - g, 2) +
        Math.pow(255 - b, 2)
      );
      
      if (dist < t1) {
        // Fully transparent
        this.bitmap.data[idx + 3] = 0;
      } else if (dist < t2) {
        // Feathered alpha transition
        const factor = (dist - t1) / (t2 - t1);
        this.bitmap.data[idx + 3] = Math.round(a * factor);
      }
    });
    
    return image.write(destPath);
  })
  .then(() => {
    console.log("Background removal successful! Saved to:", destPath);
  })
  .catch(err => {
    console.error("Error processing image:", err);
  });
