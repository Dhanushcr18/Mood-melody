from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'moods', views.MoodEntryViewSet, basename='mood')
router.register(r'journal', views.JournalEntryViewSet, basename='journal')
router.register(r'sessions', views.TherapySessionViewSet, basename='therapy-session')

urlpatterns = [
    # Auth endpoints
    path('auth/register/', views.register, name='register'),
    path('auth/login/', views.login, name='login'),
    path('profile/', views.user_profile, name='user_profile'),
    path('profile/update/', views.update_user_profile, name='update_profile'),

    # AI endpoints
    path('emotion/detect/', views.detect_emotion, name='detect_emotion'),
    path('recommendations/', views.get_recommendations, name='get_recommendations'),

    # Routed endpoints
    path('', include(router.urls)),
]
