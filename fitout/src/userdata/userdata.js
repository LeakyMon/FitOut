import React, { useState } from 'react'

import {useUser} from "../contexts/UserContext"


function userdata() {



    const user = useUser();

    const [bio,setBio] = useState('');
    const [profilePicture,setProfilePicture] = useState('');
    const [username, setUsername] = useState('');



  return (

        

    <div>userdata</div>


  )
}

export default userdata