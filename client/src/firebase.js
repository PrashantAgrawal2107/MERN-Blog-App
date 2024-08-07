// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-pk.firebaseapp.com",
  projectId: "mern-blog-app-pk",
  storageBucket: "mern-blog-app-pk.appspot.com",
  messagingSenderId: "759381612025",
  appId: "1:759381612025:web:d8ba51adae1ed15a545928"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

