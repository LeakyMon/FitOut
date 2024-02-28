import React, { useContext, useState, useEffect } from 'react';
import "./profile.css"

import {useUser} from "../contexts/UserContext"
import {usePosts} from "../timeline/posts/getUserPosts"
import {displayPostOnProfile} from "../timeline/posts/createPost"

function Profile() {
    const user = useUser();
    const posts = usePosts();
    //const [posts, setPosts] = useState([]);
    return (
        <main>
        {user ? (
            <>
            <div className="profileContainer">
                <div className="ProfileHeader">
                    <div className="pfpAndUsername">
                        <img className="pfp" src={user.profilePicture || ""} />
                        <h3 className="username">{user.username}</h3>
                    </div>
                    <div className="profileInfoAndActions">
                        <div className="profileInfo">
                            <div><strong>{user.numPosts}</strong> Posts&nbsp;&nbsp;&nbsp;</div>
                            <div><strong>{user.followerCount}</strong> Followers&nbsp;&nbsp;&nbsp;</div>
                            <div><strong>{user.followingCount}</strong> Following</div>
                        </div>
                        <br></br>
                        <button className="follow__button">Edit Account</button>
                        <p className="bio">{user.bio}</p>
                    </div>
                </div>
            </div>
            {posts.map(post => (
                <div className="postContainer">
                <div className="card">
                    <figure className="image">
                        {displayPostOnProfile(post.creatorUserName, post.imageURL, post.caption, post.numLikes)}
                    </figure>
                </div>
                </div>
            ))}

            </>
        ) : (
            <p>Loading user data...</p>
        )}
       
     
    
    </main>
    )
}

export default Profile;