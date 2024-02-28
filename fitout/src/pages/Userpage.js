import React, { useContext, useState, useEffect } from 'react';
import {useUser} from "../contexts/UserContext"
//import {UseFetchPosts} from "../timeline/posts/getUserPosts"
import {displayPostOnProfile} from "../timeline/posts/createPost"
import { useParams } from 'react-router-dom';
import { getUserData, getUserPosts } from '../firebase/firebase';
import {useUserPosts} from '../timeline/posts/useFetchPosts';
function Userpage() {
    const { uid } = useParams();
    const posts = useUserPosts(uid);
    //const user = getUserData(uid);
    const [user,setUser] = useState("");
    console.log(uid + posts);
   
    useEffect(()=>{
        const fetchUserData = async () => {
            const userData = await getUserData(uid);
            setUser(userData);
        };
    
        // Call the async function
        fetchUserData();
    },[uid]);

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
                        <button className="follow__button">Follow</button>
                        <p className="bio">{user.bio}</p>
                    </div>
                </div>
            </div>
            {posts.map(post => (
                <div className="card">
                    <figure className="image">
                        {displayPostOnProfile(post.creatorUserName, post.imageURL, post.caption, post.numLikes)}
                    </figure>
                </div>
            ))}

            </>
        ) : (
            <p>Loading user data...</p>
        )}
       
     
    
    </main>
    );
}

export default Userpage;