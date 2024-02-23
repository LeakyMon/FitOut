
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './profSetup.css';

//import {useUser} from '../contexts/UserContext';

import { useNavigate } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//
import { doc, updateDoc } from 'firebase/firestore';

function ProfSetup(){
  //const { setSetUpComplete } = useUser();
  
  const navigate = useNavigate(); 

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    //setSetUpComplete(true);
    navigate('/');
  };
  

  console.log("In prof setup");
console.log("Hi");
 return (
      <div className="App__sign-in">
        <div className="container">
        <div className="bigcontainer">
        <span className="logoContainer">
      <img className="loginlogo" src="/FitOutLogo.webp"></img>
      </span>

      <form className="loginform" id="userform" onSubmit={handleSubmit}>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <br />
        <input className="signIn" type="submit" value="Log in" /> {/* Changed to type="submit" */}
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