// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNejzgFw0LN8sqKY4ndP_1T8ku_6cPNAY",
  authDomain: "ai-trip-planner-9c95b.firebaseapp.com",
  projectId: "ai-trip-planner-9c95b",
  storageBucket: "ai-trip-planner-9c95b.firebasestorage.app",
  messagingSenderId: "587440531137",
  appId: "1:587440531137:web:510ca4aa9c2e5719405640",
  measurementId: "G-9FDMBMC0MW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
