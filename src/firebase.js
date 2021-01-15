import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXUjUyKzkEENVprMYJ-SuD12f3ykfyLIs",
    authDomain: "clone-42a38.firebaseapp.com",
    projectId: "clone-42a38",
    storageBucket: "clone-42a38.appspot.com",
    messagingSenderId: "595002066986",
    appId: "1:595002066986:web:8ae5ba02ade12c26809b53",
    measurementId: "G-QTSYN8SBM2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;