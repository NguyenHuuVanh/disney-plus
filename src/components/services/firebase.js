import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
    apiKey: 'AIzaSyAOVNBfsq63Kw28dsBJSuPNxgYUAEauOeE',
    authDomain: 'disneyplus-11249.firebaseapp.com',
    projectId: 'disneyplus-11249',
    storageBucket: 'disneyplus-11249.appspot.com',
    messagingSenderId: '54355879990',
    appId: '1:54355879990:web:f518adb8ca1647dd531097',
    measurementId: 'G-4L84HNVHMF',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
// export { auth, provider, storage };
// export default db;
export { auth, provider, db, storage };
