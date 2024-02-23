'use client';
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './sign-up.css';

import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//


function SignUp(){
  const navigate = useNavigate(); 

  const handleSignUp = async () => {
    
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


 return (
      <div className="App__sign-in">
        <div className="container">
        <div className="bigcontainer">
        <span className="logoContainer">
      <img className="loginlogo" src="/FitOutLogo.webp"></img>
      </span>

        <form text="test"class="signinform"onsubmit={handleSignUp} id="userform" value="Enter Username">
         <input type="text" placeholder="Full Name"></input>
         <input type="text" placeholder="username"></input>
         <input type="text" placeholder="email"></input>
         <input type="text" placeholder="password"></input>
        <br></br>
         <input className="signUp"type="button" value="Create Account"></input>
        </form>

        <div className="separator" id="container">
          <div id="left" className="lr"></div>
          <div id="center"className="textbetween">Or</div>
          <div id="right"className="lr"></div>
      
        </div>

      <span class="gImg" onClick={handleSignInWithGoogle}>
        <img src="/ios_dark_rd_SU@1x.png"></img>
      </span>
  
      </div>
      
        <div className="smallcontainer">
            <div className="lrb"id="left" >Have an account? &nbsp; &nbsp; &nbsp; </div>
       
          <div id="right"className="lrb"><a href="">Login</a></div>
          

        </div>
          </div>
        
      </div>
    
 )
}
export default SignUp;
//322347656923-o7dnlkjloo9cookglcqgql50fjr9kcvb.apps.googleusercontent.com