import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA3fb_vEmADvDpXIcQkg68_gxbTpjFiclw",
  authDomain: "facebook-clone-46e5e.firebaseapp.com",
  projectId: "facebook-clone-46e5e",
  storageBucket: "facebook-clone-46e5e.appspot.com",
  messagingSenderId: "710225934821",
  appId: "1:710225934821:web:78689f1f6b15919b58570c",
  measurementId: "G-DVQ089HGB4"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider};
  export default db;