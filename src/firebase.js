import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzagXjHsicntR52oH5_M",
  authDomain: "discordclone-91a30.firebaseapp.com",
  databaseURL: "https://discordclone-91a30.firebaseio.com",
  projectId: "discord",
  storageBucket: "discordclom",
  messagingSenderId: "6552",
  appId: "1:655213a87365cac636b9d3",
  measurementId: "G-DM01",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
