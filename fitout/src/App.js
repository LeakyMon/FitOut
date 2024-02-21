'use client'
import './App.css';
import Homepage from "./Homepage";
import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from './authenticate/sign-in';


export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Deregister listener on component dismount
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      {user ? (
        <div>
          <Homepage />
        </div>
      ) : (
        <div>

        <p>Please Login to View Wardrobe!</p>
        <SignIn/>
        </div>
      )}
    </div>
  );
}
//export default App;
