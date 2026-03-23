import os

def clean_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            text = f.read()
        
        # Remove U+202C (Pop Directional Formatting) and other similar characters
        cleaned_text = text.replace('\u202c', '').replace('\u202b', '').replace('\u202a', '').replace('\ufeff', '')
        
        if cleaned_text != text:
             with open(file_path, 'w', encoding='utf-8') as f:
                f.write(cleaned_text)
             print(f"Cleaned hidden characters from {file_path}")
        else:
             print(f"No hidden characters found in {file_path}")
    except Exception as e:
        print(f"Error cleaning {file_path}: {e}")

files = [
    r"d:\Project-Engloray\Engloray-Website-main\src\Pages\Sub Pages\SoftwareAppDev\SoftwareAppDev.jsx",
    r"d:\Project-Engloray\Engloray-Website-main\src\Pages\Sub Pages\SoftwareDeveloperInternPage\SoftwareDeveloperInterPage.jsx"
]

for file in files:
    clean_file(file)
