import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyDLH0LkBnAOib7WNEPEHCMn9i8EOpwtmik",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "my-portfolio-message-c47e8.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "my-portfolio-message-c47e8",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "my-portfolio-message-c47e8.firebasestorage.app",
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "649370603578",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:649370603578:web:2e2f7a0ea8080d232de503",
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-QT4KFG1ZRM",
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { db };