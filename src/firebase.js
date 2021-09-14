// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtZC4j8ZnGRRh-RNJhdb-9LDMZL1UcbAI",
    authDomain: "portafolio-miguel-ec613.firebaseapp.com",
    projectId: "portafolio-miguel-ec613",
    storageBucket: "portafolio-miguel-ec613.appspot.com",
    messagingSenderId: "784016253542",
    appId: "1:784016253542:web:37e2f5462ae544a98303a7",
    measurementId: "G-DFF9QKG50L"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();