import React from 'react';
import Map from '../components/Map';
import { Link } from 'react-router-dom';
import SearchBox from '../components/searchbox';


const Findchurch = () => (
    <div>
        <div className='addchurch-link'>
            <Link id='addchurchlink' to="/addchurch">Don't see your church?</Link>
        </div>

        <SearchBox></SearchBox>   

        <Map />  
        
       

    </div>
);

export default Findchurch;