
import "./Sidenav";
import "./Sidenav.css";
import {signOut} from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';

import React, { useEffect, useState } from 'react';


function Sidenav() {
  const [reRoute, setReRoute] = useState(null);
  const navigate = useNavigate(); // Get the navigate function

  const handleClick = (s) => {
    navigate(s); // Navigate to /profile when the function is called
  };

  const handleSignOut = (s) => {
    signOut();
    navigate(s); // Navigate to /profile when the function is called
  };

  return (
    <div className="sidenav">
      <span className="logoContainer">
      <img className="logo" src="/FitOutLogo.webp"></img>
      </span>
      <div className="sidenav__buttons">
        <button className="sidenav__button" onClick={() => handleClick('')}>
          <span>Home</span>
        </button>
        <button className="sidenav__button" onClick={() => handleClick('search')}>
         
          <span>Search</span>
        </button>
        <button className="sidenav__button" onClick={() => handleClick('explore')}>
          
          <span>Explore</span>
        </button>
    
        <button className="sidenav__button" onClick={() => handleClick('notifications')}>
         
          <span>Notifications</span>
        </button>
        <button className="sidenav__button" onClick={() => handleClick('upload')}>
         
          <span>Upload</span>
        </button>
        <button className="sidenav__button" onClick={() => handleClick('profile')}>
         
          <span>Profile</span>
        </button>
        <button className="sidenav__button">
          <span>
            <button className="logout__button" onClick={() => handleSignOut('')}>
              Logout
            </button>
          </span>
        </button>
      </div>
    </div>

  )
}

export default Sidenav