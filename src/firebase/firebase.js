// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwa9QGEuSZN3KaNdET4W-vxbSkiFXUvKQ",
  authDomain: "dev-dashboard-5583c.firebaseapp.com",
  projectId: "dev-dashboard-5583c",
  storageBucket: "dev-dashboard-5583c.appspot.com",
  messagingSenderId: "930767213565",
  appId: "1:930767213565:web:792fc1010fd740b26cff94",
  measurementId: "G-SZFR5XQPW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

