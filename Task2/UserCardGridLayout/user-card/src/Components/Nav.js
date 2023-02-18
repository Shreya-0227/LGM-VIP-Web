import React from 'react'
import './Nav.css'

export default function Navbar({ getData }) {

    return (
        <nav className="navbar">
            <div className="btn">
                <button onClick={getData}>Get Users</button>
            </div>
        </nav>
    )
}