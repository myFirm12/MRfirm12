// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNriSBWwhD0hcVof41T3hopLb2Es0Z91s",
  authDomain: "firm-367d8.firebaseapp.com",
  projectId: "firm-367d8",
  storageBucket: "firm-367d8.appspot.com",
  messagingSenderId: "417508952929",
  appId: "1:417508952929:web:a82699b165fb6f25afd320",
  measurementId: "G-VZVMTVQZSF",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
