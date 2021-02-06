import React from 'react'
import {useStateValue} from './StateProvider'
import './App.css';

import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Login from './Pages/Login'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Chat from './Pages/Chat';
function App() {
 
  const [{user},dispatch] = useStateValue()
  return (
    <div className="app">
      <Router>
        {!user ? <Login/>:(<>
          <Header/> 
      <div className="app_body">
        <Sidebar/>
        <Switch>
        <Route path="/room/:roomId">
            <Chat/>
          </Route>
          <Route path="/">
              <h1>Hi Guys</h1>
          </Route>
         
        </Switch>

      </div>
        </>)}
      
      </Router>
    </div>
  );
}

export default App;
