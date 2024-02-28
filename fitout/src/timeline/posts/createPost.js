import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

import "./feed.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import { getFirestore, doc, setDoc, getDoc,collection, query, where, getDocs , addDoc,updateDoc, increment} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { useUser } from '../../contexts/UserContext';
import {firebaseConfig} from '../../firebase/firebase'

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage();


export function displayPostOnProfile(username, img, caption, likes) {
  return (
   
    <div>
    <div className="post__image">
      <img className="topIMG" src={img} alt="Post Image" />
    </div>
    </div>
 
  )
}

export async function uploadPostToDatabase(username, img, caption, uid) {

// Create a reference to 'mountains.jpg'
const storageRef = ref(storage, 'images/' + img); // Creates a reference to 'images/fileName'

// Create a reference to 'images/mountains.jpg'


  console.log("Uploading");
  try {

    const uploadResult = await uploadBytes(storageRef, img);
    // Get the URL of the uploaded file
    const imageUrl = await getDownloadURL(uploadResult.ref);

    // Store the post data, including the image URL, in Firestore
    await addDoc(collection(db, "posts"), {
      creator: uid,
      creatorUserName: username,
      caption: caption,
      imageURL: imageUrl,
      numLikes: 0
    });
    const userRef = doc(db, "users", uid); // Reference to the user's document
    await updateDoc(userRef, {
      numPosts: increment(1) // Atomically increments the numPosts field by 1
    });


    console.log("Post uploaded successfully");
  } catch (error) {
    console.error("Error uploading post", error);
  }
}


