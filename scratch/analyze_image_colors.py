from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img.convert('RGB'))

# Find bounding box where pixel values are greater than [20, 20, 20]
mask = np.any(arr > 20, axis=2)
coords = np.argwhere(mask)
if len(coords) > 0:
    y_min, x_min = coords.min(axis=0)
    y_max, x_max = coords.max(axis=0)
    print("Bounding box of pixels > 20:", (x_min, y_min, x_max, y_max))
    
    # Crop with 10px padding
    h, w = arr.shape[:2]
    x_min = max(0, x_min - 10)
    y_min = max(0, y_min - 10)
    x_max = min(w, x_max + 10)
    y_max = min(h, y_max + 10)
    
    cropped = img.crop((x_min, y_min, x_max, y_max))
    # Let's save it directly overwriting the original salesGraph file! Wait, or we can save it as salesGraphCropped.png and change JSX.
    # Actually, saving it as a new file is safer or we can overwrite. Overwriting might be good but let's first save it to a separate file to test.
    cropped.save(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\salesGraphCropped.png')
    print("Saved cropped image of size:", cropped.size)
else:
    print("No pixels found above 20 threshold")
