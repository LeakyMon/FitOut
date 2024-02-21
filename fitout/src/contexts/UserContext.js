import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../firebase/firebase'; // Assume you have this from your Firebase setup

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // User is signed in, see if additional data is available in Firestore
        const userRef = doc(db, "users", firebaseUser.uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          // Combine Firebase Auth user data with Firestore data
          setUser({ ...firebaseUser, ...docSnap.data() });
        } else {
          
          setUser(firebaseUser);
        }
      } else {
        // User is signed out
        setUser(null);
      }
    });

    return unsubscribe; // Make sure to unsubscribe on cleanup
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
