import React from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'
import {db} from '../../firebase'
function SidebarOption({Icon,title,id,addChannelOption}) {
      const history = useHistory()
      const selectChannel = ()=>{
            if(id){
                history.push(`/room/${id}`)
            } else {
                  history.push('title')
            }
      }

      const addChannel = ()=>{
            const channelName = prompt('Please enter channel name')
            if (channelName) {
                  db.collection('rooms').add({
                        name:channelName,
                  
                  })
            }
      }
      return (
            <div className="sidebar_option" onClick={addChannelOption? addChannel:selectChannel}>
                  {Icon && <Icon className="icon"/>}
                  {Icon ?(
                        <h3>{title}</h3>
                  ):<h3 className="chanel"> <span className="hash">#</span> {title}</h3>}
            </div>
      )
}

export default SidebarOption
