import dotenv from 'dotenv'
import firebase from 'firebase/app';
import 'firebase/firestore';
dotenv.config();

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "keeper-app-43abb",
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;