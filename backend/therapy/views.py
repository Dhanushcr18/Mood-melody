from rest_framework import viewsets, status
from rest_framework.decorators import action, api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth.models import User
from django.conf import settings
from datetime import datetime

import google.generativeai as genai

from .models import (
    UserProfile,
    MoodEntry,
    JournalEntry,
    TherapySession,
    TherapyMessage,
    MusicRecommendation,
)
from .serializers import (
    UserProfileSerializer,
    MoodEntrySerializer,
    JournalEntrySerializer,
    TherapySessionSerializer,
    TherapyMessageSerializer,
)


# Configure Gemini API
if settings.GEMINI_API_KEY:
    genai.configure(api_key=settings.GEMINI_API_KEY)


@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    """User registration endpoint"""
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')

    if not all([username, email, password]):
        return Response(
            {'error': 'username, email, and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if User.objects.filter(username=username).exists():
        return Response(
            {'error': 'Username already exists'},
            status=status.HTTP_400_BAD_REQUEST
        )

    user = User.objects.create_user(
        username=username,
        email=email,
        password=password
    )

    # Create user profile
    UserProfile.objects.create(user=user, languages=['en'])

    token, created = Token.objects.get_or_create(user=user)

    return Response({
        'token': token.key,
        'user': {
            'id': user.id,
            'username': user.username,
            'email': user.email
        }
    }, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    """User login endpoint"""
    username = request.data.get('username')
    password = request.data.get('password')

    if not all([username, password]):
        return Response(
            {'error': 'username and password are required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    try:
        user = User.objects.get(username=username)
        if user.check_password(password):
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user': {
                    'id': user.id,
                    'username': user.username,
                    'email': user.email
                }
            })
        else:
            return Response(
                {'error': 'Invalid credentials'},
                status=status.HTTP_401_UNAUTHORIZED
            )
    except User.DoesNotExist:
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_401_UNAUTHORIZED
        )


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    """Get or create user profile"""
    profile, created = UserProfile.objects.get_or_create(user=request.user)
    serializer = UserProfileSerializer(profile)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def update_user_profile(request):
    """Update user profile"""
    profile, created = UserProfile.objects.get_or_create(user=request.user)
    serializer = UserProfileSerializer(profile, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MoodEntryViewSet(viewsets.ModelViewSet):
    """ViewSet for mood entries"""
    serializer_class = MoodEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return MoodEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        mood_entry = serializer.save(user=self.request.user)

        # Update user profile's last emotion
        profile, _ = UserProfile.objects.get_or_create(user=self.request.user)
        profile.last_emotion = mood_entry.emotion
        profile.save()

    @action(detail=True, methods=['post'])
    def add_recommendation(self, request, pk=None):
        """Add music recommendation to mood entry"""
        mood_entry = self.get_object()

        song_title = request.data.get('song_title')
        artist = request.data.get('artist')
        youtube_url = request.data.get('youtube_url')
        reason = request.data.get('reason')

        if not all([song_title, artist, reason]):
            return Response(
                {'error': 'song_title, artist, and reason are required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        recommendation = MusicRecommendation.objects.create(
            mood_entry=mood_entry,
            song_title=song_title,
            artist=artist,
            youtube_url=youtube_url,
            reason=reason
        )

        return Response({
            'id': recommendation.id,
            'song_title': recommendation.song_title,
            'artist': recommendation.artist,
            'youtube_url': recommendation.youtube_url,
            'reason': recommendation.reason
        }, status=status.HTTP_201_CREATED)


class JournalEntryViewSet(viewsets.ModelViewSet):
    """ViewSet for journal entries"""
    serializer_class = JournalEntrySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return JournalEntry.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class TherapySessionViewSet(viewsets.ModelViewSet):
    """ViewSet for therapy sessions"""
    serializer_class = TherapySessionSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return TherapySession.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @action(detail=True, methods=['post'])
    def send_message(self, request, pk=None):
        """Send a message in therapy session"""
        session = self.get_object()
        user_message = request.data.get('message')

        if not user_message:
            return Response(
                {'error': 'message is required'},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Create user message
        TherapyMessage.objects.create(
            session=session,
            is_user=True,
            content=user_message
        )

        # Get AI response using Gemini
        ai_response = self._get_ai_therapy_response(user_message, session)

        # Create AI message
        ai_message = TherapyMessage.objects.create(
            session=session,
            is_user=False,
            content=ai_response
        )

        return Response({
            'user_message': user_message,
            'ai_response': ai_response,
            'timestamp': ai_message.created_at
        })

    @action(detail=True, methods=['post'])
    def end_session(self, request, pk=None):
        """End a therapy session"""
        session = self.get_object()
        session.is_active = False
        session.save()
        return Response({'status': 'Session ended'})

    def _get_ai_therapy_response(self, user_message, session):
        """Get therapy response from Gemini AI"""
        if not settings.GEMINI_API_KEY:
            return "AI service not available. Please configure GEMINI_API_KEY."

        try:
            # Get conversation history
            messages = TherapyMessage.objects.filter(session=session).order_by('created_at')
            history = [
                f"{'User' if msg.is_user else 'Therapist'}: {msg.content}"
                for msg in messages
            ]

            prompt = f"""You are an empathetic AI therapy assistant. Respond to the user's message with warmth and understanding.
            
Conversation history:
{chr(10).join(history)}

User: {user_message}

Please provide a thoughtful, supportive therapy response."""

            model = genai.GenerativeModel('gemini-pro')
            response = model.generate_content(prompt)

            return response.text
        except Exception as e:
            return f"I'm here to listen. Could you tell me more about what you're feeling? (Error: {str(e)})"


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def detect_emotion(request):
    """Detect emotion from image or accept manual emotion input"""
    emotion = request.data.get('emotion')
    confidence = request.data.get('confidence', 0.8)

    if not emotion:
        return Response(
            {'error': 'emotion is required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    mood_entry = MoodEntry.objects.create(
        user=request.user,
        emotion=emotion,
        confidence=float(confidence)
    )

    serializer = MoodEntrySerializer(mood_entry)
    return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_recommendations(request):
    """Get AI recommendations based on mood"""
    mood = request.query_params.get('mood')

    if not mood:
        return Response(
            {'error': 'mood query parameter is required'},
            status=status.HTTP_400_BAD_REQUEST
        )

    if not settings.GEMINI_API_KEY:
        return Response(
            {'error': 'AI service not available'},
            status=status.HTTP_503_SERVICE_UNAVAILABLE
        )

    try:
        prompt = f"""Based on the user's current mood of "{mood}", suggest 3 therapeutic music songs or activities.
        For each, provide:
        1. Song title or activity name
        2. Artist (if applicable)
        3. Why it would help with their mood
        
        Format your response as JSON with the key 'recommendations' containing an array of objects with 'title', 'artist', and 'reason' keys."""

        model = genai.GenerativeModel('gemini-pro')
        response = model.generate_content(prompt)

        # Parse response and extract recommendations
        import json
        try:
            result = json.loads(response.text)
            return Response(result)
        except:
            return Response({'recommendations': [{'title': 'Suggestion', 'reason': response.text}]})

    except Exception as e:
        return Response(
            {'error': f'Failed to get recommendations: {str(e)}'},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )
