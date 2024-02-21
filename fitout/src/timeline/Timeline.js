import React from 'react'
import Post from './posts/Post'
import Suggestions from './Suggestions'
import "./Timeline.css"
import Topnav from "../navigation/Topnav"

function Timeline() {
  
  return (
    <div>
      <Topnav/> 
    <div className="timeline">
    <div className="timeline__left">
      <div className="timeline__posts">
        <Post/>
      </div>
    </div>
    <div className="timeline__right">
      <Suggestions />
    </div>
  </div>
  </div>
  );
}

export default Timeline