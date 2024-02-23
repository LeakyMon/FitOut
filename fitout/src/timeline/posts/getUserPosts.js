import React, { createContext, useContext, useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { useUser } from '../../contexts/UserContext'; // Import useUser to access the current user
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import {firebaseConfig} from '../../firebase/firebase'; // Assume you have this from your Firebase setup

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const user = useUser(); // Use the useUser hook to access the current user

  useEffect(() => {
    if (user && user.uid) { // Make sure user exists and has a uid
      const fetchPosts = async () => {
        const postsRef = collection(getFirestore(), "posts");
        const q = query(postsRef, where("creator", "==", user.uid));
        const querySnapshot = await getDocs(q);
        //console.log(querySnapshot.docs.length);
        const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetchedPosts);
        //console.log(fetchedPosts.length); // Log the length of fetchedPosts

      };

      fetchPosts();
    } else {
      setPosts([]); // Clear posts if there is no user logged in
    }
  }, [user]);

  return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>;
};

export const usePosts = () => useContext(PostsContext);
