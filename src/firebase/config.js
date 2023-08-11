// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBM-eLUsFkT4yPqbcmSn6PD1KkoZLCwe68",
  authDomain: "worryless-ent.firebaseapp.com",
  projectId: "worryless-ent",
  storageBucket: "worryless-ent.appspot.com",
  messagingSenderId: "120441966490",
  appId: "1:120441966490:web:4bf0a8311e99c34e79f423",
  measurementId: "G-K06VS37JBH"
})

const analytics = getAnalytics(firebaseApp);

// const projectStorage = firebase.storage();
// const projectFirestore = firebase.firestore();

// database
var db = firebaseApp.firestore();


export { db };
