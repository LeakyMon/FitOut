import React from 'react'
import "./Suggestions.css"

function Suggestions() {
  return (
    <div className="suggestions">
    <div className="suggestions__title">Suggestions for you</div>
    <div className="suggestions__usernames">
      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            
          </span>
          <div className="username__info">
            <span className="username">Hi</span>
            <span className="relation">Message Here</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            
          </span>
          <div className="username__info">
            <span className="username">user</span>
            <span className="relation">Message Here</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            
          </span>
          <div className="username__info">
            <span className="username">Mackelmore</span>
            <span className="relation">Message Here</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>

      <div className="suggestions__username">
        <div className="username__left">
          <span className="avatar">
            
          </span>
          <div className="username__info">
            <span className="username">userName</span>
            <span className="relation">Message Here</span>
          </div>
        </div>
        <button className="follow__button">Follow</button>
      </div>
    </div>
  </div>
  )
}

export default Suggestions