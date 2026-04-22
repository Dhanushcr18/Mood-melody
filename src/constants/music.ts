/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Song {
  id: string;
  name: string;
  artist: string;
  youtubeUrl: string;
  duration: string;
  benefit: string;
}

export type Emotion = 'happy' | 'sad' | 'angry' | 'fear' | 'neutral' | 'surprise' | 'disgust';

export const MUSIC_DB: Record<Emotion, Song[]> = {
  happy: [
    {
      id: 'h1',
      name: 'Happy',
      artist: 'Pharrell Williams',
      youtubeUrl: 'https://www.youtube.com/embed/ZbZSe6N_BXs',
      duration: '3:53',
      benefit: 'Instantly boosts serotonin and encourages positive movement.'
    },
    {
      id: 'h2',
      name: 'Can\'t Stop THE Feeling!',
      artist: 'Justin Timberlake',
      youtubeUrl: 'https://www.youtube.com/embed/ru0K8uYEZWw',
      duration: '3:56',
      benefit: 'High-energy rhythm perfect for shaking off negativity.'
    }
  ],
  sad: [
    {
      id: 's1',
      name: 'Fix You',
      artist: 'Coldplay',
      youtubeUrl: 'https://www.youtube.com/embed/k4V3Mo61fJM',
      duration: '4:55',
      benefit: 'Validates feelings of loss while providing a sense of hope.'
    }
  ],
  angry: [
    {
      id: 'a1',
      name: 'Weightless',
      artist: 'Marconi Union',
      youtubeUrl: 'https://www.youtube.com/embed/UfcAVejslrU',
      duration: '8:08',
      benefit: 'Scientifically proven to reduce anxiety and lower heart rate.'
    }
  ],
  fear: [
    {
      id: 'f1',
      name: 'Three Little Birds',
      artist: 'Bob Marley',
      youtubeUrl: 'https://www.youtube.com/embed/uMUQMSXLlhm',
      duration: '3:00',
      benefit: 'The ultimate "don\'t worry" anthem for anxiety relief.'
    }
  ],
  neutral: [
    {
      id: 'n1',
      name: 'Experience',
      artist: 'Ludovico Einaudi',
      youtubeUrl: 'https://www.youtube.com/embed/hN_q-_nGv6M',
      duration: '5:15',
      benefit: 'Driving piano rhythm that builds gentle momentum for work.'
    }
  ],
  surprise: [
    {
      id: 'su1',
      name: 'Don\'t Stop Me Now',
      artist: 'Queen',
      youtubeUrl: 'https://www.youtube.com/embed/HgzGwKwLmgM',
      duration: '3:29',
      benefit: 'A burst of high-velocity joy perfect for exciting news.'
    }
  ],
  disgust: [
    {
      id: 'd1',
      name: 'River Flows in You',
      artist: 'Yiruma',
      youtubeUrl: 'https://www.youtube.com/embed/7maJOI3QMu0',
      duration: '3:32',
      benefit: 'Pure melody that cleanses the mental palate.'
    }
  ]
};

export const AVAILABLE_LANGUAGES = ['English', 'Hindi', 'Kannada', 'Spanish', 'French', 'Japanese', 'Korean', 'Tamil', 'Telugu', 'Bengali'];

export const EMOTION_MAP: Record<Emotion, { label: string; color: string; emoji: string }> = {
  happy: { label: 'Uplifting & Energetic', color: '#FFD700', emoji: '😊' },
  sad: { label: 'Calming & Healing', color: '#4FC3F7', emoji: '😢' },
  angry: { label: 'Soothing & Relaxing', color: '#FF6B6B', emoji: '😡' },
  fear: { label: 'Comforting & Warm', color: '#CE93D8', emoji: '😨' },
  neutral: { label: 'Focus & Productivity', color: '#80CBC4', emoji: '😐' },
  surprise: { label: 'Joyful & Fun', color: '#FFB74D', emoji: '😲' },
  disgust: { label: 'Peaceful & Meditative', color: '#A5D6A7', emoji: '🤢' }
};
