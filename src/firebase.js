import firebase from "firebase";
// import firebase from "firebase/compat";
// import "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDi6KnYo9BdkVeYr75nleRv96PqsZ5bn20",
  authDomain: "disney-7b144.firebaseapp.com",
  projectId: "disney-7b144",
  storageBucket: "disney-7b144.appspot.com",
  messagingSenderId: "52336660316",
  appId: "1:52336660316:web:52d8c19bd773373ceffb99",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
