// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAH9LfpkL9G_tlhvVflO73nz-ujT5Xwfks",
    authDomain: "assignment-10-9b7eb.firebaseapp.com",
    projectId: "assignment-10-9b7eb",
    storageBucket: "assignment-10-9b7eb.firebasestorage.app",
    messagingSenderId: "655109079808",
    appId: "1:655109079808:web:c24de6232ee8ac7b8869e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);