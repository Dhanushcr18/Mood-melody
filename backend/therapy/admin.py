from django.contrib import admin
from .models import (
    UserProfile,
    MoodEntry,
    JournalEntry,
    TherapySession,
    TherapyMessage,
    MusicRecommendation,
)


@admin.register(UserProfile)
class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'last_emotion', 'created_at']
    search_fields = ['user__username', 'user__email']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(MoodEntry)
class MoodEntryAdmin(admin.ModelAdmin):
    list_display = ['user', 'emotion', 'confidence', 'timestamp']
    list_filter = ['emotion', 'timestamp']
    search_fields = ['user__username']
    readonly_fields = ['timestamp']


@admin.register(JournalEntry)
class JournalEntryAdmin(admin.ModelAdmin):
    list_display = ['user', 'mood_at_time', 'timestamp']
    list_filter = ['mood_at_time', 'timestamp']
    search_fields = ['user__username', 'text']
    readonly_fields = ['timestamp']


@admin.register(TherapySession)
class TherapySessionAdmin(admin.ModelAdmin):
    list_display = ['user', 'is_active', 'created_at', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['user__username']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(TherapyMessage)
class TherapyMessageAdmin(admin.ModelAdmin):
    list_display = ['session', 'is_user', 'created_at']
    list_filter = ['is_user', 'created_at']
    search_fields = ['session__user__username', 'content']
    readonly_fields = ['created_at']


@admin.register(MusicRecommendation)
class MusicRecommendationAdmin(admin.ModelAdmin):
    list_display = ['song_title', 'artist', 'created_at']
    search_fields = ['song_title', 'artist']
    readonly_fields = ['created_at']
