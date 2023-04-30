// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIcRWnyMms-AhfYw9Ookq0xFKEtJBXCPE",
  authDomain: "the-news-dragon-client-fd4a0.firebaseapp.com",
  projectId: "the-news-dragon-client-fd4a0",
  storageBucket: "the-news-dragon-client-fd4a0.appspot.com",
  messagingSenderId: "861881238371",
  appId: "1:861881238371:web:71dba0d6389bec5acd4956"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
