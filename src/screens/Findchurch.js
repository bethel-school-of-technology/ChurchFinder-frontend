import React from 'react';
import Map from '../components/Map';
import { Link } from 'react-router-dom';
import ChurchSearch from '../components/churchsearch';


const Findchurch = () => (
    <div>
        <div className='addchurch-link'>
            <Link id='addchurchlink' to="/addchurch">Don't see your church?</Link>
        </div>

        <Map />  
        
        <ChurchSearch></ChurchSearch>    

    </div>
);

export default Findchurch;