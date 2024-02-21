import React from 'react'
import "./profile.css"
import {useContext} from 'react'
import {useUser} from "../contexts/UserContext"


function Profile() {
    const user = useUser();
    
    return (
        <div>
      {user ? (
        <div>
          <h1>Username: {user.username   }</h1>
          {/* Display user information */}
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    
  )
}

export default Profile;