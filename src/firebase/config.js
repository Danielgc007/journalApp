// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Wpnp0oqQJTu_p2491ZdMKSS2rigHjBY",
  authDomain: "react-curso-4db38.firebaseapp.com",
  projectId: "react-curso-4db38",
  storageBucket: "react-curso-4db38.appspot.com",
  messagingSenderId: "384690851239",
  appId: "1:384690851239:web:c8150a3e7913d6e9d23a82"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );