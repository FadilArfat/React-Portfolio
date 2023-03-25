// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHrBajF0biKpTiyCWufJB6gNIDzAxW0vo",
  authDomain: "portfolio-web-6bc3e.firebaseapp.com",
  projectId: "portfolio-web-6bc3e",
  storageBucket: "portfolio-web-6bc3e.appspot.com",
  messagingSenderId: "873883663895",
  appId: "1:873883663895:web:6904fcce926d2cfdd7a652"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app, db};