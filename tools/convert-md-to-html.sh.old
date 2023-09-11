#!/bin/bash

template_dir="$HOME/git/scripts/html-templates"
output_dir="$HOME/git/qrzn.github.io"

apply_template() {
    local input_file="$1"
    local template="$2"
    local output_file="${input_file%.*}".html
    echo "Applying template to: $input_file"
    pandoc -f markdown --template "$template" -s "$input_file" > "$output_file"
    echo "Generated HTML: $output_file"
}

echo "Searching for Markdown files in: $output_dir"
find "$output_dir" -name "*.md" | while read i; do
    if [[ "$i" =~ "$output_dir/moo/" ]]; then
        echo "Detected 'moo' folder: $i"
        apply_template "$i" "$template_dir/template_moo.html"
    elif [[ "$i" =~ "$output_dir/vapor/" ]]; then
        echo "Detected 'vapor' folder: $i"
        apply_template "$i" "$template_dir/template_vapor.html"
    else
        echo "Applying standard template to: $i"
        apply_template "$i" "$template_dir/template.html"
    fi
done
