'use client';
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './sign-in.css';

import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//


function SignIn(){
  const navigate = useNavigate(); 

  const handleSignIn = async () => {
    

    
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/'); // Redirect to homepage after sign in
    } catch (error) {
      console.error(error);
      // Handle sign in error (e.g., show an error message)
    }
  };
  const handleSignUp = async () => {
    navigate('/signup');

  }

 return (
      <div className="App__sign-in">
        <div className="container">
        <div className="bigcontainer">
        <span className="logoContainer">
      <img className="loginlogo" src="/FitOutLogo.webp"></img>
      </span>

        <form text="test"class="loginform"onSubmit={handleSignIn} id="userform" value="Enter Username">
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

      <span class="gImg" onClick={handleSignInWithGoogle}>
        <img src="/web_dark_rd_SI@1x.png"></img>
      </span>
     
      <a href="/" className="forgotpass">Forgot password?</a>
  
      </div>
      
        <div className="smallcontainer">

          <p class="createAcc">New to the Platform?  &nbsp; &nbsp; <a href="http://localhost:3000/signup" onClick={handleSignUp}>Create Account</a></p>

        </div>
          </div>
        
      </div>
    
 )
}
export default SignIn;
//322347656923-o7dnlkjloo9cookglcqgql50fjr9kcvb.apps.googleusercontent.com