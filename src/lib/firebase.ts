import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, (firebaseConfig as any).firestoreDatabaseId); 
export const googleProvider = new GoogleAuthProvider();

// Connection test
import { doc, getDocFromCache, getDocFromServer } from 'firebase/firestore';

async function testConnection() {
  try {
    // Attempt a zero-cost server check
    await getDocFromServer(doc(db, '_health', 'check'));
    console.log("Firestore connection established.");
  } catch (error: any) {
    if (error.message?.includes('client is offline') || error.code === 'unavailable') {
      console.error("Firebase connection failed: The client is offline or the database is not yet provisioned. Please check your Firebase Console.");
    }
  }
}
testConnection();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google", error);
    throw error;
  }
};
