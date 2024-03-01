// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxlsIwEnzYBHnwZwNeZG-GOcTEpRz9Ayo",
  authDomain: "uthrume-6e3d6.firebaseapp.com",
  projectId: "uthrume-6e3d6",
  storageBucket: "uthrume-6e3d6.appspot.com",
  messagingSenderId: "502425202809",
  appId: "1:502425202809:web:fdb8c2b00b78f571e364a8",
  measurementId: "G-B7LBMMHV7J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);