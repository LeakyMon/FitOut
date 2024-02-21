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
    <div className="post">
    <div className="post__header">
      <div className="post__headerAuthor">
      </div>
    </div>
    <div className="post__image">
      <img src={img} alt="Post Image" />
    </div>
    <div className="post__footer">
      <div className="post__footerIcons">
        <div className="post__iconsMain">
        </div>
        <div className="post__iconSave">
        </div>
      </div>
    </div>
  </div>
  )
}

//export default createPost