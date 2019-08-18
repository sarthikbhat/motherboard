import React, { Component } from 'react'
import './Navigator.scss'

export default class Navigator extends Component {
    render() {
        return (
            <React.Fragment>
            <div id="navigateOuterBox" style={{ height: window.innerHeight - 69 }} >
                <div id="navigate">
                    <div className="content"><h3>Chats</h3></div>
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
