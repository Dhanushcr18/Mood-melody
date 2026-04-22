/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Type } from "@google/genai";
import { Emotion } from "../constants/music";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Helper for resilient API calls with exponential backoff
async function withRetry<T>(fn: () => Promise<T>, maxRetries = 2): Promise<T> {
  let lastError: any;
  for (let i = 0; i <= maxRetries; i++) {
    try {
      return await fn();
    } catch (error: any) {
      lastError = error;
      const isRetryable = 
        error?.message?.includes('429') || 
        error?.message?.includes('500') || 
        error?.message?.includes('xhr') ||
        error?.message?.includes('RESOURCE_EXHAUSTED');

      if (!isRetryable || i === maxRetries) break;
      
      // Exponential backoff: 1s, 2s
      const delay = Math.pow(2, i) * 1000;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}

export async function detectEmotion(base64Image: string): Promise<{ emotion: Emotion; confidence: number; explanation: string; isQuotaError?: boolean }> {
  try {
    const result = await withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [{
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image.split(',')[1] || base64Image,
              },
            },
            {
              text: `Act as a clinical expert in facial expression analysis and micro-expressions. 
              Analyze the user's face in the provided image with high precision.
              
              Step 1: Focus on individual features:
              - BROW: Are they furrowed (Angry/Sad), raised (Surprise/Fear), or relaxed (Neutral)?
              - EYES: Are there "crow's feet" (Happy), tensed lower lids (Angry/Fear), or wide (Surprise)? Look for the "Inner Brow Raise" common in deep sadness.
              - MOUTH: Look for upturned corners (Happy), downturned (Sad), tight/thin (Angry), or open (Surprise).
              - NOSE: Look for wrinkling (Disgust).

              Step 2: Synthesize into ONE primary emotion from this list: happy, sad, angry, fear, neutral, surprise, disgust.

              Be extremely sensitive to indicators of SAD (heavy eyes, subtle mouth downturn, inner brow tension) and ANGRY (narrowed eyes, lip compression, or downward brow furrowing). 

              CRITICAL: Do NOT default to 'neutral' if there is even slight discernible emotional tension. If the user appears tired or has a "heavy" look in their eyes, categorize as 'sad'. If there is a "focused" or "intense" look with lip tension, categorize as 'angry'. Assume the user is actively expressing a therapeutic mood unless the face is perfectly relaxed.`,
            },
          ]
        }],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              emotion: {
                type: Type.STRING,
                enum: ["happy", "sad", "angry", "fear", "neutral", "surprise", "disgust"],
                description: "The primary detected emotion from the allowed list.",
              },
              confidence: {
                type: Type.NUMBER,
                description: "Confidence level between 0 and 100.",
              },
              explanation: {
                type: Type.STRING,
                description: "Specific visual cues observed (e.g. 'Drooping eyelids detected').",
              },
            },
            required: ["emotion", "confidence", "explanation"],
          },
        }
      });
      return JSON.parse(response.text || '{}');
    });

    let detectedEmotion = (result.emotion?.toLowerCase() || 'neutral');
    
    // Normalization mapping to handle common synonyms the model might return despite constraints
    const normalizationMap: Record<string, Emotion> = {
      'sadness': 'sad',
      'happiness': 'happy',
      'anger': 'angry',
      'frightened': 'fear',
      'fearing': 'fear',
      'surprised': 'surprise',
      'disgusted': 'disgust'
    };

    if (normalizationMap[detectedEmotion]) {
      detectedEmotion = normalizationMap[detectedEmotion];
    }
    
    return {
      emotion: (detectedEmotion as Emotion),
      confidence: result.confidence || 80,
      explanation: result.explanation || "Analysis complete."
    };
  } catch (error: any) {
    console.error("Emotion detection error:", error);
    const isQuota = error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED');
    const msg = isQuota
      ? "API quota exceeded. Please wait a moment before capturing again."
      : "The neural bridge was interrupted. Please try again in 5 seconds.";
    return { emotion: 'neutral', confidence: 50, explanation: msg, isQuotaError: isQuota };
  }
}

export async function getTherapyChat(emotion: Emotion, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) {
  const systemPrompt = `You are MoodMelody, a compassionate AI music therapist powered by Google's Gemini. 
  The user is currently feeling ${emotion}. 
  Your goal is to provide deep empathetic support through the lens of music therapy.
  Explain how specific musical elements (rhythm, melody, instruments) associated with "${emotion}" can help regulate their nervous system.
  Keep responses under 150 words. Be warm, professional, yet deeply human in your connection.
  Always end with an encouraging line.`;

  try {
    const responseText = await withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: history.map(h => ({ role: h.role, parts: h.parts })),
        config: {
          systemInstruction: systemPrompt,
        }
      });
      return response.text;
    });

    return responseText;
  } catch (error) {
    console.error("Therapy chat error:", error);
    return "I'm here for you. Let the music guide your heart today.";
  }
}

export async function getRecommendedSongsByLanguage(emotion: Emotion, languages: string[]) {
  const prompt = `Act as an expert music therapist. 
  The user is feeling ${emotion}. 
  Provide a list of 8 real, popular songs that help with this emotion.
  The songs should be primarily in these languages: ${languages.join(', ')}.
  
  CRITICAL: You MUST provide a valid 11-character YouTube Video ID for the "youtubeId" field.
  
  UNRESTRICTED EMBEDDING RULES:
  1. Only choose songs from "Topic" channels (e.g., Artist - Topic) or official "VEVO" channels.
  2. DO NOT choose live performances or specific movie clips as they are often restricted.
  3. For Kannada, prioritize: bR_qC0T_Q8Q, b6v_Y_zXmqY, vU29VfayVWw, BmX9N0b8bWk, c6NOnwB1NIs.
  4. For English, prioritize: ZbZSe6N_BXs, d-diB65scQU, y6Sxv-sUYtM, UfcAVejslrU, k4V3Mo61fJM.
  
  Return the result as a strict JSON array of objects with these keys: 
  "name" (song title), "artist", "youtubeId" (the 11-char ID), "duration" (m:ss), "benefit" (therapeutic reason).
  
  Only return the JSON array.`;

  try {
    const result = await withRetry(async () => {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                artist: { type: Type.STRING },
                youtubeId: { type: Type.STRING },
                duration: { type: Type.STRING },
                benefit: { type: Type.STRING },
              },
              required: ["name", "artist", "youtubeId", "duration", "benefit"]
            }
          }
        }
      });
      return JSON.parse(response.text || '[]');
    });

    return result.map((s: any, idx: number) => ({
      ...s,
      id: `ai-${idx}-${Date.now()}`,
      youtubeUrl: `https://www.youtube.com/embed/${s.youtubeId}`
    }));
  } catch (error: any) {
    console.error("Music recommendation error:", error);
    if (error?.message?.includes('429')) {
      console.warn("Quota exceeded for music recommendations. Using static DB fallback.");
    }
    return [];
  }
}
