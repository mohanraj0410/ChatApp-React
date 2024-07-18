import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbM70Ab5TpKzsrTm54dP2oJrjfsfLXYTA",
  authDomain: "chat-application-997bf.firebaseapp.com",
  projectId: "chat-application-997bf",
  storageBucket: "chat-application-997bf.appspot.com",
  messagingSenderId: "265699883557",
  appId: "1:265699883557:web:e5bd42257dc5ea02b05dcc",
  measurementId: "G-QMPBX8W9E7"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
