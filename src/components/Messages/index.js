import React from 'react'
import './styles.css'
function Messages({message,timestamp,user,userImage}) {
      return (
            <div className="messages">
                  <img src={userImage}/>
                  <div className="message_info">
                     <h4>{user} 
                     <span className="time">{ new Date(timestamp?.toDate()).toUTCString()}</span></h4>
                     <p>{message}</p>
                  </div>
            </div>
      )
}

export default Messages
