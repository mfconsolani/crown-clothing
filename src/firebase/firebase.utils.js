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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      } catch(error) {
        console.log('error creating user', error.message)
      }
    }

    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;