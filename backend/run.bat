@echo off
REM Django Backend Run Script for Windows

if not exist venv (
    echo Virtual environment not found. Please run setup.bat first.
    exit /b 1
)

call venv\Scripts\activate
python manage.py runserver 0.0.0.0:8000
