#! /bin/bash

# Variables

remoteUserName="deploy"
remoteServer="moveshanghai.com"
remotePath="/home/deploy/move-landing"
srcDir="sourcepath/"

read -r -p 'Commit message: ' desc  # prompt for commit message
git add .                           # track all files 
git commit -m "$desc"               # commit with message
git push origin master              # push to origin

rsync -avn ./ "$remoteUserName"@"$remoteServer":"$remotePath"