@echo off
title "Reloader"
start cmd /c "npm start"
timeout /t 12
taskkill /F /T /IM "node*"
exit
