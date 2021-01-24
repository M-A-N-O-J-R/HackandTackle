import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export class navbar2 extends Component {
    render() {
        return (
            <div className="nav-list">
                <nav className="nav-class">
                <div className="logo">
                    <img  src="https://ssnhackandtackle.com/img/ssn1.png" alt="ssn-logo" id="ssn-logo" width="60px"/>
                    <img src="https://ssnhackandtackle.com/img/ieeel.png" alt="ieee-logo" id="ieee-logo" width="60px"/>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                </nav>
            </div>
        )
    }
}

export default navbar2
