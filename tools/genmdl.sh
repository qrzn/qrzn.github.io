#!/bin/bash

pics_dir="$HOME/git/qrzn.github.io/art/pics"
thumbnail_dir="$HOME/git/qrzn.github.io/art/pics/150"
output_dir="$HOME/git/qrzn.github.io/art"
output_base_name="dreams_part"

# Function to generate markdown links
generate_markdown_links() {
    local input_dir="$1"
    local output_file="$2"
    
    for file in "$input_dir"/*; do
        local filename=$(basename "$file")
        local thumbnail_path="/art/pics/150/${filename}"
        local link="/art/pics/${filename}"
        echo "[![$filename]($thumbnail_path)]($link)" >> "$output_file"
    done
}

# Create a new markdown file with the given number
create_new_markdown_file() {
    local part_number="$1"
    local output_file="${output_dir}/${output_base_name}${part_number}.md"
    echo "Creating ${output_file}"
    # Clear the output file and add the header
    echo "$header_lines" > "$output_file"
    generate_markdown_links "$thumbnail_dir" "$output_file"
    generate_markdown_links "$pics_dir" "$output_file"
}

# Create the header lines
header_lines="---
title: dreams of qrzn's egregore
author: qrzn
css: /win31.css
---"

# Count the number of links
total_links=$(find "$thumbnail_dir" -type f | wc -l)
total_links=$((total_links + $(find "$pics_dir" -type f | wc -l)))

# Number of links per file
links_per_file=23

# Calculate the number of markdown files to create
num_files=$(( (total_links + links_per_file - 1) / links_per_file ))

# Loop through and create the markdown files
for ((i = 1; i <= num_files; i++)); do
    create_new_markdown_file "$i"
done

