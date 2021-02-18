import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-ZHTnRrRYqHoZ5zmM8Ge2qt0cx97naeE",
  authDomain: "instagram-clone-sage.firebaseapp.com",
  projectId: "instagram-clone-sage",
  storageBucket: "instagram-clone-sage.appspot.com",
  messagingSenderId: "661082608212",
  appId: "1:661082608212:web:c948026cbf05a8c15213c1",
  measurementId: "G-0K8Z8TF2V5",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
