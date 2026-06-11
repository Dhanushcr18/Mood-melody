# Django Backend - Quick Reference

## Project Structure

```
backend/
├── config/settings.py      - Django settings
├── config/urls.py          - URL routing
├── therapy/models.py       - Database models
├── therapy/views.py        - API endpoints
├── therapy/serializers.py  - Request/Response serialization
├── manage.py               - Django CLI
├── requirements.txt        - Python dependencies
└── README.md               - Full documentation
```

## Database Models

```python
UserProfile
├── user (ForeignKey to User)
├── languages (JSONField)
└── last_emotion (CharField)

MoodEntry
├── user (ForeignKey)
├── emotion (CharField)
├── confidence (FloatField)
└── note (TextField)

JournalEntry
├── user (ForeignKey)
├── text (TextField)
└── mood_at_time (CharField)

TherapySession
├── user (ForeignKey)
└── messages (Reverse FK)

TherapyMessage
├── session (ForeignKey)
├── is_user (BooleanField)
└── content (TextField)

MusicRecommendation
├── mood_entry (ForeignKey)
├── song_title (CharField)
├── artist (CharField)
└── reason (TextField)
```

## API Endpoints

### Auth
```
POST   /auth/register/          Register user
POST   /auth/login/             Login user
GET    /profile/                Get profile
PUT    /profile/update/         Update profile
```

### Moods
```
GET    /moods/                  List moods
POST   /moods/                  Create mood
GET    /moods/{id}/             Get mood
POST   /moods/{id}/add_recommendation/  Add song
```

### Journal
```
GET    /journal/                List entries
POST   /journal/                Create entry
GET    /journal/{id}/           Get entry
PUT    /journal/{id}/           Update entry
DELETE /journal/{id}/           Delete entry
```

### Therapy
```
GET    /sessions/               List sessions
POST   /sessions/               Create session
GET    /sessions/{id}/          Get session
POST   /sessions/{id}/send_message/    Send message
POST   /sessions/{id}/end_session/     End session
```

### AI
```
POST   /emotion/detect/         Record emotion
GET    /recommendations/?mood=X  Get recommendations
```

## Setup Commands

### Initial Setup
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Unix/macOS)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create .env file
cp .env.example .env

# Run migrations
python manage.py migrate

# Create admin user
python manage.py createsuperuser

# Create migrations
python manage.py makemigrations
```

### Running
```bash
# Development server
python manage.py runserver

# Production (with gunicorn)
gunicorn config.wsgi:application --bind 0.0.0.0:8000

# Django shell
python manage.py shell

# Admin panel
# http://localhost:8000/admin
```

## Environment Variables

```
DEBUG=True                           # Development only
SECRET_KEY=your-secret-key          # Change in production!
DB_NAME=mood_melody_db              # Database name
DB_USER=postgres                    # Database user
DB_PASSWORD=postgres                # Database password
DB_HOST=localhost                   # Database host
DB_PORT=5432                        # Database port
GEMINI_API_KEY=your-key             # Gemini API key
ALLOWED_HOSTS=localhost,127.0.0.1  # Allowed hosts
CORS_ALLOWED_ORIGINS=http://localhost:3000  # CORS origins
```

## Common Tasks

### Create Migration
```bash
python manage.py makemigrations therapy
python manage.py migrate
```

### Add to Admin
```python
# therapy/admin.py
@admin.register(MyModel)
class MyModelAdmin(admin.ModelAdmin):
    list_display = ['field1', 'field2']
    search_fields = ['field1']
```

### Add API Endpoint
```python
# therapy/views.py
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def my_endpoint(request):
    return Response({'data': 'value'})

# therapy/urls.py
path('my-endpoint/', views.my_endpoint, name='my_endpoint'),
```

### Query Data
```python
# Get all moods for user
user.mood_entries.all()

# Get latest moods
MoodEntry.objects.filter(user=user).order_by('-timestamp')[:10]

# Get with related data
session.messages.all()
```

## Authentication

### Register
```bash
curl -X POST http://localhost:8000/api/therapy/auth/register/ \
  -H "Content-Type: application/json" \
  -d '{"username":"user","email":"user@example.com","password":"pass"}'
```

### Login
```bash
curl -X POST http://localhost:8000/api/therapy/auth/login/ \
  -H "Content-Type: application/json" \
  -d '{"username":"user","password":"pass"}'
```

Response includes `token` - use in headers:
```
Authorization: Token <token>
```

## Docker Commands

### Build Image
```bash
docker build -t mood-melody-backend .
```

### Run Container
```bash
docker-compose up -d
```

### View Logs
```bash
docker-compose logs -f backend
```

### Stop Services
```bash
docker-compose down
```

## Debugging

### Django Shell
```bash
python manage.py shell
>>> from therapy.models import MoodEntry
>>> MoodEntry.objects.all().count()
```

### Check Migrations
```bash
python manage.py showmigrations
python manage.py migrate --plan
```

### Test API
```bash
python manage.py test therapy
```

### View SQL
```bash
python manage.py sqlmigrate therapy 0001
```

## Deployment Checklist

- [ ] Change `SECRET_KEY`
- [ ] Set `DEBUG=False`
- [ ] Update `ALLOWED_HOSTS`
- [ ] Update `CORS_ALLOWED_ORIGINS`
- [ ] Use production database
- [ ] Set up HTTPS
- [ ] Use environment variables for secrets
- [ ] Run `python manage.py collectstatic`
- [ ] Set up error logging
- [ ] Configure backups

## Performance Tips

1. Use `select_related()` for ForeignKeys
2. Use `prefetch_related()` for reverse relations
3. Add database indexes for frequently queried fields
4. Use pagination for large datasets
5. Cache frequently accessed data
6. Monitor slow queries
7. Use connection pooling in production

## Useful Links

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Gemini AI Docs](https://ai.google.dev/)
- [Gunicorn Docs](https://gunicorn.org/)

---

For full documentation, see [README.md](./README.md) and [../MIGRATION_GUIDE.md](../MIGRATION_GUIDE.md)
