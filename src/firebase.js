// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTOsMVPptYZNCg0rsJX5iilGC_j4FzuYI",
  authDomain: "instagram-clone-12fa3.firebaseapp.com",
  projectId: "instagram-clone-12fa3",
  storageBucket: "instagram-clone-12fa3.appspot.com",
  messagingSenderId: "973691176672",
  appId: "1:973691176672:web:f10a063ef2f6c989d2f285",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
