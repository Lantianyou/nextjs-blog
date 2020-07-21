import firebase from 'firebase/app';
import 'firebase/firestore'; // NEW

const config = {
    apiKey: "AIzaSyAEGgj-1dzqnJ0fdfXriR_X1YgxOsfoIDU",
    authDomain: "blog-acc3e.firebaseapp.com",
    databaseURL: "https://blog-acc3e.firebaseio.com",
    projectId: "blog-acc3e",
    storageBucket: "blog-acc3e.appspot.com",
    messagingSenderId: "143279168411",
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
