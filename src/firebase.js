// src/firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyDirTGwUb0cbLy5rVax5zAd0njOiZRQqF8",
  authDomain: "netflix-clone-5ffe5.firebaseapp.com",
  projectId: "netflix-clone-5ffe5",
  storageBucket: "netflix-clone-5ffe5.firebasestorage.app",
  messagingSenderId: "118807595374",
  appId: "1:118807595374:web:c401ef61e489609167197f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
