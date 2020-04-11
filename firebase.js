import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBwol3lcF2pOMFhCKqFqwjsKuDemZL33l4",
  authDomain: "the-log-c98e2.firebaseapp.com",
  databaseURL: "https://the-log-c98e2.firebaseio.com",
  projectId: "the-log-c98e2",
  storageBucket: "the-log-c98e2.appspot.com",
  messagingSenderId: "493236759934",
  appId: "1:493236759934:web:5efe8b08cee354db8bd72f",
  measurementId: "G-1WE7NBPSS2"
};
// Initialize Firebase
try {
    firebase.initializeApp(firebaseConfig)
} catch (err) {

}
const db = firebase.database();


export { db }