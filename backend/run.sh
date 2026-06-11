#!/bin/bash

# Django Backend Run Script for macOS/Linux

if [ ! -d venv ]; then
    echo "Virtual environment not found. Please run setup.sh first."
    exit 1
fi

source venv/bin/activate
python manage.py runserver 0.0.0.0:8000
