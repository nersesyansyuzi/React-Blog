import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAUtFE15TeKKuOfOhgGhzQ6ibCigAyUjzc",
  authDomain: "blog-8990f.firebaseapp.com",
  projectId: "blog-8990f",
  storageBucket: "blog-8990f.appspot.com",
  messagingSenderId: "302537253184",
  appId: "1:302537253184:web:5e232202649a0004b79aa5",
  measurementId: "G-5XJ9YY61F4"
};


const app = initializeApp(firebaseConfig);

export const db=getFirestore(app)