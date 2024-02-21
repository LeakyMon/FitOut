import React from 'react'
import "./Topnav.css"
import {Avatar} from "@mui/material"

function Topnav() {
  return (
    <div className="abovePost">
        <p className="line">New social media FitOut! Connect with your friends, post your outfits and more!</p>
        <Avatar className="RightProfile" >
            <img className="logo"src="/FitOutLogo.webp"></img>
        </Avatar>
    </div>
  )
}

export default Topnav