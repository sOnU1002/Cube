import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyARJJXHHdbN_Lhy5oF7QP3aq9B5D9cg_WY",
    authDomain: "cube-chatapp.firebaseapp.com",
    projectId: "cube-chatapp",
    storageBucket: "cube-chatapp.appspot.com",
    messagingSenderId: "755485854264",
    appId: "1:755485854264:web:3adad2d1cfde86c5c2b4cd",
    measurementId: "G-ECEG47Z8LM"
 };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth , provider };
  export default db;