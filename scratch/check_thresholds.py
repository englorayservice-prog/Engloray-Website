from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img)
alpha = arr[:, :, 3]

# Let's find the bounding box where alpha > 5, alpha > 10, alpha > 50
for thresh in [5, 10, 50, 100]:
    coords = np.argwhere(alpha >= thresh)
    if len(coords) > 0:
        y_min, x_min = coords.min(axis=0)
        y_max, x_max = coords.max(axis=0)
        print(f"Threshold alpha >= {thresh}: box = ({x_min}, {y_min}, {x_max}, {y_max}), size = ({x_max - x_min + 1}, {y_max - y_min + 1})")
    else:
        print(f"Threshold alpha >= {thresh}: none")
