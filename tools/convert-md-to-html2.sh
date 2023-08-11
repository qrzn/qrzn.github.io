#!/bin/bash

center_text_file() {
    if [[ $# -ne 1 ]]; then
        echo "Usage: center_text_file <filename>"
        return 1
    fi

    local filename="$1"
    local lines=()
    local max_width=0

    # Read file into an array of lines
    while IFS= read -r line; do
        lines+=("$line")
        length=${#line}
        if (( length > max_width )); then
            max_width=$length
        fi
    done < "$filename"

    # Calculate padding
    terminal_width=$(tput cols)
    padding=$(( (terminal_width - max_width) / 2 ))

    color="35" # Magenta ANSI color code

    # Display centered lines in Magenta
    for line in "${lines[@]}"; do
        printf "\e[${color}m%${padding}s%s\e[0m\n" "" "$line"
    done
}

# Clear the screen
clear
# Print header
center_text_file "$HOME/git/qrzn.github.io/tools/headers/md.txt" | pv -qL 2000
# Prompt user for template choice
echo
echo "Choose a template:"
echo "-------------------------"
echo "1. Cyberpunk Template"
echo "2. Vaporwave Template"
echo "3. DOS Template"
echo "-------------------------"
echo "4. Exit program"
echo "-------------------------"
echo
read -p "Enter the number of the template you want to use: " template_choice

# Set the template file based on user's choice
case $template_choice in
    1)
        template_file="$HOME/git/scripts/html-templates/template.html"
        ;;
    2)
        template_file="$HOME/git/scripts/html-templates/template2.html"
        ;;
    3)
        template_file="$HOME/git/scripts/html-templates/template3.html"
        ;;
    4)
        exit
        ;;
    *)
        echo "Invalid template choice. Exiting."
        exit 1
        ;;
esac
# Clear the Screen again
clear
# Print the Header
center_text_file "$HOME/git/qrzn.github.io/tools/md.txt"
echo "Converting your .md files to .html, have fun with you website, Master!" | pv -qL 80

# Initialize excluded files list
excluded_files=""

# Read excluded files from genexclusions.txt
while IFS= read -r excluded_path; do
    excluded_files+="\n$excluded_path"
done < "$HOME/git/qrzn.github.io/tools/data/genexclusions.txt"

# Print excluded files
echo -e "Excluded files and folders:\n$excluded_files"

# Prompt user to press Enter to continue
read -rp "Press Enter to continue..."

# Process the markdown files using the chosen template
find "$HOME/git/qrzn.github.io/" -name "*.md" | while read i; do
    # Exclude files/folders listed in genexclusions.txt
    if ! grep -Fxq "$i" "$HOME/git/qrzn.github.io/tools/data/genexclusions.txt"; then
        pandoc -f markdown --template "$template_file" -s "$i" > "${i%.*}".html
    else
        echo "Excluding: $i"
    fi
done