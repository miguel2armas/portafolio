import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    projectId: "portafolio-miguel-ec613"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();