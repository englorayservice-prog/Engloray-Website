from PIL import Image
import numpy as np

img = Image.open(r'c:\Users\mayan\Documents\Engloray\Engloray-Website\src\Pages\Sub Pages\RayMartPageTwo\ChatGPT Image Jul 14, 2026, 01_59_00 PM.png')
arr = np.array(img.convert('RGB'))

# Find the bounding box of the rounded rectangle outline.
# The outline is a light color. Let's look for pixels with R, G, B values that are close to each other and fairly bright,
# but not the content inside. Alternatively, let's write a script that does edge detection or looks at the rows/columns.
# Let's check the intensity of rows and columns.
h, w = arr.shape[:2]
row_max = np.max(arr, axis=(1, 2))
col_max = np.max(arr, axis=(0, 2))

# Print row/column indices where there is significant content, but let's be more specific.
# In the original image, what are the borders of the rounded rectangle?
# Let's inspect the image rows and columns.
# Let's find rows with maximum brightness > 100
valid_rows = np.where(row_max > 100)[0]
valid_cols = np.where(col_max > 100)[0]

print("Rows with max brightness > 100: min =", valid_rows.min(), "max =", valid_rows.max())
print("Cols with max brightness > 100: min =", valid_cols.min(), "max =", valid_cols.max())

# Let's see: if we look at the image, there is a border.
# Let's find the outermost white/light-blue pixels that form a rectangle.
# Let's find pixels where R, G, B are in a certain range representing the border, or let's write a script to detect the rectangle.
# Wait! Let's crop the image using a few candidate bounding boxes and print their properties or save them to check.
# Let's save a cropped image with x in [400, 1100], y in [250, 750] (approx coordinates if we assume center).
# Let's find the exact bounding box of the border.
# The border is a rounded rectangle.
# Let's find the top-most pixel of the border.
# Let's scan from top (y=0) to bottom, and find the first row that has a pixel with a color like the border (e.g. RGB around [70, 100, 150] or [100, 150, 200]).
# Wait, let's print the colors of some pixels along the vertical centerline (x = w // 2) from y = 0 to y = h // 2.
center_x = w // 2
print("Colors along vertical centerline:")
for y in range(0, h // 2, 10):
    print(f"y={y}: {arr[y, center_x]}")
