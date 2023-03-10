// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage, ref } from "firebase/storage";
import { getFirestore, doc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDM_1c166P0qpme5w7Pf1sejUywbyRUovI",
    authDomain: "weddingwebsite-2d923.firebaseapp.com",
    projectId: "weddingwebsite-2d923",
    storageBucket: "weddingwebsite-2d923.appspot.com",
    messagingSenderId: "599738989190",
    appId: "1:599738989190:web:f3b8a8d103a6ea18aa6f07",
    measurementId: "G-HGFCMH8F3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
// Create a reference under which you want to list
const imageRef = ref(storage, "image");

export { storage, imageRef };
