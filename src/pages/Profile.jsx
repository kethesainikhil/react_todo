import React, { useContext } from 'react'
import { Context } from '../main'

const Profile = () => {
     const {user,isAutheticated,loading}=useContext(Context);

  return (
    <div>
        <h3>username:{user.name}</h3>
        <br />
        <h4>email:{user.email}</h4>
    </div>
  )
}

export default Profile
