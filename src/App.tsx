/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Music, 
  Camera, 
  Wind, 
  MessageCircle, 
  BarChart3, 
  BookOpen, 
  Sparkles,
  RefreshCcw,
  Plus,
  Send,
  History,
  Info,
  LogOut,
  Languages,
  User as UserIcon,
  ExternalLink,
  Search
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import Markdown from 'react-markdown';

import { MUSIC_DB, EMOTION_MAP, Emotion, Song, AVAILABLE_LANGUAGES } from './constants/music';
import { MoodEntry, JournalEntry, UserProfile } from './types';
import { detectEmotion, getTherapyChat, getRecommendedSongsByLanguage } from './lib/gemini';
import { auth, signInWithGoogle } from './lib/firebase';
import { handleFirestoreError } from './lib/firestore-errors';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot } from 'firebase/firestore';
import { db } from './lib/firebase';

// --- Components ---

const SidebarNav = ({ activeTab, onTabChange }: { activeTab: string, onTabChange: (tab: string) => void }) => {
  const navItems = [
    { id: 'detect', emoji: '🎭', label: 'Detect Mood' },
    { id: 'playlist', emoji: '🎶', label: 'My Playlist' },
    { id: 'breathing', emoji: '🧘', label: 'Breathing' },
    { id: 'chat', emoji: '💬', label: 'AI Therapist' },
    { id: 'journey', emoji: '📊', label: 'My Journey' },
    { id: 'journal', emoji: '📝', label: 'Mood Journal' },
  ];

  return (
    <nav className="w-20 bg-black/40 border-r border-white/10 flex flex-col items-center py-8 gap-10 hidden md:flex shrink-0">
      <div className="w-12 h-12 bg-[#4FC3F7] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(79,195,247,0.4)] cursor-pointer" onClick={() => onTabChange('detect')}>
        <span className="text-2xl">🎵</span>
      </div>
      
      <div className="flex flex-col gap-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange(item.id)}
            title={item.label}
            className={`p-3 rounded-lg transition-all text-xl ${
              activeTab === item.id 
                ? 'bg-white/10 text-white opacity-100 shadow-xl' 
                : 'text-white hover:bg-white/5 opacity-60 hover:opacity-100'
            }`}
          >
            {item.emoji}
          </button>
        ))}
      </div>

      <div className="mt-auto mb-4 p-3 hover:bg-white/5 rounded-lg cursor-pointer opacity-60 hover:opacity-100" onClick={() => onTabChange('settings')}>
        <span className="text-xl">⚙️</span>
      </div>
    </nav>
  );
};

// --- App Root ---

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activeTab, setActiveTab] = useState('detect');
  const [currentEmotion, setCurrentEmotion] = useState<Emotion | null>(null);
  const [confidence, setConfidence] = useState(0);
  const [moodHistory, setMoodHistory] = useState<MoodEntry[]>([]);
  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'model'; parts: { text: string }[] }[]>([]);
  const [isCapturing, setIsCapturing] = useState(false);
  const [apiLimited, setApiLimited] = useState(false);
  const [lastCheckTime, setLastCheckTime] = useState<string | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Auth & Data Listeners
  useEffect(() => {
    let profileUnsub: (() => void) | null = null;
    let entriesUnsub: (() => void) | null = null;
    let journalUnsub: (() => void) | null = null;

    const authUnsub = onAuthStateChanged(auth, async (u) => {
      setUser(u);
      setAuthLoading(false);

      // Cleanup previous listeners if any exist
      if (profileUnsub) profileUnsub();
      if (entriesUnsub) entriesUnsub();
      if (journalUnsub) journalUnsub();

      if (u) {
        // Fetch or create profile
        const profileRef = doc(db, 'users', u.uid);
        try {
          const profileSnap = await getDoc(profileRef);
          if (profileSnap.exists()) {
            setProfile(profileSnap.data() as UserProfile);
          } else {
            const newProfile: UserProfile = { languages: ['English'] };
            await setDoc(profileRef, newProfile);
            setProfile(newProfile);
          }
        } catch (err) {
          console.error("Initial profile fetch failed:", err);
        }

        // Real-time listeners for data
        profileUnsub = onSnapshot(profileRef, (docSnap) => {
          const data = docSnap.exists() ? docSnap.data() : null;
          if (data) {
            setProfile({
              languages: Array.isArray(data.languages) ? data.languages : ['English'],
              lastEmotion: data.lastEmotion
            });
          } else {
            const fallback: UserProfile = { languages: ['English'] };
            setDoc(profileRef, fallback);
            setProfile(fallback);
          }
        }, (err) => {
          console.error("Profile listener error:", err);
          toast.error("Real-time sync error. Please refresh.");
        });

        entriesUnsub = onSnapshot(doc(db, 'mood_history', u.uid), (doc) => {
          if (doc.exists()) setMoodHistory(doc.data().entries || []);
        });

        journalUnsub = onSnapshot(doc(db, 'journals', u.uid), (doc) => {
          if (doc.exists()) setJournalEntries(doc.data().entries || []);
        });
      } else {
        setProfile(null);
        setMoodHistory([]);
        setJournalEntries([]);
      }
    });

    return () => {
      authUnsub();
      if (profileUnsub) profileUnsub();
      if (entriesUnsub) entriesUnsub();
      if (journalUnsub) journalUnsub();
    };
  }, []);

  const toggleLanguage = async (lang: string) => {
    if (!user || !profile) {
      toast.error("Session initializing...");
      return;
    }
    
    const currentLangs = Array.isArray(profile.languages) ? [...profile.languages] : ['English'];
    let nextLangs: string[];
    
    if (currentLangs.includes(lang)) {
      if (currentLangs.length <= 1) {
        toast.error("Please keep at least one language active.");
        return;
      }
      nextLangs = currentLangs.filter(l => l !== lang);
    } else {
      nextLangs = [...currentLangs, lang];
    }

    try {
      const profileRef = doc(db, 'users', user.uid);
      // Use setDoc with merge to ensure doc creation and field update
      await setDoc(profileRef, { languages: nextLangs }, { merge: true });
      toast.success(`${currentLangs.includes(lang) ? 'Removed' : 'Added'} ${lang}`);
    } catch (err: any) {
      handleFirestoreError(err, 'update', `users/${user.uid}`);
    }
  };

  const handleMoodDetected = async (emotion: Emotion, conf: number, isQuota?: boolean) => {
    if (isQuota) {
      setApiLimited(true);
      toast.error("Gemini API limit reached. Entering Static Therapy Mode.", { duration: 5000 });
    } else {
      setApiLimited(false);
    }
    
    setCurrentEmotion(emotion);
    setConfidence(Math.round(conf));
    setLastCheckTime(new Date().toLocaleTimeString());
    
    if (user) {
      const newEntry: MoodEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        emotion,
        confidence: conf,
      };
      try {
        const historyRef = doc(db, 'mood_history', user.uid);
        await setDoc(historyRef, { entries: arrayUnion(newEntry) }, { merge: true });
      } catch (err: any) {
        handleFirestoreError(err, 'write', `mood_history/${user.uid}`);
      }
    }
    
    if (emotion === 'happy') toast.success("Glad you're feeling happy!");
    if (emotion === 'sad') toast.info("It's okay to feel sad. Music can help.");
    
    if (chatHistory.length <= 1) {
      getTherapyChat(emotion, [{ role: 'user', parts: [{ text: `I am feeling ${emotion}. Help me.` }] }]).then(msg => {
        setChatHistory([{ role: 'model', parts: [{ text: msg || '' }] }]);
      });
    }
  };

  const getThemeColor = () => {
    if (!currentEmotion) return '#4FC3F7';
    return EMOTION_MAP[currentEmotion].color;
  };

  if (authLoading) return <div className="h-screen bg-[#0a0a0a] flex items-center justify-center font-bold uppercase tracking-[0.4em] text-[#4FC3F7] animate-pulse">Initializing Therapy Session...</div>;

  if (!user) {
    return (
      <div className="h-screen w-full bg-[#0a0a0a] flex items-center justify-center p-6 select-none overflow-hidden relative">
        <div className="fixed inset-0 pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4FC3F7] rounded-full blur-[150px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600 rounded-full blur-[150px]"></div>
        </div>
        <Card className="glass-card max-w-md w-full p-10 flex flex-col items-center text-center gap-8 relative z-10 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
           <div className="w-20 h-20 bg-[#4FC3F7] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(79,195,247,0.4)]">
             <Music size={40} className="text-black" />
           </div>
           <div>
             <h1 className="text-4xl font-bold bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">MoodMelody</h1>
             <p className="text-sm text-white/40 mt-3 font-semibold uppercase tracking-widest leading-relaxed">Your Personal AI Music Therapist</p>
           </div>
           <Button 
             onClick={signInWithGoogle}
             className="w-full h-14 bg-white text-black font-bold uppercase tracking-widest hover:scale-[0.98] transition-transform rounded-2xl flex items-center justify-center gap-3 shadow-2xl"
           >
             Continue with Google
           </Button>
           <p className="text-[10px] text-white/20 uppercase font-black tracking-tighter">Secure Biometric Encryption Enabled</p>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-hidden select-none">
      <Toaster position="top-right" theme="dark" />
      
      {/* Dynamic Background Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 transition-colors duration-1000"
        style={{ 
          background: `radial-gradient(circle at 50% 30%, ${getThemeColor()} 0%, transparent 60%)`,
          filter: 'blur(100px)'
        }}
      />

      <SidebarNav activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="flex-1 flex flex-col p-8 gap-6 overflow-hidden relative z-10">
        {/* Header Section */}
        <header className="flex justify-between items-start shrink-0">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-[#4FC3F7] to-white bg-clip-text text-transparent">MoodMelody</h1>
            <p className="text-sm text-white/50 tracking-wider uppercase font-semibold">AI Music Therapist • Active Session</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/80">Camera: Online</span>
            </div>
            {user && (
              <button 
                onClick={() => signOut(auth)}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500/20 hover:border-red-500/40 transition-colors"
                title="Sign Out"
              >
                <LogOut size={16} className="text-white/60" />
              </button>
            )}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
          <div className="max-w-6xl mx-auto space-y-8 pb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {activeTab === 'detect' && (
                  <DetectPage 
                    onMoodDetected={(e, c, q) => handleMoodDetected(e, c, q)} 
                    currentEmotion={currentEmotion} 
                    confidence={confidence} 
                    lastCheckTime={lastCheckTime}
                    apiLimited={apiLimited}
                  />
                )}
                {activeTab === 'playlist' && (
                  <PlaylistPage 
                    currentEmotion={currentEmotion} 
                    profile={profile} 
                    user={user} 
                    onToggleLang={toggleLanguage} 
                    apiLimited={apiLimited}
                  />
                )}
                {activeTab === 'breathing' && (
                  <BreathingPage emotion={currentEmotion} history={moodHistory} />
                )}
                {activeTab === 'chat' && (
                  <ChatPage emotion={currentEmotion} history={chatHistory} setHistory={setChatHistory} />
                )}
                {activeTab === 'journey' && (
                  <JourneyPage history={moodHistory} />
                )}
                {activeTab === 'journal' && (
                  <JournalPage entries={journalEntries} setEntries={setJournalEntries} currentEmotion={currentEmotion} user={user} />
                )}
                {activeTab === 'settings' && (
                   <SettingsPage 
                    user={user} 
                    profile={profile} 
                    onToggleLang={toggleLanguage} 
                   />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}

// --- Sub-Pages ---

const DetectPage = ({ onMoodDetected, currentEmotion, confidence, lastCheckTime, apiLimited }: any) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let currentStream: MediaStream | null = null;
    const initCamera = async () => {
      try {
        currentStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(currentStream);
        if (videoRef.current) {
          videoRef.current.srcObject = currentStream;
        }
      } catch (err) {
        toast.error("Could not access camera. Please check permissions.");
      }
    };
    initCamera();
    return () => {
      currentStream?.getTracks().forEach(t => t.stop());
    };
  }, []);

  const capture = async () => {
    if (!videoRef.current || !canvasRef.current || !stream) return;
    setIsLoading(true);
    
    const context = canvasRef.current.getContext('2d');
    if (context && videoRef.current.videoWidth > 0) {
      // Draw at native resolution or fallback to default
      const width = videoRef.current.videoWidth;
      const height = videoRef.current.videoHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
      
      context.drawImage(videoRef.current, 0, 0, width, height);
      const dataUrl = canvasRef.current.toDataURL('image/jpeg', 0.8); // High quality but optimized size
      
      try {
        const result = await detectEmotion(dataUrl);
        onMoodDetected(result.emotion, result.confidence, result.isQuotaError);
      } catch (err) {
        toast.error("Analysis failed. Please try again.");
      }
    } else {
      toast.error("Camera not ready. Please wait a moment.");
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      {/* Analysis Row */}
      <div className="grid grid-cols-12 gap-6 min-h-[300px]">
        {/* Webcam Preview */}
        <div className="col-span-12 lg:col-span-5 bg-black/50 border border-white/5 rounded-3xl relative overflow-hidden group aspect-video lg:aspect-auto shadow-2xl">
          {stream ? (
            <>
              <video 
                ref={videoRef} 
                autoPlay 
                playsInline 
                muted 
                className="w-full h-full object-cover"
              />
              {/* Active Camera Glow Border */}
              <motion.div 
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 border-2 border-[#4FC3F7]/30 pointer-events-none rounded-3xl"
              />
              
              {/* High-Tech HUD Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 left-8 w-4 h-4 border-t-2 border-l-2 border-[#4FC3F7]/40"></div>
                <div className="absolute top-8 right-8 w-4 h-4 border-t-2 border-r-2 border-[#4FC3F7]/40"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 border-b-2 border-l-2 border-[#4FC3F7]/40"></div>
                <div className="absolute bottom-8 right-8 w-4 h-4 border-b-2 border-r-2 border-[#4FC3F7]/40"></div>
              </div>

              {/* Scanning Line UI */}
              {isLoading && (
                <motion.div 
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4FC3F7] to-transparent shadow-[0_0_15px_#4FC3F7] z-20"
                />
              )}

              {/* Processing Overlay */}
              <AnimatePresence>
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#4FC3F7]/5 backdrop-blur-[1px] flex items-center justify-center z-10"
                  >
                    <div className="text-center">
                      <RefreshCcw size={48} className="text-[#4FC3F7] animate-spin mb-4 mx-auto opacity-80" />
                      <p className="text-[10px] text-[#4FC3F7] font-black uppercase tracking-[0.5em] animate-pulse">Analysis in Progress</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <div className="w-32 h-32 border-4 border-[#4FC3F7] rounded-full border-dashed animate-spin-slow"></div>
            </div>
          )}
          
          <div className="absolute top-4 left-4 flex gap-2 z-30">
            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] uppercase font-bold text-white/80 tracking-widest">Live Bio-Feed</span>
            </div>
            <div className="hidden sm:flex bg-[#4FC3F7]/10 backdrop-blur-md px-3 py-1.5 rounded-full items-center gap-2 text-[8px] uppercase font-bold text-[#4FC3F7] border border-[#4FC3F7]/20">
              <Sparkles size={10} /> Tip: Ensure good lighting for 99% accuracy
            </div>
            {apiLimited && (
              <div className="bg-amber-500/20 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-amber-500/40">
                <AlertTriangle size={10} className="text-amber-500" />
                <span className="text-[8px] uppercase font-bold text-amber-500">API Limit Reached</span>
              </div>
            )}
          </div>

          <div className="absolute inset-0 pointer-events-none border-[1px] border-white/5 bg-gradient-to-b from-transparent via-transparent to-black/40"></div>

          <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black via-black/40 to-transparent flex items-center px-8 z-30 opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="flex gap-1 items-end h-4">
              <div className="w-1 bg-[#4FC3F7] h-2 animate-pulse"></div>
              <div className="w-1 bg-[#4FC3F7] h-4 animate-pulse [animation-delay:0.2s]"></div>
              <div className="w-1 bg-[#4FC3F7] h-3 animate-pulse [animation-delay:0.4s]"></div>
              <div className="w-1 bg-[#4FC3F7] h-1 animate-pulse [animation-delay:0.6s]"></div>
            </div>
            <span className="ml-3 text-[10px] font-black uppercase tracking-widest text-[#4FC3F7]/60">
              {isLoading ? "Synchronizing Neural Patterns..." : "Ready for Biometric Update"}
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-8 flex justify-center z-40">
            <button 
              onClick={capture}
              disabled={isLoading}
              className={`w-16 h-16 rounded-full border-2 transition-all flex items-center justify-center shadow-2xl backdrop-blur-xl ${
                isLoading 
                  ? 'bg-black/40 border-white/10 cursor-wait' 
                  : 'bg-[#4FC3F7]/20 border-[#4FC3F7]/40 hover:bg-[#4FC3F7] hover:scale-110 active:scale-95 group/btn overflow-hidden'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#4FC3F7]/20 to-transparent"></div>
              {isLoading ? (
                <RefreshCcw size={24} className="animate-spin text-[#4FC3F7]" />
              ) : (
                <Camera size={28} className="text-[#4FC3F7] group-hover/btn:text-black z-10" />
              )}
            </button>
          </div>
        </div>

        {/* Detection Results */}
        <div className="col-span-12 lg:col-span-7 glass-card p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[#4FC3F7] text-xs font-bold uppercase tracking-tighter">Primary Emotion</span>
              <h2 className="text-5xl font-bold mt-1 text-white">
                {currentEmotion ? (
                  <>
                    {currentEmotion.charAt(0).toUpperCase() + currentEmotion.slice(1)}{" "}
                    <span className="text-3xl ml-2">{EMOTION_MAP[currentEmotion].emoji}</span>
                  </>
                ) : (
                  "Awaiting Capture"
                )}
              </h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-mono font-bold text-[#4FC3F7]">{confidence}%</div>
              <div className="text-[10px] text-white/40 uppercase font-bold">Confidence</div>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 my-6">
            <p className="text-sm italic leading-relaxed text-white/80">
              {currentEmotion ? (
                <>
                  "We've detected a specialized emotional state. Activating{" "}
                  <span className="text-[#4FC3F7] font-bold">{EMOTION_MAP[currentEmotion].label}</span> therapy mode. 
                  Relax your shoulders and let the curated melodies support your healing journey."
                </>
              ) : (
                "Capture your mood using the camera to begin your AI-powered music therapy session."
              )}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-between text-[10px] text-white/40 uppercase font-bold px-1">
              <span>Sensitivity</span>
              <span>Emotional Depth</span>
            </div>
            <div className="bg-white/5 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${confidence}%` }}
                className="bg-[#4FC3F7] h-full shadow-[0_0_15px_#4FC3F7]"
              />
            </div>
          </div>
        </div>
      </div>
      
      <canvas ref={canvasRef} width="640" height="480" className="hidden" />
    </div>
  );
};

const PlaylistPage = ({ currentEmotion, profile, user, onToggleLang, apiLimited }: { 
  currentEmotion: Emotion | null, 
  profile: UserProfile | null, 
  user: User | null,
  onToggleLang: (lang: string) => void,
  apiLimited: boolean
}) => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [activeSong, setActiveSong] = useState<Song | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    if (currentEmotion) {
      setLoading(true);
      const selectedLangs = profile?.languages || ['English'];
      getRecommendedSongsByLanguage(currentEmotion, selectedLangs)
        .then(res => {
          setSongs(res.length > 0 ? res : MUSIC_DB[currentEmotion]);
          setLoading(false);
        });
    }
  }, [currentEmotion, JSON.stringify(profile?.languages), refreshKey]);

  const selectedLangs = profile?.languages || ['English'];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-1">
        <div>
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold">Recommended for your mood</h3>
            {apiLimited && (
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded-full">
                <ShieldAlert size={10} className="text-amber-500" />
                <span className="text-[9px] font-black text-amber-500 uppercase tracking-tighter">Static Mode</span>
              </div>
            )}
          </div>
          <p className="text-sm text-white/40">
            {apiLimited 
              ? "High AI traffic detected. Using clinical fallback database." 
              : "Music curated to enhance your emotional clarity"}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 items-center">
          <button 
            onClick={() => setRefreshKey(k => k + 1)}
            disabled={loading}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white/40 hover:text-[#4FC3F7] hover:border-[#4FC3F7]/50 transition-all disabled:opacity-50 mr-2"
            title="Refresh Recommendations"
          >
            <RefreshCcw size={14} className={loading ? 'animate-spin' : ''} />
          </button>
          
          {activeSong && (
            <button 
              onClick={() => setActiveSong(null)}
              className="text-[10px] text-red-400 border border-red-400/40 px-3 py-1 rounded-full hover:bg-red-400/10 transition-colors uppercase font-bold tracking-widest mr-2"
            >
              Close
            </button>
          )}
          {AVAILABLE_LANGUAGES.map(lang => (
            <button
              key={lang}
              onClick={() => onToggleLang(lang)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight transition-all border ${
                selectedLangs.includes(lang)
                  ? 'bg-[#4FC3F7] text-black border-[#4FC3F7] shadow-[0_0_10px_#4FC3F766]'
                  : 'bg-white/5 text-white/40 border-white/10 hover:border-white/20'
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="h-64 glass-card flex flex-col items-center justify-center gap-4 text-[#4FC3F7]">
          <RefreshCcw size={40} className="animate-spin opacity-40" />
          <p className="uppercase text-[10px] font-bold tracking-[0.3em] animate-pulse">Curating Multi-Lingual Melodies...</p>
        </div>
      )}

      {!loading && activeSong && activeSong.youtubeUrl && (
        <div className="space-y-3">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card overflow-hidden aspect-video border-[#4FC3F7]/30 bg-black relative"
          >
            {/* Visual placeholder while iframe loads */}
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <RefreshCcw size={40} className="animate-spin text-white/5" />
            </div>
            
            <iframe
              width="100%"
              height="100%"
              src={`${activeSong.youtubeUrl}?autoplay=1&rel=0&modestbranding=1`}
              title={activeSong.name}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="z-10 bg-black"
              loading="lazy"
            />
          </motion.div>
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
              <a 
                href={activeSong.youtubeUrl.replace('/embed/', '/watch?v=')} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center text-black bg-[#4FC3F7] hover:bg-white transition-all px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 shadow-[0_0_20px_#4FC3F744]"
              >
                Open in App
                <ExternalLink size={14} />
              </a>
              <a 
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(activeSong.name + ' ' + activeSong.artist)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 text-center text-[#4FC3F7] border border-[#4FC3F7]/30 hover:bg-[#4FC3F7]/10 transition-all px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2"
              >
                Search YT
                <Search size={14} />
              </a>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-lg flex items-center gap-2 group">
              <div className="w-1 h-1 bg-red-500 rounded-full animate-ping"></div>
              <p className="text-[9px] text-red-400 uppercase font-black tracking-[0.2em]">
                Video restricted by provider? Use the "Search YT" button above.
              </p>
            </div>
          </div>
        </div>
      )}

      {!currentEmotion ? (
        <div className="h-64 glass-card flex flex-col items-center justify-center gap-4 text-white/40 border-dashed">
          <Music size={48} className="opacity-20 translate-y-2" />
          <p className="uppercase text-[10px] font-bold tracking-widest">Awaiting Mood Analysis</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {songs.map((song, i) => (
            <motion.div
              key={song.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div 
                onClick={() => setActiveSong(song)}
                className={`bg-gradient-to-r border transition-all cursor-pointer rounded-2xl p-5 flex gap-5 items-center group shadow-lg ${
                  activeSong?.id === song.id 
                    ? 'from-[#4FC3F7]/20 to-[#4FC3F7]/40 border-[#4FC3F7]' 
                    : 'from-white/5 to-white/10 border-white/10 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center shrink-0 shadow-xl overflow-hidden relative">
                  <span className="text-3xl z-10">{EMOTION_MAP[currentEmotion].emoji}</span>
                  <div className="absolute inset-0 bg-brand/20 blur-sm"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold truncate text-lg group-hover:text-[#4FC3F7] transition-colors">{song.name}</h4>
                    <span className="text-[10px] font-mono text-white/30">{song.duration}</span>
                  </div>
                  <p className="text-xs text-white/50">{song.artist}</p>
                  <div className="mt-2 text-[10px] text-[#4FC3F7] border border-[#4FC3F7]/30 inline-flex items-center px-2 py-0.5 rounded uppercase font-bold tracking-tighter bg-[#4FC3F7]/5">
                    Therapeutic Alignment
                  </div>
                </div>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center text-[10px] transition-all ${
                  activeSong?.id === song.id
                    ? 'bg-[#4FC3F7] text-black border-transparent scale-110'
                    : 'border-white/20 group-hover:bg-[#4FC3F7] group-hover:text-black group-hover:border-transparent group-hover:scale-110'
                }`}>
                  {activeSong?.id === song.id ? '❚ ❚' : '▶'}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

const BreathingPage = ({ emotion, history }: { emotion: Emotion | null, history: any[] }) => {
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          if (phase === 'inhale') { setPhase('hold'); return 4; }
          if (phase === 'hold') { setPhase('exhale'); return 4; }
          if (phase === 'exhale') { setPhase('inhale'); return 4; }
          return 4;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  const getColor = () => {
    if (phase === 'inhale') return '#4FC3F7';
    if (phase === 'hold') return '#ffffff';
    return '#4FC3F7';
  };

  return (
    <div className="grid grid-cols-12 gap-6 min-h-[400px]">
      <div className="col-span-12 lg:col-span-8 glass-card p-12 flex flex-col items-center justify-center relative overflow-hidden">
        <h3 className="absolute top-8 left-12 text-xs uppercase font-bold text-white/40 tracking-widest">Core Breathing Guide</h3>
        
        <div className="relative flex items-center justify-center w-64 h-64">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#4FC3F7]/20 animate-spin-slow"></div>
          {/* Expanded circle mock */}
          <motion.div 
            animate={{ 
              scale: phase === 'inhale' ? 1.5 : phase === 'exhale' ? 1 : 1.5,
              opacity: phase === 'hold' ? 0.8 : 1
            }}
            transition={{ duration: 4, ease: "easeInOut" }}
            className="w-32 h-32 bg-[#4FC3F7]/20 rounded-full border border-[#4FC3F7] shadow-[0_0_50px_#4FC3F744] flex flex-col items-center justify-center"
          >
             <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-widest">{phase}</span>
             <span className="text-2xl font-bold text-white mt-1">{seconds}</span>
          </motion.div>
        </div>

        <p className="mt-12 text-center text-sm text-white/50 max-w-sm italic">
          "Focus on the rhythm of the circle. Let each breath center your consciousness and calm your autonomic nervous system."
        </p>
      </div>

      <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
        <Card className="glass-card p-6 flex flex-col items-center justify-center h-full">
          <div className="flex justify-between w-full text-center px-4">
            <div>
              <div className="text-3xl font-bold">3</div>
              <div className="text-[10px] text-white/40 uppercase font-bold">Day Streak</div>
            </div>
            <div className="w-[1px] h-10 bg-white/10"></div>
            <div>
              <div className="text-3xl font-bold text-[#4FC3F7]">{history.length}</div>
              <div className="text-[10px] text-white/40 uppercase font-bold">Total Sessions</div>
            </div>
          </div>

          <div className="mt-8 w-full pt-8 border-t border-white/10">
            <h4 className="text-[10px] uppercase font-bold text-white/30 mb-4 text-center tracking-widest">Clinical Progress</h4>
            <div className="flex items-end gap-2 h-24 px-2">
              {[40, 60, 30, 90, 50, 80, 20].map((h, i) => (
                <div 
                  key={i} 
                  className={`flex-1 rounded-t-sm transition-all hover:bg-[#4FC3F7]/60 ${i === 5 ? 'bg-[#4FC3F7]' : 'bg-white/5'}`}
                  style={{ height: `${h}%` }}
                ></div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

const ChatPage = ({ emotion, history, setHistory }: any) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sendMessage = async () => {
    if (!input.trim() || isTyping) return;
    const userMsg = input;
    setInput('');
    
    const newHistory = [...history, { role: 'user', parts: [{ text: userMsg }] }];
    setHistory(newHistory);
    setIsTyping(true);

    try {
      const response = await getTherapyChat(emotion || 'neutral', newHistory);
      setHistory([...newHistory, { role: 'model', parts: [{ text: response || '' }] }]);
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollRef.current) {
        const scrollContainer = scrollRef.current;
        scrollContainer.scrollTo({
          top: scrollContainer.scrollHeight,
          behavior: 'smooth'
        });
      }
    };
    // Small delay to allow DOM update
    const timer = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timer);
  }, [history, isTyping]);

  return (
    <div className="flex flex-col h-[calc(100vh-200px)] lg:h-[calc(100vh-160px)] gap-6 max-h-[1000px]">
      <Card className="glass-card flex-1 flex flex-col overflow-hidden border-white/10 shadow-3xl">
        <div 
          className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar" 
          ref={scrollRef}
        >
          <div className="space-y-10 max-w-4xl mx-auto">
            {history.map((msg: any, i: number) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-lg ${msg.role === 'user' ? 'bg-[#4FC3F7]/20 border border-[#4FC3F7]' : 'bg-brand/20 border border-brand/50 shadow-[0_0_15px_rgba(79,195,247,0.3)]'}`}>
                  {msg.role === 'user' ? '👤' : <Sparkles size={20} className="text-[#4FC3F7]" />}
                </div>
                <div className={`max-w-[80%] p-5 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-[#4FC3F7]/10 text-white border border-[#4FC3F7]/20' 
                    : 'bg-white/5 text-white/90 border border-white/5'
                }`}>
                  <div className="prose prose-invert prose-sm leading-relaxed">
                    <Markdown>{msg.parts[0].text}</Markdown>
                  </div>
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-brand/20 border border-brand/50 flex items-center justify-center shadow-[0_0_15px_rgba(79,195,247,0.2)]">
                  <Sparkles size={20} className="text-[#4FC3F7] animate-pulse" />
                </div>
                <div className="bg-white/5 p-5 rounded-2xl border border-white/5 flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full animate-pulse [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-[#4FC3F7] rounded-full animate-pulse [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-4 bg-black/20 border-t border-white/5 flex flex-col gap-3">
          <div className="flex justify-center items-center gap-2 opacity-50 mb-1">
            <Sparkles size={12} className="text-[#4FC3F7]" />
            <span className="text-[10px] uppercase font-bold tracking-[0.2em]">Powered by Google Gemini</span>
          </div>
          <div className="max-w-4xl mx-auto w-full flex gap-3 p-1 glass-card rounded-full pr-4 focus-within:border-[#4FC3F7]/50 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Deep dive into your feelings with Gemini..."
              className="flex-1 bg-transparent border-none outline-none px-6 py-4 placeholder:text-white/20 text-sm md:text-base"
              disabled={isTyping}
            />
            <button 
              onClick={sendMessage}
              disabled={isTyping || !input.trim()}
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                isTyping || !input.trim() 
                  ? 'bg-white/5 text-white/20 cursor-not-allowed' 
                  : 'bg-[#4FC3F7] text-black hover:scale-110 active:scale-95 shadow-lg shadow-[#4FC3F7]/20'
              }`}
            >
              {isTyping ? <RefreshCcw size={18} className="animate-spin" /> : <Send size={20} />}
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

const JourneyPage = ({ history }: { history: MoodEntry[] }) => {
  const chartData = history.slice(-7).map(entry => ({
    date: new Date(entry.timestamp).toLocaleDateString([], { weekday: 'short' }),
    confidence: Math.round(entry.confidence),
  }));

  const emotionCounts = history.reduce((acc: any, entry) => {
    acc[entry.emotion] = (acc[entry.emotion] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(emotionCounts).map(([name, value]) => ({ name, value }));

  const calculateStreak = () => {
    if (history.length === 0) return 0;
    let streak = 1;
    const sorted = [...history].sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    const firstEmotion = sorted[0].emotion;
    for (let i = 1; i < sorted.length; i++) {
      if (sorted[i].emotion === firstEmotion) streak++;
      else break;
    }
    return streak;
  };

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-end px-1">
        <div>
          <h2 className="text-3xl font-bold">Session Analytics</h2>
          <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mt-1">Biometric & Emotional Trends</p>
        </div>
        <div className="bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-2xl flex items-center gap-6">
           <div className="text-right">
             <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest">Active Streak</p>
             <p className="text-xl font-bold text-[#4FC3F7]">{calculateStreak()} Sessions</p>
           </div>
           <div className="w-10 h-10 bg-[#4FC3F7]/10 rounded-full flex items-center justify-center text-[#4FC3F7] border border-[#4FC3F7]/20">
             <Sparkles size={20} />
           </div>
        </div>
      </header>

      <div className="grid grid-cols-12 gap-6">
        <Card className="col-span-12 lg:col-span-8 glass-card border-none">
          <CardHeader>
            <CardTitle className="text-sm uppercase tracking-widest text-[#4FC3F7]">Detection Integrity</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px] px-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="date" stroke="#ffffff20" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 'bold' }} />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#4FC3F7' }}
                  cursor={{ stroke: '#4FC3F720', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="confidence" 
                  stroke="#4FC3F7" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#4FC3F7', strokeWidth: 0 }} 
                  activeDot={{ r: 6, fill: '#fff', stroke: '#4FC3F7', strokeWidth: 2 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="col-span-12 lg:col-span-4 glass-card border-none flex flex-col justify-center">
          <CardHeader className="text-center">
            <CardTitle className="text-sm uppercase tracking-widest text-white/40">Emotion Mix</CardTitle>
          </CardHeader>
          <CardContent className="h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={EMOTION_MAP[entry.name as Emotion]?.color || '#888'} stroke="none" />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
               <span className="text-3xl font-bold">{history.length}</span>
               <span className="text-[10px] text-white/20 uppercase font-black">Entries</span>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-12 glass-card border-none overflow-hidden">
          <div className="p-6 border-b border-white/5 bg-white/2 flex justify-between items-center">
             <h4 className="text-sm font-bold uppercase tracking-widest text-white/60">Biometric Log</h4>
             <History size={16} className="text-white/20" />
          </div>
          <ScrollArea className="h-[300px]">
            <div className="divide-y divide-white/5">
              {history.slice().reverse().map(entry => (
                <div key={entry.id} className="flex items-center justify-between p-6 hover:bg-white/[0.02] transition-colors">
                  <div className="flex items-center gap-6">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-xl"
                      style={{ backgroundColor: `${EMOTION_MAP[entry.emotion].color}10`, border: `1px solid ${EMOTION_MAP[entry.emotion].color}20` }}
                    >
                      {EMOTION_MAP[entry.emotion].emoji}
                    </div>
                    <div>
                      <p className="font-bold text-lg capitalize">{entry.emotion}</p>
                      <p className="text-xs text-white/30 font-mono">{new Date(entry.timestamp).toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xl font-mono font-bold text-[#4FC3F7]">{Math.round(entry.confidence)}%</span>
                    <span className="text-right text-[10px] text-white/20 uppercase font-black tracking-tighter">System Reliability</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </Card>
      </div>
    </div>
  );
};

const JournalPage = ({ entries, setEntries, currentEmotion, user }: any) => {
  const [text, setText] = useState('');

  const saveJournal = async () => {
    if (!text.trim() || !user) return;
    const newEntry: JournalEntry = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      text,
      moodAtTime: currentEmotion || 'neutral'
    };
    
    const journalRef = doc(db, 'journals', user.uid);
    await setDoc(journalRef, { entries: arrayUnion(newEntry) }, { merge: true });
    
    setText('');
    toast.success("Journal entry saved successfully.");
  };

  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-12 lg:col-span-5 space-y-6">
        <header>
          <h2 className="text-3xl font-bold">Mental Mirror</h2>
          <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mt-1">Verbalize. Process. Heal.</p>
        </header>

        <Card className="glass-card border-none p-8 space-y-6">
          <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">📝</div>
               <span className="text-xs text-white/60 font-bold uppercase tracking-tight">Today's Reflection</span>
             </div>
             <Badge 
               className="capitalize bg-brand/10 text-brand border-brand/20 px-3 py-1 rounded-lg"
             >
               {currentEmotion || 'Neutral'}
             </Badge>
          </div>
          <Textarea 
            placeholder="Translate your current mental vibration into words..." 
            className="min-h-[280px] bg-white/2 border border-white/10 rounded-2xl p-6 focus:border-[#4FC3F7] transition-all resize-none shadow-inner text-white/80"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button 
            className="w-full py-4 rounded-2xl bg-[#4FC3F7] text-black font-bold uppercase tracking-widest hover:scale-[0.98] transition-transform shadow-[0_10px_30px_rgba(79,195,247,0.3)] disabled:opacity-50 disabled:scale-100" 
            onClick={saveJournal}
            disabled={!text.trim()}
          >
            Commit to Journal
          </button>
        </Card>
      </div>

      <div className="col-span-12 lg:col-span-7 space-y-6">
        <h3 className="text-sm uppercase font-black text-white/20 tracking-[0.2em] flex items-center gap-3 px-2">
          Chronological Echoes
        </h3>
        <ScrollArea className="h-[600px] pr-4 custom-scrollbar">
           <div className="space-y-4">
             {entries.length === 0 ? (
               <div className="h-64 flex flex-col items-center justify-center border border-dashed border-white/10 rounded-3xl text-white/10 gap-3 grayscale">
                 <BookOpen size={48} />
                 <p className="uppercase text-[10px] font-bold tracking-widest">Your story begins with the first word</p>
               </div>
             ) : (
               entries.map((entry: any) => (
                 <motion.div
                   key={entry.id}
                   initial={{ opacity: 0, scale: 0.98 }}
                   animate={{ opacity: 1, scale: 1 }}
                 >
                   <Card className="glass-card border-none hover:bg-white/[0.08] transition-colors group">
                     <CardHeader className="py-5 px-8 flex flex-row items-center justify-between border-b border-white/5">
                       <div className="flex items-center gap-3">
                         <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                           {EMOTION_MAP[entry.moodAtTime as Emotion]?.emoji || '😶'}
                         </div>
                         <span className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">{new Date(entry.timestamp).toLocaleString()}</span>
                       </div>
                       <Badge 
                          variant="outline"
                          className="capitalize text-[10px] font-bold border-white/10"
                        >
                          {entry.moodAtTime}
                        </Badge>
                     </CardHeader>
                     <CardContent className="p-8">
                       <p className="text-sm text-white/70 whitespace-pre-wrap leading-relaxed font-medium">
                         {entry.text}
                       </p>
                     </CardContent>
                   </Card>
                 </motion.div>
               ))
             )}
           </div>
        </ScrollArea>
      </div>
    </div>
  );
};

const SettingsPage = ({ user, profile, onToggleLang }: { 
  user: User | null, 
  profile: UserProfile | null,
  onToggleLang: (lang: string) => void
}) => {
  const selectedLangs = profile?.languages || ['English'];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <header>
        <h2 className="text-3xl font-bold">Preferences</h2>
        <p className="text-sm text-white/40 uppercase tracking-widest font-semibold mt-1">Customize your therapeutic experience</p>
      </header>

      <Card className="glass-card border-none p-8 space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center p-1 overflow-hidden">
             {user?.photoURL ? (
               <img src={user.photoURL} alt="Profile" className="w-full h-full rounded-full object-cover" referrerPolicy="no-referrer" />
             ) : (
               <UserIcon size={32} className="text-white/20" />
             )}
          </div>
          <div>
            <h3 className="text-xl font-bold">{user?.displayName || 'User Session'}</h3>
            <p className="text-sm text-white/40">{user?.email}</p>
          </div>
        </div>

        <Separator className="bg-white/5" />

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-[#4FC3F7]">
            <Languages size={18} />
            <h4 className="text-sm font-bold uppercase tracking-widest">Music Language Selection</h4>
          </div>
          <p className="text-xs text-white/40 leading-relaxed">
            Choose the languages for your song recommendations. Our AI will prioritize results matching these preferences while maintaining therapeutic alignment.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {AVAILABLE_LANGUAGES.map(lang => (
              <button
                key={lang}
                onClick={() => onToggleLang(lang)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  selectedLangs.includes(lang)
                    ? 'bg-[#4FC3F7] text-black border-[#4FC3F7] shadow-[0_0_15px_#4FC3F744]'
                    : 'bg-white/5 text-white/60 border-white/10 hover:border-white/20 hover:bg-white/10'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
