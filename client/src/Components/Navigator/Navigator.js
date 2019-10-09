import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navigator.scss';

export default class Navigator extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="navigateOuterBox" style={{ height: window.innerHeight - 69 }}>
          <div id="navigate">
            <Link to="/chats" className="content" id="chats">
              <h3>Chats</h3>
            </Link>
            <Link to="/grievances" className="content" id="grievances">
              <h3>Grievances</h3>
            </Link>
            <Link to="/responses" className="content" id="responses">
              <h3>Responses</h3>
            </Link>
            <Link to="/notes" className="content" id="notes">
              <h3>Notes</h3>
            </Link>
            <Link to="/events" className="content" id="events">
              <h3>Events/Calander</h3>
            </Link>
            <Link to="/attendance" className="content" id="attendance">
              <h3>Attendance</h3>
            </Link>
            <Link to="/attendanceadd" className="content" id="attendance">
              <h3>Attendance Add</h3>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
