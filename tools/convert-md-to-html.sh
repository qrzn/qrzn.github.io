#!/bin/bash

find $HOME/git/qrzn.github.io/ -name "*.md" | while read i; do pandoc -f markdown --template $HOME/git/scripts/html-templates/template.html -s "$i" > "${i%.*}".html; done;
