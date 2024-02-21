import React from 'react'
import "./profile.css"
import {useContext} from 'react'
import {useUser} from "../contexts/UserContext"


function Profile() {
    const user = useUser();
    
    return (
        <main>
        {user ? (
            <>
            <div className="profileContainer">
                <div className="ProfileHeader">
                    <div className="pfpAndUsername">
                        <img className="pfp" src={user.profilePicture || ""} alt="Profile" />
                        <h3 className="username">{user.username}</h3>
                    </div>
                    <div className="profileInfoAndActions">
                        <div className="profileInfo">
                            <div><strong>{user.numPosts}</strong> Posts&nbsp;&nbsp;&nbsp;</div>
                            <div><strong>{user.followerCount}</strong> Followers&nbsp;&nbsp;&nbsp;</div>
                            <div><strong>{user.followingCount}</strong> Following</div>
                        </div>
                        <button className="followButton">Follow</button>
                        <p class="bio">temp bio goes here{user.bio}</p>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <p>Loading user data...</p>
        )}
    </main>
    )
}

export default Profile;