import { InfoOutlined, StarBorderOutlined } from '@material-ui/icons'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import Messages from '../../components/Messages'
import {db} from '../../firebase'
import './styles.css'
import ChatInput from '../../components/ChatInput'

import './styles.css'
function Chat() {
      const {roomId} = useParams()
      const [roomDetail,setRoomDetail] = useState(null)
      const [roomMessages,setRoomMessage] = useState([])
      useEffect(()=>{
       if(roomId) {
             db.collection('rooms')
             .doc(roomId)
             .onSnapshot(snapshot=>(
              setRoomDetail(snapshot.data())
             ))
       }
     
       db.collection('rooms').doc(roomId)
       .collection('messages')
       .orderBy('timestamp','asc')
       .onSnapshot(snapshot=>(
             setRoomMessage(snapshot.docs.map(doc=>doc.data()))
       )
       )
       


      },[roomId])
     console.log(roomDetail?.name)
     console.log(roomDetail?.id)

     console.log(roomMessages)

      
      

      return (
            <div className="chat">
                  <div className="chat_header">
                        <div className="header_left">
                              <h4 className="chat_name">
                                    <strong># {roomDetail?.name}</strong>
                                    <StarBorderOutlined/>
                              </h4>
                        </div>
                        <div className="header_right">
                              <p>
                                    <InfoOutlined/> Details
                              </p>
                        </div>
                  </div>
                  <div className='chat_messages'>
                        {roomMessages.map((item)=>(
                            <Messages 
                            message={item.message}
                            timestamp={item.timestamp}
                            user={item.user}
                            userImage={item.userImage}
                            
                            />
                        ))}
       
                        {console.log(roomDetail)}
                        {console.log(roomMessages)}
                  </div>
                  <ChatInput channelName={roomDetail?.name} channelId={roomId}/>
                  
            </div>
      )
}

export default Chat
