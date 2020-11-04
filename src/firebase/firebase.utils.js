import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDBSJY8VqlAbnr5GwcIexn7oglp8_DKt_4",
    authDomain: "crwn-db-23c07.firebaseapp.com",
    databaseURL: "https://crwn-db-23c07.firebaseio.com",
    projectId: "crwn-db-23c07",
    storageBucket: "crwn-db-23c07.appspot.com",
    messagingSenderId: "95369486620",
    appId: "1:95369486620:web:b7018127aba31dfa165ad9"
  };

firebase.initializeApp(config);