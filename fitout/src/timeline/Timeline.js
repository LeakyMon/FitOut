import React from 'react'
import Post from './posts/Post'

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          <Post/>
        </div>
      </div>
      </div>
  )
}

export default Timeline