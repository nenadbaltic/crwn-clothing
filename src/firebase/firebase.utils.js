import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBloQGAC-piPaKGXItaNEv9BFbNfWx-k8k",
  authDomain: "crwn-db-6284c.firebaseapp.com",
  databaseURL: "https://crwn-db-6284c.firebaseio.com",
  projectId: "crwn-db-6284c",
  storageBucket: "crwn-db-6284c.appspot.com",
  messagingSenderId: "701766352381",
  appId: "1:701766352381:web:dcfa8e2fd4f1e48d6b6d94",
  measurementId: "G-W0WJK7EV5B",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
