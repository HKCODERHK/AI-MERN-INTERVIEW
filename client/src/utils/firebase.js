
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "ai-mern-project-f64cc.firebaseapp.com",
  projectId: "ai-mern-project-f64cc",
  storageBucket: "ai-mern-project-f64cc.firebasestorage.app",
  messagingSenderId: "118599379157",
  appId: "1:118599379157:web:baeeac924bdae86d10da5c"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}