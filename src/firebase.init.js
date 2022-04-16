// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDv28ekd2MrsxwTmis8JKws8hfsspTMEus",
  authDomain: "tuition-app-40a3b.firebaseapp.com",
  projectId: "tuition-app-40a3b",
  storageBucket: "tuition-app-40a3b.appspot.com",
  messagingSenderId: "161367265480",
  appId: "1:161367265480:web:d2f031ec25dbb40be695fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
