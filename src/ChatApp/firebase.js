import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAW4AwRZ9SA05W_HJnbCQx3TPaeXxTkwM4",
  authDomain: "chatapp-73988.firebaseapp.com",
  projectId: "chatapp-73988",
  storageBucket: "chatapp-73988.firebasestorage.app",
  messagingSenderId: "128808665076",
  appId: "1:128808665076:web:8e8c6d1caf0f62ba9a43a1",
  measurementId: "G-NLGR0CQ819"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
