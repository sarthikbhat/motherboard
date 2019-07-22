import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './Components/Layout/Layout'
import Chat from './Components/Chat/Chat'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={()=><Layout child={<Chat/>} />}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
