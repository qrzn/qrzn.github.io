#!/bin/bash

find $HOME/git/qrzn.github.io/ -name "*.md" | while read i; do pandoc -f markdown --template $HOME/template.html -s "$i" > "${i%.*}".html; done;