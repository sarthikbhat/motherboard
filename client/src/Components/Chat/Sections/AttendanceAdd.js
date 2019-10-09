import React, { Component } from 'react';
import './AttendanceAdd.scss';
import Forum from '@material-ui/icons/Forum';
import ContactBar from './ContactBar/ContactBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AdderAttend from './Attendance/AdderAttend';

export default class AttendanceAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0, openContactBar: false };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  contactBarToggler = () => {
    this.setState(
      prevState => {
        return {
          openContactBar: !prevState.openContactBar
        };
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    var listStud = this.state.openContactBar ? 'listStud show' : 'listStud';
    return (
      <div id="chatBody">
        <div id="chatSect">
          <AdderAttend/>
          {console.log('hello')}
        </div>
        <div className={listStud}>
          {this.state.openContactBar ? <ContactBar /> : null}
          {this.state.width <= 600 ? (
            <button
              style={{
                position: 'fixed',
                background: 'rgb(256,256,256)',
                left: -55,
                marginTop: 30,
                padding: 12,
                paddingRight: 16,
                paddingBottom: 10,
                borderRadius: 6
              }}
              onClick={this.contactBarToggler}
            >
              <Forum />
            </button>
          ) : (
            <ContactBar />
          )}
        </div>
        {this.state.openContactBar === true ? (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'rgba(0,0,0,0.7)',
              zIndex: 100
            }}
            onClick={this.contactBarToggler}
          ></div>
        ) : null}
      </div>
    );
  }
}
