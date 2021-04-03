import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAR3Gm7s1WZh5RAqbLMQ-Rusu-bg86C_8Y",
  authDomain: "imagegallery-8515a.firebaseapp.com",
  projectId: "imagegallery-8515a",
  storageBucket: "imagegallery-8515a.appspot.com",
  messagingSenderId: "846257020115",
  appId: "1:846257020115:web:68774c2caade8f4471c826"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };