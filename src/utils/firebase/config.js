// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACkx8xW-pmcaoJmeCx0vxFRvX9rn44tnE",
  authDomain: "coderhouse-ecommerce-8c1ee.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8c1ee",
  storageBucket: "coderhouse-ecommerce-8c1ee.appspot.com",
  messagingSenderId: "1023838252077",
  appId: "1:1023838252077:web:7960e87af07899324a9ca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);