// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvaaesODc9Mc0bZfqMSUouEOdZNfItROQ",
  authDomain: "dragon-auth-news-cf87e.firebaseapp.com",
  projectId: "dragon-auth-news-cf87e",
  storageBucket: "dragon-auth-news-cf87e.firebasestorage.app",
  messagingSenderId: "1078134212740",
  appId: "1:1078134212740:web:7aae8e3e9376da7a69dad1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
