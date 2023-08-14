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

    # Display centered lines
    for line in "${lines[@]}"; do
        printf "%${padding}s%s\n" "" "$line"
    done
}

# Clear the screen
clear
# Print header
center_text_file "$HOME/git/qrzn.github.io/tools/headers/rmhtml.txt" | pv -qL 2000

#!/bin/bash

exclusions_file="$HOME/git/qrzn.github.io/tools/data/exclusions.txt"
exclusions=()

# Read exclusions from the file
if [[ -f $exclusions_file ]]; then
    while IFS= read -r line; do
        exclusions+=("$line")
    done < "$exclusions_file"
else
    echo "Exclusions file not found."
    exit 1
fi

num_exclusions=${#exclusions[@]}

echo "Excluded files and folders:"
for exclude in "${exclusions[@]}"; do
    echo "- $exclude"
done

read -p "Do you want to remove all HTML files? (y/n): " choice

if [[ $choice == "y" || $choice == "Y" ]]; then
    removed_count=0

    for f in $(find "$HOME/git/qrzn.github.io/" -name '*.html'); do
        should_exclude=false

        # Check if the file should be excluded
        for exclude in "${exclusions[@]}"; do
            if [[ "$f" == *"$exclude"* ]]; then
                should_exclude=true
                break
            fi
        done

        if [ "$should_exclude" = false ]; then
            rm "$f"
            removed_count=$((removed_count + 1))
        fi
    done
    clear
    echo "Master, I removed $removed_count nasty little HTML files." | pv -qL 20
else
    echo "Operation cancelled."
fi