import os

# Change this to your folder path
folder_path = r"E:\Work\Pakistani-Chinese Fusion Website\src\public\assets\menuitems"

# List all files in the folder
files = os.listdir(folder_path)

# Print each filename
for file_name in files:
    print(file_name)
