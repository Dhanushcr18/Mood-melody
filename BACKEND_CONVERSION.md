# MoodMelody - Backend Conversion to Django

Complete Django backend has been created to replace Firebase. Here's what was added:

## ✅ Backend Components Created

### Django Project Structure
```
backend/
├── config/                 # Django configuration
│   ├── settings.py        # Settings with PostgreSQL config
│   ├── urls.py           # URL routing
│   ├── wsgi.py           # WSGI application
│   └── asgi.py           # ASGI application
├── therapy/               # Main app
│   ├── models.py         # Database models (6 tables)
│   ├── views.py          # REST API endpoints
│   ├── serializers.py    # Data serializers
│   ├── urls.py           # API routing
│   ├── admin.py          # Django admin config
│   └── apps.py           # App configuration
├── manage.py             # Django CLI
├── requirements.txt      # Python dependencies
├── Dockerfile            # Docker configuration
├── docker-compose.yml    # Docker Compose setup
├── .env.example          # Environment template
├── setup.sh              # Linux/macOS setup script
├── setup.bat             # Windows setup script
├── run.sh                # Linux/macOS run script
├── run.bat               # Windows run script
└── README.md            # Backend documentation
```

### Database Models
1. **UserProfile** - User preferences and emotion tracking
2. **MoodEntry** - Emotion recordings with confidence scores
3. **JournalEntry** - Personal journal entries
4. **TherapySession** - Therapy chat sessions
5. **TherapyMessage** - Messages in therapy sessions
6. **MusicRecommendation** - AI-recommended songs

### API Endpoints (25+ endpoints)

**Authentication:**
- POST `/api/therapy/auth/register/` - User registration
- POST `/api/therapy/auth/login/` - User login
- GET `/api/therapy/profile/` - Get user profile
- PUT `/api/therapy/profile/update/` - Update profile

**Mood Tracking:**
- POST `/api/therapy/moods/` - Record mood
- GET `/api/therapy/moods/` - List moods
- POST `/api/therapy/moods/{id}/add_recommendation/` - Add music recommendation

**Journal:**
- POST `/api/therapy/journal/` - Create journal entry
- GET `/api/therapy/journal/` - List journal entries

**Therapy Sessions:**
- POST `/api/therapy/sessions/` - Start session
- GET `/api/therapy/sessions/` - List sessions
- POST `/api/therapy/sessions/{id}/send_message/` - Send message
- POST `/api/therapy/sessions/{id}/end_session/` - End session

**AI Features:**
- POST `/api/therapy/emotion/detect/` - Detect emotion
- GET `/api/therapy/recommendations/` - Get AI recommendations

### Frontend API Client
- **src/lib/api-client.ts** - Complete TypeScript API client with all endpoints

## 🚀 Quick Start

### Windows
```bash
cd backend
setup.bat
run.bat
```

### macOS/Linux
```bash
cd backend
bash setup.sh
bash run.sh
```

### Docker
```bash
cd backend
docker-compose up -d
```

## 🔧 Configuration

1. Copy environment file:
   ```bash
   cp backend/.env.example backend/.env
   ```

2. Update `backend/.env`:
   ```
   GEMINI_API_KEY=your-api-key
   SECRET_KEY=your-secret-key
   DB_PASSWORD=your-db-password
   ```

3. Install PostgreSQL if not already installed

## 📋 Dependencies

### Python (Backend)
- Django 4.2
- Django REST Framework 3.14
- PostgreSQL 15
- google-generativeai 0.3
- And 8+ more packages

### JavaScript (Frontend)
- Keep existing dependencies
- Use new `api-client.ts` instead of Firebase

## 🔐 Security Features

- ✅ Token-based authentication
- ✅ CORS configuration
- ✅ Environment variable management
- ✅ Secure password hashing
- ✅ Database isolation

## 📚 Documentation

- **Backend README**: `backend/README.md` - Complete setup and API docs
- **Migration Guide**: `MIGRATION_GUIDE.md` - Firebase to Django migration
- **API Client**: `src/lib/api-client.ts` - TypeScript API wrapper

## ⚡ Technologies

- **Framework**: Django 4.2 + Django REST Framework
- **Database**: PostgreSQL 15
- **AI**: Google Generativeai (Gemini)
- **Deployment**: Docker, Gunicorn, Nginx-ready
- **Authentication**: Token-based

## 🎯 Next Steps

1. ✅ Backend created and ready
2. ⏳ Set up PostgreSQL database
3. ⏳ Run migrations: `python manage.py migrate`
4. ⏳ Create superuser: `python manage.py createsuperuser`
5. ⏳ Start backend: `python manage.py runserver`
6. ⏳ Update frontend to use new API
7. ⏳ Test all endpoints

## 📝 Key Differences from Firebase

| Feature | Firebase | Django |
|---------|----------|--------|
| Authentication | Firebase Auth | Token-based |
| Database | Cloud Firestore | PostgreSQL |
| Hosting | Google Cloud | Self-hosted or cloud VPS |
| Scaling | Auto-scaling | Manual/auto with load balancer |
| Cost | Pay-per-use | Predictable monthly |
| Control | Limited | Full control |

## 🐛 Troubleshooting

### Port 8000 already in use?
```bash
python manage.py runserver 8001
```

### Database not found?
```bash
createdb mood_melody_db
python manage.py migrate
```

### CORS errors?
Check `CORS_ALLOWED_ORIGINS` in `backend/.env`

For detailed troubleshooting, see `MIGRATION_GUIDE.md`

## ✨ Features Maintained

✅ Emotion detection
✅ AI therapy chat with Gemini
✅ Music recommendations
✅ Journal entries
✅ User authentication
✅ Real-time mood tracking
✅ Session history

---

Your Django backend is ready! Run `backend/setup.bat` (Windows) or `backend/setup.sh` (Unix) to get started.
