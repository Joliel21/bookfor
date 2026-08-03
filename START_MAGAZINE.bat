@echo off
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if errorlevel 1 goto error
echo.
echo Starting magazine preview...
call npm run dev
exit /b 0
:error
echo.
echo The magazine could not start. Confirm Node.js is installed and this file is inside the extracted 53_RPM folder.
pause
exit /b 1
