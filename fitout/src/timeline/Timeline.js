import React from 'react'
import Post from './posts/Post'
import Suggestions from './Suggestions'
import "./Timeline.css"

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post/>
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions/>
      </div>
    </div>
  )
}

export default Timeline