// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_APP_API_KEY,
  authDomain: "e-library-2aa31.firebaseapp.com",
  projectId: "e-library-2aa31",
  storageBucket: "e-library-2aa31.appspot.com",
  messagingSenderId: "63791126199",
  appId: "1:63791126199:web:415bd5de69cd3f6aa6df32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}