import React, { useContext, useState, useEffect } from 'react';
import "./profile.css"

import {useUser} from "../contexts/UserContext"
import {usePosts} from "../timeline/posts/getUserPosts"

function Profile() {
    const user = useUser();
    const posts = usePosts();

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
                        <p className="bio">temp bio goes here{user.bio}</p>
                    </div>
                </div>
            </div>
            <div className="postsGrid">
                
                        {posts.map(post => (
                            <div key={post.creator} className="postItem">
                            {console.log(post.caption)/* Content of the post */}
                            </div>
                        ))}
                    </div>
            </>
        ) : (
            <p>Loading user data...</p>
        )}
       
     
    
    </main>
    )
}

export default Profile;