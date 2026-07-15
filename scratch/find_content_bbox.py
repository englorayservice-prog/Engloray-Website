from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img.convert('RGB'))

# Find the background color. Let's look at the corners.
# Let's say we threshold on brightness. The graph content (axes, text, bars, lines) is much brighter than the dark background.
# Let's print some statistics.
gray = np.mean(arr, axis=2)
print("Gray statistics: min:", gray.min(), "max:", gray.max(), "mean:", gray.mean())

# Let's threshold at gray > 20
mask = gray > 15
coords = np.argwhere(mask)
if len(coords) > 0:
    y_min, x_min = coords.min(axis=0)
    y_max, x_max = coords.max(axis=0)
    print("Bounding box of pixels with intensity > 15:", (x_min, y_min, x_max, y_max))
    
    # Crop and save to a temporary file to see dimensions
    cropped = img.crop((x_min, y_min, x_max, y_max))
    print("Cropped size:", cropped.size)
else:
    print("No pixels found above threshold")
