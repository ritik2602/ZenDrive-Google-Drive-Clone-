import firebase from "firebase"
const firebaseConfig = {
    apiKey: "AIzaSyAWXnap5sy6pl1_rfT1B88WSczQSH9B2Lw",
    authDomain: "zendrive-72e0c.firebaseapp.com",
    projectId: "zendrive-72e0c",
    storageBucket: "zendrive-72e0c.appspot.com",
    messagingSenderId: "501020146259",
    appId: "1:501020146259:web:a7196b45f130e20b7724a6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, storage, auth, provider}