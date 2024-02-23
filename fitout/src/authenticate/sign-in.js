'use client';
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './sign-in.css';

import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//


function SignIn(){
  const navigate = useNavigate(); 

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate('/'); // Redirect to homepage after sign in
    } catch (error) {
      console.error(error);
      // Handle sign in error (e.g., show an error message)
    }
  };

 return (
      <div className="App__sign-in">
        <div className="container">

        <span className="logoContainer">
      <img className="logo" src="/FitOutLogo.webp"></img>
      </span>

        <form text="test"class="loginform"onsubmit={handleSignIn} id="userform" value="Enter Username">
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
    
 )
}
export default SignIn;
