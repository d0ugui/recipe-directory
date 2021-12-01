import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPeTolzNv5iDR9cucOVNgZXAw0sMtP_U4",
  authDomain: "cooking-ninja-site-cc1bd.firebaseapp.com",
  projectId: "cooking-ninja-site-cc1bd",
  storageBucket: "cooking-ninja-site-cc1bd.appspot.com",
  messagingSenderId: "963152961483",
  appId: "1:963152961483:web:fae8233f63d2255b1d604e"
};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore }