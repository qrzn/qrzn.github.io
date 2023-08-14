#!/bin/bash

# Starting the script to remove HTML files from a specific directory.
echo "Starting the HTML file removal script..."

# Directory path to search for HTML files.
search_directory="$HOME/git/qrzn.github.io/"

# List of filenames to exclude from deletion.
excluded_files=("copy.html" "template.html")

# Verifying the existence of the search directory.
if [ ! -d "$search_directory" ]; then
    echo "Error: Directory not found: $search_directory"
    exit 1
fi

# Finding and removing HTML files within the specified directory and its subdirectories.
echo "Searching for HTML files in the directory: $search_directory"

# Looping through each HTML file found, checking for exclusion, and removing them.
for file_path in $(find $search_directory -name '*.html'); do
    file_name=$(basename "$file_path")

    # Check if the file is excluded from deletion.
    if [[ " ${excluded_files[@]} " =~ " ${file_name} " ]]; then
        echo "Skipping excluded file: $file_path"
    else
        echo "Removing HTML file: $file_path"
        rm "$file_path"
        echo "HTML file removed."
    fi
done

# Script execution completed.
echo "HTML file removal process completed."

