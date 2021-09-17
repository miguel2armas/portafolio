
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    //code config is here

};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();