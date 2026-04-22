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
  language: string;
}

export type Emotion = 'happy' | 'sad' | 'angry' | 'fear' | 'neutral' | 'surprise' | 'disgust';

export const MUSIC_DB: Record<Emotion, Song[]> = {
  happy: [
    { id: 'h1', name: 'Happy', artist: 'Pharrell Williams', youtubeUrl: 'https://www.youtube.com/embed/ZbZSe6N_BXs', duration: '3:53', benefit: 'Instantly boosts serotonin and encourages positive movement.', language: 'English' },
    { id: 'h2', name: 'Ilahi', artist: 'Arijit Singh', youtubeUrl: 'https://www.youtube.com/embed/JAnE6GZ66Wk', duration: '3:48', benefit: 'Uplifting wanderlust vibes for mental freedom.', language: 'Hindi' },
    { id: 'h3', name: 'Belageddu', artist: 'Vijay Prakash', youtubeUrl: 'https://www.youtube.com/embed/LvlSPl8Y13g', duration: '3:45', benefit: 'Fresh morning energy and joyful rhythm.', language: 'Kannada' },
    { id: 'h4', name: 'Vivir Mi Vida', artist: 'Marc Anthony', youtubeUrl: 'https://www.youtube.com/embed/HP-jE_m9A5o', duration: '4:12', benefit: 'Powerful celebration of life and resilience.', language: 'Spanish' },
    { id: 'h5', name: 'Dynamite', artist: 'BTS', youtubeUrl: 'https://www.youtube.com/embed/gdZLi9oWNZg', duration: '3:19', benefit: 'Pure pop joy and infectious dance energy.', language: 'Korean' },
    { id: 'h6', name: 'Enjoy Enjaami', artist: 'Dhee ft. Arivu', youtubeUrl: 'https://www.youtube.com/embed/eYq7Wuz_69M', duration: '4:43', benefit: 'Earth-grounded rhythm and ancestral joy.', language: 'Tamil' },
    { id: 'h7', name: 'Buttabomma', artist: 'Armaan Malik', youtubeUrl: 'https://www.youtube.com/embed/2mLDyZ1AsZE', duration: '3:17', benefit: 'Light-hearted melody and sweet acoustic feel.', language: 'Telugu' },
    { id: 'h8', name: 'Levitating', artist: 'Dua Lipa', youtubeUrl: 'https://www.youtube.com/embed/TUVcZfQe-Kw', duration: '3:23', benefit: 'Galactic pop energy for high-speed positivity.', language: 'English' },
    { id: 'h9', name: 'On My Way', artist: 'Alan Walker', youtubeUrl: 'https://www.youtube.com/embed/dhYOPzcsbGM', duration: '3:13', benefit: 'Electronic uplift and empowering lyrics.', language: 'English' },
    { id: 'h10', name: 'Jai Ho', artist: 'A.R. Rahman', youtubeUrl: 'https://www.youtube.com/embed/xwwAVRyN2KY', duration: '5:19', benefit: 'Victory-inducing grand arrangement.', language: 'Hindi' },
    { id: 'h11', name: 'Shape of You', artist: 'Ed Sheeran', youtubeUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8', duration: '3:53', benefit: 'Rhythmic boost for active joy.', language: 'English' },
    { id: 'h12', name: 'Zingaat', artist: 'Ajay-Atul', youtubeUrl: 'https://www.youtube.com/embed/I0T8t7rXp7I', duration: '4:01', benefit: 'High-energy dance rhythm.', language: 'Marathi' },
    { id: 'h13', name: 'Malhari', artist: 'Vishal Dadlani', youtubeUrl: 'https://www.youtube.com/embed/l_MyUGq7pgs', duration: '4:05', benefit: 'Warrior-like energy and cinematic joy.', language: 'Hindi' }
  ],
  sad: [
    { id: 's1', name: 'Fix You', artist: 'Coldplay', youtubeUrl: 'https://www.youtube.com/embed/k4V3Mo61fJM', duration: '4:55', benefit: 'Validates feelings of loss while providing a sense of hope.', language: 'English' },
    { id: 's2', name: 'Kabira', artist: 'Tochi Raina', youtubeUrl: 'https://www.youtube.com/embed/jHNNMj5bNQw', duration: '3:43', benefit: 'Soothing sufi-fusion for reflection and let-go.', language: 'Hindi' },
    { id: 's3', name: 'Sanju Mattu Geetha', artist: 'Sonu Nigam', youtubeUrl: 'https://www.youtube.com/embed/bR_qC0T_Q8Q', duration: '4:20', benefit: 'Deeply emotive vocals for cathartic release.', language: 'Kannada' },
    { id: 's4', name: 'First Love', artist: 'Hikaru Utada', youtubeUrl: 'https://www.youtube.com/embed/o1sUaV6n7yQ', duration: '4:17', benefit: 'Melancholic piano and legendary vocal tone.', language: 'Japanese' },
    { id: 's5', name: 'Kannazhaga', artist: 'Dhanush & Shruti', youtubeUrl: 'https://www.youtube.com/embed/vU29VfayVWw', duration: '3:20', benefit: 'Soft, haunting melody for quiet moments.', language: 'Tamil' },
    { id: 's6', name: 'Tomay Hrid Majhare', artist: 'Animesh Roy', youtubeUrl: 'https://www.youtube.com/embed/YI6q66zI01Y', duration: '4:00', benefit: 'Soulful folk melody connecting to the heart.', language: 'Bengali' },
    { id: 's7', name: 'Someone Like You', artist: 'Adele', youtubeUrl: 'https://www.youtube.com/embed/hLQl3WQQoQ0', duration: '4:45', benefit: 'Powerful piano ballad for emotional processing.', language: 'English' },
    { id: 's8', name: 'Agar Tum Saath Ho', artist: 'Alka Yagnik', youtubeUrl: 'https://www.youtube.com/embed/sK7riqg2mr4', duration: '5:41', benefit: 'Cathartic and relatable emotional journey.', language: 'Hindi' },
    { id: 's9', name: 'Channa Mereya', artist: 'Arijit Singh', youtubeUrl: 'https://www.youtube.com/embed/284Ov7ysyzA', duration: '4:49', benefit: 'The ultimate song for unrequited love and release.', language: 'Hindi' },
    { id: 's10', name: 'Stay with Me', artist: 'Sam Smith', youtubeUrl: 'https://www.youtube.com/embed/pB-5XG-DbAA', duration: '2:52', benefit: 'Gospel-tinged ballad for lonely nights.', language: 'English' }
  ],
  angry: [
    { id: 'a1', name: 'Weightless', artist: 'Marconi Union', youtubeUrl: 'https://www.youtube.com/embed/UfcAVejslrU', duration: '8:08', benefit: 'Scientifically proven to reduce anxiety and lower heart rate.', language: 'English' },
    { id: 'a2', name: 'Kun Faya Kun', artist: 'A.R. Rahman', youtubeUrl: 'https://www.youtube.com/embed/T94PHkuydcw', duration: '7:53', benefit: 'Spiritual grounding for intense emotional turmoil.', language: 'Hindi' },
    { id: 'a3', name: 'River Flows in You', artist: 'Yiruma', youtubeUrl: 'https://www.youtube.com/embed/7maJOI3QMu0', duration: '3:32', benefit: 'Focuses the mind and washes away agitation.', language: 'Korean' },
    { id: 'a4', name: 'Clair de Lune', artist: 'Claude Debussy', youtubeUrl: 'https://www.youtube.com/embed/vG-qmVIsNw0', duration: '5:00', benefit: 'Timeless piano elegance for instant calmness.', language: 'French' },
    { id: 'a5', name: 'Aasman Ko Chukar', artist: 'Daler Mehndi', youtubeUrl: 'https://www.youtube.com/embed/W_lZ9V4X6bU', duration: '4:23', benefit: 'Focuses directed energy into positive power.', language: 'Hindi' },
    { id: 'a6', name: 'Eye of the Tiger', artist: 'Survivor', youtubeUrl: 'https://www.youtube.com/embed/btPJPFnesV4', duration: '4:03', benefit: 'Converts anger into determination and drive.', language: 'English' },
    { id: 'a7', name: 'Zinda', artist: 'Siddharth Mahadevan', youtubeUrl: 'https://www.youtube.com/embed/Aon0OaT4O0o', duration: '3:31', benefit: 'Electric motivation and internal fire.', language: 'Hindi' }
  ],
  fear: [
    { id: 'f1', name: 'Three Little Birds', artist: 'Bob Marley', youtubeUrl: 'https://www.youtube.com/embed/uMUQMSXLlhm', duration: '3:00', benefit: 'The ultimate "don\'t worry" anthem for anxiety relief.', language: 'English' },
    { id: 'f2', name: 'Iktara', artist: 'Amit Trivedi', youtubeUrl: 'https://www.youtube.com/embed/fSAtvVkaI70', duration: '3:45', benefit: 'Simple, grounding melody for reassurance.', language: 'Hindi' },
    { id: 'f3', name: 'Panchatandra (Mood)', artist: 'V. Harikrishna', youtubeUrl: 'https://www.youtube.com/embed/BmX9N0b8bWk', duration: '3:12', benefit: 'Warm acoustic instrumentation for safety.', language: 'Kannada' },
    { id: 'f4', name: 'Brave', artist: 'Sara Bareilles', youtubeUrl: 'https://www.youtube.com/embed/QUQsqBqxoT4', duration: '3:41', benefit: 'Empowering lyrics to overcome apprehension.', language: 'English' },
    { id: 'f5', name: 'Nuvvostanante', artist: 'Sagar', youtubeUrl: 'https://www.youtube.com/embed/uUClm16V5jM', duration: '4:10', benefit: 'Bouncy, safe melody for comfort.', language: 'Telugu' },
    { id: 'f6', name: 'Don\'t Panic', artist: 'Coldplay', youtubeUrl: 'https://www.youtube.com/embed/yW8S_S0c19A', duration: '2:16', benefit: 'Short, sweet acoustic reminder that life is beautiful.', language: 'English' },
    { id: 'f7', name: 'Raataan Lambiyan', artist: 'Jubin Nautiyal', youtubeUrl: 'https://www.youtube.com/embed/g6fnFALEseI', duration: '3:50', benefit: 'Soft romantic energy to feel connected and safe.', language: 'Hindi' }
  ],
  neutral: [
    { id: 'n1', name: 'Experience', artist: 'Ludovico Einaudi', youtubeUrl: 'https://www.youtube.com/embed/hN_q-_nGv6M', duration: '5:15', benefit: 'Driving piano rhythm that builds gentle momentum for work.', language: 'English' },
    { id: 'n2', name: 'Je veux', artist: 'Zaz', youtubeUrl: 'https://www.youtube.com/embed/Tm88QAI8I5A', duration: '3:39', benefit: 'Lively but balanced rhythm for daily tasks.', language: 'French' },
    { id: 'n3', name: 'Koi', artist: 'Gen Hoshino', youtubeUrl: 'https://www.youtube.com/embed/jhOVib6nt_o', duration: '4:11', benefit: 'Upbeat yet focused tempo for productive flow.', language: 'Japanese' },
    { id: 'n4', name: 'Lofi Girl - Chill Beats', artist: 'Lofi Girl', youtubeUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk', duration: 'Live', benefit: 'Static-free concentration for long working hours.', language: 'English' },
    { id: 'n5', name: 'Aas Paas Hai Khuda', artist: 'Rahat Fateh Ali Khan', youtubeUrl: 'https://www.youtube.com/embed/W-w36767O80', duration: '5:24', benefit: 'Peaceful sufi-pop for inner balance.', language: 'Hindi' }
  ],
  surprise: [
    { id: 'su1', name: 'Don\'t Stop Me Now', artist: 'Queen', youtubeUrl: 'https://www.youtube.com/embed/HgzGwKwLmgM', duration: '3:29', benefit: 'A burst of high-velocity joy perfect for exciting news.', language: 'English' },
    { id: 'su2', name: 'Ghoomar', artist: 'Shreya Ghoshal', youtubeUrl: 'https://www.youtube.com/embed/6cKErCWrb44', duration: '4:41', benefit: 'Majestic and surprising grand arrangement.', language: 'Hindi' },
    { id: 'su3', name: 'Aathi', artist: 'Anirudh Ravichander', youtubeUrl: 'https://www.youtube.com/embed/lY2H2ZP56K4', duration: '4:00', benefit: 'Surprising energy and high-velocity melody.', language: 'Tamil' },
    { id: 'su4', name: 'Uptown Funk', artist: 'Mark Ronson', youtubeUrl: 'https://www.youtube.com/embed/OPf0YbXqDm0', duration: '4:30', benefit: 'Instant excitement and funk.', language: 'English' }
  ],
  disgust: [
    { id: 'd1', name: 'La Vie En Rose', artist: 'Edith Piaf', youtubeUrl: 'https://www.youtube.com/embed/kFzViYkZaz4', duration: '3:05', benefit: 'Pure melody that cleanses the mental palate.', language: 'French' },
    { id: 'd2', name: 'Raabta', artist: 'Arijit Singh', youtubeUrl: 'https://www.youtube.com/embed/zL6vC_ZNP7o', duration: '4:03', benefit: 'Harmonious and beautiful strings for mental reset.', language: 'Hindi' },
    { id: 'd3', name: 'Shape of You', artist: 'Ed Sheeran', youtubeUrl: 'https://www.youtube.com/embed/JGwWNGJdvx8', duration: '3:53', benefit: 'Balanced rhythm to clear lingering negative thoughts.', language: 'English' },
    { id: 'd4', name: 'Perfect', artist: 'Ed Sheeran', youtubeUrl: 'https://www.youtube.com/embed/2Vv-BfVoq4g', duration: '4:23', benefit: 'Pure, sweet melody to replace negativity.', language: 'English' }
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
