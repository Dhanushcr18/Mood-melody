/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Emotion } from "./constants/music";

export interface MoodEntry {
  id: string;
  timestamp: string;
  emotion: Emotion;
  confidence: number;
  note?: string;
}

export interface JournalEntry {
  id: string;
  timestamp: string;
  text: string;
  moodAtTime: Emotion;
}

export interface UserProfile {
  languages: string[];
  lastEmotion?: Emotion;
}
