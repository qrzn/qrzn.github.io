#!/bin/bash

pics_dir="$HOME/git/qrzn.github.io/art/pics"
thumbnail_dir="$HOME/git/qrzn.github.io/art/pics/150"
output_file="$HOME/git/qrzn.github.io/art/dreams.md"

# Function to generate markdown links
generate_markdown_links() {
    local input_dir="$1"
    local output_dir="$2"
    
    for file in "$input_dir"/*; do
        local filename=$(basename "$file")
        local thumbnail_path="$output_dir/${filename}"
        local link="/art/pics${thumbnail_path}"
        echo "[![$filename]($thumbnail_path)]($link)" >> "$output_file"
    done
}

# Create the header lines
header_lines="---
title: dreams of qrzn's egregore
author: qrzn
css: /win31.css
---"

# Clear the output file and add the header
echo "$header_lines" > "$output_file"

# Generate markdown links for the thumbnail directory
generate_markdown_links "$thumbnail_dir" "/art/pics/150"

# Generate markdown links for the main directory
generate_markdown_links "$pics_dir" "/art/pics"

