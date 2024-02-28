'use client';
import React, {useState} from 'react';
import { signInWithGoogle, signOut, createAccountWithEmailAndPassword } from "../firebase/firebase";
import styles from './sign-up.css';
import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//
import { useUser } from '../contexts/UserContext';

function SignUp(){


  const navigate = useNavigate(); 
 

  const handleSignUp = async (event) => {
  
  event.preventDefault();

  const formData = new FormData(event.target);
  const fullName = formData.get('fullName'); // Name attribute of the input field
  const username = formData.get('username'); // Name attribute of the input field
  const email = formData.get('email'); // Name attribute of the input field
  const password = formData.get('password'); // Name attribute of the input field
  console.log(fullName,username,email,password);

  try {
    const tempID = await createAccountWithEmailAndPassword(formData);
    if (tempID) {
      //setUser(useUser);
      // Assuming `createAccountWithEmailAndPassword` returns a truthy value on success
      console.log(tempID);
      navigate(`/signup:success/${tempID}`);
    }
  } catch (error) {
    console.error(error);
  }
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

  const renderForms = () => {
   
        return (
          <div className="container">
        <div className="bigcontainer">
        <span className="logoContainer">
      <img className="loginlogo" src="/FitOutLogo.webp"></img>
      </span>
        
        <form text="test"class="signinform" id="userform" onSubmit={handleSignUp} value="Enter Username">
         <input type="text" placeholder="Full Name" name="fullName"></input>
         <input type="text" placeholder="username"name="username"></input>
         <input type="text" placeholder="email"name="email"></input>
         <input type="text" placeholder="password"name="password"></input>
        <br></br>
         <button className="signUp" type="submit" >Create Account</button>
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
        );
  };

 return (
      <div className="App__sign-in">
        {renderForms()}        
      </div>
    
 )
}
export default SignUp;
//322347656923-o7dnlkjloo9cookglcqgql50fjr9kcvb.apps.googleusercontent.com