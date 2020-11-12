import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

import { createContext } from "react";

var firebaseConfig = {
  apiKey: "AIzaSyBckCNOGSRAuYKPzc5UBxXp4O6OQAmO7ZU",
  authDomain: "star-hotel-3357b.firebaseapp.com",
  databaseURL: "https://star-hotel-3357b.firebaseio.com",
  projectId: "star-hotel-3357b",
  storageBucket: "star-hotel-3357b.appspot.com",
  messagingSenderId: "591381381961",
  appId: "1:591381381961:web:fb0fbe52fe38ba0f599098",
};
// Initialize Firebase

export const firebaseStore = firebase.initializeApp(firebaseConfig);

//Database;

export const db = firebaseStore.firestore();
export const auth = firebaseStore.auth();
export const FirebaseContext = createContext(null);

export default {
  firebaseConfig,
};
