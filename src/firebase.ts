import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_GOOGLE_API_KEY,
  authDomain: import.meta.env.VITE_APP_GOOGLE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_APP_GOOGLE_BASE_URL,
  projectId: import.meta.env.VITE_APP_GOOGLE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_GOOGLE_STORAGE_BUCKET_ID,
  messagingSenderId: import.meta.env.VITE_APP_GOOGLE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_GOOGLE_APP_ID,
  measurementId: import.meta.env.VITE_APP_GOOGLE_MEASURE_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
