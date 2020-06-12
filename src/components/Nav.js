import React from 'react';
import { Link } from 'react-router-dom';

function Nav () {
    const navStyle = {
        color: 'white'
    }
    
    return (
        <nav>
            <h1>Church Finder</h1>
            <ul className='nav-links'>
                <Link style={navStyle} to='/'>
                <li>Home</li>
                </Link>
                <Link style={navStyle} to='/login'>
                <li>Login</li>
                </Link>
                <Link style={navStyle} to='/signup'>
                <li>Sign Up</li>
                </Link>
                <Link style={navStyle} to='addchurch'>
                <li>Add Church</li>
                </Link>               
            </ul>
        </nav>
    );
}

export default Nav;

