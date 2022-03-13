import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9NQfpIZv9Z6f6wytDa3YVDp_ROJ2CWvU",
  authDomain: "shopify-auth-cbcb4.firebaseapp.com",
  projectId: "shopify-auth-cbcb4",
  storageBucket: "shopify-auth-cbcb4.appspot.com",
  messagingSenderId: "384564960322",
  appId: "1:384564960322:web:a32ca0a041b86e2ef3e1db",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
