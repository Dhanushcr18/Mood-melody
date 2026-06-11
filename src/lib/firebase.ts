import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, User as FirebaseUser } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId); 
export const googleProvider = new GoogleAuthProvider();

googleProvider.addScope('profile');
googleProvider.addScope('email');

// Demo user for development
export const DEMO_USER: Partial<FirebaseUser> = {
  uid: 'demo-user-12345',
  email: 'demo@moodmelody.local',
  displayName: 'Demo User',
  isAnonymous: true,
  metadata: {
    createdAt: new Date().toISOString(),
  },
} as any;

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Google sign-in successful:", result.user.email);
    return result.user;
  } catch (error: any) {
    console.error("Error signing in with Google:", error.code, error.message);
    if (error.code === 'auth/popup-blocked') {
      throw new Error('Pop-up was blocked. Please enable pop-ups for this site.');
    } else if (error.code === 'auth/popup-closed-by-user') {
      throw new Error('Sign-in was cancelled.');
    } else if (error.code === 'auth/unauthorized-domain') {
      throw new Error('This domain is not authorized. Use Test Mode to continue development.');
    }
    throw error;
  }
};

// Demo mode for development
export const signInAsDemo = async () => {
  console.log("Demo sign-in: Using local development mode");
  localStorage.setItem('demo_mode', 'true');
  localStorage.setItem('demo_user_id', DEMO_USER.uid || '');
  return DEMO_USER as FirebaseUser;
};

export const isDemoModeEnabled = () => localStorage.getItem('demo_mode') === 'true';

export const getDemoUser = () => DEMO_USER as FirebaseUser;
