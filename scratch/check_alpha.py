from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img) # shape: (1024, 1536, 4)

# Print alpha channel stats
alpha = arr[:, :, 3]
print("Alpha channel values: min =", alpha.min(), "max =", alpha.max(), "mean =", alpha.mean())
print("Number of pixels with alpha == 0:", np.sum(alpha == 0))
print("Number of pixels with alpha == 255:", np.sum(alpha == 255))
print("Number of pixels with 0 < alpha < 255:", np.sum((alpha > 0) & (alpha < 255)))

# Let's find the bounding box where alpha > 0
coords = np.argwhere(alpha > 0)
if len(coords) > 0:
    y_min, x_min = coords.min(axis=0)
    y_max, x_max = coords.max(axis=0)
    print("Bounding box where alpha > 0:", (x_min, y_min, x_max, y_max))
