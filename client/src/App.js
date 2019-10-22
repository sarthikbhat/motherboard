import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Chat from './Components/Chat/Chat'
import Login from './Components/Login/Login'
import Forgot from './Components/Forgot/forgot';
import axios from 'axios'
import Grievances from './Components/Chat/Sections/Grievances';
import Events from './Components/Chat/Sections/Events';
import Community from './Components/Chat/Sections/Community';
import Notes from './Components/Chat/Sections/Notes';
export const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

class App extends React.Component {
  render() {
    var x=localStorage.getItem('mBKey')==null?(
      <Fragment>
      <Route exact path="/forgot" component={Forgot}/>
      <Route path="/" render={()=><Login/>}/>
      </Fragment>
    ):(null)
    return (
      <Router>
        <Switch>
          {/* {x}
           */}
           {localStorage.getItem('mBKey')==null?
           <Route exact path="/forgot" component={Forgot}/>:null
           }
           {localStorage.getItem('mBKey')==null?
           <Route path="/" render={()=><Login/>}/>:null
           }
          <Route exact path="/" render={()=><Layout child={<Chat/>} />}/>
          <Route exact path="/chats" render={()=><Layout child={<Chat/>} />}/>
          <Route exact path="/grievances" render={()=><Layout child={<Grievances/>} />}/>
          <Route exact path="/events" render={()=><Layout child={<Events/>} />}/>
          <Route exact path="/responses" render={()=><Layout child={<Community/>} />}/>
          <Route exact path="/notes" render={()=><Layout child={<Notes/>} />}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
