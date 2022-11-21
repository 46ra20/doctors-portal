// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvpqP0OI0dhQEiGGoU27xkgwHs_0jh_KM",
    authDomain: "doctor-portals-de133.firebaseapp.com",
    projectId: "doctor-portals-de133",
    storageBucket: "doctor-portals-de133.appspot.com",
    messagingSenderId: "879090244514",
    appId: "1:879090244514:web:7686bd3c967576382670fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;