import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0X5raYiiLNhiMo2YeXoYxJC_IXQSNHaw",
  authDomain: "chatapp-f565e.firebaseapp.com",
  projectId: "chatapp-f565e",
  storageBucket: "chatapp-f565e.firebasestorage.app",
  messagingSenderId: "744284151450",
  appId: "1:744284151450:web:dd74e3df0141c3ed174923",
  measurementId: "G-8FTPK4D165"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
