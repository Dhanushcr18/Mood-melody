/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GoogleGenAI, Modality } from "@google/genai";
import * as faceapi from 'face-api.js';
import { Emotion, MUSIC_DB, Song } from "../constants/music";

const geminiApiKey =
  (typeof import.meta !== 'undefined' ? (import.meta as any).env?.VITE_GEMINI_API_KEY : undefined) ||
  process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: geminiApiKey });
const EMOTION_MODEL = "gemini-2.5-flash";
const VALID_EMOTIONS: Emotion[] = ['happy', 'sad', 'angry', 'neutral'];

type LocalEmotionResult = {
  emotion: Emotion;
  confidence: number;
  explanation: string;
  isQuotaError: boolean;
};

// ── face-api.js ML-based emotion detection ───────────────────────────────────

let faceApiReady = false;
let faceApiLoading = false;

export async function loadFaceApiModels(): Promise<boolean> {
  if (faceApiReady) return true;
  if (faceApiLoading) {
    // Wait for ongoing load
    for (let i = 0; i < 30; i++) {
      await new Promise(r => setTimeout(r, 200));
      if (faceApiReady) return true;
    }
    return false;
  }
  faceApiLoading = true;
  try {
    const MODEL_URL = '/models';
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL),
      faceapi.nets.faceLandmark68TinyNet.loadFromUri(MODEL_URL),
      faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL),
    ]);
    faceApiReady = true;
    console.log('[FaceAPI] Models loaded successfully');
    return true;
  } catch (err) {
    console.warn('[FaceAPI] Model load failed:', err);
    faceApiLoading = false;
    return false;
  }
}

// Map face-api expression keys → our Emotion type
const FACEAPI_EMOTION_MAP: Record<string, Emotion> = {
  happy: 'happy',
  sad: 'sad',
  angry: 'angry',
  neutral: 'neutral',
};

async function detectWithFaceApi(base64Image: string): Promise<LocalEmotionResult | null> {
  try {
    const modelsLoaded = await loadFaceApiModels();
    if (!modelsLoaded) return null;

    const img = await new Promise<HTMLImageElement>((resolve, reject) => {
      const el = new Image();
      el.onload = () => resolve(el);
      el.onerror = () => reject(new Error('Image load failed'));
      el.src = base64Image;
    });

    const options = new faceapi.TinyFaceDetectorOptions({ inputSize: 320, scoreThreshold: 0.3 });
    const detection = await faceapi
      .detectSingleFace(img, options)
      .withFaceLandmarks(true)
      .withFaceExpressions();

    if (!detection) {
      console.warn('[FaceAPI] No face detected in image');
      return {
        emotion: 'neutral',
        confidence: 0,
        explanation: 'No face detected. Please face the camera directly.',
        isQuotaError: false,
      };
    }

    const expressions = detection.expressions as unknown as Record<string, number>;
    console.log('[FaceAPI] Raw expressions:', expressions);

    // Find the top emotion
    let bestKey = 'neutral';
    let bestScore = 0;
    for (const [key, score] of Object.entries(expressions)) {
      if (score > bestScore) {
        bestScore = score;
        bestKey = key;
      }
    }

    const emotion: Emotion = FACEAPI_EMOTION_MAP[bestKey] || 'neutral';
    const confidence = Math.round(bestScore * 100);

    console.log('[FaceAPI] Detected:', emotion, `(${confidence}%)`);
    return {
      emotion,
      confidence,
      explanation: `Face-AI detected ${emotion} with ${confidence}% confidence.`,
      isQuotaError: false,
    };
  } catch (err) {
    console.warn('[FaceAPI] Detection error:', err);
    return null;
  }
}

const clamp = (value: number, min = 0, max = 1) => Math.max(min, Math.min(max, value));

async function loadImage(base64Image: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Image load failed"));
    img.src = base64Image;
  });
}

function createCanvas(width: number, height: number) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function getRegionStats(
  gray: Uint8ClampedArray,
  width: number,
  height: number,
  x0: number,
  y0: number,
  x1: number,
  y1: number
) {
  const startX = Math.max(0, Math.floor(x0 * width));
  const endX = Math.min(width, Math.floor(x1 * width));
  const startY = Math.max(0, Math.floor(y0 * height));
  const endY = Math.min(height, Math.floor(y1 * height));

  let sum = 0;
  let count = 0;
  let horizontalContrast = 0;
  let verticalContrast = 0;

  for (let y = startY; y < endY; y++) {
    for (let x = startX; x < endX; x++) {
      const idx = y * width + x;
      const value = gray[idx];
      sum += value;
      count += 1;

      if (x + 1 < endX) {
        horizontalContrast += Math.abs(value - gray[idx + 1]);
      }
      if (y + 1 < endY) {
        verticalContrast += Math.abs(value - gray[idx + width]);
      }
    }
  }

  return {
    mean: count ? sum / count : 0,
    horizontalContrast: count ? horizontalContrast / count : 0,
    verticalContrast: count ? verticalContrast / count : 0,
  };
}

function analyzeFaceRegion(gray: Uint8ClampedArray, sw: number, sh: number): LocalEmotionResult {
  const leftEye = getRegionStats(gray, sw, sh, 0.18, 0.24, 0.42, 0.42);
  const rightEye = getRegionStats(gray, sw, sh, 0.58, 0.24, 0.82, 0.42);
  const brow = getRegionStats(gray, sw, sh, 0.18, 0.12, 0.82, 0.26);
  const nose = getRegionStats(gray, sw, sh, 0.38, 0.38, 0.62, 0.58);
  const mouth = getRegionStats(gray, sw, sh, 0.24, 0.62, 0.76, 0.84);
  const mouthCenter = getRegionStats(gray, sw, sh, 0.38, 0.66, 0.62, 0.82);
  const mouthCorners = {
    left: getRegionStats(gray, sw, sh, 0.18, 0.64, 0.34, 0.84),
    right: getRegionStats(gray, sw, sh, 0.66, 0.64, 0.82, 0.84),
  };

  const eyeOpenness = clamp(((leftEye.verticalContrast + rightEye.verticalContrast) / 2) / 22);
  const browTension = clamp(brow.verticalContrast / 24);
  const mouthOpenness = clamp(mouthCenter.verticalContrast / 28);
  const mouthActivity = clamp(mouth.horizontalContrast / 24);
  const smileSignal = clamp(
    ((mouthCorners.left.horizontalContrast + mouthCorners.right.horizontalContrast) / 2 - mouthCenter.horizontalContrast) / 18 + 0.3
  );
  const noseTension = clamp(nose.verticalContrast / 22);
  const eyeBalance = Math.abs(leftEye.mean - rightEye.mean) / 255;

  const happyScore = clamp(smileSignal * 0.7 + mouthActivity * 0.2 + (1 - browTension) * 0.1);
  const angryScore = clamp(browTension * 0.55 + (1 - mouthOpenness) * 0.15 + noseTension * 0.15 + mouthActivity * 0.15);
  const sadScore = clamp((1 - smileSignal) * 0.35 + (1 - eyeOpenness) * 0.25 + browTension * 0.2 + eyeBalance * 0.2);

  const candidates: Array<{ emotion: Emotion; score: number }> = [
    { emotion: 'happy' as Emotion, score: happyScore },
    { emotion: 'sad' as Emotion, score: sadScore },
    { emotion: 'angry' as Emotion, score: angryScore },
  ].sort((a, b) => b.score - a.score);

  const best = candidates[0];
  const second = candidates[1];
  const margin = best.score - second.score;

  if (best.score < 0.42 || margin < 0.05) {
    return {
      emotion: 'neutral',
      confidence: Math.round(38 + Math.max(0, margin) * 100),
      explanation: "The face looks calm or the expression cues are too close to separate reliably.",
      isQuotaError: false
    };
  }

  return {
    emotion: best.emotion,
    confidence: Math.round(55 + Math.min(0.35, best.score - 0.42) * 100),
    explanation: `Local facial analysis found the strongest cues for ${best.emotion}.`,
    isQuotaError: false
  };
}

function looksLikeARealFaceRegion(gray: Uint8ClampedArray, sw: number, sh: number) {
  const leftEye = getRegionStats(gray, sw, sh, 0.18, 0.24, 0.42, 0.42);
  const rightEye = getRegionStats(gray, sw, sh, 0.58, 0.24, 0.82, 0.42);
  const brow = getRegionStats(gray, sw, sh, 0.18, 0.12, 0.82, 0.26);
  const mouth = getRegionStats(gray, sw, sh, 0.24, 0.62, 0.76, 0.84);
  const cheekLeft = getRegionStats(gray, sw, sh, 0.08, 0.38, 0.24, 0.62);
  const cheekRight = getRegionStats(gray, sw, sh, 0.76, 0.38, 0.92, 0.62);

  const eyeDetail = (leftEye.verticalContrast + rightEye.verticalContrast) / 2;
  const mouthDetail = mouth.horizontalContrast + mouth.verticalContrast;
  const browDetail = brow.verticalContrast;
  const symmetryGap = Math.abs(leftEye.mean - rightEye.mean);
  const cheekGap = Math.abs(cheekLeft.mean - cheekRight.mean);

  // Permissive thresholds — real webcam images vary a lot in contrast/lighting
  const enoughDetail = eyeDetail > 1.0 || mouthDetail > 1.5 || browDetail > 0.5;
  const plausibleSymmetry = symmetryGap < 140 && cheekGap < 150;

  return enoughDetail && plausibleSymmetry;
}

async function detectEmotionLocally(base64Image: string): Promise<LocalEmotionResult> {
  try {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return {
        emotion: 'neutral',
        confidence: 0,
        explanation: "Local emotion detection is unavailable in this environment.",
        isQuotaError: false
      };
    }

    const image = await loadImage(base64Image);
    const faceDetectorCtor = (window as any).FaceDetector;

    let sx = Math.floor(image.width * 0.19);
    let sy = Math.floor(image.height * 0.12);
    let sw = Math.floor(image.width * 0.62);
    let sh = Math.floor(image.height * 0.76);
    let usedDetectedFace = false;

    if (faceDetectorCtor) {
      try {
        const detector = new faceDetectorCtor({ fastMode: true, maxDetectedFaces: 1 });
        const faces = await detector.detect(image);

        if (faces?.length) {
          const face = faces[0].boundingBox;
          const faceAreaRatio = (face.width * face.height) / (image.width * image.height);
          const faceCenterX = face.x + face.width / 2;
          const imageCenterX = image.width / 2;
          const centeredEnough = Math.abs(faceCenterX - imageCenterX) < image.width * 0.32;
          const largeEnough = faceAreaRatio > 0.025;

          if (!largeEnough || !centeredEnough) {
            return {
              emotion: 'neutral',
              confidence: 0,
              explanation: "No clear main face detected in the scan area.",
              isQuotaError: false
            };
          }

          const paddingX = face.width * 0.08;
          const paddingY = face.height * 0.08;

          sx = Math.max(0, Math.floor(face.x - paddingX));
          sy = Math.max(0, Math.floor(face.y - paddingY));
          sw = Math.min(image.width - sx, Math.floor(face.width + paddingX * 2));
          sh = Math.min(image.height - sy, Math.floor(face.height + paddingY * 2));
          usedDetectedFace = true;
        } else {
          return {
            emotion: 'neutral',
            confidence: 0,
            explanation: "No face was detected clearly enough to analyze.",
            isQuotaError: false
          };
        }
      } catch (error) {
        console.warn("FaceDetector unavailable during local scan, using centered crop:", error);
      }
    }

    const canvas = createCanvas(sw, sh);
    const context = canvas.getContext('2d');
    if (!context) {
      throw new Error("Could not create local analysis canvas");
    }

    context.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
    const imageData = context.getImageData(0, 0, sw, sh);
    const gray = new Uint8ClampedArray(sw * sh);

    for (let i = 0; i < sw * sh; i++) {
      const r = imageData.data[i * 4];
      const g = imageData.data[i * 4 + 1];
      const b = imageData.data[i * 4 + 2];
      gray[i] = Math.round(0.299 * r + 0.587 * g + 0.114 * b);
    }

    // Only run the heuristic face check when FaceDetector API was available but
    // found no face. When FaceDetector is absent (most browsers), skip this
    // check entirely so a centered crop is always analysed.
    if (usedDetectedFace === false && (window as any).FaceDetector && !looksLikeARealFaceRegion(gray, sw, sh)) {
      return {
        emotion: 'neutral',
        confidence: 0,
        explanation: "No clear face was found in the center of the frame.",
        isQuotaError: false
      };
    }

    return analyzeFaceRegion(gray, sw, sh);
  } catch (error) {
    console.error("Local emotion detection error:", error);
    return {
      emotion: 'neutral',
      confidence: 38,
      explanation: "Local emotion detection used a safe neutral fallback on this frame.",
      isQuotaError: false
    };
  }
}

// Primary: face-api.js ML  →  fallback: pixel analysis
export async function detectEmotion(base64Image: string): Promise<{ emotion: Emotion; confidence: number; explanation: string; isQuotaError?: boolean }> {
  // 1️⃣ Try face-api.js ML model (best accuracy, fully offline, no API key needed)
  const faceApiResult = await detectWithFaceApi(base64Image);
  if (faceApiResult !== null) {
    return faceApiResult;
  }

  // 2️⃣ face-api models failed to load — fall back to pixel contrast analysis
  console.warn('[Emotion] face-api unavailable, using pixel-contrast fallback');
  return detectEmotionLocally(base64Image);
}

export async function getTherapyChat(emotion: Emotion, history: { role: 'user' | 'model'; parts: { text: string }[] }[] = []) {
  // Use Gemini for the therapy chat as it's more dynamic
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: `I am feeling ${emotion}. Provide a short music therapy reflection.` }] },
        ...history
      ],
      config: {
        systemInstruction: "You are a professional Music Therapist. Provide brief, empathetic reflections (max 3 sentences) focusing on how music affects the nervous system based on the user's emotion."
      }
    });
    return response.text || "I'm here to support you. Let the music guide your heart today.";
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    // Fallback
    const responses: Record<Emotion, string> = {
      happy: "It's wonderful to see you in such a radiant mood! Music therapy for happiness focuses on 'Entrainment'.",
      sad: "I hear you, and it's completely okay to feel this way. We use 'The Iso-Principle' here.",
      angry: "I can sense the intensity right now. We're going to use 'Subtractive Rhythm' to help lower your heart rate.",
      neutral: "A balanced state is a powerful place for focus. Ambient minimalism helps stay in this flow state."
    };
    return responses[emotion] || "Let the music guide your heart today.";
  }
}

export async function generateAImusic(prompt: string, amplitude: string = 'balanced', harmonics: string = 'acoustic'): Promise<{ audioUrl: string; lyrics?: string }> {
  try {
    // Primary attempt with Lyria API
    const response = await ai.models.generateContentStream({
      model: "lyria-3-clip-preview",
      contents: prompt,
      config: {
        responseModalities: [Modality.AUDIO]
      }
    });

    let audioBase64 = "";
    let lyrics = "";
    let mimeType = "audio/wav";

    for await (const chunk of response) {
      const parts = chunk.candidates?.[0]?.content?.parts;
      if (!parts) continue;
      for (const part of parts) {
        if (part.inlineData?.data) {
          if (!audioBase64 && part.inlineData.mimeType) {
            mimeType = part.inlineData.mimeType;
          }
          audioBase64 += part.inlineData.data;
        }
        if (part.text && !lyrics) {
          lyrics = part.text;
        }
      }
    }

    if (!audioBase64) throw new Error("No audio data generated");

    const binary = atob(audioBase64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    const blob = new Blob([bytes], { type: mimeType });
    return { audioUrl: URL.createObjectURL(blob), lyrics };
  } catch (error: any) {
    console.error("Lyria API Error - Using Web Audio Synthesis:", error);

    // Fallback: Generate music using Web Audio API
    try {
      return generateSynthesizedMusic(prompt, amplitude, harmonics);
    } catch (fallbackError) {
      console.error("Music generation fallback failed:", fallbackError);
      throw fallbackError;
    }
  }
}

function generateSynthesizedMusic(prompt: string, amplitude: string, harmonics: string): { audioUrl: string; lyrics: string } {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const sampleRate = audioContext.sampleRate;
  const duration = 8; // 8 seconds
  const totalSamples = sampleRate * duration;

  // Create audio buffer
  const audioBuffer = audioContext.createBuffer(1, totalSamples, sampleRate);
  const channelData = audioBuffer.getChannelData(0);

  // Extract emotion from prompt
  const emotionMatch = prompt.match(/feeling (\w+)/i);
  const emotion = emotionMatch?.[1]?.toLowerCase() || 'neutral';

  // Emotion-based scale patterns (Hz)
  const emotionScales: Record<string, number[]> = {
    happy: [261.63, 293.66, 329.63, 349.23, 392.00, 440.00, 493.88, 523.25], // C-D-E-F-G-A-B-C major
    sad: [261.63, 293.66, 311.13, 349.23, 392.00, 415.30, 493.88, 523.25],   // C-D-Eb-F-G-Ab-B-C natural minor
    angry: [293.66, 349.23, 415.30, 466.16, 554.37, 659.25, 783.99, 880.00], // D-F-Ab-Bb-Db-E-G-A
    neutral: [261.63, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99] // C-E-G-A-C-D-E-G
  };

  const scale = emotionScales[emotion] || emotionScales.neutral;

  // Generate unique seed based on timestamp for variation
  const seed = Date.now() % 10000;
  const random = (min: number, max: number) => {
    // Seeded pseudo-random for reproducibility within same timestamp
    const x = Math.sin(seed + Math.random() * 10000) * 10000;
    return min + (x - Math.floor(x)) * (max - min);
  };

  // Amplitude settings (affects volume envelope)
  const amplitudeMap: Record<string, { attack: number; sustain: number; release: number }> = {
    mellow: { attack: 0.5, sustain: 0.4, release: 1.5 },
    balanced: { attack: 0.2, sustain: 0.6, release: 1.0 },
    high: { attack: 0.1, sustain: 0.8, release: 0.5 }
  };
  const amplitudeConfig = amplitudeMap[amplitude] || amplitudeMap.balanced;

  // Harmonics settings
  const harmonicsConfig = harmonics === 'synthetic'
    ? [1, 2, 3, 5, 7, 11] // More harmonics for synthetic
    : [1, 2, 3];           // Fewer for acoustic

  // Generate random note sequence for melody
  const noteCount = Math.floor(duration * random(1, 3)); // 8-24 notes
  const notes: { freq: number; startTime: number; duration: number }[] = [];
  let currentTime = 0;

  for (let n = 0; n < noteCount; n++) {
    const noteFreq = scale[Math.floor(Math.random() * scale.length)] * Math.pow(2, Math.floor(random(-1, 2))); // Add octave variation
    const noteDuration = random(0.3, 1.2);
    notes.push({
      freq: noteFreq,
      startTime: currentTime,
      duration: noteDuration
    });
    currentTime += noteDuration * random(0.6, 1.0); // Add timing variation
  }

  // Generate waveform with note-based melody
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    let sample = 0;

    // Add envelope
    let envelope = 0;
    if (t < amplitudeConfig.attack) {
      envelope = t / amplitudeConfig.attack; // Attack
    } else if (t < duration - amplitudeConfig.release) {
      envelope = 1; // Sustain
    } else {
      envelope = Math.max(0, 1 - (t - (duration - amplitudeConfig.release)) / amplitudeConfig.release); // Release
    }

    // Find active note(s)
    for (const note of notes) {
      if (t >= note.startTime && t < note.startTime + note.duration) {
        const notePhase = (t - note.startTime) / note.duration;
        const noteEnvelope = Math.sin(notePhase * Math.PI); // Smooth note envelope

        // Generate harmonics for this note
        for (const harmonic of harmonicsConfig) {
          const freq = note.freq * harmonic;
          const harmonicAmplitude = 1 / (harmonic * 1.5);

          // Vary waveform based on harmonics setting
          let waveform: number;
          if (harmonics === 'synthetic') {
            // Mix of sine and square for synthetic
            const sine = Math.sin(2 * Math.PI * freq * t);
            const square = Math.sign(Math.sin(2 * Math.PI * freq * t));
            const mix = random(0.3, 0.7);
            waveform = sine * mix + square * (1 - mix);
          } else {
            // Pure sine for acoustic
            waveform = Math.sin(2 * Math.PI * freq * t);
          }

          sample += waveform * harmonicAmplitude * noteEnvelope * 0.2;
        }
      }
    }

    // Add dynamic LFO modulation that varies over time
    const lfoFreq = random(0.3, 0.8);
    const lfo = Math.sin(2 * Math.PI * lfoFreq * t) * random(0.05, 0.15);
    sample = sample * (1 + lfo);

    // Add subtle random noise for texture
    const noise = (Math.random() - 0.5) * random(0.01, 0.05);
    sample += noise;

    // Apply envelope and normalize
    channelData[i] = (sample * envelope) / (harmonicsConfig.length * 1.5);
  }

  // Soft limit to prevent clipping
  for (let i = 0; i < totalSamples; i++) {
    if (Math.abs(channelData[i]) > 0.8) {
      channelData[i] = Math.sign(channelData[i]) * (0.8 + Math.abs(channelData[i] - Math.sign(channelData[i]) * 0.8) * 0.2);
    }
  }

  // Convert to WAV and create blob
  const wavData = audioBufferToWav(audioBuffer);
  const blob = new Blob([wavData], { type: 'audio/wav' });
  const audioUrl = URL.createObjectURL(blob);

  const emotionDescriptions: Record<string, string> = {
    happy: 'Uplifting and joyful melody with bright major chords',
    sad: 'Melancholic and soothing minor key progression',
    angry: 'Intense and dynamic high-energy composition',
    neutral: 'Balanced ambient instrumental'
  };

  const lyrics = `Generated unique ${emotion} composition with ${amplitude} amplitude and ${harmonics} harmonics. ${emotionDescriptions[emotion] || 'Therapeutic music'}`;

  return { audioUrl, lyrics };
}

// Helper function to convert AudioBuffer to WAV
function audioBufferToWav(audioBuffer: AudioBuffer): ArrayBuffer {
  const numberOfChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const format = 1; // PCM
  const bitDepth = 16;

  const bytesPerSample = bitDepth / 8;
  const blockAlign = numberOfChannels * bytesPerSample;

  let offset = 0;
  let pos = 0;

  const setUint16 = (data: DataView, pos: number, value: number) => {
    data.setUint16(pos, value, true);
  };
  const setUint32 = (data: DataView, pos: number, value: number) => {
    data.setUint32(pos, value, true);
  };

  // Create WAV header
  const frameLength = audioBuffer.length;
  const dataLength = frameLength * numberOfChannels * bytesPerSample;
  const bufferLength = 36 + dataLength;
  const wav = new ArrayBuffer(44 + dataLength);
  const view = new DataView(wav);

  // Write WAV header
  const writeString = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(view, 0, 'RIFF');
  setUint32(view, 4, bufferLength);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  setUint32(view, 16, 16);
  setUint16(view, 20, format);
  setUint16(view, 22, numberOfChannels);
  setUint32(view, 24, sampleRate);
  setUint32(view, 28, sampleRate * blockAlign);
  setUint16(view, 32, blockAlign);
  setUint16(view, 34, bitDepth);
  writeString(view, 36, 'data');
  setUint32(view, 40, dataLength);

  // Write audio data
  offset = 44;
  for (let i = 0; i < frameLength; i++) {
    for (let channel = 0; channel < numberOfChannels; channel++) {
      let sample = audioBuffer.getChannelData(channel)[i];
      sample = Math.max(-1, Math.min(1, sample));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }

  return wav;
}

export async function getRecommendedSongsByLanguage(emotion: Emotion, languages: string[]) {
  // Simulating the recommendation engine using the local high-quality database
  await new Promise(resolve => setTimeout(resolve, 600));

  // Filter local database by selected languages
  const allSongsForEmotion = MUSIC_DB[emotion] || [];
  const filtered = allSongsForEmotion.filter(song =>
    languages.includes(song.language)
  );

  // If no exact language matches, return all for that emotion as fallback
  return filtered.length > 0 ? filtered : allSongsForEmotion;
}
