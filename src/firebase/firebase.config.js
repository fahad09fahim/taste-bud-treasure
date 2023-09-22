// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ4SsgrdoEe3sdX6oa71QBHPyFDtvBcLw",
  authDomain: "taste-bud-treasures.firebaseapp.com",
  projectId: "taste-bud-treasures",
  storageBucket: "taste-bud-treasures.appspot.com",
  messagingSenderId: "62497662299",
  appId: "1:62497662299:web:a7c6d5a1c00a0c3b49267e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;