// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATh8BtQ38vbcFJfWoEapayhdYOwjDL2EU",
  authDomain: "house-project-189e6.firebaseapp.com",
  projectId: "house-project-189e6",
  storageBucket: "house-project-189e6.appspot.com",
  messagingSenderId: "903287067746",
  appId: "1:903287067746:web:11516eacb7242b833bad3b",
  measurementId: "G-MV1J7NZ65T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);