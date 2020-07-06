import React from 'react';
import { Link } from 'react-router-dom';




const Home = () => (
    <div id='background-container'>
        <img id='home-background-img' src='background.jpg' alt='homepage-background'></img>
        <div className='home-text'>
            
            <h1>Find Your Home Church</h1>
            <br></br>
            <div>
            <button onClick={e => window.location.href = '/Findchurch'}>Find A Church</button> 

            <button onClick={e => window.location.href = '/Addchurch'}>Add Your Church</button>
            </div>
           
        </div>

    </div>


);

export default Home;
