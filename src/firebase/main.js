import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCULuGPl078xdLkxypCSHLq9BsrLMiGrbM",
  authDomain: "gamelibrary-779ae.firebaseapp.com",
  projectId: "gamelibrary-779ae",
  storageBucket: "gamelibrary-779ae.appspot.com",
  messagingSenderId: "524231835636",
  appId: "1:524231835636:web:72d4fe83913ba5fc6883a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app)

export {db, auth}