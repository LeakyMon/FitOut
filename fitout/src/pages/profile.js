import React from 'react'
import "./profile.css"
import {useContext} from 'react'
import {useUser} from "../contexts/UserContext"


function Profile() {
    const user = useUser();
    
    return (
        <main>
            {user ? (
                <><div className="profileContainer">
                    <div className="ProfileHeader">
                        <img className="pfp" src={user.profilePicture || ""} alt="Profile" />
                        <div className="profileInfoAndActions">
                            <div className="profileInfo">
                                <div><strong>{user.numPosts}</strong> Posts&nbsp;&nbsp;&nbsp;</div>
                                <div><strong>{user.followerCount}</strong> Followers&nbsp;&nbsp;&nbsp;</div>
                                <div><strong>{user.followingCount}</strong> Following</div>
                            </div>
                            <button className="followButton">Follow</button>
                            
                        </div>
                    </div>

                </div>
                <div className="ProfileValues">
                    <h3>{user.username}</h3>
                </div></>
            ) : (
                <p>Loading user data...</p>
            )}
        </main>
    )
}

export default Profile;