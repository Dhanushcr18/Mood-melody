# 🎵 Mood Melody – AI-Powered Emotion Detection & Music Therapy

## 📖 Overview

Mood Melody is an AI-powered web application that promotes mental well-being through emotion detection, personalized music recommendations, AI-based therapy, and digital journaling. The system detects a user's emotional state using facial expressions or text input and provides supportive conversations along with mood-based song recommendations.

The application combines Artificial Intelligence, Machine Learning, and modern web technologies to create an interactive platform for emotional wellness.

---

## ✨ Features

- 😊 Facial Emotion Detection using Face API.js
- 🤖 AI Therapy Chat powered by Google Gemini AI
- 🎵 Personalized Music Recommendation
- 📝 Digital Mood Journal
- 📊 Mood Analytics Dashboard
- 📅 Mood History Tracking
- 🔐 Secure User Authentication
- 🌐 Multi-language Support
- 📱 Responsive User Interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- HTML5
- CSS3
- Bootstrap
- JavaScript

### Backend
- Django
- Django REST Framework

### Database
- PostgreSQL

### AI & APIs
- Google Gemini AI
- Face API.js

### Authentication
- Firebase Authentication

### Version Control
- Git & GitHub

---

## 📂 Project Structure

```
Mood-Melody/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── views/
│   ├── serializers/
│   ├── settings.py
│   └── manage.py
│
├── database/
│
├── assets/
│
├── README.md
└── requirements.txt
```

---

## ⚙️ System Workflow

1. User logs into the application.
2. User provides facial image or text input.
3. Face API.js detects facial emotions.
4. Google Gemini AI analyzes emotions and generates supportive responses.
5. The recommendation engine suggests songs based on detected mood.
6. User can write journal entries.
7. Mood history is stored in PostgreSQL.
8. Dashboard displays mood analytics and emotional trends.

---

## 🎯 Objectives

- Detect user emotions using facial recognition.
- Analyze emotions through AI.
- Recommend personalized songs.
- Provide AI-powered emotional support.
- Maintain a digital journal.
- Track user mood history.
- Visualize emotional trends.
- Ensure secure authentication.
- Improve accessibility with multilingual support.

---

## 🏗️ System Architecture

```
                     User
                       │
        ┌──────────────┴──────────────┐
        │                             │
 Facial Expression              Text Input
        │                             │
        └──────────────┬──────────────┘
                       │
            Face API.js / Gemini AI
               Emotion Detection
                       │
               Detected Emotion
                       │
      ┌──────────┬──────────┬──────────┐
      │          │          │
 AI Therapy   Music      Journal
    Chat    Recommendation Storage
      │          │          │
      └──────────┴──────────┘
               Django REST API
                       │
                PostgreSQL Database
                       │
           Mood History & Analytics
                       │
                 User Dashboard
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/mood-melody.git
cd mood-melody
```

### Backend Setup

```bash
cd backend

python -m venv venv

source venv/bin/activate

# Windows
venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm start
```

---

## 📊 Modules

### User Module
- Registration
- Login
- Profile Management

### Emotion Detection Module
- Facial Expression Analysis
- Text Emotion Analysis

### AI Therapy Module
- Chat with Gemini AI
- Mental Wellness Support

### Music Recommendation Module
- Mood-based Playlist
- Personalized Suggestions

### Journal Module
- Daily Notes
- Mood Tracking

### Analytics Module
- Mood Graphs
- History Reports

---

## 📸 Screenshots

- Login Page
- Dashboard
- Emotion Detection
- AI Chat
- Music Recommendation
- Journal
- Mood Analytics

---

## 🔒 Future Enhancements

- Voice Emotion Detection
- Smartwatch Integration
- Real-time Stress Monitoring
- Spotify API Integration
- Wearable Health Sensors
- Doctor Consultation Portal
- AI Mood Prediction
- Mobile Application

---

## 🎯 Advantages

- Improves emotional well-being
- Personalized music therapy
- AI-powered emotional support
- Easy-to-use interface
- Secure user authentication
- Mood history visualization
- Encourages self-reflection

---

## 👨‍💻 Authors

**Dhanush C R**

Department of Information Science & Engineering

Dayananda Sagar Academy of Technology and Management (DSATM)

---

## 📄 License

This project is developed for educational and research purposes.

---

## 🙏 Acknowledgements

- Google Gemini AI
- Face API.js
- React.js
- Django REST Framework
- PostgreSQL
- Firebase Authentication
- Open Source Community

---

⭐ If you like this project, consider giving it a star on GitHub!
