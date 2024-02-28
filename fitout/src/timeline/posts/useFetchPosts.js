import { useState, useEffect } from 'react';
import { collection, query, where, getDocs, getFirestore } from 'firebase/firestore';

export function useUserPosts  (userId) {
  const [posts, setPosts] = useState([]);
  const db = getFirestore();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!userId) return;
        
      const postsRef = collection(db, "posts");
      const q = query(postsRef, where("creator", "==", userId));
      try {
        const querySnapshot = await getDocs(q);
        const fetchedPosts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [userId]);

  return posts;
};
