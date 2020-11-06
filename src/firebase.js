import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDbEOcsegXjHsicpYH77entR523K3oH5_M",
  authDomain: "discordclone-91a30.firebaseapp.com",
  databaseURL: "https://discordclone-91a30.firebaseio.com",
  projectId: "discordclone-91a30",
  storageBucket: "discordclone-91a30.appspot.com",
  messagingSenderId: "655213120426",
  appId: "1:655213120426:web:deead7a87365cac636b9d3",
  measurementId: "G-DM02QS1P71",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
