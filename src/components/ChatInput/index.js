import React,{useState} from 'react'
import './styles.css'
import firebase from 'firebase'
import {Button} from '@material-ui/core'
import {useStateValue} from '../../StateProvider'

import {db} from '../../firebase'
function ChatInput({channelName,channelId}) {
      const [input,setInput] = useState('')
      const [{user}] = useStateValue()
      const sendMessage = (e)=>{
            e.preventDefault();
            if(channelId){
                   db.collection('rooms').doc(channelId)
                   .collection('messages').add({
                         message:input,
                         timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                         user:user.displayName,
                         userImage:user.photoURL
                   })
            }
            setInput('');

      }
      return (
            <div className="chatInput">
               <form>
                     <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
                     <Button className="button1" type="submit" onClick={sendMessage}>SEND</Button>
               </form>
                  
            </div>
      )
}

export default ChatInput
