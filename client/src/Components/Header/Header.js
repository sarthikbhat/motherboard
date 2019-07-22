import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className="Header" >
                <div className="logoAligner" >
                    <div className="centralizer"></div>
                    <Link className="logo" to="/">mother<span>Board</span></Link>
                    <div className="centralizer"></div>
                </div>
            </div>
        )
    }
}
