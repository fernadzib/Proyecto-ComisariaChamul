import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCrQN0HTMl_Yl93xS8hi5nB-01cLDoUwo",
  authDomain: "crud-react-a09d9.firebaseapp.com",
  projectId: "crud-react-a09d9",
  storageBucket: "crud-react-a09d9.appspot.com",
  messagingSenderId: "734396339191",
  appId: "1:734396339191:web:e1ac75a21cdb8a265dd4f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;