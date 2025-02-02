// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKnFEZ0_AYwZSN058B1VGEfMA8PKSqcY4",
  authDomain: "netflix-gpt-c8d33.firebaseapp.com",
  projectId: "netflix-gpt-c8d33",
  storageBucket: "netflix-gpt-c8d33.firebasestorage.app",
  messagingSenderId: "200440006452",
  appId: "1:200440006452:web:833638b22426954c784761",
  measurementId: "G-XRHT3JY2SG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
