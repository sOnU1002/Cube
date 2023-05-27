import { Avatar } from '@mui/material'
import React from 'react'
import './Message.css'



function Message( {timestamp , message ,  user}) {

  return (
    <div className="message">
        <Avatar src={user.photo}/>
        {/* <Avatar /> */}
        <div className="info">
            <h4>
             {user.displayName}
                <span className='timestamp'>
                    {new Date(timestamp?.toDate()).toUTCString()}
                </span>
            </h4>
            <p>{message}</p>
            {/* <p>message</p> */}
            
        </div>
    </div>
  )
}

export default Message