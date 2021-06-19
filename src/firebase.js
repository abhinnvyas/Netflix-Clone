import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfx8rtxTB-ixZ5vuvOWZxYg6-IkGAqamA",
  authDomain: "netflix-complete-clone.firebaseapp.com",
  projectId: "netflix-complete-clone",
  storageBucket: "netflix-complete-clone.appspot.com",
  messagingSenderId: "904341743832",
  appId: "1:904341743832:web:67108d780b562e1bcdcfad",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
