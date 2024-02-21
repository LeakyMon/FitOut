import React from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar } from "@mui/material";

import "./feed.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";


export function createPost(username, img, caption, likes) {
  return (
   
    <div>
    <div className="post__image">
      <img className="topIMG" src={img} alt="Post Image" />
    </div>
    </div>
 
  )
}

//export default createPost