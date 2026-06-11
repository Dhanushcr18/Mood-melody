"""
Django models migration creation script.
Run this after setting up Django to create the database schema.
"""
import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from django.core.management import call_command

# Create migrations
call_command('makemigrations', 'therapy')
call_command('migrate')

print("Database setup complete!")
