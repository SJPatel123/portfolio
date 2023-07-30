import React from 'react'
import './navbar.css'


export default function Navbar() {
    return (
        <>
            <div className="nav-main">
                <div className="mylogo">
                    <p>Snej Hirpara</p>
                </div>
                <input type="checkbox" id="nav-toggle" className="nav-toggle" />
                <label htmlFor="nav-toggle" className="nav-toggle-label">
                    <span></span>
                </label>
                <div className="nav-items">
                    <ul className="items">
                        <li className="active" style={{ "--i": "1" }}>Home</li>
                        <li style={{ "--i": "2" }}>About</li>
                        <li style={{ "--i": "3" }}>Skills</li>
                        <li style={{ "--i": "4" }}>Contact</li>
                        <li style={{ "--i": "5" }}>Portfolio</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
