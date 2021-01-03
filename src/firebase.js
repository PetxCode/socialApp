import firebase from "firebase";
import "firebase/firestore";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyBXN5DJmvyZJ_9Houwnf8hoaAw8cZrIJyc",
  authDomain: "aj-social.firebaseapp.com",
  projectId: "aj-social",
  storageBucket: "aj-social.appspot.com",
  messagingSenderId: "400855669340",
  appId: "1:400855669340:web:764e7f20ac1d124c9c2499",
});

const db = app.firestore();
const auth = app.auth();

export { db, auth };
