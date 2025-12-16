import firebase from "firebase/compat/app"; 
import "firebase/compat/auth"; 
import "firebase/compat/firestore"; 
// import "firebase/compat/database"; 
 
firebase.initializeApp({ 
  apiKey: "AIzaSyDvWmGE6kP5tTQzBC5gQtnKKNEy4wAdMMY",
  authDomain: "bismillah-coba-d3193.firebaseapp.com",
  projectId: "bismillah-coba-d3193",
  storageBucket: "bismillah-coba-d3193.firebasestorage.app",
  messagingSenderId: "336137579338",
  appId: "1:336137579338:web:dbd74e307a0cabd6f7efb3"
  
}); 
 
const FIREBASE = firebase; 
 
export default FIREBASE;