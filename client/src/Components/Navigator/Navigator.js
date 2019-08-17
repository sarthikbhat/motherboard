import React, { Component } from 'react'
import './Navigator.scss'

export default class Navigator extends Component {
    render() {
        return (
            <React.Fragment>
            <div className="nav-header" >
                <div className="navigators">
                    <h3>CHATS</h3>
                </div>
            </div>
            <div id="navigateOuterBox" style={{ height: window.innerHeight - 148 }} >
                <div id="navigate">
                    <div className="content"><h3>Girevances</h3></div>
                    <div className="content"><h3>Community</h3></div>
                    <div className="content"><h3>Notes</h3></div>
                    <div className="content"><h3>Events/Calander</h3></div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}
