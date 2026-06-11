from django.db import models
from django.contrib.auth.models import User

# Emotion choices
EMOTION_CHOICES = [
    ('happy', 'Happy'),
    ('sad', 'Sad'),
    ('angry', 'Angry'),
    ('neutral', 'Neutral'),
]


class UserProfile(models.Model):
    """Extended user profile for therapy app"""
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    languages = models.JSONField(default=list, help_text='List of user preferred languages')
    last_emotion = models.CharField(
        max_length=20,
        choices=EMOTION_CHOICES,
        null=True,
        blank=True,
        help_text='Last detected emotion'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.username}'s Profile"


class MoodEntry(models.Model):
    """Mood tracking entries"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='mood_entries')
    timestamp = models.DateTimeField(auto_now_add=True)
    emotion = models.CharField(
        max_length=20,
        choices=EMOTION_CHOICES,
        help_text='Detected or reported emotion'
    )
    confidence = models.FloatField(
        help_text='Confidence score (0-1) for emotion detection'
    )
    note = models.TextField(
        blank=True,
        null=True,
        help_text='Optional user note about their mood'
    )

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user.username} - {self.emotion} at {self.timestamp}"


class JournalEntry(models.Model):
    """Journal entries for tracking thoughts and feelings"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='journal_entries')
    timestamp = models.DateTimeField(auto_now_add=True)
    text = models.TextField(help_text='Journal entry text')
    mood_at_time = models.CharField(
        max_length=20,
        choices=EMOTION_CHOICES,
        help_text='Mood at the time of entry'
    )

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user.username} - {self.timestamp.date()}"


class TherapySession(models.Model):
    """Therapy chat sessions"""
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='therapy_sessions')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Session: {self.user.username} - {self.created_at}"


class TherapyMessage(models.Model):
    """Messages in therapy sessions"""
    session = models.ForeignKey(
        TherapySession,
        on_delete=models.CASCADE,
        related_name='messages'
    )
    is_user = models.BooleanField(help_text='True if message is from user, False if from AI')
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created_at']

    def __str__(self):
        sender = "User" if self.is_user else "AI"
        return f"{sender}: {self.content[:50]}"


class MusicRecommendation(models.Model):
    """Music recommendations based on mood"""
    mood_entry = models.ForeignKey(
        MoodEntry,
        on_delete=models.CASCADE,
        related_name='music_recommendations'
    )
    song_title = models.CharField(max_length=255)
    artist = models.CharField(max_length=255)
    youtube_url = models.URLField(blank=True, null=True)
    reason = models.TextField(help_text='Why this song was recommended')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.song_title} by {self.artist}"
