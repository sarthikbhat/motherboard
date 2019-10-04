import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.scss';

export default class Navigator extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navigateOuterBox" style={{ height: window.innerHeight - 69 }}>
          <div id="navigate">
            <Link to="/chats" className="content">
              <h3>Chats</h3>
            </Link>
            <Link to="/grievances" className="content">
              <h3>Girevances</h3>
            </Link>
            <Link to="/community" className="content">
              <h3>Community</h3>
            </Link>
            <Link to="/notes" className="content">
              <h3>Notes</h3>
            </Link>
            <Link to="/events" className="content">
              <h3>Events/Calander</h3>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
