'use client'
import './App.css';
import Homepage from "./pages/Homepage";
import Profile from "./pages/profile";
import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged } from 'firebase/auth';
import SignIn from './authenticate/sign-in';
import SignUp from './authenticate/sign-up';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidenav from './navigation/Sidenav';
import  {UserProvider}  from './contexts/UserContext'; // Adjust the path as necessary
import { PostsProvider } from './timeline/posts/getUserPosts';
import {Navigate } from 'react-router-dom';
import ProfSetup from './authenticate/profSetup';
import Search from './pages/Search';


export default function App() {
  const [user, setUser] = useState(null);
 
  //const { user, isSetUpComplete } = useUser();
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
      <PostsProvider>
      <Router>
      <div> 
          {user ? ( 
            <div className="App"> 
                <><Sidenav />
                <div className="content">
                    <Routes>
                    
                    <Route path="/" element={<Homepage />} />
                    
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/search" element={<Search/>}/>
                  </Routes>
                </div></>
              </div>
          ) : (
            <Routes>
              <Route path="/" element={<Navigate replace to="/signin" />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              
            </Routes>
            
          )}
         </div>
      </Router>
      </PostsProvider>
    </UserProvider>
  );
}
//export default App;
