
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCgsBmtFgwGqkE_k0tqH5-mm2E3qj0sc2E",
    authDomain: "disneyplus-clone-e28b6.firebaseapp.com",
    projectId: "disneyplus-clone-e28b6",
    storageBucket: "disneyplus-clone-e28b6.appspot.com",
    messagingSenderId: "806681544635",
    appId: "1:806681544635:web:804172c1d570ac99fda69e",
    measurementId: "G-H6P3FSRTRL"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;