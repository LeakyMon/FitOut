'use client'
import './App.css';
import Homepage from "./pages/Homepage";
import Profile from "./pages/profile";
import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from './authenticate/sign-in';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './navigation/Sidenav';
import  UserProvider  from './contexts/UserContext'; // Adjust the path as necessary


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
    <UserProvider>
      <Router>
        <div className="App">
          {user ? (
            <><Sidenav /><Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/profile" element={<Profile />} />

            </Routes></>
          ) : (
            <div className="SignIn">
              <p>Please Login to View Wardrobe!</p>
              <SignIn />
            </div>
          )}
        </div>
      </Router>
    </UserProvider>
  );
}
//export default App;
