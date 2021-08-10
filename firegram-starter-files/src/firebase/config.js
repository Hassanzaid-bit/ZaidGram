import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore'; 
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAd9dOgEQ_f7U0HeSIhDePlirXDLtXWrV8",
    authDomain: "firegram-e63ba.firebaseapp.com",
    projectId: "firegram-e63ba",
    storageBucket: "firegram-e63ba.appspot.com",
    messagingSenderId: "632208108277",
    appId: "1:632208108277:web:fed3c494773bd636c7b3bc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp};