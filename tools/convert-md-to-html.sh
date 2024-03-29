#!/bin/bash

# Define the directory paths for template and output
template_dir="$HOME/git/scripts/html-templates"
output_dir="$HOME/git/qrzn.github.io"

# Function to apply a template to a Markdown file
apply_template() {
    local input_file="$1"
    local template="$2"
    local output_file="${input_file%.*}".html

    # Notify about the template application process
    echo "Applying template to: $input_file"

    # Convert Markdown to HTML using Pandoc and the specified template
    pandoc -f markdown --template "$template" -s "$input_file" > "$output_file"

    # Provide information about the generated HTML file
    echo "Generated HTML: $output_file"
}

# Begin the processing of Markdown files
echo "Searching for Markdown files in: $output_dir"
find "$output_dir" -name "*.md" | while read i; do
    if [[ "$i" =~ "$output_dir/moo/" ]]; then
        # Apply specialized template for 'moo' folder
        echo "Detected 'moo' folder: $i"
        apply_template "$i" "$template_dir/template_moo.html"
    elif [[ "$i" =~ "$output_dir/vapor/" ]]; then
        # Apply specialized template for 'vapor' folder
        echo "Detected 'vapor' folder: $i"
        apply_template "$i" "$template_dir/template_vapor.html"
    else
        # Apply standard template for other cases
        echo "Applying standard template to: $i"
        apply_template "$i" "$template_dir/template.html"
    fi
done
