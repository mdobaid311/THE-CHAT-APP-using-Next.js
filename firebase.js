import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAKiJ-S76GHn-zWdCCi51CY6l585Cd4D-E",
    authDomain: "the-chat-app-81b04.firebaseapp.com",
    projectId: "the-chat-app-81b04",
    storageBucket: "the-chat-app-81b04.appspot.com",
    messagingSenderId: "874196001780",
    appId: "1:874196001780:web:6a6ecabf97c1d93a5e0fa1",
};

// Initialize Firebase
const firebaseApp  = !firebase.apps.length ?
    firebase.initializeApp(firebaseConfig) :
    firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db,provider };