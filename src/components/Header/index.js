import React from 'react'
import './styles.css'
import {Avatar} from '@material-ui/core'
import { AccessTime, Help, HelpOutline, Search } from '@material-ui/icons'
import { useStateValue } from '../../StateProvider'
function Header() {
      const [{user}]= useStateValue()
      return (
          
            <div className="header">
                  <div className='left'>
                        <Avatar
                        className="avatar"
                        alt={"Shokh"}
                        src={user?.photoURL}
                        />
                        <AccessTime/>
                  </div>
                  <div className="search">
                        <Search/>
                        <input type="text" placeholder="Search"/>

                  </div>
                  <div className='right'>
                        <HelpOutline/>
                  </div>
            </div>
      )
}

export default Header
