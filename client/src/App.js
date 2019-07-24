import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Chat from './Components/Chat/Chat'
import Login from './Components/Login/Login'

class App extends React.Component {
  render() {
    var x=localStorage.getItem('mBKey')==null?(
      <Route path="/" render={()=><Login/>}/>
    ):(null)
    return (
      <Router>
        <Switch>
          {x}
          <Route exact path="/" render={()=><Layout child={<Chat/>} />}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
