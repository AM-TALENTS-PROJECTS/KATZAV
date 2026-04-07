@echo off
title Katzav Delicatessen — Arrêt serveur
color 0C

echo.
echo  KATZAV DELICATESSEN — Arret du serveur
echo  ========================================

set PORT=5000

:: Recherche du PID qui écoute sur le port
for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":%PORT% " ^| findstr "LISTENING"') do (
    set PID=%%a
)

if not defined PID (
    echo [INFO] Aucun serveur en cours sur le port %PORT%.
    timeout /t 2 /nobreak >nul
    exit /b 0
)

echo [INFO] Serveur trouve (PID %PID%) — arret en cours...
taskkill /PID %PID% /F >nul 2>&1

if %errorlevel% equ 0 (
    echo [OK] Serveur arrete.
) else (
    echo [ERREUR] Impossible d'arreter le processus %PID%.
    echo Essayez d'executer stop.bat en tant qu'administrateur.
)

timeout /t 2 /nobreak >nul
