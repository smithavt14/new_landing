#! /bin/bash

# ----- Variables  -----

read -r -p 'Commit message: ' desc
git add .
git commit -m "$desc"
git push origin master