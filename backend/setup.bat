@echo off
REM Django Backend Startup Script for Windows

echo Creating virtual environment...
python -m venv venv

echo Activating virtual environment...
call venv\Scripts\activate

echo Installing dependencies...
pip install -r requirements.txt

echo Copying environment template...
if not exist .env (
    copy .env.example .env
    echo Please update .env file with your settings
)

echo Running database migrations...
python manage.py migrate

echo.
echo ===================================
echo Django Backend Setup Complete!
echo ===================================
echo.
echo To start the backend, run:
echo   .\run.bat
echo.
echo Backend will be available at:
echo   http://localhost:8000
echo Admin panel: http://localhost:8000/admin
echo.
