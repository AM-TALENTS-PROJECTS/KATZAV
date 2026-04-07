@echo off
title Katzav Delicatessen — Serveur local
color 0C

echo.
echo  KATZAV DELICATESSEN — Serveur de developpement local
echo  ======================================================

:: Vérification Python (utilisé pour le serveur HTTP statique)
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Python n'est pas installe ou pas dans le PATH.
    echo Telecharger : https://www.python.org/downloads/
    pause
    exit /b 1
)

set PORT=5000

:: Vérifie si le port est déjà utilisé
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [AVERT] Le port %PORT% est deja utilise. Lancez stop.bat d'abord.
    pause
    exit /b 1
)

echo.
echo [OK] Demarrage sur http://localhost:%PORT%
echo [OK] Ctrl+C pour arreter  ^|  stop.bat pour arreter depuis un autre terminal
echo.

:: Ouverture du navigateur après 1 seconde
start "" cmd /c "timeout /t 1 /nobreak >nul && start http://localhost:%PORT%"

:: Serveur HTTP statique Python natif — aucune dépendance
python -m http.server %PORT%

echo.
echo [INFO] Serveur arrete.
pause
