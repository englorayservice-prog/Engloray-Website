import sys

def fix_digital():
    source_file = r"d:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\JavaFullStackCourse\JavaFullStackCourse.css"
    dest_file = r"d:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\DigitalMarketingCourse\DigitalMarketingCourse.css"

    with open(source_file, "r", encoding="utf-8") as f:
        content = f.read()

    # Base replacements
    content = content.replace("jfs-", "dgm-gdc-")
    content = content.replace("dgm-gdc-dgm-", "dgm-")
    content = content.replace("Java Full Stack", "Digital Marketing")
    content = content.replace("JavaFullStackCourse", "DigitalMarketingCourse")
    content = content.replace("GraphicDesignCourse", "DigitalMarketingCourse")

    # Specific tweaks
    content = content.replace("dgm-gdc-enroll", "dgm-enroll")
    content = content.replace("dgm-gdc-single-enroll", "dgm-single-enroll")
    content = content.replace("dgm-outcome-numbered-card", "digi-mkt-outcome-card")

    if "--dgm-gdc-fluid-scale:" not in content:
        content = ":root { --dgm-gdc-fluid-scale: 1px; }\n" + content

    with open(dest_file, "w", encoding="utf-8") as f:
        f.write(content)

def fix_drawing():
    source_file = r"d:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\JavaFullStackCourse\JavaFullStackCourse.css"
    dest_file = r"d:\Engloraywebsite\Engloray-pro-website\src\Pages\Sub Pages\DrawingCourse\DrawingCourse.css"

    with open(source_file, "r", encoding="utf-8") as f:
        content = f.read()

    content = content.replace("jfs-", "dcp-")
    content = content.replace("dcp-dgm-", "dcp-")
    content = content.replace("Java Full Stack", "Drawing Course")
    content = content.replace("GraphicDesignCourse", "DrawingCourse")

    if "--dcp-fluid-scale:" not in content:
        content = ":root { --dcp-fluid-scale: 1px; }\n" + content

    with open(dest_file, "w", encoding="utf-8") as f:
        f.write(content)

fix_digital()
fix_drawing()
print("Done")
