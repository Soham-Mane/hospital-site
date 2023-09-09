// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3Gf22_OSOFTYviAtxJdJfkcokdFh52CY",
  authDomain: "otp-doctor-7e648.firebaseapp.com",
  projectId: "otp-doctor-7e648",
  storageBucket: "otp-doctor-7e648.appspot.com",
  messagingSenderId: "357677428475",
  appId: "1:357677428475:web:4c0e61c3f47d2ae89cca5e",
  measurementId: "G-Q52P870W3X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
// const analytics = getAnalytics(app);