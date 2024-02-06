// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBouYzu2anpZITAD-CpLXxTacJV0zdZJrA",
  authDomain: "meet-your-friend-72e48.firebaseapp.com",
  databaseURL: "https://meet-your-friend-72e48-default-rtdb.firebaseio.com",
  projectId: "meet-your-friend-72e48",
  storageBucket: "meet-your-friend-72e48.appspot.com",
  messagingSenderId: "33381454366",
  appId: "1:33381454366:web:9cc3146f7085e911dc540f",
  measurementId: "G-GTEDBDXCFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)