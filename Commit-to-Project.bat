@echo off
echo Are you ready to commit?
pause
git pull origin main
git add .
set /p name= "What is the name of the Commit? - "
git commit -m "%name%"
git push -u origin main
echo Successfully Commited to Github Project
pause