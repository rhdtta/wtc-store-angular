import { initializeApp } from "@firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSQRpIjFYYXrAa56u1fatSeljClyI-mT4",
    authDomain: "wtc-store.firebaseapp.com",
    databaseURL: "https://wtc-store-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wtc-store",
    storageBucket: "wtc-store.appspot.com",
    messagingSenderId: "375533486595",
    appId: "1:375533486595:web:d104d16c9ca50627dc4436"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);