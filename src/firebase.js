// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAht8qivkmBt1TufiZEPseWbvBWYjwVolY",
  authDomain: "scrappy-af166.firebaseapp.com",
  projectId: "scrappy-af166",
  storageBucket: "scrappy-af166.appspot.com",
  messagingSenderId: "974989600546",
  appId: "1:974989600546:web:9910d4c8879564cbec277b",
  measurementId: "G-RLZWJ4H4BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);