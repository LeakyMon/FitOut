// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword , signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, User} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getStorage } from "firebase/storage";
import { getFirestore, doc, setDoc, getDoc,collection, query, where, getDocs } from "firebase/firestore";
//import { useUser } from '../contexts/UserContext'; // Adjust the import path as necessary

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
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
const storage = getStorage(app);
export async function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });
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
              followerCount:0,
              followingCount:0,
              numPosts:0,
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
  
export async function createAccountWithEmailAndPassword(request) {
  console.log("In here",request);

  const email = request.get('email');
  const password = request.get('password');
  console.log(email, password);

  try {
    console.log("try");
    const result = await createUserWithEmailAndPassword(auth, email, password);
    if (result) {
      const user = result.user;
      console.log(user.email, user.uid);

      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        console.log("First time");
        // Assuming you handle user input for name, etc., elsewhere or have defaults
        await setDoc(userRef, {
          name: user.displayName || '', // Provide default values as necessary
          email: user.email,
          profilePicture: user.photoURL || '',
          userID: user.uid,
          bio: "",
          followerCount: 0,
          followingCount: 0,
          numPosts: 0,
          setUpComplete: false,
        });
        console.log("User document created");
      } else {
        console.log("User exists");
      }

      return user.uid; // Indicate success
    }
  } catch (error) {
    console.error("Error creating user:", error);
    throw error; // Rethrow or handle as needed
  }
  }

  export async function signInEmailAndPass(request){
    console.log(request);
    const email = request.get('email'); // Name attribute of the input field
    const password = request.get('password'); 
    try{
    const result = await signInWithEmailAndPassword(auth, email,password);
    if (result) {
      const user = result.user;
      console.log(user.email);
      console.log(user.uid);
      const userRef = doc(db, "users", user.uid);
      getDoc(userRef)
        .then((docSnap) => {
          if (!docSnap.exists()) {
            console.log("First time");
            //let userName = prompt("Please enter a username");
            return setDoc(userRef, {
              name: user.displayName,
              email: user.email,
              profilePicture: user.photoURL,
              userID: user.uid,
              //username: userName,
              bio:"",
              followerCount:0,
              followingCount:0,
              numPosts:0,
              setUpComplete:false,
            });
          } else {
            
            console.log("User exists");
          }
        })
        .catch((error) => {
          console.error("Error accessing Firestore:", error);
        });
        
    }
   }catch(error){
    console.log("Sign up with email/pass error", error);
   }



  }
 
  export function signOut(){
    
    return auth.signOut();
  }
  
  export function onAuthStateChangedHelper(callback){
    return onAuthStateChanged(auth,callback);
  }
  
  export async function searchUsersByUsername(usernamePrefix, userName) {
    const usersRef = collection(db, "users");
    // Create a query that searches for usernames starting with the input string
    const startAtQuery = usernamePrefix;
    const endAtQuery = usernamePrefix + '\uf8ff'; // '\uf8ff' is a high code point in the Unicode range, ensuring the query includes all usernames starting with usernamePrefix
    const q = query(usersRef, where("username", ">=", startAtQuery), where("username", "<=", endAtQuery));

    try {
        const querySnapshot = await getDocs(q);
        const users = [];
        querySnapshot.forEach((doc) => {
          const userData = { id: doc.id, ...doc.data() };
          // Exclude the current user's username from the results
          if (userData.username !== userName) {
              users.push(userData);
          }
        });
        return users; // Returns an array of users matching the search criteria
    } catch (error) {
        console.error("Error searching users by username prefix:", error);
        throw error; // Re-throw the error for handling by the caller
    }
}





  // Function to get user data
  export async function getUserData(uid) {
    console.log("getting")
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
  export async function getUserPosts(uid) {
    const userRef = doc(db, "posts", uid);
    const docSnap = await getDoc(userRef);
  
    if (docSnap.exists()) {
      console.log("Document data:", JSON.stringify(docSnap.data()));
      
      return docSnap.data(); // Returns user data if document exists
    } else {
      console.log("No such document!");
      return null;
    }

  }


  