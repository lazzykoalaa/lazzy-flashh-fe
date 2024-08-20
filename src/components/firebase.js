import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAo-t2r67QD-tBHvI98CVVhHd0edLcSgPU",
    authDomain: "lazzyflashh.firebaseapp.com",
    projectId: "lazzyflashh",
    storageBucket: "lazzyflashh.appspot.com",
    messagingSenderId: "58460364810",
    appId: "1:58460364810:web:1a5acfbab5fc3f5a21fff3",
    measurementId: "G-F1DNQD41CM"
};

const app = initializeApp(firebaseConfig);
const facebookProvider = new FacebookAuthProvider();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {auth,googleProvider, facebookProvider};
