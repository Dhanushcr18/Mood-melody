from rest_framework import serializers
from django.contrib.auth.models import User
from .models import (
    UserProfile,
    MoodEntry,
    JournalEntry,
    TherapySession,
    TherapyMessage,
    MusicRecommendation,
)


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name']
        read_only_fields = ['id']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'languages', 'last_emotion', 'created_at', 'updated_at']
        read_only_fields = ['id', 'created_at', 'updated_at']


class MusicRecommendationSerializer(serializers.ModelSerializer):
    class Meta:
        model = MusicRecommendation
        fields = ['id', 'song_title', 'artist', 'youtube_url', 'reason', 'created_at']
        read_only_fields = ['id', 'created_at']


class MoodEntrySerializer(serializers.ModelSerializer):
    music_recommendations = MusicRecommendationSerializer(many=True, read_only=True)

    class Meta:
        model = MoodEntry
        fields = ['id', 'timestamp', 'emotion', 'confidence', 'note', 'music_recommendations']
        read_only_fields = ['id', 'timestamp']


class JournalEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = JournalEntry
        fields = ['id', 'timestamp', 'text', 'mood_at_time']
        read_only_fields = ['id', 'timestamp']


class TherapyMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = TherapyMessage
        fields = ['id', 'is_user', 'content', 'created_at']
        read_only_fields = ['id', 'created_at']


class TherapySessionSerializer(serializers.ModelSerializer):
    messages = TherapyMessageSerializer(many=True, read_only=True)

    class Meta:
        model = TherapySession
        fields = ['id', 'created_at', 'updated_at', 'is_active', 'messages']
        read_only_fields = ['id', 'created_at', 'updated_at']
