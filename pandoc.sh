#!/bin/bash

for i in $HOME/git/qrzn.github.io/ptry/posts/*.md;
  do pandoc -f markdown --template $HOME/template.html -s "$i" > "${i%.*}".html; 
done;

printf "done converting markdown to html in /ptry/posts/"