import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <nav>
            <img className='logo' src="https://www.transparentpng.com/thumb/church/SqGYE5-church-clipart-photos.png" alt="Church Clipart Photos @transparentpng.com"></img>
            <h1>Church Finder</h1>
            <ul className='nav-links'>
                <Link className='routelink' to='/'>
                    <li>Home</li>
                </Link>
                <Link className='routelink' to='/login'>
                    <li>Login</li>
                </Link>
                <Link className='routelink' to='/signup'>
                    <li>Sign Up</li>
                </Link>
                <Link className='routelink' to='addchurch'>
                    <li>Add Church</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;

