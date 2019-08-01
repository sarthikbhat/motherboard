import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Chat from './components/Chat/Chat'
import Login from './components/login/login'
import Forgot from './components/Forgot/forgot';

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
        </Switch>
      </Router>
    );
  }
}

export default App;
