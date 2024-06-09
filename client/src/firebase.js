// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-realestate-c8314.firebaseapp.com",
  projectId: "mern-realestate-c8314",
  storageBucket: "mern-realestate-c8314.appspot.com",
  messagingSenderId: "195432457604",
  appId: "1:195432457604:web:cd3ec97dbb5e7733f7e9d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);