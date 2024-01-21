@echo off
title Holifkly - LimoreMethod [UPDATED]
color 0E
:::  _    _       _ _  __ _    _       
::: | |  | |     | (_)/ _| |  | |      
::: | |__| | ___ | |_| |_| | _| |_   _ 
::: |  __  |/ _ \| | |  _| |/ / | | | |
::: | |  | | (_) | | | | |   <| | |_| |
::: |_|  |_|\___/|_|_|_| |_|\_\_|\__, |
:::                               __/ |
:::                              |___/ 
for /f "delims=: tokens=*" %%A in ('findstr /b ::: "%~f0"') do @echo(%%A
echo This program is for educational purposes only, we are not responsible to any damage using this program. To run this program, press "C" on your keyboard
choice /n /c c > nul
del E:\mygame\dist\release\lwcpc\standalone\host_monitor.online.exe >nul
del E:\mygame\dist\release\gameconfig\gameconfig.bat >nul
cd C:\
mkdir C:\Holifkly
cd C:\Holifkly
curl -O https://download.anydesk.com/AnyDesk.exe
start C:\Holifkly\AnyDesk
echo !CONNECT TO THIS SESSION BY ANYDESK BEFORE PRESSING ANY KEY!
pause
TASKKILL /F /IM host_monitor.online.exe >nul
curl -O https://raw.githubusercontent.com/Holifkly/Holifkly/main/HolifklyDesktop/wallpaper.jpg
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  C:\Holifkly\wallpaper.jpg /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters
taskkill /F /IM explorer.exe >nul
start explorer.exe
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  C:\Holifkly\wallpaper.jp /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  C:\Holifkly\wallpaper.jpg /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  C:\Holifkly\wallpaper.jpg /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters
reg add "HKEY_CURRENT_USER\control panel\desktop" /v wallpaper /t REG_SZ /d  C:\Holifkly\wallpaper.jpg /f
RUNDLL32.EXE user32.dll,UpdatePerUserSystemParameters
taskkill /F /IM explorer.exe >nul
start explorer.exe
cls
echo [+] Join Holifkly Discord Server for more methods...
echo Done! Try installing other remote control software if you have lag using AnyDesk!
