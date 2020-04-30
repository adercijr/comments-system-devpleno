import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB0EDFr8hgAM3T0W2n9nGv303hL3EG8Ujc",
    authDomain: "comments-b051d.firebaseapp.com",
    databaseURL: "https://comments-b051d.firebaseio.com",
    projectId: "comments-b051d",
    storageBucket: "comments-b051d.appspot.com",
    messagingSenderId: "245899861894",
    appId: "1:245899861894:web:0e1a62e0167802fbc11607",
    measurementId: "G-365974GZRT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database()
  export const auth = firebase.auth()