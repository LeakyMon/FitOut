'use client';
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './profSetup.css';

import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//


function ProfSetup(){

  const navigate = useNavigate(); 

  const handleSubmit = async () => {
    navigate('/');
  };

  

 return (
      <div className="App__sign-in">
        <div className="container">
        <div className="bigcontainer">
        <span className="logoContainer">
      <img className="loginlogo" src="/FitOutLogo.webp"></img>
      </span>

        <form text="test"class="loginform" id="userform" onSubmit={handleSubmit} value="Enter Username">
         <input type="text" placeholder="username"></input>
         

         <input type="text" placeholder="password"></input>
        <br></br>
         <input className="signIn"type="button" value="Log in"></input>
        </form>

        <div className="separator" id="container">
          <div id="left" className="lr"></div>
          <div id="center"className="textbetween">Or</div>
          <div id="right"className="lr"></div>
      
        </div>

      </div>
      
        
    </div>
        
      </div>
    
 )
}
export default ProfSetup;
//322347656923-o7dnlkjloo9cookglcqgql50fjr9kcvb.apps.googleusercontent.com