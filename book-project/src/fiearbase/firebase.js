

import { getAuth } from "firebase/auth";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTKpbApkMv_Lo0l0mhzsJzWPlziFrzpvo",
  authDomain: "book-app-5f09d.firebaseapp.com",
  projectId: "book-app-5f09d",
  storageBucket: "book-app-5f09d.firebasestorage.app",
  messagingSenderId: "94800309123",
  appId: "1:94800309123:web:6d335686b74c28c465a4b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);