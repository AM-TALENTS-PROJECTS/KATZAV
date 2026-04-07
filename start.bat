@echo off
title Katzav Delicatessen — Serveur local
color 0C

echo.
echo  KATZAV DELICATESSEN — Serveur de developpement local
echo  ======================================================

:: Vérification Python
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Python n'est pas installe ou pas dans le PATH.
    echo Telecharger : https://www.python.org/downloads/
    pause
    exit /b 1
)

:: Création du venv si absent
if not exist "venv\" (
    echo [INFO] Creation de l'environnement virtuel...
    python -m venv venv
)

:: Activation du venv
call venv\Scripts\activate.bat

:: Installation des dépendances si besoin
pip show flask >nul 2>&1
if %errorlevel% neq 0 (
    echo [INFO] Installation des dependances...
    pip install -r requirements.txt
)

:: Copie du .env si absent
if not exist ".env" (
    if exist ".env.example" (
        echo [INFO] Creation du .env depuis .env.example...
        copy .env.example .env >nul
    )
)

set PORT=5000

:: Vérifie si le port est déjà utilisé
netstat -ano | findstr ":%PORT% " | findstr "LISTENING" >nul 2>&1
if %errorlevel% equ 0 (
    echo [AVERT] Le port %PORT% est deja utilise.
    echo Lancez stop.bat d'abord, ou changez PORT dans .env
    pause
    exit /b 1
)

echo.
echo [OK] Demarrage sur http://localhost:%PORT%
echo [OK] Ctrl+C pour arreter  ^|  stop.bat pour arreter depuis un autre terminal
echo.

:: Ouverture du navigateur après 3 secondes (laisse le temps à Flask de démarrer)
start "" cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:%PORT%"

:: Lancement Flask (bloque jusqu'à Ctrl+C)
set FLASK_ENV=development
cd backend
python app.py

:: Nettoyage à la sortie
if exist "..\server.pid" del "..\server.pid" >nul 2>&1
echo.
echo [INFO] Serveur arrete.
pause
