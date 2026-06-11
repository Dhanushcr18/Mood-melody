# Firebase to Django Migration Guide

This document outlines the migration from Firebase backend to Django backend for MoodMelody.

## Overview

The MoodMelody application has been converted from a Firebase-only architecture to a full Django backend. This provides:

- **Full backend control** - No vendor lock-in
- **Scalability** - PostgreSQL database with proven Django scalability
- **Customization** - Extend backend functionality easily
- **Cost efficiency** - Self-hosted on any server

## What Changed

### Before (Firebase)
- User authentication via Firebase Auth
- Data storage in Cloud Firestore
- Serverless functions (if any)
- API calls directly from frontend

### After (Django)
- User authentication via Django Token Authentication
- Data storage in PostgreSQL database
- RESTful API with Django REST Framework
- Centralized backend business logic

## Migration Steps

### 1. Backend Setup

#### Option A: Local Development

**Windows:**
```bash
cd backend
setup.bat
```

**macOS/Linux:**
```bash
cd backend
bash setup.sh
```

#### Option B: Docker Deployment

```bash
cd backend
docker-compose up -d
```

### 2. Database Migration

The Django backend handles user data with these models:

- **UserProfile** - Extended user information and preferences
- **MoodEntry** - Emotion recordings with confidence scores
- **JournalEntry** - Personal journal entries
- **TherapySession** - Chat session records
- **TherapyMessage** - Individual messages in sessions
- **MusicRecommendation** - AI-generated music suggestions

### 3. Frontend Updates

#### Update API Configuration

In your React app, update the API base URL:

**src/lib/api-client.ts:**
```typescript
const API_BASE_URL = 'http://localhost:8000/api/therapy';
```

#### Update Authentication Flow

**Before (Firebase):**
```typescript
import { signInWithEmailAndPassword } from 'firebase/auth';
await signInWithEmailAndPassword(auth, email, password);
```

**After (Django):**
```typescript
import { apiClient } from './lib/api-client';
const response = await apiClient.login(username, password);
if (response.data) {
  apiClient.setToken(response.data.token);
}
```

#### Update Data Fetching

**Before (Firebase):**
```typescript
import { collection, query, onSnapshot } from 'firebase/firestore';
onSnapshot(query(collection(db, 'moods')), (snapshot) => {
  // Process data
});
```

**After (Django):**
```typescript
import { apiClient } from './lib/api-client';
const response = await apiClient.getMoodEntries();
if (response.data) {
  // Process data
}
```

### 4. Removed Firebase Dependencies

The following can be removed from `package.json`:
- `firebase`
- Firestore-related packages
- Firebase authentication packages

### 5. Configuration

#### Environment Variables

**Frontend (.env.local):**
```
REACT_APP_API_URL=http://localhost:8000/api/therapy
GEMINI_API_KEY=your-gemini-api-key
```

**Backend (.env):**
```
DEBUG=True
SECRET_KEY=your-secret-key
DB_NAME=mood_melody_db
DB_USER=postgres
DB_PASSWORD=postgres
GEMINI_API_KEY=your-gemini-api-key
CORS_ALLOWED_ORIGINS=http://localhost:3000
```

## API Reference

### Authentication

```
POST /api/therapy/auth/register/
{
  "username": "user",
  "email": "user@example.com",
  "password": "password"
}

POST /api/therapy/auth/login/
{
  "username": "user",
  "password": "password"
}
```

### Mood Tracking

```
POST /api/therapy/moods/
{
  "emotion": "happy",
  "confidence": 0.95,
  "note": "Feeling great today"
}

GET /api/therapy/moods/
```

### Therapy Sessions

```
POST /api/therapy/sessions/

POST /api/therapy/sessions/{id}/send_message/
{
  "message": "I feel anxious"
}

POST /api/therapy/sessions/{id}/end_session/
```

### AI Features

```
GET /api/therapy/recommendations/?mood=happy

POST /api/therapy/emotion/detect/
{
  "emotion": "happy",
  "confidence": 0.95
}
```

## Database Structure

### PostgreSQL Tables

```
auth_user (Django default user table)
therapy_userprofile
therapy_moodentry
therapy_journalentry
therapy_therapysession
therapy_therapymessage
therapy_musicrecommendation
```

## Deployment Options

### 1. Heroku

```bash
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
git push heroku main
heroku run python manage.py migrate
```

### 2. AWS EC2

```bash
# SSH into instance
sudo apt-get update
sudo apt-get install python3-pip postgresql
git clone your-repo
cd backend
pip install -r requirements.txt
python manage.py migrate
gunicorn config.wsgi:application --bind 0.0.0.0:8000
```

### 3. DigitalOcean

See DigitalOcean Django deployment guide with their App Platform.

### 4. Docker

```bash
docker-compose up -d
```

## Performance Considerations

### Database Optimization
- Add indexes for frequently queried fields
- Use select_related/prefetch_related for nested queries
- Consider caching with Redis

### API Optimization
- Implement pagination (default: 10 items per page)
- Use filtering for large datasets
- Consider GraphQL for complex queries

### Scaling
- Use Gunicorn with multiple workers
- Add Nginx as reverse proxy
- Implement caching layer (Redis)
- Use database connection pooling

## Troubleshooting

### Port 8000 Already in Use
```bash
python manage.py runserver 8001
```

### Database Connection Error
- Ensure PostgreSQL is running
- Check credentials in `.env`
- Verify database exists

### CORS Errors
- Update `CORS_ALLOWED_ORIGINS` in `.env`
- Verify frontend URL matches

### Migration Issues
```bash
python manage.py migrate --run-syncdb
python manage.py migrate therapy --fake-initial
```

## Security Considerations

1. **Secret Key** - Change `SECRET_KEY` in production
2. **Debug** - Set `DEBUG=False` in production
3. **HTTPS** - Use HTTPS in production
4. **CORS** - Restrict CORS origins to your frontend domain
5. **Authentication** - Use strong passwords and HTTPS
6. **API Keys** - Never commit `.env` file with real keys

## Support

For issues or questions:
1. Check the Django [documentation](https://docs.djangoproject.com/)
2. Review DRF [documentation](https://www.django-rest-framework.org/)
3. Check the backend [README.md](./README.md)

## Rollback Plan

If you need to return to Firebase:
1. Keep Firebase configuration files
2. Restore Firebase imports in React
3. Update API calls back to Firebase SDK calls
4. Restore Firebase dependencies in package.json

The frontend code still has Firebase configuration files available for reference.
