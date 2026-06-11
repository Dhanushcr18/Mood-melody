/**
 * API client for Django backend
 * Replace Firebase calls with REST API calls
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/therapy';

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

class ApiClient {
  private token: string | null = null;

  constructor() {
    this.token = localStorage.getItem('authToken');
  }

  setToken(token: string) {
    this.token = token;
    localStorage.setItem('authToken', token);
  }

  clearToken() {
    this.token = null;
    localStorage.removeItem('authToken');
  }

  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    if (this.token) {
      headers['Authorization'] = `Token ${this.token}`;
    }
    return headers;
  }

  private async request<T>(
    method: string,
    endpoint: string,
    body?: unknown
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${API_BASE_URL}${endpoint}`;
      const options: RequestInit = {
        method,
        headers: this.getHeaders(),
      };

      if (body) {
        options.body = JSON.stringify(body);
      }

      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        return {
          error: data.error || data.detail || 'Request failed',
          status: response.status,
        };
      }

      return {
        data: data as T,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error',
        status: 0,
      };
    }
  }

  // Auth endpoints
  async register(username: string, email: string, password: string) {
    return this.request('/auth/register/', 'POST', {
      username,
      email,
      password,
    });
  }

  async login(username: string, password: string) {
    return this.request('/auth/login/', 'POST', {
      username,
      password,
    });
  }

  async logout() {
    this.clearToken();
  }

  // Profile endpoints
  async getUserProfile() {
    return this.request('/profile/', 'GET');
  }

  async updateUserProfile(languages: string[], lastEmotion?: string) {
    return this.request('/profile/update/', 'PUT', {
      languages,
      last_emotion: lastEmotion,
    });
  }

  // Mood endpoints
  async getMoodEntries() {
    return this.request('/moods/', 'GET');
  }

  async createMoodEntry(emotion: string, confidence: number, note?: string) {
    return this.request('/moods/', 'POST', {
      emotion,
      confidence,
      note,
    });
  }

  async addMusicRecommendation(
    moodId: number,
    songTitle: string,
    artist: string,
    reason: string,
    youtubeUrl?: string
  ) {
    return this.request(`/moods/${moodId}/add_recommendation/`, 'POST', {
      song_title: songTitle,
      artist,
      reason,
      youtube_url: youtubeUrl,
    });
  }

  // Journal endpoints
  async getJournalEntries() {
    return this.request('/journal/', 'GET');
  }

  async createJournalEntry(text: string, moodAtTime: string) {
    return this.request('/journal/', 'POST', {
      text,
      mood_at_time: moodAtTime,
    });
  }

  // Therapy session endpoints
  async getTherapySessions() {
    return this.request('/sessions/', 'GET');
  }

  async createTherapySession() {
    return this.request('/sessions/', 'POST', {});
  }

  async sendTherapyMessage(sessionId: number, message: string) {
    return this.request(`/sessions/${sessionId}/send_message/`, 'POST', {
      message,
    });
  }

  async endTherapySession(sessionId: number) {
    return this.request(`/sessions/${sessionId}/end_session/`, 'POST', {});
  }

  // AI endpoints
  async detectEmotion(emotion: string, confidence: number) {
    return this.request('/emotion/detect/', 'POST', {
      emotion,
      confidence,
    });
  }

  async getRecommendations(mood: string) {
    return this.request(`/recommendations/?mood=${mood}`, 'GET');
  }
}

export const apiClient = new ApiClient();
