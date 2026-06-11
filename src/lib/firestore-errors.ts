import { auth } from './firebase';

export interface FirestoreErrorInfo {
  error: string;
  operationType: 'create' | 'update' | 'delete' | 'list' | 'get' | 'write';
  path: string | null;
  authInfo: {
    userId: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerInfo: { providerId: string; displayName: string; email: string; }[];
  }
}

export function handleFirestoreError(error: any, operationType: any, path: string | null): void {
  const user = auth.currentUser;
  const isDemoMode = localStorage.getItem('demo_mode') === 'true';
  
  const errorInfo: FirestoreErrorInfo = {
    error: error.message || String(error),
    operationType,
    path,
    authInfo: {
      userId: user?.uid || 'anonymous',
      email: user?.email || 'none',
      emailVerified: user?.emailVerified || false,
      isAnonymous: user?.isAnonymous || true,
      providerInfo: user?.providerData.map(p => ({
        providerId: p.providerId,
        displayName: p.displayName || '',
        email: p.email || ''
      })) || []
    }
  };

  const errorString = JSON.stringify(errorInfo, null, 2);
  console.warn("Firestore operation failed (demo mode):", errorString);
  
  // In demo mode, suppress Firestore errors since we don't have a real database
  if (isDemoMode) {
    console.log("Running in demo mode - Firestore errors are expected and ignored");
    return;
  }
  
  // If it's a critical permission error, log it
  if (error.code === 'permission-denied' || error.message?.includes('insufficient permissions')) {
     console.error("Permission error:", errorString);
  }
}
