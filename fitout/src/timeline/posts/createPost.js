import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

import "./Post.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


export function createPost(username, img, caption, likes) {
  return (
    <div className="post">
    <div className="post__header">
      <div className="post__headerAuthor">
        <Avatar style={{ marginRight: "10px" }}>
          <img className="logo"src={img}></img>
        </Avatar>{username}
        {username} • 
      </div>
      <MoreHorizIcon />
    </div>
    <div className="post__image">
      <img src={img} alt="Post Image" />
    </div>
    <div className="post__footer">
      <div className="post__footerIcons">
        <div className="post__iconsMain">
          <FavoriteBorderIcon className="postIcon" />
          <ChatBubbleOutlineIcon className="postIcon" />
          <TelegramIcon className="postIcon" />
          <p>Hello {caption}</p>
        </div>
        <div className="post__iconSave">
          <BookmarkBorderIcon className="postIcon" />
        </div>
      </div>
      Liked by {likes} people.
    </div>
  </div>
  )
}

//export default createPost