# Django Backend for MoodMelody

This is a Django REST Framework backend for the MoodMelody AI therapy application, replacing the Firebase backend.

## Features

- **User Authentication**: Token-based authentication with registration and login
- **Mood Tracking**: Track emotions with confidence scores
- **Journal Entries**: Keep personal journal entries linked to moods
- **AI Therapy Sessions**: Real-time therapy chat powered by Google Gemini API
- **Music Recommendations**: AI-powered music suggestions based on mood
- **User Profiles**: Extended user profiles with language preferences

## Setup Instructions

### 1. Prerequisites

- Python 3.9+
- PostgreSQL 12+
- pip (Python package manager)

### 2. Installation

1. **Create virtual environment:**
   ```bash
   cd backend
   python -m venv venv
   ```

2. **Activate virtual environment:**
   
   **On Windows:**
   ```bash
   venv\Scripts\activate
   ```
   
   **On macOS/Linux:**
   ```bash
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

### 3. Configuration

1. **Copy environment template:**
   ```bash
   cp .env.example .env
   ```

2. **Update `.env` file with your settings:**
   - Set `SECRET_KEY` to a secure random string
   - Configure database credentials for PostgreSQL
   - Add your `GEMINI_API_KEY` from [Google AI Studio](https://aistudio.google.com)

### 4. Database Setup

1. **Install PostgreSQL** (if not already installed)

2. **Create database:**
   ```bash
   createdb mood_melody_db
   ```

3. **Run migrations:**
   ```bash
   python manage.py migrate
   ```

4. **Create superuser (admin):**
   ```bash
   python manage.py createsuperuser
   ```

### 5. Running the Backend

```bash
python manage.py runserver 0.0.0.0:8000
```

The API will be available at `http://localhost:8000`

Admin panel: `http://localhost:8000/admin`

## API Endpoints

### Authentication
- `POST /api/therapy/auth/register/` - Register new user
- `POST /api/therapy/auth/login/` - Login user
- `GET /api/therapy/profile/` - Get user profile
- `PUT /api/therapy/profile/update/` - Update user profile

### Mood Tracking
- `GET /api/therapy/moods/` - List all mood entries
- `POST /api/therapy/moods/` - Create new mood entry
- `GET /api/therapy/moods/{id}/` - Get specific mood entry
- `POST /api/therapy/moods/{id}/add_recommendation/` - Add music recommendation

### Journal
- `GET /api/therapy/journal/` - List all journal entries
- `POST /api/therapy/journal/` - Create new journal entry
- `GET /api/therapy/journal/{id}/` - Get specific journal entry

### Therapy Sessions
- `GET /api/therapy/sessions/` - List all sessions
- `POST /api/therapy/sessions/` - Create new session
- `POST /api/therapy/sessions/{id}/send_message/` - Send message in session
- `POST /api/therapy/sessions/{id}/end_session/` - End session

### AI Features
- `POST /api/therapy/emotion/detect/` - Detect/record emotion
- `GET /api/therapy/recommendations/?mood=happy` - Get AI recommendations

## Project Structure

```
backend/
├── config/              # Django configuration
│   ├── settings.py     # Project settings
│   ├── urls.py        # URL routing
│   ├── wsgi.py        # WSGI application
│   └── asgi.py        # ASGI application
├── therapy/            # Main app
│   ├── models.py      # Database models
│   ├── views.py       # API views
│   ├── serializers.py # DRF serializers
│   ├── urls.py        # App routing
│   ├── admin.py       # Admin configuration
│   └── apps.py        # App configuration
├── manage.py          # Django management script
├── requirements.txt   # Python dependencies
├── .env.example       # Environment variables template
└── README.md         # This file
```

## Database Models

### UserProfile
Extended user profile with language preferences and last emotion

### MoodEntry
Records of detected/reported emotions with confidence scores

### JournalEntry
User journal entries linked to moods

### TherapySession
Therapy chat sessions

### TherapyMessage
Individual messages in therapy sessions

### MusicRecommendation
Music recommendations linked to mood entries

## Environment Variables

```
DEBUG=True
SECRET_KEY=your-secret-key
DB_NAME=mood_melody_db
DB_USER=postgres
DB_PASSWORD=postgres
DB_HOST=localhost
DB_PORT=5432
GEMINI_API_KEY=your-api-key
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## Connecting Frontend

Update your React app's API base URL in `src/lib/api.ts`:

```typescript
const API_BASE_URL = 'http://localhost:8000/api/therapy';
```

## Troubleshooting

### Port already in use
```bash
python manage.py runserver 8001
```

### Database connection error
- Ensure PostgreSQL is running
- Check database credentials in `.env`
- Verify database exists: `psql -l`

### Migrations not applied
```bash
python manage.py migrate --run-syncdb
```

## Contributing

When adding new features:
1. Create Django models in `therapy/models.py`
2. Create serializers in `therapy/serializers.py`
3. Add views in `therapy/views.py`
4. Update URLs in `therapy/urls.py`
5. Run migrations: `python manage.py makemigrations && python manage.py migrate`

## License

Apache License 2.0
