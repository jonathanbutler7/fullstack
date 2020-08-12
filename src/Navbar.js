import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/get"><h3>Get</h3></Link>
            <Link to="/post"><h3>Post</h3></Link>
            <Link to="/patch"><h3>Patch</h3></Link>
            <Link to="/delete"><h3>Delete</h3></Link>
        </div>
    )
}

export default Navbar
