// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgncdndfbBbp9kQ-GuAmcxbLTOwMFtB8E",
  authDomain: "fitout-47803.firebaseapp.com",
  projectId: "fitout-47803",
  storageBucket: "fitout-47803.appspot.com",
  messagingSenderId: "322347656923",
  appId: "1:322347656923:web:11be2410e571bb27368efe",
  measurementId: "G-LXH0G8ZJTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log("Staring app")
const auth =getAuth(app);
const db = getFirestore(app);

export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider).catch((error) => {
      console.error("Sign-in error:", error);
    });
    
    if (result) {
      const user = result.user;
      console.log(user.email);
      console.log(user.uid);
      const userRef = doc(db, "users", user.uid);
      getDoc(userRef)
        .then((docSnap) => {
          if (!docSnap.exists()) {
            console.log("First time");
            let userName = prompt("Please enter a username");
            return setDoc(userRef, {
              name: user.displayName,
              email: user.email,
              profilePicture: user.photoURL,
              userID: user.uid,
              username: userName,
              bio:"",
            });
          } else {
            
            console.log("User exists");
          }
        })
        .catch((error) => {
          console.error("Error accessing Firestore:", error);
        });
    }
    
  }
  export function signOut(){
    return auth.signOut();
  }
  
  export function onAuthStateChangedHelper(callback){
    return onAuthStateChanged(auth,callback);
  }
  
  // Function to get user data
  export async function getUserData(uid) {
    const userRef = doc(db, "users", uid);
    const docSnap = await getDoc(userRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", JSON.stringify(docSnap.data()));
      
      return docSnap.data(); // Returns user data if document exists
    } else {
      console.log("No such document!");
      return null;
    }
  }
  