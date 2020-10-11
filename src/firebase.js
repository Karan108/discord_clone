import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAatVHXI-cAXfDE3Gsn1oggwYsm-QF7trE",
    authDomain: "discord-clone-9ac13.firebaseapp.com",
    databaseURL: "https://discord-clone-9ac13.firebaseio.com",
    projectId: "discord-clone-9ac13",
    storageBucket: "discord-clone-9ac13.appspot.com",
    messagingSenderId: "616688933846",
    appId: "1:616688933846:web:826a362a83833c141fa277"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;