import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDKyaUs2ZyTFXgaG-EkSzEsoVPeqyaBof4",
    authDomain: "linkedin-clone-5d523.firebaseapp.com",
    projectId: "linkedin-clone-5d523",
    storageBucket: "linkedin-clone-5d523.appspot.com",
    messagingSenderId: "343713217647",
    appId: "1:343713217647:web:cd3b4b52a82f8b7f9de19a"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };