import { addUserToDB } from "./Database";
//Import firebase info
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from "firebase/auth";
import App from "../App";

//Setup firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB5j6O2L0SZujZc61syiOR-AwtxZsXMx4U",
  authDomain: "login-page-8a7df.firebaseapp.com",
  projectId: "login-page-8a7df",
  storageBucket: "login-page-8a7df.appspot.com",
  messagingSenderId: "360602431126",
  appId: "1:360602431126:web:bfd9099b1f41d0d9d6dcb7",
  measurementId: "G-NXD53KFJHF",
  databaseURL: "https://login-page-8a7df-default-rtdb.firebaseio.com/"
};
//Initialize Firebase info
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//<--------------------------->
//<--------------------------->
//<--------------------------->
//<--------------------------->

export function createUser(info, setUser) {
  const auth = getAuth();
  const username = info.username;
  const email = info.email;
  const password = info.password;
  let UID;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      UID = user.uid;

      addUserToDB(info, UID);
      setUser({
        username: username,
        passsword: password,
        email: email,
        UID: UID
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
}

export function signIn(info, setUser) {
  const auth = getAuth();
  const email = info.email;
  const password = info.password;
  const username = info.username;
  let UID;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      UID = user.UID;

      console.log("Signed in as" + user.uid);
      setUser({
        username: username,
        passsword: password,
        email: email,
        UID: UID
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      //const errorMessage = error.message;
      console.log(errorCode);
    });
}
