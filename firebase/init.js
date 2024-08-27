import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDtWLQdnDeLhz11gtPrcd4-1S-I64L0bf8",
  authDomain: "exp-store-8eb30.firebaseapp.com",
  projectId: "exp-store-8eb30",
  storageBucket: "exp-store-8eb30.appspot.com",
  messagingSenderId: "63196376387",
  appId: "1:63196376387:web:e24d3dcbe833fccd46d3f6",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
