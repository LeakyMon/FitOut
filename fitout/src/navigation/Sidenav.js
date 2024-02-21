import React from 'react'
import "./Sidenav";
import "./Sidenav.css";
import {signOut} from "../firebase/firebase";

function Sidenav() {
  return (
    <div className="sidenav">
      <span className="logoContainer">
      <img className="logo" src="/FitOutLogo.webp"></img>
      </span>
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <span>Home</span>
        </button>
        <button className="sidenav__button">
         
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          
          <span>Explore</span>
        </button>
    
        <button className="sidenav__button">
         
          <span>Notifications</span>
        </button>
        <button className="sidenav__button">
         
          <span>Upload</span>
        </button>
        <button className="sidenav__button">
         
          <span>Profile</span>
        </button>
        <button className="sidenav__button">
          <span>
            <button className="logout__button" onClick={signOut}>
              Logout
            </button>
          </span>
        </button>
      </div>
    </div>

  )
}

export default Sidenav