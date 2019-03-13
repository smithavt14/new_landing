#! /bin/bash

read -r -p 'Commit message: ' desc  # prompt for commit message
git add .                           # track all files 
git commit -m "$desc"               # commit with message
git push origin master              # push to origin

rsync -avn ./ deploy@moveshanghai.com:/home/deploy/move-landing