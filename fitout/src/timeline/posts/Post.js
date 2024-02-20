import React from 'react'
import "./Post.css"

function Post({ user, postImage, likes, timestamp }) {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__headerAuthor">
        </div>
      </div>
      <div className="post__image">
        <img src="" alt="Post Image" />
      </div>
      <div className="post__footer">
        <div className="post__footerIcons">
          <div className="post__iconsMain">  
          </div>
          <div className="post__iconSave">
          </div>
        </div>
        Liked by {likes} people.
      </div>
    </div>
  )
}

export default Post