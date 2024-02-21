import React from 'react'
import "./profile.css"
import {useContext} from 'react'
import {useUser} from "../contexts/UserContext"


function Profile() {
    const user = useUser();
    
    return (
        <main>
            {user ? (
                <div>
                <div className="ProfileHeader">
                    <img className="pfp" src={user ? user.profilePicture : ""} />
                    <div className="profileInfo">
                    <p><strong>{user.numPosts}</strong> Posts &nbsp; &nbsp; &nbsp;</p>
                    <p><strong>{user.followerCount}</strong> Followers &nbsp; &nbsp; &nbsp;</p>
                    <p><strong>{user.followingCount}</strong> Following &nbsp; &nbsp; &nbsp;</p>
                    </div> 
                </div>
                <div className="ProfileValues">
                    <h3>{user.username}</h3>
                </div>
                <div className="ProfileSettings">
                    
                </div>

                </div>
        
            ) : (
                <p>Loading user data...</p>
            )}
        </main>
    )
}

export default Profile;