#!/bin/bash

# Django Backend Startup Script for macOS/Linux

echo "Creating virtual environment..."
python3 -m venv venv

echo "Activating virtual environment..."
source venv/bin/activate

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Copying environment template..."
if [ ! -f .env ]; then
    cp .env.example .env
    echo "Please update .env file with your settings"
fi

echo "Running database migrations..."
python manage.py migrate

echo ""
echo "==================================="
echo "Django Backend Setup Complete!"
echo "==================================="
echo ""
echo "To start the backend, run:"
echo "  ./run.sh"
echo ""
echo "Backend will be available at:"
echo "  http://localhost:8000"
echo "Admin panel: http://localhost:8000/admin"
echo ""
