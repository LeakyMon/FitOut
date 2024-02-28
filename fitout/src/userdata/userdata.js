import React, { useState } from 'react'

import {useUser} from "../contexts/UserContext"
import { getFirestore, doc,updateDoc, increment} from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../firebase/firebase';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export async function updateUserInformation(uid,bio, username, profilePicUrl) {
  
   const userRef = doc(db, "users", uid);
  console.log("In userdata");
   try {
     await updateDoc(userRef, {
       bio,
       username,
       profilePicture: profilePicUrl,
     });
     console.log("Doc updated");
     // Directly update local user state
     
   } catch (error) {
     console.error("Error updating user information:", error);
   }
 };