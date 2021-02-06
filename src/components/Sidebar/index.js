import { Add, Apps, BookmarkBorder, Create, Drafts, ExpandLess, FiberManualRecord, FilterList, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import "./styles.css"
import SidebarOption from '../SidebarOption'
import { db } from '../../firebase'
import { useStateValue } from '../../StateProvider'
function Sidebar() {
      const[{user}] = useStateValue()

      const [channels,setChannel] = useState([])
      useEffect(()=>{
              db.collection('rooms').onSnapshot((snapshot)=>(
                    setChannel(snapshot.docs.map(doc=>({
                          id: doc.id,
                          name:doc.data().name
                    })))
              ))
      },[])
      return (
            <div className="sidebar">
                  <div className="sidebar_header">
                        <div className="info">
                        <h2>Hi Programers</h2>
                        <h3>
                              <FiberManualRecord/>
                              {user?.displayName}
                        </h3>
                        </div>
                        <Create/>
                        
                  </div>
                  <SidebarOption Icon={InsertComment} title={"Threads"}/>
                  <SidebarOption Icon={Inbox} title={"Mention & reaction"}/>
                  <SidebarOption Icon={Drafts} title={"Saved items"}/>
                  <SidebarOption Icon={BookmarkBorder} title={"Channel browser"}/>
                  <SidebarOption Icon={PeopleAlt} title={"People & user groups"}/>
                  <SidebarOption Icon={Apps} title={"Apps"}/>
                  <SidebarOption Icon={FilterList} title={"File browser"}/>
                  <SidebarOption Icon={ExpandLess} title={"Show less"}/>
                  <hr/>
                  <SidebarOption Icon={ExpandLess} title={"Channels"}/>
                   <hr/>
                   <SidebarOption Icon ={Add} addChannelOption title="Add channel"/>

                   {channels.map((item)=>{
                         return <SidebarOption title={item.name} id={item.id}/>
                   })}

                       
            </div>
      )
}

export default Sidebar
