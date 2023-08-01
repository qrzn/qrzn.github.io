#!/bin/bash

# Define input and output folders
input_folder="$HOME/git/qrzn.github.io/art/pics"
output_folder="$HOME/git/qrzn.github.io/art/pics/150"

# Check if the output folder exists; if not, create it
if [ ! -d "$output_folder" ]; then
    mkdir "$output_folder"
fi

# Loop through all the image files in the input folder
for image_file in "$input_folder"/*.jpg "$input_folder"/*.jpeg "$input_folder"/*.png "$input_folder"/*.gif "$input_folder"/*.bmp; do
    if [ -f "$image_file" ]; then
        # Get the filename without the extension
        filename=$(basename "${image_file%.*}")

        # Resize the image to a width of 150px and preserve the aspect ratio
        convert "$image_file" -resize 150x "$output_folder/${filename}.${image_file##*.}"
    fi
done

echo "All images scaled and saved in the '150' folder."

