import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqBWcsAArZqPYDPfo8TSCYl_-4JKqXwWw",
    authDomain: "olx-react-de831.firebaseapp.com",
    projectId: "olx-react-de831",
    storageBucket: "olx-react-de831.appspot.com",
    messagingSenderId: "773369766230",
    appId: "1:773369766230:web:f90b7807dc1f6ac3e7f6f7",
    measurementId: "G-SHV54KHVZC"
  };

export default firebase.initializeApp(firebaseConfig);


