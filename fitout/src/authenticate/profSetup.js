
import React from 'react'; 
import { signInWithGoogle, signOut } from "../firebase/firebase";
import styles from './sign-up.css';
//import {UpdateUserInformation } from '../contexts/UserContext';
//import {useUser} from '../contexts/UserContext';
import { updateUserInformation } from '../userdata/userdata';
import { useNavigate, useParams } from 'react-router-dom';
//-----------------SIGN IN PAGE-----------------//
import { useUser } from '../contexts/UserContext';
function ProfSetup(){
  //const { setSetUpComplete } = useUser();
  const navigate = useNavigate(); 

  const {uid} = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const bio = formData.get('bio'); // Name attribute of the input field
    const username = formData.get('username'); // Name attribute of the input field
    const pfp = formData.get('pfp'); // Name attribute of the input field
    console.log("Prepping update");
    updateUserInformation(uid,bio,username,pfp);
    console.log("Updated?");
    //setSetUpComplete(true);
    navigate('/');
  };
  

  console.log("In prof setup");
console.log("Hi");
   return (
    <div className="container">
    <div className="bigcontainer">
    <span className="logoContainer">
  <h2>Finish Setting up Your Account</h2>
  <br></br>
  </span>
    
    <form text="test"class="signinform"onSubmit={handleSubmit} id="userform" value="Enter Username">
     <input type="text" placeholder="Bio" name="bio"></input>
     <input type="text" placeholder="Username"name="username"></input>
     <input type="text" placeholder="Profile Picture"name="pfp"></input>
    <br></br>
     <input className="signUp"type="submit" value="Complete Setup"></input>
    </form>
   

  </div>
      </div>
   );
    
   }

export default ProfSetup;
//322347656923-o7dnlkjloo9cookglcqgql50fjr9kcvb.apps.googleusercontent.com