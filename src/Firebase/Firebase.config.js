// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnWo0EhtU8ucFt_0C9bDfwc8vRt1lKWic",
  authDomain: "filmax-ac624.firebaseapp.com",
  projectId: "filmax-ac624",
  storageBucket: "filmax-ac624.appspot.com",
  messagingSenderId: "284712810493",
  appId: "1:284712810493:web:f7492f50eaba7a3c24cb94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app